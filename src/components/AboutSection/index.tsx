import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { GradientHeading } from '../ui/GradientHeading';
import TeamTree from './TeamTree';
import { teamData } from '../../data/team';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <Container>
        <GradientHeading>About AIML HUB</GradientHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg text-gray-300">
            AIML HUB is a dynamic student-led organization at JIIT dedicated to fostering innovation
            and learning in Artificial Intelligence and Machine Learning. We bring together passionate
            students to explore cutting-edge technologies, collaborate on exciting projects, and grow
            together in the field of AI/ML.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradientHeading>Our Team</GradientHeading>
          <TeamTree
            data={{
              advisors: [teamData.facultyAdvisor, teamData.seniorAdvisor],
              president: teamData.coreTeam.president,
              vicePresident: teamData.coreTeam.vicePresident,
              generalSecretary: teamData.coreTeam.generalSecretary,
              heads: {
                management: teamData.coreTeam.heads.management,
                marketing: teamData.coreTeam.heads.marketing,
                technical: teamData.coreTeam.heads.technical,
                digital: teamData.coreTeam.heads.digital
              }
            }}
          />
        </motion.div>
      </Container>
    </section>
  );
}