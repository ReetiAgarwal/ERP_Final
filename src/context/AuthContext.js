import { createContext, useReducer } from "react";
import { orders } from "../../src/OrderDetails";
import { products } from "../../src/ProductDetails";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    products : products,
    isFetching : false,
    error : false,
    orders : orders,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider 
        value = {{
            products:state.products,
            isFetching:state.isFetching,
            error:state.error,
            orders : state.orders,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
