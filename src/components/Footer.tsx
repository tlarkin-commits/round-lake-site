import Link from "next/link";
import { PropertyConfig } from "@/config/properties";

export default function Footer({ property }: { property: PropertyConfig }) {
  return (
    <footer className="bg-stone-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold" style={{ color: property.colors.primary }}>
              {property.name}
            </div>
            <div className="text-sm text-stone-500 mt-1">{property.tagline}</div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
            <Link href="/#features" className="hover:text-stone-900">Amenities</Link>
            <Link href="/#listings" className="hover:text-stone-900">Available Units</Link>
            <Link href="/#gallery" className="hover:text-stone-900">Photos</Link>
            <Link href="/#contact" className="hover:text-stone-900">Contact</Link>
            <Link href="/utility" className="hover:text-stone-900 font-medium">Utility Customers</Link>
          </div>

          {/* Contact */}
          <div className="text-sm text-stone-600 text-center md:text-right">
            <div>{property.address}, {property.city}, {property.state} {property.zip}</div>
            <div>{property.phone}</div>
            <div>
              <a href={`mailto:${property.email}`} className="hover:text-stone-900">{property.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-500">
          <span>© {new Date().getFullYear()} {property.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-stone-700 transition-colors">Terms of Service</Link>
            <Link href="/utility" className="hover:text-stone-700 transition-colors">Utility Customers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
