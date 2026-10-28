// ESE 2020 Prelims Paper I, Series A, Q26–50
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2020-26", year: 2020, no: 26, subject: "maths", topic: "Complex logarithm", doubt: true,
q: `The general value of log (1 + i) + log (1 − i) is`,
opts: ["log 2 − 4nπi", "log 2 + 4nπi", "log 2 + 2nπi", "log 2 − 2nπi"], ans: 1,
analysis: `<h3>Answer: (b) log 2 + 4nπi (official key)</h3><p>The general logarithm is Log z = log|z| + i(arg z + 2nπ). Log(1 + i) = log √2 + i(π/4 + 2nπ) and Log(1 − i) = log √2 + i(−π/4 + 2nπ). Adding with the <b>same</b> n (as textbooks such as B.S. Grewal do): log 2 + 4nπi.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> −4nπi is the same set of values as (b) (n runs over all integers), but the key gives (b).</li>
<li><b>(c)</b> and <b>(d)</b> 2nπi arise if the two logarithms take independent integers m and k: 2(m + k)πi.</li></ul>
<div class="note">In doubt (key followed). Strictly, the two logarithms are independent multi-valued functions, so their sum is log 2 + 2(m + k)πi = log 2 + 2nπi, the full set in (c)/(d); the "4nπi" form arises only from using one n for both. Also, (a) and (b) describe the same set, as do (c) and (d). The key follows the textbook convention.</div>` },

{ id: "2020-27", year: 2020, no: 27, subject: "maths", topic: "Probability",
q: `A bag contains 4 white and 2 black balls and another bag contains 3 of each colour. A bag is selected at random and a ball is drawn at random from the bag chosen. The probability of the white ball drawn is`,
opts: ["1/3", "1/4", "5/12", "7/12"], ans: 3,
analysis: `<h3>Answer: (d) 7/12</h3><p>Total probability: P(W) = ½ × 4/6 + ½ × 3/6 = 1/3 + 1/4 = <b>7/12</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 1/3 counts only the first bag's contribution.</li>
<li><b>(b)</b> 1/4 counts only the second bag's contribution.</li>
<li><b>(c)</b> 5/12 is P(black).</li></ul>
<div class="tip">Bayes' theorem follow-up: given a white ball, P(first bag) = (1/3)/(7/12) = 4/7.</div><div class="key">Theorem of total probability: P(W) = Σ P(bag i) × P(W | bag i). It is the starting point for Bayes' theorem.</div><div class="tip">Common slip: averaging the two bags' totals (7 white out of 12 balls) gives 7/12 here only because both bags hold six balls; with unequal bag sizes the shortcut fails.</div>` },

{ id: "2020-28", year: 2020, no: 28, subject: "maths", topic: "Probability density",
q: `X is a continuous random variable with probability density function given by<br>f(x) = kx (0 ≤ x &lt; 2)<br>= 2k (2 ≤ x &lt; 4)<br>= −kx + 6k (4 ≤ x &lt; 6)<br>The value of k will be`,
opts: ["2/3", "1/8", "1", "8"], ans: 1,
analysis: `<h3>Answer: (b) 1/8</h3><p>Total probability must be 1. The pdf is a trapezium: ∫<sub>0</sub><sup>2</sup> kx dx = 2k; ∫<sub>2</sub><sup>4</sup> 2k dx = 4k; ∫<sub>4</sub><sup>6</sup> (6k − kx) dx = 12k − 10k = 2k. Total 8k = 1 → <b>k = 1/8</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 2/3, <b>(c)</b> 1 and <b>(d)</b> 8 make the total area 16/3, 8 and 64.</li></ul>
<div class="tip">Geometric check: trapezium with parallel sides 6 (base) and 2 (top), height 2k → area = ½(6 + 2)(2k) = 8k.</div><div class="key">For any pdf: f(x) ≥ 0 and ∫f(x)dx over the whole range = 1. With k = 1/8 the mean is 3 by symmetry (the trapezium is symmetric about x = 3).</div><div class="tip">Follow-up: P(2 ≤ X ≤ 4) = 4k = 1/2; P(X &lt; 2) = 2k = 1/4.</div>` },

