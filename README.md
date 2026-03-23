# ⚡ Personal Portfolio

> A bold, interactive portfolio built with **Neo Brutalism** design language — raw borders, hard shadows, vibrant colors, and zero compromise on personality.

**Live Site →** [alwin.dev](https://portfolio-liart-tau-5tmsl1y9pd.vercel.app/)  
**GitHub →** [github.com/Alwin42](https://github.com/Alwin42)

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React** | UI framework |
| **Vite 5** | Build tool & dev server |
| **React Router v6** | Client-side routing |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Page & component animations |

### Animation Libraries
| Library | Used For |
|---|---|
| **React Bits** | SplitText, BlurText, ShinyText, CountUp, ScrollVelocity, ClickSpark, Aurora, SpotlightCard |


### Icons & Fonts
| Resource | Details |
|---|---|
| **Lucide React** | All UI icons |
| **Bebas Neue** | Display / heading font |
| **Space Mono** | Body / monospace font |

### Contact & Email
| Service | Purpose |
|---|---|
| **EmailJS** | Contact form — sends directly to Gmail, no backend |

### Deployment
| Platform | Purpose |
|---|---|
| **Vercel** | Hosting & auto-deployment |
| **GitHub** | Version control & CI/CD trigger |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── resume.pdf              # Your resume (replace with yours)
├── src/
│   ├── assets/                 # Images & illustrations
│   │   ├── hero-illustration.png
│   │   ├── code.png
│   │   ├── code2.png
│   │   ├── meeting.png
│   │   ├── scale.png
│   │   ├── scripts.png
│   │   └── web.png
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Aurora.jsx          # React Bits
│   │   ├── Blur-Text.jsx       # React Bits
│   │   ├── ClickSpark.jsx      # React Bits
│   │   ├── CountUp.jsx         # React Bits
│   │   ├── Scroll-Velocity.jsx # React Bits
│   │   ├── Shiny-Text.jsx      # React Bits
│   │   ├── Split-Text.jsx      # React Bits
│   │   └── Spotlight-Card.jsx  # React Bits
│   ├── data/
│   │   └── projects.js         # All project data (edit this!)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── globals.css         # Tailwind + custom CSS tokens
│   ├── App.jsx                 # Routes + Loading screen
│   └── main.jsx                # Entry point
├── .env                        # Local env vars (never commit this)
├── .env.example                # Template for env vars
├── .gitignore
├── vercel.json                 # Fixes React Router on Vercel
├── vite.config.js
├── jsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
node -v    # v18 or higher required
npm -v     # v9 or higher
```

### 1. Clone the repository

```bash
git clone https://github.com/Alwin42/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then fill in your EmailJS keys (get them from [emailjs.com](https://emailjs.com)):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 All NPM Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

```

---

## ✏️ Customization Guide

### Update your personal info

**1. Change name and bio** → `src/pages/Home.jsx`
```jsx
text="HY I'M"
text="YOUR NAME"
text="SURNAME"
```

**2. Update social links** → `src/pages/Home.jsx` and `src/pages/Contact.jsx`
```js
const socials = [
  { href: 'https://github.com/YOURUSERNAME', ... },
  { href: 'https://linkedin.com/in/YOUR-PROFILE', ... },
]
```

**3. Add your projects** → `src/data/projects.js`
```js
export const hundredProjects = [
  {
    id: 10,
    title: 'YOUR PROJECT',
    desc: 'Short description.',
    tags: ['React', 'Node.js'],
    status: 'completed',   // 'completed' | 'in-progress' | 'planned'
    color: 'bg-[#E63946]',
    textColor: 'text-white',
    github: 'https://github.com/...',
    live: 'https://...',
    num: '10',
  },
]
```

**4. Replace resume** → Drop your `resume.pdf` into the `public/` folder.

**5. Replace images** → Add your images to `src/assets/` and update the imports in `Home.jsx`.

---

## 🌐 Deployment on Vercel

### Automatic deployment (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Set **Framework Preset** to `Vite`
5. Add environment variables under **Environment Variables**:

```
VITE_EMAILJS_SERVICE_ID     → your value
VITE_EMAILJS_TEMPLATE_ID    → your value
VITE_EMAILJS_PUBLIC_KEY     → your value
```

6. Click **Deploy** — done!

> The `vercel.json` file is already included and fixes the React Router 404 issue on page refresh.

### Manual deployment via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📬 Setting Up the Contact Form (EmailJS)

The contact form sends messages directly to your Gmail — **no backend server required**.

1. Sign up at [emailjs.com](https://emailjs.com) (free — 200 emails/month)
2. **Add Email Service** → Connect your Gmail account
3. **Create Email Template** — use these variable names:
   ```
   {{user_name}}
   {{user_email}}
   {{subject}}
   {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add them to your `.env` file and Vercel environment variables

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Red | `#E63946` | Hero panel, accents |
| Yellow | `#F1C40F` | CTA buttons, highlights |
| Green | `#7cff67` | Active states, success |
| Purple | `#5227FF` | Shadows, accents |
| Lavender | `#B19EEF` | Subtle accents |
| Navy | `#1D3557` | Dark cards |
| Teal | `#2A9D8F` | Tags, badges |
| Orange | `#F3722C` | Warnings, variety |
| Cyan | `#00BFFF` | Hero right panel |

### Typography

| Font | Usage |
|---|---|
| `Bebas Neue` | All headings, display text (`font-display`) |
| `Space Mono` | Body text, labels, code (`font-body`) |

### Neo Brutalism Rules

- **Hard shadows** — `box-shadow: 5px 5px 0 #000`
- **Thick borders** — `border: 2px solid #000` (or `3px`)
- **No border-radius** — elements are sharp squares
- **High contrast** — colors are vivid, never muted
- **Hover = shift** — buttons move `translate(3px, 3px)` on hover, shadow disappears

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, skills, about preview, stats |
| Projects | `/projects` | 100 projects challenge, hackathons, college work |
| Contact | `/contact` | Social links + EmailJS contact form |

---

## 🧩 React Bits Components Used

All components from [reactbits.dev](https://reactbits.dev) — copied manually into `src/components/`:

| Component | Effect | Used On |
|---|---|---|
| `SplitText` | Letter-by-letter entry | Hero name |
| `BlurText` | Word-by-word blur in | Hero tagline |
| `ShinyText` | Shimmer sweep | Badges, titles |
| `CountUp` | Number counting animation | Stats |
| `ScrollVelocity` | Speed-reactive marquee | Ticker strips |
| `ClickSpark` | Sparks on click | All buttons |
| `SpotlightCard` | Mouse-follow spotlight | Project cards |
| `Aurora` | Flowing color waves | About section bg |


## Credits & Acknowledgements

- [React Bits](https://reactbits.dev) — animation components
- [LottieFiles](https://lottiefiles.com) — loading screen animation
- [Lucide Icons](https://lucide.dev) — all icons throughout the site
- [EmailJS](https://emailjs.com) — contact form email delivery
- [Vercel](https://vercel.com) — hosting and deployment

---

<div align="center">

**Built with ❤️ and too much coffee by Alwin Emmanuel**

[![GitHub](https://img.shields.io/badge/GitHub-Alwin42-1D3557?style=flat-square&logo=github)](https://github.com/Alwin42)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-alwin--emmanuel-457B9D?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/alwin-emmanuel-sebastian/)

</div>