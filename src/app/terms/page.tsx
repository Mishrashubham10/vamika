import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 mt-32 mb-12">
      <Card className="shadow-lg border border-dashed rounded-2xl p-4 bg-foreground/90 py-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary-foreground mt-2">
            Vamika - Terms & Conditions
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 text-background leading-relaxed">
          <p>
            Welcome to <strong>Vamika</strong>. By accessing or using our
            e-commerce platform, you agree to comply with and be bound by the
            following Terms and Conditions. Please read them carefully before
            using our website or purchasing any products.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Vamika is an online garments and fashion store offering clothing
              and related accessories. These Terms govern your use of our
              services, website, and any transactions made through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p>
              By using our website, you confirm that you are at least 18 years
              old or accessing the site under the supervision of a parent or
              legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Product Information
            </h2>
            <p>
              We make every effort to display accurate product details,
              including colors, sizes, and descriptions. However, slight
              variations may occur due to screen settings or manufacturing
              processes. Vamika reserves the right to modify or update product
              listings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Orders & Payments</h2>
            <p>
              All orders placed through our platform are subject to acceptance
              and availability. We offer various secure payment methods,
              including UPI, credit/debit cards, and wallet payments. Vamika
              reserves the right to cancel any order in case of suspected fraud
              or invalid payment information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Pricing & Offers</h2>
            <p>
              Prices listed on our website are final and inclusive of applicable
              taxes, unless stated otherwise. Discounts, coupon codes, and
              promotional offers may have specific terms, and Vamika reserves
              the right to modify or withdraw them at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Shipping & Delivery
            </h2>
            <p>
              Delivery times vary based on location and courier availability.
              While we make every effort to deliver orders promptly, delays may
              occasionally occur. Vamika is not liable for delays caused by
              logistics partners or unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Return & Exchange Policy
            </h2>
            <p>
              We offer a 7-day return or exchange window for eligible products.
              Items must be unused, unwashed, and in original packaging. Certain
              products (such as accessories or discounted items) may not be
              eligible for returns. Please refer to our Return Policy for full
              details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Intellectual Property
            </h2>
            <p>
              All content on this website, including images, designs, branding,
              and text, is the property of Vamika and protected under copyright
              laws. Unauthorized use, reproduction, or distribution is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              Vamika is not responsible for any indirect, incidental, or
              consequential damages arising from the use of our website or
              products. Our liability is limited to the amount paid for the
              purchased product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
            <p>
              Vamika may update these Terms and Conditions at any time.
              Continued use of our website constitutes acceptance of the updated
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              11. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms and Conditions, you can
              reach us at:
              <br />
              <strong>Email:</strong> vamikagarmentsecommerce8216@gmail.com
              <br />
              <strong>Phone:</strong> +91 7666528330
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}