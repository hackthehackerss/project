import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Award, Trophy, Star, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

function Home() {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [darkMode, setDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleGetStarted = (plan: string) => {
    if (profile) {
      navigate(`/payment?plan=${plan.toLowerCase()}&billing=${billingCycle}`);
    } else {
      navigate('/signup');
    }
  };

  // Pricing plans data
  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: [
        'Access to Basic Challenges',
        'Cybersecurity Fundamentals Course',
        'Community Forum Access',
        'Basic Support'
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
        'Private Discord Access'
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
        'Custom Reporting'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <div className={`relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 ${darkMode ? 'bg-gradient-to-b from-primary-dark to-background' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        {/* Main Text */}
        <div className="mb-12 reveal-scale">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Your Cybersecurity Journey
            <br />
            <span className={`${darkMode ? 'text-primary-blue' : 'text-black'}`}>Starts Here</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-semibold mb-8 tracking-wide">
            Hands-On Training for Real-World Threats
          </h2>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {profile ? (
              <Link 
                to="/learning-paths"
                className={`${darkMode ? 'bg-primary-blue' : 'bg-black'} text-white px-8 py-3 rounded-lg ${darkMode ? 'hover:bg-secondary-blue' : 'hover:bg-gray-800'} transition-all transform hover:scale-105 min-w-[200px] font-semibold`}
              >
                Continue Learning
              </Link>
            ) : (
              <>
                <Link 
                  to="/signup"
                  className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-secondary-red transition-all transform hover:scale-105 min-w-[200px] font-semibold"
                >
                  Start Learning Now
                </Link>
                <Link 
                  to="/signin"
                  className={`${darkMode ? 'bg-primary-blue/10 text-primary-blue' : 'bg-black/10 text-black'} px-8 py-3 rounded-lg ${darkMode ? 'hover:bg-primary-blue/20' : 'hover:bg-black/20'} transition-all min-w-[200px] font-semibold border ${darkMode ? 'border-primary-blue/20' : 'border-black/20'}`}
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

{/* Main Image with Link */}
<Link 
  to="/learning-paths" 
  className="mb-16 reveal transform hover:scale-105 transition-transform duration-300 relative w-3/4 md:w-2/3 lg:w-1/2" // Increased width
>
  {/* Glowing Border */}
  <div className={`absolute inset-0 border-4 ${darkMode ? 'border-primary-blue' : 'border-black'} rounded-lg z-0 animate-glow-blue-red`}></div>
  
  {/* Image Container */}
  <div className={`relative z-10 p-2 border-4 ${darkMode ? 'border-primary-blue/30' : 'border-black/30'} rounded-lg overflow-hidden`}>
    <img 
      src="/Main/choose-path.png" 
      alt="Choose Your Path" 
      className="w-full h-auto rounded-lg shadow-lg animate-float object-contain" // object-contain ensures the image fits
    />
  </div>
</Link>
      </div>

      {/* New Section: Get Hands-On Experience */}
      <div className="text-center mb-24 reveal">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-primary-blue via-primary-red to-primary-blue' : 'from-black via-primary-red to-black'} bg-clip-text text-transparent animate-gradient`}>
          Get Hands-On Experience with Challenges & Labs!
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <span className={`${darkMode ? 'text-primary-blue' : 'text-black'}`}>📈</span>
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Compete on the Leaderboard</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-primary-red">🏆</span>
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Earn Badges</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`${darkMode ? 'text-primary-blue' : 'text-black'}`}>🚀</span>
            <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Advance Your Cybersecurity Career</span>
          </div>
        </div>
        <div className="mt-8">
          {profile ? (
            <Link 
              to="/challenges"
              className={`${darkMode ? 'bg-primary-blue' : 'bg-black'} text-white px-8 py-3 rounded-lg ${darkMode ? 'hover:bg-secondary-blue' : 'hover:bg-gray-800'} transition-all transform hover:scale-105 min-w-[200px] font-semibold`}
            >
              Explore Challenges
            </Link>
          ) : (
            <Link 
              to="/signup"
              className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-secondary-red transition-all transform hover:scale-105 min-w-[200px] font-semibold"
            >
              Get Started Today
            </Link>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className={`${darkMode ? 'bg-primary-dark/50' : 'bg-gray-100'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`text-center p-6 rounded-lg border ${darkMode ? 'border-primary-blue/20' : 'border-black/20'} hover:${darkMode ? 'border-primary-blue' : 'border-black'} transition reveal-left`}>
              <Shield className={`w-12 h-12 ${darkMode ? 'text-primary-blue' : 'text-black'} mx-auto mb-4 animate-pulse-slow`} />
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Learning Paths</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Choose your specialization and advance your career</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-primary-red/20 hover:border-primary-red transition reveal">
              <Trophy className="w-12 h-12 text-primary-red mx-auto mb-4 animate-pulse-slow" />
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hands-on Labs</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Practice in realistic environments with guided exercises and real-world scenarios.</p>
            </div>
            <div className={`text-center p-6 rounded-lg border ${darkMode ? 'border-primary-blue/20' : 'border-black/20'} hover:${darkMode ? 'border-primary-blue' : 'border-black'} transition reveal-right`}>
              <Award className={`w-12 h-12 ${darkMode ? 'text-primary-blue' : 'text-black'} mx-auto mb-4 animate-pulse-slow`} />
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Challenges</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Test your skills with CTF-style challenges and earn badges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className={`py-16 ${darkMode ? 'bg-primary-dark/30' : 'bg-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center reveal-scale">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-primary-blue via-primary-red to-primary-blue' : 'from-black via-primary-red to-black'} bg-clip-text text-transparent animate-gradient`}>
            HackTheHackers – Where Practical Training Meets Theory
          </h2>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed animate-fadeIn`}>
            Sharpen your cybersecurity skills with real-world, hands-on training.<br /> Our guided labs, updated weekly with the latest attack techniques and CVEs, ensure you're always ahead of emerging threats.<br />Learn step by step at your own pace and build the expertise needed to tackle today's cybersecurity challenges with confidence.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Join thousands of cybersecurity professionals building real-world skills with HackTheHackers.
            </p>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Choose Your Plan</h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Select the plan that best fits your learning goals. All plans include access to our growing library of content.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <span 
                className={`cursor-pointer ${billingCycle === 'monthly' ? (darkMode ? 'text-primary-blue' : 'text-black') : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </span>
              <div 
                className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors ${
                  billingCycle === 'annual' ? (darkMode ? 'bg-primary-blue' : 'bg-black') : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                }`}
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              >
                <div 
                  className={`w-6 h-6 bg-white rounded-full transition-transform transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : ''
                  }`}
                />
              </div>
              <span 
                className={`cursor-pointer ${billingCycle === 'annual' ? (darkMode ? 'text-primary-blue' : 'text-black') : (darkMode ? 'text-gray-400' : 'text-gray-600')}`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual (Save 20%)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${darkMode ? 'bg-primary-dark/30' : 'bg-white'} rounded-lg p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? (darkMode ? 'border-primary-blue scale-105 shadow-lg shadow-primary-blue/20' : 'border-black scale-105 shadow-lg shadow-black/20') 
                    : (darkMode ? 'border-primary-blue/20 hover:border-primary-blue' : 'border-black/20 hover:border-black')
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className={`${darkMode ? 'bg-primary-blue' : 'bg-black'} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}>
                        {plan.price === 0 ? 'Free forever' : `/${billingCycle === 'monthly' ? 'mo' : 'yr'}`}
                      </span>
                    </div>
                  ) : (
                    <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <CheckCircle2 className={`w-5 h-5 ${darkMode ? 'text-primary-blue' : 'text-black'} mr-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? (darkMode ? 'bg-primary-blue text-white hover:bg-secondary-blue' : 'bg-black text-white hover:bg-gray-800')
                      : (darkMode ? 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white' : 'border border-black text-black hover:bg-black hover:text-white')
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-16 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={`${darkMode ? 'text-primary-blue' : 'text-black'}`}>What Our</span> Users Are Saying
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                role: "Security Team Lead",
                review:
                  "This platform has been an incredible resource for my team. The training is clear, well-structured, and practical. The content covers everything from basic concepts to advanced techniques. Highly recommend it for anyone serious about improving their Blue Team skills!",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
              },
              {
                name: "Sarah L.",
                role: "Cybersecurity Professional",
                review:
                  "As a cybersecurity professional, I was looking for a comprehensive training solution for my team. This platform provided exactly what we needed! The hands-on labs are particularly useful, and I feel much more confident tackling security incidents now.",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
              },
              {
                name: "Alex T.",
                role: "Security Operations Manager",
                review:
                  "I've gone through several courses, but this one stands out. The Windows security training was top-notch, and the practical exercises gave me real-world experience. I can immediately apply what I learned to my day-to-day job. Will definitely recommend it to my colleagues!",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
              },
              {
                name: "Emily R.",
                role: "Incident Response Analyst",
                review:
                  "The incident response scenarios are incredibly realistic. I appreciate how the platform keeps up with the latest threats and attack techniques. It's helped me develop a much stronger analytical mindset for investigating security incidents.",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
              },
              {
                name: "Michael K.",
                role: "Threat Hunter",
                review:
                  "The threat hunting modules are exceptional. They've helped me understand advanced persistent threats and develop better hunting techniques. The platform's approach to teaching MITRE ATT&CK framework integration is particularly valuable.",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
              },
              {
                name: "Lisa M.",
                role: "Security Architect",
                review:
                  "What sets this platform apart is its comprehensive approach to security architecture. The courses helped me understand how different security controls work together. The hands-on labs for implementing zero trust architecture were especially enlightening.",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?fit=crop&w=100&h=100",
              }
            ].map((review, index) => (
              <div
                key={index}
                className={`reveal ${darkMode ? 'bg-primary-dark/40' : 'bg-white'} rounded-lg p-8 border ${darkMode ? 'border-primary-blue/20' : 'border-gray-200'} hover:${darkMode ? 'border-primary-blue' : 'border-black'} transition transform hover:scale-105 relative hover-card glass-effect`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className={`absolute top-4 right-4 w-8 h-8 ${darkMode ? 'text-primary-blue/30' : 'text-black/30'}`} />
                <div className="flex items-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-primary-blue"
                  />
                  <div>
                    <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{review.name}</h3>
                    <p className={`${darkMode ? 'text-primary-blue' : 'text-black'} text-sm`}>{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} italic`}>"{review.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className={`${darkMode ? 'bg-primary-blue' : 'bg-black'} p-4 rounded-full shadow-lg ${darkMode ? 'hover:bg-secondary-blue' : 'hover:bg-gray-800'} transition`}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Chat with Us</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-64 overflow-y-auto mb-4">
              {/* Chat messages go here */}
            </div>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-primary-dark' : 'bg-white'} py-6 border-t ${darkMode ? 'border-primary-blue/20' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 HackTheHackers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/terms" className={`${darkMode ? 'text-primary-blue hover:text-secondary-blue' : 'text-black hover:text-gray-800'} transition`}>
                Terms of Use
              </Link>
              <Link 
                to="/contact" 
                className={`${darkMode ? 'bg-primary-blue' : 'bg-black'} text-white px-4 py-2 rounded-md ${darkMode ? 'hover:bg-secondary-blue' : 'hover:bg-gray-800'} transition`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
