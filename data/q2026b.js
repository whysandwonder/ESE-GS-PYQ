// ESE 2026 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q26–50
// Answers follow MADE EASY's unofficial key (see q2026a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2026-26", year: 2026, no: 26, subject: "ict", topic: "Physical qubits", keySource: K, doubt: true,
q: `Consider the following statements regarding quantum dots :<ol><li>A photon's polarization can be vertical or horizontal, or a superposition of both, and we can use this as a qubit.</li><li>Neutral atoms can be trapped at low temperatures using a magneto optical trap, which uses magnetic fields and lasers to cool and trap the atoms.</li><li>An electron can be bound to a small semiconductor device, similar to an electron bound to the nucleus of an atom. In these "artificial atoms", the spin of an electron, which can be "spin up" or "spin down", can be used as a qubit.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 (MADE EASY's key)</h3><p>All three statements are true descriptions of ways to build physical qubits.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (true, but about photons):</b> photon polarisation (horizontal, vertical or a superposition) is a qubit used in photonic quantum computing and quantum key distribution.</li>
<li><b>2 (true, but about neutral atoms):</b> magneto-optical traps cool and hold neutral atoms, whose energy levels act as qubits.</li>
<li><b>3 (true, and about quantum dots):</b> a quantum dot is a tiny semiconductor structure that confines an electron like an "artificial atom"; its spin (up or down) is the qubit.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). The question says "regarding quantum dots", and only statement 3 describes quantum dots, so we first answered (c). If the question means "regarding qubit technologies", all three are correct, giving (d). The answer depends on how UPSC reads the stem.</div>` },

{ id: "2026-27", year: 2026, no: 27, subject: "ict", topic: "Counting network topologies", keySource: K,
q: `Five routers are to be connected in a point-to-point subnet. Between each pair of routers, the designers may put a high-speed line, a medium-speed line, a low-speed line, or no line. If it takes 100 ms of computer time to generate and inspect each topology, how long will it take to inspect all of them ?`,
opts: ["108,578·6 sec", "102,785·6 sec", "110,857·6 sec", "104,857·6 sec"], ans: 3,
analysis: `<h3>Answer: (d) 104,857·6 sec</h3><p>Pairs of routers: <sup>5</sup>C<sub>2</sub> = 10. Each pair has 4 choices, so the number of topologies = 4<sup>10</sup> = 1,048,576.</p>
<p>Time = 1,048,576 × 0.1 s = <b>104,857.6 s</b> (about 29 hours).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(c)</b>: digit rearrangements of the correct value; only 104,857.6 equals 4<sup>10</sup> × 0.1.</li></ul>
<div class="key">This is Tanenbaum's exercise (Computer Networks, Chapter 1). It shows why network designers cannot simply try every topology: the count grows as k<sup>n(n−1)/2</sup>.</div><div class="tip">For n routers: pairs = n(n − 1)/2, so topologies = 4<sup>n(n−1)/2</sup>. With 6 routers it would be 4¹⁵ ≈ 10⁹, taking over three years at 0.1 s each.</div>` },

{ id: "2026-28", year: 2026, no: 28, subject: "ict", topic: "Pure ALOHA capacity", keySource: K,
q: `A group of N stations share a 56-kbps pure ALOHA channel. Each station outputs a 1000-bit frame on average once every 100 sec, even if the previous one has not yet been sent (e.g., the stations can buffer outgoing frames). What is the maximum value of N ?`,
opts: ["1003 stations", "1100 stations", "1010 stations", "1030 stations"], ans: 3,
analysis: `<h3>Answer: (d) 1030 stations</h3><p>Maximum throughput of pure ALOHA = 1/(2e) ≈ 18.4% of the channel.</p>
<p>Usable rate = 0.184 × 56,000 = 10,304 bit/s. Each station sends 1000 bits per 100 s = 10 bit/s. N = 10,304/10 ≈ <b>1030</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 1003</b> and <b>(c) 1010</b>: slightly below; they come from rounding the efficiency differently.</li>
<li><b>(b) 1100</b>: would need a throughput of about 19.6%, above the pure ALOHA maximum.</li></ul>
<div class="key">Slotted ALOHA doubles the maximum throughput to 1/e ≈ 36.8% by allowing transmissions only at slot boundaries; it would support about 2060 such stations. Tanenbaum, Chapter 4 exercise.</div>` },

