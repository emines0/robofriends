import React from "react";

const SearchBox = ({searchChange}) => { //props added to component in App.js 
    return (
        <div>
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots"
                onChange={searchChange} />  {/* run function onSearchChange from App.js which is filtering robots based on input*/}
        </div>
    )
}
export default SearchBox;