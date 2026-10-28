// ESE 2024 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2024-26", year: 2024, no: 26, subject: "reasoning", topic: "Borda count",
q: `The members of a club are going to elect a president from four nominees. In each first-place vote receives 4 points, each second-place vote receives 3 points, each third-place vote receives 2 points, and each last place vote receives 1 point. If the 100 members of the club mark their ballots as shown in the table below, who will be elected president ?<table><tr><th></th><th colspan="6">Rankings</th></tr><tr><td>Avalon</td><td>2</td><td>2</td><td>2</td><td>2</td><td>3</td><td>2</td></tr><tr><td>Branson</td><td>1</td><td>4</td><td>4</td><td>4</td><td>2</td><td>1</td></tr><tr><td>Columbus</td><td>3</td><td>3</td><td>1</td><td>3</td><td>1</td><td>3</td></tr><tr><td>Dunkirk</td><td>4</td><td>1</td><td>3</td><td>1</td><td>4</td><td>4</td></tr><tr><td>Number of voters</td><td>30</td><td>24</td><td>18</td><td>12</td><td>10</td><td>6</td></tr></table>`,
opts: ["Avalon", "Branson", "Columbus", "Dunkirk"], ans: 0,
analysis: `<h3>Answer: (a) Avalon</h3><p><b>Borda count</b>: points = Σ (voters × points for the rank). Rank 1 = 4, 2 = 3, 3 = 2, 4 = 1.</p>
<table><tr><th>Candidate</th><th>Working</th><th>Points</th></tr><tr><td>Avalon</td><td>3 × (30 + 24 + 18 + 12 + 6) + 2 × 10</td><td><b>290</b></td></tr><tr><td>Columbus</td><td>2 × (30 + 24 + 12 + 6) + 4 × (18 + 10)</td><td>256</td></tr><tr><td>Branson</td><td>4 × 30 + 1 × 54 + 3 × 10 + 4 × 6</td><td>228</td></tr><tr><td>Dunkirk</td><td>1 × 30 + 4 × 24 + 2 × 18 + 4 × 12 + 1 × 10 + 1 × 6</td><td>226</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(b) Branson</b>: has the most first places (36) and would win by plurality, but 54 voters ranked him last.</li>
<li><b>(c) Columbus</b>: second with 256.</li>
<li><b>(d) Dunkirk</b>: last with 226, despite 36 first places.</li></ul>
<div class="tip">Check: total points = 100 voters × (4 + 3 + 2 + 1) = 1000 = 290 + 256 + 228 + 226 ✔. Avalon wins without a single first-place vote, a known weakness of the Borda count.</div>` },

{ id: "2024-27", year: 2024, no: 27, subject: "reasoning", topic: "Ordering (stack of books)",
q: `Study the given information carefully and answer the question :<br>There are seven books, one each of Psychology, Hindi, English, Sociology, Economics, Education and Accountancy lying on a table one above the other. Sociology is on the top of all books. Accountancy is immediately below Education which is immediate below Sociology. Economics is immediately above Psychology but not in the middle. Hindi is immediately below Psychology.<br>Which three books are between Accountancy and Hindi ?`,
opts: ["English, Economics and Psychology", "Economics, Psychology and Education", "Economics, Psychology and Hindi", "Cannot be determined"], ans: 0,
analysis: `<h3>Answer: (a) English, Economics and Psychology</h3><p>From the top: 1 Sociology, 2 Education, 3 Accountancy. The block Economics–Psychology–Hindi must fit in positions 4–7, with Economics not in the middle (position 4). So Economics 5, Psychology 6, Hindi 7, and English 4.</p>
<table><tr><th>Position</th><th>Book</th></tr><tr><td>1</td><td>Sociology</td></tr><tr><td>2</td><td>Education</td></tr><tr><td>3</td><td>Accountancy</td></tr><tr><td>4</td><td>English</td></tr><tr><td>5</td><td>Economics</td></tr><tr><td>6</td><td>Psychology</td></tr><tr><td>7</td><td>Hindi</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: Education is above Accountancy, not between it and Hindi.</li>
<li><b>(c)</b>: Hindi is an end point, not between.</li>
<li><b>(d)</b>: the order is fully determined.</li></ul>
<div class="tip">"Not in the middle" (position 4 of 7) is the clue that fixes the block; without it the block could also sit at 4–6.</div>` },

