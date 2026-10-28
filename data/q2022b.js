// ESE 2022 Prelims Paper I, Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2022-26", year: 2022, no: 26, subject: "materials", topic: "Liquid crystal polymers",
q: `Some of the complex thermoplastic chains become so stiff that they act as rigid rods, even when heated above the melting point. These materials are`,
opts: ["Solid crystalline polymers", "Semi solid crystalline polymers", "Liquid crystalline polymers", "Copolymers"], ans: 2,
analysis: `<h3>Answer: (c) Liquid crystalline polymers</h3><p>Liquid crystal polymers (LCPs) have such stiff, rod-like chains that even in the molten state the molecules stay aligned in ordered domains. They combine very high strength and stiffness, low thermal expansion and excellent dimensional stability; used in electronic connectors and high-strength fibres (Kevlar spun from an LCP solution, Vectran).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(b)</b> Ordinary (semi-)crystalline polymers lose their order on melting.</li><li><b>(d)</b> Copolymers are made from two or more monomers; stiffness of the chains is not their defining feature.</li></ul>` },

{ id: "2022-27", year: 2022, no: 27, subject: "ict", topic: "IoT security",
q: `Which one of the following are the well-known routing attacks on IoT ?`,
opts: ["Clone Id and Sybil attacks", "Selective-reversing attacks", "Packet reversing attacks", "Frame selective wired attacks"], ans: 0,
analysis: `<h3>Answer: (a) Clone Id and Sybil attacks</h3><p>Routing attacks on IoT networks (especially on the RPL protocol of low-power networks) include: <b>clone ID</b> (several nodes using the same identity), <b>Sybil</b> (one node faking many identities), sinkhole, wormhole, blackhole, selective <b>forwarding</b> and hello-flood attacks.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> The real attack is selective <b>forwarding</b>, not "selective reversing".</li><li><b>(c)</b> "Packet reversing" is not a recognised attack.</li><li><b>(d)</b> "Frame selective wired" is not a recognised attack; IoT devices are mostly wireless.</li></ul>
<div class="tip">India's CERT-In issues IoT security advisories; telecom security testing of devices is done by NCCS. The EU Cyber Resilience Act (2024) sets security requirements for connected products.</div>` },

{ id: "2022-28", year: 2022, no: 28, subject: "ict", topic: "OSI model",
q: `Which one of the following layers in the OSI reference model is concerned with transmission of unstructured bit stream over physical medium; deals with the mechanical, electrical, functional, and procedural characteristics to access the physical medium ?`,
opts: ["Transport layer", "Network layer", "Data link layer", "Physical layer"], ans: 3,
analysis: `<h3>Answer: (d) Physical layer</h3><p>Layer 1, the physical layer, transmits raw, unstructured bits over the medium and defines its mechanical (connectors), electrical (voltages, timing), functional (pin roles) and procedural (sequence of events) characteristics. Devices: hubs, repeaters, cables, NICs' transceivers.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> The transport layer gives end-to-end delivery and reliability (TCP, UDP).</li><li><b>(b)</b> The network layer routes packets (IP).</li><li><b>(c)</b> The data link layer frames bits and controls errors and access on one link (Ethernet MAC, switches).</li></ul>` },

{ id: "2022-29", year: 2022, no: 29, subject: "ict", topic: "Operating systems",
q: `Which one of the following systems is used when there are rigid time requirements on the operation of a processor or the flow of data, and thus is often used as a control device in a dedicated application ?`,
opts: ["A real-time system", "A distributed system", "A parallel system", "A serial system"], ans: 0,
analysis: `<h3>Answer: (a) A real-time system</h3><p>A real-time system must respond within fixed time constraints; correctness depends on timing as well as results. It is used as a control device in dedicated applications: industrial control, medical devices, automobile engine and airbag controllers, avionics, robotics (Silberschatz's definition).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Distributed systems spread computing over networked machines.</li><li><b>(c)</b> Parallel (multiprocessor) systems share memory and a clock for throughput.</li><li><b>(d)</b> "Serial system" is not an OS category.</li></ul>
<div class="tip">Hard real-time: deadlines must never be missed (airbag). Soft real-time: occasional misses are tolerable (video streaming). Examples of RTOS: VxWorks, FreeRTOS, QNX.</div>` },

