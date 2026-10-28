// Basics of Energy and Environment: notes book built from ESE Paper I PYQs 2017–2026.
addBook("energy", [
 ["v1", "Energy sources and power", [["v1-1", "Fossil fuels, power plants and the grid"], ["v1-2", "Renewable energy, hydrogen and fuel cells"], ["v1-3", "Energy efficiency, intensity and planning"]]],
 ["v2", "Ecology and the earth system", [["v2-1", "Ecosystems, biodiversity and biomes"], ["v2-2", "Earth, atmosphere and natural hazards"]]],
 ["v3", "Pollution and its control", [["v3-1", "Air pollution and noise"], ["v3-2", "Water quality and wastewater"], ["v3-3", "Solid waste management"]]],
 ["v4", "Global environmental issues and governance", [["v4-1", "Climate change and ozone depletion"], ["v4-2", "Environmental law, conventions, EIA and management"]]]
]);

addBookTopic("energy", "v1-1", `
<h3>Sources of energy</h3>
<ul><li>Energy used by people ultimately comes from the <b>Sun</b> (fossil fuels, biomass, wind, hydro, solar), from <b>Earth's interior</b> (geothermal), from <b>atomic nuclei</b> (nuclear) and from the Moon–Earth system (tides). Friction is a loss, not a source (2022 Q14).</li>
<li>Commercial (coal, oil, gas, electricity) versus non-commercial (firewood, dung, crop residue); renewable versus non-renewable; primary versus secondary (electricity, refined fuels).</li></ul>
<h3>Coal</h3>
<table><tr><th>Rank</th><th>Carbon / calorific value</th><th>Notes</th></tr>
<tr><td>Peat</td><td>Lowest</td><td>First stage of coalification</td></tr>
<tr><td>Lignite (brown coal)</td><td>Low</td><td>High moisture; Neyveli, Gujarat</td></tr>
<tr><td>Sub-bituminous</td><td>Medium</td><td></td></tr>
<tr><td>Bituminous (<b>soft coal</b>)</td><td>High</td><td>Most common; power and coking (2021 Q3)</td></tr>
<tr><td><b>Anthracite</b> (hard coal)</td><td>Highest CV, <b>lowest volatile matter</b></td><td>Smokeless (2026 Q12)</td></tr></table>
<p>Most Indian coal is bituminous/sub-bituminous with high ash (30–45%).</p>
<h3>Electricity from fuels</h3>
<ul><li>Electricity per kg: firewood about 1 kWh, <b>coal about 3 kWh</b>, oil about 4 kWh, uranium about 50,000 kWh (2026 Q11).</li>
<li>Overall thermal plant efficiency = boiler × turbine × generator: 0.85 × 0.45 × 0.95 ≈ <b>36.3%</b> (2017 Q56). Rankine cycle limits efficiency; supercritical and ultra-supercritical plants reach 40–45%.</li></ul>
<h3>The grid</h3>
<ul><li>Power stations link to loads through the <b>grid</b> (2026 Q14). India has had "One Nation, One Grid, One Frequency" since December 2013. Transmission at high voltage (400/765 kV AC, HVDC) cuts losses (P loss = I²R).</li>
<li>Distribution schemes: <b>IPDS</b> (Integrated Power Development Scheme, 2014) strengthened urban distribution, metering and IT; <b>DDUGJY</b> did the same for rural areas and feeder separation (2018 Q4). They were followed by the Revamped Distribution Sector Scheme (2021), with smart prepaid metering.</li></ul>
<h3>Thermodynamics</h3>
<p>The second law: entropy of an isolated system never decreases, so no conversion is 100% efficient. <b>Eddington</b> called entropy "time's arrow" (2023 Q1).</p>`);

