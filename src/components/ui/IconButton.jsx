export default function IconButton({ children, className = "", ...props }) {
  return (
    <button
      className={`w-11 h-11 rounded-full bg-surface flex items-center justify-center text-ink-light hover:bg-surface-soft transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
