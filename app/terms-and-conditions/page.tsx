import Header from "@/components/Front/Header";
import Footer from "@/components/Front/Footer";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = {
  title: `Terms and Conditions - ${siteConfig.name} `,
  description: `Read the Terms and Conditions of ${siteConfig.name}.`,
};

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using the services of Veda Multispeciality Clinic, you agree to comply with and be 
                bound by these terms and conditions. If you do not agree with any part of these terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Medical Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our clinic provides medical consultation, treatment, and healthcare services. All medical 
                advice and treatment are provided by licensed healthcare professionals. Patients are 
                responsible for providing accurate medical history and following prescribed treatments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Appointments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Appointments must be scheduled in advance. We require 24-hour notice for cancellations. 
                Late cancellations or no-shows may result in cancellation fees. Emergency services are 
                available during clinic hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment is due at the time of service unless prior arrangements have been made. We accept 
                cash, credit cards, and insurance payments. Patients are responsible for understanding 
                their insurance coverage and any applicable co-payments or deductibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Patient Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Patients are expected to arrive on time for appointments, provide accurate information, 
                follow treatment instructions, and maintain respectful behavior towards staff and other 
                patients. Failure to comply may result in termination of the patient-provider relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide the highest quality care, medical outcomes cannot be guaranteed. 
                Our liability is limited to the extent permitted by law. Patients should seek immediate 
                emergency care when appropriate and follow up as directed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We maintain strict patient confidentiality in accordance with applicable laws and 
                regulations. Patient information will only be shared as necessary for treatment, 
                payment, healthcare operations, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms and conditions at any time. Changes will be 
                effective immediately upon posting. Continued use of our services constitutes acceptance 
                of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>For questions about these Terms & Conditions, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> vedamultispecialityclinic@gmail.com</p>
                  <p><strong>Phone:</strong> 78610 47633</p>
                  <p><strong>Address:</strong> 114,115, Saanvi nirman stellar, opp. skysole appartment, South Bopal, Ahmedabad, Gujarat 380058</p>
                </div>
              </div>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;