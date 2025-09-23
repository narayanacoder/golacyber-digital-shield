import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Shield, Brain, Code, Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      expertise: "Cybersecurity Strategy",
      bio: "Former CISO at Fortune 500 companies with 15+ years in cybersecurity. PhD in Computer Science from MIT.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah.chen@golacyber.ai"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      bio: "AI research background from Stanford. Previously led AI initiatives at major tech companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "marcus.rodriguez@golacyber.ai"
    },
    {
      name: "Emily Watson",
      role: "Head of Security Operations",
      expertise: "Threat Detection & Response",
      bio: "Certified Ethical Hacker with experience in SOC operations and incident response.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "emily.watson@golacyber.ai"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      expertise: "Automation & Integration",
      bio: "Full-stack developer specializing in AI agent deployment and business process automation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "david.kim@golacyber.ai"
    },
    {
      name: "Lisa Thompson",
      role: "Client Success Manager",
      expertise: "Customer Relations",
      bio: "Dedicated to ensuring our clients achieve maximum value from our security and automation solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "lisa.thompson@golacyber.ai"
    },
    {
      name: "Alex Patel",
      role: "Security Architect",
      expertise: "Infrastructure Security",
      bio: "Expert in designing secure, scalable architectures for small and medium businesses.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "alex.patel@golacyber.ai"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make prioritizes the security and protection of our clients' digital assets."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "We leverage cutting-edge AI and quantum-safe technologies to stay ahead of emerging threats."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships with our clients, becoming their trusted security advisors."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Our team maintains the highest standards of technical expertise and professional development."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cybersecurity experts and AI specialists dedicated to protecting and automating 
            your business operations with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-cyber-blue/20 group-hover:border-cyber-blue transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                  <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="text-muted-foreground hover:text-cyber-blue transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-muted-foreground hover:text-cyber-blue transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <value.icon className="h-12 w-12 text-cyber-blue mx-auto group-hover:text-cyber-green transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-background">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-background/80 mb-8">
            We're always looking for talented cybersecurity experts and AI specialists 
            to join our mission of protecting businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                View Open Positions
              </Link>
            </Button>
            <Button variant="cyber-outline" className="border-background text-background hover:bg-background hover:text-primary" size="xl" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;