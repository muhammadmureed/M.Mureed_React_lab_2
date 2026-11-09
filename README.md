# React Fundamentals - Lab 02

Student Name: Muhammad Mureed  
Project Name: M.Mureed_React_lab_2  
Tech Stack: React, Vite, Material UI (MUI)  

## Live Deployment
Live URL: **https://muhammadmureed.github.io/M.Mureed_React_lab_2/**

## Features & Requirements Fulfilled

1. **Semantic HTML Structure**:
   - `header`: Built with MUI AppBar and Toolbar
   - `nav`: Navigation links with mobile Drawer support
   - `main`: Core content area wrapping all primary sections
   - `footer`: Footer section with social links and copyright notice
   - `section`: Semantic sections for Hero, Features, and Contact

2. **Multiple Sections**:
   - **Hero / Intro**: Headline, subtext, call-to-action buttons, and featured illustration
   - **Features / Services**: Responsive 3-column cards detailing performance, security, and cloud architecture
   - **Contact**: Interactive contact form with input fields, alerts, and direct contact info cards

3. **Responsive Mobile Layout**:
   - Responsive layouts powered by Material UI Grid and Flexbox
   - Full mobile screen support with accessible hamburger drawer navigation

4. **Images with Alt Text**:
   - All visual assets and illustrations feature descriptive `alt` attributes for full accessibility

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
