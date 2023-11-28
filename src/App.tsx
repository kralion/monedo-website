import AppLayout from "@/components/applayout";
import Description from "./pages/description";
import Features from "./pages/features";
import Home from "./pages/home";
import Hero from "./pages/hero";
import Samples from "./pages/samples";

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
      <section>
        <Samples />
      </section>
    </AppLayout>
  );
}

export default App;
