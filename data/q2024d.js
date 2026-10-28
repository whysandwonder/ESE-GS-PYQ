// ESE 2024 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2024-76", year: 2024, no: 76, subject: "quality", topic: "p-chart in measurement assurance", doubt: true,
q: `Consider the following advantages of p-charting method :<ol><li>Requires only go-no-go data, intuitive.</li><li>No requirement for pre-tested "standard" units.</li><li>Accounts for all errors including systematic errors.</li></ol>Which of the above advantages is/are correct ?`,
opts: ["1 only", "2 only", "1 and 2", "2 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 only (official key)</h3><p>A <b>p-chart</b> plots the fraction of nonconforming (defective) items in each sample against control limits p̄ ± 3√(p̄(1 − p̄)/n). It needs only attribute (go/no-go) data.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (advantage):</b> it needs only pass/fail data, which is cheap to collect and easy to understand.</li>
<li><b>2 (not accepted by the key):</b> the key does not count this as an advantage. When a p-chart is used to monitor a gauge or inspection system, it is checked against known reference ("standard") units; the method does depend on them.</li>
<li><b>3 (not an advantage):</b> a p-chart detects shifts in the defect rate but cannot separate measurement error from process error, and it does not identify or correct systematic errors (bias).</li></ul>
<div class="note">In doubt (key followed). We had chosen (c), reading statement 2 as an advantage: a p-chart on a production process needs only inspection results, not pre-tested standard units. The answer depends on the source's context (charting a measurement system against standards), which the question does not state. We show UPSC's answer.</div>
<div class="key">Attribute charts: p (fraction defective, variable n), np (number defective, constant n), c (defects per unit, constant area), u (defects per unit, variable area). Variables charts (x̄, R, s) need actual measurements but detect changes with smaller samples.</div>` },

{ id: "2024-77", year: 2024, no: 77, subject: "quality", topic: "Discrete distributions",
q: `Which one of the following is an example of discrete random variables ?`,
opts: ["Triangular Distribution", "Normal Distribution", "Central Limit Theorem", "Negative Binomial Distribution"], ans: 3,
analysis: `<h3>Answer: (d) Negative Binomial Distribution</h3><p>The <b>negative binomial</b> distribution counts the number of trials (or failures) until the r-th success: it takes only whole-number values, so it is <b>discrete</b>. With r = 1 it becomes the geometric distribution.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Triangular distribution</b>: continuous, defined by minimum, mode and maximum (used in PERT-type risk analysis).</li>
<li><b>(b) Normal distribution</b>: continuous, the bell curve.</li>
<li><b>(c) Central Limit Theorem</b>: is a theorem (sample means tend to a normal distribution), not a distribution.</li></ul>
<div class="key">Discrete: Bernoulli, binomial, Poisson, geometric, negative binomial, hypergeometric. Continuous: uniform, normal, exponential, gamma, Weibull, beta, triangular, lognormal.</div>` },

{ id: "2024-78", year: 2024, no: 78, subject: "quality", topic: "Conditions for quality",
q: `Almost all the quality control problems can be solved if the following conditions for manufacturing the product are met :<ol><li>The quality characteristics are within the appropriate specification tolerance limits determined based on customers' requirements.</li><li>The variability of the quality characteristics is minimized as much as possible.</li><li>The mean of each quality characteristic is as close as possible to the target value of the characteristic.</li></ol>Which of the above conditions are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> conformance: every characteristic within specification limits set from customer needs.</li>
<li><b>2 (correct):</b> low variability, the core of Six Sigma and statistical process control.</li>
<li><b>3 (correct):</b> on target: Taguchi's quality loss function L = k(y − T)² shows that loss rises as the mean moves away from the target, even within limits.</li></ul>
<div class="key">Process capability combines these: C<sub>p</sub> = (USL − LSL)/6σ (spread only); C<sub>pk</sub> = min(USL − μ, μ − LSL)/3σ (spread and centring). A capable, centred process has C<sub>pk</sub> ≥ 1.33.</div>` },

{ id: "2024-79", year: 2024, no: 79, subject: "quality", topic: "Statistical tolerancing",
q: `The manufacturing cost of the components will decrease as a result of using the probabilistic relationship because`,
opts: ["manufacturing cost decreases as the tolerance on the quality characteristic decreases", "manufacturing cost decreases as the tolerance on the quality characteristic increases", "manufacturing cost remains constant as the tolerance on the quality characteristic increases", "manufacturing cost increases as the tolerance on the quality characteristic increases"], ans: 1,
analysis: `<h3>Answer: (b) manufacturing cost decreases as the tolerance on the quality characteristic increases</h3><p>In an assembly, <b>statistical (probabilistic) tolerancing</b> uses the root-sum-square rule: σ<sub>assembly</sub> = √(Σσ<sub>i</sub>²), instead of adding worst-case tolerances. For the same assembly tolerance, each component can therefore be given a <b>wider</b> tolerance, and wider tolerances are cheaper to produce (less precise machines, less scrap and inspection).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: tighter tolerances cost <b>more</b>, not less.</li>
<li><b>(c)</b>: cost is not constant; it falls as tolerance widens.</li>
<li><b>(d)</b>: reverses the cost–tolerance relationship.</li></ul>
<div class="key">Example: 4 parts each ±0.1 mm. Worst case: ±0.4 mm. Statistical: ±√4 × 0.1 = ±0.2 mm. So for an assembly limit of ±0.4 mm, each part could have ±0.2 mm statistically: twice as wide.</div>` },

{ id: "2024-80", year: 2024, no: 80, subject: "design", topic: "Elements of machine design",
q: `It is important to carefully identify the needs and expectations of the customer prior to beginning the design of mechanical device. One of the step in formulating usually quantitative statements of expected performance levels, environmental conditions in which the device must operate, limitations on space or weight, or available materials and components that may be used. These are part of which one of the following elements of design ?`,
opts: ["Functions", "Evaluation criterias", "Design requirements", "Drawings"], ans: 2,
analysis: `<h3>Answer: (c) Design requirements</h3><p>Mott (<i>Machine Elements in Mechanical Design</i>) separates:</p>
<ul><li><b>Functions</b>: what the device must do, in general, non-numerical terms.</li><li><b>Design requirements</b>: detailed, usually <b>quantitative</b> statements: performance levels, operating environment, space and weight limits, available materials and components.</li><li><b>Evaluation criteria</b>: desirable qualities used to compare alternative designs (safety, cost, ease of use).</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a) Functions</b>: are general, not quantitative.</li>
<li><b>(b) Evaluation criteria</b>: are used to rank alternative concepts, not to state limits.</li>
<li><b>(d) Drawings</b>: are an output of design.</li></ul>
<div class="key">Mott's running example is a lawn mower: see Q81 for the functions of its parts.</div>` },

