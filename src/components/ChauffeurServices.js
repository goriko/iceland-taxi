import { PRIMARY, WHITE } from "../constants/UI";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import goldenCircleImage from "../assets/images/golden_circle.jpg";
import blueLagoonImage from "../assets/images/blue_lagoon.jpg";
import airportTransferImage from "../assets/images/airport_transfer.jpg";

function ChauffeurServices() {
  return (
    <Box sx={{ m: 2 }}>
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          mb: 3
        }}
      >
        PRIVATE CHAUFFEUR SERVICES
      </Typography>
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
        <Card sx={{ 
          flex: 1, 
          m: { xs: 1, md: 2 }, 
          borderRadius: "30px" 
        }}>
          <CardContent sx={{ 
            height: "100%", 
            display: "flex", 
            flexDirection: "column",
            p: { xs: 2, md: 3 }
          }}>
            <Box sx={{ 
              width: "100%", 
              height: { xs: "200px", md: "250px" },
              overflow: "hidden",
              borderRadius: "15px"
            }}>
              <img
                src={goldenCircleImage}
                alt="Golden Circle"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover"
                }}
              />
            </Box>
            <Typography 
              variant="h4" 
              sx={{ 
                m: { xs: 2, md: 3 },
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: "center"
              }}
            >
              Golden Circle
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                m: { xs: 1, md: 2 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "center"
              }}
            >
              Indulge in an exclusive journey through Iceland's legendary Golden
              Circle. Marvel at the breathtaking beauty of Gullfoss — the
              majestic "Golden Falls" — as it plunges into a stunning canyon, a
              true testament to nature's grandeur. Travel in style and comfort
              with our premium private service. Reserve your luxurious ride
              today with Ride Iceland.
            </Typography>
            <Box sx={{ m: { xs: 2, md: 3 }, textAlign: "center" }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €680 1-4 passengers
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €890 5-8 passengers
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: { xs: 2, md: 3 },
                marginTop: "auto",
                mb: { xs: 3, md: 5 },
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ 
          flex: 1, 
          m: { xs: 1, md: 2 }, 
          borderRadius: "30px" 
        }}>
          <CardContent sx={{ 
            height: "100%", 
            display: "flex", 
            flexDirection: "column",
            p: { xs: 2, md: 3 }
          }}>
            <Box sx={{ 
              width: "100%", 
              height: { xs: "200px", md: "250px" },
              overflow: "hidden",
              borderRadius: "15px"
            }}>
              <img
                src={blueLagoonImage}
                alt="Blue Lagoon"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover"
                }}
              />
            </Box>
            <Typography 
              variant="h4" 
              sx={{ 
                m: { xs: 2, md: 3 },
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: "center"
              }}
            >
              Blue Lagoon
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                m: { xs: 1, md: 2 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "center"
              }}
            >
              Escape to the serene luxury of the Blue Lagoon on our exclusive
              geothermal spa tour. Immerse yourself in the ethereal,
              milky-turquoise waters—rich in revitalizing minerals renowned for
              their healing properties. Let tranquility wash over you as you
              relax and rejuvenate in one of Iceland's most iconic and indulgent
              natural wonders.
            </Typography>
            <Box sx={{ m: { xs: 2, md: 3 }, textAlign: "center" }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €330 1-4 passengers ( Roundtrip )
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €410 5-8 passengers ( Roundtrip )
              </Typography>
            </Box>
            <Box sx={{ m: { xs: 2, md: 3 }, textAlign: "center" }}>
              <Typography
                variant="body1"
                sx={{ 
                  fontWeight: "bold", 
                  fontStyle: "italic",
                  fontSize: { xs: "0.8rem", md: "0.9rem" }
                }}
              >
                Includes 2 hours of complimentary waiting time. Additional
                waiting time is charged at €90 EUR per hour.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: { xs: 2, md: 3 },
                marginTop: "auto",
                mb: { xs: 3, md: 5 },
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ 
          flex: 1, 
          m: { xs: 1, md: 2 }, 
          borderRadius: "30px" 
        }}>
          <CardContent sx={{ 
            height: "100%", 
            display: "flex", 
            flexDirection: "column",
            p: { xs: 2, md: 3 }
          }}>
            <Box sx={{ 
              width: "100%", 
              height: { xs: "200px", md: "250px" },
              overflow: "hidden",
              borderRadius: "15px"
            }}>
              <img
                src={airportTransferImage}
                alt="Airport Transfer"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover"
                }}
              />
            </Box>
            <Typography 
              variant="h4" 
              sx={{ 
                m: { xs: 2, md: 3 },
                fontSize: { xs: "1.5rem", md: "2rem" },
                textAlign: "center"
              }}
            >
              Airport Transfer
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                m: { xs: 1, md: 2 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "center"
              }}
            >
              Arrive in Iceland with ease and elegance. Book your Keflavík
              Airport transfer for a smooth, stress-free welcome. Your private
              chauffeur will greet you upon arrival, ensuring a seamless
              transition from flight to first-class comfort. Experience true
              reliability from the moment you land.
            </Typography>
            <Box sx={{ m: { xs: 2, md: 3 }, textAlign: "center" }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €160 1-4 passengers
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }
                }}
              >
                €205 5-8 passengers
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: { xs: 2, md: 3 },
                marginTop: "auto",
                mb: { xs: 3, md: 5 },
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
                fontSize: { xs: "0.9rem", md: "1rem" }
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
export default ChauffeurServices;