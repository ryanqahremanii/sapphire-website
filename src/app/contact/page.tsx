
'use client';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h1 className="font-headline text-5xl md:text-6xl mb-6">Partner in Excellence</h1>
            <p className="font-body text-lg mb-8 max-w-prose">
              For inquiries, partnerships, or to speak with a concierge, please contact us. We are dedicated to serving chefs and connoisseurs who share our passion for unparalleled quality.
            </p>
            <div className="font-body space-y-4">
              <div>
                <h3 className="font-headline text-xl">Email</h3>
                <a href="mailto:ryan@sapphiregourmet.com" className="hover:text-primary transition-colors">ryan@sapphiregourmet.com</a>
              </div>
              <div>
                <h3 className="font-headline text-xl">Phone</h3>
                <a href="tel:+447386328860" className="hover:text-primary transition-colors">+447386328860</a>
              </div>
              <div>
                <h3 className="font-headline text-xl">Head Office</h3>
                <p>123 Luxury Lane, Foodie City, 90210</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
