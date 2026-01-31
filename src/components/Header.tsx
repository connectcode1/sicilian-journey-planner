import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "explore", label: "Explore Regions" },
  { id: "food", label: "Sicilian Food" },
  { id: "plan", label: "Plan Your Trip" },
  { id: "tips", label: "Insider Tips" },
  { id: "community", label: "Community" },
];

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <MapPin className="w-6 h-6 text-terracotta" />
            <div>
              <span className="font-serif text-xl font-bold text-foreground">Sicily Insider</span>
              <span className="hidden sm:inline text-xs text-slate ml-2 tracking-widest uppercase">Curated Guide</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "text-terracotta border-terracotta"
                    : "text-slate border-transparent hover:text-foreground hover:border-amber"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-terracotta" />
                  <span className="font-serif text-lg font-bold">Sicily Insider</span>
                </div>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`text-left py-3 px-4 text-sm font-medium tracking-wide uppercase border-l-4 transition-all ${
                      activeTab === tab.id
                        ? "text-terracotta border-terracotta bg-cream-dark"
                        : "text-slate border-transparent hover:text-foreground hover:border-amber"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
