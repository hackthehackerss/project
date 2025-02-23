import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SQLLab() {
  const [activeSection, setActiveSection] = useState("1");
  const [activeSubSection, setActiveSubSection] = useState(0);

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
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [activeSection, activeSubSection]);

  const sections = [
    "What is SQL injection?",
    "How to detect SQL injection vulnerabilities",
    "Retrieving hidden data",
    "Subverting application logic",
    "SQL injection UNION attacks",
    "Determining the number of columns required",
    "Finding columns with a useful data type",
    "Using a SQL injection UNION attack to retrieve interesting data",
    "Retrieving multiple values within a single column",
    "Examining the database",
    "Blind SQL injection",
    "Exploiting blind SQL injection by triggering conditional responses",
    "Error-based SQL injection",
    "Exploiting blind SQL injection by triggering time delays",
    "Exploiting blind SQL injection using out-of-band (OAST) techniques",
    "SQL injection in different contexts",
    "Second-order SQL injection",
    "How to prevent SQL injection"
  ].map((title, index) => ({
    id: (index + 1).toString(),
    title,
    content: [
      "SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.",
      "It is one of the most common and dangerous vulnerabilities, allowing attackers to view data they shouldn’t be able to retrieve.",
      "A successful SQL injection attack can lead to unauthorized access, data breaches, and even complete system compromise."
    ]
  }));

  const nextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  const activeContent = sections.find(section => section.id === activeSection);

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
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text">SQL Injection Topics</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all ${activeSection === section.id ? 'bg-primary-blue/20 text-primary-blue' : 'hover:bg-primary-blue/10'}`}
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
            {activeContent && (
              <div>
                <h1 className="text-2xl font-bold mb-4 gradient-text">{activeContent.title}</h1>
                {activeContent.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-300">{paragraph}</p>
                ))}
                <button
                  onClick={nextSection}
                  className="mt-4 px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-blue/80 transition"
                >
                  Next Section
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
