// ESE 2021 Prelims Paper I, Series A, Q51–75
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2021-51", year: 2021, no: 51, subject: "ca", topic: "Awards",
q: `Who received the prestigious Abel Prize for the year 2020 ?`,
opts: ["Eric Adelberger and Blayne Heckel", "Hillel Furstenberg and Gregory Margulis", "Yvonne Farrell and Shelley McNamara", "Nina Holden and Lisa Piccirillo"], ans: 1,
analysis: `<h3>Answer: (b) Hillel Furstenberg and Gregory Margulis</h3><p>The Abel Prize 2020 (Norwegian Academy of Science and Letters, often called the "Nobel of mathematics") went to Hillel Furstenberg and Gregory Margulis for pioneering the use of methods from probability and dynamics in group theory, number theory and combinatorics.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Eric Adelberger, Jens Gundlach and Blayne Heckel won the 2021 Breakthrough Prize in Fundamental Physics.</li>
<li><b>(c)</b> Yvonne Farrell and Shelley McNamara won the Pritzker architecture prize in 2020.</li>
<li><b>(d)</b> Nina Holden and Lisa Piccirillo won 2021 New Horizons/Maryam Mirzakhani New Frontiers prizes.</li></ul>
<div class="tip">The Abel Prize 2025 went to Masaki Kashiwara (Japan). The Fields Medal is given every four years, at the International Congress of Mathematicians, to mathematicians under 40.</div>` },

{ id: "2021-52", year: 2021, no: 52, subject: "ca", topic: "Nobel Prizes 2020",
q: `Select the incorrect pair of the 2020 Nobel Prize Winners with their respective areas of contribution :`,
opts: ["Louise Gluck – Literature", "Andrea Ghez – Physics", "Jennifer A. Doudna – Chemistry", "Harvey J. Alter – Economic Sciences"], ans: 3,
analysis: `<h3>Answer: (d) Harvey J. Alter – Economic Sciences</h3><p>Harvey J. Alter shared the 2020 Nobel Prize in <b>Physiology or Medicine</b> with Michael Houghton and Charles Rice for discovering the hepatitis C virus. The 2020 Economics prize went to Paul Milgrom and Robert Wilson for improvements to auction theory.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> Louise Glück won Literature 2020.</li>
<li><b>(b)</b> Andrea Ghez shared Physics 2020 (with Reinhard Genzel and Roger Penrose) for the supermassive black hole at the Milky Way's centre.</li>
<li><b>(c)</b> Jennifer Doudna shared Chemistry 2020 with Emmanuelle Charpentier for CRISPR-Cas9 gene editing.</li></ul>
<div class="tip">2025 Nobels: Physics to Clarke, Devoret and Martinis (macroscopic quantum tunnelling); Chemistry to Kitagawa, Robson and Yaghi (metal-organic frameworks); Medicine to Brunkow, Ramsdell and Sakaguchi (peripheral immune tolerance); Peace to María Corina Machado.</div>` },

{ id: "2021-53", year: 2021, no: 53, subject: "reasoning", topic: "Clocks",
q: `What is the angle between the hour hand and minute hand of a clock at 3:30 ?`,
opts: ["105°", "180°", "75°", "90°"], ans: 2,
analysis: `<h3>Answer: (c) 75°</h3><p>Angle = |30H − 5.5M| = |90 − 165| = <b>75°</b>. At 3:30 the minute hand points at 6 (180°); the hour hand has moved halfway from 3 to 4 (90° + 15° = 105°); difference 75°.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 105° is the hour hand's own position from 12.</li>
<li><b>(b)</b> 180° is the minute hand's position.</li>
<li><b>(d)</b> 90° ignores the hour hand's movement (3:00 position against 6).</li></ul>
<div class="key">The minute hand moves 6° per minute, the hour hand 0.5° per minute; relative speed 5.5° per minute. The hands overlap every 65 5/11 minutes (22 times a day).</div>` },

