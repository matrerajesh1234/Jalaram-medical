import React from "react";
import "./About.css";

const About = () => {

  return (
    <div>
      <section className="about-intro">
        <div className="about-container">
          <h2>Welcome to Jalaram Medical Store</h2>
          <p>
            Discover our commitment to providing exceptional pharmaceutical
            and healthcare products. Your well-being is our priority, and we
            strive to offer tailored services to meet your needs.
          </p>
          <div className="image-gallery">
            <img src="/Images/About/M1.jpg" alt="Gallery Image 1" />
            <img src="/Images/About/m2.jpg" alt="Gallery Image 2" />
            <img src="/Images/About/m3.png" alt="Gallery Image 3" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="about-container">
          <h2>Our Mission</h2>
          <p>
            At Our Medical Store, we aim to:
          </p>
          <ul>
            <li>Provide convenient access to medications and healthcare essentials.</li>
            <li>Promote community health and well-being.</li>
            <li>Deliver personalized services and expert guidance from our dedicated team.</li>
          </ul>
          <p>
            <strong>GENERIC DAVA</strong>, <strong>MORE DISCOUNT</strong>,{" "}
            <strong>BEST PRICE</strong> - these are our commitments to you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
