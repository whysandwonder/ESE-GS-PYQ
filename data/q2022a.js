// ESE 2022 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q1–25
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2022-1", year: 2022, no: 1, subject: "quality", topic: "Total quality management",
q: `Which of the following are the elements of TQM ?<ol><li>Teamwork and Employee empowerment</li><li>Feedback mechanisms</li><li>Strong division of labour</li><li>Result oriented management</li></ol>Select the correct answer using the code given below :`,
opts: ["1 and 2 only", "3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> TQM relies on cross-functional teams and empowered employees who can solve problems and stop the line.</li>
<li><b>2 (yes):</b> Feedback from customers, processes and employees drives continuous improvement (PDCA).</li>
<li><b>3 (no):</b> A strong division of labour (Taylorism) is what TQM moves away from; it favours multi-skilling and cross-functional work.</li>
<li><b>4 (no):</b> TQM is <b>process</b>-oriented: improve the process and results follow. Deming warned against management by results and numerical targets alone.</li></ul>
<div class="tip">Core TQM elements: customer focus, leadership, employee involvement, process approach, continuous improvement, supplier partnership, fact-based decisions, communication.</div>` },

{ id: "2022-2", year: 2022, no: 2, subject: "quality", topic: "Quality characteristics",
q: `The quality characteristics can be categorized in which of the following groupings ?<ol><li>Sensory characteristics</li><li>Structural characteristics</li><li>Statistical characteristics</li><li>Time oriented characteristics</li></ol>`,
opts: ["1, 2, 3 and 4", "1 and 4 only", "2 and 3 only", "1, 2 and 4 only"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 4 only</h3><p>Juran groups quality characteristics as:</p>
<table><tr><th>Group</th><th>Examples</th></tr><tr><td>Structural</td><td>Length, weight, frequency, viscosity</td></tr><tr><td>Sensory</td><td>Taste, appearance, colour, smell</td></tr><tr><td>Time-oriented</td><td>Reliability, maintainability, durability</td></tr><tr><td>Ethical</td><td>Honesty, courtesy, integrity of service staff</td></tr></table>
<h3>Statement by statement</h3><ul><li><b>1 (yes)</b>, <b>2 (yes)</b>, <b>4 (yes)</b>: three of the groups.</li><li><b>3 (no):</b> "Statistical" is a way of measuring characteristics, not a category of them.</li></ul><div class="key">Why the grouping matters: structural characteristics are measured with instruments (variables data), sensory ones need trained panels, time-oriented ones need life testing and field data, and ethical ones are judged through customer feedback. Each needs a different control method.</div>` },

