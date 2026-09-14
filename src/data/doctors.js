import doctorAAgarwal from '../assets/clinic/doctor-a-agarwal.jpeg';

export const doctors = [
  {
    id:'rizwan', name:'Dr. Md. Rizwan', specialty:'General Physician & Surgeon',
    qualifications:['B.U.M.S. (B.U.)'], affiliations:['GTCH Patna', 'Former RMO, Rescue Hospital Patna'],
    expertise:['General Medicine', 'General Surgery'], photo:true,
  },
  {
    id:'islam', name:'Dr. M. Islam', specialty:'General Physician & Surgeon',
    qualifications:[], affiliations:['Professor & HOD, GTCH Patna'],
    expertise:['General Medicine', 'General Surgery', 'Bone, Joint & Nerve Conditions'],
  },
  {
    id:'agarwal', name:'Dr. A. Agarwal', specialty:'General & Laparoscopic Surgeon',
    qualifications:['M.B.B.S.', 'M.S. (MNS)', 'D.C.P.', 'D.N.B.', 'F.M.A.S.'], affiliations:[],
    expertise:['General Surgery', 'Laparoscopic Surgery'],
    photo:{
      src:doctorAAgarwal,
      alt:'Dr. A. Agarwal, General and Laparoscopic Surgeon at Hayat Health Care Clinic',
      width:800,
      height:1200,
    },
  },
  {
    id:'rahman', name:'Dr. S. Rahman', specialty:'General Surgeon',
    qualifications:['M.S.'], affiliations:['C.C.S. University, Meerut, Uttar Pradesh'],
    honours:['Gold Medalist'], expertise:['General Surgery'],
  },
  {
    id:'jahan', name:'Dr. Jahan Aara', specialty:'Physician, Surgeon, Obstetrics & Gynaecology',
    qualifications:['B.U.M.S. (B.U.)'], affiliations:['S.U.M.C.H., DBG'],
    expertise:['General Medicine', 'Surgery', 'Obstetrics & Gynaecology'],
  },
  {
    id:'reza', name:'Dr. Ahmad Reza', specialty:'General Physician & Surgeon',
    qualifications:['B.U.M.S. (B.U.)'], affiliations:['GTCH Patna'],
    expertise:['General Medicine', 'General Surgery'],
  },
];
