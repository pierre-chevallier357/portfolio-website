import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './page.scss';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="home-section">
          <Home />
        </section>
        <section className="about-section">
          <About />
        </section>
        <div className="separation-line" />
        <section className="experiences-section">
          <Experiences />
        </section>
      </main>
    </>
  );
}
