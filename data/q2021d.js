// ESE 2021 Prelims Paper I, Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  // Statement (I)/(II) items (Q97–100) share these four codes
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is NOT the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true, II does not explain I; (c) I true, II false; (d) I false, II true.)";
window.PYQ_QUESTIONS.push(
{ id: "2021-76", year: 2021, no: 76, subject: "maths", topic: "Maclaurin series",
q: `The Maclaurin's series expansion of e<sup>sin x</sup> is`,
opts: ["1 + x − x<sup>2</sup>/2 + x<sup>4</sup>/12 − ···", "1 − x + x<sup>2</sup>/2 − x<sup>4</sup>/8 + ···", "1 + x + x<sup>2</sup>/2 − x<sup>4</sup>/8 + ···", "1 + x + x<sup>2</sup>/2 − x<sup>4</sup>/12 + ···"], ans: 2,
analysis: `<h3>Answer: (c) 1 + x + x²/2 − x⁴/8 + ···</h3><p>Let y = e<sup>sin x</sup>. Then y(0) = 1; y′ = y cos x → 1; y″ = y′ cos x − y sin x → 1; y‴ = y″ cos x − 2y′ sin x − y cos x → 1 − 1 = 0; y⁗ → −3 (from differentiating again). So e<sup>sin x</sup> = 1 + x + x²/2! + 0·x³ − 3x⁴/4! + … = 1 + x + x²/2 − x⁴/8 + ….</p>
<p>Check by substitution: sin x = x − x³/6; e<sup>u</sup> = 1 + u + u²/2 + u³/6 + u⁴/24 gives x⁴ terms −x⁴/6 + x⁴/24 = −x⁴/8 ✔ (and x³ terms −x³/6 + x³/6 = 0).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> has −x²/2 and +x⁴/12.</li><li><b>(b)</b> starts 1 − x (that would be e<sup>−sin x</sup>).</li><li><b>(d)</b> has −x⁴/12 instead of −x⁴/8.</li></ul>` },

{ id: "2021-77", year: 2021, no: 77, subject: "maths", topic: "Newton–Raphson method",
q: `The real root of x<sup>3</sup> + x<sup>2</sup> + 3x + 4 = 0 correct to four decimal places, obtained using Newton Raphson method is`,
opts: ["−1·3334", "1·3221", "−1·2229", "1·2929"], ans: 2,
analysis: `<h3>Answer: (c) −1·2229</h3><p>f(−1) = 1 &gt; 0 and f(−1.5) = −1.625 &lt; 0, so the root lies between. f′(x) = 3x² + 2x + 3. From x₀ = −1.2: f = 0.112, f′ = 5.92, x₁ = −1.2189; another step gives x ≈ −1.2229 (f ≈ 0).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> f(−1.3334) ≈ −0.62, not zero.</li>
<li><b>(b)</b> and <b>(d)</b> are positive; for x &gt; 0 every term is positive, so there is no positive root.</li></ul>
<div class="key">Newton–Raphson: x<sub>n+1</sub> = x<sub>n</sub> − f(x<sub>n</sub>)/f′(x<sub>n</sub>); quadratic convergence near a simple root.</div><div class="tip">Descartes' rule of signs: f(x) has no sign changes, so no positive roots; f(−x) = −x³ + x² − 3x + 4 has three sign changes, so one or three negative roots (here one real root, the others complex).</div>` },

{ id: "2021-78", year: 2021, no: 78, subject: "maths", topic: "Simpson's rule",
q: `The value of ∫<sub>0</sub><sup>6</sup> dx/(1 + x<sup>2</sup>) by Simpson's 1/3 rule is`,
opts: ["1·3111", "1·3941", "1·3735", "1·3662"], ans: 3,
analysis: `<h3>Answer: (d) 1·3662</h3><p>With h = 1: f = 1, 0.5, 0.2, 0.1, 0.05882, 0.03846, 0.02703 at x = 0…6.<br>I ≈ (h/3)[f₀ + f₆ + 4(f₁ + f₃ + f₅) + 2(f₂ + f₄)] = (1/3)[1.02703 + 4(0.63846) + 2(0.25882)] = (1/3)(4.09852) = <b>1.3662</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1.3111, <b>(b)</b> 1.3941 and <b>(c)</b> 1.3735 do not result from the 1/3 rule with h = 1; they correspond to slips in the weights (1, 4, 2, 4, 2, 4, 1). For comparison, the trapezoidal rule gives 1.4108.</li></ul>
<div class="tip">Exact value: tan⁻¹6 ≈ 1.4056. Simpson's 1/3 rule needs an even number of intervals; the 3/8 rule needs a multiple of three.</div>` },

{ id: "2021-79", year: 2021, no: 79, subject: "maths", topic: "Telescoping series",
q: `The value of Σ<sub>x=1</sub><sup>n</sup> 1/[(x + 3)(x + 4)] is`,
opts: ["n/(n + 2)", "2n/(n + 1)", "n/[4(n + 4)]", "n/[2(n + 2)]"], ans: 2,
analysis: `<h3>Answer: (c) n/[4(n + 4)]</h3><p>1/[(x + 3)(x + 4)] = 1/(x + 3) − 1/(x + 4). Summing from 1 to n telescopes: 1/4 − 1/(n + 4) = n/[4(n + 4)].</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> do not give 1/20 at n = 1 (first term 1/(4 × 5)); only (c) does: 1/(4 × 5) ✔.</li></ul>
<div class="tip">Quick check of any series formula: substitute n = 1.</div><div class="key">Partial fractions with consecutive factors: 1/[(x + a)(x + a + 1)] = 1/(x + a) − 1/(x + a + 1). The sum telescopes to first term minus last term. As n → ∞ the sum tends to 1/4.</div><div class="tip">Similar sums: Σ1/[k(k + 1)] = n/(n + 1); Σ1/[(2k − 1)(2k + 1)] = n/(2n + 1).</div>` },

{ id: "2021-80", year: 2021, no: 80, subject: "maths", topic: "Orthogonal surfaces",
q: `The surface which intersects the surfaces of the system z(x + y) = c(3z + 1) orthogonally and which passes through the circle x<sup>2</sup> + y<sup>2</sup> = 1, z = 1, is given by`,
opts: ["x<sup>2</sup> + y<sup>2</sup> = 2z<sup>3</sup> + z<sup>2</sup> − 2", "x<sup>2</sup> − y<sup>2</sup> = z<sup>3</sup> + z + 1", "x<sup>2</sup> − y<sup>2</sup> = z<sup>2</sup> + 4", "x<sup>2</sup> + y<sup>2</sup> = z<sup>3</sup> + z<sup>2</sup> + 4"], ans: 0,
analysis: `<h3>Answer: (a) x² + y² = 2z³ + z² − 2</h3><p>Write the family as f = z(x + y)/(3z + 1) = c. Orthogonal surfaces satisfy f<sub>x</sub>p + f<sub>y</sub>q = f<sub>z</sub>, with characteristics dx/f<sub>x</sub> = dy/f<sub>y</sub> = dz/(−f<sub>z</sub>)… In practice: dx = dy gives x − y = c₁, and (x + y)d(x + y)/2 = z(3z + 1)dz gives (x + y)² = 4z³ + 2z² + c₂. Since x² + y² = [(x + y)² + (x − y)²]/2, the surfaces have the form x² + y² = 2z³ + z² + k. Passing through x² + y² = 1 at z = 1 gives k = −2.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> and <b>(c)</b> involve x² − y², not symmetric in x and y, so they cannot contain the circle x² + y² = 1.</li><li><b>(d)</b> gives x² + y² = 6 at z = 1, not 1.</li></ul>
<div class="tip">Quick test: any candidate must reduce to x² + y² = 1 at z = 1; only (a) does (2 + 1 − 2 = 1).</div>` },

{ id: "2021-81", year: 2021, no: 81, subject: "maths", topic: "Surface area",
q: `The surface area of that portion of the surface z = √(4 − x<sup>2</sup>) that lies above the rectangle R in the xy-plane whose co-ordinates satisfy 0 ≤ x ≤ 1 and 0 ≤ y ≤ 4 is equal to`,
opts: ["4 − π", "(3/4)π<sup>2</sup>", "(√3/5)π", "(4/3)π"], ans: 3,
analysis: `<h3>Answer: (d) (4/3)π</h3><p>S = ∫∫ √(1 + z<sub>x</sub>² + z<sub>y</sub>²) dA. z<sub>x</sub> = −x/√(4 − x²), z<sub>y</sub> = 0, so the integrand is 2/√(4 − x²). S = ∫<sub>0</sub><sup>4</sup>∫<sub>0</sub><sup>1</sup> 2/√(4 − x²) dx dy = 4 × 2 sin⁻¹(1/2) = 8 × π/6 = <b>4π/3</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> do not follow. Geometric check: the surface is part of a cylinder of radius 2; the arc over 0 ≤ x ≤ 1 subtends 30° (length 2 × π/6 = π/3), times the length 4 gives 4π/3.</li></ul><div class="key">Surface area formula: S = ∫∫<sub>R</sub> √(1 + (∂z/∂x)² + (∂z/∂y)²) dA. For a surface independent of y it reduces to (arc length in x) × (length in y).</div>` },

{ id: "2021-82", year: 2021, no: 82, subject: "maths", topic: "Taylor series method",
q: `The value of y at x = 0·1 to five places of decimals, by Taylor's series method, given that dy/dx = x<sup>2</sup>y − 1, y(0) = 1, is`,
opts: ["0·68281", "0·81122", "0·90033", "0·70127"], ans: 2,
analysis: `<h3>Answer: (c) 0·90033</h3><p>y′ = x²y − 1 → y′(0) = −1. y″ = 2xy + x²y′ → 0. y‴ = 2y + 4xy′ + x²y″ → 2. y⁗ = 6y′ + 6xy″ + x²y‴ → −6.<br>y(0.1) = 1 − 0.1 + 0 + (2/6)(0.001) − (6/24)(0.0001) = 0.9 + 0.000333 − 0.000025 = <b>0.90031 ≈ 0.90033</b> (the next terms change only the last digit).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are too far from 1 − 0.1 = 0.9; the solution changes by only about −0.1 over this step.</li></ul><div class="key">Taylor series method: y(x₀ + h) = y₀ + h y′₀ + h²y″₀/2! + h³y‴₀/3! + …; obtain the derivatives by repeatedly differentiating the ODE. Accuracy improves with more terms and smaller h.</div>` },

{ id: "2021-83", year: 2021, no: 83, subject: "design", topic: "Pictorial projections",
q: `In which one of the following projection types, the object is kept in such a way that its three mutual perpendicular edges make equal angles with the plane of projection and the object stands on one of its corners ?`,
opts: ["Non Isometric projection", "Oblique projection", "Isometric projection", "Point projection"], ans: 2,
analysis: `<h3>Answer: (c) Isometric projection</h3><p>In isometric ("equal measure") projection the object is placed so that its three principal edges make equal angles with the plane of projection (a cube resting on a corner with its body diagonal perpendicular to the plane). The three axes then appear at 120° to each other and all are foreshortened equally (to about 0.816 of true length; the isometric scale).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Non-isometric lines are lines not parallel to the isometric axes.</li><li><b>(b)</b> Oblique projection keeps one face parallel to the plane with oblique projectors.</li><li><b>(d)</b> "Point projection" is not a standard projection type.</li></ul>
<div class="tip">Isometric drawing (as opposed to projection) uses true lengths along the axes, so it looks about 22.5% larger.</div>` },

{ id: "2021-84", year: 2021, no: 84, subject: "design", topic: "Creative design process",
q: `The creative design routes are practised by adopting following steps :<ol><li>Concentration</li><li>Illumination</li><li>Preparation</li><li>Verification</li><li>Incubation</li></ol>Arrange the above steps in correct sequence :`,
opts: ["3, 1, 5, 2, 4", "3, 5, 2, 1, 4", "3, 2, 1, 5, 4", "3, 1, 2, 5, 4"], ans: 0,
analysis: `<h3>Answer: (a) 3, 1, 5, 2, 4</h3><table><tr><th>Step</th><th>What happens</th></tr><tr><td>3. Preparation</td><td>Gather information, define the problem</td></tr><tr><td>1. Concentration</td><td>Intensive effort on the problem</td></tr><tr><td>5. Incubation</td><td>Step away; the subconscious works on it</td></tr><tr><td>2. Illumination</td><td>The "Aha!" insight appears</td></tr><tr><td>4. Verification</td><td>Test and develop the idea</td></tr></table>
<h3>Why not the others</h3><ul><li><b>(b)</b> puts incubation before concentration.</li><li><b>(c)</b> puts illumination before concentration.</li><li><b>(d)</b> puts illumination before incubation.</li></ul>
<div class="tip">Graham Wallas (1926) proposed four stages (preparation, incubation, illumination, verification); engineering design texts add concentration (or frustration) after preparation.</div>` },

{ id: "2021-85", year: 2021, no: 85, subject: "design", topic: "Dimensioning",
q: `Points to be remembered while dimensioning :<ol><li>Dimensions are to be placed on the view which clearly express the relevant features.</li><li>Once dimension is marked in one view, it should not be repeated in another view.</li><li>Dimensions are to be drawn from hidden lines.</li><li>Dimensions should be given from the base line or centre line of a hole.</li></ol>Which of the above statements are correct ?`,
opts: ["1, 2, and 3 only", "1, 2, and 4 only", "1, 3, and 4 only", "2, 3, and 4 only"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2, and 4 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> Dimension a feature in the view that shows its true shape most clearly.</li>
<li><b>2 (correct):</b> Each dimension is given once; duplicates cause confusion and conflicting tolerances.</li>
<li><b>3 (wrong):</b> Dimensions should <b>not</b> be taken from hidden lines; draw a section or another view instead.</li>
<li><b>4 (correct):</b> Dimension from datum/base lines, finished surfaces or hole centre lines.</li></ul>
<div class="tip">Other rules (IS/SP 46): place dimensions outside the view, avoid crossing dimension lines, keep smaller dimensions inside larger ones, never use outlines or centre lines as dimension lines.</div>` },

{ id: "2021-86", year: 2021, no: 86, subject: "design", topic: "Geometric design",
q: `The design of highway interchanges involves the application of the geometry of`,
opts: ["circle arcs", "semi ellipse", "hyperbola", "semi-circle"], ans: 0,
analysis: `<h3>Answer: (a) circle arcs</h3><p>Ramps and loops of highway interchanges (cloverleaf, trumpet, diamond) are laid out mainly with <b>circular arcs</b> of suitable radii (joined by transition curves) to suit design speed, superelevation and sight distance.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> and <b>(c)</b> Ellipses and hyperbolas are not used for road alignment.</li><li><b>(d)</b> A semi-circle is just one special arc; interchanges use arcs of many angles (loops of about 270°).</li></ul>
<div class="tip">Transition curves: clothoid (Euler spiral) in highways (IRC), cubic parabola in railways. Vertical curves are parabolas.</div>` },

{ id: "2021-87", year: 2021, no: 87, subject: "design", topic: "Multi-view drawing",
q: `On a multi view drawing a visible or invisible line represents the following :<ol><li>Intersection of two surfaces</li><li>Edge view of a surface</li><li>Limiting elements of a surface</li></ol>Which of the above points are correct ?`,
opts: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> An edge where two surfaces meet appears as a line.</li>
<li><b>2 (yes):</b> A plane surface seen edge-on appears as a line.</li>
<li><b>3 (yes):</b> The limiting element (contour) of a curved surface, such as the outline of a cylinder in its side view, appears as a line.</li></ul>
<div class="tip">Line types (IS 10714): continuous thick (visible outlines), dashed (hidden edges), chain thin (centre lines), continuous thin (dimension, hatching).</div><div class="tip">Precedence of lines when they coincide: visible outline over hidden line over centre line. Curved surfaces show a line only where they turn away from the viewer (their limiting elements).</div>` },

{ id: "2021-88", year: 2021, no: 88, subject: "design", topic: "Sectional views",
q: `On a view showing assembled parts, section lines on adjacent pieces are drawn in`,
opts: ["same directions usually at an angle of 90°", "opposite directions usually at an angle of 45°", "opposite directions usually at an angle of 30°", "same directions usually at an angle of 60°"], ans: 1,
analysis: `<h3>Answer: (b) opposite directions usually at an angle of 45°</h3><p>Hatching (section lines) is normally thin lines at 45°. In an assembly, adjacent parts are hatched in <b>opposite</b> directions (or with different spacing) so that the boundary between them is clear; the same part is hatched identically everywhere.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(d)</b> Same direction would make adjacent parts merge visually.</li><li><b>(c)</b> 30° is used only when 45° lines would be parallel to an outline.</li></ul>
<div class="tip">Shafts, bolts, keys, ribs and webs cut longitudinally are not hatched.</div>` },

{ id: "2021-89", year: 2021, no: 89, subject: "design", topic: "Oblique drawing",
q: `Oblique drawing has the following advantage over isometric drawing :`,
opts: ["Distortion can be increased by foreshortening measurements along the receding axis", "A greater choice is permitted in orthographic top view", "Circular or irregular outlines on the front face show in their true shape", "Oblique drawing is often less flexible"], ans: 2,
analysis: `<h3>Answer: (c) Circular or irregular outlines on the front face show in their true shape</h3><p>In oblique drawing the front face is drawn parallel to the picture plane, so circles and irregular shapes on it appear in true shape (circles stay circles), which makes drawing easier than in isometric, where circles become ellipses.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Foreshortening the receding axis (cabinet oblique, half scale) <b>reduces</b> distortion.</li><li><b>(b)</b> Oblique drawing has nothing to do with choices in the top view.</li><li><b>(d)</b> Being less flexible is not an advantage (and oblique is actually more flexible in angle choice).</li></ul>
<div class="tip">Cavalier oblique: receding axis at full scale; cabinet oblique: at half scale (looks more natural).</div>` },

{ id: "2021-90", year: 2021, no: 90, subject: "quality", topic: "Deming's deadly diseases",
q: `Most of Deming's deadly diseases involve`,
opts: ["immobility of management", "a long term orientation", "a lack of understanding of variation", "high degree of constancy of purpose"], ans: 2,
analysis: `<h3>Answer: (c) a lack of understanding of variation</h3><p>Deming's seven deadly diseases: lack of constancy of purpose; emphasis on short-term profits; evaluation of performance, merit rating or annual review; mobility of management; running a company on visible figures alone; excessive medical costs; excessive legal costs. Most stem from not understanding variation (e.g. merit ratings blame individuals for variation caused by the system).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> The disease is <b>mobility</b> (job-hopping) of management, not immobility.</li><li><b>(b)</b> The disease is short-term thinking; long-term orientation is the cure.</li><li><b>(d)</b> Constancy of purpose is Deming's first point (a virtue).</li></ul>` },

{ id: "2021-91", year: 2021, no: 91, subject: "quality", topic: "Control chart rules",
q: `Which one of the following rules is NOT used for identifying an out-of-control process ?`,
opts: ["A process is assumed to be out-of-control if a single point plots outside the control limits", "A process is assumed to be out-of-control if there is a run of six or more consecutive points steadily increasing or decreasing", "A process is assumed to be out-of-control if nine or more consecutive points fall to one side of the centre line", "A process is assumed to be out-of-control if two or more consecutive points fall beyond the 1σ limit on the same side of the centre line"], ans: 3,
analysis: `<h3>Answer: (d) two or more consecutive points beyond the 1σ limit</h3><p>Standard run rules (Western Electric / Nelson) use: one point beyond 3σ; 2 out of 3 consecutive points beyond <b>2σ</b> on the same side; 4 out of 5 beyond <b>1σ</b> on the same side; a run of 8 or 9 on one side of the centre line; 6 points steadily rising or falling. "Two consecutive points beyond 1σ" is not a rule: it happens often by chance (about 32% of points lie beyond 1σ).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> Rule 1 (Shewhart).</li><li><b>(b)</b> The trend rule.</li><li><b>(c)</b> The run rule (Nelson uses 9 points).</li></ul>` },

{ id: "2021-92", year: 2021, no: 92, subject: "quality", topic: "Quality control methods",
q: `Which one of the following is NOT a major quality control method ?`,
opts: ["Inspection", "Testing", "Loading", "Sampling"], ans: 2,
analysis: `<h3>Answer: (c) Loading</h3><p>Quality is controlled mainly by inspection (checking against specifications), testing (functional or destructive) and sampling (statistical acceptance and process control). "Loading" is a production-planning term: assigning work to machines or work centres.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are standard quality-control methods.</li></ul>
<div class="tip">Production planning and control steps: routing, scheduling, loading, dispatching, expediting (follow-up). See 2017 Q50.</div><div class="key">Inspection checks conformity of items; testing verifies performance or properties (often destructive); sampling uses statistics to judge a whole lot or process from a few items, cutting cost compared with 100% inspection.</div>` },

{ id: "2021-93", year: 2021, no: 93, subject: "quality", topic: "Supplier performance", selfCorrected: true,
q: `Which one of the following is the responsiveness to business issues in commercial performance ?`,
opts: ["Frequency of overshipments", "Quotations", "Timely reconciliation of cumulative shipments", "Timely supplier response to problems"], ans: 1,
analysis: `<h3>Answer: (b) Quotations</h3><p>Supplier-rating schemes (e.g. in automotive quality systems) group commercial performance measures. Under <b>responsiveness to business issues</b>, the measure is how promptly and competitively the supplier provides <b>quotations</b> (and cost-reduction proposals) when asked; it reflects commercial responsiveness, not delivery or quality.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Frequency of overshipments is a <b>delivery</b> accuracy measure.</li>
<li><b>(c)</b> Timely reconciliation of cumulative shipments is an administrative/delivery measure.</li>
<li><b>(d)</b> Timely response to problems is a <b>quality</b> responsiveness measure.</li></ul>
<div class="tip">Typical supplier rating weights: quality, delivery, cost/commercial, service. Vendor rating feeds supplier development and approved vendor lists.</div>` },

{ id: "2021-94", year: 2021, no: 94, subject: "quality", topic: "Measurement system analysis", selfCorrected: true,
q: `Which one of the following is NOT a component of total variability of measured observations ?`,
opts: ["Variation between operators", "Variability due to operators", "Variability between parts dimensions", "Variation due to interaction between operators and parts"], ans: 2,
analysis: `<h3>Answer: (c) Variability between parts dimensions</h3><p>In a gauge repeatability and reproducibility (R&amp;R) study, the variability of <b>measured observations</b> attributable to the measurement process is split into: repeatability (equipment), reproducibility (operators: variation between operators and variability due to operators), and the operator × part interaction. The true difference between parts is the product variation that the measurements are trying to detect; the key does not count it as a component of measurement variability.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(b)</b> Operator effects (reproducibility) are components.</li><li><b>(d)</b> The operator × part interaction is a component in the ANOVA method.</li></ul>
<div class="tip">σ²<sub>total</sub> = σ²<sub>parts</sub> + σ²<sub>measurement</sub>; acceptance rule (AIAG): gauge R&amp;R below 10% of total variation is good, 10–30% marginal, above 30% unacceptable.</div>` },

{ id: "2021-95", year: 2021, no: 95, subject: "quality", topic: "TQM in construction",
q: `Which one of the following unique characteristics of the construction process makes TQM difficult to implement ?`,
opts: ["The construction process is relatively short in duration", "A low percentage of the labour at a construction project only work for the construction firm for a short time period", "Project owners take a long term view to control projects", "Construction projects are multiple, each project being somewhat same"], ans: 0,
analysis: `<h3>Answer: (a) The construction process is relatively short in duration</h3><p>Each construction project is a temporary undertaking; the team disbands when it ends, so the long-term relationships and continuous improvement that TQM relies on are hard to build (see 2019 Q45).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> The real problem is that a <b>high</b> percentage of labour is transient; "a low percentage" reverses it.</li>
<li><b>(c)</b> Owners usually take a <b>short</b>-term, cost-focused view; a long-term view would help TQM.</li>
<li><b>(d)</b> Projects are typically <b>unique</b>, one-off; if they were similar, standardisation would be easier.</li></ul>` },

{ id: "2021-96", year: 2021, no: 96, subject: "quality", topic: "Pareto diagram",
q: `Rearrange the following steps involved in construction of pareto diagram in the proper order.<ol><li>Determine how relative importance is to be judged.</li><li>Decide on the data categorization system.</li><li>Rank the categories from most important to least important.</li><li>Plot a bar graph.</li><li>Compute the cumulative frequency of the data categories in their chosen order.</li></ol>`,
opts: ["1, 3, 2, 4, 5", "2, 3, 1, 5, 4", "2, 1, 3, 5, 4", "1, 2, 3, 4, 5"], ans: 2,
analysis: `<h3>Answer: (c) 2, 1, 3, 5, 4</h3><table><tr><th>Step</th><th>Action</th></tr><tr><td>2</td><td>Decide how to categorise the data (by defect type, cause, department…)</td></tr><tr><td>1</td><td>Decide the measure of importance (frequency, cost, time)</td></tr><tr><td>3</td><td>Rank the categories from most to least important</td></tr><tr><td>5</td><td>Compute cumulative frequencies in that order</td></tr><tr><td>4</td><td>Plot the bar graph (with the cumulative line)</td></tr></table>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(d)</b> judge importance before categories exist.</li><li><b>(b)</b> ranks before deciding how to judge importance.</li></ul>
<div class="tip">Pareto principle (Juran's "vital few and trivial many"): about 80% of problems come from about 20% of causes.</div>` },

{ id: "2021-97", year: 2021, no: 97, subject: "pm", topic: "Sources of finance",
q: `<b>Directions:</b> Each of the next four items consists of two statements, one labelled as the 'Statement (I)' and the other as 'Statement (II)'. Examine these two statements carefully and select the answers to these items using the codes given below.<br><br>Statement (I) : Issue of shares is the most common method especially to raise long-term funds.<br>Statement (II) : The equity shareholders are residual owners who have restricted claim on income as dividend.`,
opts: C, ans: 2,
analysis: `<h3>Answer: (c) Statement I is true, Statement II is false</h3><ul>
<li><b>Statement I (true):</b> Issuing shares (equity) is the most common way for companies to raise long-term (permanent) capital.</li>
<li><b>Statement II (false):</b> Equity shareholders are residual owners with a <b>residual</b>, unlimited claim on income: they get whatever remains after creditors and preference shareholders, with no fixed or "restricted" dividend. It is preference shareholders whose claim is restricted to a fixed rate.</li></ul>
<h3>The codes</h3><ul><li><b>(a)</b> and <b>(b)</b> need II to be true.</li><li><b>(d)</b> needs I to be false.</li></ul>` },

{ id: "2021-98", year: 2021, no: 98, subject: "materials", topic: "Plastic deformation",
q: `Statement (I) : The slip mode of deformation is the common mode in only one crystal at ambient and elevated temperature.<br>Statement (II) : A slip plane and a slip direction that lies on it together constitute a slip system.` + N,
opts: C, ans: 3,
analysis: `<h3>Answer: (d) Statement I is false, Statement II is true</h3><ul>
<li><b>Statement I (false):</b> Slip (dislocation motion on close-packed planes) is the common mode of plastic deformation in metal crystals generally, single crystals and polycrystals alike, at ambient and elevated temperatures; it is not limited to "only one crystal". (Twinning is the other mode, important at low temperature or in HCP metals.)</li>
<li><b>Statement II (true):</b> A slip system is the combination of a slip plane and a slip direction lying in it (FCC: {111}&lt;110&gt;, 12 systems).</li></ul>
<h3>The codes</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(c)</b> need I to be true.</li></ul>` },

{ id: "2021-99", year: 2021, no: 99, subject: "ict", topic: "E-governance projects", doubt: true,
q: `Statement (I) : Major e-Governance projects bear fruit only when application of IT is preceded by process re-engineering.<br>Statement (II) : Initiatives which save the citizens' time, money and effort are able to succeed even when back-end computerization is not done.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I (official key)</h3><ul>
<li><b>Statement I (true):</b> The Second ARC (11th Report) stresses that computerising inefficient processes only automates inefficiency; government process re-engineering must come first.</li>
<li><b>Statement II (key: true):</b> Early citizen-facing initiatives (e.g. single-window payment centres) succeeded because they saved citizens time and trips, even before back-office systems were computerised.</li></ul>
<div class="note">In doubt (key followed). Statement II is true only in a limited, transitional sense; the same ARC report warns that front-end services are not sustainable without back-end computerisation. Our own answer was (c). The key is consistent with its answer to 2020 Q100.</div>
<h3>The codes</h3><ul><li><b>(a)</b> II does not explain I.</li><li><b>(c)</b> Our own reading.</li><li><b>(d)</b> needs I to be false.</li></ul>` },

{ id: "2021-100", year: 2021, no: 100, subject: "ethics", topic: "Moral pluralism", selfCorrected: true,
q: `Statement (I) : Moral pluralists maintain that there are moral truths, but they do not form a body of coherent and consistent truths in the way that one finds in science or mathematics.<br>Statement (II) : Moral truth are real, but partial.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true, but II is not the explanation of I</h3><ul>
<li><b>Statement I (true):</b> Moral pluralism (Isaiah Berlin, W.D. Ross) holds that there are many genuine moral values or duties that cannot be reduced to one master principle and can conflict, so they do not form a single consistent system like mathematics.</li>
<li><b>Statement II (true):</b> Pluralists also say moral truths are real but each captures only part of the moral picture.</li></ul>
<p>II restates another feature of pluralism; it does not explain why the truths fail to form a coherent body.</p>
<h3>The codes</h3><ul><li><b>(a)</b> Overstates the link.</li><li><b>(c)</b> and <b>(d)</b> each call a true statement false.</li></ul>
<div class="tip">Contrast: moral monism (one supreme principle: utility, or the categorical imperative) and moral relativism (no objective moral truths at all).</div>` }
);
})();
