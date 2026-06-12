"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from '@/styles/Sign-In/SignIn.module.css';

// Zod schema for validation
const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    setServerError('');
    // --- FAKE API CALL ---
    // In a real app, you would make an API call here.
    // The following logic simulates the test cases.
    if (data.email === 'volunteer@example.com' && data.password === 'password123') {
      // TC01-LI: Valid Log In (Volunteer)
      window.location.href = '/dashboard'; // Redirect to volunteer dashboard
    } else if (data.email === 'admin@example.com' && data.password === 'password123') {
      // TC02-LI: Valid Log In (Admin)
      window.location.href = '/analytics'; // Redirect to management dashboard
    } else if (data.email !== 'volunteer@example.com' && data.email !== 'admin@example.com') {
      // TC05-LI: Unregistered Account
      setServerError('User not found');
    } else {
      // TC06-LI: Incorrect Password
      setServerError('Incorrect password');
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.togglePassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
          </div>
          {serverError && <p className={styles.errorMessage}>{serverError}</p>}
          <button type="submit" className={styles.primaryButton}>Sign In</button>
        </form>
        <div className={styles.formFooter}>
          <p>Don't have an account? <Link href="/get-started">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;