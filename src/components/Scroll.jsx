import React from "react";


//it wraps component
//with props i am able to send him what is in his child component 
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', height:'500px', padding:'10px 0', margin:'10px 0'}}>
            {props.children}
        </div>
    )
};
export default Scroll;