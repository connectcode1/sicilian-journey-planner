import { Car, Train, Bus, Ship, Euro, Clock, MessageCircle, Plane, Calendar } from "lucide-react";

const phrases = [
  { italian: "Buongiorno / Buonasera", english: "Good morning / Good evening" },
  { italian: "Per favore", english: "Please" },
  { italian: "Grazie mille", english: "Thank you very much" },
  { italian: "Mi scusi", english: "Excuse me" },
  { italian: "Quanto costa?", english: "How much does it cost?" },
  { italian: "Il conto, per favore", english: "The bill, please" },
  { italian: "Dov'è...?", english: "Where is...?" },
  { italian: "Che cosa mi consiglia?", english: "What do you recommend?" },
  { italian: "È possibile avere...?", english: "Is it possible to have...?" },
  { italian: "Parla inglese?", english: "Do you speak English?" }
];

const sicilianExpressions = [
  { sicilian: "Minchia!", meaning: "Wow! / Damn!", context: "The all-purpose Sicilian exclamation—surprise, frustration, admiration. Use sparingly with strangers." },
  { sicilian: "Mizzica!", meaning: "Gosh! / Wow!", context: "The polite version of minchia. Safe in all company." },
  { sicilian: "Talìa!", meaning: "Look!", context: "Getting someone's attention to show them something beautiful." },
  { sicilian: "Ammucca!", meaning: "Open your mouth! / Taste this!", context: "What nonna says when feeding you—resistance is futile." },
  { sicilian: "Comu si bedda/beddu!", meaning: "How beautiful you are!", context: "Complimenting people, food, views—everything deserving beauty in Sicily." },
  { sicilian: "Chi fa?", meaning: "What's happening?", context: "Casual greeting among friends." },
  { sicilian: "Bonu!", meaning: "Good! / Tasty!", context: "The highest food compliment, often accompanied by finger kiss." },
  { sicilian: "Manco pi sunnà", meaning: "Not even in dreams", context: "Absolutely not—emphatic refusal." },
  { sicilian: "Picciriddu/a", meaning: "Little one / kid", context: "Term of endearment for children—or adults you find cute." },
  { sicilian: "Camurria!", meaning: "What a nuisance!", context: "Expressing mild annoyance at bureaucracy, delays, or hassles." }
];

const airports = [
  {
    name: "Palermo Falcone-Borsellino (PMO)",
    description: "Western Sicily's main hub, 35km from city center. Shuttle buses run every 30min to Palermo central station (€7, 50min).",
    airlines: "Ryanair, EasyJet, Vueling, ITA Airways, Air France, Lufthansa, British Airways",
    destinations: "Rome, Milan, Barcelona, London, Paris, Munich, Brussels, Amsterdam"
  },
  {
    name: "Catania Fontanarossa (CTA)",
    description: "Eastern Sicily's gateway, 7km from city center. Alibus to center every 20min (€4, 20min). Closest airport for Taormina.",
    airlines: "Ryanair, EasyJet, Wizz Air, ITA Airways, KLM, Swiss, Austrian",
    destinations: "Rome, Milan, Barcelona, London Stansted/Gatwick, Paris, Zurich, Vienna, Amsterdam"
  },
  {
    name: "Trapani Birgi (TPS)",
    description: "Small airport for western beaches and Egadi Islands. Limited but growing connections, mainly Ryanair.",
    airlines: "Ryanair",
    destinations: "Bergamo, Bologna, Pisa, Rome Ciampino (seasonal routes vary)"
  },
  {
    name: "Comiso (CIY)",
    description: "Tiny airport near Ragusa, useful for baroque southeast. Very limited service.",
    airlines: "Ryanair (limited)",
    destinations: "Rome, Brussels Charleroi, London Stansted (seasonal)"
  }
];