{ id: "2024-28", year: 2024, no: 28, subject: "reasoning", topic: "Ranking by age", doubt: true,
q: `Read the information given below and answer the question :<br>There is a group of five girls. Hasini is second in height but younger than Madhavi. Pooja is taller than Pranati but younger in age. Madhavi and Pranati are of the same age but Madhavi is tallest among them. Neelam is taller than Pooja and elder to Madhavi.<br>If they are arranged in the descending order of their ages who will be in fourth position ?`,
opts: ["Neelam", "Hasini", "Pranati", "Data inadequate"], ans: 0,
analysis: `<h3>Answer: (a) Neelam (official key)</h3><p>Age facts given: Neelam &gt; Madhavi = Pranati; Madhavi &gt; Hasini; Pranati &gt; Pooja.</p>
<p>So in descending order of age: <b>Neelam (1st)</b>, then Madhavi and Pranati (joint 2nd/3rd), then Hasini and Pooja in some order (4th/5th). The relative age of Hasini and Pooja is never given.</p>
<div class="note">In doubt (key followed). By the data, Neelam is the <b>eldest</b>, so she is first, not fourth, in descending order of age; by <b>height</b> (Madhavi, Hasini, Neelam, Pooja, Pranati) she is third either way. No reading of the data puts Neelam fourth. Our answer was (d) Data inadequate, since the 4th place is either Hasini or Pooja. We show UPSC's answer.</div>
<h3>The other options</h3><ul>
<li><b>(b) Hasini</b>: could be 4th, but so could Pooja; the data do not decide.</li>
<li><b>(c) Pranati</b>: is 2nd or 3rd (same age as Madhavi).</li>
<li><b>(d) Data inadequate</b>: our own answer, for the reason above.</li></ul>
<div class="tip">Separate the two orders (height and age) into two lists before answering; mixing them is the usual trap in these questions.</div>` },

{ id: "2024-29", year: 2024, no: 29, subject: "reasoning", topic: "Ranking",
q: `Read the following information and answer the question :<br>Seven students P, Q, R, S, T, U and V take a series of tests. No two students get similar marks. V always scores more than P. P always scores more than Q. Each time either R scores the highest and T gets the least, or alternatively S scores the highest and U or Q scores the least.<br>If V is ranked fifth, which one of the following is correct ?`,
opts: ["S scores the highest", "R is ranked second", "T is ranked third", "Q is ranked fourth"], ans: 0,
analysis: `<h3>Answer: (a) S scores the highest</h3><p>V &gt; P &gt; Q. If V is 5th, P must be 6th and Q 7th (the last). Q being last is possible only in the second case, where <b>S is highest</b> and U or Q is the least.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) R is ranked second</b>: R may be anywhere from 2nd to 4th; not certain.</li>
<li><b>(c) T is ranked third</b>: T may be 2nd, 3rd or 4th; not certain.</li>
<li><b>(d) Q is ranked fourth</b>: Q is 7th.</li></ul>
<div class="tip">Start with the chain fixed by the condition (V 5th → P 6th → Q 7th), then see which of the two cases it allows.</div><div class="key">Possible order in that case: S, then R, T and U in some order (2nd–4th), V 5th, P 6th, Q 7th. Only "S is highest" is certain.</div>` },

{ id: "2024-30", year: 2024, no: 30, subject: "reasoning", topic: "Remainders (LCM)",
q: `A man has a certain number of small boxes to pack into parcels. If he packs 3, 4, 5 or 6 in a parcel, he is left one, if he packs 7 in a parcel, none is left over. What is the number of boxes, he may have to pack ?`,
opts: ["106", "301", "309", "400"], ans: 1,
analysis: `<h3>Answer: (b) 301</h3><p>Remainder 1 when divided by 3, 4, 5 and 6 means N = 60k + 1 (LCM = 60). N must also be divisible by 7: 61, 121, 181, 241, <b>301</b> = 7 × 43 ✔.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 106</b>: 106 ÷ 4 leaves 2; and 106 is not divisible by 7.</li>
<li><b>(c) 309</b>: 309 ÷ 4 leaves 1 but 309 ÷ 5 leaves 4; not divisible by 7.</li>
<li><b>(d) 400</b>: divisible by 4 and 5 (remainder 0, not 1).</li></ul>
<div class="tip">Solve 60k + 1 ≡ 0 (mod 7): 60 ≡ 4, so 4k ≡ 6 → k ≡ 5 (mod 7). Smallest N = 301; next 721.</div><div class="key">Remainder questions: "same remainder r for several divisors" means N = (LCM × k) + r. Then apply the extra condition (here, divisible by 7) to find k.</div>` },

