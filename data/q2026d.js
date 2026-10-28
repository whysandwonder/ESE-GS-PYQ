// ESE 2026 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q76–100
// Answers follow MADE EASY's unofficial key (see q2026a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2026-76", year: 2026, no: 76, subject: "reasoning", topic: "Tiling a rectangle", keySource: K,
q: `A rectangular area of side 9 and 6 units is to be covered by square tiles of sides 1, 2 and 5 units. The minimum number of tiles needed for this is`,
opts: ["13", "11", "12", "15"], ans: 2,
analysis: `<h3>Answer: (c) 12</h3><p>Area = 54. Use the largest tiles first:</p>
<ul><li>One 5 × 5 tile in a corner (area 25).</li><li>The 4 × 6 strip beside it: six 2 × 2 tiles (area 24).</li><li>The remaining 5 × 1 strip under the 5 × 5 tile: five 1 × 1 tiles (area 5).</li></ul>
<p>Total = 1 + 6 + 5 = <b>12</b> tiles (25 + 24 + 5 = 54 ✔).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 13</b> and <b>(d) 15</b>: valid tilings but not the minimum.</li>
<li><b>(b) 11</b>: not achievable. With one 5 × 5 tile, the 5 × 1 strip beside it cannot take 2 × 2 tiles, so it needs five 1 × 1 tiles; the remaining 4 × 6 area needs at least six tiles. Without a 5 × 5 tile, 2 × 2 tiles alone cover at most 48 (twelve tiles) and leave 6 units, needing more.</li></ul>
<div class="tip">A 5 × 5 tile in a 6-unit side always leaves a 1-unit strip, which only 1 × 1 tiles can fill.</div>` },

{ id: "2026-77", year: 2026, no: 77, subject: "reasoning", topic: "Direction sense", keySource: K,
q: `Nandini walks a distance of 1 km towards North. She then turns left and walks 1 km. Finally she turns right at an angle of 45° and starts walking. In which direction she is moving finally ?`,
opts: ["South-West", "North-West", "North-East", "South-East"], ans: 1,
analysis: `<h3>Answer: (b) North-West</h3><p>Facing north, a left turn means she faces <b>west</b>. A right turn of 45° from west points halfway between west and north: <b>north-west</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) South-West</b>: would be a 45° <b>left</b> turn from west.</li>
<li><b>(c) North-East</b>: would need a 135° right turn from west.</li>
<li><b>(d) South-East</b>: the opposite of north-west.</li></ul>
<div class="tip">Turning right moves clockwise round the compass: N → NE → E → SE → S → SW → W → NW → N, 45° per step.</div><div class="tip">Distances do not matter for the final direction; only the sequence of turns does.</div>` },

{ id: "2026-78", year: 2026, no: 78, subject: "reasoning", topic: "Scheduling puzzle", keySource: K,
q: `Read the following information and answer the question that follows :<ol><li>Six scientists A, B, C, D, E and F of the disciplines, Chemistry, Botany, Zoology, Physics, Mathematics and Geology but not necessarily in this order, want to demonstrate an integrated experiment based on inter-disciplinary approach.</li><li>Each day only one scientist will perform the part of his discipline.</li><li>The experiment will start on Monday and end on Sunday. One day will be the rest day, which otherwise is a part of the experiment.</li><li>Chemistry will be on the very next day of Geology.</li><li>A, who is a Mathematician, can perform either on a second day or the last day but should not be immediately preceded by Botany.</li><li>C will demonstrate on the third day and Physics will be on the fifth day.</li><li>E, who is a Zoologist, performs on the second day.</li><li>B performs on Monday and the day after F's performance will be the rest day.</li></ol>Which one of the following is the correct sequence of scientists performing ?`,
opts: ["DBCAFE", "BEDCFA", "BECDFA", "CBEFDA"], ans: 2,
analysis: `<h3>Answer: (c) BECDFA</h3><table><tr><th>Day</th><th>Scientist</th></tr><tr><td>Mon</td><td>B</td></tr><tr><td>Tue</td><td>E (Zoology)</td></tr><tr><td>Wed</td><td>C</td></tr><tr><td>Thu</td><td>D</td></tr><tr><td>Fri</td><td>F (Physics)</td></tr><tr><td>Sat</td><td>Rest</td></tr><tr><td>Sun</td><td>A (Mathematics)</td></tr></table>
<p>B is Monday, E Tuesday, C Wednesday. A can be second or last; Tuesday is taken, so A is Sunday. Physics is Friday; the rest day follows F, so F is Friday (Physics) and Saturday is rest. D takes Thursday. Then Geology–Chemistry on consecutive days must be Wed–Thu (C Geology, D Chemistry), and B is Botany, which does not immediately precede A ✔.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) DBCAFE</b>: D on Monday, but B must perform on Monday.</li>
<li><b>(b) BEDCFA</b>: C on Thursday, but C is fixed on the third day.</li>
<li><b>(d) CBEFDA</b>: C on Monday.</li></ul>` },

