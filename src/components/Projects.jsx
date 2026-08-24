// src/components/EventsSection.jsx
import React, { useEffect, useRef } from "react";

function EventCard({ img, title, linkedinUrl }) {
  const handleCardClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="flex-shrink-0 w-[280px] md:w-[360px] lg:w-[480px] cursor-pointer"
    >
      <div
        className={[
          "w-full border border-black/20",
          "aspect-video", // 16:9 aspect ratio
          "flex items-center justify-center overflow-hidden",
          "bg-white",
        ].join(" ")}
      >
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-fill" 
          loading="lazy" 
        />
      </div>

      <div className="mt-5">
        {/* <div className="text-[#3B4421] uppercase tracking-wide leading-tight font-bold text-[16px] md:text-[18px] lg:text-[20px]">
          {title}
        </div> */}
      </div>
    </div>
  );
}

export default function EventsSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isPaused = false;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 2;
          
          // Reset to beginning when reached end for infinite loop
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScrolling();

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Events data - Replace with your actual images and LinkedIn URLs
  const events = [
    {
      id: 1,
      img: "/events/events1.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-1" // Replace with actual LinkedIn URL
    },
    {
      id: 2,
      img: "/events/events2.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-2" // Replace with actual LinkedIn URL
    },
    {
      id: 3,
      img: "/events/events3.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-3" // Replace with actual LinkedIn URL
    },
    {
      id: 4,
      img: "/events/events4.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-4" // Replace with actual LinkedIn URL
    },
    {
      id: 5,
      img: "/events/events5.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-5" // Replace with actual LinkedIn URL
    },
    {
      id: 6,
      img: "/events/events6.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-6" // Replace with actual LinkedIn URL
    },
    {
      id: 7,
      img: "/events/events7.png", // Replace with your image path
      title: "HackDays",
      linkedinUrl: "https://www.linkedin.com/posts/your-event-7" // Replace with actual LinkedIn URL
    },
  ];

  // Duplicate events for seamless infinite scroll
  const duplicatedEvents = [...events, ...events, ...events, ...events];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6">
        {/* Heading */}
        <div>
          <h2 className="text-[#3B4421] title font-extrabold uppercase leading-[0.95] tracking-wide text-[30px] md:text-[40px] lg:text-[50px]">
            OUR EVENTS
          </h2>
          <p className="mt-4 text-[#3B4421] uppercase tracking-wide text-[14px] md:text-[16px] lg:text-[20px] subtitle">
            CELEBRATING OUR COMMUNITY MILESTONES
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-16 relative">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedEvents.map((event, index) => (
              <EventCard
                key={`${event.id}-${index}`}
                img={event.img}
                title={event.title}
                // linkedinUrl={event.linkedinUrl}
              />
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Event Count */}
        {/* <div className="mt-16 text-center">
          <p className="text-[#3B4421] uppercase tracking-wide text-[14px] md:text-[16px] font-semibold">
            {events.length} EVENTS ORGANIZED
          </p>
        </div> */}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}