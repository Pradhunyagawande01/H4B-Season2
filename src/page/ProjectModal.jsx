// src/components/ProjectModal.jsx
import React, { useEffect } from "react";
import { X, ExternalLink, Calendar, Tag } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-[#3B4421]" />
        </button>

        {/* Project Image */}
        <div 
          className={`w-full h-64 flex items-center justify-center ${
            project.dark ? "bg-[#3B4421]" : "bg-gray-100"
          }`}
        >
          <img
            src={project.img}
            alt={project.title}
            className="max-h-[60%] max-w-[60%] object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title & Subtitle */}
          <div className="mb-6">
            <h2 className="text-4xl font-extrabold text-[#3B4421] uppercase tracking-wide">
              {project.title}
            </h2>
            <p className="mt-2 text-[#8A8A8A] uppercase tracking-wide text-lg">
              {project.subtitle}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Tag className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#3B4421] mb-3 uppercase tracking-wide">
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#3B4421] mb-3 uppercase tracking-wide">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#3B4421] text-white text-sm uppercase tracking-wide rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visit Project Button */}
          <div className="flex justify-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3B4421] text-white uppercase tracking-wider px-10 py-4 text-[16px] inline-flex items-center justify-center gap-3
                         hover:bg-[#4a5529] transition-colors [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%,0_18px)]"
            >
              <span>Visit Project</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}