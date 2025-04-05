import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { FiChevronDown, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { 
  FaUserCircle, 
  FaRobot, 
  FaStar, 
  FaVideo, 
  FaFileContract, 
  FaLock,
  FaMedal,
  FaChartLine
} from 'react-icons/fa';

function LandingPage() {
  const features = [
    { icon: <FaUserCircle className="w-8 h-8" />, title: 'Personalized Freelancer Profiles', description: 'Create detailed profiles showcasing your skills and experience' },
    { icon: <FaRobot className="w-8 h-8" />, title: 'AI-Powered Job Matching', description: 'Smart algorithms to connect you with the perfect opportunities' },
    { icon: <FaStar className="w-8 h-8" />, title: 'Trust & Rating System', description: 'Transparent feedback and rating system for quality assurance' },
    { icon: <FaVideo className="w-8 h-8" />, title: 'Real-Time Chat & Video Calls', description: 'Seamless communication tools for better collaboration' },
    { icon: <FaFileContract className="w-8 h-8" />, title: 'Secure Digital Contracts', description: 'Legally binding contracts with electronic signatures' },
    { icon: <FaLock className="w-8 h-8" />, title: 'Escrow-Based Payment System', description: 'Safe and secure payment processing' },
    { icon: <FaMedal className="w-8 h-8" />, title: 'Skill Verification & Badges', description: 'Verified skills and achievements recognition' },
    { icon: <FaChartLine className="w-8 h-8" />, title: 'Project Management Dashboard', description: 'Complete suite of project management tools' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'FreelanceHub transformed my freelancing career. The AI matching system consistently connects me with ideal clients.'
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'The platforms project management tools and secure payment system make it easy to focus on what matters - the work.'
    },
    {
      name: 'Emma Williams',
      role: 'Content Writer',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: 'As a writer, I love how FreelanceHub verifies skills and maintains high quality standards. Its a game-changer!'
    }
  ];

  const faqs = [
    {
      question: 'How does the payment protection work?',
      answer: 'Our escrow system holds payment until project milestones are completed and approved, ensuring security for both parties.'
    },
    {
      question: 'What are the platform fees?',
      answer: 'We charge a competitive 5% fee on completed projects, with no hidden costs or monthly subscriptions.'
    },
    {
      question: 'How is freelancer quality maintained?',
      answer: 'Through our comprehensive verification process, skill assessments, and continuous rating system.'
    },
    {
      question: 'Can I hire teams for larger projects?',
      answer: 'Yes, FreelanceHub supports both individual freelancers and team collaboration for complex projects.'
    }
  ];

  return (
    <div className="font-['Inter'] text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-[#5C6BC0] to-[#42A5F5] text-white">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect with Top Freelancers Instantly
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              A smarter way to hire or get hired
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#5C6BC0] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Find Freelancers
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#5C6BC0] transition">
                Start Freelancing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Why FreelanceHub?</h2>
            <p className="text-gray-600 mb-6">
              The traditional freelance marketplace is plagued with unreliable payments, 
              poor job matches, and lack of quality control. These issues create 
              frustration for both clients and freelancers.
            </p>
            <p className="text-gray-600">
              FreelanceHub revolutionizes freelancing with AI-powered matching, 
              secure payment protection, and comprehensive project management tools. 
              Our platform ensures quality, security, and efficiency for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-[#5C6BC0] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#5C6BC0]">For Freelancers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#5C6BC0] text-white rounded-full flex items-center justify-center">1</div>
                  <p>Sign up and create your account</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#5C6BC0] text-white rounded-full flex items-center justify-center">2</div>
                  <p>Complete your professional profile</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#5C6BC0] text-white rounded-full flex items-center justify-center">3</div>
                  <p>Get matched with relevant projects</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#5C6BC0] text-white rounded-full flex items-center justify-center">4</div>
                  <p>Complete work and get paid securely</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#42A5F5]">For Clients</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#42A5F5] text-white rounded-full flex items-center justify-center">1</div>
                  <p>Post your project requirements</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#42A5F5] text-white rounded-full flex items-center justify-center">2</div>
                  <p>Get matched with qualified freelancers</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#42A5F5] text-white rounded-full flex items-center justify-center">3</div>
                  <p>Collaborate and track progress</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#42A5F5] text-white rounded-full flex items-center justify-center">4</div>
                  <p>Review and pay through secure escrow</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="mb-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-lg font-medium bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring">
                      <span>{faq.question}</span>
                      <FiChevronDown
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-[#5C6BC0]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FreelanceHub</h3>
              <p className="text-gray-400">
                Connecting talent with opportunity in the digital age.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: support@freelancehub.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#42A5F5] transition">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#42A5F5] transition">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#42A5F5] transition">
                  <FiInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;