{ id: "2020-29", year: 2020, no: 29, subject: "maths", topic: "Binomial distribution",
q: `The first moment about origin of binomial distribution is`,
opts: ["np", "npq", "n(1 − p)", "n(1 − p)q"], ans: 0,
analysis: `<h3>Answer: (a) np</h3><p>The first raw moment (about the origin) is the mean: E(X) = Σ x C(n, x) pˣqⁿ⁻ˣ = <b>np</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> npq is the variance, the second moment about the mean.</li>
<li><b>(c)</b> n(1 − p) = nq is the mean number of failures.</li>
<li><b>(d)</b> nq² has no standard meaning.</li></ul>
<table><tr><th>Distribution</th><th>Mean</th><th>Variance</th></tr><tr><td>Binomial</td><td>np</td><td>npq</td></tr><tr><td>Poisson</td><td>λ</td><td>λ</td></tr><tr><td>Exponential</td><td>1/λ</td><td>1/λ²</td></tr><tr><td>Uniform (a, b)</td><td>(a + b)/2</td><td>(b − a)²/12</td></tr></table><div class="key">Moments: first raw moment μ₁′ = mean; second central moment μ₂ = variance. For the binomial, μ₂′ (second raw moment) = npq + n²p².</div><div class="tip">Example: a fair coin tossed 10 times: mean 10 × 0.5 = 5 heads, variance 2.5, standard deviation about 1.58. The binomial tends to the normal for large n and to the Poisson when n is large and p small (λ = np).</div>` },

{ id: "2020-30", year: 2020, no: 30, subject: "maths", topic: "Regression",
q: `For the regression equations y = 0·516x + 33·73 and x = 0·512y + 32·52 the means of x and y are nearly`,
opts: ["67·6 and 68·6", "68·6 and 68·6", "67·6 and 58·6", "68·6 and 58·6"], ans: 0,
analysis: `<h3>Answer: (a) 67·6 and 68·6</h3><p>Both regression lines pass through (x̄, ȳ). Substituting: x = 0.512(0.516x + 33.73) + 32.52 = 0.2642x + 49.79 → x̄ ≈ 67.7. Then ȳ = 0.516 × 67.7 + 33.73 ≈ 68.6.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> x̄ = 68.6 gives ȳ = 69.1, inconsistent.</li>
<li><b>(c)</b> and <b>(d)</b> ȳ = 58.6 does not satisfy either line.</li></ul>
<div class="tip">Correlation from the slopes: r = √(0.516 × 0.512) ≈ 0.51 (positive, since both slopes are positive).</div><div class="key">Each regression line passes through (x̄, ȳ), so the means are found by solving the two equations simultaneously. Identify which is "y on x" by the form y = a + bx; the product of the two slopes equals r².</div>` },

{ id: "2020-31", year: 2020, no: 31, subject: "design", topic: "Conic sections",
q: `In a rectangular hyperbola, if a curve is traced out by a point moving in such a way that the product of its distances from two fixed lines at right angles to each other is a constant, then those fixed lines are called`,
opts: ["asymptotes", "intercepts", "holes", "limits"], ans: 0,
analysis: `<h3>Answer: (a) asymptotes</h3><p>A rectangular hyperbola is the locus of a point whose distances from two perpendicular lines have a constant product: xy = c². Those lines are its <b>asymptotes</b>, which the curve approaches but never meets. Engineering drawing constructs it this way; Boyle's law PV = constant is a rectangular hyperbola on a P–V diagram.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Intercepts are points where a curve crosses the axes; a rectangular hyperbola never crosses its asymptotes.</li>
<li><b>(c)</b> and <b>(d)</b> are not geometric terms for lines related to a conic.</li></ul>` },

{ id: "2020-32", year: 2020, no: 32, subject: "design", topic: "Conic sections",
q: `The line passing through the focus and perpendicular to the directrix is called`,
opts: ["axis", "vertex", "eccentricity", "conic"], ans: 0,
analysis: `<h3>Answer: (a) axis</h3><p>A conic is the locus of a point whose distance from a fixed point (focus) bears a constant ratio (eccentricity e) to its distance from a fixed line (directrix). The line through the focus perpendicular to the directrix is the <b>axis</b> of the conic.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> The vertex is the point where the conic crosses its axis.</li>
<li><b>(c)</b> Eccentricity is the constant ratio, not a line.</li>
<li><b>(d)</b> Conic is the curve itself.</li></ul>
<div class="tip">The latus rectum is the chord through the focus perpendicular to the axis. For a parabola y² = 4ax: focus (a, 0), directrix x = −a, latus rectum 4a.</div>` },

