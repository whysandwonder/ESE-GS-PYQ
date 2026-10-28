// Engineering Mathematics and Numerical Analysis: notes book built from ESE Paper I PYQs 2017–2026.
addBook("maths", [
 ["n1", "Linear algebra", [["n1-1", "Matrices, determinants, eigenvalues and quadratic forms"]]],
 ["n2", "Calculus", [["n2-1", "Differential calculus and series"], ["n2-2", "Integral calculus and multiple integrals"]]],
 ["n3", "Vector calculus", [["n3-1", "Gradient, divergence, curl and integral theorems"]]],
 ["n4", "Differential equations", [["n4-1", "Ordinary and partial differential equations"]]],
 ["n5", "Transforms and complex variables", [["n5-1", "Fourier, Laplace and z-transforms"], ["n5-2", "Complex variables"]]],
 ["n6", "Probability and statistics", [["n6-1", "Probability, distributions and regression"]]],
 ["n7", "Numerical methods", [["n7-1", "Roots, linear systems, interpolation, integration and ODEs"]]]
]);

addBookTopic("maths", "n1-1", `
<h3>Linear systems and rank</h3>
<ul><li>Ax = b: consistent iff rank A = rank [A|b]; unique solution if this equals n; infinitely many if less. Homogeneous Ax = 0 has non-trivial solutions iff det A = 0.</li>
<li><b>Rank</b> = number of non-zero rows in echelon form (2021 Q74). Elementary row operations do not change rank.</li>
<li>Determinant tricks: take common factors from rows; split columns; a determinant with two equal rows is zero (2021 Q73).</li>
<li><b>Cancellation</b>: if rank A = n (A invertible), AB = AC ⇒ B = C and AB = 0 ⇒ B = 0. If AB = 0 with A, B ≠ 0, both are singular (2026 Q56).</li></ul>
<h3>Eigenvalues and eigenvectors</h3>
<ul><li>Solve det(A − λI) = 0. Checks: <b>Σλ = trace</b>, <b>Πλ = det</b> (2025 Q27). Triangular matrix: eigenvalues are the diagonal entries (2018 Q18).</li>
<li>2 × 2 shortcut: λ² − (trace)λ + det = 0. [[4,2],[1,3]] → λ = 2, 5 (2019 Q27); [[1,2],[4,3]] → λ = 5, −1 (2021 Q72).</li>
<li>Eigenvalues of A<sup>k</sup> are λ<sup>k</sup>; of A<sup>−1</sup>, 1/λ; symmetric matrices have real eigenvalues and orthogonal eigenvectors.</li>
<li>Powers: A<sup>n</sup> = P D<sup>n</sup> P<sup>−1</sup>, or use Cayley–Hamilton (2023 Q52).</li></ul>
<h3>Cayley–Hamilton theorem</h3>
<p>Every square matrix satisfies its own characteristic equation. For a 3 × 3: A³ − (tr A)A² + (sum of principal 2 × 2 minors)A − (det A)I = 0 (2021 Q75). Use it to reduce high powers: divide λ<sup>n</sup> by the characteristic polynomial and keep the remainder (2020 Q22).</p>
<h3>Quadratic forms</h3>
<ul><li>Q = x<sup>T</sup>Ax with A symmetric (off-diagonal = half the cross-term coefficient). Canonical form Σλᵢyᵢ² by an orthogonal transformation (2023 Q53).</li>
<li>Positive definite iff all eigenvalues &gt; 0 (or all leading principal minors &gt; 0); negative definite iff all &lt; 0, i.e. −Q is positive definite (2026 Q60); semi-definite allows zeros; indefinite has mixed signs.</li></ul>`);

