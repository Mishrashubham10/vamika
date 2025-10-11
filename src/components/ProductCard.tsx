"use client";

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/context/VamikaContext';

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
}: Product) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card rounded-lg overflow-hidden group"
    >
      <Link href={`/products/${id}`}>
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            fill
          />
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="font-semibold text-lg mb-2 text-muted group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text">₹ {price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;