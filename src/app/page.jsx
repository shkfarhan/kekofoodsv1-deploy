"use client";
import Image from "next/image";
import styles from "./page.module.css";
import about from "../../public/about.svg";
import kekofoods from "../../public/kekofoods.svg";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "../components/card/Card";
import { cards } from "./utils/cards";
import RevealOnScroll from "../components/RevealOnScroll";
import RevealLeftScroll from "../components/RevealLeftScroll";
import hover3d from "./utils/hover";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const ref = useRef(null);

  const hoverHero = hover3d(ref, {
    x: 30,
    y: -40,
    z: 30,
  });
  const imageHover = hover3d(ref, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <div>
      {/* -------------------------------------Header Content----------------------- */}
      <section>
        <div className={styles.headContent} ref={ref}>
          <div className={styles.headTxt}>
            <RevealLeftScroll>
              <h1 className={styles.headTitle}>Keko Foods </h1>
            </RevealLeftScroll>
            <br />
            <RevealOnScroll>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ligula tellus, iaculis sit amet augue commodo, feugiat ultricies
                dui. Nulla ac massa sed mi pulvinar gravida. Etiam vel fringilla
                velit.
              </p>
            </RevealOnScroll>
          </div>
          <div
            className={styles.headImg}
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src={kekofoods}
              style={{
                transform: imageHover.transform,
              }}
              width={600}
              height={600}
              alt="logo"
            />
          </div>
        </div>
      </section>
      <br /> <br />
      <br /> <br /> <br /> <br />
      {/* -------------------------------------About Section----------------------- */}
      <section>
        <RevealLeftScroll>
          <div className={styles.Title}>About Us</div>
        </RevealLeftScroll>

        <div className={styles.homeAboutContainer}>
          <div className={styles.homeAboutItems}>
            <Image src={about} className={styles.img} alt="about.svg" />
          </div>

          <div className={styles.homeAboutItems}>
            <RevealOnScroll>
              <p className={styles.aboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ligula tellus, iaculis sit amet augue commodo, feugiat ultricies
                velit. Fusce vel magna sed justo ultrices hendrerit quis ut
                sapien. Donec vel lacus ac odio hendrerit vestibulum.
              </p>
            </RevealOnScroll>
            <button className={styles.button}>
              <a href="/about"> Learn More...</a>
            </button>
          </div>
        </div>
      </section>
      <br /> <br />
      <br />
      {/* -------------------------------------Product Section----------------------- */}
      <div className={styles.Title}>
        <a href="/products"> Products</a>
      </div>
      <section>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCarousel}
          >
            <motion.div>
              <div className={styles.cardC}>
                {cards.slice(0, 4).map((card) => (
                  <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    category={card.category}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
