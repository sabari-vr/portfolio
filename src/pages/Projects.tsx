import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "Secure CI/CD Pipeline Platform",
    description: "End-to-end CI/CD pipeline with integrated SAST/DAST scanning, automated security gates, and deployment to Kubernetes clusters across multiple environments.",
    tags: ["GitHub Actions", "Kubernetes", "Trivy", "SonarQube", "ArgoCD"],
    highlight: true,
  },
  {
    title: "Multi-Cloud Infrastructure with Terraform",
    description: "Infrastructure as Code solution managing resources across AWS and Azure using Terraform modules, with state management via S3 backend and drift detection.",
    tags: ["Terraform", "AWS", "Azure", "S3", "CloudWatch"],
  },
  {
    title: "Kubernetes Microservices Platform",
    description: "Containerized microservices architecture deployed on EKS with Helm charts, service mesh (Istio), and comprehensive monitoring using Prometheus & Grafana.",
    tags: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus"],
  },
  {
    title: "DevSecOps Monitoring Dashboard",
    description: "Real-time security monitoring dashboard aggregating vulnerability reports, pipeline metrics, and infrastructure health across cloud environments.",
    tags: ["React", "Node.js", "Grafana", "ElasticSearch", "AWS Lambda"],
  },
  {
    title: "Automated Compliance Framework",
    description: "Automated compliance checking tool that enforces security policies across infrastructure, container images, and application code before deployment.",
    tags: ["Python", "Open Policy Agent", "Trivy", "AWS Config", "Terraform"],
  },
  {
    title: "Full Stack E-Commerce Application",
    description: "Scalable e-commerce platform with microservices backend, containerized deployment, and automated CI/CD with rolling updates on Kubernetes.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="section-container">
        <SectionHeading title="Projects" subtitle="DevSecOps and cloud engineering projects I've built" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card hover:scale-[1.01] transition-transform group ${
                project.highlight ? "md:col-span-2 glow-primary" : ""
              }`}
            >
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  <Github size={16} /> Code
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  <ExternalLink size={16} /> Live Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
