import React from 'react';
import './about.css';

const About = () => {
    return (
        <div>
            <div className='heading'>
                <h1>About Us</h1>
                <h3>
                    Welcome to our website! We are a team of passionate developers dedicated to creating
                    amazing web applications MSFOOD.
                </h3>
            </div>
            <div className='container '>
                <section className='about'>
                    <div className='about-image col-12'>
                        <img src="/imgs/img2.jpeg" alt="about" className='col-12' />
                    </div>
                    <div className='about-content d-flex flex-column align-items-start col-12'>
                        <h1 className='One'> Our Story</h1>
                        <h2 className=' d-flex flex-column align-items-start'>
                            Founded in 2016, MSFood Snack is a leading provider of delicious and convenient fast food snacks that satisfy your cravings on the go. We are dedicated to delivering exceptional taste and quality, offering a wide range of delectable snacks that will keep you coming back for more.
                        </h2>
                    </div>
                    <br />
                </section>
            </div>
            <div className='container col-12'>
                <section className='about'>

                    <div className='about-content d-flex flex-column align-items-start col-12'>
                        <h2 className='d-flex flex-column align-items-start '>
                            At MSFood Snack, we understand the importance of fast-paced lifestyles and the need for quick and tasty food options. Our team of culinary experts and food enthusiasts work tirelessly to develop innovative and mouthwatering snack creations that cater to diverse palates. Whether you're a fan of savory treats, crave a touch of spice, or have a sweet tooth, we have something to tempt every taste bud.
                        </h2>
                    </div>
                    <div className='about-image d-flex flex-column align-items-star'>
                        <img src="/imgs/img-ab6.jpeg" alt="about" className='' />
                    </div>
                    <br />

                </section>
            </div>
            <div className='container '>
                <section className='about'>
                    <div className='about-image col-12'>
                        <img src="/imgs/img-ab1.webp" alt="about" className='col-12' />
                    </div>
                    <div className='about-content d-flex flex-column align-items-start col-12'>
                        <h2 className=' d-flex flex-column align-items-start'>
                            Quality is our top priority. We source only the finest ingredients from trusted suppliers who share our commitment to excellence. Our snacks are prepared with care and attention to detail, ensuring that each bite is a delightful experience. We believe that great taste should never be compromised, which is why we maintain rigorous quality control standards at every stage of production.

                        </h2>
                    </div>
                    <br />
                </section>
            </div>
            <div className='container col-12'>
                <section className='about'>

                    <div className='about-content d-flex flex-column align-items-start col-12'>
                        <h2 className='d-flex flex-column align-items-start '>
                            As a socially responsible company, MSFood Snack is committed to sustainability and environmental stewardship. We actively seek eco-friendly packaging options and work towards minimizing our carbon footprint. We believe in giving back to the community and regularly collaborate with local charities to support causes that are close to our hearts.

                        </h2>
                    </div>
                    <div className='about-image d-flex flex-column align-items-star'>
                        <img src="/imgs/imf-ab6.webp" alt="about" className='' />
                    </div>
                    <br />

                </section>
            </div>
            <div className='container '>
                <section className='about'>
                    <div className='about-image col-12'>
                        <img src="/imgs/imd-ab3.webp" alt="about" className='col-12' />
                    </div>
                    <div className='about-content d-flex flex-column align-items-start col-12'>
                        <h2 className=' d-flex flex-column align-items-start'>
                            Customer satisfaction is at the core of our business philosophy. We strive to create an exceptional experience for our customers from the moment they visit our website to the moment they enjoy our snacks. Our user-friendly online platform allows you to easily browse our menu, place orders, and have your snacks delivered to your doorstep. We value your feedback and continuously strive to enhance our offerings based on your preferences and suggestions.

                        </h2>
                    </div>
                    <br />
                </section>
            </div>
            <div className='container col-12'>
                <section className='about'>
                    <div className='about-content d-flex flex-column align-items-start col-12'>

                        <h2 className='d-flex flex-column align-items-start '>
                            Thank you for choosing MSFood Snack. We invite you to indulge in our scrumptious snacks, made with love and passion. Join us on this culinary journey, and experience the irresistible flavors that have made MSFood Snack a favorite among snack lovers nationwide.
                        </h2>
                    </div>
                    <div className='about-image d-flex flex-column align-items-star'>
                        <img src="/imgs/imf-ab.jpg" alt="about" className='' />
                    </div>
                    <br />
                </section>
            </div>
        </div>
    );
}

export default About;
