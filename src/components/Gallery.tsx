"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: '/images/rancho-corrido/pool-palm-trees.jpg', alt: 'Pool with palm trees at Rancho Corrido Park Pauma Valley CA' },
  { src: '/images/rancho-corrido/playground-mountain.jpg', alt: 'Playground with mountain backdrop at Rancho Corrido RV Resort' },
  { src: '/images/rancho-corrido/park-grounds-flag.jpg', alt: 'Park grounds and American flag at Rancho Corrido Pauma Valley' },
  { src: '/images/rancho-corrido/valley-cabin-aerial.jpg', alt: 'Aerial view of cabin and vineyard at Rancho Corrido Park' },
  { src: '/images/rancho-corrido/park-overlook-wide.jpg', alt: 'Wide overlook of Rancho Corrido RV Resort from hilltop San Diego County' },
  { src: '/images/rancho-corrido/community-cabins-lawn.jpg', alt: 'Community cabins and green lawn at Rancho Corrido Park' },
  { src: '/images/rancho-corrido/basketball-court-pines.jpg', alt: 'Basketball court surrounded by pine trees at Rancho Corrido' },
  { src: '/images/rancho-corrido/park-swings-mountain.jpg', alt: 'Swing set with mountain views at Rancho Corrido RV Resort Pauma Valley' },
  { src: '/images/rancho-corrido/mountain-vista-park.jpg', alt: 'Mountain vista from Rancho Corrido Mobile Home Park San Diego County' },
  { src: '/images/rancho-corrido/office-clubhouse-palm.jpg', alt: 'Office and clubhouse with palm tree at Rancho Corrido Park' },
  { src: '/images/rancho-corrido/park-road-office.jpg', alt: 'Paved road through Rancho Corrido RV Resort community' },
  { src: '/images/rancho-corrido/park-lawn-trees.jpg', alt: 'Green lawn and mature trees at Rancho Corrido Pauma Valley CA' },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((image, i) => (
            <div 
              key={i} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
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
          <div className="relative w-full h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
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
