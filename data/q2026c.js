// ESE 2026 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q51–75
// Answers follow MADE EASY's unofficial key (see q2026a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2026-51", year: 2026, no: 51, subject: "ethics", topic: "Kohlberg", keySource: K,
q: `Who suggested pre-conventional, conventional and post conventional levels of moral development ?`,
opts: ["Kohlberg", "A. I. Melden", "John Locke", "Gilligan"], ans: 0,
analysis: `<h3>Answer: (a) Kohlberg</h3><p><b>Lawrence Kohlberg</b> (1958 onwards), building on Piaget, proposed three levels of moral reasoning, each with two stages: pre-conventional (avoid punishment, self-interest), conventional (approval of others, law and order) and post-conventional (social contract, universal principles).</p>
<h3>Why not the others</h3><ul>
<li><b>(b) A. I. Melden</b>: rights ethics, based on people's capacity to show concern for others.</li>
<li><b>(c) John Locke</b>: natural rights to life, liberty and property.</li>
<li><b>(d) Carol Gilligan</b>: criticised Kohlberg and proposed an ethic of care, with her own three levels (see 2023 Q36).</li></ul>
<div class="key">In engineering-ethics texts, Kohlberg's theory is used to explain moral autonomy: the post-conventional engineer acts on principles even against pressure from employers or peers.</div>` },

{ id: "2026-52", year: 2026, no: 52, subject: "ethics", topic: "Normative inquiry", keySource: K,
q: `Which one of the following inquiries seeks to identify and justify the morally-desirable norms or standards that should guide individuals and group ?`,
opts: ["Normative inquiry", "Conceptual inquiry", "Factual inquiry", "Descriptive inquiry"], ans: 0,
analysis: `<h3>Answer: (a) Normative inquiry</h3><p>Martin and Schinzinger distinguish three kinds of inquiry in engineering ethics. <b>Normative</b> inquiry identifies and justifies the moral norms that should guide individuals and groups: what ought to be done.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Conceptual inquiry</b>: clarifies the meaning of concepts and principles (e.g. what is "safety", "bribe", "public interest").</li>
<li><b>(c) Factual inquiry</b> (and <b>(d) descriptive inquiry</b>, its equivalent): finds the facts relevant to a moral issue (e.g. test data, costs, what happened), without judging what ought to be done.</li></ul>
<div class="key">All three are needed to resolve a real dilemma: get the facts right, clarify the concepts, then apply justified norms.</div>` },

{ id: "2026-53", year: 2026, no: 53, subject: "ethics", topic: "Duty ethics", keySource: K,
q: `Duty ethics theory was proposed by`,
opts: ["John Stuart Mill", "Richard Brandt", "Jeremy Bentham", "Immanuel Kant"], ans: 3,
analysis: `<h3>Answer: (d) Immanuel Kant</h3><p><b>Kant</b> (1724–1804) founded duty ethics (deontology): actions are right if they follow from duty, tested by the categorical imperative: act only on rules you could will to be universal, and treat people as ends, never merely as means.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) J. S. Mill</b> and <b>(c) Jeremy Bentham</b>: founders of utilitarianism (greatest good for the greatest number).</li>
<li><b>(b) Richard Brandt</b>: a 20th-century utilitarian, known for rule utilitarianism.</li></ul>
<div class="key">Other duty theorists: W. D. Ross (prima facie duties: see 2024 Q49) and John Rawls. See 2023 Q37.</div>` },

{ id: "2026-54", year: 2026, no: 54, subject: "ethics", topic: "Code of Hammurabi", keySource: K,
q: `Who framed the ethical code for builders in 1758 ?`,
opts: ["A. I. Melden", "Aristotle", "C. W. D. Ross", "Hammurabi"], ans: 3,
analysis: `<h3>Answer: (d) Hammurabi</h3><p>The <b>Code of Hammurabi</b>, king of Babylon (about 1758 BCE, so "1758" in the question means BCE), contains one of the earliest building codes. If a house collapsed and killed the owner, the builder was to be put to death; if it killed the owner's son, the builder's son was to die.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) A. I. Melden</b>: 20th-century rights ethicist.</li>
<li><b>(b) Aristotle</b> (4th century BCE): virtue ethics.</li>
<li><b>(c) W. D. Ross</b>: 20th-century theory of prima facie duties.</li></ul>
<div class="key">Engineering-ethics texts cite Hammurabi's code as the first example of holding builders responsible for public safety, an idea now found in NSPE Canon 1 (see 2024 Q47).</div>` },

