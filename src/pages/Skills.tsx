import { motion } from "framer-motion";
import { Cloud, Container, Shield, GitBranch, Server, Code } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    color: "text-secondary",
    skills: ["AWS (EC2, S3, Lambda, ECS, EKS, CloudFormation)", "Azure (AKS, DevOps, Functions, App Service)"],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    color: "text-primary",
    skills: ["Docker", "Kubernetes", "Helm Charts", "Docker Compose", "Container Security"],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    color: "text-secondary",
    skills: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    color: "text-primary",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD", "Azure DevOps Pipelines"],
  },
  {
    icon: Shield,
    title: "Security & DevSecOps",
    color: "text-primary",
    skills: ["SAST (SonarQube, Checkmarx)", "DAST (OWASP ZAP)", "IAM & RBAC", "Vault (Secrets Management)", "Container Scanning (Trivy)"],
  },
  {
    icon: Code,
    title: "Development",
    color: "text-secondary",
    skills: ["React / TypeScript / Next.js", "Node.js / Express / NestJS", "Python / FastAPI", "PostgreSQL / MongoDB / Redis", "REST APIs / GraphQL"],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="section-container">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with daily" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card hover:scale-[1.02] transition-transform group"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={24} className={cat.color} />
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
