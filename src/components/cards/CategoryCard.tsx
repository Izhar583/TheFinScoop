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
  const actionText = type === "tool" ? "View tools" : "Explore guide";

  return (
    <Link
      href={href}
      className="group relative bg-white rounded-3xl border border-slate-200/90 p-8 hover:border-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight transition-colors">
          {name}
        </h3>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-900">
        <span>{actionText}</span>
        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-200">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

