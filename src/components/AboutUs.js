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