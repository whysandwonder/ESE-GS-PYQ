// ESE 2020 Prelims Paper I, Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  // Statement (I)/(II) items (Q97–100) share these four codes
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is <i>not</i> the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true, II does not explain I; (c) I true, II false; (d) I false, II true.)";
window.PYQ_QUESTIONS.push(
{ id: "2020-76", year: 2020, no: 76, subject: "materials", topic: "Critical resolved shear stress",
q: `Which of the following factors are affecting critical shear stresses ?<ol><li>Purity of metals reduces the critical shear stress</li><li>Surface films greatly enhance the critical shear stress</li><li>Rise in temperature</li><li>Rate of deformation and the extent of initial deformation also help in raising the critical shear stress</li></ol>`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><p>The critical resolved shear stress (CRSS) is the shear stress on a slip plane, in the slip direction, needed to start slip in a single crystal (Schmid's law: τ = σ cos φ cos λ).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Pure metals have the lowest CRSS; impurities and alloying atoms pin dislocations and raise it (solid-solution strengthening).</li>
<li><b>2 (yes):</b> Surface oxide films block dislocations from escaping at the surface, raising the CRSS.</li>
<li><b>3 (yes, as a factor):</b> Temperature affects CRSS: it generally <b>falls</b> as temperature rises (thermal activation helps dislocations move).</li>
<li><b>4 (yes):</b> Higher strain rate and prior deformation (work hardening, more dislocations tangling) raise the CRSS.</li></ul>` },

{ id: "2020-77", year: 2020, no: 77, subject: "materials", topic: "Magnetic materials",
q: `Which one of the following types of materials is having high remanence, coercivity and saturation flux density as well as low permeability and high hysteresis energy losses ?`,
opts: ["Soft magnetic materials", "Hard magnetic materials", "Hard electrical materials", "Soft electrical materials"], ans: 1,
analysis: `<h3>Answer: (b) Hard magnetic materials</h3><p>Hard (permanent) magnetic materials have a broad, "fat" hysteresis loop: high remanence (they stay magnetised), high coercivity (hard to demagnetise), high saturation, low initial permeability and large hysteresis loss. Examples: Alnico, ferrites (barium, strontium), samarium-cobalt, neodymium-iron-boron (NdFeB, the strongest).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Soft magnetic materials (silicon steel, permalloy, soft ferrites) have narrow loops: low coercivity, high permeability, low loss; used in transformer and motor cores.</li>
<li><b>(c)</b> and <b>(d)</b> "Hard/soft electrical materials" are not standard classes.</li></ul>
<div class="tip">Figure of merit for permanent magnets: maximum energy product (BH)<sub>max</sub>. NdFeB reaches about 400 kJ/m³; it powers EV motors and wind turbines. China dominates rare-earth magnet supply; India launched a scheme in 2025 to promote domestic rare-earth permanent magnet manufacturing.</div>` },

{ id: "2020-78", year: 2020, no: 78, subject: "materials", topic: "Polymers",
q: `Polymers having strong primary bonds throughout, often formed by condensation polymerization, and their structure resembles one large molecule, are known as`,
opts: ["thermoplastic polymers", "thermosoftening polymers", "thermosetting polymers", "random polymers"], ans: 2,
analysis: `<h3>Answer: (c) thermosetting polymers</h3><p>Thermosets (Bakelite, epoxy, urea- and melamine-formaldehyde, polyester resins) cure into a three-dimensional network bonded by covalent (primary) bonds throughout, effectively one giant molecule. They do not melt on reheating; they char.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(b)</b> Thermoplastics (thermosoftening) have separate chains held by weak secondary bonds, so they soften on heating and can be remoulded and recycled.</li>
<li><b>(d)</b> "Random" refers to the arrangement of units in a copolymer, not this class.</li></ul>` },

{ id: "2020-79", year: 2020, no: 79, subject: "materials", topic: "Semiconductor devices",
q: `An FET is a semiconductor device with the output current controlled by an electric field and its current is carried predominantly by one type of carriers. It is known as`,
opts: ["junction transistor", "unipolar transistor", "MOSFET", "IGBT"], ans: 1,
analysis: `<h3>Answer: (b) unipolar transistor</h3><p>A field-effect transistor conducts by majority carriers of one type only (electrons in an n-channel, holes in a p-channel), so it is called a <b>unipolar</b> transistor. Its channel current is controlled by the electric field from the gate voltage (voltage-controlled, very high input impedance).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> A bipolar junction transistor uses both electrons and holes and is current-controlled.</li>
<li><b>(c)</b> A MOSFET is one kind of FET; the general name for the class described is unipolar transistor.</li>
<li><b>(d)</b> An IGBT combines a MOS gate with a bipolar output stage (both carrier types), used in high-power switching.</li></ul>` },

{ id: "2020-80", year: 2020, no: 80, subject: "materials", topic: "Polymer trade names",
q: `Which one of the following is the trade name of polycarbonates ?`,
opts: ["Alathon", "Baylon", "Bexphane", "Cycolac"], ans: 1,
analysis: `<h3>Answer: (b) Baylon</h3><p>Polycarbonate trade names listed in materials texts include Lexan (GE/SABIC), Makrolon (Bayer/Covestro) and Baylon (Bayer). Polycarbonate is tough, transparent and heat-resistant: used in safety glazing, helmets, CDs, lenses and electronic housings.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Alathon is a polyethylene trade name (DuPont).</li>
<li><b>(c)</b> Bexphane is a polypropylene film.</li>
<li><b>(d)</b> Cycolac is ABS (acrylonitrile-butadiene-styrene).</li></ul>
<div class="tip">Other names: Teflon (PTFE), Nylon (polyamide), Plexiglas/Perspex (PMMA), Dacron/Terylene (PET), Kevlar (aramid), Orlon (acrylic, PAN).</div>` },

{ id: "2020-81", year: 2020, no: 81, subject: "ict", topic: "Creative Commons",
q: `Which one of the following is not a Creative Commons license which users can choose to apply when publishing their work ?`,
opts: ["Attribution", "Share-Alike", "Copyright Infringement", "No Derivative Works"], ans: 2,
analysis: `<h3>Answer: (c) Copyright Infringement</h3><p>Creative Commons licences are built from four elements: Attribution (BY), Share-Alike (SA), Non-Commercial (NC) and No Derivative Works (ND), combined into six licences (CC BY, BY-SA, BY-NC, BY-ND, BY-NC-SA, BY-NC-ND), plus the CC0 public-domain dedication. Copyright infringement is a legal wrong, not a licence.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Attribution: credit the creator.</li>
<li><b>(b)</b> Share-Alike: adaptations must carry the same licence (Wikipedia uses CC BY-SA).</li>
<li><b>(d)</b> No Derivative Works: only verbatim copies may be shared.</li></ul>` },

{ id: "2020-82", year: 2020, no: 82, subject: "ict", topic: "Ethernet",
q: `The Ethernet designed by IEEE to compete with LAN protocols which can transmit data ten times faster at a rate of 100 Mbps is`,
opts: ["fast Ethernet", "bridged Ethernet", "switched Ethernet", "full-duplex Ethernet"], ans: 0,
analysis: `<h3>Answer: (a) fast Ethernet</h3><p>Fast Ethernet (IEEE 802.3u, 1995) runs at 100 Mbps, ten times the original 10 Mbps Ethernet, and was designed to compete with LAN technologies such as FDDI. Common form: 100BASE-TX over Cat 5 twisted pair.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Bridged Ethernet divides a LAN into segments with bridges to reduce collisions; speed stays the same.</li>
<li><b>(c)</b> Switched Ethernet gives each station its own switch port; it is about topology, not a 100 Mbps standard.</li>
<li><b>(d)</b> Full-duplex Ethernet lets stations send and receive at once, eliminating collisions (and CSMA/CD).</li></ul>
<div class="tip">Ethernet speeds: 10 Mbps (802.3), 100 Mbps Fast (802.3u), 1 Gbps (802.3z/ab), 10 Gbps (802.3ae), and now 100–800 Gbps in data centres.</div>` },

{ id: "2020-83", year: 2020, no: 83, subject: "ict", topic: "Wireless networks",
q: `IEEE standard protocol which defines a wireless Personal Area Network (PAN) operable in a room is`,
opts: ["Wi-Fi", "Bluetooth", "Infrared", "Wireless LAN"], ans: 1,
analysis: `<h3>Answer: (b) Bluetooth</h3><p>Bluetooth was standardised by the IEEE as <b>802.15.1</b>, the wireless personal area network (WPAN) standard for short-range (about 10 m) links between devices in a room: headsets, keyboards, phones. It operates in the 2.4 GHz band using frequency hopping; devices form piconets of one master and up to seven active slaves.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(d)</b> Wi-Fi is the wireless LAN family (IEEE 802.11), covering a building, not a personal area.</li>
<li><b>(c)</b> Infrared (IrDA) is a line-of-sight technology not defined by an IEEE 802 standard.</li></ul>
<div class="tip">Other 802.15 standards: 802.15.4 (Zigbee, low-power IoT), 802.15.3 (high-rate WPAN), UWB (802.15.4a/z). Bluetooth Low Energy powers wearables and contact-tracing apps.</div>` },

{ id: "2020-84", year: 2020, no: 84, subject: "ict", topic: "Internet architecture",
q: `Which one of the following points is a private switching station that connects the national internet service provider's network and operates at a high data rate up to 600 Mbps ?`,
opts: ["Locking point", "Peering point", "Hub point", "Modem point"], ans: 1,
analysis: `<h3>Answer: (b) Peering point</h3><p>Forouzan's description of internet structure: national ISP backbones are connected to one another through switching stations called <b>network access points (NAPs)</b>, and some national ISPs also connect directly through private switching stations called <b>peering points</b>, which normally operate at high data rates (up to 600 Mbps in that description).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> "Locking point" is not a networking term.</li>
<li><b>(c)</b> A hub joins devices within a LAN.</li>
<li><b>(d)</b> A modem connects a subscriber's line to the ISP.</li></ul>
<div class="tip">Today these are internet exchange points (IXPs). India's National Internet Exchange of India (NIXI) runs IXPs in many cities so that domestic traffic stays in the country.</div>` },

{ id: "2020-85", year: 2020, no: 85, subject: "ict", topic: "Digital India pillars",
q: `Which one of the following is the nodal department to implement public internet access program and rural internet connectivity by converting its offices as multi-service centres ?`,
opts: ["Department of Electronics and Information Technology", "Department of Information and Broadcasting", "Department of Telecommunication", "Department of Posts"], ans: 3,
analysis: `<h3>Answer: (d) Department of Posts</h3><p>Under Digital India's third pillar, Public Internet Access Programme, post offices were to be converted into multi-service centres, with the <b>Department of Posts</b> as the nodal department. (Common Service Centres, the other part of the pillar, are under MeitY.)</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> DeitY (now MeitY) is the nodal ministry for Digital India overall and for CSCs.</li>
<li><b>(b)</b> Information and Broadcasting deals with media.</li>
<li><b>(c)</b> DoT is nodal for broadband highways (BharatNet) and universal mobile access.</li></ul>
<div class="tip">India Post Payments Bank (2018) uses the network of about 1.65 lakh post offices and postmen for doorstep banking and Aadhaar services.</div>` },

{ id: "2020-86", year: 2020, no: 86, subject: "ict", topic: "Digital India",
q: `Which one of the following is not the vision area of Digital India as a program to transform India into a digitally empowered society and knowledge economy ?`,
opts: ["Infrastructure as utility to every citizen", "Governance and services on demand", "Free Wi-Fi access", "Digital empowerment of citizens"], ans: 2,
analysis: `<h3>Answer: (c) Free Wi-Fi access</h3><p>Digital India has three vision areas: (1) digital infrastructure as a core utility to every citizen, (2) governance and services on demand, and (3) digital empowerment of citizens (see 2017 Q4). Free Wi-Fi is a component (e.g. Wi-Fi at railway stations, PM-WANI hotspots), not a vision area.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are the three official vision areas.</li></ul>
<div class="tip">PM-WANI (Prime Minister's Wi-Fi Access Network Interface, December 2020) lets small shops run public Wi-Fi hotspots without a licence.</div>` },

{ id: "2020-87", year: 2020, no: 87, subject: "ict", topic: "National e-Governance Plan",
q: `Infrastructure aspects provided by the Government of India in formation of National e-Governance Plan for storage of data and hosting applications, network connectivity and capacity building respectively are`,
opts: ["SDC, SWAN and NISG", "SWAN, SDC and NISG", "SDC, NISG and SWAN", "SWAN, NISG and SDC"], ans: 0,
analysis: `<h3>Answer: (a) SDC, SWAN and NISG</h3><p>The National e-Governance Plan (2006) built common core infrastructure:</p>
<table><tr><th>Need</th><th>Infrastructure</th></tr><tr><td>Data storage and hosting applications</td><td><b>SDC</b>: State Data Centres</td></tr><tr><td>Network connectivity</td><td><b>SWAN</b>: State Wide Area Networks (2 Mbps links down to block level)</td></tr><tr><td>Capacity building</td><td><b>NISG</b>: National Institute for Smart Government (with state e-governance mission teams)</td></tr><tr><td>Service delivery</td><td>CSCs: Common Service Centres</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>, <b>(c)</b> and <b>(d)</b> mix up the order of the three.</li></ul><div class="tip">The NeGP (2006) had 31 Mission Mode Projects (later 44) across central, state and integrated categories (e.g. MCA21, passports, e-Courts, e-Procurement). The core infrastructure (SWAN, SDC, CSC) was later extended through MeghRaj (GI Cloud) and BharatNet.</div>` },

{ id: "2020-88", year: 2020, no: 88, subject: "ict", topic: "Good governance",
q: `Which one of the following is not the characteristic of Good Governance and e-Governance that are closely linked and depend on each other ?`,
opts: ["Accountable", "Transparent", "Consciousness", "Consensus-oriented"], ans: 2,
analysis: `<h3>Answer: (c) Consciousness</h3><p>The UN (UNESCAP) lists eight characteristics of good governance: participatory, <b>consensus-oriented</b>, <b>accountable</b>, <b>transparent</b>, responsive, effective and efficient, equitable and inclusive, and following the rule of law. E-governance supports each of them. "Consciousness" is not one of them.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are standard characteristics.</li></ul>
<div class="tip">India observes Good Governance Day on 25 December (Atal Bihari Vajpayee's birthday). The Good Governance Index is published by DARPG.</div>` },

{ id: "2020-89", year: 2020, no: 89, subject: "ict", topic: "21st-century skills",
q: `Which one of the following is not the skill needed in the workplace of the future for inventive thinking using information and communication technology in education ?`,
opts: ["Adaptability", "Responsibility", "Curiosity and creativity", "Risk-taking"], ans: 1,
analysis: `<h3>Answer: (b) Responsibility</h3><p>The enGauge 21st Century Skills framework (NCREL/Metiri, used in ICT-in-education texts) lists <b>inventive thinking</b> skills as: adaptability and managing complexity, self-direction, curiosity, creativity, risk-taking, and higher-order thinking and sound reasoning. Responsibility belongs to another cluster (effective communication / personal and social responsibility).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> are listed under inventive thinking.</li></ul>
<div class="tip">enGauge clusters: digital-age literacy, inventive thinking, effective communication, high productivity.</div>` },

{ id: "2020-90", year: 2020, no: 90, subject: "ict", topic: "ICT pedagogy",
q: `The pedagogy which involves productive learning and finding new solutions to problems, where manipulation of existing information and creation of real-world products are possible with ICT, is called`,
opts: ["collaborative pedagogy", "creative pedagogy", "integrative pedagogy", "evaluative pedagogy"], ans: 1,
analysis: `<h3>Answer: (b) creative pedagogy</h3><p>Creative pedagogy uses ICT for productive learning: students manipulate existing information and create new, real-world products (designs, simulations, videos, code) to solve problems.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Collaborative pedagogy uses ICT for students to work together, across classrooms or countries.</li>
<li><b>(c)</b> Integrative pedagogy brings ICT into the whole curriculum to create a realistic learning environment.</li>
<li><b>(d)</b> Evaluative pedagogy is student-centred, letting learners explore and judge materials themselves.</li></ul>
<div class="tip">These categories come from UNESCO's work on ICT in teacher education (2002). Also listed: reflective pedagogy, using ICT to reflect on one's learning.</div>` },

{ id: "2020-91", year: 2020, no: 91, subject: "ethics", topic: "Professionalism", doubt: true,
q: `The basic difference between a professional and an amateur is`,
opts: ["a professional is someone who is connected with a job that needs special training or skill, while an amateur is someone who works in multi-dimensions without any specialization", "a professional is clear in thinking and focused on the job, while an amateur is confused and distracted from the job", "a professional does high quality work/job in a specific area, while an amateur is associated with specific area with lowest pay", "a professional remains positive and achieves despite facing grievances, while an amateur does work efficiently due to many imagined grievances"], ans: 1,
analysis: `<h3>Answer: (b) a professional is clear in thinking and focused on the job, while an amateur is confused and distracted from the job (official key)</h3><p>The key takes the attitude-based view found in professional-ethics and self-development texts: a professional brings clarity, focus and commitment to the work; an amateur is unclear and easily distracted.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> The first half is the dictionary definition of a professional, but describing an amateur as someone working "in multi-dimensions without any specialization" is not accurate; an amateur is someone who does something for pleasure, not pay or as a career.</li>
<li><b>(c)</b> Amateurs are by definition unpaid, not "lowest pay".</li>
<li><b>(d)</b> Garbled: it says an amateur "does work efficiently" due to imagined grievances.</li></ul>
<div class="note">In doubt (key followed). Our own working picked (a): the standard distinction is that a profession requires special training and skill (see 2019 Q87). Option (b) describes attitudes that any good worker should have. The key chose the attitude-based description.</div>` },

{ id: "2020-92", year: 2020, no: 92, subject: "ethics", topic: "Bioethics",
q: `'Euthanasia' refers to the`,
opts: ["loyalty of the people that take pride in being part of their organization and care for the organization above their own well-being", "ills in the society that are caused by ignorance and lack of respect for the laws of the land", "emotional intelligence to understand how people perform various functions", "killing of a terminally ill person suffering acutely with no hope of survival"], ans: 3,
analysis: `<h3>Answer: (d) killing of a terminally ill person suffering acutely with no hope of survival</h3><p>Euthanasia (Greek: "good death") is deliberately ending the life of a person with an incurable, painful condition to relieve suffering. <b>Active</b> euthanasia is a direct act (lethal injection); <b>passive</b> euthanasia is withdrawing or withholding life support.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> describes attitude-loyalty to an organisation (see 2019 Q99).</li>
<li><b>(b)</b> describes social evils from lawlessness.</li>
<li><b>(c)</b> describes emotional intelligence.</li></ul>
<div class="tip">India: active euthanasia is illegal. The Supreme Court allowed passive euthanasia in Aruna Shanbaug (2011) and recognised living wills (advance directives) as part of the right to die with dignity under Article 21 in Common Cause v Union of India (2018), simplifying the procedure in 2023. The Ministry of Health issued draft guidelines on withdrawing life support in terminally ill patients in 2024.</div>` },

{ id: "2020-93", year: 2020, no: 93, subject: "ethics", topic: "Ethical theories",
q: `'Utilitarianism' in the professional ethics is`,
opts: ["an acquired habit that helps to lead a rational life", "a skill to solve a current ethical problem by comparing it with similar problems from the past and their outcome", "a right of activists to decide their own duties", "a judgment of an action by the consequences of that action"], ans: 3,
analysis: `<h3>Answer: (d) a judgment of an action by the consequences of that action</h3><p>Utilitarianism (Jeremy Bentham, J.S. Mill) is a consequentialist theory: the right action is the one that produces the greatest good (happiness, welfare) for the greatest number. In engineering it underlies cost-benefit and risk-benefit analysis.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> An acquired habit for a rational life is a <b>virtue</b> (Aristotle's virtue ethics).</li>
<li><b>(b)</b> Comparing with past cases is <b>casuistry</b> (case-based reasoning).</li>
<li><b>(c)</b> A right to decide one's own duties is not a theory; rights ethics (Locke) concerns entitlements, and duty ethics (Kant) concerns universal duties.</li></ul>
<div class="tip">Act utilitarianism judges each act; rule utilitarianism judges rules by the consequences of following them generally. Criticism: it can justify sacrificing a minority for the majority.</div>` },

{ id: "2020-94", year: 2020, no: 94, subject: "ethics", topic: "Safety and risk",
q: `In the professional ethics, the degree of safety proposed to be attained varies with`,
opts: ["design, duration and product", "cost of risk, design and utility", "cost of risk, perception and utility", "product, perception and cost of risk involved"], ans: 3,
analysis: `<h3>Answer: (d) product, perception and cost of risk involved</h3><p>Safety is relative, not absolute (Martin and Schinzinger: "a thing is safe if its risks are judged to be acceptable"). How much safety is aimed for depends on the <b>product</b> (a toy, a car, a nuclear plant), on how risk is <b>perceived</b> by the public (voluntary or involuntary, familiar or dreaded, catastrophic or spread out), and on the <b>cost</b> of reducing the risk.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Duration and design are not the factors named in the standard treatment.</li>
<li><b>(b)</b> and <b>(c)</b> Utility enters risk-benefit analysis, but the key list is product, perception and cost.</li></ul>
<div class="tip">Factors affecting risk perception: voluntariness, control, delayed vs immediate effects, familiarity, catastrophic potential (a plane crash vs road deaths). The ALARP principle: reduce risk "as low as reasonably practicable".</div>` },

{ id: "2020-95", year: 2020, no: 95, subject: "ethics", topic: "Ethical principles",
q: `The basic ethical principle of 'Beneficence' states that`,
opts: ["all our thoughts and actions must be directed to ensure that others benefit from these thoughts and actions", "our actions must result in the least harm to the others", "we should not impose our views on others", "our actions must be fair to everyone"], ans: 0,
analysis: `<h3>Answer: (a) all our thoughts and actions must be directed to ensure that others benefit from these thoughts and actions</h3><p>Beneficence is the duty to do good: to act for the benefit of others and promote their welfare.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Doing least harm is <b>non-maleficence</b> ("first, do no harm").</li>
<li><b>(c)</b> Not imposing views respects <b>autonomy</b>.</li>
<li><b>(d)</b> Fairness to all is <b>justice</b>.</li></ul>
<div class="tip">These are the four principles of biomedical ethics (Beauchamp and Childress): autonomy, beneficence, non-maleficence, justice; they are widely applied in engineering and research ethics too.</div>` },

{ id: "2020-96", year: 2020, no: 96, subject: "ca", topic: "World Trade Organization",
q: `Which of the following are the main functions of WTO ?<ol><li>To organize meetings of member countries to arrive at trade agreements covering international trade</li><li>To ensure that member countries conduct trade practices as per agreements agreed upon and signed by the member countries</li><li>To provide a platform to negotiate and settle disputes related to international trade between and among member countries</li></ol>`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> The WTO is a forum for negotiating trade agreements, through Ministerial Conferences (the top body, at least once every two years) and negotiating rounds.</li>
<li><b>2 (yes):</b> It administers and monitors the agreements (GATT, GATS, TRIPS) and reviews members' trade policies (Trade Policy Review Mechanism).</li>
<li><b>3 (yes):</b> It settles disputes through the Dispute Settlement Body (panels and the Appellate Body).</li></ul>
<p><b>Latest update (as of 2026):</b> the WTO (1995, Geneva; 166 members) held its 14th Ministerial Conference (MC14) in Yaoundé, Cameroon, in March 2026. It ended without a ministerial declaration, the e-commerce customs-duty moratorium lapsed for the first time since 1998, and fisheries subsidies talks were deferred. The Appellate Body has been non-functional since December 2019 because the US blocks appointments; many members use the interim MPIA instead (India has not joined it).</p>` },

{ id: "2020-97", year: 2020, no: 97, subject: "pm", topic: "Matrix organisation",
q: `<b>Directions:</b> Each of the next four items consists of two statements, one labelled as 'Statement (I)' and the other as 'Statement (II)'. Examine these two statements carefully and select the answers to these items using the code given below.<br><br>Statement (I) : If the project influence is more in decision-making for the project, then the arrangement is considered a strong matrix.<br>Statement (II) : If functional departments are seen to be influencing the decision-making more, the arrangement is considered a weak matrix.`,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><ul>
<li><b>Statement I (true):</b> In a <b>strong</b> (project) matrix, the project manager has more authority than functional managers over project decisions and resources.</li>
<li><b>Statement II (true):</b> In a <b>weak</b> (functional) matrix, functional managers dominate and the project manager acts more like a coordinator or expeditor.</li></ul>
<p>The two statements define opposite ends of the same spectrum; neither explains the other.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">In between is the balanced matrix (equal authority). Matrix organisations violate unity of command (two bosses), which can cause conflict.</div>` },

{ id: "2020-98", year: 2020, no: 98, subject: "pm", topic: "Social cost-benefit analysis",
q: `Statement (I) : Raw materials are taken as traded items and their values at domestic and world prices are estimated.<br>Statement (II) : Raw materials, which have a high value-to-volume ratio and involve proportionately high transport cost and are imported, are regarded as non-traded items.` + N,
opts: C, ans: 2,
analysis: `<h3>Answer: (c) Statement I is true, Statement II is false</h3><ul>
<li><b>Statement I (true):</b> In social cost-benefit analysis (UNIDO / Little-Mirrlees methods), raw materials that are exported or imported are treated as traded goods and valued at border (world) prices, alongside their domestic prices.</li>
<li><b>Statement II (false):</b> It is raw materials with a <b>low</b> value-to-volume ratio (bulky, cheap goods such as sand, bricks, stone) for which transport costs are proportionately high that are regarded as non-traded; high-value goods are readily traded.</li></ul>
<h3>The codes</h3><ul><li><b>(a)</b> and <b>(b)</b> need II to be true.</li><li><b>(d)</b> needs I to be false.</li></ul>` },

{ id: "2020-99", year: 2020, no: 99, subject: "ict", topic: "ICT for development",
q: `Statement (I) : Information and Communication Technologies (ICTs) can facilitate improved service delivery and more efficient internal operations.<br>Statement (II) : ICTs can create new opportunities for the marginalized and the vulnerable of society but do not represent a panacea for all development problems.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><ul>
<li><b>Statement I (true):</b> ICT improves service delivery (online services, DBT) and makes internal government operations more efficient (e-Office, workflow automation).</li>
<li><b>Statement II (true):</b> ICT opens opportunities for disadvantaged groups (access to information, markets, services) but cannot by itself solve poverty, poor infrastructure or weak institutions; the digital divide can even widen inequality.</li></ul>
<p>II discusses ICT's social reach and limits; it does not explain I's claims about service delivery and efficiency.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>` },

{ id: "2020-100", year: 2020, no: 100, subject: "ict", topic: "E-governance projects", doubt: true,
q: `Statement (I) : Long-term sustainability of e-Governance projects does not depend on financial viability, especially if they are to be implemented in the Public-Private Partnership (PPP) mode.<br>Statement (II) : Front-end e-services are possible without back-end computerization.` + N,
opts: C, ans: 3,
analysis: `<h3>Answer: (d) Statement I is false, Statement II is true (official key)</h3><ul>
<li><b>Statement I (false):</b> Long-term sustainability of e-governance projects, especially in <b>PPP</b> mode, depends heavily on financial viability: private partners must recover their investment through user charges or payments, or the project collapses. (Many early kiosks failed for this reason.)</li>
<li><b>Statement II (key: true):</b> Front-end services (online forms, kiosks, CSC counters) can be launched before the back office is fully computerised, with the front end feeding manual back-end processes, as in early e-Seva and FRIENDS centres.</li></ul>
<div class="note">In doubt (key followed). Statement II is true only in a limited, transitional sense; e-governance guidance (Second ARC, 11th Report, "Promoting e-Governance") stresses that front-end services are not sustainable or efficient without back-end computerisation and process re-engineering. If II is read as false, both statements are false and no code fits, so (d) is the intended answer.</div>
<h3>The codes</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> need I to be true.</li></ul>` }
);
})();
