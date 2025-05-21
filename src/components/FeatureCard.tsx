
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-compass-soft-purple bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300",
      className
    )}>
      <div className="flex flex-col space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-compass-soft-purple">
          <Icon className="h-6 w-6 text-compass-purple" />
        </div>
        <h3 className="text-xl font-semibold text-compass-purple-darkest">{title}</h3>
        <p className="text-compass-neutral-gray">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
