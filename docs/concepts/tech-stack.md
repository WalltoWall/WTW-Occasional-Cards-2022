# Tech Stack

## Version Control System

### Git

Website: <https://git-scm.com/>

Hosting: [GitHub](https://github.com)

This project uses Git to version control source code and is hosted on GitHub.

## Content Management System

### Prismic

Website: <https://prismic.io/>

Documentation: <https://prismic.io/docs/>

Many W|W projects use Prismic for its content management system (CMS). Prismic
is a headless API-based CMS designed to only handle content, not presentation.

While not every project will use Prismic, it's a common CMS of choice due to its
balance of technical capabilities alongside editor UX.

## Hosting

### TBD

Website: <https://example.com/>

Documentation: <https://www.example.com/docs/>

This project uses TBD for its website hosting. TBD is a static site hosting
provider with built-in continuous integration (CI) and content delivery network
(CDN).

When commits are pushed to the `master` branch on GitHub, TBD will fetch the
updated source, rebuild the site, and distribute the new files across its CDN.

Similarly, when documents are created or modified in Prismic, TBD will
automatically rebuild and republish the site.

## Front-end Framework

### NextJS

Website: <https://nextjs.org/>

Documentation: <https://www.gatsbyjs.org/docs>

This project uses NextJS to generate a static website using [React][react].
Using NextJS allows for many automatic optimizations and componentized front-end
development unique to static sites (buzzwords!).

Additional libraries used in the front-end to handle styling, data fetching,
etc. are listed below.

### React

Website: <https://reactjs.org/>

Documentation: <https://reactjs.org/docs/>

JavaScript library for building user interfaces. All parts of this project are
React-based.

### Storybook

Website: <https://storybook.js.org/>

Documentation: <https://storybook.js.org/docs/basics/introduction/>

An open source tool for developing UI components in isolation. Also utilized as
a decoupled solution for client-facing CMS documentation.

## Notable Libraries

### Tailwind CSS

Website: <https://tailwindcss.com/>

Documentation: <https://tailwindcss.com/docs>

A utility-first CSS framework that uses single-responsibility class names to
compose designs directly in markup.

### Capsize

Website: <https://seek-oss.github.io/capsize/>

Documentation: <https://seek-oss.github.io/capsize/>

A CSS utility that trims the leading and trailing white space above capital
letters and below the baseline in web-baesd typography.
