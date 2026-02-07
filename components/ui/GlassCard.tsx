import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = false,
    ...props
}: GlassCardProps) => {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:translate-y-[-5px] hover:shadow-[0_10px_40px_rgba(102,252,241,0.1)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
