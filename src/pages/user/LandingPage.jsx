import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import Hero from "../../components/user/Hero";
import Features from "../../components/user/Features";
import Goals from "../../components/user/Goals";
import UserAnnouncements from "../../components/user/announcements/UserAnnouncements";
import UserAttendance from "../../components/user/attendance/UserAttendance";
import UserScore from "../../components/user/contribution/UserScore";

function LandingPage() {
  return (
    <>
      <UserNavigation />
      <Hero />
      <Features />
      <div className="container">
        <UserAnnouncements />
        <UserScore />
        <UserAttendance />
      </div>
      <Goals />
      <Footer />
    </>
  );
}

export default LandingPage;
