// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import CarouselImage1 from '../assets/images/carousel-1.jpg'
import CarouselImage2 from '../assets/images/carousel-2.jpg'
import CarouselImage3 from '../assets/images/carousel-3.jpg'
import { PRIMARY, WHITE } from "../constants/UI";

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
      title: 'RIDE ICELAND',
      description: 'Your private chauffeur and tour provider, perfect for businees travelers and families. Making every journey memorable',
      backgorundImage: CarouselImage1,
      button1: 'Book Now',
      button2: 'Find Out More'
    },
    {
      title: 'AIRPORT TRANSFER',
      description: 'Book your airport transfer with Ride Iceland - comfort, reliability, and a memorable start to your journey!',
      backgorundImage: CarouselImage2,
      button1: 'Book Airport Transfer',
      button2: 'Find Out More'
    },
    {
      title: 'TAILORED TOURS!',
      description: '',
      backgorundImage: CarouselImage3,
      button1: 'Arrange Your Tailored Tour Today',
      button2: 'Find Out More'
    },
  ];

  return (
    <Box className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box key={index} className="slick-slide">
            <Card sx={{
              backgroundImage: `url(${item.backgorundImage})`,
              opacity: 1,
              backgroundSize: "cover",
              height: "100%",
              display: 'flex',
              flexDirection: 'column', // Align items vertically
              alignItems: 'center',    // Center items horizontally
              justifyContent: 'center'
            }}>
              <CardContent sx={{ m: "auto" }}>
                <Typography variant="h3" component="div" color="white" sx={{ m: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="white" sx={{ m: 1 }}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    m: 1,
                    borderRadius: "20px",
                    color: WHITE,
                    backgroundColor: PRIMARY,
                  }}
                >
                  {item.button1}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    m: 1,
                    borderRadius: "20px",
                    color: WHITE,
                    borderColor: WHITE,
                  }}
                >
                  {item.button2}
                </Button>

              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;