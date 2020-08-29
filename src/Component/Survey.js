import React from 'react';
import Radium from 'radium';
import './Survey.css';



const Survey = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px', 

        }
    }
    
    return (
        <div className='survey' style={style}>
            <div className='question'>
                <h3>{props.q}</h3>
                <input type='text' placeholder='please type your question here'></input>

            </div>
            <div className='options' style={style}>
                <p>{props.op}</p>
                <input 
                type='text' 
                
                
                placeholder='option...'></input>
                
                <button >Add</button>
            </div>

            
        </div>
    )
    
}

export default Radium(Survey);