addBookTopic("energy", "v1-2", `
<h3>Solar energy</h3>
<ul><li>Clean and abundant, but <b>dilute</b> (needs large collection areas), <b>intermittent</b> (night, clouds, seasons) and needs storage, so cost per unit of firm power is high (2019 Q50).</li>
<li>Technologies: photovoltaic (silicon cells, about 20% efficiency), solar thermal (flat-plate collectors, concentrating solar power), passive solar buildings. Policy support includes subsidies, net metering and solar parks (2017 Q55).</li>
<li>India: about 100 GW of solar capacity installed by early 2025; target of 500 GW non-fossil capacity by 2030; PM Surya Ghar (rooftop) and PM-KUSUM (farm pumps).</li></ul>
<h3>Wind</h3>
<ul><li>Available power P = ½ρAV³ = <b>(1/8)ρπD²V³</b> (2025 Q53). Power ∝ V³: double the wind speed, eight times the power.</li>
<li><b>Betz limit</b>: at most 16/27 ≈ 59.3% can be extracted. Leading states: Gujarat, Tamil Nadu, Karnataka, Maharashtra.</li></ul>
<h3>Biomass and biofuels</h3>
<ul><li>Biomass advantages: renewable, storable, uses wastes, carbon-neutral if regrown, provides rural jobs (2019 Q53).</li>
<li><b>Biogas</b> (about 60% methane) from anaerobic digestion of dung; daily gas = dung per animal × number × gas yield, energy = volume × calorific value (2019 Q54).</li>
<li><b>Ethanol</b> is made mainly from corn (USA) and sugarcane (Brazil); a major share of Brazil's liquid fuel; the largest share of world biofuel output (2024 Q69). India reached <b>E20</b> (20% blending) in 2025.</li></ul>
<h3>Other renewables</h3>
<ul><li><b>Tidal</b>: the world's largest tidal range is the <b>Bay of Fundy</b>, Canada (about 16 m) (2022 Q10). India's potential lies in the Gulf of Khambhat, Gulf of Kutch and Sundarbans.</li>
<li><b>Geothermal</b>: uses the geothermal gradient (about 25–30 °C/km); Indian sites Puga (Ladakh), Tattapani, Manikaran.</li>
<li><b>Green energy</b> does no harm to the ecosystem; but not all renewable energy is automatically "green" (large dams, for example) (2018 Q87).</li></ul>
<h3>Hydrogen and fuel cells</h3>
<ul><li>2H₂ + O₂ → 2H₂O: 1 kg H₂ + 8 kg O₂ → <b>9 kg water</b> (2026 Q15). Hydrogen has the highest energy per kg (about 120 MJ/kg).</li>
<li>A <b>fuel cell</b> combines <b>hydrogen and oxygen</b> electrochemically to give electricity, heat and water (2026 Q13). Types: PEM (vehicles), solid oxide, alkaline, phosphoric acid, molten carbonate.</li>
<li>Green hydrogen (electrolysis with renewable power), grey (from natural gas), blue (grey with carbon capture). National Green Hydrogen Mission (2023): 5 million tonnes a year by 2030.</li></ul>`);

addBookTopic("energy", "v1-3", `
<h3>Energy and development</h3>
<ul><li>Energy services are directly linked to reducing <b>poverty</b>, improving <b>health</b> and <b>education</b>, and to economic productivity (2021 Q5). SDG 7: affordable, reliable, sustainable and modern energy for all.</li></ul>
<h3>Energy balances</h3>
<p>An energy balance tabulates a country's production, imports, exports, transformation, losses and final consumption. It shows consumption by end-use sector, self-sufficiency and import dependence, and the efficiency of converting primary to secondary energy. It does not describe "storage and refinement" of each fuel (2023 Q2).</p>
<h3>Energy intensity and efficiency</h3>
<ul><li><b>Energy intensity</b> = energy per unit of GDP. It evolves with <b>dematerialisation</b>, <b>fuel-use intensity</b> (technology) and <b>recycling</b>, plus structural change towards services (2023 Q5).</li>
<li>Advantages of efficiency: cheaper than new generation ("negawatts"), improves security of supply and saves finite resources, raises productivity and competitiveness. It <b>increases</b> access to energy services (2023 Q3).</li>
<li>India: Energy Conservation Act 2001, Bureau of Energy Efficiency, star labelling, PAT scheme, ECBC for buildings, UJALA LEDs.</li></ul>
<h3>Thermal mass in buildings</h3>
<p>Heavy, dense materials (concrete, brick, stone, water) store heat, smoothing day–night temperature swings and storing solar gains. Heavier materials give <b>more</b> thermal mass, not less (2024 Q68).</p>`);

