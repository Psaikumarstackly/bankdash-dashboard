import { useState } from "react";
import { ChevronRight, Send } from "lucide-react";
import SectionCard from "../ui/SectionCard";
import SectionHeading from "../ui/SectionHeading";
import { quickTransferContacts } from "../../data/dashboardData";

export default function QuickTransfer() {
  const [amount, setAmount] = useState("525.50");
  const [selected, setSelected] = useState(quickTransferContacts[0].id);

  const handleSend = (e) => {
    e.preventDefault();
    // Wire up to your transfer API / mutation here.
    console.log({ to: selected, amount });
  };

  return (
    <SectionCard>
      <SectionHeading title="Quick Transfer" />

      <div className="flex items-center gap-6 overflow-x-auto scrollbar-none pb-1">
        {quickTransferContacts.map((contact) => {
          const isSelected = contact.id === selected;
          return (
            <button
              key={contact.id}
              onClick={() => setSelected(contact.id)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className={`w-16 h-16 rounded-full object-cover ring-2 transition-all ${
                  isSelected ? "ring-brand" : "ring-transparent"
                }`}
              />
              <div className="text-center">
                <p
                  className={`text-sm ${
                    isSelected ? "font-bold text-ink" : "font-medium text-ink-light"
                  }`}
                >
                  {contact.name}
                </p>
                <p className="text-xs text-ink-muted">{contact.role}</p>
              </div>
            </button>
          );
        })}

        <button
          className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink-muted shrink-0 hover:bg-surface-soft transition-colors"
          aria-label="More contacts"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <form onSubmit={handleSend} className="mt-8 flex items-center gap-4">
        <p className="text-sm text-ink-muted whitespace-nowrap hidden sm:block">
          Write Amount
        </p>
        <div className="flex-1 flex items-center bg-surface rounded-full h-14 pl-5 pr-2">
          <span className="text-ink-muted mr-1">$</span>
          <input
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm font-medium text-ink"
            aria-label="Amount"
          />
          <button
            type="submit"
            className="h-10 px-6 rounded-full bg-brand text-white text-sm font-semibold flex items-center gap-2 hover:bg-brand-dark transition-colors shrink-0"
          >
            Send
            <Send size={15} />
          </button>
        </div>
      </form>
    </SectionCard>
  );
}
