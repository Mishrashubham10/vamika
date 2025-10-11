"use client";

import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  console.log('Product id is here', productId);
  console.log('productId from useParams:', productId);
  console.log(
    'all product ids:',
    products.map((p) => p.id)
  );

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/products">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
              height={500}
              width={500}
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              {product.category}
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-5xl font-bold gradient-text mb-6">
              ${product.price}
            </p>

            <p className="text-muted-foreground text-lg mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product?.features?.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stock Info */}
            <div className="mb-8 glass-card p-4 rounded-lg">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">
                  {product.inStock}
                </span>{' '}
                units in stock
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
