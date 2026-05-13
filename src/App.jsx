// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Commoner from './pages/commoner'
import Home from './pages/Home'

// function App() {

//   return (
//     <>
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Commoner />}>
    <Route index element={<Home />} />
    <Route path='/products' element={<div>This is products page</div>} />
    </Route>
</Routes>
</BrowserRouter> */}
//     </>
//   )
// }

// export default App
// // 
import React, { useState, useEffect } from 'react';
import { 
  Bell, Tag, MapPin, ChevronDown, User, ShoppingCart, Menu, 
  ArrowRight, MapPin as MapPinIcon, ExternalLink, Layers, Image, 
  FileJson, Star, BookOpen, Shield, Truck, Award, Quote, 
  ChevronLeft, ChevronRight, CircleHelp, Phone, Mail,  
  Globe, Download, ShoppingBag, X 
} from 'lucide-react';





const MarqueeBar = () => {
  return (
    <div className="bg-black text-white py-2 text-sm font-medium overflow-hidden relative z-[60]">
      <div className="animate-marquee pause-on-hover whitespace-nowrap flex items-center gap-12 w-full">
        <span className="flex items-center gap-2">
          <Bell className="h-4 w-4 fill-current" />
          <span>Latest News: 2025 Yangon City Map Update is now available! Pre-order now with promo price 27,000mmk.</span>
        </span>
        <span className="flex items-center gap-2 text-yellow-300">
          <Tag className="h-4 w-4" />
          <span>Special Offer: Use code <strong>DPS2025</strong> to get 10% Discount on all Wall Maps! Limited time only.</span>
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Visit us at Pazundaung Township. Open daily 9am-6pm.ph-09775204020</span>
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a className="flex items-center gap-2 transition-opacity hover:opacity-80" href="/">
          <img src="/assets/logo-DYT2u1Kn.png" alt="Logo" className="h-16 w-16" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground">DPS Map</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Precision Cartography</span>
          </div>
        </a>
        
        <nav className="hidden items-center gap-1 lg:flex">
          <a className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-primary" href="/">
            ပင်မစာမျက်နှာ
            <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary"></span>
          </a>
          <div className="relative">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              App <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <a className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="/products">
            မြေပုံများ ဝယ်ရန်
          </a>
          <a className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="https://maprint.dpsmap.com/">
            မြေပုံထုတ်မည် 
          </a>
          <a className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="https://myanmar.dpsmap.com/">
            မဟာဗျူဟာ ရည်မှန်းချက်
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-border/50 p-1 bg-secondary/50">
            <button className="flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-all bg-background shadow-sm text-foreground">
              <span className="text-base leading-none">🇲🇲</span>
              <span className="hidden sm:inline">MY</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-all text-muted-foreground hover:text-foreground">
              <span className="text-base leading-none">🇬🇧</span>
              <span className="hidden sm:inline">EN</span>
            </button>
          </div>
          
          <Button variant="outline" size="sm" className="h-10 w-10 !p-0">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="sm" className="h-10 w-10 !p-0 relative">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="sm" className="h-10 w-10 !p-0 lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};




const App = () => {

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 55s linear infinite;
      }
      .pause-on-hover:hover {
        animation-play-state: paused;
      }
      .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }
      .animate-slide-up {
        animation: slideUp 0.5s ease-out forwards;
        opacity: 0;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .bg-gradient-hero {
        background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
      }
      .map-pattern {
        background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      .parchment-texture {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Commoner />}>
    <Route index element={<Home />} />
    <Route path='/products' element={<div>This is products page</div>} />
    </Route>
</Routes>
</BrowserRouter>
  );
};

export default App;;