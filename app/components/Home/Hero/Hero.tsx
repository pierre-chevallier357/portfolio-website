'use client';
import './Hero.scss';
import profilePicture from '/public/images/home/profile-picture.png';
import Image from 'next/image';
import Presentation from './Presentation/Presentation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="hero">
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
    </motion.div>
  );
}