{ id: "2024-31", year: 2024, no: 31, subject: "ict", topic: "Transmission media",
q: `Which one of the following transmission media is/are used for the remote control communication for televisions, VCRs, and stereos etc. ?`,
opts: ["Fiber optics", "Fiber cables", "The electromagnetic spectrum", "Unguided infrared and millimeter waves"], ans: 3,
analysis: `<h3>Answer: (d) Unguided infrared and millimeter waves</h3><p>Remote controls use <b>infrared</b>: short-range, line-of-sight, unguided (wireless) transmission. Infrared and millimetre waves do not pass through walls, so they cause no interference with the neighbour's devices and need no licence.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Fiber optics</b> and <b>(b) Fiber cables</b>: are guided media (light in glass); a remote has no cable.</li>
<li><b>(c) The electromagnetic spectrum</b>: is too general; infrared is one part of it.</li></ul>
<div class="key">Unguided media by frequency: radio waves (omnidirectional, broadcast, Wi-Fi), microwaves (line of sight, satellite, point-to-point links), infrared (short range, remotes, IrDA). Guided media: twisted pair, coaxial cable, optical fibre.</div>` },

{ id: "2024-32", year: 2024, no: 32, subject: "ict", topic: "UDP",
q: `Which one of the following protocols is used to wrap IP packets with the additional feature of multiplexing and de-multiplexing multiple processes using a single IP address ?`,
opts: ["User Datagram Protocol", "Transport Control Protocol", "Internet Protocol", "Point-to-Point Protocol"], ans: 0,
analysis: `<h3>Answer: (a) User Datagram Protocol</h3><p><b>UDP</b> adds very little to IP: mainly <b>port numbers</b> (source and destination), which let many processes on one host share a single IP address (multiplexing and demultiplexing), plus an optional checksum. Tanenbaum describes UDP as "basically just IP with a short header added".</p>
<h3>Why not the others</h3><ul>
<li><b>(b) TCP</b> (Transmission Control Protocol): also uses ports, but adds much more: connections, reliability, ordering, flow and congestion control. The question asks for the protocol whose additional feature is just multiplexing.</li>
<li><b>(c) Internet Protocol</b>: delivers packets host to host; it has no ports, so it cannot tell processes apart.</li>
<li><b>(d) PPP</b>: a data-link protocol carrying IP over serial links.</li></ul>
<div class="key">UDP header: 8 bytes (source port, destination port, length, checksum). Used by DNS, DHCP, VoIP, streaming, online games and QUIC (HTTP/3).</div>` },

{ id: "2024-33", year: 2024, no: 33, subject: "ict", topic: "Browser plug-ins",
q: `Which one of the following code modules is/are used where the browser fetches from a special directory on the disk and installs as an extension to itself ?`,
opts: ["Uniform Resource Locators", "Browser", "Plug-in", "Client server"], ans: 2,
analysis: `<h3>Answer: (c) Plug-in</h3><p>A <b>plug-in</b> is a code module that the browser fetches from a special directory on the disk and installs as an extension of itself, to handle content it cannot handle natively (Tanenbaum's description). Examples were Adobe Flash and PDF viewers.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) URLs</b>: are addresses of web resources, not code modules.</li>
<li><b>(b) Browser</b>: is the program that loads the plug-in.</li>
<li><b>(d) Client server</b>: is an architecture, not a module.</li></ul>
<div class="key">The alternative to a plug-in is a <b>helper application</b>, a separate program the browser launches (e.g. a media player). Modern browsers have dropped NPAPI plug-ins in favour of built-in HTML5 support and extensions.</div>` },

