// src/pages/AirportTransfer.js
import NavBar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import carouselImage2 from "../assets/images/carousel2.png";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { PRIMARY, } from "../constants/UI";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AirportTransfer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#booking-form") {
      const form = document.getElementById("booking-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${carouselImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%",
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
        Airport Transfer
      </Box>
      {/* Content Section */}
      <Box
        sx={{
          maxWidth: "800px",
          margin: "50px auto",
          textAlign: "left",
          px: 3,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Airport Transportation
        </Typography>
        <Typography variant="body1" paragraph>
          Arriving in Iceland? Begin your journey stress-free with our dependable Keflavík Airport transfer. Enjoy a seamless ride from the airport straight to your Reykjavik accommodation, offering comfort, convenience, and a relaxing start to your Icelandic adventure.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          Choose the Ideal Transfer for Your Journey:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Shared Shuttles:</strong> A cost-effective choice for solo travelers or small groups. Ride with fellow passengers headed to Reykjavik’s city center, with convenient stops at major hotels and guesthouses along the route.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Private Transfers:</strong> For a tailored experience, opt for a private transfer. Your personal driver will greet you at the airport and provide a comfortable, direct ride straight to your hotel doorstep.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          Why Choose Us for Your Keflavík Airport Transfer:
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Reliable Service: Count on punctual pick-ups and drop-offs, ensuring you arrive at your destination right on time.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ 24/7 Availability: Whatever hour your flight lands, our team will be ready to welcome you.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Experienced Drivers: Travel with confidence — our skilled drivers know the region well and provide a safe, comfortable ride.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Competitive Rates: Enjoy excellent value with fair pricing on both shared and private transfers.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Meet & Greet Service: Be welcomed at the arrivals hall by our friendly staff, holding a sign with your name (optional, based on your selected service).
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 3, fontWeight: "bold", color: "primary.main" }}
        >
          Book Your Iceland Airport Transfer Today!
        </Typography>
        {/* Booking Form */}
        <Box id="booking-form"
          component="form"
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "left",
          }}
        >
          <TextField label="Full Name" variant="outlined" required fullWidth />
          <TextField label="Email Address" type="email" variant="outlined" required fullWidth />
          <TextField label="Phone Number" type="tel" variant="outlined" required fullWidth />
          <TextField label="Date of Arrival/Departure" type="date" InputLabelProps={{ shrink: true }} required fullWidth />
          <TextField label="Time of Arrival/Departure" type="time" InputLabelProps={{ shrink: true }} required fullWidth />
          <TextField label="Pickup Location" variant="outlined" required fullWidth />
          <TextField label="Drop-off Location" variant="outlined" required fullWidth />
          <TextField
            label="Additional Information"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox required />}
            label="I have agreed to the terms and conditions"
          />

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                flex: 1,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: PRIMARY,
                color: "white",
                "&:hover": {
                  backgroundColor: "#004aad",
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>

      <FooterComponent />
    </>
  );
};

export default AirportTransfer;