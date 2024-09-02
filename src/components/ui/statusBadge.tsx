import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-[80px] justify-center",
    {
        variants: {
            variant: {
                open:
                    "border-transparent bg-blue-500 text-neutral-100 hover:bg-blue-500/80",
                inprogress:
                    "border-transparent bg-purple-500 text-neutral-100 hover:bg-purple-500/80",
                resolved:
                    "border-transparent bg-emerald-500 text-neutral-100 hover:bg-emerald-500/80",
                closed:
                    "border-transparent bg-gray-500 text-neutral-100 hover:bg-gray-500/80",
                deffered:
                    "border-transparent bg-yellow-600 text-neutral-100 hover:bg-yellow-600/80",
                duplicated:
                    "border-transparent bg-gray-500 text-neutral-100 hover:bg-gray-500/80",
                reopen:
                    "border-transparent bg-blue-500 text-neutral-100 hover:bg-blue-500/80",
            },
        },
        defaultVariants: {
            variant: "open",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> { }

function StatusBadge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(statusBadgeVariants({ variant }), className)} {...props}>
            {props.children}
        </div>
    )
}

export { StatusBadge, statusBadgeVariants }