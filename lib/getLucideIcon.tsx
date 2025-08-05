import {
  Heart,
  Brain,
  Bone,
  Stethoscope,
  Ear,
  Pill,
  Leaf,
  CircleHelp
} from "lucide-react";
const IconMap = {
  Heart,
  Brain,
  Bone,
  Stethoscope,
  Ear,
  Pill,
  Leaf
} as const;

export function getLucideIcon(iconName: string) {
 return IconMap[iconName as keyof typeof IconMap] ?? CircleHelp;
}