{ id: "2024-34", year: 2024, no: 34, subject: "ict", topic: "Style sheets",
q: `Which one of the following features is/are used when a website is complex, consisting of many pages produced by multiple authors working for the same company, often desirable to have a way to prevent a different page from having a different appearance ?`,
opts: ["Checkbox", "Style sheets", "Table", "Forms"], ans: 1,
analysis: `<h3>Answer: (b) Style sheets</h3><p><b>Cascading Style Sheets</b> (CSS) separate presentation from content. One shared style sheet defines fonts, colours and layout for every page, so pages written by different authors look the same, and the look can be changed site-wide in one place.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Checkbox</b>: an input control in a form.</li>
<li><b>(c) Table</b>: arranges data in rows and columns; it does not enforce a common look.</li>
<li><b>(d) Forms</b>: collect user input.</li></ul>
<div class="key">The three web layers: HTML (structure/content), CSS (presentation), JavaScript (behaviour).</div>` },

{ id: "2024-35", year: 2024, no: 35, subject: "ict", topic: "XML",
q: `Which one of the languages is used to develop the web pages in the structured and for automated processing ?`,
opts: ["eXtensible Markup Language", "Hypertext Markup Language", "eXtended Hyper Text Markup Language", "Markup Language"], ans: 0,
analysis: `<h3>Answer: (a) eXtensible Markup Language</h3><p><b>XML</b> describes content in a <b>structured</b> way, with user-defined tags that say what the data mean (e.g. &lt;price&gt;), so programs can process it automatically. HTML only says how to display content.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) HTML</b>: describes presentation and layout, not the meaning of the data.</li>
<li><b>(c)</b>: the real name is XHTML, "eXtensible HyperText Markup Language": HTML rewritten as valid XML. It is still about presentation.</li>
<li><b>(d) Markup Language</b>: is a general category, not a specific language.</li></ul>
<div class="key">XML is used for configuration files, data exchange (SOAP, RSS), office documents (.docx is zipped XML) and in India for e-filing schemas. JSON has replaced it in many web APIs.</div>` },

{ id: "2024-36", year: 2024, no: 36, subject: "ict", topic: "CGI",
q: `Which one of the following interfaces is used to allow web servers to talk to back-end programs and scripts that can accept input and generate HTML pages in response ?`,
opts: ["Application Programming Interface", "User Interface", "Application Interface Marker", "Common Gateway Interface"], ans: 3,
analysis: `<h3>Answer: (d) Common Gateway Interface</h3><p><b>CGI</b> is a standard interface that lets a web server pass a request (e.g. form input) to a back-end program or script (in Perl, Python, C) and return the HTML the program generates. It was the first way to build dynamic web pages.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) API</b>: a general term for any interface between software components, not the specific web-server mechanism.</li>
<li><b>(b) User Interface</b>: is what the user sees and interacts with.</li>
<li><b>(c) Application Interface Marker</b>: not a real term.</li></ul>
<div class="key">CGI starts a new process for every request, which is slow. It was succeeded by FastCGI, server modules (PHP), Java servlets, and today's application servers and frameworks.</div>` },

{ id: "2024-37", year: 2024, no: 37, subject: "ict", topic: "HTTP status codes",
q: `Which one of the following status code responses gives the internal server error ?`,
opts: ["200", "500", "100", "300"], ans: 1,
analysis: `<h3>Answer: (b) 500</h3><p><b>500 Internal Server Error</b>: the server hit an unexpected condition and could not complete the request.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 200</b>: OK, success.</li>
<li><b>(c) 100</b>: Continue, informational.</li>
<li><b>(d) 300</b>: Multiple Choices, a redirection code.</li></ul>
<table><tr><th>Class</th><th>Meaning</th><th>Examples</th></tr><tr><td>1xx</td><td>Informational</td><td>100 Continue</td></tr><tr><td>2xx</td><td>Success</td><td>200 OK, 201 Created</td></tr><tr><td>3xx</td><td>Redirection</td><td>301 Moved Permanently, 304 Not Modified</td></tr><tr><td>4xx</td><td>Client error</td><td>400 Bad Request, 403 Forbidden, 404 Not Found</td></tr><tr><td>5xx</td><td>Server error</td><td>500 Internal Server Error, 503 Service Unavailable</td></tr></table><div class="key">502 Bad Gateway and 504 Gateway Timeout come from proxies or gateways; 401 Unauthorized means authentication is needed; 429 Too Many Requests is used for rate limiting.</div>` },

