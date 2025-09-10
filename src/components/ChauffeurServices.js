import { PRIMARY, WHITE } from "../constants/UI";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import goldenCircleImage from "../assets/images/golden_circle.jpg";
import blueLagoonImage from "../assets/images/blue_lagoon.jpg";
import airportTransferImage from "../assets/images/airport_transfer.jpg";

function ChauffeurServices() {
  const ServiceCard = ({ image, title, description, price1, price2, returnPrice1, returnPrice2, showLabels = false, }) => (
    <Card
      sx={{
        flex: 1,
        m: { xs: 1, md: 2 },
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 2, md: 3 },
        }}
      >
        {/* Top part */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "200px", md: "250px" },
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              m: { xs: 2, md: 3 },
              fontSize: { xs: "1.5rem", md: "2rem" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body1"
              sx={{
                m: { xs: 1, md: 2 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: "center",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {/* Prices */}
        <Box sx={{ m: { xs: 2, md: 3 }, textAlign: "center" }}>
          {showLabels ? (
            <>
              {/* One Way */}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                One Way – {price1}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                One Way – {price2}
              </Typography>

              {/* Return */}
              {returnPrice1 && returnPrice2 && (
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      mt: 1,
                    }}
                  >
                    Return – {returnPrice1}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    Return – {returnPrice2}
                  </Typography>
                </>
              )}
            </>
          ) : (
            <>
              {/* Just prices, no labels */}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                {price1}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                {price2}
              </Typography>
            </>
          )}
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            m: { xs: 2, md: 3 },
            mb: { xs: 3, md: 5 },
            borderRadius: "20px",
            color: WHITE,
            backgroundColor: PRIMARY,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ m: 2 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          mb: 3,
        }}
      >
        PRIVATE CHAUFFEUR SERVICES
      </Typography>

      {/* Row 1 – 3 cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          width: { xs: "100%", md: "80%" },
          px: { xs: "5%", md: "10%" },
          py: { xs: "3%", md: "3%" },
          mx: { xs: 0, md: "auto" },
        }}
      >
        <ServiceCard
          image={goldenCircleImage}
          title="Golden Circle"
          description="A drive to the national park and former parliament site at Pingvellir. Next stop is Geysir hot spring area with Strokkur which erupts every few minutes. Then on to Gullfoss waterfall and 2-3 stops on the way back. Duration ~6 hours."
          price1="Car with 1-4 pers. : €680 pr.car"
          price2="Car with 5-8 pers. : €890 pr.car"
        />
        <ServiceCard
          image={blueLagoonImage}
          title="South Coast"
          description="The vast expanse of Iceland's Southern coastal plain, sandwiches snow-capped glaciers and the sea. Seljalandsfoss, Skogafoss, Black beach, Vik. Duration ~12 hours."
          price1="Car with 1-4 pers. : €980 pr.car"
          price2="Car with 5-8 pers. : €1.190 pr.car"
        />
        <ServiceCard
          image={airportTransferImage}
          title="Silver Circle"
          description="A drive north through the dramatic mountain scenery of Hvalfjörður (fjord), the beautiful Hraunfossar and Barnafoss waterfalls. Deildartunguhver, the most powerful geothermal spring in Europe and then Borgarnes. The tour returns to Reykjavik via the Hvalfjorour tunnel 5,762 m long, maximum depth of 165 m below sea level. Duration ~6 hours."
          price1="Car with 1-4 pers. : €610 pr.car"
          price2="Car with 5-8 pers. : €810 pr.car"
        />
      </Box>

      {/* Row 2 – 2 cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "80%" },
          px: { xs: "5%", md: "10%" },
          py: { xs: "3%", md: "3%" },
          mx: { xs: 0, md: "auto" },
        }}
      >
        <ServiceCard
          image={goldenCircleImage}
          title="Snaefellsnes Peninsula"
          description="Unforgettable journey through the breathtaking landscape on the Snaefellsnes Peninsula Tour. Known as 'Iceland in Miniature': dramatic coastlines, towering cliffs, and charming fishing villages. Duration ~12 hours."
          price1="Car with 1-4 pers. : €1.090 pr.car"
          price2="Car with 5-8 pers. : €1.320 pr.car"
        />
        <ServiceCard
          image={goldenCircleImage}
          title="Krysuvik - Reykjanes"
          description="Tour depends on road closures (volcanic area)."
          price1="Car with 1-4 pers. : €470 pr.car"
          price2="Car with 5-8 pers. : €620 pr.car"
        />
      </Box>

      {/* Row 3 – 3 cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          width: { xs: "100%", md: "80%" },
          px: { xs: "5%", md: "10%" },
          py: { xs: "3%", md: "3%" },
          mx: { xs: 0, md: "auto" },
        }}
      >
        <ServiceCard
          image={goldenCircleImage}
          title="Reykjavik sightseeing, 2 hours."
          // description="Chase the magical Aurora Borealis away from the city lights. Weather dependent, best during winter months. Duration ~4 hours."
          price1="Car with 1-4 pers. : €180 pr.car"
          price2="Car with 5-8 pers. : €240 pr.car"
        />
        <ServiceCard
          image={goldenCircleImage}
          title="City Center"
          // description="Remote and breathtaking landscapes with towering cliffs, birdlife, and untouched nature. Duration ~14 hours."
          price1="Car with 1-4 pers. : €25 pr.car"
          price2="Car with 5-8 pers. : €35 pr.car"
        />
        <ServiceCard
          image={goldenCircleImage}
          title="Keflavik Airport"
          // description="Discover Reykjavik's landmarks, culture, and vibrant life. Duration ~3 hours."
          price1="Car with 1-4 pers. : €160 pr.car"
          price2="Car with 5-8 pers. : €205 pr.car"
        />
      </Box>

      {/* Row 4 – 3 cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          width: { xs: "100%", md: "80%" },
          px: { xs: "5%", md: "10%" },
          py: { xs: "3%", md: "3%" },
          mx: { xs: 0, md: "auto" },
        }}
      >
        <ServiceCard
          image={goldenCircleImage}
          title="Blue Lagoon transfer*"
          description="With Return is 4 hours total. Note: Must have pre-booking for entrance."
          price1="Car with 1-4 pers. : €160 pr.car"
          price2="Car with 5-8 pers. : €205 pr.car"
          returnPrice1="Car with 1-4 pers. : €330 pr.car"
          returnPrice2="Car with 5-8 pers. : €410 pr.car"
          showLabels={true}
        />
        <ServiceCard
          image={goldenCircleImage}
          title="Hvammsvik* Hot Springs"
          description="With Return is 4 hours total. Note: Must have pre-booking for entrance."
          price1="Car with 1-4 pers. : €195 pr.car"
          price2="Car with 5-8 pers. : €260 pr.car"
          returnPrice1="Car with 1-4 pers. : €390 pr.car"
          returnPrice2="Car with 5-8 pers. : €520 pr.car"
          showLabels={true}
        />
        <ServiceCard
          image={goldenCircleImage}
          title="Lava Tunnel*(Raufarholshellir)"
          description="With Return is 2.5 hours total. Note: Must have pre-booking for entrance."
          price1="Car with 1-4 pers. : €160 pr.car"
          price2="Car with 5-8 pers. : €200 pr.car"
          returnPrice1="Car with 1-4 pers. : €330 pr.car"
          returnPrice2="Car with 5-8 pers. : €410 pr.car"
          showLabels={true}
        />
      </Box>
    </Box>
  );
}

export default ChauffeurServices;
