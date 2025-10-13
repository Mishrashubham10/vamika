"use client";

import ProductsPageClient from '@/components/ProductsPageClient';
import { Loader2Icon } from 'lucide-react';
import { Suspense } from 'react';

export default function Products() {
  return (
    <Suspense fallback={<Loader2Icon className="size-24" />}>
      <ProductsPageClient />
    </Suspense>
  );
}