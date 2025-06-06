"use client"; // ✅ Tells Next.js this is a Client Component

import TextContent from './TextContent';
import BottomBox from './BottomBox';
import QuoteSection from './QuoteSection';
import AudioBookSection from './AudioBookSection';
import '../../../src/app/styles/StoryContainer.css';

export default function StoryContainer() {
  return (
    <div className="story-container">
      {/* ✅ Blurred colored sides */}
      <div className="blur-side blur-left"></div>
      <div className="blur-side blur-right"></div>

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
