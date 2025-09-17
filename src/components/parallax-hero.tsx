
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ParallaxHero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    // This code now runs only on the client
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  // Calculate opacity based on scroll position for fade-out effect
  const textOpacity = Math.max(0, 1 - offsetY / 300);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
      >
        <h1 
          className="font-headline text-5xl md:text-7xl text-white drop-shadow-2xl transition-opacity duration-100 ease-out"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            opacity: textOpacity,
          }}
        >
          The Apex of Epicurean Excellence
        </h1>
        <p 
          className="mt-4 max-w-2xl font-body text-lg text-white/80 drop-shadow-lg transition-opacity duration-100 ease-out"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            opacity: textOpacity,
          }}
        >
          Purveyors of the world's most sought-after gourmet treasures, delivered with an unwavering commitment to quality and partnership.
        </p>
        <div
          style={{
              transform: `translateY(${offsetY * 0.2}px)`,
              opacity: textOpacity,
            }}
          className="transition-opacity duration-100 ease-out"
        >
          <Button asChild className="mt-8" size="lg">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