{ id: "2026-79", year: 2026, no: 79, subject: "reasoning", topic: "Alphabet coding", keySource: K,
q: `The following question is based on the alphabet series :<br>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>If every alternate letter starting from B of the given alphabet is written in small letters, rest all are written in capital letters, how will the month of 'September' be written ?`,
opts: ["SEpteMbeR", "SEptEMbEr", "SEptembER", "sePTemBeR"], ans: 1,
analysis: `<h3>Answer: (b) SEptEMbEr</h3><p>Starting from B, every alternate letter (B, D, F, H, J, L, N, P, R, T, V, X, Z: the even positions) is small; odd-position letters (A, C, E, G, …) stay capital.</p>
<table><tr><th>Letter</th><th>S</th><th>E</th><th>P</th><th>T</th><th>E</th><th>M</th><th>B</th><th>E</th><th>R</th></tr><tr><td>Position</td><td>19</td><td>5</td><td>16</td><td>20</td><td>5</td><td>13</td><td>2</td><td>5</td><td>18</td></tr><tr><td>Case</td><td>S</td><td>E</td><td>p</td><td>t</td><td>E</td><td>M</td><td>b</td><td>E</td><td>r</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) SEpteMbeR</b>: writes E small and R capital.</li>
<li><b>(c) SEptembER</b>: writes the second E and M small.</li>
<li><b>(d) sePTemBeR</b>: reverses the rule.</li></ul>
<div class="tip">Shortcut: odd position → capital, even position → small.</div><div class="tip">Check one letter: E is 5th (odd), so it stays capital; options (a) and (c) write some Es small, so they fail.</div>` },

{ id: "2026-80", year: 2026, no: 80, subject: "reasoning", topic: "Applying criteria", keySource: K,
q: `In an examination system of an institution, 100 students have been graded (from A – D in descending order) on the basis of the marks they received in the three terminal examinations, in which the pass-marks were 50%. Examiners are instructed to follow the following criteria :<ol><li>All students who scored between 90% and 100% in any two examinations could receive an A.</li><li>Students who came in the top overall were to be awarded an A.</li><li>Notwithstanding I and II, if any student failed a paper, the highest he or she could get was a B.</li><li>The top 20 students in the whole year, when the overall examination percentages were averaged, could receive an A.</li></ol>On the basis of above criteria, which of the following would definitely not be permissible ?`,
opts: ["Bikash, who got 95% in Chemistry and 92% in Biology, received a B", "Suparna, who stood first in Physics and got 96% in Mathematics, received a B", "Amitava failed in English, but because he ranked 9th overall out of 100 students was awarded an A grade", "Bandana was given an A because she came 20th though she had failed to get above 90% in any of the three examinations"], ans: 2,
analysis: `<h3>Answer: (c) Amitava…</h3><p>Criterion 3 overrides the others: a student who failed any paper can get at most a B. Amitava failed English, so an A is <b>definitely not permissible</b>, whatever his overall rank.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Bikash</b>: criterion 1 says such a student <b>could</b> receive an A, not must; a B is permissible.</li>
<li><b>(b) Suparna</b>: topping one subject is not "top overall"; a B is permissible.</li>
<li><b>(d) Bandana</b>: 20th overall is within the top 20, so criterion 4 allows an A.</li></ul>
<div class="tip">Look for words like "could" (permission) versus "notwithstanding" (an overriding rule). Only a clash with an overriding rule makes something definitely impermissible.</div>` },