{ id: "2024-81", year: 2024, no: 81, subject: "design", topic: "Functions of machine elements",
q: `What are the functions of axles ?`,
opts: ["Support the weight of the mower. Permit easy, rolling movement. Provide for mounting on an axle. Ensure safe operation on flat or sloped lawn surfaces", "Support, safely enclose, and protect operating components, including the blade and motor. Accommodate the attachment of two axles and a handle. Permit cut grass to exit the cutting area", "Cut blades of grass and weeds while rotating at high speed. Facilitate connection to motor shaft. Operate safely when foreign objects are encountered, such as stones, sticks, or metal pieces", "Transfer the weight of mower from the housing to the wheels. Allow rotation of the wheels. Maintain location of the wheels relative to the housing"], ans: 3,
analysis: `<h3>Answer: (d)</h3><p>In Mott's lawn-mower example, the <b>axles</b> carry the mower's weight from the housing to the wheels, let the wheels rotate, and keep the wheels in position relative to the housing.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: functions of the <b>wheels</b> (support weight, roll easily, mount on an axle, operate safely on slopes).</li>
<li><b>(b)</b>: functions of the <b>housing</b> (enclose and protect components, carry axles and handle, let grass out).</li>
<li><b>(c)</b>: functions of the <b>blade</b> (cut grass, connect to the motor shaft, survive stones).</li></ul>
<div class="key">An axle carries bending loads but transmits no torque (it is stationary or the wheel turns on it); a shaft transmits torque. Axles are designed mainly for bending and deflection.</div>` },

