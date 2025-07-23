import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Laptop, ShoppingCart, Settings, Wrench, Lightbulb, Ambulance } from "lucide-react";

export default function Services() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Laptop,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Web Application Development",
      description: "Custom web applications built with Laravel and modern JavaScript frameworks for optimal performance and user experience.",
      features: [
        "Full-stack development",
        "API development & integration",
        "Database design & optimization",
      ],
      price: "Starting at $75",
      period: "/hour",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: ShoppingCart,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and custom shopping experiences.",
      features: [
        "WooCommerce & Shopify",
        "Payment gateway integration",
        "Custom Laravel e-commerce",
      ],
      price: "Starting at $2,500",
      period: "/project",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Settings,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "API Development & Integration",
      description: "RESTful APIs and third-party integrations to connect your applications and streamline business processes.",
      features: [
        "RESTful API development",
        "Third-party integrations",
        "API documentation",
      ],
      price: "Starting at $65",
      period: "/hour",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: Wrench,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      title: "Maintenance & Support",
      description: "Ongoing maintenance, performance optimization, and technical support to keep your applications running smoothly.",
      features: [
        "Performance optimization",
        "Security updates",
        "Bug fixes & improvements",
      ],
      price: "$1,200",
      period: "/month",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
    {
      icon: Lightbulb,
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-100",
      title: "Technical Consulting",
      description: "Strategic technical guidance for architecture decisions, technology stack selection, and scalability planning.",
      features: [
        "Architecture planning",
        "Code reviews",
        "Performance audits",
      ],
      price: "$125",
      period: "/hour",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      icon: Ambulance,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      title: "Emergency Support",
      description: "Urgent fixes and emergency support for critical issues that need immediate attention and resolution.",
      features: [
        "24/7 emergency response",
        "Critical bug fixes",
        "Server recovery",
      ],
      price: "$150",
      period: "/hour",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From MVPs to enterprise applications, I deliver solutions that scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-slate-100">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`text-2xl ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="text-2xl font-bold text-slate-900 mb-4">
                    {service.price}
                    <span className="text-base font-normal text-slate-500">{service.period}</span>
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className={`w-full font-semibold py-3 rounded-xl transition-colors ${service.buttonColor}`}
                  >
                    Get Started
                  </Button> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}