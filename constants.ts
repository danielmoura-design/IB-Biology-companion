import { CalendarEvent, Exercise, InternalResource, SyllabusTheme } from "./types";

// ==========================================
// UPDATE CALENDAR EVENTS HERE
// ==========================================
export const CALENDAR_EVENTS: CalendarEvent[] = [
  // --- 2025 SCHEDULE ---
  
  // Existing Exams/Quizzes
  { id: 'mock-1', title: 'Mock Exams Start', startDate: '2025-04-10', type: 'exam' },
  { id: 'quiz-1', title: 'Theme A Review Quiz', startDate: '2025-02-28', type: 'reminder' },

  // E-Coursework 2025
  { 
    id: 'ec-2025-1', 
    title: 'Submit Project Planner (RQ, Hypothesis, Methodology)', 
    startDate: '2025-03-31', 
    endDate: '2025-04-05',
    type: 'deadline' 
  },
  { 
    id: 'ec-2025-2', 
    title: 'Feedback on the Project Planner', 
    startDate: '2025-04-28', 
    endDate: '2025-05-02',
    type: 'reminder' 
  },
  { 
    id: 'ec-2025-3', 
    title: 'Submit revised Project Planner', 
    startDate: '2025-05-12', 
    endDate: '2025-05-16',
    type: 'deadline' 
  },
  { 
    id: 'ec-2025-4', 
    title: 'Start experiments/data collection', 
    startDate: '2025-06-02', 
    endDate: '2025-06-06',
    type: 'reminder' 
  },
  { 
    id: 'ec-2025-5', 
    title: 'Raw data submission', 
    startDate: '2025-08-04', 
    endDate: '2025-08-08',
    type: 'deadline' 
  },
  { 
    id: 'ec-2025-6', 
    title: 'Share processed data and analysis', 
    startDate: '2025-09-01', 
    endDate: '2025-09-05',
    type: 'deadline' 
  },
  { 
    id: 'ec-2025-7', 
    title: 'Students hand in the first draft', 
    startDate: '2025-10-27', 
    endDate: '2025-10-31',
    type: 'deadline' 
  },
  { 
    id: 'ec-2025-8', 
    title: 'Teacher\'s feedback on the first draft', 
    startDate: '2025-11-10', 
    endDate: '2025-11-14',
    type: 'reminder' 
  },
  { 
    id: 'ec-2025-9', 
    title: 'Students hand in the final version', 
    startDate: '2025-12-01', 
    endDate: '2025-12-05',
    type: 'deadline' 
  },

  // --- 2026 SCHEDULE (projected +52 weeks) ---
  
  { 
    id: 'ec-2026-1', 
    title: 'Submit Project Planner (RQ, Hypothesis, Methodology)', 
    startDate: '2026-03-30', 
    endDate: '2026-04-04',
    type: 'deadline' 
  },
  { 
    id: 'ec-2026-2', 
    title: 'Feedback on the Project Planner', 
    startDate: '2026-04-27', 
    endDate: '2026-05-01',
    type: 'reminder' 
  },
  { 
    id: 'ec-2026-3', 
    title: 'Submit revised Project Planner', 
    startDate: '2026-05-11', 
    endDate: '2026-05-15',
    type: 'deadline' 
  },
  { 
    id: 'ec-2026-4', 
    title: 'Start experiments/data collection', 
    startDate: '2026-06-01', 
    endDate: '2026-06-05',
    type: 'reminder' 
  },
  { 
    id: 'ec-2026-5', 
    title: 'Raw data submission', 
    startDate: '2026-08-03', 
    endDate: '2026-08-07',
    type: 'deadline' 
  },
  { 
    id: 'ec-2026-6', 
    title: 'Share processed data and analysis', 
    startDate: '2026-08-31', 
    endDate: '2026-09-04',
    type: 'deadline' 
  },
  { 
    id: 'ec-2026-7', 
    title: 'Students hand in the first draft', 
    startDate: '2026-10-26', 
    endDate: '2026-10-30',
    type: 'deadline' 
  },
  { 
    id: 'ec-2026-8', 
    title: 'Teacher\'s feedback on the first draft', 
    startDate: '2026-11-09', 
    endDate: '2026-11-13',
    type: 'reminder' 
  },
  { 
    id: 'ec-2026-9', 
    title: 'Students hand in the final version', 
    startDate: '2026-11-30', 
    endDate: '2026-12-04',
    type: 'deadline' 
  }
];

