// components/ui/landing/CallToActionBanner.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Landing/CTABanner.module.css';

export default function CallToActionBanner() {
  return (
    <section className={styles.bannerSection}>
      {/* Decorative Pet Graphic Overlay Container */}
      <div className={styles.imageOverlayWrapper}>
        <Image 
          src="/images/banner-pets.png" 
          alt="Rescued dogs and cats"
          width={450}
          height={300}
          className={styles.bannerImage}
          priority
        />
      </div>

      {/* Center Content Group */}
      <div className={styles.bannerContent}>
        <h2 className={`mainTitle ${styles.bannerTitle}`}>
          From Rescue to Forever <span className="highlightText">Home</span>
        </h2>
        
        <p className={`subTitle ${styles.bannerSubtitle}`}>
          It takes five minutes to take the quiz. <br />
          It takes a lifetime to love them.
        </p>

        {/* Call to Action Buttons */}
        <div className={styles.buttonGroup}>
          <Link href="/quiz" className={styles.primaryButton}>
            <span>Find my Match</span>
            <Image 
              src="/icons/light heart.svg" 
              alt="" 
              width={20} 
              height={20} 
              className={styles.btnIcon}
            />
          </Link>
          
          <Link href="/shelters" className={styles.secondaryButton}>
            Support a Shelter
          </Link>
        </div>
      </div>
    </section>
  );
}