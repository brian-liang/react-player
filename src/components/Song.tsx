import React from 'react'
type Song = {
    name: string;
    cover: string,
    artist: string,
    audio: string;
    color: string[];
    id: any;
    active: boolean;
}
type SongProps = {
   currentSong: Song;
}

const Song  = ({currentSong} : SongProps)  => {
    return(
    <div className="song-container">
        <img src ={currentSong.cover} alt="cover"></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
    </div>
    )
}

export default Song;
