import './Hero.scss';
import profilePicture from '/public/images/home/profile-picture.png';
import Image from 'next/image';
import Presentation from './Presentation/Presentation';

export default function Hero() {
  return (
    <div className="hero">
      <Presentation />
      <Image
        src={profilePicture}
        alt="Portrait de Pierre"
        className="profile-picture"
        width={450}
        height={450}
        priority={true}
        placeholder="blur"
      />
    </div>
  );
}
