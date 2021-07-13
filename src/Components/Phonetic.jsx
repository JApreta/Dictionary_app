export function Phonetic(props) {

    function playAudio() {
        const audio = document.getElementById("audio")
        audio.play()
    }
    return (
        <>
            {props.phonetic.text}


            <button onClick={playAudio}>
                <span>Listen</span>
            </button>

            <audio id="audio">
                <source src={props.phonetic.audio}></source>
            </audio>
        </>
    )
}