addBookTopic("energy", "v2-1", `
<h3>Ecosystems</h3>
<ul><li>An ecosystem = living community + physical environment, linked by energy flow and nutrient cycles. Energy flows one way (about 10% passes to each higher trophic level); nutrients cycle.</li>
<li>Producers: <b>photoautotrophs</b> (plants, algae) and <b>chemoautotrophs</b>, which make organic matter by oxidising chemicals without sunlight (nitrifying, sulphur, iron bacteria; deep-sea vents) (2025 Q51).</li>
<li>Terrestrial ecosystems: forest, grassland (<b>prairie</b>, steppe, savanna), desert, tundra (2019 Q49). Aquatic: freshwater and marine.</li>
<li><b>Chaparral</b>: Mediterranean-climate shrub forest of dense evergreen shrubs such as scrub oak, adapted to fire (2024 Q72).</li>
<li><b>Deciduous</b> trees shed their leaves annually, in a dry or cold season (2018 Q44).</li>
<li>Interactions: <b>mutualism / symbiosis</b> (both benefit, 2018 Q49), commensalism, parasitism, predation, competition, amensalism.</li></ul>
<h3>Biodiversity</h3>
<ul><li>Three levels: <b>genetic</b>, <b>species</b> and <b>ecosystem</b> diversity (2017 Q62). Hierarchy from large to small: landscape → community → population → species → gene (2025 Q55).</li>
<li>Whittaker's measures: <b>alpha</b> (within a habitat), <b>beta</b> (turnover between habitats), <b>gamma</b> (whole region) (2021 Q4).</li>
<li>India: one of 17 megadiverse countries, with parts of four hotspots (Himalaya, Indo-Burma, Western Ghats–Sri Lanka, Sundaland).</li></ul>
<h3>Lakes and evolution</h3>
<ul><li>Lakes by nutrients: <b>oligotrophic</b> (nutrient-poor, clear), mesotrophic, <b>eutrophic</b> (nutrient-rich, algal growth), dystrophic (humic, brown). By origin: tectonic, glacial, volcanic, oxbow, man-made reservoirs (2021 Q6).</li>
<li>Thinkers: Lamarck (inheritance of acquired characters), Lyell (gradual geological change), Malthus (population outruns resources), Wallace and Darwin (natural selection) (2024 Q71).</li>
<li>Environment and ecology are related but not the same: environment is the surroundings; ecology studies relationships within it (2017 Q95).</li></ul>`);

addBookTopic("energy", "v2-2", `
<h3>Atmosphere and climate</h3>
<ul><li><b>Insolation</b>: incoming solar radiation at the Earth's surface; varies with latitude, season and cloud (2018 Q36). Solar constant about 1361 W/m².</li>
<li><b>Albedo</b>: fraction reflected; snow 0.8–0.9, ocean about 0.06, Earth average 0.30 (2024 Q73).</li>
<li>Clouds reflect sunlight by day (cooling) but trap outgoing infrared at night (warming); in winter this blanket effect can keep nights warmer (2017 Q99).</li>
<li><b>Humidity</b>: absolute (mass of vapour per volume), specific (per mass of air), relative (actual ÷ saturation, %). Warm air holds more vapour (2018 Q41).</li>
<li><b>Droughts</b>: meteorological (rainfall deficit, 2025 Q57), agricultural (soil moisture), hydrological (surface and ground water), socio-economic.</li></ul>
<h3>Earth processes</h3>
<ul><li><b>Geothermal gradient</b>: temperature rises with depth (2023 Q6).</li>
<li>Geology terms: orogeny (mountain building), mesocratic rocks (between light and dark), diagenesis (sediment → rock at low temperature); sediments form <b>beds/strata</b>, not "clay plates" (2023 Q7).</li>
<li>Volcanic eruptions are often accompanied by earthquakes because both arise at plate boundaries and from magma movement (2018 Q83).</li>
<li>Mass movements: creep (slow), <b>slump</b> (rotational slide on a curved surface, 2025 Q59), rockslide (planar), flows, falls.</li>
<li>Rivers change course during floods and leave fertile silt on floodplains (2017 Q57).</li></ul>
<h3>Carbon cycle</h3>
<p>CO₂ comes from respiration, decomposition, volcanoes and combustion; warming oceans release dissolved CO₂. Almost all atmospheric carbon is CO₂ (about 420 ppm); methane is only about 1.9 ppm (2024 Q70).</p>
<h3>Radiation</h3>
<p>Alpha particles are helium nuclei: heavy, positively charged, highly ionising, short range (stopped by paper or skin), harmful if inhaled or ingested. Beta: electrons, stopped by aluminium; gamma: photons, need lead or concrete (2018 Q47).</p>`);

