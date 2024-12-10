import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Shipping Information
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Shipping Policy
        </h2>
        <p className="text-gray-300 mb-4">
          At ChainMaster, we strive to deliver your jewelry as quickly and
          safely as possible. We offer various shipping options to meet your
          needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Shipping Methods and Estimated Delivery Times
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Shipping Method</TableHead>
              <TableHead className="text-white">
                Estimated Delivery Time
              </TableHead>
              <TableHead className="text-white">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-gray-300">Standard Shipping</TableCell>
              <TableCell className="text-gray-300">3-5 business days</TableCell>
              <TableCell className="text-gray-300">
                Free for orders over 200 RON
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-gray-300">Express Shipping</TableCell>
              <TableCell className="text-gray-300">1-2 business days</TableCell>
              <TableCell className="text-gray-300">30 RON</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-gray-300">
                International Shipping
              </TableCell>
              <TableCell className="text-gray-300">
                7-14 business days
              </TableCell>
              <TableCell className="text-gray-300">
                Varies by destination
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Order Processing
        </h2>
        <p className="text-gray-300 mb-4">
          Orders are typically processed within 1-2 business days. During peak
          seasons or promotional periods, processing times may be slightly
          longer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Tracking Your Order
        </h2>
        <p className="text-gray-300 mb-4">
          Once your order has been shipped, you will receive a confirmation
          email with a tracking number. You can use this number to track your
          package's progress on our website or the carrier's website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          International Shipping
        </h2>
        <p className="text-gray-300 mb-4">
          We ship to most countries worldwide. Please note that international
          orders may be subject to import duties and taxes, which are the
          responsibility of the recipient.
        </p>
        <p className="text-gray-300 mb-4">
          Delivery times for international orders may vary depending on the
          destination country and customs processing.
        </p>
      </section>
    </div>
  );
}
