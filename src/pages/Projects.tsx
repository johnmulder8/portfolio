import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import {
  Bot,
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

const projects = [
  {
    id: 1,
    title: "Medicare App",
    description: "Full stack responsive medicare-booking design built with React.js and Tailwind CSS.",
    image: "/images/doctor-site.png",
    tags: ["React", "Tailwind", "Full Stack"],
    code: "https://github.com/johnmulder8/medicare-app",
    demo: "https://doctor-site-roan.vercel.app/",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Restaurant App",
    description: "Fully responsive food app design built with Next.js, Tailwind, and TypeScript.",
    image: "/images/restaurant.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    code: "https://github.com/johnmulder8/restaurant-app",
    demo: "https://restaurant-seven-murex.vercel.app/",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Best Coffee Store",
    description: "Coffee store mobile-responsive site created with HTML, CSS, and JavaScript.",
    image: "/images/coffee-store.png",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/johnmulder8/best-coffee",
    demo: "https://johnmulder8.github.io/best-coffee/",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Translator",
    description: "Article Summarizer web app built with OpenAI API, Redux, and React.",
    image: "/images/language-translator.png",
    tags: ["React", "Redux", "OpenAI API"],
    code: "https://github.com/johnmulder8/translator",
    demo: "https://johnmulder8.github.io/translator/",
    category: "ai"
  },
  {
    id: 5,
    title: "Modern Bank App",
    description: "Modern UI/UX business app built with React.js and Tailwind CSS.",
    image: "/images/mordern-bank.png",
    tags: ["React", "Tailwind", "UI/UX"],
    code: "https://github.com/johnmulder8/modern-bank-app",
    demo: "https://mordern-bank-ten.vercel.app/",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Quiz App",
    description: "Mobile-responsive multiple-choice quiz app built with React.js.",
    image: "/images/quizapp.png",
    tags: ["React", "Frontend", "Quiz"],
    code: "https://github.com/johnmulder8/quiz-app",
    demo: "https://johnmulder8.github.io/quiz-app",
    category: "fullstack"
  },
  {
    id: 7,
    title: "Magic Match Game",
    description: "Mobile responsive fun memory game built with React.js.",
    image: "/images/magic-memory.png",
    tags: ["React", "Game", "Frontend"],
    code: "https://github.com/johnmulder8/magic-match-game",
    demo: "https://johnmulder8.github.io/magic-match-game/",
    category: "fullstack"
  },
];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "fullstack":
        return MonitorSmartphone;
      case "backend":
        return Database;
      case "cloud":
        return Cpu;
      case "system":
        return Code;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };


  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full-Stack Applications" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "ai", name: "AI & Automation" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filter === category.id
                        ? "bg-brand-purple text-white"
                        : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                        }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
