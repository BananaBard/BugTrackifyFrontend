import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { MoveHorizontalIcon } from "lucide-react"

const ProjectCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Project A</CardTitle>
                <CardDescription>Description of Project A</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">John Doe</div>
                            <div className="text-sm text-muted-foreground">Project Leader</div>
                        </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">More actions</span>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard