import React from 'react';
import { HomeBox } from '../homeBox';
import ScrollButton from '../ScrollButton/ScrollButton';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <>
      <div className="Home">Home</div>
      <HomeBox />
      <ScrollButton />
    </>
  );
};
