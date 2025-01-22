import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">ClearFrame</h3>
            <p className="text-sm text-muted-foreground">
              Creating immersive virtual experiences for real estate and architecture.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio">
                  <a className="text-sm text-muted-foreground hover:text-foreground">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Virtual Tours</li>
              <li className="text-sm text-muted-foreground">3D Modeling</li>
              <li className="text-sm text-muted-foreground">AR/VR Solutions</li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">info@clearframe.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 ClearFrame. All rights reserved.
        </div>
      </div>
    </footer>
  );
}