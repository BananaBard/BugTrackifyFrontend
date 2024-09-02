import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const priorityBadgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[80px] justify-center",
    {
        variants: {
            variant: {
                low:
                    "border-transparent bg-emerald-500 text-neutral-100 hover:bg-emerald-500/80",
                medium:
                    "border-transparent bg-yellow-600 text-neutral-100 hover:bg-yellow-600/80",
                high:
                    "border-transparent bg-orange-500 text-neutral-100 hover:bg-orange-500/80",
                urgent:
                    "border-transparent bg-red-500 text-neutral-100 hover:bg-red-500/80",
            },
        },
        defaultVariants: {
            variant: "low",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priorityBadgeVariants> { }

function PriorityBadge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(priorityBadgeVariants({ variant }), className)} {...props}>
            {props.children}
        </div>
    )
}

export { PriorityBadge, priorityBadgeVariants }