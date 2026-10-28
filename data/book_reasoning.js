// General Aptitude: Logical Reasoning and Analytical Ability: notes book built from ESE Paper I PYQs 2017–2026.
addBook("reasoning", [
 ["r1", "Arithmetic", [["r1-1", "Numbers, percentages, ratios, ages and equations"], ["r1-2", "Time and work, speed and distance, interest"]]],
 ["r2", "Geometry and mensuration", [["r2-1", "Areas, circles, solids and figure counting"]]],
 ["r3", "Series, patterns and coding", [["r3-1", "Number and letter series, analogies and coding"]]],
 ["r4", "Logical reasoning", [["r4-1", "Arrangements, puzzles, relations and directions"], ["r4-2", "Syllogisms, deduction and critical reasoning"]]],
 ["r5", "Counting, probability and graphs", [["r5-1", "Permutations, probability, networks and voting"]]]
]);

addBookTopic("reasoning", "r1-1", `
<h3>Forming equations</h3>
<ul><li>Translate each sentence step by step; order matters ("doubles then squares" is (2x)², not 2x²) (2024 Q20).</li>
<li>Two unknowns, two equations: notes of two denominations (2017 Q14), passengers in groups (2017 Q11), mangoes and apples (add symmetric equations: 2025 Q13).</li>
<li>Work backwards from the final value when operations are given in order (2023 Q78 dropped: no option was right; 2025 Q20).</li>
<li>Number tricks: test one value; the answer must hold for all (2024 Q22).</li>
<li>Custom operations: apply the definition from the inside out (2021 Q55).</li></ul>
<h3>Percentages and fractions</h3>
<ul><li>Spending and saving chains: what remains after spending f is (1 − f); multiply the remainders (2017 Q21, 2022 Q74, 2025 Q20).</li>
<li>Pass-mark problems: two students' equations in total T and pass mark P (2025 Q16).</li>
<li>Successive percentage change: (1 + a)(1 + b) − 1; reducing balance V = P(1 − r)ⁿ (2025 Q18).</li>
<li>Fractions of a whole: add the known fractions and equate the rest to the given quantity (2025 Q17).</li>
<li>Productivity and wages: compare output per worker-hour before and after (2018 Q70).</li></ul>
<h3>Ratios, ages and numbers</h3>
<ul><li>Ages: write present ages as x and use "n years ago/after" (2017 Q13, 2020 Q11). Diophantus' age must be a multiple of the LCM of the fractions (84) (2024 Q21).</li>
<li>Ratios: cross-multiply and solve for x : y (2021 Q59). Componendo–dividendo for (x + 1)/(x − 1) = a/b (2021 Q58).</li>
<li><b>HCF</b> for the largest equal piece or fewest equal groups (2020 Q15, 2022 Q69); <b>LCM</b> for common multiples. "Remainder r for several divisors" → N = k × LCM + r (2024 Q30).</li>
<li>AP sums: Sₙ = n(a + l)/2 (2020 Q18).</li>
<li>Clock angle = |30H − 5.5M| (2021 Q53).</li>
<li>Profit and loss: CP, SP, profit% on cost (2019 Q17).</li></ul>
<h3>Science arithmetic</h3>
<ul><li>Pendulum period T ∝ √L: a clock losing 5 s a day (period too long by 5/86400) needs its length <b>shortened</b>. Since ΔL/L = 2ΔT/T, the change is 2 × 5/86400 = 1/8640 of L; UPSC's key gives 1/86400 (the question is marked in doubt) (2017 Q90).</li>
<li>Gas laws: a hydrogen balloon expands as it rises because external pressure falls (Boyle) (2018 Q90).</li></ul>`);

addBookTopic("reasoning", "r1-2", `
<h3>Time and work</h3>
<ul><li>Work = rate × time; rates add. If A does a job in a days, A's rate is 1/a per day.</li>
<li>Man-days: M₁D₁H₁/W₁ = M₂D₂H₂/W₂ (2025 Q19). Extra men added later: total man-days stays the same (2025 Q14).</li>
<li>Different workers: convert to one unit (1 child = ½ man) (2025 Q26; men and women, 2017 Q19).</li>
<li>"A is twice as good as B": rates in ratio 2 : 1 (2021 Q60).</li>
<li>Absentees: the remaining workers do the same total work in more days (2017 Q22).</li>
<li>Two people meeting while writing a booklet from both ends: share the work in the ratio of their rates (2022 Q73).</li>
<li><b>Pipes and cisterns</b>: filling rates positive, leaks negative (2025 Q11).</li>
<li>Capacity problems: buckets × capacity is constant (2022 Q71).</li></ul>
<h3>Speed, distance and trains</h3>
<ul><li>Average speed for equal distances = 2xy/(x + y) (harmonic mean), not the arithmetic mean (2019 Q15).</li>
<li>Trains: crossing a pole covers the train's length; a platform or bridge, both lengths; two trains, both lengths at the relative speed (sum if opposite, difference if same direction) (2019 Q14, 2025 Q15). km/h × 5/18 = m/s.</li></ul>
<h3>Interest</h3>
<ul><li>SI = PRT/100; CI: A = P(1 + r/100)ⁿ.</li>
<li>Difference between CI and SI for 2 years = P(r/100)²; with half-yearly compounding use r/2 and 2n periods (2022 Q67).</li>
<li>Time for a sum to grow: compound, with half-yearly periods if stated (2021 Q61).</li></ul>`);

