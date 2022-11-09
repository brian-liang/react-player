import {v4 as uuidv4} from "uuid"

function chillHop() {
    return [
        {
            name: "A Reminder",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
            artist: "Sleepy Fish, coa",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            color:["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "In Minutes",
            cover: "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
            artist: "Shrimpnose",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41689",
            color:["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop
