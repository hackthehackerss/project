import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, ThumbsUp, Lightbulb } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

function SQLLab() {
  const navigate = useNavigate();

  // Load saved values from localStorage
  const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || "");
  const [activeSubSection, setActiveSubSection] = useState(localStorage.getItem('activeSubSection') || "");
  const [quizResults, setQuizResults] = useState(JSON.parse(localStorage.getItem('quizResults')) || {});
  const [flagInput, setFlagInput] = useState("");
  const [flagMessage, setFlagMessage] = useState("");
  const [progress, setProgress] = useState(parseInt(localStorage.getItem('progress')) || 0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hintMessage, setHintMessage] = useState("");
  const [likesCount, setLikesCount] = useState(parseInt(localStorage.getItem('likesCount')) || 0);
  const [hasLiked, setHasLiked] = useState(false);

  // Correct flags keyed by subsection identifiers
  const correctFlags = {
    "1.1": "HTH{sql_injection_basics}",
    "1.2": "OR 1=1",
    "1.3": "HTH{retrieving_hi$den_d0ta}",
    "1.4": "flag{subverting_application_logic}",
    "2.1": "flag{subverting_application_logic}",
    "2.2": "flag{union_attacks}"
  };

  // Sections with improved content formatting and special style for code parts
  const sections = [
    {
      id: "1",
      title: "What is SQL Injection?",
      subsections: [
        {
          id: "1.1",
          title: "What is SQL injection (SQLi)?",
          content: `SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. This can allow an attacker to view data that they are not normally able to retrieve – including data belonging to other users – or any other data that the application can access. In many cases, an attacker can modify or delete this data, causing persistent changes to the application's content or behavior.<br/><br/>
In some situations, an attacker can escalate a SQL injection attack to compromise the underlying server or other back-end infrastructure. It can also enable them to perform denial-of-service attacks.`
        },
        {
          id: "1.2",
          title: "How to detect SQL injection vulnerabilities",
          content: `You can detect SQL injection manually by systematically testing every entry point in the application. Typically, you would submit:<br/><br/>
• The single quote character (<code>'</code>) and look for errors or anomalies.<br/>
• SQL-specific syntax that evaluates to the original value and then to a different value.<br/>
• Boolean conditions (e.g., <code>OR 1=1</code> vs. <code>OR 1=2</code>) to detect differences.<br/>
• Payloads designed to trigger time delays.<br/>
• OAST payloads to trigger out-of-band interactions.<br/><br/>
Alternatively, tools like Burp Scanner can quickly detect most vulnerabilities.`
        },
        {
          id: "1.3",
          title: "Retrieving hidden data",
          content: `Imagine a shopping application that displays products in different categories. When a user clicks on a category (for example, "Gifts"), the browser requests a URL such as:<br/><br/>
<code>https://vulnerable-web.org/products?category=Shoes</code><br/><br/>
This causes the application to execute a SQL query to retrieve product details:<br/><br/>
<code>SELECT * FROM products WHERE category = 'Shoes' AND released = 1</code><br/><br/>
This query returns all products from the "Shoes" category that are marked as released.<br/><br/>
If the application is vulnerable to SQL injection, an attacker might modify the URL to:<br/><br/>
<code>https://vulnerable-web.org/products?category=Shoes'--</code><br/><br/>
The query then becomes:<br/><br/>
<code>SELECT * FROM products WHERE category = 'Shoes'--' AND released = 1</code><br/><br/>
Because <code>--</code> starts a comment, the condition “AND released = 1” is ignored, displaying all products—even unreleased ones.<br/><br/>
An attacker can further use:<br/><br/>
<code>https://vulnerable-web.org/products?category=Shoes'+OR+1=1--</code><br/><br/>
Which results in:<br/><br/>
<code>SELECT * FROM products WHERE category = 'Shoes' OR 1=1--' AND released = 1</code><br/><br/>
<strong>Warning:</strong> Injecting conditions like <code>OR 1=1</code> can be dangerous if the same data is used in multiple queries (for example, in UPDATE or DELETE statements), potentially leading to data loss.<br/><br/>
This lab contains a SQL injection vulnerability in the product category filter. 
To solve the lab, perform a SQL injection attack that causes the application to display one or more unreleased products.`
        },
        {
          id: "1.4",
          title: "Subverting application logic",
          content: `Imagine an application that lets users log in with a username and password. If a user submits the username <code>wiener</code> and the password <code>bluecheese</code>, the application checks the credentials by executing the following SQL query:<br/><br/>
<code>SELECT * FROM users WHERE username = 'wiener' AND password = 'bluecheese'</code><br/><br/>
If the query returns a user record, the login is successful; otherwise, it is rejected.<br/><br/>
An attacker can bypass the password check by using the SQL comment sequence <code>--</code> to remove part of the query. For example, submitting the username <code>administrator'--</code> with a blank password results in:<br/><br/>
<code>SELECT * FROM users WHERE username = 'administrator'--' AND password = ''</code><br/><br/>
This query returns the record for the administrator user, effectively logging the attacker in as that user.<br/><br/>
This lab contains a SQL injection vulnerability in the login function. To solve the lab, perform a SQL injection attack that logs in as the administrator user.`
        }
      ]
    },
    {
      id: "2",
      title: "SQL injection UNION attacks",
      subsections: [
        {
          id: "2.1",
          title: "SQL injection UNION attacks",
          content: `When an application is vulnerable to SQL injection and the results are returned within its responses, you can use the <code>UNION</code> keyword to retrieve data from other tables. This technique is known as a SQL injection UNION attack.<br/><br/>
The <code>UNION</code> keyword enables you to execute one or more additional <code>SELECT</code> queries and append their results to the original query. For example, a query might return a single result set with two columns, containing values from two different tables.`
        },
        {
          id: "2.2",
          title: "SQL injection UNION attacks – Continued",
          content: `For a <code>UNION</code> query to work, two key requirements must be met:<br/><br/>
1. The individual queries must return the same number of columns.<br/>
2. The data types in each column must be compatible.<br/><br/>
To carry out a SQL injection UNION attack, you typically need to determine:<br/><br/>
• How many columns the original query returns.<br/>
• Which columns are of a suitable data type to hold the injected query's results.`
        },
        {
          id: "3",
          title: "Determining the number of columns required",
          subsections: [
            {
              id: "3.1",
              title: "Determining the number of columns required",
              content: `When performing a SQL injection UNION attack, one effective method is to inject a series of <code>ORDER BY</code> clauses, incrementing the column index until an error occurs. For example, if the injection point is within a quoted string in the WHERE clause, you might submit:<br/><br/>
<code>' ORDER BY 1--</code><br/>
<code>' ORDER BY 2--</code><br/>
<code>' ORDER BY 3--</code><br/><br/>
When the specified column index exceeds the number of columns in the result set, the database returns an error. This error helps you infer the number of columns.<br/><br/>
Another method involves using <code>UNION SELECT</code> with a series of <code>NULL</code> values, adjusting the number until the query succeeds.`
            },
            {
              id: "3.2",
              title: "Determining the number of columns via UNION SELECT",
              content: `This lab contains a SQL injection vulnerability in the product category filter. The results of the query are returned in the application's response, so you can use a UNION attack to retrieve additional data.<br/><br/>
To solve the lab, determine the number of columns returned by the query by submitting a UNION SELECT payload with an increasing number of <code>NULL</code> values until the error disappears, indicating the correct number of columns.`
            }
          ]
        }
      ]
    }
  ];

  // Array of lab routes; a random one will be chosen when "Access Lab" is clicked.
  const labRoutes = [
    "/lab-exercise-1",
    "/lab-exercise-2",
    "/lab-exercise-3"
  ];

  useEffect(() => {
    // Reset flag message, input, and hint when the subsection changes
    setFlagMessage("");
    setFlagInput("");
    setHintMessage("");
  }, [activeSubSection]);

  useEffect(() => {
    // Auto-save progress and current section/subsection in localStorage
    localStorage.setItem('activeSection', activeSection);
    localStorage.setItem('activeSubSection', activeSubSection);
    localStorage.setItem('progress', progress);
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
    localStorage.setItem('likesCount', likesCount);
  }, [activeSection, activeSubSection, progress, quizResults, likesCount]);

  const handleFlagSubmit = () => {
    if (flagInput === correctFlags[activeSubSection]) {
      setFlagMessage("✅ Correct flag!");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setQuizResults(prev => ({ ...prev, [activeSubSection]: true }));
      if (!quizResults[activeSubSection]) {
        setProgress(prev => Math.min(prev + 5, 100));
      }
    } else {
      setFlagMessage("❌ Incorrect flag. Try again!");
    }
  };

  const handleRating = (rating) => {
    if (rating === "like" && !hasLiked) {
      const newLikes = likesCount + 1;
      setLikesCount(newLikes);
      localStorage.setItem('likesCount', newLikes);
      setHasLiked(true);
    }
  };

  const getHint = () => {
    if (activeSubSection === "1.1") return "Look up common SQL injection examples.";
    if (activeSubSection === "1.2") return "Write a simple OR statement that always returns true.";
    if (activeSubSection === "1.3") return "Modify the category parameter to include '+OR+1=1--' to bypass the released filter.";
    if (activeSubSection === "1.4") return "Modify the username parameter, for example: administrator'--";
    if (activeSubSection === "2.2") return "Consider tools like sqlmap for automated testing.";
    if (activeSubSection === "3.1") return "Use ORDER BY clauses or UNION SELECT with NULL values to determine the number of columns.";
    if (activeSubSection === "3.2") {
      return "Modify the category parameter to add a UNION SELECT with NULL values. Start with one NULL, then increase until the error disappears and additional content appears.";
    }
    return "No hint available.";
  };

  const handleShowHint = () => {
    setHintMessage(getHint());
  };

  const handleContinue = () => {
    const currentSectionIndex = sections.findIndex(sec => sec.id === activeSection);
    if (currentSectionIndex === -1) return;
    const currentSection = sections[currentSectionIndex];
    const currentSubIndex = currentSection.subsections.findIndex(sub => sub.id === activeSubSection);
    if (currentSubIndex === -1) return;
    if (currentSubIndex < currentSection.subsections.length - 1) {
      const nextSubsection = currentSection.subsections[currentSubIndex + 1];
      setActiveSubSection(nextSubsection.id);
    } else {
      if (currentSectionIndex < sections.length - 1) {
        const nextSection = sections[currentSectionIndex + 1];
        setActiveSection(nextSection.id);
        setActiveSubSection(nextSection.subsections[0].id);
      } else {
        setHintMessage("You've completed all the content!");
      }
    }
  };

  const handleAccessLab = () => {
    const randomIndex = Math.floor(Math.random() * labRoutes.length);
    navigate(labRoutes[randomIndex]);
  };

  // Retrieve current subsection data for easy access.
  const currentSub = sections.find(sec => sec.id === activeSection)?.subsections.find(sub => sub.id === activeSubSection);

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Inline Styles for Code Tags */}
      <style>{`
        code {
          border: 1px dashed white;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Courier New', Courier, monospace;
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Navbar */}
      <nav className="bg-primary-dark border-b border-primary-blue/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link to="/labs" className="text-primary-blue hover:text-primary-blue/80 flex items-center group">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Labs
              </Link>
              <span className="text-xl font-bold">SQL Injection Course</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Top Header: Three-column layout */}
      <div className="bg-primary-dark/20 py-4 px-6">
        <div className="grid grid-cols-3 items-center">
          {/* Top Left: Like Button */}
          <div className="text-left">
            <button 
              onClick={() => handleRating("like")} 
              disabled={hasLiked}
              className={`text-green-500 flex items-center ${hasLiked ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ThumbsUp className="mr-1" /> Like
            </button>
            <div className="mt-1 text-sm font-bold text-green-500">Likes: {likesCount}</div>
          </div>
          {/* Center: Course Progress */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Course Progress: {progress}% Completed</h3>
            <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          {/* Top Right: Access Lab Button */}
          <div className="text-right">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
              onClick={handleAccessLab}
            >
              Access Lab
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar with Sections */}
        <div className="w-64 bg-primary-dark/30 min-h-screen border-r border-primary-blue/20 shadow-inner">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-gradient">Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between transition-all ${
                      activeSection === section.id ? 'bg-primary-blue/20 text-primary-blue' : 'hover:bg-primary-blue/10'
                    }`}
                  >
                    {section.title}
                    <ChevronRight
                      className={`w-4 h-4 transform transition-transform ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {activeSection === section.id && (
                    <div className="pl-4">
                      {section.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setActiveSubSection(sub.id)}
                          className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-all ${
                            activeSubSection === sub.id ? 'bg-primary-blue/20 text-primary-blue' : 'hover:bg-primary-blue/10'
                          }`}
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-primary-dark/10 py-8 px-6">
          {activeSubSection && currentSub && (
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">{currentSub.title}</h1>
              <div
                className="text-gray-300 whitespace-pre-line mx-auto"
                style={{ width: "80%" }}
                dangerouslySetInnerHTML={{ __html: currentSub.content }}
              />
              {/* Hint Block */}
              <div className="mt-6">
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 inline-flex items-center"
                  onClick={handleShowHint}
                >
                  <Lightbulb className="mr-1" /> Get a Hint
                </button>
                {hintMessage && (
                  <div className="mt-2 bg-yellow-100 text-yellow-900 p-3 rounded-md text-left">
                    {hintMessage}
                  </div>
                )}
              </div>
              {/* Flag Submission Block */}
              <div className="mt-12 max-w-lg mx-auto">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="flex-grow border border-gray-600 rounded-md px-4 py-2 text-black"
                    placeholder="Enter flag here..."
                    value={flagInput}
                    onChange={(e) => setFlagInput(e.target.value)}
                  />
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
                    onClick={handleFlagSubmit}
                  >
                    Submit
                  </button>
                </div>
                {flagMessage && <p className="mt-2 text-lg">{flagMessage}</p>}
              </div>
              {/* Continue Button */}
              <div className="mt-6 text-center">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
              {showConfetti && <Confetti />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SQLLab;
