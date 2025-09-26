import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { PRIMARY, WHITE } from "../constants/UI";

function ContactUsComponent() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: PRIMARY }}>
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
      <Box sx={{ 
        m: { xs: 2, md: 5 }, 
        pl: { xs: 2, md: 20 }, 
        pr: { xs: 2, md: 20 }
      }}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
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
          label="Phone Number"
          variant="outlined"
          fullWidth
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
          label="Email Address"
          variant="outlined"
          fullWidth
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
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
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