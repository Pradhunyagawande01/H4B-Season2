import React from "react";

// --- DATA SECTION ---
const line1Partners = [
  { name: "DPIIT Startup", logo: "/Partners/DPIIT.png" },
  { name: "Sayuj", logo: "/Partners/Sayuj.png" },
  { name: "MLH", logo: "/Partners/MLH.png" },
  { name: "Guahati University", logo: "/Partners/Gauhati university.png" },
  { name: "FireBlaze", logo: "/Partners/FireBlaze.png" },
  { name: "Assam Don Bosco University", logo: "/Partners/Don Bosco University.png" },
  { name: "IIT Patna", logo: "/Partners/iitp.png" },
  { name: "Sandip University", logo: "/Partners/Sandip.png" },
  { name: "NIT Nagaland", logo: "/Partners/NIT Nagaland.png" },
  { name: "Buxar Engineering College", logo: "/Partners/Buxar.png" },
  { name: "JSS Noida", logo: "/Partners/JSS.png" },
  { name: "JUIT Solan", logo: "/Partners/JUIT.jpeg" },
];

const line2Partners = [
  { name: "Github", logo: "/Partners/Github.png" },
  { name: "Valorant", logo: "/Partners/Valorant.png" },
  { name: "FreeFire Max", logo: "/Partners/FreeFireMax.png" },
  { name: "WIP", logo: "/Partners/WIP.png" },
  { name: "FyreOp", logo: "/Partners/FyreOp.png" },
  { name: "Orkes", logo: "/Partners/Orkes.png" },
  { name: "Google Gemini", logo: "/Partners/gemini.png" },
  { name: "RedBull", logo: "/Partners/RedBull.png" },
  { name: "Frint", logo: "/Partners/Frint.jpg" },
  { name: "Commudle", logo: "/Partners/Commudle.jpg" },
  { name: "Risein", logo: "/Partners/Rise in.png" },
  { name: "ETHIndia", logo: "/Partners/ETHIndia.png" },
];

export default function PartnersSection() {
  // Duplicate lists to ensure the infinite scroll loop is seamless
  const duplicatedLine1 = [...line1Partners, ...line1Partners];
  const duplicatedLine2 = [...line2Partners, ...line2Partners];

  return (
    <section className="bg-white overflow-hidden">
      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="py-16 md:py-24">
        {/* Header Section */}
        <div className="mx-auto max-w-[1500px] px-6 mb-16">
          <div className="text-right">
            <h2 className="text-[#3B4421] font-extrabold uppercase leading-[0.95] tracking-wide text-[32px] md:text-[44px] lg:text-[60px] title">
              OUR PARTNERS
            </h2>
            <p className="mt-4 text-black/70 uppercase tracking-wider text-[14px] md:text-[18px] lg:text-[20px] font-medium text">
              Support and collaborators on our journey
            </p>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full">
          {/* Side Fade Gradients for a polished look */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* LINE 1: Scrolls LEFT <--- */}
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left pause-on-hover w-max">
                {duplicatedLine1.map((partner, index) => (
                  <div
                    key={`line1-${index}`}
                    className="flex items-center justify-center mx-6 md:mx-12 lg:mx-16 h-16 md:h-24 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }} 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* LINE 2: Scrolls RIGHT ---> */}
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right pause-on-hover w-max">
                {duplicatedLine2.map((partner, index) => (
                  <div
                    key={`line2-${index}`}
                    className="flex items-center justify-center mx-6 md:mx-12 lg:mx-16 h-16 md:h-24 opacity-60 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full w-auto max-w-[120px] md:max-w-[160px] lg:max-w-[200px] object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}