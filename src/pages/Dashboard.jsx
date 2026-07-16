import MyCards from "../components/dashboard/MyCards";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import WeeklyActivity from "../components/dashboard/WeeklyActivity";
import ExpenseStatistics from "../components/dashboard/ExpenseStatistics";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import BalanceHistory from "../components/dashboard/BalanceHistory";

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 pb-10 space-y-6">
      {/* Row 1: Cards + Recent Transactions */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 items-start">
        <MyCards />
        <RecentTransactions />
      </div>

      {/* Row 2: Weekly Activity + Expense Statistics */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 items-stretch">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      {/* Row 3: Quick Transfer + Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  );
}
