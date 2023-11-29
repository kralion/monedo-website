import AppLayout from "@/components/applayout";
import Description from "./pages/description";
import Features from "./pages/features";
import Home from "./pages/home";
import Hero from "./pages/hero";
import Samples from "./pages/samples";
import Testimonials from "./pages/testimonials";
import CallToAction from "./pages/call-to-action";
import Footer from "./pages/footer";

function App() {
  return (
    <AppLayout>
      <Home />
      <Hero />
      <Description />
      <Features />
      <Samples />
      <Testimonials />
      <CallToAction />
      <Footer />
    </AppLayout>
  );
}

export default App;
