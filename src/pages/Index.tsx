
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { ArrowRight, Code, GraduationCap, Briefcase, Star, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Doctor Site",
      description: "Full stack responsive medicare-booking design built with React.js and Tailwind CSS.",
      image: "/images/doctor-site.png",
      tags: ["React", "Tailwind", "Full Stack"],
      code: "https://github.com/johnmulder8/doctor-site",
      demo: "https://doctor-site-roan.vercel.app/",
      category: "fullstack"
    },
    {
      id: 2,
      title: "AWS Serverless Auth App",
      description: "Serverless backend using AWS Lambda, API Gateway, and Cognito for secure authentication.",
      image: "/images/aws-serverless-auth-reference-app.png",
      tags: ["AWS", "Lambda", "Cognito", "API Gateway"],
      code: "https://github.com/amazon-archives/aws-serverless-auth-reference-app",
      demo: "https://reinvent.awsevents.com/",
      category: "cloud"
    },
    {
      id: 3,
      title: "GPT-3 UI",
      description: "Modern GPT-3 mobile responsive user interface built with React.js.",
      image: "/images/gpt3.png",
      tags: ["React", "OpenAI", "Frontend"],
      code: "https://github.com/johnmulder8/gpt3",
      demo: "https://williamsgelo.github.io/gpt3/",
      category: "ai"
    }
  ];

  return (
    <Layout>
      <HeroSection />

      {/* About Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'm a Senior Software Engineer with over 12 years of experience developing scalable web
              applications and cloud solutions across E-commerce, Healthcare, and SaaS industries. I
              specialize in full-stack development with React, Node.js, and .NET Core, and have
              extensive experience deploying distributed systems on AWS and Azure. My focus is on
              creating secure, high-performance applications and leveraging AI tools to enhance code
              quality and team productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Code className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Full Stack Development
              </h3>
              <p className="text-muted-foreground text-center">
                Skilled in building modern, high-performance applications using React, Node.js, and
                .NET Core with REST and GraphQL APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Cloud & DevOps
              </h3>
              <p className="text-muted-foreground text-center">
                Experienced in deploying microservices with Docker, Kubernetes, and CI/CD pipelines
                using GitHub Actions and Terraform on AWS and Azure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-lg mb-6 mx-auto">
                <Briefcase className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                AI & Automation
              </h3>
              <p className="text-muted-foreground text-center">
                Leveraging AI and automation tools like OpenAI API to streamline workflows, improve
                documentation, and enhance engineering efficiency.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Skills
            </span>
            <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              My technical toolkit covers frontend, backend, and cloud ecosystems — enabling me to design,
              build, and scale secure and high-performance software solutions.
            </p>
          </motion.div>

          {/* Updated Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: ".NET / C#", proficiency: 98 },
              { name: "Spring Boot", proficiency: 97 },
              { name: "Node.js / Express", proficiency: 90 },
              { name: "Python", proficiency: 85 },
              { name: "React.js / Next.js", proficiency: 95 },
              { name: "Angular", proficiency: 90 },
              { name: "AWS / Azure", proficiency: 90 },
              { name: "SQL / PostgreSQL", proficiency: 87 },
              { name: "TypeScript / JavaScript", proficiency: 92 },
              { name: "Docker / Kubernetes", proficiency: 84 },
              { name: "CI/CD (GitHub Actions, Jenkins)", proficiency: 86 },
              { name: "Microservices & API Design", proficiency: 89 },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/50" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A selection of my recent web development and programming projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs py-1 px-3 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-between gap-3">
                    {/* Live Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-all"
                    >
                      Live Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>

                    {/* Source Code */}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-500 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-all"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-teal-500/10 rounded-full mb-6 mx-auto">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and open to new opportunities.
              If you have a project in mind or want to collaborate, let's connect!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
