import React from "react";
import { Calendar, MessageCircle, ArrowRight, Tag } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Spain of Hispanic Stay Hamper To Be Lasting Tradition",
    excerpt: "Explore the vibrant culture and stunning architecture of Spain. From the grand Sagrada Família to the lively streets of Barcelona.",
    date: "12 Oct, 2023",
    comments: 5,
    image: "https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&q=80",
    category: "Travel",
    featured: true,
  },
  {
    id: 2,
    title: "New York Times Square From High Above Beautiful View",
    excerpt: "Discover New York from a different perspective. The city that never sleeps is even more magical from above.",
    date: "10 Oct, 2023",
    comments: 2,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
    category: "Guide",
    featured: false,
  },
  {
    id: 3,
    title: "Building National Park Tour & Beautiful Nature View",
    excerpt: "Step into the wild and discover some of the most dramatic landscapes nature has to offer in stunning national parks.",
    date: "08 Oct, 2023",
    comments: 8,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    category: "Nature",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Travel: "bg-primary text-white",
  Guide: "bg-orange-500 text-white",
  Nature: "bg-green-500 text-white",
};

export function NewsAndArticles() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
              Our Articles
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Latest News & Articles
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all shrink-0">
            View All Articles <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-md group cursor-pointer bg-white border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="relative h-[320px] overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-5 left-5 ${categoryColors[featuredArticle.category] ?? "bg-primary text-white"} text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1`}>
                  <Tag size={11} />
                  {featuredArticle.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-primary" /> {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={15} className="text-primary" /> {featuredArticle.comments} Comments
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{featuredArticle.excerpt}</p>
                <a href="#" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {regularArticles.map((article) => (
              <div key={article.id} className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-2 left-2 ${categoryColors[article.category] ?? "bg-primary text-white"} text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                    {article.category}
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-primary" /> {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={12} className="text-primary" /> {article.comments}
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                  <a href="#" className="flex items-center gap-1 text-primary font-bold text-xs hover:gap-2 transition-all">
                    Read More <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}

            {/* Newsletter Signup Card */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h4 className="font-extrabold text-xl mb-2">Get Travel Tips & Deals</h4>
              <p className="text-blue-200 text-sm mb-4">Subscribe to our newsletter for exclusive travel offers.</p>
              <div className="flex bg-white/20 rounded-xl p-1">
                <input type="email" placeholder="Your email address..." className="bg-transparent text-white placeholder-blue-200 flex-1 px-3 py-2 outline-none text-sm" />
                <button className="bg-white text-primary font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
