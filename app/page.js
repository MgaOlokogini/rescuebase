import Link from "next/link";
import Image from 'next/image';
import Header from "@/components/shared/Header";
import PetCard from "@/components/ui/PetCard";
import ProcessCard from "@/components/ui/ProcessCard";
import styles from "@/styles/Landing.module.css";


export default function Home() {

//database preparation for stats section (currently hardcoded for demo purposes)
  const statsData = [
    { id: 1, value: "2,847", label: "Pets Adopted" },
    { id: 2, value: "94%", label: "Match Rate" },
    { id: 3, value: "12", label: "Partner Shelters" },
    { id: 4, value: "4.9", label: "Adopter Rating" }
  ];


  return (
    <main className={styles.mainWrapper}>
      
{/*Landing Page Header here */}
      <Header role={null} />

{/* 1. Title section Container */}
      <section className={styles.heroSection}>
      
        <div className={styles.heroContent}>    
      {/* Main Title */}
          <h1 className={`${styles.mainTitle} ${styles.heroTitle}`}>
            Find Your <br />
            Perfect <span className={styles.highlightText}>Match</span>
          </h1>
          
      {/* Subtitle */}
          <p className={`${styles.subTitle} ${styles.heroSubtitle}`}>
            Helping every rescued pet find a loving family faster.
          </p>

      {/* Action Button */}
          <Link href="/browse" className={styles.heroButton}>
            <span>Find my Match</span>
            <Image 
              src="/icons/heart.svg" 
              alt="" 
              width={28}   /* Increased size since it includes its own circle now */
              height={28} 
              className={styles.heroButtonIcon}
            />
          </Link>
        </div>
      </section> 


{/* Rescues Showcase Section */}
      <section className={styles.rescuesSection}>
        
    {/* Section Typography Headers */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainTitle} ${styles.showcaseTitle}`}>Meet some of our rescues</h2>
          <p className={`${styles.subTitle} ${styles.showcaseSubtitle}`}>Every one of them is waiting for you.</p>
        </div>

    {/* "See All Pets" text arrow locator */}
        <div className={styles.seeAllWrapper}>
          <Link href="/browse" className={styles.seeAllLink}>
            <span>See All Pets</span>
            <span className={styles.arrowIcon}>→</span>
          </Link>
        </div>

    {/* Three-Column Animal Cards Display Grid */}
        <div className={styles.cardsGrid}>
          <PetCard name="Max" breed="Shih Tzu" age="4 years" badgeText="Kid Friendly" />
          <PetCard name="Blacky" breed="Aspin" age="1 year" badgeText="Kid Friendly" />
          <PetCard name="Chichay" breed="Puspin" age="4 years" badgeText="Kid Friendly" />
        </div>

{/* Bottom Action Footer Segment */}
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

{/* Dynamic Stats Banner Section (NEW) */}
      <section className={styles.statsSection}>
        {statsData.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <span className={styles.statNumber}>{stat.value}</span>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </section>

{/* Adoption Steps Section */}
      <section className={styles.stepsSection}>
        <h2 className={`${styles.mainTitle} ${styles.stepsTitle}`}>Adoption in three steps</h2>
        <p className={`${styles.subTitle} ${styles.stepsSubtitle}`}>We've made finding your forever pet as joyful as the moment you meet them.</p>
        
        <div className={styles.stepsGrid}>
          {/* Rendered as Medium Size */}
          <ProcessCard 
            size="md"
            iconSrc="/icons/StepQuiz.svg"
            title="Take the Match Quiz"
            description="Answer a few fun questions about your lifestyle. Our AI finds pets that truly fit your world."
          />
          
          <div className={styles.stepArrow}>
            <Image src="/icons/StepArrow.svg" alt="" width={40} height={24} />
          </div>

          <ProcessCard 
            size="md"
            iconSrc="/icons/StepMatches.svg"
            title="Meet Your Matches"
            description="Browse your personalized pet gallery with rich profiles, photos, and personality breakdowns."
          />
          
          <div className={styles.stepArrow}>
            <Image src="/icons/StepArrow.svg" alt="" width={40} height={24} />
          </div>

          <ProcessCard 
            size="md"
            iconSrc="/icons/StepHome.svg"
            title="Apply & Bring Them Home"
            description="Submit your application in minutes. Our staff guides you through every step of the journey."
          />
        </div>
      </section>

{/* Decorative background paw trail overlay */}
      <div className={styles.pawContainer}>
        
        <div className={styles.pawOverlay}>
          <Image src="/images/pawTrail.png" alt="" fill style={{ objectFit: 'cover' }} priority/>
        </div>

        <div className={styles.pawOverlayFlipped}>
          <Image src="/images/pawTrail.png" alt="" fill style={{ objectFit: 'cover' }} priority />
        </div>

      </div>

    </main>
  );
}
