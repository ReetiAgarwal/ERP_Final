const AuthReducer = (state,action) =>{
    switch(action.type)
    {
        case "PENDING":
            return{
                products:null,
                isFetching:true,
                error:false,
                orders:state.orders,
            };
        case "SUCCESS":
            return{
                products:action.payload,
                isFetching:false,
                error:false,
                orders:state.orders,
            };
        case "FAILURE":
            return{
                products:null,
                isFetching:false,
                error:action.payload,
                orders:state.orders,
            };
        case "DELETE":
            let newProduct = state.products.filter((cur)=>cur.id!=action.payload);
            return{
                products:newProduct,
                isFetching:false,
                error:false,
                orders:state.orders,
            };
        case "DELETE_ORDER":
            let newOrder = state.orders.filter((cur)=>cur.id!=action.payload);
            return{
                orders:newOrder,
                isFetching:false,
                error:false,
                products:state.products,
            };
        case "EDIT":
            return{
                products:action.payload,
                isFetching:false,
                error:false,
                orders:state.orders,
            };
        case "EDIT_ORDER":
            return{
                orders:action.payload,
                isFetching:false,
                error:false,
                products:state.products,
            };
        default:
            return state;
    }
};

export default AuthReducer;