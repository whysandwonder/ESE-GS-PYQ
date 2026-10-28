// General Principles of Design, Drawing and Importance of Safety: notes book built from ESE Paper I PYQs 2017–2026.
addBook("design", [
 ["d1", "Drawing practice, lines, dimensions and scales", [["d1-1", "Drawing sheets, lines, dimensioning and scales"], ["d1-2", "Conics and engineering curves"]]],
 ["d2", "Orthographic projections", [["d2-1", "Projections of points, lines and planes"], ["d2-2", "Solids: projections, sections, developments and intersections"]]],
 ["d3", "Pictorial drawing and CAD", [["d3-1", "Isometric, oblique and perspective views; CAD"]]],
 ["d4", "Principles of machine design", [["d4-1", "The design process and design philosophy"], ["d4-2", "Strength, fatigue and common machine elements"]]],
 ["d5", "Maintenance and failure", [["d5-1", "Maintenance types, terms and failure severity"]]],
 ["d6", "Importance of safety", [["d6-1", "Safety management and accident causation"], ["d6-2", "Site, machine and fire safety; ergonomics"]]],
 ["d7", "Civil and transport design basics", [["d7-1", "Foundations, estimation, surveying, roads and vehicles"]]]
]);

addBookTopic("design", "d1-1", `
<p>Engineering drawing is a language with fixed rules: the Indian standard is <b>SP 46 / IS 10711–10714</b> (based on ISO). ESE asks about lines, dimensioning systems, scales and types of drawings almost every year.</p>
<h3>Types of drawings</h3>
<table><tr><th>Drawing</th><th>Purpose</th></tr>
<tr><td>Detail (part) drawing</td><td>One part with all dimensions, tolerances, material and finish</td></tr>
<tr><td>Assembly drawing</td><td>How parts fit together; carries a <b>parts list / bill of materials</b></td></tr>
<tr><td><b>Tabular drawing</b></td><td>One drawing for a family of parts of the <b>same shape but different sizes</b>; letters replace dimensions and a table gives values</td></tr>
<tr><td>Schematic assembly</td><td>Simplified view of how parts work together</td></tr>
<tr><td>Installation drawing</td><td>Where and how equipment is installed (foundations, connections)</td></tr>
<tr><td>Patent drawing</td><td>Illustrates an invention for a patent application</td></tr></table>
<p><b>Bill of materials / parts list</b>: part number, name, quantity, material, standard reference and remarks. It does <b>not</b> include cost (2022 Q91).</p>
<h3>Types of lines (IS 10714 / SP 46)</h3>
<table><tr><th>Line</th><th>Use</th></tr>
<tr><td>Continuous thick (wide)</td><td>Visible outlines and edges</td></tr>
<tr><td>Continuous thin (narrow)</td><td>Dimension, extension, leader lines, hatching, imaginary intersections, outlines of revolved sections</td></tr>
<tr><td>Continuous thin <b>with zigzags</b></td><td><b>Long-break</b> lines (2022 Q92); freehand thin wavy line = short break</td></tr>
<tr><td>Dashed thin</td><td>Hidden outlines and edges</td></tr>
<tr><td>Chain thin (long dash, dot)</td><td>Centre lines, lines of symmetry, pitch circles</td></tr>
<tr><td>Chain thin, thick at ends and changes of direction</td><td>Cutting planes</td></tr>
<tr><td><b>Chain thin double-dashed</b> (phantom)</td><td>Adjacent parts, <b>alternative and extreme positions of movable parts</b>, centroidal lines (2023 Q47)</td></tr></table>
<h3>Dimensioning</h3>
<ul><li><b>Two systems</b>: <b>aligned</b> (figures parallel to the dimension line, read from bottom or right) and <b>unidirectional</b> (all figures horizontal, read from bottom). Unidirectional is the one generally recommended (2025 Q37).</li>
<li><b>Arranging dimensions in a series</b>: chain (continuous), parallel (from a common datum), combined, and progressive/running dimensioning. "Proportional dimensioning" is not a method (2020 Q33).</li>
<li><b>Rules</b>: dimension each feature once; place dimensions on the view that shows the feature most clearly; keep them outside the view where possible; avoid dimensioning to hidden lines; dimension lines should not cross; units (mm) are not written on each dimension.</li></ul>
<h3>Scales and representative fraction</h3>
<ul><li><b>RF</b> = drawing length ÷ actual length (same units). RF &lt; 1 reducing, = 1 full size, &gt; 1 enlarging.</li>
<li>Example (2023 Q45): 1.5 inch = 1 foot → RF = 1.5/12 = <b>1/8</b>; length of scale = RF × maximum length.</li>
<li><b>Plain scale</b> reads two units (m and dm); <b>diagonal scale</b> and <b>vernier scale</b> read three (m, dm, cm). Scale of chords measures angles.</li></ul>
<h3>Drawing instruments</h3>
<ul><li><b>French curves</b>: draw irregular curves (through plotted points) that a compass cannot (2024 Q82).</li>
<li>Set squares (30°–60° and 45°), protractor (angles), compass and dividers, scales, mini-drafter.</li></ul>
<div class="key">Quick recall: zigzag = long break; double-dashed chain = alternative positions; unidirectional = recommended; tabular drawing = same shape, many sizes; BOM has no cost.</div>`);

