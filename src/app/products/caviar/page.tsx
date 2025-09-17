
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

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

export default function CaviarPage() {
  return (
    <div className="bg-[#F3EFEA] text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll>
          <h1 className="font-headline text-5xl md:text-6xl text-center mb-12">
            An Unrivaled Caviar Selection
          </h1>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caviarProducts.map((product, index) => {
            const image = PlaceHolderImages.find(img => img.id === product.id);
            return (
              <AnimateOnScroll key={product.id} delay={0.1 + index * 0.1}>
                <Link href={product.href} className="block group">
                  <Card className="bg-[#D4AF37] border-border/20 overflow-hidden h-full text-card-foreground">
                    {image && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={product.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl group-hover:underline">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-body text-card-foreground/80 group-hover:text-card-foreground transition-colors duration-300">{product.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}

