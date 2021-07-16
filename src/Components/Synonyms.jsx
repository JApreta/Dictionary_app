import React from "react"
import "../Styles/Synonyms.css"
export function Synonyms(props) {
    if (props.synonyms) {
        return (

            <ul>

                {
                    props.synonyms.map(
                        function (synonym, index) {
                            return (<li key={index}>
                                {synonym}
                            </li>
                            );
                        }
                    )
                }
            </ul>
        )

    }
    else {
        return (null)
    }
}