{ id: "2020-33", year: 2020, no: 33, subject: "design", topic: "Dimensioning",
q: `Dimensions in a series may be placed in any one of the following ways, except`,
opts: ["progressive dimensioning", "proportional dimensioning", "continuous dimensioning", "chain dimensioning"], ans: 1,
analysis: `<h3>Answer: (b) proportional dimensioning</h3><p>A series of dimensions along a line can be given as <b>chain</b> (continuous) dimensioning, each dimension from the previous feature, or as <b>progressive</b> (parallel or baseline) dimensioning, all from a common datum. "Proportional dimensioning" is not an arrangement of dimensions.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Progressive (parallel) dimensioning measures every feature from one datum, so errors do not accumulate.</li>
<li><b>(c)</b> and <b>(d)</b> Continuous and chain dimensioning are the same method; tolerances add up along the chain.</li></ul>
<div class="tip">Other methods in IS/SP 46: combined dimensioning, and dimensioning by coordinates. Aligned and unidirectional systems refer to the direction in which dimension text is written.</div>` },

{ id: "2020-34", year: 2020, no: 34, subject: "design", topic: "Design for manufacture",
q: `Among the effects of design specifications on costs, which one of the following is the most significant that influences the producibility of end product ?`,
opts: ["Standard size", "Large tolerance", "Breakeven point", "Cost estimate"], ans: 1,
analysis: `<h3>Answer: (b) Large tolerance</h3><p>Tolerances have the strongest effect of all design specifications on manufacturing cost and producibility. Cost rises steeply as tolerances tighten (finer machines, more operations, inspection, scrap). Specifying the <b>largest tolerance</b> that still meets the function makes a part easier and cheaper to produce.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Standard sizes also cut cost (fewer tools, stock items), but their effect is smaller than tolerances.</li>
<li><b>(c)</b> The break-even point is a financial result, not a design specification.</li>
<li><b>(d)</b> A cost estimate measures cost; it does not influence producibility.</li></ul>
<div class="tip">Rough rule: halving a tolerance can double the machining cost. IT grades (ISO 286): IT5–7 for precision fits, IT11–16 for rough work.</div>` },

{ id: "2020-35", year: 2020, no: 35, subject: "quality", topic: "Product liability",
q: `Which one of the following is not the best approach for the prevention of product liability ?`,
opts: ["Analysis and design", "Quality control", "Comprehensive testing", "Cost"], ans: 3,
analysis: `<h3>Answer: (d) Cost</h3><p>Product liability claims arise when a defective product injures someone. They are prevented by making products safe: careful analysis and design (hazard analysis, FMEA, fail-safe features, warnings), quality control in manufacture, and comprehensive testing. Cost is a constraint, not a method of prevention; cutting cost at the expense of safety is a common <b>cause</b> of liability.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Design is where most defects (and most liability) originate, so design analysis is the first line of prevention.</li>
<li><b>(b)</b> Quality control prevents manufacturing defects.</li>
<li><b>(c)</b> Testing (including field and accelerated tests) catches failures before customers do.</li></ul>
<div class="tip">India's Consumer Protection Act, 2019 (Chapter VI) introduced product liability: manufacturers, service providers and sellers are liable for harm from manufacturing defects, design defects, deviations from specifications, or inadequate warnings.</div>` },

{ id: "2020-36", year: 2020, no: 36, subject: "design", topic: "Uncertainty in design",
q: `Which one of the following is not the way of estimating the statistical parameters and is integral part of analysis or synthesis tasks when probability of failure is involved ?`,
opts: ["Propagation of error", "Propagation of uncertainty", "Propagation of weight", "Propagation of dispersion"], ans: 2,
analysis: `<h3>Answer: (c) Propagation of weight</h3><p>When a design quantity depends on several uncertain variables (dimensions, loads, material strengths), the statistics (mean and variance) of the result are estimated by <b>propagation of error</b>, also called propagation of uncertainty or of dispersion: σ<sub>y</sub>² ≈ Σ(∂y/∂x<sub>i</sub>)²σ<sub>i</sub>². This underlies reliability-based design (probability of failure from stress and strength distributions). "Propagation of weight" is not such a method.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> are three names for the same statistical technique, which is used in design.</li></ul>
<div class="tip">Reliability index for normal stress S and strength R: z = (μ<sub>R</sub> − μ<sub>S</sub>)/√(σ<sub>R</sub>² + σ<sub>S</sub>²); probability of failure = Φ(−z).</div>` },

