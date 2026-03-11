"use client";

import { useState } from "react";

const images = [
  { src: '/images/rancho-corrido/park-overlook.jpg', alt: 'Valley overlook of Rancho Corrido' },
  { src: '/images/rancho-corrido/pool-palms.jpg', alt: 'Pool with palm trees and cabins' },
  { src: '/images/rancho-corrido/playground-mountain.jpg', alt: 'Playground with mountain views' },
  { src: '/images/rancho-corrido/valley-cabin.jpg', alt: 'Cabin nestled in the valley' },
  { src: '/images/rancho-corrido/common-area.jpg', alt: 'Mature trees and picnic area' },
  { src: '/images/rancho-corrido/mountain-vista.jpg', alt: 'Mountain views' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-stone-900 mb-2 text-center">
          Your New Home
        </h2>
        <p className="text-stone-600 text-center mb-12">
          Nestled in the hills of Pauma Valley
        </p>
        
        {/* Even grid - all same size, clickable */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div 
              key={i} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button 
            className="absolute left-4 text-white text-4xl hover:text-amber-400 p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
          >
            ‹
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute right-4 text-white text-4xl hover:text-amber-400 p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
