'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: "We'll get back to you as soon as possible.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@vamika.com',
      link: 'mailto:support@vamika.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Commerce Street, New York, NY 10001',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Have a question or feedback? We&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 border border-transparent hover:border-dashed hover:border-[1px] hover:border-primary/40"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-muted"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="text-muted placeholder:text-muted"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="text-muted placeholder:text-muted"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-muted"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  required
                  className="text-muted placeholder:text-muted"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  required
                  className="min-h-[150px] text-muted placeholder:text-muted"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-transparent hover:border-dashed hover:border-[1px] hover:border-primary/40">
              <h2 className="text-2xl font-bold mb-6 text-primary-foreground">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary-foreground">
                        {info.title}
                      </h3>
                      <p className="text-muted">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-2xl p-8 shadow-md hover:shadow-2xl border border-transparent hover:border-dashed hover:border-[1px] hover:border-primary/40"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">
                Business Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span className="text-muted">Monday - Friday</span>
                  <span className="text-muted">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted">Saturday</span>
                  <span className="text-muted">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted">Sunday</span>
                  <span className="text-muted">Closed</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
