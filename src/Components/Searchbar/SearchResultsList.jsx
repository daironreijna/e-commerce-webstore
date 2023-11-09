import React from 'react'

import "./SearchResultsList.css"
import { SearchResults } from './SearchResults';

export const SearchResultsList = ({ results }) => {
    return <div className="results-list w-full bg-white flex-col mt-4 max-h-[12rem]">
        {
            results.map((result, id) => {
                return <SearchResults key={id} result={result} />
            })
        }
    </div>;

}