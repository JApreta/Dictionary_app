
import React from "react"
import { Synonyms } from "./Synonyms"
export function Meanings(props) {
    return (
        <>
            {props.meaning.partOfSpeech}
            <br />
            {props.meaning.definitions.map(
                function (definition, index) {
                    return (
                        <div key={index}>
                            <p> {definition.definition}
                                <br />
                                <em> {definition.example}</em>
                            </p>
                            {<Synonyms synonyms={definition.synonyms} />}
                        </div>


                    )
                })}
        </>
    )
}