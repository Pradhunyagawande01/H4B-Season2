import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden bg-[#f4f4f4] font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url('../landingbg.png')` }}
      />

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col min-h-screen md:hidden relative z-20 w-full overflow-hidden pt-6 pb-8">
        {/* Header */}
        <div className="flex justify-between items-start px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#2c2f25] leading-[0.85] tracking-wider mt-2 title">
              Hack 4<br />
              Brahma.
            </h1>

          <img
            src="../Logo.png"
            alt="Hack4Brahma Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Map */}
        <div className="relative flex-1 flex items-center justify-center py-8">
          <div className="relative w-full max-w-[380px] overflow-hidden">
            <img
              src="../landingmap.png"
              alt="Map"
              className="w-full object-contain"
            />

            {/* Northeast Callout */}
            <div className="absolute top-[24%] right-2 flex items-center">
              <div className="w-2 h-2 bg-[#2a2a2a] border border-white" />

              <div className="w-4  border-2 border-[#2a2a2a]" />

              <p className="text-[10px] strong leading-tighter uppercase ml-5 mt-8 text-[#2a2a2a] max-w-[85px] text">
                Northeast India's Biggest
                <br />
                24-Hour Hackathon
              </p>
            </div>

            {/* Guwahati Callout */}
            <div className="absolute top-[49%] left-[8px] flex items-center flex-row-reverse">
              <div className="w-2 h-2 mt-2 bg-[#2a2a2a] border border-white" />

              <div className="w-4 border-2 mt-2 border-[#2a2a2a]" />

              <p className="text-[10px] uppercase leading-tighter mr-4 mt-6 ml-5 text-[#2a2a2a]  text">
              Guwahati, Assam
            </p>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="pointer-events-auto w-full px-4">
          <div className="bg-[#2a2d24] text-white p-3">
            <h3 className="text-[10px] font-bold uppercase tracking-wider">
              Northeast India's Biggest 24-Hour Hackathon
            </h3>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-[#2a2d24] border-t-0 p-4 w-full">
            <ul className="space-y-3">
              {[
                "1st Major League Hacking Event of Northeast India",
                "Supported by DPIIT Startup India",
                "Supported by SAVUJ",
                "Highest Number of Participants Registered",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>→</span>
                  <span className="text-[10px] font-bold uppercase">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-4xl mt-4 font-black uppercase text-[#2c2f25]">
            Season 2.
          </h2>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        {/* MAP */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-3xl aspect-video flex items-center justify-center">
          {/* REPLACE THIS DIV WITH YOUR MAP IMAGE TAG */}
          <div className=" bg-black/20   flex items-center justify-center ">
            <div
              className="absolute inset-0 bg-contain bg-center opacity-80 bg-no-repeat"
              style={{ backgroundImage: `url('../landingmap.png')` }}
            />
          </div>

          {/* Map Callout 1 (Top Right) */}
          <div className="absolute top-[20%] right-[-5%] flex items-end">
            <div className="w-3 h-3 bg-[#2a2a2a] border border-white" />
            <div className="w-16 border-b border-[#2a2a2a] mb-1 ml-1" />
            <div className="w-16 border-b border-[#2a2a2a] mb-1 -rotate-12 origin-bottom-left" />
            <p className="text-[10px] uppercase leading-tight ml-2 text-[#353535] max-w-[170px] text">
              Northeast India's Biggest 24-Hour Hackathon
            </p>
          </div>

          {/* Map Callout 2 (Left) */}
          <div className="absolute top-[40%] left-[9%] flex items-end flex-row-reverse">
            <div className="w-3 h-3 bg-[#2a2a2a] border border-white" />
            <div className="w-12 border-b border-[#2a2a2a] mb-1 mr-1" />
            <div className="w-10 border-b border-[#2a2a2a] mb-1 rotate-12 origin-bottom-right" />
            <p className="text-[10px] uppercase leading-tight mr-2 text-[#2a2a2a]  text">
              Guwahati, Assam
            </p>
          </div>
        </div>
      </div>

        {/* Foreground */}
        <div className="relative z-20 w-full h-screen max-w-[1600px] mx-auto">
          {/* Title */}
          <div className="absolute top-12 left-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#2c2f25] leading-[0.85] tracking-tighter title">
              Hack 4<br />
              Brahma.
            </h1>
          </div>

          {/* Logo */}
          <div className="w-24 h-24 absolute top-12 right-12 md:w-32 md:h-32 rounded-full border-[#2c2f25] flex items-center justify-center pointer-events-auto">
            {/* <span className="text-xs font-bold text-center">H4B<br/>Logo</span> */}
            <img
              src="../Logo.png"
              alt="Hack4Brahma Logo"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>

          {/* Season */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          {/* Decorative slanted lines */}
          <div className="flex gap-1 mb-4">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-4 bg-[#2c2f25] transform -skew-x-[30deg]"
              />
            ))}
            <div className="w-24 border-b-2 border-[#2c2f25] self-end ml-2 transform -translate-y-0.5" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-[#2c2f25] tracking-wide title">
            Season 2.
          </h2>
        </div>

          {/* Info Box */}
          <div className="absolute bottom-32 right-0 md:bottom-12 md:right-12 pointer-events-auto overflow-auto">
          {/* Box Header */}
          <div className="bg-[#2a2d24] text-white p-3 border border-[#2a2d24]">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider subtitle">
              Northeast India's Biggest 24-Hour Hackathon
            </h3>
          </div>
            <div className="bg-white/70 backdrop-blur-md border border-t-0 border-[#2a2d24] p-4">
              <ul className="space-y-3 text">
                {[
                  "1st Major League Hacking Event of Northeast India",
                  "Supported by DPIIT Startup India",
                  "Supported by SAVUJ",
                  "Highest Number of Participants Registered",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2a2d24] text-sm leading-none mt-0.5">
                      →
                    </span>
                    <span className="text-[10px] md:text-xs font-bold uppercase text-[#2a2d24] tracking-wide">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
