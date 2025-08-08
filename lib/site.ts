// config/site.ts


export const siteConfig = {
  name: "Veda Multispeciality Clinic",
  footerDescription:
    "Expert medical care with trusted specialists in South Bopal, Ahmedabad. Personalized, compassionate healthcare for your family.",
  phone: "078610 47633",
  email: "vedamultispecialityclinic@gmail.com",
  infoAddress: 'South Bopal, Ahmedabad',
  infoTime: 'Mon-Sat: 9:00 AM - 9:00 PM | Sun: 9:00 AM - 1:00 PM',
  address: `114,115, Saanvi nirman stellar, opp. skysole appartment, South Bopal, Ahmedabad, Gujarat 380058`,
  logo: "/b4dac46e-f71a-442e-be96-f7a841eaaf16.png",
  logoTitle: 'Trusted Medical Care',
  locationLink: "https://maps.app.goo.gl/PsHCy8FurKeXKyfNA",
  monToSat: "9:00 AM - 9:00 PM",
  sunday: "9:00 AM - 1:00 PM",

  social: {
    facebook: "https://www.facebook.com/vedamultispecialityclinic",
    instagram: "https://www.instagram.com/veda_multispeciality_clinic_",
  },
  hours: {
    weekdays: "Mon–Sat: 9AM – 9PM",
    sunday: "Sun: 9AM – 1PM",
  },
  heroSection: {
    title: "Expert Medical Care",
    subTitle: 'You Can Trust',
    description: "Veda Multi Speciality Clinic offers comprehensive healthcare with experienced specialists in South Bopal, Ahmedabad. Led by Dr. Bela Donga and Dr. Radhika Patoriya, we provide personalized, compassionate care for all your medical needs.",
    keyBenifits: [
      'Same-day appointments',
      'Multiple specialties',
      'Experienced doctors',
      'Personalized care'
    ],
    states: [
      { title: 'Specialties', state: '8+', icon: 'Users' },
      { title: 'Hours Daily', state: '12', icon: 'Clock' },
      { title: 'Doctors', state: 'Expert', icon: 'Award' },
      { title: 'Day Care', state: 'Same', icon: 'Award' },

    ]

  },
  servicesSection: {
    title: 'Our Medical Specialties',
    subTitle: 'Comprehensive healthcare services with experienced specialists dedicated to your wellbeing',
  },
  doctorsSection: {
    title: 'Meet Our Expert Doctors',
    subTitle: "Our experienced medical professionals are dedicated to providing you with the highest quality care",
    subSectionTitle: "Comprehensive Care Team",
    subSectionDescription: "In addition to our lead physicians, we work with a network of specialist consultants to ensure you receive the most appropriate care for your specific needs."
  },
  contactSection: {
    title: "Contact Us Today",
    subTitle: "Ready to take care of your health? Get in touch with us for appointments and inquiries",
  },
  copyright: `Trusted healthcare in South Bopal, Ahmedabad.`,
  seo: {
    title: "Veda Multispeciality Clinic - Expert Medical Care in South Bopal, Ahmedabad",
    description:
      "Veda Multi Speciality Clinic offers expert medical care with trusted specialists including ENT surgeons, General Physicians, orthopaedics, cardiologists, and more. Led by Dr. Bela Donga and Dr. Radhika Patoriya.",
    keywords: [
      "Ent doctor near south bopal",
      "doctor near me",
      "clinic near me",
      "Hospital near south bopal",
      "Ent surgeon in south bopal, shela",
      "Dr Bela Donga",
      "Dr Radhika Patoriya"
    ],
    url: "https://veda-clinic-website.vercel.app",
    image: [{
      url: "https://veda-clinic-website.vercel.app/b4dac46e-f71a-442e-be96-f7a841eaaf16.png",
      height: 416,
      width: 1022,
      alt: "Veda Multispeciality Clinic South Bopal Ahmedabad"
    }]
  },
};

export const services = [
  {
    icon: "Stethoscope",
    title: "General Physician",
    description: "Comprehensive primary care for fever, typhoid, allergies, and chronic illnesses.",
    doctor: "Dr. Bela Donga"
  },
  {
    icon: "Ear",
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
    icon: "Bone",
    title: "Orthopedic Surgery",
    description: "Bone, joint, and musculoskeletal treatments and surgical interventions.",
    doctor: ""
  },
  {
    icon: "Pill",
    title: "Gastroenterology",
    description: "Digestive system disorders and gastrointestinal health management.",
    doctor: ""
  },
  {
    icon: "Heart",
    title: "Cardiology",
    description: "Heart health, cardiovascular disease prevention and treatment.",
    doctor: ""
  },
  {
    icon: "Brain",
    title: "Neurology",
    description: "Neurological disorders and brain health specialized care.",
    doctor: ""
  },
  {
    icon: "Leaf",
    title: "Panchkarma Specialist",
    description: "Traditional Ayurvedic detoxification and wellness treatments.",
    doctor: ""
  }
];

export const doctors = [
  {
    id: "bela-donga",
    name: "Dr. Bela Donga",
    specialty: "General Physician",
    experience: "Expert in primary care",
    qualifications: ["MBBS", "MD (Medicine)", "Diploma in Family Medicine"],
    conditions: ["Fever", "Typhoid", "Chronic Illnesses", "Allergies", "Preventive Care"],
    about:
      "Dr. Bela Donga is a highly experienced General Physician with over 12 years of practice. She specializes in comprehensive primary care, preventive medicine, and management of chronic conditions. Her patient-centered approach ensures personalized treatment plans for optimal health outcomes.",
    languages: ["English", "Hindi", "Gujarati"],
    consultationFee: "",
    rating: 4.9,
    reviews: "500+",
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      time: "9:30 AM - 1:00 PM AND 5:30 PM - 7:00 PM",
    },
    image: undefined,
  },
  {
    id: "radhika-patoriya",
    name: "Dr. Radhika Patoriya",
    specialty: "ENT Surgeon",
    experience: "Specialist surgeon",
    qualifications: ["MBBS", "MS (ENT)", "Fellowship in Rhinology"],
    conditions: ["Sinusitis", "Hearing Loss", "Throat Conditions", "Nasal Disorders", "ENT Surgery"],
    about:
      "Dr. Radhika Patoriya is a renowned ENT Surgeon with 15 years of specialized experience. She has performed over 2000 successful surgeries and is known for her expertise in minimally invasive ENT procedures. Her compassionate care and surgical precision make her one of the most trusted ENT specialists.",
    languages: ["Gujrati", "Hindi", "English"],
    consultationFee: "₹300",
    rating: 4.9,
    reviews: "500+",
    availability: {
      days: ["Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"],
      time: "10:00 AM - 1:00 PM AND 5:00 PM - 7:00 PM",
    },
    image: undefined,
  },
  // {
  //   name: "Dr. Bela Donga",
  //   specialty: "General Physician",
  //   experience: "Expert in primary care",
  //   conditions: ["Fever", "Typhoid", "Chronic Illnesses", "Allergies", "Preventive Care"],
  //   image: null
  // },
  // {
  //   name: "Dr. Radhika Patoriya",
  //   specialty: "ENT Surgeon",
  //   experience: "Specialist surgeon",
  //   conditions: ["Sinusitis", "Hearing Loss", "Throat Conditions", "Nasal Disorders", "ENT Surgery"],
  //   image: null
  // }
];

export const areas = [
  "South Bopal",
  "Shela",
  "Ghuma",
  "Bopal",
  "Surrounding Areas"
]

