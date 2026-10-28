// ESE 2021 Prelims Paper I, Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2021-26", year: 2021, no: 26, subject: "ict", topic: "E-governance assessment",
q: `Which one of the following frameworks is developed to assess the value of the increasing investments made on e-governance projects in terms of service orientation, technology architecture, replicability and sustainability in various states across the country ?`,
opts: ["eTechnology Group@IMRB", "e-Governance Assessment Framework", "Sustainable Access in Rural India", "e-Governance Action Plan"], ans: 1,
analysis: `<h3>Answer: (b) e-Governance Assessment Framework</h3><p>The e-Governance Assessment Framework (EAF), developed by the Department of IT with the Indian Institute of Management, Ahmedabad and others (2004–05), assesses e-governance projects on service orientation, technology, sustainability, cost-effectiveness and replicability, so that the value of rising investments can be judged and good projects scaled up.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> eTechnology Group@IMRB is a market research unit that conducted e-readiness and assessment surveys, not the framework itself.</li>
<li><b>(c)</b> Sustainable Access in Rural India (SARI) was a rural internet kiosk project in Madurai district.</li>
<li><b>(d)</b> The e-Governance Action Plan (2003) was a plan, not an assessment framework.</li></ul>
<div class="tip">Later assessments: the National e-Governance Service Delivery Assessment (NeSDA) by DARPG (2019, 2021, 2023), which ranks states' online service portals.</div>` },

{ id: "2021-27", year: 2021, no: 27, subject: "ict", topic: "Cloud computing",
q: `Which one of the following services does NOT come under category of Cloud computing ?`,
opts: ["IaaS (Infrastructure as a Service)", "SaaS (Software as a Service)", "PaaS (Platform as a Service)", "BDaaS (Big data as a Service)"], ans: 3,
analysis: `<h3>Answer: (d) BDaaS (Big data as a Service)</h3><p>The NIST definition of cloud computing (SP 800-145) recognises three <b>service models</b>: IaaS (virtual machines, storage, networks: AWS EC2), PaaS (development platforms: Google App Engine) and SaaS (applications: Gmail, Office 365). "Big data as a service" is a marketing label for an offering built on these, not a basic service category.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> are the three standard service models.</li></ul>
<div class="tip">NIST deployment models: public, private, community, hybrid. Essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service. India's government cloud is MeghRaj.</div>` },

{ id: "2021-28", year: 2021, no: 28, subject: "ict", topic: "Cryptography",
q: `What is the key size of Data Encryption Standard algorithm in cryptography ?`,
opts: ["56 bit", "62 bit", "168 bit", "128 bit"], ans: 0,
analysis: `<h3>Answer: (a) 56 bit</h3><p>DES (1977, from IBM's Lucifer) is a 64-bit block cipher with a 64-bit key of which 8 bits are parity, leaving an effective key of <b>56 bits</b>. Its 16-round Feistel structure was broken by brute force in 1998 (EFF's "Deep Crack"), so DES is obsolete.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 62 bits is not used by DES.</li>
<li><b>(c)</b> 168 bits is the key length of Triple DES (three 56-bit keys).</li>
<li><b>(d)</b> 128 bits is the smallest AES key (AES also uses 192 and 256).</li></ul>
<div class="tip">AES (Rijndael, 2001) replaced DES. Public-key systems: RSA, elliptic-curve cryptography. NIST approved its first post-quantum standards (ML-KEM, ML-DSA, SLH-DSA) in August 2024.</div>` },

