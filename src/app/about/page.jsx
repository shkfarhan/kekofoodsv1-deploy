"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import about from "../../../public/about.svg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";
import FadeOnScroll from "../../components/FadeOnScroll";
const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <RevealOnScroll>
          <div className={styles.Title}>About Us</div>
        </RevealOnScroll>
        <div className={styles.homeAboutContainer}>
          <div className={styles.homeAboutItems}>
            <FadeOnScroll>
              <Image src={about} className={styles.img} alt="about.svg" />
            </FadeOnScroll>
          </div>
          <div className={styles.homeAboutItems}>
            <RevealOnScroll>
              <p className={styles.aboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ligula tellus, iaculis sit amet augue commodo, feugiat ultricies
                dui. Nulla ac massa sed mi pulvinar gravida. Etiam vel fringilla
                velit. Fusce vel magna sed justo ultrices hendrerit quis ut
                sapien. Donec vel lacus ac odio hendrerit vestibulum.{" "}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
