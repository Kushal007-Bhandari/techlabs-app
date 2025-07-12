import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Send
} from 'lucide-react';
import arCollabImg from '../assets/teens-doing-experiments-robotics-laboratory-boy-vr-headset-holding-small-drone.webp';
import globalImpactImg from '../assets/team-working-by-group-video-call-share-ideas-brainstorming-negotiating-use-video-conference.jpg';
import cloudSolutionsImg from '../assets/1902.i039.011.P.m004.c30.cloud services isometric icons-04.jpg';
import aiMlImg from '../assets/emiliano-vittoriosi-G_vWviqUCCg-unsplash.jpg';

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.53 3H21.5L14.88 10.39L22.68 21H16.08L11.23 14.73L5.77 21H1.8L8.76 13.13L1.27 3H8.08L12.47 8.67L17.53 3ZM16.37 19H18.19L7.7 4.98H5.76L16.37 19Z" />
  </svg>
);

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const slides = [
    {
      title: "Innovative Tech Solutions",
      subtitle: "Building the future with cutting-edge technology",
      image: arCollabImg
    },
    {
      title: "Expert Development Team",
      subtitle: "Experienced professionals delivering excellence",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Global Impact",
      subtitle: "Transforming businesses worldwide",
      image: globalImpactImg
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 15+ years in tech"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Technical expert specializing in scalable architectures"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Creative designer focused on user experience"
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Full-stack developer with expertise in modern frameworks"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.aakashlabs.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const serviceDescriptions: Record<string, string> = {
    'Web Development': 'We build responsive, high-performance websites and web apps.',
    'Mobile Apps': 'Custom mobile solutions for iOS and Android platforms.',
    'Cloud Solutions': 'Scalable cloud infrastructure and migration services.',
    'AI & Machine Learning': 'Intelligent automation and data-driven insights with AI.'
  };

  const serviceImages: Record<string, string> = {
    'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    'Mobile Apps': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    'Cloud Solutions': cloudSolutionsImg,
    'AI & Machine Learning': aiMlImg
  };

  const [activeService, setActiveService] = useState<string | null>(null);

  const companyDescriptions: Record<string, string> = {
    'Careers': 'For career opportunities, contact: info@aakashlabs.com',
    'Blog': 'Blog coming soon! Visit our homepage.'
  };
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TechLabs</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <Link to="/weather" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Weather API</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section id="home" className="pt-16">
        <div className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to creating innovative solutions 
              that drive business growth and enhance user experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We push the boundaries of what's possible with cutting-edge technology and creative solutions.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in everything we do, from code to customer service.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented individuals who make our vision a reality.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to discuss your project or learn more about our services.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">+977-1-4430196</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">info@aakashlabs.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">Laxmi Plaza, Putali Sadak, Kathmandu, Nepal</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                    <XIcon />
                  </a>
                  <a href="https://instagram.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com/company/aakashlabs" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">TechLabs</h3>
              <p className="text-gray-400">
                Building innovative solutions for the future of technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Machine Learning'].map(service => (
                  <li
                    key={service}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => window.innerWidth > 768 && setActiveService(service)}
                    onMouseLeave={() => window.innerWidth > 768 && setActiveService(null)}
                    onClick={() => window.innerWidth <= 768 ? setActiveService(activeService === service ? null : service) : undefined}
                    tabIndex={0}
                  >
                    <span className="hover:text-white transition-colors">{service}</span>
                    {/* Box above with icon and text */}
                    {(activeService === service) && (
                      <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50 w-64 bg-white text-gray-900 text-sm rounded-xl shadow-2xl px-6 py-4 flex flex-col items-center border border-blue-200">
                        <img src={serviceImages[service]} alt={service} className="w-20 h-20 object-cover rounded-lg mb-2" />
                        <span className="text-center font-medium">{serviceDescriptions[service]}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {['About Us', 'Our Team', 'Careers', 'Blog'].map(company => (
                  <li
                    key={company}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => window.innerWidth > 768 && (company === 'Careers' || company === 'Blog') && setActiveCompany(company)}
                    onMouseLeave={() => window.innerWidth > 768 && (company === 'Careers' || company === 'Blog') && setActiveCompany(null)}
                    onClick={() => {
                      if (company === 'About Us') {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (company === 'Our Team') {
                        document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (company === 'Careers') {
                        if (window.innerWidth <= 768) setActiveCompany(activeCompany === company ? null : company);
                      } else if (company === 'Blog') {
                        if (window.innerWidth <= 768) setActiveCompany(activeCompany === company ? null : company);
                        else window.location.href = '/';
                      }
                    }}
                    tabIndex={0}
                  >
                    <span className="hover:text-white transition-colors">{company}</span>
                    {/* Box above for Careers and Blog */}
                    {(activeCompany === company && (company === 'Careers' || company === 'Blog')) && (
                      <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50 w-64 bg-white text-gray-900 text-sm rounded-xl shadow-2xl px-6 py-4 flex flex-col items-center border border-blue-200">
                        <span className="text-center font-medium">{companyDescriptions[company]}</span>
                        {company === 'Blog' && (
                          <button onClick={() => window.location.href = '/'} className="mt-2 text-blue-600 underline text-xs">Go to Homepage</button>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center w-full">Connect</h4>
              <div className="flex justify-center w-full">
                <div className="flex space-x-4">
                  <a href="https://facebook.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <XIcon />
                  </a>
                  <a href="https://instagram.com/aakashlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com/company/aakashlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 