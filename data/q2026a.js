// ESE 2026 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q1–25
// No official UPSC key yet: answers follow MADE EASY's unofficial key (Set D, mapped to Series A by question text),
// checked against our own solution made before reading it. provKey = MADE EASY's letter where we believe it is wrong.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2026-1", year: 2026, no: 1, subject: "design", topic: "Projection of a point", keySource: K,
q: `Consider the following statements regarding the projection of a point :<ol><li>The line joining the top view and the front view of a point is always perpendicular to xy. It is called a reference line.</li><li>When a point is above the H.P., its front view is above xy; when it is below the H.P., the front view is below xy.</li><li>When a point is in front of the V.P., its top view is below xy; when it is behind the V.P., the top view is above xy.</li><li>As the point is below the H.P. and behind the V.P., its front view will be above xy and the top view is below xy.</li></ol>Which of the above statements are correct ?`,
opts: ["2 and 3", "1 and 4", "1 and 2", "2 and 4"], ans: 0,
analysis: `<h3>Answer: (a) 2 and 3</h3><p>In first-angle projection, the front view shows height relative to the HP and the top view shows distance relative to the VP.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> the line joining the two views is always perpendicular to xy, but it is called a <b>projector</b> (projection line). The reference line is xy itself.</li>
<li><b>2 (correct):</b> above the HP → front view above xy; below the HP → below xy.</li>
<li><b>3 (correct):</b> in front of the VP → top view below xy; behind the VP → above xy.</li>
<li><b>4 (wrong):</b> a point below the HP and behind the VP (third quadrant) has its front view <b>below</b> xy and its top view <b>above</b> xy, the reverse of what is stated.</li></ul>
<table><tr><th>Quadrant</th><th>Position</th><th>FV</th><th>TV</th></tr><tr><td>I</td><td>Above HP, in front of VP</td><td>Above xy</td><td>Below xy</td></tr><tr><td>II</td><td>Above HP, behind VP</td><td>Above</td><td>Above</td></tr><tr><td>III</td><td>Below HP, behind VP</td><td>Below</td><td>Above</td></tr><tr><td>IV</td><td>Below HP, in front of VP</td><td>Below</td><td>Below</td></tr></table>` },

{ id: "2026-2", year: 2026, no: 2, subject: "design", topic: "Traces of a line", keySource: K,
q: `Consider the following statements regarding the traces of a line :<ol><li>When a line is parallel to the HP and the VP, it has no trace.</li><li>When a line is inclined to HP and parallel to VP, it has only the VT but no HT.</li><li>A line PQ is perpendicular to the HP. Its HT coincides with its top view which is a point. It has no VT.</li><li>A line RS is perpendicular to the VP. Its VT coincides with its front view which is a point. It has no HT.</li></ol>Which of the following statements are correct ?`,
opts: ["2, 3 and 4", "1, 3 and 4", "1, 2 and 3", "1, 2 and 4"], ans: 1,
analysis: `<h3>Answer: (b) 1, 3 and 4</h3><p>A trace is where a line, extended if necessary, meets a reference plane (see 2023 Q48).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> parallel to both planes, the line never meets either: no HT, no VT.</li>
<li><b>2 (wrong):</b> inclined to the HP, the line meets the HP, so it has an <b>HT</b>; parallel to the VP, it has <b>no VT</b>. The statement reverses them.</li>
<li><b>3 (correct):</b> perpendicular to the HP, the top view is a point, which is also where the line meets the HP (the HT). It is parallel to the VP, so it has no VT.</li>
<li><b>4 (correct):</b> perpendicular to the VP, the front view is a point coinciding with the VT; it is parallel to the HP, so no HT.</li></ul>
<div class="key">Rule of thumb: a line has a trace on every plane it is <b>not</b> parallel to.</div>` },

