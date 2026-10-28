// ESE 2019 Prelims Paper I, Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  // Statement (I)/(II) items (Q91–100) share these four codes
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is <i>not</i> the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true, II does not explain I; (c) I true, II false; (d) I false, II true.)";
window.PYQ_QUESTIONS.push(
{ id: "2019-76", year: 2019, no: 76, subject: "ict", topic: "Audio compression",
q: `The Pre-echo PE distortions in audio signal represents the`,
opts: ["Theoretical limit on compressibility of particular signals", "Imaginary components of a signal", "Critical band analysis of a signal", "Histogram of the signals"], ans: 0,
analysis: `<h3>Answer: (a) Theoretical limit on compressibility of particular signals</h3><p>In perceptual audio coding, "PE" is <b>perceptual entropy</b> (J.D. Johnston, 1988): the minimum number of bits per sample needed to code a signal without audible distortion, i.e. the theoretical limit of how far that particular signal can be compressed transparently. The question's "Pre-echo PE" mixes this term with pre-echo, a separate artefact.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Imaginary components come from complex transforms (e.g. FFT), not PE.</li>
<li><b>(c)</b> Critical-band analysis is a step used to <b>compute</b> PE (it models the ear's frequency resolution), not what PE represents.</li>
<li><b>(d)</b> A histogram shows the distribution of sample values.</li></ul>
<div class="tip">Pre-echo: in transform coders (MP3, AAC), quantisation noise spreads over the whole block, so it can be heard just <b>before</b> a sharp attack (castanets). Cures: block switching (short windows), temporal noise shaping, bit reservoir.</div>` },

{ id: "2019-77", year: 2019, no: 77, subject: "ict", topic: "Transmission modes",
q: `In a computer network, a point-to-point transmission, with one sender and one receiver is called`,
opts: ["Unicasting", "Multicasting", "Broadcasting", "Internetworking"], ans: 0,
analysis: `<h3>Answer: (a) Unicasting</h3><p>Unicast is one-to-one delivery from a single sender to a single receiver; most internet traffic (web browsing, email) is unicast.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Multicast is one-to-many: one sender to a group of interested receivers (IPTV, video conferencing; IPv4 class D addresses 224.0.0.0–239.255.255.255).</li>
<li><b>(c)</b> Broadcast is one-to-all on a network (ARP requests, DHCP discovery).</li>
<li><b>(d)</b> Internetworking means connecting separate networks (via routers) into a larger network, the internet itself.</li></ul>
<div class="tip">IPv6 has no broadcast; it uses multicast and adds anycast (one-to-nearest, used by DNS root servers).</div>` },

{ id: "2019-78", year: 2019, no: 78, subject: "ict", topic: "Web basics",
q: `The Protocol (http), the DNS name of the host, and the file name is identified through`,
opts: ["Uniform Resource Locator", "Web Browser", "Web Server", "IP address"], ans: 0,
analysis: `<h3>Answer: (a) Uniform Resource Locator</h3><p>A URL has three parts: the protocol (scheme), the host's DNS name, and the path to the file, e.g. <b>https</b>://<b>www.upsc.gov.in</b>/<b>examinations/previous-question-papers</b>. (It may also carry a port, query string and fragment.)</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> A browser is the client program that uses URLs to fetch pages.</li>
<li><b>(c)</b> A web server stores and serves the pages.</li>
<li><b>(d)</b> An IP address identifies a host on the network numerically; it contains no protocol or file name. DNS translates the host name in the URL into an IP address.</li></ul>
<div class="tip">URI is the general term; a URL is a URI that gives a location. HTTP uses port 80, HTTPS port 443.</div>` },

{ id: "2019-79", year: 2019, no: 79, subject: "ict", topic: "Web technology",
q: `The traditional way to handle forms and other interactive Web pages is a system called`,
opts: ["Graphical User Interface", "Common Gateway Interface", "Text Based User Interface", "Command Line Interface"], ans: 1,
analysis: `<h3>Answer: (b) Common Gateway Interface</h3><p>CGI (1993) is the standard way a web server passes form data (from an HTML form submission) to an external program, often a Perl or C script in a "cgi-bin" directory, and returns the program's output as a dynamic web page. It was the traditional method before server-side languages such as PHP, ASP and JSP and later frameworks took over.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> A GUI is how users interact with software through windows and icons.</li>
<li><b>(c)</b> and <b>(d)</b> Text-based and command-line interfaces are ways for users to interact with computers by typing.</li></ul>
<div class="tip">CGI starts a new process for every request, which is slow; FastCGI and embedded interpreters fixed this.</div>` },

{ id: "2019-80", year: 2019, no: 80, subject: "ict", topic: "Network security",
q: `Pretty Good Privacy (PGP) which encrypts the data by using a block cipher is used in`,
opts: ["FTP security", "e-mail security", "Browser security", "Bluetooth security"], ans: 1,
analysis: `<h3>Answer: (b) e-mail security</h3><p>PGP (Phil Zimmermann, 1991) provides confidentiality, authentication and integrity for <b>e-mail</b> (and files). It encrypts the message with a one-time session key using a symmetric block cipher (originally IDEA, later AES), and encrypts that key with the recipient's public key (RSA); it also signs messages digitally. OpenPGP (RFC 4880) is the open standard; GnuPG implements it.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> FTP is secured by FTPS (FTP over TLS) or replaced by SFTP (over SSH).</li>
<li><b>(c)</b> Browsers use TLS (HTTPS).</li>
<li><b>(d)</b> Bluetooth uses its own pairing and encryption (E0 or AES-CCM).</li></ul>
<div class="tip">S/MIME is the other main e-mail security standard (uses X.509 certificates from certifying authorities instead of PGP's web of trust).</div>` },

{ id: "2019-81", year: 2019, no: 81, subject: "ict", topic: "Programming languages",
q: `The core elements of high-level programming languages are`,
opts: ["Keywords, Expressions and Punctuation", "Functions, Keywords and Operators", "Keywords, Operators and Punctuation", "Functions, Expressions and Operators"], ans: 2,
analysis: `<h3>Answer: (c) Keywords, Operators and Punctuation</h3><p>Every high-level language is built from a small set of core elements: <b>keywords</b> (reserved words such as if, while, return), <b>operators</b> (+, −, ==, &amp;&amp;) and <b>punctuation</b> (semicolons, braces, commas that structure statements), combined according to the language's <b>syntax</b>. Programmer-defined identifiers name variables and functions.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Expressions are built <b>from</b> operators and operands; they are constructs, not core elements.</li>
<li><b>(b)</b> and <b>(d)</b> Functions are units written by programmers (or libraries) using the core elements.</li></ul>
<div class="tip">Compilation stages: lexical analysis (splits code into tokens: keywords, identifiers, operators, punctuation, literals), syntax analysis (parse tree), semantic analysis, code generation and optimisation.</div>` },

{ id: "2019-82", year: 2019, no: 82, subject: "ethics", topic: "Branches of philosophy",
q: `The philosophical study of beliefs and knowledge is better known as`,
opts: ["Ontology", "Epistemology", "Entomology", "Etymology"], ans: 1,
analysis: `<h3>Answer: (b) Epistemology</h3><p>Epistemology (Greek <i>episteme</i>, knowledge) studies the nature, sources and limits of knowledge and justified belief: what we can know and how.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Ontology studies being and existence (what exists). In computing, an ontology is a formal model of concepts in a domain.</li>
<li><b>(c)</b> Entomology is the study of insects.</li>
<li><b>(d)</b> Etymology is the study of word origins.</li></ul>
<div class="tip">Branches of philosophy: metaphysics (including ontology), epistemology, logic, ethics, aesthetics. Ethics divides into meta-ethics, normative ethics and applied ethics (engineering ethics is applied ethics).</div>` },

{ id: "2019-83", year: 2019, no: 83, subject: "ethics", topic: "Meta-ethics",
q: `One branch of ethical philosophy claims that it is possible to know right from wrong or good from bad in a very clear and objective manner, is called`,
opts: ["Non-Cognitivism", "Ethical Pluralism", "Cognitivism", "Utilitarianism"], ans: 2,
analysis: `<h3>Answer: (c) Cognitivism</h3><p>Ethical cognitivism holds that moral statements express beliefs that can be true or false, so moral knowledge is possible: we can know objectively that an act is right or wrong.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Non-cognitivism (emotivism, A.J. Ayer; prescriptivism, R.M. Hare) holds that moral statements express feelings or commands, not facts, so they are neither true nor false.</li>
<li><b>(b)</b> Ethical pluralism (W.D. Ross) holds that there are several independent moral principles (prima facie duties) that can conflict; it is about the content of morality.</li>
<li><b>(d)</b> Utilitarianism (Bentham, Mill) is a normative theory: the right act maximises overall happiness.</li></ul>` },

{ id: "2019-84", year: 2019, no: 84, subject: "ethics", topic: "Engineering ethics",
q: `Consider the following statements regarding 'Engineering Ethics' :<ol><li>It is the activity of understanding moral values</li><li>It resolves the moral issues and justifies moral judgments</li><li>It would refer to the set of specifically moral problems and issues related to Engineering</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2 and 3</h3><p>Martin and Schinzinger (<i>Ethics in Engineering</i>) define engineering ethics in two senses: (1) the activity and discipline of <b>understanding moral values</b>, <b>resolving moral issues</b> and <b>justifying moral judgements</b> in engineering; and (2) the <b>set of specific moral problems and issues</b> related to engineering (and the standards accepted by engineers).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> part of the first (inquiry) sense.</li>
<li><b>2 (correct):</b> also part of the first sense.</li>
<li><b>3 (correct):</b> the second (content) sense.</li></ul>
<div class="tip">Kohlberg's stages of moral development (pre-conventional, conventional, post-conventional) and Gilligan's care ethics are often taught alongside these definitions.</div>` },

{ id: "2019-85", year: 2019, no: 85, subject: "ethics", topic: "Business ethics",
q: `A situation where very high prices are charged from customers for a limited period of time is known as`,
opts: ["Gouging", "Zipping", "Bamboozling", "Hoodwinking"], ans: 0,
analysis: `<h3>Answer: (a) Gouging</h3><p>Price gouging is charging unreasonably high prices for a limited period, usually when buyers have no choice: during disasters, shortages or emergencies (bottled water after a flood, masks and sanitisers in early 2020).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> "Zipping" is not an established business-ethics term for pricing.</li>
<li><b>(c)</b> Bamboozling and <b>(d)</b> hoodwinking mean deceiving or tricking someone; they are not specific to pricing.</li></ul>
<div class="tip">In India, the Essential Commodities Act, 1955 and the Drugs (Prices Control) Order, 2013 (through NPPA) can cap prices; the Consumer Protection Act, 2019 covers unfair trade practices. Related terms: price skimming (high launch price, legitimate strategy), predatory pricing (below cost to kill rivals).</div>` },

{ id: "2019-86", year: 2019, no: 86, subject: "ethics", topic: "Whistle-blowing procedure",
q: `Consider the following steps for an individual regarding preparation for disclosure of unethical behaviour :<ol><li>Study and document the facts and formulate a plan for an appeal</li><li>Take up the matter with higher management</li><li>Discuss the matter with immediate supervisor</li><li>If the internal appeal does not resolve the conflict, then he should notify the company that he intends to continue with an external review of the problem</li></ol>What is the correct sequence of order of the above steps ?`,
opts: ["2, 3, 1 and 4", "1, 3, 2 and 4", "3, 2, 4 and 1", "1, 2, 3 and 4"], ans: 1,
analysis: `<h3>Answer: (b) 1, 3, 2 and 4</h3><table><tr><th>Step</th><th>Why in this order</th></tr>
<tr><td>1. Study and document the facts; plan the appeal</td><td>Without evidence a complaint is easily dismissed; facts first.</td></tr>
<tr><td>3. Discuss with the immediate supervisor</td><td>Use the chain of command; the supervisor may resolve it.</td></tr>
<tr><td>2. Take it to higher management</td><td>Escalate internally only if the supervisor does not act.</td></tr>
<tr><td>4. Notify the company of intent to go external</td><td>External whistle-blowing is the last resort, after internal channels fail.</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Starts with higher management, bypassing the supervisor and acting before documenting.</li>
<li><b>(c)</b> Leaves fact-finding to the end.</li>
<li><b>(d)</b> Goes to higher management before the immediate supervisor.</li></ul>` },

{ id: "2019-87", year: 2019, no: 87, subject: "ethics", topic: "Professions",
q: `Which of the following are the attributes of a profession ?<ol><li>The work requires sophisticated skills, use of judgment and exercise of discretion</li><li>Membership in the profession does not require extensive formal education as well as practical training</li><li>There are set standards for admission to the profession and conduct for members</li><li>Significant public good results from practice of the profession</li></ol>Select the correct answer using the codes given below :`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "1, 3 and 4 only", "2, 3 and 4 only"], ans: 2,
analysis: `<h3>Answer: (c) 1, 3 and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Professional work needs advanced knowledge, skill and independent judgement, not routine tasks.</li>
<li><b>2 (wrong):</b> Professions <b>do</b> require extensive formal education and practical training (a degree, internship, licensing exam).</li>
<li><b>3 (correct):</b> Professional societies set entry standards and codes of conduct and can discipline members.</li>
<li><b>4 (correct):</b> The profession serves an important public good: health (medicine), justice (law), safety and welfare (engineering).</li></ul>
<div class="tip">Indian bodies: Institution of Engineers (India), Council of Architecture (statutory), Bar Council, National Medical Commission. Unlike many countries, India has no general licensing of engineers yet; an Engineers Bill has been discussed for years.</div>` },

