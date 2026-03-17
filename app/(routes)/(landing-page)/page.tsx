import { Button } from "@/components/button";
import { cards, points } from "@/constants";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRightIcon, StarsIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <div className="w-full h-[70vh] flex flex-col items-center justify-center gap-5">
        <p className="w-4/5 text-7xl font-semibold text-center">
          Welcome to Atlas! Your all in one daily life tracker.
        </p>
        <p className="text-lg text-gray-400">
          Organize, plan, and journal your life with ease.
        </p>
        <div>
          <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
            <Button className="group flex items-center gap-2 text-lg px-5 py-2">
              Get Started{" "}
              <ArrowRightIcon
                size={12}
                className="transform-all duration-500 ease-in-out group-hover:translate-x-1"
              />
            </Button>
          </SignInButton>
        </div>
      </div>
      <div
        className="w-full h-[70vh] flex flex-col justify-center items-center gap-5"
        id="features"
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-5xl font-semibold text-center">
            Everything You Need in One Place
          </p>
          <p className="text-gray-500 text-center">
            Powerful tools designed to help you take control of every aspect of
            your daily life
          </p>
        </div>
        <div className="w-full flex gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={cn(
                "w-1/4 flex flex-col gap-5 justify-start items-start px-5 py-7 rounded-md",
                card.styles.card,
              )}
            >
              <div
                className={cn(
                  "w-12 aspect-square grid place-items-center rounded-md",
                  card.styles.icon,
                )}
              >
                <card.icon size={20} />
              </div>
              <p className="text-2xl font-semibold">{card.title}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-[70vh] py-30 flex gap-5" id="benefits">
        <div className="w-1/2 h-full space-y-5">
          <p className="text-5xl font-semibold">Built for Your Success</p>
          <p className="text-gray-400">
            Atlas combines simplicity aith power, giving you the tools to
            transform your daily routines into lasting positive change
          </p>
          <div className="space-y-5">
            {points.map((point) => (
              <div
                key={point.id}
                className="w-full flex gap-5 justify-start items-start"
              >
                <div className="w-12 aspect-square grid place-items-center rounded-md bg-[#1c39bb] text-white">
                  <point.icon size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-semibold">{point.title}</p>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-[70vh] flex flex-col gap-5 justify-center items-center bg-[#1c39bb]/10 rounded-lg">
          <div className="w-28 aspect-square rounded-full grid place-items-center bg-white">
            <StarsIcon size={40} />
          </div>
          <p className="text-xl font-semibold">Start Your Journey Today</p>
        </div>
      </div>
    </div>
  );
}
