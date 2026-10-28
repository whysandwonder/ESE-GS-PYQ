// Information and Communication Technologies: notes book built from ESE Paper I PYQs 2017–2026.
addBook("ict", [
 ["i1", "Computers, software and computing", [["i1-1", "Hardware, operating systems, programming and AI"]]],
 ["i2", "Data communication and networks", [["i2-1", "Network models, layers and protocols"], ["i2-2", "Transmission, wireless, IoT and network performance"]]],
 ["i3", "Internet and web technologies", [["i3-1", "The web, HTML/XML, server-side programs and cloud"]]],
 ["i4", "Information security and cyber law", [["i4-1", "Cryptography and certificates"], ["i4-2", "Threats, defences, forensics and cyber law"]]],
 ["i5", "e-Governance and ICT for development", [["i5-1", "e-Governance and Digital India"], ["i5-2", "ICT in education and development"]]]
]);

addBookTopic("ict", "i1-1", `
<h3>Hardware and I/O</h3>
<ul><li><b>Dye-sublimation printers</b> give continuous-tone colour images that look and feel like photographs (2018 Q33).</li>
<li><b>Holographic storage</b> (Holostore) stores data in three dimensions in a crystal using laser interference patterns, giving high capacity and fast parallel access (2017 Q63).</li>
<li>I/O device characteristics (Silberschatz): character vs block, sequential vs random access, <b>synchronous vs asynchronous</b> (asynchronous: irregular, unpredictable response times, 2023 Q22), sharable vs dedicated, read/write.</li>
<li>The OS tracks many I/O requests with a <b>device-status table</b>: type, address and state of each device, with a queue of waiting requests (2023 Q23).</li></ul>
<h3>Operating systems</h3>
<ul><li>Types: batch, time-sharing, distributed, embedded, <b>real-time</b> (rigid time requirements: industrial control, medical imaging, weapons) (2022 Q29). Hard real-time misses are failures; soft real-time tolerates some.</li>
<li>Embedded-system development tools: cross-compilers, simulators, <b>emulators</b> (a mix of hardware and software that imitates the target), in-circuit debuggers (2019 Q98).</li></ul>
<h3>Programming</h3>
<ul><li>Core elements of high-level languages: <b>keywords, operators, punctuation</b> (and identifiers, literals) (2019 Q81).</li>
<li><b>Call by reference</b>: no copying (efficient), lets a function change the caller's variables and "return" several values; the drawback is that <b>inadvertent changes</b> overwrite the caller's originals (2026 Q35).</li>
<li>Data structures: an <b>AVL tree</b> keeps balance (subtree heights differ by at most 1), so search, insert and delete are <b>O(log n)</b> in average and worst cases (2025 Q84). Unbalanced BST worst case O(n).</li>
<li><b>COCOMO</b> estimates software effort and duration from size in KLOC: effort = a(KLOC)<sup>b</sup>; modes organic, semi-detached, embedded (2017 Q89).</li></ul>
<h3>Artificial intelligence</h3>
<ul><li><b>Iterative deepening search</b>: time O(b<sup>d</sup>), space O(bd); complete and optimal for unit costs (2026 Q33). BFS: time and space O(b<sup>d</sup>); DFS: space O(bm).</li>
<li>Logic programming (Prolog) uses <b>backward chaining</b> (goal-driven), made fast by compilers (2026 Q34). Forward chaining is data-driven.</li></ul>
<h3>Quantum computing</h3>
<ul><li>Uses <b>superposition</b> and <b>entanglement</b> of qubits with quantum gates; measurement gives one of a small discrete set of values (2023 Q21).</li>
<li>Physical qubits: photon polarisation, trapped neutral atoms (magneto-optical traps), trapped ions, superconducting circuits, electron spin in <b>quantum dots</b> ("artificial atoms") (2026 Q26).</li>
<li>India's National Quantum Mission (2023, ₹6,003.65 crore, to 2030-31).</li></ul>`);

