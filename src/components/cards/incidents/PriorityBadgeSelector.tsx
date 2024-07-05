import { PriorityBadge } from "@/components/ui/priorityBadge";
import { Priority } from "@/types";
import { GaugeIcon } from "lucide-react";
import React from "react";



interface PriorityBadgeSelectorProps {
    priority: Priority;
}

const PriorityBadgeSelector: React.FC<PriorityBadgeSelectorProps> = ({priority}) => {
    return (
        <PriorityBadge variant={priority}>
            <GaugeIcon className="h-3 w-3 mr-1" />
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </PriorityBadge>
    )
}

export default PriorityBadgeSelector