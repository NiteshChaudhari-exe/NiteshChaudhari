# Nitesh Chaudhari — Portfolio

Modern, responsive portfolio built with Next.js (App Router) showcasing projects, blogs, and contact information.

**Status:** [✅ Live Preview](https://nitesh-chaudhari.vercel.app/)

**Badges:**

- **Framework:** `Next.js`
- **Language:** `TypeScript` (if enabled) / `JavaScript`
- **License:** `MIT`

**Quick Overview**

- **Purpose:** Personal portfolio to showcase projects, blog posts, and contact details.
- **Key folders:** `app/` (pages & components), `public/`, `JsonData/` (sample content), `UI-Components/` (reusable UI)

**Features**

- Responsive design with modern layout
- Project page with details and JSON-driven content
- Blog listing and post page
- Contact Page

## Tech Stack

- Next.js (App Router)
- React
- CSS / PostCSS
- Optional: TypeScript

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js** ≥20.9.0 (required for Next.js 16)
- **npm** ≥10.0.0

### Installation & Run

```powershell
# Navigate to project 
git clone https://github.com/NiteshChaudhari-exe/NiteshChaudhari.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```powershell
npm run dev      # Start dev server (hot reload enabled)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint checks
```



## Project Structure

Highlights of the repository layout:

- `app/` — main application routes and components (see `UI-Components` and `Components` inside)
- `JsonData/` — sample data files: `Blogs.json`, `projects.json`, `RecentPosts.json`
- `public/` — static assets and images (`public/logos/` available)

## 📝 Content Management

All portfolio content is stored as JSON for easy updates:

- **`JsonData/projects.json`** — Project showcase items
- **`JsonData/Blogs.json`** — Blog posts list
- **`JsonData/RecentPosts.json`** — Recent posts widget

Edit these JSON files to update content without changing code.

## 🌐 Deployment

### ✅ **Recommended: Vercel** (One-Click Deploy)

**Steps:**

1. **Push to GitHub**
   ```powershell
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Environment Variables (if needed)**
   - Copy values from `.env.example` to Vercel dashboard
   - Redeploy after adding env vars

4. **Custom Domain (Optional)**
   - Add domain in Vercel project settings
   - Update DNS records as instructed

### Alternative: Netlify / Self-Hosted

**Netlify:**
- Import repository
- Build: `npm run build`
- Publish: `.next`

**Local Production Build:**

```powershell
npm run build
npm start
```

## 📊 Pre-Deployment Checklist

Before deploying to production:

- ✅ Node.js ≥20.9.0 installed locally
- ✅ All TypeScript/ESLint errors fixed (`npm run lint`)
- ✅ Production build tested (`npm run build && npm start`)
- ✅ Security headers enabled (in `next.config.ts`)
- ✅ Repository pushed to GitHub
- ✅ Vercel project created & secrets configured

## 🛠️ Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
NODE_ENV=production

# Optional: Google Analytics
# NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Contact Form
# CONTACT_FORM_EMAIL=your-email@example.com
```

## 📄 License

MIT — See `LICENSE` file for details.

## 🤝 Contributing

Contributions welcome! Open issues or PRs with improvements.

## 📧 Contact

- **GitHub:** [NiteshChaudhari-exe](https://github.com/NiteshChaudhari-exe)
- **Portfolio:** [✅ Live Preview](https://nitesh-chaudhari.vercel.app/)

---

**Last Updated:** December 2025 | **Status:** Production-Ready ✅
