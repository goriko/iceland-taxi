import {
  Box,
  Typography,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

// Create custom airplane icon
const airplaneIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#ff6b35"/>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
  shadowUrl: markerShadow,
  shadowSize: [50, 50],
  shadowAnchor: [20, 50]
});

// Create custom home icon
const homeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#2e7d32"/>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
  shadowUrl: markerShadow,
  shadowSize: [50, 50],
  shadowAnchor: [20, 50]
});

function AboutUsComponent() {

  const position = [64.0049, -22.5624];
  const airportPosition = [63.9850, -22.6056]; // Keflavík Airport coordinates
  
  // Key destinations from the services
  const destinations = [
    { name: "Blue Lagoon", coords: [63.8800, -22.4496], color: "#2196f3" },
    { name: "Gullfoss Waterfall", coords: [64.3261, -20.1211], color: "#4caf50" },
    { name: "Geysir", coords: [64.3114, -20.3003], color: "#ff9800" },
    { name: "Þingvellir National Park", coords: [64.2553, -21.1296], color: "#9c27b0" },
    { name: "Reykjavík", coords: [64.1466, -21.9426], color: "#f44336" },
    { name: "Seljalandsfoss", coords: [63.6156, -19.9889], color: "#00bcd4" },
    { name: "Skógafoss", coords: [63.5319, -19.5114], color: "#795548" },
    { name: "Reynisfjara Beach", coords: [63.4042, -19.0375], color: "#607d8b" }
  ];

  // Create custom icons for destinations
  const createDestinationIcon = (color) => new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="white"/>
      </svg>
    `),
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [15, 41]
  });

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
          With Iceland Grand Tours, you’re not just booking a ride — you’re setting off on a journey to uncover Iceland’s raw beauty, rich culture, and unforgettable wonders.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: { xs: 1, md: 2 },
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Inspired by Iceland’s breathtaking landscapes and vibrant heritage, Iceland Grand Tours was created with one clear mission: to deliver every traveler a smooth, unforgettable, and uniquely tailored Icelandic journey.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: { xs: 1, md: 2 },
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          We blend reliable private transfers with carefully crafted tours, guided by professional chauffeurs and licensed experts who share a deep passion and years of local knowledge. From exploring the Golden Circle and relaxing in geothermal lagoons to discovering hidden treasures beyond the usual routes, our team is dedicated to making every journey as inspiring as the destination.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            m: { xs: 1, md: 2 },
            fontSize: { xs: "0.9rem", md: "1rem" }
          }}
        >
          Allow us to craft unforgettable Icelandic experiences — with elegance, comfort, and authentic local expertise.
        </Typography>
      </Box>

      <Box
        sx={{
          height: { xs: "400px", sm: "500px", md: "600px" },
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid #ccc",
          m: { xs: 2, md: 5 },
          ml: { xs: 2, md: 25 },
          mr: { xs: 2, md: 25 }
        }}
      >
        <MapContainer center={position} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={homeIcon}>
            <Popup>Iceland Grand Tours - Keflavík, Iceland</Popup>
          </Marker>
          <Marker position={airportPosition} icon={airplaneIcon}>
            <Popup>Keflavík International Airport (KEF)</Popup>
          </Marker>
          {destinations.map((destination, index) => (
            <Marker 
              key={index} 
              position={destination.coords} 
              icon={createDestinationIcon(destination.color)}
            >
              <Popup>{destination.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
}
export default AboutUsComponent;