addBookTopic("reasoning", "r2-1", `
<h3>Plane figures</h3>
<ul><li>Rectangle: perimeter 2(l + b), area lb, diagonal √(l² + b²). From diagonal and area: (l + b)² = d² + 2A gives the perimeter (2021 Q62, 2018 Q45).</li>
<li><b>Rhombus</b>: area = ½d₁d₂; side² = (d₁/2)² + (d₂/2)² (2022 Q72).</li>
<li>Triangles inside rectangles: area with base fractions (2020 Q14).</li>
<li><b>Pythagoras</b>: the lotus problem: bud 10 cm above water, touches the water 40 cm away → depth from (d + 10)² = d² + 40² (2019 Q16).</li>
<li>Chords: a chord of the larger of two concentric circles touching the smaller one: (half-chord)² + r² = R² (2019 Q18).</li>
<li>Circles in squares: inscribed r = a/2, circumscribed R = a/√2; area ratio 1 : 2 (2026 Q72, 2019 Q25). A circle inside a square shows π &lt; 4 (2026 Q75).</li>
<li>Percentage change of area ∝ (scale)² (2018 Q13).</li>
<li>Perfect squares: soldiers in a square formation: find the largest square not exceeding the number; the surplus is the remainder (2022 Q70).</li></ul>
<h3>Solids and rooms</h3>
<ul><li>Room volume lbh; areas of four walls 2h(l + b) (2018 Q55).</li>
<li>Surface area after cutting a hemisphere from a cube face: subtract the circle πr², add the hemisphere's curved surface 2πr² (2019 Q12).</li></ul>
<h3>Figure problems</h3>
<ul><li>Count triangles systematically: by size or by vertex (2021 Q56).</li>
<li>Minimum squares to build a design: overlapping is allowed; count the distinct lines needed (2023 Q80).</li>
<li>Tiling with fewest tiles: use the largest tiles first and check leftover strips (2026 Q76).</li>
<li>Proof without words: two staircases make an n × (n + 1) rectangle → 1 + 2 + … + n = n(n + 1)/2 (2026 Q73).</li>
<li>Cube nets: faces adjacent in the net are adjacent on the cube; faces with one square between them in a row are opposite (2026 Q85).</li></ul>`);

addBookTopic("reasoning", "r3-1", `
<h3>Number series</h3>
<ul><li>Try, in order: differences (and second differences), ratios, squares and cubes ± small numbers, alternating series, previous term operations (a² − 1: 2023 Q81).</li>
<li>Decimals: scale up (×20) to see the pattern (2023 Q79).</li>
<li>Sums: Σk² = n(n + 1)(2n + 1)/6; even squares 2² + … + 20² = 4 × Σ1..10 k² = 1540 (2021 Q54); squares 8 to 16 = Σ1..16 − Σ1..7 = 1356 (2018 Q8).</li>
<li>A clock striking 1 to 12 twice a day strikes 2 × 78 = 156 times (2020 Q17).</li></ul>
<h3>Number puzzles and grids</h3>
<ul><li>Circles: test sums of cube roots, squares, products on the first two figures (2023 Q76).</li>
<li>Grids: test each row for a rule (half the sum of the others: 2026 Q71).</li>
<li>Arrangement of integers from given sums and orders (2021 Q66).</li></ul>
<h3>Letter series and coding</h3>
<ul><li>Use positions A = 1 … Z = 26 (EJOTY = 5, 10, 15, 20, 25). Skips between letters = difference − 1 (2025 Q12).</li>
<li>Patterns may run around a frame or circle, sometimes in opposite directions for letters and numbers (2026 Q74, Q83).</li>
<li>Symmetric letter triples: centre ± d with d growing (2023 Q75).</li>
<li>Coding by digit sums of letter positions (I LOVE YOU → 7) (2023 Q74); case-coding by position parity (2026 Q79).</li></ul>
<h3>Analogies</h3>
<p>Find the relation in the given pair (e.g. "study of"): onomatology : names :: semantics : language (2026 Q84).</p>`);

