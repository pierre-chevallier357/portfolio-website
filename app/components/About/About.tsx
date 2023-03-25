import './About.scss';
import Image from 'next/image';
import portraitImage from '/public/images/about/about-image.jpg';
import userIcon from '/public/images/about/user.svg';

export default function About() {
  return (
    <>
      <article className="about-article">
        <header className="about-header">
          <Image src={userIcon} alt="Icône utilisateur" className="user-icon" width={35} height={35} priority={true} />
          <h1 className="about-me-title">À propos</h1>
        </header>
        <div className="about-content">
          <div>
            <p className="presentation-paragraph">
              Hey ! Je m'appelle Pierre Chevallier, j'ai 22 ans et je suis développeur web front-end à Grenoble.
            </p>
            <p className="presentation-paragraph">
              Je suis passionné de développement web, fan de design, de nouvelles technologies et de développement
              personnel. J'ai découvert le développement front-end lors de mes études, et suis tombé amoureux de ce
              domaine qui mêlait 2 de mes passions : l'informatique et le design.
            </p>
            <p className="presentation-paragraph">
              J'ai étudié en master MIAGE pour en apprendre plus sur l'informatique, l'ingénierie, le management et la
              gestion d'entreprise.
            </p>
            <p className="presentation-paragraph">
              Dans la vie, je suis quelqu'un d'optimiste, dévoué, rigoureux et qui adore apprendre. Je me donne à fond
              pour développer mes compétences dans ce domaine qui m'anime : le développement web front-end.
            </p>
            <p className="presentation-paragraph">
              Je touche à toutes sortes de technologies, mais suis en particulier focalisé sur JavaScript, TypeScript,
              Angular, Next.js, React et Vue.js.
            </p>
          </div>
          <Image
            src={portraitImage}
            alt="Pierre souriant avec des lunettes de soleil"
            className="about-image"
            height={450}
            priority={true}
            placeholder="blur"
          />
        </div>
      </article>
    </>
  );
}
