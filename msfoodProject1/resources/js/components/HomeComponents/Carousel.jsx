export default function Carousel(){
    return (
       <>
        <div id="demo" className="carousel-container  carousel slide " data-bs-ride="carousel"
                    style={{width:'100%'}}       >
                           <div class="carousel-indicators">
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="3" ></button>
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                               <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                           </div>
                           <div class="carousel-inner">
                               <div class="carousel-item active">
                               <img src="./imgs/imgBurger1.jpg" alt="burger" class="d-block" id="carouseImg"
                                      />
                                   <div class="carousel-caption">
                                       <h3 >Burger</h3>
                                       <p>Have a Good Burger</p>
                                   </div>
                               </div>
                               <div class="carousel-item">
                                   <img src="./imgs/pizza1.jpeg" alt="pizza" class="d-block" id="carouseImg" />
                                   <div class="carousel-caption">
                                       <h3> PIZZA</h3>
                                       <p>Your Favorite PIZZA here!</p>
                                   </div>
                               </div>
                               <div class="carousel-item">
                                   <img src="./imgs/tacos1.png" alt="tacos" class="d-block" id="carouseImg" />
                                   <div class="carousel-caption">
                                       <h3 > TACOS</h3>
                                       <p>Your Favorite TACOS here!</p>
                                   </div>
                               </div>
                               <div class="carousel-item">
                                   <img src="./imgs/salades1.jpg" alt="salade" class="d-block" id="carouseImg" />
                                   <div class="carousel-caption">
                                       <h3> SALADE</h3>
                                       <p>Your Favorite SALADE here!</p>
                                   </div>
                               </div>
                               <div class="carousel-item">
                                   <img src="./imgs/drinks1.jpg" alt="cola" class="d-block" id="carouseImg" />
                                   <div class="carousel-caption">
                                       <h3> Drinks</h3>
                                       <p>Your Favorite Drinks here!</p>
                                   </div>
                               </div>
                               <div class="carousel-item">
                                   <img src="./imgs/glas1.jpg" alt="glas" class="d-block" id="carouseImg" />
                                   <div class="carousel-caption">
                                       <h3> Glas</h3>
                                       <p>Your Favorite Glas here!</p>
                                   </div>
                               </div>
                           </div>
                           <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                               <span class="carousel-control-prev-icon"></span>
                           </button>
                           <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                               <span class="carousel-control-next-icon"></span>
                           </button>
                       </div>

       </>
    )
   }