{ id: "2020-37", year: 2020, no: 37, subject: "design", topic: "Machine safety",
q: `In order to limit the seriousness of an accident, emergency controls should be provided with which of the following as determining factors in the location of emergency stops ?`,
opts: ["Speed and ease of operation", "Common sense of workers", "Nearest exits and checkpoints", "Supervisors and decision-makers"], ans: 0,
analysis: `<h3>Answer: (a) Speed and ease of operation</h3><p>An emergency stop must be reachable and operable instantly by the person in danger or nearby, without hesitation: so its location is decided by how quickly and easily it can be reached and actuated (red mushroom-head button on yellow background, within reach of each operator position, pull cords along conveyors).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Safety must not depend on workers' common sense; design must make the right action easy.</li>
<li><b>(c)</b> Exits are for evacuation, not for stopping a machine.</li>
<li><b>(d)</b> Emergency stops must be usable by anyone at the point of danger, not only by supervisors.</li></ul>
<div class="tip">Standard: ISO 13850 (emergency stop design): stop category 0 (immediate power removal) or 1 (controlled stop then power removal); the stop must latch until manually reset.</div>` },

{ id: "2020-38", year: 2020, no: 38, subject: "design", topic: "Human factors in safety",
q: `Human engineering approach is followed to prevent accidents by giving due consideration to physical and mental limitations of the workers by`,
opts: ["giving constant attention to how a worker is likely to react rather than how supervisor would like him to react", "imposing too many safety rules", "not permitting to make safety device or guard inoperative", "giving first-aid attention in case of injury"], ans: 0,
analysis: `<h3>Answer: (a) giving constant attention to how a worker is likely to react rather than how supervisor would like him to react</h3><p>Human engineering (ergonomics) designs machines, controls and tasks around how people actually perceive and react, including mistakes under stress or fatigue, rather than assuming ideal behaviour. If a design invites a predictable error, the design is changed.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Too many rules are ignored; human engineering prefers designing out the hazard.</li>
<li><b>(c)</b> Preventing guards from being disabled is engineering/administrative control, a separate approach.</li>
<li><b>(d)</b> First aid limits harm after the accident; it does not prevent it.</li></ul>
<div class="tip">Examples: shape-coded controls, consistent directions of movement (clockwise to increase), interlocks, poka-yoke (mistake-proofing).</div>` },

{ id: "2020-39", year: 2020, no: 39, subject: "design", topic: "Accident causes",
q: `Which one of the following is not an operator error through triggers leading to an accident which confuses and traps into making mistake ?`,
opts: ["Faulty design or construction of machine tool", "Poor housekeeping and cleanliness", "Standard operating safety practice", "Lack of standardization and identification"], ans: 2,
analysis: `<h3>Answer: (c) Standard operating safety practice</h3><p>Operator errors are often "trapped" by the surroundings: things that confuse the operator or make a mistake likely. Following standard operating safety practice <b>prevents</b> errors; it is not a trigger.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Faulty design (controls in odd places, missing guards) invites mistakes.</li>
<li><b>(b)</b> Poor housekeeping (clutter, oil on floors, poor lighting) leads to slips and wrong actions.</li>
<li><b>(d)</b> Lack of standardisation and labelling (different control layouts, unmarked switches and pipes) confuses operators.</li></ul>
<div class="tip">Japanese 5S (Sort, Set in order, Shine, Standardise, Sustain) directly tackles (b) and (d).</div>` },

{ id: "2020-40", year: 2020, no: 40, subject: "design", topic: "Safety programmes",
q: `Which one of the following is not included in the safety program for achieving good results during the prevention of accidents ?`,
opts: ["Development of safe working conditions", "Promotion of employees participation in safety", "Compensation and medical payment", "Corrective action when safety rules are ignored"], ans: 2,
analysis: `<h3>Answer: (c) Compensation and medical payment</h3><p>A safety programme aims to <b>prevent</b> accidents. Compensation and medical payment come after an accident has happened (under the Employees' Compensation Act, 1923 and ESI, now the Code on Social Security, 2020); they are part of injury management and insurance, not prevention.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Safe working conditions (guarding, ventilation, lighting, layout) are the core of prevention.</li>
<li><b>(b)</b> Employee participation (safety committees, suggestions, training) builds a safety culture.</li>
<li><b>(d)</b> Enforcing rules with corrective action makes the programme credible.</li></ul>
<div class="tip">Heinrich's domino theory (1931): about 88% of accidents arise from unsafe acts and 10% from unsafe conditions; his accident triangle is 1 major : 29 minor : 300 no-injury incidents.</div>` },

