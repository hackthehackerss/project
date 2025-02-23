import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SQL_lab() {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubSection, setActiveSubSection] = useState("");
  const [quizResults, setQuizResults] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [activeSection, activeSubSection]);

  const sections = [
    {
      id: "1",
      title: "SQL",
      content: {
        introduction: "SQL",
        sections: [
          {
            title: "123",
            content: ['aaa']
          },
          {
            title: "123",
            content: ['aaa']
          }
        ]
      }
    }
  ];

  const activeContent = sections.find(section => section.id === activeSection)?.content;
  const activeSubSectionContent = activeContent?.sections?.find(s => s.title === activeSubSection);

  const handleQuizSubmit = (moduleId, answers) => {
    setQuizResults({ ...quizResults, [moduleId]: answers });
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <nav className="bg-primary-dark border-b border-primary-blue/20 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/learning-paths" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Learning Paths
              </Link>
              <span className="text-xl font-bold animate-fadeIn">
                <span className="text-white"></span>
                <span className="text-primary-red"></span>
                <span className="text-white"></span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-primary-dark/50 py-8 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 animate-fadeIn">
            <Book className="w-8 h-8 text-primary-blue animate-pulse-slow" />
            <div>
              <h1 className="text-2xl font-bold gradient-text"></h1>
              <p className="text-gray-400 text-sm mt-1"></p>
              <div className="mt-2 progress-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text"></h2>
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveSubSection("");
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all ${activeSection === section.id ? 'bg-primary-blue/20 text-primary-blue' : 'hover:bg-primary-blue/10'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section.title}
                  <ChevronRight className={`w-4 h-4 transform transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-primary-dark/10 py-8 glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLlab;
