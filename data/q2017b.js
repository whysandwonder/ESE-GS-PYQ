// ESE 2017 Prelims Paper I, Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2017-26", year: 2017, no: 26, subject: "maths", topic: "Partial differential equations",
q: `The complete integral of (z − px − qy)<sup>3</sup> = pq + 2(p<sup>2</sup> + q)<sup>2</sup> is`,
opts: ["z = ax + by + ∛(pq + 2(p<sup>2</sup> + q)<sup>2</sup>)", "z = ax + by + ∛(ab + 2(a<sup>2</sup> + b)<sup>2</sup>)", "z = ax + by + ∛(ab) + ∛(2(a<sup>2</sup> + b)<sup>2</sup>)", "z = ax + by + c"], ans: 1,
analysis: `<h3>Answer: (b) z = ax + by + ∛(ab + 2(a² + b)²)</h3><p>Taking the cube root gives z = px + qy + ∛(pq + 2(p² + q)²), which is <b>Clairaut's form</b> z = px + qy + f(p, q). Its complete integral is obtained simply by replacing p and q with arbitrary constants a and b: z = ax + by + f(a, b).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Still contains p and q; a complete integral must contain only x, y, z and constants.</li>
<li><b>(c)</b> Splits the cube root of a sum into a sum of cube roots, which is algebraically wrong (∛(A + B) ≠ ∛A + ∛B).</li>
<li><b>(d)</b> z = ax + by + c has three constants not linked by f(a, b); it satisfies the equation only if c happens to equal ∛(ab + 2(a² + b)²), so it is not the complete integral.</li></ul>
<div class="key">Clairaut's equation (ODE: y = px + f(p); PDE: z = px + qy + f(p, q)): the complete solution is got by writing constants for p (and q). The singular solution comes from eliminating them using ∂/∂a = 0 and ∂/∂b = 0.</div>` },

{ id: "2017-27", year: 2017, no: 27, subject: "maths", topic: "Fourier series",
q: `For the function f(x) = −2 for −π &lt; x &lt; 0, and f(x) = 2 for 0 &lt; x &lt; π,<br>the value of a<sub>n</sub> in the Fourier series expansion of f(x) is`,
opts: ["2", "4", "0", "−2"], ans: 2,
analysis: `<h3>Answer: (c) 0</h3><p>f(−x) = −f(x): the function is <b>odd</b> (a square wave antisymmetric about the origin). For an odd function every cosine coefficient vanishes: a<sub>n</sub> = (1/π)∫<sub>−π</sub><sup>π</sup> f(x) cos nx dx = 0 because f(x) cos nx is odd. Also a<sub>0</sub> = 0. Only sine terms remain: b<sub>n</sub> = 8/(nπ) for odd n and 0 for even n.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 2 is the amplitude of the function, not a cosine coefficient.</li>
<li><b>(b)</b> 4 is the jump at x = 0 (from −2 to 2); it appears in b<sub>n</sub> = 2·4/(nπ), not in a<sub>n</sub>.</li>
<li><b>(d)</b> −2 is the function's value on (−π, 0).</li></ul>
<div class="tip">Symmetry saves time: even function → only a<sub>0</sub>, a<sub>n</sub> (cosine series); odd function → only b<sub>n</sub> (sine series); half-wave symmetry → only odd harmonics.</div>` },

{ id: "2017-28", year: 2017, no: 28, subject: "maths", topic: "Partial differential equations",
q: `The solution of the following partial differential equation ∂<sup>2</sup>u/∂x<sup>2</sup> = 9 ∂<sup>2</sup>u/∂y<sup>2</sup> is`,
opts: ["sin(3x − y)", "3x<sup>2</sup> + y<sup>2</sup>", "sin(3x − 3y)", "(3y<sup>2</sup> − x<sup>2</sup>)"], ans: 0,
analysis: `<h3>Answer: (a) sin(3x − y)</h3><p>Check each option. For u = sin(3x − y): u<sub>xx</sub> = −9 sin(3x − y) and u<sub>yy</sub> = −sin(3x − y), so 9u<sub>yy</sub> = −9 sin(3x − y) = u<sub>xx</sub>. ✔</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 3x² + y²: u<sub>xx</sub> = 6, 9u<sub>yy</sub> = 18. ✘</li>
<li><b>(c)</b> sin(3x − 3y): u<sub>xx</sub> = −9s, 9u<sub>yy</sub> = 9(−9s) = −81s. ✘</li>
<li><b>(d)</b> 3y² − x²: u<sub>xx</sub> = −2, 9u<sub>yy</sub> = 54. ✘</li></ul>
<div class="key">This is the one-dimensional wave equation. Its general (d'Alembert) solution is u = F(3x + y) + G(3x − y), i.e. any function of y ± x/3. Any twice-differentiable function of (3x − y) works, which is how (a) can be spotted at once.</div>` },

