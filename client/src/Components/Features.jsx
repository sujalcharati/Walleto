"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Wallet, PieChart, Bell, TrendingUp, Shield, CreditCard } from "lucide-react"

function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Wallet className="h-6 w-6 text-blue-400" />,
      title: "Smart Budgeting",
      description: "Create custom budgets that fit your lifestyle and track your spending in real-time.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-violet-400" />,
      title: "Expense Analytics",
      description: "Visualize your spending patterns with intuitive charts and actionable insights.",
    },
    {
      icon: <Bell className="h-6 w-6 text-pink-400" />,
      title: "Saving Reminders",
      description: "Get gentle nudges to help you stay on track with your financial goals.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: "Investment Tracking",
      description: "Monitor your investments and see your wealth grow over time.",
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-400" />,
      title: "Bank-Level Security",
      description: "Your financial data is encrypted and protected with the highest security standards.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-red-400" />,
      title: "Bill Management",
      description: "Never miss a payment with automated bill tracking and payment reminders.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-300 font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to manage your finances
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Walleto combines powerful tools with an intuitive interface to help you take control of your financial life.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
