import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsCurrencyRupee } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from "./homeproduct";
import "./home.css";
const Home = ({ detail, view, close, setClose, addtocart }) => {
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      {" "}
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>Discover the richness of real dairy.</h2>
            <Link to="/product" className="link">
              Get Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/slider-img.jpg" alt="sliderimg"></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/milk.jpg" alt="milk"></img>
            </div>
            <div className="detail">
              <p>In Stock</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/butter.jpg" alt="Butter"></img>
            </div>
            <div className="detail">
              <p>In Stock</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/cheese.jpg" alt="Cheese"></img>
            </div>
            <div className="detail">
              <p>In Stock</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/paneer.jpg" alt="Paneer"></img>
            </div>
            <div className="detail">
              <p>In Stock</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above <BsCurrencyRupee/>1500</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyRupee />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Guarrantied Refund</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>24/7 Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <AiOutlineShoppingCart />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <BsEye />
                    </li>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4><BsCurrencyRupee/>{curElm.Price}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>FRESH PRODUCTS FOR YOU!!!</h4>
            <h3>Milk,</h3>
            <h3>Butter,</h3>
            <h3>Cream</h3>
            <h3>And Much More...</h3>
            <Link to="/product" className="link">
              Get Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/slider-img.jpg" alt="sliderimg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
