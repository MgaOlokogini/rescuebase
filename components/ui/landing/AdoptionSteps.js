import Image from 'next/image';
import ProcessCard from "@/components/ui/landing/ProcessCard";
import styles from "@/styles/Landing/Steps.module.css";

export default function AdoptionSteps() {
  return (
    <section className={styles.stepsSection}>
      <h2 className={`mainTitle ${styles.stepsTitle}`}>Adoption in three steps</h2>
      <p className={`${styles.subTitle} ${styles.stepsSubtitle}`}>We've made finding your forever pet as joyful as the moment you meet them.</p>
      
      <div className={styles.stepsGrid}>
        <ProcessCard 
          size="md"
          iconSrc="/icons/paw search.svg"
          title="Take the Match Quiz"
          description="Answer a few fun questions about your lifestyle. Our AI finds pets that truly fit your world."
        />
        <div className={styles.stepArrow}>
          <Image src="/icons/StepArrow.svg" alt="" width={50} height={34} />
        </div>
        <ProcessCard 
          size="md"
          iconSrc="/icons/red heart.svg"
          title="Meet Your Matches"
          description="Browse your personalized pet gallery with rich profiles, photos, and personality breakdowns."
        />
        <div className={styles.stepArrow}>
          <Image src="/icons/StepArrow.svg" alt="" width={50} height={34} />
        </div>
        <ProcessCard 
          size="md"
          iconSrc="/icons/home.svg"
          title="Apply & Bring Them Home"
          description="Submit your application in minutes. Our staff guides you through every step of the journey."
        />
      </div>
    </section>
  );
}