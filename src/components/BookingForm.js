// src/components/BookingForm.js
import { Box, TextField, Checkbox, FormControlLabel, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import { PRIMARY } from "../constants/UI";

export default function BookingForm({ service }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("IGTService_9jrpt0v!", "IGTTemplate_4007cr5!", e.target, "GFF-5iOaw80fWGb66")
      .then(() => {
        setError(false);
        setOpen(true);
        e.target.reset();
      })
      .catch(() => {
        setError(true);
        setOpen(true);
      });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {service && <input type="hidden" name="serviceType" value={service.title} />}
        <TextField name="name" label="Full Name" required fullWidth />
        <TextField name="email" label="Email Address" type="email" required fullWidth />
        <TextField name="phone" label="Phone Number" type="tel" required fullWidth />
        <TextField name="date" label="Date of Arrival/Departure" type="date" InputLabelProps={{ shrink: true }} required fullWidth />
        <TextField name="time" label="Time of Arrival/Departure" type="time" InputLabelProps={{ shrink: true }} required fullWidth />
        <TextField name="pickup" label="Pickup Location" required fullWidth />
        <TextField name="dropoff" label="Drop-off Location" required fullWidth />
        <TextField name="info" label="Additional Information" multiline rows={4} fullWidth />

        <FormControlLabel control={<Checkbox required />} label="I have agreed to the terms and conditions" />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: PRIMARY,
            color: "white",
            "&:hover": { backgroundColor: "#004aad" },
          }}
        >
          Book Now
        </Button>
      </Box>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={error ? "error" : "success"} sx={{ width: "100%" }}>
          {error ? "❌ Failed to send booking. Please try again." : "✅ Booking request sent successfully!"}
        </Alert>
      </Snackbar>
    </>
  );
}
