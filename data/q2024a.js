// ESE 2024 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q1–25
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2024-1", year: 2024, no: 1, subject: "maths", topic: "Exponential distribution", doubt: true,
q: `The standard deviation of the exponential distribution of<br>f<sub>X</sub>(x) = λe<sup>−λx</sup>, x ≥ 0; 0, x &lt; 0 is`,
opts: ["1/λ", "2/λ<sup>2</sup>", "3/λ<sup>3</sup>", "2/λ<sup>3</sup>"], ans: 1,
analysis: `<h3>Answer: (b) 2/λ<sup>2</sup> (official key)</h3><p>For the exponential distribution with rate λ:</p>
<ul><li>Mean E[X] = ∫<sub>0</sub><sup>∞</sup> x λe<sup>−λx</sup> dx = 1/λ</li><li>Second moment E[X²] = ∫<sub>0</sub><sup>∞</sup> x² λe<sup>−λx</sup> dx = <b>2/λ²</b></li><li>Variance = E[X²] − (E[X])² = 2/λ² − 1/λ² = 1/λ²</li><li>Standard deviation = √(1/λ²) = <b>1/λ</b></li></ul>
<div class="note">In doubt (key followed). UPSC's key gives (b) 2/λ², which is the <b>second moment</b> E[X²], not the standard deviation. By the standard derivation above, the standard deviation of an exponential distribution is 1/λ, option (a); the mean and the standard deviation are equal. We show the official answer, but in our view (a) is correct.</div>
<h3>The other options</h3><ul>
<li><b>(a) 1/λ</b>: the standard deviation by the textbook derivation (and also the mean).</li>
<li><b>(c) 3/λ<sup>3</sup></b>: matches no moment; the third moment is E[X³] = 6/λ³.</li>
<li><b>(d) 2/λ<sup>3</sup></b>: has the wrong dimension (1/λ³) for a spread measure in units of x.</li></ul>
<div class="key">Exponential: memoryless, models time between random events (failures at constant rate λ). Reliability R(t) = e<sup>−λt</sup>, MTTF = 1/λ. Coefficient of variation = σ/μ = 1.</div>` },

{ id: "2024-2", year: 2024, no: 2, subject: "maths", topic: "Bayes' theorem",
q: `Suppose that 0·1% of the people in a certain area have a disease D and that a mass screening test is used to detect cases. The test gives either a positive or a negative result for each person. Ideally, the test would always give a positive result for a person who has D, and would never do so for a person who has not. In practice the test gives a positive result with probability 99·9% for a person who has D, and with probability 0·2% for a person who has not. What is the probability that a person for whom the test is positive actually has the disease ?`,
opts: ["1/3", "5/3", "4/3", "2/3"], ans: 0,
analysis: `<h3>Answer: (a) 1/3</h3><p><b>Bayes' theorem</b>: P(D | +) = P(+ | D)P(D) / [P(+ | D)P(D) + P(+ | not D)P(not D)].</p>
<p>= (0.999 × 0.001) / (0.999 × 0.001 + 0.002 × 0.999) = 0.000999 / (0.000999 + 0.001998) = 0.000999/0.002997 = <b>1/3</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 5/3</b> and <b>(c) 4/3</b>: are greater than 1, so they cannot be probabilities.</li>
<li><b>(d) 2/3</b>: is the probability that a positive result is a <b>false</b> positive, the complement.</li></ul>
<div class="key">The base-rate effect: even a 99.9%-accurate test gives mostly false positives when the disease is rare, because the healthy group is so large. This is why positive screening results are confirmed with a second test.</div>` },

{ id: "2024-3", year: 2024, no: 3, subject: "maths", topic: "Marginal density",
q: `Let the random variables X and Y have joint density function given by<br>f<sub>X,Y</sub>(x, y) = c(1 − y), 0 ≤ x ≤ y ≤ 1; 0, otherwise<br>Then the marginal density function for X is`,
opts: ["f<sub>X</sub>(x) = 6(1/2 − x − x<sup>2</sup>/2) for 0 ≤ x ≤ 1", "f<sub>X</sub>(x) = 6(1/2 + x + x<sup>2</sup>/2) for 0 ≤ x ≤ 1", "f<sub>X</sub>(x) = 6(1/2 + x − x<sup>2</sup>/2) for 0 ≤ x ≤ 1", "f<sub>X</sub>(x) = 6(1/2 − x + x<sup>2</sup>/2) for 0 ≤ x ≤ 1"], ans: 3,
analysis: `<h3>Answer: (d) f<sub>X</sub>(x) = 6(1/2 − x + x²/2)</h3><p><b>Find c</b>: the total probability is 1. ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>y</sup> c(1 − y) dx dy = c ∫<sub>0</sub><sup>1</sup> y(1 − y) dy = c(1/2 − 1/3) = c/6, so <b>c = 6</b>.</p>
<p><b>Marginal of X</b>: integrate out y from x to 1: f<sub>X</sub>(x) = 6 ∫<sub>x</sub><sup>1</sup> (1 − y) dy = 6[(1 − x) − (1 − x²)/2] = <b>6(1/2 − x + x²/2)</b> = 3(1 − x)².</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: gives f<sub>X</sub>(1) = 6(1/2 − 1 − 1/2) = −6, a negative density, impossible.</li>
<li><b>(b)</b>: integrates to 6(1/2 + 1/2 + 1/6) = 7, not 1.</li>
<li><b>(c)</b>: integrates to 6(1/2 + 1/2 − 1/6) = 5, not 1.</li></ul>
<div class="tip">Check (d): ∫<sub>0</sub><sup>1</sup> 3(1 − x)² dx = 1 ✔.</div>` },

