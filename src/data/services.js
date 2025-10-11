// Centralized service data for Chauffeur Services and Booking
import goldenCircleImage1 from "../assets/images/golden-circle-1.png";
import goldenCircleImage2 from "../assets/images/golden-circle-2.png";
import southCoastImage1 from "../assets/images/south_coast_1.png";
import southCoastImage2 from "../assets/images/south_coast_2.png";
import silverCircleImage1 from "../assets/images/silver-circle-escape-1.png";
import silverCircleImage2 from "../assets/images/silver-circle-escape-2.png";
import peninsulaImage1 from "../assets/images/sn-fellsnes-peninsula-1.png";
import peninsulaImage2 from "../assets/images/sn-fellsnes-peninsula-2.png";
import volcanicFrontierImage1 from "../assets/images/reykjanes-volcanic-frontier-1.png";
import volcanicFrontierImage2 from "../assets/images/reykjanes-volcanic-frontier-2.png";
import reykjavikSightseeingImage1 from "../assets/images/reykjavik-sightseeing-1.png";
import reykjavikSightseeingImage2 from "../assets/images/reykjavik-sightseeing-2.png";
import cityCenterImage1 from "../assets/images/city-center-1.png";
import cityCenterImage2 from "../assets/images/city-center-2.png";
import keflavikAirportImage1 from "../assets/images/keflavik-airport-1.png";
import keflavikAirportImage2 from "../assets/images/keflavik-airport-2.png";
import blueLagoonImage1 from "../assets/images/blue-lagoon-1.png";
import blueLagoonImage2 from "../assets/images/blue-lagoon-2.png";
import hvammsvikImage1 from "../assets/images/hvammsvik--hot-springs-1.png";
import hvammsvikImage2 from "../assets/images/hvammsvik--hot-springs-2.png";
import lavaTunnelImage1 from "../assets/images/lava-tunnel-1.png";
import lavaTunnelImage2 from "../assets/images/lava-tunnel-2.png";

