import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IncidentCardProps } from "@/types"
import StatusBadgeSelector from "./StatusBadgeSelector"
import PriorityBadgeSelector from "./PriorityBadgeSelector"
import SeverityBadgeSelector from "./SeverityBadgeSelector"
import { parseTimestamp } from "@/lib/utils"

const PreviewIncidentCard = ({ incident }: IncidentCardProps) => {
  return (
    <Card className="w-full flex flex-col">
      <CardHeader>
        <div className="flex flex-col items-start justify-between">
          <div>
            <span className="text-sm text-neutral-300">{incident.id}</span>
            <CardTitle className="text-md font-semibold">{incident.title}</CardTitle>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <StatusBadgeSelector status={incident.status}/>
            <PriorityBadgeSelector priority={incident.priority}/>
            <SeverityBadgeSelector severity={incident.severity}/>
          </div>
        </div>
        <CardDescription>{incident.title}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Created at</span>
          <span className="text-sm">{parseTimestamp(incident.created_at)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Assigned To</span>
          <span className="text-sm">{incident.assigned_to ? incident.assigned_to.fullname : 'Not assigned' }</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Creator</span>
          <span className="text-sm">{incident.created_by.fullname}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" variant='outline'>View Incident</Button>
      </CardFooter>
    </Card>
  )
}

export default PreviewIncidentCard