{ id: "2022-3", year: 2022, no: 3, subject: "quality", topic: "Cost of quality",
q: `What are the major categories for quality costs ?<ol><li>Prevention costs</li><li>Appraisal costs</li><li>Production costs</li><li>Internal failure costs</li></ol>`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "3 and 4 only", "1, 2, 3 and 4"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2 and 4 only</h3><p>Quality costs follow the PAF model: <b>prevention</b>, <b>appraisal</b>, <b>internal failure</b> and external failure (see 2019 Q97 for examples).</p>
<h3>Statement by statement</h3><ul><li><b>1 (yes)</b>, <b>2 (yes)</b>, <b>4 (yes)</b>: three of the four categories.</li><li><b>3 (no):</b> Ordinary production cost is the cost of making the product right first time, not a cost of quality.</li></ul>
<div class="tip">Cost of good quality = prevention + appraisal; cost of poor quality = internal + external failure. Spending on prevention usually reduces total quality cost.</div><div class="key">External failure costs (the fourth category) arise after delivery: warranty claims, returns, recalls, liability and lost goodwill; they are usually the most expensive. Juran's classic finding: quality costs can be 20–40% of sales in firms that do not manage them.</div>` },

{ id: "2022-4", year: 2022, no: 4, subject: "quality", topic: "Acceptance sampling",
q: `Consider the following statements regarding evaluating sampling plans :<ol><li>If rectifying inspection is conducted for lots rejected by the sampling plan is the average total inspection.</li><li>The average number of items inspected for a series of lots in order to make a decision is the average sample number.</li><li>The average quality level of a series of batches that leave the inspection station after coming in for inspection at a certain quality level is the average outgoing quality limit.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct, loosely worded):</b> Average total inspection (ATI) is the average number of items inspected per lot when rejected lots are 100% inspected (rectified): ATI = n + (1 − P<sub>a</sub>)(N − n).</li>
<li><b>2 (correct):</b> Average sample number (ASN) is the average number of items inspected per lot to reach a decision; it matters for double and sequential plans.</li>
<li><b>3 (wrong):</b> That describes the average outgoing quality (<b>AOQ</b>). The AOQ <b>limit</b> (AOQL) is the maximum AOQ over all incoming quality levels.</li></ul>
<div class="tip">Performance measures of sampling plans: the OC curve (P<sub>a</sub> versus p), AOQ and AOQL, ATI, ASN. See 2020 Q44 for the AOQ formula.</div>` },

{ id: "2022-5", year: 2022, no: 5, subject: "quality", topic: "Quality objectives",
q: `Consider the following statements with reference to principal quality objectives :<ol><li>The organization should achieve and sustain the quantity of the product so as to continually meet the purchaser's stated or implied needs.</li><li>The organization should provide confidence to its own management that the intended quality is being achieved and sustained.</li><li>The organization should provide confidence to the purchaser that the intended quality is being, or will be, achieved in the delivered product.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 1,
analysis: `<h3>Answer: (b) 2 and 3 only</h3><p>ISO 9000 (1987) set three principal quality objectives for an organisation:</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong as printed):</b> The objective is to achieve and sustain the <b>quality</b> of the product to meet the purchaser's needs; the statement says "quantity".</li>
<li><b>2 (correct):</b> Give its own management confidence that the intended quality is being achieved (internal quality assurance).</li>
<li><b>3 (correct):</b> Give the purchaser confidence that the intended quality is being, or will be, achieved (external quality assurance).</li></ul>
<div class="tip">ISO 9001:2015 is built on seven quality management principles: customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, relationship management.</div>` },

{ id: "2022-6", year: 2022, no: 6, subject: "quality", topic: "Design of experiments", selfCorrected: true,
q: `Trial runs are recommended for which of the following reasons ?<ol><li>Trial runs provide an opportunity to remedy the situation during the experiment.</li><li>Trial runs provide a final chance to fine-tune levels of a factor.</li><li>Trial runs provide a chance to make any needed changes in the experimental plan during the experiment.</li><li>Trial runs can help considerably in estimating the time to complete a run, the logistical support required for level changes, and total time needed to complete an experiment.</li></ol>`,
opts: ["1, 2, 3 and 4", "1 and 3 only", "2 and 4 only", "2, 3 and 4 only"], ans: 2,
analysis: `<h3>Answer: (c) 2 and 4 only</h3><p>Trial (pilot) runs are made <b>before</b> the designed experiment starts, to check that the plan is workable.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (no):</b> Trial runs come before the experiment; they are not a way to remedy problems "during" it. Changing things mid-experiment would spoil the design.</li>
<li><b>2 (yes):</b> They are a last chance to fine-tune the levels chosen for each factor (so that effects are detectable and the process still works).</li>
<li><b>3 (no):</b> Same objection as 1: the plan should be fixed before the experiment, not altered during it.</li>
<li><b>4 (yes):</b> They show how long a run takes, what logistics level changes need, and the total time required.</li></ul>
<div class="tip">DOE basics: factors and levels, replication, randomisation, blocking; full and fractional factorial designs; Taguchi orthogonal arrays.</div>` },

{ id: "2022-7", year: 2022, no: 7, subject: "quality", topic: "Sources of variation",
q: `Which one of the following is NOT a source of variation present in every process of construction ?`,
opts: ["The equipment", "The material", "The environment", "The specifications"], ans: 3,
analysis: `<h3>Answer: (d) The specifications</h3><p>Every process varies because of its inputs and conditions: equipment, material, environment, operator, method and measurement (the 6 Ms; see 2019 Q42). Specifications are the <b>targets and limits</b> against which the output is judged; they do not themselves cause variation in the process.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Equipment wears and drifts.</li><li><b>(b)</b> Materials vary between batches.</li><li><b>(c)</b> Temperature, humidity and weather affect work (e.g. concrete curing).</li></ul><div class="key">Common-cause variation is built into the process (materials, equipment wear, environment); special-cause variation comes from identifiable events (a bad batch, a broken tool). Specifications set the tolerance band that the process output must fall within; process capability (C<sub>p</sub>, C<sub>pk</sub>) compares the two.</div>` },

{ id: "2022-8", year: 2022, no: 8, subject: "energy", topic: "Environmental movement",
q: `The international dispute about modern environmental movement began with the publication of Silent Spring by`,
opts: ["Mary Daly", "Rachel Carson", "Carolyn Merchant", "Maria Mies"], ans: 1,
analysis: `<h3>Answer: (b) Rachel Carson</h3><p><i>Silent Spring</i> (1962) by marine biologist Rachel Carson documented the harm done by DDT and other pesticides to birds, ecosystems and people. It is credited with starting the modern environmental movement and led to the US ban on DDT (1972) and the creation of the US EPA (1970).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Mary Daly wrote <i>Gyn/Ecology</i> (1978), radical feminist theology.</li><li><b>(c)</b> Carolyn Merchant wrote <i>The Death of Nature</i> (1980), an ecofeminist history of science.</li><li><b>(d)</b> Maria Mies co-wrote <i>Ecofeminism</i> (1993) with Vandana Shiva.</li></ul>
<div class="tip">DDT is now restricted under the Stockholm Convention (2001), with an exemption for malaria vector control; India is one of the last producers.</div>` },

{ id: "2022-9", year: 2022, no: 9, subject: "energy", topic: "CERES principles",
q: `Which one of the following is NOT a principle of CERES ?`,
opts: ["Controlled production", "Energy conservation", "Informing the public", "Protection of the biosphere"], ans: 0,
analysis: `<h3>Answer: (a) Controlled production</h3><p>The CERES Principles (originally the Valdez Principles, 1989, after the Exxon Valdez oil spill) are a ten-point code of corporate environmental conduct: protection of the biosphere; sustainable use of natural resources; reduction and disposal of wastes; energy conservation; risk reduction; safe products and services; environmental restoration; informing the public; management commitment; audits and reports. "Controlled production" is not one of them.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b>, <b>(c)</b> and <b>(d)</b> are CERES principles.</li></ul>
<div class="tip">CERES (Coalition for Environmentally Responsible Economies) later launched the Global Reporting Initiative (GRI, 1997), now the most used sustainability reporting standard. India requires top listed companies to file Business Responsibility and Sustainability Reports (BRSR).</div>` },

{ id: "2022-10", year: 2022, no: 10, subject: "energy", topic: "Tides",
q: `The largest tidal range in the world is`,
opts: ["Bay of Fundy", "Ungava Bay", "Bristol Channel", "Turnagain Arm of Cook Inlet"], ans: 0,
analysis: `<h3>Answer: (a) Bay of Fundy</h3><p>The Bay of Fundy (between New Brunswick and Nova Scotia, Canada) has the world's largest tidal range, up to about 16 m, because its natural resonance period is close to the tidal period, amplifying the tide.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Ungava Bay (Quebec) has ranges around 15–17 m and competes for the record, but Fundy is generally recognised as the largest.</li><li><b>(c)</b> The Bristol Channel (UK) has about 14–15 m, the second largest in common rankings.</li><li><b>(d)</b> Turnagain Arm (Alaska) has about 12 m and a tidal bore.</li></ul>
<div class="tip">India's best tidal sites are the Gulf of Khambhat (about 11 m) and the Gulf of Kutch, and the Sundarbans; no large tidal plant has been built. The world's largest tidal plant is Sihwa Lake, South Korea (254 MW).</div>` },

{ id: "2022-11", year: 2022, no: 11, subject: "energy", topic: "Kyoto Protocol",
q: `Kyoto Protocol operationalizes the UN framework convention on`,
opts: ["sustainable development", "renewable energy", "climate change", "soil erosion"], ans: 2,
analysis: `<h3>Answer: (c) climate change</h3><p>The Kyoto Protocol (adopted 1997, in force 2005) operationalised the UN Framework Convention on Climate Change (1992) by setting binding emission-reduction targets for developed (Annex B) countries: an average 5.2% cut below 1990 levels in 2008–12. It created market mechanisms: emissions trading, joint implementation and the Clean Development Mechanism.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> There is no UN framework convention on sustainable development (there are the SDGs, a non-binding agenda).</li><li><b>(b)</b> Renewable energy is promoted by IRENA, not a framework convention.</li><li><b>(d)</b> Land degradation is covered by the UN Convention to Combat Desertification (1994).</li></ul>
<div class="tip">The Paris Agreement (2015) replaced Kyoto's top-down targets with nationally determined contributions from all countries. COP30 was held in Belém, Brazil (November 2025).</div>` },

{ id: "2022-12", year: 2022, no: 12, subject: "energy", topic: "Environmental ethics",
q: `According to Carson, which one of the following approaches argues that nature has intrinsic value and we should protect it because of this value ?`,
opts: ["Instrumental approach", "Axiological approach", "Eco-critical approach", "Anthropological approach"], ans: 1,
analysis: `<h3>Answer: (b) Axiological approach</h3><p>Axiology is the study of value. The axiological approach holds that nature has <b>intrinsic</b> value, value in itself, so it deserves protection regardless of its usefulness to humans.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> The instrumental approach values nature only as a means to human ends (resources, services).</li><li><b>(c)</b> Ecocriticism is a field of literary and cultural study of nature.</li><li><b>(d)</b> An anthropological (anthropocentric) approach centres human interests.</li></ul>
<div class="tip">Related positions: deep ecology (Arne Naess), land ethic (Aldo Leopold: "a thing is right when it tends to preserve the integrity, stability and beauty of the biotic community"), biocentrism (Paul Taylor).</div>` },

{ id: "2022-13", year: 2022, no: 13, subject: "energy", topic: "Gaia hypothesis",
q: `The Gaia hypothesis, which suggested that the earth should be seen as a single organism, was devised by`,
opts: ["James Lovelock", "Francoise d' Eaubonne", "Earnest Haeckel", "Paul Ehrlich"], ans: 0,
analysis: `<h3>Answer: (a) James Lovelock</h3><p>James Lovelock (with Lynn Margulis), in the 1970s, proposed that the Earth's living organisms and their inorganic surroundings form a self-regulating system that maintains conditions suitable for life, as if the planet were a single organism ("Gaia", after the Greek earth goddess).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Françoise d'Eaubonne coined the term "ecofeminism" (1974).</li><li><b>(c)</b> Ernst Haeckel coined the word "ecology" (1866).</li><li><b>(d)</b> Paul Ehrlich wrote <i>The Population Bomb</i> (1968) and the I = PAT equation.</li></ul>` },

{ id: "2022-14", year: 2022, no: 14, subject: "energy", topic: "Energy sources",
q: `Energy used by man does NOT originate from which one of the following sources ?`,
opts: ["Radiant energy", "Geothermal power", "Frictional energy", "Gravitational energy"], ans: 2,
analysis: `<h3>Answer: (c) Frictional energy</h3><p>All energy humans use comes from a few primary sources: the Sun's radiant energy (directly as solar, and indirectly as fossil fuels, wind, hydro, biomass), the Earth's internal heat (geothermal), gravitational energy of the Moon and Sun (tides), and nuclear energy. Friction is not a source: it converts other forms of energy into (mostly wasted) heat.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Radiant (solar) energy is the main source.</li><li><b>(b)</b> Geothermal comes from radioactive decay and primordial heat inside the Earth.</li><li><b>(d)</b> Gravitational energy drives tides (tidal power) and, with solar evaporation, hydropower.</li></ul>` },

{ id: "2022-15", year: 2022, no: 15, subject: "pm", topic: "Project selection",
q: `The term "Sacred Cow" is often used to denote a project that`,
opts: ["a powerful, high-ranking official is advocating", "facts are advocating", "sound reasoning is advocating", "less weaknesses are advocating"], ans: 0,
analysis: `<h3>Answer: (a) a powerful, high-ranking official is advocating</h3><p>In project selection (Meredith and Mantel's non-numeric models), a "sacred cow" is a project suggested by a senior, powerful official; it is pursued because of who backs it, not because of formal analysis, and it continues until it succeeds or the sponsor admits failure.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> and <b>(c)</b> Projects backed by facts and reasoning are chosen through numeric models (NPV, scoring), the opposite of a sacred cow.</li><li><b>(d)</b> "Less weaknesses" is not a selection criterion.</li></ul>
<div class="tip">Other non-numeric models: operating necessity, competitive necessity, product line extension, comparative benefit (Q-sort). Numeric models: payback, NPV, IRR, weighted scoring.</div>` },

{ id: "2022-16", year: 2022, no: 16, subject: "pm", topic: "Estimating approaches",
q: `Which one of the following is NOT a condition for preferring Top-Down Time and Cost Estimates ?`,
opts: ["Strategic decision making", "Cost and time important", "High uncertainty", "Internal, small project"], ans: 1,
analysis: `<h3>Answer: (b) Cost and time important</h3><p>Gray and Larson list when to prefer each approach:</p>
<table><tr><th>Top-down (macro) estimates</th><th>Bottom-up (micro) estimates</th></tr><tr><td>Strategic decision making</td><td>Cost and time important</td></tr><tr><td>High uncertainty</td><td>Fixed-price contract</td></tr><tr><td>Internal, small project</td><td>Customer wants details</td></tr><tr><td>Cost-plus contract; unstable scope</td><td></td></tr></table>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> are listed for top-down estimating.</li></ul>
<div class="tip">Top-down methods: consensus, ratio (parametric), apportion, function point, learning curve. Bottom-up: template, parametric per work package, detailed WBS estimates.</div>` },

{ id: "2022-17", year: 2022, no: 17, subject: "pm", topic: "Network computations",
q: `In Network Computation Process, which one of the following is correct for forward pass ?`,
opts: ["It starts with the first project activity(ies) and traces each path (chain of sequential activities) through the network to the last project activity(ies)", "This is the longest path in the network, which will delay the project", "It starts with the last project activity(ies) on the network", "It starts with the last project activity(ies) and traces each path (chain of sequential activities) through the network to the first project activity(ies)"], ans: 0,
analysis: `<h3>Answer: (a) It starts with the first project activity(ies) and traces each path through the network to the last project activity(ies)</h3><p>The forward pass computes early start and early finish times from the start of the network to the end: ES = largest EF of predecessors, EF = ES + duration. It gives the earliest project completion time.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> describes the critical path.</li><li><b>(c)</b> and <b>(d)</b> describe the <b>backward</b> pass (late finish and late start, from the end back to the start).</li></ul>
<div class="key">Slack (float) = LS − ES = LF − EF; activities with zero slack form the critical path.</div>` },

{ id: "2022-18", year: 2022, no: 18, subject: "pm", topic: "Industrial sickness",
q: `Consider the following statements regarding production :<br>The major aspects of production that may lead to sickness are<ol><li>increase in the cost of production.</li><li>decrease in the quantity of production.</li><li>quality of product not meeting the standards/customer expectation.</li><li>Producing more quantity than can be sold, leading to accumulation of stock.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1, 2, 3 and 4", "2 and 3 only", "1, 3 and 4 only"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2, 3 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Rising production costs squeeze margins and competitiveness.</li>
<li><b>2 (yes):</b> Falling output (under-utilised capacity) spreads fixed costs over fewer units.</li>
<li><b>3 (yes):</b> Poor quality loses customers and brings rejections and returns.</li>
<li><b>4 (yes):</b> Overproduction locks up working capital in unsold stock.</li></ul>
<div class="tip">A sick industrial unit was defined under SICA, 1985 (accumulated losses equal to or exceeding net worth), handled by BIFR; both were replaced by the Insolvency and Bankruptcy Code, 2016 (NCLT). MSMEs have a pre-packaged insolvency route (2021).</div>` },

{ id: "2022-19", year: 2022, no: 19, subject: "pm", topic: "Types of projects",
q: `Which one of the following projects are those which are to be completed within a stipulated time, even at the cost of ending up with a higher project cost ?`,
opts: ["Normal projects", "Business projects", "Crash projects", "Research projects"], ans: 2,
analysis: `<h3>Answer: (c) Crash projects</h3><p>A crash project must be finished by a fixed date (or as fast as possible), and extra cost is accepted to achieve it: overtime, extra resources, premium suppliers. Examples: rebuilding after a disaster, temporary hospitals during the pandemic, a deadline-bound event.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Normal projects follow normal durations and costs.</li><li><b>(b)</b> "Business projects" is a general label.</li><li><b>(d)</b> Research projects have uncertain outcomes and durations.</li></ul>
<div class="tip">Indian project classifications (Chitkara): normal, crash and disaster projects. A disaster project is completed in the least time regardless of cost.</div>` },

{ id: "2022-20", year: 2022, no: 20, subject: "ca", topic: "Monetary policy",
q: `Which one of the following policies is concerned with changing the supply of money stock and the rate of interest, for the purpose of stabilizing the economy at full potential output level ?`,
opts: ["Commercial policy", "Fiscal policy", "Monetary policy", "Social policy"], ans: 2,
analysis: `<h3>Answer: (c) Monetary policy</h3><p>Monetary policy (run by the central bank) changes money supply and interest rates to keep inflation in check and output near potential. In India the Monetary Policy Committee sets the repo rate with a flexible inflation target of 4% ± 2% (CPI).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Commercial (trade) policy covers tariffs and trade rules.</li><li><b>(b)</b> Fiscal policy uses taxes, spending and borrowing (see 2019 Q6).</li><li><b>(d)</b> Social policy covers welfare, health and education.</li></ul>
<p><b>Latest update (as of 2026):</b> the MPC raised the repo rate by 25 basis points to 5.50% on 7 October 2026, shifting its stance to "calibrated tightening".</p>` },

{ id: "2022-21", year: 2022, no: 21, subject: "materials", topic: "Diffusion", doubt: true,
q: `Which one of the following is NOT a classification of microscopic diffusion ?`,
opts: ["Inter-diffusion", "Vacancy diffusion", "Surface diffusion", "Lattice diffusion"], ans: 1,
analysis: `<h3>Answer: (b) Vacancy diffusion (official key)</h3><p>The key classifies diffusion by the type and path of motion: inter-diffusion (two different species mixing), surface diffusion, grain-boundary diffusion and lattice (volume) diffusion. "Vacancy diffusion" is instead an atomic <b>mechanism</b> (an atom jumps into a neighbouring vacancy), alongside interstitial diffusion.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Inter-diffusion (impurity diffusion) is a type of diffusion.</li><li><b>(c)</b> Surface diffusion is the fastest path.</li><li><b>(d)</b> Lattice (bulk) diffusion is the slowest path.</li></ul>
<div class="note">In doubt (key followed). Textbook schemes differ: Callister lists vacancy and interstitial diffusion as the two <b>mechanisms</b>, and self-diffusion and interdiffusion as types, with surface, grain-boundary and lattice as paths. Interdiffusion is often described as a macroscopic phenomenon, so our own answer was (a). The question's categories mix these schemes.</div>
<div class="key">Diffusion coefficient D = D<sub>0</sub> e<sup>−Q/RT</sup>; Fick's first law J = −D dC/dx. Rates: surface &gt; grain boundary &gt; lattice.</div>` },

{ id: "2022-22", year: 2022, no: 22, subject: "materials", topic: "Polymer crystallinity",
q: `Many bulk polymers that are crystallized from a melt, are semi crystalline and form which one of the following structures ?`,
opts: ["Spherolite structure", "Spherelite structure", "Spherulite structure", "Spherilite structure"], ans: 2,
analysis: `<h3>Answer: (c) Spherulite structure</h3><p>Polymers crystallised from the melt form <b>spherulites</b>: spherical aggregates of chain-folded crystalline lamellae (ribbons) radiating from a central nucleus, with amorphous material between them. Under polarised light they show a "Maltese cross" pattern. Polyethylene, polypropylene and nylon form spherulites.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are misspellings; only "spherulite" is the correct term.</li></ul>
<div class="tip">Degree of crystallinity rises with linear chains, slow cooling and simple repeat units; crystallinity increases density, stiffness and strength. Single crystals grown from dilute solution are thin platelets of folded chains.</div>` },

{ id: "2022-23", year: 2022, no: 23, subject: "materials", topic: "Ionic bonding",
q: `Positive and negative ions by virtue of their net electrical charge, attract one another; these attractive bonding forces are`,
opts: ["Coulombic", "Magnetic", "Electromagnetic", "Non-magnetic"], ans: 0,
analysis: `<h3>Answer: (a) Coulombic</h3><p>The attraction between oppositely charged ions follows Coulomb's law: force ∝ q₁q₂/r², attractive energy E<sub>A</sub> = −A/r. These are the bonding forces in ionic solids (NaCl, MgO).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Magnetic forces act between moving charges or magnetic moments.</li><li><b>(c)</b> "Electromagnetic" is the broad interaction that includes Coulomb forces, but the specific name for forces between static charges is Coulombic.</li><li><b>(d)</b> "Non-magnetic" is not a force.</li></ul>
<div class="key">Net energy E<sub>N</sub> = −A/r + B/r<sup>n</sup> (attraction plus short-range repulsion); its minimum gives the equilibrium spacing and bond energy.</div>` },

{ id: "2022-24", year: 2022, no: 24, subject: "materials", topic: "Plastic deformation",
q: `The process by which plastic deformation is produced by dislocation motion is termed as`,
opts: ["Plane slit", "Seepage", "Slip", "Twinning"], ans: 2,
analysis: `<h3>Answer: (c) Slip</h3><p>Slip is plastic deformation by the movement of dislocations along slip planes (usually the most densely packed planes and directions). Because only one row of bonds breaks at a time, the stress needed is far lower than for shearing a perfect crystal.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> "Plane slit" is not a term.</li><li><b>(b)</b> Seepage is fluid flow through soil.</li><li><b>(d)</b> Twinning is a different mechanism: a region of the crystal shears into a mirror-image orientation; it is not produced by ordinary dislocation glide and is important in HCP and BCC metals at low temperatures.</li></ul>` },

{ id: "2022-25", year: 2022, no: 25, subject: "materials", topic: "Polymer isomerism",
q: `Stereoisomerism denotes the situation in which atoms are linked together`,
opts: ["in the different order and also differ in their spatial arrangement", "in the different order but same in their spatial arrangement", "in the same order (head-to-tail) but differ in their spatial arrangement", "in the same order (head-to-tail) and also same in their spatial arrangement"], ans: 2,
analysis: `<h3>Answer: (c) in the same order (head-to-tail) but differ in their spatial arrangement</h3><p>In stereoisomers the atoms are bonded in the same sequence but arranged differently in space. In polymers this gives <b>tacticity</b>: isotactic (side groups all on one side), syndiotactic (alternating) and atactic (random). Geometric (cis/trans) isomerism, e.g. natural rubber (cis-isoprene) versus gutta-percha (trans), is the other form.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(b)</b> A different bonding order makes structural (constitutional) isomers, not stereoisomers.</li><li><b>(d)</b> Same order and same arrangement is simply the same molecule.</li></ul>` }
);