{ id: "2020-41", year: 2020, no: 41, subject: "quality", topic: "Responsibility for quality",
q: `Which of the following departments ensure the quality of the product ?<ol><li>Product design and development</li><li>Marketing and product planning</li><li>Packaging and shipping</li><li>Sales</li></ol>`,
opts: ["1, 2 and 3", "1, 2 and 4", "1, 3 and 4", "2, 3 and 4"], ans: 0,
analysis: `<h3>Answer: (a) 1, 2 and 3</h3><p>Quality is built in at every stage of the product's journey (Juran's spiral; Besterfield's list of quality responsibilities):</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Design and development sets the quality of design: specifications, tolerances, reliability.</li>
<li><b>2 (yes):</b> Marketing and product planning find out what customers need, which defines what "quality" must mean.</li>
<li><b>3 (yes):</b> Packaging and shipping preserve quality until the product reaches the customer (damage in transit is a quality failure).</li>
<li><b>4 (not counted):</b> Sales sells the product; it influences customer satisfaction but does not ensure the product's quality.</li></ul>
<div class="tip">Other contributors: purchasing (supplier quality), process engineering, manufacturing, inspection and test, after-sales service.</div>` },

{ id: "2020-42", year: 2020, no: 42, subject: "quality", topic: "Areas of quality control",
q: `Which of the following are the general subareas of quality control ?<ol><li>Off-line quality control</li><li>Sales/market share</li><li>Statistical process control</li><li>Acceptance sampling plans</li></ol>`,
opts: ["1, 2 and 3", "1, 3 and 4", "1, 2 and 4", "2, 3 and 4"], ans: 1,
analysis: `<h3>Answer: (b) 1, 3 and 4</h3><h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Off-line quality control acts before production: robust design and process design (Taguchi methods, design of experiments).</li>
<li><b>2 (no):</b> Sales and market share are business results, not a subarea of quality control.</li>
<li><b>3 (yes):</b> Statistical process control monitors production in real time with control charts (on-line control).</li>
<li><b>4 (yes):</b> Acceptance sampling decides whether to accept or reject lots of incoming or finished goods.</li></ul>
<div class="tip">Evolution: inspection → statistical quality control (Shewhart charts, Dodge-Romig sampling tables) → quality assurance → TQM.</div>` },

{ id: "2020-43", year: 2020, no: 43, subject: "quality", topic: "Crosby's 14 steps",
q: `Which of the following steps come under 14-step plan for quality improvement ?<ol><li>Ad hoc committee for the zero defects program</li><li>Cost of quality evaluation</li><li>Quantity measurements</li><li>Supervisor training</li></ol>`,
opts: ["1, 2 and 3", "1, 2 and 4", "1, 3 and 4", "2, 3 and 4"], ans: 1,
analysis: `<h3>Answer: (b) 1, 2 and 4</h3><p>Philip Crosby's 14 steps (<i>Quality is Free</i>, 1979): 1 management commitment, 2 quality improvement team, 3 <b>quality</b> measurement, 4 cost of quality evaluation, 5 quality awareness, 6 corrective action, 7 ad hoc committee for the zero defects programme, 8 supervisor training, 9 zero defects day, 10 goal setting, 11 error-cause removal, 12 recognition, 13 quality councils, 14 do it over again.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> step 7.</li>
<li><b>2 (yes):</b> step 4.</li>
<li><b>3 (no):</b> the step is <b>quality</b> measurement; "quantity" measurement is not a step.</li>
<li><b>4 (yes):</b> step 8 (supervisor or employee education).</li></ul>
<div class="tip">Crosby's four absolutes: quality is conformance to requirements; the system is prevention; the performance standard is zero defects; the measurement is the price of non-conformance.</div>` },

