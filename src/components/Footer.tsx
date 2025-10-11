import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const date: Date = new Date();
  const fullYear: number = date.getFullYear();
  console.log(fullYear, "Full Year is here")

  return (
    <footer className="bg-gradient-to-r from-[var(--nav-start)]/95 to-[var(--nav-end)]/95 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ============== BRAND ============== */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-md shadow-[#e94057]/20">
                <Image
                  src="/vamika.webp"
                  alt="Logo"
                  fill
                  className="object-cover py-1 px-1 rounded-full border border-gray-700"
                />
              </div>
              <span className="text-2xl font-bold text-primary-foreground">
                Vamika
              </span>
            </Link>
            <p className="text-muted">
              Discover luxury clothing and other accessories that enhance your daily look.
            </p>
            <div className="flex space-x-4 text-muted">
              <Link
                href="/"
                className="text-muted hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href={`/deals`}
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Cloths
                </Link>
              </li>
            </ul>
          </div>

          {/* ============== CUSTOMER CARE ============== */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* ============== COMPANY ============== */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-primary-foreground">© {fullYear} Vamika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}