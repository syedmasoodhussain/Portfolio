import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
          
          <VerticalTimeline>
            {experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                date={item.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Briefcase />}
              >
                <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-gray-600">
                  {item.company} - {item.location}
                </h4>
                <ul className="mt-4 list-disc list-inside text-gray-600">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}

            {education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
                date={item.date}
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<GraduationCap />}
              >
                <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-gray-600">{item.location}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}