{ id: "2019-88", year: 2019, no: 88, subject: "ethics", topic: "Professional qualities",
q: `What are the core qualities of a professional practitioner ?<ol><li>Integrity both with themselves and with others</li><li>Independence-to be free of secondary interests with other parties</li><li>Competence</li><li>Discretion-care with communications</li></ol>Select the correct answer using the codes given below :`,
opts: ["1, 2, 3 and 4", "1, 2 and 3 only", "1 and 3 only", "3 and 4 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2, 3 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Integrity: honesty and consistency of values in dealing with oneself and others.</li>
<li><b>2 (correct):</b> Independence: freedom from conflicting interests so that professional judgement is objective.</li>
<li><b>3 (correct):</b> Competence: working only within one's skill and keeping it up to date.</li>
<li><b>4 (correct):</b> Discretion: confidentiality and care in what is communicated, and to whom.</li></ul>
<div class="tip">These match the fundamental principles in professional codes such as the IFAC/ICAI code for accountants: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour.</div>` },

{ id: "2019-89", year: 2019, no: 89, subject: "ethics", topic: "Whistle-blowing",
q: `When should whistle blowing be attempted ?<ol><li>There must be a clear and great harm that can be avoided</li><li>The whistleblower must be in a clear position to report on the problem</li><li>The whistleblower must have a reasonable chance of success in stopping the harmful activity</li><li>The whistleblower feels that all other lines of action within the context of the organization have been explored and shut off</li></ol>Select the correct answer using the codes given below :`,
opts: ["1, 2, 3 and 4", "1, 2 and 4 only", "1, 3 and 4 only", "2 and 3 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2, 3 and 4</h3><p>Ethicists (Richard De George and others) justify whistle-blowing only when strict conditions are met, because it can harm the organisation, colleagues and the whistle-blower.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> The harm must be serious and preventable.</li>
<li><b>2 (correct):</b> The person must know the facts first-hand and be in a position to report them credibly.</li>
<li><b>3 (correct):</b> There should be a reasonable chance that disclosure will actually stop the harm.</li>
<li><b>4 (correct):</b> Internal channels must have been tried and exhausted.</li></ul>
<div class="tip">De George: whistle-blowing is <b>permissible</b> when there is serious harm, the employee has reported it to the supervisor and exhausted internal channels; it becomes <b>obligatory</b> when, in addition, the employee has documented evidence and good reason to believe disclosure will prevent the harm.</div>` },

{ id: "2019-90", year: 2019, no: 90, subject: "ethics", topic: "Patents Act",
q: `Which of the following are the salient features of the Patent Act 1970 ?<ol><li>It codifies inventions which are not patentable</li><li>It provides for endorsement of patent with the words 'license of right'</li><li>It provides for revocation of patents in public interest</li><li>It has provision for validity period also for the patents</li></ol>Select the correct answer using the codes given below :`,
opts: ["1, 2, 3 and 4", "1, 2 and 4 only", "1, 3 and 4 only", "2 and 3 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2, 3 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Sections 3 and 4 list what are not inventions or not patentable: frivolous inventions, mere discovery, new forms of known substances without enhanced efficacy (Section 3(d), applied in Novartis v Union of India, 2013), methods of agriculture, traditional knowledge, atomic energy inventions.</li>
<li><b>2 (correct, as originally enacted):</b> Sections 86–88 allowed patents (notably for food, medicine and chemical processes) to be endorsed "licences of right", letting anyone use the invention on paying royalty. These sections were <b>omitted by the Patents (Amendment) Act, 2002</b> as incompatible with TRIPS.</li>
<li><b>3 (correct):</b> Section 66 lets the government revoke a patent that is mischievous to the state or prejudicial to the public.</li>
<li><b>4 (correct):</b> The Act fixes the term of patents (originally 14 years, 5–7 years for food and drug processes; now 20 years for all after the 2002 amendment).</li></ul>
<div class="tip">Other features: compulsory licences (Section 84; first granted to Natco for Bayer's Nexavar in 2012), pre-grant and post-grant opposition, product patents for pharma since 2005. The Patents (Amendment) Rules, 2024 eased compliance (working statements once in three years).</div>` },

{ id: "2019-91", year: 2019, no: 91, subject: "pm", topic: "Project constraints",
q: `<b>Directions:</b> Each of the next ten items consists of two statements, one labelled as 'Statement (I)' and the other as 'Statement (II)'. Examine these two statements carefully and select the answers to these items using the codes given below.<br><br>Statement (I) : All projects have constraints or limitations that inhibit their ability to reach goals and objectives.<br>Statement (II) : Time and money are universal constraints in projects.`,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3><ul>
<li><b>Statement I (true):</b> Every project operates under constraints (scope, time, cost, quality, resources, risk) that limit what it can achieve.</li>
<li><b>Statement II (true, and the reason):</b> Time (a deadline) and money (a budget) are constraints that every project has, which is why it can be said that all projects are constrained.</li></ul>
<h3>The codes</h3><ul><li><b>(b)</b> Understates the link: II is the general reason behind I.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">Goldratt's Theory of Constraints (and Critical Chain Project Management) focuses management on the one constraint that limits the whole system.</div>` },

{ id: "2019-92", year: 2019, no: 92, subject: "energy", topic: "Environmental management", selfCorrected: true,
q: `Statement (I) : Training should be conducted among the line and low management for ensuring the importance of environmental protection plan.<br>Statement (II) : Environmental science is a developing subject and the people implementing environment strategies should remain up to date with the environmental control processes.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><ul>
<li><b>Statement I (true):</b> Line and lower managers carry out the environmental management plan on the ground; training makes them understand why it matters and how to apply it.</li>
<li><b>Statement II (true):</b> Environmental science, standards and control technologies keep changing, so implementers need continuing updates.</li></ul>
<p>Statement I is about creating awareness of the plan's importance among line managers; Statement II is about keeping implementers' technical knowledge current. They support the same general idea (training), but II is not the reason given for I.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">ISO 14001 (environmental management systems) clause 7.2–7.3 requires competence and awareness training for all persons whose work affects environmental performance.</div>` },

{ id: "2019-93", year: 2019, no: 93, subject: "materials", topic: "Solid solubility",
q: `Statement (I) : Metals having same crystal structure will have greater solubility.<br>Statement (II) : Differences in crystal structure limits the solid solubility.` + N,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3><ul>
<li><b>Statement I (true):</b> One of the Hume-Rothery rules: for extensive (even complete) substitutional solubility, the metals should have the same crystal structure (Cu–Ni, both FCC).</li>
<li><b>Statement II (true, and the reason):</b> A solute atom whose own structure differs from the solvent's cannot be accommodated in large amounts; the solubility is cut off where the other structure would need to form. So greater solubility with the same structure follows directly from II.</li></ul>
<h3>The codes</h3><ul><li><b>(b)</b> Understates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">See Q68 for all the Hume-Rothery factors. Example of limited solubility: Cu (FCC) and Zn (HCP) form brasses with only about 35% Zn in the α (FCC) phase.</div>` },

{ id: "2019-94", year: 2019, no: 94, subject: "materials", topic: "Phase diagrams",
q: `Statement (I) : The tie line is constructed across the two-phase region at the temperature of the alloy.<br>Statement (II) : The overall alloy composition is located on the tie line.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><ul>
<li><b>Statement I (true):</b> A tie line (isotherm) is drawn horizontally across a two-phase region at the alloy's temperature; its ends on the phase boundaries give the compositions of the two phases.</li>
<li><b>Statement II (true):</b> The point of the overall alloy composition lies on that tie line, and its position divides the line in the inverse ratio of the phase amounts (lever rule: W<sub>L</sub> = (C<sub>α</sub> − C<sub>0</sub>)/(C<sub>α</sub> − C<sub>L</sub>)).</li></ul>
<p>II states another property of the tie line (used for the lever rule); it does not explain how or why the tie line is constructed at the alloy's temperature.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>` },

{ id: "2019-95", year: 2019, no: 95, subject: "materials", topic: "Polymer structures",
q: `Statement (I) : Cross linked polymers may be synthesized in which side-branch chains are connected to the main ones.<br>Statement (II) : Linear polymers are those in which the repeat units are joined together end to end in single chains.` + N,
opts: C, ans: 3,
analysis: `<h3>Answer: (d) Statement I is false, Statement II is true</h3><ul>
<li><b>Statement I (false):</b> Polymers with side-branch chains attached to the main chain are <b>branched</b> polymers (e.g. LDPE). In <b>cross-linked</b> polymers, adjacent linear chains are joined to one another at various points by covalent bonds (e.g. vulcanised rubber).</li>
<li><b>Statement II (true):</b> Linear polymers (HDPE, PVC, nylon, PTFE) have repeat units joined end to end in single long chains.</li></ul>
<table><tr><th>Structure</th><th>Description</th><th>Example</th></tr><tr><td>Linear</td><td>Single chains</td><td>HDPE, nylon</td></tr><tr><td>Branched</td><td>Side branches on the main chain</td><td>LDPE</td></tr><tr><td>Cross-linked</td><td>Chains bonded to each other</td><td>Vulcanised rubber</td></tr><tr><td>Network</td><td>3-D covalent network</td><td>Epoxy, Bakelite</td></tr></table>
<h3>The codes</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> all need I to be true.</li></ul>` },

{ id: "2019-96", year: 2019, no: 96, subject: "materials", topic: "Abrasive ceramics", selfCorrected: true,
q: `Statement (I) : Abrasive ceramics are used to wear, grind, or cut away other material, which necessarily is softer.<br>Statement (II) : The prime requisite for abrasive ceramic group of materials is hardness or wear resistance and a high degree of toughness is essential to ensure that the abrasive particles do not easily fracture.` + N,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3><ul>
<li><b>Statement I (true):</b> Abrasives (diamond, cubic boron nitride, silicon carbide, alumina/corundum, tungsten carbide) grind or cut away other materials, which must be softer than the abrasive.</li>
<li><b>Statement II (true, and the reason):</b> Because an abrasive must cut a softer material, its prime requirement is hardness (with wear resistance), plus enough toughness that its grains do not fracture too easily. This is exactly what lets abrasives do the job described in I (Callister's text links them this way).</li></ul>
<h3>The codes</h3><ul><li><b>(b)</b> Understates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">Forms: bonded (grinding wheels, with vitreous or resin bond), coated (sandpaper, emery cloth) and loose grains (lapping, polishing). Mohs hardness: diamond 10, SiC about 9.5, alumina 9.</div>` },

{ id: "2019-97", year: 2019, no: 97, subject: "quality", topic: "Cost of quality",
q: `Statement (I) : The prevention costs increase with the introduction of a quality system and may be a significant proportion of the total quality costs.<br>Statement (II) : Costs associated with education and training are not included in prevention costs.` + N,
opts: C, ans: 2,
analysis: `<h3>Answer: (c) Statement I is true, Statement II is false</h3><ul>
<li><b>Statement I (true):</b> Introducing a quality system means spending more on planning, training and process control (prevention); this investment becomes a significant share of quality costs, while failure costs fall.</li>
<li><b>Statement II (false):</b> Quality-related <b>education and training</b> are classic <b>prevention</b> costs.</li></ul>
<table><tr><th>Category (PAF model)</th><th>Examples</th></tr><tr><td>Prevention</td><td>Quality planning, training, process control, supplier development, design reviews</td></tr><tr><td>Appraisal</td><td>Inspection, testing, calibration, audits</td></tr><tr><td>Internal failure</td><td>Scrap, rework, re-inspection, downtime</td></tr><tr><td>External failure</td><td>Warranty claims, returns, recalls, lost goodwill</td></tr></table>
<h3>The codes</h3><ul><li><b>(a)</b> and <b>(b)</b> need II to be true.</li><li><b>(d)</b> needs I to be false.</li></ul>
<div class="tip">The "1-10-100 rule": a defect costs about 1 to prevent, 10 to find internally and 100 once it reaches the customer.</div>` },

{ id: "2019-98", year: 2019, no: 98, subject: "ict", topic: "Embedded systems tools",
q: `Statement (I) : An emulator is not a mixture of hardware and software and it cannot be used to test and debug the hardware and software of an external system.<br>Statement (II) : Part of the hardware of an emulator is a multiwire cable which connects the host system to the system being developed.` + N,
opts: C, ans: 3,
analysis: `<h3>Answer: (d) Statement I is false, Statement II is true</h3><ul>
<li><b>Statement I (false):</b> An in-circuit emulator (ICE) <b>is</b> a combination of hardware and software, and it is used precisely to test and debug the hardware and software of an external (target) embedded system: it replaces or connects to the target's processor and lets the developer run, stop, single-step and inspect it.</li>
<li><b>Statement II (true):</b> Its hardware includes a multi-wire cable and probe (pod) that connects the host development computer to the target system.</li></ul>
<h3>The codes</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> all need I to be true.</li></ul>
<div class="tip">Other embedded debugging tools: simulators (software only), JTAG debuggers (on-chip debug), logic analysers, ROM emulators.</div>` },

{ id: "2019-99", year: 2019, no: 99, subject: "ethics", topic: "Loyalty",
q: `Statement (I) : Agency-loyalty is acting to fulfill one's contractual duties to an employer.<br>Statement (II) : Agency-loyalty is entirely a matter of actions, whatever its motives.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><p>Martin and Schinzinger distinguish two kinds of loyalty to an employer.</p><ul>
<li><b>Statement I (true):</b> <b>Agency-loyalty</b> is acting to fulfil one's contractual duties to the employer (doing assigned work, not stealing, keeping confidences).</li>
<li><b>Statement II (true):</b> It is entirely a matter of <b>actions</b>, whatever the motive: it does not matter whether the employee does the duty from care for the company or merely self-interest. By contrast, <b>attitude-loyalty</b> involves attitudes and emotions: identifying with the organisation and caring about it.</li></ul>
<p>II describes a characteristic of agency-loyalty; it does not explain the definition in I.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>` },

{ id: "2019-100", year: 2019, no: 100, subject: "energy", topic: "Environmental impact assessment", doubt: true,
q: `Statement (I) : An EIA is a study of the probable changes in socio-economic and bio-physical characteristics of the environment that may result from a proposed action.<br>Statement (II) : The purposes of an EIA is to help design projects, which do not disturb the quality of the environment by examining alternatives.` + N,
opts: C, ans: 2,
analysis: `<h3>Answer: (c) Statement I is true, Statement II is false (official key)</h3><ul>
<li><b>Statement I (true):</b> The standard definition (e.g. Jain, Urban and Stacey): EIA studies the probable changes in the socio-economic and biophysical characteristics of the environment that may result from a proposed action.</li>
<li><b>Statement II (key: false):</b> The key treats it as false, presumably because no project can avoid disturbing the environment altogether; EIA aims to <b>minimise and mitigate</b> adverse impacts, not to design projects with no impact.</li></ul>
<div class="note">In doubt (key followed). Examining alternatives so that projects cause the least environmental harm is a standard purpose of EIA, and many texts phrase it loosely as designing projects that "do not disturb the quality of the environment". Read that way, both statements are true and II is not the explanation of I, giving (b), our own answer. The key reads "do not disturb" literally.</div>
<h3>The codes</h3><ul><li><b>(a)</b> Would need II to be true and to explain I.</li><li><b>(b)</b> Our own reading.</li><li><b>(d)</b> Would need I to be false.</li></ul>` }
);
})();
