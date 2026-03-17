import {
  BookIcon,
  Calendar1Icon,
  ChartLine,
  ForkKnifeIcon,
  SmileIcon,
  TargetIcon,
  WalletIcon,
} from "lucide-react";

export const cards = [
  {
    id: 1,
    icon: ForkKnifeIcon,
    title: "Meal Tracking",
    description:
      "Log your meals, track nutrition, and build healthier eating habits with intelligent insights",
    styles: {
      icon: "bg-orange-500 text-white",
      card: "bg-orange-100",
    },
  },
  {
    id: 2,
    icon: BookIcon,
    title: "Journaling",
    description:
      "Capture your thoughts, reflect on your day, and track your emotional well-being over time",
    styles: {
      icon: "bg-blue-500 text-white",
      card: "bg-blue-100",
    },
  },
  {
    id: 3,
    icon: Calendar1Icon,
    title: "Daily Planning",
    description:
      "Organize your tasks, set goals, and plan your days with intuitive scheducling tools",
    styles: {
      icon: "bg-green-500 text-white",
      card: "bg-green-100",
    },
  },
  {
    id: 4,
    icon: WalletIcon,
    title: "Expense Tracking",
    description:
      "Monitor your spending, create budgets, and gain clarity on your financial habits",
    styles: {
      icon: "bg-pink-500 text-white",
      card: "bg-pink-100",
    },
  },
];

export const points = [
  {
    id: 1,
    icon: ChartLine,
    title: "Smart Insights",
    description:
      "Get personalized analytics and trends that help you understand your patterns and make better decisions",
  },
  {
    id: 2,
    icon: TargetIcon,
    title: "Goal Setting",
    description:
      "Set meaningful goals and track your progress with visual dashboards that keep you motivated",
  },
  {
    id: 3,
    icon: SmileIcon,
    title: "User Experience",
    description:
      "Everything created and built with user experience in mind so you worry on what what matters most",
  },
];
