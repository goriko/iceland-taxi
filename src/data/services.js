// Centralized service data for Chauffeur Services and Booking
import goldenCircleImage from "../assets/images/golden_circle.jpg";
import goldenCircleImage1 from "../assets/images/golden-circle-1.png";
import goldenCircleImage2 from "../assets/images/golden-circle-2.png";
import southCoastImage1 from "../assets/images/south_coast_1.png";
import southCoastImage2 from "../assets/images/south_coast_2.png";
import airportTransferImage from "../assets/images/airport_transfer.jpg";

export const servicesData = [
    {
        row: 1,
        items: [
            {
                image: goldenCircleImage1,
                hoverImage: goldenCircleImage2,
                title: "Golden Circle Discovery",
                subtitle: "Iceland's Legendary Loop of Fire, Water, and History",
                description: "Embark on a captivating journey through Iceland's most iconic sights. Begin at Þingvellir National Park, where tectonic plates drift and Iceland's ancient parliament once stood. Witness the explosive beauty of Strokkur geyser in the Geysir hot spring area, then feel the raw power of Gullfoss waterfall. Enjoy 2–3 scenic stops on the return, tailored to your interests.",
                duration: "~6 hours",
                price1: "🚗 1–4 persons: €680 per car",
                price2: "🚐 5–8 persons: €890 per car",
                includes: "Includes expert chauffeur-guide, flexible pacing, and unforgettable views",
            },
            {
                image: southCoastImage1,
                hoverImage: southCoastImage2,
                title: "South Coast Expedition",
                subtitle: "Where Glaciers Meet the Sea",
                description: "Journey through Iceland's dramatic southern plains — a land where snow-capped glaciers embrace the Atlantic. Witness the misty power of Seljalandsfoss and Skógafoss, stroll the haunting beauty of Reynisfjara Black Sand Beach, and explore the charming village of Vík.",
                duration: "~12 hours",
                price1: "🚗 1–4 persons: €980 per car",
                price2: "🚐 5–8 persons: €1,190 per car",
                includes: "Includes your dedicated chauffeur-guide, flexible stops, and unforgettable views.",
            },
            {
                image: airportTransferImage,
                title: "Silver Circle Escape",
                subtitle: "Geothermal Power, Waterfall Beauty, and Fjord Majesty",
                description: "Head north into Iceland's rugged heartland, where dramatic mountain passes lead to the cascading wonders of Hraunfossar and Barnafoss. Feel the heat at Deildartunguhver, Europe's most powerful geothermal spring, and explore the charming town of Borgarnes. Return to Reykjavík through the engineering marvel of the Hvalfjörður Tunnel — 5,762 meters long and 165 meters below sea level.",
                duration: "~6 hours",
                price1: "🚗 1–4 persons: €610 per car",
                price2: "🚐 5–8 persons: €810 per car",
                includes: "Includes expert chauffeur-guide, flexible stops, and breathtaking scenery",
            },
            {
                image: goldenCircleImage,
                title: "Snæfellsnes Peninsula Quest",
                subtitle: "Iceland in Miniature — One Peninsula, Endless Wonders",
                description: "Embark on a full-day journey through the diverse beauty of the Snæfellsnes Peninsula, often called Iceland in Miniature. Discover dramatic coastlines, towering basalt cliffs, volcanic craters, and charming fishing villages — all under the watchful gaze of the mystical Snæfellsjökull glacier.",
                duration: "~12 hours",
                price1: "🚗 1–4 persons: €1,090 per car",
                price2: "🚐 5–8 persons: €1,320 per car",
                includes: "Includes expert chauffeur-guide, flexible stops, and immersive storytelling across Iceland's most varied landscapes.",
            },
            {
                image: goldenCircleImage,
                title: "Krýsuvík – Reykjanes Volcanic Frontier",
                subtitle: "Raw Earth, Rising Steam, and Coastal Drama",
                description: "Venture into Iceland's dynamic southwest, where geothermal fields, lava flows, and rugged coastlines define the Reykjanes Peninsula. Explore the surreal landscapes of Krýsuvík, shaped by volcanic forces and steaming vents. This tour is subject to road conditions due to active geological zones — adding a layer of thrill to every journey.",
                duration: "Flexible (based on access)",
                price1: "🚗 1–4 persons: €470 per car",
                price2: "🚐 5–8 persons: €620 per car",
                includes: "Includes expert chauffeur-guide, route flexibility, and real-time safety monitoring in volcanic terrain.",
            },
        ],
    },
    {
        row: 2,
        items: [
            {
                image: goldenCircleImage,
                title: "Reykjavik sightseeing, 2 hours.",
                price1: "Car with 1-4 pers. : €180 pr.car",
                price2: "Car with 5-8 pers. : €240 pr.car",
            },
            {
                image: goldenCircleImage,
                title: "City Center",
                price1: "Car with 1-4 pers. : €25 pr.car",
                price2: "Car with 5-8 pers. : €35 pr.car",
            },
            {
                image: goldenCircleImage,
                title: "Keflavik Airport",
                price1: "Car with 1-4 pers. : €160 pr.car",
                price2: "Car with 5-8 pers. : €205 pr.car",
            },
        ],
    },
    {
        row: 3,
        items: [
            {
                image: goldenCircleImage,
                title: "Blue Lagoon transfer*",
                description: "With Return is 4 hours total. Note: Must have pre-booking for entrance.",
                price1: "Car with 1-4 pers. : €160 pr.car",
                price2: "Car with 5-8 pers. : €205 pr.car",
                returnPrice1: "Car with 1-4 pers. : €330 pr.car",
                returnPrice2: "Car with 5-8 pers. : €410 pr.car",
                showLabels: true,
            },
            {
                image: goldenCircleImage,
                title: "Hvammsvik* Hot Springs",
                description: "With Return is 4 hours total. Note: Must have pre-booking for entrance.",
                price1: "Car with 1-4 pers. : €195 pr.car",
                price2: "Car with 5-8 pers. : €260 pr.car",
                returnPrice1: "Car with 1-4 pers. : €390 pr.car",
                returnPrice2: "Car with 5-8 pers. : €520 pr.car",
                showLabels: true,
            },
            {
                image: goldenCircleImage,
                title: "Lava Tunnel*(Raufarholshellir)",
                description: "With Return is 2.5 hours total. Note: Must have pre-booking for entrance.",
                price1: "Car with 1-4 pers. : €160 pr.car",
                price2: "Car with 5-8 pers. : €200 pr.car",
                returnPrice1: "Car with 1-4 pers. : €330 pr.car",
                returnPrice2: "Car with 5-8 pers. : €410 pr.car",
                showLabels: true,
            },
        ],
    },
];
