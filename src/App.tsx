import React from 'react';
import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss'
import data from './utils'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setPlaying] = useState(false)

  return (
    <div className="App">
        <Song currentSong={currentSong}/>
        <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setPlaying}/>
    </div>
  );
}

export default App;