addBookTopic("energy", "v3-1", `
<h3>Air pollutants</h3>
<ul><li>Primary (emitted directly: SO₂, NOₓ, CO, particulate matter, VOCs) and secondary (formed in air: ozone, PAN, sulphuric acid).</li>
<li>Normally <b>CO₂</b> is not considered an air pollutant, because it is a natural component of air and not directly toxic at ambient levels; it is a greenhouse gas (2018 Q89).</li>
<li>UNEP's major components of air pollution include particulate matter, ozone, NO₂, SO₂ and CO (2021 Q2).</li>
<li><b>Ozone</b> at ground level is colourless with a strong odour and irritates eyes and lungs (2020 Q58).</li>
<li>India's National Ambient Air Quality Standards cover 12 pollutants; the AQI uses 8. The National Clean Air Programme (2019) targets PM reduction in non-attainment cities.</li></ul>
<h3>Smog and acid rain</h3>
<ul><li>"<b>Smog</b>" (smoke + fog) was coined in the early 1900s (H. A. des Voeux, about 1905). London smog (1952) was sulphurous; <b>photochemical smog</b> (Los Angeles) forms from NOₓ and hydrocarbons in sunlight (2017 Q61).</li>
<li><b>Acid rain</b>: SOₓ and NOₓ react with water, oxygen and other chemicals, helped by <b>sunlight</b>, to form sulphuric and nitric acids; pH below 5.6 (2019 Q51).</li></ul>
<h3>Control devices</h3>
<table><tr><th>Device</th><th>Principle</th></tr>
<tr><td>Settling chamber</td><td>Gravity; Stokes' law v = g d²(ρ<sub>p</sub> − ρ<sub>a</sub>)/18μ, with a Cunningham slip correction for fine particles (2020 Q54)</td></tr>
<tr><td>Cyclone</td><td>Centrifugal force</td></tr>
<tr><td>Fabric filter (baghouse)</td><td>Filtration</td></tr>
<tr><td>Electrostatic precipitator</td><td>Charging and collection; over 99% for fine dust</td></tr>
<tr><td><b>Venturi scrubber</b></td><td>Removal by <b>atomised water droplets</b> (2019 Q47)</td></tr></table>
<p><b>NOₓ control</b> from boilers: low-NOₓ burners, staged combustion, flue-gas recirculation, lower flame temperature, SCR/SNCR with ammonia (2020 Q60).</p>
<h3>Plumes and dispersion</h3>
<p>The shape of smoke from a chimney is a <b>plume</b> (2025 Q56): looping (unstable), coning (neutral), fanning (inversion), lofting (best), fumigation (worst).</p>
<h3>Noise</h3>
<p>Sound level L = log₁₀(Q/Q₀) bels, or 10 log₁₀(I/I₀) = 20 log₁₀(p/p₀) decibels (2020 Q55). Each 3 dB doubles the intensity. Indian limits (Noise Rules 2000): residential 55 dB(A) day, 45 night.</p>`);

