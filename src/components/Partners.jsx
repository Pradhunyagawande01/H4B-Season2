// // src/components/PartnersSection.jsx
// import React from "react";

// const partners = [
//   {
//     name: "India's Got Latent",
//     // Replace with your actual logo path
//     src: "/logos/indias-got-latent.png",
//     // Using a placeholder style since I don't have the actual asset
//     placeholder: "INDIA'S GOT\nLATENT",
//     style: "stylized"
//   },
//   {
//     name: "Farcaster",
//     src: "/logos/farcaster.png",
//     placeholder: "F",
//     style: "circle"
//   },
//   {
//     name: "ar.io",
//     src: "/logos/ario.png",
//     placeholder: "ar.io",
//     style: "ario"
//   },
//   {
//     name: "Longview Labs",
//     src: "/logos/longview-labs.png",
//     placeholder: "Longview Labs",
//     style: "labs"
//   },
//   {
//     name: "Forward Research",
//     src: "/logos/forward-research.png",
//     placeholder: "forward\nresearch",
//     style: "forward"
//   },
//   {
//     name: "ar.io 2",
//     src: "/logos/ario.png",
//     placeholder: "ar.io",
//     style: "ario"
//   }
// ];

// export default function PartnersSection() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-[1500px] px-6 py-20">
//         {/* Header - Right Aligned */}
//         <div className="text-right mb-16">
//           <h2 className="text-[#3B4421] font-extrabold uppercase leading-[0.95] tracking-wide text-[30px] md:text-[20px] lg:text-[50px] title">
//             OUR PARTNERS
//           </h2>
//           <p className="mt-4 text-black uppercase tracking-wider text-[20px] md:text-[10px] lg:text-[20px] text">
//             SUPPORT AND COLLABORATORS ON OUR JOURNEY
//           </p>
//         </div>

//         {/* Partners Logos Row */}
//         <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-16 md:h-20 opacity-80 hover:opacity-100 transition-opacity duration-300"
//             >
//               {/* If you have actual images, use this: */}
//               {/* <img
//                 src={partner.src}
//                 alt={partner.name}
//                 className="max-h-full max-w-[140px] md:max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
//               /> */}

//               {/* Placeholder representations based on the screenshot styles */}
//               {partner.style === "stylized" && (
//                 <div className="text-[#3B4421] font-black text-2xl md:text-3xl leading-tight tracking-tighter uppercase transform -rotate-2">
//                   <span className="block">INDIA'S GOT</span>
//                   <span className="block text-4xl md:text-5xl">LATENT</span>
//                 </div>
//               )}

//               {partner.style === "circle" && (
//                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black flex items-center justify-center">
//                   <span className="text-3xl md:text-4xl font-bold text-black">F</span>
//                 </div>
//               )}

//               {partner.style === "ario" && (
//                 <div className="flex items-center gap-2">
//                   <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12 fill-[#333]">
//                     <path d="M20 5 C15 5, 10 10, 10 20 C10 30, 15 35, 20 35 C25 35, 30 30, 30 20 C30 10, 25 5, 20 5 Z M18 15 C18 15, 16 18, 16 20 C16 22, 18 25, 18 25 C18 25, 14 23, 14 20 C14 17, 18 15, 18 15 Z" />
//                   </svg>
//                   <span className="text-2xl md:text-3xl font-bold text-[#333]">ar.io</span>
//                 </div>
//               )}

//               {partner.style === "labs" && (
//                 <div className="flex items-center gap-3">
//                   <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12 stroke-black fill-none" strokeWidth="2">
//                     <line x1="10" y1="30" x2="30" y2="30" />
//                     <line x1="20" y1="30" x2="20" y2="10" />
//                     <line x1="20" y1="10" x2="15" y2="5" />
//                     <line x1="20" y1="10" x2="25" y2="5" />
//                     <circle cx="20" cy="8" r="3" fill="black" stroke="none"/>
//                   </svg>
//                   <div className="text-xl md:text-2xl font-medium">
//                     <span className="text-[#333]">Longview </span>
//                     <span className="text-green-500 font-bold">Labs</span>
//                   </div>
//                 </div>
//               )}

//               {partner.style === "forward" && (
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center">
//                     <span className="text-xl font-bold text-black">f</span>
//                   </div>
//                   <div className="text-lg md:text-xl text-[#333] leading-tight">
//                     <div className="font-semibold">forward</div>
//                     <div className="text-sm">research</div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/PartnersSection.jsx
import React from "react";

const season1Partners = [
  {
    name: "India's Got Latent",
    logo: "/partners/p1.png",
  },
  {
    name: "Farcaster",
    logo: "/partners/p2.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p3.png",
  },
  {
    name: "Longview Labs",
    logo: "/partners/p4.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p5.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p6.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p7.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p8.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p9.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p10.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p11.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p12.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p13.png",
  },
  {
    name: "ar.io",
    logo: "/partners/p14.png",
  },

];

export default function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...season1Partners, ...season1Partners];

  return (
    <section className="bg-white">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>

      {/* Season 1 Partners - Continuous Scroll */}
      <div className="py-16 md:py-20 overflow-hidden ">
        {/* Header */}
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 mb-10 md:mb-12">
          <div className="text-right">
            <h2 className="text-[#3B4421] font-extrabold uppercase leading-[0.95] tracking-wide text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] title">
              our PARTNERS
            </h2>
            <p className="mt-3 md:mt-4 text-black/70 uppercase tracking-wider text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text">
              Support and collaborators on our journey
            </p>
          </div>
        </div>

        {/* Marquee Container */} 
        <div className="relative group bg-white">
          {/* Fade edges for smooth look */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex animate-scroll-left hover:[animation-play-state:paused] w-max">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 sm:mx-12 md:mx-16 lg:mx-20 h-16 sm:h-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-initial"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[200px] object-contain duration-300 grayscale hover:grayscale-0 transition-all
                  "
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}