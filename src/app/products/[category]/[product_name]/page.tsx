import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getProductByName } from "../../../actions/getProducts";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product_name: string; category: string }>;
}) {
  const { product_name, category } = await params;
  const product = await getProductByName(product_name);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-72 relative">
          <Image
            src={product.img || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4 text-white">{product.name}</h1>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6 text-white">
            {product.price} RON
          </p>
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