{ id: "2021-54", year: 2021, no: 54, subject: "reasoning", topic: "Series",
q: `Sum of the series 2<sup>2</sup> + 4<sup>2</sup> + 6<sup>2</sup> + ...... + 20<sup>2</sup> is`,
opts: ["1040", "1540", "2540", "3080"], ans: 1,
analysis: `<h3>Answer: (b) 1540</h3><p>2² + 4² + … + 20² = 4(1² + 2² + … + 10²) = 4 × (10 × 11 × 21/6) = 4 × 385 = <b>1,540</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 1,040, <b>(c)</b> 2,540 and <b>(d)</b> 3,080 do not equal 4 × 385. (3,080 is double the answer; 2,870 would be 1² to 20².)</li></ul>
<div class="key">Σk² = n(n + 1)(2n + 1)/6. Sum of squares of the first n even numbers = 2n(n + 1)(2n + 1)/3; of the first n odd numbers = n(2n − 1)(2n + 1)/3.</div><div class="tip">Pattern recognition: when every term shares a factor (here 2² = 4), take it out first and use the standard formula on what remains.</div>` },

{ id: "2021-55", year: 2021, no: 55, subject: "reasoning", topic: "Operations",
q: `If A X B means (A<sup>2</sup> + B<sup>2</sup>), then the value of 5 X (4 X 3) is`,
opts: ["60", "300", "650", "710"], ans: 2,
analysis: `<h3>Answer: (c) 650</h3><p>Inner bracket first: 4 X 3 = 16 + 9 = 25. Then 5 X 25 = 25 + 625 = <b>650</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> 60 multiplies 5 × 4 × 3.</li>
<li><b>(b)</b> 300 has no basis.</li>
<li><b>(d)</b> 710 is not obtained from the rule.</li></ul>
<div class="tip">With newly defined operations, always evaluate the innermost bracket first and apply the definition literally.</div><div class="tip">Variant: if A X B meant (A + B)², then 4 X 3 = 49 and 5 X 49 = 2,916. Always apply exactly the definition given.</div><div class="key">Order of operations with custom symbols: brackets first, exactly as in ordinary arithmetic. Here 5 X 25 is not the same as (5 X 4) X 3 = 41 X 3 = 1,690; the operation is not associative.</div>` },

{ id: "2021-56", year: 2021, no: 56, subject: "reasoning", topic: "Counting figures",
q: `The number of triangles in the given figure is<img class="fig" src="img/2021-56.png" alt="Triangle with apex above a rectangle, a vertical line from the apex to the bottom, a horizontal middle line and lines from the mid-sides to the bottom centre">`,
opts: ["11", "13", "15", "17"], ans: 2,
analysis: `<h3>Answer: (c) 15</h3><p>Label the apex P, the vertical line meeting the middle line at M and the bottom at B, the ends of the middle line L and R, and the rectangle's top corners TL, TR and bottom corners BL, BR.</p>
<table><tr><th>Group</th><th>Count</th></tr>
<tr><td>Apex P with two of its three lines (PL, PM, PR) and a base on the top edge or the middle line</td><td>3 pairs × 2 bases = 6</td></tr>
<tr><td>Apex B with the middle line: LMB, MRB, LRB</td><td>3</td></tr>
<tr><td>Bottom corners: L–BL–B, R–BR–B</td><td>2</td></tr>
<tr><td>Top corners: TL with the point where PL crosses the top edge and L; same on the right</td><td>2</td></tr>
<tr><td>Large: P–L–B and P–R–B (using the vertical line)</td><td>2</td></tr></table>
<p>Total 15.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 11 and <b>(b)</b> 13 miss some groups (often the corner or the P–L–B triangles).</li><li><b>(d)</b> 17 double-counts.</li></ul>
<div class="tip">Systematic method: fix one vertex at a time, list lines through it, and count pairs of lines closed by a third line.</div>` },

