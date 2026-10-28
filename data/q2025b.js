// ESE 2025 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q26–50
// Answers follow MADE EASY's unofficial key (see q2025a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2025-26", year: 2025, no: 26, subject: "reasoning", topic: "Work: men and children", keySource: K,
q: `If 8 children and 8 men complete certain job in 6 days and if each child takes twice the time taken by a man to finish the same work, in how many days 8 men will finish the same work ?`,
opts: ["12 days", "10 days", "9 days", "8 days"], ans: 2,
analysis: `<h3>Answer: (c) 9 days</h3><p>A child takes twice as long, so 1 child = ½ man. Then 8 children = 4 men, and the team is 8 + 4 = 12 men.</p>
<p>Work = 12 × 6 = 72 man-days. 8 men need 72/8 = <b>9 days</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 12 days</b>: would treat the 8 children as worth nothing extra beyond 4 men, but then divide by 6 instead of 8 (72/6).</li>
<li><b>(b) 10 days</b>: does not follow from 72 man-days.</li>
<li><b>(d) 8 days</b>: would need only 64 man-days, i.e. children counted as two-thirds of a man.</li></ul>
<div class="tip">Convert everyone to one unit (man-days) first; the rest is a single division.</div>` },

{ id: "2025-27", year: 2025, no: 27, subject: "maths", topic: "Eigenvalues", keySource: K,
q: `Consider the following matrix :<br>A = [[−2, 2, −3], [2, 1, −6], [−1, −2, 0]]<br>The Eigen values are`,
opts: ["−3, −3 and 5", "−3, 3 and −5", "3, 3 and −5", "3, −3 and 5"], ans: 0,
analysis: `<h3>Answer: (a) −3, −3 and 5</h3><p>Use two checks: sum of eigenvalues = trace, product = determinant.</p>
<ul><li>Trace = −2 + 1 + 0 = <b>−1</b></li><li>det A = −2(0 − 12) − 2(0 − 6) − 3(−4 + 1) = 24 + 12 + 9 = <b>45</b></li></ul>
<p>(a): sum −3 − 3 + 5 = −1 ✔, product 45 ✔. Also (A + 3I) = [[1, 2, −3], [2, 4, −6], [−1, −2, 3]] has rank 1, confirming −3 is a double eigenvalue.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) −3, 3, −5</b>: sum −5, product 45: trace fails.</li>
<li><b>(c) 3, 3, −5</b>: sum 1, product −45: both fail.</li>
<li><b>(d) 3, −3, 5</b>: sum 5, product −45: both fail.</li></ul>
<div class="tip">In multiple-choice eigenvalue questions, the trace and determinant checks usually leave only one option.</div>` },

{ id: "2025-28", year: 2025, no: 28, subject: "reasoning", topic: "Handshakes", keySource: K,
q: `If at a get-together 22 people shake their hands with each other, how many handshakes will take place in all ?`,
opts: ["132", "231", "321", "484"], ans: 1,
analysis: `<h3>Answer: (b) 231</h3><p>Each handshake is one pair of people: <sup>22</sup>C<sub>2</sub> = 22 × 21/2 = <b>231</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 132</b>: is 12 × 11, the count for 12 people without halving.</li>
<li><b>(c) 321</b>: the digits of 231 rearranged.</li>
<li><b>(d) 484</b>: is 22², which counts ordered pairs, including self-pairs.</li></ul>
<div class="key">Same formula n(n − 1)/2 as 2024 Q19 (6 people → 15). It also gives the number of matches in a round-robin league and the number of diagonals plus sides of a polygon.</div><div class="tip">Quick check: with 22 people, each shakes 21 hands; 22 × 21 = 462 counts each handshake twice, so 231.</div>` },