{ id: "2024-82", year: 2024, no: 82, subject: "design", topic: "Drawing instruments",
q: `Which one of the following is/are used for drawing curves which cannot be drawn with a compass ?`,
opts: ["Scale", "Protractor", "French curves", "Set square"], ans: 2,
analysis: `<h3>Answer: (c) French curves</h3><p><b>French curves</b> are templates with edges of continuously varying curvature. They are used to draw smooth irregular curves (ellipses, parabolas, cams, graphs) through plotted points, which a compass cannot draw because their radius is not constant.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Scale</b>: measures and transfers lengths (reduced or enlarged).</li>
<li><b>(b) Protractor</b>: measures and sets out angles.</li>
<li><b>(d) Set square</b>: draws straight lines at 30°, 45°, 60° and 90°.</li></ul>
<div class="tip">Technique: fit the French curve through at least three or four points at a time, and overlap each new segment with the last one so the curve stays smooth.</div>` },

{ id: "2024-83", year: 2024, no: 83, subject: "design", topic: "Traces of a plane",
q: `A plane, extended if necessary, will meet the reference planes in lines, unless it is parallel to any one of them. These lines are called`,
opts: ["Projection lines", "Traces of the plane", "Dimension lines", "Imaginary lines"], ans: 1,
analysis: `<h3>Answer: (b) Traces of the plane</h3><p>The lines in which a plane (extended if needed) meets the HP and the VP are its <b>horizontal trace (HT)</b> and <b>vertical trace (VT)</b>. A plane parallel to a reference plane has no trace on it. The traces meet on the xy line, unless the plane is parallel to xy.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Projection lines</b> (projectors): join a point to its projections; they are perpendicular to the reference planes.</li>
<li><b>(c) Dimension lines</b>: carry measurements on a drawing.</li>
<li><b>(d) Imaginary lines</b>: not a technical term in projection.</li></ul>
<div class="key">Compare: the trace of a <b>line</b> is a point (where it meets a plane: see 2023 Q48); the trace of a <b>plane</b> is a line.</div>` },

{ id: "2024-84", year: 2024, no: 84, subject: "design", topic: "Intersection of solids",
q: `Which of the following are the methods for determining the line of intersection between surfaces of two interpenetrating solids ?`,
opts: ["Line method and cutting plane method", "Line method and box method", "Co-ordinate method and cutting plane method", "Co-ordinate method and box method"], ans: 0,
analysis: `<h3>Answer: (a) Line method and cutting plane method</h3><p>N. D. Bhatt gives two methods for the curve of intersection of two solids:</p>
<ul><li><b>Line method</b>: draw lines (generators or edges) on one solid's surface and find where they pierce the other solid; join the points.</li><li><b>Cutting-plane method</b>: pass a series of planes through both solids; each plane cuts both, and the points where the two section lines cross lie on the intersection curve.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(d)</b>: the <b>box method</b> is for isometric drawing (see 2023 Q51).</li>
<li><b>(c)</b> and <b>(d)</b>: the <b>co-ordinate method</b> is also an isometric or general drawing method, not an intersection method.</li></ul>
<div class="key">Choose cutting planes that give simple sections (straight lines or circles) on both solids, e.g. planes parallel to the axis of a cylinder or perpendicular to the axis of a cone.</div>` },

