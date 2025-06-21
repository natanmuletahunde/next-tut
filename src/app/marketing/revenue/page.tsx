'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Revenue() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentTime(date.toLocaleTimeString());
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Revenue Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Monitor and analyze your business revenue in real-time. Last updated: {currentTime}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Overview',
              description: 'Get a high-level view of your revenue streams',
              href: '/revenue/overview',
            },
            {
              title: 'Analytics',
              description: 'Deep dive into revenue metrics and trends',
              href: '/revenue/analytics',
            },
            {
              title: 'Reports',
              description: 'Generate and view detailed revenue reports',
              href: '/revenue/reports',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <Link href={item.href}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}