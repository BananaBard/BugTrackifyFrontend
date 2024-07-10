type Status = "open" | "inprogress" | "resolved" | "closed" | "deffered" | "duplicated" | "reopen";

type Priority = "low" | "medium" | "high" | "urgent"

type Severity = "minor" | "major" | "critical" | "blocker"

export type Incident = {
  id: string;
  title: string;
  project: string;
  creationDate: string;
  assignedTo: string;
  createdBy: string;
  status: Status;
  priority: Priority;
  severity: Severity;
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

export type Project = {
  id: string;
  title: string;
  description: string;
  leader: string;
  team: string[];
  startDate: string;
  status: string;
  totalIncidents: number;
}

export type User = {
  createdat: string
  email: string
  fullname: string | null
  id: string
  role: string | null
  totalincidents: number | null
  totalprojects: number | null
  updatedat: string | null
}


//Function arguments

export interface LoginWithEmailArgs {
  email: string;
  password: string;
}