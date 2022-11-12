import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

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

const Player = ({currentSong} : SongProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const playSongHandler = () => {
        console.log(audioRef.current)
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
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
