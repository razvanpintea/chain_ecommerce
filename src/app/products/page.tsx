import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getProducts } from "../actions/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">All Products</h1>
      {products.length === 0 ? (
        <p className="text-white">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const category = product.categories?.name?.toLowerCase() || "'uncategorized'";
            return (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden group">
                <Link
                  href={`/products/${category}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.img || "/placeholder.svg?height=300&width=300"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      {product.name}
                    </h2>
                    <p className="text-gray-400 mb-2">{product.price} RON</p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <Button className="w-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

