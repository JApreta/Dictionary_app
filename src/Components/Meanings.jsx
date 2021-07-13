
import React from "react"
export function Meanings(props) {
    return (
        <>
            {props.meaning.partOfSpeech}
            {props.meaning.definitions.map(
                function (definition, index) {
                    return (
                        <div key={index}>

                            <p> {definition.definition}
                                <br />
                                <em> {definition.example}</em>
                            </p>
                        </div>


                    )
                })}
        </>
    )
}