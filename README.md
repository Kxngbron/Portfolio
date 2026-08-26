# Bron Banks — Portfolio

Personal portfolio site for Bron Banks, a Software Engineering Technology graduate from
Centennial College. A single-page React app with a sticky sidebar nav, smooth-scroll
sections, and a showcase of real projects.

## Built With

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) for dev server and bundling
- [Font Awesome](https://fontawesome.com/) for icons
- Plain CSS with custom properties — no UI framework

## Features

- One-page layout (Home, Services, Projects, About, Contact) navigated via a fixed
  sidebar that highlights the active section as you scroll
- Responsive design with a collapsible mobile nav
- Scroll-reveal transitions between sections
- Fully custom design system (no Bootstrap/Tailwind)

## Featured Projects

| Project | Description | Stack |
|---|---|---|
| [The Commons](https://the-commons-shell.vercel.app) ([repo](https://github.com/Kxngbron/The-Commons-Community-Organizer-)) | AI-assisted community engagement platform — social feed, event coordination, mutual-aid requests, and emergency alerts on a micro-frontend architecture | TypeScript, React, Node.js, GraphQL, MongoDB, Vite, Tailwind CSS |
| [Online Marketing](https://online-marketing-u1mj.onrender.com) ([repo](https://github.com/Kxngbron/Online-Marketing)) | Full-stack marketplace app — filterable listings, persistent cart, JWT-authenticated checkout, and a seller dashboard | JavaScript, React, React Router, Bootstrap, Node.js, MongoDB, JWT |
| [Cuisine Finder](https://github.com/Kxngbron/Cuisine-Finder) | Native Android app for discovering and navigating to restaurants across the GTA by cuisine type, with Google Maps routing | Kotlin, Jetpack Compose, Google Maps SDK, Material 3 |

## Getting Started

```bash
git clone https://github.com/Kxngbron/Portfolio.git
cd Portfolio/portfolio
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

Bundles the app for production into the `build` folder.

## Project Structure

```
portfolio/
├── public/            # Static assets, standalone project demos, resume
└── src/
    ├── assets/         # Images and generated icons
    ├── components/     # Page sections (Home, Services, Projects, About, Contact)
    │   └── layout/     # Sidebar and Footer
    ├── index.css       # Design system and styles
    └── main.jsx        # App entry point
```

## Contact

- Email: [bronbanks.bab@gmail.com](mailto:bronbanks.bab@gmail.com)
- LinkedIn: [linkedin.com/in/bron-banks](https://www.linkedin.com/in/bron-banks/)
