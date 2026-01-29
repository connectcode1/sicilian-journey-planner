import { Beach, Experience, Restaurant, Destination } from "@/data/destinations";
import { Waves, Compass, MapPin, Utensils, Lightbulb, Calendar, Clock } from "lucide-react";

interface DestinationDetailProps {
  destination: Destination;
}

function BeachCard({ beach }: { beach: Beach }) {
  return (
    <div className="feature-card">
      <h4 className="font-serif text-lg font-semibold text-teal mb-2">{beach.name}</h4>
      <p className="text-slate text-sm leading-relaxed">{beach.description}</p>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="feature-card border-l-terracotta">
      <h4 className="font-serif text-lg font-semibold text-terracotta mb-2">{experience.name}</h4>
      <p className="text-slate text-sm leading-relaxed">{experience.description}</p>
    </div>
  );
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="p-4 bg-cream-dark border-l-4 border-amber">
      <h4 className="font-semibold text-foreground mb-1">{restaurant.name}</h4>
      <p className="text-slate text-sm italic">{restaurant.description}</p>
    </div>
  );
}

export function DestinationDetail({ destination }: DestinationDetailProps) {
  return (
    <div className="animate-fade-in space-y-10">
      {/* Hero Content */}
      <div className="content-card">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-terracotta mb-2 mt-0">
          {destination.name}
        </h2>
        <p className="font-serif text-lg md:text-xl text-teal italic mb-6">
          {destination.tagline}
        </p>
        <div className="prose prose-slate max-w-none">
          {destination.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-slate leading-relaxed mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Insider Tip */}
      <div className="insider-quote">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-amber" />
          <span className="text-xs font-bold tracking-widest uppercase text-amber">Insider Tip</span>
        </div>
        <p className="text-slate">{destination.insiderTip}</p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-center p-6 bg-card border border-border">
          <Clock className="w-6 h-6 text-terracotta mx-auto mb-2" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate block mb-1">Recommended Stay</span>
          <span className="font-serif text-xl text-terracotta">{destination.days}</span>
        </div>
        <div className="text-center p-6 bg-card border border-border">
          <Calendar className="w-6 h-6 text-teal mx-auto mb-2" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate block mb-1">Best Time</span>
          <span className="text-teal text-sm">{destination.bestTime}</span>
        </div>
        <div className="text-center p-6 bg-card border border-border col-span-2 md:col-span-1">
          <Waves className="w-6 h-6 text-terracotta mx-auto mb-2" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate block mb-1">Beaches</span>
          <span className="font-serif text-xl text-terracotta">{destination.beaches.length}</span>
        </div>
      </div>

      <div className="ceramic-divider" />

      {/* Beaches */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Waves className="w-6 h-6 text-teal" />
          <h3 className="font-serif text-2xl font-semibold text-teal">Beaches & Coastline</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {destination.beaches.map((beach) => (
            <BeachCard key={beach.name} beach={beach} />
          ))}
        </div>
      </section>

      <div className="ceramic-divider" />

      {/* Experiences */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Compass className="w-6 h-6 text-terracotta" />
          <h3 className="font-serif text-2xl font-semibold text-terracotta">Signature Experiences</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {destination.experiences.map((exp) => (
            <ExperienceCard key={exp.name} experience={exp} />
          ))}
        </div>
      </section>

      <div className="ceramic-divider" />

      {/* Two Column: Must Visit & Restaurants */}
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-teal" />
            <h3 className="font-serif text-xl font-semibold text-teal">Must Visit</h3>
          </div>
          <ul className="space-y-3">
            {destination.mustVisit.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="number-badge text-xs flex-shrink-0">{idx + 1}</span>
                <span className="text-slate text-sm pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="w-6 h-6 text-amber" />
            <h3 className="font-serif text-xl font-semibold text-amber">Where to Eat</h3>
          </div>
          <div className="space-y-4">
            {destination.whereToEat.map((restaurant) => (
              <RestaurantCard key={restaurant.name} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
