import React from "react";
import { Play } from "lucide-react";

export function AppDownload() {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center p-8 md:p-16">
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          {/* Left images (Phones) */}
          <div className="flex-1 relative h-[300px] md:h-[400px] w-full flex items-end justify-center z-10 order-2 md:order-1 mt-10 md:mt-0">
             <div className="relative w-48 h-[350px] bg-white rounded-[30px] shadow-2xl border-[6px] border-gray-800 translate-x-10 rotate-12 overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex flex-col">
                   <div className="bg-primary h-32 w-full"></div>
                   <div className="p-4 space-y-2">
                     <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                     <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
                     <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                   </div>
                </div>
             </div>
             <div className="relative w-56 h-[400px] bg-white rounded-[32px] shadow-2xl border-[8px] border-gray-900 -translate-x-10 z-10 overflow-hidden">
                <div className="w-full h-full bg-gray-50 flex flex-col relative">
                   <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80" alt="App screen" className="w-full h-40 object-cover" />
                   <div className="p-4 bg-white rounded-t-2xl -mt-4 relative z-10 flex-1 space-y-4">
                     <div className="flex gap-2">
                       <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div>
                       <div className="space-y-2 w-full mt-1">
                         <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                         <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                       </div>
                     </div>
                     <div className="w-full h-32 bg-gray-100 rounded-xl"></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right content */}
          <div className="flex-1 text-white z-10 text-center md:text-left order-1 md:order-2 md:pl-10">
            <span className="text-sm font-bold uppercase tracking-wider mb-2 block text-blue-200">
              Get It Now
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Download Our App <br />
              From Google & App Store!
            </h2>
            <p className="text-blue-100 max-w-md mx-auto md:mx-0 mb-8">
              Book your next trip on the go. Get exclusive mobile-only deals and manage your bookings effortlessly.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#" className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 fill-green-500"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">Get it on</div>
                  <div className="font-bold text-sm leading-tight">Google Play</div>
                </div>
              </a>

              <a href="#" className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900"><path d="M16.365 21.43c-1.144.66-2.296-.06-3.32-.06-1.025 0-2.228.736-3.32.06-2.613-1.616-5.263-7.31-2.92-11.458 1.135-2.016 3.195-3.238 5.437-3.238 1.488 0 2.825.86 3.864.86 1.05 0 2.584-.96 4.298-.82 2.373.19 4.205 1.456 5.253 3.32-4.52 2.148-3.766 8.528.878 10.37-1.156 2.83-2.93 5.46-5.172 6.777h-.002c-.896.53-2.046 1.07-3.414 1.07-1.332 0-2.47-.53-3.363-1.06l-.216-.134zm-2.003-14.773c-.15-2.583 1.954-5.01 4.542-5.462.364 2.822-2.126 5.37-4.542 5.462z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">Download on the</div>
                  <div className="font-bold text-sm leading-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
