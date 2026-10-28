// ESE 2023 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2023-26", year: 2023, no: 26, subject: "ict", topic: "Delay × bandwidth product",
q: `In a network, a transcontinental channel with a one-way latency of 50 ms and a bandwidth of 45 Mbps is able to hold how many bits that fit in the pipe approximately ?`,
opts: ["2·25 × 10<sup>6</sup> bits", "1·25 × 10<sup>6</sup> bits", "50·00 × 10<sup>6</sup> bits", "45·00 × 10<sup>6</sup> bits"], ans: 0,
analysis: `<h3>Answer: (a) 2·25 × 10<sup>6</sup> bits</h3><p>The <b>delay × bandwidth product</b> is the volume of the "pipe": how many bits are in flight on the link at once.</p>
<p>50 × 10<sup>−3</sup> s × 45 × 10<sup>6</sup> bit/s = <b>2.25 × 10<sup>6</sup> bits</b> (about 280 KB).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 1·25 × 10<sup>6</sup></b>: does not follow from the numbers.</li>
<li><b>(c) 50 × 10<sup>6</sup></b> and <b>(d) 45 × 10<sup>6</sup></b>: simply repeat the latency or bandwidth figure, without multiplying.</li></ul>
<div class="key">Why it matters: a sender should have about one RTT × bandwidth of data outstanding to keep the pipe full. That is why TCP window sizes must grow on long, fast links ("long fat networks"), using the window-scaling option.</div>` },

{ id: "2023-27", year: 2023, no: 27, subject: "ict", topic: "Internet architecture",
q: `Consider the following statements for significance of prominence in the Internet architecture :<ol><li>Programmers are free to define new channel abstractions or applications that run on top of any of the existing protocols.</li><li>It defines a common method for exchanging packets among a wide collection of networks.</li><li>It allows someone to propose a new protocol to be included in the architecture.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Peterson &amp; Davie describe three notable features of the Internet (TCP/IP) architecture.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> it does not require strict layering. An application is free to bypass the transport layer and run directly on IP or on any network below, so programmers can define new channel abstractions or applications on top of any existing protocol.</li>
<li><b>2 (correct):</b> it is shaped like an <b>hourglass</b>: wide at the top (many applications) and bottom (many network technologies), narrow at the waist, where <b>IP</b> is the single common method for exchanging packets among all networks.</li>
<li><b>3 (correct):</b> anyone can propose a new protocol for inclusion. The IETF's rule is "rough consensus and running code": a specification plus at least one (preferably two) working implementations.</li></ul>
<div class="key">Compare OSI: seven strict layers designed by committee before implementation. TCP/IP: four layers (link, internet, transport, application), designed through working code. This is why TCP/IP won.</div>` },

{ id: "2023-28", year: 2023, no: 28, subject: "ict", topic: "Network failures",
q: `Consider the following statements regarding the failure in the network :<ol><li>Bit errors typically occur because outside forces, such as lightning strikes, power surges, and microwave ovens, interfere with the transmission of data.</li><li>One of the main difficulties in dealing with lost packets is distinguishing between a packet that is indeed lost and one that is merely late in arriving at the destination.</li><li>The failure can be caused by software that crashes, a power failure, or a reckless backhoe operator.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Peterson &amp; Davie list three classes of network failure that protocols must handle.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> <b>bit errors</b>: a 1 becomes a 0 or the reverse, usually caused by outside interference (lightning, power surges, microwave ovens). They are detected with checksums and CRC.</li>
<li><b>2 (correct):</b> <b>packet loss</b>: a packet may be dropped (e.g. a full router buffer). The hard part is telling a lost packet from a late one, which is why retransmission timeouts must be set carefully.</li>
<li><b>3 (correct):</b> <b>node and link failures</b>: a crashed router, a power failure, or a backhoe cutting a fibre cable. Routing protocols then find another path.</li></ul>
<div class="key">The responses: error detection and correction (CRC, FEC); reliable delivery (acknowledgements, timeouts, retransmission, as in TCP); and adaptive routing (OSPF, BGP) around failed links.</div>` },

