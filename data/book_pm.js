// Basics of Project Management: notes book built from ESE Paper I PYQs 2017–2026.
addBook("pm", [
 ["p1", "Projects and project organisation", [["p1-1", "Project concepts, types and life cycle"], ["p1-2", "Organisation, roles and people"]]],
 ["p2", "Planning and scheduling", [["p2-1", "Network planning: CPM and PERT"], ["p2-2", "Time–cost trade-off, resources, buffers and risk"]]],
 ["p3", "Project appraisal and selection", [["p3-1", "Market, strategic and technical appraisal"], ["p3-2", "Social cost–benefit analysis"]]],
 ["p4", "Engineering economics and finance", [["p4-1", "Time value of money and investment appraisal"], ["p4-2", "Sources of finance and cost of capital"], ["p4-3", "Costs, depreciation, inventory and estimates"]]]
]);

addBookTopic("pm", "p1-1", `
<h3>What a project is</h3>
<ul><li>PMI: a <b>temporary</b> endeavour (definite beginning and end) to create a <b>unique</b> product, service or result (2026 Q16). Operations, by contrast, are ongoing and repetitive.</li>
<li>Project management plans, organises, directs and controls resources to meet objectives within constraints (2017 Q70).</li>
<li><b>Triple constraint</b>: <b>time, cost and scope</b> (performance). Quality is the outcome of balancing them, not one of the three (2025 Q66). Planning means deciding how to meet the objectives within these constraints (2018 Q92, 2019 Q91).</li></ul>
<h3>Types of projects</h3>
<ul><li>By urgency: normal, <b>crash</b> (completed in the shortest time, cost secondary), disaster (immediately, at any cost) (2022 Q19).</li>
<li>By ownership: public, private, joint/PPP; by purpose: new, expansion, modernisation, diversification.</li></ul>
<h3>Life cycle</h3>
<ul><li>Phases (Prasanna Chandra / UN): <b>identification → formulation → appraisal → implementation → evaluation</b> (2017 Q72). Maximum effort and spending occur in the <b>implementation</b> phase (2019 Q58).</li>
<li>Kerzner's system life cycle: conceptual → planning/definition → <b>production</b> (testing and final standardisation so operations can begin; documentation completed) → operational → divestment (2025 Q61).</li>
<li><b>Completion/closure</b> steps: final inspection, handover, <b>defects liability period</b>, release of <b>retention money</b>, final accounts, lessons learned. Problem identification belongs at the start (2026 Q20).</li></ul>
<h3>Concurrent engineering</h3>
<p>Design, manufacturing, quality and marketing people work together as a cross-functional team <b>long before execution</b>, so problems are solved early and time to market falls (2017 Q69).</p>
<h3>Machine shop</h3>
<p>A machine shop makes parts from stock and finishes castings and forgings. Machining either improves an existing surface (planing, facing, milling) or creates a new one (drilling, punching) (2023 Q97).</p>`);

addBookTopic("pm", "p1-2", `
<h3>Project organisation</h3>
<table><tr><th>Form</th><th>Features</th></tr>
<tr><td>Functional</td><td>Project inside a department; clear expertise, weak cross-functional coordination</td></tr>
<tr><td>Pure project (projectized)</td><td>Dedicated team under the project manager; fast, but duplicates resources</td></tr>
<tr><td><b>Matrix</b></td><td>Staff report to functional managers and project managers; weak, balanced or strong matrix. Uses resources efficiently but has dual authority and conflict (2020 Q97)</td></tr></table>
<ul><li>The <b>functional manager</b> provides resources, especially people; the <b>sponsor</b> provides funds and high-level support; the customer accepts deliverables (2026 Q17).</li>
<li><b>Project coordinator</b>: achieves coordination among departments, monitors progress and reports, but has limited authority (2020 Q62).</li>
<li><b>Product management</b>: one person has authority over all aspects of a product (2019 Q26).</li>
<li><b>Organisation breakdown structure</b> links work packages to organisational units responsible for them, so it <b>does</b> tie units to cost control (2021 Q10).</li></ul>
<h3>The project manager</h3>
<ul><li>Qualities for a new project: confidence of the owner, leadership, technical and managerial competence, communication, integrity, decision making under uncertainty (2017 Q64).</li>
<li>Bases of power (French and Raven): legitimate, reward, coercive, expert, referent. Legitimate, reward and coercive power come from position, so they must be justified beforehand; expert and referent come from the person (2017 Q42).</li></ul>
<h3>People and decisions</h3>
<ul><li><b>Cohesion</b>: closeness of attitude, behaviour, trust and performance in a group (2017 Q85).</li>
<li><b>Optimising</b> strategy: choose the best possible solution considering all alternatives; <b>satisficing</b>: accept the first good-enough option (2017 Q67).</li>
<li>Creativity techniques: brainstorming, attribute listing, morphological analysis, synectics, <b>black box</b> (inputs and outputs known, the process inside to be invented) (2020 Q63).</li></ul>`);

