'use client';

import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState } from 'react';
import { useVamika } from '@/context/VamikaContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useVamika();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        const user = {
          id: '1',
          name: 'Beauty Enthusiast',
          email: email,
          avatar: '/placeholder-avatar.jpg',
        };

        dispatch({ type: 'LOGIN', payload: user });

        toast('Welcome back!', {
          description: 'You have successfully logged in to BeautyLux.',
        });

        router.push('/');
      } else {
        toast('Login Failed', {
          description: 'Please enter valid email and password.',
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800 rounded-2xl max-w-4xl mx-auto p-16 mb-8 mt-24 shadow-md hover:shadow-lg hover:glass-card"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
        SignIn with <span className="gradient-text">Vamika</span>
      </h2>
      <form onSubmit={handleLogin} className="space-y-4 bg-transparent">
        {/* ============== EMAIL ================= */}
        <div className="space-y-2 bg-transparent">
          <Label htmlFor="email" className="text-muted">
            Email
          </Label>
          <div className="relative bg-transparent">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-11 bg-transparent text-primary-foreground placeholder:text-muted w-full py-2 px-4 rounded-lg border border-gray-500 focus:outline-none outline-none focus:bg-transparent autofill:bg-transparent focus:ring-0"
              required
            />
          </div>
        </div>

        {/* ============ PASSWORD ============= */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-muted">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-4 h-4" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 bg-transparent text-primary-foreground placeholder:text-muted w-full py-2 px-4 rounded-lg border-1 border-gray-500 focus:outline-none outline-none"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 text-muted" />
              ) : (
                <Eye className="w-4 h-4 text-muted" />
              )}
            </Button>
          </div>
        </div>

        {/* ============= TERMS ============== */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
            />
            <Label htmlFor="remember" className="text-sm text-muted">
              Remember me
            </Label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:text-primary/80 transition-smooth"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {/* <Send className="mr-2 h-4 w-4" /> */}
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        {/* ============ DIVIDER ============= */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="glass-card px-3 text-muted">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        {/* ============ SOCIAL LOGIN ============ */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-primary hover:bg-primary/90 text-muted"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-primary hover:bg-primary/90 text-muted"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Twitter
          </Button>
        </div>

        {/* Sign In */}
        <div className="mt-6 text-center">
          <span className="text-sm text-muted">
            Don&#39;t have an account?{' '}
            <Link
              href="/register"
              className="text-primary hover:text-primary/80 font-medium transition-smooth"
            >
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </motion.div>
  );
}
