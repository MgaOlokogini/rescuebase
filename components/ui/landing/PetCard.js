// components/PetCard.js
import Image from 'next/image';
import styles from '@/styles/Landing/Rescues.module.css';
export default function PetCard({ name, breed, age, badgeText }) {
  return (
    <div className={styles.petCard}>
      <div className={styles.imagePlaceholder}>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.petName}>{name}</h3>
        <p className={styles.petBreed}>{breed}</p>
        <p className={styles.petAge}>{age}</p>
        
        {/* Only renders a badge if a text value is passed to it */}
        {badgeText && <span className={styles.petBadge}>{badgeText}</span>}
      </div>
    </div>
  );
}