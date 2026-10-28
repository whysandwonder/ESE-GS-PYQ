// ESE 2023 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q76–100
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
window.PYQ_QUESTIONS.push(
{ id: "2023-76", year: 2023, no: 76, subject: "reasoning", topic: "Number pattern in circles",
q: `In the first two circles, the number inside the circle is written according to a particular relation. What is the number inside the third circle which follows the same relation as that of the first two circles ?<br>Circle 1: 8 on top; 27 and 125 below.<br>Circle 2: 10 on top; 64 and 216 below.<br>Circle 3: ? on top; 343 and 216 below.`,
opts: ["12", "13", "9", "14"], ans: 1,
analysis: `<h3>Answer: (b) 13</h3><p>The top number is the sum of the <b>cube roots</b> of the two lower numbers.</p>
<ul><li>∛27 + ∛125 = 3 + 5 = 8 ✔</li><li>∛64 + ∛216 = 4 + 6 = 10 ✔</li><li>∛343 + ∛216 = 7 + 6 = <b>13</b></li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a) 12</b>: would need cube roots adding to 12 (e.g. taking 343 as 6³).</li>
<li><b>(c) 9</b>: subtracting or another rule does not fit the first two circles.</li>
<li><b>(d) 14</b>: would need ∛343 = 8; but 8³ = 512.</li></ul>
<div class="tip">Know the cubes 1–10: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. When numbers like 27, 64, 125 appear, try cube roots first.</div><div class="key">Other common circle rules: sum or product of the outer numbers, squares, differences, or a mix (e.g. a × b − c). Test each rule on the first two circles before using it on the third.</div>` },

{ id: "2023-77", year: 2023, no: 77, subject: "reasoning", topic: "Best clue",
q: `Deepthi is playing a treasure hunt game. At the first stage, Deepthi needs to choose a five-digit code to unlock the vault which contains the treasure. She gets the following codes to choose from<br>15342 26540 35412<br>23105 15320 13402<br>35047 71024 28305<br>The following clues are given to her to help her to find the code.<br>P. The code number is not an even number.<br>Q. The product of the first two digits is odd.<br>R. The sum of the first four digits is 12.<br>S. The code number is not a multiple of 5.<br>If Deepthi had the option of selecting only one clue, which of the four clues will give her the best chance of finding out the five digit code ?`,
opts: ["S", "R", "Q", "P"], ans: 1,
analysis: `<h3>Answer: (b) R</h3><p>The best clue is the one that leaves the fewest candidates.</p>
<table><tr><th>Clue</th><th>Codes left</th><th>Count</th></tr><tr><td>P (odd)</td><td>23105, 35047, 28305</td><td>3</td></tr><tr><td>Q (first two digits both odd)</td><td>15342, 35412, 15320, 13402, 35047, 71024</td><td>6</td></tr><tr><td>R (first four digits sum to 12)</td><td>35047 (3+5+0+4)</td><td><b>1</b></td></tr><tr><td>S (not a multiple of 5)</td><td>15342, 35412, 13402, 35047, 71024</td><td>5</td></tr></table>
<p>Clue R alone identifies the code: <b>35047</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) S</b>: leaves 5 codes.</li>
<li><b>(c) Q</b>: leaves 6 codes.</li>
<li><b>(d) P</b>: leaves 3 codes.</li></ul>
<div class="key">35047 satisfies all four clues (odd, 3 × 5 odd, sum 12, does not end in 0 or 5), confirming it is the intended code.</div>` },

{ id: "2023-78", year: 2023, no: 78, subject: "reasoning", topic: "Elevator arithmetic", dropped: true,
q: `Suppose you enter an elevator at a certain floor. Then the elevator moves up 5 floors, down 3 floors, and up 2 floors. If you are then at the 8th floor, on what floor did you first enter the elevator ?`,
opts: ["8", "7", "6", "9"], ans: null,
analysis: `<h3>Dropped by UPSC (not scored)</h3><p>UPSC dropped this item in its final key because none of the options is correct.</p>
<p>Net movement = +5 − 3 + 2 = <b>+4 floors</b>. If you end on the 8th floor, you started on 8 − 4 = <b>4th floor</b>. The options offer 8, 7, 6 and 9, so no answer could be marked.</p>
<ul><li>Starting at 8 would end at 12; at 7, at 11; at 6, at 10; at 9, at 13.</li></ul>
<p>We had reached the same conclusion (no correct option) before seeing the key.</p>
<div class="tip">Work backwards: reverse each move in reverse order (down 2, up 3, down 5) from the final floor: 8 → 6 → 9 → 4.</div>` },

{ id: "2023-79", year: 2023, no: 79, subject: "reasoning", topic: "Number series",
q: `A number series is given with one term missing. Choose the correct alternative from the options.<br>0·5, 0·55, 0·65, 0·8, ?`,
opts: ["0·9", "0·95", "0·82", "1"], ans: 3,
analysis: `<h3>Answer: (d) 1</h3><p>Differences: 0.05, 0.10, 0.15, so the next is 0.20. 0.8 + 0.20 = <b>1.0</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 0·9</b>: difference 0.10, breaking the rising pattern.</li>
<li><b>(b) 0·95</b>: difference 0.15, repeating the previous step.</li>
<li><b>(c) 0·82</b>: difference 0.02, no pattern.</li></ul>
<div class="tip">Multiply by 20 to see it clearly: 10, 11, 13, 16, 20 (add 1, 2, 3, 4).</div><div class="key">Second differences are constant (0.05), so the terms follow a quadratic: t<sub>n</sub> = 0.5 + 0.025n(n − 1) for n = 1, 2, 3, …; t<sub>5</sub> = 0.5 + 0.5 = 1.0.</div><div class="tip">Series method: first look at differences; if they grow steadily (here by 0.05), the next difference continues the pattern.</div>` },

{ id: "2023-80", year: 2023, no: 80, subject: "reasoning", topic: "Counting squares in a design",
q: `The soccer club is putting together a mural using lightly colored transparent paper. This paper then is cut into squares of different sizes that are placed next to each other to make the designs for the mural. Of course, the club wants to save money, so its members are trying to buy the minimum number of sheets of colored paper. Below is one of the designs they are going to use. What is the minimum number of squares they will need to make this design ?<br><img class="fig" src="img/2023-80.png" alt="A large square containing a smaller central square with a diamond inscribed in it; lines run from the diamond's left and right corners horizontally to the outer square's sides, and from its bottom corner down to the outer square's base.">`,
opts: ["4", "5", "6", "7"], ans: 1,
analysis: `<h3>Answer: (b) 5</h3><p>Build the design from overlapping squares:</p>
<ol><li>The <b>large outer square</b>.</li><li>A <b>bottom-left quarter square</b>: its top edge gives the left horizontal line, its right edge the lower vertical line.</li><li>A <b>bottom-right quarter square</b>: its top edge gives the right horizontal line.</li><li>The <b>central square</b>, laid on top over the middle.</li><li>The <b>diamond</b> (a square turned 45°) inside it.</li></ol>
<p>Every line of the design is produced, so <b>5</b> squares are enough.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 4</b>: without both quarter squares, either the left or the right horizontal line (or the lower vertical) is missing.</li>
<li><b>(c) 6</b> and <b>(d) 7</b>: possible (e.g. adding upper quarter squares) but not the minimum; the upper half has no dividing line, so no extra square is needed there.</li></ul>
<div class="key">UPSC's key gives 5. The answer assumes the central square is laid on top and hides the quarter squares' edges inside it.</div>` },

{ id: "2023-81", year: 2023, no: 81, subject: "reasoning", topic: "Number series",
q: `What is the correct alternative for the question mark ?<br>2, 3, 8, 63, ?`,
opts: ["1038", "1998", "3008", "3968"], ans: 3,
analysis: `<h3>Answer: (d) 3968</h3><p>Each term = (previous term)² − 1.</p>
<ul><li>2² − 1 = 3</li><li>3² − 1 = 8</li><li>8² − 1 = 63</li><li>63² − 1 = 3969 − 1 = <b>3968</b></li></ul>
<h3>Why not the others</h3><ul>
<li><b>(a) 1038</b>, <b>(b) 1998</b> and <b>(c) 3008</b>: none equals 63² − 1; they do not fit any rule that also gives 3, 8 and 63.</li></ul>
<div class="tip">When terms grow very fast, try squares or cubes of the previous term, plus or minus a small number.</div><div class="key">Square quickly: 63² = (64 − 1)² = 4096 − 128 + 1 = 3969.</div><div class="tip">Related pattern: a<sub>n+1</sub> = a<sub>n</sub>² + 1 gives 1, 2, 5, 26, 677. Always check the rule on at least three steps before trusting it.</div>` },

{ id: "2023-82", year: 2023, no: 82, subject: "ca", topic: "Mahila Kisan Sashaktikaran Pariyojana",
q: `Which one of the following is NOT an objective of Mahila Kisan Sashaktikaran Pariyojana (MKSP) ?`,
opts: ["To create sustainable agricultural livelihood opportunities for women in agriculture", "To ensure food and nutrition security at the household and the community level", "To enable women to have better access to inputs and services of the government and other agencies", "To help women educate the rural folk and improve their living condition"], ans: 3,
analysis: `<h3>Answer: (d) To help women educate the rural folk and improve their living condition</h3><p><b>MKSP</b> (2010-11) is a sub-component of the Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM), Ministry of Rural Development. It aims to empower women farmers by improving their participation and productivity in agriculture. Educating rural people is not one of its objectives.</p>
<h3>Why not the others</h3><p>These are listed objectives of MKSP:</p><ul>
<li><b>(a)</b>: create sustainable agricultural livelihood opportunities for women.</li>
<li><b>(b)</b>: ensure food and nutrition security at household and community level.</li>
<li><b>(c)</b>: give women better access to government inputs and services.</li></ul>
<div class="key">MKSP promotes agro-ecological practices, non-timber forest produce, and skills for women farmers ("Krishi Sakhis", community resource persons). The Centre funds up to 60% (90% in the North-East and hill states).</div>` },

{ id: "2023-83", year: 2023, no: 83, subject: "ca", topic: "Jal Jeevan Mission",
q: `Consider the following statements regarding the aim of Jal Jeevan Mission to provide every rural household of the country with adequate tap water of prescribed quality on regular basis :<ol><li>It seeks to ensure 'ease of living' which leads to healthier as well as hygienic living conditions in rural areas.</li><li>It aims to establish water tanks in good numbers with the slogan 'Har Ghar Jal'.</li><li>By ensuring community participation at village-level, it will help in developing local leadership based on Gandhiji's philosophy of 'Gram Swarajya'.</li><li>The Mission seeks to achieve its goal by 2024.</li></ol>Which of the above statements are correct ?`,
opts: ["1, 3 and 4 only", "1, 2, 3 and 4", "1 and 3 only", "2 and 4 only"], ans: 0,
analysis: `<h3>Answer: (a) 1, 3 and 4 only</h3><p><b>Jal Jeevan Mission</b> (launched 15 August 2019, Ministry of Jal Shakti) aims to give every rural household a <b>Functional Household Tap Connection</b> (FHTC) supplying 55 litres per person per day of water of prescribed quality (BIS 10500).</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> tap water at home ensures "ease of living", better health and hygiene, and reduces the drudgery of women and girls fetching water.</li>
<li><b>2 (wrong):</b> "Har Ghar Jal" means <b>a tap connection in every home</b>, not building water tanks.</li>
<li><b>3 (correct):</b> it is a community-led programme: village water and sanitation committees (Pani Samitis) plan and run supply schemes, in the spirit of Gram Swaraj.</li>
<li><b>4 (correct, as at the time):</b> the original target was 2024.</li></ul>
<div class="note">Latest update (as of 2026): the Union Budget 2025-26 extended the mission to 2028, and the Cabinet later approved its extension to December 2028. About 15.8 crore of the 19.36 crore rural households had tap connections by early 2026.</div>` },

{ id: "2023-84", year: 2023, no: 84, subject: "ca", topic: "Books and authors",
q: `Which one of the following is NOT correctly matched ?`,
opts: ["The Last Queen : Chitra Banerjee Divakaruni", "Inseparable : Simone de Beauvior", "Great Circle : Rumaan Alam", "Jungle Nama : Amitav Ghosh"], ans: 2,
analysis: `<h3>Answer: (c) Great Circle : Rumaan Alam</h3><p><b>Great Circle</b> (2021) is by <b>Maggie Shipstead</b>; it follows a woman aviator attempting to fly around the world pole to pole, and was shortlisted for the 2021 Booker Prize. <b>Rumaan Alam</b> wrote <i>Leave the World Behind</i> (2020).</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b> is correct: <i>The Last Queen</i> (2021), Chitra Banerjee Divakaruni's novel on Maharani Jind Kaur, wife of Ranjit Singh.</li>
<li><b>(b)</b> is correct: <i>Inseparable</i> is Simone de Beauvoir's novella, written in 1954 and first published in 2020 (English 2021).</li>
<li><b>(d)</b> is correct: <i>Jungle Nama</i> (2021) is Amitav Ghosh's verse retelling of the Sundarbans legend of Bon Bibi.</li></ul>
<div class="key">Book-author questions in ESE come from books in the news in the year before the exam; most here are from 2021.</div>` },

{ id: "2023-85", year: 2023, no: 85, subject: "ca", topic: "Pandora Papers",
q: `What is 'The Pandora Papers' ?`,
opts: ["It is the document related to the top 100 highest tax payers of the world", "It is the project of investigation which leaked almost 12 million documents that reveals hidden wealth, money laundering by some of the world's rich and powerful", "It is the record of total revenue collected at the world level", "It is the document containing record of the top young talented entrepreneurs under the age 30"], ans: 1,
analysis: `<h3>Answer: (b)</h3><p>The <b>Pandora Papers</b> (October 2021) were a leak of about <b>11.9 million documents</b> from 14 offshore service providers, investigated by the International Consortium of Investigative Journalists (ICIJ) with over 600 journalists. They showed how politicians, celebrities and business people used offshore trusts and shell companies to hide wealth and avoid tax. In India, the Indian Express was the partner; the government set up a multi-agency group (CBDT, ED, RBI, FIU) to probe the Indian names.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: no such document; the Papers are about hidden wealth, not top taxpayers.</li>
<li><b>(c)</b>: global revenue statistics come from bodies like the OECD or IMF, not from a leak.</li>
<li><b>(d)</b>: describes lists like Forbes' "30 Under 30".</li></ul>
<div class="key">Earlier ICIJ leaks: Offshore Leaks (2013), Swiss Leaks (2015), Panama Papers (2016, 11.5 million files from Mossack Fonseca), Paradise Papers (2017).</div>` },

{ id: "2023-86", year: 2023, no: 86, subject: "ca", topic: "Personalities in the news (2021)",
q: `Match the following :<table><tr><th>List I</th><th>List II</th></tr><tr><td>P. V Shanta</td><td>1. Film director</td></tr><tr><td>Q. Akhtar Ali</td><td>2. Former Davis cup coach</td></tr><tr><td>R. Anil Dharkar</td><td>3. Noted journalist</td></tr><tr><td>S. Sumitra Bhave</td><td>4. Renowned Indian oncologist</td></tr></table>Select the correct pair using the code given below :`,
opts: ["P–4, Q–2, R–3, S–1", "P–2, Q–4, R–1, S–3", "P–3, Q–1, R–2, S–4", "P–1, Q–3, R–4, S–2"], ans: 0,
analysis: `<h3>Answer: (a) P–4, Q–2, R–3, S–1</h3><p>All four died in 2021, which is why they were in the news.</p>
<table><tr><th>Person</th><th>Known as</th></tr><tr><td>Dr V. Shanta</td><td>Oncologist, chairperson of the Cancer Institute (WIA), Adyar, Chennai; Magsaysay Award 2005; died January 2021</td></tr><tr><td>Akhtar Ali</td><td>Tennis player and former India Davis Cup coach; died February 2021</td></tr><tr><td>Anil Dharker</td><td>Journalist and author, editor of the Illustrated Weekly of India and Mid-day, founder of the Mumbai International Literary Festival; died March 2021</td></tr><tr><td>Sumitra Bhave</td><td>Marathi film director (with Sunil Sukthankar: <i>Doghi</i>, <i>Kaasav</i>); died April 2021</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: makes Shanta a tennis coach and Dharker a film director.</li>
<li><b>(c)</b>: makes Shanta a journalist and Akhtar Ali a film director.</li>
<li><b>(d)</b>: makes Shanta a film director and Sumitra Bhave a tennis coach.</li></ul>
<div class="tip">Anchor on the best-known name (V. Shanta, the cancer doctor), then only option (a) remains.</div>` },

{ id: "2023-87", year: 2023, no: 87, subject: "ca", topic: "SDG India Index: Zero Hunger",
q: `Select the State/s and/or UTs of India which have been ranked first as 'Zero Hunger' as per SDG : India Agenda for Development :`,
opts: ["Tamil Nadu and Delhi", "Kerala and Chandigarh", "Gujarat and Delhi", "Goa and Lakshadweep"], ans: 1,
analysis: `<h3>Answer: (b) Kerala and Chandigarh</h3><p>In NITI Aayog's <b>SDG India Index 2020-21</b> (the latest when the paper was set), the top performers on <b>Goal 2: Zero Hunger</b> were <b>Kerala</b> among the states and <b>Chandigarh</b> among the Union Territories.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Tamil Nadu and Delhi</b>: Tamil Nadu ranked second overall in 2020-21; neither topped Goal 2.</li>
<li><b>(c) Gujarat and Delhi</b>: did not top Goal 2.</li>
<li><b>(d) Goa and Lakshadweep</b>: did well on some goals but were not first on Zero Hunger.</li></ul>
<div class="key">SDG India Index 2020-21: overall top state Kerala (75), top UT Chandigarh (79); India's composite score 66. The 2023-24 edition (fourth, released July 2024) gave India 71, with Kerala and Uttarakhand jointly top among states.</div>` },

{ id: "2023-88", year: 2023, no: 88, subject: "ca", topic: "Women achievers",
q: `Which one of the following pairs is NOT correct under women achievers ?`,
opts: ["Megha Rajagopalan : winner of Pulitzer prize in feature writing", "Anvee Bhutani : Indian-origin student elected as the President of Oxford Student Union", "Delisha Davis : 24 year old female heavy vehicle driver carrying hazardous goods", "Bela M Trivedi : took oath as the Judge of the Supreme Court of India"], ans: 0,
analysis: `<h3>Answer: (a) Megha Rajagopalan : winner of Pulitzer prize in feature writing</h3><p>Megha Rajagopalan (BuzzFeed News) won the <b>2021 Pulitzer Prize for International Reporting</b>, with Alison Killing and Christo Buschek, for exposing China's detention camps for Uighur Muslims in Xinjiang using satellite images. Not feature writing.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> is correct: Anvee Bhutani was elected president of the Oxford Student Union in 2021.</li>
<li><b>(c)</b> is correct: Delisha Davis of Thrissur, Kerala became known as the state's first woman licensed to drive a tanker carrying hazardous goods (petroleum).</li>
<li><b>(d)</b> is correct: Justice Bela M. Trivedi was among the nine judges (three of them women) who took oath in the Supreme Court on 31 August 2021.</li></ul>
<div class="key">The other two women sworn in on 31 August 2021 were Justices Hima Kohli and B.V. Nagarathna. Justice Nagarathna is in line to become India's first woman Chief Justice in 2027.</div>` },

{ id: "2023-89", year: 2023, no: 89, subject: "ca", topic: "Indian space tourist",
q: `Who among the following is India's first Space Tourist ?`,
opts: ["Santhosh George Kulangara", "Sirisha Bandla", "Raja J V Chari", "Pankaj Lokhani"], ans: 0,
analysis: `<h3>Answer: (a) Santhosh George Kulangara</h3><p>When the paper was set, <b>Santhosh George Kulangara</b>, a Kerala travel writer and broadcaster (Safari TV), was widely reported as India's first space tourist: he had booked a seat with Virgin Galactic (2007) and trained for the flight.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Sirisha Bandla</b>: Indian-born Virgin Galactic employee who flew on Unity 22 (July 2021) as a crew member (research operations), not as a tourist.</li>
<li><b>(c) Raja J V Chari</b>: Indian-American NASA astronaut; commander of SpaceX Crew-3 (2021).</li>
<li><b>(d) Pankaj Lokhani</b>: not associated with spaceflight.</li></ul>
<div class="note">Latest update (as of 2026): Kulangara's flight did not take place. <b>Gopi Thotakura</b> became the first Indian to actually fly to space as a tourist, on Blue Origin's NS-25 suborbital flight on 19 May 2024. In 2025, Group Captain Shubhanshu Shukla flew to the ISS on Axiom-4, the first Indian on the ISS.</div>` },

{ id: "2023-90", year: 2023, no: 90, subject: "ca", topic: "Wassenaar Arrangement",
q: `The Wassenaar Arrangement is`,
opts: ["an elite club of countries which subscribe to arms export controls", "a group of countries concerned with unconventional energy sources in the world", "concerned with the preservation of extinct animal species", "an arrangement which seeks to study recurring cyclone patterns"], ans: 0,
analysis: `<h3>Answer: (a) an elite club of countries which subscribe to arms export controls</h3><p>The <b>Wassenaar Arrangement</b> (1996, secretariat in Vienna) is a voluntary export-control regime for <b>conventional arms and dual-use goods and technologies</b>. Members share information on transfers to prevent destabilising build-ups. <b>India joined in December 2017 as its 42nd participating state</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: groupings on energy include the International Solar Alliance and IRENA, not Wassenaar.</li>
<li><b>(c)</b>: endangered species trade is governed by CITES (1973); extinct species cannot be preserved.</li>
<li><b>(d)</b>: cyclone research is coordinated by the WMO and its regional centres (IMD New Delhi for the north Indian Ocean).</li></ul>
<div class="key">The four export-control regimes: Nuclear Suppliers Group (India not a member), Missile Technology Control Regime (India joined 2016), Wassenaar Arrangement (2017) and Australia Group, for chemical and biological weapons (2018).</div>` },

{ id: "2023-91", year: 2023, no: 91, subject: "ca", topic: "Doing Business report",
q: `Which one of the following is NOT included in the 12 areas of "Doing Business 2020" ?`,
opts: ["Getting credit", "Paying taxes", "Promoting small scale industries", "Getting electricity"], ans: 2,
analysis: `<h3>Answer: (c) Promoting small scale industries</h3><p>The World Bank's <b>Doing Business 2020</b> measured regulation in 12 areas; 10 were used for the ranking: starting a business, dealing with construction permits, <b>getting electricity</b>, registering property, <b>getting credit</b>, protecting minority investors, <b>paying taxes</b>, trading across borders, enforcing contracts and resolving insolvency. The other two (not ranked) were employing workers and contracting with the government. Promoting small-scale industries is not one of them.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Getting credit</b>, <b>(b) Paying taxes</b> and <b>(d) Getting electricity</b>: all are among the ranked areas.</li></ul>
<div class="key">India rose from 142nd (2015) to 63rd (2020). The World Bank discontinued the report in September 2021 after data irregularities; its successor, <b>B-READY</b> (Business Ready), published its first report in October 2024.</div>` },

{ id: "2023-92", year: 2023, no: 92, subject: "ca", topic: "Sectors of the economy",
q: `Consider the following economic activities :<ol><li>Public administration</li><li>Financial services</li><li>Mining and quarrying</li></ol>Which of the above economic activities fall under the tertiary sector ?`,
opts: ["1 and 3 only", "1, 2 and 3", "2 and 3 only", "1 and 2 only"], ans: 3,
analysis: `<h3>Answer: (d) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (tertiary):</b> public administration and defence is a service.</li>
<li><b>2 (tertiary):</b> financial services (banking, insurance, real estate) are services.</li>
<li><b>3 (not tertiary):</b> mining and quarrying extract natural resources, so they are in the <b>primary</b> sector in the traditional classification. (In India's national accounts, mining is grouped under "industry" with manufacturing, but it is never part of services.)</li></ul>
<div class="key">Sectors: primary (agriculture, forestry, fishing, mining), secondary (manufacturing, construction, electricity, gas and water) and tertiary (trade, transport, communication, finance, real estate, public administration, other services). Services make up over half of India's GVA.</div>` },

{ id: "2023-93", year: 2023, no: 93, subject: "ca", topic: "IMF growth projection",
q: `IMF raises its projection for economic growth in 2021-22 to`,
opts: ["11·3%", "12·5%", "10·2%", "8·4%"], ans: 1,
analysis: `<h3>Answer: (b) 12·5%</h3><p>In its <b>April 2021 World Economic Outlook</b>, the IMF raised its forecast for India's growth in FY 2021-22 to <b>12.5%</b> (from 11.5% in January 2021), on the strong rebound after the 2020 lockdown.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 11·3%</b>: not an IMF figure for the year (the January 2021 forecast was 11.5%).</li>
<li><b>(c) 10·2%</b>: not the IMF figure.</li>
<li><b>(d) 8·4%</b>: not the IMF projection.</li></ul>
<div class="key">After the second COVID wave, the IMF cut the forecast to 9.5% (July 2021). Actual FY 2021-22 growth was about 9.7% (revised data). IMF forecasts appear in the WEO (April and October) and its updates (January and July).</div>` },

{ id: "2023-94", year: 2023, no: 94, subject: "ca", topic: "Corporate news (2021)",
q: `Consider the following statements :<ol><li>Ford India will stop manufacturing vehicles in India but will retain the engine-making and technology services business as part of restructuring its India operations.</li><li>Zee Entertainment Enterprises Ltd announces a merger with Sony Pictures Networks India.</li><li>Yashoda Hegde is the new CEO of Coffee Day Enterprises Ltd.</li></ol>Which of the above statements is/are correct ?`,
opts: ["1 and 3 only", "1 only", "1 and 2 only", "2 only"], ans: 2,
analysis: `<h3>Answer: (c) 1 and 2 only</h3><h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> in September 2021 Ford announced it would stop making vehicles in India (Chennai and Sanand plants) but keep engine manufacturing and its Ford Business Solutions technology centre.</li>
<li><b>2 (correct):</b> in September 2021 Zee Entertainment's board approved a merger with Sony Pictures Networks India.</li>
<li><b>3 (wrong):</b> the CEO of Coffee Day Enterprises is <b>Malavika Hegde</b> (appointed December 2020), wife of founder V.G. Siddhartha.</li></ul>
<div class="note">Latest update: the Zee–Sony merger was called off by Sony in January 2024, and the two later settled their disputes. Ford's Chennai plant was later announced for reuse for export manufacturing.</div>` },

{ id: "2023-95", year: 2023, no: 95, subject: "ca", topic: "International Year of Millets 2023",
q: `Government of India has moved a resolution in UN General Assembly to declare the year 2023 as the International Year of Millets for which of the following reasons ?<ol><li>Support will be provided for post-harvest value addition, enhancing domestic consumption.</li><li>Support will be provided for branding millet products nationally and internationally.</li></ol>Select the correct answer using the code given below :`,
opts: ["1 only", "Neither 1 nor 2", "Both 1 and 2", "2 only"], ans: 2,
analysis: `<h3>Answer: (c) Both 1 and 2</h3><p>India proposed the International Year of Millets; the UN General Assembly adopted the resolution in March 2021, backed by over 70 countries. The government's plan for IYM 2023 included both points.</p>
<h3>Statement by statement</h3><ul>
<li><b>1 (correct):</b> support for post-harvest value addition and for raising domestic consumption.</li>
<li><b>2 (correct):</b> support for branding millet products nationally and internationally ("Shree Anna" in Budget 2023-24).</li></ul>
<div class="key">India is the largest producer of millets (about 40% of world output). The Indian Institute of Millets Research (Hyderabad) was named a Global Centre of Excellence. Millets need little water and suit dry areas, which makes them climate-resilient "nutri-cereals".</div>` },

{ id: "2023-96", year: 2023, no: 96, subject: "ca", topic: "Mottos of institutions",
q: `'Bahujan Hitaya : Bahujan Sukhaya' is the motto of`,
opts: ["Central Board of Film Certification", "Indian Railways", "Doordarshan", "All India Radio"], ans: 3,
analysis: `<h3>Answer: (d) All India Radio</h3><p><b>"Bahujan Hitaya, Bahujan Sukhaya"</b> ("for the welfare and happiness of the many", a Buddhist phrase) is the motto of <b>All India Radio</b> (Akashvani), part of Prasar Bharati.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) CBFC</b>: the film certification board under the Ministry of Information and Broadcasting; it does not use this motto.</li>
<li><b>(b) Indian Railways</b>: has used taglines such as "Lifeline of the Nation", not this motto.</li>
<li><b>(c) Doordarshan</b>: its motto is <b>"Satyam Shivam Sundaram"</b>.</li></ul>
<div class="key">Other mottos: LIC "Yogakshemam Vahamyaham"; Supreme Court "Yato Dharmastato Jayah"; India "Satyameva Jayate"; Indian Navy "Sham No Varunah".</div>` }
);

