import React from 'react'
import {SongType} from './Song.types'

type SongProps = {
   currentSong: SongType;
}

const LibrarySong  = ({currentSong} : SongProps)  => {
    return(
    <div className="library-song">
        <img src ={currentSong.cover} alt={currentSong.name}></img>
        <div className="song-description">
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
        </div>
    </div>
    )
}

export default LibrarySong
