import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">About VirtualSpace</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We are pioneers in creating immersive virtual experiences for the architecture
          and real estate industry.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To revolutionize how people experience and interact with architectural
              spaces through cutting-edge virtual tour technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Virtual Tour Creation</h3>
                <p className="text-muted-foreground">
                  Specialized in creating detailed, interactive virtual tours for
                  various architectural spaces.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">3D Visualization</h3>
                <p className="text-muted-foreground">
                  Expert team delivering high-quality 3D renderings and
                  visualizations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-medium">Innovation</span>
                <span className="text-muted-foreground">
                  Continuously pushing the boundaries of virtual tour technology
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-medium">Quality</span>
                <span className="text-muted-foreground">
                  Delivering exceptional results that exceed expectations
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-medium">Collaboration</span>
                <span className="text-muted-foreground">
                  Working closely with clients to achieve their vision
                </span>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
