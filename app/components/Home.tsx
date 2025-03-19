"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {  ChevronRight, Instagram, Facebook, Twitter } from "lucide-react"



const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose SpecsVue?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We combine premium materials, cutting-edge technology, and expert craftsmanship to create eyewear that
            enhances your vision and style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Materials",
              description:
                "Our frames are crafted from high-quality, durable materials that ensure comfort and longevity.",
              icon: "🔍",
            },
            {
              title: "Advanced Lens Technology",
              description:
                "Experience crystal clear vision with our anti-glare, UV-protected, and blue light filtering lenses.",
              icon: "✨",
            },
            {
              title: "Expert Craftsmanship",
              description:
                "Each pair of glasses is meticulously crafted by skilled artisans with decades of experience.",
              icon: "🛠️",
            },
            {
              title: "Personalized Fitting",
              description: "Get a perfect fit with our customization services to ensure maximum comfort all day long.",
              icon: "👓",
            },
            {
              title: "Stylish Designs",
              description: "Stay on trend with our fashion-forward designs that complement your unique style.",
              icon: "🎨",
            },
            {
              title: "Affordable Luxury",
              description: "Enjoy premium quality eyewear at accessible prices with our direct-to-consumer model.",
              icon: "💰",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Collections Section Component
const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our diverse range of eyewear collections designed for every face shape, style preference, and visual
            need.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Eyeglasses",
              description: "Stylish frames with premium lenses for everyday vision",
              image: "https://img.freepik.com/free-photo/cheerful-female-student-stylish-eyewear-rejoices-successfully-passed-exams-glad-have-meeting-with-groupmates-delighted-beautiful-pleased-woman-has-attractive-look-poses-indoors_176420-15099.jpg?t=st=1742310034~exp=1742313634~hmac=135062e5548c46286c8ed5b98c6553b9c155e3a924a77cd2b17e580acc689326&w=1380",
              color: "from-blue-500 to-purple-500",
            },
            {
              title: "Sunglasses",
              description: "Protect your eyes with UV-blocking fashionable shades",
              image: "https://img.freepik.com/free-photo/glamour-woman-protects-from-sun_329181-346.jpg?t=st=1742320126~exp=1742323726~hmac=2771f580d88612b6501dd9b08672b5a1915406769a9558dfb30d6019f5520b86&w=740",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Screenglasses",
              description: "Reduce eye strain with blue light filtering technology",
              image: "https://img.freepik.com/free-photo/portrait-woman-looking-laptop-late-night_23-2148465443.jpg?t=st=1742320253~exp=1742323853~hmac=f3edd221615f8bd2f0d498f2c1d6ffc909b6478914bce6141e730e5ca138a49c&w=826",
              color: "from-pink-500 to-orange-500",
            },
            {
              title: "Contact Lenses",
              description: "Comfortable contacts for clear vision without frames",
              image: "https://img.freepik.com/free-photo/close-up-woman-holding-container_23-2149190665.jpg?t=st=1742320401~exp=1742324001~hmac=000306ae8e81f1d1aa1e990f034ceeac8dfd3005a6da81ce16eb664e58fcf3a1&w=740",
              color: "from-green-500 to-teal-500",
            },
            {
              title: "Kids Glasses",
              description: "Durable and colorful frames designed for children",
              image: "https://img.freepik.com/free-photo/cheerful-female-student-stylish-eyewear-rejoices-successfully-passed-exams-glad-have-meeting-with-groupmates-delighted-beautiful-pleased-woman-has-attractive-look-poses-indoors_176420-15099.jpg?t=st=1742310034~exp=1742313634~hmac=135062e5548c46286c8ed5b98c6553b9c155e3a924a77cd2b17e580acc689326&w=1380",
              color: "from-amber-500 to-red-500",
            },
            {
              title: "Power Sunglasses",
              description: "Prescription sunglasses for clear vision outdoors",
              image: "https://img.freepik.com/free-photo/cheerful-female-student-stylish-eyewear-rejoices-successfully-passed-exams-glad-have-meeting-with-groupmates-delighted-beautiful-pleased-woman-has-attractive-look-poses-indoors_176420-15099.jpg?t=st=1742310034~exp=1742313634~hmac=135062e5548c46286c8ed5b98c6553b9c155e3a924a77cd2b17e580acc689326&w=1380",
              color: "from-teal-500 to-green-500",
            },
          ].map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60 transition-opacity duration-300 group-hover:opacity-80`}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="mb-4 opacity-90">{collection.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 group-hover:w-32 transition-all duration-300 overflow-hidden"
                >
                  <span className="hidden group-hover:inline mr-1">Explore</span>
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Bestsellers Section Component


// Testimonials Section Component
const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it – hear from our satisfied customers about their SpecsVue experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              location: "New York, NY",
              quote:
                "The quality of my SpecsVue glasses is outstanding. I've received so many compliments, and the blue light filtering has significantly reduced my eye strain during long work hours.",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Michael Chen",
              location: "San Francisco, CA",
              quote:
                "After trying several eyewear brands, I've finally found my perfect match with SpecsVue. The virtual try-on feature made it so easy to find frames that suit my face shape.",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Emma Rodriguez",
              location: "Miami, FL",
              quote:
                "The customer service at SpecsVue is exceptional. They helped me find the perfect pair of glasses for my prescription and style preferences. I couldn't be happier!",
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SpecsVue</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, SpecsVue was born from a simple idea: eyewear should be both a medical necessity and a
              fashion statement, without the premium price tag.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, after years of overpaying for prescription glasses, decided to create a brand that offers
              high-quality, stylish eyewear at accessible prices by cutting out the middlemen and connecting directly
              with customers.
            </p>
            <p className="text-gray-600 mb-6">
              Today, SpecsVue is a growing eyewear brand committed to helping people see better, look better, and feel
              better through innovative designs, premium materials, and exceptional customer service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/handsome-man-optics-shop_1157-23065.jpg?t=st=1742311049~exp=1742314649~hmac=f917cf90ac28794ea81f085f1c327512b65e22f440a9007b9291ea66dd0c460e&w=1380"
                alt="About SpecsVue"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <p className="text-gray-800 font-medium">
                "Our mission is to make premium eyewear accessible to everyone while prioritizing quality, style, and
                customer satisfaction."
              </p>
              <p className="text-purple-600 font-semibold mt-2">— SpecsVue Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Newsletter Section Component

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stay in the Loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto opacity-90"
          >
            Subscribe to our newsletter for exclusive offers, new arrivals, and eyecare tips.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
          <p className="text-sm mt-2 opacity-80 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from SpecsVue.
          </p>
        </motion.div>
      </div>
    </section>
  );
};




const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or services? Our team is here to help. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-4">
              {/* Contact Details */}
              {[
                { icon: "📍", title: "Visit Our Store", info: "123 Vision Street, Eyewear District, NY 10001" },
                { icon: "📞", title: "Call Us", info: "+1 (555) 123-4567" },
                { icon: "✉️", title: "Email Us", info: "info@specsvue.com" },
                { icon: "⏰", title: "Opening Hours", info: "Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex space-x-4">
              {[
                { href: "#", label: "Instagram", icon: <Instagram size={20} /> },
                { href: "#", label: "Facebook", icon: <Facebook size={20} /> },
                { href: "#", label: "Twitter", icon: <Twitter size={20} /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SpecsVue
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium eyewear for every style and need. See the world with clarity and confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  All Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sale Items
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Prescription Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SpecsVue. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <CollectionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