{ id: "2026-81", year: 2026, no: 81, subject: "reasoning", topic: "Courses of action", keySource: K,
q: `A statement is given followed by three courses of action numbered 1, 2 and 3. Analyze the statement and decide which of the three courses of action logically follows and answer according to the alternative answers given along with the question.<br>Statement : The army has been alerted in the district following floods triggered by incessant rains.<br>Courses of action :<ol><li>Relief to flood affected people should be arranged.</li><li>Supply of food articles should be arranged.</li><li>Adequate medical facilities should be arranged.</li></ol>`,
opts: ["Only 1 follows", "Only 2 follows", "Only 1 and 3 follow", "All follow"], ans: 3,
analysis: `<h3>Answer: (d) All follow</h3><p>Floods serious enough to alert the army call for immediate help to the people affected.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (follows):</b> relief (rescue, shelter) is the first need.</li>
<li><b>2 (follows):</b> floods cut off food supplies; supplying food is essential.</li>
<li><b>3 (follows):</b> floods bring injuries and water-borne diseases (cholera, diarrhoea), so medical facilities are needed.</li></ul>
<div class="key">A course of action "follows" if it is a practical, reasonable step that solves or reduces the problem stated, without going beyond it. In India, disaster response is led by the NDRF and SDRF under the Disaster Management Act 2005, with the army called in when needed.</div><h3>Why not the others</h3><ul><li><b>(a) Only 1 follows</b>: leaves out food and medical care, both clearly needed in a flood.</li><li><b>(b) Only 2 follows</b>: leaves out relief and medical care.</li><li><b>(c) Only 1 and 3 follow</b>: leaves out food supply, which floods disrupt first.</li></ul>` },

{ id: "2026-82", year: 2026, no: 82, subject: "reasoning", topic: "Direction and distance", keySource: K,
q: `Ramesh starts walking from point 'A'. He walks 12 km towards North from there he turns right and walks 4 km, then he again turns right and walks 9 km. How far and which direction is he from his starting point ?`,
opts: ["13 km East", "13 km South", "5 km North", "5 km North-East"], ans: 3,
analysis: `<h3>Answer: (d) 5 km North-East</h3><p>Start at (0, 0). North 12 → (0, 12). Right (east) 4 → (4, 12). Right (south) 9 → (4, 3).</p>
<p>Distance = √(4² + 3²) = <b>5 km</b>; he is east and north of A, i.e. <b>north-east</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 13 km East</b> and <b>(b) 13 km South</b>: add legs instead of finding the displacement.</li>
<li><b>(c) 5 km North</b>: the right distance but ignores the 4 km east.</li></ul>
<div class="tip">3-4-5 right triangles are common in direction questions; spotting them saves calculation.</div><div class="tip">Exact direction: tan⁻¹(4/3) ≈ 53° east of north, which the options round to north-east.</div>` },

{ id: "2026-83", year: 2026, no: 83, subject: "reasoning", topic: "Circle series", keySource: K,
q: `Indicate what will be the letter/numerical in the missing portion :<br><img class="fig" src="img/2026-83.png" alt="Circle. Outer ring letters: U, D, F, I, K, N, ?, S. Inner numbers: 6, 23, 21, 18, 16, 13, ?, 8.">`,
opts: ["R/9", "P/11", "Q/13", "P/16"], ans: 1,
analysis: `<h3>Answer: (b) P/11</h3><p>Read clockwise from the top.</p>
<ul><li><b>Letters</b>: D(4) +2 → F(6) +3 → I(9) +2 → K(11) +3 → N(14) +2 → <b>P(16)</b> +3 → S(19) +2 → U(21).</li>
<li><b>Numbers</b> (going the other way round): 6 +2 → 8 +3 → <b>11</b> +2 → 13 +3 → 16 +2 → 18 +3 → 21 +2 → 23.</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a) R/9</b>: R breaks the +2/+3 letter pattern (N → R would be +4).</li>
<li><b>(c) Q/13</b>: 13 is already in the circle, and Q is a +3 step after N where +2 is due.</li>
<li><b>(d) P/16</b>: the right letter, but 16 is already in the circle; the gap between 8 and 13 needs 11.</li></ul>
<div class="tip">Letters and numbers can run in opposite directions round the circle; find the start of each series separately.</div>` },

