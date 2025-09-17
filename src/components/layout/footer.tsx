import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground font-body">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-6 py-16">
        <div>
          <Link href="/" className="font-headline text-2xl mb-4 inline-block">
            Sapphire Gourmet House
          </Link>
          <p className='text-sm text-accent-foreground/80'>Comprehensive Gourmet Food Solutions.</p>
        </div>
        <div>
          <h3 className="font-headline text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/products/caviar" className="hover:text-primary transition-colors">Caviar</Link></li>
            <li><Link href="/products/truffles" className="hover:text-primary transition-colors">Truffles</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg mb-4">Connect With Us</h3>
          <div className="space-y-2 text-sm">
            <p>Email: ryan@sapphiregourmet.com</p>
            <p>Phone: +447386328860</p>
            <p>Office: 123 Luxury Lane, Foodie City</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-primary hover:text-accent-foreground transition-colors"><Facebook /></a>
            <a href="#" aria-label="Twitter" className="text-primary hover:text-accent-foreground transition-colors"><Twitter /></a>
            <a href="#" aria-label="Instagram" className="text-primary hover:text-accent-foreground transition-colors"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-foreground/10 py-4">
        <p className="text-center text-xs text-accent-foreground/60">© {new Date().getFullYear()} Sapphire Gourmet House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
