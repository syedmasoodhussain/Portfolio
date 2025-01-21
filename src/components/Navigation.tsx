import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  fontSize: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', fontSize: 'text-2xl' }, // Updated to text-2xl
  { id: 'about', label: 'About Me', fontSize: 'text-2xl' }, // Updated to text-2xl
  { id: 'skills', label: 'Skills', fontSize: 'text-2xl' }, // Updated to text-2xl
  { id: 'timeline', label: 'Experience', fontSize: 'text-2xl' }, // Updated to text-2xl
  { id: 'projects', label: 'Projects', fontSize: 'text-2xl' }, // Updated to text-2xl
  { id: 'contact', label: 'Contact', fontSize: 'text-2xl' } // Updated to text-2xl
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${item.fontSize} text-slate-300 hover:text-teal-400 font-mono relative px-4 py-2`} // Dynamically apply fontSize
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-teal-400 mr-1">0{index + 1}.</span>
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                initial={{ scaleX: 0 }}
                whileHover={{ 
                  scaleX: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}