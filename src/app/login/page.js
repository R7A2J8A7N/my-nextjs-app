import Navbar from "../../../components/ui/Navbar";
// import MusicPlayer from "../../../components/ui/songlist/MusicPlayer";
// import SongList from "../../../components/ui/songlist/SongList";
import AnimatedImage from "../../../components/ui/main/AnimatedImage/AnimatedImage";
import "../../../src/app/styles/StoryContainer.css"; // link to external CSS
import Login from "../../../components/ui/authentication/Login";

// import "."; // link to external CSS

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
            
            <div>
                <Login/>
            </div>
            {/* Sidebar - 30% */}
            
          </div>
        </main>

        <div className="image-top-left">
          <img src="/images/Polygun.png" alt="Polygon Graphic" />
        </div>

      </div>
    </>
  );
}