{ id: "2022-30", year: 2022, no: 30, subject: "ict", topic: "Internet services",
q: `Which one of the following servers is a tool that allows an information provider to prepare indexes of unstructured documents, and allows users to search these indexes with natural language questions ?`,
opts: ["Name server", "Terminal server", "Wide area information server", "File server"], ans: 2,
analysis: `<h3>Answer: (c) Wide area information server</h3><p>WAIS (Wide Area Information Servers, 1990s, Thinking Machines) let providers index text documents and let users search them with natural-language queries, returning ranked results. It was an early internet search system, later replaced by web search engines.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> A name server (DNS) translates domain names into IP addresses.</li><li><b>(b)</b> A terminal server connects terminals or serial devices to a network.</li><li><b>(d)</b> A file server stores and shares files.</li></ul>
<div class="tip">Other pre-web tools: Gopher (menu-based), Archie (FTP file search), Veronica (Gopher search).</div>` },

{ id: "2022-31", year: 2022, no: 31, subject: "ict", topic: "Network security protocols",
q: `Which one of the following protocols is designed to provide privacy between two communicating applications viz a client and a server ?`,
opts: ["Data link layer protocol", "Physical layer protocol", "Secure socket layer protocol", "Session layer protocol"], ans: 2,
analysis: `<h3>Answer: (c) Secure socket layer protocol</h3><p>SSL (Netscape, 1995) and its successor TLS provide privacy (encryption), integrity and server authentication between a client and a server application, such as a browser and a web server (HTTPS). TLS 1.3 (2018) is the current version; all SSL versions are deprecated.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(b)</b> Data link and physical layer protocols carry frames and bits; they do not secure application-to-application communication.</li><li><b>(d)</b> The session layer manages dialogues; it is not itself a privacy protocol.</li></ul>` },

{ id: "2022-32", year: 2022, no: 32, subject: "ict", topic: "Programmed instruction",
q: `Which one of the following is an advantage of branched or Intrinsic programming type or style in ICT based teaching and learning process ?`,
opts: ["Large frames reduce the time of learning", "There is a possibility of guess-work", "It is very expensive to provide so many audio-visual aids", "Revise/redesign at frequent intervals is difficult and expensive"], ans: 0,
analysis: `<h3>Answer: (a) Large frames reduce the time of learning</h3><p>Branched (intrinsic) programming (Norman Crowder) presents larger frames with multiple-choice questions; the learner's answer decides the next frame, sending him to remedial frames if wrong. Larger frames cover more content at a time, so able learners progress faster.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> The possibility of guessing the multiple-choice answer is a <b>limitation</b>.</li><li><b>(c)</b> High cost of audio-visual aids is a limitation.</li><li><b>(d)</b> Difficulty and cost of frequent revision is a limitation.</li></ul>
<div class="tip">Linear programming (B.F. Skinner) uses small steps, constructed responses and immediate reinforcement, with every learner following the same path.</div>` },

{ id: "2022-33", year: 2022, no: 33, subject: "ict", topic: "Teaching approaches",
q: `Which one of the following learnings is a teaching approach that engages students in sustained, collaborative real-world investigations ?`,
opts: ["Project-based learning", "Cooperative learning", "Collaborative learning", "Outcome based learning"], ans: 0,
analysis: `<h3>Answer: (a) Project-based learning</h3><p>Project-based learning engages students in sustained, collaborative investigations of real-world problems over weeks, ending in a product or presentation (e.g. designing a rainwater harvesting system for the school).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Cooperative learning is structured small-group work with defined roles, usually on shorter tasks.</li><li><b>(c)</b> Collaborative learning is the broad idea of learning together; it need not be a sustained real-world project.</li><li><b>(d)</b> Outcome-based education designs teaching around defined learning outcomes (used by NBA accreditation).</li></ul>
<div class="tip">NEP 2020 emphasises experiential, project-based and inquiry-based learning.</div>` },