(function () {
  var C = ["Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I)", "Both Statement (I) and Statement (II) are individually true but Statement (II) is NOT the correct explanation of Statement (I)", "Statement (I) is true but Statement (II) is false", "Statement (I) is false but Statement (II) is true"];
  var N = "<br><br>(Codes: (a) both true and II explains I; (b) both true but II does not explain I; (c) I true, II false; (d) I false, II true)";
  window.PYQ_QUESTIONS.push(
{ id: "2023-97", year: 2023, no: 97, subject: "pm", topic: "Machine shop operations", selfCorrected: true,
q: `Statement (I) : The machine shop produces parts machined from stock material and finishes castings, forgings, etc., requiring machined surfaces.<br>Statement (II) : In machine shops, machining operations remove metal, either to make a smoother and more accurate surface, as by planning, facing, milling, etc. or to produce a surface previously existing, as by drilling, punching, etc.` + N,
opts: C, ans: 2,
analysis: `<h3>Answer: (c) Statement (I) is true but Statement (II) is false</h3>
<h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> a machine shop makes parts from bar or plate stock and finishes castings and forgings whose surfaces must be machined (bores, faces, threads).</li>
<li><b>Statement II (false as printed):</b> the first half is right (planing, facing, milling give a smoother, more accurate surface). But drilling and punching produce a surface <b>not previously existing</b> (a new hole). The statement says "previously existing", which is wrong.</li></ul>
<div class="key">Machining operations either improve an existing surface (turning, facing, planing, milling, grinding) or create a new one (drilling, boring, punching, slotting). The two-way split is the point of the source text, and the missing "not" is what makes Statement II false.</div>` },

{ id: "2023-98", year: 2023, no: 98, subject: "energy", topic: "Ozone depletion",
q: `Statement (I) : Ozone depletions are mostly harmful to biological systems in a variety of ways.<br>Statement (II) : Ozone depletion in stratosphere leads to the loss of filtering ability of UV light.` + N,
opts: C, ans: 0,
analysis: `<h3>Answer: (a) Both true and II explains I</h3>
<h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> ozone depletion harms living systems: more skin cancer and cataracts, weaker immune systems, damage to crops and to phytoplankton (the base of ocean food chains).</li>
<li><b>Statement II (true, and the reason):</b> stratospheric ozone absorbs most UV-B radiation (280–315 nm). Thinner ozone lets more UV-B reach the surface, which damages DNA. This is why the depletion is harmful.</li></ul>
<div class="key">Main ozone-depleting substances: CFCs, halons, carbon tetrachloride, methyl bromide. The Montreal Protocol (1987) phased them out; the Kigali Amendment (2016) adds HFCs, which are not ozone-depleting but are potent greenhouse gases. WMO/UNEP assessments project recovery of the ozone layer to 1980 levels around 2066 over Antarctica.</div>` },

{ id: "2023-99", year: 2023, no: 99, subject: "energy", topic: "Environmental degradation",
q: `Statement (I) : Alterations in both, physico-chemical (abiotic) and biological (biotic) components of the biosphere by mankind resulted in environmental degradation world over.<br>Statement (II) : Major environmental problems are in fact the manifestations of the degraded environments at global level.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true but II does not explain I</h3>
<h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> human changes to air, water, soil (abiotic) and to forests and species (biotic) have degraded the environment worldwide.</li>
<li><b>Statement II (true):</b> problems such as climate change, ozone depletion, biodiversity loss and desertification are the visible forms of that global degradation.</li>
<li><b>Link:</b> Statement II describes the <b>result</b> of degradation, not its cause, so it does not explain Statement I. Statement I explains Statement II, the other way round.</li></ul>
<div class="key">Test for the "explains" codes: ask "Statement I is true <i>because</i> Statement II is true?" Here "human changes caused degradation because global problems are its manifestations" makes no sense, so the answer is (b).</div>` },

{ id: "2023-100", year: 2023, no: 100, subject: "ethics", topic: "Ethics and applied ethics",
q: `Statement (I) : Ethics involves the discipline of systematic enquiry into moral norms of standards of behavior and their underlying values and justification.<br>Statement (II) : Applied ethics looks into the ways in which moral value can be applied to particular areas of concern such as business.` + N,
opts: C, ans: 1,
analysis: `<h3>Answer: (b) Both true but II does not explain I</h3>
<h3>Statement by statement</h3><ul>
<li><b>Statement I (true):</b> ethics (moral philosophy) is the systematic study of moral norms and standards of behaviour, and of the values and justifications behind them.</li>
<li><b>Statement II (true):</b> applied ethics applies moral values to particular fields: business ethics, engineering ethics, medical (bio)ethics, environmental ethics.</li>
<li><b>Link:</b> Statement II describes one branch of ethics; it does not explain why ethics is a systematic enquiry. So (b), not (a).</li></ul>
<div class="key">Branches of ethics: <b>meta-ethics</b> (what moral terms mean, whether moral facts exist), <b>normative ethics</b> (theories of right action: utilitarian, duty, rights, virtue) and <b>applied ethics</b> (specific issues and professions).</div>` }
  );
})();
