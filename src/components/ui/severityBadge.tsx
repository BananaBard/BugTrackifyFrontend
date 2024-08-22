import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const severityBadgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[80px] justify-center",
    {
        variants: {
            variant: {
                minor:
                    "border-transparent bg-emerald-500 text-neutral-100 hover:bg-emerald-500/80",
                major:
                    "border-transparent bg-yellow-600 text-neutral-100 hover:bg-yellow-600/80",
                critical:
                    "border-transparent bg-red-500 text-neutral-100 hover:bg-red-500/80",
                blocker:
                    "border-transparent bg-purple-500 text-neutral-100 hover:bg-purple-500/80",
            },
        },
        defaultVariants: {
            variant: "minor",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof severityBadgeVariants> { }

function SeverityBadge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(severityBadgeVariants({ variant }), className)} {...props}>
            {props.children}
        </div>
    )
}

export { SeverityBadge, severityBadgeVariants }