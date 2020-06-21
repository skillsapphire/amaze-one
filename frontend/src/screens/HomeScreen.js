import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import packageJson from '../../package.json';

function HomeScreen(props){

    // React hook to call backend api
    const [products, setProduct] =  useState([]);

    useEffect(
        () => {
            // effect
            const fetchData = async () => {
                //api returns products which gets set in data
                const {data} = await axios.get(packageJson.proxy+"/api/products");
                //below method sets data (i.e products) to products variable mentioned above
                setProduct(data);
            }
            fetchData();//call the fetchdata
            return () => {
                // return nothing
            };
        }, [] // input empty means run the effct on componentdidmount
    );

        return(
            <div>
                <ul className="products">
                    {
                      products.map((product, i) => 
                          <li key={i}>
                            <div className="product">
                                <Link to={"/product/"+product._id}>
                                    <img className="product-image" src={product.image} alt="product" />
                                </Link>
                                <div className="product-name" >
                                  <Link to={"/product/"+product._id} className="product-link">{product.name}</Link>
                                </div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-rating">{product.rating} Stars {product.numReviews} Reviews</div>
                            </div>
                        </li>
                      )
                    }
                    
                </ul>
            </div>
        )
}

export default HomeScreen;