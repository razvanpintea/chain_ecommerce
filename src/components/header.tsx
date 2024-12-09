import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { getCategories } from "../app/actions/getProducts";
import { Badge } from "@/components/ui/badge";

const Header = async () => {
  const categories = await getCategories();
  const cartItemCount = 3; // This will be replaced with actual cart data later

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ChainMaster
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/products" className="hover:text-gray-300">
                All Products
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products/${category.name.toLowerCase()}`}
                  className="hover:text-gray-300"
                >
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1).toLowerCase()}
                  {""}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link href="/cart" className="hover:text-gray-300 relative">
            <ShoppingCart />
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Link>
          <Link href="/account" className="hover:text-gray-300">
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
