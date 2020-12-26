import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import {cart} from './CartAtom'

export const cartState = selector({
    key: 'cartState',
    get: ({get}) => {
        const totalCost = get(cart).reduce((a, b) => a + b.price * b.quantity, 0)
        return totalCost
    }
}) 
