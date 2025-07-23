import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { SiLaravel, SiVuedotjs, SiDocker, SiWordpress, SiShopify } from "react-icons/si";
import { Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: SiLaravel,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      skills: ["Laravel", "Symfony", "CodeIgniter", "CakePHP", "Core PHP"],
    },
    {
      title: "Frontend",
      icon: SiVuedotjs,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      skills: ["Vue.js", "React.js", "Angular", "TailwindCSS", "jQuery"],
    },
    {
      title: "Database",
      icon: Database,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      skills: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      icon: SiDocker,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      skills: ["Git (GitHub/Bitbucket/GitLab)", "Docker", "Forge", "Envoyer"],
    },
  ];

  const additionalSkills = [
    {
      icon: SiWordpress,
      title: "CMS & E-commerce",
      subtitle: "WordPress, WooCommerce, Shopify",
    },
    {
      icon: "💳",
      title: "Payment Gateways",
      subtitle: "Stripe, PayPal, Razorpay, CC Avenue, EBS",
    },
    {
      icon: "🖥️",
      title: "Server Management",
      subtitle: "Linux (Ubuntu, CentOS), Redis, Queues",
    },
    {
      icon: "⚡",
      title: "Others",
      subtitle: "Webhooks, Cron Jobs, JIRA, Slack",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Complete technology stack expertise for building robust, scalable web applications with modern frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-slate-50 border-slate-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`text-2xl ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-slate-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">What I Offer</h3>
            <p className="text-blue-100">Rapid development • Long-term support • Collaborative & communicative • Timezone-flexible</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="text-center">
                {typeof skill.icon === "string" ? (
                  <div className="text-3xl mb-3">{skill.icon}</div>
                ) : (
                  <skill.icon className="text-3xl mb-3 mx-auto" />
                )}
                <div className="font-semibold">{skill.title}</div>
                <div className="text-blue-100 text-sm">{skill.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
