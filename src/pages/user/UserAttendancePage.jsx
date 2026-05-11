import UserNavigation from "../../components/user/UserNavigation";
import Footer from "../../components/Footer";
import UserAttendance from "../../components/user/attendance/UserAttendance";

function UserAttendancePage() {
  return (
    <>
      <UserNavigation />
      <div className="container" style={{ minHeight: "75vh" }}>
        <UserAttendance />
      </div>
      <Footer />
    </>
  );
}

export default UserAttendancePage;
