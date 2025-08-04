import { services, siteConfig } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-medical text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 mb-4">
              <Image
                alt="Veda Multispeciality Clinic Logo"
                src={`${siteConfig.logo}`}
                width={160}
                height={56}
                priority
              />
            </div>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              {siteConfig.footerDescription}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">

                <Phone className="w-4 h-4" />
                <span><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone} </a></span>

              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-4">
              <h5 className="font-medium mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.social.facebook}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.social.instagram}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {services.map((service,index)=>{
                return( <li key={index}>{service.title}</li>)
              })}
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Hours</span>
                </div>
                <div className="opacity-90">
                  <div>Mon-Sat: {siteConfig.monToSat}</div>
                  <div>Sun: {siteConfig.sunday}</div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Location</span>
                </div>
                <div className="opacity-90 text-xs leading-relaxed">
                  <a href={`${siteConfig.locationLink}`} target="_blank">
                  {siteConfig.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              {siteConfig.copyright}
            </p>
            <div className="flex gap-4 text-sm">
              <Link href={'/privacy-policy'} className="opacity-75 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>

              <Link href={"/terms-and-conditions"} className="opacity-75 hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;