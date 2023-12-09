import * as React from 'react';
import PropTypes from 'prop-types';
import scooter from "../images/sc2.png";
import { Link } from "react-router-dom";
import { CircularProgress, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const CircularProgressWithLabel = (props) => {
  return (
    <div className="relative inline-flex">
      <CircularProgress
        variant="determinate"
        size={100}
        thickness={2}
        sx={{
          color: 'transparent',
        }}
        {...props}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={props.style}>
        <Typography variant="h4" component="div" style={cyberpunkStyle}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </div>
    </div>
  );
};

const cyberpunkStyle = {
  fontFamily: 'Orbitron, sans-serif',
  fontSize: '3rem',
  textShadow: '2px 2px 4px #f0f, -2px -2px 4px #0ff',
  color: '#fff',
  fontWeight: '700',
  textOutline: '2px 2px #000',
  transition: 'opacity 0.5s ease-in-out', // Transition for the morph effect
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  style: PropTypes.object,
};

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress + 16 > 100 ? 100 : prevProgress + 16));
      }, 800);
    } else {
      setTimeout(() => {
        setShowButton(true);
      }, 500); // Display button after a small delay for morphing effect
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center ">
      {showButton ? (
        <div className="bg-[#1c3155]">
        <div className="md:mx-16 mx-6">
          <div className="lg:grid lg:grid-cols-2 lg:h-[90vh]  items-center justify-items-center justify-between home flex  mt-5 lg:mt-0 gap-4 lg:gap-0">
            <div class="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
              <p class="text-white md:text-6xl font-medium text-center lg:text-left w-[80%]">
                Feeding your cravings, anytime, anywhere.
              </p>
              <a class="border-yellow-300">
                <Link
                  to="/viewres"
                  class="hover:shadow-xl transition-all p-2 px-4 bg-white rounded w-[fit-content] text-sm md:text-base font-bold border-yellow-300"
                >
                  Explore Restaurants.
                </Link>
              </a>
            </div>
            <div class="flex lg:justify-end items-center justify-center">
              <img src={scooter} class="lg:w-[85%] w-[90%]" />
            </div>
          </div>
        </div>
      </div>
      ) : (
        <CircularProgressWithLabel
          value={progress}
          style={{ opacity: showButton ? 0 : 1 }} // Apply fade-out transition
        />
      )}
    </div>
  );
};

export default Home;
