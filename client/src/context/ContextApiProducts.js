import React, { createContext, useEffect, useReducer, useState } from "react";

export const ContextProduct = createContext()
export const ContextCart = createContext()
export const AuthContext = createContext()
const reducer = (carts, action) => {

    switch (action.type) {
        case "ADD":
            const filtercart = carts.filter((item) => item._id === action.payload.product._id)
            if (filtercart.length > 0) return carts
            else
                return [...carts, {
                    ...action.payload.product,
                    quantity: Number(action.payload.quantity)
                }];
        case "INCREASE":
            const tempstate1 = carts.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            return tempstate1;
        case "DECREASE":
            const tempstate2 = carts.map((item) => {
                if (item._id === action.payload._id) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            });
            return tempstate2;
        case "REMOVE":
            const timestamps = carts.filter((item) => item._id !== action.payload._id)
            return timestamps
        default:
            break;
    }
}
function Context({ children }) {
    const [products, setproducts] = useState("");
    const [carts, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        fetch("http://localhost:4000/product/show")
            .then((response) => response.json())
            .then((data) => setproducts(data));
    }, []);

    const responLogin = (form) => {
        fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.user)
                if (typeof data.user !== "undefined")
                    localStorage.setItem("user", JSON.stringify(data.user))

            });
    }

    const authData = responLogin

    // localStorage.setItem("cart", JSON.stringify(carts))
    const info = {
        carts,
        dispatch
    }
    return (
        <ContextProduct.Provider value={products}>
            <ContextCart.Provider value={info}>
                <AuthContext.Provider value={authData}>
                    {children}
                </AuthContext.Provider>
            </ContextCart.Provider>
        </ContextProduct.Provider>
    )

}

export default Context