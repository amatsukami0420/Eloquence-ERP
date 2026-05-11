import { Outlet } from "react-router-dom";
import AdminNavigation from "../../components/admin/AdminNavigation";
import Footer from "../../components/Footer";

function AdminPanel() {
  return (
    <>
      <AdminNavigation />
      <main className="container my-5">
        <section className="bg-light p-4 rounded shadow-sm">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default AdminPanel;
