"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyConfig } from "@/config/properties";

const images = [
  { src: '/images/round-lake/hero-aerial.jpg', alt: 'Aerial drone view of Round Lake Community — golf course, fishing pond, and fall foliage on 150 acres near Klamath Falls Oregon' },
  { src: '/images/round-lake/lake-view.jpg', alt: 'Scenic fishing pond at Round Lake Community with mountains and forest in Klamath Falls Oregon' },
  { src: '/images/round-lake/putting-green.jpg', alt: 'Putting green and golf clubhouse at Round Lake Community golf course Klamath Falls' },
  { src: '/images/round-lake/clubhouse-exterior.jpg', alt: 'Round Lake Community golf clubhouse exterior with pull carts and fall foliage' },
  { src: '/images/round-lake/clubhouse-deck.jpg', alt: 'Outdoor deck and patio with green umbrellas at Round Lake Community clubhouse' },
  { src: '/images/round-lake/clubhouse-patio.jpg', alt: 'Clubhouse patio with stone fireplace and outdoor seating at Round Lake Community' },
  { src: '/images/round-lake/clubhouse-interior.jpg', alt: 'Clubhouse interior with pool table, bar, and stone fireplace at Round Lake Community' },
  { src: '/images/round-lake/community-office.jpg', alt: 'Round Lake Community office with American flag and golf cart rentals' },
  { src: '/images/round-lake/community-street.jpg', alt: 'Tree-lined community street with manufactured homes at Round Lake Community Klamath Falls Oregon' },
];

export default function Gallery({ property }: { property: PropertyConfig }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-stone-900 mb-2 text-center">
          Life at Round Lake
        </h2>
        <p className="text-stone-600 text-center mb-12">
          150 acres of Oregon countryside — golf, fishing, hiking, and community
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group bg-stone-200"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
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
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-75"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-4xl hover:opacity-75 p-2"
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
            className="absolute right-4 text-white text-4xl hover:opacity-75 p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
