"use client";

import Navbar from "../../../components/ui/Navbar";
import Post from "../../../components/ui/post/Post";
import "../../../src/app/styles/StoryContainer.css";
import AnimatedImage from "../../../components/ui/main/AnimatedImage";

export default function Home() {
  return (
    <>

      <Navbar />
      <div className="story-container">
            {/* ✅ Blurred colored sides */}
            <div className="blur-side blur-left"></div>
            <div className="blur-side blur-right"></div>
          <div className="background-wrapper">
          <AnimatedImage />
        </div>
      <div className="infinite-scroll-container" >
        <Post/>
        <Post/>
        <Post/>
        </div>
        

     <div className="image-top-left">
  <img src="/images/Polygun.png" alt="Polygon Graphic" />
</div>
    

        </div>
      
      {/* Main Post Component */}
      
   
      
    </>
  );
}
