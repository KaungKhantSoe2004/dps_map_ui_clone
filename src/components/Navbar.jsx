import { 
  Bell, Tag, MapPin, ChevronDown, User, ShoppingCart, Menu, 
  ShoppingBag, X 
} from 'lucide-react';
import { useState } from 'react';

const Button = ({ children, variant, size, className, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
  };
  const sizes = {
    sm: "h-9 px-3",
    default: "h-10 px-4 py-2",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

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
          <span>Visit us at Pazundaung Township. Open daily 9am-6pm. ph-09775204020</span>
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownItems = [
    { name: "Address Search", href: "#" },
    { name: "Poi Search", href: "#" },
    { name: "nav.quasar", href: "#" },
    { name: "1sqft", href: "#" }
  ];
  
  // Get current path to determine active link
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <a className="flex items-center gap-2 transition-opacity hover:opacity-80" href="/">
          <img src="/assets/logo-DYT2u1Kn.png" alt="Logo" className="h-16 w-16" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-foreground">DPS Map</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Precision Cartography</span>
          </div>
        </a>
        
        <nav className="hidden items-center gap-1 lg:flex">
          <a 
            className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${currentPath === '/' ? 'text-primary' : 'text-muted-foreground'}`} 
            href="/"
          >
            ပင်မစာမျက်နှာ
            {currentPath === '/' && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary"></span>
            )}
          </a>

          {/* Dropdown Added */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${currentPath.startsWith('/app') ? 'text-primary' : 'text-muted-foreground'}`}>
              App 
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-[100]">
                {dropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
{/* Added active class */}
          <a 
            className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${currentPath === '/products' ? 'text-primary' : 'text-muted-foreground'}`} 
            href="/products"
          >
            မြေပုံများ ဝယ်ရန်
            {currentPath === '/products' && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary"></span>
            )}
          </a>
          
          <a 
            className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground" 
            href="https://maprint.dpsmap.com/"
          >
            မြေပုံထုတ်မည် 
          </a>
          <a 
            className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground" 
            href="https://myanmar.dpsmap.com/"
          >
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
      
      <style jsx>{`
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
      `}</style>
    </header>
  );
};

const Navbar = () => {
  return (
    <div className="w-full">
      <MarqueeBar />
      <Header />
    </div>
  );
};

export default Navbar;