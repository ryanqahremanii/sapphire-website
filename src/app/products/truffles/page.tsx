
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const truffleProducts = [
  {
    id: 'truffle-page',
    name: 'Black Summer Truffles',
    description: 'Celebrated for their subtle, earthy aroma and rich, chocolatey notes, they provide an exquisite touch to any culinary creation.',
    href: '/products/truffles/black-summer',
    imageHint: 'black truffle'
  },
];

export default function TrufflesPage() {
  return (
    <div className="bg-card text-card-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-headline text-5xl md:text-6xl text-center mb-12">
          Our Premium Truffle Selection
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {truffleProducts.map((product, index) => {
            const image = PlaceHolderImages.find(img => img.id === product.id);
            return (
              <Link key={product.id} href={product.href} className="block group">
                <Card className="bg-transparent border-border/20 overflow-hidden h-full">
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
                    <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-card-foreground/80">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
