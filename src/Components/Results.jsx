
import React from "react"
import { Meanings } from "./Meanings"
import { Phonetic } from "./Phonetic"
import "../Styles/Dictionary.css"
export function Results(props) {
    if (props.results) {
        return (
            <>

                <section id="mainSec">
                    <h4>{props.results.word}</h4>


                    {props.results.phonetics.map(
                        function (phonetic, index) {
                            return (
                                <div key={index}>
                                    {<Phonetic phonetic={phonetic} />}
                                </div>
                            )
                        })
                    }
                </section>
                {props.results.meanings.map(
                    function (meaning, index) {
                        return (

                            <section key={index}>
                                {<Meanings meaning={meaning} />}
                            </section>

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