addBookTopic("design", "d1-2", `
<p>Conic sections and engineering curves are asked as definitions (which curve, which eccentricity, which section of a cone).</p>
<h3>Conics as sections of a cone</h3>
<table><tr><th>Cutting plane</th><th>Section</th></tr>
<tr><td>Perpendicular to the axis</td><td>Circle</td></tr>
<tr><td>Inclined to the axis at an angle greater than the generators, cutting all generators</td><td>Ellipse</td></tr>
<tr><td><b>Parallel to a generator</b> (makes the same angle with the axis as the generators/"elements")</td><td><b>Parabola</b> (2019 Q34, 2025 Q33)</td></tr>
<tr><td>At a smaller angle to the axis than the generators, or parallel to the axis</td><td>Hyperbola; a plane <b>parallel to the axis</b> gives a <b>rectangular hyperbola</b> for a right cone section parallel to VP (2017 Q24)</td></tr>
<tr><td>Through the apex</td><td>Triangle (two straight lines)</td></tr></table>
<h3>Conics by eccentricity</h3>
<ul><li>e = distance from focus ÷ distance from directrix. <b>Ellipse e &lt; 1, parabola e = 1, hyperbola e &gt; 1</b>, circle e = 0 (2026 Q5).</li>
<li>The <b>axis</b> is the line through the focus perpendicular to the directrix (2020 Q32). The <b>latus rectum</b> is the chord through the focus perpendicular to the axis.</li>
<li><b>Rectangular hyperbola</b>: the product of distances of a point from two perpendicular <b>asymptotes</b> is constant (xy = c²) (2020 Q31). It represents Boyle's law, PV = constant.</li>
<li>Construction methods: eccentricity (directrix–focus), concentric circles, rectangle/oblong, arcs of circles (ellipse), trammel.</li></ul>
<h3>Roulettes and other curves</h3>
<table><tr><th>Curve</th><th>Generated by</th></tr>
<tr><td>Cycloid</td><td>Point on a circle rolling on a straight line</td></tr>
<tr><td>Epicycloid / hypocycloid</td><td>Circle rolling outside / inside another circle. If the rolling circle has <b>half</b> the radius of the directing circle, the hypocycloid is a <b>straight line</b> (a diameter) (2017 Q17)</td></tr>
<tr><td>Involute</td><td>End of a string unwound from a circle or polygon (gear teeth)</td></tr>
<tr><td>Archimedean spiral</td><td>Point moving uniformly along a line that rotates uniformly about a pole. A point moving along a swinging pendulum traces a <b>spiral</b> (2017 Q12)</td></tr>
<tr><td>Helix</td><td>Point moving round a cylinder or cone while advancing axially (screw threads, springs)</td></tr></table>
<div class="tip">Uses: ellipse (arches, manholes), parabola (reflectors, arches, bending moment of UDL), hyperbola (cooling towers, Boyle's law), involute (gear profiles), cycloid (cycloidal gears).</div>`);

