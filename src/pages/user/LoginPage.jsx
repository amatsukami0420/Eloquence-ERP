import UserNavigation from "../../components/user/UserNavigation";
import UserLoginForm from "../../components/user/UserLoginForm";
import Footer from "../../components/Footer";

function LoginPage() {
  return (
    <>
      <UserNavigation />
      <main className="bg-light py-5" style={{ minHeight: "85vh" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <UserLoginForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default LoginPage;