{ id: "2026-84", year: 2026, no: 84, subject: "reasoning", topic: "Analogy", keySource: K,
q: `The question below you will find, instead of two pairs of words with more or less similar relationships between the first two words and the last two words, only first and fourth words are given and the second and the third words are replaced by numbers 1 and 2, for each of which four alternatives marked E, F, G, H and P, Q, R, S, respectively. Study the alternatives carefully and choose the best answer.<br>Onomatology : 1 :: 2 : Language<br>1. (E) Names (F) Races (G) Reality (H) Insects<br>2. (P) Occultism (Q) Semantics (R) Concology (S) Ontology`,
opts: ["FS", "EQ", "GP", "HR"], ans: 1,
analysis: `<h3>Answer: (b) EQ</h3><p><b>Onomatology</b> is the study of <b>names</b> (E); <b>semantics</b> is the study of meaning in <b>language</b> (Q). The relation is "study of".</p>
<h3>Why not the others</h3><ul>
<li><b>(a) FS</b>: the study of races is ethnology; ontology is the study of being.</li>
<li><b>(c) GP</b>: reality is studied by ontology/metaphysics; occultism concerns supernatural practices.</li>
<li><b>(d) HR</b>: insects are studied by entomology; conchology is the study of shells.</li></ul>
<div class="key">Other "-ologies": etymology (word origins), philology (historical language), phonology (speech sounds), oology (eggs), myrmecology (ants).</div>` },

{ id: "2026-85", year: 2026, no: 85, subject: "reasoning", topic: "Cube and its net", keySource: K, doubt: true,
q: `A solid figure is given followed by a problem. Each surface of the solid figure (marked with 1, 2, 3, 4, 5, 6, etc.) corresponds to certain specific surface of the given problem. Your task will be to find out how it corresponds.<br><img class="fig" src="img/2026-85.png" alt="Figure 1: a cube with corners A, B, C, D on top, E, F, G, H below, and faces 1 to 6 (1 = ABHE, 2 = ABCD, 3 = CDFG, 4 = BCGH, 5 = ADFE, 6 = EFGH). Figure 2: a net of five squares A to E with corner numbers.">If surfaces B and D in figure 1 correspond to surfaces 1 and 3 respectively in key figure 2, then the points marked as 5 in figure 1 correspond to which point in the key figure 2 ?`,
opts: ["E", "F", "G", "D"], ans: 0,
analysis: `<h3>Answer: (a) E (our answer; MADE EASY gives no answer)</h3><p>The question is internally inconsistent, as printed:</p>
<ul><li>In the net (figure 2), squares B and D share an edge, so they are <b>adjacent</b> faces.</li><li>In the cube (figure 1), surface 1 (ABHE) and surface 3 (CDFG) are <b>opposite</b> faces (the back and front).</li></ul>
<p>Adjacent squares in a net can never become opposite faces of the cube, so the stated correspondence cannot hold. The question also swaps the roles of "figure 1" and "figure 2" partway through.</p>
<p>Taking the intended reading as far as it goes (D = front face CDFG, with corner labels carried over from the net), the corner marked 5 lands at the cube's corner E, our choice (a).</p>
<div class="note">In doubt. MADE EASY marked this question (*), meaning no option can be justified, and we agree the data contradict each other. We expect UPSC to drop it. Our tentative answer (a) is shown only so the question can be attempted.</div><h3>The other options</h3><ul><li><b>(b) F</b>, <b>(c) G</b> and <b>(d) D</b>: with the inconsistent data none can be shown to be the unique answer either; under our reading, the corner marked 5 does not land at F, G or D.</li></ul>` },

{ id: "2026-86", year: 2026, no: 86, subject: "ca", topic: "Digi Bandar", keySource: K,
q: `What is the name of the national digital framework launched at India Maritime Week 2025 to make Indian ports data-driven and AI-enabled ?`,
opts: ["SmartPort Bharat", "Sagarmitra", "Digi Bandar", "PortNet India"], ans: 2,
analysis: `<h3>Answer: (c) Digi Bandar</h3><p><b>Digi Bandar</b> is a national digital framework, presented at India Maritime Week 2025 (Mumbai, October 2025), to make Indian ports data-driven, AI-enabled and interconnected, improving efficiency, safety and transparency.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) SmartPort Bharat</b> and <b>(d) PortNet India</b>: not the names of the framework.</li>
<li><b>(b) Sagarmitra</b>: not the name of this framework (Sagarmala is the separate port-led development programme).</li></ul>
<div class="key">Related port digitisation: the National Logistics Portal (Marine), PCS 1x (port community system) and the Sagar Setu app. India Maritime Week 2025's theme included "Smart, Secure and Sustainable Ports"; the long-term plan is the Maritime Amrit Kaal Vision 2047.</div>` },

