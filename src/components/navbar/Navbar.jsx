"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Image from "next/image";
import logo from "../../../public/kekofoods.svg";

const link = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact Us",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} width={36} height={36} alt="logo" />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {link.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
