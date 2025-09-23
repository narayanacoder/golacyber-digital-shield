import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Bot, Zap, Lock, Search, Brain, ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-cyber-bg.jpg";
import cyberServices from "@/assets/cyber-services.jpg";
import aiAgents from "@/assets/ai-agents.jpg";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Managed Cyber Security",
      description: "Comprehensive protection with Quantum Safe encryption, penetration testing, and AI-powered security monitoring.",
      features: ["Quantum Safe Encryption", "Penetration Testing", "AI Security Monitoring", "24/7 SOC"],
      image: cyberServices,
      color: "cyber-blue"
    },
    {
      icon: Bot,
      title: "AI Agents Deployment",
      description: "Intelligent automation solutions that transform your business operations and boost productivity.",
      features: ["Process Automation", "Intelligent Workflows", "Custom AI Solutions", "Business Integration"],
      image: aiAgents,
      color: "cyber-green"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500+", label: "Protected Businesses" },
    { value: "24/7", label: "Security Monitoring" },
    { value: "< 1min", label: "Threat Response" }
  ];

  const benefits = [
    "Enterprise-grade security for SMBs",
    "Cost-effective managed solutions",
    "AI-powered threat detection",
    "Compliance & regulatory support",
    "Scalable automation platform",
    "Expert 24/7 support team"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center cyber-grid"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 16, 25, 0.7), rgba(12, 16, 25, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Secure Your{" "}
              <span className="gradient-text">Digital Future</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced cybersecurity solutions and AI automation for small and medium businesses.
              Protect, automate, and scale with quantum-safe technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="cyber-outline" size="xl" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute bottom-20 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="glass rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl font-bold text-cyber-blue">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity and AI automation solutions tailored for growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass border-border/20 overflow-hidden group hover:glow-primary transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className={`h-12 w-12 text-${service.color} glow-primary`} />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 text-${service.color}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="cyber-outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">golacyber.ai</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand the unique challenges facing small and medium businesses in today's 
                digital landscape. Our solutions are designed to be powerful yet accessible.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="cyber" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Security Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 animate-float">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-cyber-blue mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground">Protection</div>
                  </div>
                  <div className="text-center">
                    <Lock className="h-8 w-8 text-cyber-green mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground">Encryption</div>
                  </div>
                  <div className="text-center">
                    <Brain className="h-8 w-8 text-cyber-purple mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground">AI Powered</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Real-time Security Dashboard</div>
                  <div className="text-sm text-muted-foreground">
                    Monitor your security status 24/7 with our advanced AI-powered platform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-background">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Get a free security assessment and discover how we can protect and automate your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="cyber-outline" size="xl" className="border-background text-background hover:bg-background hover:text-primary" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;