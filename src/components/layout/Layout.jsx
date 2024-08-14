import Link from "next/link";
import styles from "../../styles/layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header_container}>
        <h1 className={styles.header_title}>کویر خودرو</h1>

        <p>اولین سامانه فوق تخصصی خرید و فروش خودرو کارکرده</p>

        <span className={styles.divider}></span>
      </header>

      <main>{children}</main>

      <footer className={styles.footer_container}>
        <span className={styles.divider}></span>

        <p className={styles.footer_text}>ساخته شده با ❤️ توسط hwssein</p>

        <Link href="https://github.com/hwssein" target="_blank">
          <p className={styles.footer_link}>ورود به گیت هاب</p>
        </Link>
      </footer>
    </>
  );
}

export default Layout;