{ id: "2021-57", year: 2021, no: 57, subject: "reasoning", topic: "Logical deduction",
q: `Statement 1 : A has more coins than B.<br>Statement 2 : B has fewer coins than C.<br>Statement 3 : C has fewer coins than A.<br>If the statement 1 is true and statement 2 is false, then the statement 3 is`,
opts: ["True", "False", "Uncertain", "Insufficient data"], ans: 0,
analysis: `<h3>Answer: (a) True</h3><p>Statement 1: A &gt; B. Statement 2 false means B is <b>not</b> fewer than C, so B ≥ C. Combining: A &gt; B ≥ C, so A &gt; C, i.e. C has fewer coins than A. Statement 3 is true.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> False would need C ≥ A, which contradicts A &gt; B ≥ C.</li><li><b>(c)</b> and <b>(d)</b> The two given facts are enough to decide.</li></ul>
<div class="tip">Remember: the negation of "B &lt; C" is "B ≥ C", not "B &gt; C".</div><div class="key">Truth-value logic: a false 'less than' becomes 'greater than or equal to'. Chaining a strict inequality (A &gt; B) with a non-strict one (B ≥ C) still gives a strict result (A &gt; C).</div>` },

{ id: "2021-58", year: 2021, no: 58, subject: "reasoning", topic: "Algebra",
q: `If (x + 1)/(x − 1) = a/b and (1 − y)/(1 + y) = b/a, then the value of (x − y)/(1 + xy) is`,
opts: ["2ab/(a<sup>2</sup> − b<sup>2</sup>)", "(a<sup>2</sup> − b<sup>2</sup>)/(2ab)", "(a<sup>2</sup> + b<sup>2</sup>)/(2ab)", "(a<sup>2</sup> − b<sup>2</sup>)/(ab)"], ans: 0,
analysis: `<h3>Answer: (a) 2ab/(a² − b²)</h3><p>By componendo-dividendo: x = (a + b)/(a − b) and y = (a − b)/(a + b). So xy = 1 and 1 + xy = 2. x − y = [(a + b)² − (a − b)²]/(a² − b²) = 4ab/(a² − b²). Hence (x − y)/(1 + xy) = <b>2ab/(a² − b²)</b>.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> is the reciprocal.</li><li><b>(c)</b> and <b>(d)</b> do not follow.</li></ul>
<div class="tip">Trigonometric view: if x = tan A and y = tan B, (x − y)/(1 + xy) = tan(A − B).</div><div class="key">Componendo-dividendo: if p/q = a/b then (p + q)/(p − q) = (a + b)/(a − b). Applied to (x + 1)/(x − 1) = a/b it gives x = (a + b)/(a − b) directly.</div>` },

{ id: "2021-59", year: 2021, no: 59, subject: "reasoning", topic: "Ratios",
q: `If (2x + 3y) : (3x + 5y) = 18 : 29, then the value of x : y is`,
opts: ["4 : 1", "4 : 5", "3 : 4", "3 : 1"], ans: 2,
analysis: `<h3>Answer: (c) 3 : 4</h3><p>Cross-multiply: 29(2x + 3y) = 18(3x + 5y) → 58x + 87y = 54x + 90y → 4x = 3y → x : y = <b>3 : 4</b>. Check with x = 3, y = 4: (6 + 12) : (9 + 20) = 18 : 29 ✔.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 4:1 gives 11:17.</li><li><b>(b)</b> 4:5 gives 23:37.</li><li><b>(d)</b> 3:1 gives 9:14.</li></ul><div class="tip">Fast check: substitute each option's ratio into both brackets and see which gives 18 : 29; this takes seconds.</div><div class="key">General method: for (ax + by) : (cx + dy) = m : n, cross-multiply to n(ax + by) = m(cx + dy), collect x and y terms, and read off x : y.</div><div class="tip">Why it works: a ratio of linear expressions fixes only the ratio x : y, not x and y themselves; any multiple (6 and 8, 9 and 12) gives the same 18 : 29.</div>` },

{ id: "2021-60", year: 2021, no: 60, subject: "reasoning", topic: "Time and work",
q: `A is twice as good a workman as B and together, they finish a piece of work in 18 days. In how many days will A alone finish the work ?`,
opts: ["28 days", "30 days", "27 days", "29 days"], ans: 2,
analysis: `<h3>Answer: (c) 27 days</h3><p>Let B do 1 unit a day; A does 2. Together 3 units a day × 18 days = 54 units of work. A alone: 54/2 = <b>27 days</b> (B alone: 54 days).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 28, <b>(b)</b> 30 and <b>(d)</b> 29 days do not fit; A's share of the combined rate is 2/3, so A alone takes 18 × 3/2 = 27.</li></ul><div class="key">Efficiency method: if A is k times as efficient as B, A takes 1/k of B's time. Together they do (k + 1) units per day; total work = (k + 1) × combined days.</div><div class="tip">Variant: if B alone took 54 days, the same answer follows: together 1/27 + 1/54 = 1/18.</div>` },