{ id: "2022-34", year: 2022, no: 34, subject: "ict", topic: "Multiplexing",
q: `Which one of the following schemes is used for radio stations within the same region, where each radio station has its own frequency ?`,
opts: ["Space division multiplexing", "Frequency division multiplexing", "Time division multiplexing", "Code division multiplexing"], ans: 1,
analysis: `<h3>Answer: (b) Frequency division multiplexing</h3><p>Broadcast radio stations in one region share the spectrum by each transmitting on its own carrier frequency (FM 88–108 MHz in India); a receiver tunes to one band. This is FDM.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> SDM reuses the same frequency in separated spaces (cells, separate cables, MIMO beams).</li><li><b>(c)</b> TDM gives each user time slots on one channel (GSM, digital telephone trunks).</li><li><b>(d)</b> CDM gives each user a code (CDMA, GPS).</li></ul><div class="key">FDM needs guard bands between channels to avoid interference. In India, FM channels are spaced 800 kHz apart in a city under the FM phase III policy; AM medium-wave channels use 9 kHz spacing. Orthogonal FDM (OFDM, in Wi-Fi and 4G/5G) overlaps subcarriers without interference.</div>` },

{ id: "2022-35", year: 2022, no: 35, subject: "ict", topic: "AES",
q: `The AES key expansion algorithm takes as input a 4-word (16-byte) key and produces a linear array of`,
opts: ["50 words (200 bytes)", "44 words (176 bytes)", "40 words (160 bytes)", "35 words (140 bytes)"], ans: 1,
analysis: `<h3>Answer: (b) 44 words (176 bytes)</h3><p>AES-128 has 10 rounds and needs 11 round keys (one initial AddRoundKey plus one per round), each of 4 words. So the key schedule expands the 4-word key into 11 × 4 = <b>44 words</b> = 176 bytes.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> do not match 4(N<sub>r</sub> + 1) for 10 rounds.</li></ul>
<div class="tip">AES-192: 12 rounds, 52 words; AES-256: 14 rounds, 60 words. Each AES round: SubBytes, ShiftRows, MixColumns (skipped in the last round), AddRoundKey.</div><div class="key">Formula: number of words = 4 × (N<sub>r</sub> + 1), where N<sub>r</sub> = 10, 12 or 14 rounds for 128-, 192- or 256-bit keys. Each new word is formed from the previous word (rotated, substituted and XORed with a round constant every fourth word) XOR the word four positions earlier.</div>` },

{ id: "2022-36", year: 2022, no: 36, subject: "ethics", topic: "Engineering as experimentation",
q: `Consider the following statements regarding engineers as responsible experimenters :<ol><li>It includes a conscientious commitment to live by moral values.</li><li>It can be accountable for the results of the project.</li><li>It restricts free-personal involvement in all steps of the project or product development.</li><li>It includes constant awareness of the progress of the experiment and readiness to monitor the side effects, if any.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "3 and 4 only", "1, 2 and 4 only", "1, 2, 3 and 4"], ans: 2,
analysis: `<h3>Answer: (c) 1, 2 and 4 only</h3><p>Martin and Schinzinger view engineering as social experimentation; a responsible experimenter shows four traits: conscientiousness, comprehensive perspective (awareness), autonomy (moral autonomy and personal involvement) and accountability.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Conscientiousness: commitment to live by moral values, including protecting the safety and rights of those affected.</li>
<li><b>2 (yes):</b> Accountability: willingness to answer for the results.</li>
<li><b>3 (no):</b> Responsible experimenters have <b>free, personal involvement</b> (autonomy) in all steps; it is not restricted.</li>
<li><b>4 (yes):</b> Comprehensive perspective: awareness of the experiment's progress and readiness to monitor side effects.</li></ul>
<div class="tip">Informed consent of those affected is the key ethical condition for treating engineering as social experimentation.</div>` },

{ id: "2022-37", year: 2022, no: 37, subject: "ethics", topic: "Capabilities approach",
q: `Which one of the following is NOT included in Nussbaum's basic human functional capabilities ?`,
opts: ["Being able to live a human life of normal length", "Being able to use senses, imagine, think, and reason", "Being able to laugh, play, and enjoy recreational activities", "Being able to earn livelihood and live peacefully"], ans: 3,
analysis: `<h3>Answer: (d) Being able to earn livelihood and live peacefully</h3><p>Martha Nussbaum's ten central capabilities: life (normal length), bodily health, bodily integrity, senses-imagination-thought, emotions, practical reason, affiliation, other species, play, and control over one's environment (political and material). "Earning a livelihood and living peacefully" is not listed as such.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> is "life".</li><li><b>(b)</b> is "senses, imagination and thought".</li><li><b>(c)</b> is "play".</li></ul>
<div class="tip">The capabilities approach (Amartya Sen, Nussbaum) judges development by what people are able to do and be; it underpins the UNDP's Human Development Index.</div>` },

