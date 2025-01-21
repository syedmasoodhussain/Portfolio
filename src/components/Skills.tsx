import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    gradient: 'from-[#FF416C] to-[#FF4B2B]',
    skills: ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: Server,
    gradient: 'from-[#00B4DB] to-[#0083B0]',
    skills: ['Java', 'Spring Boot', 'RESTful APIs', 'Node.js', 'Python']
  },
  {
    title: 'Database Management',
    icon: Database,
    gradient: 'from-[#56CCF2] to-[#2F80ED]',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-[#6441A5] to-[#2a0845]',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    gradient: 'from-[#11998e] to-[#38ef7d]',
    skills: ['Git', 'JIRA', 'Postman', 'VS Code', 'IntelliJ IDEA']
  },
  {
    title: 'Programming',
    icon: Code2,
    gradient: 'from-[#F2994A] to-[#F2C94C]',
    skills: ['OOP', 'Design Patterns', 'Microservices', 'Agile/Scrum']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#141E30] to-[#243B55]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-serif">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-xl font-bold text-white font-sans">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}