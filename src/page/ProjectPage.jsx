// src/pages/ProjectPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { projectsData } from "../Data/ProjectData";
import ProjectModal from "./ProjectModal";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      id={project.id}
      className="cursor-pointer transition-transform hover:scale-105 scroll-mt-24"
    >
      <div
        className={[
          "w-full border border-black/20",
          "h-[320px] md:h-[360px] lg:h-[420px]",
          "flex items-center justify-center overflow-hidden",
          project.dark ? "bg-[#3B4421]" : "bg-white",
        ].join(" ")}
      >
        <img
          src={project.img}
          alt={project.title}
          className="max-h-[55%] max-w-[55%] object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-5">
        <div className="text-[#3B4421] uppercase tracking-wide leading-none title font-bold text-xl">
          {project.title}
        </div>
        <div className="mt-2 text-[#8A8A8A] uppercase tracking-wide text">
          {project.subtitle}
        </div>
        <div className="mt-2 text-gray-600 text-sm">
          {project.category} • {project.year}
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to specific project if hash is present
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Open modal for the specific project
          const project = projectsData.find(p => p.id === id);
          if (project) {
            setSelectedProject(project);
            setIsModalOpen(true);
          }
        }
      }, 100);
    }
  }, [location]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1500px] px-6 py-16">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="mb-8 flex items-center gap-2 text-[#3B4421] hover:text-[#4a5529] transition-colors uppercase tracking-wide font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-[#3B4421] font-extrabold title uppercase leading-[0.95] tracking-wide text-[40px] md:text-[60px] lg:text-[70px]">
            OUR PROJECTS
          </h1>
          <p className="mt-4 text-black uppercase tracking-wide text-[16px] md:text-[18px] lg:text-[22px] text">
            SHOWCASING EXCELLENCE IN EVERY ENDEAVOR
          </p>
          {/* <div className="mt-4 h-1 w-24 bg-[#3B4421]"></div> */}
        </div>

      
        

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        

        
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </div>
  );
}