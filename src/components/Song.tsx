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

const Song  = (props : SongProps)  => {
    return(
    <div className="song-container">
        <img src ={props.currentSong.cover} alt="cover"></img>
        <h2>{props.currentSong.name}</h2>
        <h3>{props.currentSong.artist}</h3>
    </div>
    )
}

export default Song;