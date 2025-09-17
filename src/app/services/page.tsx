
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ScrollText, Scale, Handshake } from 'lucide-react';

const coreValues = [
  {
    icon: Gem,
    title: 'Uncompromising Quality',
    description: 'We source only the finest, most exceptional products, ensuring every item meets our rigorous standards of excellence.',
  },
  {
    icon: ScrollText,
    title: 'Authenticity & Heritage',
    description: 'Our commitment to tradition and provenance means you receive products with a true, unblemished story and flavor.',
  },
  {
    icon: Scale,
    title: 'Integrity & Trust',
    description: 'We build lasting relationships through transparent, honest practices, ensuring reliability in every partnership.',
  },
  {
    icon: Handshake,
    title: 'Culinary Partnership',
    description: 'More than suppliers, we are your partners, dedicated to supporting your vision and culinary ambitions.',
  },
];

export default function ServicesPage() {
  const servicesImage = PlaceHolderImages.find(img => img.id === 'services-chef');
  
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h1 className="font-headline text-5xl md:text-6xl mb-6">A True Culinary Partnership</h1>
            <p className="font-body text-lg max-w-prose">
              We are more than suppliers; we are dedicated partners in your quest for culinary excellence. We provide bespoke sourcing, private consultation, and direct access to our global network of premier farms, ensuring uncompromising quality from origin to delivery.
            </p>
          </div>
          <div className="relative h-96 md:h-[600px] w-full">
            {servicesImage && (
              <Image
                src={servicesImage.imageUrl}
                alt={servicesImage.description}
                fill
                className="object-cover rounded-md"
                data-ai-hint={servicesImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">The Pillars of Our Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, index) => (
              <div key={value.title} className="text-center flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl mb-2">{value.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
