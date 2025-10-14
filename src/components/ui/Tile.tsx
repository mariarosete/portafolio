import React from "react";

const Tile: React.FC<{ Icon: any; label: string; ring?: string; bg?: string }> = ({
  Icon, label, ring = "ring-slate-200", bg = "bg-white",
}) => (
  <div className="group flex flex-col items-center gap-2">
    <div
      className={[
        "rounded-2xl p-4 ring-1 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        ring, bg,
      ].join(" ")}
    >
      <Icon className="w-10 h-10" />
    </div>
    <span className="text-sm text-slate-700">{label}</span>
  </div>
);

export default Tile;
