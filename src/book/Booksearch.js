import React, { useState } from 'react';
import axios from 'axios';


function Booksearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apikey, setApikey] = useState("AIzaSyArgT1RjywRQABSbKQYsqBFR2ph5yGDJ1w");

    const handleChange = (event) => {
        const book = event.target.value;
        setBook(book);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apikey + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })


    }
    return (
        <>
            <div className=' disp text-center mb-3  '>
                <h1>BooksearcH</h1>
                <form onSubmit={handleSubmit}>
                    <div className='container-fluid dispform text-center mb-3  '>
                        <input type="text" className="form-control " placeholder='Search book' onChange={handleChange} ></input>
                    </div>
                    <div className='text-center mb-3'>
                        <button type="submit" className="btn btn-danger">Search</button>
                    </div>
                </form>
            </div>

            {result.map(book => (
                <div className="container-fluid outdisp " >
                    <a target="_blank" href={book.volumeInfo.previewLink}>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="{book.title}" className='card'></img>
                        
                    </a>
                </div>


            ))}

        </>
    )
}
export default Booksearch;