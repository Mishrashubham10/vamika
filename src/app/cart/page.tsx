'use client';

import { useState } from 'react';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import { useVamika } from '@/context/VamikaContext';
import { PopupCheckout } from '@/components/PopupCheckout';

export default function CartPage() {
  const { state, dispatch } = useVamika();
  const [isProcessing, setIsProcessing] = useState(false);
  const [open, setOpen] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 8.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    setIsProcessing(true);
    setOpen(true);
  };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen glass-card flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted mx-auto mb-4" />
          <h2 className="text-2xl font-playfair font-semibold text-primary-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted mb-6">
            Start shopping to add items to your cart
          </p>
          <Link href="/products">
            <Button className="bg text-muted border-1 border-gray-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen glass-card mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold text-primary-foreground mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted">
            {state.cart.length} item{state.cart.length !== 1 ? 's' : ''} in your
            cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item) => (
              <Card key={item.id} className="bg-gray-800 border-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted">{item.brand}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="font-bold text-muted">
                          ₹{item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted line-through">
                            ₹{item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-border text-muted bg-gray-800 hover:bg-gray-800"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-muted">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-border text-muted bg-gray-800 hover:bg-gray-800"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 border-border text-muted bg-gray-800 hover:bg-gray-800"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted">
                    <span>Subtotal</span>
                    <span className="text-muted">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted">
                    <span>Shipping</span>
                    <span className="text-muted">
                      {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted">
                    <span>Tax</span>
                    <span className="text-muted">₹{tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-muted">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted">
                    Add ₹{(50 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}

                <Button
                  className="w-full mt-6 bg-accent text-foreground hover:text-primary-foreground"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
                </Button>

                <PopupCheckout
                  open={open}
                  setOpen={setOpen}
                  title="Order Successful 🎉"
                  description="Thank you for shopping with us. Your order has been placed and will be delivered soon!"
                />

                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full mt-3 border-border text-foreground"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
