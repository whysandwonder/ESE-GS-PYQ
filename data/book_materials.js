// Basics of Material Science and Engineering: notes book built from ESE Paper I PYQs 2017–2026.
addBook("materials", [
 ["m1", "Atoms and bonding", [["m1-1", "Atomic structure and chemical bonding"]]],
 ["m2", "Crystals, defects and diffusion", [["m2-1", "Crystal structures and crystallography"], ["m2-2", "Imperfections and diffusion"]]],
 ["m3", "Mechanical behaviour", [["m3-1", "Stress, strain, hardness, fracture and fatigue"]]],
 ["m4", "Phase diagrams, steels and heat treatment", [["m4-1", "Phase diagrams, iron–carbon system and alloys"]]],
 ["m5", "Polymers, ceramics, composites and construction materials", [["m5-1", "Polymers"], ["m5-2", "Ceramics, composites and construction materials"]]],
 ["m6", "Electronic and magnetic materials", [["m6-1", "Semiconductors, devices and magnetic materials"]]]
]);

addBookTopic("materials", "m1-1", `
<h3>Primary bonds</h3>
<table><tr><th>Bond</th><th>Mechanism</th><th>Typical properties</th></tr>
<tr><td><b>Ionic</b></td><td>Electron transfer; ions held by non-directional <b>Coulombic</b> attraction (2022 Q23)</td><td>Hard, brittle, high melting, insulating as solids; soluble in polar solvents</td></tr>
<tr><td><b>Covalent</b></td><td>Shared electron pairs; directional</td><td>Very hard (diamond), high melting; low conductivity; covalent compounds dissolve in non-polar solvents, have low melting points if molecular (2020 Q73)</td></tr>
<tr><td><b>Metallic</b></td><td>Positive ion cores in a sea of <b>free electrons</b> (2020 Q71); in Pauling's view the electrons resonate between atoms (2024 Q62)</td><td>Conductive, ductile, lustrous</td></tr></table>
<ul><li>A molecule is stable while <b>bonding electrons outnumber antibonding electrons</b> (bond order &gt; 0) (2017 Q80).</li>
<li><b>Stoichiometry</b>: exact ratio of cations to anions predicted by the chemical formula (2019 Q69).</li>
<li><b>Covalent solids</b> (diamond, Si, Ge, SiC) are not close-packed because bonds are directional and rigid; diamond's APF is only 0.34 (2024 Q66).</li></ul>
<h3>Secondary bonds</h3>
<ul><li>Van der Waals forces: dipole–dipole, induced dipole, London dispersion; weakest.</li>
<li><b>Hydrogen bond</b>: partly positive H of one molecule attracted to O, N or F of another; strongest secondary bond; explains water's high boiling point and ice floating (2025 Q75).</li>
<li><b>Water</b> is a polar molecule (bent shape, 104.5°), a good solvent for ionic compounds, and has maximum density at 4 °C (2017 Q76).</li></ul>
<h3>Atomic theory and gas laws</h3>
<p>Avogadro's number 6.022 × 10²³ per mole; equal volumes of gases at the same temperature and pressure contain equal numbers of molecules; Boyle (PV constant at fixed T), Charles (V ∝ T at fixed P) (2018 Q81).</p>`);