{ id: "2021-61", year: 2021, no: 61, subject: "reasoning", topic: "Compound interest",
q: `In how many years will a sum of ₹800 at 10% per annum compounded semi-annually become ₹926.10 ?`,
opts: ["1⅓ years", "1½ years", "2⅓ years", "2½ years"], ans: 1,
analysis: `<h3>Answer: (b) 1½ years</h3><p>Half-yearly rate = 5%. 926.10/800 = 1.157625 = 1.05³, so 3 half-years = <b>1½ years</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1⅓ years is not a whole number of compounding periods.</li><li><b>(c)</b> and <b>(d)</b> 2⅓ and 2½ years would give about ₹1,000+ (1.05⁵ = 1.276).</li></ul><div class="key">Recognise cubes of 1.05: 1.05² = 1.1025, 1.05³ = 1.157625. Dividing the amount by the principal and matching a power of (1 + r) is faster than using logarithms.</div><div class="tip">Compound interest with periodic compounding: A = P(1 + r/m)<sup>mt</sup>. Half-yearly at 10% means 5% per half-year; three periods = 1.5 years.</div>` },

{ id: "2021-62", year: 2021, no: 62, subject: "reasoning", topic: "Rectangle",
q: `The diagonal of a rectangle is √41 cm and its area is 20 sq.cm. The perimeter of the rectangle is`,
opts: ["9 cm", "18 cm", "20 cm", "41 cm"], ans: 1,
analysis: `<h3>Answer: (b) 18 cm</h3><p>(l + b)² = l² + b² + 2lb = 41 + 40 = 81, so l + b = 9 and the perimeter = 2 × 9 = <b>18 cm</b>. (Sides 5 cm and 4 cm.)</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 9 cm is l + b, half the perimeter.</li><li><b>(c)</b> 20 is the area value.</li><li><b>(d)</b> 41 is the square of the diagonal.</li></ul>
<div class="tip">Same identity as 2018 Q45; here the data are consistent (a real 5 × 4 rectangle).</div><div class="key">Identity: (l + b)² = d² + 2 × area; (l − b)² = d² − 2 × area = 1, so l − b = 1 and l + b = 9 give the sides 5 and 4.</div><div class="tip">Related: for a square with the same diagonal √41, area would be 20.5 and perimeter about 18.1; a rectangle of a given diagonal has its largest area when it is a square.</div>` },

{ id: "2021-63", year: 2021, no: 63, subject: "reasoning", topic: "Probability",
q: `Four persons are chosen at random from a group of 3 men, 2 women and 4 children. The chance that exactly 2 of them are children, is`,
opts: ["2/9", "4/5", "7/12", "10/21"], ans: 3,
analysis: `<h3>Answer: (d) 10/21</h3><p>Total ways: C(9, 4) = 126. Exactly 2 children: C(4, 2) × C(5, 2) = 6 × 10 = 60. P = 60/126 = <b>10/21</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 2/9 = 28/126.</li><li><b>(b)</b> 4/5 and <b>(c)</b> 7/12 do not match any count.</li></ul><div class="key">Hypergeometric counting: choose the required number from each group and multiply, then divide by the total number of selections C(N, r).</div><div class="tip">Complementary check: P(no child) = C(5,4)/126 = 5/126; P(1 child) = 4 × C(5,3)/126 = 40/126; P(2) = 60/126; P(3) = 4 × 5/126 = 20/126; P(4) = 1/126. Total 126/126 ✔.</div><div class="key">C(n, r) = n!/[r!(n − r)!]: C(9, 4) = 126, C(4, 2) = 6, C(5, 2) = 10. 'Exactly two children' also forces exactly two adults (men or women, 5 in all).</div>` },

