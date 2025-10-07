import {
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton
} from "@mui/material";
import { PRIMARY, WHITE } from "../constants/UI";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterComponent() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: PRIMARY }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "80%" },
          paddingLeft: { xs: "5%", md: "10%" },
          paddingRight: { xs: "5%", md: "10%" },
          paddingTop: { xs: "3%", md: "3%" },
          paddingBottom: { xs: "3%", md: "3%" },
          mx: { xs: 0, md: "auto" }
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ m: { xs: 2, md: 3 } }}>
            <Typography
              variant="h6"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1rem", md: "1.25rem" }
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Iceland Grand Tours ehf.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              225 Garðabær, Iceland
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              KT : 600225-2430
            </Typography>
          </Box>
          <Box sx={{ m: { xs: 2, md: 3 } }}>
            <Typography
              variant="h6"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1rem", md: "1.25rem" }
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              +354 888 3191
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              icelandgrandtours@gmail.com
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: WHITE,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Legal Notice | Privacy Policy
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              mb: 2
            }}
          >
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
          <Typography
            variant="h6"
            sx={{
              color: WHITE,
              fontSize: { xs: "0.9rem", md: "1rem" }
            }}
          >
            Iceland Grand Tours © GGN2025
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default FooterComponent;