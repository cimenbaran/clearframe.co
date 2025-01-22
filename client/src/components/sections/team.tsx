import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1644291833042-1361b57de761",
  },
  {
    name: "Michael Chen",
    role: "3D Visualization Expert",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
  },
];

export function Team() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/90 backdrop-blur-sm p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind our virtual tour solutions.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}