{ id: "2026-55", year: 2026, no: 55, subject: "ethics", topic: "Cost–benefit analysis", keySource: K,
q: `Cost-benefit analysis is an application of`,
opts: ["Duty ethics", "Utilitarianism", "Human ethics", "Virtue ethics"], ans: 1,
analysis: `<h3>Answer: (b) Utilitarianism</h3><p>Cost–benefit analysis weighs total good outcomes (benefits) against total bad outcomes (costs) and picks the option with the greatest net benefit: a practical form of utilitarianism's "greatest good for the greatest number" (see 2024 Q52 and 2025 Q96).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Duty ethics</b>: judges acts by duty, not by adding up consequences.</li>
<li><b>(c) Human ethics</b>: not a standard ethical theory.</li>
<li><b>(d) Virtue ethics</b>: focuses on character, not on outcomes.</li></ul>
<div class="key">Criticism from rights and duty ethics: CBA may sacrifice a few people's safety for a larger total benefit, as in the Ford Pinto case.</div>` },

{ id: "2026-56", year: 2026, no: 56, subject: "maths", topic: "Matrix cancellation laws", keySource: K,
q: `Consider the following statements regarding cancellation laws :<br>Let A, B, C be n×n matrices, then<ol><li>if rank A = n and AB = AC, then B = C.</li><li>if rank A = n, then AB = 0 implies B = 0. Hence if AB = 0, but A ≠ 0 as well as B ≠ 0, then rank A &lt; n and rank B &lt; n.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 only", "Both 1 and 2", "2 only", "Neither 1 nor 2"], ans: 1,
analysis: `<h3>Answer: (b) Both 1 and 2</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> rank A = n means A is invertible. Multiply AB = AC on the left by A<sup>−1</sup>: B = C.</li>
<li><b>2 (correct):</b> with A invertible, AB = 0 gives B = A<sup>−1</sup>·0 = 0. So if AB = 0 with both A and B non-zero, A cannot be invertible (rank A &lt; n); by the same argument on the transpose, B is not invertible either (rank B &lt; n).</li></ul>
<div class="key">Matrices are "zero divisors" in general: e.g. A = [[1, 0], [0, 0]] and B = [[0, 0], [0, 1]] give AB = 0. This is Kreyszig's theorem on cancellation laws.</div>` },

{ id: "2026-57", year: 2026, no: 57, subject: "maths", topic: "Trigonometric identities", keySource: K,
q: `Match the following lists :<table><tr><th>List I</th><th>List II</th></tr><tr><td>P. sin²θ cotθ secθ</td><td>1. cotθ</td></tr><tr><td>Q. (tanθ + secθ) / [secθ (1 + tanθ/secθ)]</td><td>2. secθ − tanθ</td></tr><tr><td>R. (1 + cotθ)/(1 + tanθ)</td><td>3. sinθ</td></tr><tr><td>S. √[(1 − sinθ)/(1 + sinθ)]</td><td>4. 1</td></tr></table>Select the correct answer using the code given below :`,
opts: ["P–3, Q–1, R–4, S–2", "P–1, Q–3, R–2, S–4", "P–3, Q–4, R–1, S–2", "P–4, Q–3, R–2, S–1"], ans: 2,
analysis: `<h3>Answer: (c) P–3, Q–4, R–1, S–2</h3><ul>
<li><b>P</b>: sin²θ × (cosθ/sinθ) × (1/cosθ) = <b>sinθ</b> → 3.</li>
<li><b>Q</b>: the denominator secθ(1 + tanθ/secθ) = secθ + tanθ, the same as the numerator → <b>1</b> → 4.</li>
<li><b>R</b>: (1 + cotθ)/(1 + tanθ) = [(sinθ + cosθ)/sinθ] / [(cosθ + sinθ)/cosθ] = cosθ/sinθ = <b>cotθ</b> → 1.</li>
<li><b>S</b>: multiply inside by (1 − sinθ)/(1 − sinθ): √[(1 − sinθ)²/cos²θ] = (1 − sinθ)/cosθ = <b>secθ − tanθ</b> → 2 (for cosθ &gt; 0).</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: swaps Q and R (gives Q = cotθ, R = 1).</li>
<li><b>(b)</b> and <b>(d)</b>: get P wrong (P is sinθ).</li></ul>
<div class="tip">Check with θ = 45°: P = ½ × 1 × √2 = 0.707 = sin 45° ✔; R = 2/2 = 1 = cot 45° ✔.</div>` },

{ id: "2026-58", year: 2026, no: 58, subject: "maths", topic: "First-order ODE", keySource: K,
q: `The solution of differential equation<br>y′ = (xy² − cos x sin x) / [y(1 − x²)], y(0) = 2 is`,
opts: ["y²(1 + x²) − cos²x = 3", "y²(1 − x²) + cos²x = 5", "y²(1 − x²) + cos²x = 7", "y²(1 − x²) − cos²x = 3"], ans: 3,
analysis: `<h3>Answer: (d) y²(1 − x²) − cos²x = 3</h3><p>Rearrange: y(1 − x²) dy − (xy² − cos x sin x) dx = 0, i.e. M = cos x sin x − xy², N = y(1 − x²).</p>
<p>∂M/∂y = −2xy and ∂N/∂x = −2xy, so the equation is <b>exact</b>. A potential is F = ½y²(1 − x²) − ½cos²x (check: ∂F/∂x = −xy² + cos x sin x = M; ∂F/∂y = y(1 − x²) = N).</p>
<p>So y²(1 − x²) − cos²x = C. At x = 0, y = 2: 4 − 1 = 3.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: (1 + x²) instead of (1 − x²); differentiating gives the wrong sign on xy².</li>
<li><b>(b)</b>: + cos²x; at (0, 2) gives 4 + 1 = 5, so it fits the point, but differentiating it gives the wrong sign on the cos x sin x term.</li>
<li><b>(c)</b>: + cos²x and a constant 7 that does not even fit y(0) = 2.</li></ul>
<div class="tip">Two checks are needed: the constant must fit the initial point, and the implicit derivative must reproduce the ODE. Only (d) passes both.</div>` },

{ id: "2026-59", year: 2026, no: 59, subject: "maths", topic: "Second-order ODE (IVP)", keySource: K,
q: `The solution of differential equation y″ + 4y′ + 3y = e<sup>t</sup>; y(0) = 0, y′(0) = 2 is`,
opts: ["y(t) = (e<sup>t</sup> − 7e<sup>−3t</sup>)/8 + 3e<sup>−t</sup>/4", "y(t) = (e<sup>t</sup> − 5e<sup>−3t</sup>)/8 + 3e<sup>−t</sup>/4", "y(t) = (e<sup>t</sup> + 7e<sup>−3t</sup>)/8 − 3e<sup>−t</sup>/4", "y(t) = (e<sup>t</sup> + 7e<sup>−3t</sup>)/8 + 3e<sup>−t</sup>/4"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p>Characteristic roots: m² + 4m + 3 = 0 → m = −1, −3. Particular integral: e<sup>t</sup>/(1 + 4 + 3) = e<sup>t</sup>/8.</p>
<p>y = Ae<sup>−t</sup> + Be<sup>−3t</sup> + e<sup>t</sup>/8. Conditions: A + B = −1/8 and −A − 3B + 1/8 = 2. Solving: B = −7/8, A = 3/4.</p>
<p>y = (e<sup>t</sup> − 7e<sup>−3t</sup>)/8 + (3/4)e<sup>−t</sup>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: y(0) = 1/8 − 5/8 + 6/8 = 1/4 ≠ 0.</li>
<li><b>(c)</b>: y(0) = 1/8 + 7/8 − 6/8 = 1/4 ≠ 0.</li>
<li><b>(d)</b>: y(0) = 1/8 + 7/8 + 6/8 = 7/4 ≠ 0.</li></ul>
<div class="tip">Checking y(0) = 0 alone eliminates every option except (a). Then y′(0) = 1/8 + 21/8 − 6/8 = 2 ✔. Compare 2023 Q55, the same equation with a different forcing term.</div>` },

{ id: "2026-60", year: 2026, no: 60, subject: "maths", topic: "Definiteness of quadratic forms", keySource: K,
q: `Which one of the following statements is correct in the context of quadratic forms V = x<sup>T</sup>Ax, where x = [x<sub>1</sub>, x<sub>2</sub> … x<sub>n</sub>]<sup>T</sup> ?`,
opts: ["V &lt; 0 for all vectors x except x = 0, if and only if all the eigenvalues of A are positive", "V ≤ 0 for all vectors x and V = 0 for at least one vector x ≠ 0, if and only if all the eigenvalues of A are non-negative and at least one of the eigenvalues is zero", "V is negative-definite if −V is positive-definite, with a corresponding condition on the eigenvalues of A", "V is negative-semi definite if −V is positive-semi definite, with a corresponding condition on the eigenvalues of −A"], ans: 2,
analysis: `<h3>Answer: (c)</h3><p>For a symmetric A: V is positive definite iff all eigenvalues are positive; negative definite iff all are negative. V is negative definite exactly when −V is positive definite, i.e. when all eigenvalues of A are negative: "a corresponding condition on the eigenvalues of A".</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: V &lt; 0 (negative definite) needs all eigenvalues <b>negative</b>, not positive.</li>
<li><b>(b)</b>: V ≤ 0 with a zero (negative semi-definite) needs eigenvalues non-<b>positive</b> with at least one zero, not non-negative.</li>
<li><b>(d)</b>: the definition is right in spirit, but the condition should be stated on the eigenvalues of <b>A</b> (all ≤ 0, at least one zero). Stated on −A, the "corresponding" condition would be the positive one, which mixes the two up; the key prefers (c).</li></ul>
<div class="key">Uses: the Hessian test for maxima and minima (positive definite → minimum), stability of equilibria (Lyapunov functions), and positive-definite stiffness matrices in structural analysis.</div>` },

{ id: "2026-61", year: 2026, no: 61, subject: "maths", topic: "Geometric distribution", keySource: K,
q: `What is the expectation of the number of failures preceding the first success in an infinite series of independent trials with constant probability p of success in each trial ?`,
opts: ["q/p<sup>2</sup>", "q/p", "q/(1 + p)", "1/(1 − q)"], ans: 1,
analysis: `<h3>Answer: (b) q/p</h3><p>The number of failures X before the first success is geometric: P(X = r) = q<sup>r</sup>p, r = 0, 1, 2, …</p>
<p>E[X] = Σ r q<sup>r</sup> p = p · q/(1 − q)² = pq/p² = <b>q/p</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) q/p²</b>: the <b>variance</b> of this distribution.</li>
<li><b>(c) q/(1 + p)</b>: no standard meaning.</li>
<li><b>(d) 1/(1 − q)</b> = 1/p: the expected number of <b>trials</b> up to and including the first success (failures + 1).</li></ul>
<div class="tip">Example: a fair die, p = 1/6: expected failures before the first six = (5/6)/(1/6) = 5; expected throws = 6.</div><div class="tip">Variance of failures before first success = q/p²; for trials up to and including it, mean 1/p and the same variance.</div>` },

{ id: "2026-62", year: 2026, no: 62, subject: "maths", topic: "Matching problem", keySource: K,
q: `A deck of n numbered cards is thoroughly shuffled and the cards are inserted into n numbered cells one by one. If the card number i falls in the cell i, we count it as a match, otherwise not, then what is the variance of total number of such matches ?`,
opts: ["1", "0", "1/2", "3/4"], ans: 0,
analysis: `<h3>Answer: (a) 1</h3><p>Let X<sub>i</sub> = 1 if card i lands in cell i. P(X<sub>i</sub> = 1) = 1/n, so E[X] = n × 1/n = 1.</p>
<ul><li>Var(X<sub>i</sub>) = (1/n)(1 − 1/n)</li><li>Cov(X<sub>i</sub>, X<sub>j</sub>) = 1/(n(n − 1)) − 1/n²</li></ul>
<p>Var(X) = n × (1/n)(1 − 1/n) + n(n − 1) × [1/(n(n − 1)) − 1/n²] = (1 − 1/n) + (1 − (n − 1)/n) = (1 − 1/n) + 1/n = <b>1</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 0</b>: would mean the number of matches never varies.</li>
<li><b>(c) ½</b> and <b>(d) ¾</b>: come from ignoring the covariance terms or miscounting them.</li></ul>
<div class="key">Both the mean and the variance of the number of matches are exactly 1 for every n ≥ 2; for large n the distribution tends to Poisson(1). The probability of no match tends to 1/e ≈ 0.368 (the "hat-check" problem).</div>` },

{ id: "2026-63", year: 2026, no: 63, subject: "maths", topic: "Variance of a linear combination", keySource: K,
q: `Let X<sub>1</sub> and X<sub>2</sub> be two independent random variables having variances k and 4 respectively. If the variance of Y = 3X<sub>2</sub> − X<sub>1</sub> is 49, then what is the value of k ?`,
opts: ["7", "13", "9", "11"], ans: 1,
analysis: `<h3>Answer: (b) 13</h3><p>For independent variables, Var(aX + bY) = a²Var(X) + b²Var(Y).</p>
<p>Var(3X<sub>2</sub> − X<sub>1</sub>) = 9 × 4 + 1 × k = 36 + k = 49 → <b>k = 13</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 7</b>: gives 43.</li>
<li><b>(c) 9</b>: gives 45.</li>
<li><b>(d) 11</b>: gives 47.</li></ul>
<div class="tip">The minus sign does not reduce the variance: (−1)² = 1. Variances of independent variables always add.</div><div class="tip">If X<sub>1</sub> and X<sub>2</sub> were correlated, add the term 2ab Cov(X<sub>1</sub>, X<sub>2</sub>) = −6 Cov here.</div><div class="key">Standard deviations do not add this way; always square the coefficients and add the variances, then take the square root at the end: here SD(Y) = 7.</div>` },

{ id: "2026-64", year: 2026, no: 64, subject: "maths", topic: "Joint density", keySource: K,
q: `What is the value of P(X + Y &lt; ½) for the joint probability density function of X and Y f(x, y) = 3(x + y); 0 ≤ x ≤ 1, 0 ≤ y ≤ 1; 0 ≤ x + y ≤ 1 ?`,
opts: ["1/16", "1/8", "1/12", "1/7"], ans: 1,
analysis: `<h3>Answer: (b) 1/8</h3><p>Use s = x + y. The region s ≤ c is a triangle; the density depends only on s, and the length of the line x + y = s inside the first quadrant grows with s. So</p>
<p>P(X + Y &lt; c) = ∫<sub>0</sub><sup>c</sup> 3s · s ds = c³. With c = ½: <b>1/8</b>.</p>
<p>Check: at c = 1 this gives 1, so the density is properly normalised.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 1/16</b>, <b>(c) 1/12</b> and <b>(d) 1/7</b>: do not match c³ at c = ½.</li></ul>
<div class="key">Direct integration: ∫<sub>0</sub><sup>½</sup> ∫<sub>0</sub><sup>½−x</sup> 3(x + y) dy dx = 1/8, the same result.</div><div class="tip">General trick: when a joint density depends only on x + y, work with s = x + y; the density of S on [0, 1] here is 3s².</div>` },

{ id: "2026-65", year: 2026, no: 65, subject: "maths", topic: "Simpson's 3/8 rule", keySource: K,
q: `What is the value of ∫<sub>0</sub><sup>6</sup> 1/(1 + 3x + x²) dx by applying Simpson's 3/8<sup>th</sup> rule by taking h = 1 ?`,
opts: ["0·8145", "0·0295", "0·5215", "0·6315"], ans: 0,
analysis: `<h3>Answer: (a) 0·8145</h3><p>f(x) = 1/(1 + 3x + x²): y<sub>0</sub> = 1, y<sub>1</sub> = 1/5, y<sub>2</sub> = 1/11, y<sub>3</sub> = 1/19, y<sub>4</sub> = 1/29, y<sub>5</sub> = 1/41, y<sub>6</sub> = 1/55.</p>
<p>Simpson's 3/8 (6 intervals): I = (3h/8)[(y<sub>0</sub> + y<sub>6</sub>) + 3(y<sub>1</sub> + y<sub>2</sub> + y<sub>4</sub> + y<sub>5</sub>) + 2y<sub>3</sub>]</p>
<p>= (3/8)[1.01818 + 3(0.2 + 0.09091 + 0.03448 + 0.02439) + 2(0.05263)] = (3/8)[1.01818 + 1.04934 + 0.10526] = (3/8)(2.17278) = <b>0.8148</b> ≈ 0.8145.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 0·0295</b>, <b>(c) 0·5215</b> and <b>(d) 0·6315</b>: far from the rule's result (the exact integral is about 0.75).</li></ul>
<div class="key">Simpson's 3/8 rule needs the number of intervals to be a multiple of 3; Simpson's 1/3 rule needs an even number. Interior points with index a multiple of 3 get weight 2, the others weight 3.</div>` },

{ id: "2026-66", year: 2026, no: 66, subject: "maths", topic: "Finite differences", keySource: K,
q: `If y<sub>x</sub> is a polynomial for which fifth difference is constant and y<sub>1</sub> + y<sub>7</sub> = −496, y<sub>2</sub> + y<sub>6</sub> = 334, y<sub>3</sub> + y<sub>5</sub> = 962, then what is the value of y<sub>4</sub> ?`,
opts: ["571·25", "536·75", "596·50", "597·25"], ans: 2,
analysis: `<h3>Answer: (c) 596·50</h3><p>Fifth difference constant → sixth difference zero: Δ⁶y<sub>1</sub> = 0.</p>
<p>y<sub>7</sub> − 6y<sub>6</sub> + 15y<sub>5</sub> − 20y<sub>4</sub> + 15y<sub>3</sub> − 6y<sub>2</sub> + y<sub>1</sub> = 0</p>
<p>(y<sub>1</sub> + y<sub>7</sub>) − 6(y<sub>2</sub> + y<sub>6</sub>) + 15(y<sub>3</sub> + y<sub>5</sub>) = 20y<sub>4</sub></p>
<p>−496 − 2004 + 14,430 = 11,930 → y<sub>4</sub> = <b>596.5</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 571·25</b>, <b>(b) 536·75</b> and <b>(d) 597·25</b>: do not satisfy Δ⁶ = 0 with the given sums.</li></ul>
<div class="tip">The coefficients 1, −6, 15, −20, 15, −6, 1 are binomial coefficients of (E − 1)⁶. The symmetric pairing (y<sub>1</sub> + y<sub>7</sub> etc.) is what makes the given data enough. Compare 2023 Q65.</div><div class="tip">If the k-th difference is constant, the (k + 1)-th is zero; write it out with binomial coefficients and group the symmetric terms.</div>` },

{ id: "2026-67", year: 2026, no: 67, subject: "maths", topic: "Sample size for a proportion", keySource: K,
q: `An unbiased coin is thrown n times. It is desired that the relative frequency of the appearance of heads should lie between 0·49 and 0·51. What is the smallest approximate value of n that will ensure this result with 90% confidence (z = 1·645) ?`,
opts: ["5648", "6765", "4989", "8785"], ans: 1,
analysis: `<h3>Answer: (b) 6765</h3><p>The proportion of heads has mean 0.5 and standard error √(pq/n) = 0.5/√n. We need z × SE ≤ 0.01:</p>
<p>1.645 × 0.5/√n = 0.01 → √n = 82.25 → <b>n ≈ 6765</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 5648</b> and <b>(c) 4989</b>: too few tosses; the margin would exceed ±0.01 at 90% confidence.</li>
<li><b>(d) 8785</b>: more than enough, but not the smallest n.</li></ul>
<div class="key">General formula: n = z²p(1 − p)/E², largest at p = 0.5. Halving the margin E quadruples the sample size.</div><div class="tip">Check: n = 6765 gives SE = 0.5/82.25 = 0.00608, and 1.645 × 0.00608 = 0.0100 ✔.</div>` },

{ id: "2026-68", year: 2026, no: 68, subject: "maths", topic: "Double integral", keySource: K,
q: `The value of integral ∫<sub>0</sub><sup>√2</sup> ∫<sub>−√(4−2y²)</sub><sup>√(4−2y²)</sup> y dx dy is`,
opts: ["3/8", "8/3", "5/8", "8/5"], ans: 1,
analysis: `<h3>Answer: (b) 8/3</h3><p>Inner integral: ∫ y dx from −√(4 − 2y²) to √(4 − 2y²) = 2y√(4 − 2y²).</p>
<p>Outer: ∫<sub>0</sub><sup>√2</sup> 2y√(4 − 2y²) dy. Put t² = 4 − 2y², so 2y dy = −t dt; y = 0 → t = 2, y = √2 → t = 0.</p>
<p>= ∫<sub>0</sub><sup>2</sup> t · t dt = [t³/3]<sub>0</sub><sup>2</sup> = <b>8/3</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 3/8</b>: the reciprocal of the answer.</li>
<li><b>(c) 5/8</b> and <b>(d) 8/5</b>: do not follow from the substitution.</li></ul>
<div class="key">The region is the upper half of the ellipse x² + 2y² = 4. Thomas' Calculus example.</div><div class="tip">Alternative: swap the order. For fixed x, y runs from 0 to √((4 − x²)/2); integrating y gives (4 − x²)/4, and ∫ from −2 to 2 of that is 8/3 again.</div>` },

{ id: "2026-69", year: 2026, no: 69, subject: "maths", topic: "Change of order of integration", keySource: K,
q: `What is the value of ∫<sub>0</sub><sup>a</sup> ∫<sub>y²/a</sub><sup>y</sup> y / [(a − x)√(ax − y²)] dx dy by changing the order of integration ?`,
opts: ["3πa/2", "5πa/4", "πa/2", "πa/4"], ans: 2,
analysis: `<h3>Answer: (c) πa/2</h3><p>The region lies between the line x = y and the parabola y² = ax, for 0 ≤ y ≤ a. Changing the order: for 0 ≤ x ≤ a, y runs from x to √(ax).</p>
<p>Inner: ∫<sub>x</sub><sup>√(ax)</sup> y/√(ax − y²) dy = [−√(ax − y²)]<sub>x</sub><sup>√(ax)</sup> = √(ax − x²).</p>
<p>Outer: ∫<sub>0</sub><sup>a</sup> √(x(a − x))/(a − x) dx = ∫<sub>0</sub><sup>a</sup> √(x/(a − x)) dx. Put x = a sin²θ: = ∫<sub>0</sub><sup>π/2</sup> tanθ · 2a sinθ cosθ dθ = 2a ∫ sin²θ dθ = 2a × π/4 = <b>πa/2</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 3πa/2</b>, <b>(b) 5πa/4</b> and <b>(d) πa/4</b>: do not follow; (d) is a slip of a factor 2.</li></ul>
<div class="key">Changing the order turns an awkward inner integral in x into an easy one in y. B. S. Grewal example.</div>` },

{ id: "2026-70", year: 2026, no: 70, subject: "maths", topic: "Polar coordinates", keySource: K,
q: `What is the value of ∫<sub>0</sub><sup>a</sup> ∫<sub>0</sub><sup>√(a²−y²)</sup> y²√(x² + y²) dy dx by changing into polar coordinates ?`,
opts: ["πa³/20", "3πa⁵/20", "3πa³/20", "πa⁵/20"], ans: 3,
analysis: `<h3>Answer: (d) πa⁵/20</h3><p>The region is the quarter disc x² + y² ≤ a² in the first quadrant. In polar coordinates (dA = r dr dθ):</p>
<p>∫<sub>0</sub><sup>π/2</sup> ∫<sub>0</sub><sup>a</sup> (r² sin²θ)(r)(r) dr dθ = ∫<sub>0</sub><sup>a</sup> r⁴ dr × ∫<sub>0</sub><sup>π/2</sup> sin²θ dθ = (a⁵/5)(π/4) = <b>πa⁵/20</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(c)</b>: a³ is the wrong power: the integrand y²√(x² + y²) contributes r³, and with r dr the total is r⁴, integrating to a⁵.</li>
<li><b>(b) 3πa⁵/20</b>: wrong coefficient; ∫sin²θ over 0 to π/2 is π/4.</li></ul>
<div class="tip">Dimension check: y² × r × area ∝ a² × a × a² = a⁵, which rules out (a) and (c) at once.</div>` },

{ id: "2026-71", year: 2026, no: 71, subject: "reasoning", topic: "Number grid", keySource: K,
q: `What is the missing (?) value ?<br><img class="fig" src="img/2026-71.png" alt="Diamond grid. Row 1: 7 4 1. Row 2: 8 1 7 2 3. Row 3: 1 4 3 8 5 2 1. Row 4: 2 1 4 1 4. Row 5: 7 ? 3.">`,
opts: ["6", "4", "5", "2"], ans: 2,
analysis: `<h3>Answer: (c) 5</h3><p>In every row, the middle number is half the sum of the other numbers in that row.</p>
<table><tr><th>Row</th><th>Others</th><th>Half-sum</th><th>Middle</th></tr><tr><td>7 4 1</td><td>7 + 1</td><td>4</td><td>4 ✔</td></tr><tr><td>8 1 7 2 3</td><td>8 + 1 + 2 + 3</td><td>7</td><td>7 ✔</td></tr><tr><td>1 4 3 8 5 2 1</td><td>1 + 4 + 3 + 5 + 2 + 1</td><td>8</td><td>8 ✔</td></tr><tr><td>2 1 4 1 4</td><td>2 + 1 + 1 + 4</td><td>4</td><td>4 ✔</td></tr><tr><td>7 ? 3</td><td>7 + 3</td><td><b>5</b></td><td>?</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) 6</b>, <b>(b) 4</b> and <b>(d) 2</b>: break the rule that holds for all four complete rows.</li></ul>
<div class="tip">With symmetric grids, test row rules first (sum, half-sum, product), then column rules.</div><div class="tip">Check the column through the middle: 4, 7, 8, 4, 5 does not follow a simple rule, which confirms that the pattern is row-wise.</div>` },

{ id: "2026-72", year: 2026, no: 72, subject: "reasoning", topic: "Inscribed and circumscribed circles", keySource: K,
q: `Consider a square of side 6 cm, a circle is inscribed inside the square. Another circle circumscribes the square. The ratio of the areas of the inscribed circle to the circumscribed circle is`,
opts: ["1 : π/4", "1 : π", "1 : 15", "1 : 2"], ans: 3,
analysis: `<h3>Answer: (d) 1 : 2</h3><p>Inscribed circle radius = half the side = 3 cm. Circumscribed circle radius = half the diagonal = 6√2/2 = 3√2 cm.</p>
<p>Area ratio = (3)² : (3√2)² = 9 : 18 = <b>1 : 2</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 1 : π/4</b>: confuses the circle with the square's area ratio (inscribed circle : square = π : 4).</li>
<li><b>(b) 1 : π</b>: mixes a circle's area with a radius.</li>
<li><b>(c) 1 : 15</b>: no basis.</li></ul>
<div class="key">The ratio is 1 : 2 for any square, since R/r = √2 always. For an equilateral triangle, R/r = 2, so the area ratio is 1 : 4.</div><div class="tip">Actual areas: inscribed circle 9π ≈ 28.3 cm²; circumscribed 18π ≈ 56.5 cm²; the square (36 cm²) lies between them.</div>` },

{ id: "2026-73", year: 2026, no: 73, subject: "reasoning", topic: "Proof without words", keySource: K,
q: `What does this diagram demonstrate ?<br><img class="fig" src="img/2026-73.png" alt="A rectangle of blocks divided by a diagonal into two identical staircases of 1, 2, 3, … blocks.">`,
opts: ["1² + 2² + 3² + … + n² = n(n + 1)(2n + 1)/6", "1 + 2 + 3 + … + n = n(n + 1)/2", "2² + 4² + 6² + … + (2n)² = 2n(n + 1)(2n + 1)/3", "None of the above"], ans: 1,
analysis: `<h3>Answer: (b) 1 + 2 + 3 + … + n = n(n + 1)/2</h3><p>The figure shows two identical staircases of blocks (rows of 1, 2, 3, … n blocks), one turned upside down and fitted against the other. Together they fill a rectangle n by (n + 1). So twice the staircase = n(n + 1), and one staircase = <b>n(n + 1)/2</b>: the sum of the first n natural numbers.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: the sum of squares needs three-dimensional blocks (or six copies of a square pyramid), not a flat staircase.</li>
<li><b>(c)</b>: the sum of even squares is again a sum of squares, not shown here.</li>
<li><b>(d)</b>: the picture does demonstrate formula (b).</li></ul>
<div class="key">This "proof without words" goes back to the Pythagoreans' triangular numbers. Gauss is said to have used the same pairing idea as a schoolboy: 1 + 100, 2 + 99, …, fifty pairs of 101.</div>` },

{ id: "2026-74", year: 2026, no: 74, subject: "reasoning", topic: "Letter frame", keySource: K,
q: `What is the missing (?) letter ?<br><img class="fig" src="img/2026-74.png" alt="Frame: corners A (top left), C (top right), B (bottom left), D (bottom right). Top: EGK. Right side: P, R, V. Bottom: OJF. Left side: ?, U, Q.">`,
opts: ["H", "Z", "L", "Y"], ans: 1,
analysis: `<h3>Answer: (b) Z</h3><p>Each side holds three letters in arithmetic-like steps, read from one corner towards the next:</p>
<ul><li>Top (A → C): E(5), G(7), K(11): steps +2, +4.</li><li>Right (C → D): P(16), R(18), V(22): steps +2, +4.</li><li>Bottom (D → B, right to left): F(6), J(10), O(15): steps +4, +5.</li><li>Left (B → A, bottom to top): Q(17), U(21), ?: steps +4, then +5 → <b>Z(26)</b>.</li></ul>
<p>The two horizontal-to-vertical pairs follow the same pattern: top and right use +2, +4; bottom and left use +4, +5.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) H</b>, <b>(c) L</b> and <b>(d) Y</b>: none gives the +5 step after U; Y would give +4.</li></ul>
<div class="tip">MADE EASY reads it another way: the middle letter of each side is the average of the outer two, minus 1 or 0.5. With Q and Z the left side gives (26 + 17)/2 − 0.5 = 21 = U, consistent with the same answer.</div>` },

{ id: "2026-75", year: 2026, no: 75, subject: "reasoning", topic: "Geometric bounds on π", keySource: K,
q: `Following figure represents a circle inside a square. What does the diagram establish ?<br><img class="fig" src="img/2026-75.png" alt="A circle inscribed in a square, touching all four sides.">`,
opts: ["π &lt; 4", "π &gt; 3", "π &gt; 2", "π ≥ 2√2"], ans: 0,
analysis: `<h3>Answer: (a) π &lt; 4</h3><p>The circle (radius r) lies inside the square of side 2r, so its area is less than the square's: πr² &lt; 4r², giving <b>π &lt; 4</b>. (Equally, its perimeter 2πr is less than the square's 8r.)</p>
<h3>Why not the others</h3><ul>
<li><b>(b) π &gt; 3</b>: true, but shown by an <b>inscribed</b> regular hexagon (perimeter 6r inside the circle's 2πr), not by this figure.</li>
<li><b>(c) π &gt; 2</b>: true, shown by an inscribed square (area 2r² &lt; πr²), not this figure.</li>
<li><b>(d) π ≥ 2√2</b>: the inscribed square's perimeter is 4√2 r &lt; 2πr, so this is also true, but again needs an inscribed square.</li></ul>
<div class="key">Archimedes squeezed π between inscribed and circumscribed 96-sided polygons: 3 10/71 &lt; π &lt; 3 1/7.</div>` }
  );
})();