const ferries = [
  {
    route: "Messina ↔ Villa San Giovanni (Calabria)",
    operator: "Caronte & Tourist, Blu Jet",
    frequency: "Every 20-40 min, 24/7",
    duration: "20 minutes",
    cost: "€3-4 foot passenger, €35-45 with car",
    notes: "The classic crossing—trains roll directly onto ferries. No booking needed; just show up."
  },
  {
    route: "Messina ↔ Reggio Calabria",
    operator: "Blu Jet hydrofoils",
    frequency: "Multiple daily",
    duration: "20 minutes (fast hydrofoil)",
    cost: "€5-7 foot passenger",
    notes: "Foot passengers only. Faster and more scenic than the car ferry."
  },
  {
    route: "Palermo ↔ Naples",
    operator: "GNV, Grandi Navi Veloci, Tirrenia",
    frequency: "Daily overnight",
    duration: "10-11 hours",
    cost: "€50-80 deck/cabin, €150+ with car",
    notes: "Overnight crossing with cabins available. Book ahead in summer."
  },
  {
    route: "Palermo ↔ Genoa",
    operator: "GNV, Grandi Navi Veloci",
    frequency: "Daily",
    duration: "20 hours",
    cost: "€70-120 cabin, €200+ with car",
    notes: "Long but comfortable. Good for bringing vehicles from northern Italy."
  },
  {
    route: "Palermo ↔ Civitavecchia (Rome)",
    operator: "Grimaldi Lines",
    frequency: "Several weekly",
    duration: "13-14 hours",
    cost: "€60-100 cabin",
    notes: "Alternative to Naples route if heading to central Italy."
  }
];

const festivities = [
  { date: "Jan 17", name: "Sant'Antonio Abate", location: "Throughout Sicily", description: "Bonfires and animal blessings" },
  { date: "Feb 3-5", name: "Festa di Sant'Agata", location: "Catania", description: "Sicily's largest festival—1 million pilgrims, candle-lit procession, spectacular devotion" },
  { date: "Feb", name: "Carnevale di Acireale", location: "Acireale", description: "Baroque floats, papier-mâché giants, one of Italy's finest carnivals" },
  { date: "Easter Week", name: "Settimana Santa", location: "Throughout Sicily", description: "Dramatic processions, especially Trapani's 'Misteri' (20+ hours)" },
  { date: "May-Jul", name: "Greek Theater Season", location: "Syracuse, Taormina", description: "Ancient dramas performed in original theaters—book early" },
  { date: "Jul 10-15", name: "Festino di Santa Rosalia", location: "Palermo", description: "Patron saint festival with massive procession and fireworks" },
  { date: "Aug 15", name: "Ferragosto", location: "Everywhere", description: "Everything closes—Sicilians at the beach. Book everything months ahead" },
  { date: "Sep", name: "Cous Cous Fest", location: "San Vito Lo Capo", description: "World couscous championship—chefs compete, everyone eats" },
  { date: "Nov 1-2", name: "Festa dei Morti", location: "Throughout Sicily", description: "Day of the Dead—children receive gifts 'from ancestors,' marzipan fruits" },
  { date: "Dec 13", name: "Santa Lucia", location: "Syracuse", description: "No pasta or bread—only rice, chickpeas, and cuccia (wheat pudding)" }
];

