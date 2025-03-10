"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Music player Mobile Application",
      description:
        "Develop a music streaming application",
      image: "/soundhub.png",
      tags: ["Flutter", "MySQL"],
      liveLink: "#",
      githubLink: "https://github.com/sosawz/flutter_soundhub_project",
    },
    {
      title: "An IoT-Based Intelligent System for Real-Time Parking management and Automatic Billing",
      description:
        "Develop a real-time parking management system using IoT technology to enhance efficiency in parking management by providing comprehensive data to users via a website.",
      image: "/IoT.png",
      tags: ["React", "Node.js", "MySQL", "Blynk IoT"],
      liveLink: "#",
      githubLink: "https://github.com/sosawz/An-IoT-Based-Intelligent-System-for-Real-Time-Parking-management-and-Automatic-Billing",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Link href={project.liveLink} className="flex items-center text-primary hover:underline">
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Link>
                  <Link href={project.githubLink} className="flex items-center text-primary hover:underline">
                    <Github size={16} className="mr-1" />
                    Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link href="https://sosawz-projects.my.canva.site/project-presentation" target="_blank " className="inline-flex items-center text-primary hover:underline">
            View All Projects
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