// ==========================================
// UPDATE EXERCISES HERE
// ==========================================
export const EXERCISES: Exercise[] = [
  // Theme A
  {
    id: 'A1.2',
    title: 'A1.2 - Nucleic acids',
    pdfLink: 'https://drive.google.com/file/d/17ZV8Tc5WcOYRTmFFzfmJ-R-gs17XMS1d/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1P6xFRi1zQhnsRWZS7GXgO5m19aMOdRLG/view?usp=drive_link'
  },
  {
    id: 'A2.2',
    title: 'A2.2 - Cell structure',
    pdfLink: 'https://drive.google.com/file/d/1b0jr2XCA9v9qef_9_aC7hPAcZrR76DaN/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1ks-AK_QrIRv6EeGOezfnascGbtlI_1lR/view?usp=drive_link'
  },
  {
    id: 'A3.2',
    title: 'A3.2 - Classification and cladistics',
    pdfLink: 'https://drive.google.com/file/d/18fJ3BjLUCxQykqaA-Y4HSS4Wdjt9Zngc/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1ZLTaqslVyd8fi4XYwfDcu0YSsQ-ICt-T/view?usp=drive_link'
  },
  {
    id: 'A4.1',
    title: 'A4.1 - Evolution and speciation',
    pdfLink: 'https://drive.google.com/file/d/1dzLHGkVER2sgu78ZTq3B0vSUSy6yzIX5/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1KdCWp_I-RqLJRRziyOvmfHM9ORxTRIBN/view?usp=drive_link'
  },
  
  // Theme B
  {
    id: 'B1.2',
    title: 'B1.2 - Proteins',
    pdfLink: 'https://drive.google.com/file/d/1xvR_Uw1YVcpz9S5_mEjG6vTS0M5ecuw5/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1l3A1GHXVuy2SYdZoAUrJ4oveHKv0MU2R/view?usp=drive_link'
  },
  {
    id: 'B4.1',
    title: 'B4.1 - Adaptation to environment',
    pdfLink: 'https://drive.google.com/file/d/1m5kLhvqwGF5q5YQXchOQlBdJbqREiPy3/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1g3WJdGGRlNxRRbdx16jG_nRa9EO7HjnV/view?usp=drive_link'
  },
  {
    id: 'B4.2',
    title: 'B4.2 - Ecological niches',
    pdfLink: 'https://drive.google.com/file/d/1IhXJ6FSj7cxkFhSWl667uydktEF58fck/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1D2LQh1IwV-vG0YGPnkYVqsKXNKwTKBDd/view?usp=drive_link'
  },

  // Theme C
  {
    id: 'C4.1',
    title: 'C4.1 - Populations and Communities',
    pdfLink: 'https://drive.google.com/file/d/1P6xFRi1zQhnsRWZS7GXgO5m19aMOdRLG/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1IhGUcVdTAUW2g-R6x2pwGQ-OetVBO8sN/view?usp=drive_link'
  },

  // Theme D
  {
    id: 'D3.2',
    title: 'D3.2 - Inheritance',
    pdfLink: 'https://drive.google.com/file/d/1kw4Q4yC58Le62hTPPyVHBDIVMRvxAio9/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1ZdyzhCbaofyoak3X8BxNJtUqun5wLqSL/view?usp=drive_link'
  },
  {
    id: 'D4.1',
    title: 'D4.1 - Natural selection',
    pdfLink: 'https://drive.google.com/file/d/1i4g1bDjH_32PleyLseVXcNZD55fBACtv/view?usp=drive_link',
    markschemeLink: 'https://drive.google.com/file/d/1L_muPcvfFPZTL1LyaOG_p_whsuFAAMlV/view?usp=drive_link'
  }
];

// ==========================================
// UPDATE RESOURCES HERE
// ==========================================
export const IA_RESOURCES: InternalResource[] = [
  {
    title: 'Internal Assessment Criteria',
    description: 'Detailed rubric and marking criteria for the IA.',
    link: 'https://drive.google.com/file/d/1Q9__EfAF1vqdn88SFfsftyYrFAt_MnIu/view?usp=drive_link',
    type: 'pdf'
  },
  {
    title: 'Experiment Guidelines',
    description: 'Safety rules and structural guidelines for your experiment.',
    link: 'https://drive.google.com/file/d/1L8WFS_t1M1k8rCwFkq8PMcvuiwvtcRxP/view?usp=drive_link',
    type: 'pdf'
  },
  {
    title: 'Overall Structure Sample',
    description: 'An example of how to structure your final paper.',
    link: 'https://drive.google.com/file/d/1SAckSQJvA_ujPlA9_GeLy1jvZdqXCV7q/view?usp=drive_link',
    type: 'pdf'
  },
  {
    title: 'APA 7th Edition Guide',
    description: 'Quick reference guide for citations and references.',
    link: 'https://drive.google.com/file/d/1i7dLelCcjbmWCGdidyo62zlfH7jPGF1f/view?usp=drive_link',
    type: 'pdf'
  }
];

