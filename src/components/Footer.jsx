import { 
  Bell, Tag, MapPin, ChevronDown, User, ShoppingCart, Menu, 
  ArrowRight, MapPin as MapPinIcon, ExternalLink, Layers, Image, 
  FileJson, Star, BookOpen, Shield, Truck, Award, Quote, 
  ChevronLeft, ChevronRight, CircleHelp, Phone, Mail,  
  Globe, Download, ShoppingBag, X 
} from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="border-t border-border bg-[#1a1a1a] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">footer.products</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
              <div className="flex flex-col gap-2">
                <a href="https://dpsmap.com/pages/map-download/" className="hover:text-primary transition-colors">Free Map Download</a>
                <a href="https://yangontownshipmapbook.dpsmap.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Yangon Township Map Book</a>
                <a href="https://dpsmap.com/myanmar/#en" className="hover:text-primary transition-colors">Myanmar Map (ENG)</a>
                <a href="https://dpsmap.com/myanmar/#mm" className="hover:text-primary transition-colors">Myanmar Map (MM)</a>
                <a href="https://dpsmap.com/mandalay/" className="hover:text-primary transition-colors">Mandalay Map</a>
                <a href="https://dpsmap.com/pyinoolwin/" className="hover:text-primary transition-colors">Pyinoolwin Map</a>
                <a href="https://dpsmap.com/taunggyi/" className="hover:text-primary transition-colors">Taunggyi Map</a>
                <a href="https://dpsmap.com/sittwe/" className="hover:text-primary transition-colors">Sittwe Map</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://flood.firetree.net/?ll=16.8059,96.1628&zoom=10&m=5" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Flood Simulation</a>
                <a href="https://dpsmap.com/1sqft/" className="hover:text-primary transition-colors">1SQFT</a>
                <a href="https://dpsmap.com/bago/" className="hover:text-primary transition-colors">Bago Map</a>
                <a href="https://dpsmap.com/yangon/" className="hover:text-primary transition-colors">Yangon Map</a>
                <a href="https://dpsmap.com/naypyitaw/" className="hover:text-primary transition-colors">Naypyitaw Map</a>
                <a href="https://dpsmap.com/bagan/" className="hover:text-primary transition-colors">Bagan Map</a>
                <a href="https://dpsmap.com/inlay/" className="hover:text-primary transition-colors">Inlay Map</a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">Land Tenure & Policy</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="group">
                <a href="https://dpsmap.com/form105/" target="_blank" rel="noreferrer" className="block hover:text-primary mb-2">Form (105), Form (7) Land Tenure</a>
                <a href="https://dpsmap.com/form105/" className="block overflow-hidden rounded-lg border border-gray-700">
                  <img src="https://dpsmap.com/assets/images/bg-arts/about_map_update.webp" alt="Form 105" className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </a>
              </div>
              <div className="pt-4">
                <h4 className="font-bold text-white mb-2">Our Privacy & Policy</h4>
                <a className="block hover:text-primary mb-2" href="/privacy-policy">Privacy and Policy</a>
                <a href="https://dpsmap.com/valuedclients/" className="block font-semibold text-yellow-400 hover:text-yellow-300">Our Valued Clients</a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">footer.address</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <a href="https://g.page/DPSMAP?share" target="_blank" rel="noreferrer" className="hover:text-primary leading-relaxed">
                  Rm:307, Yae Kyaw Complex, Yae Kyaw Road,<br />Pazundaung Township, Yangon, Myanmar (Burma)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+959774204020" className="hover:text-primary">+95(09) 774204020</a>
                  <a href="tel:+959775204020" className="hover:text-primary">+95(09) 775204020</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <a href="mailto:dpsmap@gmail.com" className="hover:text-primary">dpsmap@gmail.com</a>
                  <a href="mailto:dm@dpsmap.com" className="hover:text-primary">dm@dpsmap.com</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">Subscribe Here</h3>
            <p className="text-sm text-gray-400">
              By entering your email, you will receive <span className="text-primary">the latest updates, offers, and features</span> about our Maps.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://dpsmap.com/">
                <img src="https://dpsmap.com/assets/images/OfficalDPS%20QR.png" alt="DPS Official QR" className="w-32 h-32 rounded-lg bg-white p-1" />
              </a>
              <a href="https://drive.google.com/file/d/1FRItkkt22j2jSeD-l0fLkqTh_SazTeer/view?usp=sharing" download className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-primary transition-colors text-gray-400 hover:text-white group">
                <img src="/assets/image-B4CHxIKT.png" alt="Android App" className="h-12 w-12" />
                <span className="text-xs text-center">Android App</span>
                <Download className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/DPSMyanmar" target="_blank" rel="noreferrer" className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-primary hover:text-white text-gray-400">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://dpsmap.com/" target="_blank" rel="noreferrer" className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-primary hover:text-white text-gray-400">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
            <div className="text-center md:text-left">
              <p>© 2026 Design Printing Services Co. Ltd. All rights reserved.</p>
              <p className="mt-1">Powered by DPS Map</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <a className="px-3 py-1 bg-gray-800 hover:bg-primary text-white rounded text-xs transition-colors" href="/1sqft">1SQFT Map</a>
              <a className="px-3 py-1 bg-gray-800 hover:bg-primary text-white rounded text-xs transition-colors" href="/population">Population Map</a>
              <a className="px-3 py-1 bg-gray-800 hover:bg-primary text-white rounded text-xs transition-colors" href="/industrial">Industrial Zone</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
