// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import CarouselImage1 from '../assets/images/carousel1.png'
import CarouselImage2 from '../assets/images/carousel2.png'
import CarouselImage3 from '../assets/images/carousel3.png'
import { PRIMARY, WHITE } from "../constants/UI";

import "../App.css"

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
// Carousel component
const CarouselComponent = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 4000,
        }
      }
    ]
  };

  const carouselItems = [
    {
      title: 'Iceland Grand Tours',
      description: "Private chauffeur. Local expertise. Breathtaking landscapes. Whether you're traveling for business or bonding as a family, our tailored Iceland tours deliver seamless comfort and once-in-a-lifetime moments — all curated just for you.",
      backgorundImage: CarouselImage1,
      button1: 'Book Now',
      button2: 'Find Out More'
    },
    {
      title: 'AIRPORT TRANSFER',
      description: 'Step off the plane and into comfort — Iceland Grand Tours offers seamless airport transfers with a personal chauffeur, plush vehicles, and local expertise. Start your Icelandic journey relaxed, refreshed, and ready to explore.',
      backgorundImage: CarouselImage2,
      button1: 'Book Airport Transfer',
      button2: 'Find Out More'
    },
    {
      title: 'TAILORED TOURS!',
      description: 'Every stop, every view, every moment — personalized for your pace, passions, and sense of wonder.',
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
              backgroundSize: "cover",
              height: "100%",
              display: 'flex',
              flexDirection: 'column', // Align items vertically
              alignItems: 'center',    // Center items horizontally
              justifyContent: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: PRIMARY,
                opacity: 0.4,
                zIndex: 1
              }
            }}>
              <CardContent sx={{
                m: "auto",
                textAlign: "center",
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 2, sm: 3, md: 4 },
                position: 'relative',
                zIndex: 2
              }}>
                <Typography
                  variant="h3"
                  component="div"
                  color="white"
                  sx={{
                    m: 1,
                    fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
                    fontWeight: "bold"
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                    m: 1,
                    fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                    maxWidth: { xs: "90%", sm: "80%", md: "70%" },
                    mx: "auto"
                  }}
                >
                  {item.description}
                </Typography>
                <Box sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  gap: 1,
                  mt: 2
                }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: "20px",
                      color: WHITE,
                      backgroundColor: PRIMARY,
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 1, sm: 1.5, md: 2 }
                    }}
                    onClick={() => {
                      if (item.title === "AIRPORT TRANSFER") {
                        navigate("/airport-transfer#booking-form");
                      }
                    }}
                  >
                    {item.button1}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "20px",
                      color: WHITE,
                      borderColor: WHITE,
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 1, sm: 1.5, md: 2 }
                    }}
                    onClick={() => {
                      if (item.title === "AIRPORT TRANSFER") {
                        navigate("/airport-transfer");
                      }
                    }}
                  >
                    {item.button2}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;