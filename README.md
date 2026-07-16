# BankDash Dashboard

A responsive banking dashboard UI built with **React**, **Vite**, and **Tailwind CSS**, matching the provided BankDash "Overview" design.

## Tech Stack

- **React 18** — component architecture
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling with a custom design-token theme
- **Recharts** — bar / pie / area charts
- **lucide-react** — icon set

## Project Structure

```
bankdash/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx        # Left nav, collapses to a drawer on mobile
│   │   │   └── Topbar.jsx         # Search, settings, notifications, avatar
│   │   ├── ui/
│   │   │   ├── SectionCard.jsx    # Shared white card shell
│   │   │   ├── SectionHeading.jsx # Shared "Title + See All" heading
│   │   │   └── IconButton.jsx     # Circular icon button
│   │   └── dashboard/
│   │       ├── CreditCardWidget.jsx
│   │       ├── MyCards.jsx
│   │       ├── RecentTransactions.jsx
│   │       ├── WeeklyActivity.jsx      # Bar chart
│   │       ├── ExpenseStatistics.jsx   # Pie chart
│   │       ├── QuickTransfer.jsx
│   │       └── BalanceHistory.jsx      # Area chart
│   ├── data/
│   │   └── dashboardData.js       # Mock data (swap for API calls)
│   ├── pages/
│   │   └── Dashboard.jsx          # Composes widgets into the grid
│   ├── App.jsx                    # Layout shell + mobile sidebar state
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js             # Design tokens (colors, radius, shadows)
├── postcss.config.js
├── vite.config.js
└── index.html
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Design Notes

- Colors, spacing, and typography are defined as reusable Tailwind tokens in `tailwind.config.js` (`brand`, `ink`, `surface`, `accent.*`) rather than hardcoded hex values in components.
- Every widget is its own component and reads from `src/data/dashboardData.js`, so wiring up a real API only requires replacing that file with data-fetching hooks — no component changes needed.
- Layout is mobile-first: the sidebar becomes an off-canvas drawer below the `lg` breakpoint, the topbar search collapses, and the two/three-column grids stack to a single column on small screens.
- Keyboard focus states are visible on all interactive elements (see `:focus-visible` rules in `index.css`).

## Responsive Behavior

| Breakpoint | Sidebar | Grid Layout |
|---|---|---|
| `< lg` (mobile/tablet) | Off-canvas drawer, toggled by hamburger icon | Single column, widgets stacked |
| `lg` | Fixed sidebar | Cards/Transactions and Chart rows switch to 2-column |
| `xl` | Fixed sidebar | Full multi-column layout matching the reference design |
