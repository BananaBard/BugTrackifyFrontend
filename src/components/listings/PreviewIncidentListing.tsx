import { type Incident } from "@/types"
import PreviewIncidentCard from "../cards/incidents/PreviewIncidentCard"

interface PreviewProps {
    incidents: Incident[]
}

const PreviewIncidentListing = ({incidents}: PreviewProps) => {
    return (
        <ul className="grid grid-cols-4 gap-x-2 gap-y-2">
            {incidents.map((i) => (
          <PreviewIncidentCard incident={i}/>
        ))}
        </ul>
    )
}

export default PreviewIncidentListing