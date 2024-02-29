import React, { useContext } from 'react';
import LandingBanner from '@components/LandingPage/LandingBanner';
import Reviews from '@components/LandingPage/Reviews';
import { ThemeContext } from '@context/ThemeContext';
import { themes } from '@config/theme.config';

const LandingPage = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].color,
        }}
        className="h-full w-full"
      >
        <LandingBanner />
        <Reviews />
      </div>
    </>
  );
};

export default LandingPage;
