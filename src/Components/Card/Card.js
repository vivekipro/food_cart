import React from 'react'
import styles from './Card.module.css'
function Card() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardDetails}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    </div>
  )
}

export default Card