{ id: "2026-3", year: 2026, no: 3, subject: "design", topic: "Projections of planes", keySource: K,
q: `Consider the following statements regarding the projections of planes :<ol><li>When a plane is perpendicular to both the reference planes, its traces lie on a straight line perpendicular to xy.</li><li>When a plane is perpendicular to a reference plane, its projection on that plane is a straight line.</li><li>When a plane is parallel to a reference plane, its projection on that plane shows its reduced shape and size.</li><li>When a plane is parallel to the VP, beginning should be made with the front view and the top view projected from it.</li></ol>Which of the following statements are correct ?`,
opts: ["1, 3 and 4", "2, 3 and 4", "1, 2 and 3", "1, 2 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> a plane perpendicular to both HP and VP (a profile plane) has its HT and VT in one straight line perpendicular to xy.</li>
<li><b>2 (correct):</b> a plane perpendicular to a reference plane is seen edge-on there, as a straight line.</li>
<li><b>3 (wrong):</b> a plane parallel to a reference plane is projected on it in its <b>true</b> shape and size, not reduced.</li>
<li><b>4 (correct):</b> the true-shape view is always drawn first: parallel to the VP → start with the front view, then project the top view (a line parallel to xy).</li></ul>
<div class="key">Planes inclined to one plane are drawn in two stages: first in a simple position (parallel to the plane it is inclined to), then tilted to the given angle.</div>` },

{ id: "2026-4", year: 2026, no: 4, subject: "design", topic: "Projections of solids", keySource: K,
q: `Consider the following statements regarding the projections of solids :<ol><li>When the axis of a solid is perpendicular to a plane, its base will be parallel to that plane.</li><li>The projection of a solid on the plane to which its axis is perpendicular, will show the true shape and size of its base.</li><li>When the axis is perpendicular to the HP, the top view should be drawn first and the front view projected from it.</li><li>A solid in simple position has its axis parallel to one reference plane and perpendicular to other.</li></ol>Which of the following statements are correct ?`,
opts: ["1, 2 and 3", "2, 3 and 4", "1 and 2 only", "3 and 4 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> the base of a right solid is perpendicular to its axis, so an axis perpendicular to a plane means a base parallel to it.</li>
<li><b>2 (correct):</b> hence the projection on that plane shows the base in true shape and size.</li>
<li><b>3 (correct):</b> axis perpendicular to the HP → base parallel to the HP → draw the top view (true shape) first, then project the front view.</li>
<li><b>4 (not accepted):</b> N.D. Bhatt describes a solid in simple position as having its axis <b>perpendicular to one plane</b> (or resting on its base on a plane); the axis is then automatically parallel to the other. The statement reverses the emphasis, and also leaves out solids lying with an axis parallel to both planes.</li></ul>
<div class="note">Statement 4 is close to correct, and options offer no "all four". (a) is the only option containing 1, 2 and 3, which are clearly true; MADE EASY's key agrees.</div>` },

{ id: "2026-5", year: 2026, no: 5, subject: "design", topic: "Conics: eccentricity", keySource: K,
q: `Match the following lists :<table><tr><th>List I (Name of the curve)</th><th>List II (Eccentricity)</th></tr><tr><td>P. Hyperbola</td><td>1. e &gt; 1</td></tr><tr><td>Q. Ellipse</td><td>2. e = 1</td></tr><tr><td>R. Parabola</td><td>3. e &lt; 1</td></tr></table>Select the correct answer using the code given below :`,
opts: ["P–1, Q–2, R–3", "P–1, Q–3, R–2", "P–2, Q–3, R–1", "P–2, Q–1, R–3"], ans: 1,
analysis: `<h3>Answer: (b) P–1, Q–3, R–2</h3><p>Eccentricity e = distance of a point from the focus ÷ its distance from the directrix.</p>
<ul><li><b>Hyperbola</b>: e &gt; 1</li><li><b>Ellipse</b>: e &lt; 1 (circle e = 0)</li><li><b>Parabola</b>: e = 1</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: gives the ellipse e = 1 and the parabola e &lt; 1.</li>
<li><b>(c)</b>: gives the hyperbola e = 1 and the parabola e &gt; 1.</li>
<li><b>(d)</b>: gives the hyperbola e = 1 and the ellipse e &gt; 1.</li></ul>
<div class="key">In engineering drawing, conics are constructed by the eccentricity method: draw the directrix and focus, then mark points with PF/PD = e. See 2025 Q33 for conics as sections of a cone.</div>` },

{ id: "2026-6", year: 2026, no: 6, subject: "quality", topic: "Robust process design", keySource: K,
q: `Which one of the following statements comes under robust design in process design ?`,
opts: ["A tennis racket that returns the ball just as well when hit near the rim as when hit in dead center", "A hospital operating room that maintains lighting and life support systems when the electric power to the hospital is interrupted", "An airplane that flies as well in stormy weather as in clear weather", "A turning operation that produces a good surface finish throughout a wide range of cutting speeds"], ans: 3,
analysis: `<h3>Answer: (d) A turning operation that produces a good surface finish throughout a wide range of cutting speeds</h3><p>Robust design makes output insensitive to variation (noise). Robust <b>process</b> design applies this to manufacturing: the turning process gives good finish even when the cutting speed varies.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: robust <b>product</b> design: the racket performs well despite variation in how it is used.</li>
<li><b>(b)</b>: <b>reliability</b> through redundancy (backup power), not robustness to variation.</li>
<li><b>(c)</b>: robust <b>product</b> design: the aircraft performs well in varying weather.</li></ul>
<div class="key">These examples follow Evans and Lindsay (<i>Managing for Quality and Performance Excellence</i>). See 2025 Q44 for Taguchi's control and noise factors.</div>` },

{ id: "2026-7", year: 2026, no: 7, subject: "design", topic: "Maintenance terms", keySource: K,
q: `Which one of the following is used to show whether or not a characteristic or a property of the item complies with the stated specification under maintenance actions ?`,
opts: ["Compliance test", "Overhaul", "Monitoring", "Rebuilding"], ans: 0,
analysis: `<h3>Answer: (a) Compliance test</h3><p>In maintenance terminology (IEC 60050-192, EN 13306), a <b>compliance test</b> is a test used to show whether or not a characteristic or property of an item complies with the stated specification.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Overhaul</b>: comprehensive examination and restoration of an item to an acceptable condition.</li>
<li><b>(c) Monitoring</b>: observing an item's actual state over time, manually or automatically (e.g. vibration monitoring).</li>
<li><b>(d) Rebuilding</b>: dismantling and repairing or replacing parts to give the item a life close to that of a new one.</li></ul>
<div class="key">Related terms: function check-out (Q8), fault diagnosis (finding the fault), modification (changing the design of an item).</div>` },

{ id: "2026-8", year: 2026, no: 8, subject: "design", topic: "Function check-out", keySource: K,
q: `Action taken after maintenance actions to verify that the item is able to perform the required function, is known as`,
opts: ["Fault diagnosis", "Turnaround maintenance", "Function check-out", "Modification"], ans: 2,
analysis: `<h3>Answer: (c) Function check-out</h3><p>A <b>function check-out</b> is the action taken after maintenance to verify that the item can perform its required function.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Fault diagnosis</b>: done <b>before</b> repair: identifying the fault, its location and cause.</li>
<li><b>(b) Turnaround maintenance</b>: planned shutdown of a whole plant (e.g. a refinery) for a period to carry out major maintenance.</li>
<li><b>(d) Modification</b>: changing the design or function of an item, not checking it.</li></ul>
<div class="key">Sequence of corrective maintenance: failure → fault localisation → fault diagnosis → repair → function check-out → return to service.</div>` },

{ id: "2026-9", year: 2026, no: 9, subject: "design", topic: "Corrective and preventive maintenance", keySource: K,
q: `Consider the following statements regarding maintenance of machineries :<ol><li>Corrective maintenance actions are maintenance activities that are carried out after a failure has occurred.</li><li>Corrective maintenance must be initiated immediately to restore critical systems to their functional state or can be deferred to a more convenient timing if the failure is not critical and does not need immediate action.</li><li>Preventive maintenance must be initiated immediately to restore critical systems to their functional state or can be deferred to a more convenient timing if the failure is not critical and does not need immediate action.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 and 2", "2 only", "1 only", "1 and 3"], ans: 0,
analysis: `<h3>Answer: (a) 1 and 2</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> corrective maintenance is carried out after a failure.</li>
<li><b>2 (correct):</b> it may be immediate (for critical systems) or deferred (for non-critical failures).</li>
<li><b>3 (wrong):</b> preventive maintenance is carried out <b>before</b> failure, at planned intervals or on condition, so "restoring to a functional state after a failure" does not describe it.</li></ul>
<div class="key">Maintenance types: corrective (after failure), preventive (time-based), predictive or condition-based (based on monitored condition: see Q10), and proactive (removing root causes).</div>` },

{ id: "2026-10", year: 2026, no: 10, subject: "design", topic: "Condition-based maintenance", keySource: K,
q: `Which one of the following technologies is used to monitor the condition of an object and to decide on maintenance based on the condition ?`,
opts: ["Information and Communication Technology", "Sensor Technology", "Transit Technology", "Risk based Technology"], ans: 1,
analysis: `<h3>Answer: (b) Sensor Technology</h3><p><b>Condition-based maintenance</b> relies on sensors that measure an item's condition (vibration, temperature, oil debris, acoustic emission, current) so that maintenance is done only when needed.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) ICT</b>: transmits and processes the data, but does not itself sense the condition.</li>
<li><b>(c) Transit technology</b>: not a maintenance technology.</li>
<li><b>(d) Risk-based technology</b>: risk-based maintenance prioritises by risk of failure; it is a planning approach, not a sensing method.</li></ul>
<div class="key">Common condition-monitoring techniques: vibration analysis (rotating machines), infrared thermography (electrical panels), oil analysis (gearboxes, engines), ultrasonic testing, motor current signature analysis. With IoT, sensor data feed predictive-maintenance models.</div>` },

{ id: "2026-11", year: 2026, no: 11, subject: "energy", topic: "Electricity from fuels", keySource: K, provKey: "A",
q: `How much estimated amount of power can be derived from solid energy mineral of 1 kg of coal ?`,
opts: ["1 kWh power", "3 kWh power", "4 kWh power", "50,000 kWh power"], ans: 1,
analysis: `<h3>Answer: (b) 3 kWh power (our answer)</h3><p>The standard comparison of electricity generated per kilogram of fuel (European Nuclear Society's fuel comparison table) is:</p>
<table><tr><th>1 kg of</th><th>Electricity</th></tr><tr><td>Firewood</td><td>about 1 kWh</td></tr><tr><td>Coal</td><td>about <b>3 kWh</b></td></tr><tr><td>Mineral oil</td><td>about 4 kWh</td></tr><tr><td>Uranium (in a light-water reactor)</td><td>about 50,000 kWh</td></tr></table>
<p>Check: coal has about 8 kWh of heat per kg; at a typical 33–38% power-plant efficiency this gives about 2.7–3 kWh of electricity.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 1 kWh</b>: the figure for firewood.</li>
<li><b>(c) 4 kWh</b>: the figure for mineral oil.</li>
<li><b>(d) 50,000 kWh</b>: the figure for uranium.</li></ul>
<div class="note">MADE EASY's unofficial key gives (a) 1 kWh. The options are clearly taken from the fuel-comparison table above, in which 1 kWh belongs to firewood and 3 kWh to coal, so we show (b).</div>` },

{ id: "2026-12", year: 2026, no: 12, subject: "energy", topic: "Ranks of coal", keySource: K,
q: `Which one of the following types of coal has high calorific value and lowest volatile content ?`,
opts: ["anthracite", "subbituminous", "bituminous", "lignite"], ans: 0,
analysis: `<h3>Answer: (a) anthracite</h3><p><b>Anthracite</b> is the highest rank of coal: 86–97% fixed carbon, the highest calorific value and the lowest volatile matter and moisture. It burns with a short, smokeless flame.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Sub-bituminous</b>: lower rank than bituminous: more moisture, lower heating value.</li>
<li><b>(c) Bituminous</b>: the most common coal for power and coking; high heating value but more volatile matter than anthracite.</li>
<li><b>(d) Lignite</b> (brown coal): lowest rank; high moisture and volatiles, lowest calorific value.</li></ul>
<div class="key">Rank order (rising carbon, falling volatiles): peat → lignite → sub-bituminous → bituminous → anthracite. Most Indian coal is bituminous to sub-bituminous with high ash; lignite is mined in Neyveli (Tamil Nadu) and Gujarat.</div>` },

{ id: "2026-13", year: 2026, no: 13, subject: "energy", topic: "Fuel cells", keySource: K,
q: `A fuel cell in electric car generates electrical energy by combining`,
opts: ["Carbon dioxide (CO<sub>2</sub>) and Hydrogen (H<sub>2</sub>)", "Oxygen (O<sub>2</sub>) and Hydrogen (H<sub>2</sub>)", "Sulphur dioxide (SO<sub>2</sub>) and Hydrogen (H<sub>2</sub>)", "Carbon monoxide (CO) and Hydrogen (H<sub>2</sub>)"], ans: 1,
analysis: `<h3>Answer: (b) Oxygen and Hydrogen</h3><p>A hydrogen fuel cell (usually PEM in cars) combines hydrogen with oxygen from the air: 2H₂ + O₂ → 2H₂O + electricity + heat. The only exhaust is water.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) CO₂ and H₂</b>: these react in methanation or synthetic-fuel processes, not in a fuel cell's power reaction.</li>
<li><b>(c) SO₂ and H₂</b>: no fuel cell runs on sulphur dioxide.</li>
<li><b>(d) CO and H₂</b>: CO poisons the platinum catalyst of PEM cells; together CO and H₂ make synthesis gas.</li></ul>
<div class="key">At the anode H₂ → 2H⁺ + 2e⁻; electrons flow through the external circuit; at the cathode ½O₂ + 2H⁺ + 2e⁻ → H₂O. India's National Green Hydrogen Mission (2023) targets 5 million tonnes of green hydrogen a year by 2030.</div>` },

{ id: "2026-14", year: 2026, no: 14, subject: "energy", topic: "Power grid", keySource: K,
q: `Electrical power generation usually links to the load demand by a common regional or national network, often called`,
opts: ["Station", "Embedded Generator", "Grid", "Distributor"], ans: 2,
analysis: `<h3>Answer: (c) Grid</h3><p>The <b>grid</b> is the interconnected network of transmission and distribution lines linking power stations to loads across a region or country, so that supply can be balanced against demand.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Station</b>: a single generating plant or substation.</li>
<li><b>(b) Embedded generator</b>: a small generator connected within the distribution network (e.g. rooftop solar), not the network itself.</li>
<li><b>(d) Distributor</b>: a low-voltage line from which consumers are tapped, or the company supplying power locally.</li></ul>
<div class="key">India achieved "One Nation, One Grid, One Frequency" in December 2013, when the Southern grid was synchronised with the rest. Grid-India (formerly POSOCO) operates the national and regional load dispatch centres.</div>` },

{ id: "2026-15", year: 2026, no: 15, subject: "energy", topic: "Hydrogen combustion", keySource: K,
q: `1 kg of Hydrogen fuel burns with 8 kg of oxygen to give the product as`,
opts: ["9 kg of hydrogen peroxide", "9 kg of water", "18 kg of hydrogen peroxide", "18 kg of water"], ans: 1,
analysis: `<h3>Answer: (b) 9 kg of water</h3><p>2H₂ + O₂ → 2H₂O. By mass: 4 g H₂ + 32 g O₂ → 36 g H₂O, i.e. 1 : 8 : 9. So 1 kg H₂ + 8 kg O₂ → <b>9 kg water</b> (conservation of mass).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(c) hydrogen peroxide</b>: H₂O₂ is not the combustion product; burning hydrogen gives water.</li>
<li><b>(d) 18 kg</b>: more mass than went in, which breaks conservation of mass.</li></ul>
<div class="key">This 1 : 8 ratio is used in combustion calculations for fuels: each kg of hydrogen in a fuel needs 8 kg of oxygen and produces 9 kg of water vapour, which is why gross and net calorific values differ.</div>` },

{ id: "2026-16", year: 2026, no: 16, subject: "pm", topic: "Features of a project", keySource: K, doubt: true,
q: `Consider the following statements regarding project :<ol><li>Temporary project has a beginning and an end.</li><li>Project has predefined work assignments.</li><li>Project produces a unique output or deliverable.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 2,
analysis: `<h3>Answer: (c) 1 and 3 only (MADE EASY's key)</h3><p>PMI's definition: a project is a <b>temporary</b> endeavour (it has a definite beginning and end) undertaken to create a <b>unique</b> product, service or result.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> temporary: a definite beginning and end.</li>
<li><b>2 (excluded by the key):</b> "predefined work assignments" is not part of the definition; work in a project is planned and elaborated progressively, and assignments are made as the plan develops. Routine operations, by contrast, have predefined, repetitive tasks.</li>
<li><b>3 (correct):</b> unique output or deliverable.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). We first chose (d), since project plans do define work assignments (a work breakdown structure and a responsibility matrix). Read as a defining feature of projects, though, statement 2 describes operations better, which supports (c).</div>` },

{ id: "2026-17", year: 2026, no: 17, subject: "pm", topic: "Project roles", keySource: K,
q: `Which one of the following usually provides the resources, particularly the people who are involved in the project ?`,
opts: ["Sponsor", "Project Leader", "Project Customer", "Functional Manager"], ans: 3,
analysis: `<h3>Answer: (d) Functional Manager</h3><p>In most organisations (especially matrix structures), <b>functional managers</b> own the staff and equipment; they assign people to the project and supply technical expertise.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Sponsor</b>: provides funding, authority and high-level support, and champions the project, but not day-to-day people.</li>
<li><b>(b) Project leader</b> (manager): plans and directs the work using resources provided by others.</li>
<li><b>(c) Project customer</b>: the client who will use the deliverable and accepts it.</li></ul>
<div class="key">In a weak matrix the functional manager has more power; in a strong matrix the project manager does. Negotiating with functional managers for people is a core project-manager skill.</div>` },

{ id: "2026-18", year: 2026, no: 18, subject: "pm", topic: "PERT estimates", keySource: K,
q: `PERT calls for the following estimates to be provided for each activity :<ol><li>Pessimistic</li><li>Optimistic</li><li>Most Likely</li></ol>Which of the above estimates are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>PERT uses three time estimates per activity, assuming a beta distribution:</p>
<ul><li><b>Optimistic</b> (t<sub>o</sub>): shortest time if all goes well.</li><li><b>Most likely</b> (t<sub>m</sub>): the mode, under normal conditions.</li><li><b>Pessimistic</b> (t<sub>p</sub>): longest time if things go badly (excluding catastrophes).</li></ul>
<p>Expected time t<sub>e</sub> = (t<sub>o</sub> + 4t<sub>m</sub> + t<sub>p</sub>)/6; standard deviation σ = (t<sub>p</sub> − t<sub>o</sub>)/6.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(c)</b>: each omits one of the three estimates PERT needs.</li></ul>
<div class="key">CPM uses one deterministic time per activity; PERT is probabilistic and gives the probability of finishing by a target date (using z = (T − T<sub>e</sub>)/σ of the critical path).</div>` },

{ id: "2026-19", year: 2026, no: 19, subject: "pm", topic: "Liquidation", keySource: K,
q: `Which one of the following means closing down a company and selling its assets ?`,
opts: ["Liquidation", "Revitalize", "Resurrect", "Enliven"], ans: 0,
analysis: `<h3>Answer: (a) Liquidation</h3><p><b>Liquidation</b> (winding up) ends a company's existence: its assets are sold, creditors are paid in order of priority, and any surplus goes to shareholders.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Revitalize</b>, <b>(c) Resurrect</b> and <b>(d) Enliven</b>: all mean reviving a business: the opposite of closing it down.</li></ul>
<div class="key">In India, insolvent companies go through the Insolvency and Bankruptcy Code 2016: a corporate insolvency resolution process (target 180 days, extendable to 330); if no resolution plan is approved, the company is liquidated.</div>` },

{ id: "2026-20", year: 2026, no: 20, subject: "pm", topic: "Project closure", keySource: K,
q: `Which one of the following is NOT a step comprised in the completion of a project ?`,
opts: ["Final inspection", "Defects liability period", "Maintenance retention sum", "Problem identification"], ans: 3,
analysis: `<h3>Answer: (d) Problem identification</h3><p><b>Problem identification</b> happens at the <b>start</b> of a project (the need or opportunity that leads to the project idea), not at completion.</p>
<h3>Why not the others</h3><p>These are completion (close-out) steps in construction contracts:</p><ul>
<li><b>(a) Final inspection</b>: checking the work against the contract before handover.</li>
<li><b>(b) Defects liability period</b>: a period (often 12 months) after completion when the contractor must repair defects.</li>
<li><b>(c) Maintenance retention sum</b>: part of the payment held back until the defects liability period ends.</li></ul>
<div class="key">Project close-out also includes as-built drawings, operation manuals, final accounts, release of guarantees, and a lessons-learned review.</div>` },

{ id: "2026-21", year: 2026, no: 21, subject: "materials", topic: "Rhombohedral lattice", keySource: K,
q: `How many total number of lattice parameters are required to fully specify Rhombohedral crystal system ?`,
opts: ["2", "3", "4", "6"], ans: 0,
analysis: `<h3>Answer: (a) 2</h3><p>Rhombohedral (trigonal): a = b = c and α = β = γ ≠ 90°. One length and one angle, so <b>2</b> parameters fully specify the cell.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 3</b>: orthorhombic (a, b, c with all angles 90°).</li>
<li><b>(c) 4</b>: monoclinic (a, b, c and β).</li>
<li><b>(d) 6</b>: triclinic (a, b, c, α, β, γ all independent).</li></ul>
<table><tr><th>System</th><th>Independent parameters</th></tr><tr><td>Cubic</td><td>1 (a)</td></tr><tr><td>Tetragonal, hexagonal, rhombohedral</td><td>2</td></tr><tr><td>Orthorhombic</td><td>3</td></tr><tr><td>Monoclinic</td><td>4</td></tr><tr><td>Triclinic</td><td>6</td></tr></table><div class="tip">Rhombohedral and hexagonal are both in the trigonal/hexagonal family; a rhombohedral lattice can also be described with a hexagonal cell (3 lattice points per cell).</div>` },

{ id: "2026-22", year: 2026, no: 22, subject: "materials", topic: "Ideal c/a ratio", keySource: K,
q: `If a and c represent, respectively, the short and long unit cell dimensions for Hexagonal crystal, the ideal c/a ratio should be`,
opts: ["1·433", "1·633", "2·833", "4·533"], ans: 1,
analysis: `<h3>Answer: (b) 1·633</h3><p>For ideal hexagonal close packing of equal spheres, c/a = √(8/3) = <b>1.633</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 1·433</b>, <b>(c) 2·833</b> and <b>(d) 4·533</b>: not the geometric value; real HCP metals range from about 1.57 (Be) to 1.89 (Cd), but none is far from 1.633.</li></ul>
<div class="key">Examples: Mg 1.624 (nearly ideal), Ti 1.587, Zn 1.856. HCP metals have 6 atoms per unit cell, coordination number 12 and APF 0.74, like FCC; they have fewer slip systems, so they are less ductile.</div><div class="tip">Derivation: the middle-layer atom sits over the centroid of a triangle of side a, at height c/2 = √(2/3) a above it, so c/a = 2√(2/3) = 1.633.</div>` },

{ id: "2026-23", year: 2026, no: 23, subject: "materials", topic: "Miller indices in cubic crystals", keySource: K,
q: `In characteristics of cubic crystal, the planes and directions having the same indices are always at the angle of`,
opts: ["15° to one another", "30° to one another", "45° to one another", "90° to one another"], ans: 3,
analysis: `<h3>Answer: (d) 90° to one another</h3><p>In cubic crystals, the direction [hkl] is always <b>perpendicular</b> to the plane (hkl): the vector [hkl] is the plane's normal.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 15°</b>, <b>(b) 30°</b> and <b>(c) 45°</b>: no fixed relation of this kind exists; the perpendicularity follows from the cubic symmetry (equal axes, 90° angles).</li></ul>
<div class="key">This holds only for cubic crystals. In other systems (e.g. tetragonal), [hkl] is generally not normal to (hkl). Interplanar spacing in cubic crystals: d = a/√(h² + k² + l²).</div><div class="tip">Example: the [111] direction is the body diagonal, and the (111) plane cuts the three axes at 1, so the diagonal is normal to that plane.</div>` },

{ id: "2026-24", year: 2026, no: 24, subject: "materials", topic: "FCC structure", keySource: K,
q: `Consider the following statements regarding Face Centered Cubic Crystal Structure :<ol><li>There are eight corner atoms, six face atoms and no interior atoms, then the number of atoms per unit are 6.</li><li>Coordination Number is 12.</li><li>Atomic packing factor is 0·74.</li><li>Volume of unit cell is V = 16R<sup>3</sup>√2, where R is atomic radius.</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 2,
analysis: `<h3>Answer: (c) 2, 3 and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> atoms per cell = 8 × ⅛ (corners) + 6 × ½ (faces) = <b>4</b>, not 6.</li>
<li><b>2 (correct):</b> each atom touches 12 neighbours.</li>
<li><b>3 (correct):</b> APF = 4 × (4/3)πR³ / (16√2 R³) = π/(3√2) = 0.74.</li>
<li><b>4 (correct):</b> atoms touch along the face diagonal: a = 2√2 R, so V = a³ = 16√2 R³.</li></ul>
<div class="key">FCC metals: Cu, Al, Ni, Au, Ag, Pb, γ-Fe. They have 12 slip systems ({111}⟨110⟩), so they are ductile even at low temperatures.</div><div class="tip">Compare BCC: 2 atoms per cell, coordination number 8, APF 0.68, a = 4R/√3.</div>` },

{ id: "2026-25", year: 2026, no: 25, subject: "materials", topic: "Vacancy concentration", keySource: K,
q: `In crystal materials, the equilibrium number of vacancies in crystalline solid increases`,
opts: ["linearly with temperature", "exponentially with temperature", "exponentially and then decreases with temperature", "linearly and then exponentially with temperature"], ans: 1,
analysis: `<h3>Answer: (b) exponentially with temperature</h3><p>N<sub>v</sub> = N exp(−Q<sub>v</sub>/kT), where Q<sub>v</sub> is the energy to form a vacancy. The number of vacancies rises <b>exponentially</b> with temperature (an Arrhenius dependence).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: the dependence is exponential, not linear.</li>
<li><b>(c)</b>: the equilibrium number does not fall at higher temperature; it keeps rising up to the melting point.</li>
<li><b>(d)</b>: there is no linear stage; the same exponential law holds throughout.</li></ul>
<div class="tip">Near the melting point, the vacancy fraction in metals is about 10<sup>−4</sup> (one site in ten thousand). Vacancies make substitutional diffusion possible, which is why diffusion also rises exponentially with temperature.</div>` }
  );
})();