{ id: "2024-85", year: 2024, no: 85, subject: "design", topic: "Development of surfaces",
q: `Which one of the following is used for pyramids and cones in which the true length of the slant edge or the generator is used as radius ?`,
opts: ["Parallel-line development", "Radial-line development", "Triangulation development", "Approximate method"], ans: 1,
analysis: `<h3>Answer: (b) Radial-line development</h3><p>For <b>pyramids and cones</b>, all slant edges or generators meet at the apex. The development is drawn with the apex as centre and the true length of the slant edge (or generator) as radius: lines radiate from one point. For a right cone the result is a sector with angle θ = 360° × r/l.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Parallel-line development</b>: for <b>prisms and cylinders</b>, whose edges or generators are parallel.</li>
<li><b>(c) Triangulation</b>: for transition pieces and oblique cones: the surface is divided into triangles whose true sizes are found one by one.</li>
<li><b>(d) Approximate method</b>: for double-curved surfaces (spheres) that cannot be developed exactly.</li></ul>
<div class="key">Developments are used in sheet-metal work: ducts, hoppers, funnels and chimneys.</div>` },

{ id: "2024-86", year: 2024, no: 86, subject: "ca", topic: "Global Peace Index 2023",
q: `Consider the following statements regarding the Global Peace Index 2023 :<ol><li>Iceland has retained its position as the most peaceful country since the inaugural study in 2008.</li><li>Five out of the top 10 most peaceful countries in the world are located in Europe.</li></ol>Which of the above statements is/are NOT correct ?`,
opts: ["Both 1 and 2", "1 only", "2 only", "Neither 1 nor 2"], ans: 2,
analysis: `<h3>Answer: (c) 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Iceland has topped every Global Peace Index since the first edition in 2008.</li>
<li><b>2 (NOT correct):</b> in GPI 2023, <b>seven</b> of the ten most peaceful countries were in Europe: Iceland, Denmark, Ireland, Austria, Portugal, Slovenia and Switzerland. The other three were New Zealand, Singapore and Japan.</li></ul>
<div class="key">The GPI is published by the Institute for Economics and Peace (Sydney) and ranks 163 countries on 23 indicators in three domains: societal safety and security, ongoing conflict, and militarisation. In GPI 2023, Afghanistan was least peaceful and India ranked 126th.</div>` },

{ id: "2024-87", year: 2024, no: 87, subject: "ca", topic: "Henley Passport Index 2023",
q: `Consider the following statements regarding Henley Passport Index 2023 :<ol><li>Japan holds the title of the world's most powerful passport, granting visa-free access to 192 out of 227 global travel destinations.</li><li>Three European countries, namely Germany, Italy, and Spain, share the second position, with visa-free access to 190 destinations.</li></ol>Which of the above statements are NOT correct ?`,
opts: ["Both 1 and 2", "1 only", "2 only", "Neither 1 nor 2"], ans: 1,
analysis: `<h3>Answer: (b) 1 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (NOT correct):</b> in the July 2023 index, <b>Singapore</b> took first place with visa-free access to 192 of 227 destinations. Japan, top for the previous five years, fell to third.</li>
<li><b>2 (correct):</b> Germany, Italy and Spain shared second place with 190 destinations.</li></ul>
<div class="key">The Henley Passport Index ranks passports by the number of destinations reachable without a prior visa, using IATA data. India ranked 80th in July 2023. Rankings change through the year, so questions usually refer to a specific edition.</div>` },

{ id: "2024-88", year: 2024, no: 88, subject: "ca", topic: "Economy figures (2023)",
q: `Consider the following statements :<ol><li>India's Goods and Services Tax collection for the month of June 2023 reached ₹1·61 trillion, according to the Ministry of Finance.</li><li>India received its highest-ever FDI inflow of US$83·57 billion in the fiscal year 2021-2022.</li><li>The net direct tax collection in the current fiscal year has witnessed a significant growth of 16%, reaching ₹4·75 lakh crore, indicating a surge in economic activity.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> gross GST collection for June 2023 was about ₹1.61 lakh crore (₹1.61 trillion), up about 12% year on year.</li>
<li><b>2 (correct):</b> India's FDI inflow in 2021-22 was a record US$ 83.57 billion (total inflows, including reinvested earnings).</li>
<li><b>3 (correct):</b> net direct tax collections for 2023-24 up to mid-July 2023 were about ₹4.75 lakh crore, roughly 16% higher than a year earlier.</li></ul>
<div class="key">Units: 1 lakh crore = 1 trillion = 10<sup>12</sup>. Watch for questions switching between lakh crore and trillion. GST was launched on 1 July 2017.</div>` },

