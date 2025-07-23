import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, Users, Send, Clock, Globe, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub, SiYoutube, SiWhatsapp } from "react-icons/si";
import { Twitter, Video } from "lucide-react";

export default function ContactStatic() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Email",
      subtitle: "your.email@example.com",
      action: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "Phone",
      subtitle: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: SiWhatsapp,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "WhatsApp",
      subtitle: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
    },
    {
      icon: Video,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Video Call",
      subtitle: "Schedule a meeting",
      action: "https://calendly.com/your-profile",
    },
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "https://linkedin.com/in/your-profile", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: SiGithub, href: "https://github.com/your-username", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: Twitter, href: "https://twitter.com/your-handle", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: SiYoutube, href: "https://youtube.com/@your-channel", color: "bg-red-600 hover:bg-red-700" },
  ];

  const budgetOptions = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Let's discuss",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `New Project Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Budget: ${formData.budget}

Project Details:
${formData.projectDetails}
    `.trim();
    
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        budget: "",
        projectDetails: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss how I can help you build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-slate-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Your email client should open with the message. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectDetails">Project Details</Label>
                    <Textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 rounded-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-slate-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Methods</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                          <IconComponent className={`${method.iconColor} text-xl`} />
                        </div>
                        <div className="flex-grow">
                          <div className="font-semibold text-slate-900">{method.title}</div>
                          <div className="text-slate-600">{method.subtitle}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-blue-100 mb-6">I respond to all inquiries within 24 hours. For urgent projects, I'm available for immediate consultation.</p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">&lt; 24hrs</div>
                    <div className="text-blue-100 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">7 Days</div>
                    <div className="text-blue-100 text-sm">Weekly Support</div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center transition-colors`}
                      >
                        <IconComponent className="text-lg text-white" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}