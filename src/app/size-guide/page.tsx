import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Jewelry Size Guide
      </h1>

      <Tabs defaultValue="rings" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="rings">Rings</TabsTrigger>
          <TabsTrigger value="necklaces">Necklaces</TabsTrigger>
          <TabsTrigger value="bracelets">Bracelets</TabsTrigger>
        </TabsList>
        <TabsContent value="rings">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Ring Sizing
          </h2>
          <p className="text-gray-300 mb-4">
            To find your ring size, measure the inside diameter of a ring that
            fits you well and compare it to the chart below.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">US Size</TableHead>
                <TableHead className="text-white">
                  Inside Diameter (mm)
                </TableHead>
                <TableHead className="text-white">Circumference (mm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-gray-300">6</TableCell>
                <TableCell className="text-gray-300">16.5</TableCell>
                <TableCell className="text-gray-300">51.8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">7</TableCell>
                <TableCell className="text-gray-300">17.3</TableCell>
                <TableCell className="text-gray-300">54.4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">8</TableCell>
                <TableCell className="text-gray-300">18.2</TableCell>
                <TableCell className="text-gray-300">57.1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">9</TableCell>
                <TableCell className="text-gray-300">19.0</TableCell>
                <TableCell className="text-gray-300">59.7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">10</TableCell>
                <TableCell className="text-gray-300">19.8</TableCell>
                <TableCell className="text-gray-300">62.3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="necklaces">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Necklace Lengths
          </h2>
          <p className="text-gray-300 mb-4">
            Choose your necklace length based on where you want it to sit on
            your chest.
          </p>
          <div className="relative h-64 mb-4">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Necklace length guide"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Length (inches)</TableHead>
                <TableHead className="text-white">Length (cm)</TableHead>
                <TableHead className="text-white">Style</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-gray-300">14"</TableCell>
                <TableCell className="text-gray-300">35.6 cm</TableCell>
                <TableCell className="text-gray-300">Collar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">16"</TableCell>
                <TableCell className="text-gray-300">40.6 cm</TableCell>
                <TableCell className="text-gray-300">Choker</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">18"</TableCell>
                <TableCell className="text-gray-300">45.7 cm</TableCell>
                <TableCell className="text-gray-300">Princess</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">20"-24"</TableCell>
                <TableCell className="text-gray-300">50.8-61 cm</TableCell>
                <TableCell className="text-gray-300">Matinee</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">28"-36"</TableCell>
                <TableCell className="text-gray-300">71.1-91.4 cm</TableCell>
                <TableCell className="text-gray-300">Opera</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="bracelets">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Bracelet Sizing
          </h2>
          <p className="text-gray-300 mb-4">
            To find your bracelet size, measure your wrist circumference and add
            1/2 inch for a comfortable fit.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Wrist Measurement</TableHead>
                <TableHead className="text-white">
                  Recommended Bracelet Size
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-gray-300">6" (15.2 cm)</TableCell>
                <TableCell className="text-gray-300">6.5" (16.5 cm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">6.5" (16.5 cm)</TableCell>
                <TableCell className="text-gray-300">7" (17.8 cm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">7" (17.8 cm)</TableCell>
                <TableCell className="text-gray-300">7.5" (19.1 cm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">7.5" (19.1 cm)</TableCell>
                <TableCell className="text-gray-300">8" (20.3 cm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-gray-300">8" (20.3 cm)</TableCell>
                <TableCell className="text-gray-300">8.5" (21.6 cm)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          How to Measure
        </h2>
        <p className="text-gray-300 mb-4">
          For the most accurate measurements, we recommend using a flexible
          measuring tape or a strip of paper and a ruler.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            For rings: Measure the inside diameter of a ring that fits well.
          </li>
          <li>
            For necklaces: Measure around your neck where you want the necklace
            to sit.
          </li>
          <li>For bracelets: Measure around your wrist at the widest point.</li>
        </ul>
      </section>
    </div>
  );
}