{ id: "2017-29", year: 2017, no: 29, subject: "maths", topic: "Analytic functions",
q: `If W = φ + iψ represents the complex potential for an electric field.<br>Given ψ = x<sup>2</sup> − y<sup>2</sup> + x/(x<sup>2</sup> + y<sup>2</sup>), then the function φ is`,
opts: ["−2xy + y/(x<sup>2</sup> + y<sup>2</sup>) + C", "2xy + x/(x<sup>2</sup> + y<sup>2</sup>) + C", "−2xy + x/(x<sup>2</sup> + y<sup>2</sup>) + C", "2xy − y/(x<sup>2</sup> + y<sup>2</sup>) + C"], ans: 0,
analysis: `<h3>Answer: (a) −2xy + y/(x² + y²) + C</h3><p>W is analytic, so φ and ψ satisfy the Cauchy–Riemann equations φ<sub>x</sub> = ψ<sub>y</sub>, φ<sub>y</sub> = −ψ<sub>x</sub>.<br>ψ<sub>y</sub> = −2y − 2xy/(x² + y²)² and ψ<sub>x</sub> = 2x + (y² − x²)/(x² + y²)².<br>For φ = −2xy + y/(x² + y²): φ<sub>x</sub> = −2y − 2xy/(x² + y²)² = ψ<sub>y</sub> ✔ and φ<sub>y</sub> = −2x + (x² − y²)/(x² + y²)² = −ψ<sub>x</sub> ✔.</p>
<p>Quicker: ψ = Im(W). x² − y² = Re(z²) = Im(iz²) and x/(x² + y²) = Re(1/z) = Im(i/z), so W = i(z² + 1/z) and φ = Re W = −2xy + y/(x² + y²).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 2xy + x/(x² + y²): φ<sub>x</sub> = 2y + …, the sign of the 2y term is wrong.</li>
<li><b>(c)</b> −2xy + x/(x² + y²): its x-derivative of the second term gives (y² − x²)/(x² + y²)², which does not match ψ<sub>y</sub>.</li>
<li><b>(d)</b> 2xy − y/(x² + y²) is the negative of the answer, so it satisfies φ<sub>x</sub> = −ψ<sub>y</sub>, the wrong sign.</li></ul>` },

{ id: "2017-30", year: 2017, no: 30, subject: "maths", topic: "Residues",
q: `The residue of f(z) = z<sup>3</sup> / [(z − 1)<sup>4</sup>(z − 2)(z − 3)] at z = 3 is`,
opts: ["−8", "101/16", "0", "27/16"], ans: 3,
analysis: `<h3>Answer: (d) 27/16</h3><p>z = 3 is a <b>simple pole</b>, so Res = lim<sub>z→3</sub> (z − 3) f(z) = 3³ / [(3 − 1)⁴(3 − 2)] = 27/(16 × 1) = 27/16.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> −8 is the residue at z = 2: 2³/[(1)⁴(2 − 3)] = −8.</li>
<li><b>(b)</b> 101/16 is the residue at the fourth-order pole z = 1. (Check: the residues sum to zero because f behaves like 1/z³ at infinity, so Res(1) = 8 − 27/16 = 101/16.)</li>
<li><b>(c)</b> 0 would mean z = 3 is not a pole, but the denominator vanishes there and the numerator does not.</li></ul>
<div class="tip">Simple pole: Res = lim (z − a) f(z), or P(a)/Q′(a). Pole of order m: Res = [1/(m − 1)!] lim d<sup>m−1</sup>/dz<sup>m−1</sup>[(z − a)<sup>m</sup> f(z)].</div>` },

{ id: "2017-31", year: 2017, no: 31, subject: "maths", topic: "Definite integrals",
q: `The value of the integral ∫<sub>0</sub><sup>2π</sup> [3/(9 + sin<sup>2</sup>θ)] dθ is`,
opts: ["2π/√10", "2√10 π", "√10 π", "2π"], ans: 0,
analysis: `<h3>Answer: (a) 2π/√10</h3><p>Standard result: ∫<sub>0</sub><sup>2π</sup> dθ/(a + b sin²θ) = 2π/√(a(a + b)) for a, a + b &gt; 0. With a = 9, b = 1: 2π/√(9 × 10) = 2π/(3√10). Multiply by 3: <b>2π/√10</b>.</p>
<p>(Derivation: over 0 to π/2, divide by cos²θ and put t = tan θ: ∫ sec²θ dθ/(a sec²θ + b tan²θ) = ∫ dt/(a + (a + b)t²) = π/(2√(a(a + b))); the full period is four times this.)</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> 2√10 π ≈ 19.9 is far too large: the integrand is at most 3/9, so the integral is at most 2π/3 ≈ 2.09.</li>
<li><b>(c)</b> √10 π ≈ 9.9, also above that bound.</li>
<li><b>(d)</b> 2π ≈ 6.28, again too large. The answer 2π/√10 ≈ 1.99 lies between 2π × 3/10 ≈ 1.88 and 2π/3 ≈ 2.09, as it must.</li></ul>` },

