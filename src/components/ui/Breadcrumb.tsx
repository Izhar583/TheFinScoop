import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-xs text-gray-500 mb-6 flex-wrap ${className}`}
    >
      <Link
        href="/"
        className="hover:text-primary-blue flex items-center gap-1 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-gray-400" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-primary-blue capitalize transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-900 capitalize truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
