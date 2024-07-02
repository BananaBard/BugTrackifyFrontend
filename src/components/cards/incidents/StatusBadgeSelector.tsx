import { StatusBadge } from "@/components/ui/statusBadge"
import { Status } from "@/types";
import { AlertCircleIcon, CheckIcon, RefreshCwIcon, XIcon } from "lucide-react"
import React from "react";



const statusIcons: Record<Status, React.ReactNode> = {
    open: <CheckIcon className="h-3 w-3 mr-1"/>,
    inprogress: <RefreshCwIcon className="h-3 w-3 mr-1"/>,
    resolved: <CheckIcon className="h-3 w-3 mr-1"/>,
    closed: <XIcon className="h-3 w-3 mr-1" />,
    deffered: <AlertCircleIcon className="h-3 w-3 mr-1" />,
    duplicated: <XIcon className="h-3 w-3 mr-1" />,
    reopen: <RefreshCwIcon className="h-3 w-3 mr-1" />,
}

interface StatusBadgeSelectorProps {
    status: Status;
}

const StatusBadgeSelector: React.FC<StatusBadgeSelectorProps> = ({status}) => {
    if (!(status in statusIcons)) {
        throw new Error(`Invalid status: ${status}`)
    }

    return (
        <StatusBadge variant={status}>
            {statusIcons[status]}
            {status == 'inprogress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
        </StatusBadge>
    )
}

export default StatusBadgeSelector