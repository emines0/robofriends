import React from "react";


const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', height:'500px', padding:'10px 0', margin:'10px 0'}}>
            {props.children}
        </div>
    )
};
export default Scroll;