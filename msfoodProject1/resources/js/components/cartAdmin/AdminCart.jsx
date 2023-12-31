import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminCart.css'

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cartAdmin');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <hr/>
      {Object.keys(cartItems).map((clientId) => {
        const clientName = cartItems[clientId][0].client.name;

        return (
          <div key={clientId}>
            <h3> {clientName}</h3>
            <table className="table table-hover ms-4">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems[clientId].map((item) => {
                  const totalPrice = item.qte * item.menu.price;

                  return (
                    <tr key={item.id}>
                        <td><img
                            src={`/storage/images/${item.menu.image}`}
                            alt={item.menu.title}
                            width="200px"
                            height="200px"
                            className="img-fluid"
                        /></td>
                      <td>{item.product_name}</td>
                      <td>{item.qte}</td>
                      <td>{item.menu.price}</td>
                      <td>{totalPrice} DH</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default CartComponent;
