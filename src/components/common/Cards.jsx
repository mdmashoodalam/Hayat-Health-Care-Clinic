import { Link } from 'react-router-dom';
import { DoctorPhoto, Icon } from './UI';
import { createWhatsAppURL } from '../../utils/whatsapp';
export function ServiceCard({ service:s }) { return <article className="service-card"><span className="icon-box"><Icon name={s.icon}/></span><h3>{s.name}</h3><p>{s.description}</p>{s.confirm&&<span className="availability-note">Please confirm availability</span>}<a className="text-link" href={createWhatsAppURL(`Hello Hayat Health Care Clinic, I would like to enquire about ${s.fullName || s.name}. Please let me know the availability.`)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${s.name}`}>Enquire about care<Icon name="ArrowUpRight" size={16}/></a></article>; }
export function DoctorCard({ doctor:d }) {
  const details = [
    ['Qualifications', d.qualifications],
    ['Affiliation & role', d.affiliations],
    ['Recognition', d.honours],
    ['Areas of care', d.expertise],
  ].filter(([,items])=>items?.length);
  return <article className="doctor-card">{d.photo?<DoctorPhoto className="card-doctor-photo"/>:<div className="doctor-avatar" aria-label="Doctor profile avatar"><Icon name="UserRound" size={65}/><span className="avatar-plus">+</span></div>}<div className="doctor-card-body"><span className="eyebrow">YOUR CARE TEAM</span><h3>{d.name}</h3><p className="doctor-specialty">{d.specialty}</p><dl className="doctor-profile-details">{details.map(([label,items])=><div key={label}><dt><Icon name="BadgeCheck" size={14}/>{label}</dt><dd>{items.join(' · ')}</dd></div>)}</dl><Link className="text-link" to={`/appointment?doctor=${encodeURIComponent(d.name)}`}>Consult Doctor<Icon name="ArrowUpRight" size={16}/></Link></div></article>;
}
