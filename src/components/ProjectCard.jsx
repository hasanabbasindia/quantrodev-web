import React from "react";

export default function ProjectCard({ title, description, image, bgColor }) {
  return (
    <div className={`${bgColor} text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg`}>
      <img src={image} alt={title} className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-full mb-4 sm:mb-6" />
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}
