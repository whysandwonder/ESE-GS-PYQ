// Standards and Quality Practices in Production, Construction, Maintenance and Services: notes book from ESE Paper I PYQs 2017–2026.
addBook("quality", [
 ["q1", "Quality concepts and TQM", [["q1-1", "Quality, its characteristics and costs"], ["q1-2", "TQM, quality gurus, circles and ISO 9000"]]],
 ["q2", "Statistical quality control", [["q2-1", "Variation and control charts"], ["q2-2", "Acceptance sampling, inspection and measurement"]]],
 ["q3", "Six Sigma and robust design", [["q3-1", "Six Sigma, DMAIC, Taguchi methods and DOE"]]],
 ["q4", "Reliability, production and service quality", [["q4-1", "Reliability and maintenance"], ["q4-2", "Production systems, JIT and service quality"]]],
 ["q5", "Quality in construction", [["q5-1", "Quality control and testing of structures"]]]
]);

addBookTopic("quality", "q1-1", `
<h3>What quality means</h3>
<ul><li><b>Fitness for use</b> (Juran); <b>conformance to requirements</b> (Crosby); meeting or exceeding customer expectations; <b>loss to society</b> from deviation from target (Taguchi).</li>
<li><b>Quality of design</b> (grade: how good the specification is) versus <b>quality of conformance</b> (how well the product meets the specification). In construction, conformance depends on site supervision, workmanship, materials and inspection (2020 Q46).</li>
<li>Quality is essential for survival and growth in competitive markets, but it does not by itself guarantee profit (2018 Q84).</li></ul>
<h3>Quality characteristics</h3>
<table><tr><th>Group</th><th>Examples</th></tr>
<tr><td>Physical / structural</td><td>Length, weight, strength, viscosity</td></tr>
<tr><td>Sensory</td><td>Taste, colour, appearance, smell</td></tr>
<tr><td>Time-oriented</td><td>Reliability, durability, maintainability</td></tr>
<tr><td>Ethical</td><td>Honesty and courtesy of service staff</td></tr></table>
<p>"Statistical" is not a category (2022 Q2, 2026 Q45).</p>
<h3>Conditions for good quality</h3>
<p>Characteristics within specification limits set from customer needs; variability as small as possible; mean as close as possible to target (2024 Q78).</p>
<h3>Cost of quality (PAF model)</h3>
<table><tr><th>Category</th><th>Examples</th></tr>
<tr><td><b>Prevention</b></td><td>Quality planning, training, process control, supplier development</td></tr>
<tr><td><b>Appraisal</b></td><td>Inspection, testing, audits, calibration</td></tr>
<tr><td><b>Internal failure</b></td><td>Scrap, rework, downtime before delivery</td></tr>
<tr><td><b>External failure</b></td><td>Warranty, returns, recalls, liability, lost goodwill</td></tr></table>
<ul><li>"Production costs" are not a quality-cost category (2022 Q3).</li>
<li>Introducing a quality system <b>raises prevention costs</b> at first, but total quality cost falls because failure costs drop more (2019 Q97).</li></ul>
<h3>Quality objectives and responsibility</h3>
<ul><li>Quality is the responsibility of every department: product design, purchasing, production, inspection, marketing and service (2020 Q41). Top management owns it.</li>
<li>Principal quality objectives: improve fitness for use, reduce variability and waste, meet regulations; they should be measurable (2022 Q5).</li>
<li><b>Product realisation</b> covers marketing (customer needs), design and development, purchasing, production and delivery (2022 Q90).</li>
<li>Product improvement cycle: design it → make it → sell it → test it in service → redesign (Deming's cycle, 2019 Q37).</li></ul>`);

