# Petrie De Wit — design direction

## Core idea

The portfolio is framed as an exploration of systems, geography and practical intelligence. The visual language treats the site as a field notebook: precise coordinates, restrained technical metadata and editorial typography support a clear account of Petrie’s education and work.

The central statement is **“Systems, understood.”** It positions Petrie De Wit as a student and emerging technical professional working between geoinformatics, computer science, data and infrastructure.

## Visual system

- **Palette:** obsidian `#08090B`, graphite surfaces, platinum text, muted silver body copy and a precision lime `#C4F566` accent.
- **Type:** Manrope provides the editorial display voice; DM Mono carries coordinates, labels and system metadata.
- **Composition:** asymmetrical two-column sections, open spacing, fine rules and full-bleed surface changes keep the page from reading as a card grid.
- **Texture:** a restrained dot field, grid lines and contour-like strokes create depth without decorative neon or generic gradients.

## Motion and interaction

The hero uses the supplied Deus Vult mark with a static coordinate and contour-inspired treatment. The work panels use the supplied Deus Vult and Afrimat marks, so the visual language stays connected to the actual work history rather than using stock or invented project photography.

The site preserves native scrolling and does not attach a scroll animation loop. Motion is limited to hover feedback and layout transitions, keeping the page responsive and readable.

## Content decisions

The implementation uses the attached CV as the source of truth: BSc GeoInformatics with Computer Science at the University of Stellenbosch, BScHons in GeoInformatics from 2027, Deus Vult Consulting, Afrimat, the crime-fighting solution architecture project and the portfolio project. The copy is written in first person.

No project results, employers, qualifications or links were invented. The original CV download and verified LinkedIn and GitHub links remain available.

## Engineering and accessibility

- The page uses a static CSS visual in the hero, with no continuous canvas render loop.
- The page has semantic sections, heading hierarchy, labelled fields, visible focus styles from browser defaults, accessible tab controls and keyboard-operable navigation.
- The layout adapts at tablet and phone widths, including a mobile navigation panel and single-column project treatment.
- `index.html` includes a descriptive title, meta description, Open Graph metadata, canonical URL and Person structured data.

## Known limitations

- The existing repository did not include verified project screenshots, detailed case studies or a favicon/social preview image.
- The contact form continues to use the existing Formspree endpoint and should be verified before production use.
- The repository was delivered without Git metadata in this environment, so the redesign is implemented in the working tree and has not been pushed or deployed.

## Validation

- `npm.cmd run build` passes.
- `npm.cmd run lint` passes.
- Local browser inspection verified the rendered content hierarchy and page title.
- A 390px viewport check verified no horizontal overflow and the mobile navigation control.
