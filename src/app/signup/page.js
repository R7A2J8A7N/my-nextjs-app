import Navbar from "../../../components/ui/Navbar";
import Signup from "../../../components/ui/authentication/Signup";
// import AnimatedImage from "../../../components/ui/main/AnimatedImage";
import AnimatedImage from "../../../components/ui/main/AnimatedImage";
import "../../../src/app/styles/StoryContainer.css"; // link to external CSS

// import Signup from "../../../components/ui/authentication/Signup";

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
            <Signup/>
          </div>
        </main>

        <div className="image-top-left">
          <img src="/images/Polygun.png" alt="Polygon Graphic" />
        </div>

      </div>
    </>
  );
}
