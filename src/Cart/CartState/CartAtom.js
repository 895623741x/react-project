import {atom} from 'recoil'

export const cart = atom({
    key: 'cart',
    default: [
        {id: 'on protein', price: 2, quantity: 1},
        {id: 'golden protein', price: 4, quantity: 2}
    ],
})