{ id: "2024-38", year: 2024, no: 38, subject: "ict", topic: "IT usage policy",
q: `Which of the following issues were addressed while establishing an IT Policy ?<ol><li>Respect of the intellectual rights of others, including trade secrets, copyrights, patents, and trademarks</li><li>Inappropriate use of IT resources, such as Web surfing, blogging, personal emailing, and other use of computers for purposes other than business</li><li>The need to protect the security of IT resources through adherence to good security practices, such as not sharing user IDs and passwords, using hard-to-guess passwords, and frequently changing passwords.</li><li>The use of the computer to intimidate, harass, or insult others through abusive language in emails and by other means.</li></ol>Select the correct answer using the code given below :`,
opts: ["1 and 3 only", "2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><p>Reynolds (<i>Ethics in Information Technology</i>) lists these as the issues an organisation's IT usage policy should address.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> respect for intellectual property: no pirated software, no copying of copyrighted material.</li>
<li><b>2 (yes):</b> inappropriate use of IT resources for non-business purposes.</li>
<li><b>3 (yes):</b> protecting security: not sharing passwords, strong passwords, regular changes.</li>
<li><b>4 (yes):</b> no use of computers to intimidate, harass or insult others.</li></ul>
<div class="key">A good policy also covers privacy of employee and customer data, acceptable email and social-media use, and consequences of violations. In India, the IT Act 2000 and the Digital Personal Data Protection Act 2023 set the legal background.</div>` },

{ id: "2024-39", year: 2024, no: 39, subject: "ict", topic: "Malware: worms",
q: `Which one of the following is a harmful program that resides in the active memory of the computer and duplicates itself without human intervention, often sending copies of themselves to other computers by email ?`,
opts: ["Worms", "Viruses", "Bugs", "Spam"], ans: 0,
analysis: `<h3>Answer: (a) Worms</h3><p>A <b>worm</b> is self-contained malware that lives in active memory and <b>copies itself without human intervention</b>, spreading over networks or by email. Examples: Morris worm (1988), ILOVEYOU (2000), WannaCry (2017).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Viruses</b>: attach to a host file and need a user action (opening the file) to spread.</li>
<li><b>(c) Bugs</b>: are programming errors, not deliberately harmful programs.</li>
<li><b>(d) Spam</b>: is unsolicited bulk email; it may carry malware but does not replicate.</li></ul>
<div class="key">Other malware: Trojan horse (looks useful, hides harmful code), logic bomb (triggers on a condition or date), ransomware (encrypts data for ransom), spyware, botnet (computers controlled remotely: see Q40).</div>` },

{ id: "2024-40", year: 2024, no: 40, subject: "ict", topic: "DDoS attack",
q: `Which one of the following attacks is one in which a malicious hacker takes over computers via the Internet and causes them to flood a target site with demands for data and other small tasks ?`,
opts: ["Rootkits", "Distributed Denial-of-Service", "Phishing", "Smishing"], ans: 1,
analysis: `<h3>Answer: (b) Distributed Denial-of-Service</h3><p>In a <b>DDoS</b> attack, the attacker takes over many computers (a <b>botnet</b> of "zombies") and makes them all flood a target site with requests, so legitimate users cannot be served. "Distributed" because the traffic comes from many sources, which makes it hard to block.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Rootkits</b>: give an attacker hidden administrator access to a computer (see Q41); they may be used to build a botnet but are not the attack itself.</li>
<li><b>(c) Phishing</b>: fraudulent emails that trick users into giving passwords or financial data.</li>
<li><b>(d) Smishing</b>: phishing by SMS text message.</li></ul>
<div class="key">Defences: traffic filtering and rate limiting, content delivery networks and scrubbing services, and keeping devices patched so they cannot be recruited. In India, CERT-In (under the IT Act) handles such incidents.</div>` },

{ id: "2024-41", year: 2024, no: 41, subject: "ict", topic: "Rootkit",
q: `Which one of the following is a set of programs that enables its user to gain administrator-level access to a computer without the end user's consent or knowledge ?`,
opts: ["Distributed Denial-of-Service", "Phishing", "Smishing", "Rootkit"], ans: 3,
analysis: `<h3>Answer: (d) Rootkit</h3><p>A <b>rootkit</b> is a set of programs that gives its user <b>administrator ("root") access</b> to a computer without the owner's consent or knowledge, and hides itself and the attacker's activity from normal detection.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) DDoS</b>: floods a target with traffic from many machines (see Q40).</li>
<li><b>(b) Phishing</b>: deceptive email that tricks users into revealing information.</li>
<li><b>(c) Smishing</b>: phishing by SMS; vishing is the voice-call version.</li></ul>
<div class="key">The name comes from "root", the Unix administrator account. A famous case: Sony BMG's 2005 copy-protection CDs secretly installed a rootkit. Removal often needs reinstalling the operating system.</div>` },

{ id: "2024-42", year: 2024, no: 42, subject: "ict", topic: "Intrusion detection system",
q: `Which one of the following is software and/or hardware that monitor system and network resources and activities, and notify network security personnel when it detects network traffic that attempts to circumvent the security measures of a networked computer environment ?`,
opts: ["An intrusion detection system", "A protection of evidence and activity logs system", "A critical internet security threats system", "An illusion detection system"], ans: 0,
analysis: `<h3>Answer: (a) An intrusion detection system</h3><p>An <b>IDS</b> monitors system and network activity and <b>alerts</b> security staff when it detects traffic or behaviour that tries to get around security measures. Two approaches: knowledge (signature) based, which matches known attack patterns, and behaviour (anomaly) based, which flags departures from normal activity.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: keeping logs and evidence is part of incident response, not a monitoring-and-alert system.</li>
<li><b>(c)</b>: not a recognised term.</li>
<li><b>(d)</b>: not a real term; a play on "intrusion".</li></ul>
<div class="key">An IDS only alerts; an <b>intrusion prevention system</b> (IPS) also blocks the traffic. Both complement firewalls, which filter traffic by rules.</div>` },

{ id: "2024-43", year: 2024, no: 43, subject: "ict", topic: "Doxing",
q: `Which one of the following involves for the examination of Internet records to track down the identity of someone who posted in a discussion forum on one Website might search for clues to the poster's identity on Facebook, Twitter, and other online sources ?`,
opts: ["Pornography", "Internet filter", "Doxing", "Internet censorship"], ans: 2,
analysis: `<h3>Answer: (c) Doxing</h3><p><b>Doxing</b> (from "docs") is collecting and publishing private information about a person, such as identity, address or employer, by piecing together clues from internet records and social media. It is often used to unmask anonymous posters and can expose them to harassment.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Pornography</b>: unrelated to identifying people.</li>
<li><b>(b) Internet filter</b>: software that blocks access to certain content.</li>
<li><b>(d) Internet censorship</b>: control or suppression of what can be accessed or published online.</li></ul>
<div class="key">Anonymous expression online is protected in many democracies, but courts can order a platform to reveal a user's identity, e.g. in defamation cases. In India, Section 69A of the IT Act allows blocking orders, and platforms must comply with lawful information requests.</div>` },

{ id: "2024-44", year: 2024, no: 44, subject: "ict", topic: "Internet child-protection laws", dropped: true,
q: `Which one of the following Acts mandates schools and libraries in India to use some form of technological protection to block computer access to obscene material, pornography, and anything else considered harmful to minors ?`,
opts: ["Telecommunications Act", "Child Online Protection Act", "Children's Internet Protection Act", "Communications Decency Act"], ans: null,
analysis: `<h3>Dropped by UPSC (not scored)</h3><p>UPSC dropped this item in its final key. The Act described is the <b>Children's Internet Protection Act (CIPA)</b>, a <b>United States</b> law (2000). It requires US schools and libraries that receive federal E-rate funding to use internet filters to block obscene or harmful content. The question says "in India", which makes every option wrong.</p>
<ul><li><b>Telecommunications Act</b> (US, 1996): overhauled US telecom law; its Title V was the Communications Decency Act.</li><li><b>Child Online Protection Act</b> (COPA, US, 1998): restricted commercial websites; struck down by the courts and never enforced.</li><li><b>Communications Decency Act</b> (US, 1996): its anti-indecency parts were struck down in <i>Reno v. ACLU</i> (1997); Section 230 (platform immunity) survives.</li></ul>
<p>This set of US laws comes from Reynolds' <i>Ethics in Information Technology</i>. In India, child sexual abuse material is covered by Section 67B of the IT Act 2000 and the POCSO Act 2012.</p>` },

{ id: "2024-45", year: 2024, no: 45, subject: "ict", topic: "CAN-SPAM Act",
q: `Which of the following Acts is required for the commercial emailers in sending out messages that advertise a commercial product or service ?`,
opts: ["Controlling the Assault of Non-Solicited Pornography and Marketing Act", "Communications Assistance for Law Enforcement Act", "Communications Act of 1934", "Communications Decency Act"], ans: 0,
analysis: `<h3>Answer: (a) Controlling the Assault of Non-Solicited Pornography and Marketing Act</h3><p>The US <b>CAN-SPAM Act</b> (2003) sets rules for commercial email: no false headers or misleading subject lines, the message must be identified as an advertisement, it must include a valid physical address, and it must offer an opt-out that is honoured within 10 business days.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) CALEA</b> (1994): requires telecom carriers to design networks so law enforcement can carry out lawful wiretaps.</li>
<li><b>(c) Communications Act of 1934</b>: created the Federal Communications Commission (FCC).</li>
<li><b>(d) Communications Decency Act</b> (1996): about indecent content online (see Q44).</li></ul>
<div class="key">India has no CAN-SPAM equivalent for email; unsolicited commercial calls and SMS are governed by TRAI's Telecom Commercial Communications Customer Preference Regulations (the "Do Not Disturb" registry).</div>` },

{ id: "2024-46", year: 2024, no: 46, subject: "ethics", topic: "Professional identity",
q: `What are the three stages in the Development of Professional Identity ?`,
opts: ["Possessing Knowledge, Professional Services, Self-Defining or Integrated Professional", "Independent Operator, Professional Services, Self-Defining or Integrated Professional", "Possessing Knowledge, Team-Oriented Idealist, Self-Defining or Integrated Professional", "Independent Operator, Team-Oriented Idealist, Self-Defining or Integrated Professional"], ans: 3,
analysis: `<h3>Answer: (d) Independent Operator, Team-Oriented Idealist, Self-Defining or Integrated Professional</h3><p>Based on Muriel Bebeau's work, cited in Harris, Pritchard &amp; Rabins (<i>Engineering Ethics</i>), professional identity develops in three stages:</p>
<ol><li><b>Independent Operator</b>: follows rules to stay out of trouble; self-interest dominates.</li><li><b>Team-Oriented Idealist</b>: identifies with the profession's ideals and role models; wants to meet others' expectations.</li><li><b>Self-Defining or Integrated Professional</b>: has internalised the profession's values; acts on them independently and holds others to them.</li></ol>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: "Possessing Knowledge" and "Professional Services" are features of a profession, not stages.</li>
<li><b>(b)</b>: "Professional Services" is not a stage.</li>
<li><b>(c)</b>: "Possessing Knowledge" is not a stage.</li></ul>
<div class="key">The stages parallel Kohlberg's pre-conventional, conventional and post-conventional levels of moral development.</div>` },

{ id: "2024-47", year: 2024, no: 47, subject: "ethics", topic: "NSPE Code of Ethics",
q: `The first of the Fundamental Canons of the code of the National Society of Professional Engineers says that engineers shall hold`,
opts: ["paramount the safety, health, and welfare of the public", "devotion to clients as the first responsibility", "devotion to his employer", "devotion to the public"], ans: 0,
analysis: `<h3>Answer: (a) paramount the safety, health, and welfare of the public</h3><p>NSPE Fundamental Canon 1: "Hold paramount the safety, health, and welfare of the public." It overrides duties to employers and clients when they conflict.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(c)</b>: duty to employers and clients is Canon 4 ("act for each employer or client as faithful agents or trustees"), and is subordinate to Canon 1.</li>
<li><b>(d)</b>: "devotion to the public" is vague; the canon specifically names safety, health and welfare.</li></ul>
<div class="key">The six NSPE canons: 1 public safety paramount; 2 work only in areas of competence; 3 issue public statements only objectively and truthfully; 4 be faithful agents of employers and clients; 5 avoid deceptive acts; 6 conduct themselves honourably to enhance the profession.</div>` },

{ id: "2024-48", year: 2024, no: 48, subject: "ethics", topic: "Engineers Without Borders",
q: `A very compassionate man, Engineer Bernard Amadei in 2001 was profoundly affected by the poor living conditions in underdeveloped countries, such as the absence of clean water. He founded EWB-USA in 2001 for improving the living condition of the poor. Engineering students in EWB are responsible for many projects throughout the world that have enhanced human well-being. What is the full form of the term EWB ?`,
opts: ["Economically Water Boys", "Engineers Well to do Boys", "Engineers Without Borders", "Engineers Water Boys"], ans: 2,
analysis: `<h3>Answer: (c) Engineers Without Borders</h3><p><b>Engineers Without Borders-USA</b> was founded in 2001 by <b>Bernard Amadei</b>, a civil engineering professor at the University of Colorado Boulder, after a visit to Belize where he saw children carrying water instead of going to school. Students and professionals carry out community projects in water supply, sanitation, energy and shelter.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(d)</b>: invented names; the organisation is modelled on Médecins Sans Frontières (Doctors Without Borders).</li></ul>
<div class="key">This case appears in Harris, Pritchard &amp; Rabins as an example of engineers' <b>aspirational ethics</b> (going beyond minimum duties) and the "good works" of engineering. India has a chapter, EWB-India.</div>` },

{ id: "2024-49", year: 2024, no: 49, subject: "ethics", topic: "Ross's prima facie duties",
q: `Consider the following statements :<br>The philosopher W. D. Ross, who constructed a list of basic duties or obligations, which he called prima facie duties. His lists of prima facie duties are given below :<ol><li>Duties resting on previous acts</li><li>Duties of gratitude, Duties of justice</li><li>Duties of beneficence, Duties of self-improvement</li><li>Duties to injure others, unexceptional to be widely practiced</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 4", "1, 3 and 4", "1, 2 and 3", "2, 3 and 4"], ans: 2,
analysis: `<h3>Answer: (c) 1, 2 and 3</h3><p>W. D. Ross (<i>The Right and the Good</i>, 1930) listed duties that are binding unless outweighed by a stronger duty.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> duties resting on previous acts: <b>fidelity</b> (keep promises) and <b>reparation</b> (make up for wrongs done).</li>
<li><b>2 (correct):</b> <b>gratitude</b> (return kindness) and <b>justice</b> (fair distribution).</li>
<li><b>3 (correct):</b> <b>beneficence</b> (do good to others) and <b>self-improvement</b>.</li>
<li><b>4 (wrong):</b> Ross's duty is <b>non-maleficence</b>: <b>not</b> to injure others. A "duty to injure others" is the opposite.</li></ul>
<div class="key">"Prima facie" means "at first sight": each duty holds unless it conflicts with a weightier one, and then judgment decides. This contrasts with Kant's absolute duties.</div>` },

{ id: "2024-50", year: 2024, no: 50, subject: "ethics", topic: "Types of moral judgments",
q: `What are the types of Moral Judgments ?`,
opts: ["Permissible, Intent, Obligatory, Standpoint", "Professional, Impermissible, Obligatory, Supererogatory", "Permissible, Impermissible, Obligatory, Supererogatory", "Professional, Impermissible, Obligatory, Standpoint"], ans: 2,
analysis: `<h3>Answer: (c) Permissible, Impermissible, Obligatory, Supererogatory</h3><p>Moral judgments about actions (Harris, Pritchard &amp; Rabins) fall into four types:</p>
<ul><li><b>Permissible</b>: allowed (not wrong).</li><li><b>Impermissible</b>: wrong, not allowed.</li><li><b>Obligatory</b>: required; failing to do it is wrong.</li><li><b>Supererogatory</b>: praiseworthy, going beyond duty (heroism, great sacrifice), but not required.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: "Intent" and "Standpoint" are not types of moral judgment.</li>
<li><b>(b)</b>: "Professional" is not a type of moral judgment.</li>
<li><b>(d)</b>: "Professional" and "Standpoint" are not types.</li></ul>
<div class="key">Engineering codes mostly state obligatory and impermissible actions (minimum standards); supererogatory acts belong to aspirational ethics (see Q48).</div>` }
);
