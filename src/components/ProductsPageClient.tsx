'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  Grid,
  List,
  Loader2Icon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product, useVamika } from '@/context/VamikaContext';
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function ProductsPageClient() {
  const { state, dispatch } = useVamika();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read query parameters
  const queryCategory = searchParams.get('category') || 'all';
  const querySearch = searchParams.get('search') || '';
  const querySort = searchParams.get('sort') || 'name';

  const [searchTerm, setSearchTerm] = useState(querySearch);
  const [selectedCategorySlug, setSelectedCategorySlug] =
    useState(queryCategory);
  const [sortBy, setSortBy] = useState(querySort);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Update query params whenever filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategorySlug !== 'all')
      params.set('category', selectedCategorySlug);
    if (searchTerm) params.set('search', searchTerm);
    if (sortBy !== 'name') params.set('sort', sortBy);
    router.replace(`/products?${params.toString()}`);
  }, [selectedCategorySlug, searchTerm, sortBy, router]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategorySlug('all');
    setSortBy('name');
  };

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = state.products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategorySlug === 'all' ||
        product.categorySlug === selectedCategorySlug;

      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return a.isNew ? -1 : b.isNew ? 1 : 0;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [state.products, searchTerm, selectedCategorySlug, sortBy]);

  const categories = useMemo(() => state.categories, [state.categories]);
  const handleAddToCart = (product: Product) =>
    dispatch({ type: 'ADD_TO_CART', payload: product });
  const handleAddToWishlist = (product: Product) =>
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });

  return (
    <div className="min-h-screen mt-16">
      {/* ================= HEADER ================= */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-4">
            All Products
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discover our complete collection of premium beauty products.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mt-8">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
              <Input
                placeholder="Search products, brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 placeholder:text-muted"
              />
            </div>

            <Select
              value={selectedCategorySlug}
              onValueChange={setSelectedCategorySlug}
            >
              <SelectTrigger className="w-48 text-muted">
                <SelectValue placeholder="Category" className="text-muted" />
              </SelectTrigger>
              <SelectContent className="text-muted glass-card">
                <SelectItem value="all" className="text-muted">
                  All Categories
                </SelectItem>
                {categories.map((cat) => (
                  <SelectItem
                    key={cat.id}
                    value={cat.slug}
                    className="hover:bg-primary"
                  >
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 text-muted">
                <SelectValue placeholder="Sort by" className="text-muted" />
              </SelectTrigger>
              <SelectContent className="glass-card text-muted">
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4 text-muted" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4 text-muted" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS DETAIL =============== */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-muted">
              {filteredAndSortedProducts.length} products found
            </span>
            {searchTerm && (
              <Badge variant="outline" className="border-primary text-primary">
                {searchTerm}
              </Badge>
            )}
            {selectedCategorySlug !== 'all' && (
              <Badge variant="outline" className="border-primary text-primary">
                {categories.find((c) => c.slug === selectedCategorySlug)?.name}
              </Badge>
            )}
          </div>

          <Button variant="outline" size="sm" onClick={resetFilters}>
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Reset Filters
          </Button>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 lg:grid-cols-2'
            }`}
          >
            {filteredAndSortedProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  className="animate-fade-in"
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted mb-6">
              Try adjusting your search terms or filters.
            </p>
            <Button onClick={resetFilters}>Clear Search</Button>
          </div>
        )}
      </section>
    </div>
  );
}