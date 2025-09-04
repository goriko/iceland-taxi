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
    <Box sx={{ m: 4 }}>
      <Typography variant="h4">ABOUT US</Typography>
      <Box sx={{ m: 5, pl: 20, pr: 20 }}>
        <Typography variant="body1" sx={{ m: 2, textAlign: "left" }}>At Ride Iceland, we are more than a private transportation service, We are your dedicated partner in discovering the beauty, culture, and wonder of Iceland.</Typography>
        <Typography variant="body1" sx={{ m: 2, textAlign: "left" }}>Born from a deep appreciation for Iceland’s stunning landscapes and rich heritage, Ride Iceland was founded with a simple mission: to provide every traveler with a seamless, memorable, and truly personalized Icelandic experience.</Typography>
        <Typography variant="body1" sx={{ m: 2, textAlign: "left" }}>We combine dependable private transfers with thoughtfully curated tours, all led by professional chauffeurs and licensed guides who bring years of local expertise and passion to every journey. Whether you’re navigating the Golden Circle, soaking in geothermal lagoons, or uncovering hidden gems off the beaten path, our team is committed to delivering a journey that’s as inspiring as the destination itself.</Typography>
        <Typography variant="body1" sx={{ m: 2, textAlign: "left" }}>Let us help you create unforgettable moments in Iceland — comfortably, safely, and with true local insight.</Typography>
      </Box>

      <Box
      sx={{
        height: "250px",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid #ccc",
        m: 5, ml: 25, mr: 25
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