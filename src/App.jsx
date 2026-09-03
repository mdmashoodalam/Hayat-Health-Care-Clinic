import { lazy,Suspense,useEffect,useRef } from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import { Header,Footer,FloatingActions } from './components/layout/Layout';
import Home from './pages/Home';
import { clinicInfo } from './data/clinic';
const About=lazy(()=>import('./pages/About'));
const Doctors=lazy(()=>import('./pages/Doctors'));
const Services=lazy(()=>import('./pages/Services'));
const Facilities=lazy(()=>import('./pages/Facilities'));
const Appointment=lazy(()=>import('./pages/Appointment'));
const Contact=lazy(()=>import('./pages/Contact'));
const PrivacyPolicy=lazy(()=>import('./pages/PrivacyPolicy'));
const NotFound=lazy(()=>import('./pages/NotFound'));
const titles={'/':'Hayat Health Care Clinic Pupri | Doctor & Healthcare Services','/about':'About Our Clinic','/doctors':'Our Doctors','/services':'Medical Services','/facilities':'Clinic Facilities','/appointment':'Request an Appointment','/contact':'Contact & Directions','/privacy-policy':'Privacy Policy'};
function RouteEffects(){const {pathname}=useLocation();const first=useRef(true);useEffect(()=>{document.title=pathname==='/'?titles['/']:`${titles[pathname]||'Page Not Found'} | Hayat Health Care Clinic Pupri`;document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);document.querySelector('meta[name="twitter:title"]')?.setAttribute('content',document.title);const origin=import.meta.env.VITE_SITE_URL||'https://hayat-health-care-clinic-pupri.mashoodalam05.chatgpt.site';if(origin){const base=new URL(import.meta.env.BASE_URL,origin);let canonical=document.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical);}canonical.href=new URL(pathname.slice(1),base).href;}if(!first.current){window.scrollTo({top:0,behavior:'instant'});document.getElementById('main')?.focus({preventScroll:true});}first.current=false;},[pathname]);return null;}
const schema={'@context':'https://schema.org','@type':'MedicalClinic',name:clinicInfo.name,alternateName:clinicInfo.hindiName,telephone:'+91 6200397846',address:{'@type':'PostalAddress',streetAddress:'Near Bazaar Samiti, Sitamarhi Road',addressLocality:'Pupri',addressRegion:'Bihar',addressCountry:'IN'},availableLanguage:['English','Hindi'],areaServed:'Pupri and nearby areas'};
export default function App(){return <><Header/><RouteEffects/><script type="application/ld+json">{JSON.stringify(schema)}</script><main id="main" tabIndex={-1}><Suspense fallback={<div className="container page-loading" role="status">Loading your page…</div>}><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/doctors" element={<Doctors/>}/><Route path="/services" element={<Services/>}/><Route path="/facilities" element={<Facilities/>}/><Route path="/appointment" element={<Appointment/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy-policy" element={<PrivacyPolicy/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></main><Footer/><FloatingActions/></>;}

