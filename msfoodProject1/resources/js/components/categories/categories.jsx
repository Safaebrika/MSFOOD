import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categories.css";

import axios from "axios";

import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategories(response.data);
            console.log(setCategories);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="container-fluid content_div esp">
            <div className="content2 text-light my-3">
                <h2 id="cat_h2">Our Menus</h2>
            </div>
            <div className="container-fluid mx-5">
                <div className="row">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div
                                className="col-sm-3 text-center shadow p-1 mb-4 bg-body-tertiary rounded mx-4"
                                id="content_cat"
                            >
                                <Link to={`/menus/${category.id}`}>
                                <div key={category.id}>
                                    <img
                                        src={`/storage/images/${category.image}`}
                                        alt={category.type}
                                        width="100px"
                                        height="50px"
                                        className="img-fluid"
                                    />
                                    <h3 id="cat_h3">{category.type}</h3>
                                    <p>{category.description}</p>
                                </div>

                                </Link>
                            </div>
                        ))
                    ) : (

                        <div className="justify-content-center m-5">
                        <img
                            src="/storage/images/stove.png"
                            width="50px"
                            height="40p"

                        />
                        <span className="ms-3">
                            "Oops! There are no category available at the moment. Please check back later.

                            <div className="loader"></div>
                        </span>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Categories;
