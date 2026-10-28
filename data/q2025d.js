// ESE 2025 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q76–100
// Answers follow MADE EASY's unofficial key (see q2025a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2025-76", year: 2025, no: 76, subject: "materials", topic: "Resilience", keySource: K,
q: `The capacity of a material to absorb energy when it is deformed elastically and then, upon unloading, to have this energy recovered is called`,
opts: ["Toughness", "Resilience", "Modulus of elasticity", "Yielding"], ans: 1,
analysis: `<h3>Answer: (b) Resilience</h3><p><b>Resilience</b> is the energy a material absorbs while deforming elastically and gives back on unloading. The <b>modulus of resilience</b> is the area under the elastic part of the stress–strain curve: U<sub>r</sub> = σ<sub>y</sub>²/2E. Spring materials need high resilience (high yield strength, low modulus).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Toughness</b>: total energy absorbed up to <b>fracture</b> (elastic plus plastic), the whole area under the curve; most of it is not recovered.</li>
<li><b>(c) Modulus of elasticity</b>: the slope of the elastic region (stiffness), not an energy.</li>
<li><b>(d) Yielding</b>: the onset of plastic (permanent) deformation.</li></ul>
<div class="tip">Example: steel with σ<sub>y</sub> = 250 MPa and E = 200 GPa: U<sub>r</sub> = 250²/(2 × 200,000) = 0.156 MJ/m³.</div>` },

{ id: "2025-77", year: 2025, no: 77, subject: "materials", topic: "Percent reduction in area", keySource: K,
q: `A specimen of steel having an original diameter of 12·8 mm is tensile tested to fracture and found to have engineering fracture strength σ<sub>f</sub> of 460 MPa. If its cross sectional diameter at fracture is 10·7 mm, the ductility in terms of percent reduction in area will be`,
opts: ["25%", "30%", "35%", "40%"], ans: 1,
analysis: `<h3>Answer: (b) 30%</h3><p>%RA = (A<sub>0</sub> − A<sub>f</sub>)/A<sub>0</sub> × 100 = (d<sub>0</sub>² − d<sub>f</sub>²)/d<sub>0</sub>² × 100 = (163.84 − 114.49)/163.84 × 100 = <b>30.1%</b>.</p>
<p>The fracture strength (460 MPa) is not needed for ductility; it would be used to find the true stress at fracture (Callister's worked example).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 25%</b>, <b>(c) 35%</b> and <b>(d) 40%</b>: do not match the diameter data. Using diameters instead of areas gives (12.8 − 10.7)/12.8 = 16.4%, which is not offered.</li></ul>
<div class="key">True fracture stress = load at fracture ÷ actual area = 460 × (12.8/10.7)² ≈ 658 MPa, higher than the engineering value because the neck has shrunk.</div>` },

{ id: "2025-78", year: 2025, no: 78, subject: "ict", topic: "Extranet", keySource: K,
q: `External companies are enabled to view some of a particular company's information and such sharing of information is known as`,
opts: ["Ethernet", "Internet", "Extranet", "Fibrenet"], ans: 2,
analysis: `<h3>Answer: (c) Extranet</h3><p>An <b>extranet</b> extends a company's private intranet to selected outsiders (suppliers, dealers, partners) with controlled, authenticated access. Example: a carmaker letting its parts suppliers see production schedules and inventory.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Ethernet</b>: a LAN technology (IEEE 802.3), not a way of sharing information.</li>
<li><b>(b) Internet</b>: the global public network, open to all.</li>
<li><b>(d) Fibrenet</b>: not a standard term (it sometimes means fibre broadband).</li></ul>
<div class="key">Intranet: internal, employees only. Extranet: intranet plus selected outsiders. Internet: public. Extranets are usually secured with VPNs, firewalls and access control.</div>` },

