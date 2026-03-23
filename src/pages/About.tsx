import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated skills aligned with resume
  const skills = [
    { name: "React.js / Next.js", level: "Advanced" },
    { name: "Node.js / Express", level: "Advanced" },
    { name: ".NET Core / C#", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "TypeScript / JavaScript", level: "Advanced" },
    { name: "AWS / Azure", level: "Advanced" },
    { name: "SQL / PostgreSQL", level: "Advanced" },
    { name: "Docker / Kubernetes", level: "Intermediate" },
    { name: "CI/CD (GitHub Actions, Jenkins)", level: "Intermediate" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm a Senior Software Engineer with over 12 years of experience designing,
                developing, and deploying secure, scalable web applications across EdTech, FinTech,
                and SaaS industries.
              </p>
            </div>
          </motion.div>

          {/* Profile and Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.15)" }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="relative w-full rounded-lg mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-blue-500/20"></div>
                  <img
                    src="/uploads/me.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <motion.span
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >
                    John Mulder
                  </motion.span>, a Senior Software Engineer based in Pennsylvania, USA. I specialize in
                  full-stack development using <strong>React, Node.js, .NET Core, and Python</strong>,
                  and have extensive experience deploying distributed systems in <strong>AWS</strong> and <strong>Azure</strong>.
                </p>
                <p>
                  My career has spanned over 12 years across EdTech, FinTech, and SaaS industries.
                  I’ve contributed to modernizing large-scale legacy systems, building microservices
                  from the ground up, and leading engineering teams through cloud migrations and
                  CI/CD automation.
                </p>
                <p>
                  I’m passionate about designing high-performance systems that balance scalability,
                  maintainability, and user experience — and I enjoy mentoring developers and
                  optimizing processes using AI-assisted tools.
                </p>
                <p>
                  Outside of work, I explore new technologies, contribute to open-source projects,
                  and continuously learn about distributed systems and software architecture.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A combination of technical expertise and architectural design experience across
                multiple stacks, frameworks, and cloud ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5,
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3
                    className="font-semibold mb-2"
                    whileHover={{ color: "#9b87f5" }}
                  >
                    {skill.name}
                  </motion.h3>
                  <span
                    className={`text-xs py-1 px-3 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-brand-purple/20 text-brand-purple"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* More About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interests */}
              <InfoCard icon={User} title="Professional Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Cloud-native application design",
                    "Building scalable distributed systems",
                    "Microservices & event-driven architecture",
                    "AI-assisted development & automation",
                  ].map((interest, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Heart className="h-4 w-4 text-brand-purple mr-2" />
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              {/* Philosophy */}
              <InfoCard icon={Code} title="Engineering Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Clean, maintainable, and testable code",
                    "Focus on performance and scalability",
                    "Collaboration-driven development",
                    "Continuous improvement & DevOps culture",
                  ].map((philosophy, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                      {philosophy}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              {/* Education */}
              <InfoCard icon={GraduationCap} title="Education & Growth">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "B.S. in Computer Science — Kennesaw University",
                    "Advanced coursework in software design & architecture",
                    "Hands-on experience with cloud and distributed systems",
                    "Lifelong learner in AI, DevOps, and system scaling",
                  ].map((journey, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                      {journey}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              {/* Future Goals */}
              <InfoCard icon={BookOpen} title="Future Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Lead large-scale cloud modernization initiatives",
                    "Advance AI integration into DevOps pipelines",
                    "Mentor the next generation of engineers",
                    "Contribute to impactful open-source projects",
                  ].map((goal, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