addBookTopic("maths", "n2-1", `
<h3>Maxima and minima</h3>
<ul><li>One variable: f′ = 0, then f″ &gt; 0 minimum, &lt; 0 maximum. f = x³/3 − x has its minimum at x = 1 (2017 Q25).</li>
<li>Two variables: f<sub>x</sub> = f<sub>y</sub> = 0; with r = f<sub>xx</sub>, s = f<sub>xy</sub>, t = f<sub>yy</sub>: rt − s² &gt; 0 and r &gt; 0 minimum, r &lt; 0 maximum; rt − s² &lt; 0 saddle.</li>
<li>Absolute extrema on a closed region: compare interior critical points, boundary critical points and corners (2020 Q21, 2024 Q12).</li>
<li>Partial derivative ∂f/∂y = slope of the curve cut by the plane x = constant (2024 Q10).</li></ul>
<h3>Partial differentiation</h3>
<ul><li><b>Euler's theorem</b>: for f homogeneous of degree n, x f<sub>x</sub> + y f<sub>y</sub> = n f. If u = log f with f of degree n, then x u<sub>x</sub> + y u<sub>y</sub> = n: (x² + y²)/(x + y) → 1 (2018 Q23); (x⁴ + y⁴)/(x + y) → 3 (2020 Q25).</li>
<li>Chain rule: du/dt = u<sub>x</sub> dx/dt + u<sub>y</sub> dy/dt (2021 Q70).</li>
<li>Jacobian ∂(u,v)/∂(x,y) = 1 / [∂(x,y)/∂(u,v)] (2021 Q69).</li></ul>
<h3>Series</h3>
<ul><li>Maclaurin: f(x) = Σ f<sup>(n)</sup>(0) xⁿ/n!. e<sup>sin x</sup> = 1 + x + x²/2 − x⁴/8 + … (2021 Q76).</li>
<li>ln[(1 + x)/(1 − x)] = 2(x + x³/3 + x⁵/5 + …) for |x| &lt; 1 (2022 Q82).</li>
<li><b>Telescoping</b>: Σ 1/[(x + 3)(x + 4)] = Σ [1/(x + 3) − 1/(x + 4)] = 1/4 − 1/(n + 4) = n/[4(n + 4)] (2021 Q79).</li>
<li>Useful sums: Σk = n(n + 1)/2; Σk² = n(n + 1)(2n + 1)/6; Σk³ = [n(n + 1)/2]².</li>
<li>Golden ratio φ = (1 + √5)/2 ≈ 1.618 satisfies φ² = φ + 1; it is the limit of ratios of successive Fibonacci numbers (2017 Q33).</li></ul>
<h3>Other tools</h3>
<ul><li>Logarithms for powers: 1525<sup>0.2</sup> = 10<sup>0.2 log 1525</sup> ≈ 4.33 (2018 Q21).</li>
<li>Sine rule a/sin A = b/sin B = 2R (2025 Q21). Trigonometric simplification: write everything in sin and cos (2026 Q57).</li>
<li>Conics from equations: x²/a² − y²/b² = 1 hyperbola, x²/a² + y²/b² = 1 ellipse (2022 Q88).</li></ul>`);

addBookTopic("maths", "n2-2", `
<h3>Standard integrals and tricks</h3>
<ul><li>∫<sub>0</sub><sup>a</sup> √(a² − x²) dx = πa²/4 (quarter circle): a = 4 gives 4π (2022 Q78).</li>
<li>∫ f′(x)/√f(x) dx = 2√f(x) (2022 Q79).</li>
<li>∫<sub>0</sub><sup>2π</sup> dθ/(a + b sin²θ) = 2π/√(a(a + b)): with a = 9, b = 1, 3 × 2π/√90 = 2π/√10 (2017 Q31).</li>
<li>Mean value of f on [a, b] = (1/(b − a)) ∫f dx (2022 Q83).</li>
<li>Gamma function: Γ(n + 1) = nΓ(n), Γ(n + 1) = n!, Γ(½) = √π (2023 Q58).</li></ul>
<h3>Applications</h3>
<ul><li>Area between curves: ∫(upper − lower) dx, splitting where the boundary changes (2022 Q81).</li>
<li>Arc length of a parametric curve: ∫√(x′² + y′²) dθ. The astroid x = 2cos³θ, y = 2sin³θ in the first quadrant has length 3 (2022 Q84).</li>
<li>Volume of a polar curve revolved about the initial line: V = (2π/3)∫r³ sin θ dθ; cardioid r = a(1 − cos θ) gives 8πa³/3 (2025 Q23).</li>
<li>Surface area of z = f(x, y): ∬√(1 + f<sub>x</sub>² + f<sub>y</sub>²) dA (2021 Q81).</li>
<li>Radius of gyration k = √(I/m); for a rectangle about a corner axis perpendicular to it, I = m(a² + b²)/3 (2022 Q80).</li>
<li>Centroid of a solid: z̄ = ∭z dV / ∭dV (2024 Q13).</li></ul>
<h3>Multiple integrals</h3>
<ul><li>Draw the region first. <b>Change of order</b>: describe the same region with the other variable outside (2026 Q69).</li>
<li><b>Polar</b>: x = r cos θ, y = r sin θ, dA = r dr dθ; quarter disc of radius a: θ from 0 to π/2 (2026 Q70).</li>
<li>Substitution inside a double integral (e.g. u = √(xy)) can make the inner integral elementary (2024 Q14).</li>
<li>Over a triangle 0 ≤ y ≤ x ≤ 1: ∫∫(x² + y²) dy dx = 1/3 (2021 Q68). Odd/even symmetry halves work (2026 Q68).</li></ul>`);

