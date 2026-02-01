import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-slate text-sm leading-relaxed">
              Questions or custom requests?
              <br />
              <a 
                href="mailto:sicilyinsider.guide@gmail.com" 
                className="text-terracotta hover:underline inline-flex items-center gap-1 mt-1"
              >
                <Mail className="w-4 h-4" />
                sicilyinsider.guide@gmail.com
              </a>
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">About</h4>
            <p className="text-slate text-sm leading-relaxed">
              Curated by locals and Sicily enthusiasts
              <br />
              Updated regularly with insider knowledge
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Regions</h4>
            <p className="text-slate text-sm leading-relaxed">
              Palermo • Messina • Aeolian Islands
              <br />
              Catania • Syracuse • Baroque Towns
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-terracotta" />
            <span className="font-serif text-lg font-semibold">Sicily Insider</span>
          </div>
          <p className="text-xs text-slate">
            © 2026 Sicily Insider Guide • For private use within our network
            <br />
            Last updated January 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
