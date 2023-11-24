import AppLayout from "@/components/applayout";
import Description from "./pages/description";
import Features from "./pages/features";
import Home from "./pages/home";
import Hero from "./pages/hero";

function App() {
  return (
    <AppLayout>
      <section>
        <Home />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Description />
      </section>
      <section>
        <Features />
      </section>
    </AppLayout>
  );
}

export default App;
