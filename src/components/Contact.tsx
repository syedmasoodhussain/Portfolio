import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_y7sd0g8',
        'template_d501tzw',
        formRef.current,
        'ZaqQcbHgC4_pvrLfn'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <motion.button
              className="px-8 py-3 bg-light-green-500 text-white rounded-md hover:bg-light-green-600 transition-all duration-300"
            >
              Let's Connect!
            </motion.button>
          </h2>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 border-2 border-gray-500 rounded-md p-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out p-3 text-lg bg-light-blue-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out p-3 text-lg bg-light-blue-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-light-blue-100 focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out p-3 text-lg"
              ></textarea>
            </div>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-5 px-8 border border-transparent rounded-lg shadow-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out font-bold text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <motion.button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                LinkedIn
              </motion.button>
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <motion.button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300">
                GitHub
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
