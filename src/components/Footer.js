import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Tooltip,
  IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PRIMARY, WHITE } from "../constants/UI";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterComponent() {
  return (
    <Box sx={{ p: 4, backgroundColor: PRIMARY }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box sx={{ m: 3 }}>
            <Typography variant="h6" sx={{ color: WHITE, textAlign: "left" }}>Address</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>Ride Iceland ehf.</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>225 Garðabær, Iceland</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>KT : 600225-2430</Typography>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography variant="h6" sx={{ color: WHITE, textAlign: "left" }}>Contact</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>+354 888 3191</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>info@rideiceland.is</Typography>
            <Typography variant="body1" sx={{ color: WHITE, textAlign: "left" }}>Legal Notice | Privacy Policy</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Tooltip title="Facebook">
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "#3b5998" }}
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Twitter">
              <IconButton
                component="a"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "#1DA1F2" }}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram">
              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "#E1306C" }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography variant="h6" sx={{ color: WHITE, mt: 2 }}>Ride Iceland ehf. © 2024</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default FooterComponent;