addBookTopic("design", "d2-1", `
<p>Orthographic projection uses two reference planes, the <b>HP</b> (horizontal) and the <b>VP</b> (vertical), meeting in the <b>reference line xy</b>. India uses <b>first-angle</b> projection (object between observer and plane): the front view (FV) is drawn above xy and the top view (TV) below.</p>
<h3>Projection of a point</h3>
<ul><li>FV shows height above/below HP; TV shows distance in front of/behind VP.</li>
<li>The line joining FV and TV is always perpendicular to xy and is called a <b>projector</b> (not the reference line) (2026 Q1).</li></ul>
<table><tr><th>Quadrant</th><th>Position</th><th>FV</th><th>TV</th></tr>
<tr><td>I</td><td>Above HP, in front of VP</td><td>above xy</td><td>below xy</td></tr>
<tr><td>II</td><td>Above HP, behind VP</td><td>above</td><td>above</td></tr>
<tr><td>III</td><td>Below HP, behind VP</td><td>below</td><td>above</td></tr>
<tr><td>IV</td><td>Below HP, in front of VP</td><td>below</td><td>below</td></tr></table>
<h3>Projection of lines</h3>
<ul><li>A line parallel to a plane shows its <b>true length</b> on that plane. A line parallel to HP and inclined to VP: TV = true length, FV parallel to xy (2017 Q16).</li>
<li>Perpendicular to a plane → appears as a point there and true length on the other.</li>
<li>Inclined to both planes: find true length and inclinations (θ with HP, φ with VP) by rotating or by an auxiliary plane.</li></ul>
<h3>Traces</h3>
<ul><li>The <b>trace</b> of a line is the point where it (extended) meets a plane: HT on HP, VT on VP. A line has a trace on every plane it is <b>not parallel</b> to.</li>
<li>Parallel to both HP and VP → no trace. Inclined to HP, parallel to VP → <b>only HT</b> (2023 Q48). Perpendicular to HP → HT coincides with its point top view, no VT. Perpendicular to VP → VT coincides with its point front view, <b>no HT</b> (2022 Q96, 2026 Q2).</li>
<li>The trace of a <b>plane</b> is a line, where the plane meets HP (HT) or VP (VT) (2024 Q83).</li></ul>
<h3>Projection of planes</h3>
<ul><li>Plane <b>parallel</b> to a reference plane → <b>true shape and size</b> on it (not reduced); perpendicular → a straight line (edge view).</li>
<li>Plane perpendicular to both HP and VP (profile plane): its HT and VT lie on one line perpendicular to xy.</li>
<li>Draw the true-shape view first: plane parallel to VP → start with the FV and project the TV (2026 Q3).</li>
<li>Planes inclined to one plane are drawn in two stages: simple position first, then tilted.</li></ul>
<div class="key">Golden rule: "parallel → true shape/length; perpendicular → point or line; inclined → foreshortened".</div>`);

addBookTopic("design", "d2-2", `
<h3>Projections of solids</h3>
<ul><li>Solids: prisms and pyramids (named by base: triangular, square, pentagonal, hexagonal), cylinder, cone; also tetrahedron, cube.</li>
<li>A solid in simple position has its axis <b>perpendicular to one plane</b>; the base is then parallel to that plane and shows its true shape there, so draw that view first (2026 Q4).</li>
<li>Example (2023 Q49): triangular prism standing on its base with one rectangular face perpendicular to VP → front view is a <b>single rectangle</b> (two faces overlap). With a face parallel to VP the FV is two rectangles.</li>
<li>Suspended solid: a pyramid hung freely from a base corner has its <b>centre of gravity vertically below</b> the point of suspension, so the line joining that corner and the CG is vertical (2017 Q48).</li></ul>
<h3>Sections of solids</h3>
<ul><li>A section plane cuts the solid; the cut surface is the <b>section</b>, shown by hatching (thin lines at 45°). The true shape of the section is seen on a plane parallel to the cutting plane.</li>
<li>Pentagonal prism lying on a rectangular face, cut by a plane through both ends: the section can be a polygon with up to <b>seven</b> sides (2017 Q8): count the edges the plane cuts.</li>
<li>Cone sections: see conics (d1-2).</li>
<li><b>Sectional views</b>: on assemblies, section lines on adjacent parts are drawn in <b>opposite directions</b> (usually 45°) or with different spacing (2021 Q88). Shafts, bolts, ribs, webs and keys are not sectioned along their length.</li></ul>
<h3>Multi-view drawings</h3>
<p>A visible or hidden line on a view can represent an <b>intersection of two surfaces</b>, an <b>edge view of a surface</b>, or the <b>limit (contour) of a curved surface</b> (2021 Q87). Six principal views; usually three (front, top, side) suffice.</p>
<h3>Development of surfaces</h3>
<table><tr><th>Method</th><th>Used for</th></tr>
<tr><td>Parallel-line</td><td>Prisms and cylinders (edges/generators parallel). A cylinder develops into a <b>rectangle</b> πd × h</td></tr>
<tr><td><b>Radial-line</b></td><td><b>Pyramids and cones</b>: true slant length used as radius (2024 Q85). A cone develops into a <b>sector</b> with angle θ = 360° × r/l</td></tr>
<tr><td>Triangulation</td><td>Transition pieces, oblique cones</td></tr>
<tr><td>Approximate</td><td>Double-curved surfaces (sphere)</td></tr></table>
<ul><li>If the development of a cone's lateral surface is a <b>semicircle</b>: θ = 180° → r/l = ½ → slant height = <b>diameter of the base</b> (2017 Q18).</li>
<li>The <b>shortest path</b> of a thread wound round a cone from a base point back to the same point is the <b>largest chord</b> (straight line) of the development sector (2017 Q10).</li></ul>
<h3>Intersection of solids</h3>
<p>Two methods to find the curve where two solids interpenetrate: the <b>line method</b> and the <b>cutting-plane method</b> (2024 Q84). The box and coordinate methods belong to isometric drawing.</p>`);

