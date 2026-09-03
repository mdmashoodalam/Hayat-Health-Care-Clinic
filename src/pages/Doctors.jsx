import { PageHeader,SectionTitle } from '../components/common/UI';
import { DoctorSpotlight,HealthCTA } from '../components/home/Sections';
import { DoctorCard } from '../components/common/Cards';
import { doctors } from '../data/doctors';
export default function Doctors(){return <><PageHeader eyebrow="Our doctors" title="People who put your health first.">Get to know our medical team. Contact the clinic to confirm consultation times and availability.</PageHeader><DoctorSpotlight/><section className="section container"><SectionTitle eyebrow="OUR MEDICAL TEAM" title="Here to listen. Here to care."/><div className="doctors-grid">{doctors.map(d=><DoctorCard key={d.id} doctor={d}/>)}</div></section><HealthCTA/></>;}
