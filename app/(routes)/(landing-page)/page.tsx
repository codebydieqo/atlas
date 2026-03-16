import { Button } from "@/components/button";
import { ArrowRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <p className="w-4/5 text-7xl font-semibold text-center">
          Welcome to Atlas! Your all in one daily life tracker.
        </p>
        <p className="text-lg opacity-50">
          Organize, plan, and journal your life with ease.
        </p>
        <div>
          <Button className="group flex items-center gap-2">
            Get Started{" "}
            <ArrowRightIcon
              size={12}
              className="transform-all duration-500 ease-in-out group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
