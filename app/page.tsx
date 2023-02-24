import Header from './components/Header/Header';
import Home from './components/Home/Home';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Home />
        </section>
      </main>
    </>
  );
}
