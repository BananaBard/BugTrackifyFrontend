import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IncidentCardProps } from "@/types"
import { CheckIcon, GaugeIcon, OctagonAlertIcon } from "lucide-react"

const PreviewIncidentCard = ({ incident }: IncidentCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex flex-col items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">#{incident.id}</CardTitle>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-green-50 order-3">
              <CheckIcon className="h-3 w-3 mr-1" />
              {incident.status}
            </div>
            <div className="inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-yellow-50 order-2">
              <GaugeIcon className="h-3 w-3 mr-1" />
              {incident.priority}
            </div>
            <div className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-red-50 order-1">
              <OctagonAlertIcon className="h-3 w-3 mr-1" />
              {incident.severity}
            </div>
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