export interface TouristSpot {
  id: string;
  name: string;
  malayalamName: string;
  tagline: string;
  category: 'Hill View & Treks' | 'River View & Lakes' | 'Beaches & Coastal' | 'Waterfalls' | 'Heritage & Culture' | 'Forests & Wildlife';
  taluk: 'Nilambur' | 'Malappuram' | 'Eranad' | 'Ponnani' | 'Tirur' | 'Perinthalmanna' | 'Kondotty' | 'Karuvarakundu' | 'Kottakkal';
  rating: number;
  reviewsCount: number;
  entryFee: string;
  timings: string;
  bestTimeToVisit: string;
  nearestStation: string;
  nearestAirport: string;
  heroImage: string;
  gallery: string[];
  description: string;
  historyHighlights: string;
  activities: string[];
  tips: string[];
  locationCoords: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
  isPopular?: boolean;
  isMustVisit?: boolean;
}

export const MALAPPURAM_SPOTS: TouristSpot[] = [
  {
    id: "kottakunnu",
    name: "Kottakunnu Hill Park",
    malayalamName: "കോട്ടക്കുന്ന്",
    tagline: "The Marine Drive of Malappuram atop historic Zamorin fort ruins",
    category: "Heritage & Culture",
    taluk: "Malappuram",
    rating: 4.6,
    reviewsCount: 1420,
    entryFee: "₹30 Adults, ₹15 Children",
    timings: "10:00 AM – 9:00 PM (Best at 4:30 PM for sunset)",
    bestTimeToVisit: "Throughout the year, especially pleasant in the evenings",
    nearestStation: "Angadipuram (17 km) / Tirur (29 km)",
    nearestAirport: "Calicut International Airport CCJ (26 km)",
    heroImage: "/images/spots/kottakunnu-hero.jpg",
    gallery: [
      "/images/spots/kottakunnu-hero.jpg",
      "/images/spots/kottakunnu-1.jpg",
      "/images/spots/kottakunnu-2.jpg"
    ],
    description: "Perched gracefully in the heart of Malappuram district headquarters, Kottakunnu (literally 'Hill of the Fort') is a scenic tabletop hill garden with deep historical significance. It houses the remains of an ancient fort built by the Zamorins of Calicut and later converted into a British military outpost. Today, DTPC has transformed it into a premier leisure destination with vibrant landscaped gardens, an open-air amphitheater, high-tech musical water fountain with laser light shows, children's amusement park, water rides, balloon flights, and an art museum honoring V.K. Krishna Menon.",
    historyHighlights: "Ancient Zamorin stronghold where military barracks once stood. It witnessed the historic Malabar Rebellion resistance and British cantonment events.",
    activities: [
      "Musical laser fountain show in the evening",
      "Panoramic sunset views overlooking Malappuram municipality",
      "Water park rides & children's adventure zone",
      "Mirath art gallery & open-air amphitheater performances",
      "Evening Malabar street food trail along the entrance promenade"
    ],
    tips: [
      "Arrive around 4:30 PM to catch the sunset followed by the 7:00 PM musical fountain",
      "Ample vehicle parking available at the base and top ridge",
      "Wear comfortable walking shoes as the hilltop pathways are sprawling"
    ],
    locationCoords: { lat: 11.0510, lng: 76.0711 },
    mapUrl: "https://maps.google.com/?q=Kottakunnu+Malappuram",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "kodikuthimala",
    name: "Kodikuthimala (Mini Ooty)",
    malayalamName: "കൊടികുത്തിമല",
    tagline: "Misty hill station 522 meters high with rolling clouds & panoramic watchtowers",
    category: "Hill View & Treks",
    taluk: "Perinthalmanna",
    rating: 4.7,
    reviewsCount: 1150,
    entryFee: "₹20 Entry Fee",
    timings: "8:00 AM – 6:00 PM",
    bestTimeToVisit: "September to February (Monsoon for lush greenery, winter for morning mist)",
    nearestStation: "Angadipuram (15 km)",
    nearestAirport: "Calicut International Airport CCJ (42 km)",
    heroImage: "/images/spots/kodikuthimala-hero.jpg",
    gallery: [
      "/images/spots/kodikuthimala-hero.jpg",
      "/images/spots/kodikuthimala-1.jpg",
      "/images/spots/kodikuthimala-2.jpg"
    ],
    description: "Rising 522 meters above sea level in the Amminikkadan hill range near Vettathur and Perinthalmanna, Kodikuthimala is lovingly crowned the 'Mini Ooty of Malappuram'. Its name originates from the British survey period when officers hoisted flags ('Kodi kuthi') on the highest peak during topographical surveys. The hill features a 3-tier panoramic watchtower, refreshing hill breezes, perennial natural springs, lush wild tea gardens, and rolling clouds that blanket the valleys at sunrise and twilight.",
    historyHighlights: "British colonial surveyors used this prominent peak to signal and survey the Malabar province, hoisting the flag atop the summit.",
    activities: [
      "Climb the 3-story watchtower for 360-degree vistas across three districts",
      "Trek along rocky ridge trails lined with pine trees and wildflowers",
      "Early morning fog-watching and photography",
      "Picnic by the cool perennial fresh mountain springs",
      "Off-road scenic drive through winding tea estate curves"
    ],
    tips: [
      "Morning before 9:00 AM or late afternoon after 3:30 PM is ideal to avoid midday heat",
      "Carry drinking water and snacks as summit shops are limited",
      "The last 2 km road is moderately steep; drive carefully or enjoy a hike up"
    ],
    locationCoords: { lat: 11.0267, lng: 76.2917 },
    mapUrl: "https://maps.google.com/?q=Kodikuthimala+Perinthalmanna",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "thirumandhamkunnu-temple",
    name: "Thirumandhamkunnu Bhagavathi Temple",
    malayalamName: "തിരുമാന്ധാംകുന്ന് ഭഗവതി ക്ഷേത്രം",
    tagline: "Ancient capital of Valluvanad Rajas, famed for Mangalya Pooja & Pooram festival",
    category: "Heritage & Culture",
    taluk: "Perinthalmanna",
    rating: 4.9,
    reviewsCount: 1780,
    entryFee: "Free entry",
    timings: "4:30 AM – 12:00 PM & 4:30 PM – 8:00 PM",
    bestTimeToVisit: "November to April (11-day annual Pooram festival in March/April)",
    nearestStation: "Angadipuram Railway Station (1.5 km)",
    nearestAirport: "Calicut International Airport CCJ (44 km)",
    heroImage: "/images/spots/thirumandhamkunnu-hero.jpg",
    gallery: [
      "/images/spots/thirumandhamkunnu-hero.jpg",
      "/images/spots/thirumandhamkunnu-1.jpg"
    ],
    description: "Perched gracefully upon a small hillock at Angadipuram in Perinthalmanna, Thirumandhamkunnu Temple was the official kuladeivam (tutelary deity) shrine of the Valluvanad Rajas. Renowned across South India for its powerful 'Mangalya Pooja' (prayers for marital blessing) and the iconic Rigvedic traditions, the temple features the grand 11-day annual Pooram festival. Historically, it holds deep significance as the sacred ground where the Valluvanad 'Chavers' (suicide warriors) bowed and received blessings from the goddess before marching to fight the Zamorin at the 12-yearly Mamankam in Thirunavaya.",
    historyHighlights: "Epical royal temple of the Valluvakkonathiri kingdom; historical staging post for Mamankam warriors and home of the legendary Daruka-slaying Bhadrakali idol.",
    activities: [
      "Climb the scenic flight of laterite stone hill steps to the main gopuram",
      "Witness traditional evening deeparadhana with hundreds of bronze oil lamps",
      "Observe classical temple mural art and teak-carved mandapam ceilings",
      "Explore the historic Angadipuram heritage town with lush countryside views",
      "Attend the vibrant 11-day annual Thirumandhamkunnu Pooram"
    ],
    tips: [
      "Strict traditional dress code: Mundu/Dhoti for men, Sarees/Salwars for women",
      "Just 3 minutes from Angadipuram Railway Station on the Nilambur-Shoranur scenic line",
      "Early morning 5:30 AM nirmalya darshanam is extraordinarily serene"
    ],
    locationCoords: { lat: 10.9823, lng: 76.2238 },
    mapUrl: "https://maps.google.com/?q=Thirumandhamkunnu+Bhagavathi+Temple",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "kottakkal-arya-vaidya-sala",
    name: "Kottakkal Arya Vaidya Sala & Heritage",
    malayalamName: "കോട്ടയ്ക്കൽ ആര്യവൈദ്യശാല",
    tagline: "The global cradle of authentic Ayurveda, botanical gardens & herbal museum",
    category: "Heritage & Culture",
    taluk: "Kottakkal",
    rating: 4.8,
    reviewsCount: 1650,
    entryFee: "Free access to public grounds & museum",
    timings: "8:00 AM – 6:00 PM",
    bestTimeToVisit: "Throughout the year (Monsoon is ideal for Ayurvedic treatments)",
    nearestStation: "Tirur Railway Station (14 km)",
    nearestAirport: "Calicut International Airport CCJ (24 km)",
    heroImage: "/images/spots/kottakkal-hero.jpg",
    gallery: [
      "/images/spots/kottakkal-hero.jpg",
      "/images/spots/kottakkal-1.jpg"
    ],
    description: "Kottakkal is internationally synonymous with genuine Kerala Ayurveda. Founded in 1902 by the legendary visionary Vaidyaratnam P.S. Varier, Kottakkal Arya Vaidya Sala (AVS) is a century-old institution that transformed traditional herbal healing into an internationally recognized medical science. Travelers from across the globe visit the heritage campus to explore the historic P.S. Varier Museum, the sprawling medicinal plant herb gardens, the classical Viswambhara Temple, and the Kathakali Academy (P.S.V. Natyasangham) preserving classical Kerala performing arts.",
    historyHighlights: "Pioneered institutionalized Ayurveda in 1902; recognized worldwide by heads of state and scholars who journeyed to Malappuram for holistic healing.",
    activities: [
      "Tour the P.S. Varier Memorial Museum depicting ancient herbal tools and manuscripts",
      "Walk through lush medicinal herbal gardens with over 500 rare species",
      "Visit the consecrated Sri Viswambhara Temple inside the campus",
      "Witness authentic Kathakali rehearsals at the P.S.V. Natyasangham academy",
      "Purchase genuine Ayurvedic wellness preparations and teas at the source"
    ],
    tips: [
      "Pre-booking is required if seeking personal Ayurvedic physician consultations",
      "Combine with traditional Kottakkal vegetarian and Malabar culinary lunch spots",
      "Easily reached: right on the NH highway 14 km from Tirur railway station"
    ],
    locationCoords: { lat: 11.0028, lng: 76.0026 },
    mapUrl: "https://maps.google.com/?q=Arya+Vaidya+Sala+Kottakkal",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "chamravattom-bridge",
    name: "Chamravattom Regulator-Bridge & Nila",
    malayalamName: "ചമ്രവട്ടം റഗുലേറ്റർ കം ബ്രിഡ്ജ്",
    tagline: "Kerala's largest regulator bridge spanning River Nila with riverbed temple",
    category: "River View & Lakes",
    taluk: "Tirur",
    rating: 4.6,
    reviewsCount: 1120,
    entryFee: "Free access",
    timings: "Open all day (Sunset hours 5:00 PM – 7:00 PM are magical)",
    bestTimeToVisit: "August to March (Post-monsoon water body is magnificent)",
    nearestStation: "Tirur Railway Station (11 km) / Kuttippuram (14 km)",
    nearestAirport: "Calicut International Airport CCJ (48 km)",
    heroImage: "/images/spots/chamravattom-hero.jpg",
    gallery: [
      "/images/spots/chamravattom-hero.jpg",
      "/images/spots/chamravattom-1.jpg",
      "/images/spots/chamravattom-2.jpg"
    ],
    description: "Stretching nearly one kilometer across the sacred Bharathapuzha (River Nila) between Tirur and Ponnani taluks, the Chamravattom Regulator-cum-Bridge is the largest of its kind in Kerala. It offers breathtaking panoramic vistas of the wide riverbed, coconut groves, and evening skies. Nearby on the river sands sits the ancient Chamravattom Sastha (Ayyappa) Temple — unique because the sanctum is built right in the riverbed, where natural monsoon floods ('Aaraattu') submerge the deity in a sacred aquatic ritual.",
    historyHighlights: "Built over the historic crossing point of River Nila; the Chamravattom Ayyappa temple here dates back over 1,000 years to ancient sage legends.",
    activities: [
      "Enjoy evening sunset strolls along the pedestrian side of the 1 km bridge",
      "Capture panoramic landscape photography of River Nila (Bharathapuzha)",
      "Visit the unique riverbed Chamravattom Sastha Temple",
      "Taste fresh fried fish and tender coconut water at riverside village stalls",
      "Scenic connecting drive between Tirur coastal line and Ponnani port"
    ],
    tips: [
      "Visit between 5:15 PM and 6:30 PM to catch the sun setting over the river waters",
      "Parking spaces available at both northern and southern bridge approaches",
      "Very windy in the evenings; hold on to hats and loose items"
    ],
    locationCoords: { lat: 10.8354, lng: 75.9238 },
    mapUrl: "https://maps.google.com/?q=Chamravattom+Bridge+Malappuram",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "oorakam-mala",
    name: "Oorakam Mala & Kunnath Temple",
    malayalamName: "ഊരകം മല",
    tagline: "2,000-ft summit trek with ancient rock temple & airport aerial views",
    category: "Hill View & Treks",
    taluk: "Malappuram",
    rating: 4.7,
    reviewsCount: 880,
    entryFee: "Free access",
    timings: "5:30 AM – 6:30 PM (Sunrise trek recommended)",
    bestTimeToVisit: "September to February (Crisp morning clouds & cool breeze)",
    nearestStation: "Parappanangadi (18 km) / Angadipuram (24 km)",
    nearestAirport: "Calicut International Airport CCJ (16 km)",
    heroImage: "/images/spots/oorakam-hero.jpg",
    gallery: [
      "/images/spots/oorakam-hero.jpg",
      "/images/spots/oorakam-1.jpg"
    ],
    description: "Soaring nearly 2,000 feet above sea level between Malappuram and Vengara, Oorakam Mala is one of the highest and most prominent peaks in Malappuram district. At the rugged summit stands the revered 2,000-year-old Oorakam Kunnath Shiva Temple. Trekkers and nature lovers hike up winding hairpin roads through rubber and spice plantations to reach rocky summit ledges that offer a mesmerizing 360-degree panorama of the entire Malappuram district, the Arabian Sea coastline in the distance, and flights descending into Karipur Airport.",
    historyHighlights: "Ancient stone-carved hill temple dating to the early Chera era; served as a medieval fire signalling sentinel across the Kadalundi river plains.",
    activities: [
      "Sunrise trekking up the winding hillside to catch the sea of morning clouds",
      "Visit the consecrated 2,000-year-old Oorakam Kunnath Shiva Temple at the summit",
      "360-degree photography of Malappuram town and surrounding mountain ranges",
      "Plane spotting: Watch aircraft approaching Calicut Airport runway from an aerial angle",
      "Peaceful meditation on shaded summit boulder viewpoints"
    ],
    tips: [
      "Start your ascent before 6:00 AM for the cool morning mist experience",
      "Wear solid trekking shoes with grip as the summit rock slabs can be rocky",
      "Carry sufficient water as mountain top facilities are minimal"
    ],
    locationCoords: { lat: 11.0287, lng: 75.9865 },
    mapUrl: "https://maps.google.com/?q=Oorakam+Hill+Malappuram",
    isPopular: false,
    isMustVisit: true
  },
  {
    id: "ponnani-lighthouse",
    name: "Ponnani Maritime Lighthouse",
    malayalamName: "പൊന്നാനി ലൈറ്റ് ഹൗസ്",
    tagline: "Historic 1983 coastal beacon with panoramic views of Arabian sea & estuary",
    category: "Heritage & Culture",
    taluk: "Ponnani",
    rating: 4.6,
    reviewsCount: 940,
    entryFee: "₹20 Adults, ₹10 Children",
    timings: "3:00 PM – 5:30 PM (Visitor hours)",
    bestTimeToVisit: "October to April (Crystal-clear sea visibility)",
    nearestStation: "Tirur Railway Station (18 km) / Kuttippuram (21 km)",
    nearestAirport: "Calicut International Airport CCJ (54 km)",
    heroImage: "/images/spots/ponnani-lighthouse-hero.jpg",
    gallery: [
      "/images/spots/ponnani-lighthouse-hero.jpg",
      "/images/spots/ponnani-lighthouse-1.jpg"
    ],
    description: "Commissioned in 1983 on the historic maritime coast of Ponnani, the Ponnani Lighthouse stands tall at 30 meters, warning merchant vessels entering the ancient spice port. Visitors can climb the internal spiral staircase to the open observation gallery for an incomparable bird's-eye view of the Arabian Sea waves, the mouth of the Bharathapuzha estuary, traditional wooden fishing trawlers returning to harbour, and endless coconut palm canopies extending inland.",
    historyHighlights: "Guards the centuries-old seaport of Ponnani, which was once an active transoceanic spice port frequented by Arab, Portuguese, and Dutch trading ships.",
    activities: [
      "Climb to the top observation deck for 360-degree coastal Arabian Sea vistas",
      "Photograph the colorful wooden trawlers entering Ponnani fishing harbor",
      "Catch breathtaking golden hour and sunset views from 30 meters elevation",
      "Stroll the seaside promenade and beach directly adjacent to the lighthouse base",
      "Taste fresh seafood and snacks from local fishermen stalls"
    ],
    tips: [
      "Lighthouse visitor timings are strictly from 3:00 PM to 5:30 PM",
      "Children and elderly should climb the spiral stairs carefully with railings",
      "Combine with Ponnani Grand Mosque (2 km) and Padinharekara Beach (4 km)"
    ],
    locationCoords: { lat: 10.7788, lng: 75.9224 },
    mapUrl: "https://maps.google.com/?q=Ponnani+Lighthouse",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "nilambur-kovilakam",
    name: "Nilambur Kovilakam (Royal Palace)",
    malayalamName: "നിലമ്പൂർ കോവിലകം",
    tagline: "Ancient ancestral palace of the Nilambur Rajas with carved wooden architecture",
    category: "Heritage & Culture",
    taluk: "Nilambur",
    rating: 4.6,
    reviewsCount: 780,
    entryFee: "Free access to outer grounds & temple courtyard",
    timings: "6:00 AM – 11:30 AM & 5:00 PM – 7:30 PM",
    bestTimeToVisit: "November to March (Especially during the annual Nilambur Pattu festival in Jan/Feb)",
    nearestStation: "Nilambur Road Railway Station (3 km)",
    nearestAirport: "Calicut International Airport CCJ (44 km)",
    heroImage: "/images/spots/nilambur-kovilakam-hero.jpg",
    gallery: [
      "/images/spots/nilambur-kovilakam-hero.jpg",
      "/images/spots/nilambur-kovilakam-1.jpg",
      "/images/spots/nilambur-kovilakam-2.jpg"
    ],
    description: "Situated on the banks of the Chaliyar River in Nilambur town, Nilambur Kovilakam is the historic residence and ancestral palace complex of the Nilambur royal family (Nilambur Rajas), who once ruled over vast expanses of the Western Ghats forest lands. The Kovilakam complex is renowned for its grand Kerala wooden architecture, tiled sloping roofs, carved gables, expansive courtyards, and the ancient Vettakkorumakan Temple. It is the revered venue for the legendary annual 'Nilambur Pattu' festival, a vibrant tribal and royal folk music ritual.",
    historyHighlights: "Seat of the Nilambur Rajas who leased the land to H.V. Conolly in the 1840s to plant the world's first teak plantation.",
    activities: [
      "Admire the centuries-old traditional Kerala timber carpentry and courtyards",
      "Visit the sacred Vettakkorumakan Temple inside the royal palace complex",
      "Walk the shaded riverside paths along the nearby Chaliyar riverbank",
      "Learn about the historic role of Nilambur royal family in forest conservation",
      "Attend the celebrated annual Nilambur Pattu ritual (if visiting in January/February)"
    ],
    tips: [
      "Certain private residential quarters of the royal family are closed to public entry",
      "Dress conservatively when visiting the temple precincts inside the palace walls",
      "Only 5 minutes drive from Nilambur town and Conolly's Plot"
    ],
    locationCoords: { lat: 11.2721, lng: 76.2295 },
    mapUrl: "https://maps.google.com/?q=Nilambur+Kovilakam",
    isPopular: false,
    isMustVisit: false
  },
  {
    id: "pazhayangadi-mosque-kondotty",
    name: "Pazhayangadi Mosque & Kondotty Qubba",
    malayalamName: "പഴയങ്ങാടി പള്ളി & കൊണ്ടോട്ടി ഖുബ്ബ",
    tagline: "18th-century Mughal-Persian dome architecture & home of Kondotty Nercha",
    category: "Heritage & Culture",
    taluk: "Kondotty",
    rating: 4.7,
    reviewsCount: 1190,
    entryFee: "Free entry",
    timings: "5:00 AM – 9:00 PM",
    bestTimeToVisit: "Throughout the year (March for the historic Kondotty Nercha)",
    nearestStation: "Feroke (18 km) / Parappanangadi (22 km)",
    nearestAirport: "Calicut International Airport CCJ (5 km)",
    heroImage: "/images/spots/pazhayangadi-hero.jpg",
    gallery: [
      "/images/spots/pazhayangadi-hero.jpg"
    ],
    description: "Built in the early 18th century by the Persian Sufi master Muhammad Shah, the Pazhayangadi Mosque (and the adjacent Kondotty Thangal Qubba tomb) in Kondotty is an architectural marvel. Unlike traditional Kerala timber mosques, its central structure displays exquisite Mughal and Persian dome architecture with an octagonal white cupola and graceful arches. The shrine is famous for the 500-year-old Kondotty Nercha festival, a monumental cultural celebration exemplifying Hindu-Muslim communal harmony.",
    historyHighlights: "Constructed under the patronage of the Zamorin of Calicut and Nizam of Hyderabad for the saintly Kondotty Thangals in the 18th century.",
    activities: [
      "Marvel at the rare Mughal-Persian octagonal dome architecture in Malabar",
      "Experience the peaceful Sufi spiritual ambiance at the Qubba shrine",
      "Learn about the historical ties between the Kondotty Thangals and the Zamorins",
      "Sample authentic Kondotty street snacks and Malabar biriyani nearby",
      "Witness the cultural splendor of the annual Kondotty Nercha procession"
    ],
    tips: [
      "Located just 10 minutes (5 km) from Calicut International Airport at Karipur",
      "Visitors of all backgrounds are welcomed; please dress modestly",
      "Combine with Arimbra Hills (Mini Ooty) which is just 8 km away"
    ],
    locationCoords: { lat: 11.1465, lng: 75.9614 },
    mapUrl: "https://maps.google.com/?q=Pazhayangadi+Mosque+Kondotty",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "poonthanam-illam",
    name: "Poonthanam Illam & Memorial",
    malayalamName: "പൂന്താനം ഇല്ലം",
    tagline: "Birthplace of saint-poet Poonthanam, 16th-century traditional Nalukettu",
    category: "Heritage & Culture",
    taluk: "Perinthalmanna",
    rating: 4.8,
    reviewsCount: 810,
    entryFee: "Free entry",
    timings: "8:00 AM – 6:00 PM",
    bestTimeToVisit: "Throughout the year (Especially during Poonthanam Day in Feb/March)",
    nearestStation: "Angadipuram (12 km) / Pattambi (20 km)",
    nearestAirport: "Calicut International Airport CCJ (46 km)",
    heroImage: "/images/spots/poonthanam-hero.jpg",
    gallery: [
      "/images/spots/poonthanam-hero.jpg"
    ],
    description: "Located in the tranquil rural village of Kizhattur near Perinthalmanna, Poonthanam Illam is the preserved 16th-century ancestral home of Poonthanam Namboothiri, the celebrated saint-poet of Kerala and author of the timeless philosophical poem 'Jnanappana' (The Song of Divine Wisdom). Maintained by Guruvayur Devaswom, the heritage Nalukettu manor retains its ancient clay-tile roof, traditional wooden pillars, writing chamber where Poonthanam sat and composed hymns, and a sanctified family temple.",
    historyHighlights: "Birthplace of Poonthanam Namboothiri (1547–1640), whose devotional poetry simplified Vedic philosophy for everyday common people.",
    activities: [
      "Explore the 500-year-old preserved traditional Kerala Nalukettu manor",
      "View the sacred writing chamber and historical memorabilia of the poet",
      "Sit peacefully beside the historic temple lotus pond in the courtyard",
      "Attend literary gatherings and recitals during annual Poonthanam Dinam",
      "Experience the serene, unhurried rural Kerala village atmosphere"
    ],
    tips: [
      "A wonderfully peaceful cultural visit for literature and history enthusiasts",
      "Only 15 minutes drive from Perinthalmanna town and Thirumandhamkunnu Temple",
      "Please respect the quiet, contemplative nature of the memorial"
    ],
    locationCoords: { lat: 10.9925, lng: 76.2845 },
    mapUrl: "https://maps.google.com/?q=Poonthanam+Illam+Kizhattur",
    isPopular: false,
    isMustVisit: false
  },
  {
    id: "wagon-tragedy-memorial",
    name: "Wagon Tragedy Memorial (Tirur)",
    malayalamName: "വാഗൺ ട്രാജഡി സ്മാരകം, തിരൂർ",
    tagline: "Historic monument commemorating the 1921 freedom movement martyrs",
    category: "Heritage & Culture",
    taluk: "Tirur",
    rating: 4.8,
    reviewsCount: 1140,
    entryFee: "Free access",
    timings: "9:00 AM – 8:00 PM",
    bestTimeToVisit: "Throughout the year",
    nearestStation: "Tirur Railway Station (500 meters)",
    nearestAirport: "Calicut International Airport CCJ (36 km)",
    heroImage: "/images/spots/wagon-tragedy-hero.jpg",
    gallery: [
      "/images/spots/wagon-tragedy-hero.jpg"
    ],
    description: "Situated in the center of Tirur municipal town right near Tirur Railway Station, the Wagon Tragedy Memorial Town Hall stands as an indelible symbol of India's freedom struggle. On 19 November 1921, during the Malabar Rebellion, 64 freedom movement prisoners suffocated to death inside a closed, windowless railway goods freight wagon while being transported by British colonial forces from Tirur to Bellary. The historic monument and town hall honor the immortal memory of these martyrs.",
    historyHighlights: "One of the most poignant episodes of India's anti-colonial resistance; commemorated annually in Tirur.",
    activities: [
      "Pay respects at the solemn martyrs' memorial monument",
      "Learn about the pivotal 1921 Malabar Rebellion and railway freight tragedy history",
      "Visit the adjacent historic Tirur Railway Station (opened in 1861)",
      "Explore the vibrant cultural markets and authentic Malabar cuisine of Tirur town"
    ],
    tips: [
      "Located just a short walk from Tirur Railway Station platform exit",
      "Combine with Thunchan Parambu (2 km away) for a complete Tirur heritage day"
    ],
    locationCoords: { lat: 10.9142, lng: 75.9234 },
    mapUrl: "https://maps.google.com/?q=Wagon+Tragedy+Memorial+Tirur",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "conollys-plot-teak-museum",
    name: "Conolly's Plot & Nilambur Teak Heritage",
    malayalamName: "കനോലി പ്ലോട്ട് & നിലമ്പൂർ തേക്ക് മ്യൂസിയം",
    tagline: "World's oldest teak plantation with legendary hanging bridge over Chaliyar river",
    category: "Forests & Wildlife",
    taluk: "Nilambur",
    rating: 4.8,
    reviewsCount: 1890,
    entryFee: "₹50 (Teak Museum & Plot combo ticket)",
    timings: "9:00 AM – 5:00 PM (Closed on Mondays)",
    bestTimeToVisit: "October to March (Post-monsoon canopy is breathtaking)",
    nearestStation: "Nilambur Road Railway Station (4 km)",
    nearestAirport: "Calicut International Airport CCJ (45 km)",
    heroImage: "/images/spots/conolly-hero.jpg",
    gallery: [
      "/images/spots/conolly-hero.jpg",
      "/images/spots/conolly-1.jpg",
      "/images/spots/conolly-2.jpg"
    ],
    description: "Nilambur is globally celebrated as the Teak Town of the world. Conolly's Plot, established in 1842-1844 by H.V. Conolly (Collector of Malabar) with native master planter Chathu Menon, is the world's oldest surviving man-made teak plantation. The tallest teak tree here stands over 49 meters with a massive girth. Accessible across an iconic suspension hanging bridge swinging over the crystal-clear Chaliyar River, visitors can also explore the Nilambur Teak Museum (the world's first teak museum), complete with life-size root systems, butterfly garden, and rich forestry archives.",
    historyHighlights: "Planted between 1842 and 1844 to replenish teak timber depleted during British shipbuilding. Preserved today as a global botanical monument.",
    activities: [
      "Walk across the 143-meter suspension bridge over the scenic Chaliyar River",
      "Stand before Kannimara and ancient giant teak trees over 180 years old",
      "Tour the World's First Teak Museum with interactive natural history exhibits",
      "Stroll along the bio-reserve butterfly and bamboo garden pathways",
      "Ride the historic Nilambur-Shoranur railway line through emerald canopy"
    ],
    tips: [
      "The site is closed on Mondays; plan visits Tuesday through Sunday",
      "Carry insect repellent for the shaded rainforest walking sections",
      "Check out Nilambur Kovilakam palace heritage nearby for cultural history"
    ],
    locationCoords: { lat: 11.2778, lng: 76.2238 },
    mapUrl: "https://maps.google.com/?q=Conolly's+Plot+Nilambur",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "nedumkayam-rainforest",
    name: "Nedumkayam Rainforest Reserve",
    malayalamName: "നെടുങ്കയം മഴക്കാടുകൾ",
    tagline: "Pristine Western Ghats virgin jungle, elephant corridors & British wooden bridge",
    category: "Forests & Wildlife",
    taluk: "Nilambur",
    rating: 4.7,
    reviewsCount: 840,
    entryFee: "Forest pass ₹40, Camera ₹50",
    timings: "8:00 AM – 4:00 PM (Requires entry permit at checkpost)",
    bestTimeToVisit: "November to May",
    nearestStation: "Nilambur Road (14 km)",
    nearestAirport: "Calicut International Airport CCJ (58 km)",
    heroImage: "/images/spots/nedumkayam-hero.jpg",
    gallery: [
      "/images/spots/nedumkayam-hero.jpg",
      "/images/spots/nedumkayam-1.jpg"
    ],
    description: "Located 14 km from Nilambur town along the Karimpuzha River, Nedumkayam is a slice of untouched Nilgiri Biosphere reserve. It features a historic wooden forest rest house built in 1929 by the British, crafted entirely from solid rosewood and teak, offering views of wild elephants coming to bathe in the river. Dense canopies, rare orchids, Malabar giant squirrels, hornbills, and tranquil river gravel beds make it a dream retreat for naturalists.",
    historyHighlights: "Old timber staging post during the British Raj; features a preserved 1929 British forest lodge and ancient tribal settlements of the Cholanaikkans.",
    activities: [
      "Guided eco-trails through deep semi-evergreen rainforest",
      "Birdwatching for Malabar Pied Hornbills and Emerald Doves",
      "Relaxing beside the crystal-clear waters of Karimpuzha river",
      "Glimpse the 1929 British vintage wooden forest lodge",
      "Wildlife photography (elephants, gaurs, spotted deer)"
    ],
    tips: [
      "Prior pass required at the Forest Department counter at Nedumkayam checkpost",
      "River bathing is restricted to designated shallow spots for safety",
      "Strict zero-plastic zone; do not litter in the reserve forest"
    ],
    locationCoords: { lat: 11.3120, lng: 76.3245 },
    mapUrl: "https://maps.google.com/?q=Nedumkayam+Rainforest+Nilambur",
    isPopular: false,
    isMustVisit: true
  },
  {
    id: "padinharekara-beach",
    name: "Padinharekara Beach & Azhimukham",
    malayalamName: "പടിഞ്ഞാറേക്കര ബീച്ച് & അഴിമുഖം",
    tagline: "Where Bharathapuzha & Tirur River merge into the sparkling Arabian Sea",
    category: "Beaches & Coastal",
    taluk: "Ponnani",
    rating: 4.6,
    reviewsCount: 1670,
    entryFee: "Free entry (Amusement rides ticketed)",
    timings: "Open all day (Best 4:00 PM – 7:30 PM for sunset)",
    bestTimeToVisit: "October to April (Calm tides and thousands of migratory birds)",
    nearestStation: "Tirur Railway Station (16 km)",
    nearestAirport: "Calicut International Airport CCJ (52 km)",
    heroImage: "/images/spots/padinharekara-hero.png",
    gallery: [
      "/images/spots/padinharekara-hero.png"
    ],
    description: "Padinharekara Beach (also called Azhimukham or Ponnani Beach) sits at the dramatic confluence where two mighty rivers of Malappuram — Bharathapuzha (River Nila) and Tirur River — pour into the Arabian Sea. The beach features a picturesque stone promenade pier jutting into the sea, palm-fringed lagoons, speed-boat rides, floating restaurants, and tidal sandbars. During winter months, flocks of migratory seagulls, sandpipers, and herons gather on the estuary shores.",
    historyHighlights: "Ancient maritime gateway of Ponnani port, where Arab and European trading dhows sailed into River Nila during the medieval spice trade.",
    activities: [
      "Walk to the edge of the stone breakwater pier for sunset views",
      "River-mouth boat cruise and speed boating across the estuary",
      "Spotting flocks of migratory coastal birds at the sand spits",
      "Taste fresh Ponnani seafood (fried prawns, mussels, kallummakkaya)",
      "Floating cafe relaxation and sea-breeze evening strolls"
    ],
    tips: [
      "Sunsets here are legendary with the river on one side and sea on the other",
      "High tides can be strong near the estuary mouth; obey lifeguard flags",
      "Combine with Ponnani heritage harbor and lighthouse nearby"
    ],
    locationCoords: { lat: 10.7892, lng: 75.9184 },
    mapUrl: "https://maps.google.com/?q=Padinharekara+Beach+Malappuram",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "adyanpara-waterfalls",
    name: "Adyanpara Waterfalls",
    malayalamName: "അട്യൻപാറ വെള്ളച്ചാട്ടം",
    tagline: "Cascading rock waterfalls surrounded by Kurumbalangode rainforest hills",
    category: "Waterfalls",
    taluk: "Nilambur",
    rating: 4.5,
    reviewsCount: 1220,
    entryFee: "₹30 per adult",
    timings: "9:00 AM – 5:30 PM",
    bestTimeToVisit: "June to December (Peak monsoon through post-monsoon)",
    nearestStation: "Nilambur Road (15 km)",
    nearestAirport: "Calicut International Airport CCJ (60 km)",
    heroImage: "/images/spots/adyanpara-hero.jpg",
    gallery: [
      "/images/spots/adyanpara-hero.jpg",
      "/images/spots/adyanpara-1.jpg"
    ],
    description: "Located in Kurumbalangode village near Nilambur, Adyanpara is an enchanting natural cascade originating from the streams of the Wayanad-Nilambur mountain folds. The water flows over smooth, terraced black rock formations before gathering into natural bathing pools. Surrounded by thick jungle foliage, bamboo clusters, and rubber estates, Adyanpara is one of Malappuram's most accessible and refreshing waterfall retreats.",
    historyHighlights: "A perennial source of natural mineral-rich mountain water sacred to ancient forest dwellers, now managed under eco-tourism protection.",
    activities: [
      "Dip your feet in designated natural rock pools under safe currents",
      "Relax on the shaded natural rock slabs under forest canopy",
      "Trek along the riverbank nature trails",
      "Landscape and slow-shutter waterfall photography",
      "Picnic with family in the designated eco-park area"
    ],
    tips: [
      "Wear footwear with solid grip as wet rock surfaces can be slippery",
      "During peak monsoon (July-August), water volume rises sharply; adhere to safety guards",
      "Changing rooms and eco-toilets are provided at the entrance"
    ],
    locationCoords: { lat: 11.3411, lng: 76.2944 },
    mapUrl: "https://maps.google.com/?q=Adyanpara+Waterfalls+Nilambur",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "keralamkundu-waterfalls",
    name: "Keralamkundu Waterfalls & Basin",
    malayalamName: "കേരളംകുണ്ട് വെള്ളച്ചാട്ടം",
    tagline: "A mystical natural emerald rock-pool carved at Silent Valley foothills",
    category: "Waterfalls",
    taluk: "Karuvarakundu",
    rating: 4.7,
    reviewsCount: 1530,
    entryFee: "₹30 per person",
    timings: "9:00 AM – 5:00 PM",
    bestTimeToVisit: "September to March (Crystal clear water and safe flow)",
    nearestStation: "Tuvvur (12 km) / Melattur (16 km) / Nilambur (32 km)",
    nearestAirport: "Calicut International Airport CCJ (56 km)",
    heroImage: "/images/spots/keralamkundu-hero.jpg",
    gallery: [
      "/images/spots/keralamkundu-hero.jpg",
      "/images/spots/keralamkundu-1.jpg",
      "/images/spots/keralamkundu-2.jpg"
    ],
    description: "Hidden in the deep folds of Karuvarakundu at the buffer boundary of the Silent Valley National Park, Keralamkundu is a geological wonder. The waterfall plummets into a gigantic, bowl-shaped natural rock basin ('kundu') carved over thousands of years by the furious mountain torrents. The DTPC has constructed an iron walkway and bridge that suspends visitors right over the cascading gorge, offering a heart-racing aerial view of the turquoise pool surrounded by dramatic cliff faces.",
    historyHighlights: "Ancient lore holds that the mineral-rich waters descending from the Silent Valley medicinal herb hills possess therapeutic skin-healing properties.",
    activities: [
      "Walk the suspended iron pathway bridge directly above the waterfall gorge",
      "Marvel at the circular deep turquoise rock crater basin",
      "Hike through lush spice and rubber groves in Karuvarakundu",
      "Swim in shallow upstream natural pools (strictly when permitted by lifeguards)",
      "Enjoy the misty spray and thunderous roar echoing in the valley"
    ],
    tips: [
      "Bathing directly inside the deep main bowl is prohibited due to underwater currents",
      "Iron walkways are well-fenced and child-friendly",
      "Combine with Silent Valley buffer spice plantations nearby"
    ],
    locationCoords: { lat: 11.1352, lng: 76.3570 },
    mapUrl: "https://maps.google.com/?q=Keralamkundu+Waterfalls+Karuvarakundu",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "biyyam-kayal",
    name: "Biyyam Kayal & Hanging Bridge",
    malayalamName: "ബിയ്യം കായൽ",
    tagline: "Serene backwater lake famous for traditional boat races & sunset walkways",
    category: "River View & Lakes",
    taluk: "Ponnani",
    rating: 4.4,
    reviewsCount: 980,
    entryFee: "Free entry, boating charges ₹50-₹200",
    timings: "Open all day (Boating: 9:30 AM – 6:30 PM)",
    bestTimeToVisit: "August to February (Onam season for Vallamkali boat races)",
    nearestStation: "Tirur Railway Station (22 km) / Kuttippuram (18 km)",
    nearestAirport: "Calicut International Airport CCJ (60 km)",
    heroImage: "/images/spots/biyyam-hero.jpg",
    gallery: [
      "/images/spots/biyyam-hero.jpg",
      "/images/spots/biyyam-1.jpg"
    ],
    description: "Biyyam Kayal is a tranquil backwater lake situated near Ponnani town in Malappuram. Renowned for its annual boat races during the Onam festival where snake boats (Chundan Vallams) and traditional canoes battle on its calm waters, Biyyam Kayal is a beloved weekend getaway. A modern pedestrian hanging bridge spans the lake, connecting lush coconut groves with a landscaped waterside promenade, water sports complex, speedboats, and tranquil pedal boats.",
    historyHighlights: "Ancient waterway linking inland Malappuram paddy lands with the historic Ponnani port for spice barge transportation.",
    activities: [
      "Pedal boating and speed boating on the tranquil backwater expanse",
      "Strolling along the illuminated suspended footbridge at dusk",
      "Witnessing traditional Vallamkali boat race trials before Onam",
      "Enjoying fresh tender coconut and Malabar fried snacks by the promenade",
      "Watching egrets and kingfishers dive into the calm waters"
    ],
    tips: [
      "Evenings are coolest with gentle backwater breeze",
      "Very family-friendly with plenty of seating benches along the lake border",
      "Only 6 km from Ponnani town and 10 km from Padinharekara beach"
    ],
    locationCoords: { lat: 10.7456, lng: 75.9523 },
    mapUrl: "https://maps.google.com/?q=Biyyam+Kayal+Ponnani",
    isPopular: false,
    isMustVisit: false
  },
  {
    id: "thirunavaya-mamankam",
    name: "Thirunavaya & Mamankam Heritage",
    malayalamName: "തിരുനാവായ & മാമാങ്ക സ്മാരകങ്ങൾ",
    tagline: "Historic banks of River Nila, home of ancient Navamukunda & Mamankam lore",
    category: "Heritage & Culture",
    taluk: "Tirur",
    rating: 4.7,
    reviewsCount: 1100,
    entryFee: "Free entry",
    timings: "5:00 AM – 11:30 AM & 5:00 PM – 8:00 PM",
    bestTimeToVisit: "November to March (Pleasant river banks and temple festivities)",
    nearestStation: "Tirunnavaya Railway Station (1 km) / Kuttippuram (9 km)",
    nearestAirport: "Calicut International Airport CCJ (40 km)",
    heroImage: "/images/spots/thirunavaya-hero.jpg",
    gallery: [
      "/images/spots/thirunavaya-hero.jpg",
      "/images/spots/thirunavaya-1.jpg"
    ],
    description: "Thirunavaya sits on the sacred northern bank of the Bharathapuzha (River Nila) in Tirur Taluk. For centuries, this historic site hosted the grand 'Mamankam' festival — a monumental 28-day gathering held once every 12 years where the rulers of Valluvanad sent courageous 'Chavers' (suicide warriors) to challenge the reigning Zamorin of Calicut on the Nilapaduthara platform. Thirunavaya is also home to the 5000-year-old Navamukunda Temple, Changampally Kalari, the sacred river bathing ghats, and lotus ponds producing blooms for temples across Kerala.",
    historyHighlights: "Epoch-defining epicenter of medieval Kerala politics; remnants like the Nilapaduthara, Marunnara (gunpowder storehouse), and Manikkinar (well of Chavers) stand intact.",
    activities: [
      "Explore the historic Mamankam monuments: Nilapaduthara and Manikkinar",
      "Witness sunset over the historic sands of River Nila (Bharathapuzha)",
      "Visit the sacred Navamukunda Temple with unique stone carvings",
      "Discover the Changampally Kalari heritage and ancient martial traditions",
      "See the blooming pink lotus farms along Thirunavaya river wetlands"
    ],
    tips: [
      "A guided local heritage walk or reading the history before visiting enriches the experience",
      "River bed sands are serene in the late evening; ideal for reflective walks",
      "Easily accessible as Tirunnavaya has its own railway station on the main coastal line"
    ],
    locationCoords: { lat: 10.8654, lng: 75.9890 },
    mapUrl: "https://maps.google.com/?q=Thirunavaya+Navamukunda+Temple",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "kadalundi-vallikkunnu-reserve",
    name: "Kadalundi-Vallikkunnu Community Reserve",
    malayalamName: "കടലുണ്ടി-വള്ളിക്കുന്ന് കമ്മ്യൂണിറ്റി റിസർവ്",
    tagline: "India's first community reserve: pristine mangroves, bird paradise & boat safaris",
    category: "River View & Lakes",
    taluk: "Tirur",
    rating: 4.8,
    reviewsCount: 1340,
    entryFee: "Boat safari: ₹350 - ₹600 per country boat (up to 4 people)",
    timings: "6:30 AM – 6:00 PM (Best at low tide for birds)",
    bestTimeToVisit: "November to March (Peak migratory bird season)",
    nearestStation: "Vallikkunnu / Kadalundi Railway Station (1 km)",
    nearestAirport: "Calicut International Airport CCJ (18 km)",
    heroImage: "/images/spots/kadalundi-hero.jpg",
    gallery: [
      "/images/spots/kadalundi-hero.jpg",
      "/images/spots/kadalundi-1.jpg"
    ],
    description: "Spread across the Malappuram-Kozhikode border at Vallikkunnu where the Kadalundi River empties into the Arabian Sea, this is India's first Community Reserve. Dense green mangrove thickets shelter over a hundred species of migratory shorebirds from Siberia and the Arctic, including sandpipers, Whimbrels, lesser sandplovers, and brahminy kites. Country wooden boat rides through narrow mangrove tunnels reveal mudskippers, fiddler crabs, and serene island hamlets.",
    historyHighlights: "Designated as a Community Reserve in 2007, pioneering grassroots eco-conservation led by traditional fishermen and conservationists.",
    activities: [
      "Glide through silent mangrove canopies in an eco-friendly wooden canoe",
      "Birdwatching with binoculars during morning low tides",
      "Photograph mudskippers and colorful fiddler crabs on exposed mudflats",
      "Walk along the scenic railway bridge embankment viewpoint",
      "Experience fresh river oysters (Kallummakkaya) in Vallikkunnu village"
    ],
    tips: [
      "Check tide times before visiting; bird sightings are best when mudflats are exposed at low tide",
      "Hire local community guides who know bird roosting locations intimately",
      "Carry binoculars, camera telephoto lens, and sun protection"
    ],
    locationCoords: { lat: 11.1302, lng: 75.8340 },
    mapUrl: "https://maps.google.com/?q=Kadalundi+Bird+Sanctuary",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "arimbra-hills",
    name: "Arimbra Hills (Mini Ooty of Kondotty)",
    malayalamName: "അരിമ്പ്ര മല",
    tagline: "Rolling misty peaks, glass bridges, spice plantations & airport valley views",
    category: "Hill View & Treks",
    taluk: "Kondotty",
    rating: 4.5,
    reviewsCount: 970,
    entryFee: "₹30 for Viewpoint entry",
    timings: "6:00 AM – 7:00 PM (Sunrise is spectacular)",
    bestTimeToVisit: "August to February (Sea of clouds in monsoon & winter mornings)",
    nearestStation: "Feroke (24 km) / Parappanangadi (26 km)",
    nearestAirport: "Calicut International Airport CCJ (14 km)",
    heroImage: "/images/spots/arimbra-hero.jpg",
    gallery: [
      "/images/spots/arimbra-hero.jpg",
      "/images/spots/arimbra-1.jpg"
    ],
    description: "Located near Kondotty and Morayur in Malappuram, Arimbra Hills (also popularly termed Mini Ooty) towers 1050 feet above sea level. Famed for its lush rubber, tea, and spice plantations, the hills are renowned for 'Meghamalhar' — a sea of white fog that pools in the valleys during early mornings. A new glass bridge viewpoint, tree huts, flower parks, and hairpin curves make it a favourite weekend drive for youths and families alike.",
    historyHighlights: "Ancient vantage point overlooking the Malabar plains; now a premier eco-viewpoint in Kondotty taluk.",
    activities: [
      "Walk on the glass bridge viewpoint jutting out over the cliff edge",
      "Early morning cloud-bed watching at 6:30 AM",
      "Drive through scenic winding hill curves and plantation terraces",
      "Sip hot Malabar Sulaimani tea at cliff-top cafes",
      "Watch aircraft landing at nearby Karipur Airport runway from distant viewpoints"
    ],
    tips: [
      "Reach before 7:00 AM if you want to witness the magical fog blanket",
      "The hill road has narrow curves; drive with headlight vigilance",
      "Very close to Calicut Airport (just 20 minutes away)"
    ],
    locationCoords: { lat: 11.1492, lng: 75.9995 },
    mapUrl: "https://maps.google.com/?q=Arimbra+Hills+Mini+Ooty",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "thunchan-parambu",
    name: "Thunchan Parambu (Tirur)",
    malayalamName: "തുഞ്ചൻ പറമ്പ്",
    tagline: "Sacred sanctuary of Malayalam language, iron stylus & sacred bronze Saraswathi",
    category: "Heritage & Culture",
    taluk: "Tirur",
    rating: 4.8,
    reviewsCount: 1400,
    entryFee: "Free entry",
    timings: "8:00 AM – 7:00 PM",
    bestTimeToVisit: "Throughout the year (Especially during Vidyarambham & Thunchan Utsavam)",
    nearestStation: "Tirur Railway Station (2 km)",
    nearestAirport: "Calicut International Airport CCJ (35 km)",
    heroImage: "/images/spots/thunchan-hero.jpg",
    gallery: [
      "/images/spots/thunchan-hero.jpg",
      "/images/spots/thunchan-1.jpg"
    ],
    description: "Thunchan Parambu in Tirur is the revered birthplace of Thunchath Ramanujan Ezhuthachan, the 16th-century poet regarded as the Father of Malayalam Language. It is a peaceful, sanctified memorial shaded by ancient banyan and kanjiram trees. The campus houses the preserved ancient stone well from which Ezhuthachan drew water, his legendary iron stylus (Ezhuthani), the parrot memorial (Kili), and a prestigious research library and cultural complex where thousands of children are initiated into the world of letters on Vijayadashami day.",
    historyHighlights: "Where Ezhuthachan composed the Adhyathma Ramayanam Kilippattu, giving standard form and poetic soul to modern Malayalam.",
    activities: [
      "Pay homage at the consecrated Saraswathi Mandapam and sacred well",
      "Visit the Literary Museum and view ancient palm-leaf manuscripts",
      "Sit peacefully beneath the ancient Kanjiram tree said to bear sweet leaves",
      "Participate in the legendary annual Thunchan Literary Festival in January",
      "Explore the sprawling palm-lined tranquil memorial garden"
    ],
    tips: [
      "Maintain the meditative, sacred silence of the memorial campus",
      "Only 5 minutes drive from Tirur Railway Station",
      "Great place to purchase authentic Malayalam classic literature and poetry"
    ],
    locationCoords: { lat: 10.9167, lng: 75.9238 },
    mapUrl: "https://maps.google.com/?q=Thunchan+Parambu+Tirur",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "ponnani-juma-masjid-harbour",
    name: "Ponnani Grand Juma Masjid & Port Town",
    malayalamName: "പൊന്നാനി വലിയ ജുമുഅത്ത് പള്ളി & തുറമുഖം",
    tagline: "The 'Small Mecca' of Kerala: 500-year-old carved wooden marvel & historic port",
    category: "Heritage & Culture",
    taluk: "Ponnani",
    rating: 4.8,
    reviewsCount: 1290,
    entryFee: "Free entry",
    timings: "Open all day (Modest attire required for prayer hall area)",
    bestTimeToVisit: "October to March",
    nearestStation: "Tirur Railway Station (18 km) / Kuttippuram (21 km)",
    nearestAirport: "Calicut International Airport CCJ (54 km)",
    heroImage: "/images/spots/ponnani-masjid-hero.jpg",
    gallery: [
      "/images/spots/ponnani-masjid-hero.jpg",
      "/images/spots/ponnani-masjid-1.jpg"
    ],
    description: "Ponnani is one of the oldest inhabited coastal settlements in Kerala, once earning the title 'The Little Mecca of Malabar' for its celebrated Islamic intellectual legacy. Built around 1519 AD by the venerated theologian Zainuddin Makhdum I, the Ponnani Valiya Juma Masjid is an architectural triumph of traditional Kerala temple-style wooden architecture blended with Islamic motifs. The interior boasts ancient carved timber pillars, historic oil lamps (Vilakku), and a heritage library. Nearby, the active fishing harbour, colonial lighthouse, and seaside fish auction present an evocative coastal Malabar experience.",
    historyHighlights: "Built in 1519 AD; was the epicenter of the famous 'Vilakkirikkal' system of higher Islamic scholarship that drew scholars from across the Indian Ocean.",
    activities: [
      "Admire the 500-year-old intricate teak wood carvings and historic brass lamps",
      "Visit Ponnani Fishing Harbour and watch traditional wooden trawlers dock",
      "Climb the Ponnani Lighthouse for sweeping coastal Arabian sea views",
      "Explore centuries-old alleyways with Malabar coastal stone architecture",
      "Taste genuine Ponnani coastal dishes like Meen Mulakittathu and Pathiri"
    ],
    tips: [
      "Visitors are welcomed; dress modestly covering shoulders and knees",
      "Early morning around 7:00 AM at the harbour provides incredible photography of fish auctions",
      "The lighthouse is open to visitors in the late afternoon (3:00 PM – 5:30 PM)"
    ],
    locationCoords: { lat: 10.7725, lng: 75.9255 },
    mapUrl: "https://maps.google.com/?q=Ponnani+Valiya+Juma+Masjid",
    isPopular: false,
    isMustVisit: true
  },
  {
    id: "mamburam-maqam",
    name: "Mamburam Maqam & Heritage",
    malayalamName: "മമ്പുറം മഖാം",
    tagline: "Historic spiritual sanctuary on Kadalundi riverbank revered across Malabar",
    category: "Heritage & Culture",
    taluk: "Tirur",
    rating: 4.8,
    reviewsCount: 1650,
    entryFee: "Free entry",
    timings: "5:00 AM – 9:00 PM",
    bestTimeToVisit: "Throughout the year (Especially during annual Mamburam Nercha)",
    nearestStation: "Parappanangadi (10 km) / Tirur (20 km)",
    nearestAirport: "Calicut International Airport CCJ (16 km)",
    heroImage: "/images/spots/mamburam-hero.webp",
    gallery: [
      "/images/spots/mamburam-hero.webp",
      "/images/spots/mamburam-1.webp",
      "/images/spots/mamburam-2.jpg"
    ],
    description: "Located on the tranquil shores of the Kadalundi River in Tirurangadi Taluk of Malappuram, Mamburam Maqam is the hallowed resting place of Sayyid Alavi Thangal and Sayyid Fazal Pookoya Thangal — revered 18th-century Hadrami scholars and leaders who stood as beacons of social justice, communal unity, and resistance against British oppressive landlord policies. Pilgrims and cultural travelers of all communities visit to experience its tranquil ambience, classical timbered prayer halls, and spiritual solace.",
    historyHighlights: "Center of historic Malabar anti-colonial thought; Sayyid Alavi Thangal promoted harmony between peasant tenants and worked tirelessly for marginalized communities.",
    activities: [
      "Experience the peaceful spiritual atmosphere on Kadalundi riverbank",
      "Admire classic Malabar timber woodwork and river-facing courtyard",
      "Walk along the scenic Mamburam suspension bridge spanning the river",
      "Sample authentic Tirurangadi ghee rice and beef fry at local eateries",
      "Learn about the pivotal 19th-century Malabar socio-religious history"
    ],
    tips: [
      "Respect the sacred sanctity and peaceful decorum of the premises",
      "Annual Nercha attracts huge crowds; check dates if you want a vibrant cultural festival",
      "Just 20 minutes drive from Parappanangadi coastal railway station"
    ],
    locationCoords: { lat: 11.0425, lng: 75.9231 },
    mapUrl: "https://maps.google.com/?q=Mamburam+Maqam+Malappuram",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "amazon-viewpoint-othayi",
    name: "Amazon View Point (Othayi / Chathalloor)",
    malayalamName: "ആമസോൺ വ്യൂപോയിന്റ് ഒതായി / ചാത്തല്ലൂർ",
    tagline: "Where the emerald Chaliyar river loops like the Amazon basin beneath mist-clad peaks",
    category: "Hill View & Treks",
    taluk: "Eranad",
    rating: 4.8,
    reviewsCount: 680,
    entryFee: "Free entry",
    timings: "5:30 AM – 6:45 PM (Best for sunrise mist & sunset golden hour)",
    bestTimeToVisit: "July to February (Monsoon cloud cover & lush post-monsoon river meanders)",
    nearestStation: "Nilambur Road (14 km) / Angadipuram (35 km)",
    nearestAirport: "Calicut International Airport CCJ (36 km)",
    heroImage: "/images/spots/amazon-viewpoint-hero.webp",
    gallery: [
      "/images/spots/amazon-viewpoint-hero.webp",
      "/images/spots/amazon-viewpoint-1.webp",
      "/images/spots/amazon-viewpoint-2.webp"
    ],
    description: "Perched majestically on a high granite crest in East Chathalloor near Othayi and Edavanna in Eranad taluk, Amazon View Point is one of Malappuram's most breathtaking emerging trekking destinations. The peak earns its evocative name from the dramatic aerial panorama visible from the summit: looking down from the sheer cliff, the mighty Chaliyar River winds through the lush tropical landscape in wide, looping bends that vividly resemble satellite views of the Amazon river basin. Reached via an invigorating uphill trail traversing shaded rubber estates, wild evergreen forest patches, and rugged rock steps, the summit offers an unobstructed 360-degree panorama of rolling valley ridges, refreshing hill breezes, and glowing Malabar sunrises and sunsets.",
    historyHighlights: "Celebrated by Kerala Tourism and regional trekking communities for the signature S-curve meander of the Chaliyar River along the Othayi-Edavanna river corridor in Eranad taluk.",
    activities: [
      "Hike the scenic uphill forest and rocky trail from East Chathalloor base",
      "Marvel at the famous looping 'Amazon-style' river meander of the Chaliyar",
      "Capture stunning sunrise mist and sunset golden hour photography",
      "Relax on the summit granite plateau enjoying the constant cool mountain breeze",
      "Observe diverse Malabar flora and birdlife thriving along the hillside trail"
    ],
    tips: [
      "Take the route turning right from Othayi towards East Chathalloor; vehicles can reach the base trail point",
      "Wear sturdy footwear with good grip as the rocky pathways can be slippery in wet weather",
      "Carry sufficient drinking water as there are no shops once you start the uphill climb",
      "Exercise caution near rock edges; the summit has natural steep drops without guard rails"
    ],
    locationCoords: { lat: 11.2499, lng: 76.1418 },
    mapUrl: "https://maps.google.com/?q=Amazon+View+Point+Chathalloor+Edavanna",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "kakkadampoyil-hill-view",
    name: "Kakkadampoyil Misty Hills & Valley Viewpoint",
    malayalamName: "കക്കാടംപൊയിൽ മലനിരകൾ & വ്യൂപോയിന്റ്",
    tagline: "The 'Ooty of Malabar' high on the Western Ghats with dramatic cloud valleys & cool mountain air",
    category: "Hill View & Treks",
    taluk: "Nilambur",
    rating: 4.8,
    reviewsCount: 1350,
    entryFee: "Free public viewpoints (resort/park entries ₹50)",
    timings: "6:00 AM – 6:30 PM (Best for early morning cloud beds and sunset mist)",
    bestTimeToVisit: "Throughout the year, especially June to February for rolling mist and cool breezes",
    nearestStation: "Nilambur Road (24 km)",
    nearestAirport: "Calicut International Airport CCJ (42 km)",
    heroImage: "/images/spots/kakkadampoyil-hero.webp",
    gallery: [
      "/images/spots/kakkadampoyil-hero.webp",
      "/images/spots/kakkadampoyil-1.jpg"
    ],
    description: "Perched at an elevation exceeding 2,200 feet along the misty Western Ghats bordering Nilambur, Kakkadampoyil is famously hailed as the 'Ooty of Malabar'. Renowned for its perpetually cool mountain climate, deep pine and cardamom forests, and blanket of rolling fog, Kakkadampoyil offers jaw-dropping hill views across undulating valleys and the winding Chaliyar river basin below. Popular viewpoints like Kurisumala, Chaliyar S-Valavu, and Foggy Peaks give travelers panoramic sights of cloud seas cascading down green peaks. It is a premier getaway for trekking, off-road driving, and breathing in pristine mountain air.",
    historyHighlights: "Traditional high-altitude tribal and settler highland on the edge of the Nilgiri Biosphere. Celebrated as Malappuram's highest altitude hill station destination.",
    activities: [
      "Stand atop high-altitude viewpoints watching clouds roll across the valley",
      "Trek through mist-wrapped forest trails and spice plantations",
      "Photograph the dramatic Chaliyar S-curve river bend from the mountain rim",
      "Enjoy hot Malabar tea and steamed plantains at cliffside tea stalls",
      "Drive the scenic winding hairpin roads climbing from Nilambur foothills"
    ],
    tips: [
      "Afternoon fog can reduce visibility drastically; drive with fog lights on hairpin roads",
      "Carry a light jacket or sweater as temperatures drop considerably in the evening",
      "Combine with a visit to nearby Kozhippara waterfalls and Nilambur teak trails"
    ],
    locationCoords: { lat: 11.3392, lng: 76.1364 },
    mapUrl: "https://maps.google.com/?q=Kakkadampoyil+Viewpoint+Malappuram",
    isPopular: true,
    isMustVisit: true
  },
  {
    id: "shanthitheeram-river-park",
    name: "Shanthi Theeram Kadalundi Riverfront Park",
    malayalamName: "ശാന്തിതീരം കടലുണ്ടി റിവർസൈഡ് പാർക്ക്",
    tagline: "Idyllic Kadalundi riverbank promenade with pedal boating, coracle rides & serene water views",
    category: "River View & Lakes",
    taluk: "Malappuram",
    rating: 4.6,
    reviewsCount: 920,
    entryFee: "₹20 Entry; Boating ₹50–₹100 per person",
    timings: "10:00 AM – 7:30 PM (Pleasant river breezes after 4:00 PM)",
    bestTimeToVisit: "October to May (Best water levels and calm river current)",
    nearestStation: "Angadipuram (16 km) / Tirur (28 km)",
    nearestAirport: "Calicut International Airport CCJ (24 km)",
    heroImage: "/images/spots/shanthitheeram-hero.webp",
    gallery: [
      "/images/spots/shanthitheeram-hero.webp",
      "/images/spots/shanthitheeram-1.jpg"
    ],
    description: "Spread gracefully along the calm green banks of the Kadalundi River near the Malappuram Civil Station, Shanthi Theeram is the district's premier riverfront leisure park. Designed to provide a serene sanctuary amidst nature, it features shaded waterside walking promenades, open-air riverfront benches, manicured flower beds, and a children's play area. Visitors can take to the water on pedal boats or traditional South Indian Kuttavanchi (coracle bowl boats) for an intimate view of the gentle river currents and lush riverside bamboo groves.",
    historyHighlights: "Established by DTPC as Malappuram municipality's flagship eco-tourism riverfront park to revive and celebrate the Kadalundi riverine ecosystem.",
    activities: [
      "Glide across the tranquil Kadalundi River on traditional coracle (Kuttavanchi) rides",
      "Stroll along the paved riverside promenade during golden sunset hours",
      "Enjoy family pedal boating under the shade of overhanging riverside trees",
      "Relax on river-facing benches watching local fishermen and wading waterbirds",
      "Try the family adventure zone and outdoor recreational activities"
    ],
    tips: [
      "Evenings after 4:30 PM are the best time to enjoy the cool river breeze",
      "Life jackets are provided and mandatory for all boat rides",
      "Only 5 minutes drive from Kottakunnu Hill Park in Malappuram town center"
    ],
    locationCoords: { lat: 11.0728, lng: 76.0740 },
    mapUrl: "https://maps.google.com/?q=Shanthi+Theeram+Riverside+Park+Malappuram",
    isPopular: true,
    isMustVisit: false
  },
  {
    id: "vallikunnu-beach",
    name: "Vallikunnu Beach & Coastal Palms",
    malayalamName: "വള്ളിക്കുന്ന് ബീച്ച് & തീരദേശം",
    tagline: "Pristine golden sands fringed by whispering coconut groves along the tranquil Malabar coast",
    category: "Beaches & Coastal",
    taluk: "Tirur",
    rating: 4.6,
    reviewsCount: 850,
    entryFee: "Free public access",
    timings: "Open 24 hours (Best from 4:00 PM to 7:00 PM for sunset)",
    bestTimeToVisit: "September to March (Gentle sea breeze and golden sunny shores)",
    nearestStation: "Vallikkunnu Railway Station (1.5 km) / Parappanangadi (6 km)",
    nearestAirport: "Calicut International Airport CCJ (20 km)",
    heroImage: "/images/spots/vallikunnu-beach-hero.webp",
    gallery: [
      "/images/spots/vallikunnu-beach-hero.webp",
      "/images/spots/ponnani-beach-hero.jpg"
    ],
    description: "Tucked away along the northern coast of Malappuram district just south of the Kadalundi River estuary, Vallikunnu Beach is one of the most serene and unspoiled stretches of coastline in Kerala. Fringed by dense rows of swaying coconut palms and velvety golden sands, the beach offers a peaceful escape from crowded tourist hubs. The shallow surf is ideal for quiet beach walks, watching traditional wooden fishing boats haul in the day's catch, and enjoying unhurried, panoramic sunsets over the Arabian Sea.",
    historyHighlights: "Historic fishing hamlet where coastal fishermen have practiced traditional shore-seine fishing for centuries. Located adjacent to the Kadalundi-Vallikkunnu bird sanctuary.",
    activities: [
      "Take long, barefoot walks along the peaceful golden sand coastline",
      "Watch traditional Malabar fishermen launch and return on wooden canoes",
      "Witness vivid orange and crimson sunsets sinking into the Arabian Sea",
      "Combine with birdwatching at the adjacent Kadalundi River mangrove estuary",
      "Sample fresh coastal seafood and tender coconuts from village stalls"
    ],
    tips: [
      "Very close to Vallikkunnu railway station, making it effortlessly accessible by train",
      "Observe ocean safety warnings and avoid swimming during rough monsoon tides",
      "A quieter, more tranquil alternative to bustling urban beaches"
    ],
    locationCoords: { lat: 11.1215, lng: 75.8342 },
    mapUrl: "https://maps.google.com/?q=Vallikunnu+Beach+Malappuram",
    isPopular: true,
    isMustVisit: true
  }
];

export const CATEGORIES = [
  "All",
  "Hill View & Treks",
  "River View & Lakes",
  "Beaches & Coastal",
  "Waterfalls",
  "Heritage & Culture",
  "Forests & Wildlife"
] as const;

export const TALUKS = [
  "All",
  "Nilambur",
  "Malappuram",
  "Eranad",
  "Ponnani",
  "Tirur",
  "Perinthalmanna",
  "Kondotty",
  "Karuvarakundu",
  "Kottakkal"
] as const;
