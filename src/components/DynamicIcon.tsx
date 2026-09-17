import React from 'react';
import {
  Factory,
  Layers,
  ShieldCheck,
  Clock,
  CheckCheck,
  Cpu,
  Shield,
  Zap,
  Crosshair,
  Feather,
  Sparkles,
  Droplets,
  CheckCircle2,
  ShieldAlert,
  ScanLine,
  Palette,
  Gauge,
  Recycle,
  Sun,
  Leaf,
  ChevronRight,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Check,
  X,
  Menu,
  ExternalLink,
  Search,
  Filter,
  FileText,
  SlidersHorizontal,
  Compass,
  Award,
  Globe,
  HelpCircle,
  Eye,
  Send,
  UploadCloud,
  CheckCircle,
  Briefcase
} from 'lucide-react';

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = { className: className || 'w-5 h-5' };
  switch (name) {
    case 'Factory': return <Factory {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'ClockCheck': return <CheckCheck {...iconProps} />;
    case 'Clock': return <Clock {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Shield': return <Shield {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Crosshair': return <Crosshair {...iconProps} />;
    case 'Feather': return <Feather {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Droplets': return <Droplets {...iconProps} />;
    case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
    case 'ShieldAlert': return <ShieldAlert {...iconProps} />;
    case 'ScanLine': return <ScanLine {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Gauge': return <Gauge {...iconProps} />;
    case 'Recycle': return <Recycle {...iconProps} />;
    case 'Sun': return <Sun {...iconProps} />;
    case 'Leaf': return <Leaf {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'Briefcase': return <Briefcase {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
}