{ id: "2021-64", year: 2021, no: 64, subject: "reasoning", topic: "Direction sense",
q: `A man walks 1 km to East and then he turns to South and walks 5 km. Again, he turns to East and walks 2 km. After, he turns to North and walks 9 km. Now, how far he is from his station point ?`,
opts: ["3 km", "4 km", "5 km", "7 km"], ans: 2,
analysis: `<h3>Answer: (c) 5 km</h3><p>East = 1 + 2 = 3 km; north = 9 − 5 = 4 km. Distance = √(3² + 4²) = <b>5 km</b> (north-east of the start).</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 3 km and <b>(b)</b> 4 km are only one component.</li><li><b>(d)</b> 7 km adds the components.</li></ul><div class="key">Method: add all east-west movements and all north-south movements separately, then use Pythagoras on the two totals. The 3-4-5 triple is a common design for such questions.</div><div class="tip">Direction: he ends 3 km east and 4 km north of the start, i.e. north-east; the bearing is tan⁻¹(3/4) ≈ 37° east of north.</div>` },

{ id: "2021-65", year: 2021, no: 65, subject: "reasoning", topic: "Percentages",
q: `The population of a village is 5500. If the number of males increases by 11% and the number of females increases by 20% then the population becomes 6330. The population of female in the village is`,
opts: ["2000", "2500", "3000", "3500"], ans: 1,
analysis: `<h3>Answer: (b) 2500</h3><p>Increase = 6,330 − 5,500 = 830. 0.11M + 0.20F = 830 with M = 5,500 − F → 605 + 0.09F = 830 → F = <b>2,500</b> (M = 3,000). Check: 330 + 500 = 830 ✔.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 2,000 gives an increase of 785.</li><li><b>(c)</b> 3,000 gives 875 (this is the number of males).</li><li><b>(d)</b> 3,500 gives 920.</li></ul><div class="key">Alligation view: the overall increase is 830/5,500 ≈ 15.09%, between 11% and 20%. The ratio males : females = (20 − 15.09) : (15.09 − 11) = 3 : 2.5, i.e. 3,000 : 2,500.</div><div class="tip">Check: males 3,000 × 1.11 = 3,330 and females 2,500 × 1.2 = 3,000; total 6,330 ✔.</div>` },

{ id: "2021-66", year: 2021, no: 66, subject: "reasoning", topic: "Number arrangement",
q: `A, B, C, D and E are five different integers. When written in the ascending order of values, the difference between any two adjacent integers is 4. D is the greatest and A is the least. B is greater than E but less than C. The sum of the integers is equal to E. What is the positive difference between the lowest and the highest integers ?`,
opts: ["8", "6", "16", "18"], ans: 2,
analysis: `<h3>Answer: (c) 16</h3><p>Order: A &lt; E &lt; B &lt; C &lt; D, each 4 apart: A = a, E = a + 4, B = a + 8, C = a + 12, D = a + 16. (The sum condition gives 5a + 40 = a + 4, so a = −9: the numbers are −9, −5, −1, 3, 7.) Highest − lowest = 4 × 4 = <b>16</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 8 is two gaps.</li><li><b>(b)</b> 6 is not a multiple of 4.</li><li><b>(d)</b> 18 is not a multiple of 4.</li></ul>
<div class="tip">The difference needs no calculation: five numbers have four gaps of 4.</div><div class="key">Ordering clues: A least, D greatest, and E &lt; B &lt; C fix the order A, E, B, C, D. Equal spacing then turns everything into one variable.</div>` },

{ id: "2021-67", year: 2021, no: 67, subject: "reasoning", topic: "Blood relations",
q: `Mary introduces Jack as the son of the only daughter of my father's wife. How is Jack related to Mary ?`,
opts: ["Brother", "Son", "Husband", "Father"], ans: 1,
analysis: `<h3>Answer: (b) Son</h3><p>Mary's father's wife is Mary's mother. The <b>only</b> daughter of Mary's mother is Mary herself. So Jack is Mary's son.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> A brother would be the mother's son, not her daughter's son.</li><li><b>(c)</b> and <b>(d)</b> do not follow.</li></ul>
<div class="tip">Watch for "only daughter/son" clues: they usually point back to the speaker.</div><div class="key">Decode relation chains from the speaker outwards, replacing each phrase with a simpler term: father's wife → mother; mother's only daughter → herself (Mary).</div><div class="tip">Similar trick: 'the only son of my mother's husband' (said by a man) refers to the speaker himself.</div>` },

