[YOUR NAME HERE] <http://a1-yourfirstandlastname.onrender.com>

<!-- TODO: update the name/URL above once deployed, and rename the repo/Render service to a1-yourFirstAndLastName -->

This project is my personal introduction page for CS 4241 (Webware), built with plain HTML/CSS/JS and deployed on Render. It's styled as a small "build manifest" — the page presents my info the way a config file or terminal session would, with a typed intro line and animated skill bars.

## Technical Achievements

- **Styled the page with CSS (5 pts, 11+ rules)**: Wrote a full stylesheet (`style.css`) built around CSS custom properties for the color palette and typography. Rules cover the terminal-style header/footer bar, the nav, the `dl`-based "manifest" key/value layout for the about section, the animated skill bar tracks/fills, the course table, the palette swatches, focus states for accessibility, a `prefers-reduced-motion` fallback, and a mobile breakpoint.
- **JavaScript animation**: `script.js` runs two animations: (1) a typing effect that types out `whoami` character-by-character in the terminal intro line using `setInterval`, and (2) skill bars for HTML/CSS/JS that fill from 0% to their experience level using a CSS `width` transition triggered by JS once the skills section scrolls into view (`IntersectionObserver`). Both animations respect `prefers-reduced-motion` and skip straight to their end state if the user has that setting on.
- **Extra semantic HTML tags**: Beyond the basics, the page uses `<header>`, `<nav>`, `<main>`, `<section>`, `<dl>`/`<dt>`/`<dd>` (about info as key/value pairs), `<table>`/`<caption>`/`<thead>`/`<tbody>`/`<th scope="col">` (coursework), `<figure>`/`<figcaption>` (palette screenshot), and `<footer>`.

## Design Achievements

- **Color palette from Adobe Color**: Built a 5-color palette — a warm paper background, a near-black ink for text, a deep pine green for the header/nav chrome, an amber accent, and a muted teal for links/secondary accents. All five are defined as CSS custom properties in `:root` and used throughout the stylesheet (header/footer background, accent tags, link colors, skill bar gradient, swatch borders). A screenshot of the palette wheel is embedded via `<figure>` in the "palette" section — <!-- TODO: replace `palette-screenshot.png` with your actual exported screenshot from color.adobe.com -->.
- **Google Font**: Used **JetBrains Mono** for headings, labels, and anything meant to read as "code" (nav, manifest labels, skill bars, table headers), paired with **Source Serif 4** for body copy, to play up the code/terminal concept while keeping longer text readable.