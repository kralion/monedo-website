import AppLayout from "@/components/applayout";
import CallToAction from "./pages/call-to-action";
import Description from "./pages/description";
import Features from "./pages/features";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Samples from "./pages/samples";
import Testimonials from "./pages/testimonials";

function App() {
  return (
    <AppLayout>
      <Home />
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
