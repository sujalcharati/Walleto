"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Star } from "lucide-react"

function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "Walleto has completely transformed how I manage both my personal and business finances. The intuitive interface makes it easy to track expenses and plan for the future.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "As someone who loves data, I appreciate how Walleto visualizes my spending patterns. It's helped me identify areas where I can save and invest more effectively.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content:
        "The bill reminder feature alone has saved me hundreds in late fees! Walleto makes it simple to stay on top of my finances even with an irregular income.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-300 font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Loved by thousands of users
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our users have to say about their experience with Walleto.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6">{testimonial.content}</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
