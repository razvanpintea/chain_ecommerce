"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What materials are your jewelry made from?",
    answer:
      "Our jewelry is crafted from high-quality materials including sterling silver, 14k and 18k gold, and stainless steel. We ensure all our pieces meet strict quality standards.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. You can see the exact costs at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unworn items in their original condition. Please note that customized items are non-returnable unless there's a defect.",
  },
  {
    question: "How do I care for my jewelry?",
    answer:
      "To keep your jewelry looking its best, we recommend storing it in a cool, dry place and avoiding contact with chemicals like perfumes or cleaning products. Clean your jewelry gently with a soft cloth.",
  },
  {
    question: "Do you offer sizing or customization services?",
    answer:
      "Yes, we offer sizing for rings and some customization options for certain pieces. Please contact our customer service for specific inquiries about customization.",
  },
  {
    question: "What is the warranty on your products?",
    answer:
      "All our jewelry comes with a 1-year warranty against manufacturing defects. This doesn't cover normal wear and tear or damage caused by improper care.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Domestic orders typically arrive within 3-5 business days. International orders can take 7-14 business days, depending on the destination and customs processing.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer complimentary gift wrapping for all orders. You can select this option at checkout and even include a personalized message.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
