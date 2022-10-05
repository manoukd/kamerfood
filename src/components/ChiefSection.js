import React from 'react';
import ChiefCard from './ChiefCard';

const ChiefSection = () => {
    const chiefs=[
        {
            name : "Jeane Kengne",
            img : "/images/top-chief/img1.jpg",
            recipesCount:"100",
            cuisine: "Cameroonian",
        },
        {
            name : "Moukoudi Hermann ",
            img : "/images/top-chief/img2.png",
            recipesCount:"10",
            cuisine: " Congolian",
        },
     
        {
            name : " Soup Christelle",
            img : "/images/top-chief/img3.jpg",
            recipesCount:"50",
            cuisine: " Cameroonian",
        },
     
        {
            name : " Tiemeni Serena",
            img : "/images/top-chief/img4.jpg",
            recipesCount:"42",
            cuisine: "American ",
        },
        {
            name : "Stevie Mial ",
            img : "/images/top-chief/img5.png",
            recipesCount:"90",
            cuisine: " Australian",
        },
        {
            name : " Tania Meyou",
            img : "/images/top-chief/img6.jpg",
            recipesCount:"67",
            cuisine: "Cameroonian ",
        },
     
    ]
    return (
        <div className='section chiefs'>
            <h1 className='title'> Our Top Chiefs</h1>
            <div className='top-chiefs-container'>
                {
                    chiefs.map(chief=>
                        <ChiefCard key={chief.name} chief={chief} />
                    )
                }
                
            </div>
        </div>
    );
};

export default ChiefSection;