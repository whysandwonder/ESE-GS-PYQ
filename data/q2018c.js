// ESE 2018 Prelims Paper I, Series A, Q51–75
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2018-51", year: 2018, no: 51, subject: "pm", topic: "Crashing",
q: `Crashing is`,
opts: ["Abandoning the project", "Completing the project with all possible haste", "Reduction of duration for a few of the activities", "Reducing the cost of the project with all needful modifications"], ans: 2,
analysis: `<h3>Answer: (c) Reduction of duration for a few of the activities</h3><p>Crashing shortens the project by reducing the durations of selected <b>critical</b> activities, using extra resources (overtime, more crews, better equipment) at extra direct cost. Activities are crashed in order of lowest cost slope = (crash cost − normal cost)/(normal time − crash time), until the desired duration or the minimum total cost is reached.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Abandoning a project is termination, not crashing.</li>
<li><b>(b)</b> Crashing is targeted and costed, not rushing everything; crashing non-critical activities wastes money.</li>
<li><b>(d)</b> Crashing raises direct cost; it may cut total cost only by saving indirect costs (overheads, penalties).</li></ul>
<div class="tip">Time–cost trade-off: as duration falls, direct cost rises and indirect cost falls; the optimum duration minimises their sum. Fast-tracking is the other way to compress a schedule (overlapping activities instead of adding resources).</div>` },

{ id: "2018-52", year: 2018, no: 52, subject: "pm", topic: "Inventory: ABC analysis",
q: `ABC analysis in materials management is a method of classifying the inventories based on the`,
opts: ["Economic order quantity", "Value of annual usage of the items", "Volume of material consumption", "Quantity of materials used"], ans: 1,
analysis: `<h3>Answer: (b) Value of annual usage of the items</h3><p>ABC analysis (based on the Pareto principle) ranks items by <b>annual consumption value</b> = annual usage × unit cost. Typically: A items about 10% of items but 70% of value (tight control, frequent review), B about 20% of items and 20% of value, C about 70% of items but only 10% of value (simple control, bulk ordering).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> EOQ is the optimum order size, calculated for each item; it is not a classification basis.</li>
<li><b>(c)</b> and <b>(d)</b> Volume or quantity alone ignores cost: a million washers may be worth less than one engine.</li></ul>
<table><tr><th>Technique</th><th>Basis</th></tr><tr><td>ABC</td><td>Annual consumption value</td></tr><tr><td>VED</td><td>Criticality (Vital, Essential, Desirable)</td></tr><tr><td>FSN</td><td>Movement (Fast, Slow, Non-moving)</td></tr><tr><td>HML</td><td>Unit price (High, Medium, Low)</td></tr><tr><td>SDE</td><td>Availability (Scarce, Difficult, Easy)</td></tr></table>` },

