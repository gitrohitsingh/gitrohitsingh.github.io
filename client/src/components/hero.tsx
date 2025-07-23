import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, Eye } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Code className="w-4 h-4 mr-2" />
              Available for Freelance Projects
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Laravel Developer
              <span className="block gradient-text">Fast, Secure & Scalable</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              6+ years delivering fast, secure, and scalable web applications. I specialize in Laravel backends with seamless Vue.js, React, and Angular integrations. Whether starting from scratch or scaling existing projects, I deliver clean, modular code that's maintainable and optimized.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                View My Work
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">6+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional developer headshot"
              className="rounded-2xl shadow-2xl animate-float w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}