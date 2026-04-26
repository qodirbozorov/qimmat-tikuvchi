# Qimmat Tikuvchi — React + TypeScript + Vite

## O'rnatish

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Loyiha strukturasi

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Asosiy komponent — CTA handlerlar shu yerda
├── index.css                 # Global stillar + animatsiyalar
├── constants/
│   └── colors.ts             # Brand ranglar (GOLD, GOLD_DARK)
├── hooks/
│   └── useReveal.ts          # Lazy-load IntersectionObserver
└── components/
    ├── Hero.tsx              # Hero section (background, logo, expert, banner)
    ├── ListCard.tsx          # "Yopiq darsda ko'rib chiqamiz" card
    ├── BonusCard.tsx         # Tikuv moshinkasi bonus card
    ├── CTAButton.tsx         # Reusable CTA tugma (backend uchun onClick)
    └── Icons.tsx             # CalendarIcon, ClockIcon

public/
└── assets/                   # Barcha rasmlar va SVG ikonlar
```

## Backend ulash

`App.tsx` da `handleJoinClass` va `handleGetBonus` funksiyalarini o'z backend endpointingizga ulang:

```tsx
const handleJoinClass = async () => {
  await fetch('/api/register', { method: 'POST', ... });
};
```
