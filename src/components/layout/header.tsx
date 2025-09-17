
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/products',
    label: 'Products',
    dropdown: [
      { 
        href: '/products/caviar', 
        label: 'Caviar',
        subItems: [
          { href: '/products/caviar/beluga', label: 'Beluga' },
          { href: '/products/caviar/ossetra', label: 'Ossetra' },
          { href: '/products/caviar/baerii', label: 'Baerii' },
        ]
      },
      { 
        href: '/products/truffles', 
        label: 'Truffles',
        subItems: [
          { href: '/products/truffles/black-summer', label: 'Black Summer' },
        ]
      },
    ],
  },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const closeMobileMenu = () => setMobileMenuOpen(false);

  const renderNavLinks = (isMobile: boolean) => {
    return navLinks.map((link) => {
      const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

      if (link.dropdown) {
        if (isMobile) {
          return (
            <Accordion type="single" collapsible className="w-full" key={link.href}>
              <AccordionItem value={link.label} className="border-b-0">
                <AccordionTrigger className={cn(
                  "font-headline text-base w-full justify-between !text-foreground hover:!text-primary hover:no-underline py-2",
                   isActive && "!text-primary"
                )}>
                  {link.label}
                </AccordionTrigger>
                <AccordionContent className="pb-0 pl-4">
                  {link.dropdown.map(item => (
                    <Accordion type="single" collapsible className="w-full" key={item.href}>
                      <AccordionItem value={item.label} className="border-b-0">
                        <AccordionTrigger className="font-headline text-base w-full justify-between !text-foreground hover:!text-primary hover:no-underline py-2">
                          <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0 pl-4">
                          {item.subItems?.map(sub => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeMobileMenu}
                              className={cn("font-headline block py-2 !text-foreground hover:!text-primary", pathname === sub.href && "!text-primary")}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        }
        return (
          <DropdownMenu key={link.href}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "font-headline text-base md:text-lg hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-2",
                  scrolled ? "text-card-foreground" : "text-white",
                  "hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                {link.label} <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover border-border">
              {link.dropdown.map((item) => (
                <DropdownMenuSub key={item.href}>
                  <DropdownMenuSubTrigger className="font-headline text-popover-foreground hover:!bg-primary/20 cursor-pointer justify-between">
                    <Link href={item.href} className="w-full text-left">{item.label}</Link>
                     <ChevronRight className="ml-auto h-4 w-4" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-popover border-border">
                       {item.subItems?.map(subItem => (
                          <DropdownMenuItem key={subItem.href} asChild>
                            <Link href={subItem.href} className="font-headline text-popover-foreground hover:!bg-primary/20 cursor-pointer">
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                       ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
      
      return (
        <Button
          key={link.href}
          variant="ghost"
          asChild
          className={cn(
            "font-headline text-base md:text-lg hover:bg-transparent p-2",
            isMobile
              ? "w-full justify-start !text-foreground hover:!text-primary"
              : scrolled ? "text-card-foreground" : "text-white", "hover:text-primary",
            isActive && (isMobile ? "!text-primary" : "text-primary")
          )}
        >
          <Link href={link.href} onClick={isMobile ? closeMobileMenu : undefined}>
            {link.label}
          </Link>
        </Button>
      );
    });
  }

  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 transition-colors duration-300 z-50",
        scrolled ? "bg-card/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={cn("font-headline text-2xl", scrolled ? "text-card-foreground" : "text-white")}>
          Sapphire Gourmet House
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false)}
        </nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(scrolled ? "text-card-foreground" : "text-white")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
                <div className="mt-8">
                    <Link href="/" className="font-headline text-2xl text-center block text-foreground" onClick={closeMobileMenu}>
                        Sapphire Gourmet House
                    </Link>
                    <nav className="flex flex-col space-y-2 mt-8">
                        {renderNavLinks(true)}
                    </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