addBookTopic("maths", "n3-1", `
<h3>Operators</h3>
<ul><li>Gradient ∇φ: a vector normal to the surface φ = c, pointing in the direction of greatest increase.</li>
<li><b>Divergence</b> ∇·F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z, a scalar (net outflow per volume). At a point, substitute after differentiating (2025 Q29). ∇·F = 0: solenoidal.</li>
<li><b>Curl</b> ∇×F, a vector (rotation). ∇×F = 0: irrotational.</li></ul>
<h3>Conservative fields</h3>
<p>F is conservative iff curl F = 0 (on a simply connected region) iff F = ∇φ iff line integrals are path-independent. For F = (x + z)i + a(y + z)j + b(x + y)k this needs a = b = 1 (2023 Q61).</p>
<h3>Integral theorems</h3>
<table><tr><th>Theorem</th><th>Statement</th></tr>
<tr><td>Green (plane)</td><td>∮(M dx + N dy) = ∬(∂N/∂x − ∂M/∂y) dA</td></tr>
<tr><td><b>Stokes</b></td><td>∬<sub>S</sub>(curl F)·dS = ∮<sub>C</sub> F·dr; the surface can be replaced by any surface with the same boundary (2023 Q62)</td></tr>
<tr><td>Gauss (divergence)</td><td>∯<sub>S</sub> F·dS = ∭<sub>V</sub> ∇·F dV</td></tr></table>
<h3>Other results</h3>
<ul><li>Two surface families are <b>orthogonal</b> where their normals (gradients) are perpendicular: ∇f·∇g = 0 (2021 Q80).</li>
<li>From acceleration to position: integrate twice, using the initial velocity and position to find the constants (2024 Q11).</li></ul>`);

addBookTopic("maths", "n4-1", `
<h3>First-order ODEs</h3>
<ul><li>Separable: g(y) dy = f(x) dx; integrate, then use the given point (2022 Q89).</li>
<li>Linear dy/dx + P y = Q: integrating factor e<sup>∫P dx</sup>. (1 + y²)dx = (tan⁻¹y − x)dy is linear in x with IF e<sup>tan⁻¹ y</sup> (2020 Q23).</li>
<li><b>Exact</b> M dx + N dy = 0 when ∂M/∂y = ∂N/∂x; find the potential F (2026 Q58).</li>
<li>For (ax + by + c)dx + (k(ax + by) + c′)dy = 0, put z = ax + by (2025 Q25).</li></ul>
<h3>Linear ODEs with constant coefficients</h3>
<ul><li>Characteristic roots: real distinct → e<sup>m x</sup> terms; repeated root m (multiplicity k) → (c₁ + c₂x + … + c<sub>k</sub>x<sup>k−1</sup>)e<sup>mx</sup>; complex α ± iβ → e<sup>αx</sup>(cos βx, sin βx), multiplied by powers of x if repeated (2023 Q54).</li>
<li>Particular integral for e<sup>ax</sup>: e<sup>ax</sup>/f(a); if f(a) = 0, x e<sup>ax</sup>/f′(a) (2023 Q55).</li>
<li>Check options quickly with the initial conditions (2026 Q59).</li></ul>
<h3>Partial differential equations</h3>
<ul><li>Clairaut form z = px + qy + f(p, q): complete integral z = ax + by + f(a, b) (2017 Q26).</li>
<li>Linear PDEs with constant coefficients: auxiliary equation in D and D′; f(ax + by) solutions (2017 Q28).</li>
<li>Separation of variables: u = X(x)T(t), match the initial condition (2019 Q22).</li>
<li>Classification of second-order PDEs (B² − 4AC): elliptic (&lt; 0, Laplace), parabolic (= 0, heat), hyperbolic (&gt; 0, wave).</li></ul>`);