{ id: "2025-79", year: 2025, no: 79, subject: "ict", topic: "Firewall", keySource: K,
q: `A system or group of systems that enforces an access control policy between a trusted network and an untrusted network is called`,
opts: ["Perimeter access control", "Intrusion monitoring", "Interfacing the hardware components", "Managing the network privately"], ans: 0,
analysis: `<h3>Answer: (a) Perimeter access control</h3><p>The definition given is that of a <b>firewall</b>: a system or group of systems that enforces an access control policy between a trusted network (the organisation's) and an untrusted one (the Internet). Among the options, that is <b>perimeter access control</b>: control at the network boundary.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Intrusion monitoring</b>: an intrusion detection system watches traffic and raises alerts but does not enforce a policy (see 2024 Q42).</li>
<li><b>(c) Interfacing the hardware components</b>: unrelated.</li>
<li><b>(d) Managing the network privately</b>: vague; does not describe enforcing access rules.</li></ul>
<div class="key">Firewall types: packet filter, stateful inspection, application-level proxy, next-generation firewall. A DMZ (demilitarised zone) holds public servers between two firewalls.</div>` },

{ id: "2025-80", year: 2025, no: 80, subject: "ict", topic: "e-Governance evolution", keySource: K,
q: `Which one of the following is the correct sequence of e-Governance evolution model ?`,
opts: ["Information, Transaction, Transformation and Interaction", "Information, Transaction, Interaction and Transformation", "Information, Transformation, Transaction and Interaction", "Information, Interaction, Transaction and Transformation"], ans: 3,
analysis: `<h3>Answer: (d) Information, Interaction, Transaction and Transformation</h3><p>The <b>Gartner four-phase model</b> of e-governance:</p>
<ol><li><b>Information</b>: one-way publishing of information on websites.</li><li><b>Interaction</b>: two-way communication: email, downloadable forms, queries.</li><li><b>Transaction</b>: complete services online: paying taxes, renewing licences.</li><li><b>Transformation</b>: integrated, citizen-centric services across departments (one-stop portals).</li></ol>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(c)</b>: put transaction or transformation before interaction. Full online transactions are impossible before two-way interaction exists, and transformation is the final stage.</li></ul>
<div class="key">Indian examples: the National e-Governance Plan (2006), Digital India (2015), UMANG (a single app for many services) and DigiLocker.</div>` },

{ id: "2025-81", year: 2025, no: 81, subject: "ict", topic: "DoS tools: Targa", keySource: K,
q: `Which one of the following attack methods is originally developed as a rapid method to conduct many different IP-based DoS attacks ?`,
opts: ["Nestea", "Packet storms", "Teardrop", "Targa"], ans: 3,
analysis: `<h3>Answer: (d) Targa</h3><p><b>Targa</b> is a DoS tool that combines many known IP-based denial-of-service exploits (land, teardrop, nestea, syndrop, winnuke and others) in one program, so an attacker can launch many different attacks quickly.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Nestea</b> and <b>(c) Teardrop</b>: single attacks that send overlapping or malformed IP fragments, crashing systems that reassemble them badly; both are included in Targa.</li>
<li><b>(b) Packet storms</b>: a general term for floods of network traffic (e.g. broadcast storms), not a specific tool.</li></ul>
<div class="key">Old operating systems were vulnerable to these fragment attacks; modern TCP/IP stacks validate fragments. Today's DoS threats are mainly large distributed floods from botnets (see 2024 Q40).</div>` },

{ id: "2025-82", year: 2025, no: 82, subject: "ict", topic: "Gateway programs (CGI)", keySource: K,
q: `A special server-side programs that acts between the Hyper Text Transfer Protocol HTTP server and other local resources such as databases is`,
opts: ["HTML programs", "JavaScript programs", "Gateway programs", "High Level programs"], ans: 2,
analysis: `<h3>Answer: (c) Gateway programs</h3><p><b>Gateway programs</b> (CGI scripts, after the Common Gateway Interface) run on the server and stand between the HTTP server and local resources such as databases: the server passes the request to the program, which queries the database and returns HTML (see 2024 Q36).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) HTML programs</b>: HTML is a markup language describing page content; it does not run as a server-side intermediary.</li>
<li><b>(b) JavaScript programs</b>: classically run in the browser (client side); server-side JavaScript (Node.js) came later and is not what the term describes.</li>
<li><b>(d) High Level programs</b>: a general category of programming languages, not a server role.</li></ul>
<div class="key">Modern equivalents: application servers and frameworks (PHP, Django, Spring, Node.js) and REST APIs between the web server and the database.</div>` },

