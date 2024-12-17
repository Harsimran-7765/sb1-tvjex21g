import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

interface TeamTreeProps {
  data: {
    advisors: TeamMember[];
    president: TeamMember;
    vicePresident: TeamMember;
    generalSecretary: TeamMember;
    heads: {
      management: TeamMember;
      marketing: TeamMember;
      technical: TeamMember[];
      digital: TeamMember[];
    };
  };
}

export default function TeamTree({ data }: TeamTreeProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      {/* Tree Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M50% 0 L50% 100%"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Advisors */}
        <div className="grid grid-cols-2 gap-8 mb-20">
          {data.advisors.map((advisor, index) => (
            <motion.div key={index} variants={item}>
              <TeamMemberCard member={advisor} />
            </motion.div>
          ))}
        </div>

        {/* President */}
        <motion.div variants={item} className="flex justify-center mb-20">
          <TeamMemberCard member={data.president} />
        </motion.div>

        {/* VP and Secretary */}
        <div className="grid grid-cols-2 gap-8 mb-20">
          <motion.div variants={item}>
            <TeamMemberCard member={data.vicePresident} />
          </motion.div>
          <motion.div variants={item}>
            <TeamMemberCard member={data.generalSecretary} />
          </motion.div>
        </div>

        {/* Department Heads */}
        <div className="grid grid-cols-4 gap-4">
          <motion.div variants={item}>
            <TeamMemberCard member={data.heads.management} />
          </motion.div>
          <motion.div variants={item}>
            <TeamMemberCard member={data.heads.marketing} />
          </motion.div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {data.heads.technical.map((head, index) => (
              <motion.div key={`tech-${index}`} variants={item}>
                <TeamMemberCard member={head} />
              </motion.div>
            ))}
            {data.heads.digital.map((head, index) => (
              <motion.div key={`digital-${index}`} variants={item}>
                <TeamMemberCard member={head} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/50">
      <div className="relative group">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold text-purple-400">{member.name}</h3>
      <p className="text-gray-400">{member.role}</p>
      <p className="text-sm text-gray-500">{member.email}</p>
    </Card>
  );
}