# AI Job Board

A premium, modern Job Board web application built for the Technical Project-based Assessment. This project uses **Next.js (App Router)** and **Vanilla CSS** to deliver a fast, responsive, and beautiful user experience.

## Features
- **Modern Premium Design**: Dark mode aesthetic, glassmorphism, smooth animations, and clean typography.
- **Job Listings**: View a curated list of AI and software engineering roles.
- **Job Details**: Dedicated pages for each job with comprehensive information.
- **Job Posting Form**: A sleek form interface for recruiters to mock-post jobs.
- **Next.js App Router**: Utilizing the latest React features and Next.js 15 routing.
- **Fully Responsive**: Optimized for desktop and mobile screens.

## Technical Requirements Fulfilled
1. **Build a web app**: Created a complete Job Board.
2. **Push code to Git**: The repository is version-controlled and pushed to GitHub.
3. **Write CI/CD pipeline**: `.github/workflows/deploy.yml` configured to deploy automatically.
4. **Deploy to Vercel**: Handled automatically on `push` to the `main` branch via the CI/CD pipeline using the Vercel CLI.
5. **Write Documentation**: This comprehensive `README.md`.

## Setup Instructions

### Local Development
1. Clone the repository: `git clone <your-repo-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view the application.

### CI/CD Setup for Vercel
To enable automatic deployments via GitHub Actions, ensure the following secrets are added to your GitHub repository settings (`Settings > Secrets and variables > Actions`):
- `VERCEL_TOKEN`: Your Vercel Personal Access Token.
- `VERCEL_ORG_ID`: Your Vercel Organization ID.
- `VERCEL_PROJECT_ID`: Your Vercel Project ID (created when you first deploy or link the project in Vercel).

With these secrets in place, any push to the `main` branch will automatically trigger a production build and deployment to Vercel.
