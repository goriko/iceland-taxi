import {
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Grid
} from "@mui/material";
import { PRIMARY, WHITE } from "../constants/UI";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterComponent() {
  return (
    <Box sx={{ p: { xs: 0.5, md: 1 }, backgroundColor: PRIMARY }}>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
          paddingLeft: { xs: "5%", md: "5%" },
          paddingRight: { xs: "5%", md: "5%" },
          paddingTop: { xs: "0.5%", md: "0.8%" },
          paddingBottom: { xs: "0.5%", md: "0.8%" },
          mx: { xs: 0, md: "auto" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }} justifyContent="center" alignItems="center">
          {/* Column 1: Company Info & Address */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0.5 },
              py: { xs: 1, md: 1 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }
            }}>
              <Typography
                variant="h6"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 1,
                  fontWeight: "bold"
                }}
              >
                Iceland Grand Tours
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  mb: 0.5,
                  opacity: 0.9,
                  lineHeight: 1.4
                }}
              >
                105 Bogahlid, Iceland
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.75rem", md: "0.8rem" },
                  opacity: 0.8,
                  lineHeight: 1.3
                }}
              >
                Your trusted partner for Iceland adventures
              </Typography>
            </Box>
          </Grid>

          {/* Column 2: Contact Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, md: 0.5 },
              py: { xs: 1, md: 1 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }
            }}>
              <Typography
                variant="h6"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 1,
                  fontWeight: "bold"
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  mb: 0.5,
                  opacity: 0.9,
                  lineHeight: 1.4
                }}
              >
                +354 770 3560
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  mb: 1,
                  opacity: 0.9,
                  lineHeight: 1.4
                }}
              >
                icelandgrand77@gmail.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.75rem", md: "0.8rem" },
                  opacity: 0.8,
                  lineHeight: 1.3
                }}
              >
                Available 24/7 for your convenience
              </Typography>
            </Box>
          </Grid>

          {/* Column 3: Social Media & Copyright */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              textAlign: { xs: "center", md: "right" },
              px: { xs: 2, md: 0.5 },
              py: { xs: 1, md: 1 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" }
            }}>
              <Typography
                variant="h6"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 1,
                  fontWeight: "bold"
                }}
              >
                Follow Us
              </Typography>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  justifyContent: { xs: "center", md: "flex-end" },
                  mb: 1
                }}
              >
                <Tooltip title="Facebook">
                  <IconButton
                    component="a"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ 
                      color: "#3b5998",
                      fontSize: "1.2rem",
                      "&:hover": {
                        backgroundColor: "rgba(59, 89, 152, 0.1)",
                        transform: "scale(1.1)"
                      },
                      transition: "all 0.3s ease"
                    }}
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
                    sx={{ 
                      color: "#1DA1F2",
                      fontSize: "1.2rem",
                      "&:hover": {
                        backgroundColor: "rgba(29, 161, 242, 0.1)",
                        transform: "scale(1.1)"
                      },
                      transition: "all 0.3s ease"
                    }}
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
                    sx={{ 
                      color: "#E1306C",
                      fontSize: "1.2rem",
                      "&:hover": {
                        backgroundColor: "rgba(225, 48, 108, 0.1)",
                        transform: "scale(1.1)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: WHITE,
                  fontSize: { xs: "0.75rem", md: "0.8rem" },
                  opacity: 0.8,
                  lineHeight: 1.3
                }}
              >
                Iceland Grand Tours © GGN2025
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default FooterComponent;