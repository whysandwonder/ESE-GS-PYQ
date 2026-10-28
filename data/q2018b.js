// ESE 2018 Prelims Paper I, Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2018-26", year: 2018, no: 26, subject: "ca", topic: "Welfare economics", doubt: true,
q: `Which of the following concepts are relatable to income of members of the public while considering public welfare ?<ol><li>Sensitivity of demand</li><li>Elasticity of demand</li><li>Sensitivity of expenditure</li><li>Elasticity of expenditure</li></ol>`,
opts: ["1 and 2 only", "2 and 3 only", "3 and 4 only", "1 and 4 only"], ans: 2,
analysis: `<h3>Answer: (c) 3 and 4 only (official key)</h3><p>The key links people's <b>income</b> to how their <b>expenditure</b> responds: as incomes change, the share spent on necessities, comforts and luxuries changes (Engel's law: the share of food falls as income rises). This is measured by the sensitivity or elasticity of expenditure with respect to income, and is used in welfare analysis, poverty lines and consumer price index weights.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (not in the key's answer):</b> "Sensitivity of demand" usually refers to how quantity demanded responds to price.</li>
<li><b>2 (not in the key's answer):</b> "Elasticity of demand" without qualification means price elasticity.</li>
<li><b>3 (in the key's answer):</b> Sensitivity of expenditure to income.</li>
<li><b>4 (in the key's answer):</b> Elasticity of expenditure (expenditure elasticity, the Engel elasticity).</li></ul>
<div class="note">In doubt (key followed). Our own working picked (a): the standard textbook concept that relates demand to income is the <b>income elasticity of demand</b>, which is a form of statement 2 (and its "sensitivity" in statement 1). The question does not say which variable each concept is measured against, so either pair can be argued; the key chose the expenditure pair.</div>
<div class="tip">Income elasticity: negative → inferior good; 0–1 → necessity; above 1 → luxury. India's Household Consumption Expenditure Survey 2023–24 found food's share of spending below 50% in both rural (about 47%) and urban (about 40%) India, an Engel's-law pattern.</div>` },

