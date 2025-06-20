"use client"; // ✅ Tells Next.js this is a Client Component

import TextContent from '../text-content/TextContent';
import BottomBox from '../bottombox/BottomBox';
import QuoteSection from '../quotesection/QuoteSection';
import AudioBookSection from '../audiobook/AudioBookSection';
import '../storysection/StoryContainer.css'; // ✅ Import the CSS file for styles
import AnimatedImage from '../AnimatedImage/AnimatedImage';
export default function StoryContainer() {
  return (
    <div className="story-container">
      {/* ✅ Blurred colored sides */}
      <div className="blur-side blur-left"></div>
      <div className="blur-side blur-right"></div>
    <div className="background-wrapper">
    <AnimatedImage />
  </div>
      <TextContent />
      <AudioBookSection />
      <QuoteSection />
      <BottomBox />

      {/* ✅ Animated image or logo */}
    <div className="image-top-left">
  <img src="/images/Polygun.png" alt="Polygon Graphic" />
</div>
    </div>
  );
}
