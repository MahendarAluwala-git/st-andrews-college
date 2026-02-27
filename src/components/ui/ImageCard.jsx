import React from 'react';

const ImageCard = ({ image, title, subtitle, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    flex items-end p-6">
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          {subtitle && <p className="text-white/80">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;