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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        <div className="w-full max-w-md mx-auto lg:max-w-lg aspect-square lg:aspect-[4/3] relative rounded-lg overflow-hidden">
          <Image
            src={product.img || "/placeholder.svg?height=800&width=600"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {product.name
              .split("-")
              .map(
                (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(" ")}
          </h1>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6 text-white">
            {product.price} RON
          </p>
          <Button className="w-full md:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
