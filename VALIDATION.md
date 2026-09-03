# Validation record

- Production build: passed; React Router secondary routes emitted separately.
- Request unit tests: 6 passed (validation, Indian date/time handling, WhatsApp encoding, and contact fields).
- Responsive browser checks: all eight pages plus the custom 404 checked at 320, 375, 430, 768, 1024, 1280, 1440 and 1920 pixels; no horizontal overflow found.
- Browser checks: mobile menu and navigation; one H1 per page; appointment/contact required-field errors; gallery opening, next image and Escape closing; service category filtering, search and empty state; expected developer credit URL and new-tab target.
- WebMCP: valid service/doctor preparation updated the visible form; invalid service rejected; no message sent.
- Console: no application errors observed during route checks.
- Images: displayed clinic sources converted to WebP without changing content; original PNGs preserved. Hero source reduced from 1,668,815 to 180,102 bytes.
- Main JavaScript: reduced from 1,182 kB to 418 kB minified by importing only used icons (approximately 133 kB gzip).
- WhatsApp link and message formatting tested; no actual clinic messages were sent and no appointment was booked.
- Lighthouse numerical scores have not been measured. They depend on final hosting and external fonts/maps.
