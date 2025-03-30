# GemsCoder - Professional Software Development

A modern software development company website built with Next.js 14, featuring a blog powered by Sanity CMS.

## Features

- 🚀 Next.js 14 with App Router
- 💻 Modern UI with Tailwind CSS
- 📝 Blog with Sanity CMS
- ✨ Framer Motion animations
- 🎨 Custom SVG illustrations
- 📱 Fully responsive design
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font:** Geist Font

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gemscoder.git
cd gemscoder
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── components/        # React components
│   └── layout.tsx         # Root layout
├── public/                # Static assets
│   ├── hero-pattern.svg
│   ├── tech-pattern.svg
│   └── ...
├── sanity/               # Sanity CMS configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
