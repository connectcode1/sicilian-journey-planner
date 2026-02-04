export interface SicilianDish {
  id: string;
  name: string;
  italianName: string;
  category: 'street-food' | 'pasta' | 'seafood' | 'meat' | 'desserts' | 'drinks';
  description: string;
  origin: string;
  ingredients: string[];
  whereToTry: string;
  image?: string;
}

export const sicilianDishes: SicilianDish[] = [
  // Street Food
  {
    id: "arancini",
    name: "Arancini",
    italianName: "Arancini / Arancine",
    category: "street-food",
    description: "Golden, crispy rice balls stuffed with ragù, peas, and mozzarella, or in the 'bianco' version, with ham and béchamel. The eternal Palermo vs. Catania debate: are they arancine (feminine, round) or arancini (masculine, pointed)? In truth, shape varies by region, and both are magnificent.",
    origin: "Palermo / Catania (10th century Arab influence)",
    ingredients: ["Arborio rice", "Saffron", "Ragù", "Peas", "Mozzarella", "Breadcrumbs"],
    whereToTry: "Ke Palle in Palermo, Savia in Catania"
  },
  {
    id: "panelle",
    name: "Panelle",
    italianName: "Panelle",
    category: "street-food",
    description: "Thin, crispy chickpea fritters brought by Arab traders, still made exactly as they were a thousand years ago. Served in a soft sesame roll (pane con panelle) with crocchè (potato croquettes), this is Palermo's most beloved street food.",
    origin: "Palermo (Arab origin, 9th-10th century)",
    ingredients: ["Chickpea flour", "Parsley", "Black pepper", "Salt"],
    whereToTry: "Franco U Vastiddaru, I Cuochini in Palermo"
  },
  {
    id: "sfincione",
    name: "Sfincione",
    italianName: "Sfincione",
    category: "street-food",
    description: "Palermo's thick, spongy pizza, nothing like its Neapolitan cousin. Topped with tomato, onions, anchovies, caciocavallo cheese, and breadcrumbs, it's sold from carts with vendors crying 'sfinciuuuune!' through the streets.",
    origin: "Palermo (17th century)",
    ingredients: ["Pizza dough", "Tomatoes", "Onions", "Anchovies", "Caciocavallo", "Breadcrumbs"],
    whereToTry: "Antica Focacceria San Francesco, any Palermo bakery"
  },
  {
    id: "pane-meusa",
    name: "Pane ca' Meusa",
    italianName: "Pane ca' Meusa",
    category: "street-food",
    description: "The adventurous sandwich: veal spleen and lung, fried in lard, served in a soft sesame roll. 'Schietto' (bachelor) comes plain with lemon; 'maritato' (married) adds ricotta and caciocavallo. Jewish origin from the medieval ghetto, still made at the same spots.",
    origin: "Palermo Jewish quarter (15th century)",
    ingredients: ["Veal spleen", "Veal lung", "Lard", "Ricotta", "Caciocavallo", "Lemon"],
    whereToTry: "Porta Carbone, Pani ca' Meusa di Sergio in Palermo"
  },
  {
    id: "stigghiola",
    name: "Stigghiola",
    italianName: "Stigghiola",
    category: "street-food",
    description: "Lamb or goat intestines wrapped around spring onions and grilled over charcoal. The aroma wafts through Palermo's markets from early morning. Eat it straight from the grill with salt and lemon: pure, primal, and surprisingly delicious.",
    origin: "Palermo markets (ancient tradition)",
    ingredients: ["Lamb intestines", "Spring onions", "Salt", "Lemon"],
    whereToTry: "Ballarò and Vucciria markets in Palermo"
  },

  // Pasta Dishes
  {
    id: "pasta-norma",
    name: "Pasta alla Norma",
    italianName: "Pasta alla Norma",
    category: "pasta",
    description: "Catania's gift to the world: fried eggplant, tomato sauce, basil, and ricotta salata. Named after Bellini's opera 'Norma' (born in Catania), the dish is so perfect locals use 'è una Norma!' to praise anything excellent.",
    origin: "Catania (19th century, named for Bellini's 1831 opera)",
    ingredients: ["Pasta", "Fried eggplant", "Tomato sauce", "Ricotta salata", "Basil"],
    whereToTry: "Trattoria del Cavaliere in Catania"
  },
  {
    id: "pasta-sarde",
    name: "Pasta con le Sarde",
    italianName: "Pasta con le Sarde",
    category: "pasta",
    description: "The dish that captures Sicily in one bowl: fresh sardines, wild fennel, pine nuts, raisins, saffron, and bucatini. Sweet meets savory meets sea, with Arab influence in every bite. Only made properly with wild fennel, foraged from hillsides.",
    origin: "Palermo (9th century Arab influence)",
    ingredients: ["Bucatini", "Fresh sardines", "Wild fennel", "Pine nuts", "Raisins", "Saffron", "Breadcrumbs"],
    whereToTry: "Trattoria Ai Cascinari in Palermo"
  },
  {
    id: "busiate-pesto-trapanese",
    name: "Busiate al Pesto Trapanese",
    italianName: "Busiate al Pesto Trapanese",
    category: "pasta",
    description: "Hand-rolled spiral pasta with Trapani's unique pesto: raw tomatoes, almonds, garlic, and basil. No cooking, no pine nuts, no parmesan. The hand-rolling technique using a thin reed (busa) creates pasta that holds the sauce perfectly.",
    origin: "Trapani (Genoese sailors + local adaptation)",
    ingredients: ["Busiate pasta", "Raw tomatoes", "Almonds", "Garlic", "Basil", "Pecorino"],
    whereToTry: "Cantina Siciliana in Trapani"
  },
  {
    id: "pasta-ncasciata",
    name: "Pasta 'Ncasciata",
    italianName: "Pasta 'Ncasciata",
    category: "pasta",
    description: "Messina's baroque baked pasta: rigatoni with ragù, peas, hard-boiled eggs, fried eggplant, caciocavallo, and salami, encased and baked until the crust forms. Featured in Montalbano novels, it's celebratory food meant for sharing.",
    origin: "Messina (traditional feast dish)",
    ingredients: ["Rigatoni", "Ragù", "Eggplant", "Hard-boiled eggs", "Caciocavallo", "Peas"],
    whereToTry: "Home cooking or traditional trattorias in Messina"
  },
  {
    id: "pasta-mollica",
    name: "Pasta ca' Muddica",
    italianName: "Pasta ca' Muddica",
    category: "pasta",
    description: "Poor man's parmesan: toasted breadcrumbs replace expensive cheese, flavored with anchovies, garlic, and olive oil. The muddica atturrata (toasted crumbs) add crunch and nuttiness. A dish born from poverty, now treasured as tradition.",
    origin: "Western Sicily (peasant tradition)",
    ingredients: ["Spaghetti", "Breadcrumbs", "Anchovies", "Garlic", "Olive oil", "Parsley"],
    whereToTry: "Trattorias throughout Western Sicily"
  },
  {
    id: "anelletti-forno",
    name: "Anelletti al Forno",
    italianName: "Anelletti al Forno",
    category: "pasta",
    description: "Ring-shaped pasta baked with ragù, peas, fried eggplant, and caciocavallo until a perfect crust forms. The Sunday lunch tradition in Palermo: every family has their recipe, passed through generations, never written down.",
    origin: "Palermo (Sunday tradition)",
    ingredients: ["Anelletti pasta", "Ragù", "Peas", "Fried eggplant", "Caciocavallo"],
    whereToTry: "Ferro di Cavallo in Palermo"
  },

  // Seafood
  {
    id: "sarde-beccafico",
    name: "Sarde a Beccafico",
    italianName: "Sarde a Beccafico",
    category: "seafood",
    description: "Sardines stuffed with breadcrumbs, pine nuts, raisins, and orange zest, rolled to resemble beccafico birds (a noble delicacy the poor couldn't afford). Baked with bay leaves and orange juice: Arab-Sicilian fusion perfected.",
    origin: "Palermo (peasant imitation of noble dish)",
    ingredients: ["Fresh sardines", "Breadcrumbs", "Pine nuts", "Raisins", "Orange", "Bay leaves"],
    whereToTry: "Osteria dei Vespri in Palermo"
  },
  {
    id: "pesce-spada",
    name: "Pesce Spada alla Ghiotta",
    italianName: "Pesce Spada alla Ghiotta",
    category: "seafood",
    description: "Swordfish cooked 'ghiotta' style: with tomatoes, capers, olives, and celery. Messina's strait is legendary for swordfish, hunted by traditional boats with towering masts. The fish arrives at market within hours of catch.",
    origin: "Messina Strait (ancient fishing tradition)",
    ingredients: ["Swordfish steaks", "Tomatoes", "Capers", "Olives", "Celery", "Pine nuts"],
    whereToTry: "Trattorie along the Messina coast"
  },
  {
    id: "tonno-cipollata",
    name: "Tonno alla Cipollata",
    italianName: "Tonno alla Cipollata",
    category: "seafood",
    description: "Tuna steaks with sweet-sour onions, vinegar, and sugar: agrodolce at its finest. The mattanza (traditional tuna hunt) once dominated western Sicily; today Favignana keeps traditions alive, and the fish remains exceptional.",
    origin: "Trapani / Favignana (mattanza tradition)",
    ingredients: ["Fresh tuna", "Onions", "White wine vinegar", "Sugar", "Mint"],
    whereToTry: "Marzamemi, San Vito Lo Capo"
  },
  {
    id: "pasta-ricci",
    name: "Pasta ai Ricci di Mare",
    italianName: "Pasta ai Ricci di Mare",
    category: "seafood",
    description: "Spaghetti with raw sea urchin roe, nothing else except perhaps garlic, parsley, and olive oil. The bright orange roe tastes of the purest sea. A seasonal delicacy (winter-spring) when urchins are harvested from rocky shores.",
    origin: "Coastal Sicily (traditional)",
    ingredients: ["Spaghetti", "Sea urchin roe", "Garlic", "Parsley", "Olive oil"],
    whereToTry: "Trattoria da Salvatore in Mondello, any coastal town in season"
  },
  {
    id: "cous-cous-pesce",
    name: "Cous Cous di Pesce",
    italianName: "Cous Cous di Pesce",
    category: "seafood",
    description: "San Vito Lo Capo's North African treasure: hand-rolled semolina couscous steamed over rich fish broth, served with a variety of local catch. The annual Cous Cous Fest celebrates this unique Arab-Sicilian crossover.",
    origin: "San Vito Lo Capo / Trapani (Tunisian influence)",
    ingredients: ["Semolina", "Mixed fish", "Fish broth", "Garlic", "Parsley", "Almonds"],
    whereToTry: "Ristorante Pocho in San Vito Lo Capo"
  },

  // Meat
  {
    id: "involtini-spada",
    name: "Involtini di Pesce Spada",
    italianName: "Involtini di Pesce Spada",
    category: "meat",
    description: "Though technically fish, these rolls use the same technique as meat: thin swordfish slices wrapped around breadcrumb filling with capers, cheese, and herbs, threaded on skewers and grilled. Also made with beef (involtini alla palermitana).",
    origin: "Messina / Catania",
    ingredients: ["Swordfish or beef", "Breadcrumbs", "Capers", "Cheese", "Pine nuts", "Onion"],
    whereToTry: "Trattoria Catarsi in Catania"
  },
  {
    id: "falsomagro",
    name: "Farsumagru",
    italianName: "Farsumagru (Falsomagro)",
    category: "meat",
    description: "The 'false lean': a large beef roll stuffed with hard-boiled eggs, salami, cheese, and sometimes peas, braised slowly in tomato sauce. The name mocks pretension: it looks simple but hides richness within.",
    origin: "Palermo (noble tradition)",
    ingredients: ["Beef flank", "Hard-boiled eggs", "Salami", "Caciocavallo", "Peas", "Tomato sauce"],
    whereToTry: "Traditional trattorias in Palermo"
  },
  {
    id: "caponata",
    name: "Caponata",
    italianName: "Caponata",
    category: "meat",
    description: "Sweet and sour fried eggplant with tomatoes, celery, capers, olives, and vinegar. Every family argues their recipe is authentic. Some add pine nuts, almonds, or octopus. Best made a day ahead when flavors marry.",
    origin: "Throughout Sicily (17th century)",
    ingredients: ["Eggplant", "Tomatoes", "Celery", "Capers", "Olives", "Vinegar", "Sugar"],
    whereToTry: "Every trattoria: compare and find your favorite"
  },

  // Desserts
  {
    id: "cannolo",
    name: "Cannolo Siciliano",
    italianName: "Cannolo Siciliano",
    category: "desserts",
    description: "The king of Sicilian pastry: crispy fried tubes filled with sweet ricotta, chocolate chips, and candied fruit. The shells must be filled to order; soggy cannoli are sacrilege. Size varies from bite-sized to forearm-length.",
    origin: "Caltanissetta / Palermo (Arab origin, carnival tradition)",
    ingredients: ["Flour shell", "Fresh ricotta", "Powdered sugar", "Chocolate chips", "Candied fruit", "Pistachios"],
    whereToTry: "Cappello in Palermo, Pasticceria Maria Grammatico in Erice"
  },
  {
    id: "cassata",
    name: "Cassata Siciliana",
    italianName: "Cassata Siciliana",
    category: "desserts",
    description: "Baroque excess in cake form: sponge soaked in liqueur, layered with ricotta cream and marzipan, covered in bright green icing and candied fruit. Each piece is a small cathedral. Originated in Palermo's Arab-Norman courts.",
    origin: "Palermo (10th century Arab origin)",
    ingredients: ["Sponge cake", "Ricotta", "Marzipan", "Candied fruit", "Royal icing", "Pistachios"],
    whereToTry: "Pasticceria Costa in Palermo"
  },
  {
    id: "granita",
    name: "Granita Siciliana",
    italianName: "Granita con Brioche",
    category: "desserts",
    description: "Not a slushie: a semi-frozen delicacy with texture like silk. Almond (Noto), mulberry (Catania), coffee, pistachio (Bronte), or lemon. Eaten for breakfast with warm brioche, dunking the bread like a Sicilian.",
    origin: "Catania / Eastern Sicily (16th century, snow from Etna)",
    ingredients: ["Sugar", "Water", "Fruit/nuts/coffee"],
    whereToTry: "Caffè Sicilia in Noto, Bam Bar in Taormina"
  },
  {
    id: "frutta-martorana",
    name: "Frutta Martorana",
    italianName: "Frutta di Martorana",
    category: "desserts",
    description: "Marzipan shaped and painted to look exactly like real fruit, so realistic you pick them up expecting orange flesh. Created by nuns at La Martorana convent to decorate their garden for a visiting dignitary.",
    origin: "Palermo (12th century Martorana convent)",
    ingredients: ["Almonds", "Sugar", "Food coloring"],
    whereToTry: "Pasticceria Cappello in Palermo"
  },
  {
    id: "gelo-mellone",
    name: "Gelo di Mellone",
    italianName: "Gelo di Mellone",
    category: "desserts",
    description: "Watermelon pudding set with starch, studded with chocolate chips (representing seeds) and jasmine water. Bright red, fragrant with jasmine, served cold. A summer tradition, especially for Ferragosto (August 15).",
    origin: "Palermo (Arab origin)",
    ingredients: ["Watermelon juice", "Sugar", "Cornstarch", "Chocolate chips", "Jasmine essence", "Pistachios"],
    whereToTry: "Summer months in Palermo pasticcerie"
  },
  {
    id: "iris",
    name: "Iris Fritta",
    italianName: "Iris alla Ricotta",
    category: "desserts",
    description: "Fried brioche filled with sweet ricotta cream: essentially a fried cannolo but even more indulgent. Named for the opera singer Iris Mazzucato. Best eaten warm when ricotta is soft and dough is crisp.",
    origin: "Palermo (1901, named after opera)",
    ingredients: ["Brioche dough", "Sweet ricotta", "Chocolate chips", "Powdered sugar"],
    whereToTry: "I Cuochini in Palermo"
  },
  {
    id: "biancomangiare",
    name: "Biancomangiare",
    italianName: "Biancomangiare",
    category: "desserts",
    description: "Delicate almond milk pudding, pure white and gently sweet. Medieval origin, served in terracotta molds shaped like fish or flowers. The simplest of Sicilian desserts but requires perfect almond milk.",
    origin: "Throughout Sicily (medieval, possibly Arab)",
    ingredients: ["Almond milk", "Sugar", "Cornstarch", "Lemon zest", "Cinnamon"],
    whereToTry: "Caffè Sicilia in Noto"
  },
  {
    id: "buccellato",
    name: "Buccellato",
    italianName: "Buccellato",
    category: "desserts",
    description: "Ring-shaped Christmas cake filled with dried figs, almonds, walnuts, and orange zest. The decorative pastry exterior is cut to reveal the dark filling. Essential during holidays, baked in homes and pasticcerie.",
    origin: "Palermo (Christmas tradition)",
    ingredients: ["Pastry", "Dried figs", "Almonds", "Walnuts", "Orange zest", "Chocolate"],
    whereToTry: "Any Palermo pasticceria during Christmas season"
  },
  {
    id: "pignolata",
    name: "Pignolata Messinese",
    italianName: "Pignolata",
    category: "desserts",
    description: "Pine cone-shaped fried dough clusters, half dipped in white lemon icing, half in dark chocolate. The contrast is striking. A Messina specialty, particularly for carnival.",
    origin: "Messina (carnival tradition)",
    ingredients: ["Fried dough", "Lemon icing", "Chocolate icing"],
    whereToTry: "Pasticcerie in Messina"
  },

  // Drinks
  {
    id: "limoncello",
    name: "Limoncello Siciliano",
    italianName: "Limoncello",
    category: "drinks",
    description: "Lemon liqueur made from the giant, fragrant lemons of Sicily, especially from the slopes of Etna. Served ice-cold as digestivo. Sicilian versions are less sweet than Amalfi's, letting lemon intensity shine.",
    origin: "Throughout Sicily",
    ingredients: ["Lemon zest", "Alcohol", "Sugar", "Water"],
    whereToTry: "Any restaurant after dinner"
  },
  {
    id: "malvasia",
    name: "Malvasia delle Lipari",
    italianName: "Malvasia delle Lipari",
    category: "drinks",
    description: "Liquid gold from the Aeolian Islands: dried grape passito wine with honey, apricot, and volcanic minerality. Pairs with desserts or cheese, or simply sipped as meditation. Production limited by tiny vineyard terraces.",
    origin: "Salina, Aeolian Islands",
    ingredients: ["Malvasia grapes (sun-dried)"],
    whereToTry: "Hauner or Fenech wineries in Salina"
  },
  {
    id: "nero-davola",
    name: "Nero d'Avola",
    italianName: "Nero d'Avola",
    category: "drinks",
    description: "Sicily's flagship red grape: deep, rich, full of plum and spice. Named for Avola in the southeast but grown island-wide. Modern winemaking has elevated what was once bulk wine into world-class bottles.",
    origin: "Avola / Throughout Sicily",
    ingredients: ["Nero d'Avola grapes"],
    whereToTry: "Planeta, Tasca d'Almerita, Donnafugata wineries"
  },
  {
    id: "nerello-mascalese",
    name: "Nerello Mascalese",
    italianName: "Nerello Mascalese",
    category: "drinks",
    description: "Etna's volcanic red: elegant, mineral, compared to Burgundy. Grown on ancient terraces above 600m altitude. The volcanic soil creates wines unlike any other, tasting of fire, ash, and resilience.",
    origin: "Mount Etna slopes",
    ingredients: ["Nerello Mascalese grapes"],
    whereToTry: "Tenuta delle Terre Nere, Benanti, Passopisciaro wineries"
  },
  {
    id: "zibibbo",
    name: "Passito di Pantelleria",
    italianName: "Passito di Pantelleria",
    category: "drinks",
    description: "Sweet wine from sun-dried Zibibbo grapes on the volcanic island of Pantelleria, closer to Tunisia than Sicily. UNESCO-recognized vineyard cultivation on stone terraces creates an intense dessert wine.",
    origin: "Pantelleria Island",
    ingredients: ["Zibibbo/Moscato grapes (sun-dried)"],
    whereToTry: "Donnafugata 'Ben Ryé', Marco de Bartoli"
  },
  {
    id: "mandorla-latte",
    name: "Latte di Mandorla",
    italianName: "Latte di Mandorla",
    category: "drinks",
    description: "Sicilian almond milk, made fresh from the island's prized almonds. Served cold and slightly sweetened. The base for granita di mandorla, or simply drunk as refreshment on hot days. Nothing like industrial versions.",
    origin: "Throughout Sicily",
    ingredients: ["Sicilian almonds", "Sugar", "Water"],
    whereToTry: "Any bar or pasticceria, especially in Noto"
  }
];

