// src/components/WhoAreWeSection.jsx

import { Link } from "react-router-dom";

function GalleryCard({
  img,
  title,
  subtitle,
  large = false,
  grayscale = false,
  className = "",
}) {
  return (
    <div className={className}>
      <div
        className={[
          "w-full overflow-hidden bg-neutral-200",
          // large ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[16/9]",
          grayscale ? "grayscale" : "",
        ].join(" ")}
      >
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="">
        <div className="text-[#3B4421] uppercase tracking-wide leading-none subtitle mt-3">
          {title}
        </div>
        <div className="mt-0 text-black uppercase tracking-wide text-[14px] text">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default function WhoAreWeSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-10">
        {/* Title (top-right) */}
        <h2 className="title text-right text-[#3B4421] font-extrabold uppercase leading-[0.95] tracking-wide text-[30px] md:text-[20px] lg:text-[50px]">
          WHO ARE WE
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-3.5 lg:ml-52 text-black text-[20px] md:text-[10px] lg:text-[20px] leading-relaxed text ">
          Hack4Brahma, Northeast India’s biggest hackathon community. Our first hackathon, "Hack4Brahmaputra," became Northeast India's largest hackathon. It was supported by Startup India, SAYUJ (STPI), and Major League Hacking (MLH), and took place on October 10–11, 2025, in Guwahati, Assam.We have organized 15+ webinars and sessions in various cities across India. We are currently running a series of mini-hackathons called Hack Days; so far, we have held events in Nagpur, Guwahati, Patna, Nashik, and Nagaland. Upcoming cities include Bhopal, Pune, and more.Our vision and mission are to provide a platform and ecosystem for students from the Northeast and other Tier-3 cities in India where they can learn, collaborate, and showcase their skills.
        </p>

        {/* Gallery layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 md:gap-y-14 items-start">
          {/* Left */}
          <GalleryCard
            className="md:col-span-4 md:row-start-1"
            img="../Aboutl.png"
            title="HACK DAYS NAGPUR"
            subtitle="HACKATHON"
          />

          {/* Middle (large, taller, spans 2 rows) */}
          <GalleryCard
            className="md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-2"
            img="../Aboutm.png"
            title="HACK 4 BRAHMAputra"
            subtitle="HACKATHON"
            large
            grayscale
          />

          {/* Right */}
          <GalleryCard
            className="md:col-span-4 md:col-start-9 md:row-start-1"
            img="../Aboutr.png"
            title="HACK DAYS Guwahati"
            subtitle="HACKATHON"
          />

          {/* Button (bottom-right on desktop, centered on mobile) */}
          <div className="md:col-span-4 md:col-start-9 md:row-start-2 md:self-end flex justify-center md:justify-end">
            <Link
              to="/gallery"
              className="bg-[#3B4421] text-white uppercase tracking-wider
             px-6 sm:px-8 lg:px-10
             py-4 sm:py-5
             text-[14px] sm:text-[15px] lg:text-[16px]
             inline-flex items-center justify-center
             [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%,0_18px)]"
            >
              VIEW&nbsp;&nbsp;OUR&nbsp;GALLERY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