{ id: "2022-38", year: 2022, no: 38, subject: "ethics", topic: "Professional virtues",
q: `Which one of the following is NOT a type of virtue for responsible professionalism`,
opts: ["Public-spirited virtue", "Teamwork virtue", "Self-realization virtue", "Self-direction virtue"], ans: 2,
analysis: `<h3>Answer: (c) Self-realization virtue</h3><p>Martin and Schinzinger group the virtues of responsible professionalism into four types: <b>public-spirited</b> virtues (benefiting others, non-maleficence), <b>proficiency</b> virtues (competence, diligence), <b>teamwork</b> virtues (cooperation, loyalty, leadership) and <b>self-governance (self-direction)</b> virtues (honesty, integrity, courage). "Self-realization" is not one of them.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are among the four types.</li></ul><div class="key">Examples of each type: public-spirited (beneficence, justice to all, generosity); proficiency (competence, diligence, creativity); teamwork (collegiality, cooperativeness, loyalty, respect for authority); self-governance (moral understanding and moral will, integrity, honesty, courage, self-respect).</div>` },

{ id: "2022-39", year: 2022, no: 39, subject: "ethics", topic: "Moral tests",
q: `Which one of the following is NOT Davis' eight moral tests ?`,
opts: ["Harm test", "Acceptability test", "Virtue test", "Professional test"], ans: 1,
analysis: `<h3>Answer: (b) Acceptability test</h3><p>Michael Davis's tests for checking a tentative decision: harm test, publicity test, defensibility test, reversibility test, virtue test, professional test, colleague test and organisation test. "Acceptability test" is not among them.</p>
<table><tr><th>Test</th><th>Question asked</th></tr><tr><td>Harm</td><td>Does this option do less harm than the alternatives?</td></tr><tr><td>Publicity</td><td>Would I want my choice reported in the newspaper?</td></tr><tr><td>Defensibility</td><td>Could I defend it before a committee of peers?</td></tr><tr><td>Reversibility</td><td>Would I think it fair if I were the one affected?</td></tr><tr><td>Virtue</td><td>What would I become if I chose this often?</td></tr><tr><td>Professional</td><td>What would my profession's ethics committee say?</td></tr><tr><td>Colleague</td><td>What do my colleagues say?</td></tr><tr><td>Organisation</td><td>What does my organisation's ethics office say?</td></tr></table>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> are Davis tests.</li></ul>` },

