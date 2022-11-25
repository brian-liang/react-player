import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import {SongType} from './Song.types'

type SongProps = {
   audioRef: React.RefObject<HTMLAudioElement>
   currentSong: SongType;
   isPlaying: boolean;
   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
   songInfo: {currentTime: number, duration: number};
   setSongInfo: React.Dispatch<React.SetStateAction<{currentTime: number, duration: number}>>
}

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo} : SongProps) => {

    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current!.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current!.play()
            setIsPlaying(!isPlaying)
        }
    }

    const dragHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        audioRef.current!.currentTime = Number(e.target.value)
        setSongInfo({...songInfo, currentTime: Number(e.target.value)})
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
                <input
                  min={0}
                  max={songInfo.duration || 0}
                  value={songInfo.currentTime}
                  onChange={dragHandler}
                  type="range"
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause: faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>

        </div>
    )
}

export default Player
