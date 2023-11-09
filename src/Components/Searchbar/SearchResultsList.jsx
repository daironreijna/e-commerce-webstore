import React from 'react'

import "./SearchResultsList.css"
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results }) => {
    return <div className="results-list w-full bg-white flex-col mt-4 max-h-[32rem]">
        {
            results.map((result, id) => {
                return <SearchResult key={id} result={result} />
            })
        }
    </div>;

}