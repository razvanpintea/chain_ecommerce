import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        About ChainMaster
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="ChainMaster workshop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
          <p className="text-gray-300 mb-4">
            Founded in 2023, ChainMaster was born from a passion for crafting
            exquisite men's jewelry. Our journey began in a small workshop,
            where we combined traditional craftsmanship with modern design to
            create pieces that truly stand out.
          </p>
          <p className="text-gray-300">
            Today, we continue to push the boundaries of men's fashion, offering
            a curated selection of chains, bracelets, and rings that empower men
            to express their unique style.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          Our Mission
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          At ChainMaster, we believe that every man deserves to feel confident
          and stylish. Our mission is to provide high-quality, innovative
          jewelry that enhances your personal style and becomes a part of your
          story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Quality Craftsmanship
          </h3>
          <p className="text-gray-300">
            Each piece is meticulously crafted using the finest materials,
            ensuring durability and timeless elegance.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Innovative Designs
          </h3>
          <p className="text-gray-300">
            We blend traditional techniques with contemporary styles to create
            unique, eye-catching pieces.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Customer Focus
          </h3>
          <p className="text-gray-300">
            Your satisfaction is our priority. We're committed to providing
            exceptional service and support.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Join the ChainMaster Community
        </h2>
        <p className="text-gray-300 mb-6">
          Discover our latest collections and be part of a growing community of
          style-conscious men.
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </div>
  );
}
