import {
  LayoutDashboard,
  ArrowLeftRight,
  User,
  BarChart3,
  CreditCard,
  CircleDollarSign,
  Wrench,
  Gem,
  Settings,
  Wallet,
  X,
} from "lucide-react";
import { navItems } from "../../data/dashboardData";

// Maps the icon key stored in data to the actual lucide component,
// so the data file stays framework-agnostic (just strings).
const ICONS = {
  LayoutDashboard,
  ArrowLeftRight,
  User,
  BarChart3,
  CreditCard,
  CircleDollarSign,
  Wrench,
  Gem,
  Settings,
};

export default function Sidebar({ activeKey = "dashboard", isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink/40 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-surface-card
          flex flex-col z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between px-6 h-20 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center">
              <Wallet size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold text-ink">BankDash.</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-ink-muted hover:text-ink"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto scrollbar-none px-3 py-2">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = ICONS[item.icon];
              const isActive = item.key === activeKey;
              return (
                <li key={item.key}>
                  <a
                    href={`#${item.key}`}
                    className={`
                      relative flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-brand/10 text-brand"
                          : "text-ink-muted hover:bg-surface-soft hover:text-ink"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-r-full bg-brand" />
                    )}
                    <Icon size={20} strokeWidth={2} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
