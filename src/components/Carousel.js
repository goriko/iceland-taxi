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
              <CardContent sx={{
                m: "auto",
                textAlign: "center",
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 2, sm: 3, md: 4 }
              }}>
                <Typography
                  variant="h3"
                  component="div"
                  color="white"
                  sx={{
                    m: 1,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
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
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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