export function InsiderTipsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-terracotta mb-4">
            Insider Knowledge
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Essential information for navigating Sicily like a local
          </p>
        </div>

        {/* Sicilian Expressions */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-terracotta mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Speak Like a Sicilian
          </h3>
          <p className="text-slate text-sm mb-6">
            Sicilian (Sicilianu) is a distinct language, not a dialect. While everyone speaks Italian, 
            dropping a few Sicilian phrases earns immediate affection:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {sicilianExpressions.map((expr, idx) => (
              <div key={idx} className="p-4 bg-cream-dark border-l-4 border-terracotta">
                <p className="font-bold text-terracotta text-lg">{expr.sicilian}</p>
                <p className="font-semibold text-foreground">{expr.meaning}</p>
                <p className="text-slate text-sm mt-1 italic">{expr.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Airports */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-teal mb-6 flex items-center gap-2">
            <Plane className="w-5 h-5" />
            Getting to Sicily by Air
          </h3>
          <div className="space-y-6">
            {airports.map((airport, idx) => (
              <div key={idx} className="feature-card">
                <h4 className="font-semibold text-foreground mb-2">{airport.name}</h4>
                <p className="text-slate text-sm mb-3">{airport.description}</p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-teal block mb-1">Airlines</span>
                    <span className="text-slate">{airport.airlines}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-amber block mb-1">Key Destinations</span>
                    <span className="text-slate">{airport.destinations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ferries to Mainland */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-teal mb-6 flex items-center gap-2">
            <Ship className="w-5 h-5" />
            Ferries to Mainland Italy
          </h3>
          <p className="text-slate text-sm mb-6">
            Crossing to Calabria or reaching Sicily by sea offers a romantic alternative to flying—and lets you bring a car.
          </p>
          <div className="space-y-4">
            {ferries.map((ferry, idx) => (
              <div key={idx} className="p-5 bg-cream-dark border-l-4 border-teal">
                <h4 className="font-semibold text-foreground mb-2">{ferry.route}</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-2">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-teal">Operator</span>
                    <p className="text-slate">{ferry.operator}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-teal">Frequency</span>
                    <p className="text-slate">{ferry.frequency}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-teal">Duration</span>
                    <p className="text-slate">{ferry.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-teal">Cost</span>
                    <p className="text-slate">{ferry.cost}</p>
                  </div>
                </div>
                <p className="text-slate text-sm italic">{ferry.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Festivities Calendar */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-amber mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Sicilian Festivities
          </h3>
          <p className="text-slate text-sm mb-6">
            Sicily's calendar overflows with religious festivals, food celebrations, and cultural events. 
            Plan around these for unforgettable experiences—or book early to avoid the crowds.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {festivities.map((fest, idx) => (
              <div key={idx} className="p-4 bg-cream-dark border-l-4 border-amber">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-amber">{fest.date}</span>
                    <h4 className="font-semibold text-foreground">{fest.name}</h4>
                    <p className="text-teal text-sm">{fest.location}</p>
                  </div>
                </div>
                <p className="text-slate text-sm mt-2">{fest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-teal mb-6 flex items-center gap-2">
            <Car className="w-5 h-5" />
            Getting Around
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="w-5 h-5 text-terracotta" />
                  <h4 className="font-semibold">Car Rental</h4>
                </div>
                <p className="text-slate text-sm mb-2"><strong>Recommended for:</strong> Countryside, wine regions, beach hopping</p>
                <p className="text-slate text-sm mb-2"><strong>Cost:</strong> €30-60/day</p>
                <p className="text-slate text-sm"><strong>Tip:</strong> Book automatic transmission in advance—most cars are manual. GPS essential for mountain roads.</p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-2 mb-3">
                  <Train className="w-5 h-5 text-teal" />
                  <h4 className="font-semibold">Trains</h4>
                </div>
                <p className="text-slate text-sm mb-2"><strong>Best for:</strong> Coastal routes (Palermo-Messina-Catania-Syracuse)</p>
                <p className="text-slate text-sm mb-2"><strong>Cost:</strong> €10-20 between major cities</p>
                <p className="text-slate text-sm"><strong>Tip:</strong> Trenitalia intercity trains are reliable; avoid slow regionale trains when possible.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-center gap-2 mb-3">
                  <Bus className="w-5 h-5 text-amber" />
                  <h4 className="font-semibold">Buses</h4>
                </div>
                <p className="text-slate text-sm mb-2"><strong>Coverage:</strong> Reaches smaller towns trains don't serve</p>
                <p className="text-slate text-sm mb-2"><strong>Cost:</strong> €5-15 depending on distance</p>
                <p className="text-slate text-sm"><strong>Tip:</strong> Buy tickets at tobacco shops (tabacchi) before boarding—not always available on board.</p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-2 mb-3">
                  <Ship className="w-5 h-5 text-teal" />
                  <h4 className="font-semibold">Island Ferries</h4>
                </div>
                <p className="text-slate text-sm mb-2"><strong>Islands:</strong> Aeolian (from Milazzo), Aegadian (from Trapani)</p>
                <p className="text-slate text-sm mb-2"><strong>Cost:</strong> €15-40 depending on destination and season</p>
                <p className="text-slate text-sm"><strong>Tip:</strong> Book hydrofoils in advance for summer travel—they fill completely. Slower ferries often have last-minute space.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-amber mb-6 flex items-center gap-2">
            <Euro className="w-5 h-5" />
            Budget Planning
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-cream-dark border-l-4 border-teal">
              <h4 className="font-semibold text-teal mb-3">BUDGET</h4>
              <p className="font-serif text-2xl text-terracotta mb-4">€50-80/day</p>
              <ul className="text-slate text-sm space-y-2">
                <li>• Hostels & B&Bs</li>
                <li>• Street food & trattorias</li>
                <li>• Public transport</li>
                <li>• Self-guided tours</li>
              </ul>
            </div>

            <div className="p-6 bg-cream-dark border-l-4 border-amber">
              <h4 className="font-semibold text-amber mb-3">MID-RANGE</h4>
              <p className="font-serif text-2xl text-terracotta mb-4">€120-200/day</p>
              <ul className="text-slate text-sm space-y-2">
                <li>• 3-4 star hotels</li>
                <li>• Restaurant meals</li>
                <li>• Car rental</li>
                <li>• Guided experiences</li>
              </ul>
            </div>

            <div className="p-6 bg-cream-dark border-l-4 border-terracotta">
              <h4 className="font-semibold text-terracotta mb-3">LUXURY</h4>
              <p className="font-serif text-2xl text-terracotta mb-4">€300+/day</p>
              <ul className="text-slate text-sm space-y-2">
                <li>• Boutique hotels</li>
                <li>• Fine dining</li>
                <li>• Private tours</li>
                <li>• Premium experiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Phrases */}
        <div className="content-card mb-10">
          <h3 className="font-serif text-xl font-semibold text-teal mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Essential Italian Phrases
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {phrases.map((phrase, idx) => (
              <div key={idx} className="p-4 bg-cream-dark hover:bg-muted transition-colors">
                <p className="font-semibold text-foreground">{phrase.italian}</p>
                <p className="text-slate text-sm italic">{phrase.english}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When to Visit */}
        <div className="content-card">
          <h3 className="font-serif text-xl font-semibold text-terracotta mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            When to Visit
          </h3>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-terracotta bg-cream-dark">
              <h4 className="font-semibold mb-2">Peak Season (July-August)</h4>
              <p className="text-slate text-sm">
                Hot temperatures reaching 35°C+, crowded beaches, higher prices—but perfect for swimming and island hopping. 
                Book everything months in advance. Beach resorts at full capacity. Italian holidays mean Sicilians also travel.
              </p>
            </div>

            <div className="p-5 border-l-4 border-teal bg-cream-dark">
              <h4 className="font-semibold mb-2">Shoulder Season (April-June, September-October)</h4>
              <p className="text-slate text-sm">
                Ideal weather (20-28°C), manageable crowds, reasonable prices. Swimming possible into October in the south.
                Greek theater season runs May-July. Wine harvest in September. This is the sweet spot for most travelers.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber bg-cream-dark">
              <h4 className="font-semibold mb-2">Winter (November-March)</h4>
              <p className="text-slate text-sm">
                Quiet and authentic—many beach areas closed, but cities come alive with local life. Rain possible but rarely 
                persistent. Perfect for culture-focused trips, hiking, and experiencing Sicily without tourist crowds. Etna often snow-capped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
