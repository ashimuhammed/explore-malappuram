export interface DayItinerary {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  idealFor: string;
  themeColor: string;
  spotsIncluded: string[];
  stops: {
    time: string;
    spotId: string;
    name: string;
    activity: string;
    localTip: string;
  }[];
}

export const CURATED_ITINERARIES: DayItinerary[] = [
  {
    id: "nilambur-teak-rainforest",
    title: "The Royal Teak & Rainforest Trail",
    subtitle: "Nilambur's world-famous ancient teak plantations, river bridges & deep wilderness",
    duration: "Full Day (8:30 AM – 6:00 PM)",
    idealFor: "Nature lovers, photographers & families",
    themeColor: "from-emerald-600 to-teal-800",
    spotsIncluded: ["conollys-plot-teak-museum", "nilambur-kovilakam", "adyanpara-waterfalls", "nedumkayam-rainforest"],
    stops: [
      {
        time: "08:30 AM",
        spotId: "conollys-plot-teak-museum",
        name: "Conolly's Plot & Hanging Bridge",
        activity: "Cross the swinging Chaliyar suspension bridge and walk among the 180-year-old giant teak trees before the afternoon heat.",
        localTip: "Pick up the combined entry ticket for both the plot and museum at the entrance counter."
      },
      {
        time: "11:00 AM",
        spotId: "nilambur-kovilakam",
        name: "Nilambur Kovilakam (Royal Palace)",
        activity: "Explore the ancient wooden carved palace of the Nilambur Rajas and the sacred Vettakkorumakan temple.",
        localTip: "Admire the traditional gabled architecture and shaded courtyards along the Chaliyar riverbank."
      },
      {
        time: "12:15 PM",
        spotId: "conollys-plot-teak-museum",
        name: "Nilambur Teak Museum",
        activity: "Explore the world's only teak museum, marvel at the ancient root exhibits, and walk the butterfly garden.",
        localTip: "The museum library has rare botanical prints dating to the British colonial period."
      },
      {
        time: "01:30 PM",
        spotId: "food-stop",
        name: "Nilambur Traditional Malabar Lunch",
        activity: "Enjoy authentic Malabar biriyani or Thalassery style meals at a local Nilambur restaurant.",
        localTip: "Try the refreshing local spiced buttermilk (Sambhāram) to beat the tropical sun."
      },
      {
        time: "02:45 PM",
        spotId: "adyanpara-waterfalls",
        name: "Adyanpara Waterfalls",
        activity: "Dip your feet in safe terraced rock stream pools under lush canopy at Kurumbalangode.",
        localTip: "Watch your footing on wet rock surfaces and stick to the forest guard designated pool areas."
      },
      {
        time: "04:30 PM",
        spotId: "nedumkayam-rainforest",
        name: "Nedumkayam Rainforest Reserve",
        activity: "Venture to Karimpuzha river banks, view the 1929 vintage British wooden lodge, and spot wild birds and forest wildlife.",
        localTip: "Forest entry closes by 4:30 PM, so ensure your checkpost entry pass is stamped before arrival."
      }
    ]
  },
  {
    id: "nila-coastal-heritage",
    title: "Nila River & Coastal Gateway",
    subtitle: "Tirur literary shrine, Mamankam battlegrounds, Chamravattom bridge & Ponnani lighthouse",
    duration: "Full Day (9:00 AM – 7:30 PM)",
    idealFor: "Culture seekers, history buffs & foodies",
    themeColor: "from-amber-600 to-rose-700",
    spotsIncluded: ["thunchan-parambu", "thirunavaya-mamankam", "chamravattom-bridge", "biyyam-kayal", "ponnani-lighthouse", "padinharekara-beach"],
    stops: [
      {
        time: "09:00 AM",
        spotId: "thunchan-parambu",
        name: "Thunchan Parambu (Tirur)",
        activity: "Begin at the cradle of Malayalam language. Walk beneath the ancient sweet kanjiram tree and see the poet's stylus.",
        localTip: "Spend a quiet moment at Saraswathi Mandapam; it is extraordinarily peaceful in the morning."
      },
      {
        time: "11:00 AM",
        spotId: "thirunavaya-mamankam",
        name: "Thirunavaya & Mamankam Memorials",
        activity: "Stand on the banks of River Nila where the 12-yearly Mamankam warriors fought the Zamorin; visit Navamukunda temple.",
        localTip: "Ask a local boatman or priest to show you the Manikkinar (well of Chavers) and Nilapaduthara."
      },
      {
        time: "01:00 PM",
        spotId: "chamravattom-bridge",
        name: "Chamravattom Regulator-Bridge",
        activity: "Cross Kerala's longest regulator bridge spanning River Nila and view the unique riverbed Chamravattom temple.",
        localTip: "Scenic drive connecting Tirur and Ponnani taluks with panoramic river views."
      },
      {
        time: "02:00 PM",
        spotId: "food-stop",
        name: "Ponnani Port Fresh Seafood Lunch",
        activity: "Relish authentic coastal Ponnani spiced fried kingfish, stuffed mussels (Arikadukka), and Neypathiri.",
        localTip: "Look for traditional family mess rooms along the old Ponnani harbour road."
      },
      {
        time: "03:30 PM",
        spotId: "ponnani-lighthouse",
        name: "Ponnani Lighthouse",
        activity: "Climb the 30m spiral staircase of Ponnani Lighthouse for 360-degree sea views and harbor scenes.",
        localTip: "Visitor admission is from 3:00 PM to 5:30 PM."
      },
      {
        time: "05:15 PM",
        spotId: "biyyam-kayal",
        name: "Biyyam Kayal",
        activity: "Cross the pedestrian hanging bridge over the serene backwater lake and enjoy a relaxing pedal boat ride.",
        localTip: "Grab a fresh tender coconut from the lakeside farmers' cart."
      },
      {
        time: "06:15 PM",
        spotId: "padinharekara-beach",
        name: "Padinharekara Beach Sunset",
        activity: "Walk along the breakwater pier where Bharathapuzha empties into the Arabian Sea as thousands of sea birds glide at dusk.",
        localTip: "Stay through twilight when the lighthouse beam cuts across the estuary water."
      }
    ]
  },
  {
    id: "valluvanad-heritage-hills",
    title: "Valluvanad Royalty, Lore & Ayurveda",
    subtitle: "Historic capital of Valluvanad Rajas, Jnanappana birthplace & Kottakkal healing",
    duration: "Full Day (8:00 AM – 6:30 PM)",
    idealFor: "Spiritual travelers, heritage enthusiasts & seekers of wellness",
    themeColor: "from-rose-700 to-amber-700",
    spotsIncluded: ["thirumandhamkunnu-temple", "poonthanam-illam", "kodikuthimala", "kottakkal-arya-vaidya-sala"],
    stops: [
      {
        time: "08:00 AM",
        spotId: "thirumandhamkunnu-temple",
        name: "Thirumandhamkunnu Bhagavathi Temple",
        activity: "Climb the hilltop stone steps at Angadipuram to the royal temple of the Valluvanad Rajas, home of Mangalya Pooja.",
        localTip: "Observe the ancient granite carvings and the peaceful morning mountain breeze."
      },
      {
        time: "10:30 AM",
        spotId: "poonthanam-illam",
        name: "Poonthanam Illam (Kizhattur)",
        activity: "Explore the 16th-century traditional Nalukettu home of saint-poet Poonthanam and sit by the lotus pond.",
        localTip: "View the preserved palm-leaf writing chamber of the author of Jnanappana."
      },
      {
        time: "12:30 PM",
        spotId: "food-stop",
        name: "Perinthalmanna Malabar Feast",
        activity: "Taste authentic Valluvanad style sadhya or Malabar dum biriyani at a premier Perinthalmanna restaurant.",
        localTip: "Try the traditional sweet Ada and Sulaimani tea."
      },
      {
        time: "02:30 PM",
        spotId: "kodikuthimala",
        name: "Kodikuthimala Summit (Mini Ooty)",
        activity: "Ascend into the Amminikkadan hill range for panoramic views from the 3-tier watchtower.",
        localTip: "Cool mountain breezes make this an invigorating afternoon stop."
      },
      {
        time: "05:00 PM",
        spotId: "kottakkal-arya-vaidya-sala",
        name: "Kottakkal Arya Vaidya Sala & Gardens",
        activity: "Visit the global capital of Ayurveda, tour the historic P.S. Varier herbal museum and medicinal plant gardens.",
        localTip: "Shop authentic Ayurvedic herbal teas and natural oils directly at the headquarters."
      }
    ]
  },
  {
    id: "misty-heights-town",
    title: "Misty Heights & Malappuram Town Heart",
    subtitle: "Sunrise over rolling clouds at Kodikuthimala, Oorakam hill, hilltop fort & laser show",
    duration: "Afternoon to Night or Full Day",
    idealFor: "Couples, photographers & weekend tourists",
    themeColor: "from-sky-700 to-indigo-900",
    spotsIncluded: ["oorakam-mala", "arimbra-hills", "pazhayangadi-mosque-kondotty", "kottakunnu"],
    stops: [
      {
        time: "06:30 AM",
        spotId: "oorakam-mala",
        name: "Oorakam Mala Summit Trek",
        activity: "Ascend nearly 2,000 feet to the ancient Kunnath Shiva Temple for breathtaking sunrise cloud-bed views.",
        localTip: "Catch the sunrise over the eastern Nilgiri mountain silhouettes."
      },
      {
        time: "10:30 AM",
        spotId: "arimbra-hills",
        name: "Arimbra Hills (Mini Ooty Viewpoint)",
        activity: "Experience the glass bridge cantilevered over the valley and drive through scenic plantation hairpin turns.",
        localTip: "Cliff-side cafes serve delicious piping hot Malabar Sulaimani tea."
      },
      {
        time: "01:00 PM",
        spotId: "pazhayangadi-mosque-kondotty",
        name: "Pazhayangadi Mosque & Kondotty Qubba",
        activity: "Admire the 18th-century Mughal-Persian octagonal dome architecture and experience Kondotty heritage.",
        localTip: "Taste famous Kondotty spiced biriyani at local eateries nearby."
      },
      {
        time: "04:00 PM",
        spotId: "kottakunnu",
        name: "Kottakunnu Hilltop Park",
        activity: "Explore the ancient Zamorin fort ramparts, lush hilltop gardens, art gallery, and amusement rides.",
        localTip: "Secure a bench near the western rampart by 5:30 PM for the sunset panorama."
      },
      {
        time: "07:00 PM",
        spotId: "kottakunnu",
        name: "Musical Laser Water Fountain",
        activity: "Watch the synchronized laser and water dancing fountain show illuminating the Malappuram night sky.",
        localTip: "End the night tasting Malappuram Kuzhi Mandi and hot snacks at the Kottakunnu food promenade."
      }
    ]
  }
];
