'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Award, Clock, ArrowRight } from "lucide-react";
import { Doctor } from "@/lib/types";
import { useAppConfig } from "@/lib/edge-config-context";
import { Button } from "../ui/button";
import Link from "next/link";

type Props ={
  doctors:Doctor[]
}

const Doctors = ({doctors}:Props) => {
  const siteConfig = useAppConfig();
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {siteConfig.doctorsSection.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.doctorsSection.subTitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <Link href={`/doctor/${doctor.id}`} key={index}>
              <Card  className="rounded-xl overflow-hidden hover:shadow-medical transition-all duration-300 p-0 bg-white group">
                {/* Full-width header with gradient */}
                <div className="bg-gradient-medical text-white w-full p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold leading-tight">{doctor.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="w-4 h-4" />
                        <span className="text-sm opacity-90">{doctor.specialty}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{doctor.experience}</span>
                  </div>

                  <h4 className="font-semibold text-foreground mb-3">Specializes in treating:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.conditions.map((condition, conditionIndex) => (
                      <Badge key={conditionIndex} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="default" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-5">
                    View Profile
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}


        </div>

        <div className="text-center mt-12">
          <div className="bg-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {siteConfig.doctorsSection.subSectionTitle}
            </h3>
            <p className="text-muted-foreground">
              {siteConfig.doctorsSection.subSectionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;