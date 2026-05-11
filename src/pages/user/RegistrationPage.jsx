import UserNavigation from "../../components/user/UserNavigation";
import RegistrationForm from "../../components/user/RegistrationForm";
import Footer from "../../components/Footer";

function RegistrationPage() {
  return (
    <>
      <UserNavigation />
      <main className="bg-light py-5" style={{ minHeight: "90vh" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RegistrationPage;
