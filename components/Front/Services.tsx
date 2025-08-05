'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppConfig } from "@/lib/edge-config-context";
import { Service } from "@/lib/types";
import { getLucideIcon } from "@/lib/getLucideIcon";

type Props= {
  services :Service[]
}

const Services = ({services}:Props) => {
  const siteConfig = useAppConfig()
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {siteConfig.servicesSection.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.servicesSection.subTitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = getLucideIcon(service.icon); 
            return (
              <Card key={index} className="hover:shadow-medical transition-all duration-300 border-border">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  {service.doctor && (
                    <div className="text-xs text-accent font-medium">
                      {service.doctor}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;