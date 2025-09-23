import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Handshake, Zap, CheckCircle, ArrowRight } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "CyberArk",
      category: "Identity Security",
      description: "Leading provider of privileged access management solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Technology Partner"
    },
    {
      name: "Palo Alto Networks",
      category: "Network Security",
      description: "Next-generation firewall and security platform leader",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Solution Partner"
    },
    {
      name: "Microsoft",
      category: "Cloud Security",
      description: "Azure security services and enterprise solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Gold Partner"
    },
    {
      name: "IBM",
      category: "AI & Security",
      description: "Watson AI and enterprise security solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Infrastructure",
      description: "Comprehensive cloud computing platform",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Advanced Partner"
    },
    {
      name: "Splunk",
      category: "Security Analytics",
      description: "Machine data platform for security operations",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      partnership: "Solution Partner"
    }
  ];

  const partnerPrograms = [
    {
      icon: Shield,
      title: "Technology Partners",
      description: "Leading cybersecurity vendors whose solutions we integrate and deploy",
      benefits: ["Joint solution development", "Technical training", "Co-marketing opportunities"]
    },
    {
      icon: Handshake,
      title: "Channel Partners",
      description: "Resellers and system integrators who extend our reach to new markets",
      benefits: ["Sales training programs", "Marketing support", "Deal registration"]
    },
    {
      icon: Award,
      title: "Certification Partners",
      description: "Organizations that validate our expertise and maintain industry standards",
      benefits: ["Industry recognition", "Access to resources", "Continued education"]
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "SOC 2 Type II",
    "CISSP Certified Team",
    "AWS Security Specialty",
    "Microsoft Security Expert",
    "Palo Alto ACE Certified"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Strategic Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver the most advanced cybersecurity 
            and AI automation solutions to our clients.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted partnerships with industry-leading cybersecurity and technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-32 h-16 mx-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{partner.category}</p>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                  <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {partner.partnership}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Partner <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership tracks designed to create mutual success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <program.icon className="h-12 w-12 text-cyber-blue mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-cyber-blue mx-auto mb-4 glow-primary" />
            <h2 className="text-4xl font-bold mb-4">
              Industry <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team maintains the highest industry standards and certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="glass rounded-lg p-4 hover:glow-primary transition-all duration-300">
                  <Award className="h-8 w-8 text-cyber-blue mx-auto mb-2" />
                  <p className="text-sm font-semibold">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-background">
            Become Our Partner
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Join our growing ecosystem of partners and help us deliver cutting-edge 
            cybersecurity solutions to businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="cyber-outline" className="border-background text-background hover:bg-background hover:text-primary" size="xl" asChild>
              <Link to="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;