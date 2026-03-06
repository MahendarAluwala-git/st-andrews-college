import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const PopupSlider = () => {
  // FORCE POPUP TO SHOW - set to true
  const [isOpen, setIsOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // TEST IMAGES - using working URLs to ensure display
  const slides = [
    {
      id: 1,
      imageUrl: '/images/banner.png',
      alt: 'Admissions Open',
      link: '/admissions'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Campus Tour',
      link: '/campus-life'
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Computer Lab',
      link: '/academics'
    }
  ];

  const handleClose = () => {
    console.log('Closing popup');
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Log to console for debugging
  console.log('Popup rendering, isOpen:', isOpen);

  if (!isOpen) {
    console.log('Popup is closed');
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999,
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        maxWidth: '90%',
        maxHeight: '90%',
      }}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 100,
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <img
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].alt}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              width: 'auto',
              height: 'auto',
              display: 'block',
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            ›
          </button>

          {/* Slide Indicators */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
          }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: index === currentSlide ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSlider;