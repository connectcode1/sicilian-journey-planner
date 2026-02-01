import { useState } from "react";
import { BookOpen, Film, Tv, MapPin, Quote, Info } from "lucide-react";
import { literaryLocations, LiteraryLocation } from "@/data/literaryLocations";

function LocationCard({ location, isSelected, onClick }: { location: LiteraryLocation; isSelected: boolean; onClick: () => void }) {
  const typeIcon = {
    book: <BookOpen className="w-4 h-4" />,
    movie: <Film className="w-4 h-4" />,
    both: <Tv className="w-4 h-4" />
  };

  const typeColor = {
    book: "text-teal bg-teal/10",
    movie: "text-terracotta bg-terracotta/10",
    both: "text-amber bg-amber/10"
  };

  return (
    <div 
      className={`feature-card cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-terracotta' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 ${typeColor[location.type]}`}>
          {typeIcon[location.type]}
          {location.type === "both" ? "Book & Film" : location.type === "book" ? "Literature" : "Cinema"}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {location.name}
      </h4>
      <div className="flex items-center gap-1 text-sm text-terracotta mb-3">
        <MapPin className="w-3 h-3" />
        {location.location}
      </div>
      <div className="text-xs text-slate">
        {location.works.slice(0, 2).map((work, idx) => (
          <span key={idx} className="block truncate">
            • {work.title} ({work.year})
          </span>
        ))}
      </div>
    </div>
  );
}

function LocationDetail({ location }: { location: LiteraryLocation }) {
  const workTypeIcon = {
    novel: <BookOpen className="w-3 h-3" />,
    film: <Film className="w-3 h-3" />,
    "tv-series": <Tv className="w-3 h-3" />
  };

  return (
    <div className="content-card animate-fade-in">
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Film className="w-5 h-5 text-terracotta" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-terracotta">Literary & Film Location</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {location.name}
          </h3>
          <div className="flex items-center gap-1 text-terracotta mb-4">
            <MapPin className="w-4 h-4" />
            <span>{location.location}</span>
          </div>
          <p className="text-slate leading-relaxed mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {location.description}
          </p>

          {/* Featured Works */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase text-foreground mb-3 block">Featured In</span>
            <div className="space-y-2">
              {location.works.map((work, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-cream-dark p-3">
                  <span className="text-teal">{workTypeIcon[work.type]}</span>
                  <div>
                    <span className="text-sm font-semibold text-foreground">{work.title}</span>
                    <span className="text-xs text-slate block">{work.creator}, {work.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote if available */}
          {location.quote && (
            <div className="bg-card border-l-4 border-amber p-4 mb-6">
              <div className="flex items-start gap-2">
                <Quote className="w-4 h-4 text-amber flex-shrink-0 mt-1" />
                <p className="text-slate italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  "{location.quote}"
                </p>
              </div>
            </div>
          )}

          {/* Visit Info */}
          <div className="bg-cream-dark p-4 border-l-4 border-teal">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-teal">Visiting Info</span>
                <p className="text-sm text-slate mt-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  {location.visitInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiteraryLocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState<LiteraryLocation | null>(null);
  const [filter, setFilter] = useState<"all" | "book" | "movie" | "both">("all");

  const filteredLocations = filter === "all" 
    ? literaryLocations 
    : literaryLocations.filter(loc => loc.type === filter);

  // Group locations into rows for inline expansion
  const groupIntoRows = (items: LiteraryLocation[], perRow: number) => {
    const rows: LiteraryLocation[][] = [];
    for (let i = 0; i < items.length; i += perRow) {
      rows.push(items.slice(i, i + perRow));
    }
    return rows;
  };

  const rows = groupIntoRows(filteredLocations, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber text-xl">✦</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-terracotta">Luoghi di Cinema e Letteratura</span>
            <span className="text-amber text-xl">✦</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-terracotta mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Books & Movies
          </h2>
          <div className="ceramic-divider max-w-xs mx-auto mb-5" />
          <p className="text-lg text-slate max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Walk the paths of The Godfather, The White Lotus, and Inspector Montalbano—<em>where fiction meets Sicily</em>
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: "all", label: "All Locations" },
            { id: "movie", label: "Cinema" },
            { id: "book", label: "Literature" },
            { id: "both", label: "Both" }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => { setFilter(f.id as typeof filter); setSelectedLocation(null); }}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all border-2 ${
                filter === f.id
                  ? "bg-terracotta text-white border-terracotta"
                  : "bg-transparent text-slate border-border hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Locations Grid with Inline Expansion */}
        <div className="space-y-4">
          {rows.map((row, rowIndex) => {
            const selectedInRow = row.find(l => l.id === selectedLocation?.id);
            return (
              <div key={rowIndex}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {row.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      isSelected={selectedLocation?.id === location.id}
                      onClick={() => setSelectedLocation(selectedLocation?.id === location.id ? null : location)}
                    />
                  ))}
                </div>
                {selectedInRow && (
                  <div className="mt-4">
                    <LocationDetail location={selectedInRow} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Notable Authors */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-teal text-center mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Essential Sicilian Reading
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-cream-dark border-l-4 border-teal">
              <h4 className="font-semibold text-foreground mb-2">Giuseppe Tomasi di Lampedusa</h4>
              <p className="text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <em>Il Gattopardo</em> — The definitive novel of Sicilian aristocracy in decline. "If we want things to stay as they are..."
              </p>
            </div>
            <div className="p-5 bg-cream-dark border-l-4 border-amber">
              <h4 className="font-semibold text-foreground mb-2">Andrea Camilleri</h4>
              <p className="text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <em>Inspector Montalbano series</em> — 30+ novels of Sicily's favorite detective. Perfect beach reading.
              </p>
            </div>
            <div className="p-5 bg-cream-dark border-l-4 border-terracotta">
              <h4 className="font-semibold text-foreground mb-2">Giovanni Verga</h4>
              <p className="text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                <em>I Malavoglia</em> — Verismo masterpiece about a fishing family's struggles against fate and the sea.
              </p>
            </div>
            <div className="p-5 bg-cream-dark border-l-4 border-teal">
              <h4 className="font-semibold text-foreground mb-2">Luigi Pirandello</h4>
              <p className="text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Nobel laureate from Agrigento. His plays explore identity and reality with Sicilian wit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