addBookTopic("maths", "n5-1", `
<h3>Fourier series</h3>
<ul><li>On (−L, L): f = a₀/2 + Σ[aₙ cos(nπx/L) + bₙ sin(nπx/L)]. Odd function → sine terms only; even → cosine terms.</li>
<li>Square wave (−2, 2): odd, so a₀ = aₙ = 0 (2017 Q27). Parseval's identity relates the sum of squared coefficients to the mean square value (2018 Q20).</li>
<li>f = x + 1 on (−1, 1): 1 + (2/π)Σ(−1)<sup>n+1</sup> sin nπx / n (2023 Q59).</li>
<li><b>Half-range sine series</b> extends f oddly; Kx(L − x) gives coefficients 8KL²/(n³π³) for odd n (2024 Q6).</li>
<li>Half-wave rectified sine: A/π + (A/2) sin ωt − (2A/π)Σ cos 2nωt/(4n² − 1) (2024 Q7).</li>
<li>At a jump, the series converges to the mean of the left and right limits.</li></ul>
<h3>Fourier transform</h3>
<p>F(ω) = (1/√2π)∫f(x)e<sup>−iωx</sup>dx (convention varies). It is linear (2023 Q60). A rectangular pulse transforms to a sinc function; a real odd function has a purely imaginary transform (2024 Q15).</p>
<h3>Laplace transform</h3>
<ul><li>Basic pairs: 1 → 1/s; tⁿ → n!/s<sup>n+1</sup>; e<sup>at</sup> → 1/(s − a); sin bt → b/(s² + b²); cos bt → s/(s² + b²).</li>
<li><b>First shifting</b>: L{e<sup>at</sup>f} = F(s − a) (2022 Q76). Second shifting: L{f(t − a)u(t − a)} = e<sup>−as</sup>F(s).</li>
<li><b>Change of scale</b>: L{f(at)} = (1/a)F(s/a) (2023 Q56).</li>
<li>Derivatives: L{y′} = sY − y(0); L{y″} = s²Y − sy(0) − y′(0). Convolution: L{f * g} = FG, which solves integro-differential equations (2023 Q57).</li>
<li>Inverse by partial fractions (2022 Q75).</li></ul>
<h3>z-transform</h3>
<ul><li>Z{aᵏ} = z/(z − a); sampling e<sup>−at</sup> at interval T gives z/(z − e<sup>−aT</sup>) (2024 Q4).</li>
<li>Z{sin kθ} = z sin θ/(z² − 2z cos θ + 1), so z/(z² − z + 1) inverts to (2/√3) sin(kπ/3) (2024 Q5).</li></ul>`);

addBookTopic("maths", "n5-2", `
<h3>Analytic functions</h3>
<ul><li>f = u + iv is analytic where the <b>Cauchy–Riemann</b> equations hold: u<sub>x</sub> = v<sub>y</sub>, u<sub>y</sub> = −v<sub>x</sub>. Polar form: u<sub>r</sub> = (1/r)v<sub>θ</sub>, v<sub>r</sub> = −(1/r)u<sub>θ</sub> (2019 Q23).</li>
<li>u and v are harmonic; given one, find the other (the conjugate) by integrating the CR equations (2017 Q29).</li>
<li>Integral of an analytic function depends only on the end points: ∫z²dz = [z³/3] (2024 Q8).</li></ul>
<h3>Complex numbers</h3>
<ul><li>Square roots: solve (x + iy)² = a + ib with x² + y² = |z|; √(5 + 12i) = ±(3 + 2i) (2025 Q30).</li>
<li>log z = ln|z| + i(arg z + 2nπ); log(1 + i) + log(1 − i) = log 2 + 2nπi in general (2020 Q26).</li>
<li>Real polynomials have complex roots in conjugate pairs; x³ − 8x² + 37x − 50 has real root 2 (2018 Q12).</li></ul>
<h3>Series and residues</h3>
<ul><li><b>Laurent series</b> in an annulus: use partial fractions and geometric series for the right |z| range (2018 Q22).</li>
<li>Residue at a pole of order n: (1/(n − 1)!) lim d<sup>n−1</sup>/dz<sup>n−1</sup>[(z − a)ⁿ f(z)] (2019 Q24, 2017 Q30).</li>
<li>Or read the coefficient of 1/(z − a) from the Laurent series: (1 − e<sup>2z</sup>)/z⁴ has residue −8/6 = −4/3 at z = 0 (2018 Q24).</li>
<li>Residue theorem: ∮f dz = 2πi × Σ residues inside.</li></ul>
<h3>Mappings</h3>
<p>w = 1/z maps circles and lines to circles and lines; a circle not through the origin maps to a circle with centre c̄/(|c|² − r²) and radius r/||c|² − r²| (2024 Q9).</p>`);