addBookTopic("materials", "m2-1", `
<h3>Cubic structures</h3>
<table><tr><th></th><th>SC</th><th>BCC</th><th>FCC</th><th>HCP</th></tr>
<tr><td>Atoms per cell</td><td>1</td><td>2</td><td>4</td><td>6</td></tr>
<tr><td>a in terms of R</td><td>2R</td><td>4R/√3</td><td>2√2 R</td><td>a = 2R</td></tr>
<tr><td>Coordination number</td><td>6</td><td>8</td><td>12</td><td>12</td></tr>
<tr><td>APF</td><td>0.52</td><td>0.68</td><td>0.74</td><td>0.74</td></tr>
<tr><td>Examples</td><td>Po</td><td>α-Fe, Cr, W</td><td>Cu, Al, Ni, γ-Fe</td><td>Mg, Zn, Ti</td></tr></table>
<ul><li>FCC unit-cell volume V = a³ = <b>16√2 R³</b> (2018 Q60, 2026 Q24). FCC: 8 corners × ⅛ + 6 faces × ½ = 4 atoms, not 6.</li>
<li>Density ρ = nA/(V<sub>c</sub>N<sub>A</sub>). α-Fe: a = 2.866 Å (2023 Q19); Cu with R = 1.278 Å gives about 8.9 g/cm³ (2025 Q69).</li>
<li>HCP ideal <b>c/a = 1.633</b> (2026 Q22).</li></ul>
<h3>Crystal systems</h3>
<p>Seven systems, 14 Bravais lattices. Parameters needed: cubic 1; tetragonal, hexagonal and <b>rhombohedral 2</b> (a; α); orthorhombic 3; monoclinic 4; triclinic 6 (2026 Q21).</p>
<h3>Crystallography</h3>
<ul><li>Miller indices: reciprocals of intercepts, cleared of fractions. In cubic crystals, direction [hkl] is <b>perpendicular</b> to plane (hkl) (2026 Q23). d<sub>hkl</sub> = a/√(h² + k² + l²).</li>
<li><b>Linear density</b>: atoms per unit length along a direction; planar density: atoms per unit area of a plane (2019 Q67).</li></ul>
<h3>Ionic (ceramic) structures</h3>
<ul><li>Assumptions: ions are hard spheres; cations touch anions; neutrality; cation–anion ratio decides coordination (2017 Q77).</li>
<li><b>Radius ratio</b> r<sub>c</sub>/r<sub>a</sub>: CN 2 below 0.155; CN 3 at 0.155–0.225 (triangular, so a cation with three anions needs at least <b>0.155 ≈ 0.16</b>, 2019 Q64); CN 4 at 0.225–0.414; CN 6 at 0.414–0.732; CN 8 above 0.732.</li></ul>
<h3>Scope</h3>
<p>Materials science studies structure–property relations; materials engineering designs structures to obtain properties (2018 Q74).</p>`);

addBookTopic("materials", "m2-2", `
<h3>Point defects</h3>
<ul><li>Vacancy, self-interstitial, substitutional and interstitial impurities.</li>
<li><b>Schottky defect</b>: a cation–anion vacancy pair (neutrality kept), lowers density (NaCl, KCl) (2020 Q72, 2023 Q14). <b>Frenkel</b>: an ion moves to an interstitial site (AgCl, ZnS); density unchanged.</li>
<li>Equilibrium vacancies N<sub>v</sub> = N exp(−Q<sub>v</sub>/kT), rising <b>exponentially</b> with temperature (2026 Q25).</li></ul>
<h3>Line and planar defects</h3>
<ul><li><b>Edge dislocation</b>: extra half-plane of atoms ending inside the crystal; Burgers vector ⟂ to the line (2025 Q74). <b>Screw</b>: Burgers vector ∥ line. Mixed: both.</li>
<li>Planar: grain boundaries, twin boundaries, stacking faults; volume: voids, inclusions, cracks.</li></ul>
<h3>Non-crystalline solids</h3>
<p>Glasses form when cooling is fast, the structure is complex, and bonding allows irregular networks. Directional primary bonds in fixed directions favour crystallisation, so they do not characterise glass formation (2021 Q19).</p>
<h3>Diffusion</h3>
<ul><li>Mechanisms: <b>vacancy</b> (substitutional atoms) and <b>interstitial</b> (small atoms like C, H, N; faster).</li>
<li>Fick's first law (steady state) J = −D dC/dx; second law ∂C/∂t = D ∂²C/∂x².</li>
<li>D = D₀ exp(−Q<sub>d</sub>/RT). The same diffusion result needs the same <b>Dt</b> at two temperatures (2023 Q15, dropped for a misprint).</li>
<li>Paths: bulk (lattice), grain boundary and surface diffusion (fastest); "vacancy diffusion" is a mechanism, not one of these path classes (2022 Q21).</li></ul>`);

