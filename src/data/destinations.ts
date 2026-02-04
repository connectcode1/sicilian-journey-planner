export interface Beach {
  name: string;
  description: string;
}

export interface Experience {
  name: string;
  description: string;
}

export interface Restaurant {
  name: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  insiderTip: string;
  beaches: Beach[];
  experiences: Experience[];
  mustVisit: string[];
  whereToEat: Restaurant[];
  lat: number;
  lon: number;
  days: string;
  bestTime: string;
  access?: string;
}

export const destinations: Destination[] = [
  {
    id: "palermo",
    name: "Palermo & Western Sicily",
    tagline: "Where Arab Domes Meet Norman Grandeur",
    description: `Palermo is a city of contradictions and unexpected beauty, where Byzantine mosaics shimmer in Norman chapels, Arab-influenced markets pulse with life, and baroque palaces lean against crumbling facades that whisper of centuries past. 

The western coast unfolds with pristine nature reserves, ancient salt pans that turn pink at sunset, and hilltop medieval towns suspended in time where artisans still craft ceramics using techniques passed down for generations.

This is Sicily at its most authentic: unpolished, vibrant, and utterly captivating. Here, the layers of history aren't hidden in museums but lived in daily, from the street food vendors calling out in dialect to the fishermen mending nets in harbors that have witnessed Phoenician, Greek, Roman, Arab, and Norman rulers.

The Palatine Chapel stands as perhaps the finest surviving example of Norman art anywhere in the world, its golden mosaics covering every surface with Byzantine craftsmanship commissioned by Roger II. The markets of Ballarò and Vucciria offer sensory overload: towers of blood oranges, tanks of live seafood, the smell of frying panelle, and the theatrical cries of vendors that have echoed through these streets for a thousand years.`,
    insiderTip: `Visit the Palatine Chapel on a Wednesday afternoon when light streams through the windows at the perfect angle, illuminating the Byzantine mosaics in molten gold. The artisans who created this masterpiece nine centuries ago understood sacred geometry: every detail was calculated to inspire awe at precisely this moment. Arrive at 3 PM and position yourself near the entrance to witness the transformation as the sun moves.`,
    beaches: [
      { name: "Mondello Beach", description: "Palermo's Art Nouveau playground featuring turquoise waters that rival the Caribbean and Belle Époque architecture that transports you to a more elegant era. The grandiose bathing establishment on stilts dates to 1912 and remains the social center of Palermo's summer life, where locals have gathered for generations to escape the city heat." },
      { name: "Riserva dello Zingaro", description: "Seven kilometers of protected coastline accessible only on foot, with hidden coves and crystalline water that make each beach feel like a private discovery. This was Sicily's first nature reserve, saved from a coastal road project by unprecedented grassroots activism in 1981. The hiking paths wind through Mediterranean maquis past prehistoric caves and wildflowers." },
      { name: "San Vito Lo Capo", description: "A crescent of white sand beach beneath the dramatic Monte Monaco, where the waters transform from turquoise to pink and gold at sunset. This former tuna fishing village has become Sicily's beach capital without losing its charm. The September Cous Cous Fest celebrates the Arab culinary heritage that defines western Sicily." },
      { name: "Scopello", description: "Dramatic sea stacks called faraglioni rise from emerald waters beside a historic tuna fishery that operated for 400 years. The tonnara, now converted to a hotel, witnessed the ancient mattanza ritual that shaped Sicilian coastal culture. Swimming here feels like entering a Renaissance painting, with the old stone structures and nets still visible." }
    ],
    experiences: [
      { name: "Street Food Tour", description: "Navigate the labyrinthine Ballarò Market with a local guide who knows every vendor. Sample panelle (chickpea fritters), arancine (rice balls with fillings passed down through families), and sfincione (Palermo's spongy pizza). Learn why Palermo was named a UNESCO Creative City of Gastronomy and taste the Arab, Spanish, and Greek influences on every corner." },
      { name: "Monreale Mosaics", description: "The cathedral's golden mosaics cover 6,400 square meters of biblical storytelling in Byzantine style, considered the finest example of Norman art in existence. The cloister features 228 twin columns, each with unique capitals carved with fantastical creatures and biblical scenes. King William II commissioned this masterpiece to rival Palermo's cathedral." },
      { name: "Erice Sunset", description: "This medieval hilltop town sits 750 meters above sea level, often wrapped in mystical mist that parts to reveal stunning views across western Sicily to Tunisia. The town is famous for Maria Grammatico's almond pastries made from recipes learned in a cloistered convent, and its 60 churches packed into tiny medieval streets." },
      { name: "Salt Pans of Trapani", description: "Sunset over ancient windmills and pink salt mountains creates one of Sicily's most photographed scenes. The salt has been harvested here since Phoenician times using the same methods: seawater channeled into shallow pans, evaporated by sun and wind, hand-raked into pyramids. The Museo del Sale explains this living heritage." }
    ],
    mustVisit: [
      "Palatine Chapel - Book 9 AM entry for the best light on the mosaics",
      "Quattro Canti - Baroque heart of the old city with four decorated corners",
      "Teatro Massimo - Italy's largest opera house, third largest in Europe",
      "Cefalù - Norman cathedral on a pristine beach with dramatic rock backdrop",
      "Segesta - Greek temple in splendid isolation among rolling hills"
    ],
    whereToEat: [
      { name: "Antica Focacceria San Francesco", description: "Since 1834, this is the definitive address for pani ca' meusa (spleen sandwich), the workers' food elevated to Palermo icon. The historic interior with marble tables and wood paneling has hosted Garibaldi and continues to serve dishes unchanged for nearly two centuries." },
      { name: "Pasticceria Cappello", description: "Cannoli filled to order with impossibly fresh ricotta. The pistachio version is transcendent, the shell shattering on first bite. This elegant pasticceria also crafts the famous setteveli cake, seven layers of chocolate and hazelnut mousse that exemplify Sicilian baroque excess." },
      { name: "Trattoria Ai Cascinari", description: "Pasta con le sarde, Palermo's signature dish of sardines, wild fennel, pine nuts, and raisins, perfected here over decades. The family-run trattoria serves no-menu lunches where you eat what they've prepared that morning from market ingredients." },
      { name: "Ke Palle", description: "A modern reinvention of arancine with 20+ creative varieties that prove tradition can evolve. Try the pistachio cream or carbonara versions alongside classic ragù, each hand-formed and fried to golden perfection in front of you." }
    ],
    lat: 38.1157,
    lon: 13.3615,
    days: "4-5 days",
    bestTime: "April-June, September-October"
  },
  {
    id: "taormina",
    name: "Taormina, Messina & The Northeast",
    tagline: "Where Myths Were Born and Beauty Reigns",
    description: `Messina guards the strait where Scylla and Charybdis once terrorized sailors in Homer's Odyssey, the narrow passage between Sicily and mainland Italy where currents still create whirlpools that ancient mariners believed were sea monsters.

Taormina perches on a cliff 200 meters above the sea, with the ancient Greek theater framing Mount Etna and the Ionian Sea in one impossible view that has attracted travelers since the Grand Tour. Goethe called it "the greatest work of art and nature," and the sentiment remains true: this is where Sicily shows its most photogenic face.

The Peloritani Mountains descend to hidden beaches and coastal villages where time moves to the rhythm of fishing boats and church bells. Savoca and Forza d'Agrò preserve medieval atmospheres that captivated Francis Ford Coppola when filming The Godfather. The region offers the rare combination of world-class scenery, ancient history, and the kind of dolce vita that defines Italian fantasy.

Beyond the famous destinations, the northeast rewards exploration with discoveries: the astronomical clock in Messina's cathedral, the gorge of Alcantara carved through black lava, and tiny Castelmola perched above Taormina with views that extend to Calabria.`,
    insiderTip: `Take the Circumetnea train from Catania to Riposto early morning. This vintage railway circles Mount Etna through lava fields, pistachio groves, and medieval villages that seem untouched by the 21st century. At Linguaglossa, step off for an espresso in the shadow of the volcano. You'll be the only tourist for miles. The journey reveals the relationship between Sicilians and their volcano in ways no tour bus can.`,
    beaches: [
      { name: "Isola Bella", description: "Taormina's jewel: a nature reserve connected to shore by a narrow sandbar that appears and disappears with the tides. The tiny island is covered in rare Mediterranean plants and can be explored on foot. The cable car from Taormina town adds to the drama of arrival, descending 300 meters past bougainvillea-draped gardens." },
      { name: "Giardini Naxos", description: "Wide sandy beaches below Taormina mark the site of the first Greek colony in Sicily, founded in 735 BC. The ancient port has transformed into a family-friendly resort, but archaeological remains of the Greek city are visible in the park. The promenade offers evening passeggiata with Taormina glowing above." },
      { name: "Capo Milazzo", description: "A dramatic promontory reaching into the Tyrrhenian Sea with hidden coves, sea caves, and the Sanctuary of St. Anthony perched at the very tip. The underwater marine reserve protects exceptional marine life, making this a premier diving destination. The Piscina di Venere natural pool requires a scramble down volcanic rocks." },
      { name: "Letojanni", description: "This pebble beach village offers a quieter alternative to Taormina's crowds with the same stunning backdrop but more authentic atmosphere. Fishermen still haul boats onto the beach, and the waterfront restaurants serve their catch simply grilled with lemon and local olive oil. Evening here means few tourists and genuine Sicilian pace." }
    ],
    experiences: [
      { name: "Ancient Theater of Taormina", description: "This Greek theater dating to the 3rd century BC was later modified by the Romans, creating the acoustically perfect venue still used for summer opera, film festivals, and concerts. The backdrop, Etna framing the Ionian Sea, is so stunning that performers often pause mid-show to gesture toward it. Arrive at sunset for photographs." },
      { name: "Messina Cathedral Clock", description: "The astronomical clock in Messina's cathedral is the world's largest, and at noon triggers an elaborate mechanical show: a lion roars, a rooster crows, statues parade, and bells chime while the crowd gathers in the piazza below. The cathedral itself, rebuilt after the 1908 earthquake, holds masterpieces and Norman mosaics." },
      { name: "Savoca Godfather Tour", description: "Drink lemon granita at Bar Vitelli exactly where Michael Corleone asked for Apollonia's hand in marriage. The village, chosen by Coppola for its untouched medieval character, has barely changed. Mummified bodies still rest in the Capuchin catacombs, and the church of Santa Lucia displays its baroque facade against volcanic rock." },
      { name: "Castelmola", description: "This medieval village perched above Taormina is famous for almond wine served in anatomically suggestive ceramic cups at Caffè San Giorgio, a tradition with mysterious origins. The panorama from the ruined castle extends on clear days to the toe of Italy. Visit at sunset when the tourists have left." }
    ],
    mustVisit: [
      "Taormina's Corso Umberto - Boutique shopping and cafe culture in pedestrian paradise",
      "Gole Alcantara - Volcanic gorge with ice-cold river carved through black lava",
      "Forza d'Agrò - Perfectly preserved medieval hamlet above the sea",
      "Santuario di Tindari - Black Madonna sanctuary overlooking the Marinello lakes",
      "Milazzo - Ferry port to Aeolian Islands with Norman castle and cape walks"
    ],
    whereToEat: [
      { name: "Bam Bar", description: "Taormina's legendary granita bar where the almond granita with warm brioche is worth the inevitable queue. The texture is impossibly smooth, the almond flavor intense and natural. This is what Sicilian breakfast should be: cold, creamy, slightly sweet, accompanied by a fresh-baked brioche for dipping." },
      { name: "Osteria Nero d'Avola", description: "An intimate restaurant in Taormina's historic center where Sicilian classics receive thoughtful modern treatment. The namesake wine from the southeast pairs perfectly with dishes like caponata reimagined or tuna with pistachio crust. Reservations essential; request the terrace table." },
      { name: "Trattoria da Pina", description: "A Letojanni institution known for impeccably fresh swordfish and whatever local wine the family is drinking that week. No menu: Pina explains what's available, and you trust her. The antipasti alone, eight or ten small plates of local preparations, could constitute a meal." },
      { name: "Pasticceria Roberto", description: "Messina's finest pastry shop excels at pignolata: small fried dough balls half-coated in white icing, half in chocolate. This is the classic Messina dessert for celebrations, and Roberto's version sets the standard. The bakery also crafts exceptional almond pastries and the region's best cannoli." }
    ],
    lat: 37.8526,
    lon: 15.2876,
    days: "3-4 days",
    bestTime: "May-June, September-October"
  },
  {
    id: "aeolian",
    name: "Aeolian Islands",
    tagline: "The Seven Sisters of the Tyrrhenian Sea",
    description: `Seven volcanic islands scattered north of Sicily like precious stones across the Tyrrhenian Sea, each with a distinct personality shaped by geology, history, and the resilient people who call them home.

Lipari, the largest, serves as the natural base for island hopping, its whitewashed port town backed by obsidian quarries and pumice beaches. Stromboli erupts every 20 minutes in explosions visible from sea. You can hike to the crater at sunset and watch lava bombs arc across the night sky. Vulcano's therapeutic mud baths steam beside black sand beaches where sulfurous vents bubble underwater.

Salina produces sweet Malvasia wine among capers and wildflowers, its twin volcanic peaks green with vegetation while other islands remain stark. Panarea attracts the international jet set to its whitewashed village and exclusive beach clubs, while Filicudi and Alicudi remain wonderfully undiscovered. Alicudi has no roads, only mule paths connecting houses to the sea.

The UNESCO World Heritage archipelago offers a journey through active geology, from smoking fumaroles to obsidian flows, all surrounded by some of the Mediterranean's clearest waters. Hydrofoils connect the islands in a network that makes multi-island itineraries possible even in a few days.`,
    insiderTip: `Skip the crowded Stromboli summit hike (which requires a guide and good fitness). Instead, take the evening boat tour that circles the island after dark. You'll witness the Sciara del Fuoco from the sea: lava bombs exploding against the night sky, their glow reflected in black water, the rumble of eruptions carrying across the waves. It's Stromboli's most spectacular angle, and you'll be back in time for dinner on the terrace.`,
    beaches: [
      { name: "Pollara Beach (Salina)", description: "A crescent bay beneath towering volcanic cliffs where Il Postino was filmed, the scene with the poet reading to the postman set against this dramatic backdrop. The beach is reached by a steep path, and afternoon shade from the cliffs creates perfect conditions. The bay is actually the remnant of a collapsed volcanic crater, half of which slid into the sea." },
      { name: "Spiaggia Bianca (Lipari)", description: "The white pumice beach contrasts dramatically with turquoise water, the result of centuries of pumice mining that left behind dazzling white cliffs and sand. The abandoned quarry facilities add industrial romance to the landscape. Swimming here feels surreal: the water impossibly blue against white stone." },
      { name: "Vulcano Thermal Beaches", description: "Natural hot springs meet the sea at multiple points around Vulcano's coast, creating unique swimming experiences where cold Mediterranean water mixes with geothermally heated currents. The famous mud bath near the port stains everything but allegedly cures everything too. The sulfur smell is intense but temporary." },
      { name: "Cala Junco (Panarea)", description: "A tiny bay carved from lava rock by millennia of waves, accessible by a 30-minute walk from the village. The water is crystal clear down to 20 meters, perfect for snorkeling among volcanic rock formations. A Bronze Age village excavation overlooks the cove. People have admired this view for 3,500 years." }
    ],
    experiences: [
      { name: "Stromboli Night Hike", description: "A guided climb to the active crater at 920 meters, departing late afternoon to reach the summit at sunset. You'll spend an hour watching explosions every 10-20 minutes, lava arcing into darkness, then descend by headlamp through volcanic ash. The physical effort (5-6 hours total) rewards with unforgettable spectacle." },
      { name: "Boat Tour Around Islands", description: "Full-day excursions visit multiple islands and hidden grottos inaccessible from land. Captains know where dolphins play, which caves turn blue at midday, and the best swimming spots away from crowds. The journey between islands, volcano-studded horizon in all directions, is as memorable as the destinations." },
      { name: "Malvasia Wine Tasting", description: "Salina's sweet passito wine is made from grapes dried on volcanic terraces until sugars concentrate into honeyed intensity. Several family wineries offer tastings with views across the islands. The combination of volcanic soil, sea breezes, and traditional methods creates wines unlike any other." },
      { name: "Volcanic Mud Bath", description: "Soak in Vulcano's therapeutic sulfur mud pools where Greeks and Romans sought healing millennia ago. The experience is undignified but memorable: plastering yourself with hot gray mud, letting it dry, then rinsing in the sea. Allegedly excellent for skin and joints; certainly excellent for stories." }
    ],
    mustVisit: [
      "Lipari Archaeological Museum - Obsidian tools and ceramic treasures spanning millennia",
      "Salina's Twin Volcanoes - Hiking through the greenest terrain in the archipelago",
      "Stromboli Village - Car-free streets, white houses, bougainvillea against black sand",
      "Filicudi Prehistoric Village - Bronze Age settlement ruins on dramatic cliffs",
      "Panarea's Bronze Age Village - Archaeological site above the prettiest beach"
    ],
    whereToEat: [
      { name: "E Pulera (Vulcano)", description: "Fresh fish grilled on volcanic stone in a garden setting, the simplicity allowing ingredient quality to shine. The owner selects catches daily from local fishermen, and the preparation couldn't be more straightforward: olive oil, lemon, herbs. The terrace overlooks the harbor and Lipari beyond." },
      { name: "Capofaro (Salina)", description: "A Michelin-starred restaurant set in the middle of a Malvasia vineyard, combining technical excellence with ingredient obsession. The tasting menu tells the story of the islands through dishes, paired with estate wines. The sunset terrace may be Sicily's most beautiful dining room." },
      { name: "Il Filippino (Lipari)", description: "A historic restaurant since 1910 known for caper-based dishes that define Aeolian cuisine. The capers here grow wild on volcanic rock, smaller and more intense than any others. Pasta with capers, tomato, and olives seems simple until you taste the depth volcanic terroir creates." },
      { name: "Punta Lena (Stromboli)", description: "Terrace dining with volcano views where the rumble of eruptions accompanies dessert. The kitchen focuses on Aeolian traditions with exceptional raw materials: island-caught fish, local vegetables, capers and olives. Reserve a table for sunset and plan to stay through dark to watch Stromboli's fireworks." }
    ],
    lat: 38.5667,
    lon: 14.9564,
    days: "4-7 days (minimum 3 for proper exploration)",
    bestTime: "May-June, September (July-August very crowded)",
    access: "Ferries from Milazzo (90min-2.5hrs depending on island)"
  },
  {
    id: "catania",
    name: "Catania, Etna & Eastern Sicily",
    tagline: "Living in the Shadow of the Volcano",
    description: `Mount Etna dominates everything: the landscape, the culture, the economy, even the weather. At 3,350 meters, Europe's most active volcano erupts regularly, covering Catania's baroque streets in fine ash and periodically threatening villages on its slopes with lava flows.

Yet Sicilians have learned not just to coexist with the mountain but to harness its power: volcanic soil produces exceptional wine and the world's finest pistachios, tourism thrives on the danger, and the threat of destruction seems only to intensify the Catanese zest for living.

Catania itself is Sicily's second city, grittier than Palermo, more authentic than tourist-polished Taormina. Destroyed seven times by Etna and earthquakes, the city was rebuilt in exuberant baroque style after the 1693 earthquake using black lava stone that gives it a unique dramatic character. The fish market (la Pescheria) every morning offers sensory overload: tuna as big as motorcycles, swordfish heads, vendors singing prices, blood running in the gutters.

The eastern slopes of Etna reveal another world: terraced vineyards at impossible altitudes, villages of black stone, cable cars rising into snowfields above citrus groves. This juxtaposition, swimming and skiing in the same day, captures the volcanic region's essential strangeness.`,
    insiderTip: `Visit Gambino Winery on Etna's slopes at 1200m elevation. The tasting room overlooks terraced vineyards in volcanic soil, with the smoking crater visible above on clear days. The Nerello Mascalese grapes produce wines that taste of smoke, stone, and wild herbs: terroir in its purest expression. Book the sunset slot when light turns the mountain pink and the wines taste of fire.`,
    beaches: [
      { name: "San Giovanni Li Cuti", description: "Catania's black lava rock beach where locals gather for sunset aperitivo and fresh fish at the waterfront restaurants. The rocks require careful footing but the water is crystalline and the atmosphere completely authentic: no tourists, just Catanese families and groups of friends. The fish restaurants here serve today's catch at fair prices." },
      { name: "Aci Trezza", description: "This fishing village faces the Cyclops' legendary basalt rocks offshore. According to Homer, these were the boulders Polyphemus hurled at Odysseus as he escaped. Giovanni Verga set his masterpiece 'I Malavoglia' here, and the village retains its working fishermen character despite tourism. Restaurants line the harbor; order whatever they caught." },
      { name: "Aci Castello", description: "Black sand beach below a Norman castle built directly on a volcanic rock outcrop, the dark stone contrasting dramatically with Mediterranean blue. The castle now houses a museum of local archaeological finds, but most visitors come for the unusual beach experience: volcanic sand stays cooler than white sand in summer heat." },
      { name: "Fondachello", description: "Long sandy beach south of Catania where locals escape on summer weekends, largely unknown to visitors. The beach is wide and clean, backed by dunes and beach facilities without resort atmosphere. This is where Catanese families set up umbrellas and coolers for full-day beach days." }
    ],
    experiences: [
      { name: "Etna Summit Hike", description: "Guided trek to active craters with a volcanologist who explains the geology as you walk across lunar landscapes of recent lava flows. The adventure combines cable car, 4x4, and hiking to reach 3300m, where steam vents and occasional explosions remind you this mountain is very much alive." },
      { name: "Catania Fish Market", description: "La Pescheria at dawn is controlled chaos: vendors singing prices, knives flashing through tuna and swordfish, blood and seawater running in the gutters. It's one of Italy's great market experiences, as much theater as commerce. The surrounding streets offer street food and rough bars unchanged for generations." },
      { name: "Etna Wine Tour", description: "Visit boutique wineries at 800-1000m elevation where volcanic soil creates wines unlike any others in Italy. The Etna DOC has transformed from obscurity to international acclaim as winemakers recognize the unique terroir. Tours typically include lunch with local products: volcanic honey, wild mushrooms, mountain cheeses." },
      { name: "Via Etnea Shopping", description: "Catania's main street runs 3km from the Duomo toward Etna, lined with baroque palaces, churches, cafes, and shops. The evening passeggiata here is an institution: well-dressed Catanese strolling, stopping at historic pastry shops, people-watching from cafe terraces. The volcano frames the view at every intersection." }
    ],
    mustVisit: [
      "Piazza Duomo - Elephant fountain (Catania's symbol) and baroque cathedral",
      "Benedictine Monastery - One of Europe's largest monasteries, now a university",
      "Crater Silvestri - Lower craters accessible without guide, surrounded by lava fields",
      "Rifugio Sapienza - Mountain refuge at 1900m, base for summit expeditions",
      "Zafferana Etnea - Honey village on Etna's slopes with exceptional pastries"
    ],
    whereToEat: [
      { name: "Savia", description: "The definitive arancino since 1897, perfectly fried with fillings that locals debate endlessly. Try both al burro (béchamel and ham) and al ragù (meat sauce) to form your own opinion. The bar's elegance, marble counters, serious espresso, suited businessmen, contrasts with the casual food." },
      { name: "FUD", description: "Modern Catanese cuisine from a young chef who respects tradition while questioning everything. Horsemeat, a Catanese specialty, appears in creative preparations. The restaurant's name and attitude (Fuckin' Unforgettable Delicious) captures the city's grittier energy." },
      { name: "Trattoria de Fiore", description: "Pasta alla Norma, Catania's signature dish of eggplant, tomato, basil, and ricotta salata, perfected here over decades. Named for Bellini's opera, the dish originated in Catania and nowhere makes it better. The interior is simple, the portions generous, the local wine rough and right." },
      { name: "Me Cumpari Turiddu", description: "Traditional dishes in a historic setting that feels like eating in a Sicilian grandmother's dining room, if grandmother had access to the market's finest ingredients. The prix fixe lunch offers remarkable value: multiple courses of whatever inspired the kitchen that morning." }
    ],
    lat: 37.5079,
    lon: 15.0830,
    days: "3-4 days",
    bestTime: "April-June, September-October (Etna accessible year-round)"
  },
  {
    id: "syracuse",
    name: "Syracuse & Baroque Southeast",
    tagline: "Where Greece Meets Baroque Splendor",
    description: `Syracuse was the most powerful Greek city in the Mediterranean, rivaling Athens in wealth, population, and cultural achievement. Archimedes was born here and defended the city with his inventions; Plato visited and tried to convert the tyrant to philosophy; Cicero called it the most beautiful of Greek cities.

Today, the island of Ortigia preserves 3,000 years of layered history: Greek temples beneath baroque churches, Renaissance palaces over Roman foundations, Byzantine frescoes in Norman chapels. Every palazzo hides a courtyard, every church a masterpiece, every street corner a sense of deep time.

Beyond Syracuse, the Val di Noto showcases UNESCO-listed baroque towns rebuilt after the 1693 earthquake in unified exuberant style: Noto's honey-colored cathedral, Ragusa Ibla's winding streets descending into a valley, Modica's vertical cityscape and chocolate traditions brought by Spanish colonizers.

The coast alternates between white sand beaches and nature reserves where flamingos nest in spring. Marzamemi preserves its tuna fishing heritage in a piazza so picturesque it seems staged. The southeast offers Sicily's most concentrated cultural riches with beaches to match.`,
    insiderTip: `In Ortigia, find Borderi deli near the Duomo. Don't ask for a menu. Tell Gaetano where you're from and what you ate yesterday. He'll create a sandwich masterpiece based on instinct, local ingredients, and 30 years of experience. His tuna creations are legendary among those who know, each sandwich a personalized work of art that might include wild fennel, sun-dried tomatoes, or whatever he decides you need.`,
    beaches: [
      { name: "Fontane Bianche", description: "Powdery white sand and shallow turquoise water that warms quickly in spring sun, making this the first beach of the season for Syracuse families. The bay is protected enough for young children, deep enough at its center for real swimming. Beach clubs and free sections alternate along the crescent." },
      { name: "Calamosche", description: "Hidden beach in Vendicari Nature Reserve, consistently voted one of Italy's most beautiful. The walk through coastal scrubland (about 20 minutes) keeps crowds manageable. The beach nestles between two headlands, creating a sense of wilderness despite easy access. Bring supplies: there are no facilities." },
      { name: "Vendicari", description: "The nature reserve encompasses multiple beaches and important wetlands where flamingos, herons, and rare wading birds gather during migration. The ruins of a Norman tower and ancient tuna fishery add historical interest. Walking trails connect beaches and birdwatching hides through Mediterranean vegetation." },
      { name: "Marzamemi", description: "This former tuna fishing village centers on a piazza so photogenic it feels like a film set, which it frequently is. The beaches nearby lack Calamosche's drama but compensate with beach bars, seafood restaurants, and the charm of a working port converting to boutique tourism while retaining character." }
    ],
    experiences: [
      { name: "Greek Theater Syracuse", description: "Classical performances June-July in the ancient theater where Aeschylus premiered works. The theater carved from living rock seats 16,000 and maintains perfect acoustics after 2,500 years. Attending Greek tragedy here, in Greek, as the sun sets behind stone tiers, connects to theatrical origins." },
      { name: "Noto by Night", description: "The baroque facades illuminated by floodlights transform Noto's cathedral and palaces into golden fantasy. The evening passeggiata along the Corso is the best time to experience the town: gelato in hand, the day's heat fading, baroque excess glowing against dark sky." },
      { name: "Modica Chocolate Tour", description: "Workshops and tastings explore the unique Aztec-style grainy chocolate brought by Spanish colonizers. The process skips conching, leaving sugar crystals intact for unusual texture. Antica Dolceria Bonajuto has made chocolate since 1880; their hot chocolate with chili follows the original recipe." },
      { name: "Ragusa Ibla Walk", description: "The lower town descended into a valley is a labyrinth of baroque churches (18 of them), palazzi, and stairs connecting levels. The Duomo di San Giorgio presides over a piazza that might be Sicily's finest urban space. The climb back up to modern Ragusa burns off lunch." }
    ],
    mustVisit: [
      "Arethusa Spring - Freshwater spring with papyrus in the heart of Ortigia",
      "Duomo of Syracuse - Temple of Athena columns still visible in cathedral walls",
      "Ear of Dionysius - Limestone cave with perfect acoustics, Caravaggio's name for it",
      "Palazzo Nicolaci Noto - Baroque balconies with fantastic creature sculptures",
      "Castello Maniace - 13th-century fortress at Ortigia's tip, views to Etna"
    ],
    whereToEat: [
      { name: "Caffè Sicilia Noto", description: "Corrado Assenza's legendary granita and pastries, featured in Chef's Table, represent Sicilian craftsmanship at its peak. The almond granita uses ancient varieties; the gelato reflects obsessive sourcing. Arrive early: lines form and supplies of signature items run out." },
      { name: "Don Camillo Syracuse", description: "Fine dining in a 15th-century palazzo where modern technique meets Sicilian tradition. The chef sources obsessively, creating dishes that are simultaneously innovative and rooted. The wine cellar holds deep verticals of major Sicilian producers. Reserve well ahead." },
      { name: "Accursio Modica", description: "The Michelin-starred tasting menu tells the story of southeastern Sicily through contemporary lens while respecting deep traditions. Chocolate appears savory and sweet; fish preparations reflect the coast; vegetables from volcanic soil provide foundation. The dining room is surprisingly casual." },
      { name: "La Cialoma Marzamemi", description: "Fresh tuna steps from the fishing boats that caught it, prepared simply enough to let quality speak. The restaurant occupies part of the historic tonnara (tuna processing facility), connecting meal to place. Reserve a terrace table for sunset over the ancient piazza." }
    ],
    lat: 37.0755,
    lon: 15.2866,
    days: "4-5 days",
    bestTime: "May-June (Greek theater season), September"
  }
];

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(d => d.id === id);
};
