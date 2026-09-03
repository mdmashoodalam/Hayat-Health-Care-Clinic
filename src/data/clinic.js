export const clinicInfo = {
  name: 'Hayat Health Care Clinic', hindiName: 'हयात हेल्थ केयर क्लिनिक',
  tagline: 'Your Health Is Our Priority', phones: ['6200397846', '9113422159'], whatsapp: '916200397846',
  address: 'Near Bazaar Samiti, Sitamarhi Road, Pupri, Bihar',
  hindiAddress: 'नजदीक बाजार समिति, सीतामढ़ी रोड, पुपरी', director: 'Dr. Mo. Razaullah Khan',
};
export const mapQuery = `${clinicInfo.name}, ${clinicInfo.address}`;
export const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
export const navLinks = [['Home', '/'], ['About', '/about'], ['Doctors', '/doctors'], ['Services', '/services'], ['Facilities', '/facilities'], ['Contact', '/contact']];