addBookTopic("design", "d3-1", `
<p>Pictorial views show three faces in one view. Projections are either <b>parallel</b> (observer at infinity: orthographic, axonometric, oblique) or <b>perspective</b> (projectors converge to the eye).</p>
<h3>Classification</h3>
<table><tr><th>Projection</th><th>Projectors</th><th>Object</th></tr>
<tr><td>Multi-view orthographic</td><td>Parallel, ⟂ to plane</td><td>Faces parallel to planes</td></tr>
<tr><td>Axonometric (isometric, dimetric, trimetric)</td><td>Parallel, ⟂ to plane</td><td>Tilted to show three faces</td></tr>
<tr><td><b>Oblique</b></td><td>Parallel, <b>inclined</b> to plane (2025 Q36)</td><td>One face parallel to plane</td></tr>
<tr><td>Perspective</td><td>Converge at station point</td><td>Any</td></tr></table>
<p><b>Conic</b> (map) projections and curvilinear perspective are not parallel projections (2025 Q34).</p>
<h3>Isometric</h3>
<ul><li>The object is placed so its three principal edges are equally inclined to the plane; isometric axes are <b>120°</b> apart (2021 Q83).</li>
<li>Isometric scale = 0.816 of true length (√(2/3)) for an isometric <b>projection</b>; an isometric <b>drawing</b> uses true lengths (about 22.5% bigger).</li>
<li><b>Non-isometric lines</b> (not parallel to the axes) cannot be measured directly. If their ends lie in isometric planes, use the <b>box method</b>; otherwise use the <b>offset / coordinate method</b> (2022 Q95, 2023 Q51).</li>
<li>Circles appear as ellipses, drawn by the four-centre method.</li>
<li>Rules: draw to agree with the given views showing maximum detail; at every corner at least three edges meet, at least two visible; two visible edges never cross; hidden lines are omitted (2023 Q50).</li></ul>
<h3>Oblique</h3>
<ul><li>One face (the most irregular one, with circles) is kept parallel to the plane, so it appears in <b>true shape</b>; circles stay circles. This is its advantage over isometric (2021 Q89).</li>
<li>Faces <b>perpendicular</b> to the plane appear distorted along receding lines (2022 Q94).</li>
<li><b>Cavalier</b>: receding lines full size, projectors at 45° to the plane (receding axis drawn at 30°, 45° or 60°) (2022 Q93, 2025 Q35). <b>Cabinet</b>: receding lines half size, looks more natural.</li></ul>
<h3>Perspective</h3>
<p>Elements: station point (eye), picture plane, ground plane, horizon line, vanishing points. One-, two- and three-point perspectives. Methods: visual-ray and vanishing-point.</p>
<h3>CAD</h3>
<ul><li>AutoCAD <b>INSERT</b> places <b>blocks and wblocks</b> into the current drawing (2019 Q33). BLOCK saves within the drawing; WBLOCK writes to a separate file.</li>
<li>CAD/CAM: CAD creates geometry; CAM uses it to generate machine instructions (G-code for CNC). The common database (not separate copies) is what links them.</li></ul>`);

