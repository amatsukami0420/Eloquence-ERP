import { Link } from "react-router-dom";

function UserCallToAction() {
  return (
    <section className="py-5" style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }}>
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold mb-4">Ready to Optimize Your Logistics?</h2>
        <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px" }}>
          Join hundreds of other high-impact chapters utilizing Eloquence to scale their management processes securely and accurately.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/register" className="btn btn-light btn-lg fw-bold px-5 py-3 shadow">Request Implementation</Link>
          <Link to="/userlogin" className="btn btn-outline-light btn-lg fw-bold px-5 py-3">Client Portal</Link>
        </div>
      </div>
    </section>
  );
}

export default UserCallToAction;
