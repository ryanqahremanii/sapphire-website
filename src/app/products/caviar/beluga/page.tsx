
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BelugaCaviarPage() {
  const productImage = PlaceHolderImages.find(img => img.id === 'caviar-beluga-product');

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-10rem)] py-12">
          <div className="relative aspect-square">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                fill
                className="object-cover rounded-md"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
          <div className="py-8">
            <h1 className="font-headline text-5xl md:text-6xl">Beluga Caviar</h1>
            <p className="font-body text-xl text-muted-foreground mt-2 mb-6">The Epitome of Luxury</p>
            <div className="font-body text-lg space-y-4 max-w-prose">
              <p>
                Beluga caviar is the most famous and sought-after of all caviars. Renowned for its large, soft, light-gray pearls, it delivers a rich, creamy, and buttery flavor with a long, complex finish that is simply unparalleled.
              </p>
              <p>
                Sourced from the Huso huso sturgeon, our Beluga is sustainably farmed to ensure the highest standards of quality and ethical practice. Each tin is a testament to our commitment to preserving this magnificent species while providing an extraordinary gastronomic experience.
              </p>
            </div>
            <Button asChild className="mt-8" size="lg">
                <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
