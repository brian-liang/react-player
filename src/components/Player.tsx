import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {Song} from './Song.types'

type SongProps = {
   currentSong: Song;
   isPlaying: boolean;
   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const Player = ({currentSong, isPlaying, setIsPlaying} : SongProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const playSongHandler = () => {
        if(isPlaying){
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current!.play()
            setIsPlaying(!isPlaying)
        }
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>
            <audio src={currentSong.audio} ref={audioRef}></audio>
        </div>
    )
}

export default Player
