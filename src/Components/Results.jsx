
import React from "react"
import { Meanings } from "./Meanings"
export function Results(props) {
    if (props.results) {
        return (
            <>
                <p>{props.results.word}</p>

                {props.results.meanings.map(
                    function (meaning, index) {
                        return (
                            <div >
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