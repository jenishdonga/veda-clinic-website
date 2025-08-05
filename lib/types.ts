
export type Image = {
  url:string,
  height:number,
  width:number,
  alt:string
}
export type SiteConfig = {
  name: string;
  footerDescription: string;
  phone: string;
  email: string;
  infoAddress: string;
  infoTime: string;
  address: string;
  logo: string;
  logoTitle: string;
  locationLink: string;
  monToSat: string;
  sunday: string;

  social: {
    facebook: string;
    instagram: string;
  };

  hours: {
    weekdays: string;
    sunday: string;
  };

  heroSection: {
    title: string;
    subTitle: string;
    description: string;
    keyBenifits: string[];
    states: {
      title: string;
      state: string;
      icon: string;
    }[];
  };

  servicesSection: {
    title: string;
    subTitle: string;
  };

  doctorsSection: {
    title: string;
    subTitle: string;
    subSectionTitle: string;
    subSectionDescription: string;
  };

  contactSection: {
    title: string;
    subTitle: string;
  };

  copyright: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
    url:string,
    image:Image[]

  };
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  doctor: string;
};

export type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  conditions: string[];
  image: string | null;
};

export type AllArraysData = {
    services:Service[],
    doctors:Doctor[],
    areas:Area[]
}

export type Area = string;
