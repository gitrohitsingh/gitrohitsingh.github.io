import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, GraduationCap, MapPin, Coffee, Clock, Trophy, Code } from "lucide-react";

export default function About() {
  const personalInfo = [
    {
      icon: GraduationCap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Education",
      subtitle: "Computer Science, B.Tech",
    },
    {
      icon: MapPin,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "Location",
      subtitle: "Global Remote",
    },
    {
      icon: Coffee,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Work Style",
      subtitle: "Remote & Flexible",
    },
    {
      icon: Clock,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      title: "Availability",
      subtitle: "Timezone Flexible",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              About <span className="gradient-text">John Doe</span>
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              With 6+ years of Laravel development experience, I deliver fast, secure, and scalable web applications. I specialize in building robust backend systems using Laravel and integrating them seamlessly with modern frontends like Vue.js, React, and Angular.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you're starting from scratch or scaling an existing project, I can jump in quickly, write clean modular code, and deliver results that are maintainable and optimized. I'm comfortable with Agile teams, JIRA, Slack, and Git workflows, providing rapid development with long-term support and scalability planning.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <IconComponent className={`${info.iconColor} text-xl`} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{info.title}</div>
                      <div className="text-slate-600">{info.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-xl border-2 hover:border-blue-600 hover:text-blue-600">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
              alt="Professional developer portrait"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating Achievement Cards */}
            <Card className="absolute top-4 right-4 shadow-lg border-slate-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Top Rated</div>
                    <div className="text-sm text-slate-600">Upwork Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute bottom-4 left-4 shadow-lg border-slate-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">150+</div>
                    <div className="text-sm text-slate-600">Projects Delivered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}