addBookTopic("pm", "p2-1", `
<h3>Work breakdown and networks</h3>
<ul><li>The <b>WBS</b> divides the project into manageable work packages, top-down; it is the basis for estimates, schedules and responsibility (2018 Q38).</li>
<li>Bar (Gantt) charts are simple scheduling tools but do not show dependencies, so networks are needed for planning (2018 Q91). Keep networks simple: <b>KISS</b> (2019 Q60).</li>
<li>Activity-on-arrow (AOA) networks need <b>dummy</b> activities (zero duration) to show dependencies correctly; count them from the logic (2018 Q16). Activity-on-node (AON, precedence) networks need none.</li>
<li>Task schedules list the specific activities needed; master schedules show milestones (2019 Q63).</li></ul>
<h3>CPM computations</h3>
<ul><li><b>Forward pass</b> starts with the first activities and gives earliest times (EST, EFT) (2022 Q17); <b>backward pass</b> gives latest times.</li>
<li>Floats (activity i–j, duration T<sub>ij</sub>):
<ul><li><b>Total float</b> = L<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub> (2018 Q57): delay possible without delaying the project.</li>
<li>Free float = E<sub>j</sub> − E<sub>i</sub> − T<sub>ij</sub>: without delaying successors.</li>
<li><b>Independent float</b> = E<sub>j</sub> − L<sub>i</sub> − T<sub>ij</sub>: if the activity starts as late as possible and must finish as early as possible (2025 Q62).</li></ul></li>
<li>The <b>critical path</b> has zero total float and is the longest path.</li>
<li>CPM is deterministic, suits repetitive, well-known work (construction), and allows time–cost trade-off (2018 Q53).</li></ul>
<h3>PERT</h3>
<ul><li>Three estimates: <b>optimistic</b> t<sub>o</sub>, <b>most likely</b> t<sub>m</sub>, <b>pessimistic</b> t<sub>p</sub> (2026 Q18). t<sub>e</sub> = (t<sub>o</sub> + 4t<sub>m</sub> + t<sub>p</sub>)/6; σ = (t<sub>p</sub> − t<sub>o</sub>)/6 (beta distribution).</li>
<li>Path variance = sum of activity variances; probability of meeting a date T: z = (T − T<sub>e</sub>)/σ (2018 Q50).</li>
<li>PERT is event-oriented and probabilistic, used for R&amp;D and new work.</li></ul>
<h3>Hammock activities</h3>
<p>A hammock spans a segment of the project (from the start of its first to the end of its last activity); its duration is found after scheduling; used for fixed resources or overheads over that segment (2023 Q8).</p>
<h3>Control</h3>
<p>A control system that reduces deviations from a standard is a <b>negative feedback loop</b> (2020 Q70).</p>`);

addBookTopic("pm", "p2-2", `
<h3>Time–cost trade-off</h3>
<ul><li><b>Direct costs</b> (labour, materials, equipment) rise when the project is shortened; <b>indirect costs</b> (overheads, supervision) fall with any reduction in duration; total cost is U-shaped with an optimum (2023 Q13).</li>
<li><b>Crashing</b>: shortening the duration of a few critical activities by adding resources (2018 Q51). Crash the critical activity with the lowest cost slope = (crash cost − normal cost)/(normal time − crash time), while it is less than the indirect saving per day.</li></ul>
<h3>Resource scheduling</h3>
<ul><li>Resource levelling (time-constrained) smooths demand within float; resource-constrained scheduling may extend the project.</li>
<li><b>Heuristics</b> (least slack first, shortest duration, lowest ID) do not always give the optimum but give good schedules for complex multi-resource networks (2023 Q11).</li></ul>
<h3>Critical chain (CCPM)</h3>
<ul><li>Goldratt's <b>Critical Chain Project Management</b> (1997): estimates cut to 50% probability, safety pooled into a <b>project buffer</b> and <b>feeding buffers</b>; resources considered with precedence. It counters Parkinson's law, student syndrome and padding (2023 Q12).</li>
<li><b>Time buffers</b> go to activities with severe risk, merge activities, non-critical paths (to stop new critical paths) and scarce resources, not to riskless activities (2023 Q10).</li></ul>
<h3>Risk management</h3>
<ul><li>Steps: identification → assessment → <b>response development</b> → response control.</li>
<li>Mitigation strategies: <b>reduce the likelihood</b> and <b>reduce the impact</b> (2023 Q9). Other responses: avoid, transfer (insurance, contracts), retain/accept with contingency.</li></ul>`);

