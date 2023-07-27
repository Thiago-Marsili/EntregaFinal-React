import { createContext} from "react";
import { useState } from "react";
import React from "react";






const CartContext = createContext();
export default CartContext;


export function CartProvider ({ children }){
    

    const [cart, setCart] = useState([])
    

   

    const addProducts = (products, quantity) => {
        if (!isInCart (products.id)) {
            setCart(prev => [...prev, { ...products, quantity }])

        } else {
            console.error('agregado')
        }
    }

    const removeProducts = (id) => {
        const cartUpdated = cart.filter(products => products.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(products => products.id === itemId)
    }

    const totalPrecio = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
    }


    const totalQuantity = ()=>cart. reduce((acumulador, productsActual)=> acumulador + productsActual.quantity, 0);

    
    return(
        <CartContext.Provider value ={{
            addProducts,
            removeProducts,
            clearCart,
            totalQuantity,
            totalPrecio,
            cart
                
            }}>
            { children }
        </CartContext.Provider>
    )


}


    