{ id: "2021-68", year: 2021, no: 68, subject: "maths", topic: "Double integrals",
q: `The value of ∫<sub>0</sub><sup>1</sup>∫<sub>0</sub><sup>x</sup> (x<sup>2</sup> + y<sup>2</sup>) dA, where dA indicates small area in xy-plane, is`,
opts: ["1/2 sq. units", "1/3 sq. units", "−1/2 sq. units", "−1/3 sq. units"], ans: 1,
analysis: `<h3>Answer: (b) 1/3</h3><p>Inner integral (y from 0 to x): ∫(x² + y²) dy = x³ + x³/3 = 4x³/3. Outer: ∫<sub>0</sub><sup>1</sup> 4x³/3 dx = (4/3)(1/4) = <b>1/3</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 1/2 is not obtained.</li><li><b>(c)</b> and <b>(d)</b> The integrand is non-negative over the region, so the integral cannot be negative.</li></ul>
<div class="tip">The region is the triangle 0 ≤ y ≤ x ≤ 1. The integral of (x² + y²) over a region is its polar moment of inertia about the origin.</div><div class="key">For iterated integrals, integrate the inner variable first with the outer variable held constant; the limits 0 ≤ y ≤ x describe the triangle under y = x. Changing the order gives ∫<sub>0</sub><sup>1</sup>∫<sub>y</sub><sup>1</sup>(x² + y²)dx dy, the same 1/3.</div>` },

{ id: "2021-69", year: 2021, no: 69, subject: "maths", topic: "Jacobians",
q: `If x = uv, y = (u + v)/(u − v), then ∂(u, v)/∂(x, y) is`,
opts: ["(u − v)<sup>2</sup>/(4uv)", "(u + v)<sup>2</sup>/(4uv)", "(u − v)/(4uv)", "(u + v)/(4uv)"], ans: 0,
analysis: `<h3>Answer: (a) (u − v)²/(4uv)</h3><p>Find ∂(x, y)/∂(u, v) first: x<sub>u</sub> = v, x<sub>v</sub> = u; y<sub>u</sub> = −2v/(u − v)², y<sub>v</sub> = 2u/(u − v)². J = v × 2u/(u − v)² − u × (−2v)/(u − v)² = 4uv/(u − v)². Since the two Jacobians are reciprocals, ∂(u, v)/∂(x, y) = <b>(u − v)²/(4uv)</b>.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> uses (u + v)², a slip in differentiating y.</li><li><b>(c)</b> and <b>(d)</b> have the wrong power.</li></ul>
<div class="key">J × J′ = 1, where J = ∂(x, y)/∂(u, v) and J′ = ∂(u, v)/∂(x, y).</div><div class="tip">The Jacobian measures how areas scale under a change of variables: dx dy = |∂(x, y)/∂(u, v)| du dv. It is used to transform double integrals (e.g. to polar coordinates, where it equals r).</div>` },

{ id: "2021-70", year: 2021, no: 70, subject: "maths", topic: "Chain rule",
q: `If u = x<sup>3</sup> + y<sup>3</sup> where x = a cos t, y = b sin t, then du/dt =`,
opts: ["−3a<sup>3</sup> cos<sup>2</sup>t sin t + 3b<sup>3</sup> sin<sup>2</sup>t cos t", "3a<sup>3</sup> sin<sup>2</sup>t cos t + 3b<sup>3</sup> cos<sup>2</sup>t sin t", "3b sin<sup>2</sup>t cos t + 3a<sup>3</sup> sin<sup>2</sup>t cos t", "−3a<sup>3</sup> sin t + 3b<sup>3</sup> cos<sup>2</sup>t sin t"], ans: 0,
analysis: `<h3>Answer: (a) −3a³ cos²t sin t + 3b³ sin²t cos t</h3><p>du/dt = (∂u/∂x)(dx/dt) + (∂u/∂y)(dy/dt) = 3x²(−a sin t) + 3y²(b cos t) = 3a² cos²t (−a sin t) + 3b² sin²t (b cos t).</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> loses the minus sign and swaps sin/cos powers.</li><li><b>(c)</b> has the wrong powers of b and a.</li><li><b>(d)</b> drops the cos² factor in the first term.</li></ul><div class="key">Total derivative: when u depends on x and y, which both depend on t, du/dt = u<sub>x</sub> dx/dt + u<sub>y</sub> dy/dt. Alternatively substitute first: u = a³cos³t + b³sin³t and differentiate directly.</div><div class="tip">Check at t = 0: x = a, y = 0, dx/dt = 0, dy/dt = b, so du/dt = 0; option (a) gives 0 at t = 0 ✔, while (d) also gives 0 there, so a second check (t = π/2) is needed to separate them.</div>` },

