# Muhammad Mureed - Personal Portfolio

Student Name: Muhammad Mureed  
Project Name: M.Mureed_React_lab_2  
Tech Stack: React, Vite, Material UI (MUI)  

## Live Deployment
Live URL: **https://muhammadmureed.github.io/M.Mureed_React_lab_2/**

## Features & Requirements Fulfilled

1. **Semantic HTML Structure**:
   - `header`: Built with Material UI AppBar and Toolbar
   - `nav`: Navigation links with mobile Drawer support
   - `main`: Main container wrapping core portfolio sections
   - `footer`: Footer with quick navigation, social links, and copyright
   - `section`: Semantic sections for About, Projects, Skills, and Contact

2. **Sections Included**:
   - **About / Hero**: Personal introduction, developer title, bio, and call-to-action buttons
   - **Projects**: Portfolio project cards highlighting coursework and technical applications
   - **Skills**: Categorized overview of technical capabilities across frontend, data, and tools
   - **Contact**: Interactive contact form and direct communication channels

3. **Responsive Mobile Layout**:
   - Fluid responsive layout using Material UI Grid and Flexbox
   - Sliding hamburger Drawer navigation for smaller screen widths

4. **Images with Alt Text**:
   - Profile avatar with descriptive `alt` attribute for accessibility

5. **CI/CD Automatic Production Deployment**:
   - Configured with GitHub Actions workflow (`.github/workflows/deploy.yml`)
   - Any commit pushed to the `main` branch automatically triggers production build and deploy to GitHub Pages

## Local Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build production bundle:
```bash
npm run build
```
