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
            <div style={{ textAlign: 'center' }}>
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
            <div style={{ textAlign: "center" }}>
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
                wpa_supplicant will automatically choose between TKIP and CCMP based on availability, but it is possible to force one or the other by adding <code>pairwise=CCMP</code> or <code>pairwise=TKIP</code> to the configuration if necessary.
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
                We now have to choose an IP address that doesn't conflict with the network and CIDR of the interface we just configured for Internet. Most routers offer an IP in the <code>192.168.1.0/24</code> range, so we will use the <code>10.0.0.0/24</code> range and set the wireless interface for the access point to <code>10.0.0.1</code>.
              </p>
              <pre>
                sudo ip link set wlan0 up
              </pre>
              <pre>
                sudo ip addr add 10.0.0.1/24 dev wlan0
              </pre>
        
              <p className="p-5"><strong>DHCP Server</strong></p>
              
              
              <p className="p-5">We will set up the DHCP server on the wireless interface (<code>wlan0</code>) using <code>dnsmasq</code>, which is a DNS and DHCP server.</p>
              <p className="p-5">Create a configuration file <code>dnsmasq.conf</code> with the following content:</p>
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
        
              <p className="p-5">To run <code>dnsmasq</code>:</p>
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
      <div style={{ textAlign: 'center' }}>
        <p className="p-5">
          When conducting wireless penetration testing, it's often necessary to disable network managers, as they can interfere with the tools being used. However, there are instances when we still need internet access or even need to share it. Although network managers can typically handle this, we will explore how to manually configure the setup, as network managers are disabled during testing. It's important to use a separate network interface from the one employed for penetration testing.
        </p>

        <p className="p-5">
          <strong>Connecting to an Access Point</strong>
        </p>
        <p className="p-5">
          Linux offers several wireless clients, with <code>wpa_supplicant</code> being the most widely used. It connects to Wi-Fi networks on many Linux distributions, even for unencrypted networks or those still using WEP.
        </p>
        <p className="p-5">
          <code>wpa_supplicant</code> can be controlled via a command-line interface (<code>wpa_cli</code>) or through configuration files specifying network settings.
        </p>

        <p className="p-5">
          This configuration allows the system to connect to an open network called "hotel_wifi" and instructs <code>wpa_supplicant</code> to scan for SSIDs first.
        </p>
        <p className="p-5">
          The tool will automatically select between TKIP and CCMP for encryption, but you can specify a preference by adding <code>pairwise=CCMP</code> or <code>pairwise=TKIP</code> to the configuration. <code>wpa_supplicant</code> also supports WPA3, OWE, and WPA Enterprise, though these are outside the scope of this tutorial. 
        </p>
        <p className="p-5">
          To simplify configuration, you can use the <code>wpa_passphrase</code> tool, which generates configuration files for basic WPA-PSK networks. This tool requires the ESSID and optionally, a passphrase. If the passphrase isn't provided, it will prompt for it and output the configuration to a file.
        </p>
        <p className="p-5">
          Using the sample configuration from above, the following commands would generate and use a configuration file (<code>wifi-client.conf</code>):
        </p>
        <code>
          sudo wpa_supplicant -i wlan0 -c wifi-client.conf
        </code>

        <p className="p-5">
          Once successfully connected, we can run <code>wpa_supplicant</code> in the background by appending <code>-B</code> and then request a DHCP lease with <code>dhclient</code>:
        </p>
        <code>
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
          You need an active Internet connection on the system, whether through Ethernet, Wi-Fi, or mobile broadband. Use <code>iw</code> to list supported modes for your Wi-Fi interface:
        </p>
        <code>
          sudo iw list
        </code>

        <p className="p-5"><strong>Static IP on Access Point Wireless Interface</strong></p>
        <p className="p-5">
          Assign a static IP to the wireless interface intended for the access point. Example:
        </p>
        <code>
          sudo ifconfig wlan0 10.0.0.1/24 up
        </code>

        <p className="p-5"><strong>DHCP Server</strong></p>
        <p className="p-5">
          To automatically assign IPs to clients, set up <code>dnsmasq</code>. Example configuration file (<code>dnsmasq.conf</code>):
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
        <p className="p-5">Start <code>dnsmasq</code> with:</p>
        <code>
          sudo dnsmasq --conf-file=dnsmasq.conf
        </code>

        <p className="p-5">
          You can confirm it’s running by checking the syslog:
        </p>
        <code>
          sudo tail /var/log/syslog | grep dnsmasq
        </code>

        <p className="p-5"><strong>Enable IP forwarding</strong></p>
        <code>
          echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
        </code>

        <p className="p-5"><strong>Set up NAT rule using nftables:</strong></p>
        <code>
          sudo apt install nftables
        </code>
        <code>
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

              <code>
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
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Frames and Network Interaction – How Wi-Fi devices communicate",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Wireshark Essentials – Packet Capturing & Analysis",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Kismet Essentials – Passive Network Discovery",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Bettercap Essentials – MITM & Wireless Attacks",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
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
          title: "Cracking Authentication Hashes – PMKID, Handshakes, and Offline Cracking",
          summary: (
            <>
              <p className="p-5"></p>
            </>
          )
        },
        {
          title: "Aircrack-ng Essentials – Core Tools for Wi-Fi Penetration Testing",
          summary: (
            <>
              <p className="p-5"></p>
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
