import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './cart.css';
import logo from '../../../../storage/app/public/images/MSFood.png';
import { Link } from 'react-router-dom';


function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0); // Ajouter un état pour le prix total
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchCartItems();
    checkAuthentication();
  }, []);

  const fetchCartItems = () => {
    axios.get('/api/cart')
      .then(response => {
        const { username, cartItems } = response.data;
        setCartItems(cartItems);
        setUsername(username);
        console.log(username)
        console.log(cartItems)
        calculateTotalPrice(cartItems); // Calculer le prix total lorsque les éléments du panier sont récupérés
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {

          navigate('/login', { state: { message: 'Veuillez vous connecter pour accéder à votre panier.' } });
        } else {
          console.log(error);
       }
      });

  };

  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;
    setIsAuthenticated(isAuthenticated);
  };

  const calculateTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.menu.price * item.qte;
    });
    setTotalPrice(totalPrice);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    const logoData = logo; // Remplacez "logo" par l'URL ou les données de votre logo
    doc.addImage(logoData, 'PNG', 0, 0, 50, 50); // Ajoute le logo dans l'en-tête
    doc.setFontSize(50);
    doc.setTextColor('#FF4500'); // Couleur du texte en noir
    doc.text('Invoice ', 80, 20); // Ajuste la position du texte MSFOOD si nécessaire
    const startY = 50;
    let currentY = startY;
    doc.setFontSize(12);
    doc.setTextColor('#000000'); // Couleur du texte en noir
    doc.text(`Client Name: ${username}`, 90.5, 30);
    cartItems.forEach((item, index) => {
      const itemTitle = `${index + 1}. ${item.menu.title}`;
      const itemPrice = `${item.qte} x ${item.menu.price} MAD`;
      const totalPrice = item.qte * item.menu.price;
      doc.text(itemTitle, 10, currentY);
      doc.text(itemPrice, 100, currentY);
      doc.text(`Total: ${totalPrice} MAD`, 150, currentY);
      currentY += 10;
    });
    const totalPrice = cartItems.reduce((total, item) => total + item.qte * item.menu.price, 0);
    doc.setFontSize(18);
    doc.setTextColor('#FF4500'); // Couleur du texte en orange rougeâtre
    doc.text(`Total Price: ${totalPrice} MAD`, 10, currentY + 10);
    doc.setFontSize(15);
    doc.setTextColor('#000000'); // Couleur du texte en noir
    doc.text('Thank you for your purchase!', 10, currentY + 20);
    doc.save('invoice.pdf');
  };








  const removeItem = (itemId) => {
    axios.delete(`/api/cart/${itemId}`)
      .then(response => {
        const updatedCartItems = response.data;
        setCartItems(updatedCartItems);
        calculateTotalPrice(updatedCartItems);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        navigate('/cart');
      });
  };

  if (cartItems.length === 0) {
    return <div>
           <h1 className='esp text-center'>loading...</h1>
           <div className='esp loader'></div>
          </div>

    ;
  }

  return (

    <div className=''>

      <h1 style={{ fontSize:'40px', marginLeft:20}}> Welcome {username} in your Cart</h1>
      <Link to='/cat' ><a style={{marginLeft:'1300px'}}>continue your choice</a></Link>
      <table className="table table  " style={{ marginTop:10}}>
        <thead>
          <tr style={{ backgroundColor:'orangered',color:'white'}}>
            <th scope="col">Items</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className='shadow'>
          {cartItems.map(item => (
            <tr key={item.id} >
              <td><img src={`/storage/images/${item.menu.image}`} alt={item.menu.title} style={{ width: '100px', height: '75px' }} /></td>
              <td style={{fontSize:'30px'}}>{item.menu.title}</td>
              <td>{item.qte}</td>
              <td>{item.menu.price} MAD</td>
              <td>
                <button className="btn" onClick={() => removeItem(item.id)}> <img src="./imgs/supprimer.png" alt="bg" width={40} class="d-block" id="" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id='totalprice' className="mt-3">
        <strong style={{fontSize:'20px'}}>Total Price: {totalPrice} MAD</strong>
        <button className="btn btn-outline-litgh ml-3" onClick={generateInvoice} >  <img src="./imgs/acheter-maintenant2.png" alt="bg" width={150} class="d-block" id="" /> </button>
      </div>
    </div>
  );
}

export default CartPage;
