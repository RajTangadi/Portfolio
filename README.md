# Portfolio Website

A modern, responsive portfolio website built with Next.js 13, showcasing my projects, skills, and experience as a web developer.

![Image](https://github.com/user-attachments/assets/dc9a447b-5a56-42f1-86f1-8d215a05abf5)

![Image](https://github.com/user-attachments/assets/d0bfafa2-d79e-4309-9e10-124c82518e42)

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Elements**:
  - Scroll-based progress bar
  - Smooth page transitions
  - Animated components using Framer Motion
- **Project Showcase**: Detailed display of projects with live demos and source code
- **Contact Form**: Integrated contact form for easy communication
- **Dark Mode**: Elegant dark theme with custom color scheme

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Form Handling**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/RajTangadi/portfolio.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

For detailed instructions on setting up EmailJS and obtaining your credentials, please refer to [comprehensive EmailJS integration guide](https://medium.com/@alagappan.dev/using-emailjs-with-react-to-build-a-contact-form-for-your-website-5040966a814).

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🎨 Customization

- Update your personal information in the respective components
- Modify the color scheme in `tailwind.config.js`
- Add or remove projects in the projects data
- Customize animations in the components

## 📱 Pages

- **Home**: Introduction and overview
- **About**: Personal information and skills
- **Projects**: Showcase of completed projects
- **Contact**: Contact form for communication

## 🔧 Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Navbar.tsx        # Navigation component
│   ├── ProgressBar.tsx   # Scroll progress indicator
│   └── ...
├── public/               # Static assets
└── styles/              # Global styles
```

## 🖥 Live Demo


🔗 [Visit my portfolio](https://portfolio-rajtangadis-projects.vercel.app)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by Raj Tangadi