{ id: "2023-29", year: 2023, no: 29, subject: "ethics", topic: "Human values",
q: `Which one of the following statements is NOT correct regarding human values ?`,
opts: ["Values mean an in-built mechanism which distinguishes the right from the wrong", "Values provide us with a unique, personal, and moral template that we use subconsciously to assess and judge the intensions and actions of others and ourselves", "Values serve the process of 'becoming' in the sense of transformation of the level of consciousness to purer, higher levels", "Values are essentially objective while skills are subjective"], ans: 3,
analysis: `<h3>Answer: (d) Values are essentially objective while skills are subjective</h3><p>It is the reverse. Values are <b>subjective</b>: they are personal beliefs about what is good or right and shape how we judge. Skills are <b>objective</b>: they can be measured and demonstrated (typing speed, welding quality). As usually put in professional-ethics texts, skills are about the <i>means</i> and values about the <i>ends</i>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> is correct: values are an inner mechanism, like a conscience, telling right from wrong.</li>
<li><b>(b)</b> is correct: values give a personal moral template we use, often unconsciously, to judge our own and others' intentions and actions.</li>
<li><b>(c)</b> is correct: values guide "becoming", raising consciousness to purer, higher levels, as distinct from skills, which serve "doing".</li></ul>
<div class="key">Core human values in engineering-ethics texts: integrity, work ethic, service learning, civic virtue, respect for others, living peacefully, caring, sharing, honesty, courage, valuing time, cooperation, commitment, empathy, self-confidence, spirituality and character.</div>` },

