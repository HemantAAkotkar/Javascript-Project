import React from "react";
import "./card.css";

export default function Projectcard(props){
    return(
        <div className="outCard">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" alt="" />
            <h2 className="title">{props.name}</h2>
            <p className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi assumenda architecto, quibusdam itaque quaerat.</p>
            <h2 className="price">$50</h2>
            <button className="btn">Buy Now</button>
        </div>
    );
}