{ id: "2021-29", year: 2021, no: 29, subject: "ethics", topic: "Codes of conduct", selfCorrected: true,
q: `Which one of the following statements is NOT correct about the codes of conduct ?`,
opts: ["These cover general guiding principles", "Their purpose is to regulate the conduct of members on various transactions", "These are the broader sets of principles that are designed to inform specific laws or government actions", "These translate the values into specific behavioral standards, keeping in mind the possible reflection on the stakeholders' interest"], ans: 0,
analysis: `<h3>Answer: (a) These cover general guiding principles</h3><p>A <b>code of ethics</b> states general guiding principles and values; a <b>code of conduct</b> translates those values into specific rules of behaviour for particular situations. So "these cover general guiding principles" describes a code of ethics, not a code of conduct.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Codes of conduct do regulate members' behaviour in specific transactions (gifts, conflicts of interest, use of property).</li>
<li><b>(c)</b> The key treats this as a correct statement: codes of conduct for public servants (e.g. the Central Civil Services (Conduct) Rules) are framed to give effect to broader principles and inform specific rules.</li>
<li><b>(d)</b> Turning values into specific standards with regard to stakeholders is the defining purpose of a code of conduct.</li></ul>
<div class="tip">Second ARC (4th Report, "Ethics in Governance"): a code of ethics sets broad principles (integrity, impartiality); a code of conduct lays down precise do's and don'ts.</div>` },

{ id: "2021-30", year: 2021, no: 30, subject: "ethics", topic: "Moral thinkers",
q: `The famous statement "The weak can never forgive. Forgiveness is the attribute of the strong" is given by`,
opts: ["Swami Vivekananda", "Mahatma Gandhi", "Martin Luther", "Sri Aurobindo"], ans: 1,
analysis: `<h3>Answer: (b) Mahatma Gandhi</h3><p>Gandhi wrote this in <i>Young India</i> (2 April 1931): "The weak can never forgive. Forgiveness is the attribute of the strong." It expresses his view that non-violence and forgiveness require courage, not weakness.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Vivekananda is known for "Arise, awake and stop not till the goal is reached."</li>
<li><b>(c)</b> Martin Luther (the 16th-century reformer) is not the author; the quote is sometimes misattributed to Martin Luther King Jr., who drew on Gandhi.</li>
<li><b>(d)</b> Sri Aurobindo wrote on integral yoga and spiritual evolution.</li></ul>` },

{ id: "2021-31", year: 2021, no: 31, subject: "ethics", topic: "Ethical theories",
q: `Match the following :<table><tr><th>I</th><th>II</th></tr><tr><td>A. Act Utilitarian Theory</td><td>1. John Locke</td></tr><tr><td>B. Rule Utilitarian Theory</td><td>2. Immanuel Kant</td></tr><tr><td>C. Duty Ethics Theory</td><td>3. Richard Brandt</td></tr><tr><td>D. The Rights Theory</td><td>4. J. S. Mill</td></tr></table>`,
opts: ["A–4, B–3, C–1, D–2", "A–4, B–3, C–2, D–1", "A–1, B–2, C–3, D–4", "A–1, B–2, C–4, D–3"], ans: 1,
analysis: `<h3>Answer: (b) A–4, B–3, C–2, D–1</h3><table><tr><th>Theory</th><th>Thinker</th><th>Core idea</th></tr>
<tr><td>Act utilitarianism</td><td>J.S. Mill</td><td>Judge each act by its consequences for overall happiness</td></tr>
<tr><td>Rule utilitarianism</td><td>Richard Brandt</td><td>Follow the rules whose general observance maximises good</td></tr>
<tr><td>Duty ethics</td><td>Immanuel Kant</td><td>Act only on maxims you could will as universal law; treat persons as ends</td></tr>
<tr><td>Rights ethics</td><td>John Locke</td><td>Natural rights to life, liberty and property</td></tr></table>
<h3>Why not the others</h3><ul><li><b>(a)</b> swaps Kant and Locke.</li><li><b>(c)</b> and <b>(d)</b> give Locke act utilitarianism.</li></ul>
<div class="tip">These are the four theories used in Martin and Schinzinger's engineering ethics text, often with virtue ethics (Aristotle) as a fifth.</div>` },

