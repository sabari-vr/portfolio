import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    role: "Senior DevSecOps Engineer",
    company: "Cloud Solutions Inc.",
    period: "2023 – Present",
    highlights: [
      "Architected CI/CD pipelines reducing deployment time by 60%",
      "Implemented security scanning across 50+ microservices",
      "Managed Kubernetes clusters serving 2M+ daily requests",
      "Reduced infrastructure costs by 35% through optimization",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "TechStart Solutions",
    period: "2021 – 2023",
    highlights: [
      "Built Infrastructure as Code with Terraform for multi-cloud deployments",
      "Set up monitoring and alerting with Prometheus, Grafana, and PagerDuty",
      "Containerized 20+ legacy applications with Docker and Kubernetes",
      "Automated compliance checks reducing audit preparation time by 70%",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "WebCraft Studios",
    period: "2019 – 2021",
    highlights: [
      "Developed responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs and database architectures",
      "Collaborated with cross-functional teams in Agile environment",
      "Mentored junior developers and conducted code reviews",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="section-container">
        <SectionHeading title="Experience" subtitle="My professional journey and impact" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className="glass-card glow-primary">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium flex items-center gap-1.5">
                        <Briefcase size={14} /> {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