{ id: "2025-83", year: 2025, no: 83, subject: "ict", topic: "UNIX log files", keySource: K,
q: `Which of the following log files records failed logins in UNIX Operating System ?`,
opts: ["Aculog", "Xferlog", "Loginlog", "Syslog"], ans: 2,
analysis: `<h3>Answer: (c) Loginlog</h3><p>On UNIX systems (e.g. Solaris), <b>/var/adm/loginlog</b> records failed login attempts (by default after five consecutive failures). It is an important file in security auditing and forensics.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Aculog</b>: records dial-out modem (automatic call unit) activity.</li>
<li><b>(b) Xferlog</b>: records FTP file transfers.</li>
<li><b>(d) Syslog</b>: the general system logging facility for many daemons and kernel messages; it can record some authentication events, but it is not the dedicated failed-login file.</li></ul>
<div class="key">Other UNIX logs: utmp (current logins), wtmp (login history, read with <i>last</i>), btmp on Linux (failed logins, read with <i>lastb</i>), and sulog (su attempts).</div>` },

{ id: "2025-84", year: 2025, no: 84, subject: "ict", topic: "AVL trees", keySource: K,
q: `What is the time to perform search, insert, and delete operations in the average case as well as the worst case by using AVL tree ?`,
opts: ["O(n)", "O(log n)", "O(n<sup>2</sup>)", "O(n log n)"], ans: 1,
analysis: `<h3>Answer: (b) O(log n)</h3><p>An <b>AVL tree</b> is a self-balancing binary search tree: at every node, the heights of the left and right subtrees differ by at most 1. Its height stays about 1.44 log₂ n, so search, insert and delete take <b>O(log n)</b> in both the average and the worst case (rotations to restore balance cost O(1) each).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) O(n)</b>: the worst case of an <b>unbalanced</b> BST, which can degenerate into a linked list.</li>
<li><b>(c) O(n²)</b>: typical of simple sorting algorithms (bubble, insertion), not tree operations.</li>
<li><b>(d) O(n log n)</b>: the cost of building the tree from n elements, or of efficient sorting, not of one operation.</li></ul>
<div class="key">Other balanced trees: red–black trees (used in many standard libraries) and B-trees (used in databases and file systems), all with O(log n) operations.</div>` },

{ id: "2025-85", year: 2025, no: 85, subject: "ict", topic: "Digital forensic models", keySource: K,
q: `Which one of the following digital investigation models is based on the 'Zachman Framework' and was created to assist with the design, development and management of enterprise IT architecture ?`,
opts: ["Physical model", "Staircase model", "FORZA model", "Sub-phase model"], ans: 2,
analysis: `<h3>Answer: (c) FORZA model</h3><p><b>FORZA</b> ("Forensic Zachman", Ieong, 2006) is a digital forensic investigation framework built on the <b>Zachman Framework</b> for enterprise architecture. It asks the six Zachman questions (what, why, how, who, where, when) from the viewpoint of each role in an investigation, such as case leader, legal adviser and investigator.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Physical model</b>: not a recognised forensic investigation model.</li>
<li><b>(b) Staircase model</b>: an investigation model describing a step-by-step process, not based on Zachman.</li>
<li><b>(d) Sub-phase model</b>: another phase-based investigation model (Beebe and Clark's hierarchical, objectives-based framework), not based on Zachman.</li></ul>
<div class="key">The Zachman Framework (John Zachman, 1987) is a 6 × 6 matrix classifying enterprise architecture by perspective (planner, owner, designer, builder, subcontractor, user) and by question.</div>` },

{ id: "2025-86", year: 2025, no: 86, subject: "ict", topic: "Forensic analysis outcomes", keySource: K,
q: `An equivocal forensic analysis is one in which the conclusions regarding the physical and digital evidence are`,
opts: ["End of interpretation", "Still open to interpretation", "Reconstruction of interpretation", "Reformation of interpretation"], ans: 1,
analysis: `<h3>Answer: (b) Still open to interpretation</h3><p>"Equivocal" means ambiguous. An <b>equivocal forensic analysis</b> (Casey, <i>Digital Evidence and Computer Crime</i>) is one in which the evidence can support more than one conclusion, so the findings are <b>still open to interpretation</b>; the analyst must test competing hypotheses before reaching a conclusion.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) End of interpretation</b>: describes an unequivocal (conclusive) analysis.</li>
<li><b>(c) Reconstruction of interpretation</b>: confuses the term with <b>crime reconstruction</b>, which builds a sequence of events from evidence.</li>
<li><b>(d) Reformation of interpretation</b>: not a forensic term.</li></ul>
<div class="key">Good practice: preserve evidence (write-blockers, hashes), keep a chain of custody, and report findings with stated levels of certainty, especially when they are equivocal.</div>` },

