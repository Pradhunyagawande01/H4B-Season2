import React from "react";
import LinkedInCard from "./LinkedInCard";
import BigPhoto from "./BigPhoto";
import CalloutBox from "./CalloutBox";
import { OLIVE } from "./constants";

export default function LinkedInWallSection() {
  const cards = [
    {
      avatar: "/Shuhangi.png",
      name: "Shubhangi Gupta",
      text: "Hack4Brahma was an incredible experience that perfectly blended innovation, collaboration, and learning. The well-organized event, supportive mentors, and passionate community made every moment of the 24-hour hackathon worthwhile. It's more than just a competition—it's a platform that inspires growth, teamwork, and impactful ideas.",
      className: "lg:col-span-4 lg:col-start-1 lg:row-start-1"
    },
    {
      avatar: "/Vipul.jpg",
      name: "Vipul Gupta",
      text: "",
      className: "lg:col-span-4 lg:col-start-5 lg:row-start-1"
    },
    {
      avatar: "/Amrit.png",
      name: "Amrit Raj",
      text: "",
      image: "",
      className: "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-2"
    },
    {
      avatar: "/Swati.png",
      name: "Swati Awasthi",
      text: "",
      image: "",
      className: "lg:col-span-6 lg:col-start-7 lg:row-start-3"
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-20">
        {/* Heading */}
        <h2
          className="font-extrabold uppercase tracking-wide leading-[0.95] text-[30px] md:text-[20px] lg:text-[50px] title"
          style={{ color: OLIVE }}
        >
          @HACK4BRAHMA
        </h2>
        <div className="mt-3 text-[#777] uppercase tracking-wide text-[20px] md:text-[10px] lg:text-[20px] text">
          LINKEDIN.COM
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-start">
          {/* Cards */}
          {cards.map((card, index) => (
            <LinkedInCard key={index} {...card} />
          ))}

          {/* Big Photo */}
          <BigPhoto
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2"
            src="./Aditya.jpg"
          />

          {/* Callout */}
          <CalloutBox
            className="lg:col-span-4 lg:col-start-6 lg:row-start-2"
            text="Hack4Brahma was an incredible experience that perfectly blended innovation, collaboration, and learning. The seamless organization, supportive mentors, and passionate community made the 24-hour hackathon truly unforgettable. It was a journey that challenged me, helped me grow, and created memories I'll always cherish.
"
          />
        </div>
      </div>
    </section>
  );
}