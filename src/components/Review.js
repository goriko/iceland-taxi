import { Box, Typography} from "@mui/material";

function ReviewComponent() {
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
        REVIEWS
      </Typography>
    </Box>
  );
}
export default ReviewComponent;