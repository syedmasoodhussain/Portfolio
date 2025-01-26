import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(process.env.VITE_EMAILJS_SERVICE_ID as string, process.env.VITE_EMAILJS_TEMPLATE_ID as string, formData, process.env.VITE_EMAILJS_PUBLIC_KEY as string)
      .then((response: any) => {
        console.log('Message sent successfully!', response.status, response.text);
      })
      .catch((error: any) => {
        console.error('Failed to send message:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