{ id: "2024-89", year: 2024, no: 89, subject: "ca", topic: "Hemis Festival",
q: `Consider the following statements regarding Hemis Festival :<ol><li>The Hemis Festival in Ladakh is a renowned religious celebration.</li><li>The Hemis Festival is dedicated to the birth anniversary of Lord Padmasambhava.</li><li>Hemis Festival offers a mesmerizing experience of Tibetan Tantric Buddhism.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> it is the best-known religious festival of Ladakh, held at Hemis Monastery (Drukpa lineage), near Leh.</li>
<li><b>2 (correct):</b> it marks the birth anniversary of <b>Guru Padmasambhava</b> (Guru Rinpoche), who brought Tantric Buddhism to Tibet; it falls on the 10th day of the Tibetan lunar month (June–July).</li>
<li><b>3 (correct):</b> its masked <b>Cham dances</b> by lamas enact the triumph of good over evil, in the tradition of Tibetan Tantric (Vajrayana) Buddhism.</li></ul>
<div class="key">Every 12 years (Year of the Monkey), the monastery displays a huge thangka of Padmasambhava. Other Ladakh festivals: Losar (new year), Sindhu Darshan, Dosmoche.</div>` },

{ id: "2024-90", year: 2024, no: 90, subject: "ca", topic: "Defence contracts",
q: `Ministry of Defence signed contract with which one of the following organizations for Upgraded Super Rapid Gun Mount (SRGM) and other equipment for around 3000 crores ?`,
opts: ["DRDO", "BHEL", "ISRO", "BEL"], ans: 1,
analysis: `<h3>Answer: (b) BHEL</h3><p>On 28 November 2023, the Ministry of Defence signed a contract worth about <b>₹2,956.89 crore</b> with <b>Bharat Heavy Electricals Limited</b> for <b>16 upgraded Super Rapid Gun Mounts</b> (76 mm/62 calibre) and accessories for the Indian Navy, under the Buy (Indian) category. They are made at BHEL's Haridwar plant.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) DRDO</b>: develops defence technology; it is not the supplier here.</li>
<li><b>(c) ISRO</b>: the space agency.</li>
<li><b>(d) BEL</b> (Bharat Electronics Limited): supplies radars, electronic warfare and communication systems, not the gun mount.</li></ul>
<div class="key">The SRGM is a medium-calibre gun for anti-missile and anti-aircraft defence of ships, originally of Italian (OTO Melara) design and built in India by BHEL under licence.</div>` },

{ id: "2024-91", year: 2024, no: 91, subject: "ca", topic: "Guinness records in infrastructure",
q: `Which of the following cities achieved the Guinness World Records by constructing Single Lane Bituminous Concrete Road and longest Double Decker Viaduct with Highway Flyover &amp; Metro Rail ?`,
opts: ["Amravati and Nagpur", "Mumbai and Ahmedabad", "Hyderabad and Bangalore", "Gautam Buddha Nagar and Ghaziabad"], ans: 0,
analysis: `<h3>Answer: (a) Amravati and Nagpur</h3><ul>
<li><b>Amravati</b> (Maharashtra): in June 2022, NHAI laid a 75-km single-lane stretch of bituminous concrete road on the Amravati–Akola section of NH-53 in about 105 hours, a Guinness World Record.</li>
<li><b>Nagpur</b>: Maha Metro's 3.14-km double-decker viaduct (highway flyover above, metro rail on top) entered the Guinness World Records in 2022 as the longest of its kind.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b) Mumbai and Ahmedabad</b>: are linked by the bullet-train project, not these records.</li>
<li><b>(c) Hyderabad and Bangalore</b>: not associated with these records.</li>
<li><b>(d) Gautam Buddha Nagar and Ghaziabad</b>: not associated with these records.</li></ul>
<div class="key">Both records are in Maharashtra's Vidarbha region and were announced by Union Minister Nitin Gadkari (MP from Nagpur).</div>` },

