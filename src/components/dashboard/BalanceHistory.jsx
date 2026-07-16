import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SectionCard from "../ui/SectionCard";
import SectionHeading from "../ui/SectionHeading";
import { balanceHistory } from "../../data/dashboardData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-ink text-white text-xs rounded-lg px-3 py-2 shadow-card">
      <p className="font-semibold mb-1">{label}</p>
      <p>${payload[0].value}</p>
    </div>
  );
};

export default function BalanceHistory() {
  return (
    <SectionCard className="h-full">
      <SectionHeading title="Balance History" />
      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={balanceHistory} margin={{ left: -20 }}>
            <defs>
              <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2657F6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2657F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#EEF1FA" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A93B8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A93B8", fontSize: 12 }}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2657F6"
              strokeWidth={3}
              fill="url(#balanceFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
