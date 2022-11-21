import React from 'react'
import {SongType} from './Song.types'

type SongProps = {
   currentSong: SongType;
}

const Song  = ({currentSong} : SongProps)  => {
    return(
    <div className="song-container">
        <img src ={currentSong.cover} alt={currentSong.name}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
    </div>
    )
}

export default Song;
