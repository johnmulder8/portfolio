import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import {
  Briefcase,
  GraduationCap,
  Code,
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Cloud,
  Settings,
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  // EDUCATION
  const education = [
    {
      institution: "Strayer University",
      degree: "Bachelor of Science (B.S.)",
      field: "Computer Science",
      duration: "May 2010 – March 2014",
      status: "Completed",
    },
  ];
  // EXPERIENCE
  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Infuse",
      duration: "September 2023 – Present",
      description:
        "Developing and maintaining enterprise-scale web applications supporting LSAC’s digital assessment and registration platform.",
      responsibilities: [
        "Designed and developed .NET and React applications for assessment workflows.",
        "Implemented RESTful APIs in Java Spring Boot and Node.js to integrate distributed services.",
        "Built and deployed microservices on AWS EKS using Docker and Kubernetes.",
        "Automated CI/CD pipelines with Jenkins and GitHub Actions, reducing release cycles by 40%.",
        "Collaborated with remote DevOps, QA, and product teams in Agile/Scrum sprints.",
        "Leveraged OpenAI API tools to automate internal documentation and code reviews.",
      ],
    },
    {
      position: "Senior Software Engineer",
      company: "Symliv",
      duration: "March 2021 – July 2023",
      description:
        "Led a remote engineering team in building scalable SaaS and e-learning solutions with microservice architectures.",
      responsibilities: [
        "Managed a team of 6 developers building a multi-tenant e-learning SaaS platform.",
        "Refactored legacy .NET monoliths to Spring Boot microservices with Docker.",
        "Developed modern frontends in React.js integrated with Node.js and Express APIs.",
        "Implemented AWS infrastructure and IaC via Terraform, reducing deployment errors by 35%.",
        "Coordinated Agile sprints and remote collaboration across time zones.",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Liberty Mutual",
      duration: "April 2020 – February 2021",
      description:
        "Built financial analytics tools and ETL pipelines for data-driven decision-making in FinTech projects.",
      responsibilities: [
        "Developed analytics systems in Python and Java processing 10M+ daily transactions.",
        "Built SQL ETL pipelines and Power BI dashboards to visualize executive metrics.",
        "Integrated automated testing and CI/CD using Jenkins and GitLab CI.",
        "Worked with data science teams to improve model deployment and monitoring.",
      ],
    },
    {
      position: "Senior Software Developer",
      company: "First Line Software",
      duration: "August 2018 – March 2020",
      description:
        "Built internal CRM and workflow automation tools to streamline operations across distributed teams.",
      responsibilities: [
        "Developed C# and ASP.NET applications to automate internal business processes.",
        "Integrated REST APIs and automated reporting pipelines with SQL Server and SSIS.",
        "Conducted code reviews and implemented unit testing frameworks.",
        "Collaborated with teams using Jira and Confluence in Agile environments.",
      ],
    },
    {
      position: "Software Engineer",
      company: "Createotech",
      duration: "March 2017 – July 2018",
      description:
        "Assisted in front-end and back-end development for web applications in Java and MySQL.",
      responsibilities: [
        "Supported senior engineers in debugging and performance optimization.",
        "Developed UI components using HTML, CSS, and JavaScript.",
        "Wrote test scripts and maintained project documentation.",
      ],
    },
    {
      position: "Backend Engineer",
      company: "SAP America",
      duration: "February 2016 – January 2017",
      description: "",
      responsibilities: [],
    },
    {
      position: "Backend Developer",
      company: "Createotech",
      duration: "March 2014 – December 2015",
      description: "",
      responsibilities: [],
    },
  ];

  // PROJECTS
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack application with user authentication, product catalog, and Stripe payments built using React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
      duration: "2023",
      type: "Full-Stack",
      accomplishments: [
        "Implemented JWT auth and secure payment flows.",
        "Deployed via AWS EC2 and CI/CD with GitHub Actions.",
      ],
    },
    {
      title: "Blockchain Explorer",
      description:
        "Web application for visualizing cryptocurrency transactions and blocks using React and Web3.js.",
      technologies: ["React", "Web3.js", "Node.js", "Blockchain"],
      duration: "2022",
      type: "Web / Blockchain",
      accomplishments: [
        "Built transaction tracking and wallet query features.",
        "Deployed to Netlify with live data via Etherscan API.",
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive developer portfolio built with React and Framer Motion to showcase skills and projects.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      duration: "2021",
      type: "Web",
      accomplishments: [
        "Integrated animations and SEO best practices.",
        "Implemented dark mode and mobile responsiveness.",
      ],
    },
  ];

  const highlights = [
    {
      title: "Full-Stack Engineer",
      description:
        "Experienced in React, Node.js, .NET Core and REST API development across SaaS and enterprise systems.",
      icon: <Code className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "Cloud & DevOps Engineer",
      description:
        "Skilled in AWS and Azure deployments, Docker, Kubernetes, and Terraform for CI/CD automation.",
      icon: <Cloud className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "System Architect",
      description:
        "Designs scalable microservice and event-driven systems with a focus on security and performance.",
      icon: <Settings className="h-8 w-8 text-brand-purple" />,
    },
    {
      title: "AI & Automation Engineer",
      description:
        "Integrates OpenAI APIs and machine learning models for intelligent automation and analysis.",
      icon: <Brain className="h-8 w-8 text-brand-purple" />,
    },
  ];

  // --- Tabs ---
  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">{h.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{h.title}</h3>
                <p className="text-muted-foreground">{h.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <SkillsSection />
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="text-lg">{edu.institution}</div>
                <div className="text-muted-foreground">{edu.field}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">{edu.duration}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="text-lg">{exp.company}</div>
              </div>
              <div className="text-sm text-muted-foreground">{exp.duration}</div>
            </div>
            <p className="text-muted-foreground mb-3">{exp.description}</p>
            <ul className="space-y-2">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2" />
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-xs bg-brand-purple/10 text-brand-purple px-2 py-1 rounded-full">
                {p.type}
              </span>
            </div>
            <p className="text-muted-foreground mb-3">{p.description}</p>
            <ul className="space-y-2 mb-3">
              {p.accomplishments.map((a, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2" />
                  <span className="text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="text-xs bg-secondary rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Journey" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Senior Software Engineer with 15+ years in scalable, cloud-based software engineering across EdTech, FinTech, and SaaS industries. Passionate about building reliable systems and mentoring teams.
              </p>
            </div>
          </motion.div>

          {/* Resume Download */}
          <div className="flex justify-center mb-12">
            <PrintableResume />
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {[
              { id: "skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
              { id: "education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
              { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
              { id: "projects", label: "Projects", icon: <Cpu className="h-5 w-5" /> },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeTab === tab.id
                    ? "bg-brand-purple text-white"
                    : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                  }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          <div className="min-h-[400px]">{tabContent[activeTab as keyof typeof tabContent]}</div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
