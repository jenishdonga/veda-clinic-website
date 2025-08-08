'use client'
import { Doctor } from "@/lib/types"
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Mail, Star, Users, Award, BookOpen, Stethoscope, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useAppConfig } from "@/lib/edge-config-context";


type Props = {
    doctor: Doctor
}

export default function DoctorDetails({ doctor }: Props) {
    const siteConfig = useAppConfig();
    return (
        <div className="overflow-x-hidden">
            {/* Header */}
            <div className="bg-gradient-medical text-white py-8">
                <div className="container mx-auto px-4">
                    <Link href={"/"}>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/20 mb-6"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 w-full overflow-x-hidden">
                        <Avatar className="w-32 h-32 border-4 border-white/20">
                            <AvatarImage src={doctor.image} alt={doctor.name} />
                            <AvatarFallback className="text-4xl bg-white/20 text-white">
                                {doctor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
                            <div className="flex items-center gap-2 mb-3">
                                <Stethoscope className="w-5 h-5" />
                                <span className="text-xl opacity-90">{doctor.specialty}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm opacity-90">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{doctor.experience} </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-3xl font-bold mb-2">{doctor.consultationFee}</div>
                            <div className="text-sm opacity-90">{doctor.consultationFee !== "" ? "Consultation Fee" : ''}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6 w-full">
                        {/* About */}
                        <Card className="rounded-xl overflow-hidden hover:shadow-medical transition-all duration-300 bg-white p-0">
                            <div className="bg-gradient-medical p-6">
                                <CardTitle className="flex items-center gap-2 text-white">
                                    <Users className="w-5 h-5" />
                                    About {doctor.name}
                                </CardTitle>
                            </div>
                            <CardContent className="p-6">
                                <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
                            </CardContent>
                        </Card>

                        {/* Qualifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <Award className="w-5 h-5 text-primary" />
                                    Qualifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {doctor.qualifications.map((qualification, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                                            <BookOpen className="w-4 h-4 text-primary" />
                                            <span className="text-foreground font-medium">{qualification}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Specializations */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <Heart className="w-5 h-5 text-primary" />
                                    Medical Specializations
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {doctor.conditions.map((condition, index) => (
                                        <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                                            {condition}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Languages */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Languages Spoken
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {doctor.languages.map((language, index) => (
                                        <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 ">
                        {/* Appointment Booking */}
                        <Card className="top-6 rounded-xl overflow-hidden hover:shadow-medical transition-all duration-300 bg-white p-0 w-full">
                            <div className="bg-gradient-medical p-4 p-6 w-full ">
                                <CardTitle className="flex items-center gap-2 text-white">
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </CardTitle>
                            </div>
                            <CardContent className="p-6 space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">{doctor.availability.time}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <Calendar className="w-4 h-4 text-primary mt-0.5" />
                                        <div>
                                            <div className="text-muted-foreground mb-1">Available Days:</div>
                                            <div className="text-foreground font-medium">
                                                {doctor.availability.days.join(", ")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <a href={`tel:${siteConfig.phone}`}>
                                    <Button className="w-full" variant="medical" size="lg">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Book Consultation
                                    </Button>
                                    </a>
                                </div>

                                <div className="text-center pt-4 border-t">
                                    <div className="text-2xl font-bold text-primary">{doctor.consultationFee}</div>
                                    <div className="text-sm text-muted-foreground">{doctor.consultationFee !== "" ? "Consultation Fee" : ''}</div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                                    <a href={`tel:${siteConfig.phone}`}>
                                        <Phone className="w-4 h-4 text-primary" /></a>
                                    <a href={`tel:${siteConfig.phone}`}>
                                        <span className="text-foreground">{siteConfig.phone}</span>
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                                    <a href={`mailto:${siteConfig.email}`}>
                                        <Mail className="w-4 h-4 text-primary" />
                                    </a>
                                    <a href={`mailto:${siteConfig.email}`}>
                                        <span className="text-foreground">{siteConfig.email}</span>
                                    </a>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                                    <a href={`${siteConfig.locationLink}`} target="_blank"><MapPin className="w-4 h-4 text-primary mt-1" /></a>
                                    <a href={`${siteConfig.locationLink}`} target="_blank">
                                        <div className="text-foreground">
                                            <div>{siteConfig.name}</div>
                                            <div className="text-sm text-muted-foreground">{siteConfig.address}</div>
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}