{ id: "2021-32", year: 2021, no: 32, subject: "ethics", topic: "Virtues",
q: `Which philosopher suggested Wisdom, Courage, Temperance and Justice as four 'cardinal virtues' ?`,
opts: ["Aristotle", "Aquinas", "Socrates", "Plato"], ans: 3,
analysis: `<h3>Answer: (d) Plato</h3><p>In <i>The Republic</i> Plato names four virtues of the ideal state and soul: wisdom (of the rulers, reason), courage (of the guardians, spirit), temperance (moderation, harmony of all parts) and justice (each part doing its own work). They were later called the "cardinal" virtues.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Aristotle discussed many virtues as the mean between extremes (courage between rashness and cowardice), not this fourfold list as his own.</li>
<li><b>(b)</b> Thomas Aquinas adopted the four cardinal virtues and added the three theological virtues (faith, hope, charity), but they originate with Plato.</li>
<li><b>(c)</b> Socrates held that virtue is knowledge; he did not set out this list.</li></ul>` },

{ id: "2021-33", year: 2021, no: 33, subject: "ethics", topic: "Groupthink",
q: `'Groupthink', a noteworthy feature of the organizational settings within which engineers work and deliberate in groups, has been suggested by`,
opts: ["Abraham Maslow", "Irving Janis", "B. F. Skinner", "Christopher Meyers"], ans: 1,
analysis: `<h3>Answer: (b) Irving Janis</h3><p>Irving Janis (<i>Victims of Groupthink</i>, 1972) described groupthink: highly cohesive groups suppress dissent and critical thinking to preserve harmony, leading to bad decisions (Bay of Pigs; later the Challenger launch decision).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Maslow proposed the hierarchy of needs.</li>
<li><b>(c)</b> Skinner developed operant conditioning (behaviourism).</li>
<li><b>(d)</b> Christopher Meyers writes on professional and medical ethics, not groupthink.</li></ul>
<div class="tip">Symptoms: illusion of invulnerability, collective rationalisation, belief in the group's morality, stereotyping outsiders, self-censorship, illusion of unanimity, pressure on dissenters, self-appointed "mindguards". Remedies: a devil's advocate, outside experts, leaders who withhold their views at first.</div>` },

{ id: "2021-34", year: 2021, no: 34, subject: "ethics", topic: "Integrity",
q: `Select inappropriate statement about integrity`,
opts: ["It involves the discovery and communication of the truth", "It leads to a concern for the whole situation in decision-making, including an awareness of the professional's own attitudes, standards and value systems", "It is simply truthfulness or avoidance of lying", "It ensures that the professional does not accept 'moral distance'"], ans: 2,
analysis: `<h3>Answer: (c) It is simply truthfulness or avoidance of lying</h3><p>Integrity is much broader than truthfulness: it is the consistency and wholeness of one's values, words and actions across situations, including taking responsibility for the whole situation.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Integrity does involve seeking out and communicating the truth.</li>
<li><b>(b)</b> It brings concern for the whole situation and self-awareness of one's own values into decisions.</li>
<li><b>(d)</b> A person of integrity does not accept "moral distance", i.e. does not disown responsibility for effects of their work that are remote in time or place.</li></ul>` },