addBookTopic("quality", "q1-2", `
<h3>Total Quality Management</h3>
<ul><li>The most fundamental attribute of TQM is the <b>direct involvement of top management</b> (2017 Q45).</li>
<li>Elements: customer focus, <b>teamwork and employee empowerment</b>, <b>feedback</b> and continuous improvement, process approach, fact-based decisions, supplier partnership. TQM is process-oriented, not result-oriented, and rejects rigid division of labour (2022 Q1).</li>
<li>Organisation: <b>flatter structure</b>, wide span of control, authority pushed down (2025 Q46).</li>
<li>Total quality approaches: quality as opportunity for improvement, prevention rather than inspection, everyone's involvement (2019 Q44).</li>
<li>General subareas of quality control: <b>off-line</b> QC (design stage: product and process design, Taguchi), <b>statistical process control</b>, <b>acceptance sampling</b> (2020 Q42).</li>
<li>Major QC methods: inspection, SPC, sampling, audits. "Loading" is a production-planning term, not a QC method (2021 Q92).</li></ul>
<h3>Quality gurus</h3>
<table><tr><th>Guru</th><th>Key ideas</th></tr>
<tr><td><b>Deming</b></td><td>14 points; PDCA cycle; <b>System of Profound Knowledge</b>: appreciation of a system, <b>knowledge of variation</b>, theory of knowledge, <b>psychology</b> (2019 Q35). Seven <b>deadly diseases</b>, most arising from <b>a lack of understanding of variation</b> (2021 Q90)</td></tr>
<tr><td><b>Juran</b></td><td>Fitness for use; quality trilogy: planning, control, improvement; Pareto principle (vital few)</td></tr>
<tr><td><b>Crosby</b></td><td>Zero defects; quality is free; conformance to requirements; <b>14-step plan</b>: management commitment, quality improvement team, measurement, cost of quality, awareness, corrective action, zero-defects planning, training, zero-defects day, goal setting, error-cause removal, recognition, quality councils, do it over again. "Ad hoc committee for zero defects" is step 7 (2020 Q43)</td></tr>
<tr><td>Ishikawa</td><td>Cause-and-effect (fishbone) diagram; quality circles; seven QC tools</td></tr>
<tr><td>Feigenbaum</td><td>Total quality control</td></tr>
<tr><td>Taguchi</td><td>Loss function; robust design (see Six Sigma topic)</td></tr></table>
<h3>Quality circles</h3>
<ul><li>A small group (typically 6–12) of employees from the <b>same work area</b> who meet <b>voluntarily</b> and regularly to identify, analyse and solve work problems, with management support (2018 Q37).</li>
<li>They improve the organisation through people's participation, not through incentives alone (2017 Q97 tests the reason).</li></ul>
<h3>ISO 9000 and audits</h3>
<ul><li>ISO 9001 specifies requirements for a quality management system; certification by third-party audit. Seven principles: customer focus, leadership, engagement, process approach, improvement, evidence-based decisions, relationship management.</li>
<li>Under ISO 9000, the <b>vendor (supplier)</b> establishes, documents and maintains procedures for post-delivery service (2019 Q38).</li>
<li><b>Internal audits</b> verify that the quality system is implemented and effective, not that each product conforms (that is inspection) (2017 Q46).</li>
<li>In the <b>preproduction phase</b>, the management function stressed is staffing/planning; see 2025 Q41.</li></ul>`);

