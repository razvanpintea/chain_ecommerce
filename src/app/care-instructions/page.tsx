import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareInstructionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Jewelry Care Instructions
      </h1>

      <section className="mb-8">
        <p className="text-gray-300 mb-4">
          Proper care and maintenance of your jewelry will ensure its longevity
          and keep it looking beautiful for years to come. Follow these
          guidelines to preserve the quality of your ChainMaster pieces.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="general-care">
          <AccordionTrigger className="text-white">
            General Care Tips
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <ul className="list-disc list-inside space-y-2">
              <li>Store your jewelry separately to prevent scratching</li>
              <li>
                Remove jewelry before swimming, bathing, or engaging in physical
                activities
              </li>
              <li>
                Apply cosmetics, perfumes, and hairsprays before putting on
                jewelry
              </li>
              <li>Clean your jewelry regularly with a soft, lint-free cloth</li>
              <li>
                Have your jewelry professionally cleaned and inspected annually
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="gold-care">
          <AccordionTrigger className="text-white">
            Caring for Gold Jewelry
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <p>
              Gold jewelry is durable but can scratch and dent. To care for your
              gold pieces:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Clean with warm, soapy water and a soft brush</li>
              <li>Rinse thoroughly and dry with a soft cloth</li>
              <li>Avoid exposure to chlorine and harsh chemicals</li>
              <li>Store in a soft-lined jewelry box or pouch</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="silver-care">
          <AccordionTrigger className="text-white">
            Caring for Silver Jewelry
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <p>
              Silver can tarnish over time. To keep your silver jewelry shining:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use a silver polishing cloth regularly</li>
              <li>For heavier tarnish, use a silver cleaner solution</li>
              <li>Store in an airtight container or anti-tarnish bag</li>
              <li>Avoid exposure to rubber, which can cause tarnishing</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="gemstone-care">
          <AccordionTrigger className="text-white">
            Caring for Gemstone Jewelry
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            <p>Different gemstones require different care. In general:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Clean with mild soap and warm water</li>
              <li>Use a soft brush to remove dirt from settings</li>
              <li>Avoid ultrasonic cleaners for delicate or treated gems</li>
              <li>Store gemstone jewelry separately to prevent scratching</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Cleaning Methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-900 border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-100">Gentle Cleaning</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>For regular maintenance:</p>
              <ol className="list-decimal list-inside mt-2">
                <li>Mix warm water with a few drops of mild dish soap</li>
                <li>Soak the jewelry for 10-15 minutes</li>
                <li>Gently brush with a soft-bristled toothbrush</li>
                <li>Rinse thoroughly with clean water</li>
                <li>Pat dry with a soft, lint-free cloth</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-600">
            <CardHeader>
              <CardTitle className="text-gray-100">
                Professional Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>For deep cleaning and maintenance:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Visit a professional jeweler annually</li>
                <li>They can check for loose stones and worn prongs</li>
                <li>Professional ultrasonic or steam cleaning available</li>
                <li>Repairing or re-plating services if needed</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Additional Tips
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Remove jewelry before applying lotions or sunscreens</li>
          <li>Avoid wearing jewelry while doing household chores</li>
          <li>Take off jewelry before bed to prevent tangling or bending</li>
          <li>
            Be cautious of extreme temperature changes which can affect
            gemstones
          </li>
          <li>Consider getting insurance for high-value pieces</li>
        </ul>
      </section>
    </div>
  );
}
