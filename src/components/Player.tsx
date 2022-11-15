import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {SongType} from './Song.types'

type SongProps = {
   currentSong: SongType;
   isPlaying: boolean;
   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const Player = ({currentSong, isPlaying, setIsPlaying} : SongProps) => {
    const [songInfo, setSongInfo] = useState<{currentTime: number, duration: number}>({
        currentTime: 0,
        duration: 0,
    })
    const audioRef = useRef<HTMLAudioElement>(null);

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current!.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current!.play()
            setIsPlaying(!isPlaying)
        }
    }
    const timeUpdateHandler = (e : React.ChangeEvent<HTMLAudioElement>) => {
       const current = e.target.currentTime
       const duration = e.target.duration
       setSongInfo({...songInfo, currentTime: current, duration})
    }
    const getTime = (time: number) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
            ></audio>
        </div>
    )
}

export default Player
