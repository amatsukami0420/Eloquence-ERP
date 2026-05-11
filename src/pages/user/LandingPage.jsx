import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import Hero from "../../components/user/Hero";
import Features from "../../components/user/Features";
import UserTestimonials from "../../components/user/UserTestimonials";
import UserCallToAction from "../../components/user/UserCallToAction";

function LandingPage() {
  return (
    <>
      <UserNavigation />
      <Hero />
      <Features />
      <UserTestimonials />
      <UserCallToAction />
      <Footer />
    </>
  );
}

export default LandingPage;