{ id: "2023-30", year: 2023, no: 30, subject: "ethics", topic: "Objectives of studying professional ethics",
q: `Consider the following objectives of the study on professional ethics :<ol><li>Forming consistent viewpoints based on facts</li><li>Searching beyond obvious the alternative responses to issues and being receptive to creative solutions</li><li>Comprehending, assessing different views</li></ol>Which of the above objectives is/are correct ?`,
opts: ["2 and 3 only", "1, 2 and 3", "2 only", "1 and 3 only"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2 and 3</h3><p>The study of engineering ethics aims to build <b>moral autonomy</b>: the ability to think critically and independently about moral issues. Texts list skills it develops.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> forming consistent and comprehensive viewpoints based on facts.</li>
<li><b>2 (correct):</b> searching beyond the obvious for alternative responses, and being open to creative solutions.</li>
<li><b>3 (correct):</b> comprehending, clarifying and critically assessing arguments on opposing sides.</li></ul>
<div class="key">Other listed aims: moral awareness (recognising moral problems), cogent moral reasoning, moral communication (expressing views clearly), and tolerance of different perspectives while keeping one's own integrity.</div>` },

{ id: "2023-31", year: 2023, no: 31, subject: "ethics", topic: "Morality and ethics",
q: `Which one of the following statements is NOT correct ?`,
opts: ["Notions or beliefs about manners, tastes, customs, and towards laws are few examples of morality", "Morality is more general and prescriptive based on customs and traditions; whereas ethics is specific and descriptive", "Morality thrusts on judgment and punishment, in the name of God or by laws; whereas ethics, thrust is on influence, education, training through codes, guidelines, and correction", "Morality is more concerned with the results of wrong action, when done; whereas ethics is with the results of a right action, when not done"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p>The professional-ethics texts this question is drawn from say the opposite: notions or beliefs about manners, tastes, customs and towards laws are <b>not the same as</b> moral values. Morality concerns what is right or wrong in the treatment of people and the deeper values behind it, not etiquette, taste or mere legality.</p>
<h3>Why not the others</h3><p>These follow the textbook comparison of morality and ethics:</p><ul>
<li><b>(b)</b> is stated as correct: morality is general and prescriptive, rooted in custom and tradition; ethics is specific and descriptive, a critical study of conduct.</li>
<li><b>(c)</b> is stated as correct: morality works through judgment and punishment (by God or law); ethics through influence, education, codes, guidelines and correction.</li>
<li><b>(d)</b> is stated as correct: morality looks at the results of a wrong action done; ethics also at the results of a right action not done.</li></ul>
<div class="key">Other rows of the same comparison: morality is about general standards in a society, ethics about the standards of a particular profession or group; moral codes are mostly unwritten, professional ethics are written down in codes of conduct.</div>` },

{ id: "2023-32", year: 2023, no: 32, subject: "ethics", topic: "Work ethics",
q: `The 'work ethics' is aimed at NOT ensuring which of the following ?`,
opts: ["The economy and productivity", "Safety and privacy", "Consumption and distribution", "Health and hygiene"], ans: 2,
analysis: `<h3>Answer: (c) Consumption and distribution</h3><p>Work ethics, in the professional-ethics texts, aims at ensuring: the <b>economy</b> (earning a living, producing goods), <b>productivity</b>, <b>safety</b>, <b>health and hygiene</b>, <b>privacy</b>, <b>security</b>, cordial relationships, team work, and respect for one another. Consumption and distribution of goods are economic activities, not aims of work ethics.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) The economy and productivity</b>: work ethics ensures honest, diligent work that creates wealth.</li>
<li><b>(b) Safety and privacy</b>: a safe workplace and respect for colleagues' and customers' privacy are core aims.</li>
<li><b>(d) Health and hygiene</b>: are core aims too, for workers and for users of the products.</li></ul>
<div class="key">Work ethics combines industry (hard work), creativity and the right attitude. The opposite traits are laziness, absenteeism, carelessness and dishonesty.</div>` },

{ id: "2023-33", year: 2023, no: 33, subject: "ethics", topic: "Civic virtues",
q: `Which one of the following is NOT included under the categories of civic virtues as indispensable for a self-governing administration ?`,
opts: ["Self-reflection", "Self-restraint", "Self-reliance", "Self-assertion"], ans: 0,
analysis: `<h3>Answer: (a) Self-reflection</h3><p>Civic virtues are moral duties and rights of a citizen. In the professional-ethics texts, four categories are named as indispensable for a self-governing society: <b>civic knowledge</b>, <b>self-restraint</b>, <b>self-assertion</b> and <b>self-reliance</b>. Self-reflection is a personal virtue but not one of these four.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Self-restraint</b>: controlling one's own conduct so that others' rights are respected.</li>
<li><b>(c) Self-reliance</b>: taking responsibility for oneself rather than depending on the state.</li>
<li><b>(d) Self-assertion</b>: actively claiming one's rights and taking part in public life, e.g. voting and holding officials to account.</li></ul>
<div class="key">Duties under civic virtue: pay taxes, obey laws, keep the surroundings clean, protect the environment and public property, help in emergencies. Rights: vote, practise any religion, freedom of expression.</div>` },

{ id: "2023-34", year: 2023, no: 34, subject: "ethics", topic: "Spirituality at the workplace",
q: `Spirituality is promoted in the workplace by adhering to the following activities :<ol><li>Verbally respect the individuals as humans and recognize their values in all decisions and actions.</li><li>Support causes outside the business.</li><li>Do unto others as you would have them do unto you.</li><li>Realization of the self-potential through meditative acts.</li></ol>Which of the above activities are correct ?`,
opts: ["2, 3 and 4 only", "1, 2, 3 and 4", "2 and 3 only", "1, 2 and 3 only"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 only</h3><p>The professional-ethics texts list ways a <b>workplace</b> promotes spirituality, meaning a sense of meaning, connection and respect at work.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> verbally respect people as humans and recognise their values in all decisions and actions.</li>
<li><b>2 (correct):</b> support causes outside the business (community service, social responsibility).</li>
<li><b>3 (correct):</b> follow the Golden Rule: do unto others as you would have them do unto you.</li>
<li><b>4 (not in the list):</b> self-realisation through meditation is personal spirituality, practised by the individual, not an activity through which the organisation promotes spirituality at work.</li></ul>
<div class="key">Other items in the list: get to know people at work and what they value; encourage the expression of different views; practise integrity; balance work and family.</div>` },

{ id: "2023-35", year: 2023, no: 35, subject: "ethics", topic: "Senses of engineering ethics",
q: `The normative sense of engineering ethics does NOT include :`,
opts: ["Knowing moral values, finding accurate solutions to moral problems and justifying moral judgments in engineering practices", "Generating alternate courses of action to resolve the dilemma", "Study of decisions, policies, and values that are morally desirable in the engineering practice and research", "Using codes of ethics and standards and applying them in their transactions by engineers"], ans: 1,
analysis: `<h3>Answer: (b) Generating alternate courses of action to resolve the dilemma</h3><p>Engineering ethics is used in two senses. The <b>normative</b> sense is about what is right (values, judgments, standards). The <b>descriptive</b> sense is about what specific people or groups actually believe and do. Generating alternative courses of action is a <b>step in solving a moral dilemma</b> (identify the issues, generate options, choose), not one of the listed components of the normative sense.</p>
<h3>Why not the others</h3><p>The textbook lists three components of the normative sense, which are (a), (c) and (d):</p><ul>
<li><b>(a)</b>: knowing moral values, finding accurate solutions to moral problems and justifying moral judgments.</li>
<li><b>(c)</b>: study of decisions, policies and values that are morally desirable in engineering practice and research.</li>
<li><b>(d)</b>: using codes of ethics and standards, and applying them in engineers' dealings.</li></ul>
<div class="key">Descriptive sense: what managers, engineers or professional societies actually believe and do about ethical issues; the domain of sociologists and historians.</div>` },

{ id: "2023-36", year: 2023, no: 36, subject: "ethics", topic: "Gilligan vs Kohlberg",
q: `Which one of the following characteristic features distinguishes Carol Gilligan's theory from Kohlberg's theory with regard to the moral development ?`,
opts: ["Transactional approach", "Logic and rule centric", "More of caring", "Justice"], ans: 2,
analysis: `<h3>Answer: (c) More of caring</h3><p><b>Carol Gilligan</b> (<i>In a Different Voice</i>, 1982) criticised her teacher Kohlberg for building his theory on male subjects and a male-oriented "ethic of justice". She proposed an <b>ethic of care</b>: moral reasoning based on relationships, context and responsibility to others, rather than abstract rules.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Transactional approach</b>: describes the "you scratch my back, I scratch yours" orientation of Kohlberg's pre-conventional stage 2, not Gilligan's distinctive feature.</li>
<li><b>(b) Logic and rule centric</b> and <b>(d) Justice</b>: describe <b>Kohlberg</b>'s theory, which is based on justice, rights and universal principles, the very thing Gilligan contrasted her theory with.</li></ul>
<div class="key">Kohlberg's three levels: pre-conventional (obedience, self-interest), conventional (approval, law and order), post-conventional (social contract, universal principles). Gilligan's three: pre-conventional (self-centred), conventional (self-sacrifice), post-conventional (balance of caring for self and others).</div>` },

{ id: "2023-37", year: 2023, no: 37, subject: "ethics", topic: "Duty ethics",
q: `Which one of the following theorists and philosophers is NOT associated with the 'Duty Ethics' ?`,
opts: ["Immanuel Kant", "John Locke", "John Rawl", "C. W. D. Ross"], ans: 1,
analysis: `<h3>Answer: (b) John Locke</h3><p><b>John Locke</b> is the main figure of <b>rights ethics</b>: every person has natural rights to life, liberty and property, and governments exist to protect them.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Immanuel Kant</b>: founder of duty ethics; act only on maxims you could will as universal laws, and treat people as ends, never merely as means (the categorical imperative).</li>
<li><b>(c) John Rawls</b>: <i>A Theory of Justice</i> (1971) extends Kant: principles chosen behind a "veil of ignorance"; grouped with duty ethics in engineering-ethics texts.</li>
<li><b>(d) W. D. Ross</b>: <i>prima facie</i> duties (fidelity, reparation, gratitude, justice, beneficence, self-improvement, non-maleficence), which can conflict and must be weighed.</li></ul>
<div class="key">The four theories in engineering-ethics texts: utilitarianism (Bentham, Mill: the greatest good of the greatest number), duty ethics (Kant, Rawls, Ross), rights ethics (Locke, Melden) and virtue ethics (Aristotle, MacIntyre).</div>` },

{ id: "2023-38", year: 2023, no: 38, subject: "quality", topic: "Product performance measures",
q: `Consider the following non-reliability performance measures of automobile industry related objects :<ol><li>Fuel efficiency (km/l)</li><li>Economic efficiency (cost/km/kg)</li><li>Quality of ride</li><li>Emissions (ppm)</li></ol>Which of the above performance measures are correct ?`,
opts: ["1, 3 and 4 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><p>Reliability texts (e.g. Blischke &amp; Murthy) separate a product's <b>reliability</b> measures (failure rate, MTBF) from its other, <b>non-reliability performance</b> measures. For an automobile, examples include:</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> fuel efficiency, in km per litre.</li>
<li><b>2 (correct):</b> economic efficiency, e.g. operating cost per km per kg of load.</li>
<li><b>3 (correct):</b> quality of ride (comfort, noise, vibration).</li>
<li><b>4 (correct):</b> emission levels, in ppm of pollutants.</li></ul>
<div class="key">Reliability is the probability that an item performs its intended function for a stated time under stated conditions. Performance measures say how well it performs while working; reliability says for how long.</div>` },

{ id: "2023-39", year: 2023, no: 39, subject: "design", topic: "Failure severity classes",
q: `Match the following :<table><tr><th>List I (Severity of failure)</th><th>List II (Impact of failure)</th></tr><tr><td>P. Catastrophic</td><td>1. Less than minor injury or system damage</td></tr><tr><td>Q. Critical</td><td>2. Minor injury or minor system damage</td></tr><tr><td>R. Marginal</td><td>3. Result in death or total system loss</td></tr><tr><td>S. Negligible</td><td>4. Result in severe injury or major system damage</td></tr></table>Select the correct pair using the code given below :`,
opts: ["P–3, Q–4, R–2, S–1", "P–4, Q–3, R–1, S–2", "P–2, Q–1, R–3, S–4", "P–1, Q–2, R–4, S–3"], ans: 0,
analysis: `<h3>Answer: (a) P–3, Q–4, R–2, S–1</h3><p>These are the four severity categories of <b>MIL-STD-882</b> (system safety), used in hazard analysis and FMECA:</p>
<table><tr><th>Category</th><th>Impact</th></tr><tr><td>I Catastrophic</td><td>Death or total system loss</td></tr><tr><td>II Critical</td><td>Severe injury or major system damage</td></tr><tr><td>III Marginal</td><td>Minor injury or minor system damage</td></tr><tr><td>IV Negligible</td><td>Less than minor injury or damage</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> swaps catastrophic and critical, and marginal and negligible.</li>
<li><b>(c)</b> and <b>(d)</b> assign death or total loss to marginal or negligible, which reverses the scale.</li></ul>
<div class="key">Severity is combined with probability (frequent, probable, occasional, remote, improbable) in a risk matrix to rank hazards. FMEA uses a risk priority number RPN = severity × occurrence × detection.</div>` },

{ id: "2023-40", year: 2023, no: 40, subject: "quality", topic: "Degradation models",
q: `Consider the following statements for the multi-state characterization (infinite number of states) with K = ∞.<ol><li>X(t) is non-decreasing.</li><li>X(t) is continuous-time stochastic process.</li><li>Higher value of X(t) implies greater degradation and the item failure time.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>In reliability modelling (Blischke &amp; Murthy), an item's state can be binary (working or failed), multi-state with K levels, or, with <b>K = ∞</b>, a continuous degradation level X(t).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> degradation (wear, crack length, corrosion) only accumulates, so X(t) is non-decreasing.</li>
<li><b>2 (correct):</b> X(t) evolves continuously in time and is random, so it is a continuous-time (and continuous-state) stochastic process.</li>
<li><b>3 (correct):</b> a higher X(t) means more degradation; the item fails when X(t) first crosses a critical threshold, which defines the failure time.</li></ul>
<div class="key">Examples: tyre tread depth, bearing wear, fatigue crack growth. Degradation data allow failure to be predicted before it happens: the basis of condition-based and predictive maintenance.</div>` },

{ id: "2023-41", year: 2023, no: 41, subject: "quality", topic: "Six sigma",
q: `Six sigma gives a precision of`,
opts: ["99·9997%", "98·4599%", "97·7333%", "96·2799%"], ans: 0,
analysis: `<h3>Answer: (a) 99·9997%</h3><p>Six sigma means <b>3.4 defects per million opportunities</b> (allowing for a 1.5σ long-term shift of the process mean). The yield is 1 − 3.4/10<sup>6</sup> = 99.99966%, which rounds to <b>99.9997%</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 98·4599%</b>, <b>(c) 97·7333%</b> and <b>(d) 96·2799%</b>: correspond roughly to 3.6σ, 3.5σ and 3.3σ processes; far from six sigma.</li></ul>
<table><tr><th>Sigma level</th><th>DPMO (with 1.5σ shift)</th><th>Yield</th></tr><tr><td>3σ</td><td>66,807</td><td>93.32%</td></tr><tr><td>4σ</td><td>6,210</td><td>99.38%</td></tr><tr><td>5σ</td><td>233</td><td>99.977%</td></tr><tr><td>6σ</td><td>3.4</td><td>99.99966%</td></tr></table>
<div class="key">Without the 1.5σ shift, ±6σ would give only 0.002 defects per million (about 2 per billion).</div>` },

{ id: "2023-42", year: 2023, no: 42, subject: "quality", topic: "Six sigma",
q: `Consider the following statements with reference to six-sigma :<ol><li>It is a methodology for structured, process oriented and systematic quality improvement.</li><li>It provides a systematic approach for quality and process improvement, rather than being just a collection of tools.</li><li>It is a rigorous, data-driven, decision-making approach to analyse the root causes of problems</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 3 only", "2 and 3 only", "1 and 2 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>All three describe Six Sigma correctly.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> it is a structured, process-oriented method, run through the <b>DMAIC</b> cycle: Define, Measure, Analyse, Improve, Control.</li>
<li><b>2 (correct):</b> it is a management system (project selection, trained Belts, champions), not merely a toolbox of statistics.</li>
<li><b>3 (correct):</b> decisions rest on data: measurement systems analysis, hypothesis tests, regression and designed experiments are used to find root causes.</li></ul>
<div class="key">Roles: Champion (senior sponsor), Master Black Belt (coach), Black Belt (full-time project leader), Green Belt (part-time). For new designs, DMADV (Define, Measure, Analyse, Design, Verify) is used: see Q44.</div>` },

{ id: "2023-43", year: 2023, no: 43, subject: "quality", topic: "Sigma level and cost of quality",
q: `As sigma level increases,`,
opts: ["cost of poor quality and customer satisfaction both go up", "cost of poor quality goes up and customer satisfaction goes down", "cost of poor quality goes down and customer satisfaction goes up", "cost of poor quality and customer satisfaction both go down"], ans: 2,
analysis: `<h3>Answer: (c) cost of poor quality goes down and customer satisfaction goes up</h3><p>A higher sigma level means fewer defects. Fewer defects mean less scrap, rework, warranty and complaints (lower <b>cost of poor quality</b>), and more products that meet requirements (higher <b>customer satisfaction</b>).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: the cost of poor quality falls, not rises, as defects fall.</li>
<li><b>(b)</b>: reverses both effects.</li>
<li><b>(d)</b>: satisfaction rises, not falls, as defects fall.</li></ul>
<div class="key">Rule of thumb from Six Sigma literature: cost of poor quality is about 25–40% of sales at 3σ, about 15–25% at 4σ, and under 10% at 5–6σ.</div>` },

{ id: "2023-44", year: 2023, no: 44, subject: "quality", topic: "Design for six sigma",
q: `Consider the following statements regarding the design for six-sigma :<ol><li>The concept of six-sigma originated at Motorola.</li><li>The goal is to arrive at 3·4 defects per million opportunities.</li><li>Sigma is used to compare expected outcomes versus failures in a population.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Six Sigma was developed at <b>Motorola</b> in 1986 by engineer Bill Smith, and made famous by Jack Welch at General Electric in the 1990s.</li>
<li><b>2 (correct):</b> the target is 3.4 defects per million opportunities (see Q41).</li>
<li><b>3 (correct):</b> sigma (standard deviation) measures spread; the sigma level compares expected outcomes with failures in a population, i.e. how many standard deviations fit between the process mean and the nearest specification limit.</li></ul>
<div class="key"><b>Design for Six Sigma</b> (DFSS) applies the idea at the design stage, so the product is "born" capable, using DMADV or IDOV (Identify, Design, Optimise, Verify), with tools such as QFD, robust design (Taguchi) and tolerance design.</div>` },

{ id: "2023-45", year: 2023, no: 45, subject: "design", topic: "Representative fraction",
q: `In a plain scale, if 1·5 inches = 1 foot and it can measure upto 4 feet, what is the representative factor of the scale ?`,
opts: ["1/8", "1/4", "1/1·5", "2/1·5"], ans: 0,
analysis: `<h3>Answer: (a) 1/8</h3><p>Representative fraction (RF) = drawing length ÷ actual length, in the same units.</p>
<p>RF = 1.5 inch / 1 foot = 1.5 inch / 12 inch = <b>1/8</b>.</p>
<p>The length of the scale = RF × maximum length = 1/8 × 4 ft = 0.5 ft = 6 inches.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 1/4</b>: would mean 3 inches = 1 foot.</li>
<li><b>(c) 1/1·5</b> and <b>(d) 2/1·5</b>: mix units (inches with feet) without converting.</li></ul>
<div class="key">RF &lt; 1 is a reducing scale, RF = 1 full size, RF &gt; 1 an enlarging scale. A plain scale reads two units (e.g. feet and inches); a diagonal scale reads three (e.g. m, dm, cm); a vernier scale also reads three, using a vernier.</div>` },

{ id: "2023-46", year: 2023, no: 46, subject: "design", topic: "Types of drawing",
q: `Which one of the following is used when components of same shape but different dimensions are to be manufactured ?`,
opts: ["Drawing for installation", "Tabular drawing", "Schematic assembly drawing", "Patent drawing"], ans: 1,
analysis: `<h3>Answer: (b) Tabular drawing</h3><p>A <b>tabular drawing</b> shows one part with letters in place of some dimensions, and a table gives the values of those letters for each variant. One drawing then covers a whole family of similar parts (bolts of several lengths, flanges of several sizes).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Drawing for installation</b>: shows how and where a machine or system is to be installed, with foundation and connection details.</li>
<li><b>(c) Schematic assembly drawing</b>: shows how parts fit and work together, often in simplified form, e.g. for instruction manuals.</li>
<li><b>(d) Patent drawing</b>: illustrates an invention for a patent application, following the patent office's rules.</li></ul>
<div class="key">Other types: detail (part) drawings, assembly drawings, exploded drawings, and catalogue drawings.</div>` },

{ id: "2023-47", year: 2023, no: 47, subject: "design", topic: "Types of lines",
q: `Which one of the following lines is used to represent the outlines of adjacent parts or alternative and extreme positions of movable parts ?`,
opts: ["Continuous thick line", "Continuous thin line", "Chain thin double-dashed line", "Dashed thin line"], ans: 2,
analysis: `<h3>Answer: (c) Chain thin double-dashed line</h3><p>The <b>long-dashed double-dotted narrow line</b> (chain thin double-dashed, a "phantom line") is used for outlines of adjacent parts, alternative and extreme positions of movable parts, centroidal lines, and the initial outline before forming.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Continuous thick line</b>: visible outlines and edges.</li>
<li><b>(b) Continuous thin line</b>: dimension, extension and leader lines, hatching, and outlines of revolved sections.</li>
<li><b>(d) Dashed thin line</b>: hidden outlines and edges.</li></ul>
<div class="key">Chain thin (single-dotted) is for centre lines, lines of symmetry and pitch circles; chain thin with thick ends is for cutting planes. The Indian standard is IS 10714 / SP 46.</div>` },

{ id: "2023-48", year: 2023, no: 48, subject: "design", topic: "Traces of a line",
q: `If a line is inclined to the H.P. and parallel to the V.P., then it has`,
opts: ["no trace.", "only V.T. but no H.T.", "both H.T. and V.T.", "only H.T. but no V.T."], ans: 3,
analysis: `<h3>Answer: (d) only H.T. but no V.T.</h3><p>A trace is where a line, extended if needed, meets a reference plane. A line <b>parallel to the VP</b> never meets the VP, so it has <b>no VT</b>. A line <b>inclined to the HP</b> will meet the HP when extended, so it has an <b>HT</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) no trace</b>: only a line parallel to both planes (parallel to the xy line) has no trace.</li>
<li><b>(b) only V.T.</b>: belongs to a line parallel to the HP and inclined to the VP, the reverse case.</li>
<li><b>(c) both H.T. and V.T.</b>: belongs to a line inclined to both planes.</li></ul>
<div class="key">The HT lies on a projector through the point where the front view (extended) meets xy; the VT lies on a projector through the point where the top view (extended) meets xy.</div>` },

{ id: "2023-49", year: 2023, no: 49, subject: "design", topic: "Projection of solids",
q: `A triangular prism, base 40 mm side and axis 50 mm long is resting on one of its bases on the H.P. with a vertical face perpendicular to the V.P. What is the front view of the prism ?`,
opts: ["a triangle", "a rectangle", "combination of two rectangles", "combination of triangle and rectangle"], ans: 1,
analysis: `<h3>Answer: (b) a rectangle</h3><p>With the axis vertical, the top view is an equilateral triangle of side 40 mm. One side of it is perpendicular to xy, so that rectangular face is seen edge-on from the front. The two other faces both lie between that edge and the opposite corner, so in the front view they project onto the <b>same</b> region. The front view is a single <b>rectangle</b> about 34.6 mm wide (the triangle's height, 40 × √3/2) and 50 mm high.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) a triangle</b>: would be seen only if the axis were perpendicular to the VP, i.e. the prism lying with a base facing the viewer.</li>
<li><b>(c) two rectangles</b>: appears when a vertical face is <b>parallel</b> to the VP; the opposite edge then shows as a line dividing the view into two rectangles.</li>
<li><b>(d) triangle and rectangle</b>: does not occur when the prism stands on its base; it arises only when the axis is inclined.</li></ul>
<div class="key">Method: always draw the view showing the true shape of the base first (here the top view), then project the other view from it.</div>` },

{ id: "2023-50", year: 2023, no: 50, subject: "design", topic: "Isometric drawing rules",
q: `Consider the following points while drawing the isometric view of any solid :<ol><li>The isometric view should be drawn according to the given views and in such a way that maximum possible details are visible.</li><li>At every point for the corner of a solid, at least three lines for the edges must converge. Of these, at least two must be for visible edges.</li><li>Two lines (for visible edges) will never cross each other.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>All three are standard rules in engineering-drawing texts (e.g. N.D. Bhatt) for checking an isometric view.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> the isometric view must agree with the given orthographic views and be oriented so that most details are visible.</li>
<li><b>2 (correct):</b> every corner of a solid is the meeting point of at least three edges, of which at least two are visible.</li>
<li><b>3 (correct):</b> two visible edges never cross in a correct view; if they seem to, the drawing has an error.</li></ul>
<div class="key">Isometric basics: the three axes are 120° apart; lengths along them are reduced to 0.816 (isometric scale) in an isometric projection, but drawn true length in an isometric drawing (view). Hidden lines are normally left out.</div>` }
);
