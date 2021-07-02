import React, { useState } from "react"
import axios from "axios";
import "../Styles/Dictionary.css"

export function Dictionary() {
    const [keyword, setKeyword] = useState('love');
    const language = "en_US";

    function FormSubmissionHandler(e) {
        e.preventDefault();
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`
        axios.get(apiUrl).then(handleResponse);
        alert(`you are searching for ${keyword} definition`)

    }
    function KeywordChangeHandler(e) {
        setKeyword(e.target.value);
    }
    function handleResponse(response) {
        console.log(response.data[0]);

    }
    return (
        <div className="Dictionary">
            <form onSubmit={FormSubmissionHandler}>
                <input type="search" autoFocus="on" placeholder="what are you searchinf for?" className="form-control"
                    onChange={KeywordChangeHandler} />
            </form>
        </div>
    )
}