{ id: "2025-29", year: 2025, no: 29, subject: "maths", topic: "Divergence", keySource: K,
q: `If v⃗ = (xyz)î + (3x<sup>2</sup>y)ĵ + (xz<sup>2</sup> − y<sup>2</sup>z)k̂, the value of divergence of v⃗ at point (2, −1, 1) will be`,
opts: ["14", "16", "18", "20"], ans: 0,
analysis: `<h3>Answer: (a) 14</h3><p>div v = ∂(xyz)/∂x + ∂(3x²y)/∂y + ∂(xz² − y²z)/∂z = yz + 3x² + (2xz − y²).</p>
<p>At (2, −1, 1): (−1)(1) + 3(4) + 2(2)(1) − 1 = −1 + 12 + 4 − 1 = <b>14</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 16</b>: drops the −1 terms (ignoring the sign of y).</li>
<li><b>(c) 18</b> and <b>(d) 20</b>: come from sign errors, e.g. taking yz = +1 and −y² = +1.</li></ul>
<div class="key">Divergence is a scalar: the net outflow per unit volume. A field with zero divergence everywhere is solenoidal (e.g. a magnetic field).</div><div class="key">The curl of v, by contrast, is a vector: ∇ × v. A field with zero curl is irrotational (conservative).</div>` },

{ id: "2025-30", year: 2025, no: 30, subject: "maths", topic: "Square root of a complex number", keySource: K,
q: `The square root of the complex number 5 + 12i will be`,
opts: ["3 + 2i, −3 − 2i", "2 − 3i, −2 − 3i", "3 − 2i, 3 + 2i", "2 + 3i, 2 − 3i"], ans: 0,
analysis: `<h3>Answer: (a) 3 + 2i, −3 − 2i</h3><p>Let (x + iy)² = 5 + 12i: x² − y² = 5 and 2xy = 12. Also x² + y² = |5 + 12i| = 13. So x² = 9, y² = 4, and since xy = 6 &gt; 0, x and y have the same sign: <b>±(3 + 2i)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: (2 − 3i)² = 4 − 9 − 12i = −5 − 12i.</li>
<li><b>(c)</b>: (3 − 2i)² = 5 − 12i; only 3 + 2i is right. Square roots are always a ± pair.</li>
<li><b>(d)</b>: (2 + 3i)² = −5 + 12i.</li></ul>
<div class="tip">The two square roots of any non-zero number are negatives of each other, so a correct option must have that form; only (a) does.</div><div class="key">Formula for √(a + ib) with b &gt; 0: ±[√((|z| + a)/2) + i√((|z| − a)/2)]. Here |z| = 13: √9 = 3 and √4 = 2, giving ±(3 + 2i).</div>` },

{ id: "2025-31", year: 2025, no: 31, subject: "design", topic: "Fatigue failure", keySource: K,
q: `About 80% of the failures of mechanical components are due to which one of the following failure resulting from the fluctuating stresses ?`,
opts: ["Shear failure", "Fatigue failure", "Dynamic load failure", "Normal shear failure"], ans: 1,
analysis: `<h3>Answer: (b) Fatigue failure</h3><p><b>Fatigue</b> is failure under repeated or fluctuating stress, often well below the ultimate (even the yield) strength. Cracks start at stress raisers (notches, holes, surface scratches) and grow with each cycle until sudden fracture. Texts (Bhandari, Callister) estimate that fatigue causes roughly 80–90% of mechanical failures.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Shear failure</b> and <b>(d) Normal shear failure</b>: static failure modes under a single overload.</li>
<li><b>(c) Dynamic load failure</b>: not a standard failure class; fatigue is the mechanism by which fluctuating loads cause failure.</li></ul>
<div class="key">Design against fatigue: endurance limit (about half the ultimate tensile strength for steels), modified by surface, size, reliability and notch factors; Goodman or Soderberg lines for fluctuating stress with a mean component.</div>` },

{ id: "2025-32", year: 2025, no: 32, subject: "design", topic: "Machine design procedure", keySource: K,
q: `Consider the following steps regarding basic procedure of design of machine element :<ol><li>Select suitable material for element</li><li>Specify functions of elements</li><li>Determine failure mode of element</li><li>Determine forces acting on element</li></ol>What is the correct sequence of these steps ?`,
opts: ["2, 4, 1 and 3", "1, 2, 3 and 4", "2, 1, 4 and 3", "4, 2, 3 and 1"], ans: 0,
analysis: `<h3>Answer: (a) 2, 4, 1 and 3</h3><p>V. B. Bhandari (<i>Design of Machine Elements</i>) gives the basic procedure:</p>
<ol><li><b>Specify the functions</b> of the element (2)</li><li><b>Determine the forces</b> acting on it (4)</li><li><b>Select a suitable material</b> (1)</li><li><b>Determine the failure mode</b> (3)</li><li>Determine geometric dimensions</li><li>Modify dimensions for manufacture and assembly</li><li>Prepare the working drawing</li></ol>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: starts with material before knowing the function or loads.</li>
<li><b>(c)</b>: chooses material before the forces are known.</li>
<li><b>(d)</b>: finds forces before the function is defined, and material last.</li></ul>
<div class="key">Logic: you cannot load an element before knowing what it does, or choose a material before knowing the loads; the failure mode then sets the design equation (e.g. yielding vs fatigue).</div>` },

