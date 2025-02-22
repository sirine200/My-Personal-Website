'use client'
import React, { useState } from "react";

import CustomHeader from "../common/CustomHeader"


// Image URLs
const images = [
  "/images/revampedaiesec.png",
  "/images/way.png",
  "/images/B2BB.png",
  "/images/3 0.png",
  "/images/Event.png",
  "/images/training.png",
  "/images/Meritt.png",
  "/images/kids.png",
  "/images/IT.png",
];

const Volunteering = ({ id }: { id: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === null
        ? null
        : prevIndex === images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === null
        ? null
        : prevIndex === 0
        ? images.length - 1
        : prevIndex - 1
    );
  };

  return (
    < section id={id} >
      <div className="mb-10 max-w-screen-xl mx-auto ">
        <CustomHeader
          title="Volunteering:"
          description="Volunteering is my way of living with purpose. It’s not just giving back. It’s about staying connected to the world, growing with others, and being part of something bigger than myself. These moments keep me grounded in what truly matters and are the heartbeat of my story."
        />
      </div>
    <div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4  max-w-screen-xl mx-auto">
        {images.map((src, index) => (
          <div key={index} >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              src={src}
              alt={`Gallery image ${index + 1}`}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img
              className="max-w-full max-h-[80vh] rounded-lg"
              src={images[currentImageIndex]}
              alt={`Modal image ${currentImageIndex + 1}`}
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  </section>);
};

export default Volunteering;
