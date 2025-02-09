import { motion } from 'framer-motion';
import { Code2, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#2C3E50] via-[#3498DB] to-[#2980B9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white font-serif">About Me</h2>
          
          <motion.div 
            className="text-lg text-white mb-12 bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans leading-relaxed">
               FULL STACK DEVELOPER with over 4+ years of hands-on experience, specializing in the end-to-end development
               of web applications and services in the Financial and IT industry. Proficient in various technologies,
               including J2EE, Spring Boot, and modern front-end frameworks such as React.js, Angular, HTML5, CSS3,
               and JavaScript.
              of web applications and services in the Financial and IT industry. Proficient in various technologies,
              including J2EE, Spring Boot, and modern front-end frameworks such as React.js, Angular, HTML5, CSS3,
              and JavaScript.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                description: "Expert in React.js, Angular, HTML5, CSS3, and modern JavaScript",
                gradient: "from-[#FF6B6B] to-[#FF8E53]"
              },
              {
                icon: Server,
                title: "Backend Development",
                description: "Specialized in Java, Spring Boot, and RESTful APIs",
                gradient: "from-[#4ECDC4] to-[#556270]"
              },
              {
                icon: Database,
                title: "Database Management",
                description: "Proficient in MongoDB, MySQL, and PostgreSQL",
                gradient: "from-[#A8E6CF] to-[#3EECAC]"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-lg border border-white/20`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-12 h-12 text-white mr-4" />
                    <h3 className="text-xl font-bold text-white font-sans">{item.title}</h3>
                  </div>
                  <p className="text-white/90 font-light">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
