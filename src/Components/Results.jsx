
import React from "react"
import { Meanings } from "./Meanings"
import { Phonetic } from "./Phonetic"
export function Results(props) {
    if (props.results) {
        return (
            <>
                <p>{props.results.word}</p>


                {props.results.phonetics.map(
                    function (phonetic, index) {
                        return (
                            <div key={index}>
                                {<Phonetic phonetic={phonetic} />}
                            </div>
                        )
                    })
                }

                {props.results.meanings.map(
                    function (meaning, index) {
                        return (
                            <div key={index}>
                                {<Meanings meaning={meaning} />}
                            </div>
                        )
                    })
                }

            </>
        );

    }


    else {
        return (null)
    }
}