{ id: "2018-27", year: 2018, no: 27, subject: "design", topic: "Road safety at work zones",
q: `Consider the following provisions regarding safety on highways, where major improvement works may also be in progress :<ol><li>Highly visible barricades to avoid falling of vehicles in deep interspaces ahead (including drainages)</li><li>Wire-net provisions to ward off road slippages</li><li>Signages for wild-animals crossing (like deer, elephant, etc.)</li><li>Signages on minor gradients</li></ol>Which of the above are relevant ?`,
opts: ["1, 2, 3 and 4", "1, 2 and 4 only", "1, 3 and 4 only", "1, 2 and 3 only"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (relevant):</b> Excavations, open drains and diversions during construction need conspicuous barricades, delineators and lights (IRC:SP:55, traffic management in work zones).</li>
<li><b>2 (relevant):</b> Wire-mesh (rock-fall netting, gabions) holds back slipping material on cut slopes, protecting traffic.</li>
<li><b>3 (relevant):</b> Wildlife-crossing signs warn drivers on stretches through forests and corridors (and are often paired with underpasses).</li>
<li><b>4 (not needed):</b> Minor gradients are not a hazard; signs are required only for steep ascents and descents. Too many signs reduce the attention drivers pay to important ones.</li></ul>
<div class="tip">Road signs follow IRC:67 (mandatory/regulatory, cautionary/warning, informatory). India recorded about 1.7 lakh road deaths in 2023 (MoRTH, "Road Accidents in India"), one of the highest tolls in the world.</div>` },

{ id: "2018-28", year: 2018, no: 28, subject: "design", topic: "Vehicle resistance",
q: `A vehicle moving at a speed of 88 km/hr weighs 62293·5 N and its rolling resistance coefficient is 0·018. The rolling resistance of the vehicle is`,
opts: ["1121·3 N", "1000·4 N", "975·7 N", "845·6 N"], ans: 0,
analysis: `<h3>Answer: (a) 1121·3 N</h3><p>Rolling resistance R = f × W = 0.018 × 62,293.5 = <b>1,121.3 N</b>. Speed is extra data: in this simple model the rolling resistance does not depend on speed.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 1,000.4 N corresponds to a coefficient of about 0.016.</li>
<li><b>(c)</b> 975.7 N and <b>(d)</b> 845.6 N correspond to about 0.0157 and 0.0136.</li></ul>
<div class="key">Total tractive resistance = rolling (f W) + air (½ρC<sub>D</sub>Av²) + gradient (W sin θ) + acceleration (ma). Rolling resistance coefficients: about 0.01–0.015 for car tyres on asphalt, more on gravel.</div>` },

{ id: "2018-29", year: 2018, no: 29, subject: "design", topic: "Vehicle power",
q: `For a vehicle travelling at 24 km/hr having a wheel radius of 0·305 m with overall gear ratio G = 19·915, and when torque transmitted is 203·6 N.m, the engine speed and power are, nearly`,
opts: ["4155 rpm and 88·6 kW", "4500 rpm and 88·6 kW", "4155 rpm and 95·4 kW", "4500 rpm and 95·4 kW"], ans: 0,
analysis: `<h3>Answer: (a) 4155 rpm and 88·6 kW</h3><p>v = 24 km/h = 6.667 m/s. Wheel speed = v/(2πr) × 60 = 6.667/(2π × 0.305) × 60 ≈ 208.7 rpm. Engine speed = 208.7 × 19.915 ≈ <b>4,155 rpm</b>.<br>Power = Tω = 203.6 × (2π × 4,155/60) = 203.6 × 435.1 ≈ <b>88.6 kW</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(d)</b> 4,500 rpm does not follow from the speed and gear ratio.</li>
<li><b>(c)</b> 95.4 kW would need about 4,475 rpm at this torque.</li></ul><div class="key">Relations: v = ω<sub>wheel</sub> r; N<sub>engine</sub> = G × N<sub>wheel</sub>; P = 2πNT/60. Tractive effort at the wheels = T G η/r ≈ 203.6 × 19.915/0.305 ≈ 13.3 kN (ignoring losses).</div>` },

{ id: "2018-30", year: 2018, no: 30, subject: "design", topic: "Composite bars",
q: `A rod of length L, cross-section area A<sub>1</sub> and modulus of elasticity E<sub>1</sub>, has been placed inside a tube of length L, of cross-section area A<sub>2</sub> and modulus of elasticity E<sub>2</sub>, and the two are firmly held by end plates. The portion of the load P applied on the end plates shared by rod and tube, respectively, are`,
opts: ["PA<sub>1</sub>E<sub>1</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>2</sub>) and PA<sub>2</sub>E<sub>2</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>2</sub>)", "PA<sub>2</sub>E<sub>2</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>2</sub>) and PA<sub>1</sub>E<sub>1</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>2</sub>)", "PA<sub>1</sub>E<sub>1</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>1</sub>) and PA<sub>2</sub>E<sub>2</sub>/(A<sub>1</sub>E<sub>2</sub> + A<sub>2</sub>E<sub>2</sub>)", "PA<sub>1</sub>E<sub>1</sub>/(A<sub>1</sub> + A<sub>2</sub>) and PA<sub>2</sub>E<sub>2</sub>/(A<sub>1</sub> + A<sub>2</sub>)"], ans: 0,
analysis: `<h3>Answer: (a) P<sub>1</sub> = PA₁E₁/(A₁E₁ + A₂E₂), P<sub>2</sub> = PA₂E₂/(A₁E₁ + A₂E₂)</h3><p>Equilibrium: P<sub>1</sub> + P<sub>2</sub> = P. Compatibility: rigid end plates make both shorten equally, so P<sub>1</sub>L/(A₁E₁) = P<sub>2</sub>L/(A₂E₂). The load is therefore shared in proportion to axial stiffness AE.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Swaps the two shares: the rod would carry the tube's share.</li>
<li><b>(c)</b> Denominators mix E's wrongly; the two shares would not add up to P.</li>
<li><b>(d)</b> Dimensionally wrong: PAE/A has units of force × stress.</li></ul>
<div class="tip">Stresses: σ₁/σ₂ = E₁/E₂ (equal strain). Same idea applies to reinforced concrete columns (modular ratio m = E<sub>s</sub>/E<sub>c</sub>).</div>` },

{ id: "2018-31", year: 2018, no: 31, subject: "design", topic: "Springs: impact loading",
q: `A weight of 240 N is dropped on to a close-coiled helical spring made up of 18 mm spring steel wire. The spring consists of 22 coils wound to a diameter of 180 mm. If the instantaneous compression is 120 mm, what is the height of drop of the weight, given G = 88 × 10<sup>3</sup> N/mm<sup>2</sup> ?`,
opts: ["450 mm", "300 mm", "250 mm", "150 mm"], ans: 3,
analysis: `<h3>Answer: (d) 150 mm</h3><p>Stiffness k = Gd⁴/(8D³n) = 88,000 × 18⁴ /(8 × 180³ × 22) = 9.238 × 10⁹/1.026 × 10⁹ ≈ <b>9 N/mm</b>.<br>Energy balance (the weight falls h + δ): W(h + δ) = ½kδ² → 240(h + 120) = ½ × 9 × 120² = 64,800 → h + 120 = 270 → <b>h = 150 mm</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> A 450 mm drop would compress the spring by about 184 mm.</li>
<li><b>(b)</b> A 300 mm drop gives about 156 mm.</li>
<li><b>(c)</b> A 250 mm drop gives about 145 mm. Only 150 mm gives exactly 120 mm.</li></ul>
<div class="tip">Common slip: forgetting that the weight also falls through the compression δ (using Wh = ½kδ² gives 135 mm, not an option). Shear stress in the wire: τ = 8WDK/(πd³), with Wahl factor K.</div>` },

{ id: "2018-32", year: 2018, no: 32, subject: "design", topic: "Ergonomics",
q: `Consider the following statements regarding Ergonomic Design :<ol><li>Reducing the stress on the spinal cord and providing for lesser fatigue-causing sitting arrangements.</li><li>Arrangements of keys on the computer keyboard towards optimizing finger stress level.</li><li>Catering to increasing demand to produce more pleasing objects.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2 only</h3><p>Ergonomics (human factors engineering) designs equipment, workplaces and tasks to fit human body dimensions, capabilities and limits, to improve comfort, safety and productivity.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Seating that supports the spine (lumbar support, adjustable height) and reduces fatigue is a classic ergonomic goal.</li>
<li><b>2 (correct):</b> Keyboard layout and shape designed to reduce finger and wrist strain (e.g. split keyboards; the Dvorak layout) is ergonomic design.</li>
<li><b>3 (wrong):</b> Making objects more <b>pleasing to look at</b> is aesthetics (industrial or styling design), not ergonomics.</li></ul>
<div class="tip">Anthropometry (body measurements, usually 5th to 95th percentile ranges) is the basic data of ergonomic design. Work-related musculoskeletal disorders are the main problem it addresses.</div>` },

{ id: "2018-33", year: 2018, no: 33, subject: "ict", topic: "Output devices",
q: `Which type of output device creates coloured images which look and feel like photographs ?`,
opts: ["Electrostatic plotter", "Laser printer", "Dye sublimation printer", "Inkjet plotter"], ans: 2,
analysis: `<h3>Answer: (c) Dye sublimation printer</h3><p>A dye-sublimation printer heats a ribbon of solid dye so that it turns directly into gas (sublimes) and diffuses into specially coated paper. Colours blend in continuous tone with no visible dots, so prints look and feel like photographs. Used in photo kiosks, ID cards and medical imaging.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Electrostatic plotters produce large drawings (CAD, maps) using charged paper and toner; they are not photo-quality.</li>
<li><b>(b)</b> Laser printers fuse toner powder in dots; fine for text, but colour photos look grainy and glossy-toner, not photographic.</li>
<li><b>(d)</b> Inkjet plotters spray ink dots for large posters and drawings; good inkjets can approach photo quality, but the device designed for true continuous-tone photographs is dye-sub.</li></ul>` },

{ id: "2018-34", year: 2018, no: 34, subject: "quality", topic: "Six Sigma",
q: `Consider the following statements with reference to Six-Sigma :<ol><li>It is a set of techniques and tools for process improvement.</li><li>It postulates that any process must not produce more than 3·4 defects per one million opportunities.</li><li>It is an initiative of Motorola.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Six Sigma is a data-driven methodology with tools (DMAIC: Define, Measure, Analyse, Improve, Control; DMADV for new designs) to reduce process variation and defects.</li>
<li><b>2 (correct):</b> A six-sigma process allows 3.4 defects per million opportunities (DPMO), allowing for a 1.5σ long-term drift of the mean.</li>
<li><b>3 (correct):</b> It was developed at Motorola by Bill Smith in 1986 and made famous by General Electric under Jack Welch in the 1990s.</li></ul>
<table><tr><th>Sigma level</th><th>DPMO (with 1.5σ shift)</th></tr><tr><td>3σ</td><td>66,807</td></tr><tr><td>4σ</td><td>6,210</td></tr><tr><td>5σ</td><td>233</td></tr><tr><td>6σ</td><td>3.4</td></tr></table>
<div class="tip">Belt roles: Champion, Master Black Belt, Black Belt, Green Belt. Lean Six Sigma combines it with Lean waste elimination.</div>` },

{ id: "2018-35", year: 2018, no: 35, subject: "design", topic: "Foundations", doubt: true,
q: `Consider the following statements regarding a Grillage Foundation :<ol><li>It is provided for heavily loaded isolated columns.</li><li>It is treated as a spread foundation.</li><li>It consists of two sets of perpendicularly placed steel columns.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 (official key)</h3><p>A grillage foundation spreads a very heavy column load (such as a steel stanchion) over a large area of soil through one or two tiers of steel beams (rolled steel joists, or timber in temporary works) laid at right angles to each other and encased in concrete.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> It is used for heavily loaded isolated columns, especially where soil bearing capacity is low and a deep foundation is to be avoided.</li>
<li><b>2 (correct):</b> It is a type of shallow spread footing.</li>
<li><b>3 (key: correct):</b> The key accepts it, reading "steel columns" loosely as the steel members of the grillage.</li></ul>
<div class="note">In doubt (key followed). Strictly, a grillage consists of two tiers of steel <b>beams</b> (joists) placed at right angles, not steel columns; the column stands on top of the grillage. On that reading statement 3 is wrong and our answer is (a) 1 and 2 only.</div>
<div class="tip">Other shallow foundations: isolated footing, combined footing, strap footing, raft (mat). Deep: piles, wells (caissons).</div>` },

{ id: "2018-36", year: 2018, no: 36, subject: "energy", topic: "Insolation",
q: `Consider the following statements regarding Insolation :<ol><li>It is the solar radiation that reaches the Earth's surface.</li><li>It is measured by the amount of solar energy received per square centimeter per minute.</li><li>It is the amount of solar energy absorbed by the stratosphere.</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"], ans: 1,
analysis: `<h3>Answer: (b) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Insolation (INcoming SOLar radiATION) is the solar energy received at the Earth's surface (or on a surface).</li>
<li><b>2 (correct):</b> It is expressed as energy per unit area per unit time, traditionally in calories per cm² per minute (langleys per minute); today in W/m².</li>
<li><b>3 (wrong):</b> Energy absorbed in the stratosphere (mainly by ozone) is part of what is lost <b>before</b> it reaches the surface; it is not insolation.</li></ul>
<div class="tip">Solar constant ≈ 1,361 W/m² (about 1.94 cal/cm²/min) at the top of the atmosphere. Of incoming radiation, about 30% is reflected (albedo), about 20% absorbed by the atmosphere and about 50% by the surface. Insolation is greatest over subtropical deserts, not at the equator (cloud cover).</div>` },

{ id: "2018-37", year: 2018, no: 37, subject: "quality", topic: "Quality circles",
q: `Consider the following statements regarding Quality Circle :<ol><li>It is a small group of people working in different areas of an organization with multiple expertises.</li><li>It consists of people who volunteer themselves.</li><li>It is a human resource development technique.</li><li>It is a problem-solving forum.</li></ol>Which of the above statements are correct ?`,
opts: ["2, 3 and 4 only", "1, 2 and 3 only", "1, 3 and 4 only", "1, 2 and 4 only"], ans: 0,
analysis: `<h3>Answer: (a) 2, 3 and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> A quality circle is a small group (6–10) from the <b>same work area</b>, doing similar work, usually under their own supervisor. Groups drawn from different areas with mixed expertise are cross-functional teams.</li>
<li><b>2 (correct):</b> Membership is voluntary.</li>
<li><b>3 (correct):</b> It develops members' skills, confidence and teamwork: a human-resource development technique as much as a quality tool.</li>
<li><b>4 (correct):</b> Members identify, analyse and solve work-related problems using the seven QC tools and present solutions to management.</li></ul>
<div class="tip">See also 2017 Q97. The seven basic QC tools: check sheet, Pareto chart, cause-and-effect (fishbone) diagram, histogram, scatter diagram, control chart, stratification/flow chart.</div>` },

{ id: "2018-38", year: 2018, no: 38, subject: "pm", topic: "Project planning basics", doubt: true,
q: `Consider the following statements :<ol><li>In work breakdown structure, top-down approach is adopted.</li><li>Duration along critical path is the shortest duration permissible.</li><li>PERT is probabilistic in its approach.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 1,
analysis: `<h3>Answer: (b) 1 and 3 only (official key)</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> A work breakdown structure decomposes the project from the top (total deliverable) down into work packages.</li>
<li><b>2 (key: wrong):</b> The key treats it as false: the critical path is the <b>longest</b> path through the network, not the shortest.</li>
<li><b>3 (correct):</b> PERT uses three time estimates (optimistic a, most likely m, pessimistic b) with a beta distribution: t<sub>e</sub> = (a + 4m + b)/6, σ = (b − a)/6. CPM is deterministic.</li></ul>
<div class="note">In doubt (key followed). The critical path is the longest path, and for exactly that reason its length is the <b>minimum</b> (shortest possible) time in which the whole project can be completed with the given durations. Read that way, statement 2 is true and the answer would be (d), which is our own choice. The key reads "shortest duration" as describing the path itself.</div>` },

{ id: "2018-39", year: 2018, no: 39, subject: "maths", topic: "Series",
q: `Let the sum of the squares of successive integers 0, 1, 2, ..., n − 1, n be denoted by S. Let the sum of the cubes of the same integers be denoted by C. It is desirable that C/S, as n increases in steps of 'unity' from 'zero', is given by the series :<br>0/1, 3/3, 9/5, 18/7, 30/9, ... (for n = 0, 1, 2, 3, 4, ...).<br>What will this ratio be for n = 8 ?`,
opts: ["108/17", "103/17", "103/15", "100/15"], ans: 0,
analysis: `<h3>Answer: (a) 108/17</h3><p>S = n(n + 1)(2n + 1)/6 and C = [n(n + 1)/2]², so C/S = 3n(n + 1)/[2(2n + 1)].<br>For n = 8: 3 × 8 × 9/(2 × 17) = 216/34 = <b>108/17</b>.</p>
<p>Pattern check: the series' numerators 0, 3, 9, 18, 30 are 3 × (0, 1, 3, 6, 10) = 3 × triangular numbers, and denominators are odd numbers 2n + 1. For n = 8: 3 × 36 = 108 over 17 ✔.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 103/17 has the right denominator but the wrong numerator.</li>
<li><b>(c)</b> 103/15 and <b>(d)</b> 100/15: 15 = 2 × 7 + 1 belongs to n = 7, whose ratio is 84/15.</li></ul><div class="tip">Nicomachus's theorem: 1³ + 2³ + … + n³ = (1 + 2 + … + n)². Both S and C have the factor n(n + 1), which cancels in the ratio.</div>` },

{ id: "2018-40", year: 2018, no: 40, subject: "design", topic: "Quantity estimation",
q: `The plan view at just below window-sill level, but not showing door openings — is shown — of an outpost building of, say, the Forest Department. Section AA extending just a little above ground level GL and fully below ground level is shown. The wall and first footing are of random-rubble masonry in cement mortar; and the lowest part of the foundation is of mass rubble in cement mortar. The total volume of the 40 cm deep footing for the whole building is, nearly<img class="fig" src="img/2018-40.png" alt="Plan: inner dimensions 3.5 m by 5.0 m, wall 30 cm; Section AA: wall 30 cm, footing 45 cm wide and 40 cm deep, base 70 cm wide and 30 cm deep">`,
opts: ["3·8 m<sup>3</sup>", "3·3 m<sup>3</sup>", "2·8 m<sup>3</sup>", "2·3 m<sup>3</sup>"], ans: 1,
analysis: `<h3>Answer: (b) 3·3 m³</h3><p>Use the <b>centre-line method</b>. Centre line of the walls: inner 3.5 × 5.0 m plus half the wall thickness (0.15 m) on each side → 3.8 × 5.3 m. Centre-line length = 2(3.8 + 5.3) = 18.2 m.<br>The 40 cm deep footing (first footing, random rubble) is 45 cm wide: volume = 18.2 × 0.45 × 0.40 ≈ <b>3.28 m³ ≈ 3.3 m³</b>. (For a symmetric footing the centre-line length needs no corner correction.)</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 3.8 m³ is the volume of the lowest course (mass rubble, 70 cm × 30 cm): 18.2 × 0.7 × 0.3 ≈ 3.8 m³. That is not the 40 cm deep footing.</li>
<li><b>(c)</b> 2.8 m³ matches no course of the section (the inner-perimeter slip, 17 × 0.45 × 0.4, gives 3.1 m³).</li>
<li><b>(d)</b> 2.3 m³ is close to the 30 cm wall over a 40 cm height (18.2 × 0.3 × 0.4 ≈ 2.2 m³), the wrong element.</li></ul>
<div class="key">Estimating methods: long wall–short wall (out-to-out and in-to-in lengths) and centre-line (total centre line × section; subtract half the width per T-junction).</div>` },

{ id: "2018-41", year: 2018, no: 41, subject: "energy", topic: "Humidity",
q: `Consider the following statements with regard to atmospheric humidity :<ol><li>Absolute humidity is the amount of water vapour per unit volume.</li><li>Hygrometer is used to measure relative humidity.</li><li>Dew point is the temperature at which the relative humidity is 75%.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Absolute humidity is the mass of water vapour per unit volume of air (g/m³).</li>
<li><b>2 (correct):</b> A hygrometer (e.g. wet-and-dry bulb psychrometer, hair hygrometer, capacitive sensor) measures relative humidity.</li>
<li><b>3 (wrong):</b> The dew point is the temperature at which air becomes <b>saturated</b> (RH = 100%) on cooling at constant pressure and vapour content; below it condensation begins.</li></ul>
<div class="tip">Specific humidity = mass of vapour per unit mass of air (g/kg); it does not change with temperature or pressure. Relative humidity = actual vapour ÷ saturation vapour at that temperature, so it falls as air warms.</div>` },

{ id: "2018-42", year: 2018, no: 42, subject: "energy", topic: "Landfills",
q: `Sanitary/municipal fills and waste heaps are unavoidably hazardous due to<ol><li>Leachates</li><li>Emanating gases</li><li>Rodents and wandering animals</li><li>Automobile workshops that seem to have an affinity for such neighbourhoods</li></ol>Which of the above are correct ?`,
opts: ["1 and 4 only", "1 and 2 only", "2 and 3 only", "3 and 4 only"], ans: 1,
analysis: `<h3>Answer: (b) 1 and 2 only</h3><p>The hazards that come from the waste itself, and so cannot be avoided, are its liquid and gas emissions.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Leachate, rainwater percolating through decomposing waste, carries organics, heavy metals and ammonia and can pollute groundwater; landfills need liners and leachate collection.</li>
<li><b>2 (correct):</b> Landfill gas (about 50–60% methane, the rest CO<sub>2</sub>) is explosive, a greenhouse gas and a fire risk, as the recurring fires at Delhi's Ghazipur and Bhalswa dumps show.</li>
<li><b>3 (not "unavoidable"):</b> Rodents and stray animals are a nuisance of poorly managed dumps; daily soil cover in a proper sanitary landfill controls them.</li>
<li><b>4 (wrong):</b> Nearby workshops are a land-use pattern, not a hazard of the fill itself.</li></ul>
<div class="tip">Under India's Solid Waste Management Rules, only inert and rejected waste should go to sanitary landfills, which need liners, leachate collection and gas venting. Legacy dumpsites are being cleared by bio-mining under Swachh Bharat Mission (Urban) 2.0 (2021–26).</div>` },

{ id: "2018-43", year: 2018, no: 43, subject: "energy", topic: "Ozone depletion",
q: `Consider the following statements regarding depletion of the ozone layer :<ol><li>Excessive release of chlorine and bromine in the environment from man-made compounds, such as chlorofluorocarbons.</li><li>Occurrence of certain natural phenomena such as sunspots, and stratospheric winds.</li><li>Degradation of materials by ultra-violet radiation.</li><li>Major volcanic eruptions.</li></ol>Which of the above can be categorized as causing ozone depletion ?`,
opts: ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2 and 4 only", "2, 3 and 4 only"], ans: 2,
analysis: `<h3>Answer: (c) 1, 2 and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (cause):</b> CFCs, halons, carbon tetrachloride and methyl bromide release chlorine and bromine atoms in the stratosphere; one Cl atom can destroy thousands of O<sub>3</sub> molecules in a catalytic cycle. This is the main cause.</li>
<li><b>2 (cause):</b> Natural factors change ozone levels: the 11-year sunspot cycle changes the UV that forms ozone, and stratospheric winds (the polar vortex, the quasi-biennial oscillation) move and isolate air masses.</li>
<li><b>3 (effect, not cause):</b> UV degrading plastics, paints and rubber is a <b>consequence</b> of more UV reaching the ground.</li>
<li><b>4 (cause):</b> Big eruptions (El Chichón 1982, Pinatubo 1991) inject sulphate aerosols whose surfaces speed up chlorine-activating reactions, temporarily depleting ozone.</li></ul>
<div class="tip">The Antarctic ozone hole forms each spring (September–October) because polar stratospheric clouds in the cold vortex activate chlorine. Montreal Protocol (1987) is the only UN treaty ratified by every country.</div>` },

{ id: "2018-44", year: 2018, no: 44, subject: "energy", topic: "Forests",
q: `Which one of the following is the major characteristic of deciduous trees ?`,
opts: ["They do not lose their leaves.", "They shed their leaves annually.", "They synthesize their own food.", "They depend on other factors for their food."], ans: 1,
analysis: `<h3>Answer: (b) They shed their leaves annually.</h3><p>Deciduous trees shed all their leaves for part of the year (in India, in the dry season, to save water; in temperate lands, in autumn). India's tropical deciduous (monsoon) forests are its most widespread forest type: teak, sal, sandalwood, shisham, mahua.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Not losing all leaves at once describes <b>evergreen</b> trees.</li>
<li><b>(c)</b> All green plants make their own food by photosynthesis; it does not distinguish deciduous trees.</li>
<li><b>(d)</b> Depending on others for food describes parasites or heterotrophs, not trees.</li></ul>
<div class="tip">India State of Forest Report 2023: forest and tree cover about 25.2% of geographical area (forest cover about 21.8%).</div>` },

{ id: "2018-45", year: 2018, no: 45, subject: "reasoning", topic: "Mensuration", doubt: true,
q: `A wall, rectangular in shape, has a perimeter of 72 m. If the length of its diagonal is 18 m, what is the area of the wall ?`,
opts: ["224 m<sup>2</sup>", "486 m<sup>2</sup>", "572 m<sup>2</sup>", "606 m<sup>2</sup>"], ans: 1,
analysis: `<h3>Answer: (b) 486 m²</h3><p>l + b = 36 and l² + b² = 18² = 324. Since (l + b)² = l² + b² + 2lb: 1,296 = 324 + 2lb, so lb = <b>486 m²</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 224, <b>(c)</b> 572 and <b>(d)</b> 606 do not satisfy (l + b)² − (l² + b²) = 2 × area.</li></ul>
<div class="note">In doubt (flawed data; key followed). No real rectangle has these measurements: with l + b = 36 the diagonal can never be shorter than 36/√2 ≈ 25.5 m (the square). Solving t² − 36t + 486 = 0 gives a negative discriminant. The identity still gives the intended answer 486, which the key accepts.</div>
<div class="tip">Identity to remember: (l + b)² − d² = 2 × area for any rectangle with diagonal d.</div>` },

{ id: "2018-46", year: 2018, no: 46, subject: "design", topic: "Surveying: traversing", doubt: true,
q: `To isolate an enclosed area for conservation, an open traverse is run keeping close to (but outside of) the exterior boundary of the area through ground points A → B → C → D → E → F → G → towards H (to be eventually located). AB is 80° to the East of the North line at A. Deflection/Interior angles at B, C, D, E, F are indicated. What would be the magnitude of the deflection angle at G (as marked) so that GH may run parallel to BA ? (Lengths are immaterial in this case.)<img class="fig" src="img/2018-46.png" alt="Open traverse A-B-C-D-E-F-G towards H with angles 80 at A, 130 at B, 80 at C, 90 at D, 60 at E, 70 at F, deflection angle at G marked">`,
opts: ["190°", "210°", "200°", "230°"], ans: 1,
analysis: `<h3>Answer: (b) 210° (official key)</h3><p>Method: carry the bearing round the traverse. Bearing of AB = 80°, so GH must have bearing 260° (parallel to BA). At each station, the forward bearing = back bearing ± the included angle.</p>
<table><tr><th>Line</th><th>Working</th><th>Bearing</th></tr>
<tr><td>AB</td><td>given</td><td>80°</td></tr>
<tr><td>BC</td><td>BA 260° + 130°</td><td>30°</td></tr>
<tr><td>CD</td><td>CB 210° − 80°</td><td>130°</td></tr>
<tr><td>DE</td><td>DC 310° + 90°</td><td>40°</td></tr>
<tr><td>EF</td><td>ED 220° − 60°</td><td>160°</td></tr>
<tr><td>FG</td><td>FE 340° − 70°</td><td>270°</td></tr></table>
<p>The angle marked at G is measured from GF round over the top to GH. It equals 360° minus the angle below, i.e. the angle from GF (back bearing) to GH (260°). The key's 210° corresponds to GF having bearing 110° (FG = 290°), which is what the sketch shows: FG rising to the left.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 190° is what the printed angles give if FG = 270° (see the note).</li>
<li><b>(c)</b> 200° and <b>(d)</b> 230° correspond to FG bearings of 280° and 310°.</li></ul>
<div class="note">In doubt (key followed). Carried through with the angles as printed (all as included angles), FG comes out due west (270°), and the angle at G then works out to 190°, option (a). The key's 210° needs an included angle of 50° at F (or another angle read as a deflection angle). The figure is "not to scale" and the question mixes "deflection/interior" angles without saying which is which, so the key's intended reading cannot be confirmed.</div>
<div class="key">Checks for a closed traverse: sum of interior angles = (2n − 4) × 90°; sum of deflection angles = 360° (right minus left).</div>` },

{ id: "2018-47", year: 2018, no: 47, subject: "energy", topic: "Radiation",
q: `Consider the following characteristics with respect to Alpha particles :<ol><li>They have large specific ionization values.</li><li>They dissipate their energy rather slowly.</li><li>They can penetrate the outer layer of human skin.</li><li>Their emitters are heavy elements.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 4 only", "1 and 3 only", "2 and 4 only", "2 and 3 only"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 4 only</h3><p>Alpha particles are helium nuclei (2 protons + 2 neutrons): heavy, doubly charged and slow.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> They produce very dense ionisation along their short path (thousands of ion pairs per mm in air): high specific ionisation and high linear energy transfer.</li>
<li><b>2 (wrong):</b> Because they ionise so densely they lose energy <b>rapidly</b>; range only a few cm in air.</li>
<li><b>3 (wrong):</b> They are stopped by a sheet of paper or the dead outer layer of skin. The danger is internal: inhaled or swallowed alpha emitters (radon, polonium-210, plutonium).</li>
<li><b>4 (correct):</b> Alpha decay occurs in heavy nuclei (Z above about 82): uranium, thorium, radium, radon, plutonium, americium (in smoke detectors).</li></ul>
<table><tr><th></th><th>Alpha</th><th>Beta</th><th>Gamma</th></tr><tr><td>Nature</td><td>He nucleus</td><td>Electron/positron</td><td>Photon</td></tr><tr><td>Ionising power</td><td>Highest</td><td>Medium</td><td>Lowest</td></tr><tr><td>Penetration</td><td>Paper</td><td>Few mm aluminium</td><td>Thick lead/concrete</td></tr></table>` },

{ id: "2018-48", year: 2018, no: 48, subject: "energy", topic: "Water quality",
q: `Increased biological oxygen demand is an indication of<ol><li>Low microbial contamination.</li><li>Absence of microbial pollution.</li><li>High level of microbial contamination.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "3 only", "1, 2 and 3"], ans: 2,
analysis: `<h3>Answer: (c) 3 only</h3><p>Biochemical (biological) oxygen demand is the oxygen consumed by micro-organisms while decomposing organic matter in water (standard BOD<sub>5</sub> at 20°C; India often uses 3 days at 27°C). High BOD means much biodegradable organic matter and an active, large microbial population: organic pollution, typically from sewage.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> Low microbial activity gives low BOD.</li>
<li><b>2 (wrong):</b> Clean water has BOD below about 2–3 mg/L.</li>
<li><b>3 (correct):</b> High BOD reflects heavy organic load and microbial contamination.</li></ul>
<div class="tip">Bathing-water criterion (CPCB): BOD ≤ 3 mg/L. CPCB identified 311 polluted river stretches on 279 rivers in its 2022 assessment, ranked by BOD. COD ≥ BOD always, since COD also counts non-biodegradable matter.</div>` },

{ id: "2018-49", year: 2018, no: 49, subject: "energy", topic: "Ecological interactions",
q: `An association of two organisms of different species for mutual benefit, and where the individuals may not be able to survive separately, is called`,
opts: ["Commensalism", "Parasitic", "Non-symbiotic", "Symbiotic"], ans: 3,
analysis: `<h3>Answer: (d) Symbiotic</h3><p>A close, mutually beneficial and often obligatory association is symbiosis in the sense of <b>mutualism</b>: lichens (fungus + alga), mycorrhiza (fungus + plant roots), Rhizobium in legume root nodules, termites and their gut protozoa that digest cellulose.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Commensalism: one benefits, the other is unaffected (epiphytic orchids on trees, barnacles on whales).</li>
<li><b>(b)</b> Parasitism: one benefits at the other's cost (tapeworm, Cuscuta).</li>
<li><b>(c)</b> "Non-symbiotic" means the organisms live independently, the opposite of the description.</li></ul>
<table><tr><th>Interaction</th><th>Species 1</th><th>Species 2</th></tr><tr><td>Mutualism</td><td>+</td><td>+</td></tr><tr><td>Commensalism</td><td>+</td><td>0</td></tr><tr><td>Parasitism / predation</td><td>+</td><td>−</td></tr><tr><td>Amensalism</td><td>−</td><td>0</td></tr><tr><td>Competition</td><td>−</td><td>−</td></tr></table>` },

{ id: "2018-50", year: 2018, no: 50, subject: "pm", topic: "PERT",
q: `A simple project comprises of two start-to-end parallel paths, each with three activities in series, with no interpath dependencies. The a, m, b data (in days) for each activity are shown in the diagram. Assuming that three activities in series are enough for further computations, what will be the total project duration and its standard deviation ?<img class="fig" src="img/2018-50.png" alt="Upper path: 2,3,4 then 4,6,8 then 5,8,11; lower path: 6,7,8 then 12,12,18 then 9,15,18">`,
opts: ["35½ days and 14/3 days", "34½ days and 5/2 days", "35½ days and 13/6 days", "34½ days and 11/6 days"], ans: 3,
analysis: `<h3>Answer: (d) 34½ days and 11/6 days</h3><p>t<sub>e</sub> = (a + 4m + b)/6, variance = [(b − a)/6]².</p>
<table><tr><th>Path</th><th>Activity (a, m, b)</th><th>t<sub>e</sub></th><th>Variance</th></tr>
<tr><td rowspan="3">Upper</td><td>2, 3, 4</td><td>3</td><td>1/9</td></tr><tr><td>4, 6, 8</td><td>6</td><td>4/9</td></tr><tr><td>5, 8, 11</td><td>8</td><td>1</td></tr>
<tr><td rowspan="3">Lower</td><td>6, 7, 8</td><td>7</td><td>1/9</td></tr><tr><td>12, 12, 18</td><td>13</td><td>1</td></tr><tr><td>9, 15, 18</td><td>14.5</td><td>2.25</td></tr></table>
<p>Upper path = 17 days; lower path = 34.5 days, so the lower path is critical. Its variance = 1/9 + 1 + 9/4 = 121/36, so σ = <b>11/6 days</b>. Project duration = <b>34½ days</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(c)</b> 35½ days adds the most likely times wrongly.</li>
<li><b>(b)</b> 5/2 days is not the square root of the summed variances (it would be the root of 25/4).</li></ul>
<div class="tip">Only the critical path's variances are added; standard deviations themselves are never added. Probability of finishing by T: Z = (T − T<sub>e</sub>)/σ.</div>` }
);
