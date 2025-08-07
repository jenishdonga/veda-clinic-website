'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, AlertCircle, Compass, RefreshCw } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, [pathname]);

  const suggestions = [
    { label: "Home Page", path: "/", icon: Home },
    { label: "Our Doctors", path: "/#doctors", icon: Search },
    { label: "Services", path: "/#services", icon: Compass },
    { label: "Contact Us", path: "/#contact", icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className={`w-full max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative mb-12">
          <div className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-primary/20 leading-none select-none">
            404
          </div>
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-medical text-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <AlertCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
              <h1 className="text-2xl sm:text-3xl font-bold">Oops! Page Not Found</h1>
            </div>
          </div> */}
        </div>

        <Card className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              We couldn't find what you're looking for
            </h2>
            <p className="text-muted-foreground mb-4">
              The page <span className="font-mono bg-secondary/50 px-2 py-1 rounded text-sm">{pathname}</span> doesn't exist or has been moved.
            </p>
            <p className="text-muted-foreground">
              Don't worry, let's get you back on track with our medical services!
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {suggestions.map((suggestion, index) => {
            const IconComponent = suggestion.icon;
            return (
              <Card
                key={suggestion.path}
                className={`group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (suggestion.path.startsWith("/#")) {
                    router.push("/");
                    setTimeout(() => {
                      const el = document.querySelector(suggestion.path.substring(1));
                      el?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  } else {
                    router.push(suggestion.path);
                  }
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {suggestion.label}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="group min-w-[160px]"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Go Back
          </Button>

          <Button
            onClick={() => router.push("/")}
            variant="medical"
            size="lg"
            className="group min-w-[160px]"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>

          <Button
            onClick={() => window.location.reload()}
            variant="secondary"
            size="lg"
            className="group min-w-[160px]"
          >
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Refresh
          </Button>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
          <p className="text-sm text-muted-foreground">
            Still having trouble? Contact our support team for assistance with your medical needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
