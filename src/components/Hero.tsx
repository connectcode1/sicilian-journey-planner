export function Hero() {
  return (
    <section className="hero-section animate-fade-in">
      <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-terracotta font-semibold mb-4">
        Curated Travel Guide
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
        Sicily
      </h1>
      <p className="text-lg sm:text-xl text-teal italic max-w-2xl mx-auto leading-relaxed">
        An insider's journey through the island where civilizations converge,
        <br className="hidden sm:block" />
        volcanoes shape destiny, and beauty exists in contradictions
      </p>
      
      {/* Decorative ceramic pattern */}
      <div className="mt-10 w-full max-w-md mx-auto h-1 bg-gradient-ceramic rounded-full opacity-60" />
    </section>
  );
}
