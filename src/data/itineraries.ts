export interface SuggestedItinerary {
  id: string;
  title: string;
  duration: string;
  route: string[];
  description: string;
  highlights: string[];
  bestFor: string[];
}

export const suggestedItineraries: SuggestedItinerary[] = [
  {
    id: "grand-tour",
    title: "The Grand Tour",
    duration: "10-14 days",
    route: ["Palermo", "Aeolian Islands", "Taormina & Etna", "Syracuse & Baroque Towns"],
    description: "The complete Sicily experience covering all major regions, designed for first-time visitors who want to understand the island's extraordinary diversity. From Arab-Norman Palermo through volcanic islands to Greek antiquity in the southeast, this journey traces 3,000 years of Mediterranean civilization.",
    highlights: [
      "Palatine Chapel's golden Byzantine mosaics",
      "Stromboli's night eruptions from a boat",
      "Etna summit with volcanic wines",
      "Greek theater performances in Syracuse"
    ],
    bestFor: ["First-time visitors", "Culture enthusiasts", "Photographers"]
  },
  {
    id: "island-odyssey",
    title: "Island Odyssey",
    duration: "7 days",
    route: ["Lipari", "Vulcano", "Salina", "Stromboli", "Panarea"],
    description: "A volcanic adventure through the Aeolian archipelago, island-hopping by ferry and hydrofoil between dramatically different worlds. Each island offers unique personality—from Vulcano's therapeutic mud to Stromboli's permanent fireworks to Panarea's jet-set glamour.",
    highlights: [
      "Volcanic mud baths at Vulcano",
      "Malvasia wine tasting in vineyard",
      "Stromboli summit at sunset",
      "Swimming at Cala Junco, Panarea"
    ],
    bestFor: ["Adventure seekers", "Nature lovers", "Beach enthusiasts"]
  },
  {
    id: "baroque-beaches",
    title: "Baroque & Beaches",
    duration: "7 days",
    route: ["Syracuse", "Noto", "Modica", "Ragusa", "Vendicari"],
    description: "UNESCO baroque towns and pristine southeastern beaches combine in the region where Sicily's beauty feels most concentrated. Honey-colored cathedrals glow at sunset, chocolate workshops preserve Spanish traditions, and nature reserves hide Italy's most beautiful beaches.",
    highlights: [
      "Ortigia island exploration",
      "Noto cathedral at golden hour",
      "Modica chocolate workshop",
      "Calamosche hidden beach"
    ],
    bestFor: ["Architecture lovers", "Foodies", "Beach seekers", "Romantic trips"]
  },
  {
    id: "food-wine",
    title: "Food & Wine Trail",
    duration: "5-7 days",
    route: ["Palermo markets", "Marsala wineries", "Etna volcanic wines", "Modica chocolate"],
    description: "Sicily's culinary heritage from Arab-influenced street food through volcanic terroir wines to Aztec chocolate traditions. Market tours, cooking classes, vineyard visits, and some of Italy's most exciting restaurants create a feast for all senses.",
    highlights: [
      "Ballarò market street food tour",
      "Marsala wine cellars",
      "Etna vineyard sunset tasting",
      "Ancient chocolate making"
    ],
    bestFor: ["Food enthusiasts", "Wine lovers", "Cooking class seekers"]
  },
  {
    id: "volcano-adventure",
    title: "Volcano Adventure",
    duration: "5-6 days",
    route: ["Catania", "Mount Etna", "Stromboli", "Vulcano"],
    description: "Three active volcanoes, three dramatically different experiences. Summit Etna with a volcanologist, witness Stromboli's eternal eruptions, soak in Vulcano's therapeutic mud. This is Sicily at its most geologically dynamic, where the earth's power shapes daily life.",
    highlights: [
      "Etna summit crater hiking",
      "Stromboli night eruption viewing",
      "Vulcano fumaroles and mud baths",
      "Volcanic wine and food"
    ],
    bestFor: ["Adventure travelers", "Geology enthusiasts", "Active travelers"]
  },
  {
    id: "ancient-sicily",
    title: "Ancient Sicily",
    duration: "7-9 days",
    route: ["Syracuse", "Agrigento Valley", "Segesta", "Selinunte"],
    description: "Greek temples, Roman mosaics, and the archaeological sites that made Sicily magna graecia—greater Greece. From Syracuse's rivalry with Athens to the perfectly preserved Temple of Concordia, this journey explores when Sicily was the Mediterranean's cultural heart.",
    highlights: [
      "Greek theater sunset performances",
      "Valley of the Temples dawn visit",
      "Segesta's isolated perfection",
      "Ear of Dionysius acoustics"
    ],
    bestFor: ["History buffs", "Ancient culture lovers", "Photographers"]
  }
];

export interface TripPreferences {
  duration: number;
  startCity: string;
  travelStyle: string;
  interests: string[];
}

