import Navbar from "../../../components/ui/Navbar";
import MusicPlayer from "../../../components/ui/songlist/MusicPlayer";
import SongList from "../../../components/ui/songlist/SongList";
import AnimatedImage from "../../../components/ui/main/AnimatedImage";
import "../../../src/app/styles/StoryContainer.css"; // link to external CSS

import "./play.css"; // link to external CSS

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

            </div>
           
      <main className="main-container">
       

     <div className="content-wrapper">
          <div className="left-sidebar">
            <h2>Hello world </h2>
            

          </div>
          {/* Sidebar - 30% */}
          <div className="right-sidebar">
            <SongList />

           <MusicPlayer song={{
                        title: "Count Me Out",
                        artist: "Kendrick Lamar",
                        imageUrl: "https://i.scdn.co/image/ab67616d0000b2730ffedcaa5b2fa29f06d74177", // Replace with your own image
                            }}
          />
          
          </div>
    

         
      </div>
      </main>
      
     <div className="image-top-left">
  <img src="/images/Polygun.png" alt="Polygon Graphic" />
</div>
    
      </div>
    </>
  );
}
