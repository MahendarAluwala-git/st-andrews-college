import React from 'react';

const SectionTitle = ({ tag, title, description, light = false, centered = true }) => {
  return (
    <div className={`mb-6 sm:mb-8 md:mb-10 lg:mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="badge badge-primary mb-2 sm:mb-3 inline-block text-xs sm:text-sm">
          {tag}
        </span>
      )}
      <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 
                     ${light ? 'text-white' : 'text-secondary-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-xs sm:text-sm md:text-base max-w-2xl ${centered ? 'mx-auto' : ''} 
                      ${light ? 'text-white/80' : 'text-secondary-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;