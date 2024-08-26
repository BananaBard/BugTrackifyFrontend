type Status = "open" | "inprogress" | "resolved" | "closed" | "deffered" | "duplicated" | "reopen";

type Priority = "low" | "medium" | "high" | "urgent"

type Severity = "minor" | "major" | "critical" | "blocker"

export type Incident = {
  id: string;
  title: string;
  project: string;
  created_at: string;
  assigned_to: {
    id: string,
    fullname: string
  };
  created_by: {
    id: string,
    fullname: string
  };
  updated_at: string;
  status: Status;
  priority: Priority;
  severity: Severity;
  description: string;
  steps_to_reproduce: string[];
  actual_result: string;
  expected_result: string;
  comments?: UserComment[];
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
  leader: {fullname: string};
  team: Pick<User, 'fullname' | 'role'>[];
  start_date: string;
  status: string;
  incident_count: number;
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

export interface CreateProjectArgs {
  title: string;
  description: string;
  leader: string;
  status: string;
}