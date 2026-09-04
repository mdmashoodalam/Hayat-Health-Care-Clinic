import { PageHeader,SectionTitle } from '../components/common/UI';
import { DoctorSpotlight,HealthCTA } from '../components/home/Sections';
import { DoctorCard } from '../components/common/Cards';
import { doctors } from '../data/doctors';
export default function Doctors(){return <><PageHeader eyebrow="Our doctors" title="People who put your health first.">Review the qualifications, affiliations and care areas supplied by the clinic for each member of the medical team.</PageHeader><DoctorSpotlight/><section className="section container"><SectionTitle eyebrow="OUR MEDICAL TEAM" title="Qualifications and areas of care.">Doctor details are reproduced from clinic-provided materials.</SectionTitle><div className="doctors-grid">{doctors.map(d=><DoctorCard key={d.id} doctor={d}/>)}</div><p className="section-note">Please contact the clinic to confirm credentials, consultation times and doctor availability before your visit.</p></section><HealthCTA/></>;}
