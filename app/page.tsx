import Header from './Header';
import Script from 'next/script';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div id="particles-js" className={styles.particles} />
          <h1>Hello world!</h1>
          <Script src="particles.js" />
        </section>
      </main>
    </>
  );
}