{ id: "2025-33", year: 2025, no: 33, subject: "design", topic: "Conic sections", keySource: K,
q: `A plane oblique to axis and making same angle with axis as elements do is called`,
opts: ["Circle", "Ellipse", "Parabola", "Hyperbola"], ans: 2,
analysis: `<h3>Answer: (c) Parabola</h3><p>Here "elements" means the <b>generators</b> of a right circular cone. When the cutting plane makes the same angle with the axis as the generators do (i.e. it is parallel to a generator), the section is a <b>parabola</b>. The question names the plane, but means the section it produces.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Circle</b>: plane perpendicular to the axis.</li>
<li><b>(b) Ellipse</b>: plane inclined to the axis at an angle <b>greater</b> than that of the generators (cuts all generators).</li>
<li><b>(d) Hyperbola</b>: plane at a <b>smaller</b> angle to the axis than the generators (or parallel to the axis), cutting both nappes.</li></ul>
<div class="key">By eccentricity: circle e = 0, ellipse e &lt; 1, parabola e = 1, hyperbola e &gt; 1.</div>` },

{ id: "2025-34", year: 2025, no: 34, subject: "design", topic: "Parallel projections", keySource: K, doubt: true,
q: `Which of the following projections is not a type of parallel projection ?`,
opts: ["Conic projection", "Oblique projection", "Orthogonal projection", "Curvilinear projection"], ans: 0,
analysis: `<h3>Answer: (a) Conic projection (two options are correct)</h3><p>In a parallel projection, all projectors are parallel to each other (the observer is at infinity). Orthographic (orthogonal) and oblique projections are its two families.</p>
<h3>Option by option</h3><ul>
<li><b>(a) Conic projection</b>: not parallel. In this map projection, projectors radiate from the centre of the globe onto a cone, so they converge.</li>
<li><b>(b) Oblique projection</b>: parallel projectors, inclined to the plane of projection.</li>
<li><b>(c) Orthogonal projection</b>: parallel projectors, perpendicular to the plane.</li>
<li><b>(d) Curvilinear projection</b>: also not parallel: it is a form of perspective projection, where projectors converge at the eye.</li></ul>
<div class="note">In doubt. MADE EASY marks this question as having two correct answers, (a) and (d), and so do we. We show (a); if UPSC's final key accepts both or drops the item, we will update it.</div>` },

{ id: "2025-35", year: 2025, no: 35, subject: "design", topic: "Oblique projection: cavalier", keySource: K,
q: `When the receding lines are drawn to full size scale and the projectors inclined at an angle of 30° or 45° or 60° to the plane of projection, such oblique projection is known as`,
opts: ["Cavalier projection", "Cabinet projection", "Parallel projection", "Isometric projection"], ans: 0,
analysis: `<h3>Answer: (a) Cavalier projection</h3><p>In <b>cavalier</b> oblique projection, receding lines are drawn <b>full size</b>; the receding axis is commonly drawn at 30°, 45° or 60° to the horizontal. (Strictly, true length along the receding axis happens when the projectors make 45° with the plane of projection.)</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Cabinet projection</b>: receding lines drawn to <b>half</b> size, which looks more natural.</li>
<li><b>(c) Parallel projection</b>: the whole family (orthographic and oblique), not a specific type.</li>
<li><b>(d) Isometric projection</b>: an axonometric (orthographic) projection with three equally foreshortened axes 120° apart, not oblique.</li></ul>
<div class="key">Oblique projection keeps one face of the object parallel to the plane, so that face appears in true shape; circles on it stay circles. Put the face with curves or the most detail toward the viewer.</div>` },

