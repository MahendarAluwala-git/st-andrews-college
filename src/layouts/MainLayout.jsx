import React from 'react';
import { Outlet } from 'react-router-dom';
import CollegeHeader from '../components/common/CollegeHeader';
import Footer from '../components/common/Footer';
import PopupSlider from '../components/common/PopupSlider';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PopupSlider />
      <CollegeHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;