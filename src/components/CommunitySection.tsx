import { useState } from "react";
import { Star, Send, Lightbulb, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { destinations } from "@/data/destinations";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  place: string;
  location: string;
  category: string;
  rating: number;
  visitDate: string;
  review: string;
  submittedAt: Date;
}

interface Tip {
  id: string;
  name: string;
  region: string;
  category: string;
  title: string;
  content: string;
  submittedAt: Date;
}

const categories = [
  "Restaurant",
  "Hotel/Accommodation",
  "Beach",
  "Attraction",
  "Experience/Tour"
];

const tipCategories = [
  "Hidden beach",
  "Local restaurant",
  "Secret viewpoint",
  "Money-saving hack",
  "Transportation tip",
  "Cultural insight",
  "Other"
];

function ReviewCard({ review }: { review: Review }) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  
  return (
    <div className="p-6 bg-card border border-border shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground">{review.place}</h4>
          <p className="text-xs text-slate">{review.location} • {review.category}</p>
        </div>
        <span className="rating-stars text-lg">{stars}</span>
      </div>
      <p className="text-slate italic leading-relaxed mb-4">"{review.review}"</p>
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-slate">— {review.name}, visited {review.visitDate}</p>
      </div>
    </div>
  );
}

export function CommunitySection() {
  const [activeTab, setActiveTab] = useState<"review" | "tip">("review");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: "Maria G.",
      place: "Caffè Sicilia",
      location: "Syracuse & Baroque Southeast",
      category: "Restaurant",
      rating: 5,
      visitDate: "September 2025",
      review: "The granita al mandorla is life-changing. Corrado Assenza's obsession with quality is evident in every spoonful. Arrived at 8am and there was already a queue—worth every minute of waiting.",
      submittedAt: new Date()
    },
    {
      id: "2",
      name: "Thomas B.",
      place: "Stromboli Night Boat Tour",
      location: "Aeolian Islands",
      category: "Experience/Tour",
      rating: 5,
      visitDate: "July 2025",
      review: "Watching the volcano erupt from the sea at night was genuinely one of the most spectacular things I've ever witnessed. The crew knew exactly where to position the boat for best views.",
      submittedAt: new Date()
    }
  ]);

  // Review form state
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(4);
  const [visitDate, setVisitDate] = useState("");
  const [reviewText, setReviewText] = useState("");

  // Tip form state
  const [tipName, setTipName] = useState("");
  const [tipEmail, setTipEmail] = useState("");
  const [tipRegion, setTipRegion] = useState("");
  const [tipCategory, setTipCategory] = useState("");
  const [tipTitle, setTipTitle] = useState("");
  const [tipContent, setTipContent] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewName || !reviewEmail || !placeName || !reviewText) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: reviewName,
      place: placeName,
      location: location || "Sicily",
      category: category || "Attraction",
      rating,
      visitDate: visitDate || "Recently",
      review: reviewText,
      submittedAt: new Date()
    };

    setReviews(prev => [newReview, ...prev]);
    toast.success(`Thank you, ${reviewName}! Your review has been submitted.`);
    
    // Clear form
    setReviewName("");
    setReviewEmail("");
    setPlaceName("");
    setLocation("");
    setCategory("");
    setRating(4);
    setVisitDate("");
    setReviewText("");
  };

  const handleTipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!tipName || !tipEmail || !tipTitle || !tipContent) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(`Thank you, ${tipName}! Your insider tip has been submitted for review.`);
    
    // Clear form
    setTipName("");
    setTipEmail("");
    setTipRegion("");
    setTipCategory("");
    setTipTitle("");
    setTipContent("");
  };

  return (
    <section className="py-16 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-terracotta mb-4">
            Community Reviews & Tips
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Share your Sicily experience and discover insights from fellow travelers
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("review")}
            className={`px-6 py-3 text-sm font-medium tracking-widest uppercase border-2 transition-all ${
              activeTab === "review"
                ? "border-terracotta bg-terracotta text-white"
                : "border-border text-slate hover:border-terracotta hover:text-terracotta"
            }`}
          >
            <Star className="w-4 h-4 inline mr-2" />
            Write a Review
          </button>
          <button
            onClick={() => setActiveTab("tip")}
            className={`px-6 py-3 text-sm font-medium tracking-widest uppercase border-2 transition-all ${
              activeTab === "tip"
                ? "border-teal bg-teal text-white"
                : "border-border text-slate hover:border-teal hover:text-teal"
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Share a Tip
          </button>
        </div>

        {activeTab === "review" ? (
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Review Form */}
            <div className="content-card">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-xl font-semibold text-terracotta">Share Your Experience</h3>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Your name *</Label>
                    <Input 
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="Maria"
                      className="border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input 
                      type="email"
                      value={reviewEmail}
                      onChange={(e) => setReviewEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-2"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Place name *</Label>
                    <Input 
                      value={placeName}
                      onChange={(e) => setPlaceName(e.target.value)}
                      placeholder="Restaurant, hotel, beach..."
                      className="border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Region</Label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((d) => (
                          <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Rating</Label>
                    <div className="flex gap-1 pt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-2xl transition-colors ${
                            star <= rating ? "text-amber" : "text-border"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>When visited?</Label>
                    <Input 
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      placeholder="June 2025"
                      className="border-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Your review *</Label>
                  <Textarea 
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share details about your experience, what made it special, tips for future visitors..."
                    rows={4}
                    className="border-2"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-5 text-sm tracking-widest uppercase"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </Button>
              </form>
            </div>

            {/* Recent Reviews */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-semibold text-teal">Recent Reviews</h3>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        ) : (
          <div className="content-card max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-teal" />
              <h3 className="font-serif text-xl font-semibold text-teal">Share an Insider Tip</h3>
            </div>
            <p className="text-slate mb-6">Know a hidden gem or local secret? Share it with the community</p>

            <form onSubmit={handleTipSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Your name *</Label>
                  <Input 
                    value={tipName}
                    onChange={(e) => setTipName(e.target.value)}
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input 
                    type="email"
                    value={tipEmail}
                    onChange={(e) => setTipEmail(e.target.value)}
                    className="border-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Related region</Label>
                  <Select value={tipRegion} onValueChange={setTipRegion}>
                    <SelectTrigger className="border-2">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sicily</SelectItem>
                      {destinations.map((d) => (
                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tip category</Label>
                  <Select value={tipCategory} onValueChange={setTipCategory}>
                    <SelectTrigger className="border-2">
                      <SelectValue placeholder="Type of tip" />
                    </SelectTrigger>
                    <SelectContent>
                      {tipCategories.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tip title *</Label>
                <Input 
                  value={tipTitle}
                  onChange={(e) => setTipTitle(e.target.value)}
                  placeholder="e.g., 'Best cannoli in Palermo'"
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label>Your tip *</Label>
                <Textarea 
                  value={tipContent}
                  onChange={(e) => setTipContent(e.target.value)}
                  placeholder="Share the details—what makes it special, how to find it, when to go..."
                  rows={5}
                  className="border-2"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-teal hover:bg-teal-dark text-white py-5 text-sm tracking-widest uppercase"
              >
                <Send className="w-4 h-4 mr-2" />
                Share Tip
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