{ id: "2022-40", year: 2022, no: 40, subject: "ethics", topic: "Corporate social responsibility", doubt: true,
q: `Arrange the following in hierarchical order as suggested by Carroll in the four-part model of corporate social responsibility ?<ol><li>Economic</li><li>Philanthropic</li><li>Legal</li><li>Ethical</li></ol>`,
opts: ["2, 4, 3, 1", "4, 3, 1, 2", "2, 1, 3, 4", "1, 3, 4, 2"], ans: 0,
analysis: `<h3>Answer: (a) 2, 4, 3, 1 (official key)</h3><p>Archie Carroll's CSR pyramid (1991) has four layers. Read from the <b>top</b> down: philanthropic (be a good corporate citizen, desired), ethical (do what is right, expected), legal (obey the law, required), economic (be profitable, the foundation, required). The key lists this top-down order.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> and <b>(c)</b> mix the layers out of order.</li><li><b>(d)</b> 1, 3, 4, 2 is the same hierarchy read bottom-up.</li></ul>
<div class="note">In doubt (key followed). Carroll's pyramid is usually described from its base: economic, legal, ethical, philanthropic, which is option (d) and was our own answer. Options (a) and (d) state the same hierarchy in opposite directions; the question does not say which way to read it.</div>
<div class="tip">India: Section 135 of the Companies Act, 2013 makes CSR spending (2% of average net profit) mandatory for companies above set thresholds.</div><h3>The four layers, bottom to top</h3><ul><li><b>1 Economic</b> (base): be profitable; required by society, since everything else rests on it.</li><li><b>3 Legal</b>: obey the law, society's codified rules; required.</li><li><b>4 Ethical</b>: do what is right and fair beyond the law, avoid harm; expected.</li><li><b>2 Philanthropic</b> (top): contribute to the community and quality of life; desired.</li></ul>` },

{ id: "2022-41", year: 2022, no: 41, subject: "ethics", topic: "Engineering organisations", selfCorrected: true,
q: `The Engineers for a Sustainable World (ESW) meant for using the professional talents to create a more sustainable world was founded in`,
opts: ["1999", "2000", "2001", "2002"], ans: 3,
analysis: `<h3>Answer: (d) 2002</h3><p>Engineers for a Sustainable World, a US non-profit network of student chapters and professionals, was founded in 2002 (per the official key) to apply engineering skills to sustainability through projects, education and outreach.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1999, <b>(b)</b> 2000 and <b>(c)</b> 2001 are earlier than its founding.</li></ul>
<div class="tip">Related organisations: Engineers Without Borders (Médecins Sans Frontières model, France 1980s; EWB-USA 2002), and the World Federation of Engineering Organizations (WFEO), whose Code of Ethics stresses sustainability. 4 March is UNESCO's World Engineering Day for Sustainable Development.</div>` },

{ id: "2022-42", year: 2022, no: 42, subject: "ethics", topic: "Labour rights",
q: `Which one of the following is NOT covered under the International Labour Organization declaration on fundamental principles and rights at work (1998) ?`,
opts: ["Freedom of association and the right to collective bargaining", "The elimination of forced and compulsory labour", "The abolition of child labour", "The global compact on migration"], ans: 3,
analysis: `<h3>Answer: (d) The global compact on migration</h3><p>The ILO's 1998 Declaration commits all members to four categories of fundamental rights: freedom of association and collective bargaining; elimination of forced labour; abolition of child labour; elimination of discrimination in employment. In 2022 a fifth was added: a safe and healthy working environment.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> are core principles.</li></ul>
<p>The Global Compact for Safe, Orderly and Regular Migration is a separate, non-binding UN agreement adopted at Marrakech in 2018.</p>
<div class="tip">India has ratified six of the ten fundamental ILO conventions; it has not ratified Nos. 87 and 98 (freedom of association, collective bargaining) or the two OSH conventions.</div>` },

{ id: "2022-43", year: 2022, no: 43, subject: "ethics", topic: "Business ethics", selfCorrected: true,
q: `Which one of the following does NOT come under business ethics ?`,
opts: ["Avoid breaking the law", "Avoid actions that are bad for one's image", "Avoid action", "Avoid conflict"], ans: 3,
analysis: `<h3>Answer: (d) Avoid conflict</h3><p>Textbook lists of what business ethics asks of managers include: avoid breaking the law, avoid actions that are bad for the company's image, and avoid actions that harm others (sometimes summarised as "avoid action" in doubtful cases, i.e. "when in doubt, don't"). Avoiding <b>conflict</b> as such is not an ethical principle; ethical behaviour sometimes requires conflict, such as refusing an unethical instruction or blowing the whistle.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Legal compliance is the minimum of business ethics.</li><li><b>(b)</b> Avoiding actions that damage reputation is part of it.</li><li><b>(c)</b> Refraining from questionable action is part of it.</li></ul>` },

