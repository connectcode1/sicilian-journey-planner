import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ExploreSection } from "@/components/ExploreSection";
import { PlanTripSection } from "@/components/PlanTripSection";
import { InsiderTipsSection } from "@/components/InsiderTipsSection";
import { CommunitySection } from "@/components/CommunitySection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <Hero />
      
      <main>
        {activeTab === "explore" && <ExploreSection />}
        {activeTab === "plan" && <PlanTripSection />}
        {activeTab === "tips" && <InsiderTipsSection />}
        {activeTab === "community" && <CommunitySection />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
