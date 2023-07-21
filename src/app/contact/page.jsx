"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";
import RevealLeftScroll from "../../components/RevealLeftScroll";
import FadeOnScroll from "../../components/FadeOnScroll";

const Contact = () => {
  return (
    <div>
      <section>
        <div className={styles.contact}>
          <form className={styles.form}>
            <h2>Personal details to get conencted with each other</h2>
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*Enter your Full Name"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*Age"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*City / Town / Village"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*Second line of Address"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*State"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*Pincode"
            />
            <input
              className={styles.input}
              type="text"
              required
              placeholder="*PhoneNo.:"
            />
            <input
              className={styles.input}
              type="email"
              required
              placeholder="*Email"
            />
            <textarea
              className={styles.textarea}
              placeholder="Enter your query / message / sugegstion"
              rows="5"
            ></textarea>
            <input type="button" className={styles.button} value="Submit" />
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
      <section className={styles.csec}>
        <div className={styles.col}>
          <h3 className={styles.Title}>Keko Foods</h3>

          <RevealOnScroll>
            <p>Address: G-5/98 PREM NAGAR,</p>
          </RevealOnScroll>
          <RevealLeftScroll>
            <p>JOGESHWARI EAST MUMBAI,</p>
          </RevealLeftScroll>
          <RevealOnScroll>
            <p>MAHARASHTRA 400060</p>
          </RevealOnScroll>
          <RevealLeftScroll>
            <br />
            <Link href="tel:+91 8828089948">
              Telephone:+91 88280 89948
            </Link>{" "}
          </RevealLeftScroll>
          <RevealOnScroll>
            <Link href="tel:+91 8828089948">Telephone:+91 98924 67428</Link>
          </RevealOnScroll>
          <RevealLeftScroll>
            <br />
            <Link href="mailto:support@kekofoods.com">
              Email:support@kekofoods.com
            </Link>
          </RevealLeftScroll>
          <RevealOnScroll>
            <Link href="mailto:support@kekofoods.com">
              Email:sadiq.shaikh@kekofoods.com
            </Link>
          </RevealOnScroll>
        </div>
        <div className={styles.col}>
          <FadeOnScroll>
            <iframe
              className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60307.72852709478!2d72.82216344351912!3d19.14127409901197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689869803486!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Contact;
