"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "#",
      submenu: [
        { name: "SYNC Pulse", href: "/pulse" },
        { name: "SYNC Adlytics", href: "/adlytics" },
        { name: "SYNC Audience", href: "/audience" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sync-media-logo.png"
            alt="SYNC OS Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-purple-400">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-2">
                        {item.submenu.map((subitem) => (
                          <NavigationMenuLink key={subitem.name} asChild>
                            <Link
                              href={subitem.href}
                              className="block rounded px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-purple-400"
                            >
                              {subitem.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-purple-400"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            asChild
          >
            <Link href="/contact">Request Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                      {item.name}
                    </div>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded px-8 py-2 text-sm transition-colors hover:bg-white/5 hover:text-purple-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-purple-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
