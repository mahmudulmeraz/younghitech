import {
  CompanyConfig,
  NavigationItem,
  MetricItem,
  HotspotItem,
  ProductItem,
  CapabilityItem,
  MaterialItem,
  ProcessStep,
  QualityStandard,
  SustainabilityPillar,
  ClientPartner,
  FAQItem,
} from '../types';

// Default configuration with newly requested products, China & German machinery, and imported raw materials
const defaultConfig = {
  company: {
    name: 'Young Hi Tech Technical Wear Ltd.',
    shortName: 'Young Hi Tech',
    legalName: 'Young Hi Tech Technical Wear Ltd.',
    logoUrl: '/images/logo.png',
    established: 'B2B Technical Apparel Manufacturer',
    tagline: 'Technical Wear Manufacturing Built for Global Brands',
    heroHeadline: 'Engineered Apparel. Built for Global Brands.',
    heroSubheadline:
      'Specialized OEM & ODM assembly using German & Chinese precision machinery. We import certified raw materials globally and assemble high-performance skiwear, moto ride gear, sub-zero down jackets, technical rainwear, and industrial workwear with zero-defect quality control.',
    machineTechnology: 'German & China Advanced Automated Machinery',
    materialModel: '100% Imported Raw Materials with Certified In-House Technical Assembly',
    email: 'inquiry@younghitechwear.com',
    salesEmail: 'rfq@younghitechwear.com',
    phone: '+880 2 983 4521',
    whatsapp: '+880 171 000 8899',
    address: {
      street: 'Plot 42-45, High-Tech Industrial Zone, Export Processing Zone',
      district: 'Sector 7, Gazipur',
      city: 'Dhaka',
      country: 'Bangladesh',
      postalCode: '1704',
    },
    factorySpecs: {
      productionLines: '18 Dedicated Technical Lines',
      monthlyCapacityEstimate: '85,000 Pcs/Month',
      sampleLeadTime: '7-12 Working Days',
      bulkLeadTime: '45-65 Days (Ex-Factory)',
      standardMoq: '500 Pcs / Colorway',
    },
    social: {
      linkedin: 'https://linkedin.com/company/young-hi-tech',
      instagram: 'https://instagram.com/younghitechwear',
      youtube: 'https://youtube.com',
    },
  } as CompanyConfig,

  navigation: [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'about' },
    { name: 'Products', href: 'products' },
    { name: 'Capabilities', href: 'capabilities' },
    { name: 'Materials', href: 'materials' },
    { name: 'Quality', href: 'quality' },
    { name: 'Sustainability', href: 'sustainability' },
    { name: 'Partners', href: 'partners' },
    { name: 'Contact', href: 'contact' },
  ] as NavigationItem[],

  heroAssets: {
    factoryImage: '/images/factory.jpg',
    garmentMacroImage: '/images/macro-detail.jpg',
    modelLookbookImage: '/images/model.jpg',
    qualityLabImage: '/images/quality-lab.jpg',
  },

  // Centralized Metrics (Configurable)
  metrics: [
    {
      id: 'capacity',
      value: '85,000+',
      suffix: 'PCS / MO',
      label: 'Monthly Production Capacity',
      sublabel: 'Dedicated clean-room & technical lines',
      iconName: 'Factory',
    },
    {
      id: 'materials',
      value: '100%',
      suffix: 'IMPORTED FABRICS',
      label: 'Global Raw Materials',
      sublabel: 'Japan, Germany, Korea, Taiwan & China mills',
      iconName: 'Layers',
    },
    {
      id: 'machinery',
      value: 'DE & CN',
      suffix: 'TECH EQUIPMENT',
      label: 'German & China Machinery',
      sublabel: 'Ardmel hot-air seamers & CNC laser cutting',
      iconName: 'Cpu',
    },
    {
      id: 'onTime',
      value: '99.2%',
      suffix: 'ON-TIME OTD',
      label: 'Global Delivery Precision',
      sublabel: 'Direct container port export compliance',
      iconName: 'Clock',
    },
  ] as MetricItem[],

  // Interactive Technical Hotspot Data for Feature Explorer
  hotspots: [
    {
      id: 'hotspot-hood',
      x: 48,
      y: 16,
      title: 'Helmet-Compatible 3-Way Storm Hood',
      description: 'Laminated stiffened brim with internal Cohaesive™ embedded cord-lock adjusters for alpine skiing, riding, and sub-zero blizzard protection.',
      techSpec: 'Engineered for ski & moto helmet fitment with anti-draft chin guard',
    },
    {
      id: 'hotspot-zip',
      x: 52,
      y: 38,
      title: 'German & Japanese Waterproof Sealing',
      description: 'YKK® Aquaguard® matte polyurethane water-repellent zippers combined with laser-cut zipper garages and micro-taped internal backing.',
      techSpec: 'Waterproof rating: 25,000 mm H₂O | Zero water ingress',
    },
    {
      id: 'hotspot-fabric',
      x: 28,
      y: 44,
      title: '100% Imported Technical Shell Membrane',
      description: 'Imported 3-layer technical membrane providing extreme hydrostatic resistance while allowing vapor transmission during intense activity.',
      techSpec: 'WP: 28,000 mm H₂O | MVP: 25,000 g/m²/24h',
    },
    {
      id: 'hotspot-seam',
      x: 34,
      y: 60,
      title: 'German Ardmel Hot-Air Taped Seams',
      description: 'Ultrasonic welding and 13mm German Ardmel hot-air micro-tape sealing eliminating needle penetration holes completely.',
      techSpec: '13mm 3-layer Bemis® polyurethane hot-air heat-seal',
    },
    {
      id: 'hotspot-cuff',
      x: 72,
      y: 78,
      title: 'Die-Cut Hypalon Adjustable Storm Cuffs',
      description: 'Laser-contoured hypalon adjustment tab bonded without thread fraying, cold-crack rated to -35°C for extreme sub-zero weather.',
      techSpec: 'High-cycle molded hook closure with internal Lycra thumb loops',
    },
  ] as HotspotItem[],

  // Replaced Products: Ski, Ride, Minus Temp Jacket, Rainwear, Industrial Heavy Jacket
  products: [
    {
      id: 'alpine-pro-ski-jacket',
      title: 'Alpine Pro 3L Technical Ski Jacket',
      category: 'ski',
      categoryLabel: 'Ski & Snow Wear',
      shortDescription: 'High-performance 3-layer ski and snowboard jacket with integrated stretch powder skirt, RECCO® avalanche reflector, and helmet-compatible storm hood.',
      fullDescription: 'Engineered specifically for international winter sports and alpine ski brands. Features fully taped 3-layer waterproof-breathable laminate (20,000mm / 20,000g), integrated stretch snow powder skirt with grip silicone, waterproof pit-zips, RFID ski-pass pocket, and RECCO® rescue radar reflector.',
      image: '/images/ski-jacket.jpg',
      tags: ['Ski Outerwear', 'Powder Skirt', 'RECCO® Reflector', '20K/20K 3L', 'German Seam Taped'],
      specs: {
        waterproofRating: '20,000 mm H₂O',
        breathability: '20,000 g/m²/24h',
        weight: '560g (Men Size M)',
        construction: 'German Ardmel hot-air 13mm seam sealing + laser-cut vents',
        recommendedFabric: 'Imported 70D Recycled Nylon 3L with Hydrophilic Membrane',
        leadTime: '55-60 Days',
        moq: '400 pcs/color',
      },
      features: [
        'Detachable internal snow powder skirt with jacket-to-pant attachment loops',
        'Built-in RECCO® Advanced Rescue Reflector inside right sleeve',
        'Helmet-compatible 3-point storm hood with laminated visor',
        'Laser-cut underarm ventilation with double-pull waterproof zippers',
        'Dedicated RFID zippered ski-pass forearm pocket and internal goggle mesh pocket',
      ],
      featured: true,
    },
    {
      id: 'apex-ride-technical-jacket',
      title: 'Apex Moto & Cycle Technical Ride Jacket',
      category: 'ride',
      categoryLabel: 'Ride & Moto Technical',
      shortDescription: 'Ergonomic technical riding jacket featuring CE-armor pockets, Cordura® 500D abrasion panels, pre-curved riding cut, and dynamic ventilation.',
      fullDescription: 'Designed for motorcycle, gravel, and urban commuting technical brands. Constructed with heavy-duty Cordura® 500D impact zones, ergonomic pre-curved sleeve articulation for riding posture, internal mesh pockets for CE Level 2 armor protectors, and 3M Scotchlite™ high-visibility reflective elements.',
      image: '/images/ride-jacket.jpg',
      tags: ['Ride & Moto', 'Cordura® 500D', 'CE Armor Pockets', 'Ergonomic Articulation', '3M Reflective'],
      specs: {
        waterproofRating: '15,000 mm H₂O',
        breathability: '18,000 g/m²/24h',
        weight: '720g (Without Armor)',
        construction: 'Heavy-duty multi-needle Chinese automated stitching + sealed stress points',
        recommendedFabric: 'Imported Cordura® 500D Ripstop + Breathable Technical Softshell',
        leadTime: '50-60 Days',
        moq: '300 pcs/color',
      },
      features: [
        'Reinforced Cordura® 500D abrasion panels on shoulders and elbows',
        'Interior mesh pockets configured for shoulder, elbow, and back CE armor inserts',
        'Pre-curved ergonomic sleeve articulation tailored for forward riding posture',
        'Waterproof zippered chest and bicep dynamic airflow scoop vents',
        '360-degree 3M Scotchlite™ bonded reflective accents for low-light road safety',
      ],
      featured: true,
    },
    {
      id: 'arctic-minus-temp-down-parka',
      title: 'Arctic Sub-Zero -30°C Expedition Down Parka',
      category: 'minus-temp',
      categoryLabel: 'Minus Temp Jacket',
      shortDescription: 'Extreme sub-zero expedition down parka filled with 850 fill-power hydrophobic RDS goose down with box-wall baffled construction and thermal draft barriers.',
      fullDescription: 'Engineered to withstand sub-zero polar blizzards and high-altitude mountain expeditions down to -30°C. Features automated Chinese pneumatic vacuum down injection for uniform fill distribution, box-wall baffled construction preventing cold spots, storm collar draft tube, and heavy-duty 2-way front zipper.',
      image: '/images/down-jacket.jpg',
      tags: ['Sub-Zero -30°C', '850 FP Down', 'Box-Wall Baffle', 'Pneumatic Filled', 'Storm Hood'],
      specs: {
        waterproofRating: '18,000 mm Face Laminate',
        breathability: '15,000 g/m²/24h',
        weight: '890g (Size L)',
        construction: 'Box-wall baffled down chambering + Chinese pneumatic vacuum injection',
        recommendedFabric: 'Imported Toray 30D High-Tenacity Down-Proof Ripstop with DWR',
        leadTime: '60-70 Days',
        moq: '300 pcs/color',
      },
      features: [
        'RDS-certified 850 fill-power water-resistant hydrophobic goose down',
        'Independent box-wall baffle construction completely eliminating stitching cold spots',
        'Heavy-duty 2-way center front VISLON® zip with oversized dual insulated storm flaps',
        'Deep thermal tunnel hood with internal elastic baffle to seal out polar drafts',
        'Internal stretch-mesh cargo pockets for thermal water bottles and sub-zero gloves',
      ],
      featured: true,
    },
    {
      id: 'stormshield-packable-rainwear',
      title: 'StormShield Ultralight Packable Rainwear Jacket',
      category: 'rainwear',
      categoryLabel: 'Technical Rainwear',
      shortDescription: 'Ultra-packable 100% waterproof rainwear jacket with 25,000mm hydrostatic head, hot-air welded taped seams, and integrated pocket packability.',
      fullDescription: 'A modern technical rainwear silhouette engineered for wet-weather performance. Weighing under 210g, it packs into its own internal chest pocket. Equipped with German hot-air micro-tape sealing on all seams, elasticized contour storm hood, water-repellent zipper, and PFC-free C0 durable water repellent.',
      image: '/images/rainwear-jacket.jpg',
      tags: ['Rainwear', '25,000 mm Waterproof', 'Packable 210g', 'Fully Taped', 'PFC-Free DWR'],
      specs: {
        waterproofRating: '25,000 mm H₂O',
        breathability: '24,000 g/m²/24h',
        weight: '210g',
        construction: 'German Ardmel hot-air seam micro-taping throughout',
        recommendedFabric: 'Imported 2.5L Recycled Polyester Micro-Ripstop with Hydrophilic Coating',
        leadTime: '45-50 Days',
        moq: '500 pcs/color',
      },
      features: [
        '100% hot-air welded seams certified to exceed 25,000 mm water column pressure',
        'Self-stowing design packs cleanly into interior chest zip pocket with clip loop',
        'Contoured storm hood with single-pull rear cinch for unrestricted peripheral vision',
        'Water-beading PFC-free C0 eco-friendly durable water repellent (DWR) finish',
        'Elasticized hem and storm cuffs preventing water ingress during driving rainstorms',
      ],
      featured: true,
    },
    {
      id: 'titan-industrial-heavy-jacket',
      title: 'Titan Heavy-Duty Certified Industrial Workwear Parka',
      category: 'industrial',
      categoryLabel: 'Industrial Heavy Jacket',
      shortDescription: 'High-visibility EN ISO 20471 Class 3 certified heavy-duty industrial workwear parka with flame-retardant finish, oil & chemical repellent coating, and ballistic reinforcement.',
      fullDescription: 'Built for extreme industrial environments, offshore operations, and highway infrastructure crews. Certified to EN ISO 20471 (Class 3 Hi-Vis) and EN 343 (Protection Against Rain). Features heavy-duty ballistic Oxford reinforcement on high-friction zones, certified 3M Scotchlite™ reflective tape bands, and industrial brass zippers.',
      image: '/images/industrial-jacket.jpg',
      tags: ['Industrial Heavy', 'EN ISO 20471 Class 3', 'EN 343 Rainwear', 'Flame Retardant', 'Ballistic Oxford'],
      specs: {
        waterproofRating: '16,000 mm H₂O',
        breathability: '12,000 g/m²/24h',
        weight: '1,150g',
        construction: 'Multi-needle reinforced structural seams + waterproof taped body',
        recommendedFabric: 'Imported 300D Heavy Polyester Oxford with PU Coating & Teflon Finish',
        leadTime: '50-60 Days',
        moq: '500 pcs/color',
      },
      features: [
        'Certified to EN ISO 20471 Class 3 high-visibility and EN 343 Class 3:3 foul weather standards',
        '50mm wide 3M Scotchlite™ industrial wash-durable heat-sealed reflective bands',
        'Heavy-duty ballistic Oxford reinforcements on elbows, shoulders, and lower back',
        'Oil, grease, and chemical repellent coating with flame-retardant anti-static finish',
        'Two oversized dual-entry cargo pockets with drainage eyelets and heavy storm flaps',
      ],
      featured: true,
    },
  ] as ProductItem[],

  // Capabilities: German & China Machinery and In-House Assembly
  capabilities: [
    {
      id: 'seam-sealing',
      number: '01',
      title: 'German Ardmel Hot-Air Seam Sealing',
      shortDesc: 'Precision hot-air seam taping machines imported from Germany ensuring 100% waterproof integrity.',
      detailedDesc: 'Our sealed cleanroom facilities deploy 35+ German Ardmel hot-air seam sealing units capable of applying 8mm, 13mm, and 20mm 3-layer Bemis® polyurethane tapes onto curved raglan sleeves and multi-layer crotch junctions without scorch marks.',
      iconName: 'ShieldCheck',
      highlights: ['35+ German Ardmel seaming stations', 'Micro-tape 8mm & 13mm capability', 'Continuous peel test calibration'],
      equipment: ['Ardmel Mk4 Hot Air Seamers (Germany)', 'Bemis Polyurethane Tapes', 'Pneumatic Pressure Regulators'],
    },
    {
      id: 'laser-cutting',
      number: '02',
      title: 'Chinese Automated CNC Laser Cutting',
      shortDesc: 'Automated computerized laser cutting tables ensuring 0.1mm tolerance and zero edge-fray.',
      detailedDesc: 'Utilizing advanced Chinese GoldenLaser automated CNC optical cutting systems, we cut multi-ply technical laminates with sub-millimeter precision. The sealed laser beam cauterizes fabric edges automatically, preventing synthetic micro-thread fraying and optimizing fabric nesting yield.',
      iconName: 'Cpu',
      highlights: ['0.1mm cut tolerance repeatability', 'Automatic sealed edge cauterization', 'High-speed automated nesting'],
      equipment: ['GoldenLaser Vision CNC Cutters (China)', 'Lectra Automatic Spreading Tables', 'CAD Optitex Nesting Software'],
    },
    {
      id: 'ultrasonic-bonding',
      number: '03',
      title: 'Ultrasonic Welding & Stitch-Free Bonding',
      shortDesc: 'Acoustic horn sound-wave bonding that melts synthetic fibers without any needle holes.',
      detailedDesc: 'Ultrasonic bonding eliminates traditional thread seams for internal pocket bags, laser-cut chest vents, and storm flaps. High-frequency acoustic vibrations fuse synthetic thermoplastic polymer layers instantly, delivering flat, ultra-clean aesthetic lines and superior waterproof durability.',
      iconName: 'Zap',
      highlights: ['Zero needle penetrations', 'Flat stitch-free profile', 'Superior tensile bond strength'],
      equipment: ['Pfaff Ultrasonic Welding Units (Germany)', 'Sonobond Acoustic Presses', 'Laser Hemming Equipment'],
    },
    {
      id: 'down-injection',
      number: '04',
      title: 'Chinese Pneumatic Down Chamber Injection',
      shortDesc: 'Computerized vacuum down filling eliminating down feather leakage and ensuring exact gram weight.',
      detailedDesc: 'Sub-zero minus temperature down jackets require exact feather-to-down ratios across every single baffle. Our Chinese computerized pneumatic down injection machines measure down down to 0.1 gram precision and fill closed baffled chambers under vacuum, eliminating feather migration.',
      iconName: 'Feather',
      highlights: ['0.1g micro-metered fill accuracy', 'Vacuum chamber anti-static filling', 'RDS 850 FP certified down handling'],
      equipment: ['Automated Down Injection Machines (China)', 'Air Filtration Dust Extractors', 'Precision Micro-Scales'],
    },
    {
      id: 'imported-materials',
      number: '05',
      title: '100% Imported Raw Material Sourcing',
      shortDesc: 'All technical fabrics, membranes, down, and zippers are imported from certified international mills.',
      detailedDesc: 'We operate a pure precision assembly model: all raw materials—including 3-layer laminates, Cordura®, RDS down, Toray ripstops, and YKK® zippers—are imported directly from leading specialized mills in Japan, Germany, Korea, Taiwan, and China. We assemble, cut, seal, and test them with international ISO standards.',
      iconName: 'Layers',
      highlights: ['Direct mill import clearance', 'Certified Toray, Gore, Cordura & YKK', 'Custom color lab-dip matching'],
      equipment: ['Climate-Controlled Fabric Warehouse', '4-Point Fabric Inspection Rollers', 'Light Box Color Matching'],
    },
    {
      id: 'quality-lab',
      number: '06',
      title: 'In-House Physical Testing & AQL 1.5 QA',
      shortDesc: 'Hydrostatic pressure columns, Martindale abrasion testers, and conveyor needle detection.',
      detailedDesc: 'Every production batch undergoes mandatory physical lab testing. We test hydrostatic head water resistance up to 30,000mm, tensile seam tear strength, and 100% dual-head conveyor needle detection before cartons are sealed for international export.',
      iconName: 'CheckCircle2',
      highlights: ['Hydrostatic head test apparatus (ISO 811)', 'AQL 1.5 / 2.5 outgoing audit', '100% dual-head metal/needle detection'],
      equipment: ['Suter Hydrostatic Head Tester', 'Martindale Abrasion Apparatus', 'Hashima Metal Detectors (Japan)'],
    },
  ] as CapabilityItem[],

  // Materials Swatch Library
  materials: [
    {
      id: 'mat-3l-hard-shell',
      name: 'HydroShield Alpine 3L Ripstop',
      code: 'YHT-3L-70D',
      composition: '100% Recycled Nylon Face + Hydrophilic Membrane + 20D Tricot Backer',
      weightGsm: '165 g/m²',
      waterproofMmh2o: '28,000 mm H₂O',
      breathabilityMvp: '22,000 g/m²/24h',
      textureImage: '/images/macro-detail.jpg',
      characteristics: ['High-abrasion 70D micro-ripstop', 'PFC-free C0 DWR', 'German tape compatible'],
      bestFor: 'Technical Ski Jackets, Extreme Rainwear, Mountaineering Shells',
      ecoCredential: 'GRS Certified (Global Recycled Standard)',
    },
    {
      id: 'mat-cordura-500d',
      name: 'ImpactShield Cordura® 500D',
      code: 'YHT-COR-500',
      composition: '100% High-Tenacity Nylon 6,6 with Breathable PU Backing',
      weightGsm: '240 g/m²',
      waterproofMmh2o: '15,000 mm H₂O',
      breathabilityMvp: '12,000 g/m²/24h',
      textureImage: '/images/cordura-fabric.jpg',
      characteristics: ['Exceptional tear & abrasion resistance', 'Pre-curved ride cut ready', 'CE Armor backing'],
      bestFor: 'Moto & Cycling Ride Jackets, Industrial Workwear Reinforcements',
      ecoCredential: 'Bluesign® Approved Textile',
    },
    {
      id: 'mat-downproof-ripstop',
      name: 'AeroDown 30D Ultralight Ripstop',
      code: 'YHT-DWN-30',
      composition: '100% High-Density Toray Airtastic™ Micro-Nylon',
      weightGsm: '48 g/m²',
      waterproofMmh2o: '10,000 mm Face',
      breathabilityMvp: '18,000 g/m²/24h',
      textureImage: '/images/downproof-fabric.jpg',
      characteristics: ['Cire calendared down-proof weave', 'High-loft 850 FP retention', 'Sub-zero flexible'],
      bestFor: 'Sub-Zero Minus Temp Down Parkas, Insulated Baffle Jackets',
      ecoCredential: 'OEKO-TEX® Standard 100 Class I',
    },
    {
      id: 'mat-industrial-oxford',
      name: 'TitanWear 300D Heavy Oxford',
      code: 'YHT-IND-300',
      composition: '100% Polyester Heavy Oxford with Fluorescent Pigment & PU Coat',
      weightGsm: '210 g/m²',
      waterproofMmh2o: '16,000 mm H₂O',
      breathabilityMvp: '10,000 g/m²/24h',
      textureImage: '/images/industrial-oxford.jpg',
      characteristics: ['EN ISO 20471 certified fluorescence', 'Anti-static & oil repellent', 'Wash durable'],
      bestFor: 'Certified Industrial Workwear, High-Vis Heavy Parkas, Offshore Gear',
      ecoCredential: 'EN 343 & EN ISO 20471 Compliance',
    },
  ] as MaterialItem[],

  // Manufacturing Process (8 steps)
  process: [
    {
      stepNumber: '01',
      phase: 'Discovery & Spec Review',
      title: 'Tech Pack Analysis & BOM Formulation',
      duration: 'Day 1 - 3',
      description: 'Review your sketches, CAD files, seam tape specifications, and Bill of Materials (BOM) with our technical merchandising and pattern engineering team.',
      deliverables: ['Detailed BOM costing', 'Material nomination recommendations', 'FOB/CIF quote proposal'],
    },
    {
      stepNumber: '02',
      phase: 'Raw Material Importation',
      title: 'Global Mill Procurement & Lab Dips',
      duration: 'Day 4 - 12',
      description: 'We import technical membranes, YKK waterproof zippers, and Cordura trims directly from specialized partner mills in Japan, Germany, Korea, and Taiwan.',
      deliverables: ['Pantone color lab-dip swatches', 'Physical fabric spec sheets', 'Membrane breathability test reports'],
    },
    {
      stepNumber: '03',
      phase: 'Prototyping & Fit Validation',
      title: 'CAD Pattern Grading & Physical Sample',
      duration: 'Day 7 - 14',
      description: 'Our master pattern makers generate 3D fit simulations and assemble a first physical prototype with fully taped seams and branded hardware.',
      deliverables: ['Physical sample shipped via DHL Express', 'Graded pattern DXF/AI files', 'Fit correction review log'],
    },
    {
      stepNumber: '04',
      phase: 'Pre-Production Golden Sample',
      title: 'Final Approval & Production Marker',
      duration: 'Day 15 - 20',
      description: 'Final adjustments incorporated into a sealed "Golden Sample". Production lines, sewing jigs, and German seam-taping machine temperatures are locked.',
      deliverables: ['Sealed counter-sample sign-off', 'PP meeting technical agenda', 'Locked mass production schedule'],
    },
    {
      stepNumber: '05',
      phase: 'Automated Cutting & Seam Sealing',
      title: 'CNC Laser Cutting & German Seam Taping',
      duration: 'Day 21 - 45',
      description: 'Fabrics spread on automatic tables, cut with Chinese CNC laser systems (0.1mm tolerance), and passed into cleanrooms for German Ardmel hot-air seam taping.',
      deliverables: ['Numbered cut bundles', '100% seam tape peel audits', 'Laser-cut ventilation panels'],
    },
    {
      stepNumber: '06',
      phase: 'Precision Technical Assembly',
      title: 'Cleanroom Sewing & Down Chamber Filling',
      duration: 'Day 30 - 55',
      description: 'Garments assembled along dedicated lines. Down jackets undergo computerized pneumatic down injection; rainwear and skiwear receive waterproof zipper bonding.',
      deliverables: ['In-line inspection logs', 'Gram-accurate down verification', 'Hourly waterproof column spot tests'],
    },
    {
      stepNumber: '07',
      phase: 'Quality Testing & Inspection',
      title: 'AQL 1.5 Audit & Conveyor Metal Detection',
      duration: 'Day 50 - 60',
      description: '100% of finished jackets pass through dual-head conveyor needle detectors. Outgoing shipment audited against ISO 2859-1 (AQL 1.5 standard).',
      deliverables: ['Full third-party audit report', 'Hydrostatic head test certificates', 'Broken needle log with zero tolerance'],
    },
    {
      stepNumber: '08',
      phase: 'Customs & Global Logistics',
      title: 'Direct Export Port Clearance & Shipment',
      duration: 'Day 55 - 65',
      description: 'Cartons sealed with barcoded master cartons, moisture-absorbing silica packets, and loaded into ocean/air freight containers for direct global dispatch.',
      deliverables: ['Commercial invoice & packing list', 'Bill of Lading / Airway Bill', 'Certificate of Origin (Form A/COO)'],
    },
  ] as ProcessStep[],

  // Backward compatible alias
  get processSteps(): ProcessStep[] {
    return this.process;
  },

  // Why Partner With Us (Corporate Pillars)
  whyPartner: [
    {
      number: '01',
      title: 'German & China Machine Technology',
      desc: 'Precision German Ardmel hot-air seam taping machines and Pfaff ultrasonic bonding units paired with Chinese automated CNC laser cutters and computerized pneumatic down vacuum injectors.',
    },
    {
      number: '02',
      title: '100% Imported Certified Raw Materials',
      desc: 'All technical 3-layer waterproof membranes, Cordura® fabrics, YKK® waterproof zippers, and RDS down are imported directly from certified global mills, assembled with precision in-house.',
    },
    {
      number: '03',
      title: 'AQL 1.5 & Dual-Head Metal Detection',
      desc: 'Rigorous hydrostatic pressure column testing up to 30,000mm, seam peel validation, and 100% electromagnetic needle detection before global export.',
    },
    {
      number: '04',
      title: 'Rapid 7-12 Day Prototyping',
      desc: 'Complete tech pack engineering and prototype sample turnaround in 7 to 12 working days with 3D digital simulation and laser-cut pattern accuracy.',
    },
    {
      number: '05',
      title: 'B2B Turnkey OEM & ODM Capacity',
      desc: 'From custom capsule runs starting at 300 pieces to mass production scaling to 85,000 pieces per month across 18 dedicated technical production lines.',
    },
    {
      number: '06',
      title: 'Zero-Backend HTML Customization',
      desc: 'The entire website content, company name, logo image, phone, email, products, and machine specs can be edited directly inside index.html with instant updates.',
    },
  ],

  // Quality Standards
  qualityStandards: [
    {
      id: 'hydrostatic',
      title: 'Hydrostatic Head Pressure Testing',
      standardCode: 'ISO 811 / AATCC 127',
      description: 'Verifies waterproof membrane resistance under a pressurized vertical water column up to 30,000mm H₂O without surface seepage.',
      inspectionMethod: 'Suter Hydrostatic Test Apparatus (Spot checks every 50 pcs)',
      iconName: 'Droplets',
    },
    {
      id: 'seam-peel',
      title: 'Seam Tape Bond Peel Strength',
      standardCode: 'ASTM D1876 / DIN 53530',
      description: 'Tests mechanical adhesion strength of Bemis heat-seal tape on 3-layer and 2.5-layer technical laminates under sustained tensile pull.',
      inspectionMethod: 'Instron Universal Tensile Tester (≥ 15 N/cm minimum spec)',
      iconName: 'ShieldAlert',
    },
    {
      id: 'abrasion',
      title: 'Martindale Surface Abrasion Resistance',
      standardCode: 'ISO 12947-2 / ASTM D4966',
      description: 'Measures fabric face and Cordura reinforcement resistance to repeated rubbing under 12 kPa pressure up to 50,000+ rubs.',
      inspectionMethod: '4-Head Martindale Abrasion Machine with standard wool abradant',
      iconName: 'ScanLine',
    },
    {
      id: 'needle',
      title: '100% Conveyor Needle Detection',
      standardCode: 'Hashima Dual-Head 0.8mm Fe',
      description: 'Every single completed jacket passes through a calibrated electromagnetic metal detector before polybagging and carton packing.',
      inspectionMethod: '100% inspection with documented zero-tolerance policy',
      iconName: 'CheckCircle2',
    },
    {
      id: 'colorfastness',
      title: 'Colorfastness to Washing & Perspiration',
      standardCode: 'ISO 105-C06 / AATCC 61',
      description: 'Accelerated laundering tests verifying dye stability, zero bleed onto high-contrast panels, and membrane delamination resistance.',
      inspectionMethod: 'Rotawash Lab Washer + Multi-fiber adjacent fabric evaluation',
      iconName: 'Palette',
    },
    {
      id: 'aql',
      title: 'ISO 2859-1 (AQL 1.5 / 2.5) Outgoing Audit',
      standardCode: 'ANSI/ASQ Z1.4 Standard',
      description: 'Comprehensive outgoing batch inspection covering dimensional measurements, seam symmetry, zipper operation, and cosmetic finish.',
      inspectionMethod: 'Random statistical sampling in designated on-site inspection suites',
      iconName: 'Gauge',
    },
  ] as QualityStandard[],

  // Sustainability Pillars
  sustainability: [
    {
      id: 'materials-eco',
      title: 'Recycled & Ocean-Bound Synthetics',
      targetOrStatus: '68% of Annual Volume',
      description: 'Certified GRS (Global Recycled Standard) post-consumer recycled nylon and polyester yarns, reducing virgin fossil feedstock consumption.',
      initiatives: [
        'GRS certified recycled nylon face fabrics',
        'Biodegradable polybags and recycled FSC carton packaging',
        'PFC-free bio-based C0 durable water repellent (DWR)',
      ],
      iconName: 'Recycle',
    },
    {
      id: 'clean-energy',
      title: 'Solar Powered Manufacturing',
      targetOrStatus: '420 kWp Rooftop Array',
      description: 'Our production facility features an on-site rooftop photovoltaic installation generating clean renewable power for cutting and seam-sealing lines.',
      initiatives: [
        'Generates 35% of total daytime factory electricity',
        'Reduces annual CO₂ emissions by 380 metric tons',
        'High-efficiency servo motors on all programmable sewing units',
      ],
      iconName: 'Sun',
    },
    {
      id: 'chemical-safety',
      title: 'ZDHC Chemical & Water Discharge Compliance',
      targetOrStatus: 'ZDHC Level 3 MRSL Target',
      description: 'Strict adherence to Zero Discharge of Hazardous Chemicals guidelines across all seam sealing tapes, adhesive hot-melts, and washing formulations.',
      initiatives: [
        'Zero intentionally added PFAS / fluorochemicals',
        'Bluesign® system partner certified chemical inputs',
        'Closed-loop water recycling in textile testing laboratory',
      ],
      iconName: 'Leaf',
    },
  ] as SustainabilityPillar[],

  // Client Partners (For infinite right-to-left marquee)
  clients: [
    {
      id: 'client-nordic',
      name: 'Nordic Alpine Gear',
      region: 'Sweden / Norway',
      specialization: 'Extreme Technical Skiwear',
      tier: 'Strategic OEM',
      logoText: 'NORDIC ALPINE',
    },
    {
      id: 'client-rainier',
      name: 'Rainier Mountain Equipment',
      region: 'Seattle, USA',
      specialization: 'Sub-Zero Expedition Down Parkas',
      tier: 'Strategic OEM',
      logoText: 'RAINIER MT',
    },
    {
      id: 'client-munich',
      name: 'Munich Technical Systems',
      region: 'Germany',
      specialization: 'Moto & Cycling Technical Ride Gear',
      tier: 'Private Label Turnkey',
      logoText: 'MUNICH TECH',
    },
    {
      id: 'client-tokyo',
      name: 'Tokyo Ridge Wear',
      region: 'Japan',
      specialization: 'Ultralight Packable Rainwear',
      tier: 'Collaborative ODM',
      logoText: 'TOKYO RIDGE',
    },
    {
      id: 'client-vancouver',
      name: 'Vancouver Outerwear Co.',
      region: 'Canada',
      specialization: '3L Storm Hard Shells',
      tier: 'Strategic OEM',
      logoText: 'VANCOUVER CO',
    },
    {
      id: 'client-alpine-swiss',
      name: 'Alpine Swiss Pro',
      region: 'Switzerland',
      specialization: 'Certified Industrial & Mountain Workwear',
      tier: 'Turnkey Contract',
      logoText: 'SWISS PRO',
    },
    {
      id: 'client-chamonix',
      name: 'Chamonix Lab Gear',
      region: 'France',
      specialization: 'Alpine Mountain Guides Apparel',
      tier: 'Specialized ODM',
      logoText: 'CHAMONIX',
    },
    {
      id: 'client-patagonia',
      name: 'Highlands Technical Wear',
      region: 'United Kingdom',
      specialization: 'Certified Heavy Industrial Workwear',
      tier: 'Industrial Contract',
      logoText: 'HIGHLANDS',
    },
  ] as ClientPartner[],

  // FAQ
  faq: [
    {
      category: 'MOQ & Sourcing',
      question: 'What are your standard Minimum Order Quantities (MOQ)?',
      answer: 'Our standard MOQ is 300 to 500 pieces per style/colorway depending on garment complexity. For specialized capsule runs or initial brand launch validation, flexible trial cells of 200 pieces can be accommodated with a modest setup surcharge.',
    },
    {
      category: 'Machinery & Technology',
      question: 'What machinery and technology does your factory deploy?',
      answer: 'We deploy a combination of German and Chinese industrial equipment. Seam taping and ultrasonic welding are handled with German Ardmel and Pfaff machinery for leak-proof waterproof seams. High-speed pattern spreading, CNC laser cutting, multi-needle pattern stitching, and pneumatic vacuum down injection are powered by precision Chinese automated systems.',
    },
    {
      category: 'Raw Materials & Assembly',
      question: 'Where do the raw materials come from?',
      answer: 'We operate a specialized precision assembly model: 100% of technical fabrics, 3-layer waterproof membranes, YKK waterproof zippers, Cordura reinforcements, high-loft down, and reflective trims are imported from certified global mills in Japan, Germany, Korea, Taiwan, and China. We assemble, cut, seal, weld, and inspect everything in-house with AQL 1.5 quality control.',
    },
    {
      category: 'Turnaround Times',
      question: 'What are your typical sampling and bulk production lead times?',
      answer: 'Prototype development and fit samples take 7 to 12 working days once tech packs and fabrics are on hand. Bulk production typically requires 45 to 65 days ex-factory following confirmation of the pre-production sample.',
    },
    {
      category: 'Customization & Tech Packs',
      question: 'Can we customize styles or do you only manufacture our exact tech packs?',
      answer: 'Both! We operate full turnkey OEM (manufacturing strictly from your proprietary tech packs, grading rules, and CAD files) as well as collaborative ODM (where you can customize fit, colors, and branding onto our validated technical silhouettes).',
    },
    {
      category: 'Quality & Compliance',
      question: 'How do you guarantee waterproof seams and zero defects?',
      answer: 'Every seam-taped style undergoes daily peel strength testing and hourly hydrostatic pressure tests (up to 30,000mm water column). Furthermore, 100% of finished cartons pass through dual-head conveyor needle detectors and are audited against ISO 2859-1 (AQL 1.5). Third-party inspection teams (SGS, Intertek, Bureau Veritas) are welcomed at our on-site audit suites.',
    },
  ] as FAQItem[],
};

// Deep merge helper so any non-technical user can customize everything directly inside index.html!
function deepMerge<T>(target: T, source: any): T {
  if (!source || typeof source !== 'object') return target;
  const output = { ...target } as any;
  for (const key of Object.keys(source)) {
    if (source[key] !== undefined && source[key] !== null) {
      if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        output[key] = deepMerge(output[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;
}

// Check if user specified window.SITE_CONFIG inside index.html
const userConfig = typeof window !== 'undefined' ? (window as any).SITE_CONFIG : undefined;

export const siteConfig = deepMerge(defaultConfig, userConfig || {});
