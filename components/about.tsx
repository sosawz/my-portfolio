"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Briefcase, FileDown } from "lucide-react";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src="/profile.PNG"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Who am I?
            </h3>
            <p className="text-muted-foreground mb-6">
              I am an undergraduate student with a strong interest in software
              development. With a passion for coding and application
              development, I am actively learning various technologies necessary
              to become an effective software developer.
            </p>
            <p className="text-muted-foreground mb-8">
              My goal is to gain the knowledge and skills needed to create
              useful software solutions that efficiently meet user requirements.
              I am committed to continuous learning and growth in this field,
              aiming to contribute to innovative projects that make a
              difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="text-primary mr-2" size={20} />
                <span className="text-foreground">Oorawan Sukngam</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                <span className="text-foreground">Born: December 16, 2002</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-2" size={20} />
                <span className="text-foreground">
                  Location: Bangkok, Thailand
                </span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-primary mr-2" size={20} />
                <span className="text-foreground">Software Developer</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/oorawan_sukngam_cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <FileDown className="mr-2" size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
