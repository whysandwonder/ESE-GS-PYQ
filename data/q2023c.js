// ESE 2023 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q51–75
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2023-51", year: 2023, no: 51, subject: "design", topic: "Isometric: non-isometric lines",
q: `Which one of the following methods is used when the non-isometric lines or their ends lie in isometric planes ?`,
opts: ["Co-ordinate method", "Box method", "Offset method", "Visual-ray method"], ans: 1,
analysis: `<h3>Answer: (b) Box method</h3><p>Non-isometric lines (lines not parallel to the isometric axes) cannot be measured true length in isometric. They are drawn by locating their two ends and joining them. When those ends lie on the faces of an enclosing rectangular box (isometric planes), the <b>box method</b> is used: draw the box, mark the end points on its faces, and join them.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Co-ordinate method</b> and <b>(c) Offset method</b>: used when points do <b>not</b> lie in isometric planes; each point is located by three measurements (offsets) parallel to the isometric axes from a reference. Useful for irregular curves.</li>
<li><b>(d) Visual-ray method</b>: a perspective-drawing method (rays from the station point through the picture plane), not an isometric method.</li></ul>
<div class="key">Example: an isometric view of a pyramid. Enclose it in a box; the apex lies on the top face of the box, the base corners on the bottom face; join apex to corners.</div>` },

