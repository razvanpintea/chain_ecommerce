import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WarrantyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Warranty Information
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Our Warranty Policy
        </h2>
        <p className="text-gray-300 mb-4">
          At ChainMaster, we stand behind the quality of our products. All our
          jewelry comes with a 1-year limited warranty against manufacturing
          defects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          What&apos;s Covered
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Manufacturing defects in materials and workmanship</li>
          <li>Broken clasps or closures</li>
          <li>Loose stones (if present in the original design)</li>
          <li>Tarnishing (for items specified as tarnish-resistant)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          What&apos;s Not Covered
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Normal wear and tear</li>
          <li>Accidental damage or loss</li>
          <li>Damage caused by improper use or care</li>
          <li>Alterations or repairs made by unauthorized parties</li>
          <li>
            Products not purchased directly from ChainMaster or an authorized
            retailer
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          How to Make a Warranty Claim
        </h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>
            Ensure your product is within the warranty period (1 year from
            purchase date)
          </li>
          <li>
            Contact our customer service team to initiate a warranty claim
          </li>
          <li>
            Provide proof of purchase and a detailed description of the issue
          </li>
          <li>
            We may request photos or ask you to send the item for inspection
          </li>
          <li>
            If approved, we will repair or replace the item at our discretion
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
              How long is the warranty period?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Our warranty covers manufacturing defects for 1 year from the date
              of purchase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">
              Do I need to register my product for warranty?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              No, registration is not required. However, you will need to
              provide proof of purchase when making a claim.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">
              Is the warranty transferable?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              No, our warranty is non-transferable and extends only to the
              original purchaser.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">
              What if my item is out of warranty?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              For items out of warranty, we offer repair services at a
              reasonable cost. Contact our customer service for more
              information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Need to Make a Claim?
        </h2>
        <p className="text-gray-300 mb-4">
          If you believe your item is eligible for warranty service, please
          contact our customer service team for assistance.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Customer Service</Link>
        </Button>
      </section>
    </div>
  );
}
