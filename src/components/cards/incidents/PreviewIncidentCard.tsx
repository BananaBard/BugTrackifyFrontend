import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IncidentCardProps } from "@/types"
import StatusBadgeSelector from "./StatusBadgeSelector"
import PriorityBadgeSelector from "./PriorityBadgeSelector"
import SeverityBadgeSelector from "./SeverityBadgeSelector"

const PreviewIncidentCard = ({ incident }: IncidentCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex flex-col items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">#{incident.id}</CardTitle>
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
          <span className="text-sm text-muted-foreground">Created</span>
          <span className="text-sm">{incident.creationDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Assigned To</span>
          <span className="text-sm">{incident.assignedTo}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Creator</span>
          <span className="text-sm">{incident.createdBy}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant='outline'>View Incident</Button>
      </CardFooter>
    </Card>
  )
}

export default PreviewIncidentCard