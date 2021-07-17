import React from "react"

export function Pictures(props) {
    if (props.photo) {
        return (

            <>
                <section>
                    <div className="row">
                        {props.photo.map(function (photo, index) {
                            return (
                                <div id={index} className="col-4">
                                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                                        <img src={photo.src.landscape} alt="word" className="img-fluid wordPicture" />
                                    </a>
                                </div>)

                        })}


                    </div>
                </section>
            </>
        )
    }

    else { return (null) }
}