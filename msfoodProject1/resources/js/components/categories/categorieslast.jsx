import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categories.css";
import axios from "axios";

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
        <div className="container-fluid content_div">
            <div className="content2 mb-3">
                <h2>Our Menus</h2>
            </div>
            <div className="container-fluid mx-5">
                <div className="row">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div className="col-sm-3 text-center shadow p-3 mb-5 bg-body-tertiary rounded mx-4" id="content_cat">
                                <a id="a_content"  onClick={() => handleCategoryClick(category.id)}>
                                    <div key={category.id}>
                                        <img
                                            src={category.image}
                                            alt={category.type}
                                            width="250px"
                                            height="200px"
                                            className="img-fluid"
                                        />
                                        <h3>{category.type}</h3>
                                        <p>{category.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Categories;