{ id: "2025-87", year: 2025, no: 87, subject: "ict", topic: "Cross-site scripting", keySource: K,
q: `Cross-site scripting is a general set of techniques whereby an attacker is able to`,
opts: ["Send the mass e-mails to the recipients", "Host a website on an infected or malicious web server", "Execute a malicious code on another system through an intermediary web application", "Control on the web application through SQL control characters"], ans: 2,
analysis: `<h3>Answer: (c) Execute a malicious code on another system through an intermediary web application</h3><p>In <b>cross-site scripting (XSS)</b>, an attacker injects a script into a trusted website (for example through a comment field or a crafted link). When another user's browser loads the page, it runs the script, which can steal session cookies or act on the user's behalf. The vulnerable website is the intermediary.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: mass email is spam (or phishing).</li>
<li><b>(b)</b>: hosting a malicious site is a separate threat (drive-by downloads); XSS abuses a <b>legitimate</b> site.</li>
<li><b>(d)</b>: manipulating database queries with SQL control characters is <b>SQL injection</b>.</li></ul>
<div class="key">Types of XSS: stored (persistent), reflected and DOM-based. Defences: escape output, validate input, use a Content Security Policy, and set cookies HttpOnly.</div>` },

{ id: "2025-88", year: 2025, no: 88, subject: "ethics", topic: "Intellectual property", keySource: K,
q: `An idea, a design, a manuscript, an invention, or a concept which will give rise to a useful product/application, is known as`,
opts: ["Intellectual property right", "Employees right", "Professional right", "Recognition right"], ans: 0,
analysis: `<h3>Answer: (a) Intellectual property right</h3><p><b>Intellectual property</b> is a creation of the mind (idea, design, manuscript, invention, concept) that can lead to a useful product. Intellectual property rights give the creator exclusive rights over it for a period.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Employees' rights</b>: rights of employees at work: privacy, non-discrimination, due process, fair pay.</li>
<li><b>(c) Professional rights</b>: rights engineers have as professionals: to use professional judgment, to refuse unethical work, to warn the public.</li>
<li><b>(d) Recognition right</b>: the right to fair recognition and reward for one's work, one of the professional rights.</li></ul>
<div class="key">Types of IPR in India: patents (Patents Act 1970, 20 years), copyright (Copyright Act 1957), trademarks (1999 Act), industrial designs (2000 Act), geographical indications (1999 Act, e.g. Darjeeling tea), and trade secrets (protected by contract).</div>` },

{ id: "2025-89", year: 2025, no: 89, subject: "ethics", topic: "Definition of engineering ethics", keySource: K,
q: `An engineering ethics is the study of`,
opts: ["Decisions, policies and values that are morally desirable in engineering practice and research", "Policies, time-management and values that are morally desirable in engineering practice and research", "Decisions, time-management and values that are morally desirable in engineering practice and research", "Policies, human resource management and values that are morally desirable in engineering practice and research"], ans: 0,
analysis: `<h3>Answer: (a) Decisions, policies and values…</h3><p>Martin and Schinzinger define engineering ethics as the study of the moral values, issues and decisions involved in engineering practice: "the study of the <b>decisions, policies and values</b> that are morally desirable in engineering practice and research" (see 2023 Q35, the normative sense).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(c)</b>: put "time-management" in place of decisions or policies; time management is a management skill, not part of the definition.</li>
<li><b>(d)</b>: puts "human resource management" in place of decisions.</li></ul>
<div class="key">Engineering ethics covers the responsibilities and rights of engineers, safety and risk, honesty in research and testing, conflicts of interest, whistleblowing and global issues.</div>` },

