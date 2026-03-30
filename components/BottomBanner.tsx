'use client';

import React from 'react';

const DesignerBanner = () => {
   return (
      <div className="bg-white py-8 border-t border-slate-100">
         <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side: Forge Digital Logo */}
            <div className="flex items-center gap-4">
               <a 
                  href="https://www.forgedigitaltechnologies.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform active:scale-95 block"
               >
                  <img
                     src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1773390835/Screenshot_2026-03-13_at_14.02.11-removebg-preview_lryxoy.png"
                     alt="Forge Digital Technologies"
                     className="h-9 md:h-11 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
               </a>
               <div className="hidden md:block h-8 w-px bg-slate-200" />
            </div>

            {/* Right side: Credits */}
            <div className="flex items-center gap-2">
               <p className="text-slate-500 font-normal text-[13px]">
                  Designed and Developed by <span className="text-slate-950 font-medium">Forge Digital Technologies</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default DesignerBanner;