addBookTopic("ict", "i2-1", `
<h3>Reference models</h3>
<table><tr><th>OSI layer</th><th>Function</th><th>Examples</th></tr>
<tr><td>7 Application</td><td>User services</td><td>HTTP, SMTP, FTP, DNS</td></tr>
<tr><td>6 Presentation</td><td>Syntax, encryption, compression</td><td>TLS, JPEG</td></tr>
<tr><td>5 Session</td><td>Dialogue control</td><td>RPC</td></tr>
<tr><td>4 Transport</td><td>End-to-end delivery, ports</td><td>TCP, UDP</td></tr>
<tr><td>3 Network</td><td>Routing, addressing, <b>QoS</b> (2019 Q75)</td><td>IP, BGP, OSPF</td></tr>
<tr><td>2 Data link</td><td>Framing, error control, MAC</td><td>Ethernet, 802.11</td></tr>
<tr><td>1 <b>Physical</b></td><td>Raw bits over the medium: voltages, connectors, timing (2022 Q28)</td><td>Cables, radio</td></tr></table>
<ul><li>TCP/IP model: link, internet, transport, application. Its features: applications may bypass layers; the <b>hourglass</b> shape with IP as the common method; anyone can propose new protocols ("rough consensus and running code") (2023 Q27).</li>
<li><b>Peering point</b>: a private switching station connecting ISPs' networks to exchange traffic (2020 Q84).</li></ul>
<h3>Protocols</h3>
<ul><li><b>UDP</b>: IP plus ports (multiplexing/demultiplexing of processes) and an optional checksum; connectionless (2024 Q32). TCP adds connections, reliability, ordering, flow and congestion control.</li>
<li><b>BGP</b> (Border Gateway Protocol) handles routing between autonomous systems, the true inter-domain routing of the Internet (2021 Q20). Inside: RIP (distance vector), OSPF (link state).</li>
<li>Transmission modes: <b>unicast</b> (one sender, one receiver: point-to-point) (2019 Q77), multicast, broadcast.</li>
<li><b>Extranet</b>: part of a company intranet opened to selected outsiders (2025 Q78).</li></ul>
<h3>Failures and LANs</h3>
<ul><li>Network failures: bit errors (interference: lightning, power surges, microwaves), packet loss (hard to tell lost from late), node and link failures (crashes, power cuts, backhoes cutting cables) (2023 Q28).</li>
<li><b>Fast Ethernet</b> (100 Mbps, 802.3u) was designed to compete with LAN protocols like FDDI (2020 Q82). Gigabit and 10G followed.</li>
<li>Counting topologies: 5 routers have 10 pairs; with 4 choices each, 4¹⁰ = 1,048,576 topologies (2026 Q27).</li></ul>`);