{ id: "2026-87", year: 2026, no: 87, subject: "ca", topic: "Sources of FDI", keySource: K,
q: `According to the Reserve Bank of India's report, which two countries together accounted for over one-third of the total FDI in India ?`,
opts: ["United States and Singapore", "Mauritius and United Kingdom", "Singapore and Netherlands", "Japan and Germany"], ans: 0,
analysis: `<h3>Answer: (a) United States and Singapore</h3><p>RBI's <b>Census on Foreign Liabilities and Assets of Indian Direct Investment Entities, 2024-25</b> (released 29 October 2025) found that the <b>United States</b> (about 20%) and <b>Singapore</b> (about 14%) together accounted for over one-third of India's FDI stock (at market value). Mauritius, the United Kingdom and the Netherlands came next.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Mauritius and UK</b> and <b>(c) Singapore and Netherlands</b>: are among the top sources, but these pairs do not make up one-third.</li>
<li><b>(d) Japan and Germany</b>: significant investors but smaller shares.</li></ul>
<div class="key">The FLA census measures the <b>stock</b> of FDI at market value; DPIIT's figures measure annual equity <b>inflows</b>, where Mauritius and Singapore usually top the list. In the same census, Singapore was the top destination for India's outward investment.</div>` },

{ id: "2026-88", year: 2026, no: 88, subject: "ca", topic: "National Beekeeping and Honey Mission", keySource: K,
q: `Which organization is responsible for implementing the National Beekeeping &amp; Honey Mission (NBHM) ?`,
opts: ["National Horticulture Board (NHB)", "National Bee Board (NBB)", "National Cooperative Development Corporation (NCDC)", "Agricultural and Processed Food Products Export Development Authority (APEDA)"], ans: 1,
analysis: `<h3>Answer: (b) National Bee Board (NBB)</h3><p>The <b>National Beekeeping and Honey Mission</b> (launched 2020, under Atmanirbhar Bharat) is a Central Sector scheme of the Ministry of Agriculture and Farmers Welfare, implemented by the <b>National Bee Board</b>. It promotes scientific beekeeping (the "Sweet Revolution"), honey testing labs and traceability.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) NHB</b>: promotes horticulture; the National Bee Board is registered under it but is the implementing body for NBHM.</li>
<li><b>(c) NCDC</b>: finances cooperatives.</li>
<li><b>(d) APEDA</b>: promotes agricultural exports, including honey, but does not run the mission.</li></ul>
<div class="key">Pollination by bees raises crop yields. The NBHM portal "Madhukranti" registers beekeepers and tracks honey from source.</div>` },

{ id: "2026-89", year: 2026, no: 89, subject: "ca", topic: "Laokhowa Wildlife Sanctuary", keySource: K,
q: `Laokhowa Wildlife Sanctuary is located in which state ?`,
opts: ["Sikkim", "Arunachal Pradesh", "Assam", "Manipur"], ans: 2,
analysis: `<h3>Answer: (c) Assam</h3><p><b>Laokhowa Wildlife Sanctuary</b> lies on the south bank of the Brahmaputra in <b>Nagaon district, Assam</b>. With Burachapori it forms part of a corridor for rhinos and tigers between Kaziranga and Orang National Parks.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Sikkim</b>: has Khangchendzonga National Park, Fambong Lho and other sanctuaries.</li>
<li><b>(b) Arunachal Pradesh</b>: has Namdapha, Pakke and others.</li>
<li><b>(d) Manipur</b>: has Keibul Lamjao (the floating national park on Loktak Lake).</li></ul>
<div class="key">Laokhowa lost its rhinos to poaching in the 1980s; rhinos have been reintroduced and moved back through the corridor in recent years. Assam's other protected areas include Manas, Dibru-Saikhowa, Nameri and Pobitora.</div>` },

{ id: "2026-90", year: 2026, no: 90, subject: "ca", topic: "Silicon carbide fab", keySource: K,
q: `Which state is home to India's first Silicon Carbide (SiC) semiconductor manufacturing plant ?`,
opts: ["Odisha", "Jharkhand", "Bihar", "Haryana"], ans: 0,
analysis: `<h3>Answer: (a) Odisha</h3><p>India's first commercial <b>silicon carbide</b> compound semiconductor fab is being set up in <b>Bhubaneswar, Odisha</b>, by SiCSem Pvt Ltd (with UK-based Clas-SiC Wafer Fab), approved by the Union Cabinet in August 2025 under the India Semiconductor Mission.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Jharkhand</b>, <b>(c) Bihar</b> and <b>(d) Haryana</b>: not the site of this plant.</li></ul>
<div class="key">SiC is a wide-bandgap semiconductor used in electric-vehicle inverters, fast chargers, solar inverters and railway traction, because it handles high voltage and temperature with low losses. India's other approved semiconductor units are mainly in Gujarat (Dholera, Sanand) and Assam (Jagiroad).</div>` },

