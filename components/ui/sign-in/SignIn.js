import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Sign-In/SignIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/signin-background.jpg"
          alt="A happy dog"
          width={1920}
          height={1080}
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.signInForm}>
        <div className={styles.formHeader}>
          <h1 className={styles.mainTitle}>Welcome Back</h1>
          <p className={styles.subTitle}>Sign in to continue</p>
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.primaryButton}>Sign In</button>
        </form>
        <div className={styles.formFooter}>
          <p>Don't have an account? <Link href="/sign-up">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;