import React, {Component} from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import FlavorFact from './FlavorFact'
import birthdayImage from '../assets/NutritionFact/birthdaycake.png'
import chocolateImage from '../assets/NutritionFact/chocolatebliss.png'
import caramelImage from '../assets/NutritionFact/caramelicecream.jpg'
import mintImage from '../assets/NutritionFact/mintbrownie.jpg'
import vanillaImage from '../assets/NutritionFact/richvanilla.png'
import strawberryImage from '../assets/NutritionFact/strawberrycream.png'

function FlavorSelect(){
    return (
        <RecoilRoot>
            
        </RecoilRoot>
    )
    // flavorHandler = (flav) => {
    //     let currentFlavor = ''
    //     if(flav === 'chocolate') {
    //         currentFlavor = 'chocolate'
    //         this.setState({flavor:currentFlavor})
    //         return <div><img src={chocolateImage} alt=''></img></div>
    //     } else if(flav === 'vanilla') {
    //         currentFlavor ='vanilla'
    //         this.setState({flavor:currentFlavor})
    //         return <div><img src={vanillaImage} alt=''></img></div>
    //     } else if(flav === 'birthdayCake') {
    //         currentFlavor ='birthdayCake'
    //         this.setState({flavor:currentFlavor})
    //     } else if(flav === 'caramel') {
    //         currentFlavor ='caramel'
    //         this.setState({flavor:currentFlavor})
    //     } else if(flav === 'mint') {
    //         currentFlavor ='mint'
    //         this.setState({flavor:currentFlavor})
    //     } else if(flav === 'strawberry') {
    //         currentFlavor ='strawberry'
    //         this.setState({flavor:currentFlavor})
    //     }
    // }
    // render() {
    //     return (
    //         <div>
    //             <select>
    //                 <option onClick={this.flavorHandler('chocolate')}>CHOCOLATE BLISS</option>
    //                 <option onClick={this.flavorHandler('vanilla')}>RICHVANILLA</option>
    //                 <option onClick={this.flavorHandler('vanilla')}>BIRTHDAY CAKE</option>
    //                 <option onClick={this.flavorHandler('vanilla')}>CARAMEL ICE CREAM</option>
    //                 <option onClick={this.flavorHandler('vanilla')}>MINT BROWNIE</option>
    //                 <option onClick={this.flavorHandler('vanilla')}>STRAWBERRY CREAM</option>
    //             </select>
    //         </div>
    //     )
    // }
    
}

export default FlavorSelect
