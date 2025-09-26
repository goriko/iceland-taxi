import { PRIMARY, WHITE } from "../constants/UI";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/services.js";

function ChauffeurServices() {
  // eslint-disable-next-line
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const ServiceCard = ({
    image,
    hoverImage,
    title,
    subtitle,
    description,
    duration,
    price1,
    price2,
    returnPrice1,
    returnPrice2,
    includes,
    showLabels = false,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
    <Card
      sx={{
        flex: { 
          xs: "1 1 100%", 
          sm: "1 1 calc(50% - 12px)" 
        },
        minWidth: { xs: "100%", sm: "300px" },
        maxWidth: { xs: "100%", sm: "500px" },
        m: { xs: 0, sm: 0 },
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        cursor: hoverImage ? "pointer" : "default",
        transition: "all 0.3s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": hoverImage ? {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
        } : {}
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          p: { xs: 2, md: 3 },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "180px", md: "220px" },
            overflow: "hidden",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <img
            src={isHovered && hoverImage ? hoverImage : image}
            alt={title}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              transition: "opacity 0.3s ease-in-out"
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 1,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            textAlign: "center",
            fontWeight: "bold",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </Typography>

        {/* Subtitle */}
        {subtitle && (
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: "center",
              fontWeight: "500",
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* Description */}
        {description && (
          <Typography
            variant="body2"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              mb: 2,
            }}
          >
            {description}
          </Typography>
        )}

        {/* Duration */}
        {duration && (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mb: 1,
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Duration: {duration}
          </Typography>
        )}

        {/* Includes */}
        {includes && (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontStyle: "italic",
              color: "text.secondary",
              fontSize: "0.9rem",
            }}
          >
            {includes}
          </Typography>
        )}

        {/* Prices */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          {showLabels ? (
            <>
              <Typography variant="body1" fontWeight="bold">
                One Way – {price1}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                One Way – {price2}
              </Typography>
              <Typography variant="body1" fontWeight="bold" mt={1}>
                Return – {returnPrice1}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Return – {returnPrice2}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1" fontWeight="bold">
                {price1}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {price2}
              </Typography>
            </>
          )}
        </Box>

        {/* Button */}
        <Box sx={{ mt: "auto", textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "20px",
              color: WHITE,
              backgroundColor: PRIMARY,
            }}
            onClick={() => navigate(`/chauffeur-booking/${encodeURIComponent(title)}`)}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
    );
  };

  return (
    <Box sx={{ m: 2 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          mb: 3,
        }}
      >
        PRIVATE CHAUFFEUR SERVICES
      </Typography>

      {servicesData.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            width: { xs: "100%", sm: "100%" },
            px: { xs: "5%", sm: "5%" },
            py: { xs: "3%", sm: "3%" },
            mx: { xs: 0, sm: 0 },
            justifyContent: "center",
            alignItems: "stretch",
            gap: { xs: 2, sm: 3 },
            transition: "all 0.3s ease-in-out",
          }}
        >
          {row.items.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default ChauffeurServices;