addBookTopic("materials", "m3-1", `
<h3>Elastic behaviour</h3>
<ul><li>Hooke's law σ = Eε; elongation Δl = σl₀/E. Cu (E ≈ 110 GPa), 305 mm at 276 MPa → 0.77 mm (2023 Q17).</li>
<li>If the area halves under the same load, stress <b>doubles</b> (2019 Q65).</li>
<li><b>Resilience</b>: energy absorbed elastically and recovered on unloading; modulus of resilience σ<sub>y</sub>²/2E (2019 Q70, 2025 Q76). <b>Toughness</b>: total energy to fracture.</li>
<li>Spring potential energy U = ½kx² is a <b>parabola</b> against extension, not a straight line (2017 Q92).</li></ul>
<h3>Plastic deformation</h3>
<ul><li>Occurs by <b>slip</b>: dislocation motion on slip planes (2022 Q24); twinning is the other mode (common in HCP and BCC at low temperature) (2021 Q98).</li>
<li>Schmid's law τ<sub>R</sub> = σ cos φ cos λ; slip starts at the <b>critical resolved shear stress</b>, which depends on purity, temperature, strain rate and prior deformation (2020 Q76).</li>
<li><b>Cold work</b> %CW = (A₀ − A<sub>d</sub>)/A₀ × 100 raises strength and lowers ductility: Cu with 35.6% CW has about 7% elongation (2023 Q18).</li>
<li>Ductility: %EL, and <b>%RA</b> = (A₀ − A<sub>f</sub>)/A₀ × 100; 12.8 → 10.7 mm gives 30% (2025 Q77).</li></ul>
<h3>Hardness</h3>
<p>Brinell (ball), Rockwell (depth), Vickers HV = 1.854P/d², <b>Knoop</b> KHN = P/(CL²) using the long diagonal L (2025 Q70). Knoop and Vickers are microhardness tests.</p>
<h3>Fracture</h3>
<ul><li><b>Ductile</b> fracture: after necking, with considerable plastic deformation, cup-and-cone surface, slow crack growth (2020 Q75). Brittle: little deformation, rapid cleavage.</li>
<li><b>Griffith</b>: σ<sub>c</sub> = √(2Eγ<sub>s</sub>/πa); for glass at 40 MPa, critical flaw ≈ 8.2 µm (2023 Q16).</li></ul>
<h3>Fatigue</h3>
<ul><li>Failure under cyclic stress below the yield strength (2017 Q93); S–N curve; steels show an endurance limit.</li>
<li>Improve fatigue life by <b>shot peening</b> (compressive residual stress), polishing, case hardening, avoiding stress raisers (2017 Q82).</li></ul>`);

addBookTopic("materials", "m4-1", `
<h3>Solid solutions</h3>
<ul><li><b>Hume-Rothery rules</b> for extensive substitutional solubility: atomic size difference under 15%, <b>same crystal structure</b>, similar electronegativity, same valence (2019 Q68, Q93).</li>
<li><b>Solubility limit</b>: maximum solute concentration forming a single solid solution at a given temperature (2025 Q72).</li></ul>
<h3>Phase diagrams</h3>
<ul><li>Gibbs phase rule <b>F = C − P + 2</b> (at constant pressure F = C − P + 1) (2024 Q63).</li>
<li><b>Tie line</b> across a two-phase region gives the compositions of the phases; the <b>lever rule</b> gives their fractions (opposite arm ÷ total) (2019 Q94).</li>
<li>Invariant reactions: eutectic (L → α + β), eutectoid (γ → α + β), peritectic (L + α → β). <b>Congruent</b> transformations involve no composition change (melting of a pure metal) (2019 Q71).</li></ul>
<h3>Iron–carbon system</h3>
<ul><li>Phases: ferrite (α, BCC, max 0.022% C), austenite (γ, FCC, max 2.14% C), cementite (Fe₃C, 6.7% C). Eutectoid at 727 °C and 0.76% C gives <b>pearlite</b> (ferrite + cementite lamellae), with properties between soft ferrite and hard cementite (2018 Q96).</li>
<li>Steels up to about 2% C; cast irons 2–4.3%+ C.</li></ul>
<h3>Cast irons</h3>
<table><tr><th>Type</th><th>Graphite / structure</th></tr>
<tr><td>White</td><td>Cementite; hard, brittle</td></tr>
<tr><td>Grey</td><td>Graphite flakes; good damping and machinability</td></tr>
<tr><td>Ductile (SG)</td><td>Nodules from Mg or Ce added to the melt</td></tr>
<tr><td><b>Malleable</b></td><td>Temper-carbon nodules made by <b>annealing white cast iron</b> (2018 Q64)</td></tr>
<tr><td>Meehanite</td><td>Fine graphite by inoculating with calcium silicide (2024 Q65)</td></tr></table>
<h3>Alloying and minor elements</h3>
<ul><li><b>Manganese</b> is always added: it combines with sulphur to form MnS (preventing hot shortness from FeS) and deoxidises (2017 Q96, 2024 Q64).</li>
<li>Silicon (ferro-silicon) is a cheap deoxidiser that removes FeO. Phosphorus causes cold shortness. Cr (corrosion and hardenability), Ni (toughness), Mo (high-temperature strength), V and W (carbides).</li>
<li><b>Duralumin</b> (Al–Cu–Mg–Mn) is age-hardenable and used in aircraft for its high strength-to-weight ratio (2018 Q93).</li></ul>
<h3>Surface hardening</h3>
<p><b>Gas carburising</b>: accurate case depth, faster than pack carburising, needs less floor space (2024 Q67). Others: nitriding, cyaniding, induction and flame hardening.</p>`);