{ id: "2024-92", year: 2024, no: 92, subject: "ca", topic: "Centre of Data for Public Good",
q: `Which one of the following Institutions launched Centre of Data for Public Good (CDPG) for multidisciplinary research, bringing together experts from academia, industry, and Government to harness the power of data to benefit the public ?`,
opts: ["IISc", "IIT Madras", "DRDO", "NITI Aayog"], ans: 0,
analysis: `<h3>Answer: (a) IISc</h3><p>The <b>Centre of Data for Public Good</b> was launched in 2023 under the Foundation for Science Innovation and Development (FSID) at the <b>Indian Institute of Science</b>, Bengaluru. It builds on IISc's India Urban Data Exchange (IUDX, with the Smart Cities Mission) and Agricultural Data Exchange (ADeX), working on data sharing, privacy and responsible AI for public benefit.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) IIT Madras</b>: not the launching institution (it hosts other centres, such as for responsible AI).</li>
<li><b>(c) DRDO</b>: a defence research organisation.</li>
<li><b>(d) NITI Aayog</b>: the government think tank; it runs platforms like the National Data and Analytics Platform, but did not launch CDPG.</li></ul>
<div class="key">Related policy: India's National Data Governance Framework Policy (draft 2022) and the IndiaAI Mission (2024) promote public datasets for research and start-ups.</div>` },

{ id: "2024-93", year: 2024, no: 93, subject: "ca", topic: "AstroSat",
q: `AstroSat space telescope has crossed a major milestone by detecting 600th Gamma-Ray Burst launched by which one of the following countries ?`,
opts: ["USA", "Russia", "China", "India"], ans: 3,
analysis: `<h3>Answer: (d) India</h3><p><b>AstroSat</b>, launched by ISRO on PSLV-C30 on 28 September 2015, is India's first dedicated multi-wavelength space observatory. Its Cadmium Zinc Telluride Imager (CZTI) detected its 600th gamma-ray burst (GRB) in 2023.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) USA</b>: operates Swift and Fermi (major GRB missions) and the Hubble and James Webb telescopes.</li>
<li><b>(b) Russia</b>: operates Spektr-RG (with Germany's eROSITA).</li>
<li><b>(c) China</b>: operates the Insight-HXMT X-ray telescope.</li></ul>
<div class="key">AstroSat's five instruments observe in UV, optical and X-ray bands at once. Gamma-ray bursts are the most energetic explosions known, from collapsing massive stars or merging neutron stars. India's solar mission Aditya-L1 launched in September 2023.</div>` },

{ id: "2024-94", year: 2024, no: 94, subject: "ca", topic: "Navy ASW shallow water craft",
q: `Which one of the following ships does NOT come under Indian Navy's eight ASW Shallow Water Craft project ?`,
opts: ["Mahanav", "Mahe", "Malvan", "Mangrol"], ans: 0,
analysis: `<h3>Answer: (a) Mahanav</h3><p>The Navy is building 16 <b>Anti-Submarine Warfare Shallow Water Craft</b> (ASW SWC): eight by Cochin Shipyard and eight by GRSE. The Cochin Shipyard ships are named after ports on India's coast, beginning with "M": <b>Mahe</b>, <b>Malvan</b>, <b>Mangrol</b>, Machilipatnam, Marmagao, Mulki and others. "Mahanav" is not one of them.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Mahe</b> (Puducherry), <b>(c) Malvan</b> (Maharashtra) and <b>(d) Mangrol</b> (Gujarat): all are Cochin Shipyard ASW SWC ships, launched from 2022 onwards.</li></ul>
<div class="key">The GRSE-built ships have "A" names (Arnala, Androth, Anjadip, Amini…). INS Arnala, the first of the class, was commissioned in June 2025. They replace the older Abhay-class corvettes for coastal anti-submarine work.</div>` },

