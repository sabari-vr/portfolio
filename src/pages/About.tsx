import { motion } from "framer-motion";
import { Download, Award, Target, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/sabari-photo.png";
import Tilt from "react-parallax-tilt";

const strengths = [
  { icon: Target, title: "Cloud Architecture", desc: "Designing resilient, scalable infrastructure on AWS & Azure" },
  { icon: Zap, title: "CI/CD Automation", desc: "Streamlining delivery pipelines with GitHub Actions & Jenkins" },
  { icon: Award, title: "Security-First", desc: "Integrating SAST, DAST, and compliance into every stage" },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Certified Kubernetes Administrator (CKA)",
  "Azure DevOps Engineer Expert",
  "HashiCorp Terraform Associate",
];

const About = () => {
  return (
    <Layout>
      <section className="section-container">
        <SectionHeading title="About Me" subtitle="My journey from Developer to DevSecOps Engineer" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Tilt>
              <img
                src={heroImage}
                alt="Sabari"
                className="w-72 h-80 object-cover rounded-2xl border border-border/30 glow-primary"
              />
            </Tilt>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a DevSecOps & Full Stack Engineer with a passion for building secure, cloud-native
              applications. My journey began as a full-stack developer, where I built web applications
              and APIs. Over time, I transitioned into cloud engineering and DevSecOps, combining my
              development expertise with infrastructure automation, container orchestration, and
              security best practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in designing CI/CD pipelines, managing Kubernetes clusters,
              implementing Infrastructure as Code with Terraform, and embedding security into every
              stage of the software development lifecycle.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              <Download size={18} /> Download Resume
            </button>
          </motion.div>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glow-primary hover:scale-[1.02] transition-transform"
            >
              <s.icon size={28} className="text-primary mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span key={cert} className="tech-badge text-sm">
                <Award size={14} className="inline mr-1.5 -mt-0.5" />
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
