import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>
        Have any questions? Reach out to us via email or phone.
      </p>
      <h2>Our Contact Details</h2>
      <p>Email: malukijoe7@gmail.com</p>
      <p>Phone: +254 717 072953</p>

      <h2>Follow Us on Social Media</h2>
      <p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>{" "}
        |{" "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        |{" "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Contact;
