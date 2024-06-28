import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IncidentCardProps } from "@/types"

const PreviewIncidentCard = ({incident}: IncidentCardProps) => {
    return (
        <li key={incident.id}>
            <Card>
              <CardHeader className="py-6">
                <CardTitle className="text-pretty">{incident.title}</CardTitle>
                <CardDescription className="pt-2">
                  {incident.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Created by: <strong>{incident.createdBy}</strong>
                </p>
                <p>
                  At: <strong>{incident.creationDate}</strong>
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 justify-between">
                <Button variant={'destructive'}>Delete</Button>
                <Button variant={'default'}>Open</Button>
              </CardFooter>
            </Card>
          </li>
    )
}

export default PreviewIncidentCard