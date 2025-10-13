"use client";

import { motion } from 'framer-motion';
import { Award, Users, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every product is carefully selected and tested.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description:
        'Our customers are at the heart of everything we do. Your satisfaction is our success.',
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description:
        'A dedicated team working tirelessly to bring you the best products and service.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description:
        'Always staying ahead with the latest trends and technologies in ecommerce.',
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
            About <span className="gradient-text">VAMIKA</span>
          </h1>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            We&apos;re on a mission to make premium quality products accessible to
            everyone
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16 shadow-md hover:shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary-foreground">Our Story</h2>
          <div className="space-y-4 text-muted text-lg">
            <p>
              Founded with a vision to revolutionize online shopping, Vamika has
              grown from a small startup to a trusted name in premium ecommerce.
              Our journey began with a simple belief: everyone deserves access
              to quality products without compromise.
            </p>
            <p>
              Today, we serve thousands of satisfied customers worldwide,
              offering a carefully curated selection of products across multiple
              categories. From cutting-edge technology to stylish fashion
              accessories, every item in our catalog meets our rigorous quality
              standards.
            </p>
            <p>
              What sets us apart is our commitment to customer satisfaction and
              our passion for excellence. We don&apos;t just sell products; we create
              experiences that our customers love and trust.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-primary-foreground"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-lg p-6 text-center shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 animate-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-muted">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted">Premium Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold gradient-text mb-2">99%</div>
              <div className="text-muted">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;