{ id: "2021-35", year: 2021, no: 35, subject: "ethics", topic: "Whistle-blowing",
q: `Whistleblowing in an organizational set up affects :<ol><li>Peer professional relationships</li><li>Relationships with management</li><li>Family relations</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 and 2 only", "2 only", "1, 2 and 3", "1 only"], ans: 2,
analysis: `<h3>Answer: (c) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Colleagues may see the whistle-blower as disloyal; peer relationships often break down.</li>
<li><b>2 (yes):</b> Relations with management suffer: retaliation, isolation, demotion or dismissal are common.</li>
<li><b>3 (yes):</b> Job loss, legal battles, stress and public attention put heavy strain on family life.</li></ul>
<div class="tip">This is why legal protection matters (India's Whistle Blowers Protection Act, 2014; the Companies Act, 2013 requires a vigil mechanism in listed companies; SEBI's informant mechanism). See 2018 Q78 and 2019 Q86, Q89.</div>` },

{ id: "2021-36", year: 2021, no: 36, subject: "ethics", topic: "Ethics of care",
q: `Carol Gilligan is associated with`,
opts: ["the natural justice", "the responsibility", "the principle of loyalty", "the ethics of care"], ans: 3,
analysis: `<h3>Answer: (d) the ethics of care</h3><p>Carol Gilligan (<i>In a Different Voice</i>, 1982) argued that Kohlberg's stages of moral development, based on justice and rules, overlooked an "ethics of care" centred on relationships, responsibilities and context, which she found especially in women's moral reasoning.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Natural justice (hear the other side; no one should judge their own cause) is a legal principle.</li>
<li><b>(b)</b> Responsibility is part of care ethics but not the name of her theory.</li>
<li><b>(c)</b> Loyalty is discussed by Josiah Royce and in engineering ethics (see 2019 Q99), not Gilligan.</li></ul>` },

{ id: "2021-37", year: 2021, no: 37, subject: "ethics", topic: "Illicit liquor",
q: `Hooch &amp; Bootlegging refer to`,
opts: ["the prohibition law on unethical practices related to liquor", "laws against giving money to beggars as a generous act", "food adulteration rules", "laws on checking the illegal business of duplicate goods"], ans: 0,
analysis: `<h3>Answer: (a) the prohibition law on unethical practices related to liquor</h3><p>"Hooch" is cheap, often illicitly made liquor; "bootlegging" is the illegal making, transporting or selling of liquor (the term comes from smugglers hiding flasks in their boots, and was widespread during US Prohibition, 1920–33). Both relate to illegal liquor practices that prohibition laws seek to stop.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Laws on begging have nothing to do with liquor.</li>
<li><b>(c)</b> Food adulteration is covered by the Food Safety and Standards Act, 2006.</li>
<li><b>(d)</b> Counterfeit goods are covered by trade mark and consumer laws.</li></ul>
<div class="tip">Spurious hooch tragedies in India (e.g. Kallakurichi, Tamil Nadu, June 2024, over 60 deaths) are usually caused by methanol contamination. Prohibition states include Gujarat, Bihar, Mizoram, Nagaland and Lakshadweep.</div>` },

{ id: "2021-38", year: 2021, no: 38, subject: "ca", topic: "Sports",
q: `The Ministry of Sports and Youth Affairs has recently approved the inclusion of four indigenous games to be part of Khelo India Youth Games 2021. Which one of the following is NOT included ?`,
opts: ["Thang-Ta", "Lagori", "Kalaripayattu", "Gatka"], ans: 1,
analysis: `<h3>Answer: (b) Lagori</h3><p>In December 2020 the Sports Ministry added four indigenous games to the Khelo India Youth Games 2021 (held in Haryana in 2022): <b>Gatka</b> (Sikh martial art, Punjab), <b>Kalaripayattu</b> (Kerala), <b>Thang-Ta</b> (Manipuri martial art) and <b>Mallakhamba</b> (pole gymnastics, Maharashtra/Madhya Pradesh).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Thang-Ta, <b>(c)</b> Kalaripayattu and <b>(d)</b> Gatka were included.</li></ul>
<p>Lagori (seven stones, pittu) is a traditional ball game but was not one of the four.</p>
<div class="tip">Khelo India Youth Games 2025 were held in Bihar. Yogasana was also added to Khelo India later.</div>` },

{ id: "2021-39", year: 2021, no: 39, subject: "ca", topic: "Agriculture innovation",
q: `Which one of the following is the latest in series being organized as the largest virtual gathering to create dialogues, and accelerate innovation in agriculture ?`,
opts: ["Agri-India Hackathon 2020", "National Agriculture Higher Education Project", "ENSURE", "National Mission for Sustainable Development"], ans: 0,
analysis: `<h3>Answer: (a) Agri-India Hackathon 2020</h3><p>The Agri-India Hackathon (October 2020), organised by Pusa Krishi (ICAR-IARI) with the Ministry of Agriculture, was billed as the largest virtual gathering to create dialogue and accelerate innovation in agriculture, inviting start-ups, students and farmers to solve farm problems.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> NAHEP (2017, ICAR and World Bank) improves agricultural universities, not a virtual gathering.</li>
<li><b>(c)</b> ENSURE is an NDDB portal for livestock (dairy) under the National Livestock Mission.</li>
<li><b>(d)</b> The National Mission for Sustainable <b>Agriculture</b> is one of the eight missions under the NAPCC; there is no "National Mission for Sustainable Development".</li></ul>` },

{ id: "2021-40", year: 2021, no: 40, subject: "ca", topic: "State schemes",
q: `Match the following :<table><tr><th>I</th><th>II</th></tr><tr><td>A. Utkarsh Bangla Scheme</td><td>1. West Bengal</td></tr><tr><td>B. Placement Linked Skill Training Programme</td><td>2. Rajasthan</td></tr><tr><td>C. SURYA Scheme</td><td>3. Haryana</td></tr><tr><td>D. Employment Linked Skill Training Programme</td><td>4. Assam</td></tr></table>`,
opts: ["A–2, B–3, C–4, D–1", "A–2, B–3, C–1, D–4", "A–1, B–4, C–3, D–2", "A–1, B–4, C–2, D–3"], ans: 2,
analysis: `<h3>Answer: (c) A–1, B–4, C–3, D–2</h3><table><tr><th>Scheme</th><th>State</th></tr><tr><td>Utkarsh Bangla (skill development, 2016)</td><td>West Bengal</td></tr><tr><td>Placement Linked Skill Training Programme</td><td>Assam (Assam Skill Development Mission)</td></tr><tr><td>SURYA scheme (skill training for youth)</td><td>Haryana</td></tr><tr><td>Employment Linked Skill Training Programme (ELSTP)</td><td>Rajasthan (Rajasthan Skill and Livelihoods Development Corporation)</td></tr></table>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(b)</b> place Utkarsh Bangla in Rajasthan.</li><li><b>(d)</b> swaps Haryana and Rajasthan.</li></ul>
<div class="note">Unverified: the Assam and Haryana pairings follow the official answer; state-level skill scheme names change often and could not all be confirmed from current sources.</div>` },

{ id: "2021-41", year: 2021, no: 41, subject: "ca", topic: "Crafts promotion",
q: `With a view to encourage and promote Indian artisans and their handicraft, Hunar Haat offers an effective platform. Where was the 22nd Hunar Haat held ?`,
opts: ["Jaipur", "Ferozpur", "Rampur", "Bharatpur"], ans: 2,
analysis: `<h3>Answer: (c) Rampur</h3><p>The 22nd Hunar Haat was held at Rampur, Uttar Pradesh, in January 2021, organised by the Ministry of Minority Affairs under the USTTAD scheme (Upgrading the Skills and Training in Traditional Arts/Crafts for Development), with the theme "Vocal for Local".</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Jaipur, <b>(b)</b> Ferozpur and <b>(d)</b> Bharatpur hosted other Hunar Haats or none; the 22nd was at Rampur.</li></ul>
<div class="tip">Hunar Haat began in 2016. After 2022 it gave way to the PM VIKAS scheme (2023) for minority artisans; the broader PM Vishwakarma scheme (September 2023) supports artisans in 18 traditional trades.</div>` },

{ id: "2021-42", year: 2021, no: 42, subject: "ca", topic: "Books",
q: `Which one of the following is NOT correct pair of Author-Book published in the year 2020 ?`,
opts: ["Arundhati Roy : Azadi", "Jairam Ramesh : A Chequered Brilliance", "Zadie Smith : Intimations", "Diane Cook : One Arranged Murder"], ans: 3,
analysis: `<h3>Answer: (d) Diane Cook : One Arranged Murder</h3><p><i>One Arranged Murder</i> (2020) is by <b>Chetan Bhagat</b>. Diane Cook's 2020 novel is <i>The New Wilderness</i> (Booker Prize shortlist).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Arundhati Roy's essay collection <i>Azadi</i> (2020) is correctly paired.</li>
<li><b>(b)</b> Jairam Ramesh's <i>A Chequered Brilliance: The Many Lives of V.K. Krishna Menon</i> (2019–20) is correct.</li>
<li><b>(c)</b> Zadie Smith's lockdown essays <i>Intimations</i> (2020) is correct.</li></ul><div class="tip">Booker Prize 2020 went to Douglas Stuart's <i>Shuggie Bain</i>. Booker 2025 went to David Szalay's <i>Flesh</i>; the International Booker 2025 went to Banu Mushtaq's <i>Heart Lamp</i> (translated from Kannada by Deepa Bhasthi), the first Kannada winner.</div>` },

{ id: "2021-43", year: 2021, no: 43, subject: "ca", topic: "National Education Policy",
q: `Which one of the following statements is NOT correct regarding the National Education Policy 2020 in India ?`,
opts: ["It proposes sweeping changes in the education system from pre-primary to PhD and skill development", "It states that universities from among top 100 in the world will be able to set up campuses in India", "It expects that India will achieve 60% GER by 2030", "It suggests NAAC to be merged with UGC and AICTE"], ans: 2,
analysis: `<h3>Answer: (c) It expects that India will achieve 60% GER by 2030</h3><p>NEP 2020's target for higher education is a gross enrolment ratio of <b>50% by 2035</b> (from 26.3% in 2018). For school education, it targets 100% GER from pre-school to secondary by 2030.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Correct: it covers everything from early childhood (5+3+3+4 structure) to research.</li>
<li><b>(b)</b> Correct: it allows top-ranked foreign universities to open campuses (UGC regulations of 2023; Southampton opened in Gurugram in 2024).</li>
<li><b>(d)</b> Treated as correct by the key: NEP proposes a single Higher Education Commission of India (HECI) replacing UGC and AICTE, with accreditation (NAAC's role) as one of its four verticals.</li></ul>
<div class="tip">India's higher education GER was 28.4% in AISHE 2021–22. The HECI Bill (Viksit Bharat Shiksha Adhishthan Bill) was introduced in Parliament in December 2025.</div>
<div class="note">Unverified: the status of the HECI legislation should be checked against the latest parliamentary record.</div>` },

{ id: "2021-44", year: 2021, no: 44, subject: "ca", topic: "NIRF",
q: `According to the National Institutional Ranking Framework 2020, which institute was on the top in overall ranking ?`,
opts: ["Indian Institute of Technology, Madras", "Indian Institute of Science, Bengaluru", "Indian Institute of Technology, Delhi", "Indian Institute of Technology, Bombay"], ans: 0,
analysis: `<h3>Answer: (a) Indian Institute of Technology, Madras</h3><p>IIT Madras topped the NIRF 2020 overall ranking (IISc Bengaluru second, IIT Delhi third). NIRF, launched by the Ministry of Education in 2015, ranks institutions on five parameters: teaching, learning and resources; research and professional practice; graduation outcomes; outreach and inclusivity; and perception.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> IISc was second overall (and first among universities).</li>
<li><b>(c)</b> IIT Delhi was third.</li>
<li><b>(d)</b> IIT Bombay was fourth.</li></ul>
<p><b>Latest update (as of 2026):</b> IIT Madras topped the overall NIRF 2025 ranking (released 4 September 2025) for the seventh year in a row, with IISc second and IIT Bombay third.</p>` },

{ id: "2021-45", year: 2021, no: 45, subject: "ca", topic: "Space missions", doubt: true,
q: `Consider the following statements about ingenuity :<ol><li>It is man's decades-long quest to fly a helicopter on Mars.</li><li>It is 0·6 metres tall and weigh less than 1·8 kg.</li><li>It aims to look for habitability.</li></ol>Which of the above statements is/are correct ?`,
opts: ["3 only", "1, 2 and 3", "1 and 2 only", "2 only"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2 and 3 (official key)</h3><p>Ingenuity was NASA's small helicopter carried to Mars with the Perseverance rover (landed in Jezero Crater, February 2021).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> On 19 April 2021 it made the first powered, controlled flight on another planet, fulfilling a long-standing goal.</li>
<li><b>2 (accepted):</b> It was about 0.49 m tall and weighed about 1.8 kg; the statement approximates this.</li>
<li><b>3 (accepted by the key):</b> The key treats this as correct, reading it as part of the Mars 2020 mission that searches for signs of past habitability and life.</li></ul>
<div class="note">In doubt (key followed). Ingenuity itself was a <b>technology demonstration</b> to prove flight in Mars's thin air; looking for habitability (and collecting rock samples) was Perseverance's job. Its height (0.49 m) and mass (1.8 kg) also do not exactly fit "0.6 m and less than 1.8 kg". On these grounds our own answer was (c) 1 and 2 only.</div>
<p><b>Later:</b> Ingenuity flew 72 times over three years; its mission ended in January 2024 after rotor-blade damage on its final flight (18 January 2024).</p>` },

{ id: "2021-46", year: 2021, no: 46, subject: "ca", topic: "Space",
q: `Name the NASA astronaut who after setting the record of 328-day stay on the International Space Station (ISS), returned through Earth's atmosphere and landed on the Kazakhstani desert on 6th Feb 2020`,
opts: ["Josh Cassada", "Jeanette Epps", "Christina Koch", "Peggy Whitson"], ans: 2,
analysis: `<h3>Answer: (c) Christina Koch</h3><p>Christina Koch spent 328 days on the ISS (March 2019 to 6 February 2020), the longest single spaceflight by a woman. She also took part in the first all-woman spacewalk with Jessica Meir (October 2019), and later flew around the Moon on Artemis II (April 2026).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Josh Cassada flew on SpaceX Crew-5 (2022–23).</li>
<li><b>(b)</b> Jeanette Epps flew to the ISS in 2024 (Crew-8).</li>
<li><b>(d)</b> Peggy Whitson holds the US record for <b>cumulative</b> time in space (over 675 days) and commanded Axiom-2 and Axiom-4 (the latter with India's Shubhanshu Shukla, June–July 2025).</li></ul>
<div class="tip">Longest single US flight: Frank Rubio, 371 days (2022–23). World record: Valeri Polyakov, 437 days on Mir.</div>` },

{ id: "2021-47", year: 2021, no: 47, subject: "ca", topic: "Migratory species",
q: `The Thirteenth Meeting of the Conference of the Parties to the Convention on the Conservation of Migratory Species of Wild Animals (CMS COP 13) in 2020 was held in`,
opts: ["Brazil", "India", "Indonesia", "Canada"], ans: 1,
analysis: `<h3>Answer: (b) India</h3><p>CMS COP13 was held in Gandhinagar, Gujarat, in February 2020, with the theme "Migratory species connect the planet and together we welcome them home" and the mascot "Gibi", the Great Indian Bustard. The Great Indian Bustard, Asian elephant and Bengal florican were added to Appendix I.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Brazil, <b>(c)</b> Indonesia and <b>(d)</b> Canada did not host COP13. (COP12 was in Manila, Philippines, 2017.)</li></ul>
<div class="tip">CMS (Bonn Convention, 1979) is under UNEP. COP14 was held in Samarkand, Uzbekistan (February 2024), the first in Central Asia.</div>` },

{ id: "2021-48", year: 2021, no: 48, subject: "ca", topic: "Government schemes 2020",
q: `Consider the following statements with respect to the schemes initiated by the Government of India in 2020.<ol><li>NISHTHA is a teachers training program.</li><li>SVANidhi is a scheme to facilitate artisans to access affordable working capital loan.</li><li>SATYABHAMA is a scheme to promote research and development in science and technology.</li><li>Manodarpan is a scheme to promote tourism in rural parts of India.</li></ol>`,
opts: ["1 and 3 only", "2 and 4 only", "3 and 4 only", "2 only"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 3 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> NISHTHA (National Initiative for School Heads' and Teachers' Holistic Advancement, 2019) is an integrated teacher training programme, moved online on DIKSHA in 2020.</li>
<li><b>2 (wrong):</b> PM SVANidhi (June 2020) gives collateral-free working-capital loans to <b>street vendors</b>, not artisans.</li>
<li><b>3 (correct):</b> SATYABHAMA (Science and Technology Yojana for Aatmanirbhar Bharat in Mining Advancement, Ministry of Mines, 2020) funds R&amp;D in mining and minerals.</li>
<li><b>4 (wrong):</b> Manodarpan (Ministry of Education, 2020) gives psychosocial support for students' mental health and well-being.</li></ul>
<p><b>Latest update (as of 2026):</b> PM SVANidhi was restructured and extended to March 2030 (Cabinet, 27 August 2025; outlay ₹7,332 crore), with loan tranches raised to ₹15,000, ₹25,000 and ₹50,000 and a UPI-linked RuPay credit card for good repayers.</p>` },

{ id: "2021-49", year: 2021, no: 49, subject: "ca", topic: "Records",
q: `Which iconic figure set a Guinness World Record in 2020 for receiving 1 million followers for debut on instagram in just 4 hours and 44 minutes ?`,
opts: ["Bong Joon-ho", "Amy Coney Barrett", "David Attenborough", "Sanna Marin"], ans: 2,
analysis: `<h3>Answer: (c) David Attenborough</h3><p>Naturalist Sir David Attenborough joined Instagram in September 2020 to spread his message on climate change and biodiversity (linked to his film <i>A Life on Our Planet</i>), and reached one million followers in 4 hours 44 minutes, a Guinness World Record at the time.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Bong Joon-ho directed <i>Parasite</i>, which won the Oscar for Best Picture in 2020.</li>
<li><b>(b)</b> Amy Coney Barrett joined the US Supreme Court in October 2020.</li>
<li><b>(d)</b> Sanna Marin became Finland's youngest prime minister in December 2019.</li></ul>` },

{ id: "2021-50", year: 2021, no: 50, subject: "ca", topic: "Infrastructure", doubt: true,
q: `Which one of the following statements is NOT correct about the Atal Tunnel ?`,
opts: ["It is the highest altitude tunnel in the world", "It was inaugurated on 03 October 2020 in Rohtang", "It connects Manali to Lahaul-Spiti valley", "It is capable of handling 5000 cars and 2500 trucks per day with maximum speed of 80 kmph"], ans: 3,
analysis: `<h3>Answer: (d) It is capable of handling 5000 cars and 2500 trucks per day with maximum speed of 80 kmph (official key)</h3><p>The Atal Tunnel (9.02 km, under the Rohtang Pass, built by the Border Roads Organisation) is designed for <b>3,000 cars and 1,500 trucks</b> a day at a maximum speed of 80 km/h, so (d) is wrong.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> The key accepts it. The tunnel is officially described as the world's longest highway tunnel above 10,000 feet (it is at about 3,000 m).</li>
<li><b>(b)</b> Correct: inaugurated by the Prime Minister on 3 October 2020.</li>
<li><b>(c)</b> Correct: it links Manali with the Lahaul-Spiti valley all year, cutting the road distance by about 46 km and time by 4–5 hours.</li></ul>
<div class="note">In doubt (key followed). Statement (a) is also inaccurate: the Atal Tunnel is the longest highway tunnel above 10,000 ft, not the highest-altitude tunnel in the world (several tunnels are higher, e.g. on the Qinghai-Tibet railway in China). The key treats only (d) as the incorrect statement.</div>` }
);
