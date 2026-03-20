import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

// Correcting the project ID from .env
const connectionString = "postgresql://postgres.tbremhlevouheksufsyp:shophsga3005@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
console.log("Testing connection to:", connectionString);

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function check() {
    try {
        const result = await (prisma as any).$queryRaw`SELECT 1`;
        console.log("SUCCESS:", result);
    } catch (e) {
        console.error("FAILURE:", e);
    } finally {
        await prisma.$disconnect();
    }
}

check();