{ id: "2020-44", year: 2020, no: 44, subject: "quality", topic: "Acceptance sampling",
q: `An Average Outgoing Quality (AOQ) is<br>where P<sub>a</sub> = Probability of accepting the lot, p = Incoming lot quality, N = Lot size, n = Sample size`,
opts: ["P<sub>a</sub>p(N)/(N − n)", "P<sub>a</sub>p(N + n)/N", "P<sub>a</sub>p(N − n)/(n − N)", "P<sub>a</sub>p(N − n)/N"], ans: 3,
analysis: `<h3>Answer: (d) AOQ = P<sub>a</sub> p (N − n)/N</h3><p>Under rectifying inspection, accepted lots go out with defectives only in the uninspected part (N − n) of the lot; rejected lots are screened 100% and corrected. The average fraction defective going out is therefore P<sub>a</sub> × p × (N − n)/N. When N is large relative to n, AOQ ≈ P<sub>a</sub> p.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Inverts the ratio; it would exceed p.</li>
<li><b>(b)</b> (N + n)/N &gt; 1, also exceeding the incoming quality.</li>
<li><b>(c)</b> (N − n)/(n − N) = −1, a negative fraction.</li></ul>
<div class="tip">AOQL is the maximum of AOQ over all incoming qualities p; ATI (average total inspection) = n + (1 − P<sub>a</sub>)(N − n).</div>` },

{ id: "2020-45", year: 2020, no: 45, subject: "quality", topic: "Service quality measures",
q: `Which one of the following is the measure of service quality that correlates with the human factors and behavioural characteristics of service quality ?`,
opts: ["Number of complementary responses based on human traits in delivery of service", "Proportion of income tax returns prepared by an agency that have errors", "Shabby appearance of a receptionist in a bank or hotel", "Inadequate temperature control in a convention meeting room"], ans: 0,
analysis: `<h3>Answer: (a) Number of complementary responses based on human traits in delivery of service</h3><p>Service-quality measures fall into groups (Besterfield): (1) human factors and behavioural characteristics, measured by customer reactions such as the number of complimentary (or complaint) responses about staff courtesy and helpfulness; (2) timeliness; (3) service non-conformities (errors in the service output); (4) facility non-conformities.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> Errors in prepared tax returns measure <b>service non-conformity</b> (output accuracy).</li>
<li><b>(c)</b> A receptionist's appearance is a <b>tangibles</b>/facility characteristic.</li>
<li><b>(d)</b> Room temperature control is a <b>facility</b> non-conformity.</li></ul>` },

{ id: "2020-46", year: 2020, no: 46, subject: "quality", topic: "Quality of conformance",
q: `Which of the following factors affect the quality of conformance in construction ?<ol><li>Site construction methods</li><li>Technical specifications</li><li>Engineering and design process</li><li>Supervision and control</li></ol>`,
opts: ["1 and 3", "2 and 3", "2 and 4", "1 and 4"], ans: 3,
analysis: `<h3>Answer: (d) 1 and 4</h3><p><b>Quality of design</b> is how well the design and specifications meet the owner's needs; <b>quality of conformance</b> is how well the actual construction matches that design and specification.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (conformance):</b> Construction methods on site decide whether the work matches the drawings.</li>
<li><b>2 (design):</b> Technical specifications define the intended quality; they belong to quality of design.</li>
<li><b>3 (design):</b> The engineering and design process produces the design itself.</li>
<li><b>4 (conformance):</b> Supervision, inspection and control ensure the work conforms.</li></ul>
<div class="tip">Juran: quality of design + quality of conformance + availability + field service. Conformance is measured by defect rates, rework and inspection results.</div>` },

{ id: "2020-47", year: 2020, no: 47, subject: "quality", topic: "Prestressed concrete inspection",
q: `Which of the following considerations are important during inspection of the work in prestressed concrete works ?<ol><li>Sheathings are threaded properly including correct threading of couplers and taping of joints</li><li>Only approved sheathings, HTS strands, anchor heads and wedges are to be used</li><li>Splicing of reinforcement to be provided at the joints</li></ol>`,
opts: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"], ans: 1,
analysis: `<h3>Answer: (b) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (important):</b> Sheathing ducts must be continuous and sealed (couplers threaded, joints taped) so that cement slurry does not enter and block the duct before stressing and grouting.</li>
<li><b>2 (important):</b> Only approved, tested materials (sheathing, high-tensile steel strands, anchorages, wedges) are used, since prestressing steel works at very high stress.</li>
<li><b>3 (wrong):</b> Splices of reinforcement should be <b>staggered and kept away</b> from joints and points of maximum stress, not placed at the joints.</li></ul>
<div class="tip">Other checks (IRC:112, MoRTH specifications): duct profile and supports, cover, elongation versus jack pressure during stressing, and complete grouting of ducts to prevent strand corrosion.</div>` },