{ id: "2026-91", year: 2026, no: 91, subject: "ca", topic: "India–Denmark ties", keySource: K, doubt: true,
q: `What is the name of the initiative launched by India and Denmark in November 2025 to enhance bilateral ties ?`,
opts: ["Indo-Danish Economic Forum", "India-Denmark Trade Partnership", "Indo-Danish Business Council", "India-Denmark Sustainability Initiative"], ans: 2,
analysis: `<h3>Answer: (c) Indo-Danish Business Council (MADE EASY's key)</h3><p>MADE EASY's key states that the <b>Indo-Danish Business Council</b> was launched in November 2025, marking 75 years of India–Denmark diplomatic relations, to boost cooperation in green energy, deep tech and life sciences. Our own answer was also (c).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Indo-Danish Economic Forum</b>, <b>(b) India-Denmark Trade Partnership</b> and <b>(d) India-Denmark Sustainability Initiative</b>: not the names of the November 2025 initiative.</li></ul>
<div class="note">In doubt. We could not confirm the November 2025 launch from an official Indian or Danish government source; the claim appears in coaching material only. A related, verified body is the Indian Danish Chamber of Commerce. We will update this if UPSC's key or an official source settles it.</div>
<div class="key">India and Denmark have had a <b>Green Strategic Partnership</b> since September 2020, with a joint action plan for 2021–2026 covering renewable energy, water, smart cities and shipping.</div>` },

{ id: "2026-92", year: 2026, no: 92, subject: "ca", topic: "India AI Governance Guidelines", keySource: K,
q: `Which Ministry released the India AI Governance Guidelines in 2025 ?`,
opts: ["Ministry of Science and Technology", "Ministry of Electronics and Information Technology", "Ministry of Corporate Affairs", "Ministry of Education"], ans: 1,
analysis: `<h3>Answer: (b) Ministry of Electronics and Information Technology</h3><p><b>MeitY</b> released the India AI Governance Guidelines in November 2025, under the IndiaAI Mission. They favour a light-touch, principle-based approach ("seven sutras" such as trust, people first, innovation over restraint, fairness and accountability) relying on existing laws rather than a new AI law.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Science and Technology</b>: funds research (DST, Anusandhan National Research Foundation), but AI policy and the IndiaAI Mission sit with MeitY.</li>
<li><b>(c) Corporate Affairs</b>: company law and competition.</li>
<li><b>(d) Education</b>: AI in curricula, but not AI governance.</li></ul>
<div class="key">The IndiaAI Mission (March 2024, ₹10,372 crore) funds compute capacity (GPUs), datasets (AIKosh), foundation models and skilling. India hosted the AI Impact Summit in February 2026.</div>` },

{ id: "2026-93", year: 2026, no: 93, subject: "ca", topic: "ONDLS portal", keySource: K,
q: `Which organization developed the Online National Drugs Licensing System (ONDLS) portal ?`,
opts: ["Centre for Development of Advanced Computing (CDAC)", "National Health Authority (NHA)", "Indian Pharmacopoeia Commission (IPC)", "Drug Controller General of India (DCGI)"], ans: 0,
analysis: `<h3>Answer: (a) Centre for Development of Advanced Computing (CDAC)</h3><p>The <b>ONDLS</b> portal, a single online system for drug manufacturing and sale licences across states, was developed by <b>C-DAC</b> for the Central Drugs Standard Control Organisation (CDSCO). It aims at transparency, uniform processes and ease of doing business.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) NHA</b>: runs Ayushman Bharat PM-JAY and the Ayushman Bharat Digital Mission.</li>
<li><b>(c) IPC</b>: sets drug standards (the Indian Pharmacopoeia).</li>
<li><b>(d) DCGI</b>: heads CDSCO, the regulator that <b>uses</b> the system; it did not build it.</li></ul>
<div class="key">C-DAC (Pune, under MeitY) also developed the PARAM supercomputers and many e-governance systems.</div>` },