{ id: "2026-29", year: 2026, no: 29, subject: "ict", topic: "6LoWPAN", keySource: K,
q: `Which one of the following protocols is suitable for IoT communication that though it was originally designed to support IEEE 802.15.4 low-power wireless networks in the 2.4-GHz band ?`,
opts: ["Routing Protocol for Low power and Lossy networks (RPL)", "IPv4/IPv6", "6LoWPAN", "MQTT"], ans: 2,
analysis: `<h3>Answer: (c) 6LoWPAN</h3><p><b>6LoWPAN</b> (IPv6 over Low-Power Wireless Personal Area Networks) is an adaptation layer that compresses IPv6 headers and fragments packets so that IPv6 can run over IEEE 802.15.4 radios (frames of only 127 bytes). It was designed for 802.15.4 in the 2.4 GHz band and is now used across many IoT links.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) RPL</b>: a <b>routing</b> protocol for low-power and lossy networks that runs on top of 6LoWPAN.</li>
<li><b>(b) IPv4/IPv6</b>: general network-layer protocols, not designed for 802.15.4.</li>
<li><b>(d) MQTT</b>: a lightweight publish–subscribe <b>application</b> protocol over TCP.</li></ul>
<div class="key">IoT stack example: 802.15.4 (physical/MAC) → 6LoWPAN (adaptation) → IPv6 + RPL (network) → UDP → CoAP or MQTT-SN (application). Zigbee and Thread also use 802.15.4.</div>` },

