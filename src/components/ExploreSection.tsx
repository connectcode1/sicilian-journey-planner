import { useState } from "react";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "./DestinationCard";
import { DestinationDetail } from "./DestinationDetail";

export function ExploreSection() {
  const [selectedId, setSelectedId] = useState<string>("palermo");
  
  const selectedDestination = destinations.find(d => d.id === selectedId);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-terracotta mb-4">
            Discover Sicily by Region
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From baroque towns to volcanic landscapes, each region tells its own story
          </p>
        </div>

        {/* Region Selector */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isSelected={selectedId === destination.id}
              onClick={() => setSelectedId(destination.id)}
            />
          ))}
        </div>

        {/* Selected Region Detail */}
        {selectedDestination && (
          <DestinationDetail destination={selectedDestination} />
        )}
      </div>
    </section>
  );
}