{ id: "2024-95", year: 2024, no: 95, subject: "ca", topic: "5G & Beyond Hackathon",
q: `Which Union Ministry announced '5G &amp; Beyond Hackathon 2023' aimed at shortlisting India-focused cutting-edge ideas workable beyond products and solutions ?`,
opts: ["Ministry of Science and Technology", "Ministry of Communication", "Ministry of Micro, Small and Medium Enterprises", "Ministry of Electronics and Information Technology"], ans: 1,
analysis: `<h3>Answer: (b) Ministry of Communication</h3><p>The <b>Department of Telecommunications</b> (DoT), under the Ministry of Communications, announced the "5G &amp; Beyond Hackathon 2023" to find India-specific 5G use cases and take them from idea to product, with mentoring and prize money.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Science and Technology</b>: runs DST and DBT programmes, not telecom.</li>
<li><b>(c) MSME</b>: supports small enterprises, not 5G policy.</li>
<li><b>(d) MeitY</b>: handles IT and electronics; telecom and spectrum are under DoT.</li></ul>
<div class="key">India launched 5G services on 1 October 2022. The Bharat 6G Vision (March 2023) targets a leading role in 6G by 2030; the Telecommunications Act 2023 replaced the Indian Telegraph Act 1885.</div>` },

{ id: "2024-96", year: 2024, no: 96, subject: "ca", topic: "Fire services scheme",
q: `"Scheme for Expansion and Modernization of Fire Services in the States" from the allocation of preparedness and Capacity Building Funding Window under the National Disaster Response Fund for strengthening fire services in the States was introduced by which Union Ministry ?`,
opts: ["Ministry of Family and Health Affairs", "Ministry of Youth Affairs and Sports", "Ministry of Defence", "Ministry of Home Affairs"], ans: 3,
analysis: `<h3>Answer: (d) Ministry of Home Affairs</h3><p>Disaster management, including the National Disaster Response Fund and the National Disaster Management Authority, falls under the <b>Ministry of Home Affairs</b>. In 2023 the MHA announced a ₹5,000 crore scheme for expanding and modernising state fire services, funded from the Preparedness and Capacity Building window of the NDRF.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Health and Family Welfare</b>: handles health emergencies, not fire services.</li>
<li><b>(b) Youth Affairs and Sports</b>: runs NSS and NYKS volunteer programmes.</li>
<li><b>(c) Defence</b>: the armed forces assist in disasters but do not fund state fire services.</li></ul>
<div class="key">Fire services are a state subject (Twelfth Schedule lists them among municipal functions). The 15th Finance Commission recommended that 12.5% of the NDRF's preparedness and capacity-building window go to fire services.</div>` },

{ id: "2024-97", year: 2024, no: 97, subject: "ca", topic: "Military exercises",
q: `Aim of exercise 'Nomadic Elephant' is to build positive military relations, exchange best practices, develop inter-operability, bonhomie, camaraderie and friendship between India and which one of the following countries ?`,
opts: ["Bangladesh", "Mongolia", "Botswana", "South Africa"], ans: 1,
analysis: `<h3>Answer: (b) Mongolia</h3><p><b>Nomadic Elephant</b> is an annual India–<b>Mongolia</b> joint military exercise, held alternately in the two countries since 2004. It focuses on counter-insurgency and peacekeeping operations under the UN mandate.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Bangladesh</b>: India's army exercise with Bangladesh is <b>Sampriti</b>.</li>
<li><b>(c) Botswana</b>: no major named bilateral exercise.</li>
<li><b>(d) South Africa</b>: joins India in the naval exercise IBSAMAR (with Brazil).</li></ul>
<div class="key">Other India–partner exercises: Yudh Abhyas (USA), Mitra Shakti (Sri Lanka), Surya Kiran (Nepal), Garuda Shakti (Indonesia), Dharma Guardian (Japan), Khaan Quest (multinational, hosted by Mongolia).</div>` },