addBookTopic("maths", "n6-1", `
<h3>Probability</h3>
<ul><li>Counting: committee probabilities by combinations (2019 Q21). Total probability over two bags (2020 Q27).</li>
<li>Independent draws with replacement multiply: 0.73² = 0.5329 (2022 Q77).</li>
<li><b>Bayes</b>: P(D|+) = P(+|D)P(D)/P(+). With a rare disease, most positives are false: 1/3 in 2024 Q2.</li></ul>
<h3>Distributions</h3>
<table><tr><th>Distribution</th><th>Mean</th><th>Variance</th></tr>
<tr><td>Binomial (n, p)</td><td><b>np</b> (2020 Q29)</td><td>npq</td></tr>
<tr><td>Poisson (λ)</td><td>λ</td><td>λ; P(0) = e<sup>−λ</sup>: 40 errors in 600 pages → λ = 2/3 per page (2021 Q71)</td></tr>
<tr><td>Geometric (failures before first success)</td><td><b>q/p</b> (2026 Q61)</td><td>q/p²</td></tr>
<tr><td>Exponential (λ)</td><td>1/λ</td><td>1/λ² (SD 1/λ; UPSC's 2024 key gave 2/λ², which is E[X²])</td></tr>
<tr><td>Normal (μ, σ)</td><td>μ</td><td>σ²</td></tr>
<tr><td>Uniform (a, b)</td><td>(a + b)/2</td><td>(b − a)²/12</td></tr></table>
<ul><li>Densities: ∫f = 1 fixes constants; P(a &lt; X &lt; b) = ∫f (2020 Q28). Marginal f<sub>X</sub> = ∫f(x, y)dy (2024 Q3); joint probabilities by integrating over the region (2026 Q64).</li>
<li>Var(aX + bY) = a²Var X + b²Var Y for independent X, Y (2026 Q63).</li>
<li>Matching problem: mean and variance of the number of matches are both 1 (2026 Q62).</li>
<li>Sample size for a proportion: n = z²pq/E²; ±0.01 at 90% → 6765 (2026 Q67).</li></ul>
<h3>Regression and correlation</h3>
<p>Both regression lines pass through (x̄, ȳ): solve them together for the means (2020 Q30). r² = b<sub>yx</sub> × b<sub>xy</sub>, with r taking their common sign.</p>`);

addBookTopic("maths", "n7-1", `
<h3>Roots of equations</h3>
<ul><li><b>Newton–Raphson</b>: x<sub>n+1</sub> = xₙ − f(xₙ)/f′(xₙ); quadratic convergence (2021 Q77). For √N: x<sub>n+1</sub> = ½(xₙ + N/xₙ) (2023 Q63); for cube roots: x<sub>n+1</sub> = (2xₙ + N/xₙ²)/3 (2018 Q19).</li>
<li>Bisection (always converges, slow), regula falsi, secant, fixed-point iteration (converges if |g′| &lt; 1).</li>
<li>Knowing one root, divide it out and solve the quadratic (2018 Q11).</li></ul>
<h3>Linear systems and eigenvalues</h3>
<ul><li>Direct: Gauss elimination, LU, Gauss–Jordan. Iterative: Jacobi (old values) and <b>Gauss–Seidel</b> (newest values; converges for diagonally dominant systems) (2023 Q64).</li>
<li><b>Power method</b> gives the largest eigenvalue in modulus (2022 Q85). <b>Givens</b> method reduces a symmetric matrix to tridiagonal form by plane rotations (2022 Q86).</li></ul>
<h3>Finite differences and interpolation</h3>
<ul><li>Δ, ∇, E = 1 + Δ. For a polynomial of degree n, the n-th difference is constant and higher ones are zero. Δ¹⁰ of a degree-10 polynomial = leading coefficient × 10! (h = 1) (2020 Q24).</li>
<li>Missing terms: set the appropriate difference to zero (2023 Q65, 2026 Q66).</li>
<li>Newton forward/backward and Lagrange interpolation; fitting a polynomial through data (2018 Q17).</li>
<li>Numerical derivative: f′(x₀) = (1/h)[Δ − Δ²/2 + Δ³/3 − …] (2023 Q66).</li></ul>
<h3>Numerical integration</h3>
<ul><li>Trapezoidal: (h/2)[ends + 2 × middle].</li>
<li><b>Simpson's 1/3</b> (even number of intervals): (h/3)[ends + 4 odd + 2 even] (2021 Q78).</li>
<li><b>Simpson's 3/8</b> (multiples of 3): (3h/8)[ends + 3 × others + 2 × every third] (2026 Q65).</li></ul>
<h3>ODEs</h3>
<p><b>Taylor series method</b>: y(x₀ + h) = y₀ + hy′₀ + h²y″₀/2 + … with derivatives from the ODE (2021 Q82, 2022 Q87). Euler, modified Euler and Runge–Kutta (fourth order) are the other standard methods.</p>
<h3>Linear programming and errors</h3>
<ul><li>The optimum lies at a corner of the feasible region: evaluate z at each vertex (2018 Q25, Q54).</li>
<li>Error propagation for products: percentage errors add; for powers, multiply by the power (ellipse area πab: 1% + 1% = 2%) (2025 Q22).</li></ul>`);