{ id: "2026-94", year: 2026, no: 94, subject: "ca", topic: "Blue economy report", keySource: K,
q: `Which institution released the report titled "India's Blue Economy : Strategy for Harnessing Deep-Sea and Offshore Fisheries" ?`,
opts: ["Indian Council of Agricultural Research (ICAR)", "NITI Aayog", "Ministry of Earth Sciences", "Reserve Bank of India"], ans: 1,
analysis: `<h3>Answer: (b) NITI Aayog</h3><p><b>NITI Aayog</b> released this report. It sets out a strategy for sustainable deep-sea and offshore fishing in India's Exclusive Economic Zone (about 2 million km²), which is under-used compared with crowded coastal waters, and for raising fish exports.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) ICAR</b>: runs fisheries research institutes (CMFRI, CIFT) but did not release this report.</li>
<li><b>(c) Ministry of Earth Sciences</b>: runs the Deep Ocean Mission (Samudrayaan), focused on ocean science and minerals.</li>
<li><b>(d) RBI</b>: monetary policy and banking.</li></ul>
<div class="key">Related schemes: Pradhan Mantri Matsya Sampada Yojana (2020) for fisheries infrastructure; India is the world's second-largest fish producer.</div>` },

{ id: "2026-95", year: 2026, no: 95, subject: "ca", topic: "NE-SPARKS", keySource: K,
q: `The NE-SPARKS programme has been launched to promote awareness about which field among students of the North Eastern Region of India ?`,
opts: ["Renewable Energy", "Space Science and Technology", "Digital literacy", "Agriculture"], ans: 1,
analysis: `<h3>Answer: (b) Space Science and Technology</h3><p><b>NE-SPARKS</b> (North Eastern Students' Programme for Awareness, Reach and Knowledge on Space) is a joint initiative of the Ministry of Development of North Eastern Region and ISRO. It takes students from the eight north-eastern states on exposure visits to ISRO centres to encourage careers in space science.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Renewable energy</b>, <b>(c) Digital literacy</b> and <b>(d) Agriculture</b>: not the focus of this programme.</li></ul>
<div class="key">ISRO has a North Eastern Space Applications Centre (NESAC) at Umiam, Meghalaya, which applies remote sensing to the region's planning and disaster management.</div>` },

{ id: "2026-96", year: 2026, no: 96, subject: "ca", topic: "PUNCH mission", keySource: K,
q: `Which space organization launched the PUNCH Space Mission ?`,
opts: ["Indian Space Research Organisation (ISRO)", "National Aeronautics and Space Administration (NASA)", "European Space Agency (ESA)", "China National Space Administration (CNSA)"], ans: 1,
analysis: `<h3>Answer: (b) NASA</h3><p><b>PUNCH</b> (Polarimeter to Unify the Corona and Heliosphere) is a <b>NASA</b> mission of four small satellites, launched in March 2025 with the SPHEREx telescope on a SpaceX Falcon 9. It images how the Sun's outer corona becomes the solar wind.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) ISRO</b>: its solar mission is Aditya-L1 (launched September 2023), studying the Sun from the L1 point.</li>
<li><b>(c) ESA</b>: its solar missions include Solar Orbiter and Proba-3 (formation-flying coronagraph).</li>
<li><b>(d) CNSA</b>: China's solar observatory is ASO-S.</li></ul>
<div class="key">Solar wind and coronal mass ejections drive space weather, which can damage satellites and power grids; missions like PUNCH and Aditya-L1 help forecasting.</div>` },

{ id: "2026-97", year: 2026, no: 97, subject: "ca", topic: "Environmental accounting on forests", keySource: K,
q: `According to Environmental Accounting on forest 2025 report, which state showed the highest rise in Recorded Forest Area (RFA) share ?`,
opts: ["Chhattisgarh", "Odisha", "Jharkhand", "Uttarakhand"], ans: 3,
analysis: `<h3>Answer: (d) Uttarakhand</h3><p>MoSPI's <b>Environmental Accounting on Forest – 2025</b> (eighth in its environmental accounts series, based on the UN SEEA framework) reported the largest rise in Recorded Forest Area share in <b>Uttarakhand</b> (about 6.3%), followed by Odisha (about 2%) and Jharkhand (about 1.9%).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Chhattisgarh</b>: not among the largest rises.</li>
<li><b>(b) Odisha</b> and <b>(c) Jharkhand</b>: second and third.</li></ul>
<div class="key">The same report found India's forest cover rose by about 17,444 km² between 2010-11 and 2021-22, with Kerala, Karnataka and Tamil Nadu leading in absolute gains. Recorded Forest Area is land legally notified as forest, which differs from forest cover measured by satellite (Forest Survey of India).</div>` },

