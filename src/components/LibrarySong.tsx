import React, { SetStateAction } from 'react'
import {SongType} from './Song.types'

type SongProps = {
   songs: {songs: SongType};
   currentSong: SongType;
   setCurrentSong: React.Dispatch<SetStateAction<SongType>>;
   id: number;
   key: number;
   audioRef: React.RefObject<HTMLAudioElement>;
   isPlaying: boolean;
}

const LibrarySong  = (props: any)  => {
    const songSelectHandler = () => {
        const selectedSong = props.songs.filter((state: SongType) => state.id === props.id)
        props.setCurrentSong(selectedSong[0])
        if(props.isPlaying){
            const playPromise = props.audioRef.current.play()
            if(playPromise !== undefined){
                playPromise.then(() => {
                    props.audioRef.current.play()
                })
            }
        }
    }
    return(
    <div className="library-song" onClick={songSelectHandler}>
        <img src ={props.currentSong.cover} alt={props.currentSong.name}></img>
        <div className="song-description">
            <h3>{props.currentSong.name}</h3>
            <h4>{props.currentSong.artist}</h4>
        </div>
    </div>
    )
}

export default LibrarySong