addBookTopic("quality", "q2-1", `
<h3>Variation</h3>
<ul><li><b>Common (chance, random) causes</b>: many small, inherent influences; hard to trace and control even under the best operation (2026 Q47).</li>
<li><b>Assignable (special) causes</b>: larger, identifiable (tool wear, bad batch, wrong setting); can be traced and removed. Control charts detect them.</li>
<li>Sources of variation in every process: materials, machines, methods, people (operators), environment, measurement. <b>Specifications</b> are not a source (2022 Q7). In piece-part production: within-piece, piece-to-piece, time-to-time (2020 Q49). In construction QC: materials, workmanship, testing (2019 Q42).</li></ul>
<h3>Control charts</h3>
<table><tr><th>Chart</th><th>Data</th><th>Limits / centre</th></tr>
<tr><td>X̄ and R</td><td>Variables (measured)</td><td>X̄̄ ± A₂R̄; D₃R̄, D₄R̄</td></tr>
<tr><td><b>p</b></td><td>Fraction defective; constant <b>or variable</b> n</td><td>p̄ ± 3√(p̄(1 − p̄)/n); p̄ = total defectives ÷ total inspected (2025 Q48)</td></tr>
<tr><td><b>np</b></td><td>Number defective; constant n</td><td>np̄ = total defectives ÷ number of samples (2025 Q49)</td></tr>
<tr><td><b>c</b></td><td>Defects per unit, constant area (e.g. complaints per day)</td><td>c̄ ± 3√c̄ (Poisson) (2025 Q42)</td></tr>
<tr><td>u</td><td>Defects per unit, variable area</td><td>ū ± 3√(ū/n)</td></tr></table>
<ul><li>Attribute charts evaluate the <b>quality performance of operating and management</b> levels and need only go/no-go data (2020 Q50). p-chart advantages: go/no-go data, intuitive (2024 Q76).</li>
<li><b>Out-of-control rules</b> (Western Electric): one point beyond 3σ; 2 of 3 beyond 2σ on one side; 4 of 5 beyond 1σ; 8 in a row on one side; runs and trends of 6–7 points (2021 Q91 asks which is not a rule).</li></ul>
<h3>The seven QC tools</h3>
<p>Check sheet, histogram, Pareto chart, cause-and-effect diagram, scatter diagram, control chart, flowchart/stratification.</p>
<p><b>Pareto diagram</b> steps (2021 Q96): decide categories and time period → collect data → total each category → arrange in descending order → draw bars and cumulative line. The "vital few" causes give most of the problem (80/20).</p>
<h3>Statistical tolerancing</h3>
<p>Assembly tolerance by root-sum-square, σ<sub>asm</sub> = √Σσᵢ², instead of the worst-case sum, so each component can have a <b>wider</b> tolerance, which lowers manufacturing cost (2024 Q79).</p>`);

addBookTopic("quality", "q2-2", `
<h3>Acceptance sampling</h3>
<ul><li>Decide on a lot from a sample: accept if defectives d ≤ c (acceptance number).</li>
<li><b>AQL</b> (acceptable quality level): defect level the producer wants accepted most of the time; producer's risk α (≈5%) is rejecting a good lot.</li>
<li><b>LTPD</b> (lot tolerance percent defective): the worst quality the consumer will tolerate; consumer's risk β (≈10%) is accepting such a lot. The question in 2017 Q49 calls it the maximum percentage defective the consumer may find acceptable.</li>
<li><b>OC curve</b>: probability of acceptance versus lot quality. The ideal OC curve is a vertical step.</li>
<li><b>AOQ</b> (average outgoing quality) with rectifying inspection: AOQ = P<sub>a</sub> p (N − n)/N (2020 Q44). Its maximum is the <b>AOQL</b>. Rejected lots are 100% inspected; ATI (average total inspection) = n + (1 − P<sub>a</sub>)(N − n) (2022 Q4).</li>
<li>Plans: single, double, multiple and sequential sampling; standards IS 2500 / MIL-STD-105.</li></ul>
<h3>Probability in inspection</h3>
<ul><li>Fraction defective p = defectives ÷ produced: 20 of 4000 → 0.005 (2019 Q39).</li>
<li>Distributions: binomial (defectives in a sample), Poisson (defects, rare events), hypergeometric (small lots without replacement), normal (measurements).</li>
<li>Discrete variables: Bernoulli, binomial, Poisson, geometric, <b>negative binomial</b>, hypergeometric. Continuous: normal, uniform, exponential, triangular (2024 Q77).</li>
<li><b>Reliability number</b> = 100 − (defective units ÷ units tested × 100) (2025 Q43).</li></ul>
<h3>Measurement system analysis</h3>
<p>Total observed variability = part-to-part variation + measurement variation (gauge <b>repeatability</b>: same operator and gauge; <b>reproducibility</b>: between operators). Gauge R&amp;R below 10% of total is good. "Variability between part dimensions" is the product variation itself, not a component of measurement error (2021 Q94).</p>`);

