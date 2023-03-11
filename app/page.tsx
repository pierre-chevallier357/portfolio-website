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
      </main>
    </>
  );
}
