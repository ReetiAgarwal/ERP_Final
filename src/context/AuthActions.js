export const Pending = (ProductDetails) => (
    {
        type:"PENDING",
    }
);

export const Success = (product) => (
    {
        type : "SUCCESS",
        payload:product,
    }
);

export const Failure = (error) => (
    {
        type:"FAILURE",
        payload:error,
    }
);

export const Delete_Order = (id) => (
    {
        type:"DELETE_ORDER",
        payload:id,
    }
);

export const Delete = (id) => (
    {
        type:"DELETE",
        payload:id,
    }
);

export const Edit = (products) => (
    {
        type:"EDIT",
        payload:products,
    }
);

export const Edit_Order = (orders) => (
    {
        type:"EDIT_ORDER",
        payload:orders,
    }
);