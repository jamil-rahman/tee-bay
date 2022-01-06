import React, {useState, useEffect} from "react";
import { useQuery, } from "@apollo/client";
import { getAllproducts } from "../GraphQL/Queries";

function Home() {
    const { data } = useQuery(getAllproducts);
    const [products, setProducts] = useState([]);
    useEffect(() => {
      if (data) {
          setProducts(data.getAllproducts);
      }
    }, [data]);

    return (
    <div>
    {" "}
    {products.map((val) => {
      return (

<div className="card my-3 container">
  <div className="card-header">
  <h1>{val.title}</h1>
  </div>
  <div className="card-body">
    <h5 className="card-title">Category: {val.category}</h5>
    <p className="card-text">Desciption: {val.description}</p> 
    <text className="text-muted">Price: ${val.price}</text> | <text className="text-muted">Rent: ${val.rent} monthly</text>
    <div class="d-flex justify-content-center my-3">
    <button class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
      
      
      );
    })}
  </div>
);
}



export default Home;