{ id: "2021-71", year: 2021, no: 71, subject: "maths", topic: "Poisson distribution",
q: `Suppose that a book of 600 pages contains 40 printing mistakes. Assume that these errors are randomly distributed throughout the book and x, the number of errors per page has a Poisson distribution. What is the probability that 10 pages selected at random will be free of errors ?`,
opts: ["(1/3)e<sup>−1</sup>", "2e<sup>−1/3</sup>", "e<sup>−2/3</sup>", "(1/3)e<sup>−2</sup>"], ans: 2,
analysis: `<h3>Answer: (c) e<sup>−2/3</sup></h3><p>Mean errors per page λ = 40/600 = 1/15. For 10 pages the mean is 10/15 = 2/3, and P(0 errors) = e<sup>−λ</sup> = <b>e<sup>−2/3</sup></b> ≈ 0.51. (Equivalently, (e<sup>−1/15</sup>)¹⁰.)</p>
<h3>Why not the others</h3><ul><li><b>(a)</b>, <b>(b)</b> and <b>(d)</b> do not have the form e<sup>−λ</sup> with λ = 2/3; (b) even exceeds 1.</li></ul>
<div class="key">Poisson: P(X = k) = e<sup>−λ</sup>λ<sup>k</sup>/k!; mean = variance = λ.</div><div class="key">Scaling the Poisson rate: if errors occur at λ per page, the count in n pages is Poisson with mean nλ. Probability of a clean page is e<sup>−1/15</sup>; ten independent clean pages multiply to e<sup>−10/15</sup>.</div><div class="tip">Probability of at least one error in those 10 pages = 1 − e<sup>−2/3</sup> ≈ 0.49. The Poisson approximates the binomial when n is large and p small (here 40 errors spread over 600 pages).</div>` },

{ id: "2021-72", year: 2021, no: 72, subject: "maths", topic: "Eigenvalues",
q: `The highest Eigen value of the 2×2 matrix [[1, 2], [4, 3]] is`,
opts: ["−1", "−5", "5", "1"], ans: 2,
analysis: `<h3>Answer: (c) 5</h3><p>λ² − (trace)λ + det = λ² − 4λ + (3 − 8) = λ² − 4λ − 5 = (λ − 5)(λ + 1) = 0. Eigenvalues 5 and −1; the highest is <b>5</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> −1 is the other eigenvalue.</li><li><b>(b)</b> −5 is the determinant.</li><li><b>(d)</b> 1 is a diagonal entry.</li></ul>
<div class="tip">Check: sum 5 + (−1) = 4 = trace; product −5 = det.</div><div class="key">Eigenvectors: λ = 5 → (A − 5I)v = 0 → [−4 2; 4 −2] → v = [1, 2]; λ = −1 → [2 2; 4 4] → v = [1, −1].</div><div class="tip">For any 2 × 2 matrix [[a, b], [c, d]], eigenvalues are [(a + d) ± √((a − d)² + 4bc)]/2 = [4 ± √(4 + 32)]/2 = (4 ± 6)/2.</div><div class="key">Characteristic equation: det(A − λI) = 0 → (1 − λ)(3 − λ) − 8 = λ² − 4λ − 5 = 0.</div>` },

