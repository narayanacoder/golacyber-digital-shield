import { Link } from "react-router-dom";
import { Shield, Zap, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyber-blue" />
                <Zap className="h-4 w-4 text-cyber-green absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold gradient-text">golacyber.ai</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Advanced cybersecurity solutions and AI automation for small and medium businesses. 
              Protecting your digital future with quantum-safe security and intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-muted-foreground hover:text-cyber-blue transition-colors">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@golacyber.ai</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 golacyber.ai. All rights reserved. | 
            <Link to="/privacy" className="hover:text-cyber-blue transition-colors ml-1">
              Privacy Policy
            </Link> | 
            <Link to="/terms" className="hover:text-cyber-blue transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;