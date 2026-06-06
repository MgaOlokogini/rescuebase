// components/shared/Header.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        
        {/* Brand Logo Wrapper */}
        <Link href="/" className={styles.logo}>
          <Image 
            src="/Logo.svg"       
            alt="RescueBase Logo" 
            width={45}            
            height={45}
            priority             
            className={styles.logoImage}
          />
          <span>RescueBase</span>
        </Link>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            <span>About Us</span>
            <Image src="/icons/redPaw.svg" alt="" width={16} height={16} className={styles.linkIcon} />
          </Link>
          <Link href="/browse" className={styles.navLink}>
            <span>Browse Pets</span>
            <Image src="/icons/redPaw.svg" alt="" width={16} height={16} className={styles.linkIcon} />
          </Link>
        </nav>

        {/* Action Buttons*/}
        <div className={styles.actions}>
          <Link href="/login" className={`${styles.btn} ${styles.btnLogin}`}>
            <Image src="/icons/yellowPaw.svg" alt="" width={16} height={16} className={styles.btnIcon} />
            <span>Log in</span>
          </Link>
          <Link href="/get-started" className={`${styles.btn} ${styles.btnGetStarted}`}>
            <Image src="/icons/yellowPaw.svg" alt="" width={16} height={16} className={styles.btnIcon} />
            <span>Get Started</span>
          </Link>
        </div>

      </div>
    </header>
  );
}