import { AlertTriangle } from "lucide-react";

interface TLDRSectionProps {
    children: React.ReactNode;
    type?: "info" | "warning";
}

export const TLDRSection = ({ children, type = "info" }: TLDRSectionProps) => {
    return (
        <div className={`
      relative p-6 rounded-xl border mb-8
      ${type === "warning" ? "bg-soft-red/5 border-soft-red/20" : "bg-teal/5 border-teal/20"}
    `}>
            <div className="absolute -top-3 left-6">
                <span className={`
           px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border
           ${type === "warning"
                        ? "bg-void text-soft-red border-soft-red/50"
                        : "bg-void text-teal border-teal/50"}
         `}>
                    TL;DR Summary
                </span>
            </div>
            <div className="flex gap-4 items-start pt-2">
                {type === "warning" && <AlertTriangle className="w-5 h-5 text-soft-red shrink-0 mt-1" />}
                <div className="text-silver/90 text-base leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};