{ id: "2023-52", year: 2023, no: 52, subject: "maths", topic: "Matrix powers via eigenvalues",
q: `If X<sub>1</sub> = [1, 1, 1]<sup>T</sup>, X<sub>2</sub> = [1, 0, 1]<sup>T</sup>, and X<sub>3</sub> = [0, 1, 1]<sup>T</sup> are the eigenvectors of the matrix A = [[2, 1, −1], [3, 2, −3], [3, 1, −2]], then A<sup>5</sup> =`,
opts: ["[[32, 31, −31], [33, 32, −33], [33, 31, −32]]", "[[32, 31, −33], [33, 32, −31], [33, 31, −32]]", "[[32, 31, −32], [33, 32, −33], [33, 31, −31]]", "[[32, 33, −31], [33, 32, −33], [33, 31, 32]]"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p><b>Eigenvalues</b> from AX = λX: AX<sub>1</sub> = (2, 2, 2) → λ<sub>1</sub> = 2; AX<sub>2</sub> = (1, 0, 1) → λ<sub>2</sub> = 1; AX<sub>3</sub> = (0, −1, −1) → λ<sub>3</sub> = −1.</p>
<p><b>Short cut</b> (Cayley–Hamilton): A<sup>5</sup> = aA² + bA + cI, where λ<sup>5</sup> = aλ² + bλ + c holds for λ = 2, 1, −1: 32 = 4a + 2b + c, 1 = a + b + c, −1 = a − b + c. So b = 1, c = −a, and 3a = 30, giving a = 10, c = −10.</p>
<p>A² = [[4, 3, −3], [3, 4, −3], [3, 3, −2]], so A<sup>5</sup> = 10A² + A − 10I = <b>[[32, 31, −31], [33, 32, −33], [33, 31, −32]]</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: wrong third column in rows 1 and 2 (−33, −31 swapped).</li>
<li><b>(c)</b>: wrong third column (−32 and −31 in rows 1 and 3).</li>
<li><b>(d)</b>: 33 in row 1, column 2 and +32 in row 3; its trace would not equal 2<sup>5</sup> + 1 + (−1)<sup>5</sup> = 32.</li></ul>
<div class="tip">Quick check: trace of A<sup>5</sup> = sum of eigenvalues to the fifth = 32 + 1 − 1 = 32. Option (a): 32 + 32 − 32 = 32 ✔. Options (b) and (c) also pass, so check one entry directly.</div>` },

{ id: "2023-53", year: 2023, no: 53, subject: "maths", topic: "Quadratic form to canonical form",
q: `The equation for the ellipsoid of inertia of a solid body is P(x) ≡ 4x<sub>1</sub><sup>2</sup> + 4x<sub>2</sub><sup>2</sup> + x<sub>3</sub><sup>2</sup> − 2x<sub>1</sub>x<sub>2</sub>. What is the standard form in terms of a new orthogonal set of axes O{y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub>} ?`,
opts: ["y<sub>1</sub><sup>2</sup> − 3y<sub>2</sub><sup>2</sup> + 3y<sub>3</sub><sup>2</sup>", "y<sub>1</sub><sup>2</sup> + 5y<sub>2</sub><sup>2</sup> + 3y<sub>3</sub><sup>2</sup>", "y<sub>1</sub><sup>2</sup> − 5y<sub>2</sub><sup>2</sup> + 3y<sub>3</sub><sup>2</sup>", "y<sub>1</sub><sup>2</sup> + 5y<sub>2</sub><sup>2</sup> − 3y<sub>3</sub><sup>2</sup>"], ans: 1,
analysis: `<h3>Answer: (b) y<sub>1</sub><sup>2</sup> + 5y<sub>2</sub><sup>2</sup> + 3y<sub>3</sub><sup>2</sup></h3><p>The matrix of the form (half the cross-term coefficient off the diagonal) is [[4, −1, 0], [−1, 4, 0], [0, 0, 1]]. Its eigenvalues are 1 (from x<sub>3</sub>) and those of [[4, −1], [−1, 4]]: 4 ± 1 = <b>5 and 3</b>. In the principal axes, the form becomes 1·y<sub>1</sub>² + 5y<sub>2</sub>² + 3y<sub>3</sub>².</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(c)</b> and <b>(d)</b> all contain a negative coefficient. The matrix is positive definite (all eigenvalues positive), as it must be for an ellipsoid of inertia, so no coefficient can be negative.</li></ul>
<div class="tip">Checks: the sum of eigenvalues = trace = 4 + 4 + 1 = 9 = 1 + 5 + 3 ✔; product = determinant = (16 − 1) × 1 = 15 = 1 × 5 × 3 ✔.</div>` },

{ id: "2023-54", year: 2023, no: 54, subject: "maths", topic: "Repeated roots in linear ODEs",
q: `What is the general solution of a homogeneous differential equation with the characteristic equation ?<br>λ<sup>3</sup>(λ + 4)<sup>2</sup>(λ<sup>2</sup> + 2λ + 5)<sup>2</sup> = 0`,
opts: ["y(x) = c<sub>1</sub> + c<sub>2</sub>x + c<sub>3</sub>x<sup>2</sup> + c<sub>4</sub>e<sup>−4x</sup> + c<sub>5</sub>xe<sup>4x</sup> + e<sup>x</sup>{c<sub>6</sub> cos 2x + c<sub>7</sub> sin 2x + c<sub>8</sub>x cos 2x + c<sub>9</sub>x sin 2x}", "y(x) = c<sub>1</sub> + c<sub>2</sub>x + c<sub>3</sub>x<sup>2</sup> + c<sub>4</sub>e<sup>−4x</sup> + c<sub>5</sub>xe<sup>−4x</sup> + e<sup>−x</sup>{c<sub>6</sub> cos 2x + c<sub>7</sub> sin 2x} + e<sup>x</sup>{c<sub>8</sub>x cos 2x + c<sub>9</sub>x sin 2x}", "y(x) = c<sub>1</sub> + c<sub>2</sub>x + c<sub>3</sub>x<sup>2</sup> + c<sub>4</sub>e<sup>−4x</sup> + c<sub>5</sub>xe<sup>4x</sup> + e<sup>x</sup>{c<sub>6</sub> cos 2x + c<sub>7</sub> sin 2x} + e<sup>−x</sup>{c<sub>8</sub>x cos 2x + c<sub>9</sub>x sin 2x}", "y(x) = c<sub>1</sub> + c<sub>2</sub>x + c<sub>3</sub>x<sup>2</sup> + c<sub>4</sub>e<sup>−4x</sup> + c<sub>5</sub>xe<sup>−4x</sup> + e<sup>−x</sup>{c<sub>6</sub> cos 2x + c<sub>7</sub> sin 2x + c<sub>8</sub>x cos 2x + c<sub>9</sub>x sin 2x}"], ans: 3,
analysis: `<h3>Answer: (d)</h3><p>Read each factor (order 3 + 2 + 4 = 9, so nine constants):</p>
<table><tr><th>Factor</th><th>Roots</th><th>Terms</th></tr><tr><td>λ³</td><td>0, three times</td><td>c<sub>1</sub> + c<sub>2</sub>x + c<sub>3</sub>x²</td></tr><tr><td>(λ + 4)²</td><td>−4, twice</td><td>(c<sub>4</sub> + c<sub>5</sub>x)e<sup>−4x</sup></td></tr><tr><td>(λ² + 2λ + 5)²</td><td>−1 ± 2i, twice</td><td>e<sup>−x</sup>[(c<sub>6</sub> + c<sub>8</sub>x) cos 2x + (c<sub>7</sub> + c<sub>9</sub>x) sin 2x]</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: has xe<sup>+4x</sup> (root +4) and e<sup>+x</sup> (real part +1); both signs are wrong.</li>
<li><b>(b)</b>: puts the repeated complex terms under e<sup>+x</sup> instead of e<sup>−x</sup>.</li>
<li><b>(c)</b>: has xe<sup>+4x</sup> and e<sup>+x</sup> for the first complex pair.</li></ul>
<div class="key">Rule: a root r of multiplicity m gives e<sup>rx</sup>(c<sub>1</sub> + c<sub>2</sub>x + … + c<sub>m</sub>x<sup>m−1</sup>); a complex pair α ± iβ gives e<sup>αx</sup>(cos βx, sin βx), each multiplied by the same powers of x.</div>` },

{ id: "2023-55", year: 2023, no: 55, subject: "maths", topic: "Initial value problem",
q: `What is the initial value if<br>d<sup>2</sup>y/dx<sup>2</sup> + 4 dy/dx + 3y = e<sup>−x</sup>, with y(0) = 2, (dy/dx)<sub>x=0</sub> = 1 ?`,
opts: ["y(x) = (13/4 + x/2)e<sup>−x</sup> − (5/4)e<sup>−3x</sup>", "y(x) = (13/4 + x/2)e<sup>−3x</sup> − (5/4)e<sup>−x</sup>", "y(x) = (13/4 + x/2)e<sup>−x</sup> + (5/4)e<sup>−3x</sup>", "y(x) = (13/4 − x/2)e<sup>−x</sup> − (5/4)e<sup>−3x</sup>"], ans: 0,
analysis: `<h3>Answer: (a) y = (13/4 + x/2)e<sup>−x</sup> − (5/4)e<sup>−3x</sup></h3><p><b>Complementary function</b>: m² + 4m + 3 = 0 gives m = −1, −3, so y<sub>c</sub> = Ae<sup>−x</sup> + Be<sup>−3x</sup>.</p>
<p><b>Particular integral</b>: e<sup>−x</sup> is in y<sub>c</sub>, so y<sub>p</sub> = x e<sup>−x</sup>/f′(−1) = x e<sup>−x</sup>/(2(−1) + 4) = (x/2)e<sup>−x</sup>.</p>
<p><b>Constants</b>: y(0) = A + B = 2; y′(0) = −A − 3B + 1/2 = 1, so A + 3B = −1/2. Then B = −5/4 and A = 13/4.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: swaps the exponentials; the x-term must go with e<sup>−x</sup>, the forcing term.</li>
<li><b>(c)</b>: +5/4 gives y(0) = 13/4 + 5/4 = 4.5, not 2.</li>
<li><b>(d)</b>: −x/2 gives the wrong sign for the particular integral; substituting fails.</li></ul>
<div class="tip">Check (a): y(0) = 13/4 − 5/4 = 2 ✔; y′(0) = −13/4 + 1/2 + 15/4 = 1 ✔.</div>` },

{ id: "2023-56", year: 2023, no: 56, subject: "maths", topic: "Laplace transform: change of scale",
q: `If ℒ{f(t)} = e<sup>−3s</sup>(1 − 2s)/(2s<sup>2</sup> − s + 1), then ℒ{f(3t)} =`,
opts: ["e<sup>−s</sup>(−3 − 2s)/(2s<sup>2</sup> − 3s + 9)", "e<sup>−s</sup>(3 + 2s)/(2s<sup>2</sup> − 3s + 9)", "e<sup>−s</sup>(3 − s)/(2s<sup>2</sup> − 3s + 9)", "e<sup>−s</sup>(3 − 2s)/(2s<sup>2</sup> − 3s + 9)"], ans: 3,
analysis: `<h3>Answer: (d) e<sup>−s</sup>(3 − 2s)/(2s² − 3s + 9)</h3><p><b>Change of scale</b>: ℒ{f(at)} = (1/a) F(s/a). With a = 3:</p>
<p>(1/3) · e<sup>−s</sup>(1 − 2s/3) / (2s²/9 − s/3 + 1) = (1/3) · e<sup>−s</sup> · ((3 − 2s)/3) · 9/(2s² − 3s + 9) = <b>e<sup>−s</sup>(3 − 2s)/(2s² − 3s + 9)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(b)</b>: wrong sign on the 3 or on the 2s in the numerator.</li>
<li><b>(c)</b>: (3 − s) forgets that 2s/3 × 3 = 2s.</li></ul>
<div class="key">The exponent also scales: e<sup>−3s</sup> becomes e<sup>−3(s/3)</sup> = e<sup>−s</sup>. All four options get that right, so the numerator decides.</div><div class="tip">Related rules: first shifting ℒ{e<sup>at</sup>f(t)} = F(s − a); second shifting ℒ{f(t − a)u(t − a)} = e<sup>−as</sup>F(s) (here e<sup>−3s</sup> shows f is a delayed function).</div>` },

{ id: "2023-57", year: 2023, no: 57, subject: "maths", topic: "Integro-differential equation (Laplace)",
q: `What is the solution of the equation<br>d<sup>2</sup>y/dt<sup>2</sup> + y(t) = ∫<sub>0</sub><sup>t</sup> sin τ y(t − τ) dτ,<br>subject to the initial conditions y(0) = 1 and (dy/dt)<sub>t=0</sub> = 0 ?`,
opts: ["y(t) = ½(1 − cos √2 t), for t &gt; 0", "y(t) = ½(1 + cos √2 t), for t &gt; 0", "y(t) = ½(−1 − cos √2 t), for t &gt; 0", "y(t) = −½(1 − cos √2 t), for t &gt; 0"], ans: 1,
analysis: `<h3>Answer: (b) y(t) = ½(1 + cos √2 t)</h3><p>The integral is the convolution (sin * y), whose transform is Y/(s² + 1). Taking Laplace transforms:</p>
<p>s²Y − s·1 − 0 + Y = Y/(s² + 1) → Y[(s² + 1) − 1/(s² + 1)] = s → Y = s(s² + 1)/[(s² + 1)² − 1] = (s² + 1)/[s(s² + 2)].</p>
<p>Partial fractions: (s² + 1)/[s(s² + 2)] = (1/2)/s + (1/2)s/(s² + 2), so <b>y = ½ + ½ cos √2 t</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: gives y(0) = 0, not 1.</li>
<li><b>(c)</b>: gives y(0) = −1.</li>
<li><b>(d)</b>: gives y(0) = 0.</li></ul>
<div class="tip">Checking the initial condition y(0) = 1 alone rules out every option except (b).</div>` },

{ id: "2023-58", year: 2023, no: 58, subject: "maths", topic: "Gamma function",
q: `The nth coefficient of a series is given by a<sub>n</sub> = [1 . 5 . 9 . 13 … (4n + 1)]/2<sup>n</sup>. What is the expression a<sub>n</sub> in terms of the gamma function ?`,
opts: ["a<sub>n</sub> = 2<sup>n+2</sup> Γ(n + 5/4)/Γ(1/4)", "a<sub>n</sub> = 2<sup>n+1</sup> Γ(n + 5/4)/Γ(1/4)", "a<sub>n</sub> = 2<sup>n</sup> Γ(n + 5/4)/Γ(1/4)", "a<sub>n</sub> = 2<sup>n+3</sup> Γ(n + 5/4)/Γ(1/4)"], ans: 0,
analysis: `<h3>Answer: (a) a<sub>n</sub> = 2<sup>n+2</sup> Γ(n + 5/4)/Γ(1/4)</h3><p>The product has n + 1 factors (4k + 1 for k = 0 … n). Take 4 out of each: ∏(4k + 1) = 4<sup>n+1</sup> ∏(k + 1/4).</p>
<p>Using Γ(x + 1) = xΓ(x) repeatedly: ∏<sub>k=0</sub><sup>n</sup>(k + 1/4) = Γ(n + 5/4)/Γ(1/4).</p>
<p>So a<sub>n</sub> = 4<sup>n+1</sup> Γ(n + 5/4) / [2<sup>n</sup> Γ(1/4)] = 2<sup>2n+2−n</sup> Γ(n + 5/4)/Γ(1/4) = <b>2<sup>n+2</sup> Γ(n + 5/4)/Γ(1/4)</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 2<sup>n+1</sup></b>, <b>(c) 2<sup>n</sup></b> and <b>(d) 2<sup>n+3</sup></b>: wrong power of 2.</li></ul>
<div class="tip">Check with n = 0: a<sub>0</sub> = 1 (one factor, 1). Formula: 2² Γ(5/4)/Γ(1/4) = 4 × (1/4) = 1 ✔. Only (a) passes.</div><div class="key">Gamma facts: Γ(n + 1) = n! for whole n; Γ(1/2) = √π; Γ(x)Γ(1 − x) = π/sin πx, so Γ(1/4)Γ(3/4) = π√2.</div>` },

{ id: "2023-59", year: 2023, no: 59, subject: "maths", topic: "Fourier series",
q: `Fourier series representation of f(x) = x + 1 for −1 ≤ x ≤ 1 is`,
opts: ["f(x) = 1 − (2/π) Σ<sub>n=1</sub><sup>∞</sup> ((−1)<sup>n+1</sup>/n) sin nπx", "f(x) = −1 − (2/π) Σ<sub>n=1</sub><sup>∞</sup> ((−1)<sup>n+1</sup>/n) sin nπx", "f(x) = 1 + (2/π) Σ<sub>n=1</sub><sup>∞</sup> ((−1)<sup>n+1</sup>/n) sin nπx", "f(x) = −1 + (2/π) Σ<sub>n=1</sub><sup>∞</sup> ((−1)<sup>n+1</sup>/n) sin nπx"], ans: 2,
analysis: `<h3>Answer: (c) f(x) = 1 + (2/π) Σ ((−1)<sup>n+1</sup>/n) sin nπx</h3><p>Period 2 (L = 1). Split f into the even part 1 and the odd part x.</p>
<ul><li>Constant: a<sub>0</sub>/2 = average of f = <b>1</b>. The cosine coefficients of x are zero (x is odd).</li>
<li>b<sub>n</sub> = ∫<sub>−1</sub><sup>1</sup> x sin nπx dx = 2(−1)<sup>n+1</sup>/(nπ).</li></ul>
<p>So f(x) = 1 + (2/π) Σ (−1)<sup>n+1</sup> sin nπx / n.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: wrong sign of the series; at x = 0.5 it would give values below 1, but f(0.5) = 1.5.</li>
<li><b>(b)</b> and <b>(d)</b>: constant −1; the mean value of x + 1 over (−1, 1) is +1.</li></ul>
<div class="tip">Check at x = 1/2: 1 + (2/π)(1 − 1/3 + 1/5 − …) = 1 + (2/π)(π/4) = 1.5 = f(1/2) ✔.</div>` },

{ id: "2023-60", year: 2023, no: 60, subject: "maths", topic: "Fourier transform: linearity",
q: `Let f(x) = 1 for |x| &lt; a, 0 for |x| &gt; a, and g(x) = 1 for 0 &lt; x &lt; a, 0 otherwise, then the Fourier transform of 3f(x) − 2g(x) is`,
opts: ["√(2/π) {3 sin ωa/ω + (1 − e<sup>−iωa</sup>)/(iω)}", "√(2/π) {3 sin ωa/ω − (1 + e<sup>−iωa</sup>)/(iω)}", "√(2/π) {−3 sin ωa/ω − (1 − e<sup>−iωa</sup>)/(iω)}", "√(2/π) {3 sin ωa/ω − (1 − e<sup>−iωa</sup>)/(iω)}"], ans: 3,
analysis: `<h3>Answer: (d) √(2/π){3 sin ωa/ω − (1 − e<sup>−iωa</sup>)/(iω)}</h3><p>Use F(ω) = (1/√(2π)) ∫ f(x) e<sup>−iωx</sup> dx (the form that matches the e<sup>−iωa</sup> in the options).</p>
<ul><li>ℱ{f} = (1/√(2π)) ∫<sub>−a</sub><sup>a</sup> e<sup>−iωx</sup> dx = (1/√(2π)) · 2 sin ωa/ω = √(2/π) sin ωa/ω.</li>
<li>ℱ{g} = (1/√(2π)) ∫<sub>0</sub><sup>a</sup> e<sup>−iωx</sup> dx = (1/√(2π)) (1 − e<sup>−iωa</sup>)/(iω).</li></ul>
<p>By linearity, 3ℱ{f} − 2ℱ{g} = √(2/π)[3 sin ωa/ω − (1 − e<sup>−iωa</sup>)/(iω)], since 2/√(2π) = √(2/π).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: + sign; the g term is subtracted.</li>
<li><b>(b)</b>: (1 + e<sup>−iωa</sup>) is not the integral of e<sup>−iωx</sup> from 0 to a.</li>
<li><b>(c)</b>: −3 sin ωa/ω; the f term is added.</li></ul>
<div class="key">The rectangular pulse transforms to a sinc function, a basic result in signal processing: a short pulse has a wide spectrum.</div>` },

{ id: "2023-61", year: 2023, no: 61, subject: "maths", topic: "Conservative vector field",
q: `For what values of a and b is the vector field F = (x + z)i + a(y + z)j + b(x + y)k a conservative field ?`,
opts: ["a = b = 1", "a = b = −1", "a = 1, b = −1", "a = −1, b = 1"], ans: 0,
analysis: `<h3>Answer: (a) a = b = 1</h3><p>F is conservative when curl F = 0. With F<sub>1</sub> = x + z, F<sub>2</sub> = a(y + z), F<sub>3</sub> = b(x + y):</p>
<ul><li>i: ∂F<sub>3</sub>/∂y − ∂F<sub>2</sub>/∂z = b − a = 0</li><li>j: ∂F<sub>1</sub>/∂z − ∂F<sub>3</sub>/∂x = 1 − b = 0 → b = 1</li><li>k: ∂F<sub>2</sub>/∂x − ∂F<sub>1</sub>/∂y = 0 − 0 = 0</li></ul>
<p>So b = 1 and a = b = 1. The potential is φ = x²/2 + y²/2 + xz + yz.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) a = b = −1</b>: the j-component becomes 1 − (−1) = 2 ≠ 0.</li>
<li><b>(c) a = 1, b = −1</b> and <b>(d) a = −1, b = 1</b>: a ≠ b, so the i-component is non-zero; (c) also fails the j-component.</li></ul>
<div class="key">Equivalent tests for a conservative field: curl F = 0 (on a simply connected region); F = ∇φ; the line integral is path-independent; the integral round every closed loop is zero.</div>` },

{ id: "2023-62", year: 2023, no: 62, subject: "maths", topic: "Stokes' theorem",
q: `Let S be the surface of the paraboloid of revolution z = 1 − x<sup>2</sup> − y<sup>2</sup> with the domain of definition x<sup>2</sup> + y<sup>2</sup> ≤ 1, and let Γ be the boundary of the paraboloid. Given F = x<sup>3</sup>i + (x + y − z)j + yzk. What is the value of ∬<sub>S</sub> curl F·dS ?`,
opts: ["2π", "π", "π/2", "π<sup>2</sup>"], ans: 1,
analysis: `<h3>Answer: (b) π</h3><p>By <b>Stokes' theorem</b>, ∬<sub>S</sub> curl F·dS = ∮<sub>Γ</sub> F·dr. The boundary Γ is the unit circle x² + y² = 1 in the plane z = 0, traversed anticlockwise (upward normal).</p>
<p>On Γ, z = 0: ∮ x³ dx + (x + y) dy. With x = cos t, y = sin t:</p>
<ul><li>∮ x³ dx = 0 (x³ dx is exact).</li><li>∮ y dy = 0 (exact).</li><li>∮ x dy = ∫<sub>0</sub><sup>2π</sup> cos²t dt = π (the area of the unit disc).</li></ul>
<p>Total = <b>π</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 2π</b>: double the circulation; would need ∮ x dy counted twice.</li>
<li><b>(c) π/2</b>: half; ∫cos²t over a full period is π, not π/2.</li>
<li><b>(d) π²</b>: has the wrong form for an area-type result.</li></ul>
<div class="tip">Check directly: curl F = (z + 1, 0, 1). Over the flat disc (same boundary), only the k-component counts: ∬1 dA = π ✔.</div>` },

{ id: "2023-63", year: 2023, no: 63, subject: "maths", topic: "Newton's iteration for √2",
q: `The fixed point iterative scheme for determining √2 is`,
opts: ["x<sub>n+1</sub> = ½(x<sub>n</sub> − 2/x<sub>n</sub>)", "x<sub>n+1</sub> = ½(−x<sub>n</sub> + 2/x<sub>n</sub>)", "x<sub>n+1</sub> = −½(x<sub>n</sub> + 2/x<sub>n</sub>)", "x<sub>n+1</sub> = ½(x<sub>n</sub> + 2/x<sub>n</sub>)"], ans: 3,
analysis: `<h3>Answer: (d) x<sub>n+1</sub> = ½(x<sub>n</sub> + 2/x<sub>n</sub>)</h3><p>Newton–Raphson on f(x) = x² − 2: x<sub>n+1</sub> = x<sub>n</sub> − (x<sub>n</sub>² − 2)/(2x<sub>n</sub>) = ½(x<sub>n</sub> + 2/x<sub>n</sub>). Its fixed point satisfies x = ½(x + 2/x), i.e. x² = 2. It converges quadratically: from x<sub>0</sub> = 1, the values are 1.5, 1.41667, 1.414216.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: fixed point x = ½(x − 2/x) gives x² = −2: no real root.</li>
<li><b>(b)</b>: fixed point gives 3x² = 2, i.e. x = √(2/3).</li>
<li><b>(c)</b>: fixed point gives 3x² = −2: no real root.</li></ul>
<div class="key">This is the ancient Babylonian (Heron's) method. In general, √N: x<sub>n+1</sub> = ½(x<sub>n</sub> + N/x<sub>n</sub>).</div>` },

{ id: "2023-64", year: 2023, no: 64, subject: "maths", topic: "Gauss–Seidel iteration",
q: `The Gauss-Seidel iterative method for the system of equations<br>−¼x<sub>2</sub> − ¼x<sub>3</sub> + x<sub>4</sub> = ¼,<br>−¼x<sub>1</sub> + x<sub>3</sub> − ¼x<sub>4</sub> = ¼,<br>x<sub>1</sub> − ¼x<sub>2</sub> − ¼x<sub>3</sub> = ½,<br>−¼x<sub>1</sub> + x<sub>2</sub> − ¼x<sub>4</sub> = ½ is`,
opts: ["x<sub>1</sub><sup>(n+1)</sup> = 0·5 − 0·25x<sub>2</sub><sup>(n)</sup> + 0·25x<sub>3</sub><sup>(n)</sup>, x<sub>2</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>3</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>4</sub><sup>(n+1)</sup> = 0·25 − 0·25x<sub>2</sub><sup>(n+1)</sup> + 0·25x<sub>3</sub><sup>(n+1)</sup>", "x<sub>1</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>2</sub><sup>(n)</sup> + 0·25x<sub>3</sub><sup>(n)</sup>, x<sub>2</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>3</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>4</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>2</sub><sup>(n+1)</sup> + 0·25x<sub>3</sub><sup>(n+1)</sup>", "x<sub>1</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>2</sub><sup>(n)</sup> + 0·25x<sub>3</sub><sup>(n)</sup>, x<sub>2</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>1</sub><sup>(n+1)</sup> − 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>3</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>1</sub><sup>(n+1)</sup> − 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>4</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>2</sub><sup>(n+1)</sup> + 0·25x<sub>3</sub><sup>(n+1)</sup>", "x<sub>1</sub><sup>(n+1)</sup> = 0·5 + 0·25x<sub>2</sub><sup>(n)</sup> − 0·25x<sub>3</sub><sup>(n)</sup>, x<sub>2</sub><sup>(n+1)</sup> = 0·5 − 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>3</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>1</sub><sup>(n+1)</sup> + 0·25x<sub>4</sub><sup>(n)</sup>, x<sub>4</sub><sup>(n+1)</sup> = 0·25 + 0·25x<sub>2</sub><sup>(n+1)</sup> + 0·25x<sub>3</sub><sup>(n+1)</sup>"], ans: 1,
analysis: `<h3>Answer: (b)</h3><p>First reorder the equations so each has its unit coefficient on the diagonal (this also makes the system diagonally dominant, so the iteration converges):</p>
<ul><li>Equation 3 for x<sub>1</sub>: x<sub>1</sub> = 0.5 + 0.25x<sub>2</sub> + 0.25x<sub>3</sub></li><li>Equation 4 for x<sub>2</sub>: x<sub>2</sub> = 0.5 + 0.25x<sub>1</sub> + 0.25x<sub>4</sub></li><li>Equation 2 for x<sub>3</sub>: x<sub>3</sub> = 0.25 + 0.25x<sub>1</sub> + 0.25x<sub>4</sub></li><li>Equation 1 for x<sub>4</sub>: x<sub>4</sub> = 0.25 + 0.25x<sub>2</sub> + 0.25x<sub>3</sub></li></ul>
<p>Gauss–Seidel uses each new value as soon as it is available: x<sub>1</sub><sup>(n+1)</sup> in the x<sub>2</sub> and x<sub>3</sub> updates, and x<sub>2</sub><sup>(n+1)</sup>, x<sub>3</sub><sup>(n+1)</sup> in the x<sub>4</sub> update. All signs are +.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: minus signs in the x<sub>1</sub> and x<sub>4</sub> equations.</li>
<li><b>(c)</b>: minus signs before x<sub>4</sub><sup>(n)</sup> in the x<sub>2</sub> and x<sub>3</sub> equations.</li>
<li><b>(d)</b>: minus signs before x<sub>3</sub> and x<sub>1</sub> in the first two equations.</li></ul>
<div class="key">Jacobi uses only old values (all superscripts n on the right); Gauss–Seidel uses the newest values and usually converges about twice as fast.</div>` },

{ id: "2023-65", year: 2023, no: 65, subject: "maths", topic: "Missing term by finite differences",
q: `What is the missing figure in the following table ?<table><tr><td>x</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>y = f(x)</td><td>2</td><td>5</td><td>7</td><td>–</td><td>32</td></tr></table>`,
opts: ["10", "13", "14", "17"], ans: 2,
analysis: `<h3>Answer: (c) 14</h3><p>Four known values fit a cubic, so the fourth difference is zero: Δ⁴y<sub>0</sub> = y<sub>4</sub> − 4y<sub>3</sub> + 6y<sub>2</sub> − 4y<sub>1</sub> + y<sub>0</sub> = 0, with y<sub>3</sub> = k unknown.</p>
<p>32 − 4k + 6 × 7 − 4 × 5 + 2 = 0 → 56 − 4k = 0 → <b>k = 14</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 10</b>: gives Δ⁴ = 16, not 0.</li>
<li><b>(b) 13</b>: gives Δ⁴ = 4.</li>
<li><b>(d) 17</b>: gives Δ⁴ = −12.</li></ul>
<div class="tip">The coefficients 1, −4, 6, −4, 1 are the binomial coefficients of (E − 1)⁴. With n known values, use Δ<sup>n</sup> = 0.</div><div class="key">Check with the difference table using 14: Δ = 3, 2, 7, 18; Δ² = −1, 5, 11; Δ³ = 6, 6; Δ⁴ = 0 ✔.</div><div class="tip">Alternative: fit Newton's forward polynomial through the four known points, or use Lagrange interpolation at x = 4. Both give 14, but the Δ⁴ = 0 shortcut is fastest in the exam.</div>` },

{ id: "2023-66", year: 2023, no: 66, subject: "maths", topic: "Numerical differentiation",
q: `What is f′(0·2) from the following tabular data ?<table><tr><td>x</td><td>0·0</td><td>0·2</td><td>0·4</td><td>0·6</td><td>0·8</td><td>1·0</td></tr><tr><td>f(x)</td><td>1·00</td><td>1·16</td><td>3·56</td><td>13·96</td><td>41·96</td><td>101·00</td></tr></table>`,
opts: ["4·2", "2·2", "5·2", "3·2"], ans: 3,
analysis: `<h3>Answer: (d) 3·2</h3><p>Forward differences (h = 0.2) starting at x = 0.2:</p>
<table><tr><th>x</th><th>f</th><th>Δ</th><th>Δ²</th><th>Δ³</th><th>Δ⁴</th></tr><tr><td>0.2</td><td>1.16</td><td>2.40</td><td>8.00</td><td>9.60</td><td>3.84</td></tr><tr><td>0.4</td><td>3.56</td><td>10.40</td><td>17.60</td><td>13.44</td><td></td></tr><tr><td>0.6</td><td>13.96</td><td>28.00</td><td>31.04</td><td></td><td></td></tr><tr><td>0.8</td><td>41.96</td><td>59.04</td><td></td><td></td><td></td></tr></table>
<p>Newton's forward formula for the derivative: f′(x<sub>0</sub>) = (1/h)[Δ − Δ²/2 + Δ³/3 − Δ⁴/4] = 5[2.40 − 4.00 + 3.20 − 0.96] = 5 × 0.64 = <b>3.2</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 4·2</b>, <b>(b) 2·2</b>, <b>(c) 5·2</b>: each is 3.2 ± 1 or 2, from dropping or mis-signing a term of the series.</li></ul>
<div class="tip">Δ⁴ is constant (3.84 from x = 0 too), so the data come from a quartic and the formula is exact.</div><div class="key">Use the forward formula at the start of the table and the backward formula (∇ − ∇²/2 … with + signs: ∇ + ∇²/2 + ∇³/3 + …) at the end.</div>` },

{ id: "2023-67", year: 2023, no: 67, subject: "reasoning", topic: "Analytical puzzle",
q: `Of the five boys A, B, C, D and E two are good, one is poor and two are average in studies. Two of them study in post-graduate classes and three in under graduate classes. One comes from a rich family, two from middle class families and two from poor families. One of them is interested in music, two in acting and one in sports. Of those studying in under graduate classes, two are average and one is poor in studies. Of the two boys interested in acting, one is a post-graduate student. The one who is interested in music comes from a middle class family. Both of the boys interested in acting are not industrious, good in studies, come from middle class families, are average in studies and one of them is interested in acting. The boy interested in sports comes from a poor family, while the one interested in music is industrious. E is industrious, good in studies comes from a poor family and is not interested in acting, music or sports. C is poor in studies in spite of being industrious. A comes from a rich family, is not industrious but good in studies. B is industrious and comes from a middle class family. Name the boy who is not industrious and is average in studies.`,
opts: ["A", "B", "C", "D"], ans: 3,
analysis: `<h3>Answer: (d) D</h3><p>Studies: two good, one poor, two average. From the data: <b>A good</b>, <b>E good</b>, <b>C poor</b>. So the two average boys are <b>B and D</b>.</p>
<p>Industriousness: E, C and B are industrious; A is not. B is average but industrious, so the boy who is average <b>and</b> not industrious is <b>D</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) A</b>: not industrious, but <b>good</b> in studies.</li>
<li><b>(b) B</b>: average, but <b>industrious</b>.</li>
<li><b>(c) C</b>: <b>poor</b> in studies and industrious.</li></ul>
<div class="key">The long garbled sentence in the middle can be ignored; the direct statements about A, B, C and E settle it. In such puzzles, list each person in a grid and fill in the definite facts first.</div>` },

{ id: "2023-68", year: 2023, no: 68, subject: "reasoning", topic: "Conditional selection",
q: `At an electric Data Processing Unit five out of the eight program sets P, Q, R, S, T, U, V and W are to be operated daily. On any one day except for the first day of the month only three of the program sets must be the ones that were operated on the previous day. The program operating must also satisfy the following conditions :<ol><li>If program P is to be operated on a day, V cannot be operated on that day.</li><li>If Q is to be operated on a day, T must be one of the programs to be operated after Q.</li><li>If R is to be operated on a day, V must be one of the programs to be operated after R.</li><li>The last program to be operated on any day must be either S or U.</li></ol>If the program sets R and W are to be operated on the first day which of the following could be the other programs on that day ?`,
opts: ["Q, V, S", "Q, T, V", "T, S, U", "T, S, V"], ans: 3,
analysis: `<h3>Answer: (d) T, S, V</h3><p>R is operated, so <b>V must be included</b> (condition 3). The day must end with <b>S or U</b> (condition 4). With R, W, T, S, V: run R … V, then end with S. If Q is absent, condition 2 does not apply; P is absent, so condition 1 does not apply. All conditions hold.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Q, V, S</b>: Q needs T after it (condition 2), and T is missing.</li>
<li><b>(b) Q, T, V</b>: has neither S nor U, so no valid last program (condition 4).</li>
<li><b>(c) T, S, U</b>: R is operated but V is missing (condition 3).</li></ul>
<div class="key">Method: for "could be" questions, test each option against every rule and strike it out at the first violation.</div>` },

{ id: "2023-69", year: 2023, no: 69, subject: "reasoning", topic: "Scheduling puzzle",
q: `Read the following information carefully and answer the question given below it :<ol><li>Eight doctors P, Q, R, S, T, U, V and W visit a charitable dispensary every day except on a holiday i.e., Monday.</li><li>Each doctor visits for one hour from Tuesday to Sunday except Saturday. The timings are 9 A.M. to 1 P.M. and 2 P.M. to 6 P.M., 1 P.M. to 2 P.M. is lunch break.</li><li>On Saturday it is opened only in the morning i.e., 9 A.M. to 1 P.M. and each doctor visits for only half an hour.</li><li>No other doctor visits the dispensary before doctor Q and after U.</li><li>Doctor W comes immediately after the lunch break and is followed by R.</li><li>S comes in the same order as P in the afternoon session.</li></ol>If the lunch break and subsequent visiting hours are reduced by 15 minutes, at what time doctor U is expected to attend the dispensary ?`,
opts: ["3·15 P.M.", "4 P.M.", "4·15 P.M.", "4·45 P.M."], ans: 1,
analysis: `<h3>Answer: (b) 4 P.M.</h3><p>On a normal day, Q comes first (9 A.M.) and U last. The afternoon has four one-hour slots: W at 2, R at 3, then one more doctor at 4, and <b>U at 5 P.M.</b> (the last slot).</p>
<p>Now cut the lunch break by 15 minutes (1:00–1:45) and each later visit by 15 minutes (45 minutes each):</p>
<table><tr><th>Slot</th><th>Doctor</th><th>Time</th></tr><tr><td>1</td><td>W</td><td>1:45</td></tr><tr><td>2</td><td>R</td><td>2:30</td></tr><tr><td>3</td><td>(S/P etc.)</td><td>3:15</td></tr><tr><td>4</td><td>U</td><td><b>4:00</b></td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) 3·15 P.M.</b>: is the third afternoon slot, not U's (the last).</li>
<li><b>(c) 4·15 P.M.</b>: would follow from cutting only lunch and keeping 1-hour visits but starting the count wrongly.</li>
<li><b>(d) 4·45 P.M.</b>: is what you get if only lunch is cut (W 1:45, R 2:45, next 3:45, U 4:45), ignoring the cut in visiting hours.</li></ul>
<div class="key">Read "lunch break and subsequent visiting hours are reduced by 15 minutes" as both changes. Make a time table rather than calculating in your head.</div>` },

{ id: "2023-70", year: 2023, no: 70, subject: "reasoning", topic: "Blood relations",
q: `Study the following information carefully and answer the question given below it :<ol><li>P, Q, R, S, T and U are six members in a family in which there are two married couples.</li><li>T, a teacher, is married to the doctor who is mother of R and U.</li><li>Q, the lawyer, is married to P.</li><li>P has one son and one grandson.</li><li>Of the two married ladies one is housewife.</li><li>There is one student and one male engineer in the family.</li></ol>How is R related to U ?`,
opts: ["Brother only", "Sister only", "Brother or Sister", "Mother"], ans: 2,
analysis: `<h3>Answer: (c) Brother or Sister</h3><p>Couples: T (teacher, male) with the doctor (female, mother of R and U), and Q (lawyer) with P. P has one son and one grandson, so P's son is T and the grandson is R or U. The two married ladies are the doctor and P (P is the housewife), so Q is male.</p>
<p>The doctor is S (the only one left). R and U are the children: one is the student, the other the <b>male</b> engineer. P has only one grandson, so exactly one of R, U is male. We cannot tell which, so R is U's <b>brother or sister</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Brother only</b> and <b>(b) Sister only</b>: either could be true, but the data do not say which of R and U is the male engineer.</li>
<li><b>(d) Mother</b>: the mother of R and U is the doctor, S.</li></ul>
<div class="key">Family tree: Q (lawyer) + P (housewife) → son T (teacher) + S (doctor) → R and U (one student, one male engineer; one boy, one girl).</div>` },

{ id: "2023-71", year: 2023, no: 71, subject: "reasoning", topic: "Grouping",
q: `Read the following information carefully and answer the question that follow :<ol><li>Madhu and Shobha are good in Dramatics and Computer Science.</li><li>Anjali and Madhu are good in Computer Science and Physics.</li><li>Anjali, Poonam and Nisha are good in Physics and History.</li><li>Nisha and Anjali are good in Physics and Mathematics.</li><li>Poonam and Shobha are good in History and Dramatics.</li></ol>Who is good in History, Physics, Computer Science and Mathematics ?`,
opts: ["Poonam", "Nisha", "Madhu", "Anjali"], ans: 3,
analysis: `<h3>Answer: (d) Anjali</h3><table><tr><th>Person</th><th>Good in</th></tr><tr><td>Madhu</td><td>Dramatics, Computer Science, Physics</td></tr><tr><td>Shobha</td><td>Dramatics, Computer Science, History</td></tr><tr><td>Anjali</td><td>Computer Science, Physics, History, Mathematics</td></tr><tr><td>Poonam</td><td>Physics, History, Dramatics</td></tr><tr><td>Nisha</td><td>Physics, History, Mathematics</td></tr></table>
<p>Only <b>Anjali</b> has all four: History, Physics, Computer Science and Mathematics.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Poonam</b>: no Computer Science or Mathematics.</li>
<li><b>(b) Nisha</b>: no Computer Science.</li>
<li><b>(c) Madhu</b>: no History or Mathematics.</li></ul>
<div class="key">Build a person × subject grid from each statement; the answer reads straight off it.</div>` },

{ id: "2023-72", year: 2023, no: 72, subject: "reasoning", topic: "Syllogism",
q: `The question given below has three statements followed by three conclusions numbered I, II and III. You have to take the given statements to be true even if they seem to be at variance from commonly known facts. Read all the conclusions and then decide which of the given conclusions logically follows from the given statements disregarding commonly known facts.<br>Statements :<br>All lions are tigers.<br>All tigers are leopards.<br>Some leopards are wolves.<br>Conclusions :<br>I. No elephant is lion.<br>II. Some wolves are lions.<br>III. Some leopards are lions.`,
opts: ["Only I follows", "Only II follows", "Only III follows", "Only I and III follow"], ans: 2,
analysis: `<h3>Answer: (c) Only III follows</h3><p>All lions are tigers and all tigers are leopards, so <b>all lions are leopards</b>. Hence "some leopards are lions" (conversion of an A-statement gives an I-statement).</p>
<h3>Conclusion by conclusion</h3><ul>
<li><b>I (does not follow):</b> elephants are not mentioned at all, so nothing can be concluded about them.</li>
<li><b>II (does not follow):</b> some leopards are wolves, but those leopards need not be lions; the wolf part of the leopard circle may lie outside the lion circle.</li>
<li><b>III (follows):</b> as shown above.</li></ul>
<div class="key">Venn method: lions inside tigers inside leopards; wolves overlap leopards somewhere. Draw the case least favourable to each conclusion; if it still holds, it follows.</div><h3>Why not the others</h3><ul><li><b>(a) Only I follows</b>: wrong, I does not follow (elephants are not mentioned) and III does.</li><li><b>(b) Only II follows</b>: wrong, II does not follow.</li><li><b>(d) Only I and III follow</b>: wrong, because I does not follow.</li></ul>` },

{ id: "2023-73", year: 2023, no: 73, subject: "reasoning", topic: "Direction sense",
q: `Rohith went 15 km to the west from his house, then he turned left and walked 20 km. He then turned east and walked 25 km and finally turning left covered 20 km. How far is he from his house ?`,
opts: ["5 km", "10 km", "40 km", "80 km"], ans: 1,
analysis: `<h3>Answer: (b) 10 km</h3><p>Take the house as (0, 0):</p><ul><li>15 km west → (−15, 0)</li><li>Left from facing west = south, 20 km → (−15, −20)</li><li>East 25 km → (10, −20)</li><li>Left from facing east = north, 20 km → (10, 0)</li></ul>
<p>He is at (10, 0): <b>10 km east</b> of his house.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 5 km</b>: takes 20 − 15 instead of 25 − 15.</li>
<li><b>(c) 40 km</b>: adds the two 20 km legs, which cancel.</li>
<li><b>(d) 80 km</b>: is the total distance walked, not the displacement.</li></ul>
<div class="tip">Left turns: N → W → S → E → N. Right turns go the other way.</div><div class="key">Final position: 10 km east. The two 20 km legs (south then north) cancel, and west 15 + east 25 leaves 10 east.</div>` },

{ id: "2023-74", year: 2023, no: 74, subject: "reasoning", topic: "Coding",
q: `Cryptic language is popular since ages, mostly in the field of espionage and sending classified messages. If 'I LOVE YOU' is coded as 7, then how would you code 'GO TO HELL' in the same language ?`,
opts: ["1", "4", "3", "5"], ans: 1,
analysis: `<h3>Answer: (b) 4</h3><p>Add the alphabet positions of all letters and reduce to a single digit (digital root).</p>
<ul><li>I LOVE YOU: 9 + (12 + 15 + 22 + 5) + (25 + 15 + 21) = 124 → 1 + 2 + 4 = <b>7</b> ✔</li>
<li>GO TO HELL: (7 + 15) + (20 + 15) + (8 + 5 + 12 + 12) = 94 → 9 + 4 = 13 → 1 + 3 = <b>4</b></li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a) 1</b>, <b>(c) 3</b> and <b>(d) 5</b>: none follows from a rule that also gives 7 for I LOVE YOU. (Letter count gives 8 for both; vowel count gives 5 and 3, but then I LOVE YOU would be 5, not 7.)</li></ul>
<div class="tip">Shortcut: the digital root of a sum equals the sum of the digital roots, so you can reduce as you go.</div>` },

{ id: "2023-75", year: 2023, no: 75, subject: "reasoning", topic: "Letter pattern",
q: `What letter should replace the question mark ?<table><tr><td>J over L | N</td><td>A over E | I</td><td>G over M | S</td><td>H over P | ?</td></tr></table>`,
opts: ["Z", "Y", "X", "W"], ans: 2,
analysis: `<h3>Answer: (c) X</h3><p>In each figure, the bottom-left letter is the centre; the top and bottom-right letters are the same distance before and after it, and that distance grows by 2 each time.</p>
<table><tr><th>Centre</th><th>Top (centre − d)</th><th>Right (centre + d)</th><th>d</th></tr><tr><td>L (12)</td><td>J (10)</td><td>N (14)</td><td>2</td></tr><tr><td>E (5)</td><td>A (1)</td><td>I (9)</td><td>4</td></tr><tr><td>M (13)</td><td>G (7)</td><td>S (19)</td><td>6</td></tr><tr><td>P (16)</td><td>H (8)</td><td><b>X (24)</b></td><td>8</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) Z (26)</b>, <b>(b) Y (25)</b>, <b>(d) W (23)</b>: give distances 10, 9 and 7 from P, breaking the symmetry with H (8 before P).</li></ul>
<div class="tip">Memorise positions EJOTY = 5, 10, 15, 20, 25 to convert letters quickly.</div>` }
);