addBookTopic("ict", "i2-2", `
<h3>Transmission media</h3>
<ul><li>Guided: twisted pair, coaxial, optical fibre. Unguided: radio, microwave, <b>infrared</b> (TV remotes: short range, line of sight, no licence) and millimetre waves (2024 Q31).</li>
<li><b>Multiplexing</b>: radio stations share the spectrum by <b>FDM</b> (2022 Q34); TDM for digital trunks; WDM for fibre; CDMA by codes.</li>
<li><b>CDMA</b> = Code Division Multiple Access (2018 Q69). <b>FHSS</b>: carrier hops in a pseudo-random sequence; different networks in the same area coexist with different sequences (Bluetooth) (2023 Q20).</li></ul>
<h3>Wireless standards</h3>
<table><tr><th>Standard</th><th>Use</th></tr>
<tr><td>802.11 (Wi-Fi)</td><td>WLAN</td></tr>
<tr><td><b>802.15.1 Bluetooth</b></td><td>Wireless personal area network (2020 Q83)</td></tr>
<tr><td>802.15.4</td><td>Low-power PAN: Zigbee, Thread, <b>6LoWPAN</b> (IPv6 over 802.15.4) (2026 Q29)</td></tr>
<tr><td><b>802.11p</b></td><td>Vehicular communication (DSRC/WAVE) (2021 Q21)</td></tr>
<tr><td>802.16</td><td>WiMAX</td></tr></table>
<h3>Internet of Things</h3>
<p>Networked sensors and devices exchanging data without human intervention; needs low-power protocols (6LoWPAN, RPL, CoAP, MQTT) (2017 Q60). Routing attacks on IoT include <b>clone ID and Sybil</b> attacks (2022 Q27).</p>
<h3>Performance</h3>
<ul><li>Key metrics: <b>throughput and delay</b> (latency), plus jitter and loss (2021 Q22).</li>
<li>Effective throughput = data ÷ (RTT + transmit time): 1 MB over 1 Gbps with 100 ms RTT → 8 Mb/108 ms = <b>74.1 Mbps</b> (2023 Q25).</li>
<li><b>Delay × bandwidth</b> = bits in flight: 50 ms × 45 Mbps = 2.25 × 10⁶ bits (2023 Q26).</li>
<li>Frame size: 352 × 240 pixels × 3 bytes = 247.5 KB (2023 Q24).</li>
<li><b>Pure ALOHA</b> maximum throughput 1/2e ≈ 18.4%; slotted 1/e ≈ 36.8%. 56 kbps × 0.184 ÷ 10 bit/s per station ≈ 1030 stations (2026 Q28).</li>
<li>Real-time streams are allocated bandwidth by their <b>peak rate</b> (2019 Q74).</li></ul>
<h3>Multimedia and radar</h3>
<ul><li>Object-based audiovisual coding (MPEG-4) allows interaction, reuse and efficient coding of each object (2019 Q73). <b>Pre-echo</b> in audio coding spreads quantisation noise before a sharp transient (2019 Q76).</li>
<li>A <b>rat-race</b> (hybrid ring) coupler is used as a radar <b>duplexer</b> (2018 Q73).</li></ul>`);

addBookTopic("ict", "i3-1", `
<h3>The Web</h3>
<ul><li>A <b>URL</b> identifies the protocol, host (DNS name), port and path of a resource (2019 Q78, 2021 Q23).</li>
<li>Documents: <b>static</b> (fixed files), <b>dynamic</b> (created by the server on request via CGI) (2021 Q24), <b>active</b> (run in the browser: applets, JavaScript).</li>
<li><b>HTTP status codes</b>: 1xx informational, 2xx success (200 OK), 3xx redirection, 4xx client error (404), 5xx server error (<b>500 Internal Server Error</b>) (2024 Q37).</li>
<li>HTML gives structure; <b>CSS style sheets</b> give a site a consistent look across pages by many authors (2024 Q34); <b>XML</b> describes structured data for automated processing (2024 Q35).</li>
<li><b>Plug-ins</b>: code modules the browser fetches from a special directory and installs as an extension of itself (2024 Q33). Helper applications run separately.</li></ul>
<h3>Server-side programs</h3>
<ul><li>The <b>Common Gateway Interface</b> lets web servers pass forms and requests to back-end programs (gateway programs) that query databases and generate HTML (2019 Q79, 2024 Q36, 2025 Q82).</li>
<li>Server-side scripting languages: PHP, JSP, ASP; <b>HTML</b> is not one (2026 Q36).</li>
<li>WAIS (wide area information server) searched indexed databases over the Internet (2022 Q30).</li></ul>
<h3>Cloud computing</h3>
<p>Service models: <b>IaaS</b>, <b>PaaS</b>, <b>SaaS</b> (plus later "X as a Service" labels). Deployment: public, private, hybrid, community. Characteristics: on-demand self-service, broad network access, resource pooling, elasticity, measured service (2021 Q27).</p>
<h3>Free and open-source tools</h3>
<p>Scilab (numerical computing), Osdag (steel design, IIT Bombay/FOSSEE), PHP (web), LaTeX (documents) are free tools suited to ICT-based engineering education (2018 Q67).</p>`);

