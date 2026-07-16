import { Search, Settings, Bell, Menu } from "lucide-react";
import IconButton from "../ui/IconButton";
import { currentUser } from "../../data/dashboardData";


export default function Topbar({ title = "Overview", onMenuClick }) {
  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 h-20 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-ink-muted hover:text-ink"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">{title}</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden md:flex items-center gap-2 bg-surface rounded-full h-11 px-4 w-64 lg:w-72">
          <Search size={18} className="text-ink-muted shrink-0" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm placeholder-ink-muted w-full"
          />
        </div>

        <IconButton className="hidden sm:flex" aria-label="Settings">
          <Settings size={20} />
        </IconButton>

        <IconButton aria-label="Notifications" className="relative">
          <Bell size={20} className="text-accent-pink" />
          <span className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-accent-pink" />
        </IconButton>

        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-11 h-11 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
