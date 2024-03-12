export const productCall = (products,dispatch) => {
    dispatch({type:"PENDING"});
    try{
        dispatch({type:"SUCCESS",payload:products})
    }catch(err){
        dispatch({type:"FAILURE",payload:err})
    }
}

export const DeleteCall = (id,dispatch) => {
    try{
        dispatch({type:"DELETE",payload:id})
    }catch(err){
        dispatch({type:"FAILURE",payload:err})
    }
}

export const DeleteCall_Order = (id,dispatch) => {
    try{
        dispatch({type:"DELETE_ORDER",payload:id})
    }catch(err){
        dispatch({type:"FAILURE",payload:err})
    }
}

export const EditCall = (products,dispatch) => {
    try{
        dispatch({type:"EDIT",payload:products})
    }catch(err){
        dispatch({type:"FAILURE",payload:err})
    }
}

export const EditCall_Order = (orders,dispatch) => {
    try{
        dispatch({type:"EDIT_ORDER",payload:orders})
    }catch(err){
        dispatch({type:"FAILURE",payload:err})
    }
}