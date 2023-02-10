import React from 'react';
import Header from './Components/Header';
import Tile from './Components/Tile';
import TravelData from './TravelData';
import './App.css';

export default function App() {

    const tiles = TravelData.map((item) => {
        return (
            <Tile 
                imageUrl={item.imageUrl}
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                description = {item.description}
                startDate = {item.startDate}
                endDate = {item.endDate}
            />
        );
    })
    return(
        <>
            <Header />
            <section className='tile-list'>
                {tiles}
            </section>
        </>
    );
}