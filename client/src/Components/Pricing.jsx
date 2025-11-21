"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["Basic expense tracking", "Monthly budget planning", "Up to 3 saving goals", "Mobile app access"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      description: "For serious financial planning",
      features: [
        "Advanced expense analytics",
        "Unlimited budgets",
        "Unlimited saving goals",
        "Bill payment reminders",
        "Investment tracking",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Family",
      price: "$19.99",
      period: "/month",
      description: "Manage finances together",
      features: [
        "Everything in Premium",
        "Up to 5 family members",
        "Shared and individual budgets",
        "Family financial goals",
        "Spending insights by member",
        "Dedicated support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-300 font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing Plans
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that's right for you
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're just starting your financial journey or looking for advanced features, we have a plan for
            you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex"
            >
              <div
                className={`bg-slate-800 border border-slate-700 rounded-lg flex flex-col h-full w-full ${
                  plan.popular ? "ring-2 ring-blue-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 border-b border-slate-700">
                  <h3 className="text-xl text-white font-semibold">{plan.name}</h3>
                </div>

                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t border-slate-700">
                  <button
                    className={`w-full py-2 px-4 rounded-md ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
