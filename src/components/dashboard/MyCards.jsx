import SectionHeading from "../ui/SectionHeading";
import CreditCardWidget from "./CreditCardWidget";
import { cards } from "../../data/dashboardData";

export default function MyCards() {
  return (
    <div>
      <SectionHeading title="My Cards" action="See All" />
      <div className="flex flex-col sm:flex-row gap-5 overflow-x-auto scrollbar-none">
        {cards.map((card) => (
          <CreditCardWidget key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
