import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hardcoded gallery images with reliable URLs
  const galleryImages = [
    { 
      url: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Main Building', 
      category: 'Campus' 
    },
    { 
      url: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Library', 
      category: 'Facilities' 
    },
    { 
      url: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Study Area', 
      category: 'Facilities' 
    },
    { 
      url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Computer Lab', 
      category: 'Academics' 
    },
    { 
      url: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Sports Ground', 
      category: 'Sports' 
    },
    { 
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Auditorium', 
      category: 'Facilities' 
    },
    { 
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Student Life', 
      category: 'Campus' 
    },
    { 
      url: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 
      title: 'Management Dept', 
      category: 'Academics' 
    },
  ];

  const categories = ['all', 'Campus', 'Facilities', 'Sports', 'Academics'];

  const filteredImages = category === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  return (
    <div>
      <PageHeader 
        title="Gallery"
        subtitle="A visual journey through life at St. Andrew's College"
        breadcrumb="Gallery"
      />

      {/* Navbar */}
      <Navbar />

      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${category === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-50'}`}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-gray-100"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-sm font-semibold">{image.title}</h3>
                    <p className="text-white/80 text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 z-10"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => {
              const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
              setCurrentIndex(newIndex);
              setSelectedImage(filteredImages[newIndex]);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => {
              const newIndex = (currentIndex + 1) % filteredImages.length;
              setCurrentIndex(newIndex);
              setSelectedImage(filteredImages[newIndex]);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>

          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
            }}
          />
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;