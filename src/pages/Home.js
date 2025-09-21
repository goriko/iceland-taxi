import NavBar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import ChauffeurServices from "../components/ChauffeurServices";
import ReviewComponent from "../components/Review";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { PRIMARY, WHITE } from "../constants/UI";
import carImage from "../assets/images/car.png";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FAQComponent from "../components/FAQ";
import AboutUsComponent from "../components/AboutUs";
import ContactUsComponent from "../components/ContactUs";
import FooterComponent from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Box id="home">
        <CarouselComponent />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "80%" },
          backgroundColor: PRIMARY,
          paddingLeft: { xs: "5%", md: "10%" },
          paddingRight: { xs: "5%", md: "10%" },
          paddingTop: { xs: "5%", md: "3%" },
          paddingBottom: { xs: "5%", md: "3%" },
          mx: { xs: 0, md: "auto" }
        }}
      >
        <Box sx={{
          flex: { xs: 1, md: 3 },
          alignContent: "center",
          order: { xs: 2, md: 1 }
        }}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              m: { xs: 2, md: 5 },
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }
            }}
          >
            THE GATEWAY TO YOUR ICELAND ADVENTURE BEGINS NOW.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              m: { xs: 2, md: 5 },
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }
            }}
          >
            {/* Travel Iceland effortlessly. With Iceland Grand Tours as your 24/7 private chauffeur and tour partner, every moment from arrival to departure is smooth and worry-free. */}
            Embark on a journey where wild landscapes meet seamless service. With Iceland Grand Tours as your 24/7 private chauffeur and custom travel partner, every glacier hike, volcano trail, and northern lights chase is delivered with precision, comfort, and local expertise — so you explore boldly, and arrive professionally.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              m: { xs: 2, md: 5 },
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "20px",
                color: WHITE,
                borderColor: WHITE,
                fontSize: { xs: "0.9rem", md: "1rem" },
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 }
              }}
            >
              Book A Ride
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "20px",
                color: PRIMARY,
                backgroundColor: WHITE,
                fontSize: { xs: "0.9rem", md: "1rem" },
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box sx={{
          flex: { xs: 1, md: 2 },
          order: { xs: 1, md: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            src={carImage}
            alt="car"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: { xs: "200px", md: "400px" }
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "80%" },
          paddingLeft: { xs: "5%", md: "10%" },
          paddingRight: { xs: "5%", md: "10%" },
          paddingTop: { xs: "5%", md: "3%" },
          paddingBottom: { xs: "5%", md: "3%" },
          mx: { xs: 0, md: "auto" }
        }}
      >
        <Card sx={{
          flex: 1,
          m: { xs: 1, md: 2 },
          borderRadius: "30px",
          backgroundColor: "#0057AD0F"
        }}>
          <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
            <LocalOfferOutlinedIcon sx={{ fontSize: { xs: 60, md: 80 } }} />
            <Typography variant="h4" sx={{ m: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
              Best Value
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              Unforgettable adventures made affordable
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Experience Iceland’s iconic landscapes without compromising comfort or quality. Our Best Value Tours combine expert planning with budget-friendly rates — so you get more adventure for every króna.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{
          flex: 1,
          m: { xs: 1, md: 2 },
          borderRadius: "30px",
          backgroundColor: "#0057AD0F"
        }}>
          <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
            <DescriptionOutlinedIcon sx={{ fontSize: { xs: 60, md: 80 } }} />
            <Typography variant="h4" sx={{ m: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
              Effortless Booking
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              Plan Boldly, Book Easily
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Your Iceland journey begins with just a few clicks. Iceland Grand Tours’ streamlined booking platform makes it simple to reserve custom tours, activities, and transfers — so you can focus on the thrill ahead.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{
          flex: 1,
          m: { xs: 1, md: 2 },
          borderRadius: "30px",
          backgroundColor: "#0057AD0F"
        }}>
          <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
            <DateRangeOutlinedIcon sx={{ fontSize: { xs: 60, md: 80 } }} />
            <Typography variant="h4" sx={{ m: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
              Flexible Dates
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              Your Schedule, Your Iceland
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              No rigid itineraries. No compromises. With our Flexible Day Taxi Tours, you choose the pace, the places, and the moments that matter. Iceland Grand Tours adapts to your rhythm — adventure on your terms.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box id="chauffeur-services">
        <ChauffeurServices />
      </Box>
      <Box id="reviews">
        <ReviewComponent />
      </Box>
      <Box id="faqs">
        <FAQComponent />
      </Box>
      <Box id="about-us">
        <AboutUsComponent />
      </Box>
      <Box id="contact-us">
        <ContactUsComponent />
      </Box>

      <FooterComponent />
    </>
  );
}
export default Home;