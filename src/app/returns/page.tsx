import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Returns & Exchanges
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Our Return Policy
        </h2>
        <p className="text-gray-300 mb-4">
          At ChainMaster, we want you to be completely satisfied with your
          purchase. If you're not happy with your order for any reason, we offer
          a 30-day return policy for most items.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Return Process
        </h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>
            Ensure the item is unworn, in its original condition, and in its
            original packaging.
          </li>
          <li>
            Fill out the return form included with your order or download it
            from our website.
          </li>
          <li>Pack the item securely with the completed return form.</li>
          <li>
            Ship the package to our returns address (provided on the form).
          </li>
          <li>
            Once we receive and process your return, we'll issue a refund to
            your original payment method.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">
              How long do I have to return an item?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              You have 30 days from the date of delivery to return most items
              for a full refund.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">
              Do I have to pay for return shipping?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Customers are responsible for return shipping costs unless the
              item is defective or we made an error in your order.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">
              Can I exchange an item instead of returning it?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes, we offer exchanges for different sizes or colors when
              available. Please indicate your preference on the return form.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">
              Are there any items that cannot be returned?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Custom-made or personalized items, and items marked as final sale
              cannot be returned unless they are defective.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Need Help?</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about our return policy or need assistance
          with a return, please don't hesitate to contact us.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Customer Service</Link>
        </Button>
      </section>
    </div>
  );
}
