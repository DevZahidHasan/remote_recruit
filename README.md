# RemoteRecruit

This is a modern React web application built as a solution for the RemoteRecruit frontend technical examination.

## Project Setup Instructions

1. Clone the repository.
2. Ensure you have Node.js installed.
3. Run `npm install` to install all dependencies.
4. Run `npm run dev` to start the local development server.

## Frameworks and Libraries Used

*   **React (v19):** Frontend library for building the UI and component-based architecture.
*   **Vite:** Extremely fast build tool and development server.
*   **Tailwind CSS (v3):** Utility-first CSS framework used for rapid UI development and ensuring complete responsiveness across desktop, tablet, and mobile views.
*   **Framer Motion:** Used to implement smooth scroll animations, fade-ins, and element transitions as requested in the design fidelity requirements.
*   **Lucide React:** Icon library for lightweight, beautiful SVG icons used throughout the project (e.g., globe, search, map-pin, faq chevrons).

## Known Issues or Limitations

*   **Design Matching:** Since direct programmatic access to the Figma design file requires authentication/API access, the color palette and precise spacing were matched closely based on provided screenshots rather than extracted exact design tokens. You can easily tweak the colors in `tailwind.config.js`.
*   **Mockup UI:** The dashboard mockup elements in the "Features" section use static approximations with randomized DiceBear avatars to represent candidates (Python Developer, Front End Wizard).
*   **Static Data:** The FAQ section is populated with placeholder/mock data as requested. No backend integration is present.
