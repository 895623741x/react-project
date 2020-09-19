import React from 'react'
import './AddToCartButton.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function AddToCartButton() {
    return (
        <div className='addToCartButton'>
            <button className='button_content'>
                <p className='button_text'>ADD TO CART</p>
                <AddShoppingCartIcon></AddShoppingCartIcon>
            </button>
        </div>
    )
}

export default AddToCartButton
