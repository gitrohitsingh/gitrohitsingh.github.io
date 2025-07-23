import { SiLinkedin, SiGithub } from "react-icons/si";
import { Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    { label: "Web Development", onClick: () => scrollToSection("services") },
    { label: "E-commerce Solutions", onClick: () => scrollToSection("services") },
    { label: "API Development", onClick: () => scrollToSection("services") },
    { label: "Technical Consulting", onClick: () => scrollToSection("services") },
  ];

  const quickLinks = [
    { label: "Portfolio", onClick: () => scrollToSection("portfolio") },
    { label: "About", onClick: () => scrollToSection("about") },
    { label: "Contact", onClick: () => scrollToSection("contact") },
    { label: "Blog", href: "#" },
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "#", hoverColor: "hover:bg-blue-600" },
    { icon: SiGithub, href: "#", hoverColor: "hover:bg-gray-700" },
    { icon: Twitter, href: "#", hoverColor: "hover:bg-blue-500" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold gradient-text mb-6 block"
            >
              Rohit Singh
            </button>
            <p className="text-slate-400 mb-6 max-w-md">
              Laravel Developer specializing in building fast, secure, and scalable web applications. Let's bring your ideas to life with clean, maintainable code.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`w-10 h-10 bg-slate-800 ${link.hoverColor} rounded-lg flex items-center justify-center transition-colors`}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={service.onClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Rohit Singh. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
