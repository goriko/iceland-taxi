// src/pages/ChauffeurBooking.js
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import BookingForm from "../components/BookingForm";
import { servicesData } from "../data/services";

export default function ChauffeurBooking() {
  const { serviceId } = useParams();

  // flatten all rows -> items
  const allServices = servicesData.flatMap((row) => row.items);

  // decode and find by title
  const service = allServices.find(
    (s) => s.title === decodeURIComponent(serviceId)
  );

  return (
    <>
      <NavBar />

      {/* Hero banner */}
      <Box
        sx={{
          backgroundImage: `url(${service?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
        }}
      >
        {service?.title || "Chauffeur Booking"}
      </Box>

      {/* Service details + booking form */}
      <Box sx={{ maxWidth: "800px", margin: "50px auto", px: 3 }}>
        {service?.description && (
          <Typography variant="body1" paragraph>
            {service.description}
          </Typography>
        )}

        <Typography variant="h6" fontWeight="bold" color="primary.main" mt={3}>
          Book Your Chauffeur Service Today!
        </Typography>

        {/* pass service info into the form if you want */}
        <BookingForm service={service} />
      </Box>

      <FooterComponent />
    </>
  );
}
