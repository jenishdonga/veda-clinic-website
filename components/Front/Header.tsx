'use client'
import { siteConfig } from "@/lib/site";
import { Phone, Mail, Clock, MapPin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (sectionId: string) => {
    if (pathname === '/') {
      // already on homepage
      scrollToSection(sectionId);
    } else {
      // go to homepage and pass hash in URL
      router.push(`/#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Dynamically calculate the actual header height
      const header = document.querySelector('header') as HTMLElement;
      const topBar = header?.previousElementSibling as HTMLElement;
      const headerHeight = (header?.offsetHeight || 0) + (topBar?.offsetHeight || 0) + 20; // Add 20px padding

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Top Info Bar - Hides on Scroll */}
      <div className="bg-primary text-white py-2 text-xs sm:text-sm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{siteConfig.phone}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 min-w-0">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{siteConfig.email}</span>
            </div>
            <div className="hidden md:flex items-center gap-2 min-w-0">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{siteConfig.infoTime}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{siteConfig.infoAddress}</span>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.social.facebook}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.social.instagram}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Sticky */}
      <header className="sticky top-0 z-50 bg-gradient-medical text-white shadow-medical">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="h-12 w-auto  sm:h-14 flex-shrink-0">
                <Link href={"/"}>
                <Image
                  alt="Veda Multispeciality Clinic Logo"
                  src={siteConfig.logo}
                  width={150}
                  height={56}
                  priority
                />
                </Link>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm opacity-90 font-montserrat truncate">{siteConfig.logoTitle}</p>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => handleNavClick('services')}
                className="hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('doctors')}
                className="hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-accent transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-left py-2 hover:text-accent transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick('doctors')}
                  className="text-left py-2 hover:text-accent transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-left py-2 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;