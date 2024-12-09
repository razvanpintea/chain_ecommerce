import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Featured chain"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Style</h1>
        <p className="text-xl mb-8">
          Discover our premium collection of chains and jewelry for men
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </section>
  );
};

export default Hero;

