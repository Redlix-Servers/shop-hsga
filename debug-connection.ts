import { Pool } from 'pg';
import dns from 'dns';

/**
 * MANUAL DATABASE DEBUG SCRIPT
 * Run with: npx tsx debug-connection.ts
 * 
 * Update these values to test what's wrong with your Supabase connection.
 */
const config = {
    user: "postgres.cytnyjsnvmabhkvolgiu", // Format: postgres.[project-ref]
    password: "hsgashoptelanagana",
    host: "aws-1-ap-south-1.pooler.supabase.com", // Try aws-0 OR aws-1
    port: 6543,
    database: "postgres",
};

const directHost = `db.${config.user.split('.')[1]}.supabase.co`;

async function testSQL() {
    console.log("------------------------------------------");
    console.log(`🔍 DEBUG: Testing database connection...`);
    console.log(`📡 Host: ${config.host}:${config.port}`);
    console.log(`👤 User: ${config.user}`);
    console.log("------------------------------------------");

    // Test DNS for direct host (if this fails, project ID is wrong)
    console.log(`\n1. Checking DNS for ${directHost}...`);
    dns.lookup(directHost, (err, address) => {
        if (err) {
            console.error(`❌ DNS Lookup failed! The project ID ${config.user.split('.')[1]} might be incorrect or deleted.`);
        } else {
            console.log(`✅ Project host resolved to: ${address}`);
        }
    });

    // Test Postgres connection
    console.log(`\n2. Attempting raw SQL connection...`);
    const pool = new Pool(config);

    try {
        const start = Date.now();
        const client = await pool.connect();
        const end = Date.now();
        console.log(`✅ SUCCESS! Connected in ${end - start}ms`);
        
        const res = await client.query('SELECT current_database(), current_user, now()');
        console.log("📊 QUERY RESULT:", res.rows[0]);
        
        client.release();
    } catch (err: any) {
        console.error(`❌ SQL ERROR: ${err.message}`);
        console.error(`🚨 CODE: ${err.code}`);
        
        if (err.message.includes("Tenant or user not found")) {
            console.log("\n💡 ANALYSIS: 'Tenant or user not found' means Supavisor (pooler) doesn't recognize your project ID.");
            console.log("   Potential causes:");
            console.log("   1. Typo in project ref: 'tbremhlevouheksufsyp'");
            console.log("   2. Project is PAUSED - go to Supabase dashboard and resume it.");
            console.log("   3. Wrong region - verify if your project is in 'ap-south-1'.");
        }
    } finally {
        await pool.end();
    }
}

testSQL();
