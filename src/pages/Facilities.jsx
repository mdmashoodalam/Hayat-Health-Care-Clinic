import { PageHeader } from '../components/common/UI';
import { FacilitiesSection,EmergencyCTA,HealthCTA } from '../components/home/Sections';
export default function Facilities(){return <><PageHeader eyebrow="Our facilities" title="Essential support. One familiar place.">Facilities that help you access care in your community. Call ahead for current availability.</PageHeader><FacilitiesSection full/><EmergencyCTA/><HealthCTA/></>;}
