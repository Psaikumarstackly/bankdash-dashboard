import LiviaBator from "../assets/livia bator.png";
import Randypress from "../assets/randy press.png";
import Workman from "../assets/workman.png";
import Profileimg from "../assets/profile img.png";

export const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { key: "transactions", label: "Transactions", icon: "ArrowLeftRight" },
  { key: "accounts", label: "Accounts", icon: "User" },
  { key: "investments", label: "Investments", icon: "BarChart3" },
  { key: "credit-cards", label: "Credit Cards", icon: "CreditCard" },
  { key: "loans", label: "Loans", icon: "CircleDollarSign" },
  { key: "services", label: "Services", icon: "Wrench" },
  { key: "privileges", label: "My Privileges", icon: "Gem" },
  { key: "settings", label: "Setting", icon: "Settings" },
];

export const cards = [
  {
    id: "card-1",
    theme: "dark",
    balance: 5756,
    holder: "Eddy Cusuma",
    validThru: "12/22",
    number: "3778 **** **** 1234",
  },
  {
    id: "card-2",
    theme: "light",
    balance: 5756,
    holder: "Eddy Cusuma",
    validThru: "12/22",
    number: "3778 **** **** 1234",
  },
];

export const transactions = [
  {
    id: "txn-1",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: "CreditCard",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: "txn-2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: "Wallet",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
  {
    id: "txn-3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: "CircleDollarSign",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
  },
];

export const weeklyActivity = [
  { day: "Sat", deposit: 480, withdraw: 230 },
  { day: "Sun", deposit: 320, withdraw: 130 },
  { day: "Mon", deposit: 280, withdraw: 250 },
  { day: "Tue", deposit: 460, withdraw: 380 },
  { day: "Wed", deposit: 150, withdraw: 200 },
  { day: "Thu", deposit: 380, withdraw: 220 },
  { day: "Fri", deposit: 380, withdraw: 300 },
];

export const expenseStatistics = [
  { name: "Entertainment", value: 30, color: "#2B3467" },
  { name: "Bill Expense", value: 15, color: "#FF8A3D" },
  { name: "Others", value: 35, color: "#2657F6" },
  { name: "Investment", value: 20, color: "#D925C9" },
];

export const quickTransferContacts = [
  {
    id: "contact-1",
    name: "Livia Bator",
    role: "CEO",
    avatar:
      `${LiviaBator}`,
  },
  {
    id: "contact-2",
    name: "Randy Press",
    role: "Director",
    avatar:
      `${Randypress}` },
  {
    id: "contact-3",
    name: "Workman",
    role: "Designer",
    avatar:
      `${Workman}`,
  },
];

export const balanceHistory = [
  { month: "Jul", value: 180 },
  { month: "Aug", value: 480 },
  { month: "Sep", value: 400 },
  { month: "Oct", value: 700 },
  { month: "Nov", value: 250 },
  { month: "Dec", value: 550 },
  { month: "Jan", value: 750 },
];

export const currentUser = {
  name: "Charlene Reed",
  avatar:
    `${Profileimg}`,
};
