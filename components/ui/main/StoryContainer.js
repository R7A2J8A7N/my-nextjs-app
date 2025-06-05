"use client"; // ✅ Tells Next.js this is a Client Component

import TextContent from './TextContent';         // ✅ Child component
import BottomBox from './BottomBox';  
import QuoteSection from './QuoteSection';           // ✅ Child component
import AudioBookSection from './AudioBookSection'; // ✅ Child component
import '../../../src/app/styles/StoryContainer.css';   // ✅ Proper way to import global external CSS

export default function StoryContainer() {
  return (
    <div className="story-container">            {/* ✅ Root container */}
      {/* <AnimatedImage /> */}
      <TextContent />    
      <AudioBookSection />
      <QuoteSection/>
      <BottomBox />
      
      
    </div>
  );
}
