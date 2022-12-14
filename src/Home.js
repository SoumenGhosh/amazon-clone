import React from 'react';
import './Home.css';
import Product from './Product';
import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img 
            className='home__image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" /> 
            {/* chagne slider here */}
            {/* <ImageSlider /> */}

            <div className="home__row">
              {/* product */}
              <Product 
                id={75675}
                title={"The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"}
                rating={5}
                price={29.99}
                image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
              />
              

              <Product 
                title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"}
                rating={4}
                price={239.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
            </div>

          <div className="home__row">
            <Product 
              id={"324234"}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product 
              id={"123"}
              title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />

            <Product 
              id={"234"}
              title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_5X385_.jpg"
            />
          </div>

          <div className="home__row">
            
            <Product 
              id={"345"}
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
              price={1598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            
          </div>
        </div>
       
        
    </div>
  )
}

export default Home