addBookTopic("quality", "q3-1", `
<h3>Six Sigma</h3>
<ul><li>Developed at <b>Motorola</b> (1986, Bill Smith); popularised by GE. Target <b>3.4 defects per million opportunities</b> (with a 1.5σ long-term shift), i.e. yield 99.99966% ≈ <b>99.9997%</b> (2023 Q41, Q44).</li>
<li>A structured, process-oriented, <b>data-driven</b> methodology and management system for finding root causes, not just a toolbox (2018 Q34, 2023 Q42).</li>
<li>As sigma level rises, the <b>cost of poor quality falls</b> and customer satisfaction rises (2023 Q43).</li></ul>
<table><tr><th>Sigma</th><th>DPMO</th></tr><tr><td>3σ</td><td>66,807</td></tr><tr><td>4σ</td><td>6,210</td></tr><tr><td>5σ</td><td>233</td></tr><tr><td>6σ</td><td>3.4</td></tr></table>
<h3>DMAIC and DFSS</h3>
<ul><li><b>Define</b> (problem, customers, scope, charter, SIPOC) → <b>Measure</b> (baseline, measurement system) → <b>Analyze</b> (cause and effect: how inputs x affect outputs y; root causes) → <b>Improve</b> → <b>Control</b> (2024 Q75, 2025 Q47).</li>
<li><b>Design for Six Sigma</b> applies the idea to new designs: DMADV (Define, Measure, Analyse, Design, Verify) or IDOV, with QFD and robust design.</li>
<li>Roles: Champion, Master Black Belt, Black Belt (full-time), Green Belt (part-time).</li></ul>
<h3>Taguchi methods and robust design</h3>
<ul><li><b>Loss function</b> L = k(y − T)²: any deviation from target is a loss, even inside the specification.</li>
<li><b>Robust design</b>: choose control-factor settings that make performance insensitive to <b>noise factors</b> (uncontrollable variation). Both are standard TQM improvement methods (2026 Q46).</li>
<li><b>Robust process</b> example: a turning operation giving good surface finish over a wide range of cutting speeds. A racket or aircraft performing well in varied conditions is robust <b>product</b> design; backup power is reliability (2026 Q6).</li>
<li>Montgomery's elastomeric-connector example: control factors interference, wall thickness, insertion depth, adhesive; <b>noise factors conditioning time, temperature and humidity</b> (2025 Q44).</li>
<li>Signal-to-noise ratios: smaller-the-better, larger-the-better, nominal-the-best; orthogonal arrays reduce the number of runs.</li></ul>
<h3>Design of experiments</h3>
<p>Varies several factors together to find main effects and interactions efficiently (factorial and fractional factorial designs). <b>Trial runs</b> check the equipment, procedure and ranges before the full experiment, and reveal practical problems (2022 Q6).</p>`);

addBookTopic("quality", "q4-1", `
<h3>Reliability</h3>
<ul><li><b>Reliability</b> = probability that an item performs its function for a stated time under stated conditions. With constant failure rate λ: R(t) = e<sup>−λt</sup>, MTTF = 1/λ.</li>
<li><b>Bathtub curve</b>: infant mortality (decreasing rate) → useful life (constant, random failures) → wear-out (increasing). Weibull shape β &lt; 1, = 1, &gt; 1 for these.</li>
<li>Series system R = R₁R₂…; parallel (redundant) R = 1 − Π(1 − Rᵢ).</li>
<li><b>Non-reliability performance measures</b> of a car: fuel efficiency, economic efficiency, ride quality, emissions (2023 Q38).</li>
<li><b>Degradation models</b>: with infinitely many states (K = ∞), degradation X(t) is non-decreasing, a continuous-time stochastic process, and failure occurs when it crosses a threshold (2023 Q40).</li></ul>
<h3>Maintenance and service of products</h3>
<ul><li>Maintainability is designed in: accessibility, modularity, standard parts, diagnostics.</li>
<li><b>Total Productive Maintenance</b>: productive maintenance with <b>total employee participation</b>, including autonomous maintenance by operators; aims at zero breakdowns and maximum overall equipment effectiveness (OEE = availability × performance × quality) (2018 Q86).</li></ul>
<h3>Product liability</h3>
<p>Prevention: safe design and testing, clear warnings and instructions, quality control, records and traceability, recall procedures. <b>Cost</b> is not a prevention approach (2020 Q35).</p>`);

