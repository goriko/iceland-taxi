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

function Home() {
  return (
    <>
      <NavBar />
      {/* <CarouselComponent /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          backgroundColor: PRIMARY,
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <Box style={{ flex: 3, alignContent: "center" }}>
          <Typography
            variant="h2"
            sx={{ color: "#FFFFFF", m: 5, textAlign: "left" }}
          >
            YOUR EXCITING ICELAND JOURNEY BEGINS HERE.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", m: 5, textAlign: "left" }}
          >
            Explore Iceland with Confidence. Ride Iceland is your 24/7 Private
            Chauffeur and Tour partner, ensuring a smooth and stress-free
            experience from arrival to departure.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              m: 5,
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                m: 1,
                borderRadius: "20px",
                color: WHITE,
                borderColor: WHITE,
              }}
            >
              Book A Ride
            </Button>
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
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box style={{ flex: 2 }}>
          <img src={carImage} alt="car" />
        </Box>
      </Box>
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
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px", backgroundColor: "#0057AD0F" }}>
          <CardContent>
            <LocalOfferOutlinedIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" sx={{ m: 2 }}>Best Value</Typography>
            <Typography variant="h6">
              Adventure awaits, and it doesn't have to break the bank!
            </Typography>
            <Typography variant="body1">
              Ride Iceland's Best Value Tours offer unforgettable experiences at
              budget-friendly prices.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px", backgroundColor: "#0057AD0F" }}>
          <CardContent>
            <DescriptionOutlinedIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" sx={{ m: 2 }}>Easy Booking</Typography>
            <Typography variant="h6">
              Planning your Icelandic escape shouldn't be a hassle!
            </Typography>
            <Typography variant="body1">
              Ride Iceland's user-friendly website makes booking your dream
              tours and activities a breexe. With just a few clicks, you can
              secure your spot on unforgettable experiences and start counting
              down the days to your Icelandic adventure.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px", backgroundColor: "#0057AD0F" }}>
          <CardContent>
            <DateRangeOutlinedIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" sx={{ m: 2 }}>Flexible Dates</Typography>
            <Typography variant="h6">
              Experience Iceland's magic at your own pace
            </Typography>
            <Typography variant="body1">
              with Ride Iceland's Flexible Days Taxi Tours! We understand that
              everyone travels differently, so we offer the freedom to create
              your ideal itinerary without rigid schedule.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <ChauffeurServices />
      <ReviewComponent />
      <FAQComponent />
    </>
  );
}
export default Home;