import React, { useState } from 'react';

export default function SearchForm({ setResults }) {

    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                const results = json.filter((product) => {
                    return (
                        value &&
                        product &&
                        product.title &&
                        product.title.toLowerCase().includes(value));
                });
                console.log(results);
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (

        <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="search"
                    placeholder="Search Clothing Items"
                    aria-label="search-bar"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                ></input>
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    SEARCH
                </button>
            </div>
        </form>
    );
}


{/*
Source:
https://tw-elements.com/docs/react/forms/search/
https://www.npmjs.com/package/tw-elements-react 

https://v1.tailwindcss.com/components/forms 

Make a Search Bar with React (with API Calls) | Beginners Tutorial https://www.youtube.com/watch?v=sWVgMcz8Q44


*/}