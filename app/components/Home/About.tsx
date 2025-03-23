import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-blue-900 text-white rounded-full text-sm font-medium mb-4 tracking-wide">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About SpecsVue
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2020, SpecsVue was born from a simple idea: eyewear should be both a medical necessity and a fashion statement, without the premium price tag.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our founder, after years of overpaying for prescription glasses, decided to create a brand that offers high-quality, stylish eyewear at accessible prices by cutting out the middlemen and connecting directly with customers.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Today, SpecsVue is a growing eyewear brand committed to helping people see better, look better, and feel better through innovative designs, premium materials, and exceptional customer service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-800 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-blue-900 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/n1GLEkD-DcI"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* <div className="absolute -bottom-6 right-0 bg-white p-5 rounded-xl shadow-lg max-w-xs text-black">
              <p className="text-sm sm:text-base italic text-center">
                "Our mission is to make premium eyewear accessible to everyone while prioritizing quality, style, and customer satisfaction."
              </p>
              <p className="text-end font-semibold text-sm mt-3">
                ~ SpecsVue Founder
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