{ id: "2024-98", year: 2024, no: 98, subject: "ca", topic: "SPRINT challenges",
q: `Which one of the following is associated with 'SPRINT Challenges' aimed at giving a boost to the usage of 75 new indigenous technologies/products in collaboration with Innovations for Defence Excellence, NIIO and Technology Development Acceleration Cell ?`,
opts: ["Indian Coast Guard", "Indian Air Force", "Indian Army", "Indian Navy"], ans: 3,
analysis: `<h3>Answer: (d) Indian Navy</h3><p><b>SPRINT</b> (Supporting Pole-Vaulting in R&amp;D through iDEX, NIIO and TDAC) was launched in July 2022 to induct at least 75 indigenous technologies into the <b>Indian Navy</b>, marking 75 years of independence. NIIO is the Navy's Naval Innovation and Indigenisation Organisation.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Coast Guard</b>, <b>(b) Air Force</b> and <b>(c) Army</b>: have their own indigenisation drives (e.g. iDEX challenges), but SPRINT is the Navy's programme linked to NIIO.</li></ul>
<div class="key">iDEX (Innovations for Defence Excellence, 2018) funds defence start-ups and MSMEs through challenges; positive indigenisation lists bar the import of listed items after set dates.</div>` },

{ id: "2024-99", year: 2024, no: 99, subject: "ca", topic: "RBI grievance redress",
q: `To increase the transparency and consumer awareness and handle the customer complaint a 'Centralised Receipt and Processing Centre' and 'Integrated Ombudsman Scheme' has been set up, these two schemes are related to which one of the following institutions ?`,
opts: ["NITI Aayog", "DPIIT", "ISRO", "RBI"], ans: 3,
analysis: `<h3>Answer: (d) RBI</h3><p>The <b>Reserve Bank of India – Integrated Ombudsman Scheme, 2021</b> (launched 12 November 2021) merged the three earlier ombudsman schemes (banks, NBFCs and digital transactions) into "One Nation, One Ombudsman". Complaints are received at a <b>Centralised Receipt and Processing Centre</b> at RBI, Chandigarh, and can be filed online through the CMS portal.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) NITI Aayog</b>: a policy think tank with no grievance-redress role for bank customers.</li>
<li><b>(b) DPIIT</b>: promotes industry and start-ups; it handles investment-related grievances, not banking complaints.</li>
<li><b>(c) ISRO</b>: the space agency.</li></ul>
<div class="key">The scheme is free for customers. An ombudsman can award compensation up to ₹20 lakh for loss, plus up to ₹1 lakh for time, expenses and harassment; appeals go to the Appellate Authority (an RBI Executive Director).</div>` },

{ id: "2024-100", year: 2024, no: 100, subject: "ca", topic: "V-CIP (video KYC)",
q: `These days V-CIP is simple, safe and secure. You can complete your V-CIP from wherever you are in India, you only need your PAN card and Aadhaar card. Then, what is the full form of the term "V-CIP" ?`,
opts: ["Venture Capital Identification Process", "Venture Capital Investment Process", "Voice based Customer Identification Process", "Video based Customer Identification Process"], ans: 3,
analysis: `<h3>Answer: (d) Video based Customer Identification Process</h3><p><b>V-CIP</b> is RBI's video KYC: a bank or other regulated entity verifies a customer through a live, consent-based video call with an official, checking the customer's face against Aadhaar or PAN and recording the session. RBI allowed it in January 2020 under its Master Direction on KYC.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(b)</b>: "Venture capital" has nothing to do with customer identification; VC investment is regulated by SEBI.</li>
<li><b>(c)</b>: the process uses live <b>video</b> to see the customer and documents, not voice alone.</li></ul>
<div class="key">Safeguards: the call must originate in India, the official checks liveness (to prevent spoofing), the location is geo-tagged, and the recording is stored securely. It lets banks onboard customers remotely.</div>` }
);
