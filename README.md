# Portfolio Website

A modern portfolio website built with TypeScript, Svelte, Bun, and Tailwind CSS.

![Portfolio Screenshot](https://github.com/user-attachments/assets/527377e9-3264-4bb8-b3c4-61ec7d46f7f9)

## Tech Stack

- **TypeScript** - Type-safe JavaScript for better development experience
- **Svelte** - Modern, reactive framework with excellent performance
- **Bun** - Fast all-in-one JavaScript runtime and package manager
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (optional, for faster package management)

### Installation

1. Clone the repository:
```sh
git clone https://github.com/jannikseus/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```sh
npm install
# or with Bun (if installed)
bun install
```

### Developing

Start the development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The site will be available at `http://localhost:5173/`

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── routes/          # SvelteKit routes
│   │   ├── +page.svelte # Main portfolio page
│   │   └── +layout.svelte # Layout component
│   ├── lib/            # Reusable components and utilities
│   ├── app.css         # Global styles with Tailwind directives
│   └── app.html        # HTML template
├── static/             # Static assets
├── tailwind.config.js  # Tailwind CSS configuration
├── svelte.config.js    # SvelteKit configuration
└── package.json        # Project dependencies
```

## Customization

1. Edit the content in `src/routes/+page.svelte` to personalize your portfolio
2. Add your projects and experience
3. Customize the styling with Tailwind classes
4. Update the color scheme in `tailwind.config.js`

## Deployment

This SvelteKit app can be deployed to various platforms:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Any Node.js hosting service

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## License

See [LICENSE](LICENSE) file for details.
