'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod/v3';
import { useState } from 'react';
import { useVamika } from '@/context/VamikaContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

// =============== REGISTER SCHEMA USING ZOD =============
const registerSchema = z
  .object({
    name: z.string().min(2, 'Full name must be at least 2 characters.'),
    email: z.string().email('Enter a valid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the Terms & Privacy Policy.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match.',
  });

type registerSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { dispatch } = useVamika();
  const router = useRouter();

  const form = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreedToTerms: false,
    },
  });

  // ============= ON SUBMIT ==============
  function onSubmit(data: registerSchema) {
    const user = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      avatar: '/placeholder-avatar.jpg',
    };

    dispatch({ type: 'LOGIN', payload: user });

    // ✅ show toast
    toast.success('Account created successfully 🎉', {
      description: `Welcome, ${data.name}!`,
    });

    // small delay so toast is visible before redirect
    setTimeout(() => router.push('/login'), 800);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800 rounded-2xl max-w-4xl mx-auto p-16 mb-8 mt-24 shadow-md hover:shadow-lg hover:glass-card"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
        Register with <span className="gradient-text">Vamika</span>
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* =========== NAME =========== */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <Input
                      {...field}
                      placeholder="Jane Doe"
                      className="pl-11 bg-transparent text-primary-foreground placeholder:text-muted border-border focus-visible:ring-0 focus-visible:outline-none"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* ============== EMAIL ================= */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <Input
                      {...field}
                      placeholder="jane@example.com"
                      className="pl-11 bg-transparent text-primary-foreground placeholder:text-muted border-border focus-visible:ring-0 focus-visible:outline-none"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* ============ PASSWORD ============= */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <Input
                      {...field}
                      //   type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="pl-11 bg-transparent text-primary-foreground placeholder:text-muted border-border focus-visible:ring-0 focus-visible:outline-none"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-muted" />
                      ) : (
                        <Eye className="w-5 h-5 text-muted" />
                      )}
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* ============ CONFIRM PASSWORD =============== */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <Input
                      {...field}
                      //   type={showConfirmPassword ? "text" : "password"}
                      placeholder="********"
                      className="pl-11 bg-transparent text-primary-foreground placeholder:text-muted border-border focus-visible:ring-0 focus-visible:outline-none"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-muted" />
                      ) : (
                        <Eye className="w-5 h-5 text-muted" />
                      )}
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {/* ============= TERMS ============== */}
          <FormField
            control={form.control}
            name="agreedToTerms"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2 text-sm">
                <FormControl>
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2 mt-0.5"
                    checked={!!field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="leading-relaxed text-muted">
                  I agree to the{' '}
                  <Link
                    href="/terms"
                    className="text-primary hover:text-primary/80 underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary/80 underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? 'Creating Account...'
              : 'Create Account'}
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
              Google
            </Button>
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-primary hover:bg-primary/90 text-muted"
            >
              Linkedin
            </Button>
          </div>

          {/* Sign In */}
          <div className="mt-6 text-center">
            <span className="text-sm text-muted">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
              >
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