export const foodCategories = [
  { id: "street-food", name: "Street Food", icon: "🥟" },
  { id: "pasta", name: "Pasta", icon: "🍝" },
  { id: "seafood", name: "Seafood", icon: "🦐" },
  { id: "meat", name: "Meat & Sides", icon: "🍖" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Drinks & Wine", icon: "🍷" }
];

export interface FoodExpression {
  phrase: string;
  translation: string;
  context: string;
}

export const sicilianFoodExpressions: FoodExpression[] = [
  { phrase: "Ammucca!", translation: "Open your mouth! / Taste this!", context: "What nonna says when she's feeding you. Resistance is futile." },
  { phrase: "Bonu!", translation: "Good! / Delicious!", context: "The highest compliment, often with a finger kiss." },
  { phrase: "Mangia, mangia!", translation: "Eat, eat!", context: "You'll hear this constantly. Refusing food is deeply offensive." },
  { phrase: "È una Norma!", translation: "It's a masterpiece!", context: "From the famous pasta, used to praise anything excellent." },
  { phrase: "Cu mancia fa muddica", translation: "He who eats makes crumbs", context: "Those who act make mistakes. Doing nothing is never the answer." },
  { phrase: "Panza china, cori cuntentu", translation: "Full belly, happy heart", context: "The Sicilian philosophy of life in five words." }
];