{ id: "2025-90", year: 2025, no: 90, subject: "ethics", topic: "Bootlegging", keySource: K,
q: `Manufacturing, selling or transporting products (liquor and narcotics) that are prohibited by law, is called`,
opts: ["Industrial espionage", "White-collared crimes", "Bootlegging", "Glitching"], ans: 2,
analysis: `<h3>Answer: (c) Bootlegging</h3><p><b>Bootlegging</b> is the illegal manufacture, sale or transport of prohibited goods, especially liquor (the word comes from smugglers hiding flasks in their boot legs, and became common in the US Prohibition era, 1920–33). It now also covers illegal copies of recordings and software.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Industrial espionage</b>: stealing trade secrets from a competitor.</li>
<li><b>(b) White-collar crimes</b>: non-violent, financially motivated crimes by professionals (fraud, embezzlement, insider trading).</li>
<li><b>(d) Glitching</b>: not a crime category (in gaming, exploiting software bugs).</li></ul>
<div class="key">In India, liquor prohibition is a state subject; Gujarat, Bihar, Mizoram and Nagaland have prohibition laws. Narcotics are controlled nationally under the NDPS Act 1985.</div>` },

{ id: "2025-91", year: 2025, no: 91, subject: "ethics", topic: "Emotivism", keySource: K,
q: `Moral statements are merely used to express emotions and to try to influence other people's behaviour but they are not supportable by valid moral reasons. This is termed as`,
opts: ["Nihilism", "Compatibilism", "Emotivism", "Eudaimonia"], ans: 2,
analysis: `<h3>Answer: (c) Emotivism</h3><p><b>Emotivism</b> (A. J. Ayer, C. L. Stevenson) holds that moral statements express feelings ("stealing — boo!") and try to influence others, rather than state facts. So they cannot be true or false, or supported by valid reasons. Engineering-ethics texts present it to argue against it: moral reasons can be given and assessed.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Nihilism</b>: the view that there are no moral values at all, or that life has no meaning.</li>
<li><b>(b) Compatibilism</b>: the view that free will is compatible with determinism.</li>
<li><b>(d) Eudaimonia</b>: Aristotle's term for flourishing or well-being, the goal of virtue ethics.</li></ul>
<div class="key">Related views: ethical egoism (act only in self-interest), ethical relativism (right means approved by one's culture), and religious divine-command theory.</div>` },

{ id: "2025-92", year: 2025, no: 92, subject: "ethics", topic: "Engineering, business and ethics", keySource: K, doubt: true,
q: `In order to ensure the confluence of good engineering, good business, and good ethics, it is essential for engineering and corporations, in their major dimensions, to be`,
opts: ["Socially aligned", "Spiritually aligned", "Morally aligned", "Conscientiously aligned"], ans: 3,
analysis: `<h3>Answer: (d) Conscientiously aligned (MADE EASY's key)</h3><p>The idea (from Martin and Schinzinger's discussion of engineers and corporations) is that good engineering, good business and good ethics go together only when the main dimensions of engineering and of the corporation work in the same direction, guided by conscience: <b>conscientiously aligned</b>.</p>
<h3>Option by option</h3><ul>
<li><b>(a) Socially aligned</b>: corporate social responsibility is one part, but the alignment asked for is wider than social goals.</li>
<li><b>(b) Spiritually aligned</b>: not the term used in the engineering-ethics literature.</li>
<li><b>(c) Morally aligned</b>: our first answer, and close in meaning; the source's exact word decides between (c) and (d).</li></ul>
<div class="note">In doubt (MADE EASY's key followed). We first chose (c) "morally aligned" and could not trace the exact sentence. Both (c) and (d) express the same idea, so the answer rests on the source text's wording.</div>` },

