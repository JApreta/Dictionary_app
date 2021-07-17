import React, { useState } from "react"
import axios from "axios";
import "../Styles/Dictionary.css"
import { Results } from "./Results"
import { Pictures } from "./Pictures"

export function Dictionary() {
    const [keyword, setKeyword] = useState('love');
    const [results, setResults] = useState(null);
    const [pictures, setPictures] = useState(null);
    const language = "en_US";
    const picAPIkey = "563492ad6f9170000100000166bc57599d294d5e8a6418dc222fa140"

    function FormSubmissionHandler(e) {
        e.preventDefault();
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`
        const pictureApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(apiUrl).then(handleResponse).catch(function () {
            alert(`you are searching for ${keyword} definition`);
            setResults(null)
        }

        );

        axios.get(pictureApiUrl, {
            headers: { "Authorization": `Bearer ${picAPIkey}` }
        }).then(handlePictureResponse).catch(function () {

        }

        );

    }
    function KeywordChangeHandler(e) {
        setKeyword(e.target.value);
    }
    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);

    }
    function handlePictureResponse(response) {
        console.log(response);
        setPictures(response.data.photos)
    }
    return (
        <>
            <div className="container">
                <div className="row Dictionary">

                    <div className="col-4">
                        <img src={"Picture1.png"} alt="cover" className="img-fluid" />
                    </div>
                    <div className="col-6 searchField">
                        <label>What are you looking for?</label>
                        <form onSubmit={FormSubmissionHandler}>
                            <input type="search" autoFocus="on" placeholder="type to search" className="form-control"
                                onChange={KeywordChangeHandler} />
                        </form>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12"><Results results={results} /></div>
                    <div className="col-md-12"><Pictures photo={pictures} /></div>
                </div>
            </div>
        </>
    )
}