addBookTopic("ict", "i4-1", `
<h3>Symmetric ciphers</h3>
<ul><li><b>DES</b>: 64-bit blocks, <b>56-bit key</b>, 16 rounds (2021 Q28); triple DES extends it.</li>
<li><b>AES</b>: 128-bit blocks; keys of 128, 192 or 256 bits with 10, 12 or 14 rounds. Key expansion for AES-128 turns a 4-word key into <b>44 words (176 bytes)</b>: 4 × (rounds + 1) (2022 Q35).</li>
<li><b>One-time pad</b>: XOR the message with a truly random key as long as the message, used once; unbreakable (2026 Q38).</li></ul>
<h3>Public-key cryptography</h3>
<ul><li><b>RSA</b>: n = pq, φ = (p − 1)(q − 1), choose e coprime to φ, d = e<sup>−1</sup> mod φ. With e = 65, n = 2881 = 43 × 67, φ = 2772 and d = <b>725</b> (2026 Q31).</li>
<li><b>DSA</b>: each signature uses a secret random k; if k is revealed (or reused), the <b>private key</b> can be computed (2026 Q32).</li>
<li><b>X.509</b>: the standard for public-key certificates issued by certificate authorities (TLS, S/MIME) (2026 Q39).</li></ul>
<h3>Secure protocols</h3>
<ul><li><b>SSL/TLS</b> provides privacy and integrity between two communicating applications (2022 Q31). HTTPS = HTTP over TLS.</li>
<li><b>PGP</b> provides <b>e-mail security</b>: encryption, signatures, compression (2019 Q80). S/MIME is the alternative.</li>
<li>Wi-Fi security under <b>IEEE 802.11</b>: WEP ("Wired Equivalent Privacy"), then WPA, WPA2 (802.11i, AES) and WPA3 (2026 Q40).</li></ul>`);

addBookTopic("ict", "i4-2", `
<h3>Malware and attacks</h3>
<table><tr><th>Threat</th><th>Key feature</th></tr>
<tr><td>Virus</td><td>Attaches to files; needs user action</td></tr>
<tr><td><b>Worm</b></td><td>Lives in memory and copies itself without human help, often by email (2024 Q39)</td></tr>
<tr><td>Trojan</td><td>Looks useful, hides harm</td></tr>
<tr><td><b>Rootkit</b></td><td>Gives hidden administrator access (2024 Q41)</td></tr>
<tr><td><b>DDoS</b></td><td>Botnet floods a target (2024 Q40). Tools such as <b>Targa</b> bundle many IP-based DoS attacks (2025 Q81)</td></tr>
<tr><td>Phishing / smishing</td><td>Deceptive email / SMS</td></tr>
<tr><td><b>Cross-site scripting</b></td><td>Injected script runs in other users' browsers through a vulnerable web app (2025 Q87); SQL injection targets databases</td></tr>
<tr><td><b>Doxing</b></td><td>Piecing together online records to expose someone's identity (2024 Q43)</td></tr></table>
<h3>Defences</h3>
<ul><li><b>Firewall</b>: a system enforcing an access-control policy between trusted and untrusted networks (perimeter access control) (2025 Q79). Packet filters work at the <b>network layer</b> (2026 Q37). Firewalls filter by address, port and protocol, and can log traffic (2017 Q83).</li>
<li><b>IDS</b> monitors and alerts; IPS also blocks (2024 Q42). <b>IP reputation</b> services (e.g. ThreatRadar) block sources known to attack other sites (2026 Q30).</li>
<li>IT usage policy: respect intellectual property, no inappropriate use, protect passwords and resources, no harassment (2024 Q38).</li></ul>
<h3>Digital forensics</h3>
<ul><li><b>FORZA</b> model is based on the Zachman framework (2025 Q85). An <b>equivocal</b> analysis leaves conclusions still open to interpretation (2025 Q86).</li>
<li>UNIX logs: <b>loginlog</b> (failed logins), wtmp/utmp (logins), sulog, xferlog (FTP), aculog (dial-out) (2025 Q83).</li></ul>
<h3>Cyber law</h3>
<ul><li>US: <b>CAN-SPAM Act</b> (commercial email rules, 2024 Q45), CIPA (filters in schools and libraries; a US law, so 2024 Q44 was dropped for saying India), CALEA, Communications Decency Act.</li>
<li>India: IT Act 2000 (amended 2008), CERT-In, Digital Personal Data Protection Act 2023.</li>
<li><b>Creative Commons</b> licences combine BY, SA, NC and ND; "copyright infringement" is not a licence (2020 Q81).</li></ul>`);

