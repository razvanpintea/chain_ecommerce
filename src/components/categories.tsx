import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../app/actions/getProducts";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products/${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={category.img || "/placeholder.svg?height=400&width=400"}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name.charAt(0).toUpperCase() +
                      category.name.slice(1).toLowerCase()}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

