import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const products = [
    { name: "SYNC Pulse", href: "/pulse" },
    { name: "SYNC Adlytics", href: "/adlytics" },
    { name: "SYNC Audience", href: "/audience" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Request Demo", href: "/contact" },
    { name: "Get Diagnostic", href: "/contact" },
    { name: "Schedule Consultation", href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/sync-media-logo.png"
                alt="SYNC OS Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The operating system for convergent TV advertising in India. Unify audience intelligence,
              predictive outcomes, and cross-media measurement.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold">Products</h3>
            <ul className="mt-4 space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold">Get Started</h3>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SYNC OS. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
