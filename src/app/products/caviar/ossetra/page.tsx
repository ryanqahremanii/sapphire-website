
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OssetraCaviarPage() {
  const productImage = PlaceHolderImages.find(img => img.id === 'caviar-ossetra-product');

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
            <h1 className="font-headline text-5xl md:text-6xl">Ossetra Caviar</h1>
            <p className="font-body text-xl text-muted-foreground mt-2 mb-6">A Connoisseur's Delight</p>
            <div className="font-body text-lg space-y-4 max-w-prose">
              <p>
                Ossetra caviar is prized by connoisseurs for its firm, medium-sized pearls and a distinctively nutty and rich flavor profile. The color can range from deep brown to golden amber, with the lighter varieties being the most sought-after.
              </p>
              <p>
                Our Ossetra is harvested from the Acipenser gueldenstaedtii sturgeon, which is carefully raised in pristine conditions. This results in a clean, buttery taste with a satisfyingly crisp finish that lingers on the palate.
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
