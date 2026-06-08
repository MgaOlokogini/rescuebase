import styles from "@/styles/Landing/Banner.module.css";

export default function StatsBanner() {
  const statsData = [
    { id: 1, value: "2,847", label: "Pets Adopted" },
    { id: 2, value: "94%", label: "Match Rate" },
    { id: 3, value: "12", label: "Partner Shelters" },
    { id: 4, value: "4.9", label: "Adopter Rating" }
  ];

  return (
    <section className={styles.statsSection}>
      {statsData.map((stat) => (
        <div key={stat.id} className={styles.statItem}>
          <span className={styles.statNumber}>{stat.value}</span>
          <p className={styles.statLabel}>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}