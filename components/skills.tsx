"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, Server, Palette, Layers } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="text-primary" size={32} />,
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "React Native"],
    },
    {
      category: "Backend",
      icon: <Server className="text-primary" size={32} />,
      items: ["Node.js", "Express", "Hono"],
    },
    {
      category: "Database",
      icon: <Database className="text-primary" size={32} />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "NeonDB"],
    },
    {
      category: "Programming",
      icon: <Code className="text-primary" size={32} />,
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Design",
      icon: <Palette className="text-primary" size={32} />,
      items: ["Figma", "Mockitt"],
    },
    {
      category: "Other",
      icon: <Layers className="text-primary" size={32} />,
      items: ["Git", "GitHub", "Docker", "Google Cloud", "RESTful APIs"],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 text-foreground">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

