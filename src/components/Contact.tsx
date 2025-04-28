import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Send message to Telegram
  const sendToTelegram = async (data: FormState) => {
    // You'll need to create a Telegram bot and get your bot token
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
    
    // This should be your Telegram user ID (not username)
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
    
    // If no token or chat ID is set, don't attempt to send to Telegram
    if (!BOT_TOKEN || !CHAT_ID) {
      console.warn('Telegram bot token or chat ID not configured');
      return false;
    }
    
    const message = `
*New Contact Form Submission*
--------------------------
*Name:* ${data.name}
*Email:* ${data.email}
*Subject:* ${data.subject}
*Message:* ${data.message}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });
      
      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  // Send message via EmailJS
  const sendViaEmailJS = async (data: FormState) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'kushwaharachit80@gmail.com'
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      return response.status === 200;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  // Send message to WhatsApp with simplified greeting
  const sendToWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919934228515';
    
    const message = `Hello Rachit!

I visited your portfolio website and I'm interested in discussing a project together. Can we connect to talk about the details?

Thanks!`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Try all three methods, show success if any of them work
      const telegramSuccess = await sendToTelegram(formData);
      const emailSuccess = await sendViaEmailJS(formData);
      
      // Set overall success status
      const overallSuccess = telegramSuccess || emailSuccess;
      
      if (overallSuccess) {
        setSubmitSuccess(true);
        setSubmitMessage('Thanks for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Optional: Also open WhatsApp link after successful form submission
        // sendToWhatsApp(formData);
      } else {
        throw new Error("All communication methods failed");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
      setSubmitMessage('Something went wrong. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href="mailto:kushwaharachit80@gmail.com" className="hover:text-accent-cyan transition-colors">
                      kushwaharachit80@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a href="tel:+919934228515" className="hover:text-accent-cyan transition-colors">
                      +91 9934228515
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <span>Meerut, UP, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <SocialLinks className="justify-start" iconSize={24} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Telegram</h3>
              <a href="https://t.me/beyondrachit" 
                 className="flex items-center space-x-3 text-accent-cyan hover:underline" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <span>@beyondrachit</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-secondary rounded-2xl p-8"
          >
            {submitSuccess !== null && (
              <div className={`mb-6 p-4 rounded ${submitSuccess ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                {submitMessage}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors`}
                    placeholder="Your name"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors`}
                    placeholder="your@email.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-primary border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors`}
                  placeholder="What's this about?"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-accent-orange">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full bg-primary border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors`}
                  placeholder="Tell me about your project..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                aria-busy={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </motion.button>

              <motion.div variants={itemVariants} className="mt-4">
                <div className="flex justify-center">
                  <span className="text-gray-400 text-sm">- OR -</span>
                </div>
                <button
                  type="button"
                  onClick={() => sendToWhatsApp()}  // Remove formData parameter
                  className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact via WhatsApp
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;