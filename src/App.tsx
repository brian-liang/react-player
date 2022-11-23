import React from 'react';
import { useState, useRef } from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss'
import data from './utils'

function App() {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setPlaying] = useState(false)

    const [songInfo, setSongInfo] = useState<{currentTime: number, duration: number}>({
        currentTime: 0,
        duration: 0,
    })
    const timeUpdateHandler = (e : React.ChangeEvent<HTMLAudioElement>) => {
       const current = e.target.currentTime
       const duration = e.target.duration
       setSongInfo({...songInfo, currentTime: current, duration})
    }
  return (
    <div className="App">
        <Song currentSong={currentSong}/>
        <Player
            audioRef={audioRef}
            currentSong={currentSong}
           isPlaying={isPlaying}
           setIsPlaying={setPlaying}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
        />
        <Library
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
        />
        <audio
            src={currentSong.audio}
            ref={audioRef}
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
        ></audio>
    </div>
  );
}

export default App;
