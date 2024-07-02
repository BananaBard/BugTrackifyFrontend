
export enum Status {
  Open = "Open",
  InProgress = "In Progress",
  Resolved = "Resolved",
  Closed = "Closed",
  Reopened = "Reopened",
  Deferred = "Deferred",
  Duplicate = "Duplicate"
}

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Urgent = "Urgent"
}

export enum Severity {
  Trivial = "Trivial",
  Minor = "Minor",
  Major = "Major",
  Critical = "Critical",
  Blocker = "Blocker"
}

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

