import React, { useContext, useRef } from 'react';
import { useNavigate } from "react-router";
// import { products } from "../../ProductDetails";
import { Link } from "react-router-dom";
import { productCall } from "../../ContectCalls";
// import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { AuthContext } from "../../context/AuthContext";
import "./Add_Product.css";

function Add_Product() {
    const name = useRef();
    const category = useRef();
    const price = useRef();
    const quantity = useRef();
    const navigate = useNavigate();
    const {products,isFetching,error,dispatch} = useContext(AuthContext);
    // const [product,setProduct] = useState(products);

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newProduct = {
            id : date.getTime(),
            name : name.current.value,
            category : category.current.value,
            price : price.current.value,
            quantity : quantity.current.value
        }
        // setProduct([...product,newProduct]);
        productCall([...products,newProduct],dispatch);
        alert("Product added");
        navigate("/products");
    }
    
    return (
        <>
        <Navbar2/>
        <form onSubmit={handleSubmit}>
            <div className="box">
                <div className="form">
                    Name  <input type="text" ref={name} className="text" required/>
                    Category  <input type="text" ref={category} className="text" required/>
                    Price  <input type="number" ref={price} className="text" required/>
                    Quantity  <input type="number" ref={quantity} className="text" required/>
                </div>
                <div className="but">
                    <button type="submit" className="added">ADD</button>
                    <Link className="added" to="/products">Products</Link>
                </div>
            </div>
        </form>
        </>
    )
}

export default Add_Product
