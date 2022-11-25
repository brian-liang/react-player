import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

interface NavProps {
    libraryStatus: boolean;
    setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({libraryStatus, setLibraryStatus}: NavProps) => {
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav
