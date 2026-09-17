export interface NavigationItem {
  name: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface HotspotItem {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
  techSpec: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'ski' | 'ride' | 'minus-temp' | 'rainwear' | 'industrial' | 'shells' | 'insulation' | 'pants' | 'active' | 'workwear' | string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  specs: {
    waterproofRating?: string;
    breathability?: string;
    weight?: string;
    construction: string;
    recommendedFabric: string;
    leadTime: string;
    moq: string;
  };
  features: string[];
  featured?: boolean;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  highlights: string[];
  equipment: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  code: string;
  composition: string;
  weightGsm: string;
  waterproofMmh2o?: string;
  breathabilityMvp?: string;
  textureImage: string;
  characteristics: string[];
  bestFor: string;
  ecoCredential?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface QualityStandard {
  id: string;
  title: string;
  standardCode: string;
  description: string;
  inspectionMethod: string;
  iconName: string;
}

export interface SustainabilityPillar {
  id: string;
  title: string;
  targetOrStatus: string;
  description: string;
  initiatives: string[];
  iconName: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  region: string;
  specialization: string;
  tier: string;
  logoText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CompanyConfig {
  name: string;
  shortName?: string;
  legalName: string;
  logoUrl?: string;
  established: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  machineTechnology?: string;
  materialModel?: string;
  email: string;
  salesEmail: string;
  phone: string;
  whatsapp: string;
  address: {
    street: string;
    district: string;
    city: string;
    country: string;
    postalCode: string;
  };
  factorySpecs: {
    productionLines: string;
    monthlyCapacityEstimate: string;
    sampleLeadTime: string;
    bulkLeadTime: string;
    standardMoq: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    youtube: string;
  };
}
