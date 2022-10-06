import React from "react";
import Card from './Card';


const CardList = ({ robots }) => { //filtered robots from App.js 
    return (
        <div>
            {
                robots.map((user, i) => { //run through whole robots json
                    return (
                    <Card
                        key={robots[i].id} //need to be added to react recognize with which obj is working
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                    );
                })
            }
        </div>
    );
}
export default CardList