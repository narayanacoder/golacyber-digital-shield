import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Shield, Star, Quote, ArrowRight } from "lucide-react";

const Clients = () => {
  const clientTestimonials = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      testimonial: "golacyber.ai transformed our security posture completely. Their quantum-safe encryption and AI monitoring detected threats we never would have seen coming.",
      author: "Jennifer Martinez",
      role: "CTO",
      results: "99.9% uptime achieved, 50% reduction in security incidents"
    },
    {
      company: "MedCore Healthcare",
      industry: "Healthcare",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
      testimonial: "The AI agents they deployed automated our patient intake process, reducing processing time by 70% while maintaining HIPAA compliance.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      results: "70% faster processing, 100% compliance maintained"
    },
    {
      company: "FinSecure Banking",
      industry: "Financial Services",
      logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=100&fit=crop",
      testimonial: "Their penetration testing revealed vulnerabilities that could have cost us millions. The ongoing security monitoring gives us complete peace of mind.",
      author: "Sarah Thompson",
      role: "Chief Risk Officer",
      results: "Zero security breaches, $2M+ in potential losses prevented"
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
      testimonial: "The customer service AI agents handle 80% of our inquiries automatically, letting our team focus on complex issues and strategic growth.",
      author: "Alex Rodriguez",
      role: "Operations Director",
      results: "80% automated support, 40% cost reduction"
    },
    {
      company: "ManufacturePro",
      industry: "Manufacturing",
      logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=100&fit=crop",
      testimonial: "Their industrial security solutions protect our IoT devices and production systems. We've seen zero downtime since implementation.",
      author: "David Kim",
      role: "Plant Manager",
      results: "Zero downtime, 30% efficiency improvement"
    },
    {
      company: "EduTech Academy",
      industry: "Education",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=100&fit=crop",
      testimonial: "The automated grading and student support AI agents have revolutionized our online learning platform. Students get instant help 24/7.",
      author: "Professor Lisa Wang",
      role: "Dean of Technology",
      results: "24/7 student support, 50% faster grading"
    }
  ];

  const industries = [
    {
      icon: Building2,
      name: "Financial Services",
      description: "Banks, credit unions, and fintech companies",
      solutions: ["Fraud detection", "Compliance automation", "Risk assessment"]
    },
    {
      icon: Shield,
      name: "Healthcare",
      description: "Hospitals, clinics, and medical practices",
      solutions: ["HIPAA compliance", "Patient data protection", "Medical AI assistants"]
    },
    {
      icon: TrendingUp,
      name: "Technology",
      description: "Software companies and IT services",
      solutions: ["DevSecOps integration", "Code security scanning", "Infrastructure protection"]
    },
    {
      icon: Building2,
      name: "Manufacturing",
      description: "Industrial and production companies",
      solutions: ["IoT security", "Industrial automation", "Supply chain protection"]
    }
  ];

  const stats = [
    { value: "500+", label: "Protected Businesses" },
    { value: "99.9%", label: "Average Uptime" },
    { value: "50%", label: "Average Cost Reduction" },
    { value: "24/7", label: "Security Monitoring" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how businesses across industries have transformed their security 
            and operations with our cybersecurity and AI automation solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-cyber-blue mb-2 group-hover:glow-primary transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses who trust us with their cybersecurity and automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company}
                      className="w-12 h-6 object-contain mr-3"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.company}</h3>
                      <p className="text-xs text-muted-foreground">{testimonial.industry}</p>
                    </div>
                  </div>
                  
                  <Quote className="h-6 w-6 text-cyber-blue mb-3" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                  
                  <div className="border-t border-border/20 pt-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-cyber-blue">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-cyber-green">{testimonial.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industries We <span className="gradient-text">Protect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions tailored to the unique needs of different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <industry.icon className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-cyber-green">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-background">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Let's discuss how we can help transform your business with advanced 
            cybersecurity and AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                Get Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="cyber-outline" className="border-background text-background hover:bg-background hover:text-primary" size="xl" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;