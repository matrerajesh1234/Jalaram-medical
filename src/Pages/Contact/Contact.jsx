import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <h2 className="ContactHeading">Contact page</h2>

        {/* Map ayega   */}

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7749503852197!2d72.527945!3d23.1053328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8301ba911705%3A0x3bc245ec8a1eb9e3!2sJALARAM%20MEDICAL%20STORES%20GOTA%20(CIVIL)%20(%20Upto%2080%25%20Discount%20on%20Generic%20MEDICINES%20%40%20Cheapest%20Rate%20)%20NR.%20SOLA%20CIVIL%20HOSPITAL%20GOTA!5e0!3m2!1sen!2sin!4v1706427838817!5m2!1sen!2sin"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form">
        <form action="https://formspree.io/f/mgegaraz" method="post" className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            style={{ paddingLeft: "20px" }}
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            style={{ paddingLeft: "20px" }}
            required
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Explain your medical requirements here..."
            style={{ paddingLeft: "20px" }}
            required
          ></textarea>

          <button
            type="submit"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="contact-info">
        <div className="contact-num">
          <h3 style={{ overflow: "hidden" }}>Contact :</h3>
          <h2 style={{ overflow: "hidden" }}>9898989075</h2>
        </div>
        <div className="contact-address">
          <h3 style={{ overflow: "hidden" }}>Address :</h3>
          <h6 style={{ overflow: "hidden" , width:'70%' }}>
            HOUSING, OPPOSITE HARIOM APARTMENT, MAHATMA GANDHI VASAHAT, Ognaj -
            Gota Rd, near Water Tank Road, Gota, Ahmedabad, Gujarat 380061
          </h6>
        </div>
        <div className="working-hours">
          <h3 style={{ overflow: "hidden" }}>Business Hours</h3>
        <h6>
          <ul style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            <li>Mon: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Tue: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Wed: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Thu: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Fri: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Sat: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
            <li>Sun: 9:30 AM – 1:00 PM, 4:00 – 11:00 PM</li>
          </ul>
        </h6>
        </div>
      </div>
    </>
  );
};

export default Contact;
