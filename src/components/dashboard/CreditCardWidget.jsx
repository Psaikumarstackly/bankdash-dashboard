const CardChip = ({ light }) => (
  <svg width="34" height="24" viewBox="0 0 34 24" fill="none">
    <rect width="34" height="24" rx="4" fill={light ? "#1B2559" : "#ffffff"} fillOpacity={light ? 1 : 0.9} />
    <path
      d="M5 12H29M12 5V19M22 5V19"
      stroke={light ? "#ffffff" : "#2657F6"}
      strokeOpacity={0.7}
      strokeWidth="1.4"
    />
  </svg>
);

export default function CreditCardWidget({ card }) {
  const isDark = card.theme === "dark";

  return (
    <div
      className={`
        rounded-2xl overflow-hidden shrink-0 w-full sm:w-[380px]
        ${isDark ? "bg-gradient-to-br from-brand to-indigo-600 text-white" : "bg-surface-card text-ink border border-surface-soft"}
      `}
    >
      <div className="p-6 flex items-start justify-between">
        <div>
          <p className={`text-xs mb-2 ${isDark ? "text-white/70" : "text-ink-muted"}`}>
            Balance
          </p>
          <p className="text-2xl font-bold tracking-wide">
            ${card.balance.toLocaleString()}
          </p>
        </div>
        <CardChip light={!isDark} />
      </div>

      <div className="px-6 pb-6 flex items-center justify-between">
        <div>
          <p className={`text-[10px] tracking-wider mb-1 ${isDark ? "text-white/60" : "text-ink-muted"}`}>
            CARD HOLDER
          </p>
          <p className="text-sm font-semibold">{card.holder}</p>
        </div>
        <div>
          <p className={`text-[10px] tracking-wider mb-1 ${isDark ? "text-white/60" : "text-ink-muted"}`}>
            VALID THRU
          </p>
          <p className="text-sm font-semibold">{card.validThru}</p>
        </div>
      </div>

      <div
        className={`
          flex items-center justify-between px-6 py-5
          ${isDark ? "bg-white/10" : "bg-surface"}
        `}
      >
        <p className="text-lg font-semibold tracking-[0.15em]">{card.number}</p>
        <div
          className={`
            w-11 h-6 rounded-full flex items-center px-0.5
            ${isDark ? "bg-white/30" : "bg-ink-muted/30"}
          `}
        >
          <span className={`w-5 h-5 rounded-full ${isDark ? "bg-white" : "bg-white"}`} />
        </div>
      </div>
    </div>
  );
}
