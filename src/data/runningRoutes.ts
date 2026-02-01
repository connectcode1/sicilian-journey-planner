export interface RunningRoute {
  id: string;
  name: string;
  location: string;
  distance: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  terrain: string;
  highlights: string[];
  bestTime: string;
  description: string;
  insiderTip: string;
}

export const runningRoutes: RunningRoute[] = [
  {
    id: "taormina-coastal",
    name: "Taormina Coastal Path",
    location: "Taormina",
    distance: "8 km",
    difficulty: "Moderate",
    terrain: "Paved roads, cobblestones, stairs",
    highlights: ["Isola Bella views", "Greek Theatre backdrop", "Mediterranean panoramas"],
    bestTime: "Early morning (6-8am) to avoid tourists and heat",
    description: "A stunning route that winds from the historic center down to Isola Bella beach and back, offering jaw-dropping views of the Ionian Sea with Mount Etna in the distance.",
    insiderTip: "Start at Porta Messina and take Via Teatro Greco for the most scenic descent. The stairs to Isola Bella are a killer workout!"
  },
  {
    id: "etna-rifugio",
    name: "Etna Rifugio Sapienza Loop",
    location: "Mount Etna",
    distance: "12 km",
    difficulty: "Challenging",
    terrain: "Volcanic gravel, lava rock, uneven paths",
    highlights: ["Lunar landscapes", "Silvestri Craters", "Alpine-Mediterranean flora"],
    bestTime: "Summer mornings, avoid winter without proper gear",
    description: "A high-altitude trail run around Europe's most active volcano. The thin air at 1,900m and volcanic terrain make this a true adventure run.",
    insiderTip: "Bring layers—temperature drops dramatically. The black volcanic sand is tough on shoes, so wear trail runners with good grip."
  },
  {
    id: "ortigia-sunrise",
    name: "Ortigia Island Sunrise Run",
    location: "Syracuse",
    distance: "5 km",
    difficulty: "Easy",
    terrain: "Flat, paved seafront promenade",
    highlights: ["Baroque architecture", "Fonte Aretusa", "Castello Maniace"],
    bestTime: "Sunrise for golden light on ancient stones",
    description: "A flat, scenic loop around the ancient island of Ortigia. Perfect for an easy recovery run while soaking in 2,700 years of history.",
    insiderTip: "The lungomare (seafront) is car-free early morning. Stop at Fonte Aretusa to see the papyrus plants—legend says the nymph Arethusa was transformed here."
  },
  {
    id: "mondello-beach",
    name: "Mondello Beach & Monte Pellegrino",
    location: "Palermo",
    distance: "10 km",
    difficulty: "Moderate",
    terrain: "Beach sand, paved roads, mountain trails",
    highlights: ["Art Nouveau bathing houses", "Crystal-clear bay", "Sanctuary views"],
    bestTime: "Year-round, spectacular at sunset",
    description: "Combine the flat sandy stretch of Palermo's beloved beach with the climb up Monte Pellegrino, which Goethe called 'the most beautiful promontory in the world.'",
    insiderTip: "The path to Santuario di Santa Rosalia is steep but runnable. Locals gather here for the patron saint's feast in September."
  },
  {
    id: "riserva-zingaro",
    name: "Riserva dello Zingaro Trail",
    location: "San Vito Lo Capo",
    distance: "14 km (out and back)",
    difficulty: "Challenging",
    terrain: "Rocky coastal trails, some scrambling",
    highlights: ["Hidden coves", "Mediterranean maquis", "Crystal turquoise waters"],
    bestTime: "Spring (April-May) when wildflowers bloom",
    description: "Sicily's first nature reserve offers a spectacular coastal trail run with access to pristine beaches. The terrain is technical but the views are otherworldly.",
    insiderTip: "Bring swimming gear—Cala dell'Uzzo and Cala Marinella are perfect for a mid-run dip. Entry fee is €5, and there's no shade, so hydrate well!"
  },
  {
    id: "agrigento-valley",
    name: "Valley of the Temples Dawn Run",
    location: "Agrigento",
    distance: "6 km",
    difficulty: "Easy",
    terrain: "Paved paths, gentle hills",
    highlights: ["Temple of Concordia", "Ancient olive groves", "Almond trees"],
    bestTime: "Dawn before the site opens, or evening for golden hour",
    description: "Run among 2,500-year-old Greek temples in one of the world's most extraordinary archaeological sites. The external perimeter is accessible for free.",
    insiderTip: "The road between temples is publicly accessible before 8:30am. February brings the almond blossom festival—running through blooming trees with ancient temples is magical."
  },
  {
    id: "cefalu-rocca",
    name: "Cefalù La Rocca Challenge",
    location: "Cefalù",
    distance: "4 km",
    difficulty: "Challenging",
    terrain: "Stone steps, rocky paths, very steep",
    highlights: ["Norman fortress ruins", "360° coastal views", "Diana Temple"],
    bestTime: "Early morning to beat the heat and crowds",
    description: "A short but brutal climb up the limestone crag behind Cefalù's famous Norman cathedral. The views from the top are absolutely worth the burn.",
    insiderTip: "There are over 300 steps! Start from Piazza Garibaldi and follow signs to 'La Rocca'. Bring water—there's none at the top."
  },
  {
    id: "alcantara-gorge",
    name: "Alcantara Gorge River Trail",
    location: "Alcantara Valley",
    distance: "8 km",
    difficulty: "Moderate",
    terrain: "River paths, basalt formations, some wading",
    highlights: ["Basalt columns", "River crossings", "Lush vegetation"],
    bestTime: "Summer when river levels are low and refreshing",
    description: "Follow the Alcantara River through dramatic basalt gorges carved by ancient lava flows meeting cold water. Unique terrain you won't find anywhere else.",
    insiderTip: "Waterproof trail shoes are essential—you'll be crossing the river multiple times. The basalt columns look like organ pipes and are millions of years old."
  }
];
