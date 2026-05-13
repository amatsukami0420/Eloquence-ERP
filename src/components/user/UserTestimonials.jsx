function UserTestimonials() {
  const testimonials = [
    {
      image: "/student2.jpg",
      alt: "User 1",
      name: "Sarah Jenkins",
      role: "President, Tech Innovations",
      quote:
        "The automated AI heuristics reduced our administrative overhead by 40%, allowing us to focus on what matters most: growing our community.",
    },
    {
      image: "/student3.jpg",
      alt: "User 2",
      name: "David Chen",
      role: "Director of Operations",
      quote:
        "Eloquence gives us the enterprise-grade visibility we desperately needed. Member tracking and event analytics are now seamless.",
    },
    {
      image: "/student4.jpg",
      alt: "User 3",
      name: "Maria Gonzales",
      role: "VP of Finance",
      quote:
        "An incredibly robust system. The attendance tracking directly tied to contribution metrics makes performance reviews totally empirical and bias-free.",
    },
  ];

  return (
    <>
      <section id="testimonials" className="bg-light py-5">
        <div className="container py-4">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold text-uppercase tracking-wider">
                Trusted By High-Performing Chapters
              </h2>

              <p className="text-muted lead">
                See how Eloquence transforms society operations globally.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="rounded-circle me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />

                    <div>
                      <h6 className="fw-bold mb-0">{testimonial.name}</h6>

                      <span className="small text-muted">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted italic mb-0">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserTestimonials;
