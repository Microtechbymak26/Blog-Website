# Next.js Assignment 8

This is a full-stack web application built with Next.js, Tailwind CSS, and Sanity CMS.

**What is this project?**

- This project is a modern blog or content website.
- The frontend and backend are integrated using Next.js.
- The design and layout are handled by Tailwind CSS.
- All content (like blog posts) is managed through Sanity CMS, a headless content management system.
- You can easily add, edit, or delete content using the Sanity Studio admin panel, and the website will update automatically.

---

## Table of Contents
- [Overview](#overview)
- [Frontend (Next.js)](#frontend-nextjs)
- [Backend & API](#backend--api)
- [Sanity CMS](#sanity-cms)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How Content Flows](#how-content-flows)
- [Deployment](#deployment)
- [FAQ](#faq)

---

## Overview
This project uses Next.js for the frontend, providing server-side rendering, static site generation, and API routes. The backend logic (APIs, data fetching) is handled within Next.js API routes and custom server code. Sanity CMS is used as a headless backend for managing blog content, which is fetched and rendered on the frontend.

---

## Frontend (Next.js)
- Built with Next.js (React framework).
- Uses Tailwind CSS for styling and @tailwindcss/typography for rich text formatting.
- Pages are located in `src/app/`.
- Components like Header, Footer, and Hero are in `src/app/components/`.
- Blog pages are dynamically generated using the `[slug]` route in `src/app/blog/[slug]/page.tsx`.
- Global styles are in `src/app/globals.css`.

---

## Backend & API
- Next.js API routes or server components handle backend logic.
- Data fetching from Sanity is done using GROQ queries and the Sanity client.
- Backend logic for fetching blog posts, images, and live preview is in `src/sanity/lib/`.
- Environment variables for Sanity configuration are managed in `src/sanity/env.ts`.

---

## Sanity CMS
- Sanity is used as a headless CMS for managing blog content.
- Schemas for content types are defined in `src/sanity/schemaTypes/`.
- The Sanity Studio (content editing UI) is available under `/studio` route.
- Sanity configuration is in `sanity.config.ts` and `sanity.cli.ts`.
- Content is fetched from Sanity and rendered on the frontend using GROQ queries.

---

## Folder Structure
```
my-app/
  ├── src/
  │   ├── app/
  │   │   ├── blog/           # Blog pages (dynamic routes)
  │   │   ├── components/     # Reusable UI components
  │   │   ├── fonts/          # Custom fonts
  │   │   ├── globals.css     # Global styles
  │   │   ├── layout.tsx      # Root layout
  │   │   └── page.tsx        # Home page
  │   └── sanity/
  │       ├── blog.ts         # Blog logic
  │       ├── env.ts          # Sanity environment config
  │       ├── lib/            # Sanity client, image, live preview
  │       ├── schemaTypes/    # Sanity schemas
  │       └── structure.ts    # Sanity structure
  ├── sanity.config.ts        # Sanity Studio config
  ├── tailwind.config.ts      # Tailwind CSS config
  ├── package.json            # Project dependencies
  └── README.md               # Project documentation
```

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd "Next js assignment 8/my-app"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Sanity:**
   - Install Sanity CLI globally if not already:
     ```bash
     npm install -g @sanity/cli
     ```
   - Initialize or deploy Sanity Studio:
     ```bash
     npx sanity install
     npx sanity start
     ```
   - Configure environment variables in `.env` if needed (see `src/sanity/env.ts`).

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   - The app will be available at `http://localhost:3000`
   - Sanity Studio will be available at `http://localhost:3000/studio`

---

## Usage
- Visit the home page to see the hero section and blog listing.
- Click on a blog post to view its details (fetched from Sanity).
- Use the `/studio` route to access Sanity Studio and manage content.

---

## Customization
- **Add/Edit Blog Posts:** Use Sanity Studio to create or edit blog content.
- **Styling:** Modify `globals.css` or Tailwind config for custom styles.
- **Components:** Add or update components in `src/app/components/`.
- **Sanity Schemas:** Update or add schemas in `src/sanity/schemaTypes/` for new content types.

---

## License
This project is for educational purposes.

---

## Features
- Modern blog/content platform with dynamic routing
- Fully responsive design using Tailwind CSS
- Headless CMS integration (Sanity) for easy content management
- Live preview and instant content updates
- Clean code structure and reusable components

---

## Technologies Used
- **Next.js** (React framework for SSR/SSG and API routes)
- **Tailwind CSS** (utility-first CSS framework)
- **@tailwindcss/typography** (for rich text styling)
- **Sanity CMS** (headless content management system)
- **TypeScript** (type safety and better developer experience)

---

## How Content Flows
1. Content is created and managed in Sanity Studio (admin panel).
2. The frontend (Next.js) fetches content from Sanity using GROQ queries and the Sanity client.
3. Pages and blog posts are rendered dynamically based on the content in Sanity.
4. Any updates in Sanity are reflected on the website instantly (no redeploy needed).

---

## Deployment
- You can deploy this project to Vercel, Netlify, or any Node.js hosting platform.
- Make sure to set the required environment variables for Sanity in your deployment settings.
- For Sanity Studio, you can deploy it separately using `sanity deploy` or run it alongside your Next.js app.

---

## FAQ
**Q: Can I use another CMS instead of Sanity?**
A: Yes, but you will need to update the data fetching logic and schemas accordingly.

**Q: How do I add a new page or component?**
A: Add new files in the `src/app/` or `src/app/components/` directory and update your routes/layouts as needed.

**Q: How do I customize the design?**
A: Edit `globals.css`, `tailwind.config.ts`, or component files to change styles and layout.