addBookTopic("quality", "q4-2", `
<h3>Production systems</h3>
<table><tr><th>System</th><th>Features</th></tr>
<tr><td>Job (project)</td><td>One-off, general-purpose machines, skilled labour</td></tr>
<tr><td><b>Batch</b></td><td>Medium volumes in lots; <b>loading and scheduling</b> are the main problems (2017 Q50)</td></tr>
<tr><td>Mass / flow</td><td>Large volume, line layout, special machines; line balancing is key</td></tr>
<tr><td>Continuous process</td><td>Chemicals, refineries</td></tr></table>
<ul><li><b>Line balancing</b>: cycle time C; minimum stations = Σt/C; balance delay = (nC − Σt)/(nC) × 100, i.e. idle time as a percentage (2017 Q66 gives 14%).</li>
<li><b>Mass customisation</b>: tailoring mass-produced items (cars, burgers) to individual customers using modular design and flexible processes (2024 Q74).</li>
<li><b>Just-in-time</b>: produce and deliver the exact quantity at the exact time needed; minimal inventory; pull system with kanban; needs reliable suppliers and quality at source (2018 Q85).</li>
<li>Boring <b>enlarges and trues</b> a drilled hole (2017 Q41).</li></ul>
<h3>Suppliers</h3>
<p>Supplier performance is judged on quality, delivery, cost and commercial responsiveness: speed and accuracy of <b>quotations</b>, handling of queries (2021 Q93).</p>
<h3>Service quality</h3>
<ul><li>Factors: timeliness, accuracy, courtesy, consistency, convenience, completeness (2019 Q40).</li>
<li>SERVQUAL dimensions (RATER): reliability, assurance, tangibles, empathy, responsiveness. Service quality = perception − expectation.</li>
<li>A measure correlating with customer satisfaction: the number of <b>complimentary responses</b> about human traits of staff (2020 Q45).</li>
<li><b>Internal factors</b> shaping perception are those the firm controls: its own reports and communication, staff motivation and customer participation. Knowledge explosion and social values are external (2025 Q45).</li></ul>`);

addBookTopic("quality", "q5-1", `
<h3>Quality control of concrete</h3>
<ul><li>Characteristic strength f<sub>ck</sub>: strength below which not more than 5% of results fall. Target mean f<sub>m</sub> = f<sub>ck</sub> + 1.65s (IS 456 / IS 10262).</li>
<li>Standard deviation of test results s = √[Σ(X − X̄)²/(N − 1)] (2020 Q48). Assumed s for M20–M25 ≈ 4 N/mm².</li>
<li>Controls: material testing, batching by weight, w/c ratio, slump, cube tests at 7 and 28 days, curing.</li></ul>
<h3>Prestressed concrete</h3>
<p>Inspection points: correct tendon profile and position, tensioning force and elongation records, anchorage, grouting of ducts, and stressing only after concrete reaches transfer strength (2020 Q47).</p>
<h3>Testing structures</h3>
<ul><li>To check the structural adequacy of a doubtful structure, a <b>full-scale load test</b> is the definitive method (2019 Q41).</li>
<li>Non-destructive tests: rebound hammer, ultrasonic pulse velocity, cover meter, core tests (partly destructive).</li></ul>
<h3>TQM in construction</h3>
<ul><li>Constraints: each project is unique and temporary, the workforce is transient, many subcontractors, site conditions vary; difficult to build long-term improvement (2019 Q45).</li>
<li>The characteristic that makes TQM hard: the construction process is <b>relatively short</b> in duration, so teams disband before improvement matures (2021 Q95).</li></ul>`);
