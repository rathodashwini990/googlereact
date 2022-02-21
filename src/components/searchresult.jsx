import React from 'react';
//import "./Home.css";
import SearchIcon from "@material-ui/icons/SearchIcon";

function SearchResult(){
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon">
                    <input/>
                </SearchIcon>
            </div>  
            <div className="search__buttons">
                
            </div> 
        </div>
    )
}

export default SearchResult;