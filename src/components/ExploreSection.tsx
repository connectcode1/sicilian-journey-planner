import { useState } from "react";
import { destinations, Destination } from "@/data/destinations";
import { DestinationCard } from "./DestinationCard";
import { DestinationDetail } from "./DestinationDetail";

// Group destinations into rows for inline expansion
function groupIntoRows(items: Destination[], itemsPerRow: number): Destination[][] {
  const rows: Destination[][] = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    rows.push(items.slice(i, i + itemsPerRow));
  }
  return rows;
}

export function ExploreSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const selectedDestination = destinations.find(d => d.id === selectedId);
  
  // Responsive grouping - 3 items per row on desktop, 2 on tablet, 1 on mobile
  // We'll use 3 for the layout logic, CSS handles responsive display
  const rows = groupIntoRows(destinations, 3);
  
  // Find which row contains the selected destination
  const selectedRowIndex = selectedId 
    ? rows.findIndex(row => row.some(d => d.id === selectedId))
    : -1;

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

        {/* Region Selector with inline expansion */}
        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Region cards row */}
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {row.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    isSelected={selectedId === destination.id}
                    onClick={() => setSelectedId(
                      selectedId === destination.id ? null : destination.id
                    )}
                  />
                ))}
              </div>
              
              {/* Detail panel appears below the row containing selected item */}
              {selectedRowIndex === rowIndex && selectedDestination && (
                <div className="mt-4 animate-fade-in">
                  <DestinationDetail destination={selectedDestination} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
