import Link from "next/link";
import { ArrowRight, PiggyBank, Building2, Wallet, BarChart3, User, Landmark, CreditCard, TrendingUp, Smartphone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  PiggyBank,
  Building2,
  Wallet,
  BarChart3,
  User,
  Landmark,
  CreditCard,
  TrendingUp,
  Smartphone,
};

interface CategoryCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
  iconColor?: string;
  iconBg?: string;
  type?: "tool" | "learn";
}

export default function CategoryCard({
  slug,
  name,
  description,
  icon,
  type = "tool",
}: CategoryCardProps) {
  const IconComponent = iconMap[icon] || TrendingUp;
  const href = type === "tool" ? `/tools?category=${slug}` : `/learn/${slug}`;
  const actionText = type === "tool" ? "View tools" : "Explore";

  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-gray-100 p-6 shadow-xs hover:shadow-md hover:border-blue-100 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:scale-105 group-hover:bg-brand-navy group-hover:text-white transition-all">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-navy transition-colors">
          {name}
        </h3>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
        <span>{actionText}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

