import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import UserAnnouncements from "../../components/user/announcements/UserAnnouncements";

function UserFeedPage() {
  return (
    <>
      <UserNavigation />
      <div className="container" style={{ minHeight: "75vh" }}>
        <UserAnnouncements />
      </div>
      <Footer />
    </>
  );
}

export default UserFeedPage;