addBookTopic("energy", "v3-2", `
<h3>Water quality</h3>
<ul><li><b>BOD</b> (biochemical oxygen demand): oxygen used by microbes to decompose organic matter in 5 days at 20 °C. High BOD means <b>high organic pollution</b> and low dissolved oxygen (2018 Q48).</li>
<li>BOD test dilution: sample volume = (allowable depletion × bottle volume) ÷ expected BOD. E.g. 4 mg/L depletion in a 300 mL bottle with BOD 180 mg/L → 6.7 mL (2019 Q46).</li>
<li>COD (chemical oxygen demand) ≥ BOD. Drinking water standard: IS 10500.</li>
<li>Excess <b>nitrate</b> (above 45 mg/L) causes <b>blue baby syndrome</b> (methaemoglobinaemia); fluoride causes fluorosis; mercury, Minamata disease; cadmium, itai-itai; arsenic, arsenicosis (2025 Q50).</li>
<li><b>Algal bloom</b>: excess <b>nutrients</b> (N, P) cause rapid algal growth (eutrophication), followed by oxygen depletion (2025 Q54).</li></ul>
<h3>Wastewater treatment</h3>
<table><tr><th>Stage</th><th>Processes</th></tr>
<tr><td>Preliminary / primary</td><td>Screening, grit removal, sedimentation</td></tr>
<tr><td>Secondary (biological)</td><td>Activated sludge, trickling filters, oxidation ponds</td></tr>
<tr><td><b>Tertiary</b></td><td>Nutrient removal, filtration, adsorption (activated carbon), ion exchange, reverse osmosis, disinfection (2017 Q9)</td></tr></table>
<p><b>Activated sludge process</b>: aerated tank where microbes degrade organics; part of the settled sludge is returned to keep the microbial population; it can treat industrial wastes but is sensitive to toxic shocks (2017 Q53).</p>
<h3>Pollution as a global problem</h3>
<p>Pollution crosses borders through air, rivers and oceans; nuclear waste and persistent organic pollutants persist for long periods (2017 Q58, 2022 Q98).</p>`);

addBookTopic("energy", "v3-3", `
<h3>Solid waste</h3>
<ul><li>Municipal solid waste: wet (biodegradable), dry (recyclable), hazardous, construction and demolition. India's Solid Waste Management Rules 2016 require source segregation.</li>
<li><b>Incineration</b>: a hygienic disposal that greatly reduces volume and destroys pathogens; energy can be recovered; needs flue-gas control (2020 Q56).</li>
<li><b>Sanitary landfills</b> are unavoidably hazardous because of <b>leachate</b> (contaminates groundwater) and <b>landfill gas</b> (methane, explosive and a greenhouse gas). They need liners, leachate collection and gas venting (2018 Q42).</li>
<li><b>Composting</b> (aerobic) and <b>vermicomposting</b> (earthworms convert sludge, domestic and agricultural wastes into compost: vermiculture) (2025 Q58). Biomethanation gives biogas.</li></ul>
<h3>Plastics</h3>
<p>Recycling rates are low because scrap plastic has little value, there are many resin types that must be sorted, and collection is costly (2017 Q59). India's Plastic Waste Management Rules (2016, amended) ban many single-use items (from July 2022) and impose extended producer responsibility.</p>`);

addBookTopic("energy", "v4-1", `
<h3>Greenhouse effect and climate change</h3>
<ul><li>A greenhouse gas absorbs and emits infrared radiation: water vapour, CO₂, CH₄, N₂O, ozone, CFCs/HFCs, SF₆ (2018 Q100).</li>
<li><b>Carbon footprint</b>: total CO₂ (and equivalents) released by an activity, person or product (2018 Q6).</li>
<li><b>Stern Review</b> (2006) on the economics of <b>climate change</b>: early action costs about 1% of GDP a year; inaction 5–20% (2023 Q4).</li>
<li><b>Kyoto Protocol</b> (1997) operationalised the UNFCCC with binding targets for developed countries; mechanisms: CDM, joint implementation, emissions trading (2022 Q11). Succeeded by the <b>Paris Agreement</b> (2015): nationally determined contributions, well below 2 °C.</li>
<li>India's NDC: 45% cut in emissions intensity of GDP by 2030 (vs 2005), 50% of power capacity from non-fossil sources, net zero by 2070.</li></ul>
<h3>Ozone layer</h3>
<ul><li>Stratospheric ozone (15–35 km) is continuously formed when <b>solar UV splits O₂</b> and the atoms join O₂, and destroyed naturally too (2017 Q54, 2019 Q32). It absorbs harmful <b>UV-B</b>.</li>
<li>Depletion by chlorine and bromine from CFCs, halons, CCl₄ and methyl bromide; worst over Antarctica in spring (polar stratospheric clouds) (2018 Q43).</li>
<li>Harm: skin cancer, cataracts, weaker immunity, damage to crops and phytoplankton (2023 Q98).</li>
<li>Vienna Convention (1985), <b>Montreal Protocol</b> (1987), Kigali Amendment (2016) to phase down HFCs.</li></ul>
<h3>Environmental degradation</h3>
<p>Human changes to abiotic and biotic components degrade the environment; global problems are its visible results (2023 Q99). Mountain regions are especially fragile ecosystems (2020 Q51).</p>`);

