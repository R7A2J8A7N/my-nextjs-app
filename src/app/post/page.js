import Navbar from "../../../components/ui/Navbar";
import styles from '../styles/StoryContainer.css';
import Post from "../../../components/ui/post/Post";

export default function Home() {
  return (
    <>
      
           <main className={styles.main}>
            <Navbar />
            <Post/>
            <Post/>
            <Post/>
       
        
      </main>

    </>
  );
}
