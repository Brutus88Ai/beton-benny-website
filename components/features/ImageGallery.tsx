"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, categoryLabels, type GalleryCategory } from '@/lib/gallery-data';
import { useAppContext } from '@/components/providers/AppContext';
import { cn } from '@/lib/utils';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const ImageGallery = () => {
  const { isNightShift } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section 
      id="gallery" 
      className={cn(
        "py-20 transition-colors duration-300",
        isNightShift ? "bg-zinc-900" : "bg-gray-50"
      )}
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="PARTY-GALERIE" 
          subtitle="Die wildesten Momente in Bildern! 📸"
        />

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              "px-6 py-2 font-bold uppercase text-sm transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
              selectedCategory === 'all'
                ? "bg-neonOrange text-black"
                : isNightShift 
                  ? "bg-zinc-800 text-white hover:bg-zinc-700" 
                  : "bg-white text-black hover:bg-gray-100"
            )}
          >
            Alle
          </button>
          {(Object.keys(categoryLabels) as GalleryCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2 font-bold uppercase text-sm transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                selectedCategory === cat
                  ? "bg-neonOrange text-black"
                  : isNightShift 
                    ? "bg-zinc-800 text-white hover:bg-zinc-700" 
                    : "bg-white text-black hover:bg-gray-100"
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            >
              <div className={cn(
                "relative overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-[1.02]",
                isNightShift ? "bg-zinc-800" : "bg-white"
              )}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-opacity group-hover:opacity-90"
                />
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                  isNightShift 
                    ? "bg-black/90 text-white" 
                    : "bg-white/90 text-black"
                )}>
                  <p className="font-bold text-sm">{image.caption}</p>
                  <span className="text-xs uppercase text-neonOrange">
                    {categoryLabels[image.category]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.button 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="absolute top-4 right-4 bg-neonOrange text-black p-3 rounded-full hover:bg-white transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                <X size={24} />
              </motion.button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
              >
                <Image
                  src={lightboxImage}
                  alt="Lightbox Image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