{ id: "2017-32", year: 2017, no: 32, subject: "ethics", topic: "Engineering failures",
q: `Consider the following statements :<br>i. The failure of many structures<br>ii. Accidents on major highways<br>iii. Discharge of effluents which pollute rivers<br>iv. Dangerous gas emissions<br>These are attributable to :<ol><li>Improper design</li><li>Not adhering to proper maintenance practices</li><li>Lack of proper inspection and quality control during construction</li><li>Corruption amongst several concerned individuals</li><li>Lack of public concern</li></ol>Select the most appropriate answer using the codes given below :`,
opts: ["1, 2 and 3 only", "1, 2 and 4 only", "3, 4 and 5 only", "1, 2, 3, 4 and 5"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2, 3, 4 and 5</h3><p>Major engineering disasters almost never have one cause. Inquiries into collapses, highway crashes, river pollution and gas leaks keep finding a chain of technical, managerial and social failures.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Improper design: e.g. under-designed connections, ignoring codes and loads.</li>
<li><b>2 (correct):</b> Poor maintenance: Bhopal (1984), where safety systems were shut or broken; Morbi bridge collapse (2022).</li>
<li><b>3 (correct):</b> Lack of inspection and quality control during construction: substandard concrete, missing reinforcement.</li>
<li><b>4 (correct):</b> Corruption: approvals bought, inferior materials accepted, inspections skipped.</li>
<li><b>5 (correct):</b> Lack of public concern lets violations continue (unreported effluent discharge, tolerated unsafe practices).</li></ul>
<div class="tip">Engineering ethics stresses that engineers must hold public safety paramount and act as "whistle-blowers" when needed (see Q100).</div>` },

{ id: "2017-33", year: 2017, no: 33, subject: "maths", topic: "Golden ratio",
q: `Consider the following statements regarding Golden Ratio for positive integers<ol><li>It is the ratio of difference of two numbers and the smaller number</li><li>It is the ratio of sum of two numbers and the smaller number</li><li>It is the ratio of the sum of two numbers and the larger number</li></ol>Which of the above statements is/are correct ?`,
opts: ["1, 2 and 3", "3 only", "2 only", "1 only"], ans: 1,
analysis: `<h3>Answer: (b) 3 only</h3><p>Two quantities a &gt; b are in the golden ratio when (a + b)/a = a/b = φ = (1 + √5)/2 ≈ 1.618. So the golden ratio is the ratio of the <b>sum</b> to the <b>larger</b> (equal to larger/smaller).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> (a − b)/b = a/b − 1 = φ − 1 = 1/φ ≈ 0.618, not φ.</li>
<li><b>2 (wrong):</b> (a + b)/b = φ + 1 = φ² ≈ 2.618.</li>
<li><b>3 (correct):</b> (a + b)/a = φ by definition.</li></ul>
<div class="tip">φ satisfies φ² = φ + 1. Ratios of consecutive Fibonacci numbers (8/5, 13/8, 21/13…) approach φ. Strictly, two integers can never be exactly in the golden ratio, because φ is irrational.</div>` },

{ id: "2017-34", year: 2017, no: 34, subject: "design", topic: "Occupational safety laws",
q: `For which of the following sectors do comprehensive safety and health statutes, for regulating Occupational Safety and Health (OSH) at work places, exist at present in India ?`,
opts: ["Mining, Factories, Ports and Agriculture", "Factories, Mining, Agriculture and Construction", "Mining, Factories, Ports and Construction", "Factories, Ports, Agriculture and Construction"], ans: 2,
analysis: `<h3>Answer: (c) Mining, Factories, Ports and Construction</h3><p>When the question was set, India had sector-specific OSH laws for exactly four sectors: the Factories Act, 1948; the Mines Act, 1952; the Dock Workers (Safety, Health and Welfare) Act, 1986 (ports); and the Building and Other Construction Workers Act, 1996. The National Policy on Safety, Health and Environment at Workplace (2009) noted that agriculture, the largest employer, had no such comprehensive statute.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Includes agriculture, which had no comprehensive OSH law (only narrow laws such as the Dangerous Machines (Regulation) Act, 1983 and the Insecticides Act).</li>
<li><b>(b)</b> Includes agriculture and leaves out ports.</li>
<li><b>(d)</b> Includes agriculture and leaves out mining.</li></ul>
<p><b>Latest update (as of 2026):</b> the Occupational Safety, Health and Working Conditions Code, 2020 came into force on 21 November 2025 together with the other three labour codes. It merges 13 central labour laws, including the four Acts above, into one code that applies to establishments with 10 or more workers and to all hazardous workplaces. Its Central Rules were notified in May 2026. Agriculture is still largely outside its scope.</p>` },

{ id: "2017-35", year: 2017, no: 35, subject: "design", topic: "Construction safety",
q: `Consider the following statements regarding safety during demolition of a multistorey building :<ol><li>Demolition need not proceed storey by storey</li><li>Floor openings, not used for material chutes, should be enclosed with adequate guard rails</li><li>Before demolition starts all lath and loose plaster shall be stripped off throughout the building</li><li>Adequate and well-stiffened lateral bracing shall be provided for walls</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3 only", "1 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"], ans: 2,
analysis: `<h3>Answer: (c) 2, 3 and 4 only</h3><p>IS 4130 (Safety code for demolition of buildings) requires demolition to be systematic, from the top downwards, storey by storey, with protection against falls and collapse.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> Demolition <b>must</b> proceed storey by storey, completing each storey before the supports below are disturbed; removing lower parts first can bring the structure down uncontrolled.</li>
<li><b>2 (correct):</b> Unused floor openings must be covered or guarded to stop workers and debris falling.</li>
<li><b>3 (correct):</b> Lath, loose plaster and glass are removed first so they do not fall unexpectedly during the main work.</li>
<li><b>4 (correct):</b> Walls left standing (especially high or slender ones) need lateral bracing so wind or vibration does not topple them.</li></ul>
<div class="tip">Other IS 4130 points: survey the structure first, cut off gas, water and electricity, keep a safe zone, and never leave walls standing free above one storey height.</div>` },

{ id: "2017-36", year: 2017, no: 36, subject: "design", topic: "Clutch design",
q: `A clutch has to transmit 200 Nm of torque. Assuming uniform pressure theory and the ratio of outer to inner radii is 2·5, what are the radii for a uniform pressure of 2 MPa with the coefficient of friction of the liner material being 0·4 ?`,
opts: ["35 mm and 50 mm", "20 mm and 50 mm", "35 mm and 80 mm", "20 mm and 80 mm"], ans: 1,
analysis: `<h3>Answer: (b) 20 mm and 50 mm</h3><p>Uniform pressure (new clutch): T = (2/3) μ p π (R³ − r³) for one friction surface.<br>With R = 2.5r: R³ − r³ = (15.625 − 1) r³ = 14.625 r³.<br>200 × 10³ N·mm = (2/3)(0.4)(2)(π)(14.625) r³ = 24.5 r³ → r³ ≈ 8,163 mm³ → r ≈ 20 mm, R = 2.5r = 50 mm.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 35 and 50 mm: ratio 1.43, not 2.5.</li>
<li><b>(c)</b> 35 and 80 mm: ratio 2.29, and the torque would be about 1,600 N·m.</li>
<li><b>(d)</b> 20 and 80 mm: ratio 4.</li></ul>
<div class="tip">Only (b) has R/r = 2.5, so the ratio alone picks the answer. Uniform wear theory (worn clutch) gives T = μ W (R + r)/2 and is more conservative; uniform pressure gives mean radius (2/3)(R³ − r³)/(R² − r²).</div>` },

{ id: "2017-37", year: 2017, no: 37, subject: "design", topic: "Safety policy",
q: `Consider the goals of the safety policy of a company, at once designating also the responsibilities and authority for their achievement :<ol><li>Safety of employees and the public at large</li><li>Efforts to be made to involve all managers, supervisors and employees in the development and implementation of safety procedures</li><li>Clearing of all caveats that may tell on keeping the morale of the employees high</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3", "2 and 3 only", "1 and 2 only", "1 and 3 only"], ans: 2,
analysis: `<h3>Answer: (c) 1 and 2 only</h3><p>A written safety policy states management's commitment and goals, and assigns responsibility and authority for meeting them. Its goals concern preventing harm and involving everyone in safety.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Protecting employees and the public (and property and environment) is the basic goal.</li>
<li><b>2 (correct):</b> Participation of managers, supervisors and workers in developing and carrying out safety procedures is a core principle (also in ISO 45001 and the ILO guidelines on OSH management systems).</li>
<li><b>3 (wrong):</b> "Clearing all caveats that may affect morale" is a general HR aim, not a goal of a safety policy; a safety policy may in fact impose rules that are unpopular.</li></ul>
<div class="tip">Under the OSH Code 2020 (in force from 21 November 2025) and earlier under the Factories Act (Section 7A and state rules), factories above a size must have a written safety and health policy.</div>` },

{ id: "2017-38", year: 2017, no: 38, subject: "design", topic: "Development of surfaces",
q: `Which one of the following statements is correct in the development of lateral surfaces of solids ?`,
opts: ["The development of a right cone is a triangle", "Triangulation is the recommended method in the development of a prism", "The development of the lateral surface of a right circular cylinder is a rectangle", "The elements of an elliptical cone are equal in length"], ans: 2,
analysis: `<h3>Answer: (c) The development of the lateral surface of a right circular cylinder is a rectangle</h3><p>Unrolling a right circular cylinder gives a rectangle of length πd (base circumference) and height h.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> A right circular cone develops into a <b>sector</b> of a circle (radius = slant height, angle 360° r/l), not a triangle. (A right pyramid develops into triangles.)</li>
<li><b>(b)</b> Prisms and cylinders are developed by the <b>parallel-line</b> method. Triangulation is used for transition pieces and oblique or non-right surfaces; radial lines for pyramids and cones.</li>
<li><b>(d)</b> In an elliptical (or oblique) cone the generators from apex to base have different lengths; that is why such cones need triangulation to develop.</li></ul>
<table><tr><th>Method</th><th>Used for</th></tr><tr><td>Parallel line</td><td>Prisms, cylinders</td></tr><tr><td>Radial line</td><td>Right pyramids, right cones</td></tr><tr><td>Triangulation</td><td>Transition pieces, oblique cones</td></tr><tr><td>Approximate</td><td>Spheres (zone/lune methods)</td></tr></table>` },

{ id: "2017-39", year: 2017, no: 39, subject: "design", topic: "Torsion of shafts",
q: `A 15 kW motor drives a bar of boring machine of 30 mm diameter, twisting it through 0·01 radian, if the shear stress induced is 48 MPa and compressive stress is 57 MPa, the length of the bar whose G = 0·80 × 10<sup>5</sup> MPa is`,
opts: ["400 mm", "350 mm", "300 mm", "250 mm"], ans: 3,
analysis: `<h3>Answer: (d) 250 mm</h3><p>Torsion equation: τ/r = Gθ/L, so L = Gθr/τ = (0.8 × 10⁵ × 0.01 × 15)/48 = 12,000/48 = <b>250 mm</b> (r = 15 mm).</p>
<p>The power (15 kW) and the compressive stress are extra data: neither is needed once τ and θ are known.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 400 mm would give τ = Gθr/L = 30 MPa.</li>
<li><b>(b)</b> 350 mm gives about 34 MPa.</li>
<li><b>(c)</b> 300 mm gives 40 MPa.</li></ul>
<div class="key">T/J = τ/r = Gθ/L. Polar moment for a solid shaft J = πd⁴/32; power P = 2πNT/60.</div><div class="key">Design check usually follows: torque T = P/ω. If the bar ran at N rpm, T = 60P/(2πN); the shear stress must also satisfy τ = 16T/(πd³). Here only the angle and stress are needed, so the length follows directly from τ/r = Gθ/L.</div>` },

{ id: "2017-40", year: 2017, no: 40, subject: "design", topic: "Belt drives",
q: `Consider the following statements regarding V-belt drive :<ol><li>The groove angle of the sleeve is less than the belt section angle</li><li>The efficiency of a V-belt drive is higher than that of a flat belt drive</li><li>The groove angle is so made that the belt gets wedged in the groove</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"], ans: 2,
analysis: `<h3>Answer: (c) 1 and 3 only</h3><p>A V-belt (included angle about 40°) runs in a sheave groove of slightly smaller angle (about 34°–38°), so the belt wedges into the groove. The wedge raises the effective friction coefficient to μ/sin(β/2), which lets V-belts transmit more power at shorter centres with little slip.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> The sheave ("sleeve" in the paper) groove angle is kept less than the belt's section angle so the belt sits on the groove sides, not the bottom.</li>
<li><b>2 (wrong):</b> V-belts are <b>less</b> efficient (about 90–96%) than flat belts (about 98%), because of wedging and unwedging losses and greater flexing of the thick section.</li>
<li><b>3 (correct):</b> That is the purpose of the groove geometry.</li></ul>
<table><tr><th></th><th>Flat belt</th><th>V-belt</th></tr><tr><td>Grip</td><td>μ</td><td>μ/sin(β/2) (about 3 × μ)</td></tr><tr><td>Centre distance</td><td>Long</td><td>Short</td></tr><tr><td>Efficiency</td><td>Higher</td><td>Lower</td></tr><tr><td>Slip</td><td>More</td><td>Negligible</td></tr></table>` },

{ id: "2017-41", year: 2017, no: 41, subject: "quality", topic: "Machining operations",
q: `The purpose of a boring operation in relation to a drilling operation is to`,
opts: ["Drill a hole", "Finish the drilled hole", "Correct the drilled hole", "Enlarge the drilled hole"], ans: 3,
analysis: `<h3>Answer: (d) Enlarge the drilled hole</h3><p>Boring uses a single-point tool to <b>enlarge</b> an existing (drilled or cast) hole to a larger, accurate diameter. In doing so it can also correct the hole's position and straightness, which a drill cannot.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Making a hole in solid material is drilling itself.</li>
<li><b>(b)</b> Finishing to a smooth, accurate size with little stock removal is reaming (or honing).</li>
<li><b>(c)</b> Boring does correct alignment errors, but its defining purpose, and the key's answer, is enlarging the hole.</li></ul>
<table><tr><th>Operation</th><th>Purpose</th></tr><tr><td>Drilling</td><td>Make a hole</td></tr><tr><td>Boring</td><td>Enlarge (and true) a hole</td></tr><tr><td>Reaming</td><td>Size and finish a hole</td></tr><tr><td>Counterboring / countersinking</td><td>Step or cone at the mouth for bolt heads</td></tr><tr><td>Tapping</td><td>Internal thread</td></tr></table>` },

{ id: "2017-42", year: 2017, no: 42, subject: "pm", topic: "Bases of power", doubt: true,
q: `Which of the following types of power have to be pre-justified; and, when the need and occasion arise, must very soon be post-justified ?<ol><li>Reward power</li><li>Coercive power</li><li>Legitimate power</li><li>Expert power</li><li>Referent power</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2 and 3", "1, 2 and 5", "2, 3 and 4", "3, 4 and 5"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2 and 5</h3><p>French and Raven's five bases of power are reward, coercive, legitimate, expert and referent. The official key treats reward, coercive and referent power as the kinds a manager must justify in advance (why a reward or punishment, or a personal appeal, is being used) and explain soon after it is used, so that it is seen as fair. Legitimate power comes with the post itself, and expert power rests on demonstrated knowledge, so neither needs separate justification each time.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (in the key's answer):</b> Reward power: giving pay rises, promotions or praise. Rewards must be seen to be earned, or they breed resentment.</li>
<li><b>2 (in the key's answer):</b> Coercive power: punishment or threat. It must be clearly justified before use and explained after, or it destroys trust.</li>
<li><b>3 (not in the key's answer):</b> Legitimate power is the authority of the position; it is accepted because of the post.</li>
<li><b>4 (not in the key's answer):</b> Expert power comes from knowledge and skill that others recognise.</li>
<li><b>5 (in the key's answer):</b> Referent power comes from personal attraction, respect and identification with the leader.</li></ul>
<div class="note">In doubt (key followed). Our own working picks (a) 1, 2 and 3: the three <b>positional</b> (formal) powers (reward, coercive, legitimate) are the ones a manager exercises by virtue of office and must justify, while expert and referent are <b>personal</b> powers that followers grant voluntarily. Referent power in particular needs no justification. The official key nevertheless gives (b).</div>` },

{ id: "2017-43", year: 2017, no: 43, subject: "pm", topic: "Equipment cost",
q: `Factors which govern the operating cost of an equipment are :<ol><li>Purchase price of the equipment</li><li>Depreciation due to regular use</li><li>Cost of operation, maintenance and repairs</li></ol>Which of the above statements are correct ?`,
opts: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>The hourly cost of running construction or plant equipment is worked out as <b>owning cost + operating cost</b>, and all three items feed into it.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> The purchase price sets depreciation, interest on investment, insurance and taxes, all charged per hour of use.</li>
<li><b>2 (correct):</b> Depreciation through use (wear and obsolescence) is charged to every hour the machine works.</li>
<li><b>3 (correct):</b> Fuel, lubricants, operator wages, maintenance and repairs are the direct operating costs; repairs grow as the machine ages.</li></ul>
<div class="tip">This is the basis of the economic replacement decision: a machine should be replaced when its average annual total cost (owning + operating) is at a minimum. A narrow reading would exclude the purchase price as a "capital" cost, but the key takes the overall costing view.</div>` },

{ id: "2017-44", year: 2017, no: 44, subject: "quality", topic: "Reliability and maintenance", doubt: true,
q: `Consider the following statements with reference to maintenance and service of the product after delivery to the customer :<ol><li>Reliability analysis uses statistics of failures to estimate, understand and improve the performance of the equipment and its maintenance</li><li>Reliability analysis records supports or guides the maintenance engineer in improving the performance of the product under service</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], ans: 3,
analysis: `<h3>Answer: (d) Neither 1 nor 2 (official key)</h3><p>UPSC's final key gives (d). Reliability is the probability that an item performs its function for a stated time under stated conditions; reliability engineering uses failure data (MTBF, failure rate, Weibull analysis) to predict and improve it.</p>
<h3>Statement by statement</h3><ul>
<li><b>1:</b> Reliability analysis does use failure statistics to estimate and improve performance and to plan maintenance (reliability-centred maintenance). As a description this reads as correct.</li>
<li><b>2:</b> Records from reliability analysis (failure modes, failure rates, FMEA/FRACAS reports) are what guide the maintenance engineer to improve the product in service. This also reads as correct.</li></ul>
<div class="note">In doubt (key followed). Our own working gives (c) Both 1 and 2: both statements describe what reliability analysis does in after-sales maintenance and service, and no standard text contradicts them. We can see no reading under which "Neither" is right; the key may contain an error, but it is UPSC's final key, so the portal scores it as (d).</div>
<div class="tip">Reliability terms to know: MTBF (repairable items), MTTF (non-repairable), MTTR (repair time), availability = MTBF/(MTBF + MTTR), the bathtub curve (infant mortality, useful life with constant failure rate, wear-out).</div>` },

