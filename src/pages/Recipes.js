import React from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';
const Recipes = () => {
    const recipes=[
        {
            title: "Sanga",
            image: "/images/gallery/img1.jpg",
            authorImg: "/images/top-chief/img1.jpg",
        },
        {
            title: "Banane Malaxée",
            image: "/images/gallery/img2.webp",
            authorImg: "/images/top-chief/img2.png",
        },
        {
            title: "Taro avec Sauce Jaune",
            image: "/images/gallery/img3.jpg",
            authorImg: "/images/top-chief/img3.jpg",
        },
        {
            title: "Okok sucré",
            image: "/images/gallery/img4.webp",
            authorImg: "/images/top-chief/img4.jpg",
        },
        {
            title: "Koki au Plantain Mur",
            image: "/images/gallery/img5.jpg",
            authorImg: "/images/top-chief/img5.png",
        },
        {
            title: "Eru et Watafufu",
            image: "/images/gallery/img6.jpg",
            authorImg: "/images/top-chief/img6.jpg",
        }
    ].sort(()=>Math.random()-0.5);
    return (
        <div>
           <PreviousSearches/> 
           <div className='recipes-container'>
               {/*  <RecipeCard/> */}
               { 
                    recipes.map((recipe,index)=>(
                        <RecipeCard key={index} recipe={recipe}/>
                    ))
               }
           </div>
        </div>
    );
};

export default Recipes;