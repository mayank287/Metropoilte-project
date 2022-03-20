import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Rituthakur from "../../images/RituThakur.jpeg";
import SamitaSinghania from "../../images/SamitaSinghania.jpeg";
import ProductSummary from "../../images/productsummary.png";
import offerimage from "../../images/offerimage.png"
import demo1 from "../../images/demo1.png"
import demo2 from "../../images/demo2.png"
import demo3 from "../../images/demo3.png"
import demo4 from "../../images/demo4.png"
import demo5 from "../../images/demo5.png"
import demo6 from "../../images/demo6.png"
import logo from "../../images/logo.png"

const Home = () => {
  //  TopLoaderBar();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  return (
    <Fragment>
      {loading ? (
        <Loader />

      ) : (
        <Fragment>
       
          <MetaData title="BuyArc" />
          
    <div className="header">

	<div className="container">

          <div className="banner">
            <div class="row">
              <div class="col-2">
                <h1>Give Your HEALTH A New Style!</h1>
                <p>We Care About Your Health. Thats Why We Are Here With The India's No.1,100% Chemical Free Natural Products.For Your Breakfast, Lunch, Dinner.</p>
                <a href="products.html" className="btn">Explore Now &#8594;</a>
              </div>
              <div class="col-2">
                <a href="products.html"><img src={ProductSummary} /></a>
              </div>
            </div>
        </div>
      </div>

          </div>

          <div className="categories">
    	<div className="small-container">
    		<div className=
        "row">
    		<div className="col-3">
    			<a href="product-details.html"><img src={demo1} width="" height=""/></a>
    		</div>
    		<div className="col-3">
    			<a href="product-details-2.html"><img src={demo2} width="" height=""/></a>
    		</div>
    		<div className="col-3">
    			<a href="product-details-3.html"><img src={demo3} width="" height=""/></a>
    		</div>
    		<div className="col-3">
    			<a href="product-details-4.html"><img src={demo4} width="" height=""/></a>
    		</div>
        <div className="col-3">
    			<a href="product-details-4.html"><img src={demo5} width="" height=""/></a>
    		</div>	<div className="col-3">
    			<a href="product-details-4.html"><img src={demo6} width="" height=""/></a>
    		</div>
    	</div>
    	</div>
            <h2 className="homeHeading">Featured Products</h2>

                <div className="pcontainer" id="pcontainer">
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}

                </div> 

      {/* Products */}


    </div>
          <div className="offer">
            <div className="small-container">
              <div className="row">
                <div className="col-2">
                  <a href="product-details.html"><img src={offerimage} className="offer-img"/></a>
                </div>
                <div className="col-2">
                  <p>Exclusively Available on Metropolite</p>
                  <h1>Coffee Premix Premium</h1>
                  <small>This Is A Perfect Blend Of Milk,Sugar And 100% Natural Coffee & Chikory In Proportions To Give You A Delightful Cup Of Streaming Hot Coffee.</small>
                    <a href="product-details.html" className="btn">Buy Now &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
{/* Testimonials */}
<div className="testimonial">
    	<div className="small-container">
    		<div className="row">
    			<div className="col-3">
                   <i class="fas fa-quote-left"></i>
    				<p>It Is My Daily Routein Diet, Good For Health And Immune System, 100% Satisfaction, Best Quality, Natural Product, Organic Firm Worth It</p>
    				<div className="rating">
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="far fa-star"></i>
     			    </div>
     			    <img src={SamitaSinghania}/>
     			    <h3>Samita Singhania</h3>
    			</div>
    			<div className="col-3">
                   <i className="fas fa-quote-left"></i>
    				<p>Probably the best coffee place friendly staff! Offer takeout coffee with pre-order during the pandemic, as well as tea and other things.</p>
    				<div className="rating">
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="fas fa-star"></i>
     	            <i class="far fa-star"></i>
     			    </div>
     			    <img src={Rituthakur}/>
     			    <h3>Ritu Thakur</h3>
    			</div>
    		</div>
    	</div>
    </div>
{/*  Brands */}
<div className="brands">
    	<div className="small-container">
    		<div className="row">
    			<div className="col-5">
    				<img src={logo} width="500" height="130"/>
    			</div>
    		</div>
    	</div>
    </div>






          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
