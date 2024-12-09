import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRandomProducts } from "@/app/actions/getRandomProducts";
import chaintemplate from "@/utils/images/chain_template.png";

export default async function FeaturedProducts() {
  const products = await getRandomProducts();

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Featured Products
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-400">
            No products available at the momenttttttttt.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={product.img != null ? product.img : chaintemplate}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.price} RON</p>
                  <Button className="w-full bg-neutral-900 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:hover:bg-neutral-50/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

