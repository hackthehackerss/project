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
            <div style={{ textAlign: 'center' }}>
              <p><strong>Introduction to OSWP Road Map</strong></p><br />
              <p>
                Wireless networks are an essential part of modern communication, but they also introduce significant security risks. The Offensive Security Wireless Professional (OSWP) certification is designed to equip cybersecurity professionals with the skills to assess and exploit vulnerabilities in Wi-Fi networks.
              </p> 
              <p>
                <strong>Who Is This Course For? </strong><br />
              </p>
              <ul>
                <li>
                  <strong>This course is ideal for:</strong>
                </li>
                <li>✅ IT professionals responsible for securing Wi-Fi networks.</li>
                <li>✅ Penetration testers looking to expand their skill set.</li>
                <li>✅ Cybersecurity professionals wanting to specialize in wireless security.</li>
                <li>✅ Ethical hackers seeking OSWP certification.</li>
              </ul>
        
              <p>
                <strong>What You’ll Learn? </strong><br />
              </p>
              <p>
                In this course, we will cover the fundamentals of Wi-Fi security, the methodologies used by attackers, and the defensive strategies to secure wireless networks. By the end, you'll have hands-on experience with real-world Wi-Fi attacks and be fully prepared for the OSWP exam.
              </p>
        
              <p>
                <strong> Course Structure: </strong><br />
              </p>
              <p>
                This course follows a practical, hands-on approach, covering:
              </p>
              <ul>
                <li>1️⃣ Wireless Network Basics – 802.11 standards, encryption protocols, and wireless reconnaissance.</li>
                <li>2️⃣ Packet Capture & Analysis – Using tools like Airodump-ng and Wireshark.</li>
                <li>3️⃣ Wi-Fi Exploitation Techniques – Cracking WEP, WPA/WPA2, and PMKID attacks.</li>
                <li>4️⃣ Rogue Access Points & Evil Twin Attacks – Setting up fake APs for credential theft.</li>
                <li>5️⃣ Post-Exploitation & Defense Strategies – How to protect against common wireless threats.</li>
              </ul>
        
              <p>
                <strong>What You Need Before Starting? </strong><br />
              </p>
        
              <ul>
                <li>📌 Basic Linux knowledge (Kali Linux is recommended).</li>
                <li>📌 Understanding of networking concepts (IP addresses, DHCP, etc.).</li>
                <li>📌 A wireless network adapter that supports packet injection (e.g., ALFA AWUS036NHA).</li>
              </ul>
        
              By the end of this course, you will have a deep understanding of wireless security, be able to perform real-world Wi-Fi penetration tests, and be well-prepared for the OSWP exam.
        
              <br /><br />
              👉 Let’s dive in and start hacking Wi-Fi! 🚀
            </div>
          )
        },
        {
          title: "Overview of IEEE 802.11 Standards",
          summary: (
            <div style={{ textAlign: 'center' }}>
              <p><strong>Overview of IEEE 802.11 Standards</strong></p>
              <p>
                This module introduces key wireless communication concepts and terminology as defined by various IEEE 802.11 protocols. Each wireless card supports specific 802.11 standards, and compatibility with other protocols may vary.
              </p>
              <br /><br />
              <p><strong>Key Monitoring Techniques:</strong></p>
              <p>
                Understanding these protocols is crucial because both the hardware we use and the testing environment's equipment influence our work. A solid grasp of hardware capabilities allows for proper utilization. With that in mind, this module serves two main purposes.
              </p>
              <br /><br />
              <p>
                First, it provides an overview of the different 802.11 standards and their distinctions. While memorization isn’t necessary, knowing which protocols a device supports and the frequencies it operates on is essential. <br />
                For instance, when capturing packets from an 802.11ac transmitter, understanding concepts like beamforming and streams can be useful in troubleshooting issues.
              </p>
              <br /><br />
              <p>
                Second, this module functions as a quick reference guide. Given the breadth of terms and concepts, it's unrealistic to remember everything. Instead, when working with new hardware, revisiting this module for a refresher may prove beneficial.
              </p>
              <br /><br />
              <p><strong>802.11 Standards and Amendments</strong><br />
                IEEE 802.11 is the standard for wireless local area networks (WLAN). It defines specifications for the physical layer and the Media Access Control (MAC) layer within the OSI model.<br />
                As wireless technology has evolved, the 802.11 committee has introduced several amendments to the original standard. Below are some key amendments:
              </p>
              <ul>
                <li>802.11: The original WLAN standard.</li>
                <li>802.11a: Supports speeds up to 54 Mbit/s on the 5 GHz band.</li>
                <li>802.11b: Provides 5.5 Mbit/s and 11 Mbit/s speeds on the 2.4 GHz band.</li>
                <li>802.11g: Supports up to 54 Mbit/s on 2.4 GHz and is backward compatible with 802.11b.</li>
                <li>802.11h: Introduces regulatory requirements for power and transmission limits in the 5 GHz band.</li>
                <li>802.11i: Enhances security measures.</li>
                <li>802.11n: Increases throughput using Multiple Input/Multiple Output (MIMO), also known as Wi-Fi 4.</li>
                <li>802.11ac: Provides very high throughput below 6 GHz, commonly known as Wi-Fi 5.</li>
                <li>802.11ad: Enables multi-gigabit speeds in the 60 GHz band, also referred to as WiGig.</li>
                <li>802.11ax: Improves efficiency in wireless networks, known as Wi-Fi 6.</li>
              </ul>
              <br />
              <p><strong>IEEE 802.11b</strong><br />
                The IEEE 802.11b standard introduced Complementary Code Keying (CCK), enabling data transfer rates of 5.5 Mbps and 11 Mbps in the 2.4 GHz frequency band, which ranges from 2.4 GHz to 2.485 GHz. This standard operates across 14 channels, each 22 MHz wide. However, due to the limited spectrum, only three non-overlapping channels are available in most regions.<br />
                When referring to a channel frequency, the center frequency is used. The center frequency represents the midpoint of a channel’s bandwidth. For instance, channel 1 spans from 2.401 GHz to 2.423 GHz, but its center frequency is 2.412 GHz.
              </p>
              <br />
              <p><strong>IEEE 802.11a</strong><br />
                The IEEE 802.11a standard was introduced alongside 802.11b but operates in the 5 GHz frequency band. This provides more available channels with reduced interference compared to 2.4 GHz networks. Unlike 802.11b, which uses CCK modulation, 802.11a relies on Orthogonal Frequency-Division Multiplexing (OFDM) for transmission. This allows data rates of up to 54 Mbps over 20 MHz-wide channels.
                <br />
                OFDM works by dividing a channel into multiple smaller subchannels, called subcarriers, which carry data simultaneously. Each 802.11a channel consists of 64 subcarriers, with 48 used for data transmission, 4 serving as synchronization pilots, and 12 left unused. Each subcarrier has a width of 312.5 KHz.
                <br />
                As with 802.11b, the frequency allocation and power limits of 802.11a vary by country. Due to the complexity of 5 GHz spectrum regulations, channel availability may differ across regions and change over time.
              </p>
              <br /><br />
              <p><strong>IEEE 802.11g</strong><br />
                IEEE 802.11g builds upon 802.11b by incorporating OFDM while operating within the 2.4 GHz band. It offers improved performance and maintains backward compatibility with 802.11b devices. When an 802.11b device connects to an 802.11g network, the connection speed may drop to accommodate the older standard.
                <br />
                The channel structure in 802.11g remains the same as in 802.11b. However, channel 14 was only available in Japan for 802.11b networks.
                <br />
                Although 802.11a, 802.11b, and 802.11g sometimes utilize multiple antennas, they do not support Multiple-Input Multiple-Output (MIMO). Instead, they use Single Input Single Output (SISO) technology, where only one antenna transmits and receives at a time. In these standards, multiple antennas are primarily used for antenna diversity, which improves signal reception by selecting the strongest signal available.
              </p>
              <br /><br />
              <p><strong>IEEE 802.11n</strong><br />
                IEEE 802.11n introduced significant advancements in both speed and range for wireless networks, operating on both 2.4 GHz and 5 GHz bands. Initially, the standard allowed speeds up to 74 Mbps, with later implementations reaching up to 300 Mbps. A key improvement in 802.11n is the introduction of MIMO technology.
                <br />
                MIMO employs multiple antennas for transmitting and receiving signals, utilizing multipath propagation to improve performance. While traditional signals degrade when bouncing off obstacles, MIMO leverages these reflections to enhance data transmission.
                <br />
                The 802.11n standard supports up to four spatial streams, each requiring a separate antenna, allowing for greater data throughput. In commercial devices, up to three spatial streams are commonly available. Additionally, 802.11n supports 40 MHz-wide channels, doubling the data rate compared to 20 MHz-wide channels used in previous standards.
                <br />
                A new feature introduced in 802.11n is Greenfield mode, which optimizes wireless transmission by restricting network access to 802.11n devices only. This eliminates the need to support older standards, thereby increasing efficiency.
              </p>
              <br /><br />
              <p><strong>MIMO Notation and Configuration</strong><br />
                The number of streams and achievable data rates in a wireless network depend on the number of antennas on both the transmitter and receiver. The standard notation for MIMO (Multiple Input, Multiple Output) configurations follows the format t×r:s, where:
              </p>
              <ul>
                <li>t represents the number of transmit (TX) chains.</li>
                <li>r represents the number of receive (RX) chains.</li>
                <li>s denotes the maximum number of spatial streams the radio can use.</li>
              </ul>
              <p>For example:</p>
              <ul>
                <li>2x2:2: 2 TX chains, 2 RX chains, and 2 streams.</li>
                <li>3x3:3: 3 TX chains, 3 RX chains, and 3 streams.</li>
              </ul>
              <p>An alternative notation format, tTrR, omits the stream count. Using this format: 2T2R corresponds to 2x2:2. 3T3R corresponds to 3x3:3.</p>
              <br />
              <p>The number of antennas is always equal to or greater than the number of streams. For instance, a device with four antennas might support only three streams, such as the Alfa AWUS1900 wireless adapter, which has four TX and RX chains but only supports three spatial streams (4x4:3).</p>
              <br />
              <p>When analyzing networks, the number of streams is crucial for ensuring compatibility with client devices. A device with fewer streams than a client cannot fully decode its communication.</p>
              <br />
              <p><strong>Modulation and Coding Scheme (MCS) Rates</strong><br />
                i-Fi networks, particularly 802.11n, utilize various modulation techniques, coding rates, and spatial streams to achieve speeds of up to 600 Mbps, the maximum supported rate for most consumer devices. The MCS index is key to determining a network's data throughput.
                <br />
                Higher MCS rates result in faster speeds but require cleaner signals. MCS index values range from 0 to 9, with each value corresponding to different modulation schemes (e.g., BPSK, QPSK, QAM) and coding rates. A higher MCS index provides faster throughput but demands higher signal quality.
              </p>
              <br />
            </div>
          )
        },
        {
          title: "Manual Network Connections",
          summary: (
            <div style={{ textAlign: 'left' }}>
              <p><strong>Overview of Wireless Penetration Testing</strong></p>
              <p>
                Wireless penetration testing tools usually require disabling network managers because they interfere with the proper operation of the tools.
              </p>
              <br /><br />
              <p><strong>Connecting to an Access Point</strong></p>
              <p>
                Several wireless clients exist on Linux. The most common one is wpa_supplicant, as it is commonly used by network managers across Linux distributions to connect to Wi-Fi networks, even if they don't have any encryption or still use WEP.
              </p>
              <p>
                wpa_supplicant can either be used via a command line interface, with wpa_cli, or with configuration files containing the settings of the network. In a sample configuration file, each network connection is defined within a network item.
              </p>
             
              <br />
              <p>
                Connecting to a WPA-PSK network is a bit more involved. We need to add two parameters inside the network item:
              </p>
              
              <p>
                wpa_supplicant will automatically choose between TKIP and CCMP based on availability, but it is possible to force one or the other by adding pairwise=CCMP or pairwise=TKIP to the configuration if necessary.
              </p>
              <p>
                wpa_supplicant supports WPA3, OWE, and can handle WPA Enterprise networks as well; however, these are out of scope of this module. The configuration file provided with the wpa_supplicant source code provides a number of examples for various network settings, including WPA3, OWE, and WPA Enterprise.
              </p>
              <p>
                A quick and easy alternative is wpa_passphrase. This tool can generate a configuration file for a basic WPA-PSK network. It requires at least one parameter, the ESSID. The second parameter, the passphrase, is optional, for security reasons. If the second parameter is omitted, it will prompt for the passphrase. This tool will output the content of a configuration file. We can redirect the output to a file with 'wpa_passphrase home_network , home_network.conf'
              </p>
              <p>
                Using the example in the above text, we'll create a file called wifi-client.conf. We now have to start wpa_supplicant with a couple of parameters. To connect to the network, we have to start wpa_supplicant with the network interface using -i, and the configuration file with -c. Assuming the interface is wlan0, the command and the output will look like the following.
              </p>
              <pre>
                kali@kali:~$ sudo wpa_supplicant -i wlan0 -c wifi-client.conf
                Successfully initialized wpa_supplicant
                wlan0: SME: Trying to authenticate with 00:ef:78:be:0d:98 (SSID='home_network' freq=2437 MHz)
                wlan0: Trying to associate with 00:ef:78:be:0d:98 (SSID='home_network' freq=2437 MHz)
                wlan0: Associated with 00:ef:78:be:0d:98
                wlan0: CTRL-EVENT-SUBNET-STATUS-UPDATE status=0
                wlan0: WPA: Key negotiation completed with 00:ef:78:be:0d:98 [PTK=CCMP GTK=CCMP]
                wlan0: CTRL-EVENT-CONNECTED - Connection to 00:ef:78:be:0d:98 completed [id=0 id_str=]

              </pre>

              <p>
              Now that we've confirmed we can successfully connect to the network, we can append -B to our wpa_supplicant command line to run it in the background. Once connected, we usually request a DHCP lease using dhclient:

              </p>

              <pre>
              kali@kali:~$ sudo dhclient wlan0
              </pre>
              <p><strong>Setting up an Access Point</strong></p>

              <p>Setting up an access point requires two distinct network interfaces, and involves five steps:              

                <ul>
                <li>- Configure Internet access on the system.                </li>
                <li>- Set up a static IP for the wireless interface.                </li>
                <li>- DHCP server set up, to provide automatic IP configuration for Wi-Fi clients.                </li>
                <li>- Add routing to provide Internet access to the Wi-Fi clients.                </li>
                <li>- Configure the Wi-Fi interface in AP mode.                </li>
                </ul>
              </p>

              <p><strong>Internet Access</strong></p>

              <p>
              We first need to have Internet access on the system. It doesn't really matter if it is via Ethernet, Wi-Fi, or if it's mobile broadband.
              Ethernet is fairly easy to set up, and in most cases, we just need to get a DHCP lease like we did in the previous steps.
              If the connection is Wi-Fi, we can refer to the section above to configure it. It is important to note that while it is possible to do client and AP on a single Wi-Fi interface, configuration is a bit more involved, has limitations, and may not work properly (the Wi-Fi adapters recommended for this course provide this ability). Therefore, we must be careful choosing the interface to use for the access point, as not all Wi-Fi adapters support that mode. We can use iw to display what modes each of the wireless interface support.
              </p>
              <pre>kali@kali:~$ sudo iw list              </pre>

                <p>
                Supported interface modes:
                  <ul>
                    <li>IBSS</li>
                    <li>managed</li>
                    <li>AP</li>
                    <li>AP/VLAN</li>
                    <li>monitor</li>
                    <li>mesh point</li>
                    <li>2P-client</li>
                    <li>P2P-GO</li>
                    <li>outside context of a BSS</li>
                  </ul>
                </p>

                <p><strong>Static IP on Access Point Wireless Interface</strong></p>
                <p>We now have to choose an IP address that doesn't conflict with the network and CIDR of the interface we just configured for Internet. Most routers offer an IP in the 192.168.1.0/24 range, so we will use the 10.0.0.0/24 range and set the wireless interface for the access point to 10.0.0.1. We'll assume the interface is wlan0.
                </p> 
                <pre>kali@kali:~$ sudo ip link set wlan0 up                </pre>
                <pre>kali@kali:~$ sudo ip addr add 10.0.0.1/24 dev wlan0                </pre>

                <p><strong>DHCP Server</strong></p>
                <p>We will set up the DHCP server on the wireless interface (wlan0) using dnsmasq, which is a DNS and DHCP server. We'll create the following configuration file and save it as dnsmasq.conf.
                </p>

                <p>
                Main options
                <ul>
                  <li>domain-needed</li>
                  <li>bogus-priv</li>
                  <li>no-resolv</li>
                  <li>filterwin2k</li>
                  <li>expand-hosts</li>
                  <li>domain=localdomain</li>
                  <li>local=/localdomain/</li>
                  <br></br>
                  Only listen on this address. When specifying an interface, it also listens on localhost. We don't want to interrupt any local resolution listen-address=10.0.0.1
                </ul>
                </p>

                <p>
                DHCP range
                <ul>
                  <li>dhcp-range=10.0.0.100,10.0.0.199,12h</li>
                  <li>dhcp-lease-max=100</li>
                  <li>Router: wlan0</li>
                  <li>dhcp-option=option:router,10.0.0.1</li>
                  <li>dhcp-authoritative</li>
                </ul>
                </p>

                <p>
                DNS: Primary and secondary Google DNS
                <ul>
                  <li>server=8.8.8.8</li>
                  <li>server=8.8.4.4</li>
                </ul>
                </p>

                <p>
                Now that our dnsmasq configuration is complete, we will run dnsmasq with --conf-file followed by the path of our configuration file.
                <ul>
                  <li>kali@kali:~$ sudo dnsmasq --conf-file=dnsmasq.conf </li>
                </ul>
                </p>
                
                <p>
                After startup, dnsmasq will create a file containing its process ID in /var/run/dnsmasq.pid, which lets us find and kill the process when we are done. We will inspect syslog to confirm it started successfully.

                <pre>
                  <ul>
                    <li>kali@kali:~$ sudo tail /var/log/syslog | grep dnsmasq</li>
                    <li>Nov 10 19:36:39 kali dnsmasq[158592]: started, version 2.82 cachesize 150</li>
                    <li>Nov 10 19:36:39 kali dnsmasq[158592]: compile time options: IPv6 GNU-getopt DBus no-UBus i18n IDN2 DHCP DHCPv6 no-Lua TFTP conntrack ipset auth DNSSEC loop-detect inotify dumpfile
                    </li>
                    <li>Nov 10 19:36:39 kali dnsmasq-dhcp[158592]: DHCP, IP range 10.0.0.100 -- 10.0.0.199, lease time 12h
                    </li>
                    <li>Nov 10 19:36:39 kali dnsmasq[158592]: using nameserver 8.8.4.4#53
                    </li>
                  </ul>
                </pre>
                </p>

                <p>
                  <strong>Routing</strong>
                  We now have to enable routing and add a few firewall rules so we can act as a router and allow clients to reach the Internet. We first have to enable IP forwarding, which we can do by setting the ip_forward kernel variable to "1".

<pre>kali@kali:~$ echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
</pre>

Although this should technically suffice to forward packets over to the Internet, our clients have a different IP address range than the one of our Internet connection. Since the Internet doesn't know where to route that back, packets will get dropped. In order to resolve


                </p>
                
            </div>
          )
        }
        
      ],
      quiz: {
        questions: [
          {
            "id": 1,
            "question": "What is the primary purpose of wpa_supplicant in Linux?",
            "options": [
              "To configure Ethernet interfaces",
              "To manage wireless network connections",
              "To monitor network traffic"
            ],
            "correctAnswer": "To manage wireless network connections"
          },
          {
            "id": 2,
            "question": "Which command is used to connect a Linux system to a wireless network with wpa_supplicant?",
            "options": [
              "sudo iw list",
              "sudo wpa_supplicant -i wlan0 -c wifi-client.conf",
              "sudo ifconfig wlan0 up"
            ],
            "correctAnswer": "sudo wpa_supplicant -i wlan0 -c wifi-client.conf"
          },
          {
            "id": 3,
            "question": "In the wpa_supplicant configuration, what does 'scan_ssid=1' do?",
            "options": [
              "It scans only for hidden SSIDs",
              "It disables network scanning",
              "It connects to the first available SSID"
            ],
            "correctAnswer": "It scans only for hidden SSIDs"
          },
          {
            "id": 4,
            "question": "Which of the following commands is used to assign an IP address to a wireless network interface in Linux?",
            "options": [
              "sudo iwconfig wlan0 ip address 192.168.1.1",
              "sudo dhclient wlan0",
              "sudo wpa_supplicant wlan0"
            ],
            "correctAnswer": "sudo dhclient wlan0"
          },
          {
            "id": 5,
            "question": "What is the role of the 'auth_algs' setting in the hostapd.conf file for wireless access points?",
            "options": [
              "It sets the encryption type",
              "It specifies which authentication algorithms are allowed",
              "It defines the wireless channel width"
            ],
            "correctAnswer": "It specifies which authentication algorithms are allowed"
          },
          {
            "id": 6,
            "question": "What does the 'sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE' command do?",
            "options": [
              "It enables firewall rules",
              "It masquerades outgoing traffic on the eth0 interface",
              "It blocks traffic from the wlan0 interface"
            ],
            "correctAnswer": "It masquerades outgoing traffic on the eth0 interface"
          },
          {
            "id": 7,
            "question": "What is the purpose of the 'dhcp-range' option in the dnsmasq.conf file?",
            "options": [
              "To specify the IP address range for DHCP assignments",
              "To configure the DNS server IP addresses",
              "To define the maximum number of clients"
            ],
            "correctAnswer": "To specify the IP address range for DHCP assignments"
          },
          {
            "id": 8,
            "question": "Which wireless mode is used to monitor all wireless traffic on a network in Linux?",
            "options": [
              "Managed mode",
              "Ad-hoc mode",
              "Monitor mode"
            ],
            "correctAnswer": "Monitor mode"
          },
          {
            "id": 9,
            "question": "In wireless networking, which of the following commands is used to display available Wi-Fi networks in Linux?",
            "options": [
              "sudo iwlist wlan0 scan",
              "sudo wpa_supplicant -i wlan0 -c wifi-client.conf",
              "sudo ifconfig wlan0"
            ],
            "correctAnswer": "sudo iwlist wlan0 scan"
          },
          {
            "id": 10,
            "question": "Which command is used to bring up a wireless network interface in Linux?",
            "options": [
              "sudo iw dev wlan0 set type managed",
              "sudo ifconfig wlan0 up",
              "sudo wpa_supplicant -i wlan0 -c wifi-client.conf"
            ],
            "correctAnswer": "sudo ifconfig wlan0 up"
          }
        ]
      }
    },
    {
      id: "module2",
      title: "Wireless Network Analysis & Reconnaissance",
      sections: [
        {
          title: "Introduction to OSWP Road Map",
          summary: (
            <div style={{ textAlign: 'center' }}>
              <p>1. **Pre-Engagement**: Begin by learning the basics of wireless networking, understanding Wi-Fi standards, and common attack vectors. Knowledge of networking protocols (like TCP/IP, DHCP, and DNS) is essential.</p>
              <p>2. **Wireless Security Fundamentals**: Study the encryption standards (WEP, WPA, WPA2, WPA3) and their weaknesses. Learn about different wireless attack techniques such as deauthentication attacks, rogue AP attacks, and the methods used to crack WEP and WPA passwords.</p>
              <p>3. **Tools for Wireless Hacking**: Familiarize yourself with tools like Aircrack-ng, Kismet, Wireshark, and Reaver. These are essential for capturing packets, analyzing wireless networks, and exploiting vulnerabilities.</p>
              <p>4. **Advanced Exploitation**: Learn about advanced wireless attacks like Evil Twin, Karma attacks, and wireless relay attacks. Practice exploiting vulnerabilities in various encryption protocols and wireless devices.</p>
              <p>5. **OSWP Exam Preparation**: Once you have gained hands-on experience, review the OSWP exam objectives and practice labs. Focus on areas such as identifying vulnerable networks, cracking WEP/WPA, and simulating attacks on real-world wireless networks.</p>
              <p>6. **Certification**: The final step is the OSWP exam, which tests your ability to perform wireless penetration tests and exploit weaknesses in wireless networks. Passing the exam will grant you the OSWP certification, showcasing your expertise in wireless security.</p>
            </div>
          )
        },
        {
          title: "Reconnaissance",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Weaponization",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Delivery",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Exploitation",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Installation",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Command & Control",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Actions on Objectives (Exfiltration)",
          summary: (
            <>
              <p></p>
            </>
          )
        }
      ], quiz: {
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
              <p></p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK Matrix",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK for Cloud Matrix",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK tactics",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK techniques",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "MITRE ATT&CK vs. the Cyber Kill Chain",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "How Do You Use the MITRE ATT&CK Matrix",
          summary: (
            <>
              <p></p>
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
              <p></p>
            </>
          )
        },
        {
          title: "Hash values",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "IP addresses",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Domain names",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Network Artifacts",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Host Artifacts",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Tools",
          summary: (
            <>
              <p></p>
            </>
          )
        },
        {
          title: "Tactics, Techniques and Procedures (TTPs)",
          summary: (
            <>
              <p></p>
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
