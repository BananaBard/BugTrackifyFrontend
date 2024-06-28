import { type Incident } from "@/types"
import PreviewIncidentCard from "../cards/incidents/PreviewIncidentCard"

interface PreviewProps {
    incidents: Incident[]
}

const PreviewIncidentListing = ({incidents}: PreviewProps) => {
    return (
        <ul>
            {incidents.map((i) => (
          <PreviewIncidentCard incident={i}/>
        ))}
        </ul>
    )
}

export default PreviewIncidentListing