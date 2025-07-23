import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "I am extremely satisfied with Rohit's work. I hired him for my Security project on Laravel/Angular. He worked continuously until the project finished successfully. His code is clean, commented and easy to read. I will continue using Rohit for my on-going project. I highly recommend him. Thanks for an outstanding job! Very happy and definitely hire again." ,
      author: "Upwork Client",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Extremely skilled coder! Thank you!",
      author: "Upwork Client",
      position: "CTO, CloudFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5,
      text: "Rohit is a skilled freelancer and I'll be glad to work with him again. He delivered on time and made sure I was 100% satisfied.",
      author: "Upwork Client",
      position: "Product Manager, FinanceFlow",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear what clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-50 border-slate-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    {/* <div className="text-slate-600 text-sm">{testimonial.position}</div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge className="bg-green-100 text-green-800 px-6 py-3 text-base hover:bg-green-100">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="mx-2">•</span>
            <span>10+ Projects Completed</span>
          </Badge>
        </div>
      </div>
    </section>
  );
}