export const servicesData = [
    {
        row: 1,
        items: [
            {
                title: "Tailored Tours",
                description: "Create Your Ideal Iceland Journey: Tailor-Made Tours Just for You Picture your dream trip to Iceland—then turn it into reality! With Ride Iceland’s customized tours, you’ll discover the Land of Fire and Ice in a way that’s truly your own. Together, we’ll design a personalized itinerary that reflects your passions, travel style, and pace. Step Beyond the Ordinary: Design Your Own Adventure: Work hand-in-hand with our local travel experts to build an itinerary filled with your must-sees and hidden treasures. Whether you crave thrilling adventures or prefer a laid-back escape, we’ll shape the journey around you. Countless Experiences: From glacier hikes and hot spring lagoons to horseback riding, ice cave exploration, and cultural encounters—choose the activities that inspire you most! See Iceland Through a Local’s Eyes: Knowledgeable Local Guides: Travel alongside experienced Icelandic guides who share insider tips, fascinating stories, and hidden gems along the way. Beyond the Usual Routes: Explore untouched landscapes, charming villages, unique eateries, and secret natural wonders far from the tourist crowds. Dive into Culture: Go deeper than sightseeing—embrace traditions, taste authentic Icelandic dishes, and connect with warm local communities. A Perfect Fit for Every Traveler: Independent Explorers: Want an itinerary that mirrors your unique interests? Our tours are designed for you. Adventurous Families: Looking for an engaging trip that entertains every age? We’ll craft the ultimate family-friendly Iceland experience. Groups with Different Tastes: Traveling with varied preferences? We’ll balance everyone’s wishes seamlessly. Travelers Seeking More: Tired of cookie-cutter trips? Our custom tours reveal the real magic of Iceland. Ready to begin your Icelandic adventure? Contact Iceland Grand Tours today, and let’s start planning an unforgettable journey designed just for you!",
                hidden: true,
            },
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
                image: silverCircleImage1,
                hoverImage: silverCircleImage2,
                title: "Silver Circle Escape",
                subtitle: "Geothermal Power, Waterfall Beauty, and Fjord Majesty",
                description: "Head north into Iceland's rugged heartland, where dramatic mountain passes lead to the cascading wonders of Hraunfossar and Barnafoss. Feel the heat at Deildartunguhver, Europe's most powerful geothermal spring, and explore the charming town of Borgarnes. Return to Reykjavík through the engineering marvel of the Hvalfjörður Tunnel — 5,762 meters long and 165 meters below sea level.",
                duration: "~6 hours",
                price1: "🚗 1–4 persons: €610 per car",
                price2: "🚐 5–8 persons: €810 per car",
                includes: "Includes expert chauffeur-guide, flexible stops, and breathtaking scenery",
            },
            {
                image: peninsulaImage1,
                hoverImage: peninsulaImage2,
                title: "Snæfellsnes Peninsula Quest",
                subtitle: "Iceland in Miniature — One Peninsula, Endless Wonders",
                description: "Embark on a full-day journey through the diverse beauty of the Snæfellsnes Peninsula, often called Iceland in Miniature. Discover dramatic coastlines, towering basalt cliffs, volcanic craters, and charming fishing villages — all under the watchful gaze of the mystical Snæfellsjökull glacier.",
                duration: "~12 hours",
                price1: "🚗 1–4 persons: €1,090 per car",
                price2: "🚐 5–8 persons: €1,320 per car",
                includes: "Includes expert chauffeur-guide, flexible stops, and immersive storytelling across Iceland's most varied landscapes.",
            },
            {
                image: volcanicFrontierImage1,
                hoverImage: volcanicFrontierImage2,
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
                image: reykjavikSightseeingImage1,
                hoverImage: reykjavikSightseeingImage2,
                title: "Reykjavík Sightseeing Tour",
                subtitle: "City Highlights in 2 Hours — Culture, History & Local Charm",
                description: "Discover the vibrant heart of Iceland with a guided 2-hour tour around Reykjavík. From iconic landmarks like Hallgrímskirkja and Harpa Concert Hall to hidden local gems, this short but immersive journey offers a perfect introduction to the city's culture, architecture, and stories.",
                duration: "~2 hours",
                price1: "🚗 Car (1–4 persons): €180 per car",
                price2: "🚐 Van (5–8 persons): €240 per car",
                includes: "Includes: Expert local driver-guide, flexible stops, and engaging storytelling.",
            },
            {
                image: cityCenterImage1,
                hoverImage: cityCenterImage2,
                title: "Iceland City Center Tour",
                subtitle: "A Quick Journey Through Reykjavík's Heart — Culture, Landmarks & Local Life",
                description: "Discover the charm and character of Iceland's capital in a compact 2-hour tour. Visit iconic landmarks such as Hallgrímskirkja, Harpa Concert Hall, the Sun Voyager, and stroll through vibrant streets filled with history, art, and local culture. Perfect for travelers who want a brief yet meaningful introduction to Reykjavík.",
                duration: "~2 hours",
                price1: "🚗 Car (1–4 persons): €25 per car",
                price2: "🚐 Van (5–8 persons): €35 per car",
                includes: "Includes: Local driver-guide, flexible stops, and engaging storytelling.",
            },
            {
                image: keflavikAirportImage1,
                hoverImage: keflavikAirportImage2,
                title: "Keflavík Airport Transfer",
                subtitle: "Private & Comfortable Arrival — Your Journey Starts Here",
                description: "Begin or end your Iceland adventure with a smooth, private transfer from Keflavík International Airport to your accommodation or destination. Whether you're arriving or departing, enjoy a stress-free ride with a friendly local driver, flexible drop-off options, and reliable service tailored to your travel needs.",
                duration: "Based on destination",
                price1: "🚗 Car (1–4 persons): €160 per car",
                price2: "🚐 Van (5–8 persons): €205 per car",
                includes: "Includes: Private vehicle, local driver, and flexible drop-off within Reykjavík or nearby areas.",
            },
            {
                image: blueLagoonImage1,
                hoverImage: blueLagoonImage2,
                title: "Blue Lagoon Transfer",
                subtitle: "Relaxation Awaits — Private Transport to Iceland's Iconic Spa",
                description: "Enjoy a smooth and private transfer to the world-famous Blue Lagoon, one of Iceland's most popular geothermal spas. Whether you're heading there for a soak or returning refreshed, this service ensures a comfortable journey with flexible timing.",
                duration: "One Way: ~45 minutes | Return: ~4 hours total (including 2-hour stay)",
                price1: "🚗 One Way – Car (1–4 persons): €160 per car",
                price2: "🚐 One Way – Van (5–8 persons): €205 per car",
                returnPrice1: "🚗 Return – Car (1–4 persons): €330 per car",
                returnPrice2: "🚐 Return – Van (5–8 persons): €410 per car",
                includes: "Includes: Private vehicle, local driver, and flexible pick-up/drop-off.",
                note: "Note: Entrance to the Blue Lagoon must be pre-booked. Return option includes up to 2 hours at the lagoon (4 hours total).",
                showLabels: true,
            },
            {
                image: hvammsvikImage1,
                hoverImage: hvammsvikImage2,
                title: "Hvammsvik Hot Springs Transfer",
                subtitle: "Nature & Serenity — Private Transport to Iceland's Hidden Gem",
                description: "Escape to the tranquil Hvammsvik Hot Springs with a smooth, private transfer. Nestled in nature and offering a unique geothermal experience, this destination is perfect for relaxation and rejuvenation. Whether you're heading out or returning refreshed, enjoy a comfortable ride with flexible timing.",
                duration: "One Way: ~45 minutes | Return: ~4 hours total (including 2-hour stay)",
                price1: "🚗 One Way – Car (1–4 persons): €195 per car",
                price2: "🚐 One Way – Van (5–8 persons): €260 per car",
                returnPrice1: "🚗 Return – Car (1–4 persons): €390 per car",
                returnPrice2: "🚐 Return – Van (5–8 persons): €520 per car",
                includes: "Includes: Private vehicle, local driver, and flexible pick-up/drop-off.",
                note: "📌 Note: Entrance to Hvammsvik must be pre-booked. 🕓 Return option includes up to 2 hours at the hot springs (4 hours total).",
                showLabels: true,
            },
            {
                image: lavaTunnelImage1,
                hoverImage: lavaTunnelImage2,
                title: "Lava Tunnel Transfer (Raufarholshellir)",
                subtitle: "Explore Iceland's Underground Wonder — Private Transport to the Lava Tunnel",
                description: "Journey into the depths of Iceland's volcanic past with a private transfer to the stunning Lava Tunnel. This natural cave system offers a unique glimpse into the island's geological history. Whether you're heading out for adventure or returning from exploration, enjoy a smooth and flexible ride.",
                duration: "One Way: ~30–40 minutes | Return: ~2.5 hours total (including 1-hour stay)",
                price1: "🚗 One Way – Car (1–4 persons): €160 per car",
                price2: "🚐 One Way – Van (5–8 persons): €200 per car",
                returnPrice1: "🚗 Return – Car (1–4 persons): €330 per car",
                returnPrice2: "🚐 Return – Van (5–8 persons): €410 per car",
                includes: "Includes: Private vehicle, local driver, and flexible pick-up/drop-off.",
                note: "📌 Note: Entrance to the Lava Tunnel must be pre-booked. 🕓 Return option includes up to 1 hour at the tunnel (2.5 hours total).",
                showLabels: true,
            },
        ],
    },
];