{ id: "2026-30", year: 2026, no: 30, subject: "ict", topic: "IP reputation (DDoS)", keySource: K,
q: `Which one of the following statements is related to key feature of ThreatRadar reputation to prevent DDoS attacks on cloud infrastructure ?`,
opts: ["ThreatRadar reputation service keeps track of users who are attacking other websites. By using this information, it will filter off any request from those users and prevent them from getting into the cloud system", "ThreatRadar reputation service helps to monitor and keep track of both user agents and DDoS attacks vectors", "ThreatRadar reputation service helps to detect users who have the pattern of generating and sending HTTP requests with long response times", "ThreatRadar reputation service has the capability to send a JavaScript challenge to users' browsers. The JavaScript challenge has the capacity to detect and block bots"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p><b>ThreatRadar</b> (Imperva's web application firewall service) uses <b>IP reputation</b>: it tracks sources known to be attacking other websites, and blocks requests from them before they reach the protected cloud system. This "community defence" is its key reputation feature.</p>
<h3>Why not the others</h3><p>These describe other DDoS defences in the same family of products, not the reputation service:</p><ul>
<li><b>(b)</b>: monitoring user agents and attack vectors is part of general traffic analysis.</li>
<li><b>(c)</b>: detecting clients that send requests with long response times targets slow "low-and-slow" attacks; it is behaviour-based, not reputation-based.</li>
<li><b>(d)</b>: JavaScript challenges are a bot-detection technique: real browsers run the script, simple bots do not.</li></ul>
<div class="key">Layered DDoS defence: IP reputation, rate limiting, bot detection (challenges, CAPTCHAs), behavioural analysis, and upstream scrubbing by CDNs.</div>` },

{ id: "2026-31", year: 2026, no: 31, subject: "ict", topic: "RSA private key", keySource: K,
q: `In an RSA system, the public key of a given user is e = 65, n = 2881. What is the private key of this user ?`,
opts: ["638", "725", "2031", "3031"], ans: 1,
analysis: `<h3>Answer: (b) 725</h3><p>Factor n: 2881 = 43 × 67. Then φ(n) = 42 × 66 = 2772. The private key d satisfies e·d ≡ 1 (mod φ).</p>
<p>Check (b): 65 × 725 = 47,125 = 17 × 2772 + 1 ✔. So <b>d = 725</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 638</b>: 65 × 638 = 41,470 ≡ 2662 (mod 2772), not 1.</li>
<li><b>(c) 2031</b>: 65 × 2031 ≡ 1731 (mod 2772).</li>
<li><b>(d) 3031</b>: larger than n, so it cannot be a reduced private exponent.</li></ul>
<div class="key">RSA steps: choose primes p, q; n = pq; φ = (p − 1)(q − 1); choose e coprime to φ; find d = e<sup>−1</sup> mod φ (extended Euclid). Encrypt C = M<sup>e</sup> mod n; decrypt M = C<sup>d</sup> mod n.</div>` },

{ id: "2026-32", year: 2026, no: 32, subject: "ict", topic: "DSA per-message secret k", keySource: K,
q: `What happens if a k value used in creating a Digital Signature Algorithm (DSA) signature is compromised ?`,
opts: ["A user's public key is compromised if k is discovered", "A user's private key is not compromised if k is discovered", "A user's private key is compromised if k is discovered", "A user's public key is not compromised if k is discovered"], ans: 2,
analysis: `<h3>Answer: (c) A user's private key is compromised if k is discovered</h3><p>In DSA, s = k<sup>−1</sup>(H(m) + x·r) mod q, where x is the private key. If an attacker learns k, they can solve directly: x = (s·k − H(m))·r<sup>−1</sup> mod q. So revealing (or reusing) k exposes the private key.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(d)</b>: the public key is public anyway; "compromising" it is meaningless.</li>
<li><b>(b)</b>: the reverse of the truth.</li></ul>
<div class="key">Famous failure: Sony's PlayStation 3 used the same k for every ECDSA signature, and hackers recovered its private signing key in 2010. Modern implementations derive k deterministically (RFC 6979).</div>` },

{ id: "2026-33", year: 2026, no: 33, subject: "ict", topic: "Iterative deepening search", keySource: K,
q: `Which one of the following is the time complexity of Iterative Deepening in Uninformed Search Strategies ?`,
opts: ["O(bd)", "O(bl)", "O(b<sup>d</sup>)", "O(b<sup>l</sup>)"], ans: 2,
analysis: `<h3>Answer: (c) O(b<sup>d</sup>)</h3><p>Iterative deepening runs depth-limited search with limits 0, 1, 2, … until the goal (at depth d) is found. Nodes near the root are generated repeatedly, but the total is still dominated by the last level: (d)b + (d − 1)b² + … + b<sup>d</sup> = <b>O(b<sup>d</sup>)</b>, where b is the branching factor.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) O(bd)</b>: its <b>space</b> complexity (like depth-first search).</li>
<li><b>(b) O(bl)</b>: space of depth-limited search with limit l.</li>
<li><b>(d) O(b<sup>l</sup>)</b>: time of depth-limited search with limit l.</li></ul>
<div class="key">Iterative deepening combines BFS's completeness and optimality (for unit step costs) with DFS's low memory. Russell and Norvig call it the preferred uninformed method when the search space is large and the solution depth unknown.</div>` },

{ id: "2026-34", year: 2026, no: 34, subject: "ict", topic: "Backward chaining", keySource: K,
q: `Which one of the following algorithms is used in logic programming systems, which employ sophisticated compiler technology to provide very fast inference ?`,
opts: ["Backward chaining", "Forward chaining", "Constraint Satisfaction problem", "A<sup>*</sup> algorithm"], ans: 0,
analysis: `<h3>Answer: (a) Backward chaining</h3><p>Logic programming languages such as <b>Prolog</b> use <b>backward chaining</b>: start from the goal and work back through rules to known facts (SLD resolution, depth-first). Prolog compilers (the Warren Abstract Machine) make this inference very fast (Russell and Norvig).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Forward chaining</b>: starts from known facts and derives new ones (data-driven); used in production systems and deductive databases.</li>
<li><b>(c) CSP</b>: a problem formulation (variables, domains, constraints), not an inference algorithm for logic programs.</li>
<li><b>(d) A*</b>: a heuristic best-first search algorithm.</li></ul>
<div class="key">Backward chaining is goal-directed: it looks only at relevant facts. Forward chaining may derive many irrelevant facts but suits monitoring systems that react to new data.</div>` },

{ id: "2026-35", year: 2026, no: 35, subject: "ict", topic: "Call by reference", keySource: K,
q: `Which one of the following is a disadvantage of call-by-reference technique of passing arguments ?`,
opts: ["Since arguments are not copied into the new variables, it provides greater time and space efficiency", "The function can change the value of the argument and the change is reflected in the calling function", "A function can return only one value. In case we need to return multiple values, we can pass those arguments by reference, so that the modified values are visible in the calling function", "If inadvertent changes are caused to variables in called function then these changes would be reflected in calling function as original values would have been overwritten"], ans: 3,
analysis: `<h3>Answer: (d)</h3><p>With call by reference, the function works on the caller's own variables. An <b>accidental</b> change inside the function therefore overwrites the original values in the caller, which can cause hard-to-find bugs.</p>
<h3>Why not the others</h3><p>These are <b>advantages</b> of call by reference:</p><ul>
<li><b>(a)</b>: no copying, so it saves time and memory (important for large objects).</li>
<li><b>(b)</b>: the function can deliberately update the caller's variable.</li>
<li><b>(c)</b>: a way to "return" several values.</li></ul>
<div class="key">Defence: pass by constant reference (const T&amp; in C++) when the function only needs to read a large argument. C passes everything by value, using pointers to imitate references.</div>` },

{ id: "2026-36", year: 2026, no: 36, subject: "ict", topic: "Server-side scripting", keySource: K,
q: `Which one of the following types of programming languages is NOT used to develop the large of contents dynamically for server side scripts ?`,
opts: ["PHP (Hypertext Pre-processor)", "Java Server Pages (JSP)", "Active Server Page (ASP)", "HTML"], ans: 3,
analysis: `<h3>Answer: (d) HTML</h3><p><b>HTML</b> is a markup language describing a page's static structure and content. It cannot run logic, query databases or build content on the fly, so it is not a server-side scripting language.</p>
<h3>Why not the others</h3><p>All three run on the server and generate HTML dynamically:</p><ul>
<li><b>(a) PHP</b>: widely used, e.g. WordPress.</li>
<li><b>(b) JSP</b>: Java-based, compiled to servlets.</li>
<li><b>(c) ASP</b> (now ASP.NET): Microsoft's server-side framework.</li></ul>
<div class="key">See 2024 Q36 (CGI) and 2025 Q82 (gateway programs) for how a web server hands requests to server-side programs.</div>` },

{ id: "2026-37", year: 2026, no: 37, subject: "ict", topic: "Packet-filtering firewalls", keySource: K,
q: `In which one of the following layers, the firewalls can be installed to keep good packets and bad packets out ?`,
opts: ["Physical layer", "Transport layer", "Network layer", "Application layer"], ans: 2,
analysis: `<h3>Answer: (c) Network layer</h3><p>Tanenbaum describes the firewall's basic job in network-layer terms: a packet filter inspects each IP packet's header (source and destination addresses, ports, protocol) and lets good packets in while keeping bad packets out.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Physical layer</b>: carries raw bits; it has no notion of packets to filter.</li>
<li><b>(b) Transport layer</b>: firewalls do look at ports (a transport field), but packet filtering is classed as a network-layer function.</li>
<li><b>(d) Application layer</b>: application gateways (proxies) work here and inspect content, but they are a more advanced type, not the basic packet filter.</li></ul>
<div class="key">Firewall types: packet filter (network layer), stateful inspection (tracks connections), application-level gateway or proxy, and next-generation firewalls that combine these with intrusion prevention.</div>` },

{ id: "2026-38", year: 2026, no: 38, subject: "ict", topic: "One-time pad", keySource: K,
q: `In cryptography, to construct an unbreakable cipher text, which one of the following logical operations is used in one-time pads ?`,
opts: ["XOR", "AND", "NAND", "XNOR"], ans: 0,
analysis: `<h3>Answer: (a) XOR</h3><p>A one-time pad encrypts by <b>XOR</b>ing the message with a truly random key of the same length: C = M ⊕ K. Decryption is the same operation: M = C ⊕ K. If the key is random, kept secret and never reused, the ciphertext reveals nothing about the message (Shannon's perfect secrecy).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) AND</b> and <b>(c) NAND</b>: not reversible: many inputs give the same output, so the message could not be recovered, and the output is biased.</li>
<li><b>(d) XNOR</b>: reversible (it is XOR followed by NOT), but the standard construction uses XOR.</li></ul>
<div class="key">XOR is used in almost every symmetric cipher (stream ciphers, AES round keys) because it is its own inverse and, with a uniform key, hides all information about the input.</div>` },

{ id: "2026-39", year: 2026, no: 39, subject: "ict", topic: "X.509 certificates", keySource: K,
q: `Which one of the following digital certificate standards is used for certificate-based authentication security frame work that can be used for providing secure transaction processing and private information ?`,
opts: ["X.502", "X.501", "X.510", "X.509"], ans: 3,
analysis: `<h3>Answer: (d) X.509</h3><p><b>X.509</b> is the ITU-T standard for public-key certificates: a certificate binds a public key to an identity and is signed by a certificate authority. It underpins TLS/HTTPS, S/MIME email, code signing and digital signature certificates.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) X.501</b>: describes the directory models in the X.500 series, not certificates.</li>
<li><b>(a) X.502</b> and <b>(c) X.510</b>: not certificate standards.</li></ul>
<div class="key">An X.509 certificate contains a version, serial number, signature algorithm, issuer, validity period, subject, subject's public key and extensions. In India, licensed certifying authorities issue digital signature certificates under the IT Act 2000, overseen by the Controller of Certifying Authorities.</div>` },

{ id: "2026-40", year: 2026, no: 40, subject: "ict", topic: "WLAN security (802.11)", keySource: K,
q: `Which one of the following IEEE standard protocols prescribes a data link-level security which is designed to make the security of a wireless LAN as well as that of a wired LAN ?`,
opts: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.1", "IEEE 802.4"], ans: 0,
analysis: `<h3>Answer: (a) IEEE 802.11</h3><p>The 802.11 (Wi-Fi) standard defined <b>WEP</b>, "Wired Equivalent Privacy", a data-link-level protocol meant to make a wireless LAN as secure as a wired LAN. WEP proved weak and was replaced by WPA and WPA2 (802.11i) and now WPA3.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 802.3</b>: Ethernet (wired LAN).</li>
<li><b>(c) 802.1</b>: bridging and network management (802.1Q VLANs, 802.1X port-based authentication).</li>
<li><b>(d) 802.4</b>: token bus, now obsolete.</li></ul>
<div class="key">WEP used RC4 with a 24-bit initialisation vector, which repeated quickly and allowed key recovery. WPA2 uses AES-CCMP; WPA3 adds SAE handshakes resistant to offline password guessing.</div>` },

{ id: "2026-41", year: 2026, no: 41, subject: "ethics", topic: "Approaches to ethics", keySource: K,
q: `Consider the following statements regarding ethics :<ol><li>Ethics is to provide us with moral principles or universal rules that tell us what to do.</li><li>The fundamental question of ethics is not "What should I do ?" but "What kind of person should I be ?"</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], ans: 2,
analysis: `<h3>Answer: (c) Both 1 and 2</h3><p>The two statements describe two main traditions of ethics (as presented by the Markkula Center for Applied Ethics):</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> principle-based (rule) ethics: utilitarianism and duty ethics aim to give principles or rules that tell us what to do.</li>
<li><b>2 (correct):</b> <b>virtue ethics</b>: the basic question is "What kind of person should I be?"; right action follows from good character (Aristotle).</li></ul>
<div class="key">The two views complement each other: rules guide particular decisions; virtues (honesty, courage, fairness) shape the person who applies them. Engineering codes contain both rules and aspirational ideals.</div>` },

{ id: "2026-42", year: 2026, no: 42, subject: "ethics", topic: "Risk–benefit analysis", keySource: K,
q: `Consider the following statements regarding Risk-Benefit Analysis :<br>The major reason for the analysis of the risk benefit are<ol><li>to know risks and benefits and weigh them each.</li><li>to decide on designs, advisability of product/project.</li><li>to suggest and modify the design so that the risks are eliminated or reduced.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Engineering-ethics texts give these as the main reasons for risk–benefit analysis.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> identify the risks and benefits and weigh them against each other.</li>
<li><b>2 (correct):</b> decide on designs and whether a product or project should go ahead.</li>
<li><b>3 (correct):</b> suggest design changes so risks are eliminated or reduced.</li></ul>
<div class="key">Ethical limits: who bears the risk and who gets the benefit may differ (equity), and people accept voluntary risks more readily than imposed ones. Informed consent of those exposed is a key ethical test.</div>` },

{ id: "2026-43", year: 2026, no: 43, subject: "ethics", topic: "TRIPS", keySource: K,
q: `Consider the following regarding intellectual property rights :<br>The agreements with World Trade Organization (WTO) and Trade-Related aspects of Intellectual Property System (TRIPS) establish norms and conditions for following instruments of intellectual properties :<ol><li>Patents</li><li>Copyright</li><li>Trademark</li><li>Trade secret</li></ol>Which of the above instruments of intellectual properties are correct ?`,
opts: ["1 and 3 only", "1, 2 and 3 only", "2 and 3 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><p>The WTO's <b>TRIPS Agreement</b> (1995) sets minimum standards for all major forms of IP.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> patents: at least 20 years from filing.</li>
<li><b>2 (yes):</b> copyright and related rights.</li>
<li><b>3 (yes):</b> trademarks.</li>
<li><b>4 (yes):</b> trade secrets, covered as "protection of undisclosed information" (Article 39).</li></ul>
<div class="key">TRIPS also covers geographical indications, industrial designs and layout designs of integrated circuits. India amended its Patents Act in 2005 to meet TRIPS, introducing product patents for medicines; Section 3(d) prevents "evergreening".</div>` },

{ id: "2026-44", year: 2026, no: 44, subject: "ethics", topic: "Value education", keySource: K, provKey: "D",
q: `Consider the following statements regarding value education :<ol><li>Value education is that part of education which deals with understanding one's participation in the larger order, and thus ensuring it in living.</li><li>The content of value education must be all encompassing, i.e., it must include all dimensions of a human being as well as all levels of human living.</li><li>The process of value education is essentially a process of self-exploration (self-reflection and self-discovery). Self-exploration does not include self-verification at the level of natural acceptance and experiential validation in living.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2 only (our answer)</h3><p>These statements come from R. R. Gaur et al., <i>A Foundation Course in Human Values and Professional Ethics</i> (the AICTE universal human values course).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> value education helps us understand our participation in the larger order and live accordingly.</li>
<li><b>2 (correct):</b> its content must be all-encompassing: all dimensions of a human being and all levels of living (individual, family, society, nature).</li>
<li><b>3 (wrong):</b> in the course, self-exploration <b>is</b> self-verification: each proposal is verified on the basis of one's natural acceptance and then validated by experience in living. Saying that self-exploration "does not include" self-verification contradicts the source.</li></ul>
<div class="note">MADE EASY's unofficial key gives (d) 1, 2 and 3. The words "does not include" make statement 3 the opposite of the textbook's definition, so we show (a).</div>` },

{ id: "2026-45", year: 2026, no: 45, subject: "quality", topic: "Quality characteristics", keySource: K,
q: `Consider the following elements regarding quality characteristics :<ol><li>Physical</li><li>Sensory</li><li>Time based</li></ol>Which of the above elements are correct ?`,
opts: ["1 and 3 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Quality characteristics are commonly grouped as (see 2022 Q2):</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> <b>physical</b> (structural): length, weight, strength, viscosity.</li>
<li><b>2 (yes):</b> <b>sensory</b>: taste, appearance, colour, smell.</li>
<li><b>3 (yes):</b> <b>time-based</b> (time-oriented): reliability, durability, maintainability.</li></ul>
<div class="key">A fourth group in Juran's list is ethical characteristics (courtesy, honesty of service staff). Each group needs a different measurement method: instruments, trained panels, life tests or customer feedback.</div>` },

{ id: "2026-46", year: 2026, no: 46, subject: "quality", topic: "Taguchi methods in TQM", keySource: K,
q: `Consider the following methods regarding quality improvements in TQM :<ol><li>Robust design</li><li>Taguchi loss function</li></ol>Which of the above methods is/are correct ?`,
opts: ["1 only", "2 only", "Neither 1 nor 2", "Both 1 and 2"], ans: 3,
analysis: `<h3>Answer: (d) Both 1 and 2</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> <b>robust design</b> makes products and processes insensitive to noise factors (see Q6).</li>
<li><b>2 (yes):</b> the <b>Taguchi loss function</b>, L = k(y − T)², shows that any deviation from target causes loss, not just going outside the specification limits. It drives continuous reduction of variation.</li></ul>
<div class="key">Both are Taguchi's contributions and standard quality-improvement tools in TQM, along with the seven basic tools (check sheet, Pareto chart, cause-and-effect diagram, histogram, scatter diagram, control chart, flowchart).</div>` },

{ id: "2026-47", year: 2026, no: 47, subject: "quality", topic: "Common vs assignable causes", keySource: K,
q: `Consider the following statements regarding variations in quality control tools :<ol><li>Common/Random/Chance variations are difficult to trace and difficult to control even under the best condition of operation.</li><li>Assignable variations are of higher magnitude which can be easily traced and detected.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Neither 1 nor 2", "Both 1 and 2"], ans: 3,
analysis: `<h3>Answer: (d) Both 1 and 2</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> chance (common, random) causes are many small, inherent influences; no single one can be traced, and they remain even when the process is run at its best.</li>
<li><b>2 (correct):</b> assignable (special) causes, such as tool wear, a bad material batch or operator error, are larger and can be traced and removed. Control charts are designed to detect them.</li></ul>
<div class="key">A process with only chance causes is "in statistical control". Reducing chance variation needs a change to the system itself (management's job, according to Deming); removing assignable causes is usually done at the process level.</div>` },

{ id: "2026-48", year: 2026, no: 48, subject: "ethics", topic: "Reverence", keySource: K, doubt: true,
q: `Consider the following statements regarding reverence :<ol><li>Reverence is the feeling of acceptance for excellence.</li><li>If someone has achieved the state of excellence, we naturally have an acceptance for such a person. This feeling of acceptance for excellence is called reverence.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Neither 1 nor 2", "Both 1 and 2"], ans: 0,
analysis: `<h3>Answer: (a) 1 only (MADE EASY's key)</h3><p>In Gaur's universal human values course, reverence is one of the nine feelings in human relationships (trust, respect, affection, care, guidance, reverence, glory, gratitude, love).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> reverence is the feeling of acceptance of excellence.</li>
<li><b>2 (excluded by the key):</b> in the course, reverence is felt for someone who is <b>making effort</b> for excellence, not only for someone who has already achieved it. Statement 2 limits it to achieved excellence.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). We first chose (d), reading statement 2 as an expanded version of statement 1. The key's (a) rests on a fine wording difference ("has achieved" versus "is committed to and making effort for" excellence).</div>
<div class="key">Related feelings in the same list: glory is the feeling for someone who has made efforts for the excellence of others; gratitude is the feeling for someone who has helped me towards excellence.</div>` },

{ id: "2026-49", year: 2026, no: 49, subject: "ethics", topic: "Fulfilment in relationships", keySource: K,
q: `Consider the following statements regarding fulfilment of relationship in human values :<br>Fulfilment of relationship means<ol><li>ensuring the naturally acceptable feeling in oneself and sharing it with the other.</li><li>living with responsibility with the other unconditionally.</li><li>making effort for mutual development, i.e. development of one's own competence and being of help to the other in developing their competence.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>In Gaur's course, a relationship is fulfilled through right feelings, responsibility and mutual development.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> recognising and having the naturally acceptable feelings (trust, respect…) in oneself and expressing them to the other.</li>
<li><b>2 (correct):</b> living with responsibility towards the other, unconditionally.</li>
<li><b>3 (correct):</b> mutual development: improving one's own competence and helping the other develop theirs.</li></ul>
<div class="key">The course calls trust the foundational value of a relationship and respect the right evaluation of the other; when these feelings are fulfilled, the outcome is mutual happiness.</div>` },

{ id: "2026-50", year: 2026, no: 50, subject: "ethics", topic: "Universal human order", keySource: K,
q: `Consider the following characteristics regarding Harmony in the society-understanding universal human order :<ol><li>Behaviour with Human Being</li><li>Continuous Happiness and Prosperity</li><li>Work with Rest of Nature</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>In the universal human values course, a society in harmony (universal human order) is described in terms of:</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> right <b>behaviour</b> with human beings, leading to mutual happiness.</li>
<li><b>2 (yes):</b> the goal: <b>continuous happiness and prosperity</b> for all, across generations.</li>
<li><b>3 (yes):</b> right <b>work</b> with the rest of nature, leading to mutual prosperity.</li></ul>
<div class="key">The course lists the comprehensive human goal as: right understanding and happiness in every individual, prosperity in every family, fearlessness (trust) in society, and co-existence with nature.</div>` }
  );
})();
