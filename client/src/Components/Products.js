import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { getAllproducts} from "../GraphQL/Queries";

function GetProducts() {
  const { error, loading, data } = useQuery(getAllproducts);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
        setProducts(data.getAllproducts);
    }
  }, [data]);

  return (
    <div>
       
      {products.map((product) => {
        return(
            <div className="center">
             <h1 className=""> {product.title}</h1> | <span className="text-muted">{product.price}</span>
             <p>{product.description}</p>
             </div>
             );
      })} 
    </div>
  );
}

export default GetProducts;