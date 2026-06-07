import Image from 'next/image';
import styles from '../../styles/Landing.module.css';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrapper}>
        <Image 
          src={icon} 
          alt={`${title} icon`}
          width={48} 
          height={48}
          priority
        />
      </div>
      <div className={styles.featureTextWrapper}>
        <h3 className={styles.featureCardTitle}>{title}</h3>
        <p className={styles.featureCardDescription}>{description}</p>
      </div>
    </div>
  );
}