# Four Points by Sheraton Nashik — In-Room Dining Website

A responsive static website using **Times New Roman** throughout, with the supplied IRD menu PDF and phone/WhatsApp contact links.

## Included
- `index.html` — hotel landing page and guest actions
- `styles.css` — responsive visual styling
- `script.js` — lightweight progressive enhancement
- `assets/FINAL-IRD-Menu.pdf` — supplied menu PDF

## Contact links
- Phone: `tel:+919225099413`
- WhatsApp: `https://wa.me/919225099413`

Both actions use +91 9225099413. A guest's phone will handle the call action; WhatsApp opens the WhatsApp chat flow. WhatsApp may ask the guest to sign in or confirm the chat if needed.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For best PDF behavior, serve the folder over a local web server instead of opening the file directly. For example, if Python is installed, run `python -m http.server 8000` from the project folder, then open `http://localhost:8000`.

## Publish online (to create the real QR destination)
This is a static site and can be hosted on GitHub Pages, Netlify, or another static web host:
1. Upload the project files and folders while preserving the `assets` folder.
2. Enable publishing for the root folder.
3. Copy the public HTTPS website URL provided by the host.
4. Create a QR code pointing to that exact public URL and test it on a phone before printing.

The project ZIP does not include a live public URL because deployment requires access to your hosting account. Do not print a QR code pointing to localhost or a placeholder URL.

## Notes
- Menu text is displayed from the provided PDF itself, preserving its original pages and layout.
- The hotel's name is used as requested. This project is not an official Marriott International website and does not imply endorsement or affiliation.
- Confirm that the hotel authorizes use of its name, logo, menu and contact number before public deployment.
