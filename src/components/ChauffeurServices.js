import { PRIMARY, WHITE } from "../constants/UI";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState, useEffect } from "react";
import goldenCircleImage from "../assets/images/golden_circle.jpg";
import goldenCircleImage1 from "../assets/images/golden-circle-1.png";
import goldenCircleImage2 from "../assets/images/golden-circle-2.png";
import southCoastImage1 from "../assets/images/south_coast_1.png";
import southCoastImage2 from "../assets/images/south_coast_2.png";
import airportTransferImage from "../assets/images/airport_transfer.jpg";

function ChauffeurServices() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const servicesData = [
    {
      row: 1,
      items: [
        {
          image: goldenCircleImage1,
          hoverImage: goldenCircleImage2,
          title: "Golden Circle Discovery",
          subtitle: "Iceland's Legendary Loop of Fire, Water, and History",
          description: "Embark on a captivating journey through Iceland's most iconic sights. Begin at Þingvellir National Park, where tectonic plates drift and Iceland's ancient parliament once stood. Witness the explosive beauty of Strokkur geyser in the Geysir hot spring area, then feel the raw power of Gullfoss waterfall. Enjoy 2–3 scenic stops on the return, tailored to your interests.",
          duration: "~6 hours",
          price1: "🚗 1–4 persons: €680 per car",
          price2: "🚐 5–8 persons: €890 per car",
          includes: "Includes expert chauffeur-guide, flexible pacing, and unforgettable views",
        },
        {
          image: southCoastImage1,
          hoverImage: southCoastImage2,
          title: "South Coast Expedition",
          subtitle: "Where Glaciers Meet the Sea",
          description: "Journey through Iceland's dramatic southern plains — a land where snow-capped glaciers embrace the Atlantic. Witness the misty power of Seljalandsfoss and Skógafoss, stroll the haunting beauty of Reynisfjara Black Sand Beach, and explore the charming village of Vík.",
          duration: "~12 hours",
          price1: "🚗 1–4 persons: €980 per car",
          price2: "🚐 5–8 persons: €1,190 per car",
          includes: "Includes your dedicated chauffeur-guide, flexible stops, and unforgettable views.",
        },
        {
          image: airportTransferImage,
          title: "Silver Circle Escape",
          subtitle: "Geothermal Power, Waterfall Beauty, and Fjord Majesty",
          description: "Head north into Iceland's rugged heartland, where dramatic mountain passes lead to the cascading wonders of Hraunfossar and Barnafoss. Feel the heat at Deildartunguhver, Europe's most powerful geothermal spring, and explore the charming town of Borgarnes. Return to Reykjavík through the engineering marvel of the Hvalfjörður Tunnel — 5,762 meters long and 165 meters below sea level.",
          duration: "~6 hours",
          price1: "🚗 1–4 persons: €610 per car",
          price2: "🚐 5–8 persons: €810 per car",
          includes: "Includes expert chauffeur-guide, flexible stops, and breathtaking scenery",
        },
        {
          image: goldenCircleImage,
          title: "Snæfellsnes Peninsula Quest",
          subtitle: "Iceland in Miniature — One Peninsula, Endless Wonders",
          description: "Embark on a full-day journey through the diverse beauty of the Snæfellsnes Peninsula, often called Iceland in Miniature. Discover dramatic coastlines, towering basalt cliffs, volcanic craters, and charming fishing villages — all under the watchful gaze of the mystical Snæfellsjökull glacier.",
          duration: "~12 hours",
          price1: "🚗 1–4 persons: €1,090 per car",
          price2: "🚐 5–8 persons: €1,320 per car",
          includes: "Includes expert chauffeur-guide, flexible stops, and immersive storytelling across Iceland's most varied landscapes.",
        },
        {
          image: goldenCircleImage,
          title: "Krýsuvík – Reykjanes Volcanic Frontier",
          subtitle: "Raw Earth, Rising Steam, and Coastal Drama",
          description: "Venture into Iceland's dynamic southwest, where geothermal fields, lava flows, and rugged coastlines define the Reykjanes Peninsula. Explore the surreal landscapes of Krýsuvík, shaped by volcanic forces and steaming vents. This tour is subject to road conditions due to active geological zones — adding a layer of thrill to every journey.",
          duration: "Flexible (based on access)",
          price1: "🚗 1–4 persons: €470 per car",
          price2: "🚐 5–8 persons: €620 per car",
          includes: "Includes expert chauffeur-guide, route flexibility, and real-time safety monitoring in volcanic terrain.",
        },
      ],
    },
    {
      row: 2,
      items: [
        {
          image: goldenCircleImage,
          title: "Reykjavik sightseeing, 2 hours.",
          price1: "Car with 1-4 pers. : €180 pr.car",
          price2: "Car with 5-8 pers. : €240 pr.car",
        },
        {
          image: goldenCircleImage,
          title: "City Center",
          price1: "Car with 1-4 pers. : €25 pr.car",
          price2: "Car with 5-8 pers. : €35 pr.car",
        },
        {
          image: goldenCircleImage,
          title: "Keflavik Airport",
          price1: "Car with 1-4 pers. : €160 pr.car",
          price2: "Car with 5-8 pers. : €205 pr.car",
        },
      ],
    },
    {
      row: 3,
      items: [
        {
          image: goldenCircleImage,
          title: "Blue Lagoon transfer*",
          description: "With Return is 4 hours total. Note: Must have pre-booking for entrance.",
          price1: "Car with 1-4 pers. : €160 pr.car",
          price2: "Car with 5-8 pers. : €205 pr.car",
          returnPrice1: "Car with 1-4 pers. : €330 pr.car",
          returnPrice2: "Car with 5-8 pers. : €410 pr.car",
          showLabels: true,
        },
        {
          image: goldenCircleImage,
          title: "Hvammsvik* Hot Springs",
          description: "With Return is 4 hours total. Note: Must have pre-booking for entrance.",
          price1: "Car with 1-4 pers. : €195 pr.car",
          price2: "Car with 5-8 pers. : €260 pr.car",
          returnPrice1: "Car with 1-4 pers. : €390 pr.car",
          returnPrice2: "Car with 5-8 pers. : €520 pr.car",
          showLabels: true,
        },
        {
          image: goldenCircleImage,
          title: "Lava Tunnel*(Raufarholshellir)",
          description: "With Return is 2.5 hours total. Note: Must have pre-booking for entrance.",
          price1: "Car with 1-4 pers. : €160 pr.car",
          price2: "Car with 5-8 pers. : €200 pr.car",
          returnPrice1: "Car with 1-4 pers. : €330 pr.car",
          returnPrice2: "Car with 5-8 pers. : €410 pr.car",
          showLabels: true,
        },
      ],
    },
  ];

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
