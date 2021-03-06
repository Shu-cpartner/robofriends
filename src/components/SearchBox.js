import React from "react";

const Searchbox = ({ searchfiled, seachChange }) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder="search robots"
                onChange={seachChange}
            />
        </div>
    );
}

export default Searchbox;