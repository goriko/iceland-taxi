import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { PRIMARY, WHITE } from "../constants/UI";
import emailjs from "emailjs-com";
import CountryCodeSelector from "./CountryCodeSelector";

function ContactUsComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "IGTService_9jrpt0v!",
        "IGTTemplate_79dpk9f",
        e.target,
        "GFF-5iOaw80fWGb66"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#2c3e50" }}>
      <Typography
        variant="h4"
        sx={{
          color: WHITE,
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mb: 3
        }}
      >
        CONTACT US
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          m: { xs: 2, md: 5 },
          pl: { xs: 2, md: 20 },
          pr: { xs: 2, md: 20 }
        }}>
        <TextField
          name="name"
          label="Full Name"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            sx: {
              color: "#fff",           // Input text
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#ccc",           // Label color
              "&.Mui-focused": {
                color: "#fff",         // Label color when focused
              },
            },
          }}
          sx={{
            mt: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",   // Default border
              },
              "&:hover fieldset": {
                borderColor: "#fff",   // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",   // Focus border
              },
            },
          }}
        />
        <CountryCodeSelector
          name="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          required
          inputTextColor="#fff"
          labelColor="#ccc"
          labelFocusedColor="#fff"
          sx={{
            mt: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",   // Default border
              },
              "&:hover fieldset": {
                borderColor: "#fff",   // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",   // Focus border
              },
            },
          }}
        />
        <TextField
          name="email"
          label="Email Address"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            sx: {
              color: "#fff",           // Input text
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#ccc",           // Label color
              "&.Mui-focused": {
                color: "#fff",         // Label color when focused
              },
            },
          }}
          sx={{
            mt: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",   // Default border
              },
              "&:hover fieldset": {
                borderColor: "#fff",   // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",   // Focus border
              },
            },
          }}
        />
        <TextField
          name="info"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          InputProps={{
            sx: {
              color: "#fff",           // Input text
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#ccc",           // Label color
              "&.Mui-focused": {
                color: "#fff",         // Label color when focused
              },
            },
          }}
          sx={{
            mt: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",   // Default border
              },
              "&:hover fieldset": {
                borderColor: "#fff",   // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",   // Focus border
              },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            m: 1,
            borderRadius: "20px",
            color: PRIMARY,
            backgroundColor: WHITE,
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
export default ContactUsComponent;