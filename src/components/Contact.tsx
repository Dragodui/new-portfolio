'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './ui/RoatingText';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Button from './ui/Button';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Состояние для индикации загрузки
  const [isSent, setIsSent] = useState(false); // Состояние для успешной отправки
  const [error, setError] = useState(''); // Состояние для ошибки

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
  
    setIsLoading(true);
    setError('');
  
    try {
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const userId = import.meta.env.VITE_PUBLIC_KEY;
        console.log(formData)
      const emailData = {
        from_name: formData.name,
        to_name: 'Aksandr Al-Ghazali',
        message: formData.message,
        reply_to: formData.email, 
        email: formData.email,
      };
  
      await emailjs.send(serviceId, templateId, emailData, userId);
  
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20" id="contact">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex gap-3 justify-between flex-col md:flex-row"
      >
        <div>
          <h2 className="text-[50px] md:text-[80px] flex gap-3 items-center">
            <p>Let`s</p>
            <RotatingText
              texts={['Contact', 'Connect', 'Chat']}
              mainClassName="px-2 sm:px-2 md:px-3 text-text overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
          <p className="text-xl">Have a question or want collaborate? Get in touch.</p>
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4">
          <Input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full"
            value={formData.name}
          />
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full"
            value={formData.email}
          />
          <TextArea
            onChange={handleChange}
            name="message"
            placeholder="Your Message"
            value={formData.message}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
          {isSent && <p className="text-green-500">Message sent successfully!</p>}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;