addBookTopic("pm", "p3-1", `
<h3>Generating and screening ideas</h3>
<ul><li><b>SWOT</b>: internal strengths and weaknesses versus competitors, and external opportunities and threats (2025 Q65).</li>
<li><b>Corporate appraisal</b> areas: marketing and distribution, production and operations, R&amp;D, corporate resources and personnel, finance and accounting. Project rating comes later (2024 Q59).</li>
<li>Reasons for conglomerate diversification in India: limits on growth in existing lines, government policies (imports, duties, pricing, reservations), new investment areas, and the desire <b>to avail</b> tax incentives (2024 Q56).</li>
<li>A "<b>sacred cow</b>" project is one pushed by a powerful senior official, selected regardless of merit (2022 Q15).</li></ul>
<h3>Portfolio and strategy</h3>
<ul><li><b>BCG matrix</b>: relative market share × market growth rate. Stars (high, high), cash cows (high share, low growth), question marks (low share, high growth), <b>dogs</b> (low, low) (2021 Q12, 2024 Q57).</li>
<li><b>Experience curve</b>: unit cost falls with cumulative output because of <b>learning effects, technological improvements and economies of scale</b> (2024 Q58).</li>
<li>Kotler: the seller's 4 Ps map to the buyer's 4 Cs: product → customer solution, price → customer cost, place → convenience, promotion → communication (2021 Q11).</li></ul>
<h3>Market and demand analysis</h3>
<ul><li>Qualitative forecasting: <b>jury of executive opinion</b> (2024 Q60) and <b>Delphi</b> (anonymous expert rounds; appeals because it is intelligible, has a fancy name, and seems more accurate and cheaper than meetings) (2024 Q61).</li>
<li>Quantitative: trend projection, exponential smoothing, moving averages, chain ratio, consumption level, end-use, leading indicators, econometric.</li>
<li><b>Arc income elasticity</b> e<sub>I</sub> = [(Q₂ − Q₁)/(I₂ − I₁)] × [(I₂ + I₁)/(Q₂ + Q₁)] (2025 Q68).</li></ul>
<h3>Technical appraisal</h3>
<ul><li>Layouts: site plan, plant layout, <b>general functional layout</b> (relations between buildings, roads and facilities), material flow diagram, <b>transport layout</b> (movement of raw materials in and products out), utilities layout (2025 Q60).</li>
<li><b>Break-even</b>: BEP (sales) = fixed cost ÷ P/V ratio, where P/V = contribution ÷ sales; for a product mix use the weighted P/V ratio (2019 Q43).</li></ul>`);

addBookTopic("pm", "p3-2", `
<h3>Why social cost–benefit analysis</h3>
<p>Market prices may not reflect true social values because of tariffs, controls, unemployment and externalities. SCBA values inputs and outputs at <b>shadow (accounting) prices</b>. Two methods: the <b>UNIDO</b> approach (domestic currency, stages: financial, economic, savings impact, income distribution, merit goods) and the <b>Little–Mirrlees</b> approach (border prices as numeraire).</p>
<h3>Shadow prices</h3>
<ul><li><b>Foreign exchange</b>: value of what a unit of foreign exchange buys at the margin, Σ FᵢQᵢPᵢ (fraction spent on good i × quantity per unit of FX × domestic price) (2025 Q67).</li>
<li><b>Traded goods</b> are valued at border prices (CIF for imports, FOB for exports). Raw materials can be traded items but must be checked; not every raw material is traded (2020 Q98).</li>
<li>Labour: shadow wage = output forgone elsewhere; lower than the market wage when there is unemployment.</li></ul>
<h3>Capital and growth</h3>
<p>A country doubling its capital faster has a younger capital stock embodying newer technology, so higher output per unit of capital; new investment and new technology go together (2025 Q99). ICOR = investment ÷ increase in output.</p>`);

