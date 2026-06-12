import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Sign-Up/SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpForm}>
        <div className={styles.formHeader}>
          <h1 className={styles.mainTitle}>Create an Account</h1>
          <p className={styles.subTitle}>Join our community of pet lovers</p>
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.primaryButton}>Sign Up</button>
        </form>
        <div className={styles.formFooter}>
          <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/signup-background.jpg"
          alt="A happy dog"
          width={1920}
          height={1080}
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
};

export default SignUp;