{ id: "2025-93", year: 2025, no: 93, subject: "ethics", topic: "Teleological approach", keySource: K,
q: `What is Teleological Approach ?`,
opts: ["Developing an individual personnel characteristics", "We can know what is good only when we have fully understood the context", "Judging whether an action is right, fair and honest", "Placing posters about ethics throughout the organization"], ans: 1,
analysis: `<h3>Answer: (b) We can know what is good only when we have fully understood the context</h3><p>A <b>teleological</b> approach (from Greek <i>telos</i>, end or purpose) judges actions by their ends or consequences. To know whether an action is good, we must understand its full context and outcomes, not just apply a fixed rule.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: developing personal character is <b>virtue</b> ethics.</li>
<li><b>(c)</b>: judging whether an act itself is right, fair and honest, regardless of outcome, is <b>deontological</b> (duty-based) reasoning.</li>
<li><b>(d)</b>: putting up posters is an organisational awareness measure, not an ethical approach.</li></ul>
<div class="key">Ethical paths: deontological (duty), teleological (consequences, e.g. utilitarianism) and virtue (character).</div>` },

{ id: "2025-94", year: 2025, no: 94, subject: "ethics", topic: "Terminal values", keySource: K,
q: `Self-respect, family happiness, comfortable life, professional growth and recognition are`,
opts: ["Terminal values", "Instrumental values", "Mainstream values", "Human values"], ans: 0,
analysis: `<h3>Answer: (a) Terminal values</h3><p>Milton <b>Rokeach</b> (1973) divided values into <b>terminal values</b>, the desired end-states of life (a comfortable life, family security, self-respect, happiness, social recognition, wisdom), and <b>instrumental values</b>, preferred modes of behaviour used to reach them (honesty, ambition, responsibility, courage).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Instrumental values</b>: means, not ends: being honest, capable, logical, polite.</li>
<li><b>(c) Mainstream values</b>: not a category in the Rokeach Value Survey.</li>
<li><b>(d) Human values</b>: too general; it includes both terminal and instrumental values.</li></ul>
<div class="tip">Test: is it something you want to <b>have or reach</b> (terminal), or a way you want to <b>behave</b> (instrumental)?</div>` },

{ id: "2025-95", year: 2025, no: 95, subject: "ethics", topic: "Civic sense", keySource: K,
q: `Yawning, sneezing, relaxing the body by bending backwards, snoring, spitting, such habits are to be avoided in front of others in a gathering. A person who is conscious of above habits is said to have`,
opts: ["Ethics", "Values", "Integrity", "Civic sense"], ans: 3,
analysis: `<h3>Answer: (d) Civic sense</h3><p><b>Civic sense</b> is awareness of the social norms of behaviour in public: consideration for others in shared spaces, such as not spitting, covering a sneeze, not littering and queuing.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Ethics</b>: principles of right and wrong conduct, which are broader than public manners.</li>
<li><b>(b) Values</b>: deep beliefs about what is important (honesty, compassion), not etiquette.</li>
<li><b>(c) Integrity</b>: consistency between one's values, words and actions; moral wholeness.</li></ul>
<div class="key">Professional-ethics texts list civic virtue as a core human value: duties (pay taxes, keep the surroundings clean, protect public property) and rights (to vote, to free expression); see 2023 Q33.</div>` },

{ id: "2025-96", year: 2025, no: 96, subject: "ethics", topic: "Utilitarianism", keySource: K,
q: `A balance between good and bad consequences of an action, taking into account the consequences for everyone affected is known as`,
opts: ["Virtue ethics", "Utilitarianism", "Duty ethics", "Right ethics"], ans: 1,
analysis: `<h3>Answer: (b) Utilitarianism</h3><p><b>Utilitarianism</b> (Bentham, J. S. Mill) judges an action by its consequences for <b>everyone</b> affected: the right act produces the greatest balance of good over bad, the "greatest good for the greatest number". Act utilitarianism applies this to each act; rule utilitarianism applies it to rules.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Virtue ethics</b>: focuses on the character of the agent (honesty, courage), not on adding up consequences.</li>
<li><b>(c) Duty ethics</b>: some acts are right or wrong in themselves, whatever the outcome (Kant).</li>
<li><b>(d) Rights ethics</b>: people have rights that must be respected even if violating them would give better overall results (Locke).</li></ul>
<div class="key">Cost–benefit analysis is the engineering application of utilitarian thinking (see 2024 Q52). Its main weakness: it may justify harming a minority for a larger total benefit.</div>` },