export interface GeneratedDay {
  day: number;
  location: string;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  insiderTip: string;
}

export interface GeneratedItinerary {
  title: string;
  summary: string;
  days: GeneratedDay[];
  practicalInfo: {
    transportation: string;
    budget: string;
    packing: string[];
  };
  matchedItinerary: SuggestedItinerary | null;
}

const dayTemplates: Record<string, GeneratedDay[]> = {
  palermo: [
    {
      day: 1,
      location: "Palermo",
      title: "Palermo's Arab-Norman Heart",
      morning: "Start at the Palatine Chapel (book 9 AM entry for best light). The Byzantine mosaics shimmer with gold as morning sun streams through. Then explore the Norman Palace's royal apartments.",
      afternoon: "Lose yourself in Ballarò Market—taste panelle, arancine, and sfincione from vendors who've occupied the same stalls for generations. The chaos is part of the charm.",
      evening: "Aperitivo at Piazza Marina, watching the passeggiata before dinner at Trattoria Ai Cascinari for authentic pasta con le sarde.",
      insiderTip: "The market vendors are friendliest around 11 AM after the morning rush. Ask to taste before buying—they expect it."
    },
    {
      day: 2,
      location: "Palermo",
      title: "Markets & Mosaics",
      morning: "Visit the Vucciria market (more touristy but photogenic) then the Capuchin Catacombs with their unsettling mummified residents.",
      afternoon: "Day trip to Monreale Cathedral—the golden mosaics cover 6,400 square meters. The cloister with its 228 carved columns deserves an hour.",
      evening: "Return to Palermo for seafood dinner at the port, watching fishing boats return.",
      insiderTip: "Take bus 389 to Monreale rather than taxi—it drops you at the cathedral door and costs €1.40."
    }
  ],
  taormina: [
    {
      day: 1,
      location: "Taormina",
      title: "Theater Views & Coastal Beauty",
      morning: "Early visit to the Greek Theater before crowds arrive. The view—Etna framing the Ionian Sea—is one of Sicily's defining images.",
      afternoon: "Take the cable car down to Isola Bella and swim in the crystal waters around the nature reserve island.",
      evening: "Passeggiata along Corso Umberto, ending with granita at Bam Bar and dinner overlooking the coast.",
      insiderTip: "The theater is magical at sunset if you can attend an evening performance during summer festival season."
    }
  ],
  etna: [
    {
      day: 1,
      location: "Mount Etna",
      title: "Volcano Summit Adventure",
      morning: "Depart early for Rifugio Sapienza at 1900m. Take the cable car and 4x4 to 2900m, then hike with guide to active craters.",
      afternoon: "Descend through lava fields and visit Silvestri craters. Stop at a mountain refuge for local lunch with volcanic views.",
      evening: "Wine tasting at an Etna DOC winery—the Nerello Mascalese grapes create incomparable volcanic terroir wines.",
      insiderTip: "Book the morning summit hike—afternoon clouds often obscure the views. Bring layers; it's 20°C colder than the coast."
    }
  ],
  syracuse: [
    {
      day: 1,
      location: "Syracuse",
      title: "Greek Glory & Baroque Elegance",
      morning: "Archaeological park: Greek theater, Ear of Dionysius cave, Roman amphitheater. The scale of ancient Syracuse becomes clear.",
      afternoon: "Cross to Ortigia island—visit the Duomo built into Athena's temple, Arethusa Spring with its papyrus, and the morning market.",
      evening: "Sunset at Castello Maniace on Ortigia's tip, then seafood dinner in the old Jewish quarter.",
      insiderTip: "Find Borderi deli near the Duomo. Don't order—let the owner create a sandwich based on your mood."
    },
    {
      day: 2,
      location: "Noto & Modica",
      title: "Baroque Splendor",
      morning: "Drive to Noto for the cathedral (climb for panorama), Palazzo Nicolaci balconies, and Caffè Sicilia's legendary granita.",
      afternoon: "Continue to Modica for chocolate workshop—the Aztec-style grainy texture is unique. Explore the vertical town's dramatic cityscape.",
      evening: "Dinner at Ragusa Ibla's Piazza Duomo, one of Sicily's finest baroque urban spaces.",
      insiderTip: "Visit Noto at sunset when the honey-colored stone turns golden—the effect is almost supernatural."
    }
  ],
  aeolian: [
    {
      day: 1,
      location: "Lipari",
      title: "Volcanic Paradise Base",
      morning: "Arrive by hydrofoil from Milazzo. Settle into Lipari town and explore the Norman castle and archaeological museum.",
      afternoon: "Beach time at Spiaggia Bianca—the white pumice sand against turquoise water is surreal.",
      evening: "Dinner at Il Filippino for Aeolian specialties featuring local capers.",
      insiderTip: "Book return ferries immediately on arrival—summer services fill completely."
    },
    {
      day: 2,
      location: "Stromboli",
      title: "The Volcano That Never Sleeps",
      morning: "Ferry to Stromboli. Explore the white village with its car-free streets and bougainvillea.",
      afternoon: "Rest for the evening—either summit hike (6 hours) or night boat tour to watch eruptions from sea.",
      evening: "Watch Stromboli's fireworks—explosions every 10-20 minutes, lava arcing against the night sky.",
      insiderTip: "The boat tour offers better views for less effort. Book 'Sciara del Fuoco' tour that circles the island."
    }
  ]
};