addBookTopic("energy", "v4-2", `
<h3>International conventions</h3>
<table><tr><th>Convention</th><th>Subject</th></tr>
<tr><td><b>Basel</b> (1989)</td><td>Transboundary movement of <b>hazardous wastes</b> (2020 Q59)</td></tr>
<tr><td><b>Rotterdam</b> (1998)</td><td>Prior informed consent for trade in <b>hazardous chemicals and pesticides</b> (2017 Q7)</td></tr>
<tr><td>Stockholm (2001)</td><td>Persistent organic pollutants</td></tr>
<tr><td>Ramsar (1971)</td><td>Wetlands</td></tr>
<tr><td>CITES (1973)</td><td>Trade in endangered species</td></tr>
<tr><td>CBD (1992)</td><td>Biodiversity (Cartagena, Nagoya protocols)</td></tr></table>
<p><b>Rio Declaration</b> (1992): 27 principles: sustainable development, polluter pays, precautionary approach, EIA, public participation, common but differentiated responsibilities. "Right to safety from natural disasters" is not one (2021 Q7).</p>
<h3>Laws, movements and thinkers</h3>
<ul><li>USA's <b>NEPA</b> (National Environmental Policy Act, 1969) introduced EIA (2020 Q57). India: Environment (Protection) Act 1986; Water Act 1974; Air Act 1981; EIA Notification 2006.</li>
<li>The modern environmental movement began with <b>Rachel Carson</b>'s <i>Silent Spring</i> (1962) on DDT (2022 Q8).</li>
<li><b>Gaia hypothesis</b>: Earth as a single self-regulating system, <b>James Lovelock</b> (2022 Q13).</li>
<li>Environmental ethics approaches: anthropocentric, biocentric, ecocentric; the axiological approach holds nature has value in itself (2022 Q12).</li>
<li><b>CERES principles</b> (corporate environmental conduct): protection of the biosphere, sustainable use of resources, waste reduction, energy conservation, risk reduction, safe products, restoration, informing the public, management commitment, audits. "Controlled production" is not one (2022 Q9).</li></ul>
<h3>Environmental management</h3>
<ul><li><b>Green accounting</b> measures sustainable income after deducting environmental depletion (2020 Q3).</li>
<li><b>LEED</b> (USA) and <b>GRIHA</b> (India) are green-building rating systems (2017 Q52). Green Public Procurement (2017 Q71).</li>
<li><b>Integrated Coastal Zone Management</b> is the iterative, evolutionary process for sustainable coastal management (2020 Q52). River basin management: integrated water resources, watershed treatment, conjunctive use (2020 Q53).</li>
<li>Environmental management training should cover line and lower management, who implement it (2019 Q92).</li>
<li><b>Minamata</b> disaster: <b>methylmercury</b> in fish (2019 Q52).</li></ul>
<h3>Environmental impact assessment</h3>
<ul><li>EIA predicts the environmental effects of a project before approval, to help decision-making and <b>resource conservation</b> (2019 Q48, Q100).</li>
<li>Methods: checklists, matrices (Leopold), networks, overlays. Criteria: explicit indicators, magnitude, importance (2025 Q98).</li>
<li>Activity-step model for air: identify sources and quantities of pollutants, then describe baseline air quality and meteorology, predict and evaluate (2025 Q100).</li>
<li>Simple mixing model downstream of an outfall: C = (Q<sub>o</sub>C<sub>o</sub> + Q<sub>e</sub>C<sub>e</sub>)/(Q<sub>o</sub> + Q<sub>e</sub>) (2025 Q52).</li></ul>`);