{ id: "2025-36", year: 2025, no: 36, subject: "design", topic: "Oblique projection", keySource: K,
q: `When an observer looks towards an object from infinity, the lines of sights (projectors) will be parallel to each other and inclined to the plane of projection. The resulting projection is known as`,
opts: ["Isometric projection", "Orthographic projection", "Oblique projection", "Axonometric projection"], ans: 2,
analysis: `<h3>Answer: (c) Oblique projection</h3><p>Projectors parallel to each other (observer at infinity) and <b>inclined</b> to the plane of projection define an <b>oblique</b> projection.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Isometric projection</b> and <b>(d) Axonometric projection</b>: projectors are perpendicular to the plane; the object itself is tilted so three faces show.</li>
<li><b>(b) Orthographic projection</b>: projectors are parallel and <b>perpendicular</b> to the plane of projection.</li></ul>
<table><tr><th>Projection</th><th>Projectors</th></tr><tr><td>Orthographic / axonometric</td><td>Parallel, perpendicular to plane</td></tr><tr><td>Oblique</td><td>Parallel, inclined to plane</td></tr><tr><td>Perspective</td><td>Converge at the eye (finite distance)</td></tr></table>` },

{ id: "2025-37", year: 2025, no: 37, subject: "design", topic: "Dimensioning systems", keySource: K,
q: `Which one of the following systems is recommended in general rules for dimensioning ?`,
opts: ["Aligned system", "Bidirectional system", "Multidirectional system", "Unidirectional system"], ans: 3,
analysis: `<h3>Answer: (d) Unidirectional system</h3><p>There are two systems of placing dimensions: <b>aligned</b> (figures written parallel to the dimension line, read from the bottom or right side of the sheet) and <b>unidirectional</b> (all figures written horizontally, read from the bottom). Both are allowed by the drawing standards, but the unidirectional system is the one generally recommended, because a large drawing can be read without turning the sheet.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Aligned system</b>: permitted, but less convenient on large sheets.</li>
<li><b>(b) Bidirectional</b> and <b>(c) Multidirectional system</b>: not recognised dimensioning systems.</li></ul>
<div class="key">Other general rules: dimension each feature only once; place dimensions outside the view where possible; avoid dimensioning to hidden lines; give dimensions in millimetres without writing "mm".</div>` },

