import AdminNavigation from "../components/AdminNavigation";
import HeroCarousel from "../components/HeroCarousel";
import Member from "../components/Member";
import Announcements from "../components/Announcements";
import Attendance from "../components/Attendance";
import ContributionAnalysis from "../components/ContributionAnalysis";
import Footer from "../components/Footer";
function AdminPanel() {
    return (
      <>
        <AdminNavigation />
        <main className="container my-5">
          <header className="mb-5 pb-3 border-bottom text-center">
            <h2 className="fw-bold text-uppercase">Society Command Center</h2>
            <p className="text-muted">
              Control and monitor all aspects of your society's operations from
              one centralized dashboard. Manage members, post announcements,
              track attendance, and analyze contributions with ease.
            </p>
          </header>
          <HeroCarousel />
          <section id="member" className="mb-5 pt-4">
            <Member />
          </section>
          <section id="announcements" className="mb-5 pt-4">
            <Announcements />
          </section>
          <section id="attendance" className="mb-5 pt-4">
            <Attendance />
          </section>
          <section id="ai-analysis" className="mb-5 pt-4">
            <ContributionAnalysis />
          </section>
        </main>
        <Footer />
      </>
    );
}
export default AdminPanel;