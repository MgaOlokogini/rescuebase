import styles from '../../styles/Landing.module.css';
import FeatureCard from './FeatureCard'; // Adjust path if needed depending on your folder layout

export default function PlatformFeatures() {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Our quiz algorithm weighs lifestyle, experience, and home setup to surface your most compatible pets first.",
      icon: "/images/icons/matching.png",
    },
    {
      title: "Digital Pet Passports",
      description: "Every animal has a complete medical history, vaccination records, and personality notes — all in one place.",
      icon: "/images/icons/passport.png",
    },
    {
      title: "Guardian Watch",
      description: "Our AI flags at-risk animals early so staff can intervene before health or welfare issues escalate.",
      icon: "/images/icons/guardian.png",
    },
    {
      title: "Real-Time Analytics",
      description: "Shelter managers get live dashboards — intake trends, adoption rates, and donation impact at a glance.",
      icon: "/images/icons/analytics.png",
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.featuresMainTitle}>
        More than an adoption site
      </h2>
      <p className={styles.featuresSubtitle}>
        A complete platform for adopters, shelter staff, and managers — all connected.
      </p>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}