import Navbar from "../../components/ui/Navbar";
import styles from '../app/styles/story-style.css';
import StoryContainer from "../../components/ui/StoryContainer";

export default function Home() {
  return (
    <>
      
           <main className={styles.main}>
            <Navbar />
        <StoryContainer />
        
      </main>

    </>
  );
}
