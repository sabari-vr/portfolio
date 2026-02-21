import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-container">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project or opportunity" />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing DevSecOps strategies, cloud architecture, or collaboration opportunities.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href="mailto:sabari@example.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="glass-card !p-3 group-hover:glow-primary transition-shadow">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm">sabari@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="glass-card !p-3 group-hover:glow-primary transition-shadow">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/sabari-vr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="glass-card !p-3 group-hover:glow-primary transition-shadow">
                  <Github size={18} className="text-primary" />
                </div>
                <span className="text-sm">GitHub Profile</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="glass-card !p-3">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">India</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-4"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
