import React, { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "./styles";

const goeasy = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const goeasy1 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const goeasy2 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const goeasy3 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const goeasy4 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const goeasy5 = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

interface PropsMusicRef {
  current: { src: string };
}

const Home: React.FC = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [music, setMusic] = useState("stopped");
  const musicRef = useRef<HTMLAudioElement | null>();
  // const [currentSong, setCurrentSong] = useState(null);

  function updateRefSrc(music: HTMLAudioElement, songMusic: any) {
    let { src } = music;
    src = songMusic;
  }

  const goPlay = useCallback((currentSong: any) => {
    if (currentSong) {
      let song;
      switch (currentSong) {
        case "Go Easy":
          song = goeasy;
          break;

        case "Go Down":
          song = goeasy1;
          break;

        case " Go Fail":
          song = goeasy2;
          break;

        case "Go Not":
          song = goeasy3;
          break;

        case "Go Back":
          song = goeasy4;
          break;

        case "Go Nothing":
          song = goeasy5;
          break;
      }

      if (song) {
        var jj;
        jj = song;
        // updateRefSrc(musicRef.current,song )
        //  musicRef?.current?.src;

        musicRef?.current?.play();
        setMusic("playing");
      }
    }
  }, []);

  useEffect(() => {
    goPlay(currentSong);
  }, [goPlay, currentSong]);

  const playlist = [
    {
      id: 1,
      title: "Go Easy",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
    {
      id: 1,
      title: "Go Down",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
    {
      id: 1,
      title: "Go Fail",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
    {
      id: 1,
      title: "Go Not",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
    {
      id: 1,
      title: "Go Back",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
    {
      id: 1,
      title: "Go Nothing",
      url:
        "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/08/drake.jpg",
    },
  ].map((song: any) => (
    <li
      key={song.id}
      className="title"
      onClick={() => {
        setCurrentSong(song.title);
      }}>
      {song.title}
    </li>
  ));

  return (
    <Container>
      <h1>Music Player</h1>

      <div className="button-container">
        {music === "paused" && (
          <button
            className="ui labelled icon red button"
            onClick={() => setMusic("playing")}>
            <li className="large play circle outilne icon" /> Play
          </button>
        )}

        {music === "playing" && (
          <button
            className="ui labelled icon red button"
            onClick={() => setMusic("paused")}>
            <li className="large pause circle outilne icon" /> Puase
          </button>
        )}

        {music === "playing" || music === "paused" ? (
          <button
            onClick={() => {
              setMusic("stop");
            }}>
            <li className="large stop outline icon" /> Stop
          </button>
        ) : null}
      </div>
      <div> {playlist} </div>
      <audio ref={() => musicRef} />
    </Container>
  );
};

export default Home;