{ id: "2021-73", year: 2021, no: 73, subject: "maths", topic: "Determinants",
q: `If Δ = |p p<sup>2</sup>(p<sup>3</sup> − 1); q q<sup>2</sup>(q<sup>3</sup> − 1); r r<sup>2</sup>(r<sup>3</sup> − 1)| = 0, in which p, q, r are different. The value of pqr is`,
opts: ["3", "1", "2·5", "3·5"], ans: 1,
analysis: `<h3>Answer: (b) 1</h3><p>Read the rows as (p, p², p³ − 1). Split the last column: Δ = |p p² p³| − |p p² 1|. The first equals pqr × |1 p p²| (taking p, q, r out of the rows); the second equals |1 p p²| after two column swaps. So Δ = (pqr − 1) × V, where V = (p − q)(q − r)(r − p) ≠ 0 since p, q, r are different. Hence pqr = <b>1</b>.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> 3, <b>(c)</b> 2.5 and <b>(d)</b> 3.5 do not make the factor (pqr − 1) zero.</li></ul>
<div class="key">Vandermonde determinant |1 a a²; 1 b b²; 1 c c²| = (a − b)(b − c)(c − a).</div><div class="tip">General technique: split a column that is a sum (p³ − 1 = p³ + (−1)) into two determinants, take common factors from rows, and reduce each to a Vandermonde form.</div>` },

{ id: "2021-74", year: 2021, no: 74, subject: "maths", topic: "Rank of a matrix",
q: `If A = [[−1, 2, 3, −2], [2, −5, 1, 2], [3, −8, 5, 2], [5, −12, −1, 6]], then the rank of the matrix A is`,
opts: ["2", "5", "4", "3"], ans: 0,
analysis: `<h3>Answer: (a) 2</h3><p>Row-reduce using R1: R2 + 2R1 = (0, −1, 7, −2); R3 + 3R1 = (0, −2, 14, −4); R4 + 5R1 = (0, −2, 14, −4). The last two are twice the new R2, so they reduce to zero rows. Two non-zero rows remain: rank = <b>2</b>.</p>
<h3>Why not the others</h3><ul><li><b>(b)</b> 5 is impossible for a 4 × 4 matrix.</li><li><b>(c)</b> 4 would need det ≠ 0.</li><li><b>(d)</b> 3 would need a third independent row.</li></ul>
<div class="tip">Rank = number of non-zero rows in echelon form = order of the largest non-zero minor.</div><div class="key">Shortcut: if two rows become identical (or proportional) after elimination, at least one is redundant. Here rows 3 and 4 both reduce to twice row 2, leaving only two independent rows.</div>` },

{ id: "2021-75", year: 2021, no: 75, subject: "maths", topic: "Cayley–Hamilton theorem",
q: `If A = [[1, 3, 2], [2, 0, −1], [1, 2, 3]], then which one of the following is correct ?`,
opts: ["A<sup>3</sup> − 3A<sup>2</sup> − 4A + 11I = 0", "A<sup>3</sup> − 4A<sup>2</sup> − 3A + 11I = 0", "A<sup>3</sup> + 4A<sup>2</sup> − 3A + 11I = 0", "A<sup>3</sup> − 3A<sup>2</sup> + 4A + 11I = 0"], ans: 1,
analysis: `<h3>Answer: (b) A³ − 4A² − 3A + 11I = 0</h3><p>Characteristic polynomial λ³ − (trace)λ² + (sum of principal 2×2 minors)λ − det. Trace = 4. Minors: (1·0 − 3·2) + (1·3 − 2·1) + (0·3 − (−1)·2) = −6 + 1 + 2 = −3. det = 1(0 + 2) − 3(6 + 1) + 2(4 − 0) = −11. So λ³ − 4λ² − 3λ + 11 = 0, and by Cayley–Hamilton A³ − 4A² − 3A + 11I = 0.</p>
<h3>Why not the others</h3><ul><li><b>(a)</b> and <b>(d)</b> have coefficient −3 on A², not the trace.</li><li><b>(c)</b> has +4A², the wrong sign.</li></ul><div class="key">For a 3 × 3 matrix: λ³ − (trace)λ² + (sum of the three principal 2 × 2 minors)λ − det = 0. A useful consequence: A⁻¹ = −(A² − 4A − 3I)/11 here.</div>` }
);
