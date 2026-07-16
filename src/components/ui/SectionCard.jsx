/**
 * SectionCard
 * A consistent white, rounded, shadowed panel used across the dashboard
 * for every "widget" (cards list, charts, transactions, etc).
 */
export default function SectionCard({ children, className = "", padded = true }) {
  return (
    <div
      className={`bg-surface-card rounded-2xl shadow-card ${
        padded ? "p-5 sm:p-6" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
