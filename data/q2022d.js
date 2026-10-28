// ESE 2022 Prelims Paper I, Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  // Statement (I)/(II) items (Q97–100) share these four codes
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is NOT the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true, II does not explain I; (c) I true, II false; (d) I false, II true.)";
window.PYQ_QUESTIONS.push(
{ id: "2022-76", year: 2022, no: 76, subject: "maths", topic: "Laplace transform",
q: `What is the Laplace transform of 2e<sup>3t</sup>(4 cos 2t − 5 sin 2t) ?`,
opts: ["(8s + 44)/(s<sup>2</sup> + 6s − 13)", "(4s − 44)/(s<sup>2</sup> − 6s + 13)", "(4s + 44)/(s<sup>2</sup> + 6s − 13)", "(8s − 44)/(s<sup>2</sup> − 6s + 13)"], ans: 3,
analysis: `<h3>Answer: (d) (8s − 44)/(s² − 6s + 13)</h3><p>L{4 cos 2t − 5 sin 2t} = (4s − 10)/(s² + 4). First shifting theorem (multiply by e<sup>3t</sup> → replace s by s − 3): (4(s − 3) − 10)/((s − 3)² + 4) = (4s − 22)/(s² − 6s + 13). Times 2: <b>(8s − 44)/(s² − 6s + 13)</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(c)</b> shift s the wrong way (s + 3) and get the denominator sign wrong.</li><li><b>(b)</b> forgets the factor 2.</li></ul>
<div class="key">First shifting theorem: L{e<sup>at</sup>f(t)} = F(s − a).</div><div class="tip">Quick check of the denominator: (s − 3)² + 4 = s² − 6s + 13. Any option with s² + 6s or −13 must be wrong.</div>` },

{ id: "2022-77", year: 2022, no: 77, subject: "maths", topic: "Probability",
q: `A batch of 100 capacitors contains 73 which are within the required tolerance values, 17 which are below the required tolerance values, and the remaining are above the required tolerance values. What is the probability that when randomly selecting a capacitor and then a second capacitor, if both are within the required tolerance values when selecting with replacement ?`,
opts: ["0·3319", "0·5329", "0·7239", "0·9249"], ans: 1,
analysis: `<h3>Answer: (b) 0·5329</h3><p>With replacement the two draws are independent: P = 0.73 × 0.73 = <b>0.5329</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 0.3319, <b>(c)</b> 0.7239 and <b>(d)</b> 0.9249 do not equal 0.73². (Without replacement it would be 73/100 × 72/99 = 0.5309.)</li></ul><div class="key">With replacement: independent events, multiply the probabilities. Without replacement: the second probability changes (72/99). P(at least one out of tolerance, with replacement) = 1 − 0.5329 = 0.4671.</div><div class="tip">Probability that both are below tolerance (with replacement) = 0.17² = 0.0289; that the first is within and the second above = 0.73 × 0.10 = 0.073.</div>` },

{ id: "2022-78", year: 2022, no: 78, subject: "maths", topic: "Definite integrals",
q: `The value of ∫<sub>0</sub><sup>4</sup> √(16 − x<sup>2</sup>) dx is`,
opts: ["π", "2π", "3π", "4π"], ans: 3,
analysis: `<h3>Answer: (d) 4π</h3><p>y = √(16 − x²) is the upper half of the circle x² + y² = 16 (radius 4). From x = 0 to 4 the area under it is a quarter circle: (1/4)π(4)² = <b>4π</b>.</p>
<p>Formally: ∫√(a² − x²)dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a); from 0 to 4 this gives 8 × π/2 = 4π.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> π, <b>(b)</b> 2π and <b>(c)</b> 3π are smaller fractions of the circle's area (16π).</li></ul><div class="key">Standard result: ∫<sub>0</sub><sup>a</sup> √(a² − x²) dx = πa²/4 (quarter-circle area). Recognising geometric shapes in integrals often avoids long calculation.</div><div class="tip">Substitution route: put x = 4 sin θ, dx = 4 cos θ dθ; the integral becomes 16∫<sub>0</sub><sup>π/2</sup> cos²θ dθ = 16 × π/4 = 4π.</div>` },

{ id: "2022-79", year: 2022, no: 79, subject: "maths", topic: "Integration by substitution",
q: `The value of ∫<sub>0</sub><sup>2</sup> 3x/√(2x<sup>2</sup> + 1) dx is (take positive values of square roots only)`,
opts: ["1", "2", "3", "4"], ans: 2,
analysis: `<h3>Answer: (c) 3</h3><p>Let u = 2x² + 1, du = 4x dx. ∫3x dx/√u = (3/4)∫u<sup>−1/2</sup>du = (3/2)√u. From x = 0 (u = 1) to x = 2 (u = 9): (3/2)(3 − 1) = <b>3</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1, <b>(b)</b> 2 and <b>(d)</b> 4 do not follow from the substitution.</li></ul><div class="key">Pattern: ∫ f′(x)/√f(x) dx = 2√f(x). Here f = 2x² + 1 and f′ = 4x, so 3x = (3/4)f′.</div><div class="tip">Check the indefinite integral by differentiating: d/dx[(3/2)√(2x² + 1)] = (3/2) × 4x/(2√(2x² + 1)) = 3x/√(2x² + 1) ✔.</div><div class="tip">Substitution steps: change the limits along with the variable (x = 0 → u = 1, x = 2 → u = 9) so there is no need to substitute back.</div>` },

{ id: "2022-80", year: 2022, no: 80, subject: "maths", topic: "Radius of gyration",
q: `What is the radius of gyration of a rectangular lamina of length 40 mm and width 15 mm about an axis through one corner, perpendicular to the plane of the lamina ?`,
opts: ["1·27 cm", "2·47 cm", "3·67 cm", "4·87 cm"], ans: 1,
analysis: `<h3>Answer: (b) 2·47 cm</h3><p>About the corner, perpendicular to the plane: I = (m/3)(a² + b²), so k² = (a² + b²)/3 = (40² + 15²)/3 = 1,825/3 = 608.3 mm². k = 24.66 mm ≈ <b>2.47 cm</b>.</p>
<p>(Derivation: about the centroid I = m(a² + b²)/12; the parallel-axis theorem adds m(a² + b²)/4.)</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1.27 cm is about the centroid: √(1,825/12) = 12.3 mm.</li><li><b>(c)</b> and <b>(d)</b> are too large.</li></ul><div class="key">Radius of gyration k = √(I/m). Perpendicular axis theorem: I<sub>z</sub> = I<sub>x</sub> + I<sub>y</sub>; for the corner: I<sub>x</sub> = mb²/3 and I<sub>y</sub> = ma²/3, so I<sub>z</sub> = m(a² + b²)/3.</div>` },

{ id: "2022-81", year: 2022, no: 81, subject: "maths", topic: "Areas by integration",
q: `By integration the area bounded by the three straight lines y = 4 − x, y = 3x and 3y = x is`,
opts: ["2 square units", "3 square units", "4 square units", "5 square units"], ans: 2,
analysis: `<h3>Answer: (c) 4 square units</h3><p>Vertices: y = 3x and y = x/3 meet at (0, 0); y = 3x and y = 4 − x at (1, 3); y = x/3 and y = 4 − x at (3, 1). Area = ½|x₁y₂ − x₂y₁| = ½|1·1 − 3·3| = <b>4</b>.</p>
<p>By integration: ∫<sub>0</sub><sup>1</sup>(3x − x/3)dx + ∫<sub>1</sub><sup>3</sup>(4 − x − x/3)dx = 4/3 + 8/3 = 4.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 2, <b>(b)</b> 3 and <b>(d)</b> 5 do not match.</li></ul><div class="key">Method: sketch the lines, find the intersection points, then integrate (upper curve − lower curve) over x, splitting where the boundary changes (at x = 1 here). The determinant (shoelace) formula is a quick check for triangles.</div>` },

{ id: "2022-82", year: 2022, no: 82, subject: "maths", topic: "Power series",
q: `The power series for ln[(1 + x)/(1 − x)] is`,
opts: ["(x + x<sup>3</sup>/3 + x<sup>5</sup>/5 + …)", "2(x − x<sup>3</sup>/3 + x<sup>5</sup>/5 − …)", "2(x + x<sup>3</sup>/3 + x<sup>5</sup>/5 + …)", "(x − x<sup>3</sup>/3 + x<sup>5</sup>/5 − …)"], ans: 2,
analysis: `<h3>Answer: (c) 2(x + x³/3 + x⁵/5 + …)</h3><p>ln(1 + x) = x − x²/2 + x³/3 − …; ln(1 − x) = −x − x²/2 − x³/3 − …. Subtracting, even powers cancel and odd powers double: ln[(1 + x)/(1 − x)] = 2(x + x³/3 + x⁵/5 + …), for |x| &lt; 1.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> misses the factor 2.</li><li><b>(b)</b> and <b>(d)</b> alternate in sign: that is the series for tan⁻¹x (with or without the 2).</li></ul>
<div class="tip">This series (with x = 1/3 giving ln 2) converges fast and is used to compute logarithms. It equals 2 tanh⁻¹x.</div><div class="key">Valid for |x| &lt; 1. Setting x = 1/3 gives ln 2 = 2(1/3 + 1/81 + 1/1215 + …) ≈ 0.6931.</div>` },

{ id: "2022-83", year: 2022, no: 83, subject: "maths", topic: "Mean value of a function",
q: `The mean value of y = 3x<sup>2</sup> + 4x + 1 between x = −1 and x = 2 is`,
opts: ["2", "4", "6", "8"], ans: 2,
analysis: `<h3>Answer: (c) 6</h3><p>Mean value = [1/(b − a)]∫<sub>a</sub><sup>b</sup> y dx = (1/3)[x³ + 2x² + x]<sub>−1</sub><sup>2</sup> = (1/3)[(8 + 8 + 2) − (−1 + 2 − 1)] = 18/3 = <b>6</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> do not match. (The average of the end values, (0 + 21)/2 = 10.5, is not the mean value of the function.)</li></ul>
<div class="tip">Root-mean-square value: √{[1/(b − a)]∫y² dx}, used for AC currents.</div><div class="tip">Mean value theorem for integrals: a continuous f takes its mean value somewhere in the interval; here 3x² + 4x + 1 = 6 at x = 0.79.</div><div class="key">Mean value of f over [a, b] = (area under the curve) ÷ (b − a). Here the area is 18 over a width of 3.</div>` },

{ id: "2022-84", year: 2022, no: 84, subject: "maths", topic: "Arc length",
q: `What is the length of the curve x = 2 cos<sup>3</sup>θ, y = 2 sin<sup>3</sup>θ between the points corresponding to θ = 0 and θ = π/2 ?`,
opts: ["2 units", "3 units", "4 units", "5 units"], ans: 1,
analysis: `<h3>Answer: (b) 3 units</h3><p>dx/dθ = −6 cos²θ sin θ, dy/dθ = 6 sin²θ cos θ. ds = √(36 cos⁴θ sin²θ + 36 sin⁴θ cos²θ) dθ = 6 sin θ cos θ dθ. Length = ∫<sub>0</sub><sup>π/2</sup> 6 sin θ cos θ dθ = 3 sin²θ |<sub>0</sub><sup>π/2</sup> = <b>3</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 2 is the straight distance along one axis.</li><li><b>(c)</b> and <b>(d)</b> overestimate.</li></ul>
<div class="tip">This is the astroid x<sup>2/3</sup> + y<sup>2/3</sup> = a<sup>2/3</sup> (a = 2); its total perimeter is 6a = 12.</div><div class="key">Arc length of a parametric curve: s = ∫√[(dx/dθ)² + (dy/dθ)²] dθ. Factor out common terms (here 6 sin θ cos θ) before integrating.</div><div class="tip">The curve runs from (2, 0) at θ = 0 to (0, 2) at θ = π/2: one quarter of the astroid. The straight-line distance between these points is 2√2 ≈ 2.83, less than the arc length 3, as it must be.</div>` },

{ id: "2022-85", year: 2022, no: 85, subject: "maths", topic: "Power method",
q: `What is the largest eigenvalue in modulus of the matrix A = [[2, 3, 2], [4, 3, 5], [3, 2, 9]] with an initial vector (1, 1, 1)<sup>T</sup> by power method ?`,
opts: ["11·84", "12·84", "13·84", "14·84"], ans: 0,
analysis: `<h3>Answer: (a) 11·84</h3><p>Power method: repeatedly multiply by A and normalise by the largest component.</p>
<table><tr><th>Step</th><th>A × vector</th><th>Scale</th></tr><tr><td>1</td><td>(7, 12, 14)</td><td>14</td></tr><tr><td>2</td><td>(5.57, 9.57, 12.21)</td><td>12.21</td></tr><tr><td>3</td><td>(5.26, 9.18, 11.94)</td><td>11.94</td></tr><tr><td>4</td><td>(5.19, 9.07, 11.86)</td><td>11.86</td></tr></table>
<p>The scale factor converges to about <b>11.84</b>.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b>, <b>(c)</b> and <b>(d)</b> are larger than the converging values.</li></ul>
<div class="tip">The power method converges to the dominant eigenvalue at a rate set by |λ₂/λ₁|. Check: trace = 14, so the other two eigenvalues sum to about 2.16.</div><div class="key">Power method steps: start with x₀, compute y = Ax, take the largest component as the eigenvalue estimate, divide y by it to get the next x, and repeat until the estimates settle.</div>` },

{ id: "2022-86", year: 2022, no: 86, subject: "maths", topic: "Givens method",
q: `Reduce the matrix A = [[1, 3, 4], [3, 2, −1], [4, −1, 1]] to the tridiagonal form.`,
opts: ["[[1, −5, 0], [−5, 2/5, 1/5], [0, 1/5, 13/5]]", "[[1, 0, −5], [−5, 2/5, −1/5], [0, −13/5, 1/5]]", "[[1, −5, 0], [−5, −2/5, −13/5], [0, 1/5, 1/5]]", "[[1, −5, 0], [−5, −2/5, 1/5], [0, 13/5, 1/5]]"], ans: 0,
analysis: `<h3>Answer: (a) [[1, −5, 0], [−5, 2/5, 1/5], [0, 1/5, 13/5]]</h3><p>Givens rotation in the (2, 3) plane to annihilate a₁₃: tan θ = a₁₃/a₁₂ = 4/3, so cos θ = 3/5, sin θ = 4/5. Then a₁₂ becomes √(3² + 4²) = 5 (sign −5 with the rotation convention used), and:<br>a₂₂′ = c²(2) + 2cs(−1) + s²(1) = 18/25 − 24/25 + 16/25 = 2/5;<br>a₃₃′ = s²(2) − 2cs(−1) + c²(1) = 32/25 + 24/25 + 9/25 = 13/5;<br>a₂₃′ = ±1/5.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> is not tridiagonal (a₁₃ ≠ 0).</li><li><b>(c)</b> and <b>(d)</b> are not symmetric, and their diagonal does not sum to the trace 4 (1 + 2/5 + 13/5 = 4 ✔ only for (a)).</li></ul>
<div class="tip">Similarity transformations keep the trace and eigenvalues: a quick test for any reduced form.</div>` },

{ id: "2022-87", year: 2022, no: 87, subject: "maths", topic: "Taylor series method",
q: `From the Taylor series for y(x), what is the value of y(0·1) correct to four decimal places if y(x) satisfies y′ = x − y<sup>2</sup> and y(0) = 1 ?`,
opts: ["0·9138", "0·7254", "0·5286", "0·3524"], ans: 0,
analysis: `<h3>Answer: (a) 0·9138</h3><p>y′(0) = 0 − 1 = −1. y″ = 1 − 2yy′ → 3. y‴ = −2y′² − 2yy″ → −2 − 6 = −8. y⁗ = −6y′y″ − 2yy‴ → 18 + 16 = 34.<br>y(0.1) = 1 − 0.1 + (3/2)(0.01) − (8/6)(0.001) + (34/24)(0.0001) = 1 − 0.1 + 0.015 − 0.00133 + 0.00014 = <b>0.9138</b>.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b>, <b>(c)</b> and <b>(d)</b> are far too low; over a step of 0.1 with slope −1, y can fall only by about 0.1.</li></ul><div class="tip">Picard's or Runge–Kutta methods give the same 0.9138; Taylor's method needs repeated differentiation of the ODE, which grows tedious for higher orders.</div>` },

{ id: "2022-88", year: 2022, no: 88, subject: "maths", topic: "Conic sections",
q: `What is the shape of the curve represented by x/5 = √[1 + (y/2)<sup>2</sup>] ?`,
opts: ["Hyperbola", "Rectangular hyperbola", "Parabola", "Ellipse"], ans: 0,
analysis: `<h3>Answer: (a) Hyperbola</h3><p>Squaring: x²/25 = 1 + y²/4, i.e. x²/25 − y²/4 = 1, a hyperbola with a = 5, b = 2 (the right branch, since x &gt; 0).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> A rectangular hyperbola needs a = b (perpendicular asymptotes); here a ≠ b.</li><li><b>(c)</b> A parabola has only one squared term.</li><li><b>(d)</b> An ellipse has both squared terms with the same sign.</li></ul>
<div class="tip">Eccentricity e = √(1 + b²/a²) = √(29)/5 ≈ 1.08.</div><div class="key">Recognising conics: square both sides and collect terms. x²/a² − y²/b² = 1 is a hyperbola; it is rectangular only when a = b (x² − y² = a²).</div>` },

{ id: "2022-89", year: 2022, no: 89, subject: "maths", topic: "Differential equations",
q: `What is the particular solution of the differential equation 5 dy/dx + 2x = 3 if the boundary conditions are y = 7/5 and x = 2 ?`,
opts: ["y = 3x/5 − x<sup>2</sup>/5 + 1", "y = 3x/5 + x<sup>2</sup>/5 − 2", "y = 5x/3 − x<sup>2</sup>/3 + 1", "y = 5x/3 + x<sup>2</sup>/3 − 2"], ans: 0,
analysis: `<h3>Answer: (a) y = 3x/5 − x²/5 + 1</h3><p>dy/dx = (3 − 2x)/5 → y = 3x/5 − x²/5 + c. At x = 2: 6/5 − 4/5 + c = 7/5 → c = 1.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> has +x²/5 (wrong sign) and c = −2.</li><li><b>(c)</b> and <b>(d)</b> invert the coefficients (5/3 instead of 3/5).</li></ul><div class="key">Separable first-order equation: rearrange to dy/dx = f(x), integrate, then use the given point to fix the constant. Check by substituting x = 2 into the answer: 6/5 − 4/5 + 1 = 7/5 ✔.</div><div class="tip">General solution: y = 3x/5 − x²/5 + c, a family of parabolas; the boundary condition picks the one through (2, 7/5).</div>` },

{ id: "2022-90", year: 2022, no: 90, subject: "quality", topic: "Product realisation",
q: `Which of the following factors are included in product realization process ?<ol><li>Marketing functions to assess customer requirements</li><li>Documentation of the design</li><li>Legal requirements</li></ol>`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>In ISO 9001:2008 (clause 7, product realisation), the organisation determines customer requirements (through marketing and customer communication), statutory and regulatory (legal) requirements, and controls design and development with documented design inputs, outputs, reviews, verification and validation.</p>
<h3>Statement by statement</h3><ul><li><b>1 (yes)</b>: customer-related processes.</li><li><b>2 (yes)</b>: design and development documentation.</li><li><b>3 (yes)</b>: statutory and regulatory requirements related to the product.</li></ul>
<div class="tip">ISO 9001:2015 renamed this clause "Operation" (clause 8).</div>` },

{ id: "2022-91", year: 2022, no: 91, subject: "design", topic: "Bill of materials",
q: `In general, which one of the following is NOT included in the list of parts or the bill of materials in an engineering drawing sheet ?`,
opts: ["Part number", "Material Name", "Cost", "Quantity"], ans: 2,
analysis: `<h3>Answer: (c) Cost</h3><p>The parts list (bill of materials) on an assembly drawing gives, for each part: item/part number, name or description, material, quantity, and sometimes specification or remarks. Cost belongs to cost estimates and purchasing documents, not the drawing.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are standard columns.</li></ul>
<div class="tip">The parts list is placed above the title block, numbered from the bottom upwards so that new items can be added.</div><div class="key">Parts of a working drawing sheet: border, title block (name, scale, projection symbol, drawing number, date, signatures), parts list, revision table and zoning. Standard: SP 46 (BIS) / ISO 7200.</div>` },

{ id: "2022-92", year: 2022, no: 92, subject: "design", topic: "Line types",
q: `Continuous thin (narrow) with zigzags (straight) lines are generally used to represent`,
opts: ["long-break line", "hidden outline", "visible outline", "reference line"], ans: 0,
analysis: `<h3>Answer: (a) long-break line</h3><p>In IS 10714 / ISO 128, a continuous narrow line with straight zigzags is used for break lines where a long part is shown shortened (long breaks). A continuous narrow <b>freehand</b> line shows short breaks.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> Hidden outlines are dashed narrow lines.</li><li><b>(c)</b> Visible outlines are continuous wide (thick) lines.</li><li><b>(d)</b> Reference (leader) lines are continuous narrow straight lines.</li></ul><div class="key">Common line types (IS 10714): continuous wide (visible outlines), continuous narrow (dimension, projection, leader, hatching), dashed narrow (hidden), long-dashed dotted narrow (centre lines), long-dashed dotted wide at ends (cutting planes), zigzag or freehand narrow (breaks).</div>` },

{ id: "2022-93", year: 2022, no: 93, subject: "design", topic: "Oblique projection",
q: `When the receding lines are drawn to full size scale and the projectors inclined at an angle of 30° or 45° or 60° to the plane of projection, such oblique projection is known as`,
opts: ["Cabinet projection", "Vertical projection", "Cavalier projection", "Horizontal projection"], ans: 2,
analysis: `<h3>Answer: (c) Cavalier projection</h3><p>In <b>cavalier</b> oblique projection the receding lines are drawn full size (projectors at 45° to the plane, receding axis drawn at 30°, 45° or 60°). It shows depth exaggerated.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Cabinet projection draws the receding lines at <b>half</b> size, which looks more natural.</li><li><b>(b)</b> and <b>(d)</b> are not types of oblique projection.</li></ul>
<div class="tip">See 2021 Q89 for oblique drawing's advantage (true shape of the front face).</div><div class="key">Oblique types: cavalier (receding scale 1), cabinet (1/2), general oblique (any scale between). The receding axis is usually drawn at 30°, 45° or 60° to the horizontal.</div>` },

{ id: "2022-94", year: 2022, no: 94, subject: "design", topic: "Oblique projection",
q: `Which one of the following statements is correct about oblique projection ?`,
opts: ["The object is drawn with the reduced (about 82%) dimensions", "All the faces of the object are distorted in the shape and size", "Projectors from an object are parallel to each other and perpendicular to the plane of picture", "The faces of object which are perpendicular to the plane of projection will be distorted in the shape and size"], ans: 3,
analysis: `<h3>Answer: (d) The faces of object which are perpendicular to the plane of projection will be distorted in the shape and size</h3><p>In oblique projection the front face (parallel to the plane) appears in true shape; the faces perpendicular to the plane (top and sides) are drawn along the receding axis and appear distorted.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Reduction to about 82% (0.816) is the isometric scale.</li><li><b>(b)</b> The faces parallel to the plane are not distorted.</li><li><b>(c)</b> Projectors parallel to each other and perpendicular to the plane describe orthographic (and axonometric) projection; in oblique projection they are inclined to the plane.</li></ul>` },

{ id: "2022-95", year: 2022, no: 95, subject: "design", topic: "Isometric drawing",
q: `Which one of the following methods is used when the non-isometric lines or their ends lie in isometric planes ?`,
opts: ["Intersection method", "Box method", "Co-ordinate method", "Offset method"], ans: 1,
analysis: `<h3>Answer: (b) Box method</h3><p>In isometric drawing, lines not parallel to the isometric axes (non-isometric lines) cannot be measured directly. When such lines or their end points lie in the faces of an enclosing box (isometric planes), the object is drawn inside an isometric box and the ends are located on the box faces (N.D. Bhatt).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> "Intersection method" is not a standard isometric method.</li><li><b>(c)</b> and <b>(d)</b> The co-ordinate or offset method is used when points do not lie on isometric planes, locating each point by offsets from a reference line.</li></ul>` },

{ id: "2022-96", year: 2022, no: 96, subject: "design", topic: "Traces of lines",
q: `If a line is perpendicular to the V.P. and its V.T. coincides with its front view which is a point, then`,
opts: ["V.T. is a point on H.P.", "H.T. is a point on V.P.", "it has no V.T.", "it has no H.T."], ans: 3,
analysis: `<h3>Answer: (d) it has no H.T.</h3><p>A line perpendicular to the VP is parallel to the HP. A line parallel to a plane never meets it, so it has <b>no horizontal trace</b>. It meets the VP at a single point, the vertical trace, which coincides with its front view (a point).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> The VT lies on the VP, not the HP.</li><li><b>(b)</b> There is no HT at all.</li><li><b>(c)</b> It does have a VT (the question says so).</li></ul>
<div class="key">General rule: a line parallel to a plane has no trace on that plane (see 2017 Q16).</div><div class="key">Traces: the HT is where a line (extended) meets the HP; the VT is where it meets the VP. A line perpendicular to one plane is parallel to the other, so it has only one trace; a line parallel to both planes has none.</div>` },

{ id: "2022-97", year: 2022, no: 97, subject: "design", topic: "CAD/CAM",
q: `<b>Directions:</b> Each of the next four items consists of two statements, one labelled as the 'Statement (I)' and the other as 'Statement (II)'. Examine these two statements carefully and select the answers to these items using the codes given below.<br><br>Statement (I) : The drawings and machining processes can be automated using CAD/CAM change the primary function of these drawings and processes.<br>Statement (II) : The primary function is to provide information about the product to the designer and production people.`,
opts: C, ans: 3,
analysis: `<h3>Answer: (d) Statement I is false, Statement II is true</h3><ul>
<li><b>Statement I (false):</b> CAD/CAM automates making drawings and generating machining (CNC) programs, but it does <b>not change</b> their primary function; it only makes them faster and more accurate.</li>
<li><b>Statement II (true):</b> The primary function of drawings and process plans is to convey information about the product to designers and production people.</li></ul>
<h3>The codes</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> need I to be true.</li></ul>
<div class="tip">Modern practice increasingly uses model-based definition (3-D models with PMI annotations) in place of 2-D drawings, but the information function stays the same.</div>` },

{ id: "2022-98", year: 2022, no: 98, subject: "energy", topic: "Environmental pollution",
q: `Statement (I) : Environmental pollution has become global problem.<br>Statement (II) : The rapidly growing human population, rapid urbanization, intensive agriculture and industrialization together with human activities resulted in the environmental pollution.` + N,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3><ul>
<li><b>Statement I (true):</b> Pollution crosses borders: climate change, ozone depletion, ocean plastics, acid rain and transboundary air pollution are global problems.</li>
<li><b>Statement II (true, and the reason):</b> Population growth, urbanisation, intensive agriculture and industrialisation are the drivers of pollution, and because they are happening worldwide, pollution has become global.</li></ul>
<h3>The codes</h3><ul><li><b>(b)</b> Understates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">UNEP's "triple planetary crisis": climate change, biodiversity loss and pollution. Air pollution causes about 7 million premature deaths a year (WHO).</div>` },

{ id: "2022-99", year: 2022, no: 99, subject: "ict", topic: "E-governance projects", doubt: true,
q: `Statement (I) : Content is the heart of any IT project.<br>Statement (II) : Implementation and maintenance of e-government projects through IT professional hired from the market is likely to result in failure of the project as the organization is bound to disown such outsiders.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I (official key)</h3><ul>
<li><b>Statement I (true):</b> Content (information and services) is the core of any IT project; technology only delivers it.</li>
<li><b>Statement II (key: true):</b> The key accepts it: e-governance projects run entirely by hired outsiders often fail because the department never "owns" the project, and capability is lost when the outsiders leave.</li></ul>
<p>II concerns ownership and staffing; it does not explain why content is central.</p>
<div class="note">In doubt (key followed). As worded, II overstates the case: many successful e-governance projects use market professionals (PPP models such as Passport Seva, MCA21). The Second ARC's point is that internal ownership and capacity are essential, not that hiring outsiders "is likely to result in failure". Our own answer was (c).</div>
<h3>The codes</h3><ul><li><b>(a)</b> II does not explain I.</li><li><b>(c)</b> Our own reading.</li><li><b>(d)</b> needs I to be false.</li></ul>` },

{ id: "2022-100", year: 2022, no: 100, subject: "ethics", topic: "Corporate social responsibility",
q: `Statement (I) : Social involvement discourages additional government regulation and intervention.<br>Statement (II) : Social involvement can create a weakened international balance of payments situation.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><p>Keith Davis's classic arguments for and against corporate social involvement:</p><ul>
<li><b>Statement I (true):</b> An argument <b>for</b>: if business acts responsibly on its own, it avoids extra government regulation and intervention.</li>
<li><b>Statement II (true):</b> An argument <b>against</b>: social programmes add to costs, raising prices of exports and so weakening the international balance of payments.</li></ul>
<p>One is an argument for and the other an argument against, so II cannot explain I.</p>
<h3>The codes</h3><ul><li><b>(a)</b> II is not the reason for I.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">Other arguments against (Davis): violation of profit maximisation, cost of social involvement, lack of social skills, dilution of business's primary purpose, lack of accountability.</div>` }
);
})();