addBookTopic("pm", "p4-1", `
<h3>Interest</h3>
<ul><li>Compound amount F = P(1 + i)<sup>n</sup>; present value P = F/(1 + i)<sup>n</sup> (2020 Q68).</li>
<li><b>Effective rate</b> = (1 + r/m)<sup>m</sup> − 1. 12% compounded quarterly → 1.03⁴ − 1 = <b>12.55% ≈ 12.6%</b> (2020 Q67, 2025 Q63). Continuous: e<sup>r</sup> − 1.</li>
<li>Present value of an annuity A for n years: A[1 − (1 + i)<sup>−n</sup>]/i. Rs 5000 a year for 3 years at 10% → about Rs 12,435 (2019 Q57).</li></ul>
<h3>Investment appraisal</h3>
<table><tr><th>Method</th><th>Rule</th></tr>
<tr><td><b>Payback period</b></td><td>Years to recover the investment; accept if payback ≤ target period (2021 Q13). Ignores time value and later cash flows</td></tr>
<tr><td><b>Accounting rate of return</b></td><td>Average profit ÷ average (or initial) investment (2019 Q56)</td></tr>
<tr><td>Return on investment</td><td>Ratio of average annual profit to investment, used in economic viability checks (2020 Q61)</td></tr>
<tr><td>NPV</td><td>Accept if NPV &gt; 0; the theoretically best method</td></tr>
<tr><td>IRR</td><td>Rate at which NPV = 0; accept if IRR &gt; cost of capital</td></tr>
<tr><td>Profitability index</td><td>PV of inflows ÷ outlay; accept if &gt; 1</td></tr></table>
<h3>Risk</h3>
<p>Diversifying across projects whose returns are not perfectly correlated reduces <b>portfolio risk</b> (unsystematic risk); market (systematic) risk remains (2020 Q65).</p>`);

addBookTopic("pm", "p4-2", `
<h3>Sources of finance</h3>
<ul><li><b>Equity</b>: permanent capital, no obligation to repay, no fixed charge; but dividends are not tax-deductible, costs are highest and control is diluted (2025 Q1).</li>
<li>Preference shares, retained earnings, term loans, <b>debentures</b> (a viable alternative to term loans, raised from the public) (2019 Q61), working-capital finance, leasing.</li>
<li>Issuing securities: public issue, <b>rights issue</b> (cheapest: offered to existing shareholders, no underwriting needed) (2019 Q5), private placement.</li>
<li><b>Angel investors</b>: individuals investing their own money in early-stage ventures; venture capital follows at later stages (2020 Q66).</li></ul>
<h3>Cost of capital</h3>
<ul><li><b>Cost of equity</b> by the <b>dividend growth model</b>: k<sub>e</sub> = D₁/P₀ + g (2020 Q64, 2025 Q64); or CAPM: k<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>).</li>
<li><b>Cost of debt</b> (after tax) = [I + (F − P)/n] ÷ [(F + P)/2] × (1 − t) for debentures (2020 Q69).</li>
<li>Weighted average cost of capital (WACC) = Σ weight × cost. Debt is cheapest because interest is tax-deductible.</li></ul>
<h3>Sickness and closure</h3>
<ul><li>Industrial sickness arises from poor management, obsolete technology, market changes, labour problems and finance shortages (2022 Q18).</li>
<li><b>Liquidation</b>: closing a company and selling its assets to pay creditors (2026 Q19); in India under the Insolvency and Bankruptcy Code 2016.</li></ul>`);

addBookTopic("pm", "p4-3", `
<h3>Depreciation</h3>
<ul><li>Straight-line (equal charges), written-down value / declining balance (higher early charges), sum-of-years' digits, sinking fund, annuity, units of production.</li>
<li>Accelerated methods (<b>declining balance, sum-of-years' digits</b>) are most favourable to production because they write off cost fastest when output is highest and lower early taxes (2017 Q1).</li></ul>
<h3>Equipment and buildings</h3>
<ul><li>Operating cost of equipment: fuel/power, operator wages, maintenance and repairs, lubricants, tyres (2017 Q43). Owning costs: depreciation, interest, insurance, taxes.</li>
<li>A building's <b>economic life</b> ends when net income becomes nil or negative, or when the land is worth more for redevelopment (2017 Q65).</li></ul>
<h3>Inventory</h3>
<ul><li><b>EOQ</b> = √(2DS/H): D annual demand, S cost per order, H carrying cost per unit per year. Rearranged: D = EOQ²H/2S (2018 Q56). EOQ balances ordering and carrying costs so stocks neither pile up nor run short (2019 Q55).</li>
<li><b>ABC analysis</b> classifies items by <b>annual usage value</b>: A (about 10% of items, 70% of value; tight control), B, C (2018 Q52). VED (vital, essential, desirable) by criticality; FSN by movement.</li></ul>
<h3>Cost estimates</h3>
<ul><li>Preliminary (rough) estimate, plinth-area and cube-rate estimates, revised estimate, <b>detailed estimate</b> (most accurate, least error) (2019 Q59).</li>
<li><b>Top-down</b> estimates suit early stages, strategic decisions, high uncertainty and internal projects; bottom-up suits fixed-price contracts where cost and time are important (2022 Q16).</li></ul>`);
