import Hero from "../components/hero";
import Categories from "../components/categories";
import WhyChooseUs from "../components/why-choose-us";
import Newsletter from "../components/newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        <Hero />
        <Categories />
        <WhyChooseUs />
        <Newsletter />
      </main>
    </div>
  );
}
