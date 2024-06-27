import { incidentReports } from "@/api placeholder/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";

const DashboardPage = () => {
  console.log(incidentReports);
  return (
    <main className="max-w-6xl mx-auto py-10">
      <ul className="flex gap-4">
        {incidentReports.map((i) => (
          <li key={i.id}>
            <Card>
              <CardHeader className="py-6">
                <CardTitle className="text-pretty">{i.title}</CardTitle>
                <CardDescription className="pt-2">
                  {i.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Created by: <strong>{i.createdBy}</strong>
                </p>
                <p>
                  At: <strong>{i.creationDate}</strong>
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 justify-between">
                <Button variant={'destructive'}>Delete</Button>
                <Button variant={'default'}>Open</Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default DashboardPage;
