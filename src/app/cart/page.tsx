import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock cart data (replace this with actual cart data in the future)
const cartItems = [
  { id: 1, name: "Gold Chain", price: 999.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Silver Bracelet", price: 199.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Diamond Ring", price: 2999.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-white">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-4 text-left text-white">Product</th>
                  <th className="p-4 text-left text-white">Price</th>
                  <th className="p-4 text-left text-white">Quantity</th>
                  <th className="p-4 text-left text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-700">
                    <td className="p-4">
                      <div className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-md mr-4"
                        />
                        <span className="text-white">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-white">{item.price.toFixed(2)} RON</td>
                    <td className="p-4 text-white">{item.quantity}</td>
                    <td className="p-4 text-white">{(item.price * item.quantity).toFixed(2)} RON</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div className="text-2xl font-semibold text-white">
              Total: {total.toFixed(2)} RON
            </div>
            <Button size="lg">Proceed to Checkout</Button>
          </div>
        </>
      )}
      <div className="mt-8">
        <Link href="/products" className="text-blue-400 hover:text-blue-300">
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}

