import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, MessageSquare, Phone, Users, Send, Clock, Globe } from "lucide-react";
import { SiLinkedin, SiGithub, SiYoutube, SiWhatsapp } from "react-icons/si";
import { Twitter, Video } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      budget: "",
      projectDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Email",
      subtitle: "john.doe@example.com",
    },
    {
      icon: SiWhatsapp,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "WhatsApp",
      subtitle: "+1 (555) 123-4567",
    },
    {
      icon: Video,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Video Call",
      subtitle: "Schedule a meeting",
    },
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: SiGithub, href: "#", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: Twitter, href: "#", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: SiYoutube, href: "#", color: "bg-red-600 hover:bg-red-700" },
  ];

  const budgetOptions = [
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-slate-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell me about your project..."
                            className="bg-slate-50 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-slate-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
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
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
              <p className="text-blue-100 mb-6">I respond to all inquiries within 24 hours. For urgent projects, I'm available for immediate consultation.</p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt; 24hrs</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">7 Days</div>
                  <div className="text-blue-100 text-sm">Per Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">GMT-8</div>
                  <div className="text-blue-100 text-sm">Timezone</div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-lg border-slate-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className={`w-12 h-12 ${link.color} text-white rounded-xl flex items-center justify-center transition-colors`}
                      >
                        <IconComponent className="text-xl" />
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