{ id: "2018-53", year: 2018, no: 53, subject: "pm", topic: "CPM",
q: `CPM method of network analysis is<ol><li>Ideally suited for linearly extending works.</li><li>Meant essentially for research and development activities.</li><li>Activity-oriented.</li><li>Used for planning, scheduling and controlling purposes.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "3 and 4 only", "1 and 4 only"], ans: 2,
analysis: `<h3>Answer: (c) 3 and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> Linear, repetitive works (roads, pipelines, tunnels, high-rise floors) are better scheduled by the <b>line of balance</b> / linear scheduling method; CPM handles them clumsily.</li>
<li><b>2 (wrong):</b> R&amp;D and other uncertain, non-repetitive work suits <b>PERT</b> (developed for the US Navy's Polaris missile programme, 1958). CPM (DuPont, 1957) is for works with known durations, such as construction.</li>
<li><b>3 (correct):</b> CPM focuses on activities and their durations (PERT is described as event-oriented).</li>
<li><b>4 (correct):</b> It is used to plan, schedule (float, critical path) and control projects, including time–cost trade-off.</li></ul>
<table><tr><th></th><th>CPM</th><th>PERT</th></tr><tr><td>Time estimate</td><td>One (deterministic)</td><td>Three (probabilistic)</td></tr><tr><td>Orientation</td><td>Activity</td><td>Event</td></tr><tr><td>Suited to</td><td>Repetitive, known jobs (construction)</td><td>R&amp;D, new projects</td></tr><tr><td>Cost</td><td>Time–cost trade-off (crashing)</td><td>Time only</td></tr></table>` },

{ id: "2018-54", year: 2018, no: 54, subject: "maths", topic: "Linear programming",
q: `The objective function z = 3x<sub>1</sub> + 5x<sub>2</sub> is to be maximized subject to constraints<br>x<sub>1</sub> + 2x<sub>2</sub> ≤ 200<br>x<sub>1</sub> + x<sub>2</sub> ≤ 150<br>x<sub>1</sub>, x<sub>2</sub> ≥ 0<br>The values of x<sub>1</sub> and x<sub>2</sub> in this context are, respectively`,
opts: ["100 and 75", "125 and 75", "100 and 50", "125 and 50"], ans: 2,
analysis: `<h3>Answer: (c) 100 and 50</h3><table><tr><th>Corner</th><th>z = 3x₁ + 5x₂</th></tr><tr><td>(0, 0)</td><td>0</td></tr><tr><td>(150, 0)</td><td>450</td></tr><tr><td>(0, 100)</td><td>500</td></tr><tr><td>(100, 50): both constraints tight</td><td><b>550</b></td></tr></table>
<p>Subtracting the constraints: x₂ = 50, then x₁ = 100.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> (100, 75): 100 + 150 = 250 &gt; 200, infeasible.</li>
<li><b>(b)</b> (125, 75): violates both constraints.</li>
<li><b>(d)</b> (125, 50): 125 + 100 = 225 &gt; 200, infeasible.</li></ul><div class="tip">Shadow prices: at the optimum both constraints bind. Solving the dual (3 = y₁ + y₂, 5 = 2y₁ + y₂) gives y₁ = 2, y₂ = 1: one more unit of the first resource adds 2 to z, of the second adds 1. Check: 200 × 2 + 150 × 1 = 550 = z.</div>` },

{ id: "2018-55", year: 2018, no: 55, subject: "reasoning", topic: "Mensuration",
q: `Consider the length of a room is 15 m and width is 10 m. If the sum of the areas of the floor and ceiling is equal to the sum of the areas of the four walls, then the volume of the room is`,
opts: ["900 m<sup>3</sup>", "1000 m<sup>3</sup>", "1200 m<sup>3</sup>", "1500 m<sup>3</sup>"], ans: 0,
analysis: `<h3>Answer: (a) 900 m³</h3><p>Floor + ceiling = 2lb = 2 × 15 × 10 = 300 m². Four walls = 2h(l + b) = 50h. Equating: 50h = 300, so h = 6 m. Volume = 15 × 10 × 6 = <b>900 m³</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 1,000 m³ needs h ≈ 6.67 m.</li>
<li><b>(c)</b> 1,200 m³ needs h = 8 m.</li>
<li><b>(d)</b> 1,500 m³ needs h = 10 m.</li></ul>
<div class="tip">General result: h = lb/(l + b). Area of four walls = perimeter × height.</div><div class="tip">Related formulas for a cuboid: total surface area 2(lb + bh + hl); diagonal √(l² + b² + h²) (here √(225 + 100 + 36) = 19 m).</div><div class="key">Painting and plastering problems use the same pieces: four walls = 2h(l + b) (minus doors and windows), ceiling = lb. Here the walls are 50 × 6 = 300 m², equal to floor plus ceiling.</div>` },

{ id: "2018-56", year: 2018, no: 56, subject: "pm", topic: "Economic order quantity",
q: `If the EOQ is 360 units, order cost is ₹ 5 per order and carrying cost is ₹ 0·20 per unit, what is the usage ?`,
opts: ["2654 units", "2592 units", "1872 units", "1574 units"], ans: 1,
analysis: `<h3>Answer: (b) 2592 units</h3><p>EOQ = √(2DS/H) → D = EOQ² × H/(2S) = 360² × 0.20/(2 × 5) = 1,29,600 × 0.02 = <b>2,592 units</b> (per year).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 2,654 gives EOQ ≈ 364.</li>
<li><b>(c)</b> 1,872 gives EOQ ≈ 306.</li>
<li><b>(d)</b> 1,574 gives EOQ ≈ 281.</li></ul>
<div class="key">At the EOQ, annual ordering cost = annual carrying cost = (D/Q)S = (Q/2)H; here both are ₹36. Number of orders = D/Q = 7.2 a year.</div><div class="tip">Total relevant cost at EOQ = √(2DSH) = √(2 × 2592 × 5 × 0.2) = ₹72 a year (₹36 ordering + ₹36 carrying). EOQ grows only with the square root of demand.</div>` },

{ id: "2018-57", year: 2018, no: 57, subject: "pm", topic: "Floats",
q: `If L<sub>j</sub> = the latest occurrence time for event j, E<sub>i</sub> = the earliest occurrence time for event i, T<sub>ij</sub> = the duration of activity ij, what is the total float for activity ij ?`,
opts: ["E<sub>i</sub> − L<sub>j</sub> − T<sub>ij</sub>", "L<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub>", "T<sub>ij</sub> − E<sub>i</sub> − L<sub>j</sub>", "T<sub>ij</sub> − L<sub>j</sub> + E<sub>i</sub>"], ans: 1,
analysis: `<h3>Answer: (b) L<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub></h3><p>Total float is the time an activity can be delayed without delaying the project: the time available (latest finish at j minus earliest start at i) minus the time needed (duration).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> is the negative of the total float.</li>
<li><b>(c)</b> T − E − L has no meaning; it is usually a large negative number.</li>
<li><b>(d)</b> T − L + E is again the negative of the total float.</li></ul>
<table><tr><th>Float</th><th>Formula</th></tr><tr><td>Total</td><td>L<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub></td></tr><tr><td>Free</td><td>E<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub></td></tr><tr><td>Independent</td><td>E<sub>j</sub> − L<sub>i</sub> − T<sub>ij</sub></td></tr><tr><td>Interfering</td><td>Total − Free = L<sub>j</sub> − E<sub>j</sub></td></tr></table>
<div class="tip">Critical activities have zero total float.</div>` },

{ id: "2018-58", year: 2018, no: 58, subject: "materials", topic: "Building stones",
q: `The process of removing irregular portions of stones and facilitating their easy transportation is known as`,
opts: ["Quarrying", "Reticulating", "Dressing", "Pointing"], ans: 2,
analysis: `<h3>Answer: (c) Dressing</h3><p>Dressing works quarried stone into a desired shape and size by removing irregular projections, using hammers, chisels or machines. Rough dressing at the quarry reduces weight and so makes transport easier and cheaper; finer dressing gives faces and edges suitable for masonry.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Quarrying is extracting stone from the natural rock bed (by wedging, heating or blasting).</li>
<li><b>(b)</b> Reticulated work is a masonry <b>finish</b> (a net-like pattern of sunk joints), not a preparation process.</li>
<li><b>(d)</b> Pointing is finishing the mortar joints of masonry with good mortar for weather resistance and appearance.</li></ul>
<div class="tip">Stone finishes after dressing: hammer-dressed, rock-faced, tooled, rubbed, polished, vermiculated. Seasoning of stone: letting quarry sap dry out before use (6–12 months).</div>` },

{ id: "2018-59", year: 2018, no: 59, subject: "materials", topic: "Magnetic losses",
q: `On which of the following factors does hysteresis loss depend ?<ol><li>Magnetic field intensity</li><li>Frequency of the field</li><li>Volume of material</li><li>Néel temperature</li></ol>`,
opts: ["1, 2 and 4 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2 and 3 only"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 only</h3><p>Steinmetz's law: P<sub>h</sub> = η B<sub>max</sub><sup>1.6</sup> f V, where η is the hysteresis coefficient of the material.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Loss grows with the peak flux density, i.e. with the field intensity driving it (area of the B–H loop).</li>
<li><b>2 (correct):</b> The loop is traversed once per cycle, so loss per second is proportional to frequency.</li>
<li><b>3 (correct):</b> Loss is per unit volume per cycle, so total loss is proportional to volume.</li>
<li><b>4 (wrong):</b> The Néel temperature is where <b>antiferromagnetic</b> materials become paramagnetic; it does not enter the hysteresis loss of a ferromagnetic core.</li></ul>
<div class="tip">Eddy-current loss P<sub>e</sub> ∝ B<sub>max</sub>² f² t² (t = lamination thickness). Hence silicon-steel (low hysteresis) laminated cores in transformers; soft ferrites at high frequency.</div>` },

{ id: "2018-60", year: 2018, no: 60, subject: "materials", topic: "Crystal structures",
q: `What is the volume of an FCC unit cell in terms of its atomic radius R ?`,
opts: ["√3 R<sup>3</sup>", "16 R<sup>3</sup> √2", "16 R<sup>3</sup> √3", "√2 R<sup>3</sup>"], ans: 1,
analysis: `<h3>Answer: (b) 16√2 R³</h3><p>In FCC, atoms touch along the face diagonal: √2 a = 4R, so a = 2√2 R. Volume a³ = (2√2 R)³ = 16√2 R³ ≈ 22.6 R³.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> √3 R³ is far too small (less than one atom's volume, 4.19 R³).</li>
<li><b>(c)</b> 16√3 R³ mixes in the BCC body-diagonal factor √3.</li>
<li><b>(d)</b> √2 R³ is again too small.</li></ul>
<table><tr><th></th><th>SC</th><th>BCC</th><th>FCC</th></tr><tr><td>a</td><td>2R</td><td>4R/√3</td><td>2√2 R</td></tr><tr><td>Atoms per cell</td><td>1</td><td>2</td><td>4</td></tr><tr><td>Coordination no.</td><td>6</td><td>8</td><td>12</td></tr><tr><td>Packing factor</td><td>0.52</td><td>0.68</td><td>0.74</td></tr></table><div class="tip">Density from the unit cell: ρ = nA/(V<sub>c</sub>N<sub>A</sub>). For copper (FCC, R = 0.128 nm, A = 63.5): a = 0.362 nm, ρ ≈ 8.9 g/cm³.</div><div class="key">Derivation in one line: in FCC the face diagonal holds one full atom and two halves, i.e. 4R = √2 a. (In BCC the body diagonal: 4R = √3 a.)</div>` },

{ id: "2018-61", year: 2018, no: 61, subject: "materials", topic: "Vulcanisation",
q: `How much sulphur is required per 100 kg of final rubber product to completely crosslink butadiene rubber ?`,
opts: ["17 kg", "27 kg", "37 kg", "47 kg"], ans: 2,
analysis: `<h3>Answer: (c) 37 kg</h3><p>Butadiene mer: C<sub>4</sub>H<sub>6</sub>, molar mass 4(12) + 6(1) = 54 g/mol, with one double bond per mer. Complete cross-linking needs one sulphur atom (32 g/mol) per mer. Sulphur fraction of the final product = 32/(54 + 32) = 0.372, i.e. about <b>37 kg per 100 kg</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 17 kg and <b>(b)</b> 27 kg give only partial cross-linking (soft to medium rubber).</li>
<li><b>(d)</b> 47 kg exceeds the one-sulphur-per-mer limit.</li></ul>
<div class="tip">The same calculation for polyisoprene (natural rubber, C<sub>5</sub>H<sub>8</sub>, 68 g/mol) gives 32/100 = 32%. Ordinary tyre rubber uses only 1–3% sulphur; fully cross-linked rubber is hard ebonite (about 30–40% S).</div>` },

{ id: "2018-62", year: 2018, no: 62, subject: "materials", topic: "Corrosion protection",
q: `Which one of the following is termed as sacrificial protection of metal ?`,
opts: ["Galvanization", "Tinning", "Organic coating", "Inorganic coating"], ans: 0,
analysis: `<h3>Answer: (a) Galvanization</h3><p>In galvanising, steel is coated with zinc, which is more reactive (more anodic) than iron. If the coating is scratched, zinc corrodes in preference and protects the exposed steel: <b>sacrificial (cathodic) protection</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Tin is less reactive (cathodic) to iron. It protects only as an intact barrier; once scratched, it actually speeds up rusting of the exposed iron.</li>
<li><b>(c)</b> Organic coatings (paints, lacquers, polymers) are barrier coatings.</li>
<li><b>(d)</b> Inorganic coatings (enamel, phosphate, oxide layers) are also barriers or conversion coatings.</li></ul>
<div class="tip">Sacrificial anodes of Zn, Mg or Al protect ship hulls, buried pipelines and water heaters. Impressed-current cathodic protection uses an external DC source instead.</div>` },

{ id: "2018-63", year: 2018, no: 63, subject: "materials", topic: "Bearing materials",
q: `The material used in the production of bearings is`,
opts: ["Cast iron", "Babbitt metal", "Pig iron", "Steel"], ans: 1,
analysis: `<h3>Answer: (b) Babbitt metal</h3><p>Babbitt (white metal) is a soft tin- or lead-based alloy (e.g. Sn with Sb and Cu) used to line plain (sliding) bearings. Hard intermetallic crystals carry the load in a soft matrix that conforms to the shaft, embeds dirt particles and does not score the journal.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Cast iron is used for bearing <b>housings</b> and some low-speed bushes, not as the main bearing material.</li>
<li><b>(c)</b> Pig iron is the crude product of the blast furnace, the raw material for cast iron and steel.</li>
<li><b>(d)</b> Steel (high-carbon chromium steel, 52100) is used for rolling-element bearings, but the classic bearing metal named in such questions is Babbitt.</li></ul>
<div class="tip">Other plain-bearing materials: bronzes (phosphor bronze), copper-lead, aluminium-tin, PTFE and nylon, sintered porous bronze (oil-impregnated, self-lubricating).</div>` },

{ id: "2018-64", year: 2018, no: 64, subject: "materials", topic: "Cast irons",
q: `Malleable cast iron is produced<ol><li>By quick cooling of cast iron.</li><li>By adding magnesium to molten cast iron.</li><li>From white cast iron by annealing.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "3 only", "1, 2 and 3"], ans: 2,
analysis: `<h3>Answer: (c) 3 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> Rapid cooling (chilling) of cast iron produces <b>white cast iron</b>, hard and brittle, with carbon as cementite.</li>
<li><b>2 (wrong):</b> Adding magnesium (or cerium) to molten iron makes graphite form as spheres: <b>ductile (nodular, SG) iron</b>.</li>
<li><b>3 (correct):</b> Malleable iron is made by a long annealing of white cast iron (about 900°C for many hours), which breaks down cementite into irregular graphite rosettes ("temper carbon").</li></ul>
<table><tr><th>Cast iron</th><th>Graphite form</th><th>How made</th></tr><tr><td>Grey</td><td>Flakes</td><td>Slow cooling, high Si</td></tr><tr><td>White</td><td>None (cementite)</td><td>Fast cooling, low Si</td></tr><tr><td>Malleable</td><td>Rosettes (temper carbon)</td><td>Annealing white iron</td></tr><tr><td>Ductile / SG</td><td>Spheroids</td><td>Mg or Ce added to melt</td></tr></table>` },

{ id: "2018-65", year: 2018, no: 65, subject: "materials", topic: "Magnetic materials",
q: `The critical temperature above which ferromagnetic materials lose their magnetic property is called`,
opts: ["Kelvin point", "Curie point", "Recrystallization point", "Celsius point"], ans: 1,
analysis: `<h3>Answer: (b) Curie point</h3><p>Above the Curie temperature, thermal agitation destroys the alignment of magnetic domains and a ferromagnet becomes paramagnetic. Curie temperatures: iron 770°C (768°C), nickel 358°C, cobalt 1,115°C, gadolinium about 20°C.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> "Kelvin point" is not a magnetic term (Kelvin is the absolute temperature scale).</li>
<li><b>(c)</b> Recrystallisation temperature is where cold-worked metals form new strain-free grains (about 0.3–0.5 T<sub>m</sub>).</li>
<li><b>(d)</b> "Celsius point" is not a defined term.</li></ul>
<div class="tip">The Néel temperature is the equivalent for antiferromagnets. Curie–Weiss law above T<sub>c</sub>: χ = C/(T − T<sub>c</sub>). See Q96: alpha iron is magnetic below 768°C.</div>` },

{ id: "2018-66", year: 2018, no: 66, subject: "materials", topic: "Hall effect",
q: `The Hall Effect may be used to<ol><li>Determine whether the semiconductor is p-type or n-type.</li><li>Determine the carrier concentration.</li><li>Calculate the mobility.</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>When a current-carrying conductor is placed in a magnetic field perpendicular to the current, carriers are pushed sideways and a transverse Hall voltage V<sub>H</sub> appears.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> The sign of V<sub>H</sub> (and of the Hall coefficient R<sub>H</sub>) shows whether the majority carriers are holes (p-type) or electrons (n-type).</li>
<li><b>2 (correct):</b> R<sub>H</sub> = 1/(nq), so the carrier concentration n = 1/(qR<sub>H</sub>).</li>
<li><b>3 (correct):</b> With conductivity σ measured separately, Hall mobility μ = σR<sub>H</sub>.</li></ul>
<div class="tip">Uses of Hall sensors: magnetic field measurement (gaussmeters), current sensors, brushless DC motor commutation, wheel-speed and position sensors, smartphone compasses.</div>` },

{ id: "2018-67", year: 2018, no: 67, subject: "ict", topic: "Open-source tools",
q: `Which of the following sets of free software tools are suitable for ICT-based education as well as an open source ?`,
opts: ["Scilab, Osdag, PHP and Latex", "Java, LibreOffice, Audacity and Matlab", "Scilab, Arduino, LibreOffice and Latex", "Scilab, Octave, Netduino and Latex"], ans: 0,
analysis: `<h3>Answer: (a) Scilab, Osdag, PHP and Latex</h3><p>All four are free and open-source <b>software</b> tools promoted for engineering education, notably by IIT Bombay's FOSSEE project (Free/Libre and Open Source Software for Education) and its Spoken Tutorial programme under the National Mission on Education through ICT.</p>
<ul><li>Scilab: numerical computation, an open alternative to MATLAB.</li><li>Osdag: open steel design and graphics, developed by FOSSEE.</li><li>PHP: open-source server-side scripting language.</li><li>LaTeX: open-source document preparation system for technical writing.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> MATLAB is proprietary (MathWorks); Java's main JDK is under mixed licences.</li>
<li><b>(c)</b> All four items are open, but Arduino is primarily an open-source <b>hardware</b> board (with its IDE), so the set is not purely "software tools" as the question asks; the key prefers (a).</li>
<li><b>(d)</b> Netduino is a hardware development board (.NET Micro Framework), not a software tool.</li></ul>` },

{ id: "2018-68", year: 2018, no: 68, subject: "ict", topic: "E-governance benefits",
q: `Which of the following are the benefits of e-governance system ?<ol><li>Simplicity, efficiency and accountability</li><li>Quality service to citizens</li><li>Better access to information</li><li>Expanded reach of governance</li></ol>`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "3 and 4 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> E-governance aims at SMART governance: Simple, Moral, Accountable, Responsive, Transparent; online rules and records make processes simpler and officials accountable.</li>
<li><b>2 (correct):</b> Faster, predictable services (passports, certificates, payments) improve service quality.</li>
<li><b>3 (correct):</b> Information is available anytime, anywhere (portals, RTI online, open data).</li>
<li><b>4 (correct):</b> Common Service Centres, mobile apps and online services extend governance to remote areas.</li></ul>
<div class="tip">India: National e-Governance Plan (2006), then Digital India (2015). Key platforms: Aadhaar, DigiLocker, UMANG, UPI, GeM, CPGRAMS (grievances), CSCs (over 5 lakh), and the India Stack.</div>` },

{ id: "2018-69", year: 2018, no: 69, subject: "ict", topic: "Mobile communication",
q: `What does CDMA stand for ?`,
opts: ["Code Division Mobile Access", "Code Division Multiple Access", "Code Division Multiple Applications", "Code Division Mobile Applications"], ans: 1,
analysis: `<h3>Answer: (b) Code Division Multiple Access</h3><p>CDMA is a multiple-access scheme in which all users transmit at the same time on the same frequency band; each user's signal is spread with a unique code (spread spectrum), and the receiver separates users by correlating with the right code.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> are not the expansion; "multiple access" means many users sharing one channel.</li></ul>
<table><tr><th>Scheme</th><th>How users share</th><th>Example</th></tr><tr><td>FDMA</td><td>Different frequencies</td><td>1G analogue</td></tr><tr><td>TDMA</td><td>Different time slots</td><td>GSM (2G)</td></tr><tr><td>CDMA</td><td>Different codes</td><td>IS-95, 3G (WCDMA, CDMA2000)</td></tr><tr><td>OFDMA</td><td>Orthogonal subcarriers</td><td>4G LTE, 5G NR</td></tr></table>` },

{ id: "2018-70", year: 2018, no: 70, subject: "reasoning", topic: "Productivity and wages",
q: `A small production unit now works 6 days per week with 3½ hours of first shift every one of the 6 days and 3 hours of second shift for each of the first 5 days. Wage negotiations led to an agreement to work on 5 days a week with both shifts together clocking 7½ hours per day with an 8% increase in weekly wages. How much change in the hourly production would mean parity in the agreement for both management and employees ?`,
opts: ["3·68%", "2·15%", "1·82%", "1·33%"], ans: 0,
analysis: `<h3>Answer: (a) 3·68%</h3><p>Hours now: 6 × 3.5 + 5 × 3 = 21 + 15 = 36 hours a week. Hours after: 5 × 7.5 = 37.5 hours a week.<br>For parity, weekly output must rise by the same 8% as the wage bill (so wage cost per unit stays the same): new output = 1.08 × old.<br>Required hourly output ratio = (1.08 × 36)/37.5 = 38.88/37.5 = 1.0368 → an increase of <b>3.68%</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 2.15% and <b>(c)</b> 1.82% do not follow from these hours.</li>
<li><b>(d)</b> 1.33% ignores the wage rise and compares hours wrongly.</li></ul>
<div class="tip">Without the wage rise, the extra 1.5 hours would actually allow hourly output to fall by 4% (36/37.5 = 0.96).</div>` },

{ id: "2018-71", year: 2018, no: 71, subject: "ict", topic: "eNAM",
q: `Consider the following statements :<ol><li>National Agricultural Portal, eNAM, is designed to create a unified national market for agricultural commodities.</li><li>Farmers can showcase their produce online from the nearest market and the buyer can quote his price from anywhere.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], ans: 2,
analysis: `<h3>Answer: (c) Both 1 and 2</h3><p>e-NAM (National Agriculture Market), launched on 14 April 2016, is a pan-India electronic trading portal that links existing APMC mandis into one network. It is run by the Small Farmers Agribusiness Consortium (SFAC) under the Ministry of Agriculture.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Its aim is a unified national market for agricultural commodities ("One Nation, One Market").</li>
<li><b>2 (correct):</b> Produce is assayed and listed at the farmer's nearest e-NAM mandi; traders anywhere can bid online, and payment goes to the farmer's account.</li></ul>
<p><b>Latest update (as of 2026):</b> e-NAM completed ten years in April 2026, with 1,656 mandis in 23 states and 4 union territories integrated, and about 1.80 crore farmers and 2.7 lakh traders registered (PIB, March 2026).</p>` },

{ id: "2018-72", year: 2018, no: 72, subject: "ethics", topic: "Codes of ethics",
q: `Consider the following statements regarding the code of ethics for Engineers :<ol><li>The safety, health and welfare of the public are of paramount importance.</li><li>Perform services only in the area of their competence.</li><li>Issue public statements strictly in an objective and truthful manner.</li><li>Avoid deceptive acts.</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "3 and 4 only", "1, 2, 3 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3 and 4</h3><p>All four are among the six Fundamental Canons of the NSPE Code of Ethics for Engineers (see 2017 Q100).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Canon 1: hold paramount the safety, health and welfare of the public.</li>
<li><b>2 (correct):</b> Canon 2: perform services only in areas of their competence.</li>
<li><b>3 (correct):</b> Canon 3: issue public statements only in an objective and truthful manner.</li>
<li><b>4 (correct):</b> Canon 5: avoid deceptive acts.</li></ul>
<div class="tip">The other two canons: act for each employer or client as faithful agents or trustees (4), and conduct themselves honourably, responsibly, ethically and lawfully to enhance the profession's reputation (6).</div>` },

{ id: "2018-73", year: 2018, no: 73, subject: "ict", topic: "Radar components",
q: `In a radar system, the term 'Rat-Race' is used in connection with`,
opts: ["Modulator", "Pulse characteristics", "Receiver Bandwidth", "Duplexer"], ans: 3,
analysis: `<h3>Answer: (d) Duplexer</h3><p>A "rat-race" is a hybrid ring coupler: a ring of transmission line 1.5 λ in circumference with four ports. In radar it is used in <b>balanced duplexers</b>, which let one antenna be shared by the transmitter and receiver, routing the high-power pulse to the antenna and the weak echo to the receiver while protecting the receiver (with TR tubes).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> The modulator produces the high-voltage pulses that switch the transmitter (magnetron) on.</li>
<li><b>(b)</b> Pulse characteristics (width, PRF) set range resolution and maximum unambiguous range; no rat-race involved.</li>
<li><b>(c)</b> Receiver bandwidth is matched to pulse width (B ≈ 1/τ).</li></ul>` },

{ id: "2018-74", year: 2018, no: 74, subject: "materials", topic: "Scope of materials science",
q: `Consider the following statements :<ol><li>Material science deals with the strength and stiffness behaviour of components (buildings/machines/vehicle facilities) based on their response to imposed stresses (forces, moments, torque, etc.).</li><li>Material properties are dependent on their micro-structure and response to force fields and surface interaction.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], ans: 1,
analysis: `<h3>Answer: (b) 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> The strength and stiffness of <b>components</b> under forces, moments and torques is the subject of <b>strength of materials / structural mechanics</b>. Materials science studies the materials themselves.</li>
<li><b>2 (correct):</b> Materials science relates properties to structure (atomic bonding, crystal structure, microstructure: grains, phases, defects), processing and performance.</li></ul>
<div class="key">The materials paradigm: processing → structure → properties → performance. Example: quenching steel (processing) forms martensite (structure), giving high hardness (property) for cutting tools (performance).</div>` },

{ id: "2018-75", year: 2018, no: 75, subject: "ca", topic: "Development indices",
q: `PQLI is based on`,
opts: ["Infant mortality, life expectancy and adult literacy rate", "Crime rate, clean environment and quality of housing", "Air pollution, water pollution and sanitation conditions", "Health, education and environment"], ans: 0,
analysis: `<h3>Answer: (a) Infant mortality, life expectancy and adult literacy rate</h3><p>The Physical Quality of Life Index (Morris David Morris, 1979, Overseas Development Council) averages three indicators, each scaled 0–100: <b>infant mortality</b>, <b>life expectancy at age one</b> and <b>basic literacy</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Crime, environment and housing appear in "quality of life" or liveability indices (e.g. the Ease of Living Index), not the PQLI.</li>
<li><b>(c)</b> Pollution and sanitation are environmental indicators.</li>
<li><b>(d)</b> Too vague: PQLI uses no income and no environment indicator.</li></ul>
<div class="tip">Compare the HDI (Q76), which adds income (GNI per capita) to health and education. PQLI was criticised for overlapping indicators (infant mortality and life expectancy are closely related).</div>` }
);
