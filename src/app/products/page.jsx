"use client";
import React from "react";
import styles from "./page.module.css";
import { cards } from "../utils/cards";
import Card from "../../components/card/Card";
import FadeOnScroll from "../../components/FadeOnScroll";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardC}>
        {cards.map((card) => (
          <FadeOnScroll key={card.id}>
            <div key={card.id} className={styles.animate}>
              <Card
                className={styles.card}
                key={card.id}
                image={card.image}
                title={card.title}
                category={card.category}
              />
            </div>
          </FadeOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Product;