{ id: "2025-38", year: 2025, no: 38, subject: "design", topic: "Safety programme", keySource: K,
q: `Any safety programme will be ineffective if any attempt is made to control accidents without first creating<ol><li>Proper safety philosophy</li><li>Teaching safety principles</li><li>Eliminating mis-conceptions about the causes of accidents</li></ol>`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Safety-management texts stress that controlling accidents needs a foundation first.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (needed):</b> a proper safety philosophy: management commitment and the belief that accidents are preventable.</li>
<li><b>2 (needed):</b> teaching safety principles to everyone, through training.</li>
<li><b>3 (needed):</b> removing misconceptions about accident causes, such as "accidents are bad luck" or "it is always the worker's fault".</li></ul>
<div class="key">Heinrich's accident pyramid (1931): roughly 1 major injury : 29 minor injuries : 300 no-injury incidents. His domino theory put unsafe acts and conditions at the centre; modern approaches add management system failures.</div>` },

{ id: "2025-39", year: 2025, no: 39, subject: "design", topic: "Corrosion fatigue", keySource: K,
q: `The Mechanical Engineering designer's problem is to attempt to minimize the factors that affect the fatigue life; these are<ol><li>Electrolyte concentration</li><li>Temperature</li><li>Fluid flow rate around specimen</li></ol>`,
opts: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2 and 3</h3><p>In a corrosive environment, fatigue strength falls sharply (<b>corrosion fatigue</b>): there may be no endurance limit at all. Shigley lists the factors that affect corrosion-fatigue life.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> electrolyte concentration (and type).</li>
<li><b>2 (yes):</b> temperature: higher temperatures speed corrosion.</li>
<li><b>3 (yes):</b> fluid flow rate around the part, which renews the corrosive medium.</li></ul>
<div class="key">Other factors: dissolved oxygen, stress frequency, residual stresses. Remedies: corrosion-resistant materials, coatings, cathodic protection, and compressive surface stresses from shot peening.</div>` },

{ id: "2025-40", year: 2025, no: 40, subject: "design", topic: "Design categories (testing)", keySource: K, provKey: "A",
q: `Which of the following statements are correct with respect to mechanical design categories ?<ol><li>Failure of the part would endanger human life, or the part is made in extremely large quantities; consequently, an elaborate testing program is justified during design</li><li>The part is made in less quantities that a moderate series of tests is feasible</li><li>The part is made in such small quantities that testing is not justified at all; or the design must be completed so rapidly that there is not enough time for testing</li></ol>`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3 (our answer)</h3><p>Shigley (<i>Mechanical Engineering Design</i>, fatigue chapter) groups design problems into four categories by how much testing is possible:</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> failure endangers life, or very large quantities are made: an elaborate testing programme is justified.</li>
<li><b>2 (correct):</b> the part is made in large enough quantities for a moderate series of tests. (The paper's "less quantities" is a garbled version of this, but it still describes the second category.)</li>
<li><b>3 (correct):</b> quantities so small that testing is not justified, or no time to test: Shigley's third category, almost word for word.</li></ul>
<p>The fourth category is a part already designed, built and tested that has proved unsatisfactory, where analysis must explain why.</p>
<div class="note">MADE EASY's unofficial key gives (a) 1 and 2 only. Statement 3 is Shigley's own wording for his third category, so we see no reason to exclude it and show (d).</div>` },

{ id: "2025-41", year: 2025, no: 41, subject: "quality", topic: "Management functions", keySource: K, doubt: true,
q: `Which one of the following management functions is correct during the preproduction phase ?`,
opts: ["Organize", "Control", "Plan", "Staff"], ans: 3,
analysis: `<h3>Answer: (d) Staff (MADE EASY's key)</h3><p>The classic management functions are planning, organising, staffing, directing and controlling (POSDC). The question links one of them to the <b>preproduction phase</b>, the stage when the plant is being made ready and the people who will run it must be recruited and trained. MADE EASY's key takes this as <b>staffing</b>.</p>
<h3>Option by option</h3><ul>
<li><b>(a) Organize</b>: setting up the structure and assigning tasks happens in all phases.</li>
<li><b>(b) Control</b>: comparing results with plans belongs mainly to the production phase, once there is output to measure.</li>
<li><b>(c) Plan</b>: our first answer. Planning is the dominant activity before production starts, but it begins earlier, at the design stage.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). We first answered (c) Plan, and we could not find the source text this question is based on. The answer depends on the book used, so it may change when UPSC's official key is published.</div>` },

{ id: "2025-42", year: 2025, no: 42, subject: "quality", topic: "c-chart", keySource: K,
q: `Which one of the following charts is used in the control charts for monitoring service quality characteristics for number of daily customer complaints in a hotel ?`,
opts: ["R-chart", "X̄-chart", "p-chart", "c-chart"], ans: 3,
analysis: `<h3>Answer: (d) c-chart</h3><p>The number of complaints per day is a <b>count of defects (nonconformities)</b> in a constant area of opportunity (one day). Such counts follow a Poisson distribution, and the <b>c-chart</b> is used: limits c̄ ± 3√c̄.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) R-chart</b> and <b>(b) X̄-chart</b>: are for measured (variables) data such as length or waiting time.</li>
<li><b>(c) p-chart</b>: is for the <b>fraction</b> of defective items (each item is either good or bad), e.g. the proportion of guests who complained.</li></ul>
<div class="key">If the area of opportunity varies (e.g. complaints per 100 guests with varying occupancy), use a u-chart (defects per unit).</div>` },

{ id: "2025-43", year: 2025, no: 43, subject: "quality", topic: "Reliability number", keySource: K,
q: `The reliability number in sampling process is`,
opts: ["100 + [(Number of defective units / Number of units tested) × 100]", "100 − [(Number of defective units / Number of units tested) + 100]", "100 − [(Number of defective units / Number of units tested) × 100]", "100 + [(Number of defective units / Number of units tested) − 100]"], ans: 2,
analysis: `<h3>Answer: (c) 100 − [(Number of defective units / Number of units tested) × 100]</h3><p>The reliability number is the percentage of tested units that are <b>not</b> defective: 100 minus the percentage defective. Example: 3 defective out of 150 tested → 100 − 2 = 98.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: adds the percentage defective, giving a value above 100.</li>
<li><b>(b)</b>: adds 100 to a fraction inside the bracket; the result is negative.</li>
<li><b>(d)</b>: gives a result near 0 for a good process, the opposite of what a reliability number should show.</li></ul>
<div class="tip">Any sensible "goodness" index must give 100 when there are no defects. Only (c) does.</div>` },

{ id: "2025-44", year: 2025, no: 44, subject: "quality", topic: "Taguchi noise factors", keySource: K,
q: `Which of the following are the noise factors for the experiment on the 'Elastomeric Connector' ?<ol><li>Conditioning time</li><li>Interference</li><li>Conditioning temperature</li><li>Connector wall thickness</li></ol>`,
opts: ["1 and 2 only", "2 and 4 only", "3 and 4 only", "1 and 3 only"], ans: 3,
analysis: `<h3>Answer: (d) 1 and 3 only</h3><p>This is the classic Taguchi robust-design example in Montgomery (<i>Design and Analysis of Experiments</i>): maximise the pull-off force of an elastomeric connector fitted to a nylon tube.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (noise):</b> conditioning time: hard to control in use.</li>
<li><b>2 (control factor):</b> interference between connector and tube is set by the designer.</li>
<li><b>3 (noise):</b> conditioning temperature.</li>
<li><b>4 (control factor):</b> connector wall thickness is a design choice.</li></ul>
<p>The other control factors were insertion depth and percent adhesive; conditioning relative humidity was the third noise factor.</p>
<div class="key">Taguchi's aim: choose control-factor levels that make performance insensitive to noise (robust design), judged by signal-to-noise ratios (here "larger the better").</div>` },

{ id: "2025-45", year: 2025, no: 45, subject: "quality", topic: "Service quality perception", keySource: K,
q: `Which of the following are the internal factors that influence customer perception of service quality ?<ol><li>Knowledge explosion</li><li>Annual and quarterly reports</li><li>Social values and changes in lifestyle</li><li>Increase consumer participation in service delivery through motivated employees</li></ol>`,
opts: ["1 and 3 only", "1 and 4 only", "2 and 4 only", "2 and 3 only"], ans: 2,
analysis: `<h3>Answer: (c) 2 and 4 only</h3><p>Internal factors are those the service firm itself controls; external factors come from the wider environment.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (external):</b> the knowledge explosion makes customers better informed and more demanding, but the firm does not control it.</li>
<li><b>2 (internal):</b> the firm's own communications, such as annual and quarterly reports, shape its image.</li>
<li><b>3 (external):</b> social values and lifestyle changes.</li>
<li><b>4 (internal):</b> involving customers in service delivery through motivated employees is a management choice.</li></ul>
<div class="key">The SERVQUAL model (Parasuraman, Zeithaml, Berry) measures service quality as the gap between expectations and perceptions on five dimensions: reliability, assurance, tangibles, empathy and responsiveness (RATER).</div>` },

{ id: "2025-46", year: 2025, no: 46, subject: "quality", topic: "TQM organisation", keySource: K,
q: `Which one of the following statements is correct regarding TQM ?`,
opts: ["It proposes hierarchical organization structure", "It has a result oriented approach", "Its technical efficiency and cost cutting approaches are dominant", "It advocates a flatter organization structure with large span of control where authority is pushed as far down as possible"], ans: 3,
analysis: `<h3>Answer: (d) It advocates a flatter organization structure with large span of control where authority is pushed as far down as possible</h3><p>TQM relies on <b>employee empowerment</b>: the people closest to the work make decisions and fix problems. This needs fewer management layers and wider spans of control.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: tall hierarchies with tight top-down control describe traditional management, which TQM moves away from.</li>
<li><b>(b)</b>: TQM is <b>process</b>-oriented; good results follow from improving processes (see 2022 Q1).</li>
<li><b>(c)</b>: TQM is customer-focused; technical efficiency and cost-cutting alone are the traditional emphasis.</li></ul>
<div class="key">TQM principles: customer focus, total employee involvement, process approach, integrated system, strategic approach, continual improvement, fact-based decisions, communication.</div>` },

{ id: "2025-47", year: 2025, no: 47, subject: "quality", topic: "DMAIC", keySource: K,
q: `Which of the following are the core steps of 'Six Sigma' methodology ?`,
opts: ["Improve, control and measure", "Define, measure and analyze", "Design, verify and control", "Measure, analyze and define"], ans: 1,
analysis: `<h3>Answer: (b) Define, measure and analyze</h3><p>Six Sigma's improvement cycle is <b>DMAIC</b>: Define, Measure, Analyze, Improve, Control, in that order. Option (b) gives its first three steps in the correct order.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: the right steps but in the wrong order (measure comes before improve and control).</li>
<li><b>(c)</b>: "design" and "verify" belong to DMADV (Design for Six Sigma), mixed here with "control".</li>
<li><b>(d)</b>: the right steps in reverse order; you must define the problem before measuring it.</li></ul>
<div class="key">See 2024 Q75 for what each DMAIC step does.</div>` },

{ id: "2025-48", year: 2025, no: 48, subject: "quality", topic: "p-chart limits", keySource: K,
q: `Which one of the following is the correct UCL for central limits of non-confirming units with constant or variable sample size in control charts for attributes ?`,
opts: ["P̄ + √(3P̄(1 − P̄)/n)", "np̄ + 3√(np̄(1 − p̄))", "c̄ + 3√c̄", "ū + 3√(ū/n)"], ans: 0,
analysis: `<h3>Answer: (a) the p-chart limit</h3><p>The chart for the <b>fraction nonconforming</b>, which works with constant or variable sample size, is the <b>p-chart</b>: UCL = p̄ + 3√(p̄(1 − p̄)/n). (The paper prints the 3 inside the square root; the standard formula has it outside.) With variable n, the limits are recalculated for each sample.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: np-chart (number of nonconforming units); valid only for <b>constant</b> sample size.</li>
<li><b>(c)</b>: c-chart (number of nonconformities, i.e. defects, not defective units).</li>
<li><b>(d)</b>: u-chart (defects per unit).</li></ul>
<div class="key">Distinguish "nonconforming units" (defectives: p, np charts, binomial) from "nonconformities" (defects: c, u charts, Poisson).</div>` },

{ id: "2025-49", year: 2025, no: 49, subject: "quality", topic: "np-chart centre line", keySource: K,
q: `Which one of the following relation is correct for np regarding quality control ?`,
opts: ["Total number rejected/defective ÷ Number of sample", "Total number rejected/defective ÷ Total number inspected", "Total number defects in all units ÷ Total number of units", "Total number defects in all units ÷ Number of sample"], ans: 0,
analysis: `<h3>Answer: (a) Total number rejected/defective ÷ Number of samples</h3><p>The centre line of an np-chart, np̄, is the <b>average number of defectives per sample</b>: total defectives divided by the number of samples.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: total defectives ÷ total inspected = <b>p̄</b>, the centre line of the p-chart.</li>
<li><b>(c)</b>: total defects ÷ total units = <b>ū</b>, the u-chart centre line.</li>
<li><b>(d)</b>: total defects ÷ number of samples = <b>c̄</b>, the c-chart centre line.</li></ul>
<div class="tip">np̄ = n × p̄: e.g. 20 samples of 100, with 60 defectives in all: p̄ = 0.03 and np̄ = 3.</div>` },

{ id: "2025-50", year: 2025, no: 50, subject: "energy", topic: "Nitrate in water", keySource: K,
q: `Nitrate when present in excess in drinking water causes`,
opts: ["Fluorosis", "Minamata", "Blur baby syndrome", "Itai-itai"], ans: 2,
analysis: `<h3>Answer: (c) Blue baby syndrome (printed as "Blur baby")</h3><p>Excess <b>nitrate</b> (above 45 mg/L as NO₃ under IS 10500) is converted to nitrite in an infant's gut. Nitrite turns haemoglobin into methaemoglobin, which cannot carry oxygen, so the baby's skin turns bluish: <b>methaemoglobinaemia</b>, or blue baby syndrome. Sources: fertiliser runoff and sewage.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Fluorosis</b>: excess <b>fluoride</b> (above 1.5 mg/L): mottled teeth and skeletal deformities.</li>
<li><b>(b) Minamata</b>: <b>mercury</b> (methylmercury) poisoning, Minamata Bay, Japan, 1950s.</li>
<li><b>(d) Itai-itai</b>: <b>cadmium</b> poisoning (painful bones), Toyama, Japan.</li></ul>
<div class="key">Arsenic causes arsenicosis and black-foot disease (Gangetic plains of West Bengal and Bihar); lead causes neurological damage in children.</div>` }
  );
})();