{ id: "2025-97", year: 2025, no: 97, subject: "ethics", topic: "Normative ethics", keySource: K,
q: `Ethics that guides human conduct and sets out certain moral standard is called`,
opts: ["Metaethics", "Applied ethics", "Normative ethics", "Legal ethics"], ans: 2,
analysis: `<h3>Answer: (c) Normative ethics</h3><p><b>Normative ethics</b> sets out standards (norms) of right and wrong conduct: how we <b>ought</b> to act. Its main theories are consequentialism, deontology and virtue ethics.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Metaethics</b>: asks what moral terms mean and whether moral facts exist; it does not prescribe conduct.</li>
<li><b>(b) Applied ethics</b>: applies normative principles to specific fields and issues (business, medicine, engineering); see 2023 Q100.</li>
<li><b>(d) Legal ethics</b>: the professional code for lawyers, a branch of applied ethics.</li></ul>
<div class="key">Descriptive ethics, by contrast, simply reports what people actually believe is right, without judging it.</div>` }
  );
})();

(function () {
  var K = "MADE EASY unofficial key";
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is NOT the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true but II does not explain I; (c) I true, II false; (d) I false, II true)";
  window.PYQ_QUESTIONS.push(
{ id: "2025-98", year: 2025, no: 98, subject: "energy", topic: "EIA indicators", keySource: K,
q: `Statement (I) : Explicit indicator is the methodology that should suggest specific and measurable indicators to be used to qualify impacts on the relevant environmental parameters.<br>Statement (II) : Magnitude is the methodology that should provide for the measurement of impact magnitude.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true but II does not explain I</h3><p>Texts on environmental impact assessment list criteria an EIA methodology should meet (Canter; Rau &amp; Wooten).</p>
<h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> <b>explicit indicators</b>: the methodology should name specific, measurable indicators for each environmental parameter (e.g. dissolved oxygen for water quality).</li>
<li><b>Statement II (true):</b> <b>magnitude</b>: the methodology should provide for measuring how large each impact is (as distinct from how important it is).</li>
<li><b>Link:</b> these are two separate criteria in the same list; neither explains the other.</li></ul>
<div class="key">Other criteria: comprehensiveness, specificity, isolating project impacts from future changes, timing and duration, data sources, and ease of use. Leopold's matrix (1971) scores magnitude and importance separately for each cell.</div>` },

{ id: "2025-99", year: 2025, no: 99, subject: "pm", topic: "Capital–output ratio", keySource: K,
q: `Statement (I) : A country which doubles its capital in ten years will have a higher output per unit of capital than a country which doubles it in twenty years.<br>Statement (II) : New investment and new technology go together.` + N,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3><h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> a country adding capital faster has a younger capital stock: more of its machines are new, embodying the latest technology, so each unit of capital produces more.</li>
<li><b>Statement II (true, and the reason):</b> new technology usually enters the economy <b>through</b> new investment (new machines embody new methods, the "vintage capital" idea). This is why faster capital growth raises output per unit of capital.</li></ul>
<div class="key">Related idea: the incremental capital–output ratio (ICOR) = investment ÷ increase in output. A lower ICOR means capital is used more productively; in the Harrod–Domar model, growth rate = savings rate ÷ ICOR.</div>` },

{ id: "2025-100", year: 2025, no: 100, subject: "energy", topic: "Activity step model of EIA", keySource: K, doubt: true,
q: `Statement (I) : An evaluation and identification of sources, types and qualities of pollutants generated by different phases of project activity.<br>Statement (II) : In activity step model for environmental impact assessment studies, the detailed evaluation of existing ambient air quality, meteorological conditions and nuclear air quality existing in the project area.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true but II does not explain I (MADE EASY's key)</h3><h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> identifying the sources, types and quantities of pollutants from each phase of the project (construction, operation, decommissioning) is the first step of an air-quality impact study.</li>
<li><b>Statement II (taken as true):</b> the next step in the activity-step model is describing the existing environment: baseline ambient air quality and meteorological conditions in the project area.</li>
<li><b>Link:</b> the two are separate steps of the model; the baseline survey does not explain the pollutant inventory.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). Statement II speaks of "nuclear air quality", which is not an EIA term; it is probably a garbled word (perhaps "noise" or "background"). Read literally, Statement II is false, which would give (c), our first answer. Read as intended, both statements describe steps of the model, giving (b).</div>` }
  );
})();
