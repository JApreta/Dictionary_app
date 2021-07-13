import React from "react"
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
        return (<p>hello</p>)
    }
}

