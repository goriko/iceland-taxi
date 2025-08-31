// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography } from '@mui/material';

import "../App.css"

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel component
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselItems = [
    {
      title: 'Item 1',
      description: 'This is the first item description',
      backgroundColor: '#FF5733',
    },
    {
      title: 'Item 2',
      description: 'This is the second item description',
      backgroundColor: '#33FF57',
    },
    {
      title: 'Item 3',
      description: 'This is the third item description',
      backgroundColor: '#3357FF',
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <Card sx={{ backgroundColor: item.backgroundColor}}>
              <CardContent>
                <Typography variant="h5" component="div" color="white">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;