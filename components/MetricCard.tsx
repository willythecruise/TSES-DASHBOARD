
import { SVG_ICONS } from "@/public/assets";

interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function MetricCard({ label, value, icon, bgColor, iconBgColor = 'bg-gray-100', trend }: MetricCardProps) {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex items-center gap-4 border-4 border-white`}>
      <div className="flex-shrink-0">
        <div className={`${iconBgColor} rounded-md w-12 h-12 flex items-center justify-center`}>{icon}</div>
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-gray-600 mb-1">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-normal text-gray-900">{value}</p>
          {trend && (
            <div className="flex items-center gap-1">
              <img
                src={SVG_ICONS.trend}
                alt={trend.isPositive ? 'Upward trend' : 'Downward trend'}
                className={`w-4 h-4 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}
              />
              <span className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>{trend.value}</span>
            </div>
          )}
        </div>
      </div>

      </div>
    
  );
}
