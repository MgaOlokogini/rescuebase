"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Sign-up/SignUp.module.css";
import Header from "@/components/shared/Header";

export default function SignUpSection() {
  return (
    <div className={styles.authPageContainer}>
      
      <Header showButtons={false} />

      {/* 🔲 Main Dynamic Split-Panel Grid */}
      <main className={styles.splitContentWrapper}>
        
        {/* Left Panel: Pet Graphics Side */}
        <div className={styles.leftVisualSide}>
          <Image 
            src="/images/auth-pets.jpg" 
            alt="Happy golden retriever dog and British shorthair cat sitting together"
            fill
            priority
            className={styles.backgroundImageAsset}
          />
        </div>

        {/* Right Panel: The Golden Form Container Card */}
        <div className={styles.rightFormCardSide}>
          
          {/* Back Arrow button */}
          <Link href="/" className={styles.backButton} aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>

          {/* Core Form Element Groupings */}
          <div className={styles.formContentBox}>
            <h1 className={styles.formTitle}>Create Account</h1>

            {/* Google OAuth Provider Button */}
            <button type="button" className={styles.googleAuthButton}>
              <img src="/icons/google.svg" alt="" className={styles.providerIcon} />
              <span>Sign up with Google</span>
            </button>

            <div className={styles.dividerContainer}>
              <span className={`globalSubTitle ${styles.dividerText}`}>OR</span>
            </div>

            {/* Credential Inputs Section */}
            <form className={styles.credentialsForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputWrapper}>
                <input type="text" id="fullName" placeholder="Full Name" required className={styles.materialInput} />
              </div>

              <div className={styles.inputWrapper}>
                <input type="email" id="email" placeholder="Email Address" required className={styles.materialInput} />
              </div>

              <div className={styles.inputWrapper}>
                <input type="password" id="password" placeholder="Password" required className={styles.materialInput} />
                <button type="button" className={styles.revealPasswordToggle} aria-label="Toggle password visibility">
                  {/* Eye Icon SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="2" y1="2" x2="22" y2="22"></line>
                  </svg>
                </button>
              </div>

              <button type="submit" className={`globalMainTitle ${styles.submitActionButton}`}>
                Create Account
              </button>
            </form>
            
            <p className={`globalSubTitle ${styles.footerRedirectPrompt}`}>
              Already have an account? <Link href="/login" className={styles.redirectLink}>Sign In</Link>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}