import React from 'react';

const TopBar = () => {
  return (
    <div style={{ backgroundColor: '#1e40af', color: 'white', padding: '8px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Call: 011-41637097</span>
          <span>Email: info@standrews.edu</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;