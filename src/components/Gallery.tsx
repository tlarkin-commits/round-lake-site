"use client";

export default function Gallery() {
  const images = [
    { src: "/images/community-1.jpg", alt: "Pool area" },
    { src: "/images/community-2.jpg", alt: "RV spaces" },
    { src: "/images/community-3.jpg", alt: "Scenic views" },
    { src: "/images/landscape.jpg", alt: "Mountain landscape" },
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            See for yourself
          </h2>
          <p className="text-lg text-stone-600">
            Photos from Rancho Corrido
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-lg ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ minHeight: idx === 0 ? '400px' : '190px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
