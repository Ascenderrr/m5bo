# Roomus Website

Roomus is a static roommate-matching website concept for students looking for a room and compatible housemates. The interface uses a navy, yellow, and plum visual identity with custom SVG illustrations and a responsive layout.

## Pages

- **Home** (`index.html`) — hero section, platform features, how-it-works steps, and contact form.
- **Join Beta** (`pages/joinbeta.html`) — early-access form for beta interest.

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Custom Roomus logo, favicon, hero artwork, and feature/step icons.
- Accessible labels, keyboard focus states, decorative SVG handling, and reduced-motion support.
- Scroll reveal animations and sticky header state using vanilla JavaScript.
- Same-page anchor scrolling from the hero to the “How it works” section.
- Automatic copyright year in the footer.
- Contact form that opens the visitor’s default email client with a prefilled message.
- No frameworks, build tools, external fonts, CDNs, or remote assets.

## Run locally

No installation or build step is required. Open [`index.html`](./index.html) directly in a browser, or serve the folder with any simple local web server.

The beta page is available at [`pages/joinbeta.html`](./pages/joinbeta.html).

## Project structure

```text
assets/       SVG artwork, logo files, and design references
css/          Shared tokens and page styling
js/           Global UI behavior and form behavior
pages/        Additional HTML pages
index.html    Home page
```

## Development notes

- Keep paths relative so the site continues to work from `file://` URLs.
- Shared design tokens live in `css/universal.css`.
- Page-specific styles live in `css/style.css`.
- Temporary planning and code-graph folders are excluded through `.gitignore`.