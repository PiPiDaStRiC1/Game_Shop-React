import { createContext, useContext} from "react";
import {useCart} from '../../hooks/index';

export const CartContext = createContext(null); // context reference

export const CartProvider = ({children}) => { // provide context value
    const cart = useCart('cart');
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext); // get context value