{ id: "2020-48", year: 2020, no: 48, subject: "quality", topic: "Concrete quality control",
q: `The standard deviation σ for sampling in the case of concrete for construction engineering and management is<br>where X<sub>1</sub>, X<sub>2</sub>, …, X<sub>n</sub> = Compressive strengths of the individual cubes, N = Number of cubes tested, X̄ = Average of series of compressive strength values`,
opts: ["√[Σ(X + X̄)²/(N + 1)]", "√[Σ(X − X̄)²/(N + 1)]", "√[Σ(X̄ + X)²/(N − 1)]", "√[Σ(X − X̄)²/(N − 1)]"], ans: 3,
analysis: `<h3>Answer: (d) σ = √[Σ(X − X̄)²/(N − 1)]</h3><p>The sample standard deviation uses deviations from the mean, squared, summed, divided by (N − 1) (Bessel's correction for estimating from a sample), as in IS 456 cl. 8.2.2 for concrete strength.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> and <b>(c)</b> use sums (X + X̄), not deviations.</li>
<li><b>(b)</b> divides by N + 1, which has no statistical basis.</li></ul>
<div class="tip">Target mean strength (IS 10262:2019): f′<sub>ck</sub> = f<sub>ck</sub> + 1.65s (or f<sub>ck</sub> + X, whichever is higher). Assumed s for M20–M25 is 4 N/mm² until 30 test results are available.</div>` },

{ id: "2020-49", year: 2020, no: 49, subject: "quality", topic: "Sources of variation",
q: `Which of the following variations are true in piece part production ?<ol><li>Piece-to-piece variation</li><li>Time-to-time variation</li><li>Within-piece variation</li><li>Process-to-process variation</li></ol>`,
opts: ["1, 2 and 4", "1, 3 and 4", "2, 3 and 4", "1, 2 and 3"], ans: 3,
analysis: `<h3>Answer: (d) 1, 2 and 3</h3><p>Besterfield lists three categories of variation in piece-part production:</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (yes):</b> Piece-to-piece: differences among parts produced at about the same time.</li>
<li><b>2 (yes):</b> Time-to-time: differences between parts produced at different times (tool wear, temperature, shifts).</li>
<li><b>3 (yes):</b> Within-piece: variation within a single part (surface roughness, taper, out-of-roundness).</li>
<li><b>4 (no):</b> "Process-to-process" is not one of the standard categories; differences between processes are handled as different populations.</li></ul>
<div class="tip">Multi-vari charts show all three types at once to find which dominates.</div>` },

{ id: "2020-50", year: 2020, no: 50, subject: "quality", topic: "Attribute control charts",
q: `Which one of the following is the objective of attribute charts in production process control ?`,
opts: ["To determine the acceptance criteria of a product before production", "To evaluate the quality performance of operating and management personnel", "To keep a periodic record of a particular characteristic", "To determine the highest quality level"], ans: 1,
analysis: `<h3>Answer: (b) To evaluate the quality performance of operating and management personnel</h3><p>Besterfield lists the objectives of attribute charts (p, np, c, u charts): determine the average quality level; bring significant changes to management's attention; improve quality; <b>evaluate the quality performance of operating and management personnel</b>; suggest where variable charts are needed; and determine acceptance criteria of a product <b>before shipment</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Acceptance criteria are determined before <b>shipment</b>, not before production.</li>
<li><b>(c)</b> Keeping a record of one measured characteristic is what variable charts (X̄–R) do in detail.</li>
<li><b>(d)</b> Charts determine the <b>average</b> quality level, not the highest.</li></ul>
<table><tr><th>Chart</th><th>Plots</th></tr><tr><td>p</td><td>Fraction defective (variable sample size)</td></tr><tr><td>np</td><td>Number defective (constant sample size)</td></tr><tr><td>c</td><td>Defects per unit (constant area)</td></tr><tr><td>u</td><td>Defects per unit (variable size)</td></tr></table>` }
);
