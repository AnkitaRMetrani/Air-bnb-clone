import React from 'react'
import'./Card.css'

export default function Card(props){
    let badge_text
        if (props.openSpots===0) {
            badge_text="SOLD OUT"            
        } else if(props.location === "Online"){
            badge_text="ONLINE"
        }
    return(
        <div className="card">
            {badge_text && <div className='Badge'>{badge_text}</div>}
            <img src={props.coverImg} alt="Flower" className="card--image" width="300px" />
            <div className="card--stats">
                <img src="./Images/star.svg" className="card--star" width={15} />
                <span>{<props className="stats rating"></props>}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold"><b>{`From Rs.${props.price}`}</b></span> / item</p>
        </div>
    )
}