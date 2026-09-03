import { readFile,writeFile,mkdir } from 'node:fs/promises';
import { loadEnv } from 'vite';
const env={...loadEnv('production',process.cwd(),''),...process.env};
const origin=env.VITE_SITE_URL || 'https://hayat-health-care-clinic-pupri.mashoodalam05.chatgpt.site';
const base=new URL(env.VITE_BASE_PATH||'/',origin);
const routes={
  '':['Hayat Health Care Clinic Pupri | Doctor & Healthcare Services','Hayat Health Care Clinic in Pupri provides general physician, surgery, physiotherapy, pathology, oxygen, nebulization, emergency and essential healthcare services.'],
  about:['About Our Clinic | Hayat Health Care Clinic Pupri','Learn about Hayat Health Care Clinic, our patient-focused approach, local healthcare facilities and director in Pupri, Bihar.'],
  doctors:['Our Doctors | Hayat Health Care Clinic Pupri','Meet Dr. Md. Rizwan and the medical team at Hayat Health Care Clinic. Enquire about doctor availability and request a consultation.'],
  services:['Medical Services | Hayat Health Care Clinic Pupri','Explore physician consultations, surgery, women’s health, physiotherapy, pathology, ECG and emergency support in Pupri.'],
  facilities:['Clinic Facilities | Hayat Health Care Clinic Pupri','Explore ICU, oxygen, nebulization, physiotherapy, ECG, pathology, pharmacy and maternity facilities. Call for current availability.'],
  appointment:['Request an Appointment | Hayat Health Care Clinic Pupri','Request an appointment at Hayat Health Care Clinic through WhatsApp. The clinic will confirm doctor availability and your preferred visit.'],
  contact:['Contact & Directions | Hayat Health Care Clinic Pupri','Call 6200397846 or 9113422159. Find Hayat Health Care Clinic near Bazaar Samiti, Sitamarhi Road, Pupri, Bihar.'],
  'privacy-policy':['Privacy Policy | Hayat Health Care Clinic Pupri','Understand how appointment requests, contact enquiries and external services work on the Hayat Health Care Clinic website.'],
};
const source=await readFile('dist/index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const schema={'@context':'https://schema.org','@type':'MedicalClinic',name:'Hayat Health Care Clinic',alternateName:'हयात हेल्थ केयर क्लिनिक',url:base.href,telephone:'+91 6200397846',address:{'@type':'PostalAddress',streetAddress:'Near Bazaar Samiti, Sitamarhi Road',addressLocality:'Pupri',addressRegion:'Bihar',addressCountry:'IN'},availableLanguage:['English','Hindi'],areaServed:'Pupri and nearby areas'};
for(const [route,[title,description]] of Object.entries(routes)){
  const url=new URL(route,base).href;
  let html=source.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`)
    .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*("\s*\/>)/g,`$1${escape(description)}$2`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*("\s*\/>)/g,`$1${escape(title)}$2`)
    .replace(/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*("\s*\/>)/g,`$1${new URL('og.png',base).href}$2`)
    .replace('</head>',`<link rel="canonical" href="${url}" /><meta property="og:url" content="${url}" /><script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);
  const directory=route?`dist/${route}`:'dist';await mkdir(directory,{recursive:true});await writeFile(`${directory}/index.html`,html);
}
await writeFile('dist/404.html',source.replace('</head>','<meta name="robots" content="noindex" /></head>'));
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml',base).href}\n`);
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(routes).map(r=>`<url><loc>${new URL(r,base).href}</loc></url>`).join('')}</urlset>`);
console.log('Generated route metadata, clinic schema, sitemap and robots.txt.');

