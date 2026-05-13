import React, { useState } from 'react';
import { 
  Star, ShoppingCart, Filter, LayoutGrid, List, 
  ChevronDown, ChevronUp, X, ShoppingBag
} from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const categories = [
    'All Products', 'Vinyl', 'Paper', 'Photopaper', 
    'Clear Sticker', 'Sticker', 'Canvas', 'A3 Prints', 
    'A3 Booklet', 'Book'
  ];
  
  const materials = ['Paper', 'Vinyl', 'Canvas', 'Photopaper', 'Sticker'];
  
  const products = [
    {
      id: 1,
      title: 'Township Map Book of Yangon City Development Committee',
      price: 35000,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 127,
      image: '/assets/book-CfXO3mGo.png',
      badge: 'အထူးအသားပေး',
      category: 'Book',
      material: 'Paper',
      href: '/product/township-map-book-ycdc'
    },
    {
      id: 2,
      title: 'ရွှေပြည်သာ စက်မှုဇုန် Soft Copy JPG',
      price: 25000,
      originalPrice: 50000,
      rating: 4.9,
      reviewCount: 89,
      image: '/assets/mandalay-CwXEyMM8.jpg',
      badge: 'လျှော့စျေး',
      category: 'Vinyl',
      material: 'Vinyl',
      href: '/product/shwe-taung-soft-copy'
    },
    {
      id: 3,
      title: 'Myanmar Map (Myanmar Map Soft Copy PDF Print)',
      price: 250000,
      originalPrice: 300000,
      rating: 5.0,
      reviewCount: 23,
      image: '/assets/myanmar-DnkcSYFw.jpg',
      badge: 'လျှော့စျေး',
      category: 'Digital',
      material: 'Paper',
      href: '/product/myanmar-soft-copy-pdf'
    },
    {
      id: 4,
      title: 'မန္တလေးတိုင်းဒေသကြီး ဗီနိုင်း ၂ပေ ၃ပေ',
      price: 78000,
      originalPrice: 85000,
      rating: 4.7,
      reviewCount: 56,
      image: '/assets/mandalay-CwXEyMM8.jpg',
      badge: 'လျှော့စျေး',
      category: 'Vinyl',
      material: 'Vinyl',
      href: '/product/mandalay-region-vinyl-map'
    },
    {
      id: 5,
      title: 'ရှမ်းပြည်နယ်မြောက်ပိုင်း ဗီနိုင်း 3ပေ 4ပေ',
      price: 156000,
      originalPrice: null,
      rating: 4.6,
      reviewCount: 78,
      image: '/assets/shan-ZUH0P3P0.jpg',
      badge: null,
      category: 'Vinyl',
      material: 'Vinyl',
      href: '/product/shan-state-north-map'
    },
    {
      id: 6,
      title: 'Yangon Downtown Map vinyl 3\' 4\'',
      price: 156000,
      originalPrice: null,
      rating: 4.8,
      reviewCount: 145,
      image: '/assets/yangon-DyR96IIq.jpg',
      badge: null,
      category: 'Vinyl',
      material: 'Vinyl',
      href: '/product/yangon-downtown-map-vinyl'
    }
  ];
  
  const toggleMaterial = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };
  
  const filteredProducts = products.filter(product => {
    if (activeCategory !== 'All Products' && product.category !== activeCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false;
    return true;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });
  
  const ProductCard = ({ product, index }) => (
    <div className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <a className="relative aspect-[4/3] overflow-hidden bg-secondary" href={product.href}>
          <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {product.badge && (
            <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors absolute left-3 top-3 ${
              product.badge === 'အထူးအသားပေး' 
                ? 'bg-primary text-primary-foreground border-transparent' 
                : 'bg-terracotta text-primary-foreground border-transparent'
            }`}>
              {product.badge}
            </div>
          )}
        </a>
        <div className="flex flex-1 flex-col p-4">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.category}</span>
          <a href={product.href}>
            <h3 className="mt-1 line-clamp-2 font-display text-base font-semibold leading-snug text-foreground transition-colors hover:text-primary">
              {product.title}
            </h3>
          </a>
          <div className="mt-2 flex items-center gap-1">
            <Star className="h-4 w-4 fill-terracotta text-terracotta" />
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
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 shrink-0">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
  
  const FiltersSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="border-b border-border pb-6">
        <button className="flex w-full items-center justify-between py-2 text-left">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Categories</h3>
          <ChevronUp className="h-4 w-4 transition-transform" />
        </button>
        <ul className="mt-3 space-y-2">
          {categories.map(cat => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat}
                {cat !== 'All Products' && <span className="float-right text-xs opacity-60">12</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Price Range */}
      <div className="border-b border-border pb-6">
        <button className="flex w-full items-center justify-between py-2 text-left">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Price Range</h3>
          <ChevronUp className="h-4 w-4 transition-transform" />
        </button>
        <div className="mt-4 space-y-4">
          <div className="relative flex touch-none select-none items-center w-full">
            <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
              <div className="absolute h-full bg-primary" style={{ left: '0%', right: '0%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">K&nbsp;{priceRange[0].toLocaleString()}</span>
            <span className="text-muted-foreground">K&nbsp;{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      {/* Material */}
      <div className="pb-6">
        <button className="flex w-full items-center justify-between py-2 text-left">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Material</h3>
          <ChevronUp className="h-4 w-4 transition-transform" />
        </button>
        <ul className="mt-3 space-y-3">
          {materials.map(mat => (
            <li key={mat} className="flex items-center gap-3">
              <button
                onClick={() => toggleMaterial(mat)}
                className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none ${
                  selectedMaterials.includes(mat) ? 'bg-primary text-primary-foreground' : ''
                }`}
              />
              <label className="text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  const SortSelect = () => (
    <button
      type="button"
      className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-[180px]"
    >
      <span>
        {sortBy === 'featured' && 'Featured'}
        {sortBy === 'price-asc' && 'Price: Low to High'}
        {sortBy === 'price-desc' && 'Price: High to Low'}
        {sortBy === 'rating' && 'Highest Rated'}
      </span>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
  
  return (
    <div className="flex-1 bg-background">
      {/* Main Content */}
      <main className="flex-1">
        <div className="border-b border-border bg-secondary/30 py-8 md:py-12">
          <div className="container">
            <h1 className="font-display text-3xl font-bold md:text-4xl">All Products</h1>
            <p className="mt-2 text-muted-foreground">{sortedProducts.length} products available</p>
          </div>
        </div>
        
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Mobile Filter Button */}
            <div className="mb-6 lg:hidden">
              <button 
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
            </div>
            
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block">
              <FiltersSidebar />
            </aside>
            
            {/* Products Grid */}
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 h-10 w-10 ${
                      viewMode === 'grid' 
                        ? 'bg-primary text-primary-foreground shadow-sm hover:shadow-md' 
                        : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 h-10 w-10 ${
                      viewMode === 'list' 
                        ? 'bg-primary text-primary-foreground shadow-sm hover:shadow-md' 
                        : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                <SortSelect />
              </div>
              
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {sortedProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Filters Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-lg transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-display text-lg font-semibold">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="inline-flex items-center justify-center rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <FiltersSidebar />
            </div>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-lg transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold">သင့်ဈေးခြင်း</h2>
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">0</span>
              </div>
              <button onClick={() => setCartOpen(false)} className="inline-flex items-center justify-center rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="rounded-full bg-secondary p-6">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">သင့်ဈေးခြင်း ဗလာဖြစ်နေသည်</p>
                  <p className="text-sm text-muted-foreground">စတင်ရန် လှပသော မြေပုံအချို့ ထည့်ပါ</p>
                </div>
                <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md h-10 px-4 py-2" href="/products">
                  ထုတ်ကုန်များ ကြည့်ရန်
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;