// ==========================================
// UPDATE SYLLABUS HERE
// ==========================================
export const SYLLABUS_DATA: SyllabusTheme[] = [
  {
    id: 'A',
    name: 'Theme A',
    title: 'Unity and Diversity',
    description: 'Theme A focuses on the common origins and unifying characteristics of life on Earth, from the molecular structure of water and nucleic acids to the cellular basis of life and the diversity of organisms evolved through natural selection.',
    link: 'https://drive.google.com/file/d/1Jy1VvL97fsA95tYlHm04XULpLQ_vEj1J/view?usp=drive_link',
    items: [
      { 
        id: 'A1.1', 
        title: 'A1.1: Water', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Medium of Life:</strong> Water is the medium in which all life originated and evolved.</li>
            <li><strong>Hydrogen Bonding:</strong> Polarity of water molecules leads to hydrogen bonds between them.</li>
            <li><strong>Cohesion & Adhesion:</strong> Explains transport in plants (xylem) and surface tension.</li>
            <li><strong>Solvent Properties:</strong> Dissolves polar/ionic substances, facilitating metabolic reactions and transport.</li>
            <li><strong>Physical Properties:</strong> Buoyancy, viscosity, thermal conductivity, and high specific heat capacity compared to air.</li>
          </ul>
        ` 
      },
      { 
        id: 'A1.2', 
        title: 'A1.2: Nucleic Acids', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Genetic Material:</strong> DNA and RNA are polymers of nucleotides acting as the genetic material.</li>
            <li><strong>Nucleotide Structure:</strong> Pentose sugar, phosphate group, and nitrogenous base.</li>
            <li><strong>DNA vs RNA:</strong> Differences in sugar (deoxyribose vs ribose) and bases (Thymine vs Uracil).</li>
            <li><strong>Double Helix:</strong> DNA strands are antiparallel, held by hydrogen bonds between complementary bases (A-T, G-C).</li>
            <li><strong>Conservation:</strong> The genetic code is universal, supporting the theory of common ancestry.</li>
          </ul>
        ` 
      },
      {
        id: 'A2.1',
        title: 'A2.1: Origins of Cells',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Early Earth:</strong> Conditions favored the synthesis of simple organic compounds.</li>
            <li><strong>LUCA:</strong> Last Universal Common Ancestor; evidence includes universal genetic code and shared molecular machinery.</li>
            <li><strong>RNA World:</strong> Hypothesis that RNA was the first genetic material (catalytic and self-replicating).</li>
            <li><strong>Endosymbiosis:</strong> Mitochondria and chloroplasts evolved from free-living prokaryotes engulfed by ancestral cells.</li>
          </ul>
        `
      },
      {
        id: 'A2.2',
        title: 'A2.2: Cell Structure',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Cell Theory:</strong> All living things are composed of cells; cells come from pre-existing cells.</li>
            <li><strong>Microscopy:</strong> Light vs. Electron microscopy (resolution and magnification).</li>
            <li><strong>Prokaryotes:</strong> Lack a nucleus/compartmentalization (Nucleoid, 70S ribosomes, cell wall, pili).</li>
            <li><strong>Eukaryotes:</strong> Compartmentalized structure. Organelles include Nucleus, RER, Golgi, Lysosome, Mitochondrion, Chloroplast, Vacuoles, and Cytoskeleton.</li>
            <li><strong>Membranes:</strong> Fluid mosaic model, phospholipid bilayer, integral/peripheral proteins, and cholesterol.</li>
          </ul>
        `
      },
      {
        id: 'A2.3',
        title: 'A2.3: Viruses',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Nature:</strong> Non-living entities lacking metabolism and self-reproduction.</li>
            <li><strong>Structure:</strong> Capsid (protein coat) and genetic material (DNA or RNA).</li>
            <li><strong>Bacteriophages:</strong> Viruses that infect bacteria.</li>
            <li><strong>Life Cycles:</strong> Lytic (rapid destruction) vs. Lysogenic (integration into host genome) cycles.</li>
            <li><strong>Evolution:</strong> Rapid evolution (e.g., Influenza, HIV) due to high mutation rates.</li>
          </ul>
        `
      },
      {
        id: 'A3.1',
        title: 'A3.1: Diversity of Organisms',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Variation:</strong> Differences exist between individuals and species.</li>
            <li><strong>Species Concept:</strong> Biological species concept (interbreeding populations). Limitations exist (asexual, hybrids).</li>
            <li><strong>Karyotypes:</strong> Number and appearance of chromosomes; used to identify species and sex.</li>
            <li><strong>Genomes:</strong> Total genetic information. Sizes vary significantly between organisms.</li>
          </ul>
        `
      },
      {
        id: 'A3.2',
        title: 'A3.2: Classification and Cladistics',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Taxonomy:</strong> Hierarchy of taxa (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species).</li>
            <li><strong>Binomial Nomenclature:</strong> Scientific naming system (<i>Genus species</i>).</li>
            <li><strong>Three Domains:</strong> Archaea, Bacteria, Eukarya (based on rRNA sequences).</li>
            <li><strong>Cladistics:</strong> Classification based on common ancestry. Clades include an ancestor and all descendants.</li>
            <li><strong>Molecular Clocks:</strong> Using mutation rates to estimate divergence times.</li>
          </ul>
        `
      },
      {
        id: 'A4.1',
        title: 'A4.1: Evolution and Speciation',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Evolution:</strong> Change in allele frequencies in a population over time.</li>
            <li><strong>Evidence:</strong> Fossil record, homologous structures (pentadactyl limb), selective breeding.</li>
            <li><strong>Natural Selection:</strong> Variation, Overproduction, Selection Pressure, Differential Survival/Reproduction.</li>
            <li><strong>Speciation:</strong> Formation of new species via reproductive isolation (Allopatric/Geographic vs. Sympatric).</li>
            <li><strong>Barriers:</strong> Temporal, Behavioral, and Geographic isolation.</li>
          </ul>
        `
      },
      {
        id: 'A4.2',
        title: 'A4.2: Conservation of Biodiversity',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Biodiversity:</strong> Richness and evenness of life (genetic, species, ecosystem).</li>
            <li><strong>Crisis:</strong> Current 6th mass extinction caused by human activity (habitat loss, invasive species, climate change).</li>
            <li><strong>Conservation:</strong> In situ (reserves, rewilding) vs. Ex situ (zoos, seed banks, botanic gardens).</li>
            <li><strong>EDGE Species:</strong> Evolutionarily Distinct and Globally Endangered species prioritization.</li>
          </ul>
        `
      },
      {
        id: 'A-NOS',
        title: 'Nature of Science (NOS) - Theme A',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Falsification of Theories:</strong> Evidence from Pasteur's experiments falsified the theory of spontaneous generation (A2.1).</li>
             <li><strong>Use of Models:</strong> Crick and Watson used model making to discover the structure of DNA (A1.2).</li>
             <li><strong>Collaboration:</strong> The Human Genome Project demonstrated international collaboration to sequence the entire human genome (A3.1).</li>
             <li><strong>Paradigm Shifts:</strong> Cladistics has caused a shift in classification, moving away from purely morphological characteristics to molecular evidence (A3.2).</li>
             <li><strong>Improvements in Apparatus:</strong> The invention of the electron microscope led to a greater understanding of cellular ultrastructure (A2.2).</li>
             <li><strong>Theories:</strong> The Cell Theory explains that all living things are composed of cells (A2.2).</li>
             <li><strong>Uncertainty:</strong> The definition of a species can be blurred (e.g. ring species, hybrids), showing the limitations of the biological species concept (A3.1).</li>
          </ul>
        `
      },
      {
        id: 'A-Skills',
        title: 'Approaches to Learning (Skills) - Theme A',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Microscopy:</strong> Use of a light microscope to investigate the structure of cells and tissues, including drawing cells and calculating magnification (A2.2).</li>
             <li><strong>Data Analysis:</strong> Analysis of electron micrographs to identify organelles and deduce the function of specialized cells (A2.2).</li>
             <li><strong>Database Use:</strong> Use of molecular databases (e.g., BLAST) to compare DNA or protein sequences for cladistics (A3.2).</li>
             <li><strong>Cladograms:</strong> Construction and analysis of cladograms to deduce evolutionary relationships (A3.2).</li>
             <li><strong>Dichotomous Keys:</strong> Construction and use of dichotomous keys for identification of species (A3.2).</li>
             <li><strong>Correlation vs Causation:</strong> Analyzing data regarding speciation and environmental factors (A4.1).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'B',
    name: 'Theme B',
    title: 'Form and Function',
    description: 'Theme B explores how the structure of biological molecules, cells, and organisms facilitates their specific functions. It covers the organization of life from the molecular level (carbohydrates, lipids, proteins) to the cellular level (membranes, organelles) and organismal level (physiological systems).',
    link: 'https://drive.google.com/file/d/1OMO8njT2khWduF8Ag1tWof-HMDi1ztMM/view?usp=drive_link',
    items: [
      { 
        id: 'B1.1', 
        title: 'B1.1: Carbohydrates and Lipids', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Chemical Basics:</strong> Carbon compounds; condensation reactions form polymers, hydrolysis breaks them down.</li>
            <li><strong>Carbohydrates:</strong> Monosaccharides (glucose, ribose), disaccharides (sucrose), and polysaccharides.</li>
            <li><strong>Polysaccharides:</strong> Cellulose (structure in plants), Starch (storage in plants), Glycogen (storage in animals).</li>
            <li><strong>Lipids:</strong> Triglycerides (energy storage, insulation), phospholipids (membranes), steroids. Hydrophobic properties.</li>
            <li><strong>Energy Storage:</strong> Lipids provide long-term energy storage (more energy per gram) compared to carbohydrates (short-term).</li>
          </ul>
        ` 
      },
      { 
        id: 'B1.2', 
        title: 'B1.2: Proteins', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Amino Acids:</strong> 20 different amino acids; R-groups determine chemical properties.</li>
            <li><strong>Peptide Bonds:</strong> Formed between amino acids via condensation.</li>
            <li><strong>Structure Levels:</strong> Primary (sequence), Secondary (alpha-helix, beta-sheet), Tertiary (3D folding), Quaternary (multiple polypeptides).</li>
            <li><strong>Functionality:</strong> Globular proteins (enzymes, hemoglobin) are soluble; Fibrous proteins (collagen, spider silk) are structural.</li>
            <li><strong>Denaturation:</strong> Loss of structure and function due to extreme pH or temperature.</li>
          </ul>
        ` 
      },
      {
        id: 'B2.1',
        title: 'B2.1: Membranes and Transport',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Fluid Mosaic Model:</strong> Phospholipid bilayer with integral and peripheral proteins. Amphipathic nature.</li>
            <li><strong>Cholesterol:</strong> Regulates membrane fluidity in animal cells.</li>
            <li><strong>Passive Transport:</strong> Simple diffusion, facilitated diffusion (channels/carriers), osmosis (water movement).</li>
            <li><strong>Active Transport:</strong> Requires ATP (e.g., Sodium-Potassium pump).</li>
            <li><strong>Vesicle Transport:</strong> Endocytosis (entry) and Exocytosis (exit) dependent on membrane fluidity.</li>
          </ul>
        `
      },
      {
        id: 'B2.2',
        title: 'B2.2: Organelles and Compartmentalization',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Compartmentalization:</strong> Eukaryotic cells use membranes to isolate metabolic processes (e.g., enzymes in lysosomes).</li>
            <li><strong>Nucleus:</strong> Separates transcription (DNA to mRNA) from translation (cytoplasm).</li>
            <li><strong>Mitochondria:</strong> Double membrane creates intermembrane space for proton gradients (Chemiosmosis).</li>
            <li><strong>Chloroplasts:</strong> Thylakoids and stroma for photosynthesis.</li>
            <li><strong>Ribosomes:</strong> Free (intracellular proteins) vs. Bound to RER (secretion/lysosomes).</li>
          </ul>
        `
      },
      {
        id: 'B2.3',
        title: 'B2.3: Cell Specialization',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Differentiation:</strong> Cells become specialized by expressing only specific genes from the genome.</li>
            <li><strong>Stem Cells:</strong> Totipotent, pluripotent, and multipotent cells with capacity to divide and differentiate. Therapeutic uses (e.g., Stargardt's disease).</li>
            <li><strong>SA:Vol Ratio:</strong> Limits cell size; larger cells have less surface area relative to volume for exchange.</li>
            <li><strong>Multicellularity:</strong> Emergent properties arise from the interaction of cellular components.</li>
          </ul>
        `
      },
      {
        id: 'B3.1',
        title: 'B3.1: Gas Exchange',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Surfaces:</strong> Requirements include large surface area, permeability, thin membranes, and moisture (e.g., Alveoli).</li>
            <li><strong>Ventilation:</strong> Maintains concentration gradients. Antagonistic muscle action (diaphragm/intercostals).</li>
            <li><strong>Pneumocytes:</strong> Type I (exchange) and Type II (surfactant secretion).</li>
            <li><strong>Plants:</strong> Stomata and spongy mesophyll facilitate gas exchange.</li>
            <li><strong>Hemoglobin:</strong> Oxygen transport; cooperative binding and affinity changes (Bohr shift - HL).</li>
          </ul>
        `
      },
      {
        id: 'B3.2',
        title: 'B3.2: Transport',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Plants:</strong> Transpiration (loss of water vapor) generates tension (cohesion-tension theory) in xylem.</li>
            <li><strong>Phloem:</strong> Active translocation of organic compounds (source to sink) via hydrostatic pressure gradients.</li>
            <li><strong>Circulatory Systems:</strong> Double circulation in mammals separates oxygenated/deoxygenated blood.</li>
            <li><strong>Vessels:</strong> Arteries (high pressure, thick walls), Veins (valves, low pressure), Capillaries (exchange).</li>
            <li><strong>Heart:</strong> Myogenic contraction, pacemaker (SA node), cardiac cycle.</li>
          </ul>
        `
      },
      {
        id: 'B3.3',
        title: 'B3.3: Muscle and Motility',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Skeletal Muscle:</strong> Striated, multinucleated fibers containing myofibrils.</li>
            <li><strong>Sarcomere:</strong> Functional unit; arrangement of actin (thin) and myosin (thick) filaments.</li>
            <li><strong>Sliding Filament Theory:</strong> Myosin heads form cross-bridges with actin, pulling filaments to shorten sarcomere.</li>
            <li><strong>Control:</strong> Calcium ions bind troponin, moving tropomyosin to expose binding sites. ATP hydrolysis powers movement.</li>
          </ul>
        `
      },
      {
        id: 'B4.1',
        title: 'B4.1: Adaptation to Environment',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Adaptations:</strong> Heritable traits (structural, behavioral, physiological) developed through natural selection.</li>
            <li><strong>Biomes:</strong> Distribution determined by climatic variables (temperature and precipitation). Examples: Taiga, Desert, Tundra, Rainforest.</li>
            <li><strong>Convergent Evolution:</strong> Unrelated species evolve similar traits due to similar environmental pressures (e.g., wings in birds/bats/insects).</li>
            <li><strong>Coral Reefs:</strong> Sensitivity to environmental changes (temperature, acidity).</li>
          </ul>
        `
      },
      {
        id: 'B4.2',
        title: 'B4.2: Ecological Niches',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Niche:</strong> The unique role of a species in its ecosystem (habitat, nutrition, interactions).</li>
            <li><strong>Types:</strong> Fundamental (potential) vs. Realized (actual) niche.</li>
            <li><strong>Competitive Exclusion:</strong> Two species cannot occupy the exact same niche indefinitely; one will outcompete the other.</li>
            <li><strong>Specialization:</strong> Avoids competition (resource partitioning).</li>
          </ul>
        `
      },
      {
        id: 'B-NOS',
        title: 'Nature of Science (NOS) - Theme B',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Falsification of Theories:</strong> Evidence from freeze-fracture electron microscopy falsified the Davson-Danielli 'sandwich' model of the membrane, leading to the Singer-Nicolson fluid mosaic model (B2.1).</li>
             <li><strong>Use of Models:</strong> Physical models were used to determine the structure of DNA and are used to visualize protein folding (B1.2).</li>
             <li><strong>Developments in Research:</strong> Radioisotopes (autoradiography) were used to demonstrate the bidirectional replication of DNA (B1.2 - related).</li>
             <li><strong>Accidental Discovery:</strong> The synthesis of urea by Friedrich Wöhler falsified vitalism (B1.1).</li>
             <li><strong>Theories:</strong> The Sliding Filament theory explains muscle contraction based on experimental evidence (B3.3).</li>
          </ul>
        `
      },
      {
        id: 'B-Skills',
        title: 'Approaches to Learning (Skills) - Theme B',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Experimental Design:</strong> Investigation of factors affecting enzyme activity (temperature, pH, substrate concentration) (B1.2).</li>
             <li><strong>Microscopy:</strong> Drawing and interpreting electron micrographs of membrane structures and organelles (B2.1, B2.2).</li>
             <li><strong>Estimation:</strong> Estimation of osmolarity in tissues by bathing samples in hypotonic and hypertonic solutions (B2.1).</li>
             <li><strong>Chromatography:</strong> Separation of photosynthetic pigments by paper or thin-layer chromatography (B2.2).</li>
             <li><strong>Measurement:</strong> Measurement of transpiration rates using potometers (B3.2).</li>
             <li><strong>Data Analysis:</strong> Analyzing epidemiological data relating to coronary heart disease (B3.2).</li>
             <li><strong>BMI Calculation:</strong> Determination of Body Mass Index using nomograms or formulas (B1.1).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'C',
    name: 'Theme C',
    title: 'Interaction and Interdependence',
    description: 'Theme C emphasizes the systems approach to biology, focusing on the interactions between biological systems and their interdependence. This includes molecular interactions (enzymes), cellular energy transformations (respiration, photosynthesis), signalling systems, body systems, and ecosystem dynamics.',
    link: 'https://drive.google.com/file/d/1tzkMG6VVpAcK6XyN32MwiqM-Q8TadUcA/view?usp=drive_link',
    items: [
      { 
        id: 'C1.1', 
        title: 'C1.1: Enzymes', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Biological Catalysts:</strong> Globular proteins that speed up reactions by lowering activation energy.</li>
            <li><strong>Active Site:</strong> Specific region where substrate binds (Lock and Key vs Induced Fit models).</li>
            <li><strong>Factors Affecting Rate:</strong> Temperature (optimum, then denaturation), pH (optimum, then denaturation), Substrate Concentration (saturation point).</li>
            <li><strong>Immobilized Enzymes:</strong> Enzymes attached to a surface (e.g., alginate beads) for industrial use (e.g., production of lactose-free milk).</li>
          </ul>
        ` 
      },
      { 
        id: 'C1.2', 
        title: 'C1.2: Cell Respiration', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>ATP:</strong> Adenosine Triphosphate, the universal energy currency of cells. High energy bonds.</li>
            <li><strong>Anaerobic Respiration:</strong> Occurs in cytoplasm without oxygen. Small ATP yield. Produces lactate in humans; ethanol and CO2 in yeast.</li>
            <li><strong>Aerobic Respiration:</strong> Occurs in mitochondria with oxygen. Large ATP yield. Pyruvate is broken down into CO2 and H2O.</li>
            <li><strong>Respirometers:</strong> Apparatus used to measure the rate of respiration by measuring oxygen consumption.</li>
          </ul>
        ` 
      },
      {
        id: 'C1.3',
        title: 'C1.3: Photosynthesis',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Energy Conversion:</strong> Light energy converted into chemical energy (carbon compounds).</li>
            <li><strong>Pigments:</strong> Chlorophyll absorbs red and blue light, reflects green light. Action vs Absorption spectra.</li>
            <li><strong>Photolysis:</strong> Splitting of water molecules using light energy to produce oxygen, protons, and electrons.</li>
            <li><strong>Limiting Factors:</strong> Temperature, Light Intensity, and CO2 Concentration affect the rate of photosynthesis.</li>
            <li><strong>Chromatography:</strong> Technique to separate and identify photosynthetic pigments based on Rf values.</li>
          </ul>
        `
      },
      {
        id: 'C2.1',
        title: 'C2.1: Chemical Signalling',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Communication:</strong> Cells detect and respond to changes via chemical signals (ligands) binding to receptors.</li>
            <li><strong>Hormones:</strong> Chemical messengers transported by blood. Examples: Insulin/Glucagon (blood glucose), Thyroxin (metabolic rate), Leptin (appetite), Melatonin (circadian rhythms).</li>
            <li><strong>Mechanism:</strong> Steroid hormones cross membranes (bind intracellularly); Peptide hormones bind to surface receptors (secondary messengers).</li>
          </ul>
        `
      },
      {
        id: 'C2.2',
        title: 'C2.2: Neural Signalling',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Neurons:</strong> Transmit electrical impulses. Structure: Dendrites, cell body, axon, myelin sheath (saltatory conduction).</li>
            <li><strong>Resting Potential:</strong> Maintained by sodium-potassium pumps (approx -70mV).</li>
            <li><strong>Action Potential:</strong> Depolarization (Na+ influx) and Repolarization (K+ efflux). Threshold potential must be reached.</li>
            <li><strong>Synapses:</strong> Chemical transmission between neurons. Calcium influx triggers neurotransmitter (e.g., Acetylcholine) release via exocytosis.</li>
          </ul>
        `
      },
      {
        id: 'C3.1',
        title: 'C3.1: Integration of Body Systems',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Homeostasis:</strong> Maintenance of a constant internal environment within physiological limits.</li>
            <li><strong>Negative Feedback:</strong> Mechanisms that return a variable to its set point (e.g., Thermoregulation, Blood pH, Blood glucose).</li>
            <li><strong>Thermoregulation:</strong> Response to heat (vasodilation, sweating) and cold (vasoconstriction, shivering).</li>
            <li><strong>Blood Glucose:</strong> Controlled by Insulin (beta cells) and Glucagon (alpha cells) from the pancreas. Type I vs Type II diabetes.</li>
          </ul>
        `
      },
      {
        id: 'C3.2',
        title: 'C3.2: Defense Against Disease',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Pathogens:</strong> Disease-causing organisms (bacteria, viruses, fungi, protozoa).</li>
            <li><strong>First Line:</strong> Skin (barrier, sebum) and Mucous membranes (lysozyme, sticky mucus). Blood clotting (platelets, fibrin).</li>
            <li><strong>Second Line:</strong> Non-specific immunity. Phagocytic white blood cells ingest pathogens. Inflammatory response.</li>
            <li><strong>Third Line:</strong> Specific immunity. Lymphocytes produce specific antibodies. Memory cells provide long-term immunity.</li>
            <li><strong>Antibiotics:</strong> Block bacterial metabolic pathways (e.g., cell wall synthesis). Ineffective against viruses.</li>
          </ul>
        `
      },
      {
        id: 'C4.1',
        title: 'C4.1: Populations and Communities',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Population Dynamics:</strong> Growth curves (Sigmoid: Exponential, Transitional, Plateau phases). Carrying capacity (K).</li>
            <li><strong>Limiting Factors:</strong> Density-dependent (disease, competition) vs Density-independent (weather, natural disasters).</li>
            <li><strong>Community Interactions:</strong> Herbivory, Predation, Competition (inter/intraspecific), Parasitism, Mutualism.</li>
            <li><strong>Chi-Squared Test:</strong> Statistical test to determine association between two species (presence/absence) using quadrat sampling data.</li>
          </ul>
        `
      },
      {
        id: 'C4.2',
        title: 'C4.2: Transfers of Energy and Matter',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Energy Flow:</strong> Sunlight is the initial energy source. Energy flows through trophic levels (Producers -> Primary -> Secondary consumers).</li>
            <li><strong>Energy Loss:</strong> Approx 90% energy lost between levels (heat, respiration, uneaten parts). Restricts food chain length.</li>
            <li><strong>Nutrient Cycling:</strong> Nutrients (Carbon, Nitrogen) are recycled. Energy is not. Decomposers (saprotrophs) recycle nutrients.</li>
            <li><strong>Carbon Cycle:</strong> Fluxes (photosynthesis, respiration, combustion) and Pools (atmosphere, biomass, fossil fuels, limestone).</li>
            <li><strong>Climate Change:</strong> Greenhouse gases (CO2, methane) trap heat. Enhanced greenhouse effect leads to global warming.</li>
          </ul>
        `
      },
      {
        id: 'C-NOS',
        title: 'Nature of Science (NOS) - Theme C',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Experimental Design:</strong> Controlling variables to produce reliable data in enzyme and photosynthesis experiments (C1.1, C1.3).</li>
             <li><strong>Use of Models:</strong> Using simple respirometers to model physiological processes (C1.2).</li>
             <li><strong>Global Collaboration:</strong> The Intergovernmental Panel on Climate Change (IPCC) shares data to model climate change (C4.2).</li>
             <li><strong>Ethical Implications:</strong> Considerations regarding animal testing for medical research and vaccine development (C3.2).</li>
             <li><strong>Paradigm Shifts:</strong> The Chemiosmotic theory (Peter Mitchell) was initially rejected but later accepted to explain ATP synthesis (C1.2/C1.3).</li>
             <li><strong>Public Understanding:</strong> The importance of vaccination programs and herd immunity (C3.2).</li>
          </ul>
        `
      },
      {
        id: 'C-Skills',
        title: 'Approaches to Learning (Skills) - Theme C',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Calculating Rates:</strong> determining the rate of reaction from graphs or experimental data (C1.1, C1.3).</li>
             <li><strong>Chromatography:</strong> separating photosynthetic pigments and calculating Rf values (C1.3).</li>
             <li><strong>Statistical Analysis:</strong> Using the Chi-squared test to test for association between species (C4.1).</li>
             <li><strong>Constructing Food Webs:</strong> Representing trophic relationships and energy flow (C4.2).</li>
             <li><strong>Graph Interpretation:</strong> Analyzing graphs of enzyme activity and population growth curves (C1.1, C4.1).</li>
             <li><strong>Mesocosms:</strong> Setting up sealed sustainable ecosystems to investigate nutrient cycling (C4.2).</li>
             <li><strong>Oscilloscopes:</strong> Analysis of oscilloscope traces to determine resting and action potentials (C2.2).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'D',
    name: 'Theme D',
    title: 'Continuity and Change',
    description: 'Theme D examines how living systems maintain continuity (through DNA replication and reproduction) while also allowing for change (through mutation, evolution, and adaptation). It covers the molecular basis of genetics, cell division, inheritance patterns, and the mechanisms of natural selection.',
    link: 'https://drive.google.com/file/d/1GTZkkyQXSyjHERDSg2-MOAmoTQYDgK8Z/view?usp=drive_link',
    items: [
      { 
        id: 'D1.1', 
        title: 'D1.1: DNA Replication', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Semi-conservative:</strong> Each new DNA molecule consists of one original strand and one newly synthesized strand (Meselson and Stahl).</li>
            <li><strong>Enzymes:</strong> Helicase (unwinds helix), DNA Polymerase III (synthesizes new strand), RNA Primase (adds primer), DNA Ligase (joins Okazaki fragments).</li>
            <li><strong>Directionality:</strong> Replication occurs in the 5' to 3' direction. Leading strand (continuous) vs Lagging strand (discontinuous).</li>
            <li><strong>PCR:</strong> Polymerase Chain Reaction amplifies DNA using Taq polymerase and thermal cycling (Denaturation, Annealing, Elongation).</li>
          </ul>
        ` 
      },
      { 
        id: 'D1.2', 
        title: 'D1.2: Protein Synthesis', 
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Transcription:</strong> Synthesis of mRNA from DNA template by RNA polymerase in the nucleus. Antisense strand is transcribed.</li>
            <li><strong>Translation:</strong> Synthesis of polypeptides on ribosomes. mRNA codons bind to tRNA anticodons carrying specific amino acids.</li>
            <li><strong>Genetic Code:</strong> Universal (same in most organisms) and Degenerate (multiple codons for one amino acid).</li>
            <li><strong>Post-transcriptional Modification:</strong> Splicing (removal of introns) increases protein diversity (HL).</li>
          </ul>
        ` 
      },
      {
        id: 'D1.3',
        title: 'D1.3: Mutation and Gene Editing',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mutations:</strong> Random changes in base sequence. Substitution (e.g., Sickle Cell Anemia), Insertion, Deletion (Frameshift).</li>
            <li><strong>Causes:</strong> Mutagens include radiation (UV, X-rays) and chemical mutagens (carcinogens).</li>
            <li><strong>Gene Editing:</strong> CRISPR-Cas9 system allows precise editing of DNA sequences. Potential for treating genetic diseases.</li>
          </ul>
        `
      },
      {
        id: 'D2.1',
        title: 'D2.1: Cell and Nuclear Division',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Cell Cycle:</strong> Interphase (G1, S, G2), Mitosis (PMAT), and Cytokinesis. Controlled by Cyclins.</li>
            <li><strong>Mitosis:</strong> Produces two genetically identical diploid daughter cells. Used for growth, repair, asexual reproduction.</li>
            <li><strong>Meiosis:</strong> Produces four genetically distinct haploid gametes. Reduction division (Diploid to Haploid).</li>
            <li><strong>Variation:</strong> Crossing over (Prophase I) and Random Orientation (Metaphase I) increase genetic diversity.</li>
            <li><strong>Nondisjunction:</strong> Failure of chromosomes to separate (e.g., Trisomy 21 / Down Syndrome).</li>
          </ul>
        `
      },
      {
        id: 'D2.2',
        title: 'D2.2: Gene Expression (HL)',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Regulation:</strong> Gene expression is regulated by proteins (transcription factors) binding to specific DNA sequences (promoters/enhancers).</li>
            <li><strong>Epigenetics:</strong> Chemical modifications (Methylation of DNA, Acetylation of Histones) affect gene accessibility without changing the DNA sequence.</li>
            <li><strong>Environment:</strong> Environmental factors (e.g., pollution, diet) can influence gene expression (e.g., coat color in Himalayan rabbits).</li>
          </ul>
        `
      },
      {
        id: 'D3.1',
        title: 'D3.1: Reproduction',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Strategies:</strong> Asexual (Binary fission, budding) vs Sexual (fusion of gametes).</li>
            <li><strong>Gametogenesis:</strong> Spermatogenesis (continuous) vs Oogenesis (cyclical/finite).</li>
            <li><strong>Fertilization:</strong> Fusion of sperm and egg to form a zygote. Internal vs External.</li>
            <li><strong>Hormonal Control:</strong> Menstrual cycle regulated by FSH, LH, Estrogen, and Progesterone.</li>
          </ul>
        `
      },
      {
        id: 'D3.2',
        title: 'D3.2: Inheritance',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mendel's Laws:</strong> Law of Segregation and Law of Independent Assortment.</li>
            <li><strong>Genetics:</strong> Genotype vs Phenotype. Dominant vs Recessive alleles.</li>
            <li><strong>Patterns:</strong> Complete dominance, Codominance (Blood groups), Sex-linkage (Hemophilia, Color blindness).</li>
            <li><strong>Tools:</strong> Punnett grids and Pedigree charts used to predict inheritance probabilities.</li>
          </ul>
        `
      },
      {
        id: 'D4.1',
        title: 'D4.1: Natural Selection',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mechanism:</strong> Variation exists -> Overproduction of offspring -> Struggle for existence -> Differential survival/reproduction.</li>
            <li><strong>Variation Sources:</strong> Mutation, Meiosis, Sexual Reproduction.</li>
            <li><strong>Adaptation:</strong> Characteristics that make an individual suited to its environment increase.</li>
            <li><strong>Example:</strong> Antibiotic resistance in bacteria (rapid evolution due to short generation time).</li>
          </ul>
        `
      },
      {
        id: 'D4.2',
        title: 'D4.2: Stability and Change',
        content: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Hardy-Weinberg:</strong> Allele frequencies remain constant in a population unless acted upon by evolutionary forces (HL).</li>
            <li><strong>Stability:</strong> Ecosystems show stability over time but can change due to disturbances (Succession).</li>
            <li><strong>Feedback:</strong> Negative feedback loops maintain stability (Homeostasis); Positive feedback drives change.</li>
          </ul>
        `
      },
      {
        id: 'D-NOS',
        title: 'Nature of Science (NOS) - Theme D',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Reliability:</strong> The high fidelity of DNA replication ensures genetic continuity, while enzymes proofread to minimize errors (D1.1).</li>
             <li><strong>Serendipity:</strong> The discovery of cyclins was accidental during research on protein synthesis in sea urchins (D2.1).</li>
             <li><strong>Ethical Implications:</strong> The ability to edit genes via CRISPR raises significant ethical questions regarding 'designer babies' and germline modification (D1.3).</li>
             <li><strong>Paradigm Shifts:</strong> The concept of 'junk DNA' has shifted as non-coding regions are found to have regulatory functions (D2.2).</li>
             <li><strong>Quantitative Data:</strong> Mendel's use of large sample sizes and statistical analysis was crucial in establishing the laws of inheritance (D3.2).</li>
          </ul>
        `
      },
      {
        id: 'D-Skills',
        title: 'Approaches to Learning (Skills) - Theme D',
        content: `
          <ul class="list-disc pl-5 space-y-1">
             <li><strong>Karyotyping:</strong> Analysis of karyograms to identify chromosomal abnormalities like Down Syndrome (D2.1).</li>
             <li><strong>PCR:</strong> Understanding the practical application of PCR in forensics and medical diagnostics (D1.1).</li>
             <li><strong>Prediction:</strong> Using Punnett grids to predict genotypic and phenotypic ratios of offspring (D3.2).</li>
             <li><strong>Pedigree Analysis:</strong> Deducing patterns of inheritance (autosomal/sex-linked, dominant/recessive) from family trees (D3.2).</li>
             <li><strong>Chi-Squared Test:</strong> Comparing observed vs expected phenotypic ratios to determine if genes are linked (D3.2 HL).</li>
             <li><strong>Microscopy:</strong> Identification of phases of mitosis in root tip squashes (D2.1).</li>
          </ul>
        `
      }
    ]
  }
];

export const TRACKER_URL = "https://sites.google.com/beaconschool.com.br/ibbiologytracker2025/in%C3%ADcio";
export const KOGNITY_URL = "https://app.kognity.com/study/app/dashboard";