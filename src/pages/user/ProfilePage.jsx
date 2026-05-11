import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import ProfileInfo from "../../components/user/ProfileInfo";

function ProfilePage() {
  return (
    <>
      <UserNavigation />
      <div className="container py-5">
        <ProfileInfo />
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
