import { PRIMARY, WHITE } from "../constants/UI";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import goldenCircleImage from "../assets/images/golden_circle.jpg";
import blueLagoonImage from "../assets/images/blue_lagoon.jpg";
import airportTransferImage from "../assets/images/airport_transfer.jpg";

function ChauffeurServices() {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h3">PRIVATE CHAUFFEUR SERVICES</Typography>
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
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px" }}>
          <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%" }}>
              <img
                src={goldenCircleImage}
                alt="car"
                style={{ width: "-webkit-fill-available" }}
              />
            </Box>
            <Typography variant="h4" sx={{ m: 3 }}>
              Golden Circle
            </Typography>
            <Typography variant="body1" sx={{ m: 2 }}>
              Indulge in an exclusive journey through Iceland’s legendary Golden
              Circle. Marvel at the breathtaking beauty of Gullfoss — the
              majestic “Golden Falls” — as it plunges into a stunning canyon, a
              true testament to nature’s grandeur. Travel in style and comfort
              with our premium private service. Reserve your luxurious ride
              today with Ride Iceland.
            </Typography>
            <Box sx={{ m: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €680 1-4 passengers
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €890 5-8 passengers
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: 3,
                marginTop: "auto",
                mb: 5,
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px" }}>
          <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%" }}>
              <img
                src={blueLagoonImage}
                alt="car"
                style={{ width: "-webkit-fill-available" }}
              />
            </Box>
            <Typography variant="h4" sx={{ m: 3 }}>
              Blue Lagoon
            </Typography>
            <Typography variant="body1" sx={{ m: 2 }}>
              Escape to the serene luxury of the Blue Lagoon on our exclusive
              geothermal spa tour. Immerse yourself in the ethereal,
              milky-turquoise waters—rich in revitalizing minerals renowned for
              their healing properties. Let tranquility wash over you as you
              relax and rejuvenate in one of Iceland’s most iconic and indulgent
              natural wonders.
            </Typography>
            <Box sx={{ m: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €330 1-4 passengers ( Roundtrip )
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €410 5-8 passengers ( Roundtrip )
              </Typography>
            </Box>
            <Box sx={{ m: 3 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontStyle: "italic" }}
              >
                Includes 2 hours of complimentary waiting time. Additional
                waiting time is charged at €90 EUR per hour.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: 3,
                marginTop: "auto",
                mb: 5,
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
        <Card style={{ flex: 1 }} sx={{ m: 2, borderRadius: "30px" }}>
          <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%" }}>
              <img
                src={airportTransferImage}
                alt="car"
                style={{ width: "-webkit-fill-available" }}
              />
            </Box>
            <Typography variant="h4" sx={{ m: 3 }}>
              Airport Transfer
            </Typography>
            <Typography variant="body1" sx={{ m: 2 }}>
              Arrive in Iceland with ease and elegance. Book your Keflavík
              Airport transfer for a smooth, stress-free welcome. Your private
              chauffeur will greet you upon arrival, ensuring a seamless
              transition from flight to first-class comfort. Experience true
              reliability from the moment you land.
            </Typography>
            <Box sx={{ m: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €160 1-4 passengers
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                €205 5-8 passengers
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                m: 3,
                marginTop: "auto",
                mb: 5,
                borderRadius: "20px",
                color: WHITE,
                backgroundColor: PRIMARY,
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