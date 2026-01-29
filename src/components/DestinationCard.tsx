import { Destination } from "@/data/destinations";
import { ChevronDown } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  isSelected: boolean;
  onClick: () => void;
}

export function DestinationCard({ destination, isSelected, onClick }: DestinationCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 border transition-all duration-300 ${
        isSelected
          ? "border-terracotta border-2 bg-gradient-to-br from-cream-dark to-card shadow-soft"
          : "border-border hover:border-teal hover:shadow-card"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1">
            {destination.name}
          </h3>
          <p className="text-teal italic text-sm md:text-base">{destination.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate">
            <span className="bg-cream-dark px-2 py-1">{destination.days}</span>
            <span className="bg-cream-dark px-2 py-1">{destination.beaches.length} beaches</span>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-terracotta transition-transform duration-300 ${
            isSelected ? "rotate-180" : ""
          }`} 
        />
      </div>
    </div>
  );
}
