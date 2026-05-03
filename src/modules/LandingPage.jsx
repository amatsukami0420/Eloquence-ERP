import UserNavigation from "../components/UserNavigation";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";
import Login from "../components/Login";
function LandingPage() {
  return (
    <>
      <UserNavigation />
      <div className="container my-5">
        <HeroCarousel />
      </div>
      {/* <RegistrationForm /> */}
      <Login />
      <Footer />
    </>
  );
}
export default LandingPage;