{ id: "2024-4", year: 2024, no: 4, subject: "maths", topic: "z-transform",
q: `The continuous-time signal f(t) = e<sup>−2ωt</sup>, where ω is a real constant, is sampled when t ≥ 0 at intervals T. What is the z transform of the resulting sequence of samples ?`,
opts: ["z/(z − e<sup>−2ωT</sup>)", "z/(1 − e<sup>−2ωT</sup>)", "z/(z − e<sup>−ωT</sup>)", "z/(z − e<sup>2ωT</sup>)"], ans: 0,
analysis: `<h3>Answer: (a) z/(z − e<sup>−2ωT</sup>)</h3><p>The samples are f[k] = e<sup>−2ωkT</sup> = a<sup>k</sup> with a = e<sup>−2ωT</sup>. The z-transform is a geometric series:</p>
<p>F(z) = Σ<sub>k=0</sub><sup>∞</sup> a<sup>k</sup> z<sup>−k</sup> = 1/(1 − a z<sup>−1</sup>) = <b>z/(z − e<sup>−2ωT</sup>)</b>, for |z| &gt; |a|.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: z/(1 − a) has no pole in z; it is not the sum of the series.</li>
<li><b>(c)</b>: uses e<sup>−ωT</sup>, dropping the factor 2 in the exponent.</li>
<li><b>(d)</b>: uses e<sup>+2ωT</sup>, the wrong sign.</li></ul>
<div class="key">Standard pairs: Z{1} = z/(z − 1); Z{a<sup>k</sup>} = z/(z − a); Z{k} = z/(z − 1)²; Z{sin kθ} = z sin θ/(z² − 2z cos θ + 1) (see Q5).</div><div class="tip">Sampling turns e<sup>−at</sup> into the geometric sequence (e<sup>−aT</sup>)<sup>k</sup>; the pole moves from s = −a to z = e<sup>−aT</sup>, inside the unit circle for a &gt; 0, so the sampled signal is stable, like the original.</div>` },

{ id: "2024-5", year: 2024, no: 5, subject: "maths", topic: "Inverse z-transform",
q: `If Y(z) = z/(z<sup>2</sup> − z + 1), then the inverse z transform of Y(z) is`,
opts: ["√(1/3) sin (kπ/3)", "2√(1/3) sin (kπ/3)", "2√(1/3) cos (kπ/3)", "2√(1/3) sin kπ"], ans: 1,
analysis: `<h3>Answer: (b) 2√(1/3) sin (kπ/3)</h3><p>Compare with Z{sin kθ} = z sin θ / (z² − 2z cos θ + 1).</p>
<p>z² − z + 1 matches with 2 cos θ = 1, so θ = π/3 and sin θ = √3/2. Then</p>
<p>z/(z² − z + 1) = (1/sin θ) · Z{sin kθ} = (2/√3) sin(kπ/3) = <b>2√(1/3) sin(kπ/3)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: misses the factor 2 (uses 1/√3 instead of 1/sin θ = 2/√3).</li>
<li><b>(c)</b>: the cosine pair has z(z − cos θ) in the numerator, not z.</li>
<li><b>(d)</b>: sin kπ = 0 for every integer k, so it gives an all-zero sequence.</li></ul>
<div class="tip">Check: y[0] = 0 and y[1] = 2/√3 × √3/2 = 1. Long division of z/(z² − z + 1) = z<sup>−1</sup> + z<sup>−2</sup> + 0 − z<sup>−4</sup> … gives y[1] = 1 ✔, y[2] = 1 ✔ (2/√3 × sin 120° = 1).</div>` },

