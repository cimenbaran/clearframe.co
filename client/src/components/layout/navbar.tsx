import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <span className="font-bold text-xl">VirtualSpace</span>
          </a>
        </Link>
        <nav className="flex flex-1 items-center space-x-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </a>
            </Link>
          ))}
          <div className="ml-auto">
            <Button>Get Started</Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
