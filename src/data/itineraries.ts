export interface SuggestedItinerary {
  id: string;
  title: string;
  duration: string;
  route: string[];
  description: string;
  highlights: string[];
  bestFor: string[];
  image?: string;
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
  image?: 'baroque' | 'etna' | 'coast';
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

// Extensive day templates for each location with unique experiences
const dayTemplates: Record<string, GeneratedDay[]> = {
  palermo: [
    {
      day: 1,
      location: "Palermo",
      title: "The Arab-Norman Crossroads",
      morning: "Begin at the Palatine Chapel (book 9 AM entry when light illuminates the gold mosaics). Spend time studying the Byzantine Christ Pantocrator, then explore the Norman Palace's royal apartments where Roger II held court.",
      afternoon: "Lose yourself in Ballarò Market—the oldest in Palermo. Taste sfincione (Sicilian pizza), panelle (chickpea fritters), and stigghiola (grilled intestines, for the brave). Each vendor occupies stalls held for generations.",
      evening: "Aperitivo at Piazza Marina beneath ancient ficus trees, then dinner at Trattoria Ai Cascinari for authentic pasta con le sarde (sardines, fennel, pine nuts, raisins).",
      insiderTip: "Market vendors are friendliest around 11 AM after the morning rush. Ask to taste before buying—they expect and respect it.",
      image: 'baroque'
    },
    {
      day: 2,
      location: "Palermo",
      title: "Death, Beauty & Mosaics",
      morning: "The Capuchin Catacombs house 8,000 mummified bodies—unsettling yet profound. Then visit the Oratory of San Lorenzo to see Serpotta's stucco masterpieces (the original Caravaggio was stolen in 1969).",
      afternoon: "Drive or bus to Monreale Cathedral. The 6,400 square meters of golden Byzantine mosaics tell biblical stories in glittering detail. The cloister's 228 carved columns each feature unique designs.",
      evening: "Return to Palermo's port area for seafood at La Cambusa, watching fishing boats return as the sun sets over Monte Pellegrino.",
      insiderTip: "Take bus 389 to Monreale (€1.40) rather than taxi—it stops at the cathedral door and offers views of the Conca d'Oro."
    },
    {
      day: 3,
      location: "Palermo",
      title: "Street Food & Hidden Palaces",
      morning: "Start at Vucciria Market—more photogenic than Ballarò, with its hanging swordfish and octopus. Try pani ca meusa (spleen sandwich) at the ancient Focacceria San Francesco.",
      afternoon: "Palazzo Abatellis houses Antonello da Messina's 'Virgin Annunciate' and the haunting 'Triumph of Death' fresco. Then walk through the Kalsa quarter's elegant decay.",
      evening: "Pre-dinner stroll to Teatro Massimo (opera house from The Godfather III), then dine at Buatta Cucina Popolana for modern Sicilian classics.",
      insiderTip: "The rooftop terrace at Palazzo Ferrante offers sunset views over Palermo's rooftops—ask the staff nicely for access."
    },
    {
      day: 4,
      location: "Cefalù",
      title: "Norman Cathedral by the Sea",
      morning: "Day trip to Cefalù (1 hour by train). The Norman cathedral's twin towers frame a powerful mosaic Christ. Climb La Rocca fortress for panoramic views.",
      afternoon: "Explore the medieval lanes, then swim at the town beach where golden sand meets the cathedral's shadow. Lunch at ancient Osteria del Duomo.",
      evening: "Return to Palermo for final dinner in the Zisa neighborhood, near the Arab-Norman castle few tourists visit.",
      insiderTip: "The medieval laundry (Lavatoio Medievale) hidden beneath Cefalù is fed by natural springs—ask locals to point the way down."
    }
  ],
  taormina: [
    {
      day: 1,
      location: "Taormina",
      title: "The Theater of Dreams",
      morning: "Arrive early at the Greek Theater before crowds. The view—Etna's summit framing the Ionian Sea—is one of Sicily's defining images. D.H. Lawrence called it 'the most beautiful place on earth.'",
      afternoon: "Take the funicular down to Isola Bella, the 'Pearl of the Ionian.' Swim around the nature reserve island, explore its caves by snorkel.",
      evening: "The passeggiata along Corso Umberto is pure theater. End with granita di mandorla at Bam Bar, then dinner at La Capinera overlooking the bay.",
      insiderTip: "The theater is magical at sunset during summer festival season—Greek tragedies performed where they premiered 2,300 years ago.",
      image: 'coast'
    },
    {
      day: 2,
      location: "Taormina & Giardini Naxos",
      title: "First Greek Colony & Hidden Beaches",
      morning: "Descend to Giardini Naxos—where Greeks first landed in Sicily in 735 BC. Explore the archaeological park's modest but significant ruins.",
      afternoon: "Beach time at Mazzarò Bay, accessible by cable car. The water clarity is exceptional. Lunch at Lido La Pigna directly on the sand.",
      evening: "Return to Taormina for the evening passeggiata. Dine at Ristorante Vicolo Stretto—Sicily's narrowest alley hosts its most intimate restaurant.",
      insiderTip: "Rent a boat from Mazzarò to explore the Grotta Azzurra (Blue Grotto)—accessible only by sea, otherworldly light."
    },
    {
      day: 3,
      location: "Alcantara Gorge",
      title: "Swimming in Volcanic Canyons",
      morning: "Drive to the Alcantara Gorge—a river carved through ancient lava, creating geometric basalt columns. Wade through the ice-cold water between towering canyon walls.",
      afternoon: "Visit a winery in the Alcantara Valley, where volcanic soils produce distinctive Nerello wines. Lunch among the vines with Etna views.",
      evening: "Return to Taormina for sunset at the Villa Comunale gardens, then farewell dinner at Otto Geleng in the Grand Hotel Timeo.",
      insiderTip: "Bring water shoes for the gorge—the volcanic rock is sharp. Go early before tour buses arrive (before 10 AM)."
    }
  ],
  etna: [
    {
      day: 1,
      location: "Mount Etna",
      title: "Summit of Fire",
      morning: "Depart at dawn for Rifugio Sapienza (1,900m). Cable car and 4x4 to 2,900m, then hike with certified guide to active craters at 3,300m. Steam vents, recent lava, lunar landscapes.",
      afternoon: "Descend through the Silvestri craters (1983 eruption). Lunch at the refuge—simple but earned. Explore the lava fields' alien beauty.",
      evening: "Wine tasting at Barone di Villagrande, Sicily's oldest winery. The Nerello Mascalese grapes create wines unlike any other—volcanic terroir in every sip.",
      insiderTip: "Book the morning summit hike—afternoon clouds obscure views. Bring layers: it's often 20°C colder than the coast.",
      image: 'etna'
    },
    {
      day: 2,
      location: "Etna's Eastern Slopes",
      title: "Lava Villages & Volcanic Wines",
      morning: "Explore Zafferana Etnea, the 'honey capital.' Taste local miele di zagara (orange blossom honey) at the weekly market. Visit a lava stone quarry.",
      afternoon: "Wine route through Milo and Linguaglossa. Taste at Tenuta delle Terre Nere—biodynamic wines from ungrafted vines over 100 years old. Lunch at Il Picciolo.",
      evening: "Drive the scenic Mareneve road as sunset lights the eastern face. Dinner in Nicolosi at Il Buongustaio for wild mushroom dishes.",
      insiderTip: "The 2002 eruption reshaped entire villages—locals at Bar 2002 in Piano Provenzana share stories if you show genuine interest."
    },
    {
      day: 3,
      location: "Etna's Northern Face",
      title: "The Wild Side",
      morning: "Hike from Piano Provenzana through the 2002 lava flows to historic Pietracannone—a medieval village partially buried. The new growth amid destruction is extraordinary.",
      afternoon: "Cooking class at Locanda dell'Alcantara—learn to make pasta alla Norma (Catania's iconic dish). Use ingredients from the volcanic garden.",
      evening: "Sunset from the Sartorius craters—a row of cones created in 1865. Stargazing possible with minimal light pollution.",
      insiderTip: "The north face receives fewer visitors but wilder landscapes. Hire a local guide for off-trail lava tube exploration."
    },
    {
      day: 4,
      location: "Catania",
      title: "The City Etna Built",
      morning: "Fish market at La Pescheria—Sicily's most dramatic. Swordfish, tuna, octopus displayed like art. Taste crudo (raw fish) at the source.",
      afternoon: "Climb to Castello Ursino (survived seven lava flows), explore Baroque Via dei Crociferi, then climb Badia di Sant'Agata for panoramic views.",
      evening: "Aperitivo at I Ferreri Cafe, then dinner at FUD Bottega Sicula—modern Sicilian street food elevated to art.",
      insiderTip: "The Cathedral houses Sant'Agata's relics—her festival (Feb 3-5) draws 1 million pilgrims and rivals Rio's carnival for intensity."
    }
  ],
  syracuse: [
    {
      day: 1,
      location: "Syracuse",
      title: "When Sicily Was Greece",
      morning: "Archaeological park at opening: Greek theater (470 BC, still hosts performances), Ear of Dionysius (68m cave with supernatural acoustics), Roman amphitheater. Allow 3 hours.",
      afternoon: "Cross the bridge to Ortigia island. Explore the Duomo—a Greek temple converted to church, Athena's columns still visible. Find the Arethusa Spring with its papyrus (only European source).",
      evening: "Sunset at Castello Maniace on Ortigia's tip. Dinner in the old Jewish quarter—try Caseificio Ferrara for extraordinary ricotta.",
      insiderTip: "Find Borderi deli near the Duomo. Don't order—let owner Salvatore create a sandwich based on reading your face. Trust him.",
      image: 'baroque'
    },
    {
      day: 2,
      location: "Noto",
      title: "Baroque Perfection",
      morning: "Drive to Noto (30 min). Climb the cathedral for panoramic views across honey-colored palaces. Study the Palazzo Nicolaci's baroque balconies—each carved support a different mythical creature.",
      afternoon: "Caffè Sicilia is pilgrimage: Corrado Assenza's granita and pastries are legendary. Try cassata, biancomangiare, or seasonal fruit gelato. Lunch at Ristorante Manna.",
      evening: "Return at golden hour—the stone glows amber as the sun sets. Dinner in Ragusa Ibla (45 min drive), possibly Sicily's most beautiful town.",
      insiderTip: "Visit Noto at sunrise or sunset when honey-colored stone turns almost supernatural. Midday sun washes out the magic."
    },
    {
      day: 3,
      location: "Modica & Ragusa",
      title: "Chocolate Cities",
      morning: "Modica Alto: learn Aztec chocolate-making at Antica Dolceria Bonajuto—unrefined, grainy, flavored with chili or vanilla. The technique came with Spanish colonizers.",
      afternoon: "Explore Modica Bassa, climbing between the two levels. Then drive to Ragusa Ibla—enter at Piazza Duomo, one of baroque Sicily's finest spaces.",
      evening: "Dinner at Ristorante Duomo (2 Michelin stars) for modern Sicilian, or humble Taverna Barrocco for the real thing.",
      insiderTip: "Ragusa is really two cities—Ragusa Superiore (new) and Ibla (old). Park in Superiore and walk down the 240 steps for the best entrance."
    },
    {
      day: 4,
      location: "Vendicari & Marzamemi",
      title: "Wild Beaches & Tuna Villages",
      morning: "Vendicari Nature Reserve: walk through wetlands to Calamosche beach—often called Italy's most beautiful. Crystal water, no development, flamingos in season.",
      afternoon: "Marzamemi fishing village: the tonnara (tuna processing plant) is now restaurants around a perfect piazza. Lunch at Taverna La Cialoma for bottarga and sun-dried tomatoes.",
      evening: "Swim at Isola delle Correnti where the Ionian meets the Mediterranean. Watch for loggerhead turtles nesting (summer). Return to Syracuse.",
      insiderTip: "Arrive at Calamosche before 9 AM or after 5 PM—midday the small beach gets crowded. Bring everything; there's nothing there.",
      image: 'coast'
    },
    {
      day: 5,
      location: "Pantalica & Cave Dwellings",
      title: "Bronze Age Mysteries",
      morning: "Drive to Pantalica gorge—5,000 ancient tombs carved into cliffs (1250-850 BC). Hike through the canyon to see the necropolis emerging from rock.",
      afternoon: "Swim in the Anapo River's natural pools below the tombs. Lunch at Agriturismo Caseificio Ferrara for farm-fresh ricotta and ancient grains.",
      evening: "Return to Syracuse's Ortigia for final evening. Seafood dinner at Don Camillo, then moonlit walk along the sea walls.",
      insiderTip: "Enter Pantalica from Sortino side (easier hike). Bring water and sturdy shoes—there are no facilities in the reserve."
    }
  ],
  aeolian: [
    {
      day: 1,
      location: "Lipari",
      title: "Volcanic Archipelago Gateway",
      morning: "Ferry from Milazzo (frequent hydrofoils, 1 hour). Settle into Lipari town, the archipelago's hub. Visit the Norman castle and archaeological museum—obsidian trade made this wealthy.",
      afternoon: "Beach at Spiaggia Bianca—white pumice sand against turquoise water, surreally beautiful. The pumice quarries above created this impossible shore.",
      evening: "Dinner at Il Filippino, Lipari's finest, for Aeolian specialties: capers, wild fennel, Malvasia wine. Watch sunset from the castle walls.",
      insiderTip: "Book return ferries immediately on arrival—summer services fill completely. Keep flexible with rough weather backup plans."
    },
    {
      day: 2,
      location: "Vulcano",
      title: "Sulfur, Mud & Fire",
      morning: "Hydrofoil to Vulcano (15 min). Hike Gran Cratere—90 minutes to the sulfurous rim. Fumaroles hiss, the smell is overwhelming, views extend to all seven islands.",
      afternoon: "Therapeutic mud baths at the Porto Levante shore—black volcanic mud said to cure everything. Follow with sea water soak to set the minerals.",
      evening: "Sunset drinks at Therasia Resort's infinity pool before returning to Lipari, or overnight in Vulcano's quieter atmosphere.",
      insiderTip: "Don't wear silver jewelry in the mud—sulfur permanently blackens it. Rinse immediately in the sea, not fresh water.",
      image: 'coast'
    },
    {
      day: 3,
      location: "Salina",
      title: "Wine, Capers & Cinema",
      morning: "Ferry to Salina (45 min)—greenest island, two volcanic peaks. Explore Santa Marina Salina town, then visit a caper farm in Pollara for harvest demonstration.",
      afternoon: "Hike to Pollara beach (where Il Postino was filmed). The semicircular bay, carved from a volcanic crater, offers extraordinary swimming.",
      evening: "Malvasia wine tasting at Fenech or Hauner. This sweet passito wine can only be made here. Dinner of Aeolian cuisine at 'A Cannata.",
      insiderTip: "Pollara beach is reached by a steep path—bring water and consider returning before the afternoon climb back up."
    },
    {
      day: 4,
      location: "Stromboli",
      title: "The Volcano That Never Sleeps",
      morning: "Early ferry to Stromboli (2 hours). The island is the volcano—everything radiates from its smoking peak. Explore the white village's car-free alleys, bougainvillea everywhere.",
      afternoon: "Rest for the evening. Choose either: summit hike (5-6 hours, with guide, €30) or boat tour of Sciara del Fuoco (the lava slide into the sea).",
      evening: "Watch Stromboli's fireworks—eruptions every 10-20 minutes, lava arcing against the night sky. From summit or sea, it's primordial theater.",
      insiderTip: "The boat tour offers easier, closer views. Book 'Sciara del Fuoco by night'—you'll circle the active side as darkness falls.",
      image: 'etna'
    },
    {
      day: 5,
      location: "Panarea",
      title: "Glamour & Bronze Age Ruins",
      morning: "Ferry to Panarea (40 min)—smallest inhabited island, whitewashed chic. Explore the Bronze Age village of Capo Milazzese (1400 BC) on the headland.",
      afternoon: "Swim at Cala Junco—a natural volcanic pool with impossibly clear water. Rent a small boat to explore the island's coves.",
      evening: "Aperitivo at Raya hotel, where the Mediterranean jet set gathers. Return to Lipari or overnight in Panarea's boutique intimacy.",
      insiderTip: "Panarea has no cars—only electric carts. Stay overnight for quieter magic after day-trippers leave. Budget more: it's expensive."
    },
    {
      day: 6,
      location: "Filicudi",
      title: "The Untouched Island",
      morning: "Morning ferry to Filicudi—the most remote of regularly-visited islands. Population 250. Donkeys still carry goods up the steep paths.",
      afternoon: "Hike to Fossa Felci prehistoric village (abandon by 1600 BC—no one knows why). Boat tour to Grotta del Bue Marino (Monk Seal Cave).",
      evening: "Simple dinner at La Sirena, watching the sun set into empty sea. Return to Lipari or stay in Filicudi's profound quiet.",
      insiderTip: "Filicudi has limited services—bring essentials. The island rewards those who slow completely down."
    }
  ],
  agrigento: [
    {
      day: 1,
      location: "Valley of the Temples",
      title: "Dawn Among the Gods",
      morning: "Arrive at opening (8:30 AM) for Temple of Concordia—the best-preserved Greek temple outside Athens. Walk the Via Sacra as ancient Greeks did. Morning light is magical.",
      afternoon: "Kolymbethra Garden—a hidden paradise restored from ancient Greek water gardens. Citrus, almond, olive trees in a volcanic gorge. Lunch at Villa Athena with temple views.",
      evening: "Return at sunset when the temples are illuminated. The Temple of Juno against amber sky is unforgettable. Dinner in Agrigento's medieval town.",
      insiderTip: "Night visits (June-September) offer temples under starlight—ethereal experience few tourists know. Check website for schedule.",
      image: 'baroque'
    },
    {
      day: 2,
      location: "Scala dei Turchi & Surrounds",
      title: "White Cliffs & Greek Markets",
      morning: "Visit Scala dei Turchi—the blindingly white marl cliff staircases carved by nature. Swim in the turquoise waters below, climb the natural terraces.",
      afternoon: "Continue to Eraclea Minoa—Greek ruins overlooking an endless beach. The theater faces the African sea—on clear days, you sense the continent.",
      evening: "Return via the SS115 coast road. Dinner in Sciacca, a fishing town with thermal baths and ceramic traditions dating to Arab times.",
      insiderTip: "Arrive at Scala dei Turchi before 8 AM for photos without crowds. The cliffs face west—sunset is extraordinary but packed."
    }
  ],
  segesta: [
    {
      day: 1,
      location: "Western Sicily",
      title: "Temples, Salt & Wine",
      morning: "Segesta's Doric temple stands alone in green hills—never completed, columns without flutes, yet hauntingly perfect. The Greek theater above offers views to the sea.",
      afternoon: "Drive to Trapani via the salt pans of Mozia—pink water, windmills, salt pyramids. Visit San Pantaleo island's Phoenician ruins if time permits.",
      evening: "Sunset in Marsala at the salt flats, then dinner and wine tasting at a historic cantina—Pellegrino or Donnafugata.",
      insiderTip: "The road from Segesta to Trapani (SP8) is one of Sicily's most beautiful drives—schedule extra time.",
      image: 'coast'
    },
    {
      day: 2,
      location: "Selinunte & Castelvetrano",
      title: "Fallen Giants",
      morning: "Selinunte archaeological park—once one of the wealthiest Greek cities, destroyed in 409 BC. Massive column drums lie where they fell 2,400 years ago.",
      afternoon: "Castelvetrano town for lunch—taste the 'pane nero' (black bread made from local wheat). Explore the Chiesa della Santissima Trinità de Delia—Norman perfection.",
      evening: "Drive to Mazara del Vallo—Tunisia is closer than Palermo here. The Casbah neighborhood remains authentically North African.",
      insiderTip: "The 'Dancing Satyr' bronze statue in Mazara's museum was found by fishermen in 1998—one of the great archaeological discoveries of our time."
    }
  ]
};

// Additional unique filler days for variety
const uniqueFillerDays: GeneratedDay[] = [
  {
    day: 1,
    location: "Sicilian Countryside",
    title: "Agriturismo & Slow Living",
    morning: "Sleep in at your countryside accommodation. Help gather eggs, learn cheese-making, or simply read beneath ancient olive trees.",
    afternoon: "Join the family for multi-course lunch—dishes from ingredients harvested that morning. Learn to roll busiate pasta by hand.",
    evening: "Sunset walk through vineyards or orchards. Simple dinner on the terrace, perhaps just wine, bread, olive oil, and conversation.",
    insiderTip: "Ask your hosts about their family history—Sicilian hospitality opens when you show genuine interest in their stories."
  },
  {
    day: 1,
    location: "Market Day",
    title: "Following the Mercato",
    morning: "Each town has its weekly market day. Follow locals to find seasonal treasures: wild greens, fresh ricotta, local cheese, hand-cured olives.",
    afternoon: "Cook lunch with your market finds—many accommodations offer kitchen use. Or find a sagra (food festival) if one's nearby.",
    evening: "Join the evening passeggiata—every Sicilian town enacts this ritual. Gelato, people-watching, the art of doing very little very well.",
    insiderTip: "Market days: Monday (Sciacca), Tuesday (Ortigia), Wednesday (Trapani), Thursday (Modica), Friday (Catania), Saturday (Marsala)."
  },
  {
    day: 1,
    location: "Hidden Gems",
    title: "Off the Tourist Trail",
    morning: "Seek out Norman churches hiding Arab-geometric ceilings (Favara, Castelbuono). Find the thermal springs locals don't advertise. Discover.",
    afternoon: "Lunch in a town with no tourists—real cucina casalinga (home cooking). The €15 fixed menu reveals what Sicilians actually eat.",
    evening: "Watch a local festa if you're lucky—patron saint processions involve entire communities. Ask about upcoming celebrations.",
    insiderTip: "The smaller the town, the warmer the welcome. Learn three Italian phrases: 'Buongiorno,' 'Grazie mille,' and 'Che cosa consiglia?' (what do you recommend?)."
  },
  {
    day: 1,
    location: "Beach Day",
    title: "Mediterranean Immersion",
    morning: "Early swim before heat builds. Sicily's best beaches require effort—hike, scramble, or boat to escape crowds.",
    afternoon: "Long lunch at a beach lido—fresh catch, local wine, shade. Embrace Mediterranean rhythm: eat, swim, nap, repeat.",
    evening: "Golden hour on the sand. Many beaches improve dramatically after 5 PM when day-trippers leave. Linger.",
    insiderTip: "Pack reef shoes (many beaches are volcanic rock), snorkel gear, and more water than you think you need. Shade is precious."
  },
  {
    day: 1,
    location: "Ceramic Trail",
    title: "Artisan Sicily",
    morning: "Visit Caltagirone (the ceramics capital) or Santo Stefano di Camastra. Watch artisans hand-paint traditional patterns passed through generations.",
    afternoon: "Try a ceramics workshop—paint your own plate using thousand-year-old Sicilian motifs. It ships home.",
    evening: "Explore the town that made these traditions. The 142 steps of Caltagirone's Scalinata, each uniquely tiled, are magnificent at dusk.",
    insiderTip: "Skip tourist shops near the stairs. Walk uphill to find family workshops—better prices, authentic work, and real conversations."
  }
];

export function generateItinerary(preferences: TripPreferences): GeneratedItinerary {
  const { duration, startCity, travelStyle, interests } = preferences;
  
  // Find best matching suggested itinerary
  let matchedItinerary: SuggestedItinerary | null = null;
  
  if (interests.includes("Wine") || interests.includes("Food")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "food-wine") || null;
  } else if (interests.includes("Hiking")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "volcano-adventure") || null;
  } else if (interests.includes("Ancient ruins")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "ancient-sicily") || null;
  } else if (interests.includes("Baroque architecture")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "baroque-beaches") || null;
  } else if (interests.includes("Islands")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "island-odyssey") || null;
  } else if (interests.includes("Beaches")) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "baroque-beaches") || null;
  } else if (duration >= 10) {
    matchedItinerary = suggestedItineraries.find(i => i.id === "grand-tour") || null;
  }
  
  // Determine regions based on preferences
  const regions: string[] = [];
  
  // Start with logical starting point
  if (startCity === "Palermo") {
    regions.push("palermo");
  } else if (startCity === "Catania") {
    regions.push("etna");
  }
  
  // Add regions based on interests
  if (interests.includes("Ancient ruins")) {
    regions.push("syracuse", "agrigento");
  }
  if (interests.includes("Baroque architecture")) {
    regions.push("syracuse");
  }
  if (interests.includes("Islands")) {
    regions.push("aeolian");
  }
  if (interests.includes("Beaches")) {
    regions.push("syracuse", "taormina");
  }
  if (interests.includes("Wine") || interests.includes("Food")) {
    regions.push("etna", "palermo");
  }
  if (interests.includes("Hiking")) {
    regions.push("etna", "aeolian");
  }
  if (interests.includes("Photography")) {
    regions.push("taormina", "agrigento");
  }
  
  // Add based on travel style
  if (travelStyle === "Cultural Deep Dive") {
    if (!regions.includes("palermo")) regions.push("palermo");
    if (!regions.includes("syracuse")) regions.push("syracuse");
  }
  if (travelStyle === "Beach & Relaxation") {
    if (!regions.includes("taormina")) regions.push("taormina");
    if (!regions.includes("aeolian")) regions.push("aeolian");
  }
  if (travelStyle === "Active Adventure") {
    if (!regions.includes("etna")) regions.push("etna");
    if (!regions.includes("aeolian")) regions.push("aeolian");
  }
  if (travelStyle === "Food & Wine") {
    if (!regions.includes("palermo")) regions.push("palermo");
    if (!regions.includes("etna")) regions.push("etna");
  }
  
  // Handle "Any" start city with balanced approach
  if (startCity === "Any" && regions.length === 0) {
    regions.push("palermo", "taormina", "syracuse");
  }
  
  // Ensure minimum regions
  if (regions.length === 0) {
    regions.push("palermo", "taormina");
  }
  
  // Remove duplicates and limit regions based on duration
  const uniqueRegions = [...new Set(regions)];
  const maxRegions = Math.min(Math.ceil(duration / 2), uniqueRegions.length);
  const selectedRegions = uniqueRegions.slice(0, maxRegions);
  
  // Generate days from selected regions
  const days: GeneratedDay[] = [];
  let currentDay = 1;
  let fillerIndex = 0;
  
  // Calculate days per region with variation
  const baseDaysPerRegion = Math.floor(duration / selectedRegions.length);
  const extraDays = duration % selectedRegions.length;
  
  for (let regionIdx = 0; regionIdx < selectedRegions.length; regionIdx++) {
    const region = selectedRegions[regionIdx];
    const templates = dayTemplates[region] || dayTemplates.palermo;
    const daysForThisRegion = baseDaysPerRegion + (regionIdx < extraDays ? 1 : 0);
    
    // Add days from this region
    for (let i = 0; i < daysForThisRegion; i++) {
      if (currentDay <= duration) {
        if (i < templates.length) {
          // Use unique template
          days.push({
            ...templates[i],
            day: currentDay++
          });
        } else {
          // Use unique filler days for variety
          const filler = uniqueFillerDays[fillerIndex % uniqueFillerDays.length];
          days.push({
            ...filler,
            day: currentDay++,
            location: templates[0]?.location || "Sicily"
          });
          fillerIndex++;
        }
      }
    }
  }
  
  // Generate title based on style
  const styleDescriptor = {
    "Cultural Deep Dive": "Cultural",
    "Beach & Relaxation": "Coastal",
    "Food & Wine": "Culinary",
    "Active Adventure": "Active",
    "Balanced Mix": "Classic"
  }[travelStyle] || "Classic";
  
  // Budget estimate
  const budgetEstimate = travelStyle === "Beach & Relaxation" 
    ? "€120-180/day mid-range, including beach clubs and seafood"
    : travelStyle === "Cultural Deep Dive"
    ? "€100-160/day, prioritizing museum passes and guided tours"
    : travelStyle === "Food & Wine"
    ? "€180-280/day, with fine dining and winery experiences"
    : travelStyle === "Active Adventure"
    ? "€90-150/day, focusing on guides and equipment rental"
    : "€110-170/day for balanced experiences";
  
  // Packing based on style
  const basePacking = [
    "Comfortable walking shoes for cobblestones",
    "Layers for mountain visits (20°C cooler than coast)"
  ];
  
  const stylePacking = travelStyle === "Beach & Relaxation"
    ? ["Swimsuit and cover-up", "Reef shoes for volcanic beaches", "High SPF sunscreen", "Beach bag for long days"]
    : travelStyle === "Active Adventure"
    ? ["Hiking boots with ankle support", "Daypack with hydration", "Headlamp for crater hikes", "Quick-dry clothing"]
    : travelStyle === "Food & Wine"
    ? ["Expandable luggage for purchases", "Smart casual for restaurants", "Wine carrier for bottles", "Light scarf for church visits"]
    : ["Swimsuit for spontaneous swims", "Light scarf for church dress codes", "Power adapter (Type L)", "Phrasebook or translation app"];
  
  return {
    title: `Your ${duration}-Day ${styleDescriptor} Sicily Journey`,
    summary: `Starting from ${startCity === "Any" ? "Palermo (recommended)" : startCity}, this curated itinerary explores ${selectedRegions.length} distinct regions focusing on ${interests.length > 0 ? interests.join(", ").toLowerCase() : "a balanced mix of experiences"}. Each day offers unique discoveries—no repetition, only deepening wonder. The pace is calibrated for ${travelStyle.toLowerCase()}, with flexibility for the serendipitous moments that define Sicilian travel.`,
    days,
    practicalInfo: {
      transportation: duration > 5 
        ? "Rental car essential for flexibility and hill towns. Book automatic transmission well in advance—manuals are the norm. Driving tip: parking in historic centers is often restricted to residents."
        : "Trains connect major cities reliably. Buses reach smaller towns. Ferries serve the islands. Consider car rental for 2-3 days of countryside exploration.",
      budget: budgetEstimate,
      packing: [...basePacking, ...stylePacking]
    },
    matchedItinerary
  };
}
