"use client";

import Image from "next/image";
import styles from "./card.module.css";

function Card({ title, image, category }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgC}>
        <Image className={styles.prodImg} src={image} alt="image" />
      </div>
      <div className={styles.txt}>
        <p className={styles.category}>{category}</p>
        <div className="text">
          <h3 className={styles.prodName}>
            <a href="/products">{title}</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
