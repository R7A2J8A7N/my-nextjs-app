import Navbar from "../../../components/ui/Navbar";
import MusicPlayer from "../../../components/ui/songlist/MusicPlayer";
import SongList from "../../../components/ui/songlist/SongList";

import "./play.css"; // link to external CSS

export default function Home() {
  return (
    <>
     <Navbar />
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
    </>
  );
}
