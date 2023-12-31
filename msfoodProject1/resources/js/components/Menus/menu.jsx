import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.css";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


function Menu() {
//-----------------declaration of the constante---------------------
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [quantity, setQuantity] = useState(1);

//------------get all the categories and his menu foreach one -------
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("/api/categories/menu");
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    //this function for get the value of the input
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };

//----------------add the data to the cart table ----------------
const submitToCart = (event, menu) => {
    event.preventDefault();

    const data = {
      menu_id: menu.id,
      product_name: menu.title,
      qte: quantity,
    };


    axios.post("/addToCart", data)
      .then((response) => {
        console.log("Item added to the cart successfully.", response);


        // Display success alert
        Swal.fire({
            icon: 'success',
            title: 'Item added successfully!',
            showConfirmButton: false,
            timer: 1500
        });

      })
      .catch((error) => {
        console.log("Error adding to cart:", error);
      });
  };



    //------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------

    return (
        <div className="container cc">
            <div>
                <h1 className="menu-color">Our menu</h1>
                <hr />
            </div>
            <div className="row  category-container mt-3 justify-content-center">
{/********************************recuperer toutes les categoirees****************************** */}

                {categories.map((category) => (
                    <div
                        className="col-sm-1 rounded-circle text-center shadow p-3 mb-4 bg-body-tertiary rounded mx-2"
                        id="content_cat"
                    >
                        <div
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <img
                                src={`/storage/images/${category.image}`}
                                alt={category.type}
                                width="150px"
                                height="100px"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                ))}
            </div>


{/*****************************recuperer les menus du categories **************************** */}

            {selectedCategory && (
                <div className="container mx-3">
                    <h2 className="text mb-5">{selectedCategory.type}</h2>
                    {selectedCategory.menus.length > 0 ? (
                        selectedCategory.menus.map((menu) => (
                            <div
                                key={menu.id}
                                className="row rounded shadow mb-5 bg-body-tertiary rounded my-3 "
                            >
                                <div className="col-sm-2">
                                    <img
                                        src={`/storage/images/${menu.image}`}
                                        width="120px"
                                        height="120p"
                                        className="border rounded-circle"
                                        style={{
                                            transform: "translate(-35%, -35%)",
                                        }}
                                    />
                                </div>
                                <div className="col-sm-7">
                                    <h3>{menu.title}</h3>
                                    <p>{menu.description}</p>
                                </div>
                                <div className="col-sm-1">
                                    Quantity:
                                    <input
                                        type="number"
                                        name="qte"
                                        min="1"
                                        max="10"
                                        onChange={handleQuantity}
                                    />
                                </div>
                                <div className="col-sm-2">
                                    <p>Price:</p>
                                    <p> {menu.price} MAD</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-10"></div>
                                    <div className="col-sm-2 justify-content-end mb-3 px-4">

                                        <button onClick={(event) => submitToCart(event, menu)} type="submit"
                                            className="btn btn-warning" id="btnCart">Add to Cart</button>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
// *********************the content that will be affichate if there is no data******************
                        <div className="justify-content-center">
                            <img
                                src="/storage/imgs/bread.png"
                                width="100px"
                                height="80p"
                            />
                            <span>
                                "Oops! There are no menus available for this
                                category at the moment. Please check back later.
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Menu;
