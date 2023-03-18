'use client';
import { Typewriter } from 'react-simple-typewriter';
import './SelfWritingText.scss';

export default function SelfWritingText() {
  return (
    <span className="job">
      <Typewriter words={['développeur web', 'étudiant en M2 MIAGE']} cursor loop={true} delaySpeed={2000} />
    </span>
  );
}
