// src/pages/AirportTransfer.js
import NavBar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import airportTransferImage from "../assets/images/airport_transfer.jpg";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { PRIMARY, } from "../constants/UI";

const AirportTransfer = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${airportTransferImage})`,
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
          Landing in Iceland? Take the stress out of your arrival with a reliable
          Keflavík Airport transfer service. We offer a convenient and comfortable
          way to get from the airport directly to your Reykjavik accommodation,
          ensuring a smooth and relaxing start to your Icelandic adventure.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          Choose Your Perfect Transfer Option:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Shared Shuttles:</strong> Our budget-friendly shared shuttles are a
          great option for solo travelers or small groups. You’ll share the ride with
          other passengers heading to the Reykjavik city center, with stops at major
          hotels and guesthouses along the way.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Private Transfers:</strong> For a more personalized experience,
          choose a private transfer. Your dedicated driver will meet you upon arrival
          at the airport, whisk you away in a comfortable vehicle, and deliver you
          directly to your hotel doorstep.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          Why Choose Us for Your Keflavík Airport Transfer:
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Reliable Service: We guarantee on-time arrivals and departures, ensuring
          you reach your destination without delay.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ 24/7 Availability: No matter what time your flight arrives, we’ll be
          there to greet you.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Experienced Drivers: Our professional drivers are knowledgeable about the
          area and will ensure a safe and comfortable journey.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Competitive Rates: We offer affordable prices for both shared and private
          transfers.
        </Typography>
        <Typography variant="body1" paragraph>
          ✅ Meet & Greet Service: Our friendly staff will be waiting for you at the
          airport arrivals hall, holding a sign with your name. (Optional, depending
          on your service)
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 3, fontWeight: "bold", color: "primary.main" }}
        >
          Book Your Iceland Airport Transfer Today!
        </Typography>
        {/* Book Now Button */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
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
        {/* Booking Form */}
        <Box
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