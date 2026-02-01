export interface LiteraryLocation {
  id: string;
  name: string;
  location: string;
  type: "book" | "movie" | "both";
  works: {
    title: string;
    creator: string;
    year: string;
    type: "novel" | "film" | "tv-series";
  }[];
  description: string;
  visitInfo: string;
  quote?: string;
}

export const literaryLocations: LiteraryLocation[] = [
  {
    id: "palazzo-gangi",
    name: "Palazzo Gangi (Palazzo Valguarnera)",
    location: "Palermo",
    type: "movie",
    works: [
      { title: "Il Gattopardo (The Leopard)", creator: "Luchino Visconti", year: "1963", type: "film" }
    ],
    description: "The opulent ballroom scene in Visconti's masterpiece was filmed here. The palace's Baroque splendor perfectly captured the fading Sicilian aristocracy depicted in Lampedusa's novel.",
    visitInfo: "Private residence, occasionally open for special events and weddings. The exterior can be viewed from Piazza Croce dei Vespri.",
    quote: "If we want things to stay as they are, things will have to change."
  },
  {
    id: "donnafugata-castle",
    name: "Castello di Donnafugata",
    location: "Ragusa",
    type: "both",
    works: [
      { title: "Il Gattopardo (The Leopard)", creator: "Giuseppe Tomasi di Lampedusa", year: "1958", type: "novel" },
      { title: "Inspector Montalbano", creator: "Andrea Camilleri / RAI", year: "1999-2021", type: "tv-series" }
    ],
    description: "This sprawling castle with its labyrinthine gardens inspired Lampedusa's fictional Donnafugata estate. It also features prominently in the beloved Montalbano TV series as the Questura.",
    visitInfo: "Open daily, €8 entry. The park maze and neo-Gothic facade are highlights. Allow 2-3 hours.",
    quote: "We were the Leopards, the Lions; those who'll take our place will be little jackals, hyenas."
  },
  {
    id: "giardini-naxos",
    name: "Giardini Naxos & Taormina",
    location: "Taormina",
    type: "movie",
    works: [
      { title: "The White Lotus (Season 2)", creator: "Mike White / HBO", year: "2022", type: "tv-series" },
      { title: "The Godfather Part III", creator: "Francis Ford Coppola", year: "1990", type: "film" }
    ],
    description: "The White Lotus Season 2 brought global attention to Sicily's glamorous coast. The fictional San Domenico Palace hotel (a real Four Seasons property) showcased Taormina's intoxicating beauty.",
    visitInfo: "Walk the corso, visit the Greek Theatre, and sip aperitivo at the hotel's terrace bar (open to non-guests). The beach at Giardini Naxos is free.",
    quote: "Nobody knows what's going to happen. That's what makes it exciting."
  },
  {
    id: "teatro-massimo",
    name: "Teatro Massimo",
    location: "Palermo",
    type: "movie",
    works: [
      { title: "The Godfather Part III", creator: "Francis Ford Coppola", year: "1990", type: "film" }
    ],
    description: "The stunning finale of the Godfather trilogy unfolds on these grand steps, where Michael Corleone's daughter Mary is shot. Italy's largest opera house is a masterpiece of neoclassical architecture.",
    visitInfo: "Daily tours available (€10). Evening performances offer the full experience. The steps are public—recreate the iconic scene anytime.",
    quote: "Just when I thought I was out, they pull me back in."
  },
  {
    id: "savoca-forza-d-agro",
    name: "Savoca & Forza d'Agrò",
    location: "Messina Province",
    type: "movie",
    works: [
      { title: "The Godfather", creator: "Francis Ford Coppola", year: "1972", type: "film" }
    ],
    description: "Michael Corleone's Sicilian exile was filmed in these medieval hill villages. Bar Vitelli, where he first sees Apollonia, still serves granita under Godfather memorabilia.",
    visitInfo: "Free to explore. Bar Vitelli is a pilgrimage site—try their almond granita. The Chiesa di San Nicolò where Michael marries is still an active church.",
    quote: "In Sicily, women are more dangerous than shotguns."
  },
  {
    id: "ragusa-ibla",
    name: "Ragusa Ibla",
    location: "Ragusa",
    type: "both",
    works: [
      { title: "Inspector Montalbano", creator: "Andrea Camilleri / RAI", year: "1999-2021", type: "tv-series" },
      { title: "Divorce Italian Style", creator: "Pietro Germi", year: "1961", type: "film" }
    ],
    description: "Camilleri's beloved detective Montalbano lives in the fictional town of Vigàta, but the baroque streets of Ragusa Ibla provide the atmospheric backdrop. The Circolo di Conversazione is his regular haunt.",
    visitInfo: "UNESCO World Heritage site, free to explore. Don't miss the Duomo di San Giorgio and Giardino Ibleo. Montalbano walking tours available.",
    quote: "Montalbano sono!"
  },
  {
    id: "marzamemi",
    name: "Marzamemi",
    location: "Syracuse Province",
    type: "movie",
    works: [
      { title: "Sud (South)", creator: "Gabriele Salvatores", year: "1993", type: "film" },
      { title: "Inspector Montalbano", creator: "Andrea Camilleri / RAI", year: "1999-2021", type: "tv-series" }
    ],
    description: "This tiny fishing village with its picturesque piazza on the sea has attracted filmmakers for decades. The tonnara (tuna processing plant) dates back to Arab rule.",
    visitInfo: "Free to explore. Visit during the Cinema di Frontiera film festival in July/August. The bottarga and sun-dried tomatoes are exceptional.",
    quote: "The sea teaches sailors."
  },
  {
    id: "siracusa-ortigia",
    name: "Ortigia Island",
    location: "Syracuse",
    type: "both",
    works: [
      { title: "Malèna", creator: "Giuseppe Tornatore", year: "2000", type: "film" },
      { title: "The Greeks", creator: "Various historians", year: "Ancient", type: "novel" }
    ],
    description: "Tornatore's sensual WWII drama starring Monica Bellucci was filmed here. But Ortigia's literary history goes back to Homer—Odysseus sailed these waters, and Archimedes was born here.",
    visitInfo: "Piazza Duomo and the surrounding streets feature in Malèna. Visit the Ear of Dionysius cave where Archimedes reportedly did acoustics experiments.",
    quote: "Syracuse is the greatest of Greek cities and the most beautiful."
  },
  {
    id: "agrigento-pirandello",
    name: "Pirandello's Birthplace",
    location: "Agrigento",
    type: "book",
    works: [
      { title: "Six Characters in Search of an Author", creator: "Luigi Pirandello", year: "1921", type: "novel" },
      { title: "The Late Mattia Pascal", creator: "Luigi Pirandello", year: "1904", type: "novel" }
    ],
    description: "Nobel laureate Pirandello was born in the contrada 'Caos' (Chaos) near Agrigento. His existentialist works reflect the stark Sicilian landscape and complex psychology of its people.",
    visitInfo: "The Pirandello House Museum is open daily (€4). His ashes are interred beneath a pine tree in the garden, as he requested. The Valley of Temples is 3km away.",
    quote: "Whatever is a reality today, whatever you touch and believe in and that seems real for you today, is going to be—like the reality of yesterday—an illusion tomorrow."
  },
  {
    id: "catania-verga",
    name: "Giovanni Verga's Catania",
    location: "Catania",
    type: "book",
    works: [
      { title: "I Malavoglia (The House by the Medlar Tree)", creator: "Giovanni Verga", year: "1881", type: "novel" },
      { title: "La Terra Trema", creator: "Luchino Visconti", year: "1948", type: "film" }
    ],
    description: "Verga's verismo masterpiece about a fishing family's struggles was set in Aci Trezza, north of Catania. Visconti later filmed his neorealist adaptation using actual fishermen as actors.",
    visitInfo: "Visit Aci Trezza to see the Faraglioni rocks (where Polyphemus threw stones at Odysseus). The Casa del Nespolo museum recreates scenes from the novel. Verga's house in Catania is also a museum.",
    quote: "There are people who don't respect the sea."
  },
  {
    id: "cefalu-cinema-paradiso",
    name: "Palazzo Adriano & Cefalù",
    location: "Palermo Province",
    type: "movie",
    works: [
      { title: "Cinema Paradiso", creator: "Giuseppe Tornatore", year: "1988", type: "film" }
    ],
    description: "Tornatore's Oscar-winning love letter to cinema was filmed primarily in Palazzo Adriano (the piazza scenes) and Cefalù (the beach). The film captures the magic of small-town Sicilian life.",
    visitInfo: "Palazzo Adriano's piazza still has the Cinema Paradiso bar. Cefalù's beach where Salvatore and Elena kiss is easily accessible. Both towns are worth a full day.",
    quote: "Life isn't like the movies. Life is much harder."
  },
  {
    id: "aeolian-stromboli",
    name: "Stromboli",
    location: "Aeolian Islands",
    type: "movie",
    works: [
      { title: "Stromboli", creator: "Roberto Rossellini", year: "1950", type: "film" }
    ],
    description: "Rossellini's stark neorealist drama starring Ingrid Bergman was filmed on this volcanic island. Their scandalous on-set affair shocked 1950s America but their love story became legend.",
    visitInfo: "Ferries from Milazzo. The volcano erupts every 15-20 minutes—night hikes offer spectacular views. The Rossellini-Bergman house is private but marked.",
    quote: "God! My God! What mystery! What beauty!"
  }
];
