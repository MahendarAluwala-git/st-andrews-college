import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const galleryImages = [
    { url: '🏛️', title: 'Main Building', category: 'Campus' },
    { url: '📚', title: 'Library', category: 'Facilities' },
    { url: '🔬', title: 'Lab', category: 'Academics' },
    { url: '🏟️', title: 'Sports Complex', category: 'Sports' },
    { url: '🎭', title: 'Auditorium', category: 'Facilities' },
    { url: '💻', title: 'Computer Lab', category: 'Academics' },
    { url: '🏊', title: 'Swimming Pool', category: 'Sports' },
    { url: '🏠', title: 'Hostel', category: 'Campus' },
  ];

  const categories = ['all', 'Campus', 'Facilities', 'Sports', 'Academics'];

  const filteredImages = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Gallery</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            A visual journey through life at St. Andrew's College
          </p>
        </div>
      </section>

      {/* Gallery Section - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Responsive */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                  ${category === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-50'}`}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          {/* Image Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl">{image.url}</span>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <div>
                    <h3 className="text-white text-xs sm:text-sm font-semibold">{image.title}</h3>
                    <p className="text-white/80 text-[10px] sm:text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Responsive */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 z-10"
          >
            <XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <div className="text-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-6xl sm:text-7xl md:text-8xl">{selectedImage.url}</span>
            </div>
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mt-4">{selectedImage.title}</h3>
            <p className="text-white/60 text-xs sm:text-sm mt-1">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;