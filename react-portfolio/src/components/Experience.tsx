import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="experience-item"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Software Development Trainee</h3>
          <p>TechShiney, Greater Noida West, Uttar Pradesh</p>
          <p>07 Sep 2024 - 30 Apr 2025</p>
          <ul>
            <li>Collaborated on real-world projects integrating Salesforce and MuleSoft to streamline business operations.</li>
            <li>Customized Salesforce CRM by creating custom objects, workflows, and automated Apex triggers, and developed interactive dashboards.</li>
            <li>Designed MuleSoft APIs, performed data transformations using DataWeave, and maintained data flow integrity across systems.</li>
          </ul>
          <br />
          
          <h3>Software Development Intern</h3>
          <p>Kodnest Technologies, Bengaluru, Karnataka, India</p>
          <p>23 May 2025 - 29 Oct 2025</p>
          <ul>
            <li>Gained practical expertise during an internship at KodNest by working with Java, MySQL, and Frontend Technology, as well as performing Manual Testing.</li>
            <li>Actively contributed to live projects, demonstrating strong problem-solving skills.</li>
            <li>Learning industry standards and collaborating with technology professionals.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
