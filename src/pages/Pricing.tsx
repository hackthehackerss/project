import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Target, Award, Trophy, Book, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/Navigation';

function Pricing() {
  const { profile } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [darkMode, setDarkMode] = useState(true);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: [
        'Access to Basic Challenges',
        'Cybersecurity Fundamentals Course',
        'Community Forum Access',
        'Basic Support',
        'Limited Learning Paths',
        'Public Profile',
        'Basic Achievements'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 24.99 : 19.99,
      features: [
        'All Basic Features',
        'All Advanced Challenges',
        'All Learning Paths',
        'Priority Support',
        'Certificate of Completion',
        'Private Discord Access',
        'Team Collaboration Tools',
        'Advanced Analytics',
        'Custom Learning Paths',
        'Early Access to New Content'
      ],
      buttonText: 'Subscribe Now',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro Features',
        'Custom Learning Paths',
        'Dedicated Support Manager',
        'API Access',
        'Advanced Analytics',
        'Custom Reporting',
        'SLA Guarantee',
        'Onboarding Training',
        'Custom Integrations',
        'Volume Licensing'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Learning Paths',
      description: 'Structured courses covering incident response, threat hunting, and security operations.'
    },
    {
      icon: Target,
      title: 'Hands-on Labs',
      description: 'Practice in realistic environments with guided exercises and real-world scenarios.'
    },
    {
      icon: Trophy,
      title: 'Challenges',
      description: 'Test your skills with CTF-style challenges and earn badges for your achievements.'
    },
    {
      icon: Book,
      title: 'Comprehensive Content',
      description: 'Access a growing library of cybersecurity courses and materials.'
    },
    {
      icon: Star,
      title: 'Certifications',
      description: 'Earn industry-recognized certifications as you complete courses.'
    },
    {
      icon: Award,
      title: 'Community',
      description: 'Join a community of cybersecurity professionals and enthusiasts.'
    }
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes access to basic challenges, the Cybersecurity Fundamentals course, and community forum access. It's perfect for beginners starting their cybersecurity journey."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for annual subscriptions. Monthly subscriptions can be cancelled anytime but are not refundable for partial months."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans. All payments are processed securely through our payment processor."
    },
    {
      question: "How do I get support?",
      answer: "Basic plan users have access to community support, while Pro and Enterprise users get priority support via email and live chat."
    }
  ];

  const trustBadges = [
    { logo: '/logos/amazon.png', alt: 'Amazon' },
    { logo: '/logos/check.png', alt: 'Check' },
    { logo: '/logos/cisco.png', alt: 'Cisco' },
    { logo: '/logos/cs.png', alt: 'CS' },
    { logo: '/logos/google.png', alt: 'Google' },
    { logo: '/logos/ibm.png', alt: 'IBM' },
    { logo: '/logos/meta.png', alt: 'Meta' },
    { logo: '/logos/microsoft.png', alt: 'Microsoft' },
    { logo: '/logos/mitre.png', alt: 'MITRE' },
    { logo: '/logos/palo.png', alt: 'Palo Alto' },
  ];

  const getPaymentLink = (plan: string) => {
    if (plan === 'Enterprise') return '/contact';
    if (plan === 'Basic') return '/learning-paths';
    return `/payment?plan=${plan.toLowerCase()}&billing=${billingCycle}`;
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Learning Journey</h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Select the plan that best fits your learning goals. All plans include access to our growing library of content.
          </p>
        </div>

        {/* Trust Badges Section */}
        <div className="my-16 overflow-hidden">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading Organizations</h2>
          <div className="relative w-full h-20 overflow-hidden">
            <div className="absolute whitespace-nowrap animate-scroll">
              {trustBadges.map((badge, index) => (
                <img key={index} src={badge.logo} alt={badge.alt} className="inline-block h-12 mx-8 opacity-80 hover:opacity-100 transition-opacity" />
              ))}
              {/* Duplicate logos for seamless scrolling */}
              {trustBadges.map((badge, index) => (
                <img key={`duplicate-${index}`} src={badge.logo} alt={badge.alt} className="inline-block h-12 mx-8 opacity-80 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className={`${darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'} rounded-lg p-6 border hover:border-primary-blue transition-all`}>
              <feature.icon className={`w-8 h-8 ${darkMode ? 'text-primary-blue' : 'text-gray-900'} mb-4`} />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <span 
            className={`cursor-pointer text-lg font-semibold ${
              billingCycle === 'monthly' ? 'text-primary-blue' : (darkMode ? 'text-gray-400' : 'text-gray-600')
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </span>
          <div 
            className={`w-20 h-10 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
              billingCycle === 'annual' ? 'bg-primary-blue' : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
            }`}
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          >
            <div 
              className={`w-8 h-8 ${darkMode ? 'bg-white' : 'bg-gray-50'} rounded-full transform transition-transform duration-300 ease-in-out ${
                billingCycle === 'annual' ? 'translate-x-10' : ''
              }`}
            />
          </div>
          <span 
            className={`cursor-pointer text-lg font-semibold ${
              billingCycle === 'annual' ? 'text-primary-blue' : (darkMode ? 'text-gray-400' : 'text-gray-600')
            }`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual (Save 20%)
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'} rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary-blue scale-105 shadow-lg shadow-primary-blue/20 bg-gradient-to-b from-primary-blue/10 to-transparent' 
                  : 'hover:border-primary-blue'
              } hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary-blue text-background px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6 flex items-baseline">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={darkMode ? 'text-gray-400 ml-2' : 'text-gray-600 ml-2'}>
                      {plan.price === 0 ? 'Free forever' : `per month, billed ${billingCycle}`}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={darkMode ? 'flex items-center text-gray-300' : 'flex items-center text-gray-600'}>
                    <CheckCircle2 className={`w-5 h-5 ${darkMode ? 'text-primary-blue' : 'text-gray-900'} mr-2 flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={getPaymentLink(plan.name)}
                className={`w-full py-3 rounded-md transition-colors text-center block ${
                  plan.popular
                    ? 'bg-primary-blue text-background hover:bg-secondary-blue'
                    : 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className={`${darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'} rounded-lg p-6 border`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {expandedFaqIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {expandedFaqIndex === index && (
                  <p className={darkMode ? 'text-gray-400 mt-4' : 'text-gray-600 mt-4'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Contact */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className={darkMode ? 'text-gray-400 mb-8' : 'text-gray-600 mb-8'}>
            Contact our sales team to discuss custom requirements for your organization.
          </p>
          <Link 
            to="/contact"
            className="bg-primary-blue text-background px-8 py-3 rounded-md hover:bg-secondary-blue transition inline-block"
          >
            Contact Enterprise Sales
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-primary-dark/30 border-primary-blue/20' : 'bg-white border-gray-200'} text-white py-8 mt-16 border-t`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 HackTheHackers. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll Animation CSS */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Pricing;
