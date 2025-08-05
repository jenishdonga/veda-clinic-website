'use client'
import { Button } from "@/components/ui/button";
import { useAppConfig } from "@/lib/edge-config-context";
// import { siteConfig } from "@/lib/site";
import { Users, Clock, Award } from "lucide-react";

const Hero = () => {
  const siteConfig = useAppConfig();
  return (
    <section className="bg-white text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              {siteConfig.heroSection.title}
              <span className="block text-primary">{siteConfig.heroSection.subTitle}</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {siteConfig.heroSection.description}
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.heroSection.keyBenifits.map((benifit,index) => {
                return (
                  <div className="flex items-center gap-3" key={index}>
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                    <span className="text-foreground">{benifit}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="medical">
                <a href={`tel:${siteConfig.phone}`}>
                Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#services" className="hover:text-accent transition-colors">
                  Our Services
                </a>
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg p-6 text-center shadow-soft">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">8+</div>
              <div className="text-sm text-muted-foreground">Specialties</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center shadow-soft">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Hours Daily</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center shadow-soft">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">Expert</div>
              <div className="text-sm text-muted-foreground">Doctors</div>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-center shadow-soft">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <div className="text-2xl font-bold text-foreground">Same</div>
              <div className="text-sm text-muted-foreground">Day Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;