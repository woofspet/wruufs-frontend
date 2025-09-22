import { motion } from "framer-motion";
import { FaLeaf, FaHeartbeat, FaDog } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={32} />,
    title: "Natural Ingredients",
    description:
      "We use only the finest natural ingredients to ensure your pet's health.",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Vet Approved",
    description:
      "Our products are formulated and approved by leading veterinarians.",
  },        
  {
    icon: <FaDog size={32} />,
    title: "Tailored Nutrition",
    description:
      "Customized meals to meet the unique dietary needs of your pet.",
  },
];

const Features: React.FC = () => {
    return (
<section className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-heading font-bold text-white mb-4">
        Why Choose Wruufs?
      </h2>
      <p className="text-gray-300 text-lg font-body">
        We're committed to providing the best nutrition for your beloved pets
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="text-center p-8 glass-morphism rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600/20 to-pink-500/20 text-pink-400 rounded-full mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-heading font-semibold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-gray-300 font-body">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    )
}
export default Features;



