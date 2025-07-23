import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderOpen } from "lucide-react";
import { SiLaravel, SiVuedotjs, SiReact, SiAngular, SiMysql, SiMongodb, SiPostgresql, SiStripe, SiShopify, SiTwilio } from "react-icons/si";

export default function Portfolio() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Multi-Vendor E-commerce Platform",
      description: "Built a comprehensive multi-vendor marketplace with advanced analytics, payment processing, and inventory management for 500+ vendors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["E-commerce", "Laravel", "Vue.js"],
      stats: [
        { label: "Active Vendors", value: "500+" },
        { label: "Annual Revenue", value: "$2M+" },
      ],
      technologies: [SiLaravel, SiVuedotjs, SiMysql],
    },
    {
      title: "Custom ERP for Manufacturing",
      description: "Developed a Laravel-powered ERP tailored to a mid-size manufacturing company, covering inventory, vendor management, production logs, and custom reporting. Integrated with IoT sensors for real-time machine status updates.",
      image: "https://media.istockphoto.com/id/1353373648/photo/enterprise-resource-planning-or-erp-concept-businesswoman-working-at-laptop-computer-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=0p-608pPhzDWjI5xmtUv2oBTUvzKtfJkrYOwGhMFpeE=",
      tags: ["Manufacturing", "Laravel", "IoT"],
      stats: [
        { label: "Active Users", value: "10K+" },
        { label: "Projects Managed", value: "50K+" },
      ],
      technologies: [SiLaravel, SiReact, SiPostgresql],
    },
    {
      title: "Modular E-commerce Backend",
      description: "Engineered a scalable backend system with multi-storefront logic, Shopify sync, tax rules, and custom payment/shipping integrations. Optimized for high-conversion performance.",
      image: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["E-commerce", "Laravel", "Shopify"],
      stats: [
        { label: "Healthcare Providers", value: "50+" },
        { label: "Patient Records", value: "25K+" },
      ],
      technologies: [SiLaravel, SiShopify, SiStripe],
    },
    // {
    //   title: "Financial Analytics Platform",
    //   description: "Created a real-time financial analytics platform with advanced reporting, automated compliance, and multi-currency support.",
    //   image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   tags: ["FinTech", "Laravel", "Vue.js"],
    //   stats: [
    //     { label: "Transactions Processed", value: "$50M+" },
    //     { label: "Uptime", value: "99.9%" },
    //   ],
    //   technologies: [SiLaravel, SiVuedotjs, SiMongodb],
    // },
    {
      title: "Community Safety Alert System",
      description: "Developed a real-time alert system where users can trigger emergency help with one click. Sends instant notifications to nearby verified community members via SMS and in-app alerts.",
      image: "https://images.unsplash.com/photo-1649759210256-242a67703f4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Security", "Laravel", "Angular"],
      stats: [
        { label: "Communities Protected", value: "100+" },
        { label: "Emergency Alerts Sent", value: "5K+" },
      ],
      technologies: [SiLaravel, SiAngular, SiTwilio],
    }

  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "E-commerce": "bg-green-100 text-green-800",
      "SaaS": "bg-blue-100 text-blue-800",
      "Healthcare": "bg-green-100 text-green-800",
      "FinTech": "bg-yellow-100 text-yellow-800",
      "Laravel": "bg-red-100 text-red-800",
      "Vue.js": "bg-purple-100 text-purple-800",
      "React": "bg-cyan-100 text-cyan-800",
      "Angular": "bg-orange-100 text-orange-800",
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing some successful projects that demonstrate technical expertise and business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-50 border-slate-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className={getTagColor(tag)}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                {/* <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.technologies.map((TechIcon, techIndex) => (
                      <TechIcon key={techIndex} className="text-xl text-slate-600" />
                    ))}
                  </div>
                  {/* <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}