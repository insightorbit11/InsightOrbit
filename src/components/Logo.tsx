import { Compass } from "lucide-react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="h-16 w-16 flex items-center gap-1">
      <img src="/logo.png" alt="InsightOrbit Logo" />
      <div className="relative w-10 h-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-linear-to-r from-amber-400 to-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-1 rounded-full bg-slate-900 flex items-center justify-center">
          <Compass className="w-5 h-5 text-amber-400" />
        </div>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-2xl font-bold text-[#0855b1]">InsightOrbit</span>
        <span className="text-xs text-(--c1) text-center">
          Insights Elevated. Emotions understood.
        </span>
      </div>
    </div>
  );
}

export default Logo;