addBookTopic("design", "d4-1", `
<h3>What design involves</h3>
<p>Mechanical design turns a need into a product that can be made. Mott separates three elements (2024 Q80):</p>
<ul><li><b>Functions</b>: what the device must do, in general terms.</li>
<li><b>Design requirements</b>: detailed, usually <b>quantitative</b> statements: performance, environment, space and weight limits, available materials and components.</li>
<li><b>Evaluation criteria</b>: qualities used to compare alternative designs (safety, cost, ease of use, reliability).</li></ul>
<p>Mott's lawn-mower example: wheels support weight and roll; <b>axles</b> transfer weight from the housing to the wheels, allow rotation and locate the wheels; the housing encloses parts; the blade cuts (2024 Q81).</p>
<h3>Basic procedure of machine design (Bhandari)</h3>
<ol><li><b>Specify the functions</b></li><li><b>Determine forces</b> acting</li><li><b>Select material</b></li><li><b>Determine failure mode</b></li><li>Determine geometric dimensions</li><li>Modify for manufacture and assembly</li><li>Prepare drawings</li></ol>
<p>So the order asked in 2025 Q32 is <b>2, 4, 1, 3</b>.</p>
<h3>Creative design</h3>
<ul><li>Stages of creativity: <b>preparation → concentration → incubation → illumination → verification</b> (2021 Q84 asks the order).</li>
<li>Techniques: brainstorming, synectics, morphological analysis, checklists, lateral thinking.</li></ul>
<h3>Design for manufacture and systems</h3>
<ul><li>The specification with the greatest effect on cost is <b>tolerance</b>: tight tolerances raise cost steeply; specify the largest tolerance that works (2020 Q34). Also minimise part count, standardise, use easy-to-machine materials.</li>
<li><b>Modularisation</b> makes complex systems feasible to design, assemble and operate: independent modules with standard interfaces (2019 Q62).</li></ul>
<h3>Uncertainty and testing</h3>
<ul><li>Statistical parameters are estimated by experiment, from published data, by the method of moments or maximum likelihood; "propagation of weight" is not a method (2020 Q36).</li>
<li>Factor of safety covers uncertainty in loads, material, analysis and manufacture.</li>
<li>Shigley's <b>design categories by testing</b>: (1) failure would endanger life or very large quantities → elaborate testing; (2) large enough quantities for a moderate test series; (3) quantities so small, or time so short, that testing is not justified; (4) existing part that failed, needing analysis (2025 Q40).</li></ul>`);

addBookTopic("design", "d4-2", `
<h3>Fatigue</h3>
<ul><li>Failure under <b>fluctuating</b> stress, well below ultimate strength; about <b>80–90%</b> of mechanical failures (2025 Q31). Cracks start at stress raisers and grow each cycle.</li>
<li>Endurance limit of steels ≈ 0.5 × ultimate tensile strength, reduced by surface, size, load, temperature, reliability and notch factors. Goodman/Soderberg lines combine mean and alternating stress.</li>
<li><b>Corrosion fatigue</b>: in a corrosive medium there may be no endurance limit. Factors: <b>electrolyte concentration, temperature, fluid flow rate</b>, dissolved oxygen, frequency (2025 Q39). Remedies: coatings, shot peening (compressive surface stress), corrosion-resistant materials.</li></ul>
<h3>Common calculations asked</h3>
<ul><li><b>Torsion</b>: T/J = τ/r = Gθ/L; power P = 2πNT/60. A 15 kW motor at given speed twisting a 30 mm bar 0.01 rad → length from L = GJθ/T (2017 Q39).</li>
<li><b>Composite bars</b> under load P (same strain): load shares P<sub>1</sub> = PA<sub>1</sub>E<sub>1</sub>/(A<sub>1</sub>E<sub>1</sub> + A<sub>2</sub>E<sub>2</sub>), P<sub>2</sub> likewise (2018 Q30).</li>
<li><b>Helical spring under impact</b>: equate potential energy W(h + δ) to spring energy ½kδ²; stiffness k = Gd⁴/(8D³n) (2018 Q31).</li>
<li><b>Beam deflection</b>: cantilever with end load δ = WL³/3EI; with UDL wL⁴/8EI; simply supported centre load WL³/48EI, UDL 5wL⁴/384EI (2018 Q10).</li>
<li><b>Centroid of a trapezium</b> (parallel sides a and b, height h) lies on the line joining the mid-points of the parallel sides, at a distance h(b + 2a)/(3(a + b)) from side b (2018 Q9).</li></ul>
<h3>Machine elements</h3>
<ul><li><b>Clutches</b>: uniform <b>pressure</b> theory (new clutch) gives T = μW (2/3)(R³ − r³)/(R² − r²); uniform <b>wear</b> theory (worn clutch, conservative) gives T = μW (R + r)/2 (2017 Q36).</li>
<li><b>V-belts</b>: groove angle 34°–40°; the belt wedges in the groove, so friction is higher than flat belts (effective μ = μ/sin(α/2)); the belt should <b>not</b> touch the groove bottom; suited to short centre distances (2017 Q40).</li>
<li>Shafts transmit torque; <b>axles</b> carry bending only; spindles are short shafts; keys, couplings, bearings, gears and springs complete the set.</li></ul>
<div class="key">Design equation choice follows the failure mode: yielding (ductile, static), fracture (brittle), fatigue (fluctuating), wear, buckling (slender columns), excessive deflection (stiffness).</div>`);

