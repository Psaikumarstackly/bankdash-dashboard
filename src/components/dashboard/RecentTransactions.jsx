import { CreditCard, Wallet, CircleDollarSign } from "lucide-react";
import SectionCard from "../ui/SectionCard";
import SectionHeading from "../ui/SectionHeading";
import { transactions } from "../../data/dashboardData";

const ICONS = { CreditCard, Wallet, CircleDollarSign };

export default function RecentTransactions() {
  return (
    <SectionCard>
      <SectionHeading title="Recent Transaction" />
      <ul className="space-y-5">
        {transactions.map((txn) => {
          const Icon = ICONS[txn.icon];
          const isPositive = txn.amount > 0;
          return (
            <li key={txn.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${txn.iconBg} ${txn.iconColor}`}
                >
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">{txn.title}</p>
                  <p className="text-xs text-ink-muted">{txn.date}</p>
                </div>
              </div>
              <span
                className={`text-sm font-semibold shrink-0 ${
                  isPositive ? "text-accent-success" : "text-accent-danger"
                }`}
              >
                {isPositive ? "+" : "-"}${Math.abs(txn.amount).toLocaleString()}
              </span>
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
