import { Section } from "@/components/reusables/page-section";
import { ProductGridItem } from "./components";
import { PRODUCTS } from "@/constants/config";

export default function Products() {
  return (
    <main className="h-full">
      {/* Page Head */}
      <div className="font-semibold md:text-4xl text-3xl w-full text-center pt-4 lg:pt-8">
        What We Sell
      </div>

      {/* Product Grid */}
      <Section>
        <div className="grid gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
          {PRODUCTS.map((product, index) => (
            <div>
              <ProductGridItem key={index} {...product} />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
