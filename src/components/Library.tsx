import React from 'react'
import LibrarySong from './LibrarySong'
import { SongType } from './Song.types'

const Library = (props: any) => {
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
               {props.songs.map((song: SongType) => <LibrarySong currentSong={song}/>)}
            </div>
        </div>
    )
}

export default Library
