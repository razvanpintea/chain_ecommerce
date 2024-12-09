import { Shield, Truck, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "We use only the finest materials to ensure lasting quality and shine.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over 150 RON.",
  },
  {
    icon: RefreshCw,
    title: "14-Day Returns",
    description:
      "Not satisfied? Return your item within 14 days for a full refund.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
