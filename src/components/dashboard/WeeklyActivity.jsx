import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SectionCard from "../ui/SectionCard";
import { weeklyActivity } from "../../data/dashboardData";

const Legend = () => (
  <div className="flex items-center gap-6">
    <span className="flex items-center gap-2 text-sm text-ink-light">
      <span className="w-2.5 h-2.5 rounded-full bg-brand" />
      Deposit
    </span>
    <span className="flex items-center gap-2 text-sm text-ink-light">
      <span className="w-2.5 h-2.5 rounded-full bg-accent-teal" />
      Withdraw
    </span>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-ink text-white text-xs rounded-lg px-3 py-2 shadow-card">
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="capitalize">
          {entry.dataKey}: ${entry.value}
        </p>
      ))}
    </div>
  );
};

export default function WeeklyActivity() {
  return (
    <SectionCard className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-ink">Weekly Activity</h2>
        <Legend />
      </div>

      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyActivity} barGap={6} barCategoryGap="28%">
            <CartesianGrid vertical={false} stroke="#EEF1FA" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A93B8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A93B8", fontSize: 12 }}
              width={36}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(38,87,246,0.05)" }} />
            <Bar dataKey="deposit" fill="#2657F6" radius={[6, 6, 6, 6]} maxBarSize={10} />
            <Bar dataKey="withdraw" fill="#2ED9C3" radius={[6, 6, 6, 6]} maxBarSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
