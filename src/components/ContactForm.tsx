'use client';

import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

const logo = [
    { name: "github", Icon: BsGithub, href: "https://github.com/RajTangadi" },
    { name: "twitter", Icon: BsTwitterX, href: "https://x.com/raj_tangadi" },
    { name: "instagram", Icon: BsInstagram, href: "https://www.instagram.com/raj_tangadi" },
]
  

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}` || '',
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}` || '',
        {
          from_name: form.fullName,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: 'rajtangadi950@gmail.com'
        },
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}` || '' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setForm({
        fullName: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 sm:px-4 bg-[#1F2937] py-16">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto">
        <div className="underline decoration-wavy decoration-[#22D3EE] md:flex">
          <motion.h2 
            className="text-xl font-bold text-center mb-5 text-[#FFFFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
        </div>

        <motion.div 
          className="mt-12 bg-[#374151] rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Panel */}
            <div>
            <div className="underline decoration-wavy decoration-[#22D3EE] md:flex">
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-4">Get in Touch</h3>
              </div>
              <p className="text-[#9CA3AF] mb-6">
                If you have any inquiries, please feel free to reach out.
                You can contact me via email at <br />
                <a href="mailto:rajtangadi950@gmail.com" className="text-[#22D3EE] hover:text-[#67E8F9] transition-colors">
                  rajtangadi950@gmail.com
                </a>
              </p>

              <h4 className="text-[#FFFFFF] font-semibold mb-4">Follow me</h4>
              <div className="flex gap-4">
                {logo.map(({ name, Icon, href }) => (
                  <a 
                    key={name} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-[#22D3EE] rounded-full hover:bg-[#22D3EE] hover:text-[#1F2937] transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#1F2937] text-[#FFFFFF] border border-[#4B5563] focus:outline-none focus:border-[#22D3EE] focus:border-3"
                  required
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone No"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#1F2937] text-[#FFFFFF] border border-[#4B5563] focus:outline-none focus:border-[#22D3EE] focus:border-3"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#1F2937] text-[#FFFFFF] border border-[#4B5563] focus:outline-none focus:border-[#22D3EE] focus:border-3"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded bg-[#1F2937] text-[#FFFFFF] border border-[#4B5563] focus:outline-none focus:border-[#22D3EE] focus:border-3"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#22D3EE] text-[#1F2937] font-medium py-3 rounded hover:bg-[#67E8F9] transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
