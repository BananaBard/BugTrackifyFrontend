export type Incident = {
  id: string;
  title: string;
  project: string;
  creationDate: string;
  assignedTo: string;
  createdBy: string;
  tag: string;
  priority: string;
  severity: string;
  description: string;
  stepsToReproduce: string[];
  actualResult: string;
  expectedResult: string;
  comments: UserComment[];
};

export type UserComment = {
  creator: string;
  content: string;
};


export interface IncidentCardProps {
  incident: Incident
}