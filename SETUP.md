# Portfolio Setup Instructions

## Changes Made

### 1. General Updates
- ✅ Removed square/diamond animations from all sections
- ✅ Updated navigation bar with modern design (not fixed at top)
- ✅ Maintained futuristic dark theme with neumorphism and glassmorphism

### 2. Hero Section Updates
- ✅ Larger profile image (450x450px) centered vertically
- ✅ Replaced experience/project details with professional bio
- ✅ Added social media icons with official platform icons:
  - LinkedIn (with FaLinkedin icon)
  - GitHub (with FaGithub icon) 
  - Resume download link (with FaDownload icon)

### 3. About Section Updates
- ✅ Removed experience problems count section
- ✅ Removed experience bullet points from right side
- ✅ Added work status line: "I am working as a Software Engineer full-time since June."
- ✅ Skills divided into two columns:
  - Languages & Frameworks (left)
  - Tools & Technologies (right)
- ✅ Official icons for each skill/tool with uniform sizing
- ✅ Removed percentage/progress bars
- ✅ Kept only LeetCode and GeeksforGeeks in coding platforms
- ✅ Removed HackerRank and Codeforces

### 4. Projects Section Updates
- ✅ Added image property to each project card
- ✅ Removed hover effect for "View Details"
- ✅ Removed "More Projects Coming Soon!" placeholder
- ✅ Clean project cards with images at the top

### 5. Contact Section Updates
- ✅ Title renamed to "Let's Connect"
- ✅ Fully functional contact form with SMTP integration
- ✅ Added GitHub and LinkedIn icons for easy access
- ✅ Maintained glassmorphic/neumorphic design with glowing button

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email (SMTP)
1. Copy `.env.example` to `.env.local`
2. Update with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
3. For Gmail:
   - Enable 2-factor authentication
   - Generate an App Password from Google Account settings
   - Use the App Password instead of your regular password

### 3. Add Project Images
1. Add your project screenshots to `/public/project-images/`
2. Update the image paths in `/app/data.ts`:
   - `addressbook.jpg`
   - `weather-app.jpg`
   - `ecommerce.jpg`

### 4. Add Resume File
1. Add your resume PDF to `/public/resume.pdf`
2. The download link in the Hero section will automatically work

### 5. Run Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
npm start
```

## Features

### Contact Form
- Fully functional SMTP integration
- Sends emails directly to your inbox
- Professional HTML email template
- Error handling and user feedback

### Responsive Design
- Mobile-first approach
- Smooth animations with Framer Motion
- Neumorphic and glassmorphic design elements
- Consistent neon color scheme

### Performance
- Next.js 14 with App Router
- Optimized images with Next.js Image component
- TypeScript for type safety
- Tailwind CSS for efficient styling

## Technologies Used
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Nodemailer (for SMTP)

## Customization
- Update personal information in `/app/data.ts`
- Modify colors in `/app/globals.css`
- Add/remove skills and projects as needed
- Customize email template in `/app/api/contact/route.ts`