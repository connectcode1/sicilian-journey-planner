import { useState } from "react";
import { Plane, MapPin, Calendar, Users, Sparkles, Route, Lightbulb, Car, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
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

function ItineraryCard({ itinerary, onClick }: { itinerary: SuggestedItinerary; onClick: () => void }) {
  return (
    <div 
      className="feature-card cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-2">
        <Route className="w-4 h-4 text-terracotta" />
        <span className="text-xs font-bold tracking-widest uppercase text-terracotta">{itinerary.duration}</span>
      </div>
      <h4 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-terracotta transition-colors">
        {itinerary.title}
      </h4>
      <p className="text-slate text-sm mb-3">
        <strong>{itinerary.route.join(" → ")}</strong>
      </p>
      <p className="text-slate text-sm leading-relaxed">{itinerary.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {itinerary.bestFor.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs bg-cream-dark text-teal px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GeneratedItineraryView({ itinerary }: { itinerary: GeneratedItinerary }) {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Header */}
      <div className="content-card">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber" />
          <span className="text-xs font-bold tracking-widest uppercase text-amber">Your Custom Itinerary</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-terracotta mb-4">{itinerary.title}</h2>
        <p className="text-slate leading-relaxed">{itinerary.summary}</p>
      </div>

      {/* Matched suggestion if any */}
      {itinerary.matchedItinerary && (
        <div className="insider-quote">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-amber" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber">Recommended Route</span>
          </div>
          <p className="text-foreground font-semibold mb-2">{itinerary.matchedItinerary.title}</p>
          <p className="text-slate text-sm">{itinerary.matchedItinerary.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {itinerary.matchedItinerary.highlights.map((highlight, idx) => (
              <span key={idx} className="text-xs bg-card text-teal px-3 py-1 border border-border">
                ✓ {highlight}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Day by Day */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-semibold text-teal flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Day-by-Day Itinerary
        </h3>
        
        {itinerary.days.map((day) => (
          <div key={day.day} className="feature-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="number-badge">{day.day}</span>
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate block">{day.location}</span>
                <span className="font-serif text-lg text-foreground">{day.title}</span>
              </div>
            </div>
            
            <div className="space-y-3 text-sm text-slate">
              <div>
                <strong className="text-teal">Morning:</strong> {day.morning}
              </div>
              <div>
                <strong className="text-amber">Afternoon:</strong> {day.afternoon}
              </div>
              <div>
                <strong className="text-terracotta">Evening:</strong> {day.evening}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate italic">{day.insiderTip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-cream-dark border-l-4 border-teal">
          <div className="flex items-center gap-2 mb-3">
            <Car className="w-5 h-5 text-teal" />
            <span className="text-xs font-bold tracking-widest uppercase">Transportation</span>
          </div>
          <p className="text-slate text-sm">{itinerary.practicalInfo.transportation}</p>
        </div>
        
        <div className="p-6 bg-cream-dark border-l-4 border-amber">
          <div className="flex items-center gap-2 mb-3">
            <Euro className="w-5 h-5 text-amber" />
            <span className="text-xs font-bold tracking-widest uppercase">Budget</span>
          </div>
          <p className="text-slate text-sm">{itinerary.practicalInfo.budget}</p>
        </div>
      </div>

      {/* Packing List */}
      <div className="p-6 bg-card border border-border">
        <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Packing Essentials</h4>
        <div className="grid grid-cols-2 gap-2">
          {itinerary.practicalInfo.packing.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate">
              <span className="w-2 h-2 bg-terracotta rounded-full" />
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
    <section className="py-16 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-terracotta mb-4">
            Plan Your Sicily Journey
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Tell us your preferences and we'll instantly create a personalized itinerary
          </p>
        </div>

        {!generatedItinerary ? (
          <>
            {/* Trip Builder Form */}
            <div className="content-card max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Plane className="w-5 h-5 text-teal" />
                <h3 className="font-serif text-xl font-semibold text-teal">Itinerary Builder</h3>
              </div>

              <div className="space-y-8">
                {/* Duration */}
                <div className="space-y-4">
                  <Label className="text-sm font-bold tracking-widest uppercase">
                    How many days? <span className="text-terracotta font-serif text-lg ml-2">{duration}</span>
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
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-6 text-sm tracking-widest uppercase font-semibold"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate My Itinerary
                </Button>
              </div>
            </div>

            {/* Suggested Itineraries */}
            <div className="section-header mb-8">
              <h3 className="font-serif text-2xl font-semibold text-teal">Suggested Itineraries</h3>
              <p className="text-slate mt-2">Click any route to see your personalized version</p>
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
