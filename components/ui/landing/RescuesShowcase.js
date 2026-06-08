import Link from "next/link";
import Image from 'next/image';
import PetCard from "@/components/ui/landing/PetCard";
import styles from "@/styles/Landing/Rescues.module.css";

export default function RescuesShowcase() {
  return (
    <section className={styles.rescuesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={`${styles.mainTitle} ${styles.showcaseTitle}`}>Meet some of our rescues</h2>
        <p className={`${styles.subTitle} ${styles.showcaseSubtitle}`}>Every one of them is waiting for you.</p>
      </div>

      <div className={styles.seeAllWrapper}>
        <Link href="/browse" className={styles.seeAllLink}>
          <span>See All Pets</span>
          <span className={styles.arrowIcon}>→</span>
        </Link>
      </div>

      <div className={styles.cardsGrid}>
        <PetCard name="Max" breed="Shih Tzu" age="4 years" badgeText="Kid Friendly" />
        <PetCard name="Blacky" breed="Aspin" age="1 year" badgeText="Kid Friendly" />
        <PetCard name="Chichay" breed="Puspin" age="4 years" badgeText="Kid Friendly" />
      </div>

      <div className={styles.ctaContainer}>
        <p className={styles.ctaPrompt}>Sign in to see all available pets and start your application</p>
        <div className={styles.actionButtonsGroup}>
          <Link href="/register" className={`${styles.ctaButtonBase} ${styles.adoptButton}`}>
            <span>Adopt</span>
            <Image src="/icons/Adopt.svg" alt="" width={42} height={42} />
          </Link>
          <Link href="/donate" className={`${styles.ctaButtonBase} ${styles.donateButton}`}>
            <span>Donate</span>
            <Image src="/icons/Donate.svg" alt="" width={42} height={42} />
          </Link>
        </div>
      </div>
    </section>
  );
}