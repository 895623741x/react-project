import React from 'react';
import './NewProductOverview.css';
import scientificImage from '../assets/scientific_image.jpg';
import FlavorFact from './FlavorFact'
import birthdayImage from '../assets/NutritionFact/birthdaycake.png'
import chocolateImage from '../assets/NutritionFact/chocolatebliss.png'
import caramelImage from '../assets/NutritionFact/caramelicecream.jpg'
import mintImage from '../assets/NutritionFact/mintbrownie.jpg'
import vanillaImage from '../assets/NutritionFact/richvanilla.png'
import strawberryImage from '../assets/NutritionFact/strawberrycream.png'



const NewProductOverview = (props) => {
    
    if(props.clicked === 0) {
        return (
            <div className='overview'>
                <h3>THE ONLY 100% WHEY ISOLATE PROTEIN THAT WORKS AS HARD AS YOU DO</h3>
                <p>To create GOLD STANDARD 100% ISOLATE, we start by selecting only the highest quality whey protein which undergoes a series of sophisticated filtration processes to ‘isolate’ out excess fat, cholesterol and sugar. A portion of this Whey Protein Isolate is then hydrolyzed – broken down into smaller chains of amino acids – for easier digestion. The final product is a fast digesting complete protein containing no more than 1 gram of carbohydrates, less than 1 gram of fat and more than 80% pure protein per serving. We put in the hard work to assure super quality, so you can focus on achieving ambitious performance goals.</p>
                <ul>
                    <li><p>Hydrolyzed & Ultra-Filtered Whey Protein Isolate</p></li>
                    <li><p>1 Gram of Carbs Per Serving</p></li>
                    <li><p>At Least 80% Protein Per Serving</p></li>
                    <li><p>Delicious Taste in 6 to 8 Fl. Oz. of Cold Water</p></li>
                    <li><p>5.5 Grams of Naturally Occurring BCAAs</p></li>
                    <li><p>4.3 Grams of Naturally Occurring Glutamine & Glutamic Acid</p></li>
                    <li><p>11.4 Grams of Naturally Occurring Essential Amino Acids</p></li>
                </ul>
                <h3>ULTRA PURE FOR ULTRA RESULTS</h3>
                <p>Get maximum results with minimal ingredients. Using a series of sophisticated separation processes, excess fat, cholesterol, sugars, and other materials are removed so that simply 0 grams of total fat and 1 gram of carbohydrates remain. The result is a delicious, ultra-pure hydrolyzed whey protein isolate designed to get into your body rapidly, so your muscles can rebuild.</p>
               <img src={scientificImage} alt='' className='image'></img>
            </div>
        )
    } else if(props.clicked !== 0){
        return (
            <div className='overview'>
                
                <div>
                    <img src={birthdayImage} alt=''></img>
                </div>
            </div>
        )
    }
    
    
}

export default NewProductOverview