export function generateItinerary(preferences: TripPreferences): GeneratedItinerary {
  const { duration, startCity, travelStyle, interests } = preferences;
  
  // Find best matching suggested itinerary
  let matchedItinerary: SuggestedItinerary | null = null;
  
  if (interests.includes("Wine") || interests.includes("Food")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "food-wine") || null;
  } else if (interests.includes("Hiking") || interests.includes("Hiking")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "volcano-adventure") || null;
  } else if (interests.includes("Ancient ruins") || interests.includes("Baroque")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "ancient-sicily") || null;
  } else if (interests.includes("Islands") || interests.includes("Beaches")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "baroque-beaches") || null;
  } else if (duration >= 10) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "grand-tour") || null;
  }
  
  // Generate day-by-day itinerary
  const days: GeneratedDay[] = [];
  let currentDay = 1;
  
  // Determine regions based on preferences
  const regions: string[] = [];
  
  if (startCity === "Palermo" || startCity === "Any") {
    regions.push("palermo");
  }
  if (startCity === "Catania" || startCity === "Any") {
    regions.push("etna");
  }
  if (interests.includes("Islands")) {
    regions.push("aeolian");
  }
  if (interests.includes("Ancient ruins") || interests.includes("Baroque") || interests.includes("Beaches")) {
    regions.push("syracuse");
  }
  if (interests.includes("Photography") || startCity === "Any") {
    regions.push("taormina");
  }
  
  // If no regions selected, add based on start city
  if (regions.length === 0) {
    if (startCity === "Palermo") {
      regions.push("palermo", "taormina");
    } else {
      regions.push("syracuse", "etna");
    }
  }
  
  // Add days from each region
  const daysPerRegion = Math.max(2, Math.floor(duration / regions.length));
  
  for (const region of regions) {
    const templates = dayTemplates[region] || dayTemplates.palermo;
    for (let i = 0; i < Math.min(daysPerRegion, templates.length); i++) {
      if (currentDay <= duration) {
        days.push({
          ...templates[i],
          day: currentDay++
        });
      }
    }
  }
  
  // Fill remaining days
  while (days.length < duration && days.length < 14) {
    const lastDay = days[days.length - 1];
    days.push({
      day: days.length + 1,
      location: lastDay?.location || "Sicily",
      title: "Free Day for Exploration",
      morning: "Sleep in and enjoy a leisurely breakfast at your accommodation.",
      afternoon: "Return to a favorite spot or explore hidden corners you've discovered.",
      evening: "Final dinner at a local favorite—ask your host for their personal recommendation.",
      insiderTip: "Leave room for serendipity. The best Sicilian experiences often come unplanned."
    });
  }
  
  // Generate title based on style
  const styleDescriptor = {
    "Cultural Deep Dive": "Cultural",
    "Beach & Relaxation": "Relaxed",
    "Food & Wine": "Culinary",
    "Active Adventure": "Adventure",
    "Balanced Mix": "Classic"
  }[travelStyle] || "Classic";
  
  // Budget estimate
  const budgetEstimate = travelStyle === "Beach & Relaxation" || travelStyle === "Cultural Deep Dive"
    ? "€120-180/day mid-range"
    : travelStyle === "Food & Wine"
    ? "€180-280/day with dining"
    : "€100-150/day budget-conscious";
  
  return {
    title: `Your ${duration}-Day ${styleDescriptor} Sicily Journey`,
    summary: `Starting from ${startCity === "Any" ? "Palermo (recommended)" : startCity}, this personalized itinerary focuses on ${interests.length > 0 ? interests.join(", ").toLowerCase() : "a balanced mix of experiences"}. The pace is calibrated for ${travelStyle.toLowerCase()}, with flexibility built in for spontaneous discoveries.`,
    days,
    practicalInfo: {
      transportation: duration > 5 
        ? "Rental car recommended for flexibility. Book automatic transmission in advance."
        : "Combination of trains, buses, and ferries works well for shorter trips.",
      budget: budgetEstimate,
      packing: [
        "Comfortable walking shoes for cobblestones",
        "Layers for mountain visits (20°C cooler)",
        "Swimsuit and reef shoes for rocky beaches",
        "Light scarf for church dress codes"
      ]
    },
    matchedItinerary
  };
}