{ id: "2017-45", year: 2017, no: 45, subject: "quality", topic: "Total quality management",
q: `The most fundamental attribute of TQM is`,
opts: ["Drawing control charts", "Having regular purposeful meetings", "Meeting ISO 9000 audit requirements", "Direct involvement of top management"], ans: 3,
analysis: `<h3>Answer: (d) Direct involvement of top management</h3><p>Total Quality Management is a company-wide philosophy, and every TQM model (Deming, Juran, Crosby, the Baldrige and EFQM awards) starts with leadership: top management sets the quality policy, provides resources and drives the culture. Without it the other tools do not last.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Control charts are a statistical process control tool, one of many tools used within TQM.</li>
<li><b>(b)</b> Meetings (quality circles, reviews) support TQM but are not its foundation.</li>
<li><b>(c)</b> ISO 9000 certification is a quality management system standard; a firm can be certified without practising TQM.</li></ul>
<div class="tip">TQM principles: customer focus, leadership, involvement of people, process approach, continual improvement (kaizen, PDCA), fact-based decisions, supplier relationships. Deming's 14 points begin with "create constancy of purpose", a management duty.</div>` },

{ id: "2017-46", year: 2017, no: 46, subject: "quality", topic: "Quality audits",
q: `Internal audits are used to verify whether :<ol><li>Products conform to technical specifications</li><li>Quality management systems are effectively implemented</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"], ans: 1,
analysis: `<h3>Answer: (b) 2 only</h3><p>Under ISO 9001 (clause 9.2) an organisation conducts internal audits at planned intervals to check that its <b>quality management system</b> conforms to its own requirements and the standard, and is effectively implemented and maintained. Audit guidance is in ISO 19011.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (wrong):</b> Checking that products meet technical specifications is the job of <b>inspection and testing</b> (product verification), not of the internal (system) audit.</li>
<li><b>2 (correct):</b> That is the stated purpose of internal audits.</li></ul>
<table><tr><th>Audit type</th><th>Done by</th></tr><tr><td>First-party (internal)</td><td>The organisation itself</td></tr><tr><td>Second-party</td><td>A customer on its supplier</td></tr><tr><td>Third-party</td><td>Independent certification body</td></tr></table>` },

{ id: "2017-47", year: 2017, no: 47, subject: "materials", topic: "Industrial wastes in construction",
q: `Which industrial waste is commonly used in construction industry ?`,
opts: ["Fly ash", "Slag", "Sludge", "Red oxide"], ans: 0,
analysis: `<h3>Answer: (a) Fly ash</h3><p>Fly ash, the fine ash from coal-fired thermal power plants, is the industrial waste used most widely in construction: in Portland Pozzolana Cement (15–35% fly ash), as a partial cement replacement in concrete, in fly-ash bricks and blocks, and in road embankments.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Granulated blast-furnace slag is also used (Portland Slag Cement, aggregates), but in smaller volumes than fly ash; the key wants the most common.</li>
<li><b>(c)</b> Sludge from water and sewage treatment has only limited use (some brick-making trials).</li>
<li><b>(d)</b> Red oxide is a pigment (iron oxide) for flooring and primers, not a waste. (Red mud from alumina plants is a waste with limited use.)</li></ul>
<div class="tip">The MoEFCC fly ash notification (2021, amended later) requires thermal plants to achieve 100% ash utilisation and builders within 300 km of a plant to use fly-ash products. India generates well over 300 million tonnes of fly ash a year.</div>` },

{ id: "2017-48", year: 2017, no: 48, subject: "design", topic: "Centre of gravity",
q: `If a square pyramid is freely suspended from one of the corners of its base, then the imaginary line joining that corner with the centre of gravity of the pyramid will be`,
opts: ["Inclined at 60° with the vertical", "Inclined at 45° with the vertical", "Inclined at 30° with the vertical", "Vertical"], ans: 3,
analysis: `<h3>Answer: (d) Vertical</h3><p>A body suspended freely from a point comes to rest when its weight produces no turning moment about that point. That happens only when the centre of gravity lies directly below the point of suspension, so the line from the suspension point to the CG is <b>vertical</b>, whatever the shape.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> Any inclination would leave the weight acting with a lever arm about the corner, so the pyramid would keep swinging until the line became vertical.</li></ul>
<div class="tip">This is how "freely suspended solid" questions in engineering drawing are set up: first locate the CG (for a pyramid or cone, at h/4 from the base along the axis), then draw the solid so that the line from the suspension point to the CG is vertical.</div>` },

{ id: "2017-49", year: 2017, no: 49, subject: "quality", topic: "Acceptance sampling", doubt: true,
q: `The maximum percentage defects that a consumer may find definitely acceptable is called`,
opts: ["AOQL", "LTPD", "AQL", "AOQ"], ans: 1,
analysis: `<h3>Answer: (b) LTPD (official key)</h3><p>In acceptance sampling, the <b>Lot Tolerance Percent Defective (LTPD)</b> is the poorest quality the consumer is willing to tolerate in an individual lot; lots worse than this should be rejected, with only a small chance β (consumer's risk, usually 10%) of being accepted. Some texts define it as "the maximum percentage defective the consumer will accept", which is how the key reads the question.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> AOQL (Average Outgoing Quality Limit) is the worst average outgoing quality after rectifying inspection, the maximum of the AOQ curve.</li>
<li><b>(c)</b> AQL (Acceptable Quality Level) is the quality level that is considered satisfactory as a process average; lots at AQL are accepted with high probability (1 − α, producer's risk α usually 5%).</li>
<li><b>(d)</b> AOQ (Average Outgoing Quality) is the average quality of lots leaving inspection: AOQ ≈ p × Pa.</li></ul>
<div class="note">In doubt (key followed). Our own working gives (c) AQL: the phrase "definitely acceptable" describes the AQL (good quality, accepted almost always), while the LTPD is the level the consumer finds definitely <b>not</b> acceptable (rejected almost always). The two terms are often loosely worded in textbooks, which may explain the key's (b).</div>` },

{ id: "2017-50", year: 2017, no: 50, subject: "quality", topic: "Production systems",
q: `In which one of the following types of industrial activities does the problem of loading and scheduling become more difficult ?`,
opts: ["Single product continuous", "Multi-product continuous", "Batch production", "Continuous process production"], ans: 2,
analysis: `<h3>Answer: (c) Batch production</h3><p>Loading (assigning jobs to machines) and scheduling (deciding when each job runs) are hardest where many different items share the same general-purpose machines in varying sequences. Among the options, batch production is such a system: batches compete for machines, set-ups change, and queues and in-process stock build up.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Single-product continuous (mass/flow) production runs one fixed sequence on dedicated lines: scheduling is simple once the line is balanced.</li>
<li><b>(b)</b> Multi-product continuous lines have a few fixed product flows; scheduling is about changeovers, still far simpler than batch work.</li>
<li><b>(d)</b> Continuous process industries (refineries, cement, chemicals) run round the clock on fixed routes; there is almost no job-by-job scheduling.</li></ul>
<div class="tip">Order of scheduling difficulty: job shop (hardest) &gt; batch &gt; mass &gt; continuous process. Job-shop tools: Gantt charts, priority rules (SPT, EDD), Johnson's rule for two machines.</div>` }
);
