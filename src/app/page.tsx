
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ParallaxHero } from '@/components/parallax-hero';
import { Gem, ScrollText, Scale, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

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

const caviarProducts = [
  {
    id: 'caviar-beluga',
    name: 'Beluga Caviar',
    description: 'The epitome of luxury, renowned for its large, delicate pearls and rich, creamy flavor.',
    href: '/products/caviar/beluga',
    imageHint: 'beluga caviar'
  },
  {
    id: 'caviar-ossetra',
    name: 'Ossetra Caviar',
    description: 'Celebrated for its firm, golden-amber pearls and a distinctive nutty, buttery taste.',
    href: '/products/caviar/ossetra',
    imageHint: 'ossetra caviar'
  },
  {
    id: 'caviar-baerii',
    name: 'Baerii Caviar',
    description: 'A sublime experience with smaller, dark pearls offering a smooth, clean, and slightly sweet flavor.',
    href: '/products/caviar/baerii',
    imageHint: 'baerii caviar'
  },
];

const truffleProducts = [
  {
    id: 'truffle-page',
    name: 'Black Summer Truffles',
    description: 'Celebrated for their subtle, earthy aroma and rich, chocolatey notes, they provide an exquisite touch to any culinary creation.',
    href: '/products/truffles/black-summer',
    imageHint: 'black truffle'
  },
];

export default function Home() {

  return (
    <div>
      <ParallaxHero />

      <section className="bg-gradient-to-br from-[#005F60] to-accent text-card-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-headline text-4xl md:text-5xl mb-4">Ocean's Black Pearls</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="font-body text-lg text-card-foreground/80 mb-12">
                Experience the sublime taste of our ethically sourced caviar. Each pearl is a testament to our pursuit of perfection, offering a complex, buttery flavor that defines pure opulence.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {caviarProducts.map((product, index) => {
              const image = PlaceHolderImages.find(img => img.id === product.id);
              return (
                <AnimateOnScroll key={product.id} delay={0.2 + index * 0.1}>
                  <Link href={product.href} className="block group">
                    <div className="flex flex-col items-center">
                      {image && (
                        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover rounded-full border-4 border-transparent group-hover:border-primary transition-all duration-300 group-hover:scale-105"
                            data-ai-hint={product.imageHint}
                          />
                        </div>
                      )}
                      <h3 className="font-headline text-2xl text-card-foreground">{product.name}</h3>
                      <p className="font-body text-sm text-card-foreground/80 max-w-xs">{product.description}</p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#36454F] to-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto">
            <AnimateOnScroll>
              <h2 className="font-headline text-4xl md:text-5xl mb-4 text-white">Diamonds of the Earth</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="font-body text-lg text-white/80 mb-12">
                Unearth the intoxicating aroma and exquisite flavor of our hand-selected truffles. A versatile luxury, they transform any dish into a masterpiece of culinary art.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="grid justify-center text-center">
            {truffleProducts.map((product, index) => {
              const image = PlaceHolderImages.find(img => img.id === product.id);
              return (
                <AnimateOnScroll key={product.id} delay={0.2 + index * 0.1}>
                  <Link href={product.href} className="block group">
                    <div className="flex flex-col items-center">
                      {image && (
                        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover rounded-full border-4 border-transparent group-hover:border-primary transition-all duration-300 group-hover:scale-105"
                            data-ai-hint={product.imageHint}
                          />
                        </div>
                      )}
                      <h3 className="font-headline text-2xl text-white">{product.name}</h3>
                      <p className="font-body text-sm text-white/80 max-w-xs">{product.description}</p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <h2 className="font-headline text-4xl md:text-5xl text-center mb-12">The Pillars of Our Promise</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={0.1 + index * 0.1}>
                <div className="text-center flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl mb-2">{value.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
