import { Car, Train, Bus, Ship, Euro, Clock, MessageCircle } from "lucide-react";

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
                  <h4 className="font-semibold">Ferries</h4>
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
            Essential Phrases
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