{ id: "2024-6", year: 2024, no: 6, subject: "maths", topic: "Half-range sine series",
q: `The temperature distribution T(x) at a distance x, measured from one end, along a bar of length L is given by T(x) = Kx(L − x) (0 ≤ x ≤ L), K = constant. A Fourier series expansion consisting of sine terms only for T(x) is`,
opts: ["(8KL<sup>2</sup>/π<sup>3</sup>) Σ<sub>n=1</sub><sup>∞</sup> [1/(2n − 1)<sup>3</sup>] sin ((2n − 1)πx/L)", "(8KL<sup>2</sup>/π<sup>3</sup>) Σ<sub>n=1</sub><sup>∞</sup> [1/(2n − 1)<sup>2</sup>] sin ((2n − 1)πx/L)", "(8KL<sup>3</sup>/π<sup>3</sup>) Σ<sub>n=1</sub><sup>∞</sup> [1/(2n − 1)<sup>3</sup>] sin ((2n − 1)πx/L)", "(8KL<sup>3</sup>/π<sup>3</sup>) Σ<sub>n=1</sub><sup>∞</sup> [1/(2n − 1)<sup>2</sup>] sin ((2n − 1)πx/L)"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p>Half-range sine series: b<sub>n</sub> = (2/L) ∫<sub>0</sub><sup>L</sup> Kx(L − x) sin(nπx/L) dx. Integrating by parts twice:</p>
<p>b<sub>n</sub> = 4KL²[1 − (−1)<sup>n</sup>]/(n³π³) = 8KL²/(n³π³) for odd n, 0 for even n.</p>
<p>So T(x) = (8KL²/π³) Σ sin((2n − 1)πx/L)/(2n − 1)³.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: (2n − 1)² in the denominator; the coefficients of a smooth function that vanishes at both ends fall off as 1/n³.</li>
<li><b>(c)</b> and <b>(d)</b>: L³ has the wrong dimension: T = Kx(L − x) scales as KL², so the series must too.</li></ul>
<div class="tip">Check at x = L/2: T = KL²/4. Series: (8KL²/π³)(1 − 1/27 + 1/125 − …) = (8KL²/π³)(π³/32) = KL²/4 ✔.</div>` },

{ id: "2024-7", year: 2024, no: 7, subject: "maths", topic: "Fourier series: half-wave rectifier",
q: `Passing a sinusoidal voltage A sin ωt through a half-wave rectifier produces the clipped sine wave shown in the following figure.<br><img class="fig" src="img/2024-7.png" alt="Half-wave rectified sine: positive half-cycles of height A from 0 to π/ω, 2π/ω to 3π/ω and so on, zero in between.">A Fourier series expansion of the rectified wave is`,
opts: ["f(t) = (A/π)[1 + (π/2) sin ωt + 2 Σ<sub>n=1</sub><sup>∞</sup> cos 2nωt/(4n<sup>2</sup> − 1)]", "f(t) = (A/π)[1 + (π/2) sin ωt − 2 Σ<sub>n=1</sub><sup>∞</sup> cos 2nωt/(4n<sup>2</sup> − 1)]", "f(t) = (A/π)[1 − (π/2) sin ωt − 2 Σ<sub>n=1</sub><sup>∞</sup> cos 2nωt/(4n<sup>2</sup> − 1)]", "f(t) = (A/π)[1 − (π/2) sin ωt + 2 Σ<sub>n=1</sub><sup>∞</sup> cos 2nωt/(4n<sup>2</sup> − 1)]"], ans: 1,
analysis: `<h3>Answer: (b) f(t) = (A/π)[1 + (π/2) sin ωt − 2Σ cos 2nωt/(4n² − 1)]</h3><p>Over one period (2π/ω):</p>
<ul><li><b>DC value</b>: average = A/π.</li><li><b>Fundamental</b>: the only sine term is (A/2) sin ωt = (A/π)(π/2) sin ωt.</li><li><b>Even harmonics</b>: a<sub>2n</sub> = −2A/[π(4n² − 1)]; odd harmonics above the first vanish.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: + sign on the cosine series; at t = π/(2ω) (the peak) it would give a value above A.</li>
<li><b>(c)</b> and <b>(d)</b>: − sign on the sin ωt term would put the pulses in the negative half-cycles.</li></ul>
<div class="tip">Check at t = 0, where f = 0: (A/π)[1 − 2(1/3 + 1/15 + 1/35 + …)] = (A/π)[1 − 2 × 1/2] = 0 ✔ (the series Σ1/(4n² − 1) = 1/2).</div>` },

{ id: "2024-8", year: 2024, no: 8, subject: "maths", topic: "Contour integral of an analytic function",
q: `What is the contour integral ∫<sub>C</sub> z<sup>2</sup> dz along the path C from −1 + j to 5 + 3j and composed of two straight line segments, the first from −1 + j to 5 + j and the second from 5 + j to 5 + 3j ?`,
opts: ["−4 + (196/3)j", "−4 − (196/3)j", "4 − (196/3)j", "4 + (196/3)j"], ans: 0,
analysis: `<h3>Answer: (a) −4 + (196/3)j</h3><p>z² is analytic everywhere, so the integral depends only on the end points: ∫ z² dz = [z³/3] from −1 + j to 5 + 3j.</p>
<ul><li>(5 + 3j)² = 16 + 30j; (5 + 3j)³ = (16 + 30j)(5 + 3j) = 80 + 48j + 150j − 90 = −10 + 198j</li><li>(−1 + j)² = −2j; (−1 + j)³ = −2j(−1 + j) = 2 + 2j</li></ul>
<p>Integral = [(−10 + 198j) − (2 + 2j)]/3 = (−12 + 196j)/3 = <b>−4 + (196/3)j</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: wrong sign on the imaginary part.</li>
<li><b>(c)</b>: both signs reversed: the integral taken in the opposite direction.</li>
<li><b>(d)</b>: wrong sign on the real part.</li></ul>
<div class="key">Path independence holds for analytic functions in a simply connected region (Cauchy's theorem). The two-segment path is a distractor; parametrising each segment would give the same answer with far more work.</div>` },

{ id: "2024-9", year: 2024, no: 9, subject: "maths", topic: "Inversion mapping",
q: `The image in the w plane of the circle |z + 3/4 + j| = 7/4 under the inversion mapping w = 1/z is`,
opts: ["a circle centre (1/2, 2/3) and radius 7/6", "a circle centre (1/2, −2/3) and radius 7/6", "a circle centre (−1/2, 2/3) and radius 7/6", "a circle centre (−1/2, −2/3) and radius 7/6"], ans: 1,
analysis: `<h3>Answer: (b) centre (1/2, −2/3), radius 7/6</h3><p>The circle |z − c| = r has centre c = −3/4 − j and r = 7/4. It does not pass through the origin (|c| = 5/4 ≠ 7/4), so w = 1/z maps it to a circle.</p>
<p>For w = 1/z: centre w<sub>0</sub> = c̄/(|c|² − r²) and radius ρ = r/||c|² − r²|.</p>
<ul><li>|c|² − r² = 25/16 − 49/16 = −3/2</li><li>w<sub>0</sub> = (−3/4 + j)/(−3/2) = 1/2 − (2/3)j → <b>(1/2, −2/3)</b></li><li>ρ = (7/4)/(3/2) = <b>7/6</b></li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(c)</b> and <b>(d)</b>: have the right radius but a wrong sign in the centre (forgetting the conjugate, or the negative denominator).</li></ul>
<div class="tip">Check a point: z = −3/4 − j + 7/4 = 1 − j is on the circle; w = 1/(1 − j) = (1 + j)/2. Distance from (1/2, −2/3) to (1/2, 1/2) = 7/6 ✔.</div>` },

{ id: "2024-10", year: 2024, no: 10, subject: "maths", topic: "Partial derivative as slope",
q: `The plane x = 1 intersects the paraboloid z = x<sup>2</sup> + y<sup>2</sup> in a parabola. The slope of the tangent line to the parabola at (1, 2, 5) is`,
opts: ["2", "6", "4", "5"], ans: 2,
analysis: `<h3>Answer: (c) 4</h3><p>In the plane x = 1, the curve is z = 1 + y². Its slope (dz/dy) is the partial derivative ∂z/∂y = 2y. At y = 2: slope = <b>4</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 2</b>: is ∂z/∂x = 2x at x = 1, the slope in the other direction (plane y = 2).</li>
<li><b>(b) 6</b>: adds the two partial derivatives (2 + 4).</li>
<li><b>(d) 5</b>: is the z-coordinate of the point, not a slope.</li></ul>
<div class="key">Geometric meaning: ∂f/∂y at a point is the slope of the curve cut from the surface by the plane x = constant through that point (Thomas' Calculus example).</div><div class="tip">Same idea in the other direction: in the plane y = 2 the curve is z = x² + 4, with slope 2x = 2 at x = 1, which is option (a), the trap.</div>` },

{ id: "2024-11", year: 2024, no: 11, subject: "maths", topic: "Position from acceleration",
q: `Suppose we do not know the path of a hang glider, but only its acceleration vector a(t) = −(3 cos t)i − (3 sin t)j + 2k. We also know that initially (at time t = 0) the glider departed from the point (4, 0, 0) with velocity v(0) = 3j. What is the glider's position as a function of t ?`,
opts: ["r(t) = (1 + 3 cos t)i − 3 sin t j + t<sup>2</sup>k", "r(t) = (−1 + 3 cos t)i + 3 sin t j + t<sup>2</sup>k", "r(t) = (1 − 3 cos t)i + 3 sin t j + t<sup>2</sup>k", "r(t) = (1 + 3 cos t)i + 3 sin t j + t<sup>2</sup>k"], ans: 3,
analysis: `<h3>Answer: (d) r(t) = (1 + 3 cos t)i + 3 sin t j + t²k</h3><p><b>Velocity</b>: v = ∫a dt = −3 sin t i + 3 cos t j + 2t k + C. v(0) = 3j gives C = 0.</p>
<p><b>Position</b>: r = ∫v dt = 3 cos t i + 3 sin t j + t² k + D. r(0) = 3i + D = 4i gives D = i.</p>
<p>r(t) = <b>(1 + 3 cos t)i + 3 sin t j + t² k</b>: a helix of radius 3 about the line x = 1, y = 0, rising as t².</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: −3 sin t j gives v(0) = −3j, not +3j.</li>
<li><b>(b)</b>: r(0) = (2, 0, 0), not (4, 0, 0).</li>
<li><b>(c)</b>: r(0) = (−2, 0, 0).</li></ul>
<div class="tip">Check initial conditions first: only (d) gives both r(0) = (4, 0, 0) and v(0) = 3j.</div>` },

{ id: "2024-12", year: 2024, no: 12, subject: "maths", topic: "Absolute extrema on a region",
q: `What is the absolute minimum value of f(x, y) = 2 + 2x + 4y − x<sup>2</sup> − y<sup>2</sup> on the triangular region in the first quadrant bounded by the lines x = 0, y = 0, and y = 9 − x ?`,
opts: ["−11", "−43", "−61", "−41"], ans: 2,
analysis: `<h3>Answer: (c) −61</h3><p>Complete the squares: f = 7 − (x − 1)² − (y − 2)². So f is largest (7) at (1, 2) and falls with the square of the distance from (1, 2). The minimum is at the point of the triangle farthest from (1, 2), a vertex:</p>
<table><tr><th>Vertex</th><th>(x − 1)² + (y − 2)²</th><th>f</th></tr><tr><td>(0, 0)</td><td>5</td><td>2</td></tr><tr><td>(9, 0)</td><td>64 + 4 = 68</td><td><b>−61</b></td></tr><tr><td>(0, 9)</td><td>1 + 49 = 50</td><td>−43</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) −11</b>: is not attained at any critical point or vertex.</li>
<li><b>(b) −43</b>: is the value at (0, 9), not the smallest.</li>
<li><b>(d) −41</b>: is not a vertex value.</li></ul>
<div class="key">General method (Thomas' Calculus): check interior critical points, then critical points on each boundary segment, then the corners; the largest and smallest of these values are the absolute extremes.</div>` },

{ id: "2024-13", year: 2024, no: 13, subject: "maths", topic: "Centroid of a solid",
q: `What is the centroid (δ = 1) of the solid enclosed by the cylinder x<sup>2</sup> + y<sup>2</sup> = 4, bounded above by the paraboloid z = x<sup>2</sup> + y<sup>2</sup>, and bounded below by the xy-plane ?`,
opts: ["(0, 0, 3/4)", "(0, 0, 4/3)", "(0, 0, 5/4)", "(0, 0, 4/5)"], ans: 1,
analysis: `<h3>Answer: (b) (0, 0, 4/3)</h3><p>By symmetry x̄ = ȳ = 0. In cylindrical coordinates (0 ≤ z ≤ r², 0 ≤ r ≤ 2):</p>
<ul><li>Volume M = ∫<sub>0</sub><sup>2π</sup>∫<sub>0</sub><sup>2</sup> r² · r dr dθ = 2π × 16/4 = 8π</li><li>Moment M<sub>xy</sub> = ∫∫ (r⁴/2) r dr dθ = 2π × (1/2)(64/6) = 32π/3</li></ul>
<p>z̄ = (32π/3)/(8π) = <b>4/3</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 3/4</b>: is the reciprocal; a slip in dividing.</li>
<li><b>(c) 5/4</b> and <b>(d) 4/5</b>: do not follow from the integrals.</li></ul>
<div class="tip">Sense check: the solid is thin at the centre and tall (z = 4) at the rim, so its centroid lies above z = 1 but below z = 2; only 4/3 fits.</div><div class="key">General formula: z̄ = ∭z dV / ∭dV. In cylindrical coordinates dV = r dr dθ dz; integrate z first (from 0 to r²) to get z²/2 = r⁴/2.</div>` },

{ id: "2024-14", year: 2024, no: 14, subject: "maths", topic: "Double integral by substitution",
q: `What is the integral ∫<sub>1</sub><sup>2</sup> ∫<sub>1/y</sub><sup>y</sup> √(y/x) e<sup>√(xy)</sup> dx dy ?`,
opts: ["2e(e + 2)", "2e(1 − e)", "2e(e − 2)", "2e(1 + e)"], ans: 2,
analysis: `<h3>Answer: (c) 2e(e − 2)</h3><p>Inner integral: put u = √(xy), so x = u²/y and dx = (2u/y) du. Then √(y/x) = y/u, and the integrand becomes (y/u) e<sup>u</sup> (2u/y) du = 2e<sup>u</sup> du. Limits: x = 1/y → u = 1; x = y → u = y.</p>
<p>Inner = 2(e<sup>y</sup> − e). Outer: ∫<sub>1</sub><sup>2</sup> 2(e<sup>y</sup> − e) dy = 2[(e² − e) − e] = 2(e² − 2e) = <b>2e(e − 2)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 2e(e + 2)</b>: sign error on the −e terms.</li>
<li><b>(b) 2e(1 − e)</b>: is negative, but the integrand is positive everywhere.</li>
<li><b>(d) 2e(1 + e)</b>: does not follow from the substitution.</li></ul>
<div class="tip">Numerically: 2e(e − 2) = 2 × 2.718 × 0.718 ≈ 3.90. A positive, moderate value, as expected.</div>` },

{ id: "2024-15", year: 2024, no: 15, subject: "maths", topic: "Fourier transform of a sine pulse",
q: `Fourier transform of f(t) = sin at, |t| ≤ π/a; 0, |t| &gt; π/a is`,
opts: ["2j sin (πω/a)/(−a<sup>2</sup> − ω<sup>2</sup>)", "j sin (πω/a)/(−a<sup>2</sup> − ω<sup>2</sup>)", "j sin (πω/a)/(a<sup>2</sup> − ω<sup>2</sup>)", "2aj sin (πω/a)/(ω<sup>2</sup> − a<sup>2</sup>)"], ans: 3,
analysis: `<h3>Answer: (d) 2aj sin(πω/a)/(ω² − a²)</h3><p>F(ω) = ∫<sub>−π/a</sub><sup>π/a</sup> sin(at) e<sup>−jωt</sup> dt. Since sin at is odd, only the −j sin ωt part survives:</p>
<p>F(ω) = −2j ∫<sub>0</sub><sup>π/a</sup> sin(at) sin(ωt) dt = −j ∫<sub>0</sub><sup>π/a</sup> [cos(a − ω)t − cos(a + ω)t] dt.</p>
<p>With sin(π ∓ πω/a) = ± sin(πω/a) terms this gives −j sin(πω/a)[1/(a − ω) + 1/(a + ω)] = −2aj sin(πω/a)/(a² − ω²) = <b>2aj sin(πω/a)/(ω² − a²)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: no factor a, and the denominator −(a² + ω²) has no zeros; but F must stay finite at ω = a, where the 0/0 form gives the pulse's energy at its own frequency.</li>
<li><b>(b)</b>: same denominator problem, and missing 2a.</li>
<li><b>(c)</b>: missing the factor 2a, and the sign is reversed.</li></ul>
<div class="key">The transform is purely imaginary because f is real and odd. Real and even signals have real transforms.</div>` },

{ id: "2024-16", year: 2024, no: 16, subject: "reasoning", topic: "Logical deduction",
q: `Brianna, Ryan, Tyler, and Ashley were recently elected as the new class officers (president, vice president, secretary, treasurer) of the sophomore class at Summit College. From the following clues, determine which position each holds.<ol><li>Ashley is younger than the president but older than the treasurer.</li><li>Brianna and the secretary are both the same age, and they are the youngest members of the group.</li><li>Tyler and the secretary are next door neighbors.</li></ol>`,
opts: ["Tyler is the president, Ashley is the vice president, Ryan is the secretary, and Brianna is the treasurer.", "Tyler is the president, Ashley is the vice president, Brianna is the secretary, and Ryan is the treasurer.", "Tyler is the president, Ryan is the vice president, Ashley is the secretary, and Brianna is the treasurer.", "Tyler is the president, Ryan is the vice president, Brianna is the secretary, and Ashley is the treasurer."], ans: 0,
analysis: `<h3>Answer: (a)</h3><ul><li>Clue 1: Ashley is neither president nor treasurer. She is older than someone, so she is not the youngest; by clue 2 the secretary is youngest, so Ashley is not secretary either. <b>Ashley = vice president.</b></li><li>Clue 2: Brianna is not the secretary (she and the secretary are two people).</li><li>Clue 3: Tyler is not the secretary. So <b>Ryan = secretary</b>.</li><li>Brianna is among the youngest, but the president is older than Ashley, so Brianna is not president. <b>Brianna = treasurer</b>, <b>Tyler = president</b>.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: makes Brianna secretary, contradicting clue 2.</li>
<li><b>(c)</b>: makes Ashley secretary, but she is older than the treasurer, so she cannot be the youngest.</li>
<li><b>(d)</b>: makes Ashley treasurer, contradicting clue 1.</li></ul>
<div class="key">All four options agree that Tyler is president, so the question reduces to placing the other three. Use the clue that excludes most first.</div>` },

{ id: "2024-17", year: 2024, no: 17, subject: "reasoning", topic: "Shortest route (Hamiltonian circuit)",
q: `You need to buy groceries at the supermarket, deposit a cheque at the credit union, and purchase a book at the bookstore. You can complete the errands in any order; however, you must start and end at your home. The driving time, in minutes, between each of these locations is given in the following figure.<br><img class="fig" src="img/2024-17.png" alt="Graph: Home–Credit Union 8.5, Home–Bookstore 7, Home–Supermarket 11, Credit Union–Bookstore 6, Credit Union–Supermarket 9, Bookstore–Supermarket 4.5.">What is the route whose total driving time is less than 30 minutes ?`,
opts: ["home, bookstore, credit union, supermarket, home", "home, supermarket, bookstore, credit union, home", "home, bookstore, supermarket, credit union, home", "home, supermarket, credit union, bookstore, home"], ans: 2,
analysis: `<h3>Answer: (c) home, bookstore, supermarket, credit union, home</h3><table><tr><th>Option</th><th>Legs</th><th>Total</th></tr><tr><td>(a) H–B–CU–S–H</td><td>7 + 6 + 9 + 11</td><td>33</td></tr><tr><td>(b) H–S–B–CU–H</td><td>11 + 4.5 + 6 + 8.5</td><td>30</td></tr><tr><td>(c) H–B–S–CU–H</td><td>7 + 4.5 + 9 + 8.5</td><td><b>29</b></td></tr><tr><td>(d) H–S–CU–B–H</td><td>11 + 9 + 6 + 7</td><td>33</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: 33 minutes.</li>
<li><b>(b)</b>: exactly 30 minutes, not less than 30.</li>
<li><b>(d)</b>: 33 minutes (it is route (a) reversed).</li></ul>
<div class="key">This is a travelling-salesman problem on 4 places: (4 − 1)!/2 = 3 distinct circuits, with totals 33, 30 and 29. The optimum is 29.</div><div class="tip">Method for small problems: list every circuit (the brute-force method), or use the nearest-neighbour heuristic: from Home go to the nearest place (Bookstore 7), then the nearest unvisited (Supermarket 4.5), then Credit Union (9), then Home (8.5) = 29.</div>` },

{ id: "2024-18", year: 2024, no: 18, subject: "reasoning", topic: "Logical deduction",
q: `Each of four siblings (Anita, Tony, Maria and Jose) is given ₹5000 to invest in the stock market. Each chooses a different stock. One chooses a utility stock, another an automotive stock, another a technology stock, and the other an oil stock.<ol><li>Anita and the owner of the utility stock purchased their shares through an online brokerage, whereas Tony and the owner of the automotive stock did not.</li><li>The gain in value of Maria's stock is twice the gain in value of the automotive stock.</li><li>The technology stock is traded on NASDAQ, whereas the stock that Tony bought is traded on the New York Stock Exchange.</li></ol>From the above clues, match the name of the sibling and stock bought.`,
opts: ["Maria: the utility stock; Jose: the automotive stock; Anita: the technology stock; Tony: the oil stock", "Maria: the utility stock; Anita: the automotive stock; Jose: the technology stock; Tony: the oil stock", "Maria: the utility stock; Tony: the automotive stock; Anita: the technology stock; Jose: the oil stock", "Jose: the utility stock; Maria: the automotive stock; Anita: the technology stock; Tony: the oil stock"], ans: 0,
analysis: `<h3>Answer: (a)</h3><ul><li>Clue 1: Anita is not utility; she used online brokerage and the automotive owner did not, so Anita is not automotive. Tony did not use online, so he is neither utility (online) nor, as a separate person, automotive.</li><li>Clue 2: Maria is not automotive.</li><li>Clue 3: Tony is not technology. So <b>Tony = oil</b>.</li><li>Anita: not utility, not automotive → <b>technology</b>. Maria: not automotive → <b>utility</b>. <b>Jose = automotive</b>.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: gives Anita the automotive stock; but she bought online and the automotive owner did not.</li>
<li><b>(c)</b>: gives Tony the automotive stock; clue 1 names Tony and the automotive owner as two different people.</li>
<li><b>(d)</b>: gives Maria the automotive stock; clue 2 compares Maria with the automotive owner, so they differ.</li></ul>
<div class="tip">"X and the owner of Y" always means X is not the owner of Y. Such phrases are the main source of eliminations in these puzzles.</div>` },

{ id: "2024-19", year: 2024, no: 19, subject: "reasoning", topic: "Handshakes (combinations)",
q: `If six people greet each other at a meeting by shaking hands with one another, how many handshakes will take place ?`,
opts: ["14", "16", "15", "18"], ans: 2,
analysis: `<h3>Answer: (c) 15</h3><p>Each handshake is a pair of people: <sup>6</sup>C<sub>2</sub> = 6 × 5/2 = <b>15</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 14</b> and <b>(b) 16</b>: off by one; no counting rule gives them.</li>
<li><b>(d) 18</b>: is 6 × 3, an incorrect count.</li></ul>
<div class="key">General: n people → n(n − 1)/2 handshakes. Same formula: number of matches in a round-robin league, or number of lines joining n points with no three collinear. Without halving, n(n − 1) = 30 counts each handshake twice.</div><div class="tip">Count step by step: the first person shakes 5 hands, the next 4 new ones, then 3, 2, 1: 5 + 4 + 3 + 2 + 1 = 15.</div>` },

{ id: "2024-20", year: 2024, no: 20, subject: "reasoning", topic: "Forming an equation",
q: `Anuhya picks a number. She doubles the number, squares the result, divides the square by 3, subtracts 30 from the quotient, and gets 18. What are the possible numbers that Anuhya could have picked ?`,
opts: ["6 or −6", "16 or −16", "26 or −26", "36 or −36"], ans: 0,
analysis: `<h3>Answer: (a) 6 or −6</h3><p>Let the number be x: (2x)²/3 − 30 = 18 → 4x²/3 = 48 → x² = 36 → <b>x = ±6</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) ±16</b>: (32)²/3 − 30 = 311.3, not 18.</li>
<li><b>(c) ±26</b>: gives 871.3.</li>
<li><b>(d) ±36</b>: is x² itself, not x.</li></ul>
<div class="tip">Work backwards: 18 + 30 = 48; × 3 = 144; √144 = ±12; ÷ 2 = ±6.</div><div class="key">A squared quantity always gives two answers, ±. Options that pair a number with its negative are a hint that the equation involves a square.</div><div class="tip">Check: 6 → 12 → 144 → 48 → 18 ✔; and −6 → −12 → 144 → 48 → 18 ✔.</div><div class="key">Translate each word step into algebra in order: "doubles" → 2x, "squares the result" → (2x)², "divides by 3" → (2x)²/3, "subtracts 30" → (2x)²/3 − 30. Order matters: squaring before doubling would give 2x², a different equation with x² = 72.</div>` },

{ id: "2024-21", year: 2024, no: 21, subject: "reasoning", topic: "Diophantus' age",
q: `Nothing is known about the personal life of the ancient Greek mathematician Diophantus except for the information in the following :<br>"Diophantus passed 1/6 of his life in childhood, 1/12 in youth, and 1/7 more as a bachelor. Five years after his marriage was born a son who died four years before his father, at 1/2 his father's (final) age." How old was Diophantus when he died ?`,
opts: ["64", "54", "74", "84"], ans: 3,
analysis: `<h3>Answer: (d) 84</h3><p>Let his age be x: x/6 + x/12 + x/7 + 5 + x/2 + 4 = x.</p>
<p>LCM 84: 14x + 7x + 12x + 42x = 75x, so 75x/84 + 9 = x → 9x/84 = 9 → <b>x = 84</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 64</b>, <b>(b) 54</b> and <b>(c) 74</b>: none is divisible by 6, 12 and 7 together; the fractions of his life must be whole numbers of years.</li></ul>
<div class="tip">Shortcut: the age must be a multiple of LCM(6, 12, 7, 2) = 84. Only 84 qualifies. Life story: childhood 14, youth 7, bachelor 12, married at 33, son born at 38, son died at 42 when Diophantus was 80, he died at 84.</div>` },

{ id: "2024-22", year: 2024, no: 22, subject: "reasoning", topic: "Number trick",
q: `Select a two-digit number between 50 and 100. Add 83 to your number. From this number form a new number by adding the digit in the hundreds place to the number formed by the other two digits (the digits in the tens place and the ones place). Now subtract this newly formed number from your original number, to arrive at the final result. What is the final result ?`,
opts: ["16", "26", "36", "46"], ans: 0,
analysis: `<h3>Answer: (a) 16</h3><p>Take n between 50 and 99. n + 83 is between 133 and 182, so its hundreds digit is 1 and the last two digits form n + 83 − 100 = n − 17.</p>
<p>New number = 1 + (n − 17) = n − 16. Original − new = n − (n − 16) = <b>16</b>, whatever n is.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 26</b>, <b>(c) 36</b> and <b>(d) 46</b>: try any example: n = 60 → 143 → 1 + 43 = 44 → 60 − 44 = 16.</li></ul>
<div class="key">Why it works: adding 83 and then "moving" the hundreds digit is the same as adding 83 − 100 + 1 = −16, i.e. subtracting 16.</div><div class="tip">For questions that say "select any number", just try one value; the answer must be the same for every choice, so a single test is enough.</div>` },

{ id: "2024-23", year: 2024, no: 23, subject: "reasoning", topic: "Three-set Venn diagram",
q: `An activities director for a cruise ship has surveyed 240 passengers. Of the 240 passengers, 135 like swimming, 80 like swimming and dancing, 150 like dancing, 40 like swimming and games, 65 like games, 25 like dancing and games, 15 like all three activities. How many passengers like exactly two of the three types of activities ?`,
opts: ["220", "20", "30", "100"], ans: 3,
analysis: `<h3>Answer: (d) 100</h3><p>"Exactly two" = sum of the pairwise counts − 3 × (all three):</p>
<ul><li>Swimming and dancing only: 80 − 15 = 65</li><li>Swimming and games only: 40 − 15 = 25</li><li>Dancing and games only: 25 − 15 = 10</li></ul>
<p>Total = 65 + 25 + 10 = <b>100</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 220</b>: is the number liking at least one activity: 135 + 150 + 65 − 80 − 40 − 25 + 15 = 220.</li>
<li><b>(b) 20</b>: is the number liking none (240 − 220).</li>
<li><b>(c) 30</b>: does not match any region.</li></ul>
<div class="tip">Fill a three-circle Venn diagram from the centre outwards: all three first, then the pair-only regions, then the single-only regions.</div>` },

{ id: "2024-24", year: 2024, no: 24, subject: "reasoning", topic: "Euler paths (bridges)",
q: `The following map shows the 10 bridges and 3 islands between the suburbs of North Bay and South Bay. During your morning workout, you decide to jog over each bridge exactly once. Which one of the following statements is correct ?<br><img class="fig" src="img/2024-24.png" alt="Map: North Bay at top, South Bay at bottom, three islands between them joined by bridges A to J.">`,
opts: ["You want to start from North Bay and that your workout concludes after you jog over the 'D' bridge.", "You want to start from North Bay and that your workout concludes after you jog over the 'E' bridge.", "You want to start from North Bay and that your workout concludes after you jog over the 'H' bridge.", "You want to start from North Bay and that your workout concludes after you jog over the 'G' bridge."], ans: 1,
analysis: `<h3>Answer: (b) E (UPSC's key accepts (b) or (d))</h3><p>Treat each land mass as a vertex and each bridge as an edge, then count bridges at each:</p>
<table><tr><th>Land mass</th><th>Bridges</th><th>Degree</th></tr><tr><td>North Bay</td><td>J, I, H</td><td>3 (odd)</td></tr><tr><td>South Bay</td><td>A, B, C, D</td><td>4</td></tr><tr><td>Left island</td><td>J, A, B, F</td><td>4</td></tr><tr><td>Middle island</td><td>I, C, F, G, E</td><td>5 (odd)</td></tr><tr><td>Right island</td><td>H, D, G, E</td><td>4</td></tr></table>
<p>Exactly two land masses have odd degree, so an <b>Euler path</b> exists. It must start at one odd vertex (North Bay) and end at the other (the <b>middle island</b>). The last bridge must therefore lead onto the middle island: I, C, F, G or E.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) D</b>: joins the right island and South Bay, both of even degree; the path cannot end there.</li>
<li><b>(c) H</b>: joins North Bay and the right island; ending there is impossible because the walk started at North Bay and the end must be the middle island.</li>
<li><b>(d) G</b>: also valid, since G joins the right and middle islands. UPSC's final key accepts both (b) and (d).</li></ul>
<div class="key">Euler's theorem: a connected graph has an Euler circuit if every vertex has even degree, and an Euler path (not a circuit) if exactly two vertices have odd degree; the path must start at one and end at the other.</div>` },

{ id: "2024-25", year: 2024, no: 25, subject: "reasoning", topic: "Plurality voting",
q: `Fifty people were asked to rank their preferences of five varieties of chocolate candy, using 1 for their favorite and 5 for their least favorite. The results are shown in the table below.<table><tr><th></th><th colspan="6">Rankings</th></tr><tr><td>Caramel center</td><td>5</td><td>4</td><td>4</td><td>4</td><td>2</td><td>4</td></tr><tr><td>Vanilla center</td><td>1</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr><tr><td>Almond center</td><td>2</td><td>3</td><td>2</td><td>1</td><td>3</td><td>3</td></tr><tr><td>Toffee center</td><td>4</td><td>1</td><td>1</td><td>3</td><td>4</td><td>2</td></tr><tr><td>Solid chocolate</td><td>3</td><td>2</td><td>3</td><td>2</td><td>1</td><td>1</td></tr><tr><td>Number of voters</td><td>17</td><td>11</td><td>9</td><td>8</td><td>3</td><td>2</td></tr></table>According to the table (see the fifth column), three voters ranked solid chocolate first, caramel centers second, almond centers third, toffee centers fourth, and vanilla centers fifth. According to this table, which variety of candy would win the taste test using the plurality voting system ?`,
opts: ["Almond centers", "Vanilla centers", "Toffee centers", "Caramel centers"], ans: 2,
analysis: `<h3>Answer: (c) Toffee centers</h3><p><b>Plurality</b>: count only first-place votes; the most wins (no majority needed).</p>
<table><tr><th>Candy</th><th>First-place votes</th></tr><tr><td>Toffee</td><td>11 + 9 = <b>20</b></td></tr><tr><td>Vanilla</td><td>17</td></tr><tr><td>Almond</td><td>8</td></tr><tr><td>Solid chocolate</td><td>3 + 2 = 5</td></tr><tr><td>Caramel</td><td>0</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) Almond</b>: only 8 first places, although it is ranked high by many (it would do well under a Borda count).</li>
<li><b>(b) Vanilla</b>: 17 first places, but 33 voters ranked it last.</li>
<li><b>(d) Caramel</b>: no first-place votes at all.</li></ul>
<div class="key">Voting methods (Aufmann, Mathematical Excursions): plurality, Borda count (see Q26), plurality with elimination, pairwise comparison. Each can pick a different winner from the same ballots.</div>` }
);
