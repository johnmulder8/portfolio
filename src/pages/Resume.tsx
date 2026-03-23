import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // EDUCATION
  const education = [
    {
      institution: "Strayer University",
      degree: "Bachelor of Science (B.S.)",
      field: "Computer Science",
      duration: "May 2010 – March 2014",
    },
  ];

  // EXPERIENCE
  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Infuse",
      duration: "September 2023 – Present",
    },
    {
      position: "Senior Software Engineer",
      company: "Symliv",
      duration: "March 2021 – July 2023",
    },
    {
      position: "Full Stack Developer",
      company: "Liberty Mutual",
      duration: "April 2020 – February 2021",
    },
    {
      position: "Senior Software Developer",
      company: "First Line Software",
      duration: "August 2018 – March 2020",
    },
    {
      position: "Software Engineer",
      company: "Createotech",
      duration: "March 2017 – July 2018",
    },
    {
      position: "Backend Engineer",
      company: "SAP America",
      duration: "February 2016 – January 2017",
    },
    {
      position: "Backend Developer",
      company: "Raytheon Technologies",
      duration: "March 2014 – December 2015",
    },
  ];

  // TIMELINE DATA
  const timeline = [
    ...education.map((edu) => ({
      date: edu.duration,
      title: edu.institution,
      subtitle: `${edu.degree} • ${edu.field}`,
      type: "education",
    })),
    ...experience.map((exp) => ({
      date: exp.duration,
      title: exp.company,
      subtitle: `${exp.position}`,
      type: "experience",
    })),
  ];

  const sortedTimeline = timeline.sort((a, b) => {
    const dateA = a.date.replace(/[^0-9\-]/g, "");
    const dateB = b.date.replace(/[^0-9\-]/g, "");
    return dateB.localeCompare(dateA);
  });

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
                Senior Software Engineer with 12+ years in scalable, cloud-based software engineering across E-commerce, Healthcare, and SaaS industries. Passionate about building reliable systems and mentoring teams.
              </p>
            </div>
          </motion.div>

          {/* Resume Download */}
          <div className="flex justify-center mb-12">
            <PrintableResume />
          </div>

          {/* Timeline */}
          <VerticalTimeline lineColor="#2dd4bf">
            {sortedTimeline.map((item, idx) => {
              const iconStyle = {
                background: item.type === "education" ? "#4f46e5" : "#0ea5e9",
                color: "#fff",
              };

              const icon = item.type === "education" ? <GraduationCap /> : <Briefcase />;

              return (
                <VerticalTimelineElement
                  key={`${item.title}-${item.date}-${idx}`}
                  date={item.date}
                  iconStyle={iconStyle}
                  icon={icon}
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid rgba(148, 163, 184, 0.25)",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.4)",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid rgba(15, 23, 42, 0.8)" }}
                  className="text-white"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <h4 className="text-sm text-teal-300 mt-1">{item.subtitle}</h4>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
