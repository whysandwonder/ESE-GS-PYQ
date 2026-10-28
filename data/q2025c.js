// ESE 2025 Prelims Paper I (General Studies and Engineering Aptitude), Series A, Q51–75
// Answers follow MADE EASY's unofficial key (see q2025a.js), checked against our own solution.
window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
(function () {
  var K = "MADE EASY unofficial key";
  window.PYQ_QUESTIONS.push(
{ id: "2025-51", year: 2025, no: 51, subject: "energy", topic: "Chemoautotrophs", keySource: K,
q: `Microorganisms which can produce organic matter to some extent through oxidation of certain chemicals in the absence of sunlight are known as`,
opts: ["Photo-autotrophs", "Chemo-autotrophs", "Micro-autotrophs", "Oxi-autotrophs"], ans: 1,
analysis: `<h3>Answer: (b) Chemo-autotrophs</h3><p><b>Chemoautotrophs</b> make organic matter from CO₂ using energy from oxidising inorganic chemicals (chemosynthesis), with no sunlight. Examples: nitrifying bacteria (ammonia → nitrite → nitrate), sulphur bacteria, iron bacteria, and the bacteria at deep-sea hydrothermal vents that support whole ecosystems.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Photo-autotrophs</b>: use sunlight (photosynthesis): green plants, algae, cyanobacteria.</li>
<li><b>(c) Micro-autotrophs</b> and <b>(d) Oxi-autotrophs</b>: not standard terms.</li></ul>
<div class="key">Nitrifying bacteria (Nitrosomonas, Nitrobacter) are central to the nitrogen cycle and to biological wastewater treatment, where they remove ammonia.</div>` },

{ id: "2025-52", year: 2025, no: 52, subject: "energy", topic: "Mixing model (EIA)", keySource: K,
q: `The downstream concentration CI in a mathematical model of simple water quality mixing with respect to EIA methodologies is<br>where : Q<sub>e</sub> is the effluent flow, Q<sub>o</sub> is the upstream flow, C<sub>e</sub> is the effluent concentration, C<sub>o</sub> is the upstream concentration`,
opts: ["(Q<sub>o</sub>C<sub>o</sub> + Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> + Q<sub>e</sub>)", "(Q<sub>o</sub>C<sub>o</sub> − Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> + Q<sub>e</sub>)", "(Q<sub>o</sub>C<sub>o</sub> + Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> − Q<sub>e</sub>)", "(Q<sub>o</sub>C<sub>o</sub> − Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> − Q<sub>e</sub>)"], ans: 0,
analysis: `<h3>Answer: (a) (Q<sub>o</sub>C<sub>o</sub> + Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> + Q<sub>e</sub>)</h3><p>Mass balance at the outfall, assuming complete mixing: pollutant load in = load out. Upstream load Q<sub>o</sub>C<sub>o</sub> plus effluent load Q<sub>e</sub>C<sub>e</sub> leaves in the combined flow Q<sub>o</sub> + Q<sub>e</sub>, so the downstream concentration is a <b>flow-weighted average</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(d)</b>: subtract the effluent load, as if the outfall removed pollutant.</li>
<li><b>(c)</b> and <b>(d)</b>: subtract flows; the flows add downstream.</li></ul>
<div class="tip">Check with a limit: if C<sub>e</sub> = C<sub>o</sub>, the result must equal C<sub>o</sub>. Only (a) does.</div><div class="key">The same mass balance is used in the Streeter–Phelps oxygen-sag model to find the initial BOD and dissolved-oxygen deficit just below an outfall.</div>` },

{ id: "2025-53", year: 2025, no: 53, subject: "energy", topic: "Wind power", keySource: K,
q: `The available wind power P<sub>a</sub> in an aero-turbine is<br>where : V is the velocity of air, D is the diameter of circular flow, ρ is the density of air`,
opts: ["(1/8)ρπD<sup>2</sup>V<sup>3</sup>", "(3/8)ρπD<sup>3</sup>V<sup>2</sup>", "(1/8)ρπD<sup>3</sup>V<sup>2</sup>", "(3/8)ρπD<sup>2</sup>V<sup>3</sup>"], ans: 0,
analysis: `<h3>Answer: (a) (1/8)ρπD²V³</h3><p>Power = kinetic energy of the air passing per second = ½ ṁ V², with ṁ = ρAV. So P = ½ρAV³, and with A = πD²/4: P = <b>ρπD²V³/8</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b> and <b>(c)</b>: D³V² has the wrong dimensions; power varies with the swept <b>area</b> (D²) and the <b>cube</b> of velocity.</li>
<li><b>(d)</b>: right form but the coefficient 3/8 is wrong.</li></ul>
<div class="key">Only part of this power can be extracted: the Betz limit is 16/27 ≈ 59.3%. Doubling wind speed gives 8 times the power, which is why siting matters so much. India's wind capacity is concentrated in Gujarat, Tamil Nadu, Karnataka and Maharashtra.</div>` },

{ id: "2025-54", year: 2025, no: 54, subject: "energy", topic: "Algal bloom", keySource: K,
q: `'Algal Bloom' is, when unusually large concentrations of`,
opts: ["Nutrients are present in water bodies; an excess growth of algae appears", "Planktons are present in water bodies; an excess growth of algae appears", "Bacteria are present in water bodies; an excess growth of algae appears", "Oxygen is present in water bodies; an excess growth of algae appears"], ans: 0,
analysis: `<h3>Answer: (a) Nutrients…</h3><p>Excess <b>nutrients</b>, mainly nitrogen and phosphorus from fertiliser runoff, sewage and detergents, cause <b>eutrophication</b>: algae multiply rapidly (a bloom). When they die, bacteria decompose them and use up dissolved oxygen, killing fish.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Planktons</b>: algae are themselves phytoplankton; the bloom is the result, not the cause.</li>
<li><b>(c) Bacteria</b>: bacteria multiply <b>after</b> the bloom, when they decompose dead algae.</li>
<li><b>(d) Oxygen</b>: a bloom ends in oxygen <b>depletion</b>, not excess.</li></ul>
<div class="key">Some blooms (cyanobacteria, "red tides" of dinoflagellates) release toxins harmful to fish and people. Examples in India include Hussain Sagar (Hyderabad) and parts of Dal Lake.</div>` },

{ id: "2025-55", year: 2025, no: 55, subject: "energy", topic: "Levels of biodiversity", keySource: K,
q: `The correct sequence of the components of biological diversity or biodiversity in the hierarchy of eco-system is`,
opts: ["Landscape, Population, Species, Community and Gene", "Community, Landscape, Population, Species and Gene", "Landscape, Community, Population, Species and Gene", "Community, Population, Landscape, Species and Gene"], ans: 2,
analysis: `<h3>Answer: (c) Landscape, Community, Population, Species and Gene</h3><p>From the largest level to the smallest: <b>landscape</b> (a mosaic of ecosystems) → <b>community</b> (populations of many species living together) → <b>population</b> (one species in one area) → <b>species</b> → <b>gene</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: places community below population and species; a community contains many populations.</li>
<li><b>(b)</b> and <b>(d)</b>: place community above or beside landscape; a landscape contains many communities.</li></ul>
<div class="key">Biodiversity is usually described at three levels: genetic, species and ecosystem diversity. India is one of 17 megadiverse countries and contains parts of four biodiversity hotspots.</div>` },

{ id: "2025-56", year: 2025, no: 56, subject: "energy", topic: "Plume", keySource: K,
q: `The geometrical shape or form of the smoke coming out of a chimney is called`,
opts: ["Fume", "Fog", "Plume", "Smog"], ans: 2,
analysis: `<h3>Answer: (c) Plume</h3><p>A <b>plume</b> is the shape of the smoke trail from a stack. Its form depends on the atmospheric lapse rate (stability).</p>
<table><tr><th>Plume</th><th>Atmosphere</th></tr><tr><td>Looping</td><td>Super-adiabatic (very unstable)</td></tr><tr><td>Coning</td><td>Neutral or slightly stable</td></tr><tr><td>Fanning</td><td>Inversion (stable)</td></tr><tr><td>Lofting</td><td>Inversion below, unstable above (best case)</td></tr><tr><td>Fumigation</td><td>Unstable below, inversion above (worst case)</td></tr></table>
<h3>Why not the others</h3><ul>
<li><b>(a) Fume</b>: fine solid particles from condensed vapours (e.g. metal fume).</li>
<li><b>(b) Fog</b>: water droplets suspended near the ground.</li>
<li><b>(d) Smog</b>: smoke + fog, or photochemical smog from NOₓ and hydrocarbons in sunlight.</li></ul>` },

{ id: "2025-57", year: 2025, no: 57, subject: "energy", topic: "Types of drought", keySource: K,
q: `A situation when there is a prolonged period of inadequate rain fall, marked with erratic distribution of the same over time and space, is called`,
opts: ["Agricultural drought", "Ecological drought", "Hydrological drought", "Meteorological drought"], ans: 3,
analysis: `<h3>Answer: (d) Meteorological drought</h3><p><b>Meteorological drought</b> is defined purely by rainfall: a prolonged period of inadequate rain, poorly distributed over time and space. IMD calls it moderate when rainfall is 26–50% below normal and severe when more than 50% below.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Agricultural drought</b>: soil moisture too low for crops during the growing season (also called soil-moisture drought).</li>
<li><b>(b) Ecological drought</b>: natural ecosystems lose productivity from water shortage, causing ecological distress.</li>
<li><b>(c) Hydrological drought</b>: surface and ground water (reservoirs, rivers, aquifers) fall below normal, usually after a long meteorological drought.</li></ul>
<div class="key">Usual sequence: meteorological → agricultural → hydrological → socio-economic drought. India's Manual for Drought Management (2016, revised 2020) sets the indicators states use to declare drought.</div>` },

{ id: "2025-58", year: 2025, no: 58, subject: "energy", topic: "Vermicomposting", keySource: K,
q: `The process of converting the solid wastes-sewage sludge, domestic and agricultural wastes into compost manure is called`,
opts: ["Sericulture", "Ployculture", "Bio-digester", "Vermiculture"], ans: 3,
analysis: `<h3>Answer: (d) Vermiculture</h3><p><b>Vermiculture</b> (vermicomposting) uses earthworms, such as <i>Eisenia fetida</i>, to convert organic wastes (kitchen waste, crop residues, sludge) into nutrient-rich compost (vermicast).</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Sericulture</b>: rearing silkworms for silk.</li>
<li><b>(b) Polyculture</b>: growing several species together (e.g. composite fish culture).</li>
<li><b>(c) Bio-digester</b>: anaerobic digestion of waste to produce <b>biogas</b> (methane), with slurry as a by-product; the main product is fuel, not compost.</li></ul>
<div class="key">Solid waste processing options: composting (aerobic), vermicomposting, anaerobic digestion (biogas), incineration and waste-to-energy, and sanitary landfill for residues. Under the Solid Waste Management Rules, wet waste should be composted or biomethanated close to its source.</div>` },

{ id: "2025-59", year: 2025, no: 59, subject: "energy", topic: "Mass movement: slump", keySource: K,
q: `A mass movement in which material moves along a curved surface of rupture (slow or moderately rapid movement of a coherent body of rock) is called`,
opts: ["Soil creep", "Slump", "Rockslide", "Earth creep"], ans: 1,
analysis: `<h3>Answer: (b) Slump</h3><p>A <b>slump</b> is a rotational slide: a coherent block moves down and backward along a <b>curved (concave-up)</b> surface of rupture, often leaving a scarp at the top and a bulging toe.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Soil creep</b> and <b>(d) Earth creep</b>: very slow, continuous downslope movement of soil (millimetres a year), seen as tilted poles and walls; no defined rupture surface.</li>
<li><b>(c) Rockslide</b>: rapid movement of rock along a <b>planar</b> surface (bedding or joint plane), a translational slide.</li></ul>
<div class="key">Mass movements are classed by speed and type: slow (creep, solifluction), rapid flows (earthflow, mudflow, debris avalanche), slides (slump, rockslide) and falls (rockfall). Slope stability analysis in civil engineering often assumes a circular slip surface, as in a slump.</div>` },

{ id: "2025-60", year: 2025, no: 60, subject: "pm", topic: "Plant layouts (project appraisal)", keySource: K, doubt: true,
q: `A layout which is designed in such a way that the entire process of receiving raw materials, processing and the outward movement of the finished goods takes place smoothly and efficiently is called`,
opts: ["Transport layout", "Organizational layout", "General functional layout", "Utilities layout"], ans: 0,
analysis: `<h3>Answer: (a) Transport layout (MADE EASY's key)</h3><p>Project-appraisal texts (Prasanna Chandra) list several charts and layouts drawn up in technical analysis. A <b>transport layout</b> shows the distances and the means by which raw materials, goods in process and finished goods are moved, so that the movement in and out of the plant is smooth and efficient.</p>
<h3>Option by option</h3><ul>
<li><b>(b) Organizational layout</b>: shows the structure of departments and reporting lines, not material flow.</li>
<li><b>(c) General functional layout</b>: our first answer. It shows the relationship between buildings, rail tracks, roads, pipelines and other facilities, and is drawn so that the whole plant works efficiently.</li>
<li><b>(d) Utilities layout</b>: shows the main points where utilities (power, water, steam, air) are used.</li></ul>
<div class="note">In doubt (MADE EASY's key followed). The wording ("the entire process of receiving raw materials, processing and outward movement") could describe either the transport layout or the general functional layout. We first answered (c) and could not find the exact source sentence.</div>` },

{ id: "2025-61", year: 2025, no: 61, subject: "pm", topic: "Project life-cycle phases", keySource: K, provKey: "D",
q: `Which one of the following phases is predominantly a testing and final standardization effort so that operations can begin in project management ?`,
opts: ["Conceptual phase", "Production phase", "Operational phase", "Evaluation phase"], ans: 1,
analysis: `<h3>Answer: (b) Production phase (our answer)</h3><p>Kerzner (<i>Project Management: A Systems Approach</i>) describes the system life cycle as conceptual → definition (planning) → <b>production</b> → operational → divestment. He describes the production (construction) phase as mainly testing and final standardisation, so that operations can begin; almost all documentation is completed in this phase.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Conceptual phase</b>: the idea is examined for feasibility, cost and risk.</li>
<li><b>(c) Operational phase</b>: the product or system is in use; operations have already begun.</li>
<li><b>(d) Evaluation phase</b>: not one of the phases of Kerzner's system life cycle; evaluation happens throughout, and formally after operation.</li></ul>
<div class="note">MADE EASY's unofficial key gives (d) Evaluation phase. The question's wording matches Kerzner's description of the production phase, so we show (b).</div>` },

{ id: "2025-62", year: 2025, no: 62, subject: "pm", topic: "Independent float", keySource: K,
q: `Which one of the following float of an activity is the spare time available for that activity, if that activity is started as late as possible and is finished as early as possible ?`,
opts: ["Total float", "Independent float", "Free float", "Slack"], ans: 1,
analysis: `<h3>Answer: (b) Independent float</h3><p><b>Independent float</b> is the spare time left when the preceding activities finish as <b>late</b> as possible and the following activities start as <b>early</b> as possible: IF = EST(j) − LFT(i) − duration (taken as zero if negative). It belongs to the activity alone and cannot affect any other activity.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Total float</b> = LST − EST: maximum delay without delaying the project, assuming predecessors finish early.</li>
<li><b>(c) Free float</b> = EST of successor − EFT: delay possible without delaying any successor's earliest start.</li>
<li><b>(d) Slack</b>: a term for events (nodes) in PERT: latest minus earliest occurrence time.</li></ul>
<div class="key">Always: independent float ≤ free float ≤ total float. Activities with zero total float form the critical path.</div>` },

{ id: "2025-63", year: 2025, no: 63, subject: "pm", topic: "Effective interest rate", keySource: K, selfCorrected: true,
q: `If the nominal rate of interest is 12% and is compounded quarterly, the effective rate of interest will be`,
opts: ["10·6% per annum", "12·6% per annum", "14·4% per annum", "16·4% per annum"], ans: 1,
analysis: `<h3>Answer: (b) 12·6% per annum</h3><p>Effective rate = (1 + r/m)<sup>m</sup> − 1 = (1 + 0.12/4)⁴ − 1 = 1.03⁴ − 1 = 1.1255 − 1 = <b>12.55% ≈ 12.6%</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) 10·6%</b>: is below the nominal rate; compounding can only raise the effective rate.</li>
<li><b>(c) 14·4%</b> and <b>(d) 16·4%</b>: far too high; even continuous compounding gives only e<sup>0.12</sup> − 1 = 12.75%.</li></ul>
<div class="key">The more often interest is compounded, the higher the effective rate, but it approaches a limit (continuous compounding, e<sup>r</sup> − 1).</div><div class="note">Our own first solution gave 12.55% (b). A copying slip moved our saved letters for Q63–66 by one place; the answers we worked out agree with this key.</div>` },

{ id: "2025-64", year: 2025, no: 64, subject: "pm", topic: "Cost of equity", keySource: K, selfCorrected: true,
q: `Which one of the following approaches is available to estimate the rate of returns required by the equity shareholder ?`,
opts: ["Dividend growth approach", "Dividend reinvestment approach", "Dividend capitalization approach", "Dividend pricing model approach"], ans: 0,
analysis: `<h3>Answer: (a) Dividend growth approach</h3><p>The cost of equity (rate of return equity shareholders require) is usually estimated by:</p>
<ul><li><b>Dividend growth model</b> (Gordon): k<sub>e</sub> = D<sub>1</sub>/P<sub>0</sub> + g</li><li><b>Capital Asset Pricing Model</b> (CAPM): k<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)</li><li>Earnings–price ratio and bond-yield-plus-risk-premium approaches</li></ul>
<h3>Why not the others</h3><ul>
<li><b>(b) Dividend reinvestment</b>: a plan letting shareholders reinvest dividends in new shares; not a valuation method.</li>
<li><b>(c) Dividend capitalization</b>: not a standard name for a cost-of-equity method.</li>
<li><b>(d) Dividend pricing model</b>: a distorted name; the pricing model is the capital <b>asset</b> pricing model.</li></ul>
<div class="tip">Example: D<sub>1</sub> = ₹5, P<sub>0</sub> = ₹100, g = 6% → k<sub>e</sub> = 5% + 6% = 11%.</div>` },

{ id: "2025-65", year: 2025, no: 65, subject: "pm", topic: "SWOT analysis", keySource: K, selfCorrected: true,
q: `An assessment of comparative strength and weaknesses of a business firm in relation of competitions on one hand and the environmental opportunities and threats which a firm may be exposed to face is carried through`,
opts: ["Time-series analysis", "Cost-benefit analysis", "SWOT analysis", "Profit analysis"], ans: 2,
analysis: `<h3>Answer: (c) SWOT analysis</h3><p><b>SWOT</b>: internal <b>S</b>trengths and <b>W</b>eaknesses (compared with competitors), and external <b>O</b>pportunities and <b>T</b>hreats from the environment. In project identification (Prasanna Chandra) it is the first step in finding project ideas that fit the firm.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Time-series analysis</b>: forecasting from past data (trend, seasonality).</li>
<li><b>(b) Cost-benefit analysis</b>: comparing costs and benefits of a project, especially social benefits.</li>
<li><b>(d) Profit analysis</b>: examining the profitability of products or projects.</li></ul>
<div class="key">The environment scan behind O and T covers economic, governmental, technological, socio-demographic, competitive and supplier factors (PESTEL is a related framework).</div>` },

{ id: "2025-66", year: 2025, no: 66, subject: "pm", topic: "Triple constraint", keySource: K, selfCorrected: true,
q: `Which of the following is not considered as fundamental dimension of project plans ?`,
opts: ["Time", "Cost", "Scope", "Quality"], ans: 3,
analysis: `<h3>Answer: (d) Quality</h3><p>Project plans are built on three fundamental dimensions, the <b>triple constraint</b>: <b>time</b> (schedule), <b>cost</b> (budget) and <b>scope</b> (performance or specifications). Changing one affects the others. Quality is the result of balancing them, so it is not counted as a separate fundamental dimension in this model.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Time</b>, <b>(b) Cost</b> and <b>(c) Scope</b>: are the three sides of the triangle.</li></ul>
<div class="key">Some later frameworks (PMBOK) list six or more competing constraints, including quality, risk and resources, but the classic exam answer is the time–cost–scope triangle.</div>` },

{ id: "2025-67", year: 2025, no: 67, subject: "pm", topic: "Shadow price of foreign exchange", keySource: K,
q: `The shadow price of a unit of foreign exchange is<br>where : P<sub>i</sub> is domestic market clearing price of a commodity i; Q<sub>i</sub> is quantity of commodity i bought with one unit foreign exchange; F<sub>i</sub> is fraction of foreign exchange, at margin spent on importing commodity`,
opts: ["Σ<sub>i=1</sub><sup>n</sup> F<sub>i</sub>Q<sub>i</sub>P<sub>i</sub>", "Σ<sub>i=1</sub><sup>n</sup> F<sub>i</sub> + Q<sub>i</sub> + P<sub>i</sub>", "Σ<sub>i=1</sub><sup>n</sup> F<sub>i</sub> + Q<sub>i</sub> − P<sub>i</sub>", "Σ<sub>i=1</sub><sup>n</sup> F<sub>i</sub> − Q<sub>i</sub> + P<sub>i</sub>"], ans: 0,
analysis: `<h3>Answer: (a) Σ F<sub>i</sub>Q<sub>i</sub>P<sub>i</sub></h3><p>In the UNIDO method of social cost-benefit analysis, the shadow price of foreign exchange is the domestic value of what one unit of foreign exchange buys at the margin. A fraction F<sub>i</sub> is spent on commodity i; one unit buys Q<sub>i</sub> of it; each unit is worth P<sub>i</sub> in the domestic market. So the value is Σ F<sub>i</sub>Q<sub>i</sub>P<sub>i</sub>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>, <b>(c)</b> and <b>(d)</b>: add or subtract quantities with different units (a fraction, a quantity and a price), which is meaningless.</li></ul>
<div class="key">Shadow prices replace market prices in social CBA when markets are distorted. Foreign exchange is usually valued above the official rate when imports are restricted or the currency is overvalued.</div>` },

{ id: "2025-68", year: 2025, no: 68, subject: "pm", topic: "Income elasticity (arc)", keySource: K,
q: `An Income Elasticity of Demand e<sub>I</sub> is<br>where : Q<sub>1</sub> is quantity demanded in the base year; Q<sub>2</sub> is quantity demanded in the following year; I<sub>1</sub> is income level in the base year; I<sub>2</sub> is income level in the following year`,
opts: ["[(Q<sub>2</sub> − Q<sub>1</sub>)/(I<sub>2</sub> − I<sub>1</sub>)] × [(I<sub>2</sub> + I<sub>1</sub>)/(Q<sub>2</sub> + Q<sub>1</sub>)]", "[(Q<sub>2</sub> + Q<sub>1</sub>)/(I<sub>2</sub> − I<sub>1</sub>)] × [(I<sub>2</sub> + I<sub>1</sub>)/(Q<sub>2</sub> + Q<sub>1</sub>)]", "[(Q<sub>2</sub> − Q<sub>1</sub>)/(I<sub>2</sub> + I<sub>1</sub>)] × [(I<sub>2</sub> − I<sub>1</sub>)/(Q<sub>2</sub> + Q<sub>1</sub>)]", "[(Q<sub>2</sub> − Q<sub>1</sub>)/(I<sub>2</sub> + I<sub>1</sub>)] × [(I<sub>2</sub> + I<sub>1</sub>)/(Q<sub>2</sub> + Q<sub>1</sub>)]"], ans: 0,
analysis: `<h3>Answer: (a)</h3><p>Income elasticity = % change in quantity ÷ % change in income. Using the <b>arc (midpoint) formula</b>, percentage changes are measured against averages:</p>
<p>e<sub>I</sub> = [(Q<sub>2</sub> − Q<sub>1</sub>)/((Q<sub>2</sub> + Q<sub>1</sub>)/2)] ÷ [(I<sub>2</sub> − I<sub>1</sub>)/((I<sub>2</sub> + I<sub>1</sub>)/2)] = (Q<sub>2</sub> − Q<sub>1</sub>)/(I<sub>2</sub> − I<sub>1</sub>) × (I<sub>2</sub> + I<sub>1</sub>)/(Q<sub>2</sub> + Q<sub>1</sub>).</p>
<h3>Why not the others</h3><ul>
<li><b>(b)</b>: uses Q<sub>2</sub> + Q<sub>1</sub> in the numerator instead of the change in quantity.</li>
<li><b>(c)</b>: puts the income change and income sum the wrong way round.</li>
<li><b>(d)</b>: divides by the income sum instead of the income change.</li></ul>
<div class="key">Used in demand forecasting for projects (Prasanna Chandra). e<sub>I</sub> &gt; 1: luxury; 0 &lt; e<sub>I</sub> &lt; 1: necessity; e<sub>I</sub> &lt; 0: inferior good.</div>` },

{ id: "2025-69", year: 2025, no: 69, subject: "materials", topic: "Density of FCC copper", keySource: K,
q: `Consider the following data :<br>Atomic radius of copper = 1·278 Å, A<sub>W</sub> = 63·54, N<sub>e</sub> = 4, N<sub>A</sub> = 6·023 × 10<sup>23</sup><br>The density of the copper will be nearly`,
opts: ["9 gram/cm<sup>3</sup>", "7 gram/cm<sup>3</sup>", "5 gram/cm<sup>3</sup>", "3 gram/cm<sup>3</sup>"], ans: 0,
analysis: `<h3>Answer: (a) 9 gram/cm³</h3><p>Copper is FCC (4 atoms per cell), with atoms touching along the face diagonal: a = 2√2 R = 2√2 × 1.278 Å = 3.615 Å.</p>
<p>V<sub>c</sub> = a³ = (3.615 × 10<sup>−8</sup> cm)³ = 4.724 × 10<sup>−23</sup> cm³.</p>
<p>ρ = nA/(V<sub>c</sub>N<sub>A</sub>) = (4 × 63.54)/(4.724 × 10<sup>−23</sup> × 6.023 × 10<sup>23</sup>) = 254.16/28.45 = <b>8.93 g/cm³ ≈ 9</b>.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) 7</b>, <b>(c) 5</b> and <b>(d) 3 g/cm³</b>: would need a far larger unit cell; copper's measured density is 8.96 g/cm³.</li></ul>
<div class="key">Lattice relations: simple cubic a = 2R; BCC a = 4R/√3; FCC a = 2√2 R = 4R/√2. This is Callister's Example 3.3.</div>` },

{ id: "2025-70", year: 2025, no: 70, subject: "materials", topic: "Knoop hardness", keySource: K,
q: `The Knoop's Hardness Number (KHN) is<br>where : L is the length of the long diagonal; C is the constant related to the length of projected area for each indenter; P is the applied load`,
opts: ["PC/L<sup>2</sup>", "P/(L<sup>2</sup>C)", "(P + C)/L<sup>2</sup>", "P/(L<sup>2</sup> − C)"], ans: 1,
analysis: `<h3>Answer: (b) P/(L²C)</h3><p>KHN = load ÷ <b>projected</b> area of the indentation. The Knoop indenter is an elongated pyramid; the projected area is C L², with C ≈ 0.07028 for the standard indenter. So KHN = P/(CL²) ≈ 14.2 P/L².</p>
<h3>Why not the others</h3><ul>
<li><b>(a)</b>: multiplies by C instead of dividing.</li>
<li><b>(c)</b> and <b>(d)</b>: add or subtract a constant to a load or an area, which is dimensionally meaningless.</li></ul>
<div class="key">Knoop and Vickers are microhardness tests with light loads, used for thin layers, coatings and brittle materials such as ceramics. Vickers uses a square-based pyramid: HV = 1.854 P/d².</div>` },

{ id: "2025-71", year: 2025, no: 71, subject: "materials", topic: "Cementation of ceramics", keySource: K,
q: `Ceramic raw materials are joined using a binder that does not require firing or sintering in a process called`,
opts: ["Coating", "Cementation", "Enamel", "Slip casting"], ans: 1,
analysis: `<h3>Answer: (b) Cementation</h3><p>In <b>cementation</b> (Callister), ceramic raw materials are bonded by a binder that hardens through chemical reaction at room temperature, with no firing or sintering. Portland cement is the most familiar example: it hardens by hydration.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Coating</b> and <b>(c) Enamel</b>: applying a ceramic layer on a surface; enamel is a glassy coating fused on by firing.</li>
<li><b>(d) Slip casting</b>: pouring a clay slurry (slip) into a porous plaster mould; the part must then be dried and <b>fired</b>.</li></ul>
<div class="key">Ceramic fabrication routes: glass forming (pressing, blowing, drawing), particulate forming (pressing, hydroplastic forming, slip casting, then drying and firing), and cementation.</div>` },

{ id: "2025-72", year: 2025, no: 72, subject: "materials", topic: "Solubility limit", keySource: K,
q: `For many alloy systems at specific temperature, a maximum concentration of solute atoms that dissolve in the solvent to form a solid solution is`,
opts: ["Equilibrium of alloy", "Free energy", "System", "Solubility limit"], ans: 3,
analysis: `<h3>Answer: (d) Solubility limit</h3><p>The <b>solubility limit</b> is the maximum concentration of solute that can dissolve in the solvent at a given temperature to form a single solid solution. Adding more solute produces a second phase. On a phase diagram it is the solvus line, and it usually rises with temperature.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Equilibrium</b>: the state of minimum free energy, where the phase characteristics do not change with time.</li>
<li><b>(b) Free energy</b>: the thermodynamic quantity that equilibrium minimises.</li>
<li><b>(c) System</b>: the body of material under consideration, or the set of possible alloys of given components (e.g. the Cu–Ni system).</li></ul>
<div class="key">Example: sugar in water reaches a solubility limit of about 65 wt% at 20 °C. Copper and nickel are fully soluble in each other (no limit, an isomorphous system).</div>` },

{ id: "2025-73", year: 2025, no: 73, subject: "materials", topic: "Polymers", keySource: K,
q: `The long chain molecules are randomly oriented in`,
opts: ["Plastic", "Metal", "Diamond", "Coal"], ans: 0,
analysis: `<h3>Answer: (a) Plastic</h3><p>Plastics are polymers: very long chain molecules (macromolecules). In amorphous regions the chains are randomly oriented and coiled, like cooked spaghetti; in crystalline regions some chains fold into ordered arrays.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Metal</b>: individual atoms in a regular crystal lattice held by metallic bonds, not chain molecules.</li>
<li><b>(c) Diamond</b>: a three-dimensional covalent network of carbon atoms in a regular lattice.</li>
<li><b>(d) Coal</b>: a heterogeneous carbon-rich rock with complex aromatic structures, not long chains.</li></ul>
<div class="key">Chain orientation can be changed: drawing a fibre or film aligns the chains along the stretch direction, greatly increasing strength in that direction (e.g. nylon, PET).</div>` },

{ id: "2025-74", year: 2025, no: 74, subject: "materials", topic: "Edge dislocation", keySource: K,
q: `In which one of the following dislocations, an extra portion of a plane of atoms or half plane, the edge of which terminates within the crystal ?`,
opts: ["Screw dislocation", "Edge dislocation", "Mixed dislocation", "Burgers dislocation"], ans: 1,
analysis: `<h3>Answer: (b) Edge dislocation</h3><p>An <b>edge dislocation</b> is an extra half-plane of atoms inserted into the crystal; its edge, inside the crystal, is the dislocation line. The Burgers vector is <b>perpendicular</b> to the line.</p>
<h3>Why not the others</h3><ul>
<li><b>(a) Screw dislocation</b>: formed by a shear that shifts one part of the crystal by one atomic distance, giving a spiral ramp; the Burgers vector is <b>parallel</b> to the line.</li>
<li><b>(c) Mixed dislocation</b>: part edge and part screw along a curved line.</li>
<li><b>(d) Burgers dislocation</b>: not a type; the <b>Burgers vector</b> describes the magnitude and direction of the lattice distortion of any dislocation.</li></ul>
<div class="key">Plastic deformation in metals happens by dislocation motion (slip). Strengthening methods (grain refinement, solid solution, cold work, precipitation) all work by hindering dislocations.</div>` },

{ id: "2025-75", year: 2025, no: 75, subject: "materials", topic: "Hydrogen bond", keySource: K,
q: `The bond that is formed between water molecules due to attraction between the positively-charged hydrogen end of a molecule and the negatively-charged oxygen end of another molecule is called`,
opts: ["Hydrogen bond", "Covalent bond", "Ionic bond", "Metallic bond"], ans: 0,
analysis: `<h3>Answer: (a) Hydrogen bond</h3><p>A <b>hydrogen bond</b> is the strongest kind of secondary (van der Waals) bond: the partly positive H of one polar molecule is attracted to a highly electronegative atom (O, N or F) of a neighbouring molecule. It explains water's unusually high boiling point and why ice is less dense than water.</p>
<h3>Why not the others</h3><ul>
<li><b>(b) Covalent bond</b>: shared electrons <b>within</b> a water molecule (O–H), not between molecules.</li>
<li><b>(c) Ionic bond</b>: electron transfer between metal and non-metal ions (NaCl).</li>
<li><b>(d) Metallic bond</b>: positive ion cores in a sea of free electrons (see 2024 Q62).</li></ul>
<div class="key">Bond energies (approximate): ionic and covalent 600–1500 kJ/mol; metallic 70–850; hydrogen bonds about 50; other van der Waals bonds under 10.</div>` }
  );
})();
