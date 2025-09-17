
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BaeriiCaviarPage() {
  const productImage = PlaceHolderImages.find(img => img.id === 'caviar-baerii-product');

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
            <h1 className="font-headline text-5xl md:text-6xl">Baerii Caviar</h1>
            <p className="font-body text-xl text-muted-foreground mt-2 mb-6">A Sublime Introduction</p>
            <div className="font-body text-lg space-y-4 max-w-prose">
              <p>
                Baerii caviar, sourced from the Siberian sturgeon (Acipenser baerii), offers a sublime and accessible caviar experience. Its small to medium-sized pearls are a beautiful dark-gray to black, with a delicate texture that melts in your mouth.
              </p>
              <p>
                The flavor is clean, smooth, and slightly sweet, with subtle briny notes and a buttery finish. It is an excellent choice for both those new to caviar and seasoned aficionados looking for a high-quality, versatile product.
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
