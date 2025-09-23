import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Bot, Lock, Search, Brain, Zap, CheckCircle, ArrowRight, Users, Clock, Award } from "lucide-react";

const Services = () => {
  const cyberSecurityServices = [
    {
      icon: Lock,
      title: "Quantum Safe Encryption",
      description: "Future-proof your data with quantum-resistant encryption algorithms that protect against emerging quantum computing threats.",
      features: ["Post-quantum cryptography", "Key rotation automation", "Compliance monitoring", "Migration planning"]
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before malicious actors do.",
      features: ["Network penetration testing", "Web application testing", "Social engineering assessment", "Detailed remediation reports"]
    },
    {
      icon: Brain,
      title: "AI Security Monitoring",
      description: "Advanced threat detection using machine learning to identify and respond to security incidents in real-time.",
      features: ["Behavioral analysis", "Anomaly detection", "Automated response", "Threat intelligence integration"]
    }
  ];

  const aiAgentServices = [
    {
      icon: Bot,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation that learns and adapts.",
      features: ["Document processing", "Data entry automation", "Workflow optimization", "Custom integrations"]
    },
    {
      icon: Users,
      title: "Customer Service Agents",
      description: "Deploy AI-powered customer service agents that provide 24/7 support and handle complex inquiries.",
      features: ["Natural language processing", "Multi-channel support", "Escalation protocols", "Performance analytics"]
    },
    {
      icon: Zap,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with AI agents that analyze and report on key metrics.",
      features: ["Automated reporting", "Predictive analytics", "Data visualization", "Real-time dashboards"]
    }
  ];

  const packages = [
    {
      name: "Starter Shield",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "Basic cyber security monitoring",
        "Monthly vulnerability scans",
        "Email security protection",
        "Basic AI threat detection",
        "Business hours support"
      ],
      popular: false
    },
    {
      name: "Business Fortress",
      price: "$2,499",
      period: "/month",
      description: "Comprehensive protection for growing businesses",
      features: [
        "Advanced cyber security suite",
        "Weekly penetration testing",
        "Quantum-safe encryption",
        "AI security monitoring",
        "2 custom AI agents",
        "24/7 SOC support",
        "Compliance assistance"
      ],
      popular: true
    },
    {
      name: "Enterprise Guardian",
      price: "Custom",
      period: "pricing",
      description: "Full-scale security and automation for large operations",
      features: [
        "Complete security transformation",
        "Continuous pen testing",
        "Advanced AI agent deployment",
        "Custom security solutions",
        "Dedicated security team",
        "Priority support",
        "Compliance management"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity and AI automation solutions designed specifically 
            for small and medium businesses.
          </p>
        </div>
      </section>

      {/* Managed Cyber Security */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-cyber-blue mx-auto mb-4 glow-primary" />
            <h2 className="text-4xl font-bold mb-4">Managed Cyber Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions that scale with your growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cyberSecurityServices.map((service, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyber-blue flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Bot className="h-16 w-16 text-cyber-green mx-auto mb-4 glow-accent" />
            <h2 className="text-4xl font-bold mb-4">AI Agents Deployment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automate your business operations with intelligent AI agents that learn and adapt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiAgentServices.map((service, index) => (
              <Card key={index} className="glass border-border/20 hover:glow-accent transition-all duration-300">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-cyber-green mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Protection Level</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible packages designed to meet the needs of businesses at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'glass border-cyber-blue glow-primary' : 'glass border-border/20'} hover:scale-105 transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyber-blue text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-cyber-blue">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyber-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.popular ? "cyber" : "cyber-outline"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Let's discuss how our services can protect and automate your business operations
          </p>
          <Button variant="glass" size="xl" asChild>
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;