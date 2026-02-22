import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Cloud, Container } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/sabari-about-photo.png";
// import heroImage from "@/assets/newbigimage.png";
import Tilt from "react-parallax-tilt";

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute glass-card !p-3 glow-primary ${className}`}>
    {children}
  </div>
);

const Index = () => {
  return (
    <Layout>
      <section className="section-container min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">
              Hey, I am Sabari
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <span className="gradient-text">DevSecOps</span>
              <br />
              <span className="text-foreground">& Full Stack</span>
              <br />
              <span className="text-foreground">Engineer</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Building secure, scalable cloud-native systems with expertise in AWS, Azure,
              Kubernetes, and modern DevSecOps practices. Bridging development and operations
              with security at the core.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
              <Tilt>
                <div className="rounded-2xl bg-[radial-gradient(circle_at_center,hsla(var(--glow-primary)/0.25)_0%,transparent_55%),radial-gradient(circle_at_center,hsla(var(--glow-primary)/0%)_0%,transparent_75%),radial-gradient(circle_at_center,hsla(var(--glow-primary)/0%)_0%,transparent_95%)]">
                  <img
                    src={heroImage}
                    alt="Sabari - DevSecOps Engineer"
                    className="relative z-10 w-76 h-85 object-cover rounded-2xl border border-none"
                  />
                </div>
              </Tilt>
              {/* Floating icons */}
              <FloatingIcon className="animate-float -top-4 -right-4 z-20">
                <Shield size={20} className="text-primary" />
              </FloatingIcon>
              <FloatingIcon className="animate-float-slow -bottom-2 -right-6 z-20">
                <Cloud size={20} className="text-secondary" />
              </FloatingIcon>
              <FloatingIcon className="animate-float-delayed -left-6 top-1/3 z-20">
                <Container size={20} className="text-primary" />
              </FloatingIcon>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
