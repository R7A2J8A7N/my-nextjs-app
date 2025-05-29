"use client"
// import AnimatedImage from './AnimatedImage';
import TextContent from './TextContent';
import BottomBox from './BottomBox';
import styles from '../../src/app/styles/story-style.css';

export default function StoryContainer() {
  return (
    <div className={styles.container}>
      
      {/* <AnimatedImage /> */}
      <TextContent />
      <BottomBox />
    </div>
  );
}
