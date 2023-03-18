import HomeNavLinks from './HomeNavLinks/HomeNavLinks';
import SelfWritingText from './SelfWritingText/SelfWritingText';
import './Presentation.scss';

export default function Presentation() {
  return (
    <div>
      <h1 className="title">
        Hey !
        <br />
        Je m'appelle <span className="name">Pierre Chevallier</span>,
        <br />
        Je suis <SelfWritingText />
      </h1>
      <HomeNavLinks />
    </div>
  );
}
