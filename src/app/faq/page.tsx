import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="bg-foreground/90 max-w-3xl mx-auto py-6 px-4 mt-32 mb-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-foreground">Vamika - Frequently Asked Questions</h1>

      <Accordion type="single" collapsible className="w-full space-y-4 text-background">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Vamika?</AccordionTrigger>
          <AccordionContent>
            Vamika is an e-commerce garments brand offering premium-quality clothing with a focus on style, comfort, and affordability.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What products does Vamika offer?</AccordionTrigger>
          <AccordionContent>
            We offer a variety of garments including casual wear, ethnic wear, formal clothing, women&apos;s fashion, festive collections, and accessories.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How can I place an order?</AccordionTrigger>
          <AccordionContent>
            Browse products on our website, select your size and quantity, and checkout using secure payment options.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We support UPI, debit/credit cards, net banking, wallet payments, and Cash on Delivery (for selected locations).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>How long does delivery take?</AccordionTrigger>
          <AccordionContent>
            Orders are delivered within 3-7 business days based on location. Tracking details will be shared once shipped.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Do you offer returns or exchanges?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a 7-day return/exchange policy for unused and unwashed items in original packaging.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>How can I track my order?</AccordionTrigger>
          <AccordionContent>
            You will receive a tracking link via SMS and email once your order is shipped.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Do you provide a size guide?</AccordionTrigger>
          <AccordionContent>
            Yes! Every product page includes a detailed size chart to help you choose the right fit.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>Are the garments manufactured in-house?</AccordionTrigger>
          <AccordionContent>
            Our clothing is crafted by trusted manufacturing partners and in-house designers, ensuring premium quality.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>Do you offer bulk or wholesale orders?</AccordionTrigger>
          <AccordionContent>
            Yes! Retailers can contact our support team to get wholesale pricing and bulk order options.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
          <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
          <AccordionContent>
            You can reach us via email or phone, or through our website chat between 10 AM - 7 PM.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-12">
          <AccordionTrigger>Is Cash on Delivery available?</AccordionTrigger>
          <AccordionContent>
            Yes, COD is available for select pin codes and will appear during checkout.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-13">
          <AccordionTrigger>Do you offer discounts or seasonal sales?</AccordionTrigger>
          <AccordionContent>
            Yes! We run seasonal sales, festive discounts, and exclusive member offers.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-14">
          <AccordionTrigger>Are my payment details secure?</AccordionTrigger>
          <AccordionContent>
            Absolutely. All transactions are encrypted with SSL technology to ensure complete safety.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-15">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Currently, we only ship within India. International shipping will be introduced soon.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}