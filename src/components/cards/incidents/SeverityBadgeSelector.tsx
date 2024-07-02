import { SeverityBadge } from "@/components/ui/severityBadge";
import { Severity } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import React from "react";



interface SeverityBadgeSelectorProps {
    severity: Severity;
}

const SeverityBadgeSelector: React.FC<SeverityBadgeSelectorProps> = ({severity}) => {
    return (
        <SeverityBadge variant={severity}>
            <AlertCircleIcon className="h-3 w-3 mr-1" />
            {severity.charAt(0).toUpperCase() + severity.slice(1)}
        </SeverityBadge>
    )
}

export default SeverityBadgeSelector