addBookTopic("materials", "m5-1", `
<h3>Polymer basics</h3>
<ul><li>Long chain molecules, often randomly oriented and coiled (amorphous regions) as in <b>plastics</b> (2025 Q73). Semicrystalline polymers crystallised from a melt form <b>spherulites</b> (2022 Q22).</li>
<li>Chain types: linear, branched, cross-linked, network. <b>Thermoplastics</b> (linear/branched) soften on heating and can be remoulded; <b>thermosets</b> have strong primary bonds throughout (network, often formed by condensation) and do not soften (2020 Q78).</li>
<li>Long-chain polymers are weaker than most metals and ceramics because chains are held by secondary bonds (2018 Q95).</li>
<li><b>Stereoisomerism</b>: same order of atoms (head-to-tail) but different spatial arrangement: isotactic, syndiotactic, atactic (2022 Q25). Cross-linked polymers link chains through covalent bonds (2019 Q95).</li>
<li>Stiff rod-like thermoplastic chains: <b>liquid crystal polymers</b> (2022 Q26).</li></ul>
<h3>Polymerisation</h3>
<ul><li><b>Addition (chain)</b>: monomers add without by-product (polyethylene, PVC).</li>
<li><b>Condensation (step)</b>: two different monomers react, releasing a small molecule such as water (nylon, polyester, Bakelite) (2019 Q66).</li>
<li>Copolymers: random, alternating, block, graft.</li></ul>
<h3>Polymers to know</h3>
<table><tr><th>Polymer</th><th>Notes</th></tr>
<tr><td><b>Bakelite</b></td><td>Phenol + formaldehyde; thermoset (2017 Q73)</td></tr>
<tr><td>Polyacrylonitrile</td><td>Repeat unit –CH₂–CH(CN)–; acrylic fibre (2019 Q30)</td></tr>
<tr><td>Polycarbonate</td><td>Trade names Lexan, Makrolon, <b>Baylon</b> (2020 Q80)</td></tr>
<tr><td>Nylon, PET, PTFE (Teflon), PMMA (Perspex), PS, PP</td><td>Common engineering plastics</td></tr></table>
<h3>Rubber and vulcanisation</h3>
<p>Vulcanisation cross-links rubber chains with sulphur, raising strength and elasticity. The sulphur needed is calculated from the number of cross-links: each cross-link joins two mer units through sulphur atoms (2018 Q61).</p>`);