addBookTopic("design", "d5-1", `
<h3>Maintenance strategies</h3>
<table><tr><th>Type</th><th>When</th></tr>
<tr><td><b>Corrective</b> (breakdown)</td><td>After a failure; immediate for critical systems, can be <b>deferred</b> if not critical (2026 Q9)</td></tr>
<tr><td><b>Preventive</b></td><td>Before failure at fixed intervals or usage</td></tr>
<tr><td><b>Condition-based / predictive</b></td><td>When monitored condition shows deterioration; relies on <b>sensor technology</b> (vibration, temperature, oil analysis, thermography, acoustic emission) (2026 Q10)</td></tr>
<tr><td>Proactive / reliability-centred</td><td>Remove root causes; choose tasks by failure modes and consequences</td></tr>
<tr><td>Total productive maintenance</td><td>Operators share routine maintenance; aim zero breakdowns (see Quality notes)</td></tr></table>
<h3>Maintenance terms (IEC 60050-192 / EN 13306)</h3>
<ul><li><b>Compliance test</b>: shows whether a characteristic of the item complies with its specification (2026 Q7).</li>
<li><b>Function check-out</b>: action after maintenance to verify the item can perform its required function (2026 Q8).</li>
<li><b>Fault diagnosis</b>: identifying the fault, before repair. <b>Overhaul</b>: comprehensive examination and restoration. <b>Rebuilding</b>: restore to near-new life. <b>Modification</b>: change of design or function. <b>Turnaround</b>: planned shutdown of a whole plant for major work.</li>
<li>Reliability measures: MTBF (repairable), MTTF (non-repairable), MTTR; availability = MTBF/(MTBF + MTTR).</li></ul>
<h3>Failure severity (MIL-STD-882)</h3>
<table><tr><th>Category</th><th>Consequence</th></tr>
<tr><td>I Catastrophic</td><td>Death or total system loss</td></tr>
<tr><td>II Critical</td><td>Severe injury or major system damage</td></tr>
<tr><td>III Marginal</td><td>Minor injury or minor damage</td></tr>
<tr><td>IV Negligible</td><td>Less than minor injury or damage</td></tr></table>
<p>(2023 Q39.) Severity × probability gives the risk matrix; in FMEA, RPN = severity × occurrence × detection.</p>`);

addBookTopic("design", "d6-1", `
<h3>Why safety is a design concern</h3>
<p>Accidents cost lives, money and reputation. Safety is designed in (inherent safety, guards, interlocks) rather than added later. ESE questions draw on safety-management texts and Indian law.</p>
<h3>Laws and policy</h3>
<ul><li>India has comprehensive safety and health statutes for <b>mining, factories, ports (dock work) and construction</b> (2017 Q34): Mines Act 1952, Factories Act 1948, Dock Workers Act 1986, Building and Other Construction Workers Act 1996. These are being consolidated into the <b>Occupational Safety, Health and Working Conditions Code, 2020</b> (in force from 21 November 2025).</li>
<li>A company's <b>safety policy</b> states management's commitment and designates responsibility; it protects people and property and must be practical (2017 Q37).</li></ul>
<h3>Safety programmes</h3>
<ul><li>A safety programme is ineffective unless it first creates a <b>proper safety philosophy</b>, <b>teaches safety principles</b> and <b>eliminates misconceptions</b> about accident causes (2025 Q38).</li>
<li>Elements: management leadership, assignment of responsibility, safe working conditions, training, accident records and investigation, medical and first-aid arrangements, acceptance of personal responsibility by employees. <b>Compensation and medical payment</b> are consequences, not programme elements (2020 Q40).</li></ul>
<h3>Accident causation</h3>
<ul><li>Heinrich's domino theory: social environment → personal fault → <b>unsafe act / unsafe condition</b> → accident → injury. Remove the middle domino. Pyramid 1 : 29 : 300 (major : minor : no-injury).</li>
<li>Operator-error triggers: lack of knowledge, poor attitude, fatigue, distraction, physical limits. "Standard operating safety practice" is a <b>remedy</b>, not a trigger (2020 Q39).</li>
<li><b>Human engineering approach</b>: design the job around how a worker is <b>likely to react</b>, rather than expecting him to do what he should (2020 Q38).</li></ul>`);

