import React from 'react'
import birthdayImage from '../assets/NutritionFact/birthdaycake.png'
import chocolateImage from '../assets/NutritionFact/chocolatebliss.png'
import caramelImage from '../assets/NutritionFact/caramelicecream.jpg'
import mintImage from '../assets/NutritionFact/mintbrownie.jpg'
import vanillaImage from '../assets/NutritionFact/richvanilla.png'
import strawberryImage from '../assets/NutritionFact/strawberrycream.png'

function FlavorFact(props) {
    switch(props.flavor) {

        case 'birthdayCake': 
            return <div><img src={birthdayImage} alt=''></img></div>;
            
        case 'chocolate': 
            return <div><img src={chocolateImage} alt=''></img></div>;
            
        case 'camaramel': 
            return <div><img src={caramelImage} alt=''></img></div>;
            
        case 'mint': 
            return <div><img src={mintImage} alt=''></img></div>;
            
        case 'vanilla': 
            return <div><img src={vanillaImage} alt=''></img></div>;
            
        case 'strawberry': 
            return <div><img src={strawberryImage} alt=''></img></div>;
            
        default:
            return <div><img src={birthdayImage} alt=''></img></div>
    }
}

export default FlavorFact
