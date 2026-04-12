# Wick & Aura

A product showcase website for **Wick & Aura** — a premium candle brand. Built with React and styled with Tailwind CSS.

## Tech Stack

- **React 19** with React Router
- **Tailwind CSS v4** (via Vite plugin)
- **Vite 7** for dev server and builds
- **Swiper** for carousels

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Arbaz9234/wick-and-aura.git
cd wick-and-aura
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WHATSAPP_NUMBER=your_phone_number
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, and asset exports
├── components/      # UI components
│   ├── Header.jsx
│   ├── Banner.jsx
│   ├── Collection.jsx
│   ├── Modal.jsx
│   ├── OurPolicy.jsx
│   ├── Footer.jsx
│   └── Buttons.jsx
├── App.jsx          # Router and layout
├── Home.jsx         # Home page
├── main.jsx         # Entry point
└── index.css        # Global styles and Tailwind config
```

## Features

- Responsive design with mobile-first approach
- Flip card product showcase (desktop) with direct modal view (mobile)
- Product detail modal with image carousel
- WhatsApp integration for purchase inquiries
- Smooth animations and transitions
