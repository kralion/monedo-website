import AppLayout from "@/components/applayout";
import CallToAction from "./pages/call-to-action";
import Description from "./pages/description";
import Features from "./pages/features";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Samples from "./pages/samples";
import Testimonials from "./pages/testimonials";
import { Element } from "react-scroll";

function App() {
  return (
    <AppLayout>
      <Element name="home">
        <Home />
      </Element>
      <Description />
      <Element name="features">
        <Features />
      </Element>
      <Samples />
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="plans">
        <CallToAction />
      </Element>
      <Footer />
    </AppLayout>
  );
}

export default App;
