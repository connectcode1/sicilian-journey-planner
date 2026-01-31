import { useState } from "react";
import { sicilianDishes, foodCategories, sicilianFoodExpressions, SicilianDish } from "@/data/sicilianFood";
import { UtensilsCrossed, MapPin, Lightbulb, ChefHat } from "lucide-react";

function FoodCard({ dish }: { dish: SicilianDish }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`feature-card cursor-pointer transition-all duration-300 ${expanded ? 'ring-2 ring-terracotta' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="font-serif text-lg font-semibold text-terracotta">
            {dish.name}
          </h4>
          <p className="text-xs text-slate italic">{dish.italianName}</p>
        </div>
        <span className="text-2xl flex-shrink-0">
          {dish.category === 'street-food' && '🥟'}
          {dish.category === 'pasta' && '🍝'}
          {dish.category === 'seafood' && '🦐'}
          {dish.category === 'meat' && '🍖'}
          {dish.category === 'desserts' && '🍰'}
          {dish.category === 'drinks' && '🍷'}
        </span>
      </div>
      
      <p className={`text-slate text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
        {dish.description}
      </p>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-3 animate-fade-in">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-teal block">Origin</span>
              <span className="text-slate text-sm">{dish.origin}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <ChefHat className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-amber block">Key Ingredients</span>
              <span className="text-slate text-sm">{dish.ingredients.join(", ")}</span>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-terracotta block">Where to Try</span>
              <span className="text-slate text-sm">{dish.whereToTry}</span>
            </div>
          </div>
        </div>
      )}
      
      <p className="text-xs text-teal mt-3">
        {expanded ? "Click to collapse" : "Click for details"}
      </p>
    </div>
  );
}

export function SicilianFoodSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredDishes = activeCategory === "all" 
    ? sicilianDishes 
    : sicilianDishes.filter(d => d.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-amber text-xl">✦</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-terracotta">Culinary Heritage</span>
            <span className="text-amber text-xl">✦</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-terracotta mb-4">
            Sicilian Cuisine
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From Arab-influenced street food to baroque desserts—every dish tells a story of conquest, tradition, and passion
          </p>
        </div>

        {/* Sicilian Food Expressions */}
        <div className="content-card mb-12">
          <h3 className="font-serif text-xl font-semibold text-teal mb-6 flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5" />
            At the Sicilian Table
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sicilianFoodExpressions.map((expr, idx) => (
              <div key={idx} className="p-4 bg-cream-dark border-l-4 border-amber">
                <p className="font-semibold text-foreground italic">"{expr.phrase}"</p>
                <p className="text-slate text-sm mt-1">{expr.translation}</p>
                <p className="text-teal text-xs mt-2">{expr.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-terracotta text-white"
                : "bg-cream-dark text-slate hover:text-terracotta"
            }`}
          >
            All Dishes
          </button>
          {foodCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-terracotta text-white"
                  : "bg-cream-dark text-slate hover:text-terracotta"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <FoodCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Food Philosophy */}
        <div className="insider-quote mt-12">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-amber" />
            <span className="text-xs font-bold tracking-widest uppercase text-amber">The Sicilian Way</span>
          </div>
          <p className="text-slate text-lg italic font-serif">
            "In Sicily, food is never just sustenance—it's memory, identity, and love made edible. 
            Every recipe carries centuries of Arab, Greek, Spanish, and Norman influence, 
            transformed by volcanic soil, sea salt, and endless sunshine into something uniquely Sicilian."
          </p>
        </div>
      </div>
    </section>
  );
}
