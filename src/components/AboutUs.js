import {
  Box,
  Typography,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function AboutUsComponent() {

  const position = [40.6892, -74.0445];

  return (
    <Box sx={{ m: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h4" 
        sx={{ 
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mb: 3
        }}
      >
        ABOUT US
      </Typography>
      <Box sx={{ 
        m: { xs: 2, md: 5 }, 
        pl: { xs: 2, md: 20 }, 
        pr: { xs: 2, md: 20 },
        textAlign: { xs: "center", md: "left" }
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            m: { xs: 1, md: 2 }, 
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          At Ride Iceland, we are more than a private transportation service, We are your dedicated partner in discovering the beauty, culture, and wonder of Iceland.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            m: { xs: 1, md: 2 }, 
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Born from a deep appreciation for Iceland's stunning landscapes and rich heritage, Ride Iceland was founded with a simple mission: to provide every traveler with a seamless, memorable, and truly personalized Icelandic experience.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            m: { xs: 1, md: 2 }, 
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          We combine dependable private transfers with thoughtfully curated tours, all led by professional chauffeurs and licensed guides who bring years of local expertise and passion to every journey. Whether you're navigating the Golden Circle, soaking in geothermal lagoons, or uncovering hidden gems off the beaten path, our team is committed to delivering a journey that's as inspiring as the destination itself.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            m: { xs: 1, md: 2 }, 
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Let us help you create unforgettable moments in Iceland — comfortably, safely, and with true local insight.
        </Typography>
      </Box>

      <Box
        sx={{
          height: { xs: "200px", sm: "250px", md: "300px" },
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid #ccc",
          m: { xs: 2, md: 5 }, 
          ml: { xs: 2, md: 25 }, 
          mr: { xs: 2, md: 25 }
        }}
      >
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Statue of Liberty</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
}
export default AboutUsComponent;