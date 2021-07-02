import React, { useState } from "react"
import "../Styles/Dictionary.css"

export function Dictionary() {
    const [keyword, setKeyword] = useState('love');
    function FormSubmissionHandler(e) {
        e.preventDefault();
        alert(`you are searching for ${keyword} definition`)

    }
    function KeywordChangeHandler(e) {
        setKeyword(e.target.value);
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