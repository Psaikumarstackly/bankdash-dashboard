export default function SectionHeading({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      {action && (
        <button className="text-sm font-medium text-ink-muted hover:text-brand transition-colors">
          {action}
        </button>
      )}
    </div>
  );
}
