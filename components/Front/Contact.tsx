import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Navigation
} from "lucide-react";
import { areas, siteConfig } from "@/lib/site";

const Contact = () => {

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {siteConfig.contactSection.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.contactSection.subTitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Call us for appointments</p>
                <p className="text-lg font-semibold text-foreground mb-3">{siteConfig.phone}</p>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button className="w-full" variant="default">
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Send us your queries</p>
                <p className="text-sm font-medium text-foreground mb-3 break-all">
                  {siteConfig.email}
                </p>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button variant="medical" className="w-full">
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Visit our clinic</p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  {siteConfig.address}
                </p>
                <a href={`${siteConfig.locationLink}`} target="_blank">
                <Button  variant="outline" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Sat</span>
                    <span className="text-foreground font-medium">{siteConfig.monToSat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">{siteConfig.sunday}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas */}
          <div>
            <Card className="border-border h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">We proudly serve patients from:</p>
                <div className="space-y-2">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Same-Day Appointments</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer same-day appointments for urgent medical needs.
                    Call us to check availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;