import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import UserScore from "../../components/user/contribution/UserScore";

function UserScorePage() {
  return (
    <>
      <UserNavigation />
      <div className="container" style={{ minHeight: "75vh" }}>
        <UserScore />
      </div>
      <Footer />
    </>
  );
}

export default UserScorePage;