addBookTopic("design", "d6-2", `
<h3>Construction and demolition safety</h3>
<ul><li>Demolition of multistorey buildings: proceed <b>top downwards</b>, storey by storey; remove glass and loose fittings first; cut off services; keep debris chutes enclosed; do not let floors become overloaded (2017 Q35).</li>
<li><b>Highway work zones</b>: advance warning signs, cones and barricades, flagmen, speed limits, lighting at night, separation of traffic from workers (2018 Q27).</li></ul>
<h3>Access and lifting equipment</h3>
<ul><li><b>Portable step-ladders</b>: on firm, level ground; fully opened with stays locked; not used as straight ladders; top step not used for standing; one person at a time (2019 Q29).</li>
<li><b>Mobile elevating work platforms</b>: on level, firm ground with outriggers set; operators trained; harness attached; never moved while raised unless designed for it (2019 Q31).</li>
<li><b>Mobile cranes</b> are sophisticated machines needing trained operators and careful planning; most accidents come from overloading, poor ground or contact with power lines (2019 Q28).</li></ul>
<h3>Machine safety</h3>
<ul><li>Guards: fixed, interlocked, automatic, distance; trip devices.</li>
<li><b>Emergency controls</b> must offer <b>speed and ease of operation</b>: within easy reach, red, mushroom-head stop buttons (2020 Q37).</li></ul>
<h3>Fire safety in buildings</h3>
<ul><li>Lifts and external staircases are given access from the <b>lobby</b>, which acts as a fire-protected refuge and escape route (2018 Q82). National Building Code Part 4 sets escape widths, travel distances, refuge areas, compartmentation and fire detection.</li>
<li>Fire classes: A (solids), B (flammable liquids), C (gases), D (metals), plus electrical fires; choose extinguishers accordingly (water for A, foam/CO₂/dry powder for B, special powder for D, CO₂ for electrical).</li></ul>
<h3>Ergonomics</h3>
<p>Ergonomic design fits the job to the worker: reduce stress on the body, avoid awkward postures and repetitive strain, design displays and controls for human capability. It improves safety and productivity (2018 Q32).</p>`);

addBookTopic("design", "d7-1", `
<h3>Foundations and structures</h3>
<ul><li><b>Grillage foundation</b>: layers of steel joists (or timber) embedded in concrete, used for <b>heavy column loads on soils of low bearing capacity</b>, spreading the load over a large area at shallow depth (2018 Q35).</li>
<li><b>Pneumatic structures</b>: <b>membrane</b> structures <b>stabilised by compressed air</b>, light, quick to erect and suited to large clear spans (stadiums, exhibition halls) (2017 Q75).</li></ul>
<h3>Quantity estimation and surveying</h3>
<ul><li>Wall quantities: long-wall/short-wall method or centre-line method (total centre-line length × width × height, with deductions for openings) (2018 Q40).</li>
<li><b>Traversing</b>: in a closed traverse the sum of interior angles = (2n − 4) × 90°; deflection angles sum to 360°. Bearings: whole-circle (0–360°) and reduced (quadrantal). Back bearing = fore bearing ± 180° (2018 Q46).</li></ul>
<h3>Roads and vehicles</h3>
<ul><li>Highway interchanges are designed with <b>circular arcs</b> (and transition curves) (2021 Q86).</li>
<li><b>Rolling resistance</b> = coefficient × weight (2018 Q28). Air resistance ∝ V². Grade resistance = W × gradient.</li>
<li><b>Power</b> = tractive force × speed. Engine rpm = vehicle speed ÷ (2π × wheel radius) × overall gear ratio (2018 Q29).</li></ul>
<h3>Land use</h3>
<p>Terraced cultivation on hill slopes is acceptable when terraces are properly made and drained, because they reduce runoff and soil erosion (2018 Q88).</p>`);
