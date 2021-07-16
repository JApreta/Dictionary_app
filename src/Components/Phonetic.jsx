import React, { useState, useEffect } from "react"
import "../Styles/Phonetic.css"
export function Phonetic(props) {
    const [audioPlay, SetAudioPlay] = useState(props.phonetic.audio);

    function PlayAudio(e) {

        e.preventDefault();

        const audio = document.getElementById("audio")
        const source = document.getElementById("sourc")
        SetAudioPlay(props.phonetic.audio)
        source.src = audioPlay;
        audio.load();
        audio.play();


    }

    return (
        <>



            <button onClick={PlayAudio}>
                <span><i class="fas fa-volume-up"></i></span>
            </button>

            {props.phonetic.text}

            <audio id="audio">
                <source id="sourc" src={audioPlay} />
            </audio>

        </>
    )
}