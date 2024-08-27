import getErrorMessage, { baseUrl } from "@/lib/utils"
import { Incident } from "@/types"
import { toast } from "sonner";

interface CreateIncidentArgs extends Omit<Incident, 'created_by' | 'status' | 'priority' | 'severity' | 'project' | 'id' | 'updated_at' | 'created_at' | 'assigned_to'> {
    priority: "low" | "medium" | "high" | "urgent";
    severity: "minor" | "major" | "critical" | "blocker";
    status: string;
    project_id: string;
    created_by: string;
  }

const createIncidentService = async(incident:CreateIncidentArgs) => {
    if (incident.project_id == null) throw new Error('Something went wrong')
    try {
        const res = await fetch(`${baseUrl}incidents/new`, {
            method: 'POST',
            body: JSON.stringify({
                title: incident.title,
                description: incident.description,
                created_by: incident.created_by,
                project_id: incident.project_id,
                status: incident.status,
                priority: incident.priority,
                severity: incident.severity,
                steps_to_reproduce: [incident.steps_to_reproduce],
                actual_result: incident.actual_result,
                expected_result: incident.expected_result
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        if (!res.ok) {
            toast.error('Something went wrong', {
                description: 'Could not create incident ticket',
                duration: 3000
            })
            return;
        } else {
            const data = await res.json();
            toast.success('Incident ticket created', {
                duration: 3000
            })
            const incident = data.incident[0]
            return incident as Incident;
        }
    } catch(error) {
        throw new Error(getErrorMessage(error))
    }
}

export default createIncidentService