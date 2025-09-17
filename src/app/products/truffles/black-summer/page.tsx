
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlackSummerTrufflePage() {
  const productImage = PlaceHolderImages.find(img => img.id === 'truffle-product');

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
            <h1 className="font-headline text-5xl md:text-6xl">Black Summer Truffles</h1>
            <p className="font-body text-xl text-muted-foreground mt-2 mb-6">A Taste of the Authentic & Grounded</p>
            <div className="font-body text-lg space-y-4 max-w-prose">
              <p>
                Our Black Summer Truffles (Tuber aestivum) are sourced from the finest truffle grounds. 
                Celebrated for their subtle, earthy aroma and rich, chocolatey notes, they provide an 
                exquisite touch to any culinary creation.
              </p>
              <p>
                We ensure peak freshness and quality from the earth to your kitchen, delivering an 
                unparalleled gastronomic experience for the most discerning palates.
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
