import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Landing/Hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>    
        <h1 className={`globalMainTitle ${styles.heroTitle}`}>
          Find Your <br />
          Perfect <span className="globalHighlightText">Match</span>
        </h1>
        <p className={`globalSubTitle ${styles.heroSubtitle}`}>
          Helping every rescued pet find a loving family faster.
        </p>
        <Link href="/browse" className={styles.heroButton}>
          <span>Find my Match</span>
          <Image 
            src="/icons/light heart.svg" 
            alt="" 
            width={28} 
            height={28} 
            className={styles.heroButtonIcon}
          />
        </Link>
      </div>
    </section>
  );
}