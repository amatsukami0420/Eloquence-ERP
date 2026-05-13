import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import Hero from "../../components/user/Hero";
import Features from "../../components/user/Features";
import UserTestimonials from "../../components/user/UserTestimonials";
import UserCallToAction from "../../components/user/UserCallToAction";
import Goals from "../../components/user/Goals";

function LandingPage() {
  return (
    <>
      <UserNavigation />
      <Hero />
      <Goals />
      <Features />
      <UserCallToAction />
      <UserTestimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
