import React from 'react';
// import Cart from '../Cart/Cart';
import Herosection from '../../Componets/Herosection/Herosection';
import Service from '../../Componets/Service/Service';
import Gallery from '../../Componets/Gellary/Gallery';
import Popularproduct from '../../Componets/Popularproduct/Polularproduct'
import Review from '../../Componets/Review/Review'


const Home = ({addtocart}) => {
    return (
           <>
           <Herosection/>
           <Service/>
           <Popularproduct  addtocart={addtocart}/>
           <Review/>
           <Gallery/>
           </>  
        


    );
}

export default Home;
