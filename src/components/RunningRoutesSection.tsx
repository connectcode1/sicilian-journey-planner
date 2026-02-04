import { useState } from "react";
import { MapPin, Clock, Mountain, Footprints, Sun, Lightbulb } from "lucide-react";
import { runningRoutes, RunningRoute } from "@/data/runningRoutes";

function RouteCard({ route, isSelected, onClick }: { route: RunningRoute; isSelected: boolean; onClick: () => void }) {
  const difficultyColor = {
    Easy: "text-teal bg-teal/10",
    Moderate: "text-amber bg-amber/10",
    Challenging: "text-terracotta bg-terracotta/10"
  };

  return (
    <div 
      className={`feature-card cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-terracotta' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-bold px-2 py-1 ${difficultyColor[route.difficulty]}`}>
          {route.difficulty}
        </span>
        <span className="text-xs text-slate">{route.distance}</span>
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {route.name}
      </h4>
      <div className="flex items-center gap-1 text-sm text-terracotta">
        <MapPin className="w-3 h-3" />
        {route.location}
      </div>
    </div>
  );
}

function RouteDetail({ route }: { route: RunningRoute }) {
  return (
    <div className="content-card animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Footprints className="w-5 h-5 text-terracotta" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-terracotta">Running Route</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {route.name}
          </h3>
          <p className="text-slate leading-relaxed mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {route.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <Mountain className="w-4 h-4 text-teal mt-1" />
              <div>
                <span className="text-xs font-bold uppercase text-teal">Terrain</span>
                <p className="text-sm text-slate">{route.terrain}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sun className="w-4 h-4 text-amber mt-1" />
              <div>
                <span className="text-xs font-bold uppercase text-amber">Best Time</span>
                <p className="text-sm text-slate">{route.bestTime}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-xs font-bold uppercase text-foreground mb-3 block">Route Highlights</span>
            <div className="flex flex-wrap gap-2">
              {route.highlights.map((highlight, idx) => (
                <span key={idx} className="text-xs bg-cream-dark text-teal px-3 py-1.5 border border-border">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cream-dark p-4 border-l-4 border-amber">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-amber">Insider Tip</span>
                <p className="text-sm text-slate mt-1 italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  {route.insiderTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RunningRoutesSection() {
  const [selectedRoute, setSelectedRoute] = useState<RunningRoute | null>(null);

  // Group routes into rows for inline expansion
  const groupIntoRows = (items: RunningRoute[], perRow: number) => {
    const rows: RunningRoute[][] = [];
    for (let i = 0; i < items.length; i += perRow) {
      rows.push(items.slice(i, i + perRow));
    }
    return rows;
  };

  const rows = groupIntoRows(runningRoutes, 3);

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber text-xl">✦</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-terracotta">Corri in Sicilia</span>
            <span className="text-amber text-xl">✦</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-terracotta mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Running Routes
          </h2>
          <div className="ceramic-divider max-w-xs mx-auto mb-5" />
          <p className="text-lg text-slate max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            From volcanic trails to ancient temple paths, <em>discover Sicily at running pace</em>
          </p>
        </div>

        {/* Routes Grid with Inline Expansion */}
        <div className="space-y-4">
          {rows.map((row, rowIndex) => {
            const selectedInRow = row.find(r => r.id === selectedRoute?.id);
            return (
              <div key={rowIndex}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {row.map((route) => (
                    <RouteCard
                      key={route.id}
                      route={route}
                      isSelected={selectedRoute?.id === route.id}
                      onClick={() => setSelectedRoute(selectedRoute?.id === route.id ? null : route)}
                    />
                  ))}
                </div>
                {selectedInRow && (
                  <div className="mt-4">
                    <RouteDetail route={selectedInRow} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Running Tips */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="insider-quote">
            <h4 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              General Tips for Running in Sicily
            </h4>
            <ul className="space-y-2 text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              <li>• <strong>Hydrate religiously</strong>—summer temperatures regularly exceed 35°C</li>
              <li>• <strong>Start early</strong>—locals run at alba (dawn) or after 7pm</li>
              <li>• <strong>Beware of traffic</strong>—Sicilian drivers are... spirited</li>
              <li>• <strong>Learn "Permesso!"</strong>—useful for navigating crowded historic centers</li>
              <li>• <strong>Post-run granita</strong>—lemon or almond, it's the Sicilian recovery drink</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
