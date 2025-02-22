import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function SocAnalyst() {
  const [activeSection, setActiveSection] = useState("sql-overview");
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
    id: "soc-overview",
    title: "What is SQL injection? ",
    content: {
      introduction: "A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational and technical level. It is the first line of defense against cyber threats.",
      sections: [
        {
          title: "What is a SOC?",
          content: [
            "SQL injection (SQLi) is a security vulnerability that lets attackers manipulate database queries executed by a web application. This exploitation can grant unauthorized access to sensitive data, including user information or other restricted records. In many instances, attackers can alter or erase data, leading to lasting changes in the application's functionality or content.  

In more severe cases, SQL injection can be leveraged to gain control over the underlying server or other backend systems. Attackers may also use it to launch denial-of-service (DoS) attacks, further disrupting operations."
          ]
        },
        {
          title: "How to detect SQL injection vulnerabilities",
          content: [
            "You can identify SQL injection vulnerabilities manually by systematically testing every input field in the application. This process typically involves:  

- Submitting a single quote (`'`) to check for errors or unusual behavior.  
- Using SQL-specific syntax that should return the original value or a modified one, then analyzing response patterns.  
- Injecting Boolean conditions like `OR 1=1` (always true) and `OR 1=2` (always false) to observe response differences.  
- Executing payloads that introduce time delays in queries and measuring response times for anomalies.  
- Deploying out-of-band (OAST) payloads to detect unexpected network interactions triggered by SQL execution.  

For faster and more reliable detection, automated tools like Burp Scanner can efficiently uncover most SQL injection vulnerabilities."
          ]
        },
        {
          title: "SQL injection in different parts of the query",
          content: [
            "While most SQL injection vulnerabilities are found in the `WHERE` clause of `SELECT` queries, they can occur in various parts of a query and across different SQL operations. Experienced testers are often familiar with `WHERE` clause injections, but it's important to recognize other common injection points, including:  

- **`UPDATE` statements** – Vulnerabilities may exist in the `SET` values or the `WHERE` clause.  
- **`INSERT` statements** – Malicious input can be injected into the inserted values.  
- **`SELECT` statements** – Injection can target table or column names dynamically referenced in the query.  
- **`ORDER BY` clauses** – If user input is used unsafely, an attacker can manipulate sorting behavior or cause errors.  

Understanding these injection points helps testers uncover vulnerabilities beyond the commonly exploited `WHERE` clause."
          ]
        },
        {
          title: "Retrieving hidden data",
          content: [
            "Imagine a shopping platform where users can explore items across various categories. When a user clicks on the 'Gifts' section, their browser sends a request to the following URL:

https://insecure-website.com/products?category=Gifts

This triggers the application to retrieve the relevant product details from the database. The system looks for products that are categorized under 'Gifts' and have been released (marked as available for purchase). The 'released' filter is used to exclude products that are not yet available. For those products that are still not released, the system assumes they have a 'released' status of 0."
          ]
        }
      ]
    }
  }
]
      }
    },
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
                <span className="text-white">Hack</span>
                <span className="text-primary-red">The</span>
                <span className="text-white">Hackers</span>
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
              <h1 className="text-2xl font-bold gradient-text">SOC Analyst</h1>
              <p className="text-gray-400 text-sm mt-1">Master Security Operations Center processes and tools</p>
              <div className="mt-2 progress-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20 glass-effect">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 gradient-text">Course Sections</h2>
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveSubSection("");
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between hover-card transition-all ${
                    activeSection === section.id
                      ? 'bg-primary-blue/20 text-primary-blue'
                      : 'hover:bg-primary-blue/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section.title}
                  <ChevronRight className={`w-4 h-4 transform transition-transform ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          {activeContent && (
            <div className="space-y-8">
              {!activeSubSection && (
                <>
                  <h1 className="text-3xl font-bold text-primary-blue mb-4 reveal-scale">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h1>
                  <p className="text-lg mb-8 whitespace-pre-line reveal">{activeContent.introduction}</p>
                </>
              )}
              
              {activeSubSection && activeSubSectionContent && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text reveal">{activeSubSectionContent.title}</h2>
                  
                  {activeSubSectionContent.content && (
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                      {activeSubSectionContent.content.map((item, i) => (
                        <li 
                          key={i} 
                          className="reveal-left hover:text-primary-blue transition-colors" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {activeSubSectionContent.subsections && (
                    <div className="space-y-6">
                      {activeSubSectionContent.subsections.map((subsection, si) => (
                        <div 
                          key={si} 
                          className="space-y-2 reveal"
                          style={{ animationDelay: `${si * 100}ms` }}
                        >
                          <h3 className="text-xl font-bold">{subsection.title}</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {subsection.content.map((item, i) => (
                              <li 
                                key={i}
                                className="hover:text-primary-blue transition-colors reveal-left"
                                style={{ animationDelay: `${(si * 4 + i) * 100}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {activeContent?.sections && activeContent.sections.length > 0 && (
          <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-l border-primary-blue/20 glass-effect">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4 gradient-text">Module Sections</h2>
              <div className="space-y-2">
                {activeContent.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubSection(section.title)}
                    className={`w-full text-left px-4 py-2 rounded-md hover-card transition-all ${
                      activeSubSection === section.title
                        ? 'bg-primary-blue/20 text-primary-blue'
                        : 'hover:bg-primary-blue/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SocAnalyst;