addBookTopic("ict", "i5-1", `
<h3>e-Governance</h3>
<ul><li>Models: <b>G2C</b>, <b>G2B</b> (raise productivity, cut costs and red tape for business, 2017 Q88), G2G, G2E.</li>
<li>Benefits: simplicity, efficiency, transparency, accountability, convenience, lower corruption (2018 Q68).</li>
<li>Gartner's evolution: <b>information → interaction → transaction → transformation</b> (2025 Q80).</li>
<li>e-Governance Assessment Framework (eGAF) assesses the value of projects (2021 Q26). Projects succeed only when applications and processes are re-engineered and content is kept current; content is the heart of an IT project (2021 Q99, 2022 Q99). Sustainability needs a revenue or funding model, not just technology (2020 Q100).</li>
<li>Good governance (UN): participation, rule of law, transparency, responsiveness, consensus, equity, effectiveness, accountability (2020 Q88).</li></ul>
<h3>National programmes</h3>
<ul><li><b>NeGP</b> (2006) built core infrastructure: <b>SWAN</b> (state wide area networks), <b>SDC</b> (state data centres), CSCs (common service centres), with NISG as a support body (2020 Q87).</li>
<li><b>Digital India</b> (2015) has three vision areas: digital infrastructure as a utility, governance and services on demand, digital empowerment of citizens (2017 Q4, Q98; "free Wi-Fi" is not a vision area, 2020 Q86). Nine pillars include broadband highways, universal mobile access, <b>public Internet access</b> (nodal: <b>Department of Posts</b> for post offices, 2020 Q85), e-Kranti, information for all, electronics manufacturing, IT for jobs, early harvest.</li>
<li><b>PRAGATI</b>: Pro-Active Governance And Timely Implementation (2017 Q87).</li>
<li><b>e-NAM</b>: online national agriculture market linking APMC mandis (2018 Q71).</li>
<li>Later: Aadhaar, DigiLocker, UMANG, UPI and the India Stack.</li></ul>
<h3>Accessibility</h3>
<p>Accessibility legislation aims to improve access to services for disabled people (2017 Q86). India: Rights of Persons with Disabilities Act 2016; GIGW guidelines for government websites.</p>`);

addBookTopic("ict", "i5-2", `
<h3>ICT in education</h3>
<ul><li>Advantages: access anywhere, self-paced learning, multimedia, collaboration, easy updating (2017 Q84).</li>
<li><b>Instructor-led e-learning</b> uses web technology to run conventional classes live (2021 Q25); self-paced e-learning has no live instructor.</li>
<li><b>Creative pedagogy</b> involves productive learning and finding new solutions (2020 Q90). <b>Project-based learning</b> engages students in real-world problems over time (2022 Q33).</li>
<li>Programmed instruction: linear (Skinner: small steps) and <b>branched/intrinsic</b> (Crowder: larger frames, branching on errors, faster for able learners) (2022 Q32).</li>
<li>21st-century workplace skills: critical thinking, creativity, collaboration, communication (the 4 Cs), information and technology literacy (2020 Q89).</li></ul>
<h3>ICT for development</h3>
<ul><li>ICTs can speed rural development: market prices, weather, telemedicine, e-learning, financial inclusion (2018 Q97, 2020 Q99).</li>
<li>Constraints: connectivity, affordability, digital literacy, local-language content.</li></ul>`);
