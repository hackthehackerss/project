import React, { useState } from 'react';
import { Book, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Terminal-style code block component
const TerminalBlock = ({ children }) => (
  <div className="bg-black text-green-400 p-4 rounded border border-green-500 font-mono whitespace-pre-wrap my-4">
    {children}
  </div>
);

// Image component for consistent styling
const ImageBlock = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ maxWidth: "100%", height: "auto" }} className="my-4" />
);

function OSWPCourse() {
  const [activeSection, setActiveSection] = useState("OSWPCourse-overview");
  const [activeSubSection, setActiveSubSection] = useState("");

  const sections = [
    {
      id: "OSWPCourse-overview",
      title: "OSWP Course Overview",
      content: {
        introduction: (
          <>
            <h2>Welcome to Wireless Penetration Testing</h2>
            <p>This course will cover various aspects of wireless network security.</p>
          </>
        ),
        sections: [
          {
            title: "1",
            content: <p>Section 1 content goes here.</p>
          },
          {
            title: "2",
            content: <p>Section 2 content goes here.</p>
          },
          {
            title: "3",
            content: <p>Section 3 content goes here.</p>
          },
          {
            title: "4",
            content: <p>Section 4 content goes here.</p>
          },
          {
            title: "5",
            content: <p>Section 5 content goes here.</p>
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
    {
      id: "OSWPCourse-overview",
      title: "OSWPCourse Overview",
      content: {
        introduction:
          "",
        sections: [
          {
            title: "1",
            content: []
          },
          {
            title: "2",
            content: []
          },
          {
            title: "3",
            content: []
          },
          {
            title: "4",
            content: []
          },
          {
            title: "5",
            content: []
          }
        ]
      }
    },
  ];

  return <div>{sections[0].content.introduction}</div>;
}


  const activeContent = sections.find((section) => section.id === activeSection)?.content;
  const activeSubSectionContent = activeContent?.sections?.find(
    (s) => s.title === activeSubSection
  );

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <nav className="bg-primary-dark border-b border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <Link
                to="/learning-paths"
                className="text-primary-blue hover:text-primary-blue/80 flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Learning Paths
              </Link>
              <span className="text-xl font-bold">
                <span className="text-white">Hack</span>
                <span className="text-primary-red">The</span>
                <span className="text-white">Hackers</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <div className="bg-primary-dark/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Book className="w-8 h-8 text-primary-blue" />
            <div>
              <h1 className="text-2xl font-bold">VBA Scripting</h1>
              <p className="text-gray-400 text-sm mt-1">
                Master VBA Scripting Technics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-r border-primary-blue/20">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Course Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setActiveSubSection("");
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center justify-between ${
                    activeSection === section.id
                      ? 'bg-primary-blue/20 text-primary-blue'
                      : 'hover:bg-primary-blue/10'
                  }`}
                >
                  {section.title}
                  <ChevronRight
                    className={`w-4 h-4 transform transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeContent && (
            <div className="space-y-8">
              {!activeSubSection && (
                <>
                  <h1 className="text-3xl font-bold text-primary-blue mb-4">
                    {sections.find((s) => s.id === activeSection)?.title}
                  </h1>
                  <p className="text-lg mb-8">{activeContent.introduction}</p>
                </>
              )}

              {activeSubSection && activeSubSectionContent && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-blue">
                    {activeSubSectionContent.title}
                  </h2>
                  {activeSubSectionContent.content && (
                    <ul className="list-disc list-inside space-y-2 text-gray-200">
                      {activeSubSectionContent.content.map((item, i) =>
                        typeof item === "string" ? (
                          <li key={i}>{item}</li>
                        ) : (
                          <div key={i}>{item}</div>
                        )
                      )}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        {activeContent?.sections && activeContent.sections.length > 0 && (
          <div className="w-64 bg-primary-dark/30 min-h-[calc(100vh-11rem)] border-l border-primary-blue/20">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Module Sections</h2>
              <div className="space-y-2">
                {activeContent.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubSection(section.title)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeSubSection === section.title
                        ? 'bg-primary-blue/20 text-primary-blue'
                        : 'hover:bg-primary-blue/10'
                    }`}
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

export default OSWPCourse;
