
import React, { useState, useEffect } from 'react';
import { 
  Bell, Tag, MapPin, ChevronDown, User, ShoppingCart, Menu, 
  ArrowRight, MapPin as MapPinIcon, ExternalLink, Layers, Image, 
  FileJson, Star, BookOpen, Shield, Truck, Award, Quote, 
  ChevronLeft, ChevronRight, CircleHelp, Phone, Mail,  
  Globe, Download, ShoppingBag, X 
} from 'lucide-react';




export const Button = ({ children, variant = 'primary', size = 'md', className = '', href, onClick, icon }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
  
  const variants = {
    primary: "bg-terracotta text-white hover:bg-terracotta-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };
  
  const sizes = {
    sm: "h-9 rounded-md px-3 text-sm",
    md: "h-10 rounded-lg px-4 py-2 text-sm",
    lg: "h-14 rounded-lg px-10 text-lg"
  };
  
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon}
    </Comp>
  );
};

const StarRating = ({ rating, className = '' }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-terracotta text-terracotta' : 'text-muted'}`}
        />
      ))}
    </div>
  );
};





export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/assets/yangon-DyR96IIq.jpg",
      title: "Yangon City Map",
      description: "ရန်ကုန်မြို့ စည်ပင်သာယာနယ်နိမိတ် ၃၃ မြို့နယ်အပါအဝင် လမ်းအမည်၊ အမှတ်စဉ်များ ပါဝင်သည်။",
      prices: ["Vinyl (4' x 6') - ၃၁၂,၀၀၀ ကျပ်", "Vinyl (8' x 4') - ၁၅၆,၀၀၀ ကျပ်", "Soft Copy PDF - ၃၀၀,၀၀၀ ကျပ် (Discount - ၂၅၀,၀၀၀ ကျပ်)", "JPG - ၁၅၀,၀၀၀ ကျပ် (Discount - ၇၅,၀၀၀ ကျပ်)"]
    },
    {
      image: "/assets/myanmar-DnkcSYFw.jpg",
      title: "Myanmar Map",
      description: "မြန်မာနိုင်ငံမြေပုံ (Myanmar Version & English Version နှစ်မျိုးရှိသည်)",
      prices: ["Vinyl (2' x 4') - ၁၀၄,၀၀၀ ကျပ်", "Vinyl (3' x 6') - ၂၃၄,၀၀၀ ကျပ်", "Soft Copy - PDF / JPG"]
    },
    {
      image: "/assets/yangon%20region-D8XVC07Z.jpg",
      title: "Yangon Region",
      description: "ရန်ကုန်တိုင်းဒေသကြီး",
      prices: ["Vinyl (2' x 3') - ၇၈,၀၀၀ ကျပ်"]
    },
    {
      image: "/assets/mandalay-CwXEyMM8.jpg",
      title: "Mandalay Map",
      description: "မန္တလေးမြို့အတွင်းရှိ မြို့နယ်များ၊ လမ်းအမည်၊ ဘတ်စ်ကားဂိတ် နှင့် မြို့ပတ်ရထားလမ်းစိတ် အချက်အလက်များ ပါဝင်သည်။",
      prices: ["Vinyl (4' x 6') - ၃၁၂,၀၀၀ ကျပ်", "Soft Copy PDF - (စျေးနှုန်းမဖော်ပြထားပါ)"]
    }
  ];

  return (
    <section className="relative flex items-center overflow-hidden py-10 sm:py-14 lg:min-h-[85vh] lg:py-20">
      <div className="absolute inset-0">
        <img src="/assets/hero-map-BQqU1087.jpg" alt="Map of Yangon" className="h-full w-full object-cover" style={{ zIndex: 1}} />
        <div className="absolute inset-0 bg-[#1a4ab9]/80 mix-blend-multiply" ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4ab9]/50 via-[#1e3a8a]/80 to-[#0f172a]/90"  ></div>
      </div>
      
      <div className="absolute right-0 top-1/4 hidden h-72 w-72 rounded-full bg-white/5 blur-3xl sm:block lg:h-96 lg:w-96"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-8 w-full border-white/20 bg-white/10 px-4 py-4 backdrop-blur-md animate-fade-in flex flex-col sm:flex-row items-center gap-3 justify-center text-center rounded-lg shadow-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
            မြန်မာပြည် မြေပုံ နှင့် ပြည်နယ်တိုင်းဒေသကြီး မြေပုံများအား{' '}
            <span className="text-[#fbbf24]">ဈေးနှုန်းချိုသာစွာဖြင့်</span> ဝယ်ယူနိင်ပါသည်
          </h1>
        </div>
        
        <div className="mb-6 px-4 py-2 rounded-full inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm animate-fade-in shadow-xl">
          <MapPinIcon className="h-5 w-5 text-[#fbbf24] shrink-0" />
          <span className="text-sm sm:text-base font-semibold text-white">
            ၁၉၉၅ ခုနှစ်မှစ၍ တိကျသော မြေပုံရေးဆွဲခြင်း 
          </span>
        </div>
        
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="w-full">
            <div className="relative rounded-sm overflow-hidden border-[6px] border-white/20 shadow-2xl">
              <img 
                src={slides[activeSlide].image} 
                alt={slides[activeSlide].title}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/75 px-6 pb-5 pt-8 backdrop-blur-sm">
                <p className="text-lg font-bold text-white sm:text-xl">{slides[activeSlide].title}</p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">{slides[activeSlide].description}</p>
                <div className="mt-3 space-y-1">
                  {slides[activeSlide].prices.map((price, idx) => (
                    <p key={idx} className="text-xs font-semibold text-white sm:text-sm">{price}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-lg text-white leading-relaxed max-w-xl drop-shadow-sm">
              အရည်အသွေးမြင့် ရန်ကုန်မြေပုံများ၊ စိတ်ကြိုက်မြေပုံပုံနှိပ်ခြင်းများနှင့် မြို့နယ်မြေပုံစာအုပ် စုဆောင်းမှုကို ရှာဖွေပါ။ မြန်မာတစ်နိုင်ငံလုံးရှိ ပညာရှင်များ ယုံကြည်စိတ်ချရသောမြေပုံ၀န်ဆောင်မှု။
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="bg-[#d946ef] hover:bg-[#c026d3] text-white px-8 py-3 rounded-md font-bold flex items-center justify-center gap-2 shadow-lg transition-colors">
                ယခုဝယ်ရန် <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                ဆိုင်ကိုကြည့်ပါ
              </button>
              <button className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Free Download
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <span className="text-3xl font-black text-white">5000+</span>
                <p className="text-xs text-white/70">ရောင်းချပြီး မြေပုံများ</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
              <div>
                <span className="text-3xl font-black text-white">3.8</span>
                <p className="text-xs text-white/70">အဆင့်သတ်မှတ်ချက်</p>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
              <div>
                <span className="text-3xl font-black text-white">34</span>
                <p className="text-xs text-white/70">မြို့နယ်များ</p>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-sm shadow-2xl">
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-4">Maps List</p>
              <div className="grid gap-3">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative w-full p-4 text-left transition-all duration-300 border ${
                      activeSlide === idx
                        ? 'bg-white/25 border-white/50 shadow-xl scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{slide.title}</span>
                      <span className="text-[9px] border border-white/40 px-1.5 py-0.5 rounded text-white/70 uppercase">Map</span>
                    </div>
                    <p className="text-[11px] text-white/60 mt-1 line-clamp-1">{slide.description}</p>
                    <p className="text-[11px] font-bold text-white mt-2">{slide.prices[0]}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block opacity-50">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-[10px] uppercase tracking-widest">ဆင်းကြည့်ရန်</span>
          <div className="h-8 w-px bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export const MapTypesSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-terracotta/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="font-display text-3xl font-bold md:text-5xl text-foreground mb-6 leading-tight">
            <br />ရရှိနိုင်သော မြေပုံအမျိုးအစား <br className="hidden md:block" />
            <br /><span className="text-muted-foreground text-2xl md:text-3xl font-medium mt-2 block">(Available Map List)</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">dpsmap.com (Design Printing Services)</strong> သည် မြန်မာနိုင်ငံ၏ Digital Mapping နယ်ပယ်တွင် ရှေ့ဆောင်ဖြစ်ပြီး အစိုးရဌာနများ၊ NGO များနှင့် ပုဂ္ဂလိကလုပ်ငန်းများအတွက် အလွန်အသေးစိတ်ကျသော မြေပုံအမျိုးအစားပေါင်းစုံကို ထောက်ပံ့ပေးထားပါသည်။
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-16">
          {/* City & GIS Maps */}
          <div className="lg:col-span-1 group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block w-fit">
              <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-foreground group-hover:text-terracotta">
                မြို့ပြအသေးစိတ်မြေပုံများ (City & GIS Maps)
              </h3>
            </a>
            <ul className="space-y-4 flex-1">
              <li className="flex flex-col">
                <span className="font-semibold text-foreground text-[15px] mb-1 decoration-terracotta decoration-2">
                  — <a href="https://dpsmap.com/yangon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800">Yangon GIS Map <ExternalLink className="w-3.5 h-3.5" /></a>:
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                  ရန်ကုန်မြို့၏ လမ်းအမည်၊ အိမ်နံပါတ်၊ ဆိုင်ခန်းတည်နေရာများနှင့် စည်ပင်နယ်နိမိတ်များ ပါဝင်သော အသေးစိတ်မြေပုံ။
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-foreground text-[15px] mb-1">— Mandalay City Map:</span>
                <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">မန္တလေးမြို့တွင်း လမ်းကွန်ရက်နှင့် အချက်အချာကျသော နေရာများ။</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-foreground text-[15px] mb-1">— Naypyitaw Map:</span>
                <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">နေပြည်တော် ကောင်စီနယ်မြေအတွင်းရှိ ဝန်ကြီးဌာနများနှင့် ဟိုတယ်ဇုန်များ ပါဝင်သော မြေပုံ။</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-foreground text-[15px] mb-1">— Regional Capital Maps:</span>
                <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">အခြား တိုင်းဒေသကြီးနှင့် ပြည်နယ်မြို့တော်များ (ဥပမာ- စစ်ကိုင်း၊ တောင်ကြီး၊ မော်လမြိုင်) ၏ မြို့ပြမြေပုံများ။</span>
              </li>
            </ul>
          </div>
          
          {/* Right side grids */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-fit">
            {/* Administrative Maps */}
            <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
              <a href="https://dpsmap.com/administrative-boundaries" target="_blank" rel="noopener noreferrer" className="block w-fit">
                <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  အုပ်ချုပ်ရေးဆိုင်ရာ မြေပုံများ (Administrative Maps) <ExternalLink className="w-5 h-5" />
                </h3>
              </a>
              <ul className="space-y-4 flex-1">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Township Boundary Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">မြို့နယ်အလိုက် နယ်နိမိတ်ခွဲခြားမှုများ။</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— State & Region Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">ပြည်နယ်နှင့် တိုင်းအလိုက် ခွဲခြားထားသော မြေပုံများ။</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Village Tract Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">ကျေးရွာအုပ်စုအဆင့်ထိ အသေးစိတ်ဖော်ပြထားသော မြေပုံများ (GIS Data အနေဖြင့် ရရှိနိုင်သည်)။</span>
                </li>
              </ul>
            </div>
            
            {/* Agri & Natural Resources */}
            <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
              <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-foreground group-hover:text-terracotta">
                စိုက်ပျိုးရေးနှင့် သဘာဝအရင်းအမြစ် မြေပုံများ (Agri & Natural Resources)
              </h3>
              <ul className="space-y-4 flex-1">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Soil Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">မြန်မာနိုင်ငံတဝှမ်းရှိ မြေဆီလွှာအမျိုးအစား ခွဲခြားမှု မြေပုံများ။</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Water Resources:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">မြစ်ချောင်းများ၊ ဆည်တမံများနှင့် ရေပေးဝေရေးစနစ်များ။</span>
                </li>
              </ul>
            </div>
            
            {/* Specialized Maps */}
            <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
              <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-foreground group-hover:text-terracotta">
                ဘေးအန္တရာယ်နှင့် မိုးလေဝသမြေပုံများ (Specialized Maps)
              </h3>
              <ul className="space-y-4 flex-1">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Earthquake Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">ငလျင်ကြောများနှင့် အန္တရာယ်ရှိနိုင်သော ဇုန်များပြ မြေပုံ။</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Flood Risk Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">ရေကြီးရေလျှံမှု ဖြစ်ပေါ်တတ်သော ဒေသများ။</span>
                </li>
              </ul>
            </div>
            
            {/* Tourist Maps */}
            <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
              <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-foreground group-hover:text-terracotta">
                ခရီးသွားနှင့် လမ်းညွှန်မြေပုံများ (Tourist & Guide Maps)
              </h3>
              <ul className="space-y-4 flex-1">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Road Map of Myanmar:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">မြန်မာနိုင်ငံတစ်ဝှမ်း လမ်းမကြီးများ၊ လမ်းသွယ်များနှင့် မြို့အကွာအဝေးပြ ဇယားများ။</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground text-[15px] mb-1">— Tourist Attraction Maps:</span>
                  <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800">ပုဂံ၊ အင်းလေး စသည့် အထင်ကရနေရာများ၏ ခရီးသွားမြေပုံများ။</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* State and District Maps */}
        <div className="mb-16 md:mb-16 grid grid-cols-1">
          <div className="group bg-background p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-terracotta/30 animate-slide-up flex flex-col">
            <a href="https://dpsmap.com/districts/" target="_blank" rel="noopener noreferrer" className="block w-fit">
              <h3 className="text-xl font-bold mb-5 transition-colors underline inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
                တိုင်းဒေသကြီးနှင့် ပြည်နယ်မြေပုံများ (State and District Maps) <ExternalLink className="w-5 h-5" />
              </h3>
            </a>
            <ul className="space-y-4 flex-1">
              <li className="flex flex-col">
                <span className="font-semibold text-foreground text-[15px] mb-1">— State and District Maps:</span>
                <span className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-slate-100 dark:border-slate-800 whitespace-pre-line">
                  ၁။ ပြည်နယ် (၇) ခု (States): ကချင်ပြည်နယ်၊ ကယားပြည်နယ်၊ ကရင်ပြည်နယ်၊ ချင်းပြည်နယ်၊ မွန်ပြည်နယ်၊ ရခိုင်ပြည်နယ်၊ ရှမ်းပြည်နယ်
                  {"\n\n"}၂။ တိုင်းဒေသကြီး (၇) ခု (Regions): စစ်ကိုင်းတိုင်းဒေသကြီး၊ တနင်္သာရီတိုင်းဒေသကြီး၊ ပဲခူးတိုင်းဒေသကြီး၊ မကွေးတိုင်းဒေသကြီး၊ မန္တလေးတိုင်းဒေသကြီး၊ ရန်ကုန်တိုင်းဒေသကြီး၊ ဧရာဝတီတိုင်းဒေသကြီး
                  {"\n\n"}၃။ ပြည်ထောင်စုနယ်မြေ (Union Territory): နေပြည်တော် (နိုင်ငံ၏ မြို့တော်)
                  {"\n\n"}ထပ်ဆင့်အချက်အလက်: ရှမ်းပြည်နယ်နှင့် စစ်ကိုင်းတိုင်းဒေသကြီးအတွင်း၌ ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရ တိုင်း/ဒေသ (၆) ခု (ဥပမာ - ဝ၊ ဓနု၊ ပအိုဝ်း၊ ပလောင်၊ ကိုးကန့်၊ နာဂ) လည်း ရှိပါသေးသည်။
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Available Formats */}
        <div className="bg-background p-8 md:p-12 shadow-md border border-border/60 animate-slide-up relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 dark:bg-slate-800/50 rounded-bl-full -z-0 opacity-50 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
              <Layers className="text-terracotta w-6 h-6" />
              ရရှိနိုင်သော Format များ (Available Formats)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-sm">Online Interactive Map</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">ဝက်ဘ်ဆိုက်ပေါ်တွင် တိုက်ရိုက် Layer များ အဖွင့်/အပိတ်လုပ်၍ ကြည့်ရှုခြင်း။</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                  <Image className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-sm">Image Formats</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">High-resolution JPG သို့မဟုတ် PDF ပုံစံများ။</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                  <FileJson className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-sm">GIS Data</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">လုပ်ငန်းသုံးအတွက် .shp (Shapefile) သို့မဟုတ် .kml (Google Earth) file များ။</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PopularProductsSection = () => {
  const products = [
    {
      id: '1',
      title: 'Township Map Book of Yangon City Development Committee',
      price: 35000,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 127,
      image: '/assets/book-CfXO3mGo.png',
      badge: 'အထူးအသားပေး',
      href: '/product/township-map-book-ycdc'
    },
    {
      id: '2',
      title: 'ရွှေပြည်သာ စက်မှုဇုန် Soft Copy JPG',
      price: 25000,
      originalPrice: 50000,
      rating: 4.9,
      reviewCount: 89,
      image: '/assets/shwe-DK6LB3rV.jpg',
      badge: 'လျှော့စျေး',
      href: '/product/shwe-taung-soft-copy'
    },
    {
      id: '3',
      title: 'Myanmar Map (Myanmar Map Soft Copy PDF Print)',
      price: 250000,
      originalPrice: 300000,
      rating: 5.0,
      reviewCount: 23,
      image: '/assets/myanmar-DnkcSYFw.jpg',
      badge: 'လျှော့စျေး',
      href: '/product/myanmar-soft-copy-pdf'
    }
  ];
  
  return (
    <section className="py-20 md:py-28 bg-background map-pattern">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">အရောင်းရဆုံး</span>
            <h2 className="font-display text-3xl font-bold md:text-4xl">အရောင်းရဆုံး မြေပုံများ</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">မြို့ပြစီမံကိန်းရေးဆွဲသူများ၊ လုပ်ငန်းရှင်များနှင့် မြေပုံဝါသနာရှင်များ နှစ်သက်သော ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ။</p>
          </div>
          <Button variant="outline" href="/products" icon={<ArrowRight className="ml-2 h-4 w-4" />}>
            ထုတ်ကုန်အားလုံး ကြည့်ရန်
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <a className="relative aspect-[4/3] overflow-hidden bg-secondary" href={product.href}>
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 absolute left-3 top-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </div>
                </a>
                <div className="flex flex-1 flex-col p-4">
                  <a href={product.href}>
                    <h3 className="mt-1 line-clamp-2 font-display text-base font-semibold leading-snug text-foreground transition-colors hover:text-primary">
                      {product.title}
                    </h3>
                  </a>
                  <div className="mt-2 flex items-center gap-1">
                    <StarRating rating={product.rating} />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-foreground">K&nbsp;{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">K&nbsp;{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="h-10 w-10 shrink-0 !p-0">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturedProductSection = () => {
  return (
    <section className="py-20 md:py-28 parchment-texture">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-lg">
              <img src="/assets/book-CfXO3mGo.png" alt="Township Map Book" className="h-full w-full object-fill" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-terracotta p-6 text-primary-foreground shadow-lg md:-right-8">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider opacity-80">အထူးစျေးနှုန်း</span>
                <div className="font-display text-2xl font-bold">K&nbsp;35,000</div>
              </div>
            </div>
          </div>
          
          <div className="lg:py-8">
            <span className="mb-4 inline-block rounded-full bg-terracotta/10 px-4 py-1 text-sm font-medium text-terracotta">အဓိက ထုတ်ကုန်</span>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Township Map Book of Yangon City Development Committee</h2>
            <p className="mt-4 text-lg text-muted-foreground">Complete township-level mapping of Yangon's 34 administrative divisions with verified data and precision cartography.</p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-3">
                <div className="rounded-lg bg-primary/10 p-2"><MapPinIcon className="h-5 w-5 text-primary" /></div>
                <span className="text-sm font-medium">မြို့နယ် ၃၄ ခု ပါဝင်သည်</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-3">
                <div className="rounded-lg bg-primary/10 p-2"><BookOpen className="h-5 w-5 text-primary" /></div>
                <span className="text-sm font-medium"></span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-3">
                <div className="rounded-lg bg-primary/10 p-2"><Shield className="h-5 w-5 text-primary" /></div>
                <span className="text-sm font-medium"></span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-3">
                <div className="rounded-lg bg-primary/10 p-2"><Star className="h-5 w-5 text-primary" /></div>
                <span className="text-sm font-medium"></span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <StarRating rating={4.8} />
              <span className="text-sm text-muted-foreground">သုံးသပ်ချက် 127 ခုအပေါ် အခြေခံသည်</span>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" href="/product/township-map-book-ycdc" icon={<ArrowRight className="ml-2 h-4 w-4" />}>
                ပိုမိုလေ့လာရန်
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUsSection = () => {
  const features = [
    { icon: Shield, title: 'အတည်ပြုထားသော ဒေတာ', description: 'မြေပုံအားလုံးသည် အစိုးရဒေတာအရင်းအမြစ်များကို အသုံးပြုပြီး တိကျမှုအတွက် ပုံမှန်မွမ်းမံထားသည်။' },
    { icon: Award, title: 'အရည်အသွေးမြင့် ပုံနှိပ်ခြင်း', description: 'နှစ်ပေါင်းများစွာ ခံနိုင်သော မြေပုံများအတွက် ပရီမီယံပစ္စည်းများနှင့် ပုံနှိပ်နည်းပညာများ။' },
    { icon: Truck, title: 'မြန်ဆန်သော ပို့ဆောင်ရေး', description: 'ရန်ကုန်မြို့တွင်း မှာယူပါက ၃ ရက်အတွင်း ပို့ဆောင်။' },
  ];
  
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">DPS Map ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ?</h2>
          <p className="mt-2 text-primary-foreground/70 max-w-xl mx-auto">မြန်မာတစ်နိုင်ငံလုံးရှိ ပညာရှင်များ၊ ပညာရေးသမားများနှင့် မြေပုံဝါသနာရှင်များ ယုံကြည်စိတ်ချရစွာသုံးစွဲသောကြောင့် </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    { text: '"Fast shipping and exceptional quality. Our delivery drivers rely on these maps daily. Best investment for our business."', author: 'U Than Htay', title: 'Logistics Company Owner', rating: 5 },
    { text: '"The Yangon City Map is incredibly detailed and accurate. We use it daily for our field operations."', author: 'Daw Khin Myo', title: 'NGO Project Manager', rating: 5 },
    { text: '"Excellent customer service and high-quality prints. Will definitely order again."', author: 'Ko Aung', title: 'Real Estate Agent', rating: 4.8 }
  ];
  
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">သုံးသပ်ချက်များ</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">ကျွန်ုပ်တို့၏ ဖောက်သည်များ ဘာပြောသလဲ</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 text-primary/10" />
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 text-center shadow-sm">
            <div className="transition-all duration-500 ease-out">
              <div className="flex justify-center gap-1 mb-6">
                <StarRating rating={testimonials[activeIndex].rating} />
              </div>
              <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed text-foreground animate-fade-in">
                {testimonials[activeIndex].text}
              </blockquote>
              <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="font-semibold text-foreground">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="sm" className="h-10 w-10 !p-0" onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-muted hover:bg-primary/50'}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
            <Button variant="outline" size="sm" className="h-10 w-10 !p-0" onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const faqs = [
    { category: 'Products', question: 'What types of maps do you offer?', answer: 'We offer a wide variety of maps including vinyl wall maps, paper prints, photopaper prints, canvas maps, stickers, and digital PDF formats. Our collection covers Yangon city, Myanmar administrative regions, transportation networks, and specialized areas like industrial zones.' },
    { category: 'Quality', question: 'How accurate are your maps?', answer: 'Our maps are created using the latest survey data and are regularly updated. We work with official sources including the Yangon City Development Committee and government survey departments to ensure accuracy. Most of our maps are updated annually.' },
    { category: 'Customization', question: 'Do you offer custom map printing?', answer: 'Yes, we offer custom map printing services. You can request specific areas, custom sizes, different materials, and even add your business information or branding. Contact us with your requirements for a quote.' },
    { category: 'Materials', question: 'What materials are your maps printed on?', answer: 'We use various materials depending on your needs: weatherproof vinyl for outdoor use, high-quality paper for indoor display, premium photopaper for detailed prints, canvas for gallery-quality presentation, and durable stickers for portable use.' },
    { category: 'Shipping', question: 'How long does shipping take?', answer: 'Standard shipping within Yangon typically takes 2-3 business days. For other cities in Myanmar, delivery takes 5-7 business days. Express shipping options are available for urgent orders. International shipping is also available upon request.' },
    { category: 'Digital Products', question: 'Do you provide digital versions of your maps?', answer: 'Yes, we offer digital versions in PDF, high-resolution PNG, and JPEG formats. Digital maps are perfect for presentations, websites, or printing on demand. Digital products are delivered instantly via email after purchase.' }
  ];
  
  const categories = ['All', 'Products', 'Quality', 'Customization', 'Materials', 'Shipping', 'Digital Products'];
  const filteredFaqs = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);
  
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-terracotta">FAQ</span>
          <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center justify-center gap-2 font-medium ring-offset-background transition-all duration-300 h-9 rounded-md px-3 text-sm ${
                activeCategory === cat 
                  ? 'bg-primary text-primary-foreground shadow-sm hover:shadow-md' 
                  : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-start gap-4">
                  <CircleHelp className="h-5 w-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-foreground leading-tight">{faq.question}</h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 pl-14">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  <div className="mt-3">
                    <span className="inline-block text-xs font-medium px-2.5 py-1 bg-terracotta/10 text-terracotta rounded-full">{faq.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};