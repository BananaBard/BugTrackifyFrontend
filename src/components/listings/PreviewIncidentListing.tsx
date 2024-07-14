import { type Incident } from "@/types"
import PreviewIncidentCard from "../cards/incidents/PreviewIncidentCard"

interface PreviewProps {
    incidents: Incident[]
}

const PreviewIncidentListing = ({incidents}: PreviewProps) => {
    return (
        <ul className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 min-[1860px]:grid-cols-4 gap-x-4">
            {incidents.map((i) => (
          <PreviewIncidentCard key={i.id} incident={i}/>
        ))}
        </ul>
    )
}

export default PreviewIncidentListing