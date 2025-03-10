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
            <div style={{ textAlign: 'left' }}>
              <p className="p-5"><strong>Introduction to OSWP Road Map</strong></p>
              <p className="p-5">
                Wireless networks are an essential part of modern communication, but they also introduce significant security risks. The Offensive Security Wireless Professional (OSWP) certification is designed to equip cybersecurity professionals with the skills to assess and exploit vulnerabilities in Wi-Fi networks.
              </p> 
              <p className="p-5">
                <strong>Who Is This Course For? </strong>
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
        
              <p className="p-5">
                <strong>What You’ll Learn? </strong>
              </p>
              <p className="p-5">
                In this course, we will cover the fundamentals of Wi-Fi security, the methodologies used by attackers, and the defensive strategies to secure wireless networks. By the end, you'll have hands-on experience with real-world Wi-Fi attacks and be fully prepared for the OSWP exam.
              </p>
        
              <p className="p-5">
                <strong> Course Structure: </strong>
              </p>
              <p className="p-5">
                This course follows a practical, hands-on approach, covering:
              </p>
              <ul>
                <li>1️⃣ Wireless Network Basics – 802.11 standards, encryption protocols, and wireless reconnaissance.</li>
                <li>2️⃣ Packet Capture & Analysis – Using tools like Airodump-ng and Wireshark.</li>
                <li>3️⃣ Wi-Fi Exploitation Techniques – Cracking WEP, WPA/WPA2, and PMKID attacks.</li>
                <li>4️⃣ Rogue Access Points & Evil Twin Attacks – Setting up fake APs for credential theft.</li>
                <li>5️⃣ Post-Exploitation & Defense Strategies – How to protect against common wireless threats.</li>
              </ul>
        
              <p className="p-5">
                <strong>What You Need Before Starting? </strong>
              </p>
        
              <ul>
                <li>📌 Basic Linux knowledge (Kali Linux is recommended).</li>
                <li>📌 Understanding of networking concepts (IP addresses, DHCP, etc.).</li>
                <li>📌 A wireless network adapter that supports packet injection (e.g., ALFA AWUS036NHA).</li>
              </ul>
        
              By the end of this course, you will have a deep understanding of wireless security, be able to perform real-world Wi-Fi penetration tests, and be well-prepared for the OSWP exam.
        
              
              👉 Let’s dive in and start hacking Wi-Fi! 🚀
            </div>
          )
        },
        {
          title: "Overview of IEEE 802.11 Standards",
          summary: (
            <div style={{ textAlign: 'left' }}>
              <p className="p-5"><strong>Overview of IEEE 802.11 Standards</strong></p>
              <p className="p-5">
                This module introduces key wireless communication concepts and terminology as defined by various IEEE 802.11 protocols. Each wireless card supports specific 802.11 standards, and compatibility with other protocols may vary.
              </p>
              
              <p className="p-5"><strong>Key Monitoring Techniques:</strong></p>
              <p className="p-5">
                Understanding these protocols is crucial because both the hardware we use and the testing environment's equipment influence our work. A solid grasp of hardware capabilities allows for proper utilization. With that in mind, this module serves two main purposes.
              </p>
              
              <p className="p-5">
                First, it provides an overview of the different 802.11 standards and their distinctions. While memorization isn’t necessary, knowing which protocols a device supports and the frequencies it operates on is essential. 
                For instance, when capturing packets from an 802.11ac transmitter, understanding concepts like beamforming and streams can be useful in troubleshooting issues.
              </p>
              
              <p className="p-5">
                Second, this module functions as a quick reference guide. Given the breadth of terms and concepts, it's unrealistic to remember everything. Instead, when working with new hardware, revisiting this module for a refresher may prove beneficial.
              </p>
              
              <p className="p-5"><strong>802.11 Standards and Amendments</strong>
                IEEE 802.11 is the standard for wireless local area networks (WLAN). It defines specifications for the physical layer and the Media Access Control (MAC) layer within the OSI model.
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
              
              <p className="p-5"><strong>IEEE 802.11b</strong>
                The IEEE 802.11b standard introduced Complementary Code Keying (CCK), enabling data transfer rates of 5.5 Mbps and 11 Mbps in the 2.4 GHz frequency band, which ranges from 2.4 GHz to 2.485 GHz. This standard operates across 14 channels, each 22 MHz wide. However, due to the limited spectrum, only three non-overlapping channels are available in most regions.
                When referring to a channel frequency, the center frequency is used. The center frequency represents the midpoint of a channel’s bandwidth. For instance, channel 1 spans from 2.401 GHz to 2.423 GHz, but its center frequency is 2.412 GHz.
              </p>
              
              <p className="p-5"><strong>IEEE 802.11a</strong>
                The IEEE 802.11a standard was introduced alongside 802.11b but operates in the 5 GHz frequency band. This provides more available channels with reduced interference compared to 2.4 GHz networks. Unlike 802.11b, which uses CCK modulation, 802.11a relies on Orthogonal Frequency-Division Multiplexing (OFDM) for transmission. This allows data rates of up to 54 Mbps over 20 MHz-wide channels.
                
                OFDM works by dividing a channel into multiple smaller subchannels, called subcarriers, which carry data simultaneously. Each 802.11a channel consists of 64 subcarriers, with 48 used for data transmission, 4 serving as synchronization pilots, and 12 left unused. Each subcarrier has a width of 312.5 KHz.
                
                As with 802.11b, the frequency allocation and power limits of 802.11a vary by country. Due to the complexity of 5 GHz spectrum regulations, channel availability may differ across regions and change over time.
              </p>
              
              <p className="p-5"><strong>IEEE 802.11g</strong>
                IEEE 802.11g builds upon 802.11b by incorporating OFDM while operating within the 2.4 GHz band. It offers improved performance and maintains backward compatibility with 802.11b devices. When an 802.11b device connects to an 802.11g network, the connection speed may drop to accommodate the older standard.
                
                The channel structure in 802.11g remains the same as in 802.11b. However, channel 14 was only available in Japan for 802.11b networks.
                
                Although 802.11a, 802.11b, and 802.11g sometimes utilize multiple antennas, they do not support Multiple-Input Multiple-Output (MIMO). Instead, they use Single Input Single Output (SISO) technology, where only one antenna transmits and receives at a time. In these standards, multiple antennas are primarily used for antenna diversity, which improves signal reception by selecting the strongest signal available.
              </p>
              
              <p className="p-5"><strong>IEEE 802.11n</strong>
                IEEE 802.11n introduced significant advancements in both speed and range for wireless networks, operating on both 2.4 GHz and 5 GHz bands. Initially, the standard allowed speeds up to 74 Mbps, with later implementations reaching up to 300 Mbps. A key improvement in 802.11n is the introduction of MIMO technology.
                
                MIMO employs multiple antennas for transmitting and receiving signals, utilizing multipath propagation to improve performance. While traditional signals degrade when bouncing off obstacles, MIMO leverages these reflections to enhance data transmission.
                
                The 802.11n standard supports up to four spatial streams, each requiring a separate antenna, allowing for greater data throughput. In commercial devices, up to three spatial streams are commonly available. Additionally, 802.11n supports 40 MHz-wide channels, doubling the data rate compared to 20 MHz-wide channels used in previous standards.
                
                A new feature introduced in 802.11n is Greenfield mode, which optimizes wireless transmission by restricting network access to 802.11n devices only. This eliminates the need to support older standards, thereby increasing efficiency.
              </p>
              
              <p className="p-5"><strong>MIMO Notation and Configuration</strong>
                The number of streams and achievable data rates in a wireless network depend on the number of antennas on both the transmitter and receiver. The standard notation for MIMO (Multiple Input, Multiple Output) configurations follows the format t×r:s, where:
              </p>
              <ul>
                <li>t represents the number of transmit (TX) chains.</li>
                <li>r represents the number of receive (RX) chains.</li>
                <li>s denotes the maximum number of spatial streams the radio can use.</li>
              </ul>
              <p className="p-5">For example:</p>
              <ul>
                <li>2x2:2: 2 TX chains, 2 RX chains, and 2 streams.</li>
                <li>3x3:3: 3 TX chains, 3 RX chains, and 3 streams.</li>
              </ul>
              <p className="p-5">An alternative notation format, tTrR, omits the stream count. Using this format: 2T2R corresponds to 2x2:2. 3T3R corresponds to 3x3:3.</p>
              
              <p className="p-5">The number of antennas is always equal to or greater than the number of streams. For instance, a device with four antennas might support only three streams, such as the Alfa AWUS1900 wireless adapter, which has four TX and RX chains but only supports three spatial streams (4x4:3).</p>
              
              <p className="p-5">When analyzing networks, the number of streams is crucial for ensuring compatibility with client devices. A device with fewer streams than a client cannot fully decode its communication.</p>
              
              <p className="p-5"><strong>Modulation and Coding Scheme (MCS) Rates</strong>
                i-Fi networks, particularly 802.11n, utilize various modulation techniques, coding rates, and spatial streams to achieve speeds of up to 600 Mbps, the maximum supported rate for most consumer devices. The MCS index is key to determining a network's data throughput.
                
                Higher MCS rates result in faster speeds but require cleaner signals. MCS index values range from 0 to 9, with each value corresponding to different modulation schemes (e.g., BPSK, QPSK, QAM) and coding rates. A higher MCS index provides faster throughput but demands higher signal quality.
              </p>
              
            </div>
          )
        },
        {
          title: "Manual Network Connections",
          summary: (
            <div style={{ textAlign: "left" }}>
              <p className="p-5"><strong>Overview of Wireless Penetration Testing</strong></p>
              <p className="p-5">
                Wireless penetration testing tools usually require disabling network managers because they interfere with the proper operation of the tools.
              </p>
              
        
              <p className="p-5"><strong>Connecting to an Access Point</strong></p>
              
              
              <p className="p-5">
                Several wireless clients exist on Linux. The most common one is wpa_supplicant, as it is commonly used by network managers across Linux distributions to connect to Wi-Fi networks, even if they don't have any encryption or still use WEP.
              </p>
              <p className="p-5">
                wpa_supplicant can either be used via a command line interface, with wpa_cli, or with configuration files containing the settings of the network. In a sample configuration file, each network connection is defined within a network item.
              </p>
              
        
              <p className="p-5">
                Connecting to a WPA-PSK network is a bit more involved. We need to add two parameters inside the network item:
              </p>
              <p className="p-5">
                wpa_supplicant will automatically choose between TKIP and CCMP based on availability, but it is possible to force one or the other by adding <code className="bg-gray-800 text-white p-2 rounded">pairwise=CCMP</code> or <code className="bg-gray-800 text-white p-2 rounded">pairwise=TKIP</code> to the configuration if necessary.
              </p>
              <p className="p-5">
                wpa_supplicant supports WPA3, OWE, and can handle WPA Enterprise networks as well; however, these are out of scope of this module. The configuration file provided with the wpa_supplicant source code provides a number of examples for various network settings, including WPA3, OWE, and WPA Enterprise.
              </p>
              <p className="p-5">
                A quick and easy alternative is wpa_passphrase. This tool can generate a configuration file for a basic WPA-PSK network. It requires at least one parameter, the ESSID. The second parameter, the passphrase, is optional, for security reasons. If the second parameter is omitted, it will prompt for the passphrase. This tool will output the content of a configuration file.
              </p>
              
              <p className="p-5">Example command:</p>
              <pre>
                wpa_passphrase home_network &gt; home_network.conf
              </pre>
        
              <p className="p-5">
                To connect to the network, use the following command:
              </p>
              <pre>
                sudo wpa_supplicant -i wlan0 -c wifi-client.conf
              </pre>
              
              <p className="p-5"><strong>Setting up an Access Point</strong></p>
              
              
              <p className="p-5">Setting up an access point requires two distinct network interfaces and involves five steps:</p>
              <ul>
                <li>Configure Internet access on the system.</li>
                <li>Set up a static IP for the wireless interface.</li>
                <li>Set up a DHCP server to provide automatic IP configuration for Wi-Fi clients.</li>
                <li>Add routing to provide Internet access to Wi-Fi clients.</li>
                <li>Configure the Wi-Fi interface in AP mode.</li>
              </ul>
              
              <p className="p-5"><strong>Internet Access</strong></p>
              <p className="p-5">
                We first need to have Internet access on the system. It doesn't really matter if it is via Ethernet, Wi-Fi, or mobile broadband.
              </p>
              <p className="p-5">
                Ethernet is fairly easy to set up, and in most cases, we just need to get a DHCP lease like we did in the previous steps.
              </p>
              
              <pre>
                sudo iw list
              </pre>
        
              <p className="p-5"><strong>Static IP on Access Point Wireless Interface</strong></p>
              
              
              <p className="p-5">
                We now have to choose an IP address that doesn't conflict with the network and CIDR of the interface we just configured for Internet. Most routers offer an IP in the <code className="bg-gray-800 text-white p-2 rounded">192.168.1.0/24</code> range, so we will use the <code className="bg-gray-800 text-white p-2 rounded">10.0.0.0/24</code> range and set the wireless interface for the access point to <code className="bg-gray-800 text-white p-2 rounded">10.0.0.1</code>.
              </p>
              <pre>
                sudo ip link set wlan0 up
              </pre>
              <pre>
                sudo ip addr add 10.0.0.1/24 dev wlan0
              </pre>
        
              <p className="p-5"><strong>DHCP Server</strong></p>
              
              
              <p className="p-5">We will set up the DHCP server on the wireless interface (<code className="bg-gray-800 text-white p-2 rounded">wlan0</code>) using <code className="bg-gray-800 text-white p-2 rounded">dnsmasq</code>, which is a DNS and DHCP server.</p>
              <p className="p-5">Create a configuration file <code className="bg-gray-800 text-white p-2 rounded">dnsmasq.conf</code> with the following content:</p>
              <pre>
                domain-needed
                bogus-priv
                no-resolv
                filterwin2k
                expand-hosts
                domain=localdomain
                local=/localdomain/
                listen-address=10.0.0.1
              </pre>
              
              <p className="p-5">DHCP range settings:</p>
              <pre>
                dhcp-range=10.0.0.100,10.0.0.199,12h
                dhcp-lease-max=100
                dhcp-option=option:router,10.0.0.1
                dhcp-authoritative
              </pre>
        
              <p className="p-5">To run <code className="bg-gray-800 text-white p-2 rounded">dnsmasq</code>:</p>
              <pre>
                sudo dnsmasq --conf-file=dnsmasq.conf
              </pre>
        
              <p className="p-5">Check logs to confirm:</p>
              <pre>
                sudo tail /var/log/syslog | grep dnsmasq
              </pre>
        
              <p className="p-5">Now, your network should be set up correctly!</p>
            </div>
          ),
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
    title: "Manual Network Connections & Wireless Adapter Configuration",
    summary: (
      <div style={{ textAlign: 'left' }}>
        <p className="p-5">
          When conducting wireless penetration testing, it's often necessary to disable network managers, as they can interfere with the tools being used. However, there are instances when we still need internet access or even need to share it. Although network managers can typically handle this, we will explore how to manually configure the setup, as network managers are disabled during testing. It's important to use a separate network interface from the one employed for penetration testing.
        </p>

        <p className="p-5">
          <strong>Connecting to an Access Point</strong>
        </p>
        <p className="p-5">
          Linux offers several wireless clients, with <code className="bg-gray-800 text-white p-2 rounded">wpa_supplicant</code> being the most widely used. It connects to Wi-Fi networks on many Linux distributions, even for unencrypted networks or those still using WEP.
        </p>
        <p className="p-5">
          <code className="bg-gray-800 text-white p-2 rounded">wpa_supplicant</code> can be controlled via a command-line interface (<code className="bg-gray-800 text-white p-2 rounded">wpa_cli</code>) or through configuration files specifying network settings.
        </p>

        <p className="p-5">
          This configuration allows the system to connect to an open network called "hotel_wifi" and instructs <code className="bg-gray-800 text-white p-2 rounded">wpa_supplicant</code> to scan for SSIDs first.
        </p>
        <p className="p-5">
          The tool will automatically select between TKIP and CCMP for encryption, but you can specify a preference by adding <code className="bg-gray-800 text-white p-2 rounded">pairwise=CCMP</code> or <code className="bg-gray-800 text-white p-2 rounded">pairwise=TKIP</code> to the configuration. <code className="bg-gray-800 text-white p-2 rounded">wpa_supplicant</code> also supports WPA3, OWE, and WPA Enterprise, though these are outside the scope of this tutorial. 
        </p>
        <p className="p-5">
          To simplify configuration, you can use the <code className="bg-gray-800 text-white p-2 rounded">wpa_passphrase</code> tool, which generates configuration files for basic WPA-PSK networks. This tool requires the ESSID and optionally, a passphrase. If the passphrase isn't provided, it will prompt for it and output the configuration to a file.
        </p>
        <p className="p-5">
          Using the sample configuration from above, the following commands would generate and use a configuration file (<code className="bg-gray-800 text-white p-2 rounded">wifi-client.conf</code>):
        </p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo wpa_supplicant -i wlan0 -c wifi-client.conf
        </code>

        <p className="p-5">
          Once successfully connected, we can run <code className="bg-gray-800 text-white p-2 rounded">wpa_supplicant</code> in the background by appending <code className="bg-gray-800 text-white p-2 rounded">-B</code> and then request a DHCP lease with <code className="bg-gray-800 text-white p-2 rounded">dhclient</code>:
        </p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo dhclient wlan0
        </code>

        <p className="p-5"><strong>Setting up an Access Point</strong></p>
        <p className="p-5">
          To set up an access point, you need two distinct network interfaces. The process involves five main steps:
        </p>
        <ul>
          <li>Configure Internet Access on the system.</li>
          <li>Set a Static IP on the wireless interface.</li>
          <li>Set up a DHCP server to provide IP addresses to Wi-Fi clients.</li>
          <li>Add routing to enable Internet access for Wi-Fi clients.</li>
          <li>Configure the wireless interface in AP mode.</li>
        </ul>

        <p className="p-5"><strong>Internet Access</strong></p>
        <p className="p-5">
          You need an active Internet connection on the system, whether through Ethernet, Wi-Fi, or mobile broadband. Use <code className="bg-gray-800 text-white p-2 rounded">iw</code> to list supported modes for your Wi-Fi interface:
        </p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo iw list
        </code>

        <p className="p-5"><strong>Static IP on Access Point Wireless Interface</strong></p>
        <p className="p-5">
          Assign a static IP to the wireless interface intended for the access point. Example:
        </p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo ifconfig wlan0 10.0.0.1/24 up
        </code>

        <p className="p-5"><strong>DHCP Server</strong></p>
        <p className="p-5">
          To automatically assign IPs to clients, set up <code className="bg-gray-800 text-white p-2 rounded">dnsmasq</code>. Example configuration file (<code className="bg-gray-800 text-white p-2 rounded">dnsmasq.conf</code>):
        </p>
        <pre>
        domain-needed
        bogus-priv
        no-resolv
        listen-address=10.0.0.1
        dhcp-range=10.0.0.100,10.0.0.199,12h
        server=8.8.8.8
        server=8.8.4.4
        </pre>
        <p className="p-5">Start <code className="bg-gray-800 text-white p-2 rounded">dnsmasq</code> with:</p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo dnsmasq --conf-file=dnsmasq.conf
        </code>

        <p className="p-5">
          You can confirm it’s running by checking the syslog:
        </p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo tail /var/log/syslog | grep dnsmasq
        </code>

        <p className="p-5"><strong>Enable IP forwarding</strong></p>
        <code className="bg-gray-800 text-white p-2 rounded">
          echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
        </code>

        <p className="p-5"><strong>Set up NAT rule using nftables:</strong></p>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo apt install nftables
        </code>
        <code className="bg-gray-800 text-white p-2 rounded">
          sudo nft add table nat
          sudo nft add chain nat postrouting type nat hook postrouting priority 100 \;
          sudo nft add rule nat postrouting oifname "eth0" masquerade
        </code>
      </div>
    )
},
        {
          title: "Determining Chipsets and Drivers for Wireless Attacks",
          summary: (
            <>
              <p className="p-5">
              The chipset of a Wi-Fi card and the corresponding driver are both important when it comes to penetration testing. In this module, we will review how to determine the chipset and driver for a Wi-Fi adapter, even without physical access to the hardware. This information is also useful for selecting compatible hardware.

While we might prefer to stick to a list of chipsets known to work, there may be times when we need to work with an unfamiliar adapter. Learning the wireless chipset manufacturer helps determine supported operating systems, required drivers, and any associated limitations.

Wireless cards are branded by manufacturers like Netgear, Ubiquiti, Linksys, and D-Link. These cards contain chipsets from different manufacturers such as Mediatek, Ralink, Atheros, Qualcomm, or Marvell. Unfortunately, chipset manufacturers are both more important and harder to determine, as card manufacturers do not always disclose the chipset used. Even different versions of the same model may have different chipsets.
              </p>

              <p className="p-5">
              The first step is to identify the wireless chipset used by an adapter. Several techniques can be used:
              <ul>
              Physical Inspection:
                <li>If the adapter is accessible, check for an FCC ID on a label or etched onto the metal casing.</li>
                <li>Enter the FCC ID into the FCC database to find internal device photos revealing the chipset.</li>

              </ul>

              <ul>
              Using System Tools:
                <li>Plug in the adapter and run airmon-ng to check if it displays the chipset and driver.</li>
                <li>If no interfaces appear, check loaded modules using lsmod before and after plugging in the device.</li>
                <li>Use dmesg to look for chipset-related messages or errors such as missing firmware.</li>
                <li>Filter dmesg output using terms like ieee80211, mac80211, cfg80211, wireless, or wifi.</li>
                <li>Inspect lsusb -vv output for USB devices or lspci -n for PCI/PCIe devices.</li>
                
              </ul>

              </p>

              <p className="p-5">
              Example output of lsusb -vv:

              <code className="bg-gray-800 text-white p-2 rounded">
              kali@kali:~# sudo lsusb -vv <br></br>
              Bus 001 Device 065: ID 148f:5370 Ralink Technology, Corp. RT5370 Wireless Adapter <br></br>
              Device Descriptor: <br></br>
              idVendor  0x148f Ralink Technology, Corp. <br></br>
              idProduct  0x5370 RT5370 Wireless Adapter
              </code>
              </p>

              <p className="p-5">
              In this case, the chipset is RT5370 from Ralink. The vendor ID (0x148f) and product ID (0x5370) can be searched online for more details. <br></br>
              Additional resources for identifying chipsets include: 
              <ul>
                <li>DeviWiki (WikiDevi) for a user-maintained database.</li>
                <li>The Wireless Adapter Chipset Directory.</li>
                <li>Manufacturer product pages and forums.</li>
                <li>Windows driver filenames, which may contain chipset details.</li>
              </ul>
              </p>

              <p className="p-5">
              Once the chipset is identified, determining the driver is straightforward. If DeviWiki lacks the information, the Linux-wireless wiki can help. Google is an alternative. <br></br>
              There may be multiple drivers available for the same card:
                            <ul>
                <li>Vendor drivers (often closed source) may not support monitor mode.</li>
                <li>Open-source drivers generally support monitor mode but may not be included in the Linux kernel if the chipset is new.</li>
                Examples of vendor drivers with monitor mode:
                <li>r8187: Later evolved into a mac80211-based driver.</li>
                <li>rtl8812au: Available as a package on Kali Linux.</li>
                <li>nexmon: Used for Broadcom chipsets in Raspberry Pis and other SoCs.</li> 
              </ul>
              Some FullMAC chipsets, found in embedded systems and SoCs, rarely support monitor mode, even with an open-source driver.
              </p>

              <p className="p-5">
              For an Alfa AWUS036AC USB Wi-Fi Adapter, searching for "Alfa AWUS036AC wikidevi" leads to a page containing chipset and driver details. The chipset is often listed in the specifications box. <br></br>
              By following these techniques, we can identify Wi-Fi chipsets and drivers to ensure compatibility with penetration testing tools.
              </p>

            </>
          )
        },
        {
          title: "Linux Wireless Tools, Drivers, and Stacks",
          summary: (
            <>
              <p className="p-5">
              This module covers the Linux wireless subsystem, including essential tools and concepts for penetration testing.
              <h3 className="text-xl font-bold">Wireless Tools and Remote Testing</h3> <br></br>
              Wireless cards are often controlled through user-friendly interfaces, but penetration testers must also understand command-line tools. This is especially important in remote penetration tests, where an administrator sets up a machine with a wireless card, and interaction occurs via SSH. In such cases, unfamiliar hardware may require troubleshooting, making a solid understanding of wireless tools crucial.
              </p>

              <p className="p-5">
              A deep understanding of Linux drivers and wireless stacks is helpful when dealing with uncooperative hardware, troubleshooting, or referencing information for future use.              
              <h3 className="text-xl font-bold">Loading and Unloading Wireless Drivers</h3> <br></br>
              When a wireless device is plugged in or powered on, Linux automatically loads its driver. To determine the driver in use, the airmon-ng command is utilized. <br></br>
              To list USB devices and their details, the lsusb command is used. This command provides critical information, such as the vendor and product IDs, helping identify chipset compatibility. Unlike Windows, where each device requires a specific driver, Linux allows a single driver to support multiple similar devices. Some drivers are pre-packaged with the kernel, requiring no additional installation. <br></br>
              Most Linux drivers function as Loadable Kernel Modules (LKMs), meaning they are only loaded when needed to save memory. Kernel modules often have adjustable parameters, which can be viewed using the modinfo command.
              </p>

              <p className="p-5">
                <h3 className="text-xl font-bold"> Managing Kernel Modules </h3> <br></br>
                Kernel modules are stored in /lib/modules/kernel_version. To view module details, including dependencies and supported devices, modinfo is used. The modprobe command allows manual loading of a module with specific parameters, such as disabling an LED indicator. If a conflict arises between multiple drivers, blacklisting can be applied using /etc/modprobe.d/. For example, if an open-source and proprietary Broadcom driver coexist, blacklisting one prevents conflicts. The lsmod command displays loaded modules and dependencies. When unloading a driver, dependent modules must be removed first using rmmod. Reloading or switching to a different driver requires proper module management to avoid conflicts. <br></br>
                Understanding these tools and techniques ensures effective management of wireless drivers in Linux environments, improving troubleshooting and penetration testing capabilities.
              </p>

              <p className="p-5">
              The card supports multiple modes, including IBSS (ad hoc), monitor mode, managed mode (client), and AP mode. It also specifies frequency allowances, where channels 1 to 13 can use 20dBm power, while channel 14 is restricted.
              <br></br>
              To identify available wireless networks within range, we use the iw command with the dev wlan0 option to specify the device, followed by the scan parameter. To filter only network names, we pipe the output through grep SSID:
              <code className="bg-gray-800 text-white p-2 rounded">
              sudo iw dev wlan0 scan | grep SSID <br></br>
              SSID: wifu <br></br> SSID: 6F36E6

              </code>
              </p>


              <p className="p-5">
              Since knowing the transmission channel of a target access point is crucial, we refine the command further using egrep to display both the SSID and the channel: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">
              sudo iw dev wlan0 scan | egrep "DS Parameter set|SSID:"
SSID: wifu <br></br>
DS Parameter set: channel 3 <br></br>
SSID: 6F36E6 <br></br> 
DS Parameter set: channel 11

              </code>
              </p>

              <p className="p-5">
              Now that we have identified available networks, we will create a new Virtual Interface (VIF) named wlan0mon in monitor mode. The following command adds the interface and sets it to monitor mode:
              <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">
              sudo iw dev wlan0 interface add wlan0mon type monitor
              </code>
              If no output appears, the command was successful. Next, we bring up the new interface: <br></br>

<code className="bg-gray-800 text-white p-2 rounded">sudo ip link set wlan0mon up</code> <br></br>
To verify its creation, we inspect the interface details:

<code className="bg-gray-800 text-white p-2 rounded">sudo iw dev wlan0mon info</code>

This will return details such as the interface name, type, and operating channel.

To test whether the interface is properly in monitor mode, we use tcpdump to capture wireless frames: <br></br>

<code className="bg-gray-800 text-white p-2 rounded">sudo tcpdump -i wlan0mon</code>

              </p>

              <p className="p-5">
              This command displays network traffic captured by wlan0mon. Press Ctrl+C to stop capturing. If successful, we should see beacons from nearby access points, including their SSID and channel.

Once the monitoring session is complete, we delete the virtual interface: <br></br>

<code className="bg-gray-800 text-white p-2 rounded"> sudo iw dev wlan0mon interface del</code> <br></br>

Running iw dev wlan0mon info afterward should return an error indicating the interface no longer exists.


              </p>

              <p className="p-5">
              Wireless devices must comply with regional regulations, which dictate aspects such as transmission power limits and allowed channels. The iw reg command helps manage regulatory domain settings. To check the current regulatory domain:

            <code className="bg-gray-800 text-white p-2 rounded">sudo iw reg get            </code> <br></br>
            By default, Kali Linux sets the regulatory domain to "global." To change it, use:

            <code className="bg-gray-800 text-white p-2 rounded"> sudo iw reg set US            </code>

              </p>

              <p className="p-5">
              This applies the setting temporarily. To make it persistent, edit the /etc/default/crda file and set the REGDOMAIN variable accordingly.

After rebooting, running iw reg get again should confirm the updated regulatory domain. The output will list frequency ranges, channel widths, and power limits for each band.

However, regulatory domain settings may sometimes be overridden. Factors such as AP settings or wireless card firmware can affect which domain is enforced. For instance, certain wireless adapters may broadcast a default region when plugged in.

By understanding these commands and regulatory constraints, we can effectively configure and troubleshoot wireless interfaces for various purposes, including monitoring and analysis.
              </p>
            </>
          )
        },
        {
          title: "Frames and Network Interaction – How Wi-Fi devices communicate",
          summary: (
            <>
              <p className="p-5">
              When devices connect to Wi-Fi networks and data flows through them, various types of frames are used to ensure efficient communication. Capturing and analyzing this network traffic is essential for understanding and potentially exploiting Wi-Fi networks. <br></br>
              This module introduces the different frames used in Wi-Fi communication, including their headers and fields. It also explains how wireless devices interact with various network types. <br></br>

Students are encouraged to progress through the content carefully, taking time to inspect each capture file before moving forward. Revisiting this module later as a reference is also recommended. <br></br>

Throughout the module, we will analyze several capture files using Wireshark. For example, when discussing beacon frames, we will examine a capture file containing these frames. Some sections reference specific files for analysis. <br></br>

This module provides an excellent opportunity to become more familiar with Wireshark while working through the content. In certain cases, we will focus on specific frames or series of frames to deepen our understanding. 
              </p>
              <p className="p-5">
                <h3 className="text-xl font-bold">Packets vs. Frames </h3>
                The terms "packets" and "frames" are not interchangeable. To differentiate them, it is useful to review the Open Systems Interconnection (OSI) model, which outlines how systems communicate over a network. <br></br>
                Each layer in the OSI model has a specific function. The Data Link layer, for example, includes MAC headers that help direct packets between devices on the same network. <br></br>

When capturing packets, they are intercepted at the Data Link layer, which includes the frame. The frame contains authentication details and additional information about the access point. Capturing packets is fundamental to many Wi-Fi attack techniques, making an understanding of frames particularly important. <br></br>

A packet is the data unit for the network layer, while a frame belongs to the data link layer. The term "packet capture" is often used generically, even though some hardware captures at the network layer, while others operate at the data link layer. Certain specialized tools can even capture data at the physical layer. <br></br>

Despite this technical distinction, "packet capture" remains a widely used term for collecting data at either the network or data link layers. In this module, all captures will occur at the data link layer. 
              </p>
              <p className="p-5">
              <h3 className="text-xl font-bold">802.11 MAC Frames              </h3>
              <ul>
              The basic structure of an 802.11 MAC frame consists of three main parts:
                <li>MAC Header: Contains fields common to most frames, with some fields mandatory and others varying based on the frame type.
                </li>
                <li>Frame Body: Holds data or additional information, though not all frames include this section.
                </li>
                <li>Frame Check Sequence (FCS): A Cyclic Redundancy Check (CRC) that verifies the integrity of the frame upon arrival at its destination. If the calculated FCS matches the received one, the frame was transmitted without errors. Some captured frames may lack the FCS.
                </li>
              </ul><br></br>
              In some cases, capture files may also include Radiotap headers before the MAC header. These headers, added by the receiver’s driver, contain metadata such as signal strength, transmission rate, and channel details. The structure and size of Radiotap headers can vary based on the driver and frame type.


              </p>
              <p className="p-5">
              <h3 className="text-xl font-bold">MAC Header              </h3>
              The MAC Header consists of multiple fields, some of which are further divided into subfields. Key fields include:
              <ul>
                <li>Protocol Version: Specifies the 802.11 protocol version used (currently set to 0).
                </li>
                <li>Type: Defines the function of the frame and determines the presence of specific fields. There are four types: management, control, data, and extension. This module primarily covers the first three.
                </li>
                <li>Subtype: Provides additional categorization within each frame type.
                </li>
                <li>To DS / From DS: Indicates whether the frame is entering or leaving a distribution system.
                </li>
                <li>More Fragments: Signals whether additional fragments of the frame follow.
                </li>
                <li>Retry: Identifies retransmitted frames when unacknowledged unicast frames are resent.
                </li>
                <li>Power Management: Indicates whether the sender is in active mode or power-saving mode.
                </li>
                <li>More Data: Specifies if data is buffered for a client.
                </li>
                <li>Protected Frame: Shows whether encryption or authentication is applied.
                </li>
                <li>HT Control / Order: Determines if an HT Control Field is included, which is rarely used.
                </li>
            
              </ul>


              </p>
              <p className="p-5">
              <h3 className="text-xl font-bold">Duration/ID              </h3>
              The meaning of the Duration/ID field depends on the frame type and subtype. In some cases, such as Power-Save Poll frames, it contains the client’s Association Identity (AID). In other scenarios, it represents the frame duration in microseconds.

              <h3 className="text-xl font-bold">Addresses </h3>
              Frames may contain up to four address fields, with their meaning determined by the "To DS" and "From DS" bits in the Frame Control field:

            <ul>
              <li>If both bits are 0: Used in ad-hoc mode or for management/control frames, where two clients communicate directly.
              </li>
              <li>If only "To DS" is set: Indicates traffic from a client intended for an access point or a connected device.
              </li>
              <li>If only "From DS" is set: Represents traffic from an access point to a client.
              </li>
              <li>If both bits are set: Used in Wireless Distribution System (WDS) mode, where one access point communicates with another, requiring a fourth address field.
              </li>
            </ul>

              </p>
              <p className="p-5">
              <h3 className="text-xl font-bold">Sequence Control              </h3>
              The Sequence Control field helps identify duplicate frames and consists of two subfields:


<ul>
  <li>Sequence Number (12 bits): Assigns a number to each frame. This number is reused after reaching its maximum value of 4095.

  </li>
  <li>Fragment Number (4 bits): Specifies the fragment number for fragmented frames, with values ranging from 0 to 15.
  </li>
</ul>

<h3 className="text-xl font-bold">QoS Control and HT Control</h3>
These fields are included based on the frame type:

<ul>
  <li>QoS Control: Present in Quality of Service (QoS) data frames, defining priority parameters.  </li>
  <li>HT Control: Only appears when the "+HTC/Order" bit is set.
  </li>
</ul>


              </p>
              <p className="p-5">
              <h3 className="text-xl font-bold">Frame Types              </h3>
              Wi-Fi networks use different frame types to facilitate communication. This module focuses on three main types:
              <ul>
  <li>Management Frames: Help establish and maintain connections.  </li>
  <li>Control Frames: Assist in frame delivery.</li>
  <li>Data Frames: Carry the actual data being transmitted.  </li>
</ul>

There is also a fourth category, extension frames, though they are rarely encountered and will not be covered in detail.
<br></br>
By understanding these different frame types and their structure, we can gain deeper insights into how Wi-Fi networks function and interact with devices. <br></br>

An association request is sent when a device attempts to connect to a wireless network, such as "airport-wifi." The access point (AP) either accepts or rejects the request by sending an association response. <br></br>
If MAC filtering is enabled and the device's MAC address is not authorized, the AP may either ignore or deny the request.





              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Deauthentication              </h3>
              Deauthentication frames are used to terminate the connection between a client and an AP. While often used in attacks, they also occur during normal operations, such as when a client disconnects or when the AP forces a reauthentication for security reasons. <br></br>
              These frames include a reason code, a two-byte field that explains the cause of the deauthentication. For example, if a client is disconnecting voluntarily, it may use a reason code indicating it is leaving the network. In another scenario, an AP may send a deauthentication frame with a different reason code, such as one indicating an unauthorized client. <br></br>

              Typically, APs and clients exchange a single deauthentication frame during normal operations. However, an unusually high number of these frames may signal an ongoing attack.

              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Control Frames              </h3>
              Control frames facilitate the transmission of data and other unicast frames. Since they must be reliably received, they are short and transmitted at a low rate. These frames include several subtypes, such as acknowledgments (ACK), request-to-send (RTS), and clear-to-send (CTS).

<br></br>
         <ul>
          <li>ACK Frames: These confirm the successful reception of a transmitted frame. Each unicast frame is acknowledged by the receiving device.
          </li>
          <li>Block ACK: This mechanism improves efficiency by acknowledging multiple frames at once instead of one at a time.
          </li>
          <li>RTS/CTS Mechanism: This process helps prevent data collisions. A device first sends an RTS frame to request permission to transmit. If no interference is detected, the receiving device responds with a CTS frame, signaling the sender to proceed. If the transmission is successful, an ACK frame confirms receipt.
          </li>
         </ul>

              </p>


              <p className="p-5">
              <h3 className="text-xl font-bold">Data Frames              </h3>
              Data frames are primarily used to carry information between devices. Some variations of these frames include additional features such as acknowledgments and polling mechanisms.


<br></br>
         <ul>
          <li>Standard Data Frames: These carry actual payload data between devices.

          </li>
          <li>Null Data Frames: These contain no payload and are often used for power-saving purposes. Devices may send these frames to signal their intent to enter a low-power state.

          </li>
          <li>QoS Data Frames: These frames prioritize time-sensitive traffic, such as voice or video, ensuring smoother performance for latency-dependent applications.

          </li>
         </ul>
         <br></br>
         In summary, wireless networks rely on various frame types to manage device connectivity, maintain communication reliability, and optimize network efficiency. Unusual patterns in these frames may indicate security concerns or performance issues.

              </p>
              
              <p className="p-5">
              The Protocol Version (1 byte) can be 1, 2, or 3, representing different versions of the 802.1X standard. The most common values are 1 and 2. 

The Packet Type (1 byte) typically has a value of 3, which signifies a key.<br></br>

The Packet Body Length (2 bytes) indicates the size of the packet body that follows.<br></br>

The Descriptor Type (1 byte) commonly takes a value of 2 for "EAPoL RSN Key" when WPA2 is in use or 254 for "EAPoL WPA Key" when using WPA1.<br></br>

The Key Information (2 bytes) specifies the key’s properties and is divided into smaller sections.<br></br>

The Key Length (2 bytes) defines the PTK length. A value of 5 or 13 corresponds to WEP40 and WEP104, while 16 or 32 is associated with TKIP, CCMP, GCMP, BIP-CMAC, or BIP-GMAC ciphers.<br></br>

The Replay Counter (8 bytes) increases with each EAPoL frame transmission to prevent replay attacks. It starts at 1 in the first handshake phase and 2 in the second phase. If a failure occurs due to an incorrect key or weak signal, the number continues increasing. <br></br>

The Key Nonce (32 bytes) contains a randomly generated value from the sender.<br></br>

The EAPoL Key IV (16 bytes) holds the initialization vector used with the KEK. If not required, this field is set to zero.<br></br>

The Key Receive Sequence Counter (8 bytes) is used in messages 3 and 4 to indicate the GTK counter but is not utilized with WEP.<br></br>

The Key Identifier (8 bytes) is reserved for future use and set to zero.<br></br>

The Key MIC (variable size) is the message integrity code (MIC) calculated from the packet, starting from the Protocol Version field. Its size depends on the authentication method used.<br></br>

The Key Data Length (2 bytes) specifies the length of the Key Data field.<br></br>

The Key Data field contains additional information for key exchange, including security network elements (RSNE) or key data encapsulations (KDE).<br></br>

              </p>


              <p className="p-5">
              <h3 className="text-xl font-bold">Breakdown of Key Information Fields              </h3>

              <ul>
                <li>Key Descriptor Version (bits 0-2): Determines the encryption algorithm. A value of 1 uses ARC4 with HMAC-MD5, 2 uses AES key wrap with HMAC-SHA1-128, and 3 uses AES key wrap with AES-128-CMAC.
                </li>
                <li>Key Type (bit 3): If set, the key is a PTK; otherwise, it's a group key or session management key (SMK).
                </li>
                <li>Install (bit 6): When set, the client must install the keys.
                </li>
                <li>Key ACK (bit 7): Indicates whether the recipient expects an EAPoL-Key message.
                </li>
                <li>Key MIC (bit 8): Shows if a MIC is included in the packet.
                </li>
                <li>Secure (bit 9): Marks when the key exchange is complete, set in messages 3 and 4.
                </li>
                <li>Error (bit 10): Indicates a MIC failure.
                </li>
                <li>Request (bit 11): Used by a Supplicant in a MIC Failure report or to request an Authenticator to start a handshake.
                </li>
                <li>Encrypted Key Data (bit 12): If set, the Key Data field is encrypted.
                </li>
                <li>SMK Message (bit 13): Specifies whether the packet is part of an SMK handshake.
                </li>
              </ul>

              <h3 className="text-xl font-bold">Key Data Structure              </h3> <br></br>
              The Key Data field may contain KDEs or RSNEs. The KDE structure follows a predefined format, while the RSNE structure is more complex, containing cipher suite lists and security parameters.



              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">WPA1 and WPA2 Handshake Process              </h3>

              In a Wireshark capture, control frames are filtered out using a display filter.



              <ul>
                <li>The process begins with an AP beacon advertising supported security options.
                </li>
                <li>The client sends a probe request, and the AP responds with a probe response, confirming capabilities.
                </li>
                <li>After authentication, the client sends an association request, indicating support for WPA1 or WPA2 with the chosen cipher.
                </li>
                <li>The AP replies with an association response, confirming the connection.
                </li> <br></br>
                Four-Way Handshake:
                <li>Message 1: The AP sends an EAPoL message containing a nonce.
                </li>
                <li>Message 2: The client generates its own nonce and derives the PTK.
                </li>
                <li>Message 3: The AP, now aware of both nonces, calculates the PTK and sends the GTK.
                </li>
                <li>Message 4: The client acknowledges receipt, completing the handshake.
                </li>
                
              </ul>

<br></br>
For WPA2, the process is nearly identical, with the key information indicating the use of CCMP and HMAC-SHA1 for MIC calculations. <br></br>

Once the four-way handshake is complete, the group key handshake follows. The AP sends an updated GTK to connected clients, ensuring continued encrypted communication.

              </p>


            </>
          )
        },
        {
          title: "Wireshark Essentials – Packet Capturing & Analysis",
          summary: (
            <>
              <p className="p-5">

              <h3 className="text-xl font-bold">Wireshark Essentials   </h3>

              Wireshark, formerly known as Ethereal, is a widely used packet analysis tool. It can dissect numerous network protocols, including Ethernet, IP, TCP, UDP, and 802.11, as well as more specialized ones like ATM and EtherCAT. The tool supports live packet capture across different network interfaces, enables saving and opening data in various formats, and offers robust analysis and data visualization features. With display and capture filters, users can narrow down the data they see and collect, making analysis more efficient. <br></br>

Wireshark is available on multiple operating systems and comes with a graphical user interface, as well as a command-line alternative called TShark. Additional command-line utilities include dumpcap, which captures packets without analyzing them, and SSHdump, which simplifies remote packet collection over SSH. Several other tools are also included to enhance functionality. <br></br>

<h3 className="text-xl font-bold">Getting Started</h3>

To begin using Wireshark, it is essential to understand its interface and settings. By default, Wireshark captures Ethernet packets, even when using a wireless adapter. To capture raw wireless frames, the adapter must be set to monitor mode before launching Wireshark.
<br></br>
Monitor Mode Setup <br></br>
To enable monitor mode on a Linux system, use the following commands:

<code className="bg-gray-800 text-white p-2 rounded">
sudo ip link set wlan0 down <br></br>
sudo iwconfig wlan0 mode monitor <br></br>
sudo ip link set wlan0 up 
              </code>


              </p>


              <p className="p-5">

              <h3 className="text-xl font-bold">Wireshark Interface              </h3>

              Upon launching Wireshark, the main interface provides various options, including display filters, recently opened files, capture filters, network interface selection, and real-time traffic graphs. The interface dynamically updates to reflect available network interfaces but does not display those that are inactive.<br></br>

Users can filter interfaces based on type, such as wireless, USB, Bluetooth, and virtual interfaces. Selecting only the wireless option ensures that only Wi-Fi traffic is captured. Packet capture can be started by double-clicking an interface or selecting it and clicking the capture button.<br></br>

<h3 className="text-xl font-bold">Packet Display</h3>

During packet capture, Wireshark organizes data into three main sections:

<ul>
  <li>Packet List: Displays all captured packets with details such as source, destination, and protocol.
  </li>
  <li>Packet Details: Provides an in-depth view of the selected packet.
  </li>
  <li>Packet Bytes: Shows the raw hexadecimal representation of the packet’s data.
  </li>
</ul> <br></br>
Wireshark also allows users to customize the layout of these sections through the preferences menu, enabling different panel arrangements to suit various analysis needs.



              </p>



              <p className="p-5">

              <h3 className="text-xl font-bold">Wireless Toolbar              </h3>

              Wireshark features a wireless toolbar that lets users manually change channels and set channel widths. This toolbar is not enabled by default but can be activated through the settings menu.
<br></br>

Unlike some tools, Wireshark does not automatically hop between wireless channels. To monitor multiple channels, users can manually switch between them using a script like the following:

<br></br>


<code className="bg-gray-800 text-white p-2 rounded">
for channel in 1 6 11 2 7 10 3 8 4 9 5 <br></br>
iw dev wlan0mon set channel $channel <br></br>
sleep 1 <br></br>
done
              </code>
              Alternatively, airodump-ng can be used for automatic channel hopping without saving data.



              </p>



              <p className="p-5">

              <h3 className="text-xl font-bold">Saving and Exporting Captures              </h3>

              After capturing packets, Wireshark allows users to save the data in different formats, with PCAP being the most common. Other formats, such as PCAPng, offer nanosecond-level accuracy but are not always necessary. Users can apply filters when exporting captures to save only relevant packets.
<br></br>

<ul>
Options for saving include:

  <li>All packets (default)
  </li>
  <li>Selected packets (specific ones chosen by the user)
  </li>
  <li>Marked packets (those flagged during analysis)
  </li>
  <li>Packets in a range (e.g., from packet 5 to 10)
  </li>
  <li>Excluding ignored packets
  </li>
</ul> <br></br>
              </p>


              <p className="p-5">

<h3 className="text-xl font-bold">Exercises</h3>

To practice using Wireshark:
<br></br>

<ul>
<li>Connect a wireless adapter and enable monitor mode.
</li>
<li>Open Wireshark and start capturing network traffic.
</li>
<li>Enable the wireless toolbar and switch between channels 1, 6, and 11.
</li>
<li>Save the captured packets for later analysis.
</li>
</ul> <br></br>

<h3 className="text-xl font-bold">Wireshark Filters</h3>
Packet captures often contain a vast amount of data. Filters help reduce unnecessary information, making analysis more manageable. Wireshark provides two types of filters:

<ul>
  <li>Display Filters: Control which packets appear in the packet list without affecting the actual capture.  </li>
  <li>Capture Filters: Limit the packets that are collected during capture.  </li>
</ul>
</p>



<p className="p-5">

<h3 className="text-xl font-bold">Display Filters</h3>

Display filters refine what is visible in Wireshark's packet list without discarding any captured data. These filters can be applied through the toolbar, allowing users to isolate relevant packets efficiently. <br></br>

By selecting the filter expression menu, users can construct and customize filters for specific protocols, addresses, or other packet attributes.



</p>

<p className="p-5">

<h3 className="text-xl font-bold">Wireshark Capture Filters</h3>

Capture filters allow Wireshark to collect only specific types of data. Unlike display filters, which refine the displayed data after capture, capture filters limit the data that is received. This distinction is crucial for optimizing performance and ensuring only relevant traffic is captured. <br></br>

Capture filters are sometimes referred to as Berkeley Packet Filters (BPF). When capturing packets, Wireshark and tshark store and analyze each packet in memory unless otherwise specified. As data volume increases, memory and CPU usage rise accordingly. If Wireshark cannot process packets in real time, it may drop them, potentially losing critical information. Using a capture filter reduces unnecessary data collection, helping to focus on essential packets. <br></br>

Another reason to use capture filters is to restrict analysis to specific traffic, such as isolating communications from certain devices. However, it's important to configure these filters carefully since any unfiltered data is permanently lost. Display filters, by contrast, can be modified without affecting the captured data. <br></br>

Wi-Fi capture filters are limited to filtering based on MAC addresses and frame types or subtypes. For example, beacon frames—used by access points to announce their presence—are commonly filtered out since they add unnecessary noise to an analysis. To ignore beacon frames, a capture filter like not subtype beacon can be applied.<br></br>

Example: Filtering Traffic from a Specific Device <br></br>
To capture traffic related to a specific device, a filter can be created using its MAC address. Wi-Fi frames contain one to four MAC addresses, so the filter should include all possible locations where the target address may appear: <br></br>

<code className="bg-gray-800 text-white p-2 rounded">
(wlan addr1 3A:30:F9:0F:E1:95) or (wlan addr2 3A:30:F9:0F:E1:95) or (wlan addr3 3A:30:F9:0F:E1:95) or (wlan addr4 3A:30:F9:0F:E1:95)
              </code> <br></br>

              This ensures that only frames related to the specified device are captured. To further refine the capture, additional filters can be added to exclude unnecessary frames, such as control frames (not type ctl) and certain management frames (not subtype probe-req and not subtype probe-resp). <br></br>
              A refined capture filter could look like this: <br></br>

              <code className="bg-gray-800 text-white p-2 rounded">((wlan addr1 3A:30:F9:0F:E1:95) or (wlan addr2 3A:30:F9:0F:E1:95) or (wlan addr3 3A:30:F9:0F:E1:95) or (wlan addr4 3A:30:F9:0F:E1:95)) and not (subtype beacon) and not (type ctl) and not (subtype probe-req) and not (subtype probe-resp) </code> <br></br>
              To reuse this filter in future sessions, it can be saved within Wireshark’s capture filter options.
</p>


<p className="p-5">

<h3 className="text-xl font-bold">Using Wireshark from the Command Line</h3>

Although Wireshark has a graphical user interface (GUI), it also provides various command-line options. Running wireshark --help displays a list of available parameters. Some of the most useful options include: <br></br>



<code className="bg-gray-800 text-white p-2 rounded">
-D: Lists available network interfaces. <br></br>
-i interface: Specifies the interface to capture on. <br></br>
-f capture filter: Applies a capture filter using libpcap syntax. <br></br>
-k: Starts capturing immediately. <br></br>
-I: Enables monitor mode for wireless interfaces.<br></br>
              </code> <br></br>
              To list all available interfaces, the following command can be used:

              <code className="bg-gray-800 text-white p-2 rounded">sudo wireshark -D </code> <br></br>
              To start capturing packets on a wireless interface in monitor mode, use:
              <code className="bg-gray-800 text-white p-2 rounded">sudo wireshark -i wlan0mon -k </code> <br></br>
              Alternatively, an interface’s index number can be used instead of its name. For example, if wlan0mon corresponds to index 4, the command would be:
              <code className="bg-gray-800 text-white p-2 rounded">sudo wireshark -i 4 -I -k </code><br></br>
              Using these command-line options, Wireshark can be efficiently configured for targeted packet analysis.

</p>


<p className="p-5">

Let's go over the process of performing a remote packet capture via SSH in Wireshark. If we have previously filtered our devices to display only the wireless interfaces, we can switch to External Capture devices. To do this, we select External Capture and unselect all other options in the interface dropdown. <br></br>

Next, click the gear icon next to the SSH remote capture option (sshdump) at the bottom of the Capture section to open the options window. <br></br>

Wireshark normally captures from local interfaces. However, the "External Capture" interfaces utilize ExtCap, which allows executable files to act as capture interfaces. These interfaces are separate binaries, including ciscodump, dpauxmon, randpkt, sdjournal, sshdump, and udpdump. They output data in PCAP format and can be found in the /usr/lib/x86_64-linux-gnu/wireshark/extcap/ directory on a 64-bit Kali machine. These tools can be executed with specific arguments, and most of them have associated man pages. They are similarly configured in the Wireshark GUI.<br></br>

On the first configuration screen, set the IP address of the remote host. The remote SSH server port must be specified; the default is port 22.
<br></br>
Next, move to the Authentication tab where SSH credentials for the remote system are entered. SSHdump supports both password-based and key-based authentication.
<br></br>
Key-based and ProxyCommand authentication options are available, but in this case, we will use username and password. If using a standard user instead of root, you may need to run certain commands to adjust the wireshark package configuration and add the user to the wireshark group.
<br></br>
Then, move to the Capture tab where you will configure the capture parameters. The SSHDump tool essentially constructs an sshdump command-line argument. The "Remote interface" field mirrors adding "-i wlan0mon" in the capture command field.
<br></br>
The user on the remote system must have the ability to either start the capture or have access to sudo privileges. If sudo access is needed, check the "Use sudo on the remote machine" box.
<br></br>
We will use dumpcap here to reduce CPU usage, though any capture tool available on the remote device can be used.
<br></br>
The last tab allows enabling debugging and specifying where log messages should be saved in case of errors.
<br></br>
Once everything is configured, click "Start" to begin the capture. If the settings are correct and the remote system is reachable, the capture will begin shortly.
<br></br>
If you check the "Save parameter(s) on capture start" option, future captures with SSHdump will start automatically without asking for configuration each time. If errors occur and the settings need to be reset, go to Edit, Preferences,  Advanced, search for "sshdump," and reset any modified parameters back to their default values.
<br></br>
For practice, you can use Wireshark's SSH option to initiate a dumpcap capture on a remote system. This can be done on a local system, a virtual machine, or any system where you have SSH access.

</p>

<p className="p-5">

In addition to capturing, Wireshark offers various preferences to improve your workflow. <br></br>

To assist with packet analysis, you can apply color rules to highlight certain packets in the packet list. To toggle coloring, use the "View, Colorize Packet List" option. You can also edit the coloring rules by navigating to "View, Coloring rules." <br></br> 

Wireshark’s default coloring rules are tailored for Ethernet networks, but you can add your own rules for wireless frames. Wireshark processes these rules in order, and once a match is found, it stops checking other rules. To add a rule, click the "+" button, enter the filter expression, and select colors for the foreground and background. <br></br>

Instead of manually creating rules, you can import a pre-defined wireless coloring rules file. Once imported, the rules will be applied automatically to your capture. <br></br>

Another useful feature is the ability to modify the columns displayed in the Packet List. You can add, remove, resize, and move columns based on the packet's fields. For example, you can add a column for the channel in a probe request packet by right-clicking on it and selecting "Apply as a column." <br></br>

Wireshark also allows configuring the capture snaplen, which determines the maximum number of bytes to capture for each packet. This can be useful when you're not interested in capturing the entire payload. Snaplen should be set during the capture configuration and cannot be changed while capturing. <br></br>

Finally, Wireshark provides several preferences for configuring IEEE 802.11 protocols. These preferences allow you to optimize performance, such as disabling certain features that may increase CPU usage. <br></br>

For WEP and WPA1/2 decryption, you can add decryption keys in the preferences. These include WEP keys in hexadecimal, WPA passphrases, or Pairwise Master Keys (PMK) for WPA Enterprise. Once the keys are added, Wireshark will apply them to decrypt the captured packets. <br></br>

These features can significantly improve the packet analysis process, especially when dealing with complex wireless networks and encrypted traffic.

</p>



              
            </>
          )
        },
        {
          title: "Kismet Essentials – Passive Network Discovery",
          summary: (
            <>
              <p className="p-5">

              Kismet is a versatile wireless capture tool capable of detecting and analyzing multiple wireless technologies, including Wi-Fi, Bluetooth, and nRF signals. Additionally, it can utilize Software Defined Radio (SDR) to capture signals such as ADS-B, Automatic Meter Reading (AMR), and various frequencies like 433MHz. This document will focus on Kismet's Wi-Fi capabilities. <br></br>

              Kismet captures raw wireless frames and decodes them to identify access points and devices on a network. When used with a GPS device, it can include estimated geolocation data for discovered devices, providing insights into their approximate locations relative to access points. The user interface offers multiple views for analyzing wireless networks, enhancing understanding when combined with other network tools.<br></br> <br></br>

              <h3 className="text-xl font-bold">Installation</h3> <br></br>
              To install Kismet on Kali Linux, use the following command: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">sudo apt install kismet</code> <br></br>
              After installation, Kismet is ready for configuration. <br></br>
              <h3 className="text-xl font-bold">Configuration Files</h3> <br></br>
              Kismet's configuration files are stored in the /etc/kismet/ directory. These files control different aspects of the tool:
              <ul>
                <li>kismet_80211.conf: Manages Wi-Fi-related settings.</li>
                <li>kismet_alerts.conf: Configures intrusion detection and alerting.</li>
                <li>kismet.conf: The primary configuration file.</li>
                <li>kismet_filter.conf: Defines filtering rules for devices and packets.</li>
                <li>kismet_httpd.conf: Configures the web server.</li>
                <li>kismet_logging.conf: Manages logging behavior and file locations.</li>
                <li>kismet_memory.conf: Handles memory usage settings.</li>
                <li>kismet_uav.conf: Contains rules for detecting unmanned aerial vehicles (UAVs) and drones.</li>
              </ul> <br></br>
              Users can override settings by creating a kismet_site.conf file in /etc/kismet/. This approach allows customization without modifying default configuration files, ensuring personal settings persist after software updates.


              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Output Files</h3> <br></br>
              Kismet generates log files in different formats:

              <ul>
                <li>Kismet format: Uses an SQLite database to store collected data.</li>
                <li>PcapPpi format: A legacy packet capture format.</li>
                <li>PcapNg format: A modern packet capture format that supports multiple data link types.</li>
              </ul> <br></br>
              The preferred format is PcapNg, as it allows compatibility with tools like Wireshark. If a PcapNg file contains only one type of data, it can be converted to a standard Pcap file using tshark:
              <code className="bg-gray-800 text-white p-2 rounded">tshark -F pcap -r input.pcapng -w output.pcap</code> <br></br>

              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Logging Configuration</h3> <br></br>
              To customize logging settings, users can modify kismet_logging.conf. Key parameters include:
              <ul>
                <li>log_title: Specifies the default title for logs.</li>
                <li>log_prefix: Defines the directory where logs are stored.</li>
                <li>log_types: Determines which log formats are enabled.</li>
              </ul> <br></br>
              By creating a custom kismet_site.conf file, users can override logging defaults and configure settings according to their requirements.
              <br></br>
              Kismet is a powerful tool for wireless network analysis, offering flexible configuration and extensive logging capabilities to suit various security and research needs.
              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Securing the Web Interface</h3> <br></br>
              By default, the Kismet web server listens on all interfaces, allowing remote connections. While this is acceptable in a controlled environment, it is advisable to restrict access before deploying Kismet in real-world scenarios. This can be done by configuring Kismet's web server to listen only on the loopback interface. To achieve this, add the following line to the kismet_site.conf override file:

              <code className="bg-gray-800 text-white p-2 rounded">httpd_bind_address=127.0.0.1</code> <br></br>
              Additionally, enabling HTTPS can encrypt communications with the web server. Although this step is unnecessary in a lab environment, it is recommended when running Kismet on a public network.

              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Remote Capture</h3> <br></br>
              Kismet provides tools for data capture. When specifying a source, Kismet automatically uses the appropriate tool. For instance, when capturing on wlan0 in Kali, it calls kismet_cap_linux_wifi to handle the capture. <br></br>

Kismet also allows remote data capture. The server does not initiate the capture but listens for connections and processes incoming data. By default, it only allows connections from localhost. This functionality can be used to collect Wi-Fi data on multiple remote devices and send it to a centralized server for analysis. <br></br>

To enable remote capture, an SSH tunnel to the server must be established, or the remote instance of Kismet should be configured to listen on a specific network interface. This can be done by modifying the remote_capture_listen value in the override file. <br></br>

In the following example, two Kali instances are used: kali host as the server and kaliremote as the capture device. The Kismet server is started on kali host without specifying a source: <br></br>

              <code className="bg-gray-800 text-white p-2 rounded">sudo kismet</code> <br></br>
              Once the server is running, an SSH tunnel is established from kaliremote to kali host, forwarding port 8000 on kaliremote to port 3501 on kali host:
              <code className="bg-gray-800 text-white p-2 rounded">ssh kali@192.168.X.X -L 8000:localhost:3501</code> <br></br>
              After setting up the tunnel, a remote capture is initiated on kaliremote using:
              <code className="bg-gray-800 text-white p-2 rounded">sudo kismet_cap_linux_wifi --connect 127.0.0.1:8000 --source=wlan0</code> <br></br>
              This setup enables kaliremote to capture Wi-Fi data and send it through the SSH tunnel to kali host. The process can be stopped using Ctrl+C on kaliremote, while the server on kali host remains active, waiting for future connections. <br></br>

        To terminate the SSH tunnel, simply log out of the session:
        <code className="bg-gray-800 text-white p-2 rounded">exit</code> <br></br>
        Finally, the Kismet server on kali host can be shut down when no longer needed.


              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Log Files</h3> <br></br>
              Logging in Kismet can be configured through override files or command-line options. Some useful flags include: <br></br>

              <code className="bg-gray-800 text-white p-2 rounded">-T, --log-types (Override activated log types) </code> <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">-p, --log-prefix (Directory to store log files) </code> <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">-n, --no-logging  (Disable logging entirely) </code> <br></br>
              The <code className="bg-gray-800 text-white p-2 rounded">--no-logging </code> option can be useful for debugging without creating log files.
              <br></br>
              Kismet logs are stored in SQLite databases. The sqlite3 tool can be used to interact with them:
              <code className="bg-gray-800 text-white p-2 rounded">sudo sqlite3 /var/log/kismet/Kismet-YYYYMMDD-HHMMSS.kismet </code>
              <br></br>
              Once inside SQLite, tables can be listed using:
              <code className="bg-gray-800 text-white p-2 rounded">.tables </code> <br></br>
              This allows for efficient querying and analysis of captured data.
              </p>
            </>
          )
        },
        {
          title: "Bettercap Essentials – MITM & Wireless Attacks",
          summary: (
            <>
              <p className="p-5">
              <h3 className="text-xl font-bold">Bettercap Essentials</h3> <br></br>
              Bettercap is a popular tool for Wi-Fi assessments. It shares some capabilities with airodump-ng, aireplay-ng, and airbase-ng or hostapd-mana. Unlike many other tools, Bettercap provides flexibility through an interactive terminal, scripting language, or web UI. <br></br>

              While Bettercap has extensive functionalities beyond Wi-Fi, this guide focuses solely on its Wi-Fi capabilities.



              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Installation and Execution</h3> <br></br>
              Installing Bettercap is straightforward. Use the following command to install it: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">sudo apt install bettercap</code> <br></br>
              No additional configurations are needed for the wireless interface. As long as no other processes are using the wireless interface, Bettercap will configure monitor mode automatically. <br></br>
              To start Bettercap, use the following command, replacing wlan0 with the appropriate interface name: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">sudo bettercap -iface wlan0</code> <br></br>
              This will launch an interactive session. To display available commands, type:<code className="bg-gray-800 text-white p-2 rounded">help</code>  <br></br>
              If no -iface argument is provided, Bettercap will attempt to select an interface automatically. However, specifying the intended interface is recommended to avoid conflicts, especially if multiple wireless interfaces are present. <br></br>
              To change the Wi-Fi module’s interface, use: <code className="bg-gray-800 text-white p-2 rounded">set wifi.interface wlanX</code>  <br></br> Although this changes the interface, the terminal will still display the original interface name/IP, which is another reason to specify -iface at startup. To clear the screen, use: <code className="bg-gray-800 text-white p-2 rounded">clear</code>  <br></br> To exit Bettercap, type:<code className="bg-gray-800 text-white p-2 rounded">exit</code>

              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Modules vs. Commands</h3> <br></br>
              Bettercap's main functionality is divided into six primary modules: <br></br>

              <ul>
                <li>Bluetooth LE</li>
                <li>HID on 2.4GHz</li>
                <li>Ethernet</li>
                <li>Wi-Fi</li>
                <li>Core (for Bettercap-specific commands)</li>
                <li>Utils (for utilities like GPS or MAC address changers)</li>
              </ul>
              <br></br>

              Each module consists of commands and parameters. Commands trigger specific actions, such as deauthentication in the Wi-Fi module, while parameters modify module behavior, like adjusting the frequency of channel hopping. Set parameters using:

              <code className="bg-gray-800 text-white p-2 rounded">set 'parameter' 'value' </code> <br></br>
              For example, to set the channel-hopping period to 200 milliseconds:
              <code className="bg-gray-800 text-white p-2 rounded">set wifi.hop.period 200 </code> <br></br>
              While Bettercap supports various modules, this guide focuses on the Wi-Fi module.

              </p>


              <p className="p-5">
              <h3 className="text-xl font-bold">Wi-Fi Module</h3> <br></br>
              The Bettercap Wi-Fi module allows users to: <br></br>

              <ul>
                <li>Scan the Wi-Fi spectrum</li>
                <li>Deauthenticate clients</li>
                <li>Capture WPA/WPA2 handshakes</li>
                <li>Create rogue access points</li>
                Useful Wi-Fi commands:
                <li>wifi.recon – Scan for access points and capture WPA/WPA2 handshakes.</li>
                <li>wifi.deauth – Disconnect clients from an access point.</li>
                <li>wifi.show – Display discovered wireless stations.</li>
                <li>wifi.ap – Create a rogue access point.</li>
              </ul>
              <br></br>

              To use these commands, prepend wifi. (e.g., wifi.recon). Start Bettercap with:
              <code className="bg-gray-800 text-white p-2 rounded">sudo bettercap -iface wlan0</code> <br></br>
        
              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Discovering Access Points</h3> <br></br>
              The wifi.recon command scans for nearby access points. To initiate scanning: <br></br>


              <code className="bg-gray-800 text-white p-2 rounded">wifi.recon on</code> <br></br>
              Bettercap will automatically hop between channels and list discovered APs and clients. To scan specific channels, use:
              <code className="bg-gray-800 text-white p-2 rounded">wifi.recon.channel 'channel_numbers'</code> <br></br>
              For example, to scan channels 1, 6, and 11:
              <code className="bg-gray-800 text-white p-2 rounded">wifi.recon.channel 1,6,11 </code> <br></br>
              This helps refine the scan for efficiency.
              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Additional Methods for Interacting with Bettercap </h3> <br></br>
              So far, we have been using the interactive session to perform various actions in Bettercap. While effective, this approach can be tedious for simple or repetitive tasks. Bettercap provides alternative methods, such as a web interface for easier management and a scripting interface for automation.

<br></br>

<h3 className="text-xl font-bold">Caplets</h3> <br></br>
Caplets are script files that allow the execution of multiple commands without manually entering them in the terminal. These files use the .cap extension and are stored in /usr/share/bettercap/caplets/. For example, the massdeauth.cap caplet deauthenticates all clients every 10 seconds. The script includes:

<ul>
  <li>A customized prompt  </li>
  <li>A ticker that runs every 10 seconds  </li>
  <li>Commands to clear the screen and send deauthentication packets  </li>
  <li>Initialization of 802.11 discovery and event clearing  </li>

  Instead of using mass deauthentication, we can create a custom caplet to target specific clients on a corporate access point. This custom caplet:
  <li>Modifies the prompt to display the received data, interface name, and arrows.  </li>
  <li>Sets a ticker to execute every 10 seconds.  </li>
  <li>Displays relevant information while deauthenticating all clients connected to the corporate AP.  </li>
  <li>Starts network reconnaissance.  </li>
  <li>Clears the screen and event buffer.  </li>
</ul> <br></br>
To execute this caplet, use the following command:

              <code className="bg-gray-800 text-white p-2 rounded">sudo bettercap -iface wlan0 -caplet deauth_corp.cap   </code> <br></br>
              This will continuously send deauthentication packets and capture WPA2 handshakes for potential password cracking.
              </p>

              <p className="p-5">
              <h3 className="text-xl font-bold">Web Interface              </h3> <br></br>
              Bettercap’s interactive terminal can become cluttered, especially when dealing with multiple access points. The web interface provides a more structured way to display information and allows remote control of Bettercap. <br></br>
              By default, the web interface runs on port 443, with the API server on port 8083. To secure access, firewall rules should be set up using nftables to restrict access to a specific IP.


          <br></br>
          To configure nftables:


<ul>
  <li> <code className="bg-gray-800 text-white p-2 rounded">sudo nft add table inet filter  </code></li>
  <li> <code className="bg-gray-800 text-white p-2 rounded">sudo nft add chain inet filter INPUT (type filter hook input priority 0; policy drop; ) </code></li>  
  <li> <code className="bg-gray-800 text-white p-2 rounded">sudo nft add rule inet filter INPUT ip saddr 'your-ip' tcp dport 443 accept
  </code></li>  
  <li> <code className="bg-gray-800 text-white p-2 rounded">sudo nft add rule inet filter INPUT ip saddr 'your-ip' tcp dport 8083 accept
  </code></li>
</ul> <br></br>
Additionally, the web interface requires setting a username and password by modifying the caplet file at /usr/share/bettercap/caplets/https-ui.cap. After setting up authentication, the web interface can be launched with:
              <code className="bg-gray-800 text-white p-2 rounded">sudo bettercap -caplet https-ui.cap              </code> <br></br>
              Now, the Bettercap instance can be accessed remotely through a web browser for easier monitoring and management.

</p>



            </>
          )
        },
      ], quiz: {
        questions: [
          {
            id: 1,
            question: "Which Linux command is used to check the wireless interfaces available on a system?",
            options: [
              "ifconfig",
              "iwconfig",
              "netstat",
              "ipconfig"
            ],
            correctAnswer: "iwconfig"
          },
          {
            id: 2,
            question: "What is the primary purpose of setting a wireless adapter into monitor mode?",
            options: [
              "To connect to a Wi-Fi network",
              "To intercept and capture Wi-Fi packets",
              "To boost Wi-Fi signal strength",
              "To enable faster internet speeds"
            ],
            correctAnswer: "To intercept and capture Wi-Fi packets"
          },
          {
            id: 3,
            question: "Which tool can be used to determine the chipset and driver of a wireless adapter?",
            options: [
              "lsusb",
              "lspci",
              "airmon-ng",
              "netstat"
            ],
            correctAnswer: "airmon-ng"
          },
          {
            id: 4,
            question: "What does the 'wifi.recon on' command do in Bettercap?",
            options: [
              "Starts a deauthentication attack",
              "Begins scanning for access points and clients",
              "Creates a rogue access point",
              "Hides the network from other devices"
            ],
            correctAnswer: "Begins scanning for access points and clients"
          },
          {
            id: 5,
            question: "Which type of frame is responsible for establishing and maintaining Wi-Fi connections?",
            options: [
              "Data frames",
              "Management frames",
              "Control frames",
              "Beacon frames"
            ],
            correctAnswer: "Management frames"
          },
          {
            id: 6,
            question: "What is the purpose of the 'wifi.deauth' command in Bettercap?",
            options: [
              "To disconnect clients from an access point",
              "To connect to a Wi-Fi network",
              "To change the MAC address of an interface",
              "To increase network speed"
            ],
            correctAnswer: "To disconnect clients from an access point"
          },
          {
            id: 7,
            question: "Which Linux wireless stack is commonly used for interacting with Wi-Fi devices?",
            options: [
              "Netfilter",
              "mac80211",
              "iptables",
              "wireless-tools"
            ],
            correctAnswer: "mac80211"
          },
          {
            id: 8,
            question: "Which Bettercap module is used for wireless attacks?",
            options: [
              "wifi",
              "ble",
              "hid",
              "ethernet"
            ],
            correctAnswer: "wifi"
          },
          {
            id: 9,
            question: "What does a beacon frame contain in Wi-Fi communication?",
            options: [
              "MAC addresses of all connected devices",
              "The SSID and capabilities of an access point",
              "Encryption keys used for authentication",
              "The IP addresses of connected devices"
            ],
            correctAnswer: "The SSID and capabilities of an access point"
          },
          {
            id: 10,
            question: "Which of the following commands in Bettercap starts a rogue access point?",
            options: [
              "wifi.recon",
              "wifi.ap",
              "wifi.show",
              "wifi.deauth"
            ],
            correctAnswer: "wifi.ap"
          }
        ]
      }
      
    },
    {
      id: "module3",
      title: "Wireless Attacks & Exploitation",
      sections: [
        {
          title: "Cracking Authentication Hashes – PMKID, Handshakes, and Offline Cracking",
          summary: (
            <>

              <h3 className="text-xl font-bold">Cracking Authentication Hashes              </h3>
            <p className="p-5">Wi-Fi Protected Access (WPA, WPA2, and WPA3) supports two authentication methods: Pre-Shared Keys (PSK) and Enterprise. This guide focuses on cracking WPA and WPA2 networks that use pre-shared keys. <br></br>

            WPA, WPA2, and WPA3 rely on hash functions, which are one-way functions that map a passphrase to a fixed-size bit string. This process is irreversible; we can't derive the original passphrase from the hash. Cracking the hash requires capturing a handshake and making educated guesses at the passphrase. If a guessed passphrase, when hashed, matches the handshake data, the correct passphrase has been found. <br></br>
            Passphrases can be between 8 and 63 characters long. While knowing the exact length would help, WPA/WPA2/WPA3 prevent easy determination of this. One approach is generating a dictionary file with all possible permutations, but this is computationally expensive. Even with powerful hardware, cracking a passphrase can take anywhere from hours to decades, depending on its complexity.
            <br></br>
            Since WPA and WPA2 share the same authentication methodology, the same cracking techniques apply to both. WPA3, however, uses Simultaneous Authentication of Equals (SAE), which is resistant to offline attacks and will not be covered here.
            
            </p>

            <h3 className="text-xl font-bold">Aircrack-ng Suite </h3>
            <p className="p-5"> 
            To begin cracking WPA, we first need to capture a WPA 4-way handshake between the access point (AP) and a client. The handshake contains the necessary data to attempt passphrase cracking. <br></br>

              After enabling monitor mode on our wireless interface, we use airodump-ng to identify the target AP's channel and BSSID: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">sudo airodump-ng wlan0mon              </code> <br></br>
              From the output, we note the target AP's channel, BSSID, and connected clients. Next, we refine our capture:

              <code className="bg-gray-800 text-white p-2 rounded">sudo airodump-ng -c 'channel' -w wpa --essid 'ESSID' --bssid 'BSSID' wlan0mon
              </code> <br></br>
              With the capture running, we force a client to disconnect using aireplay-ng, prompting it to reconnect and triggering a new handshake capture: <br></br>

              <code className="bg-gray-800 text-white p-2 rounded">sudo aireplay-ng -0 1 -a 'BSSID' -c 'Client MAC' wlan0mon

              </code> <br></br>
              Once the client reconnects, airodump-ng should indicate a successful WPA handshake capture. If the handshake is not captured, possible reasons include:

              <ul>
                <li>The signal is too weak or too strong.                </li>
                <li>Some wireless drivers ignore directed deauthentication; try omitting the -c parameter.                </li>
                <li>If 802.11w is enabled, deauthentication frames may be ignored.                </li>
                <li>The target device did not reconnect or moved out of range.                </li>
              </ul>
            </p>

            <h3 className="text-xl font-bold">Cracking the Handshake            </h3>
            <p className="p-5"> 
            Once we have captured the handshake, we use aircrack-ng to attempt to crack the passphrase using a wordlist:
<br></br>


              <code className="bg-gray-800 text-white p-2 rounded">sudo aircrack-ng -w /usr/share/john/password.lst -e 'ESSID' -b 'BSSID' wpa-01.cap              </code> <br></br>
              If the passphrase is in the wordlist, aircrack-ng will successfully reveal it. Otherwise, alternative methods such as rule-based attacks, hybrid attacks, or GPU-based cracking tools may be necessary.

            </p>


            <h3 className="text-xl font-bold">  Using Aircrack-ng with Crunch   </h3>
            <p className="p-5"> 
            Crunch is a user-friendly password generator that integrates seamlessly with aircrack-ng. By providing a pattern, character set, or word list, Crunch generates all possible password combinations.

<br></br>

<h3 className="text-xl font-bold"> Generating a Wordlist </h3> <br></br>
Crunch requires specifying two parameters: the minimum and maximum password length. Since WPA/WPA2 passphrases range from 8 to 63 characters, let's generate a wordlist for 8-9 character passwords: <br></br>

              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 8 9 </code> <br></br>
              The output shows the generated wordlist requires 51 TB of storage, which is impractical. To refine the wordlist, we can restrict the character set: <br></br>
              
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 8 9 abc123 </code> <br></br>
              This significantly reduces the wordlist size to 110 MB, making it more manageable.<br></br>
              <h3 className="text-xl font-bold"> Using Patterns</h3> <br></br>

              <ul>
              Crunch allows pattern-based wordlist generation with the -t option:
                <li>@ represents lowercase letters</li>
                <li>, represents uppercase letters</li>
                <li>% represents numbers</li>
                <li>^ represents symbols</li>
              </ul>

              <br></br>
              For example, to generate passwords starting with "password" followed by three digits:
              <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 11 11 -t password%%%</code> <br></br>
              Alternatively, specifying a numeric character set achieves the same result: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 11 11 0123456789 -t password@@@</code> <br></br>


            </p>


            <h3 className="text-xl font-bold">  Generating Unique Words   </h3><br></br>
            <p className="p-5"> 
            The -p option generates unique words from a set of characters or full words. For instance:

<br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 1 1 -p abcde12345 </code> <br></br>
              To create a wordlist from multiple words:

<br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 1 1 -p dog cat bird </code> <br></br>
              Crunch also allows combining -t and -p for enhanced flexibility. For example, generating a wordlist where predefined words are followed by two digits: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 5 5 -t ddd%% -p dog cat bird </code> <br></br>

            </p>



            <h3 className="text-xl font-bold">  Piping Crunch Output to Aircrack-ng   </h3><br></br>
            <p className="p-5"> 
            Instead of saving large wordlists, we can pipe Crunch’s output directly into aircrack-ng:

<br></br>


              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ crunch 11 11 -t password%%% | aircrack-ng -e wifu crunch-01.cap -w - </code> <br></br>
              If the passphrase exists in the generated wordlist, aircrack-ng will identify the correct key.
              <br></br>
              <h3 className="text-xl font-bold"> Exercises </h3>
              <ul>
                <li>1. Configure an AP with WPA/WPA2-PSK encryption and set a passphrase of "password" followed by three digits.</li>
                <li>2. Put the wireless card into monitor mode and start capturing traffic with airodump-ng.</li>
                <li>3. Deauthenticate the client and ensure the WPA 4-way handshake is captured.</li>
                <li>4. Use Crunch with aircrack-ng to crack the WPA passphrase.</li>

                By refining character sets and using pattern-based generation, Crunch efficiently creates targeted wordlists, optimizing the password-cracking process.
              </ul>
            </p>



            <h3 className="text-xl font-bold"> Hashcat    </h3><br></br>
            <p className="p-5"> 
            Hashcat is a powerful password-cracking tool designed to leverage GPUs for enhanced performance. While CPUs can run Hashcat, GPUs significantly accelerate the process. <br></br>

For example, a modern Intel i7 CPU achieves around 20,000 passphrases per second, whereas an NVIDIA RTX 2080 Super GPU reaches approximately 650,000 passphrases per second—making it 32 times faster for only twice the cost of the CPU. High-end cloud-based GPUs, like the NVIDIA Tesla V100, can exceed 850,000 passphrases per second. <br></br>

Earlier versions of Hashcat were closed source, with separate versions for NVIDIA (using CUDA) and OpenCL. Now, Hashcat is open source and supports OpenCL across various hardware types, including CPUs, GPUs, and FPGAs.
              
            </p>



            <h3 className="text-xl font-bold"> OpenCL for GPUs            </h3><br></br>
            <p className="p-5"> 
            Using OpenCL, Hashcat can harness the power of GPUs for cracking passwords. However, only certain GPUs from AMD, NVIDIA, and Intel support OpenCL on specific platforms. While some ARM-based Mali GPUs are technically compatible, OpenCL support is often disabled.

<ul>
GPU Cracking Considerations:
  <li>Requires direct GPU access and works best on bare-metal installations.  </li>
  <li>Virtualized environments (e.g., VirtualBox, VMware Workstation) typically do not support OpenCL.  </li>
  <li>Some Type-1 hypervisors (Citrix, VMware ESXi, Proxmox) allow GPU passthrough, but these are not suited for desktop use.  </li>
  <li>Cloud-based GPU cracking is an alternative but incurs hourly costs.  </li>


</ul>

<br></br>

After installing and configuring OpenCL for Hashcat (either locally or in the cloud), you can begin cracking passwords efficiently.
              
            </p>


            <h3 className="text-xl font-bold"> Device Properties in Hashcat            </h3><br></br>
            <p className="p-5"> 
            Running the hashcat -I command displays the system’s OpenCL devices and ensures OpenCL is set up correctly.
<br></br>

If only the portable OpenCL (pocl) version is available, Hashcat will run extremely slowly. In such cases, aircrack-ng is a better alternative. However, the Intel OpenCL version performs comparably to aircrack-ng and can be used effectively.
            
            </p>


            <h3 className="text-xl font-bold"> Passphrase Cracking with Hashcat    </h3>
            <p className="p-5"> 
            Using the WPA hash mode, we will crack the file generated by cap2hccapx with the default John the Ripper (JtR) wordlist.

<br></br>

              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ hashcat -m 2500 output.hccapx /usr/share/john/password.lst </code> <br></br>
             


    
          <ul> Cracked Data:
            <li>Hash of nonce and BSSID: 2bce49121ecaccecf724cda86ea8c322</li>
            <li>BSSID: 340804093d38</li>
            <li>Client MAC address: 00184d1da81f</li>
            <li>ESSID: wifu</li>
            <li>Passphrase: password</li>
            </ul> 
            <br></br>
            Hashcat automatically creates a session while running, which can be interrupted using 'q' or 'Ctrl+C'. To restore a session, run:
            <br></br>

<code className="bg-gray-800 text-white p-2 rounded">hashcat --session hashcat --restore </code> <br></br>
A potfile containing the cracked passphrase is stored by default at ~/.hashcat/hashcat.potfile. To specify a different path, use: <br></br>

             <code className="bg-gray-800 text-white p-2 rounded">--potfile-path 'path' </code> <br></br>
             <h3 className="text-xl font-bold"> Exercises </h3>
              <ul>
                <li>1. Configure your access point (AP) with WPA/WPA2 PSK encryption using a passphrase from /usr/share/john/password.lst.</li>
                <li>2. Place your wireless card into monitor mode and start an airodump-ng capture.</li>
                <li>3. Deauthenticate the victim client and capture the WPA 4-way handshake.</li>
                <li>4. Convert the 4-way handshake to HCCAPx format.</li>
                <li>5. Crack the WPA passphrase using Hashcat.</li>

              </ul>


            </p>


            <h3 className="text-xl font-bold"> Airolib-ng </h3><br></br>

            <p className="p-5">
            Airolib-ng is a tool for managing ESSID and password lists, computing Pairwise Master Keys (PMKs), and using them for WPA/WPA2 PSK cracking. It uses SQLite3 for storage. <br></br>

Since PMK calculation is slow, precomputing PMKs for specific ESSID-passphrase combinations can significantly speed up WPA/WPA2 handshake cracking.  <br></br>


<h3 className="text-xl font-bold"> Airolib-ng </h3><br></br>
<ul>
                <li>First, create a file containing the ESSID of the target AP:</li>
                <li>kali@kali:~$ echo wifu -o essid.txt</li>
                <li>Import the ESSID file into an airolib-ng database:</li>
                <li>kali@kali:~$ airolib-ng wifu.sqlite --import essid essid.txt</li>
                <li>Verify the imported ESSID:</li>
                <li>kali@kali:~$ airolib-ng wifu.sqlite --stats</li>
                <li>Now, import a wordlist:</li>
                <li>kali@kali:~$ airolib-ng wifu.sqlite --import passwd /usr/share/john/password.lst</li>
                <li>Generate PMKs for the ESSID and passwords:</li>
                <li>kali@kali:~$ airolib-ng wifu.sqlite --batch</li>
                <li>Check the database status:</li>
                <li>kali@kali:~$ airolib-ng wifu.sqlite --stats</li>
                <li>Use the precomputed PMKs to speed up aircrack-ng:</li>
                <li>kali@kali:~$ aircrack-ng -r wifu.sqlite wpa1-01.cap</li>
              </ul> <br></br>


              <h3 className="text-xl font-bold"> Exercises </h3> <br></br>
              <ul>
                <li>1. Configure your AP with WPA/WPA2 PSK encryption using a passphrase from /usr/share/john/password.lst.</li>
                <li>2. Place your wireless card into monitor mode and start an airodump-ng capture.</li>
                <li>3. Deauthenticate the victim client and capture the WPA 4-way handshake.</li>
                <li>4. Create an airolib-ng database containing the AP’s ESSID and import the password list.</li>
                <li>5. Generate PMKs using airolib-ng.</li>
                <li>6. Use aircrack-ng with the database to recover the WPA passphrase.</li>
              </ul>

            </p>


            </>
          )
        },
        {
          title: "Aircrack-ng Essentials – Core Tools for Wi-Fi Penetration Testing",
          summary: (
            <>
              <h3 className="text-xl font-bold"> Aircrack-ng Essentials </h3><br></br>
              <p className="p-5">
              Aircrack-ng is a powerful suite of tools for auditing Wi-Fi networks. It includes a packet sniffer, a network detector, a frame injection tool, and a tool to crack WEP keys and WPA-PSK passphrases. <br></br>

Before attacking wireless networks, it's essential to understand the key tools within the Aircrack-ng suite. This section covers Airmon-ng for monitor mode management, Airodump-ng for capturing 802.11 frames, Aircrack-ng for cracking WEP and WPA keys, Airdecap-ng for decrypting capture files, and Airgraph-ng for visualizing network data.
              </p>

              <h3 className="text-xl font-bold"> Airmon-ng </h3><br></br>
              <p className="p-5">
              Airmon-ng is used to enable and disable monitor mode on wireless interfaces. Running it without parameters displays the current status and available wireless interfaces. <br></br>

              <img
                src="/Learning Paths/readteam/01.png"
                alt="Airmon-ng"
                className="my-4 w-full max-w-md mx-auto"
              /> 
              <br></br>
              The output shows the PHY identifier, interface name, driver, and chipset. The "phy" identifier remains constant until a reboot or when plugging/unplugging a Wi-Fi adapter. 

             
              </p>


              <h3 className="text-xl font-bold">Airmon-ng Check </h3><br></br>
              <p className="p-5">
              Some processes, like Network Manager, interfere with monitor mode by changing channels or switching back to managed mode. Airmon-ng can identify and terminate these processes. <br></br>

              <img
                src="/Learning Paths/readteam/02.png"
                alt="Airmon-ng"
                className="my-4 w-full max-w-md mx-auto"
              /> 
              <br></br>
              To stop interfering processes: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ sudo airmon-ng check kill </code> <br></br>
              If internet access is needed after enabling monitor mode, it must be manually configured using tools like dhclient or wpa_supplicant on another interface.



              </p>

              <h3 className="text-xl font-bold">Airmon-ng Start </h3><br></br>
              <p className="p-5">

              <ul>
                <li>To enable monitor mode on wlan0:</li>
                <li><code className="bg-gray-800 text-white p-2 rounded"> kali@kali:~$ sudo airmon-ng start wlan0</code></li>
                <li>This creates a new monitor mode interface, typically named wlan0mon. To specify a channel:</li>
                <li><code className="bg-gray-800 text-white p-2 rounded"> kali@kali:~$ sudo airmon-ng start wlan0 3</code></li>
                <li>To verify the monitor mode interface's channel and frequency:</li>
                <li><code className="bg-gray-800 text-white p-2 rounded"> kali@kali:~$ sudo iw dev wlan0mon info</code></li>
                <li>Alternatively, iwconfig can be used, though it is deprecated.</li>
                <li><code className="bg-gray-800 text-white p-2 rounded"> kali@kali:~$ sudo iwconfig wlan0mon</code></li>
              </ul>

              <h3 className="text-xl font-bold">Airmon-ng Verbose and Debug Options </h3><br></br>
              The --verbose option provides detailed system and interface information, useful for troubleshooting:
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ sudo airmon-ng --verbose</code> <br></br>
              The --debug option offers additional details derived from system commands:
              <code className="bg-gray-800 text-white p-2 rounded">kali@kali:~$ sudo airmon-ng --debug</code> <br></br>
              These options help diagnose compatibility issues with Wi-Fi adapters and drivers, ensuring smooth operation of Aircrack-ng tools.

              <h3 className="text-xl font-bold">Sniffing with Airodump-ng</h3><br></br>
              Once the wireless interface is in monitor mode, we can start capturing packets with airodump-ng. To focus on a specific channel, use the -c option, as shown below: <br></br>
              <code className="bg-gray-800 text-white p-2 rounded">sudo airodump-ng wlan0mon -c 2   </code> <br></br>
              This command initiates packet capture on channel 2. <br></br>
              <h3 className="text-xl font-bold">Understanding Airodump-ng Output</h3><br></br>
              Airodump-ng provides detailed information about detected access points (APs) and connected stations. The output is split into two sections:
              <ul>
                <li>Top Section: Displays AP details, including encryption type, SSID, and signal strength.                </li>
                <li>Bottom Section: Lists active stations, showing their MAC addresses, connection status, and data transmission rates.                </li>
                <li>Key Fields in the AP Section                </li>
                <li><img src="/Learning Paths/readteam/03.png" alt="Airmon-ng" className="my-4 w-full max-w-md mx-auto"/> </li>
                <li>Key Fields in the Station Section                </li>
                <li><img src="/Learning Paths/readteam/04.png" alt="Airmon-ng" className="my-4 w-full max-w-md mx-auto"/> </li>

              </ul>

              <ul>
              Interpreting the Data
                <li>Receive Quality (RXQ): If RXQ drops below 90% while beacons are still captured, it may indicate that we are too far from a client device.                </li>
                <li>Lost Packets: High loss rates can result from interference, distance, or hardware limitations.                </li>
                <li>Channel Overlapping: Some packets from adjacent channels may appear due to overlapping frequencies.                </li>
                <li>To improve packet capture:Move closer to the AP, Use a high-gain antenna,  Change the wireless channel if interference is an issue.                </li>

              </ul>

              <h3 className="text-xl font-bold">Precision Sniffing </h3><br></br>
              In environments with multiple APs, we can focus on a specific target using its BSSID and channel:

              <code className="bg-gray-800 text-white p-2 rounded">sudo airodump-ng -c 3 --bssid 34:08:04:09:3D:38 -w capture wlan0mon              </code> <br></br>

              <ul>
                <li>-c 3 locks onto channel 3.                </li>
                <li>--bssid filters for a specific AP.                </li>
                <li>-w capture saves output to a file for later analysis.                </li>
                <br></br> Filtering by BSSID reduces clutter, making it easier to analyze relevant packets.

              </ul>



              </p>
              
              <h3 className="text-xl font-bold"> Airodump-ng Output Files </h3><br></br>
              <p className="p-5">
              When using the -w option, Airodump-ng generates multiple file formats: <br></br>
              <ul>
                <li>PCAP (.cap) – Standard format for packet analysis in Wireshark.                </li>
                <li>CSV (.csv) – Log of captured APs and stations.                </li>

                <li>Kismet CSV (.kismet.csv) – Compatible with Kismet tools.                </li>

                <li>Kismet NetXML (.kismet.netxml) – XML-based data format.                </li>

              </ul>
              <br></br>
              These files allow further analysis, decryption attempts (if applicable), and correlation with other attack vectors.


              </p>


            </>
          )
        },
        {
          title: "Attacking WPS Networks – Exploiting Weak Configurations",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Attacking WPA Enterprise – Capturing Credentials & Bypassing Authentication",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Attacking Captive Portals – Bypassing Restricted Wi-Fi Networks",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Rogue Access Points – Evil Twin, Karma Attacks, & Credential Harvesting",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
      ],
      quiz: {
        "questions": [
          {
            "id": 1,
            "question": "What is the primary goal of cracking authentication hashes like PMKID and handshakes?",
            "options": [
              "To identify the encryption type used",
              "To obtain the plaintext password",
              "To intercept communication",
              "To modify network traffic"
            ],
            "correctAnswer": "To obtain the plaintext password"
          },
          {
            "id": 2,
            "question": "Which tool is most commonly used for cracking Wi-Fi handshakes?",
            "options": [
              "Wireshark",
              "John the Ripper",
              "Aircrack-ng",
              "Metasploit"
            ],
            "correctAnswer": "Aircrack-ng"
          },
          {
            "id": 3,
            "question": "What is the PMKID attack primarily used for?",
            "options": [
              "Exploiting weak Wi-Fi configurations",
              "Cracking WPA2 pre-shared keys",
              "Bypassing WPA Enterprise authentication",
              "Capturing WPS PINs"
            ],
            "correctAnswer": "Cracking WPA2 pre-shared keys"
          },
          {
            "id": 4,
            "question": "Which Aircrack-ng tool is used for capturing WPA handshakes?",
            "options": [
              "airmon-ng",
              "airodump-ng",
              "aircrack-ng",
              "airbase-ng"
            ],
            "correctAnswer": "airodump-ng"
          },
          {
            "id": 5,
            "question": "Which of the following is a vulnerability in WPS (Wi-Fi Protected Setup) networks?",
            "options": [
              "Weak PSK passwords",
              "Easily guessed PINs",
              "Unencrypted management frames",
              "Excessive signal interference"
            ],
            "correctAnswer": "Easily guessed PINs"
          },
          {
            "id": 6,
            "question": "Which attack method is used to exploit weak WPS PINs?",
            "options": [
              "Brute-force attack",
              "Dictionary attack",
              "Rainbow table attack",
              "Social engineering"
            ],
            "correctAnswer": "Brute-force attack"
          },
          {
            "id": 7,
            "question": "How does WPA Enterprise authentication differ from WPA Personal?",
            "options": [
              "WPA Enterprise requires a RADIUS server",
              "WPA Personal is more secure than WPA Enterprise",
              "WPA Enterprise uses a simpler password method",
              "WPA Personal does not require encryption"
            ],
            "correctAnswer": "WPA Enterprise requires a RADIUS server"
          },
          {
            "id": 8,
            "question": "What is a common method for bypassing WPA Enterprise authentication?",
            "options": [
              "Cracking the PMKID hash",
              "Capturing the 802.1X authentication credentials",
              "Injecting rogue access points",
              "Exploiting WPS vulnerabilities"
            ],
            "correctAnswer": "Capturing the 802.1X authentication credentials"
          },
          {
            "id": 9,
            "question": "What technique is used to bypass restricted Wi-Fi networks that require captive portal login?",
            "options": [
              "ARP spoofing",
              "DNS spoofing",
              "Session hijacking",
              "Cross-site scripting (XSS)"
            ],
            "correctAnswer": "DNS spoofing"
          },
          {
            "id": 10,
            "question": "What is a rogue access point used for in Wi-Fi penetration testing?",
            "options": [
              "Increasing Wi-Fi signal strength",
              "Stealing credentials via fake networks",
              "Improving network security",
              "Monitoring network traffic"
            ],
            "correctAnswer": "Stealing credentials via fake networks"
          }
        ]
      }
      
    },
    {
      id: "module4",
      title: "Defensive Strategies & Countermeasures",
      sections: [
        {
          title: "Identifying Wireless Threats & Implementing Security Best Practices",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Securing Wireless Networks Against Common Attacks",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Wrapping Up",
          summary: (
            <>
              <p className="p-5">
              By the end of this course, you will have gained a comprehensive understanding of wireless security, from the basics of Wi-Fi standards and encryption to the intricacies of wireless network analysis and advanced exploitation techniques. You will be equipped with practical skills in using essential tools such as Aircrack-ng, Kismet, and Bettercap to perform penetration testing and simulate real-world attacks. Additionally, you will learn how to identify wireless threats and implement security best practices to defend against common vulnerabilities. Whether you are cracking WPA handshakes, bypassing captive portals, or defending against rogue access points, this course will prepare you to effectively manage and secure wireless networks in any environment.
              </p>
            </>
          )
        }
        
      ],
      quiz: {
        "questions": [
          {
            "id": 1,
            "question": "What is a primary defensive strategy to mitigate rogue access points?",
            "options": [
              "Deploying IDS/IPS systems",
              "Using strong WPA3 encryption",
              "Implementing MAC address filtering",
              "Disabling SSID broadcast"
            ],
            "correctAnswer": "Using strong WPA3 encryption"
          },
          {
            "id": 2,
            "question": "Which of the following best practices helps prevent deauthentication attacks on Wi-Fi networks?",
            "options": [
              "Use WPA2 or WPA3 with strong passphrases",
              "Disable MAC address filtering",
              "Enable SSID broadcast",
              "Allow open Wi-Fi networks"
            ],
            "correctAnswer": "Use WPA2 or WPA3 with strong passphrases"
          },
          {
            "id": 3,
            "question": "What is the purpose of a wireless intrusion detection system (WIDS)?",
            "options": [
              "To enhance signal strength",
              "To monitor and detect unauthorized wireless access",
              "To block malicious traffic from the network",
              "To optimize Wi-Fi coverage"
            ],
            "correctAnswer": "To monitor and detect unauthorized wireless access"
          },
          {
            "id": 4,
            "question": "Which wireless encryption method is considered the most secure for protecting network traffic?",
            "options": [
              "WEP",
              "WPA",
              "WPA2",
              "WPA3"
            ],
            "correctAnswer": "WPA3"
          },
          {
            "id": 5,
            "question": "What is a key component of securing wireless networks against man-in-the-middle (MITM) attacks?",
            "options": [
              "Using weak passwords",
              "Enabling strong encryption methods like WPA2 or WPA3",
              "Disabling WPA2 and using WEP",
              "Allowing open networks for guest access"
            ],
            "correctAnswer": "Enabling strong encryption methods like WPA2 or WPA3"
          },
          {
            "id": 6,
            "question": "How can you mitigate the risks of an Evil Twin attack?",
            "options": [
              "Use HTTPS for sensitive communications",
              "Allow open access on the network",
              "Disable all encryption methods",
              "Use public DNS servers"
            ],
            "correctAnswer": "Use HTTPS for sensitive communications"
          },
          {
            "id": 7,
            "question": "What is one way to prevent wireless network sniffing by attackers?",
            "options": [
              "Disabling encryption",
              "Using WPA2 or WPA3 with strong passwords",
              "Allowing open SSIDs",
              "Using outdated encryption methods"
            ],
            "correctAnswer": "Using WPA2 or WPA3 with strong passwords"
          },
          {
            "id": 8,
            "question": "What action can help secure a Wi-Fi network against dictionary attacks?",
            "options": [
              "Disabling SSID broadcast",
              "Using strong, complex passphrases",
              "Allowing WPS setup",
              "Enabling open Wi-Fi access"
            ],
            "correctAnswer": "Using strong, complex passphrases"
          },
          {
            "id": 9,
            "question": "What is an effective method to reduce the risk of a brute-force attack on a wireless network?",
            "options": [
              "Allowing weak passwords",
              "Implementing account lockouts after failed attempts",
              "Disabling network encryption",
              "Using short passwords"
            ],
            "correctAnswer": "Implementing account lockouts after failed attempts"
          },
          {
            "id": 10,
            "question": "Which of the following is a recommended best practice for securing public Wi-Fi networks?",
            "options": [
              "Disabling encryption",
              "Using a VPN for encrypted communication",
              "Allowing open access for everyone",
              "Allowing unlimited bandwidth"
            ],
            "correctAnswer": "Using a VPN for encrypted communication"
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
