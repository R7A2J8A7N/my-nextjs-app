"use client"
import SongItem from "./SongItem";

const songs = [
  { title: "Song Title", subtitle: "Movie Title, Music Di Name" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
  { title: "Another One", subtitle: "Film Title, Composer" },
 
  // more...
];

export default function SongList() {
  return (
    <div className="song-list-scroll">
  {songs.map((song, index) => (
    <SongItem key={index} title={song.title} subtitle={song.subtitle} />
  ))}
</div>
  );
}