{ id: "2026-98", year: 2026, no: 98, subject: "ca", topic: "Coast Guard fast patrol vessels", keySource: K,
q: `Where were the Fast Patrol Vessels (FPVs) ICGS Ajit and ICGS Aparajit launched ?`,
opts: ["Cochin Shipyard Limited", "Mazagon Dock Shipbuilders", "Goa Shipyard Limited", "Hindustan Shipyard"], ans: 2,
analysis: `<h3>Answer: (c) Goa Shipyard Limited</h3><p><b>ICGS Ajit</b> and <b>ICGS Aparajit</b>, the last two of eight Adamya-class fast patrol vessels for the Indian Coast Guard, were launched at <b>Goa Shipyard Limited</b>, Vasco da Gama, on 24 October 2025. They are 52 m vessels for coastal patrol, anti-smuggling and search and rescue, with over 60% indigenous content.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Cochin Shipyard</b>: builds the INS Vikrant aircraft carrier and ASW shallow-water craft (see 2024 Q94).</li>
<li><b>(b) Mazagon Dock</b>: builds submarines and destroyers.</li>
<li><b>(d) Hindustan Shipyard</b> (Visakhapatnam): builds fleet support ships and diving support vessels.</li></ul>
<div class="key">Note the difference between <b>launch</b> (the hull enters the water) and <b>commissioning</b> (the ship joins service). ICGS Ajit was commissioned in October 2026.</div>` },

{ id: "2026-99", year: 2026, no: 99, subject: "ca", topic: "Global MIL Week 2025", keySource: K,
q: `What is the theme of Global Media and Information Literacy (MIL) Week 2025 ?`,
opts: ["Empowering Citizens through Media Literacy", "Media Literacy for Peaceful Societies", "Building Critical Thinkers in the Digital Age", "Minds Over Artificial Intelligence (AI) – MIL in Digital Spaces"], ans: 3,
analysis: `<h3>Answer: (d) Minds Over Artificial Intelligence (AI) – MIL in Digital Spaces</h3><p>UNESCO's <b>Global Media and Information Literacy Week</b> (24–31 October 2025) had the theme "<b>Minds Over AI – MIL in Digital Spaces</b>", stressing human judgment and critical thinking about AI-generated content. Its feature conference was held in Cartagena, Colombia.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>, <b>(b)</b> and <b>(c)</b>: general MIL slogans, not the 2025 theme.</li></ul>
<div class="key">The UN General Assembly proclaimed Global MIL Week in 2021; it is observed every year from 24 to 31 October.</div>` },

{ id: "2026-100", year: 2026, no: 100, subject: "ca", topic: "Samriddh Gram pilot", keySource: K,
q: `The Samriddh Gram Phygital Services Pilot Project was recently launched by which organization ?`,
opts: ["Telecom Regulatory Authority of India (TRAI)", "Bharat Sanchar Nigam Limited (BSNL)", "Telecom Centres of Excellence (TCoE)", "Ministry of Power"], ans: 2,
analysis: `<h3>Answer: (c) Telecom Centres of Excellence (TCoE)</h3><p>The <b>Samriddh Gram Phygital Services Pilot Project</b> was launched by <b>TCoE India</b>, under the Department of Telecommunications, which signed agreements with implementation partners on 29 October 2025. It sets up village "Samriddhi Kendras" that combine physical services with digital ones (telemedicine, e-governance, e-commerce, financial inclusion) over BharatNet, in pilot villages in Madhya Pradesh, Uttar Pradesh and Andhra Pradesh.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) TRAI</b>: the telecom regulator; it does not run village service pilots.</li>
<li><b>(b) BSNL</b>: provides connectivity (it maintains BharatNet), but did not launch this project.</li>
<li><b>(d) Ministry of Power</b>: unrelated.</li></ul>
<div class="key">"Phygital" = physical + digital. The project is funded partly under the Telecom Technology Development Fund (TTDF), and in 2026 it won a WSIS (World Summit on the Information Society) Prize.</div>` }
  );
})();
