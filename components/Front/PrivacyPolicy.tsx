"use client"

import { useAppConfig } from "@/lib/edge-config-context"

export default function PrivacyPolicy(){
    const siteConfig = useAppConfig();
    return(
              <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                At {siteConfig.name}, we collect information you provide directly to us when you 
                schedule appointments, contact us, or use our services. This may include your name, contact 
                information, medical history, and insurance details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to provide medical services, schedule appointments, communicate 
                about your care, process payments, and comply with legal requirements. We may also use 
                your information to improve our services and maintain patient records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or share your personal health information with third parties except 
                as required for treatment, payment, healthcare operations, or as required by law. We maintain 
                strict confidentiality in accordance with HIPAA regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. Our systems 
                are regularly updated and monitored for security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or request deletion of your personal information. 
                You may also request restrictions on how we use your information. Contact us to exercise 
                these rights or if you have any privacy concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> {siteConfig.email}</p>
                </div>
              </div>
            </section>

            {/* <section>
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section> */}
          </div>
        </div>
      </main>
    )
}