{ id: "2022-44", year: 2022, no: 44, subject: "ethics", topic: "CERES principles",
q: `Which one of the following principles refers to whom may be affected by the actions of the company that affect health, safety, or the environment and refrain from taking reprisals against employees who report dangerous incidents to management or appropriate authorities ?`,
opts: ["Safe product and service", "Informing the public", "Environmental restoration", "Risk reduction"], ans: 1,
analysis: `<h3>Answer: (b) Informing the public</h3><p>The CERES principle "Informing the public" commits a company to inform, in a timely manner, everyone who may be affected by conditions caused by the company that might endanger health, safety or the environment, and not to take reprisals against employees who report dangerous incidents or conditions to management or to authorities (see Q9).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Safe products and services: reduce products that cause harm and inform consumers of impacts.</li><li><b>(c)</b> Environmental restoration: correct conditions the company has caused.</li><li><b>(d)</b> Risk reduction: minimise environmental, health and safety risks through safe technologies and emergency preparedness.</li></ul>` },

{ id: "2022-45", year: 2022, no: 45, subject: "ca", topic: "Defence",
q: `The Defence Research and Development Organization (DRDO) has successfully test-fired medium-range subsonic cruise missile Nirbhay from the Integrated Test Range (ITR) at`,
opts: ["Chandipur, Odisha", "Cuddalore, Tamil Nadu", "Nellore, Andhra Pradesh", "Digha, West Bengal"], ans: 0,
analysis: `<h3>Answer: (a) Chandipur, Odisha</h3><p>Nirbhay, DRDO's long-range subsonic cruise missile (range about 1,000 km, terrain-hugging flight), has been tested from the Integrated Test Range at Chandipur, Odisha. Its successor programme, the Indigenous Technology Cruise Missile (ITCM), with an indigenous Manik turbofan engine, was tested from Chandipur in April 2024.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Cuddalore, <b>(c)</b> Nellore and <b>(d)</b> Digha do not host DRDO's missile test range.</li></ul>
<div class="tip">Other test sites: Dr A.P.J. Abdul Kalam Island (Wheeler Island), Odisha, for long-range ballistic missiles (Agni); Pokhran for army systems.</div>` },

{ id: "2022-46", year: 2022, no: 46, subject: "ca", topic: "Sports awards",
q: `Which one of the following is NOT correct regarding the Khel Ratna Award ?`,
opts: ["The award was inaugurated in 1991-92", "The award comprises a medallion, a certificate, and a cash prize of ₹15 lakh", "The first recipient of the Khel Ratna was chess legend, Viswanathan Anand", "The award renamed as Major Dhyan Chand Khel Ratna Award"], ans: 1,
analysis: `<h3>Answer: (b) cash prize of ₹15 lakh</h3><p>The Khel Ratna's cash prize was raised from ₹7.5 lakh to <b>₹25 lakh</b> in 2020, so "₹15 lakh" is wrong.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Correct: instituted in 1991–92.</li><li><b>(c)</b> Correct: Viswanathan Anand was the first recipient (1991–92).</li><li><b>(d)</b> Correct: renamed the Major Dhyan Chand Khel Ratna Award in August 2021.</li></ul>
<p><b>Latest (as of 2026):</b> the 2024 awards (presented 17 January 2025) went to Manu Bhaker, D. Gukesh, Harmanpreet Singh and Praveen Kumar. No Khel Ratna was given for 2025.</p><div class="tip">Other national sports awards: Arjuna Award (₹15 lakh since 2020), Dronacharya Award (coaches), Major Dhyan Chand Award for Lifetime Achievement, Rashtriya Khel Protsahan Puruskar, and the Maulana Abul Kalam Azad (MAKA) Trophy for universities.</div>` },