addBookTopic("reasoning", "r4-1", `
<h3>Direction sense</h3>
<ul><li>Use coordinates: N = +y, E = +x. Right turn = clockwise (N → E → S → W); left = anticlockwise.</li>
<li>Final distance by Pythagoras; 3-4-5 triangles are common (2020 Q16, 2021 Q64, 2026 Q82). Opposite legs cancel (2023 Q73).</li>
<li>A 45° right turn from west faces north-west (2026 Q77).</li>
<li>Time from distance and speed after tracing the path (2019 Q10).</li></ul>
<h3>Arrangements and scheduling</h3>
<ul><li>Fix definite facts first (positions, days), then place blocks of linked items, then test options (2024 Q27, 2026 Q78).</li>
<li>Conditional selection: test each option against every rule (2023 Q68).</li>
<li>Seating and numbering: establish the direction of numbering first (2022 Q66). Queues: rewrite the line after each move (2022 Q65).</li>
<li>Scheduling with time changes: rebuild the timetable (2023 Q69).</li></ul>
<h3>Ranking and comparison</h3>
<ul><li>Chains like V &gt; P &gt; Q fix positions when one rank is given (2024 Q29). Keep separate lists for height and age (2024 Q28).</li>
<li>Comparisons of weights or values: build an ordered list (2020 Q13, 2020 Q20).</li></ul>
<h3>Puzzles with grids</h3>
<ul><li>Person × attribute grid; "X and the owner of Y" means X does not own Y (2024 Q16, Q18; 2023 Q67, Q71).</li>
<li>Best clue: the one leaving the fewest candidates (2023 Q77).</li>
<li>Applying criteria: overriding rules ("notwithstanding") decide what is definitely not permitted (2026 Q80).</li></ul>
<h3>Blood relations and sets</h3>
<ul><li>Draw a family tree with gender marks; "only daughter of my mother" is oneself (2021 Q67, 2023 Q70).</li>
<li>Two sets: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) (2020 Q19). Three sets: exactly two = Σpairs − 3 × all three (2024 Q23).</li></ul>`);

addBookTopic("reasoning", "r4-2", `
<h3>Syllogisms</h3>
<ul><li>Draw Venn diagrams; a conclusion follows only if it is true in every possible diagram.</li>
<li>All A are B and all B are C → all A are C → some C are A. "Some B are D" says nothing definite about A and D. A term not in the premises (elephants) gives no conclusion (2023 Q72).</li>
<li>"Most" statements: two "most" sets of the same group must overlap, so some members share both properties (2022 Q60).</li></ul>
<h3>Deduction</h3>
<ul><li>Transitive comparisons (A &gt; B, B &gt; C ⇒ A &gt; C) (2021 Q57).</li>
<li>"Must be true": look for a case where the facts hold but the statement fails (2022 Q64).</li>
<li>Inequality reasoning for limits (dividing a rod) (2019 Q13).</li></ul>
<h3>Critical reasoning</h3>
<ul><li>Inference: choose what must follow from the passage; quantifiers matter ("some", "many", "most"); reporting a view is not asserting it (2022 Q61).</li>
<li>Assumption, strengthen and weaken: find the link the argument depends on (2022 Q62, Q63).</li>
<li>Courses of action: accept practical steps that address the stated problem (2026 Q81).</li>
<li><b>Fixation</b> in problem solving: inability to see a problem from a fresh perspective (functional fixedness, mental set) (2017 Q68).</li></ul>
<h3>Number puzzles</h3>
<p>Represent clock digits with the fewest matchsticks or symbols by reusing parts (2018 Q14).</p>`);

addBookTopic("reasoning", "r5-1", `
<h3>Counting</h3>
<ul><li>Arrangements of n things with repeats: n!/(p!q!…); with blocks kept together, treat each block as one item (2022 Q68).</li>
<li>Choosing r from n: ⁿC<sub>r</sub>. <b>Handshakes</b> among n people = n(n − 1)/2: 6 → 15, 22 → 231 (2024 Q19, 2025 Q28).</li>
<li>Distributing n distinct prizes among r people, any number each: rⁿ = 4⁵ = 1024 (2025 Q24).</li>
<li>Probability by counting: favourable ÷ total combinations (2021 Q63).</li></ul>
<h3>Graphs and routes</h3>
<ul><li><b>Euler path</b> (every edge once): exists if 0 or 2 vertices have odd degree; it starts and ends at the odd vertices (Königsberg bridges) (2024 Q24).</li>
<li><b>Hamiltonian circuit</b> (every vertex once, back to start): with few places, list all circuits; there are (n − 1)!/2 distinct ones (2024 Q17).</li></ul>
<h3>Voting methods</h3>
<ul><li><b>Plurality</b>: most first-place votes wins (2024 Q25).</li>
<li><b>Borda count</b>: points by rank (n − 1, … or n, …); highest total wins; a candidate with no first places can win (2024 Q26).</li>
<li>Plurality with elimination; pairwise comparison (Condorcet). Different methods can pick different winners from the same ballots.</li></ul>`);
