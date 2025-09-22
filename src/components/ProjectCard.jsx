import React from "react";

export default function ProjectCard({ title, description, image, bgColor }) {
  return (
    <div className={`${bgColor} text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg`}>
      <img src={image} alt={title} className="h-32 w-32 object-cover rounded-full mb-6" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4">{description}</p>
    </div>
  );
}