{ id: "2022-47", year: 2022, no: 47, subject: "ca", topic: "Business rankings",
q: `How many Indian companies have found a place in 2021 Fortune's Global 500 list ?`,
opts: ["Three", "Five", "Seven", "Nine"], ans: 2,
analysis: `<h3>Answer: (c) Seven</h3><p>Seven Indian companies were in the 2021 Fortune Global 500: Reliance Industries (the highest, at 155), State Bank of India, Indian Oil, ONGC, Rajesh Exports, Tata Motors and Bharat Petroleum.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Three, <b>(b)</b> five and <b>(d)</b> nine do not match the 2021 list.</li></ul>
<p><b>Latest (as of 2026):</b> the 2025 list included nine Indian companies (five public sector, four private), led by Reliance at 88 and LIC at 95.</p><div class="key">The Fortune Global 500 ranks companies by total revenue for the fiscal year. Walmart has topped it most years. Indian public sector firms (LIC, SBI, IOC, ONGC, BPCL) dominate India's entries alongside Reliance and Tata Motors.</div>` },

{ id: "2022-48", year: 2022, no: 48, subject: "ca", topic: "Banking reforms",
q: `Which one of the following is NOT important initiatives under EASE 4·0 ?`,
opts: ["Smart lending for aspiring India", "New age 24x7 banking with resilient technology", "Collaborative banking for synergistic outcomes", "Parameters of FI-Index"], ans: 3,
analysis: `<h3>Answer: (d) Parameters of FI-Index</h3><p>EASE (Enhanced Access and Service Excellence) is the public sector bank reforms agenda by the Department of Financial Services and the Indian Banks' Association. EASE 4.0 (2021–22) themes included tech-enabled smart lending for aspiring India, new-age 24×7 banking with resilient technology, collaborative banking for synergistic outcomes, and institutionalising prudent banking. The Financial Inclusion (FI) Index is an RBI index, not an EASE initiative.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> are EASE 4.0 themes.</li></ul>
<div class="tip">RBI's FI-Index (launched 2021) scores access, usage and quality on 0–100; it was 67.0 in March 2025.</div>
<div class="note">Unverified: the March 2025 FI-Index value is as reported in news summaries of the RBI release.</div>` },

{ id: "2022-49", year: 2022, no: 49, subject: "ca", topic: "Pension reforms",
q: `Which one of the following statements is NOT correct regarding the Pension Fund Regulatory and Development Authority (PFRDA) ?`,
opts: ["It has increased the entry age for the National Pension System (NPS) from 60 years to 65 years", "Earlier the eligible age to invest in NPS was 18-65 years which has now been revised to 18-70 years", "As per the revised norms, any Indian Citizen, resident or non-resident and Overseas Citizen of India (OCI) between the age of 65-70 years can join NPS", "Subscribers can continue or defer their NPS Account up to the age of 75 years"], ans: 0,
analysis: `<h3>Answer: (a) It has increased the entry age for the NPS from 60 years to 65 years</h3><p>In August 2021 PFRDA raised the maximum entry age for NPS from <b>65 to 70</b> years (not 60 to 65).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Correct: eligibility changed from 18–65 to 18–70.</li><li><b>(c)</b> Correct: citizens (resident or non-resident) and OCIs aged 65–70 may join.</li><li><b>(d)</b> Correct: those joining after 65 can continue or defer up to age 75.</li></ul>
<div class="tip">The Unified Pension Scheme (UPS) for central government employees took effect on 1 April 2025 as an option within NPS, assuring 50% of the average basic pay of the last 12 months after 25 years of service.</div>` },

{ id: "2022-50", year: 2022, no: 50, subject: "ca", topic: "Gems",
q: `World's largest star sapphire cluster has been found in`,
opts: ["Rajkot, India", "Ratnapura, Sri Lanka", "Pretoria, South Africa", "Brisbane, Australia"], ans: 1,
analysis: `<h3>Answer: (b) Ratnapura, Sri Lanka</h3><p>In 2021 the world's largest star sapphire cluster, about 510 kg (2.5 million carats) and nicknamed the "Serendipity Sapphire" / "Queen of Asia", was found by a well-digger in Ratnapura ("city of gems"), Sri Lanka.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Rajkot, <b>(c)</b> Pretoria and <b>(d)</b> Brisbane are not where it was found.</li></ul>
<div class="tip">Sapphire and ruby are both corundum (Al<sub>2</sub>O<sub>3</sub>, Mohs hardness 9); traces of iron and titanium give blue sapphire, chromium gives ruby. "Star" stones show asterism from needle-like rutile inclusions.</div>` }
);