addBookTopic("materials", "m5-2", `
<h3>Ceramics</h3>
<ul><li>Ionic or covalent compounds (oxides, carbides, nitrides): hard, brittle, refractory, insulating.</li>
<li><b>Refractories</b> withstand high temperatures: fireclay, silica, magnesia, chromite; <b>carbides and carbon</b> are refractory because of very high melting points, but oxidise in air at high temperature (2018 Q94).</li>
<li><b>Abrasives</b> (diamond, SiC, Al₂O₃, cubic BN) wear, grind and cut softer materials; they need hardness and toughness (2019 Q96).</li>
<li><b>Cementation</b>: raw materials bonded by a binder that hardens at room temperature, without firing (cement) (2025 Q71). Other routes: glass forming, particulate forming (pressing, slip casting, then drying and firing).</li></ul>
<h3>Composites</h3>
<p>Matrix + reinforcement (particles, fibres, laminates). Properties are often <b>anisotropic</b> (direction-dependent), not isotropic (2017 Q94). Rule of mixtures for longitudinal modulus: E<sub>c</sub> = E<sub>m</sub>V<sub>m</sub> + E<sub>f</sub>V<sub>f</sub>.</p>
<h3>Engineering and construction materials</h3>
<ul><li><b>Fly ash</b> (from coal power plants) is widely used in cement, concrete and bricks (2017 Q47).</li>
<li><b>Asphalt</b> occurs naturally or is a petroleum residue; <b>bitumen</b> is the binder; tar comes from coal; cutbacks and emulsions are liquid forms (2017 Q78).</li>
<li>Stone <b>dressing</b>: removing irregular portions to give shape and a smooth face (2018 Q58).</li>
<li>Bearing material: <b>Babbitt metal</b> (tin- or lead-based white metal) (2018 Q63).</li>
<li><b>Galvanising</b> (zinc coating) gives sacrificial protection to steel (2018 Q62). Others: cathodic protection, painting, alloying (stainless steel).</li>
<li><b>Technical textiles</b>: high-tenacity, lightweight fibres for functional uses (2020 Q2).</li>
<li>Baking soda (NaHCO₃) is used in fire extinguishers and as an antacid (2017 Q79).</li></ul>`);

addBookTopic("materials", "m6-1", `
<h3>Conductors</h3>
<p>Resistance varies with temperature: R<sub>T</sub> = R₀(1 + αT). From 4 Ω at 40 °C and 6 Ω at 80 °C, R₀ = <b>2 Ω</b> (2017 Q81).</p>
<h3>Semiconductors</h3>
<ul><li>Intrinsic (pure Si, Ge); extrinsic (doped) semiconductors have <b>higher conductivity</b> (2021 Q16).</li>
<li><b>p-type</b>: trivalent dopants (<b>boron</b>, Al, Ga) create holes (2021 Q15). n-type: pentavalent (P, As, Sb) add electrons.</li>
<li>Doping methods: diffusion and <b>ion implantation</b>. Implantation gives precise depth and dose at low temperature but damages the lattice and needs annealing (2021 Q17).</li>
<li><b>Hall effect</b>: a magnetic field across a current-carrying sample gives a transverse voltage; used to find carrier type (p or n), carrier concentration and mobility, and to measure magnetic fields (2018 Q66).</li></ul>
<h3>Devices</h3>
<ul><li>n-p-n transistor: <b>emitter heavily doped, base thin and lightly doped</b>, collector moderately doped and largest (2021 Q18).</li>
<li><b>FET</b>: output current controlled by an electric field; a <b>unipolar</b> device (one carrier type) (2020 Q79). BJT is bipolar.</li>
<li><b>Photoelectric</b> current depends on the light's frequency (above threshold), its intensity, and the potential applied (2020 Q74). Einstein: hν = φ + KE<sub>max</sub>.</li></ul>
<h3>Magnetic materials</h3>
<ul><li>Above the <b>Curie temperature</b> ferromagnets become paramagnetic (2018 Q65). Fe 770 °C, Ni 358 °C.</li>
<li><b>Hard magnetic</b> materials (permanent magnets: alnico, NdFeB, ferrites) have high remanence, coercivity and energy product (2020 Q77). Soft magnetic materials (silicon steel, permalloy) have narrow loops and low losses: transformer cores.</li>
<li><b>Hysteresis loss</b> depends on frequency, maximum flux density (Steinmetz: ∝ f B<sub>max</sub>¹·⁶) and the volume of material (2018 Q59). Eddy-current loss is reduced by laminations.</li>
<li>Transformer <b>oil</b> insulates and carries heat from the core and windings to the cooling surfaces (2021 Q14).</li></ul>`);
