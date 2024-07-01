import { Section } from "@/components/reusables/page-section";
import { ProductGridItem } from "./components";
import NavLink from "@/components/reusables/nav-links";

export default function Products() {
  return (
    <main className="h-full">
      {/* Page Head */}
      <section className="w-full min-h-[250px] grid place-items-center bg-slate-900 text-white">
        <h1>What We Sell</h1>
      </section>

      {/* Product Grid */}
      <Section>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, idx) => (
            <NavLink key={idx} href="/products/1">
              <ProductGridItem
                name="Product 1"
                price={300}
                img="https://via.placeholder.com/100"
              />
            </NavLink>
          ))}
        </div>
      </Section>
    </main>
  );
}
