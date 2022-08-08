import React from 'react';
import grid from '../Group.png'
import './Hero.css'

export default function Hero(){
    return(
        <section className='Hero'>
            <img src={grid} className='grid'/>
            <h1>Online Experiences</h1>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}