import { clinicInfo } from '../data/clinic.js';
export const createWhatsAppURL = (message = `Hello ${clinicInfo.name}, I would like to know more about your services.`) => `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(message)}`;
export const todayInIndia = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date());
export function validateRequest(values, appointment = true, now = new Date()) {
  const errors = {};
  if (!values.name?.trim() || values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(values.phone?.replace(/[\s()-]/g, '') || '')) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (appointment) {
    if (values.age && (!/^\d+$/.test(values.age) || Number(values.age) > 120)) errors.age = 'Enter an age from 0 to 120.';
    if (!values.service) errors.service = 'Please choose a service.';
    const requestedDate = new Date(`${values.date}T${values.time || '23:59'}:00+05:30`);
    if (!values.date || !/^\d{4}-\d{2}-\d{2}$/.test(values.date) || Number.isNaN(requestedDate.getTime())) errors.date = 'Please choose a valid preferred date.';
    else if (requestedDate <= now) errors.date = 'Please choose a future date and time.';
    if (!values.time) errors.time = 'Please choose a preferred time.';
    if (!values.consent) errors.consent = 'Please acknowledge that the clinic needs to confirm your request.';
  } else {
    if (!values.subject?.trim()) errors.subject = 'Please add a subject.';
    if (!values.message?.trim()) errors.message = 'Please enter a short message.';
  }
  return errors;
}
export function appointmentMessage(v) {
  return `Hello ${clinicInfo.name},\n\nI would like to request an appointment.\n\nPatient Name: ${v.name.trim()}\nPhone: ${v.phone.trim()}\nAge: ${v.age || 'Not specified'}\nGender: ${v.gender || 'Not specified'}\nService: ${v.service}\nDoctor: ${v.doctor || 'Any available doctor'}\nPreferred Date: ${v.date}\nPreferred Time: ${v.time} (IST)\nMessage: ${v.message?.trim() || 'None'}\n\nPlease confirm my appointment.`;
}
export function contactMessage(v) { return `Hello ${clinicInfo.name},\n\nName: ${v.name.trim()}\nPhone: ${v.phone.trim()}\nEmail: ${v.email?.trim() || 'Not provided'}\nSubject: ${v.subject.trim()}\nMessage: ${v.message.trim()}`; }
