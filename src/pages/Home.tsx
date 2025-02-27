import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Award, Trophy, Star, Quote, CheckCircle2, MessageCircle , FlaskConical } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

/* InteractiveBlock Component: Wraps text and makes it react to mouse movement */
const InteractiveBlock = ({ children, className = "" }) => {
  const [transform, setTransform] = useState("");
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // Calculate offset from the center of the element
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const factor = 0.05; // Adjust for sensitivity
    const rotateX = -y * factor;
    const rotateY = x * factor;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: "transform 0.2s ease-out" }}
    >
      {children}
    </div>
  );
};

/* RippleButton Component for button ripple effects */
const RippleButton = ({ children, className = "", onClick, ...props }) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const createRipple = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, key: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.key !== newRipple.key)), 600);
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`ripple-button ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

/* ScrollProgress Component */
const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }} />
    </div>
  );
};

/* ParticleBackground Component */
const ParticleBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 50;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]);
  return (
    <canvas
      ref={canvasRef}
      className="particle-background absolute top-0 left-0 pointer-events-none"
    />
  );
};

function Home() {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [darkMode, setDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Scroll-triggered reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-scale, .reveal-left, .reveal-right"
    );
    const onScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleGetStarted = (plan: string) => {
    if (profile) {
      navigate(`/payment?plan=${plan.toLowerCase()}&billing=${billingCycle}`);
    } else {
      navigate("/signup");
    }
  };

  // Pricing plans data
  const plans = [
    {
      name: "Basic",
      price: 0,
      features: [
        "Access to Basic Challenges",
        "Limited Learning Paths",
        "Basic Support",
        "Public Profile",
        "Basic Achievements",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? 14.99 : 9.99,
      originalPrice: billingCycle === "monthly" ? 24.99 : 19.99,
      features: [
        "All Basic Features",
        "All Advanced Challenges",
        "All Learning Paths",
        "Priority Support",
        "Certificate of Completion",
        "Advanced Analytics",
        "Early Access to New Content",
      ],
      buttonText: "Subscribe Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro Features",
        "Dedicated Support Manager",
        "Advanced Analytics",
        "Custom Reporting",
        "SLA Guarantee",
        "Custom Integrations",
        "Volume Licensing",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div
      className={`min-h-screen relative ${
        darkMode ? "bg-background text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Particle Background */}
      <ParticleBackground darkMode={darkMode} />

      <Navigation darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <div
        className={`relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 ${
          darkMode ? "bg-gradient-to-b from-primary-dark to-background" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="mb-12 reveal-scale">
          <h1 className="title-effect glitch text-4xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Your Cybersecurity Journey
            <br />
            <span className={`${darkMode ? "text-primary-blue" : "text-black"}`}>
              Starts Here
            </span>
          </h1>
          <InteractiveBlock className="text-xl sm:text-3xl font-semibold mb-8 tracking-wide">
            Hands-On Training for Real-World Threats
          </InteractiveBlock>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {profile ? (
              <Link
                to="/learning-paths"
                className={`${
                  darkMode ? "bg-primary-blue" : "bg-black"
                } text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 min-w-[200px] font-semibold`}
              >
                Continue Learning
              </Link>
            ) : (
              <>
                <Link to="/signup">
                  <RippleButton
                    className="bg-primary-red text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 min-w-[200px] font-semibold animate-pulse"
                  >
                    Start Learning Now
                  </RippleButton>
                </Link>
                <Link
                  to="/signin"
                  className={`${
                    darkMode ? "bg-primary-blue/10 text-primary-blue" : "bg-black/10 text-black"
                  } px-8 py-3 rounded-lg transition-all min-w-[200px] font-semibold border ${
                    darkMode ? "border-primary-blue/20" : "border-black/20"
                  }`}
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Main Image with 3D Tilt, Floating, Rotation & Glowing Frame */}
        <Link
          to="/learning-paths"
          className="mb-16 reveal tilt-image transition-transform duration-300 relative w-3/4 md:w-2/3 lg:w-1/2"
        >
          <div className="animate-float">
            <div
              className={`absolute inset-0 border-4 ${
                darkMode ? "border-primary-blue" : "border-black"
              } rounded-lg z-0 animate-glow-blue-red`}
            ></div>
            <div
              className={`relative z-10 p-2 border-4 ${
                darkMode ? "border-primary-blue/30" : "border-black/30"
              } rounded-lg overflow-hidden`}
            >
              <img
                src="/Main/choose-path.png"
                alt="Choose Your Path"
                className="w-full h-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Get Hands-On Experience Section */}
      <div className="text-center mb-24 reveal">
        <InteractiveBlock className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-blue via-primary-red to-primary-blue bg-clip-text text-transparent animate-gradient">
          Get Hands-On Experience with Challenges & Labs!
        </InteractiveBlock>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <InteractiveBlock className="flex items-center space-x-2">
            <span className={`${darkMode ? "text-primary-blue" : "text-black"} icon-animate`}>
              📈
            </span>
            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Compete on the Leaderboard
            </span>
          </InteractiveBlock>
          <InteractiveBlock className="flex items-center space-x-2">
            <span className="text-primary-red icon-animate">🏆</span>
            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Earn Badges
            </span>
          </InteractiveBlock>
          <InteractiveBlock className="flex items-center space-x-2">
            <span className={`${darkMode ? "text-primary-blue" : "text-black"} icon-animate`}>
              🚀
            </span>
            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
              Advance Your Cybersecurity Career
            </span>
          </InteractiveBlock>
        </div>
        <div className="mt-8">
          {profile ? (
            <Link
              to="/challenges"
              className={`${
                darkMode ? "bg-primary-blue" : "bg-black"
              } text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 min-w-[200px] font-semibold`}
            >
              Explore Challenges
            </Link>
          ) : (
            <Link
              to="/signup"
              className="bg-primary-red text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 min-w-[200px] font-semibold"
            >
              Get Started Today
            </Link>
          )}
        </div>
      </div>

      {/* Features Section with Improved 3D Tilt Effect */}
      <div className={`${darkMode ? "bg-primary-dark/50" : "bg-gray-100"} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-12 h-12 icon-animate" />,
                title: "Learning Paths",
                description: "Choose your specialization and advance your career",
              },
              {
                icon: <FlaskConical className="w-12 h-12 text-primary-red icon-animate" />,
                title: "Hands-on Labs",
                description:
                  "Practice in realistic environments with guided exercises and real-world scenarios.",
              },
              {
                icon: <Award className="w-12 h-12 icon-animate" />,
                title: "Challenges",
                description: "Test your skills with CTF-style challenges and earn badges",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="tilt text-center p-6 rounded-lg border hover:shadow-lg transition reveal-left"
              >
                {feature.icon}
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement with 3D Text Effect */}
      <div className={`py-16 ${darkMode ? "bg-primary-dark/30" : "bg-gray-200"}`}>
        <div className="max-w-4xl mx-auto px-4 text-center reveal-scale">
          <InteractiveBlock className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-blue via-primary-red to-primary-blue bg-clip-text text-transparent animate-gradient">
            HackTheHackers – Where Practical Training Meets Theory
          </InteractiveBlock>
          <InteractiveBlock className="text-lg sm:text-xl leading-relaxed animate-fadeIn">
            Sharpen your cybersecurity skills with real-world, hands-on training.
            <br />
            Our guided labs, updated weekly with the latest attack techniques and CVEs, ensure you're always ahead of emerging threats.
            <br />
            Learn step by step at your own pace and build the expertise needed to tackle today's cybersecurity challenges with confidence.
          </InteractiveBlock>
        </div>
      </div>

      {/* Pricing Section with Tilt Effect and Ripple Buttons */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className={`text-lg sm:text-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } mb-8`}
            >
              Join thousands of cybersecurity professionals building real-world skills with HackTheHackers.
            </p>
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Choose Your Plan
            </h2>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Select the plan that best fits your learning goals. All plans include access to our growing library of content.
            </p>
            <div className="mt-8 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-lg inline-block">
              <p className="text-lg font-semibold">
                🎉 Limited Time Offer: Get <span className="underline">50% Off</span> on Pro Plans! 🎉
              </p>
            </div>
            <div className="flex justify-center items-center space-x-6 mt-8">
              <span
                className={`cursor-pointer ${
                  billingCycle === "monthly"
                    ? darkMode
                      ? "text-primary-blue"
                      : "text-black"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </span>
              <div
                className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors ${
                  billingCycle === "annual"
                    ? darkMode
                      ? "bg-primary-blue"
                      : "bg-black"
                    : darkMode
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform transform ${
                    billingCycle === "annual" ? "translate-x-6" : ""
                  }`}
                />
              </div>
              <span
                className={`cursor-pointer ${
                  billingCycle === "annual"
                    ? darkMode
                      ? "text-primary-blue"
                      : "text-black"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual (Save 20%)
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="tilt relative bg-white dark:bg-primary-dark/30 rounded-lg p-8 border transition-all duration-300 hover:scale-105"
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                      className={`${
                        darkMode ? "bg-primary-blue" : "bg-black"
                      } text-white px-4 py-1 rounded-full text-sm font-semibold`}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.name === "Pro" && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                      50% Off
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  {typeof plan.price === "number" ? (
                    <div className="flex items-baseline">
                      <span
                        className={`text-4xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${plan.price}
                      </span>
                      {plan.name === "Pro" && (
                        <span
                          className={`${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          } ml-2 line-through`}
                        >
                          ${plan.originalPrice}
                        </span>
                      )}
                      <span className={`${darkMode ? "text-gray-400" : "text-gray-600"} ml-2`}>
                        {plan.price === 0 ? "Free forever" : `/${billingCycle === "monthly" ? "mo" : "yr"}`}
                      </span>
                    </div>
                  ) : (
                    <span className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-5 h-5 ${
                          darkMode ? "text-primary-blue" : "text-black"
                        } mr-2 flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <RippleButton
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? darkMode
                        ? "bg-primary-blue text-white hover:bg-secondary-blue"
                        : "bg-black text-white hover:bg-gray-800"
                      : darkMode
                      ? "border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                      : "border border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </RippleButton>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Reviews Section with Tilt */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveBlock className="text-2xl sm:text-3xl font-bold mb-16 text-center">
            <span className={`${darkMode ? "text-primary-blue" : "text-black"}`}>What Our</span> Users Are Saying
          </InteractiveBlock>
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
              },
            ].map((review, index) => (
              <div
                key={index}
                className="tilt reveal relative bg-white dark:bg-primary-dark/40 rounded-lg p-8 border transition transform hover:scale-105 hover:shadow-xl"
              >
                <Quote
                  className={`absolute top-4 right-4 w-8 h-8 ${
                    darkMode ? "text-primary-blue/30" : "text-black/30"
                  }`}
                />
                <div className="flex items-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-primary-blue"
                  />
                  <div>
                    <h3
                      className={`font-semibold text-lg ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {review.name}
                    </h3>
                    <p className={`${darkMode ? "text-primary-blue" : "text-black"} text-sm`}>
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} italic`}>
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-8 right-8">
        <RippleButton
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`${darkMode ? "bg-primary-blue" : "bg-black"} p-4 rounded-full shadow-lg transition hover:bg-secondary-blue`}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </RippleButton>
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
      <footer
        className={`${
          darkMode ? "bg-primary-dark" : "bg-white"
        } py-6 border-t ${darkMode ? "border-primary-blue/20" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 HackTheHackers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/terms"
                className={`${
                  darkMode ? "text-primary-blue hover:text-secondary-blue" : "text-black hover:text-gray-800"
                } transition`}
              >
                Terms of Use
              </Link>
              <Link
                to="/contact"
                className={`${
                  darkMode ? "bg-primary-blue" : "bg-black"
                } text-white px-4 py-2 rounded-md transition hover:bg-secondary-blue`}
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
