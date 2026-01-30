import { useState } from "react";
import { Plane, MapPin, Calendar, Users, Sparkles, Route, Lightbulb, Car, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  generateItinerary, 
  suggestedItineraries, 
  TripPreferences, 
  GeneratedItinerary,
  SuggestedItinerary
} from "@/data/itineraries";

// Import images
import baroqueTownImg from "@/assets/sicily-baroque-town.jpg";
import etnaImg from "@/assets/etna-vineyards.jpg";
import coastImg from "@/assets/sicily-coast.jpg";

const dayImages = {
  baroque: baroqueTownImg,
  etna: etnaImg,
  coast: coastImg
};

function ItineraryCard({ itinerary, onClick }: { itinerary: SuggestedItinerary; onClick: () => void }) {
  return (
    <div 
      className="feature-card cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-3">
        <Route className="w-4 h-4 text-terracotta" />
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-terracotta">{itinerary.duration}</span>
      </div>
      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-terracotta transition-colors" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {itinerary.title}
      </h4>
      <p className="text-slate text-sm mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>
        <strong className="text-teal">{itinerary.route.join(" → ")}</strong>
      </p>
      <p className="text-slate text-sm leading-relaxed line-clamp-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{itinerary.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {itinerary.bestFor.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-cream-dark text-teal px-2 py-1" style={{ fontFamily: "'Lato', sans-serif" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GeneratedItineraryView({ itinerary }: { itinerary: GeneratedItinerary }) {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Header with decorative elements */}
      <div className="content-card text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-amber text-2xl">✦</span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber">Your Curated Journey</span>
          <span className="text-amber text-2xl">✦</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-terracotta mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {itinerary.title}
        </h2>
        <div className="ceramic-divider max-w-xs mx-auto mb-6" />
        <p className="text-slate leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
          {itinerary.summary}
        </p>
      </div>

      {/* Matched suggestion if any */}
      {itinerary.matchedItinerary && (
        <div className="insider-quote">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber">Inspired By</span>
          </div>
          <p className="text-foreground font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem' }}>
            {itinerary.matchedItinerary.title}
          </p>
          <p className="text-slate text-sm mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            {itinerary.matchedItinerary.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {itinerary.matchedItinerary.highlights.map((highlight, idx) => (
              <span key={idx} className="text-xs bg-card text-teal px-3 py-1.5 border border-border" style={{ fontFamily: "'Lato', sans-serif" }}>
                ✓ {highlight}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Day by Day with images */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-teal flex items-center justify-center gap-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            <span className="text-amber">❧</span>
            Day-by-Day Itinerary
            <span className="text-amber" style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>❧</span>
          </h3>
        </div>
        
        {itinerary.days.map((day, index) => (
          <div key={day.day} className="feature-card overflow-hidden">
            {/* Show image for certain days */}
            {day.image && (
              <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 h-48 overflow-hidden">
                <img 
                  src={dayImages[day.image]} 
                  alt={day.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 md:left-8">
                  <span className="number-badge text-lg">{day.day}</span>
                </div>
              </div>
            )}
            
            <div className={`flex items-start gap-4 mb-5 ${day.image ? '' : 'mt-0'}`}>
              {!day.image && <span className="number-badge flex-shrink-0">{day.day}</span>}
              <div className={day.image ? 'ml-0' : ''}>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-terracotta block mb-1">
                  {day.location}
                </span>
                <h4 className="text-xl text-foreground" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                  {day.title}
                </h4>
              </div>
            </div>
            
            <div className="space-y-4 text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              <div className="flex gap-3">
                <span className="text-teal font-semibold min-w-[70px]">Morning</span>
                <span className="text-slate">{day.morning}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-amber font-semibold min-w-[70px]">Afternoon</span>
                <span className="text-slate">{day.afternoon}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-terracotta font-semibold min-w-[70px]">Evening</span>
                <span className="text-slate">{day.evening}</span>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-border">
              <div className="flex items-start gap-3 bg-cream-dark p-4 -mx-2">
                <Lightbulb className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate italic" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  <span className="text-amber font-semibold not-italic">Insider tip:</span> {day.insiderTip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Info with elegant styling */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-teal" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          Practical Essentials
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-cream-dark border-l-4 border-teal">
          <div className="flex items-center gap-2 mb-3">
            <Car className="w-5 h-5 text-teal" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal">Transportation</span>
          </div>
          <p className="text-slate text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>{itinerary.practicalInfo.transportation}</p>
        </div>
        
        <div className="p-6 bg-cream-dark border-l-4 border-amber">
          <div className="flex items-center gap-2 mb-3">
            <Euro className="w-5 h-5 text-amber" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber">Budget</span>
          </div>
          <p className="text-slate text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>{itinerary.practicalInfo.budget}</p>
        </div>
      </div>

      {/* Packing List */}
      <div className="p-8 bg-card border border-border">
        <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta mb-5 text-center">Packing Essentials</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {itinerary.practicalInfo.packing.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PlanTripSection() {
  const [duration, setDuration] = useState(7);
  const [startCity, setStartCity] = useState("Palermo");
  const [travelStyle, setTravelStyle] = useState("Balanced Mix");
  const [interests, setInterests] = useState<string[]>([]);
  const [generatedItinerary, setGeneratedItinerary] = useState<GeneratedItinerary | null>(null);

  const interestOptions = [
    "Ancient ruins",
    "Baroque architecture", 
    "Beaches",
    "Islands",
    "Wine",
    "Food",
    "Hiking",
    "Photography"
  ];

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleGenerate = () => {
    const preferences: TripPreferences = {
      duration,
      startCity,
      travelStyle,
      interests
    };
    const itinerary = generateItinerary(preferences);
    setGeneratedItinerary(itinerary);
  };

  const handleSuggestedClick = (suggested: SuggestedItinerary) => {
    // Set form values based on suggested itinerary
    const durationNum = parseInt(suggested.duration.split("-")[0]) || 7;
    setDuration(durationNum);
    
    if (suggested.bestFor.includes("Food enthusiasts")) {
      setTravelStyle("Food & Wine");
    } else if (suggested.bestFor.includes("Adventure seekers")) {
      setTravelStyle("Active Adventure");
    } else if (suggested.bestFor.includes("Beach enthusiasts")) {
      setTravelStyle("Beach & Relaxation");
    } else {
      setTravelStyle("Cultural Deep Dive");
    }
    
    // Generate based on this
    const preferences: TripPreferences = {
      duration: durationNum,
      startCity: suggested.route[0]?.includes("Palermo") ? "Palermo" : "Catania",
      travelStyle,
      interests: suggested.bestFor
    };
    const itinerary = generateItinerary(preferences);
    itinerary.matchedItinerary = suggested;
    setGeneratedItinerary(itinerary);
  };

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header with baroque styling */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber text-xl">✦</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-terracotta">Curated Experiences</span>
            <span className="text-amber text-xl">✦</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-terracotta mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Plan Your Sicily Journey
          </h2>
          <div className="ceramic-divider max-w-xs mx-auto mb-5" />
          <p className="text-lg text-slate max-w-2xl mx-auto" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Tell us your preferences and we'll craft a personalized itinerary—<br className="hidden md:inline" />
            <em>each day unique, every moment considered</em>
          </p>
        </div>

        {!generatedItinerary ? (
          <>
            {/* Trip Builder Form */}
            <div className="content-card max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Plane className="w-5 h-5 text-teal" />
                <h3 className="text-xl font-semibold text-teal" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Itinerary Builder</h3>
              </div>

              <div className="space-y-8">
                {/* Duration */}
                <div className="space-y-4">
                  <Label className="text-xs font-bold tracking-[0.2em] uppercase text-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
                    How many days? <span className="text-terracotta text-xl ml-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{duration}</span>
                  </Label>
                  <Slider
                    value={[duration]}
                    onValueChange={(val) => setDuration(val[0])}
                    min={3}
                    max={14}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-slate">
                    <span>3 days</span>
                    <span>14 days</span>
                  </div>
                </div>

                {/* Start City & Style */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Starting City
                    </Label>
                    <Select value={startCity} onValueChange={setStartCity}>
                      <SelectTrigger className="border-2 border-border focus:border-terracotta">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Palermo">Palermo (Western Sicily)</SelectItem>
                        <SelectItem value="Catania">Catania (Eastern Sicily)</SelectItem>
                        <SelectItem value="Any">Flexible / Round Trip</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Travel Style
                    </Label>
                    <Select value={travelStyle} onValueChange={setTravelStyle}>
                      <SelectTrigger className="border-2 border-border focus:border-terracotta">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cultural Deep Dive">Cultural Deep Dive</SelectItem>
                        <SelectItem value="Beach & Relaxation">Beach & Relaxation</SelectItem>
                        <SelectItem value="Food & Wine">Food & Wine</SelectItem>
                        <SelectItem value="Active Adventure">Active Adventure</SelectItem>
                        <SelectItem value="Balanced Mix">Balanced Mix</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <Label className="text-sm font-bold tracking-widest uppercase">What interests you most?</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {interestOptions.map((interest) => (
                      <div
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 border-2 cursor-pointer transition-all text-center text-sm ${
                          interests.includes(interest)
                            ? "border-terracotta bg-terracotta/10 text-terracotta"
                            : "border-border hover:border-teal text-slate hover:text-foreground"
                        }`}
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate}
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-6 text-xs tracking-[0.25em] uppercase font-bold"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate My Itinerary
                </Button>
              </div>
            </div>

            {/* Suggested Itineraries */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-teal mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Suggested Itineraries
              </h3>
              <p className="text-slate" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Click any route to see your personalized version
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedItineraries.map((itinerary) => (
                <ItineraryCard 
                  key={itinerary.id} 
                  itinerary={itinerary} 
                  onClick={() => handleSuggestedClick(itinerary)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <Button 
              variant="outline" 
              onClick={() => setGeneratedItinerary(null)}
              className="mb-8 border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
            >
              ← Back to Planner
            </Button>
            <GeneratedItineraryView itinerary={generatedItinerary} />
          </>
        )}
      </div>
    </section>
  );
}
