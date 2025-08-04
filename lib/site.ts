// config/site.ts
import { 
  Heart, 
  Brain, 
  Bone, 
  Stethoscope, 
  Ear, 
  Pill,
  Leaf
} from "lucide-react";

export const siteConfig = {
  name: "Veda Multispeciality Clinic",
  footerDescription:
    "Expert medical care with trusted specialists in South Bopal, Ahmedabad. Personalized, compassionate healthcare for your family.",
  phone: "078610 47633",
  email: "vedamultispecialityclinic@gmail.com",
  infoAddress:'South Bopal, Ahmedabad',
  infoTime:'Mon-Sat: 9:00 AM - 9:00 PM | Sun: 9:00 AM - 1:00 PM',
  address: `114,115, Saanvi nirman stellar, opp. skysole appartment, South Bopal, Ahmedabad, Gujarat 380058`,
  logo: "/b4dac46e-f71a-442e-be96-f7a841eaaf16.png",
  logoTitle:'Trusted Medical Care',
  locationLink:"https://maps.app.goo.gl/PsHCy8FurKeXKyfNA",
  monToSat:"9:00 AM - 9:00 PM",
  sunday:"9:00 AM - 1:00 PM",
  
  social: {
    facebook: "https://www.facebook.com/vedamultispecialityclinic",
    instagram: "https://www.instagram.com/veda_multispeciality_clinic_",
  },
  hours: {
    weekdays: "Mon–Sat: 9AM – 9PM",
    sunday: "Sun: 9AM – 1PM",
  },
  heroSection:{
    title:"Expert Medical Care",
    subTitle:'You Can Trust',
    description:"Veda Multi Speciality Clinic offers comprehensive healthcare with experienced specialists in South Bopal, Ahmedabad. Led by Dr. Bela Donga and Dr. Radhika Patoriya, we provide personalized, compassionate care for all your medical needs.",
    keyBenifits:[
      'Same-day appointments',
      'Multiple specialties',
      'Experienced doctors',
      'Personalized care'
    ],
    states:[
      {title:'Specialties',state:'8+',icon:'Users'},
      {title:'Hours Daily',state:'12',icon:'Clock'},
      {title:'Doctors',state:'Expert',icon:'Award'},
      {title:'Day Care',state:'Same',icon:'Award'},

    ]

  },
  servicesSection:{
    title:'Our Medical Specialties',
    subTitle:'Comprehensive healthcare services with experienced specialists dedicated to your wellbeing',
  },
  doctorsSection:{
    title:'Meet Our Expert Doctors',
    subTitle:"Our experienced medical professionals are dedicated to providing you with the highest quality care",
    subSectionTitle:"Comprehensive Care Team",
    subSectionDescription:"In addition to our lead physicians, we work with a network of specialist consultants to ensure you receive the most appropriate care for your specific needs."
  },
  contactSection:{
    title:"Contact Us Today",
    subTitle:"Ready to take care of your health? Get in touch with us for appointments and inquiries",
  },
  copyright: `© ${new Date().getFullYear()} Veda Multispeciality Clinic. All rights reserved | Trusted healthcare in South Bopal, Ahmedabad.`,
  seo: {
    title: "Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad",
    description:
      "Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons, General Physicians, orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.",
    keywords: [
      "veda clinic",
      "ENT doctor South Bopal",
      "multispeciality clinic Ahmedabad",
      "pediatrician South Bopal",
    ],
  },
};

export const services = [
  {
    icon: Stethoscope,
    title: "General Physician",
    description: "Comprehensive primary care for fever, typhoid, allergies, and chronic illnesses.",
    doctor: "Dr. Bela Donga"
  },
  {
    icon: Ear,
    title: "ENT Surgery",
    description: "Expert treatment for sinusitis, hearing loss, and ear, nose, throat conditions.",
    doctor: "Dr. Radhika Patoriya"
  },
  // {
  //   icon: Activity,
  //   title: "MD Physician",
  //   description: "Advanced internal medicine and specialized diagnostic care.",
  //   doctor: ""
  // },
  {
    icon: Bone,
    title: "Orthopedic Surgery",
    description: "Bone, joint, and musculoskeletal treatments and surgical interventions.",
    doctor: ""
  },
  {
    icon: Pill,
    title: "Gastroenterology",
    description: "Digestive system disorders and gastrointestinal health management.",
    doctor: ""
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Heart health, cardiovascular disease prevention and treatment.",
    doctor: ""
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Neurological disorders and brain health specialized care.",
    doctor: ""
  },
  {
    icon: Leaf,
    title: "Panchkarma Specialist",
    description: "Traditional Ayurvedic detoxification and wellness treatments.",
    doctor: ""
  }
];

export const doctors = [
  {
    name: "Dr. Bela Donga",
    specialty: "General Physician",
    experience: "Expert in primary care",
    conditions: ["Fever", "Typhoid", "Chronic Illnesses", "Allergies", "Preventive Care"],
    image: null
  },
  {
    name: "Dr. Radhika Patoriya",
    specialty: "ENT Surgeon",
    experience: "Specialist surgeon",
    conditions: ["Sinusitis", "Hearing Loss", "Throat Conditions", "Nasal Disorders", "ENT Surgery"],
    image: null
  }
];

export const areas = [
  "South Bopal",
  "Shela",
  "Ghuma",
  "Bopal",
  "Surrounding Areas"
]

