// components/ui/ProcessCard.js
import Image from 'next/image';
import styles from '@/styles/Landing/Steps.module.css';
export default function ProcessCard({ 
  title, 
  description, 
  iconSrc, 
  size = "md" 
}) {
  
  // Dynamic size configuration map
  const sizeClasses = {
    sm: styles.cardSm,
    md: styles.cardMd,
    lg: styles.cardLg
  };

  // Dynamic icon dimensions map
  const iconSizes = {
    sm: 40,
    md: 54,
    lg: 72
  };

  return (
    // Combines the base structural class with the selected sizing class override
    <div className={`${styles.processCard} ${sizeClasses[size]}`}>
      
      <div className={styles.stepIconWrapper}>
        <Image 
          src={iconSrc} 
          alt="" 
          width={iconSizes[size]} 
          height={iconSizes[size]} 
        />
      </div>
      
      <h3 className={styles.stepCardTitle}>{title}</h3>
      <p className={styles.stepCardDescription}>{description}</p>
      
    </div>
  );
}