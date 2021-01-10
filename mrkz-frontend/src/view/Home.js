import React from "react";
import Product from "./../model/Product";
import Carousel from "react-bootstrap/Carousel";
import B2B from "./../images/B2B.png";
import SHOP from "./../images/SHOP.png";
import SELL from "./../images/SELL.png";
import "./../css/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Carousel for 3 Services */}
      <div className="home__carousel">
        <Carousel>
          <Carousel.Item>
            <img src={B2B} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={SHOP} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={SELL} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Hottest Products of The Day */}
      <strong>Today's Hottest Selling Products!</strong>
      <div className="home__hottestProducts">
        <Product
          id="12300"
          title="The Lean Startup: Hardback"
          price={11.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12301"
          title="The Lean Startup: Hardback"
          price={12.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
        <Product
          id="12302"
          title="The Lean Startup: Hardback"
          price={13.99}
          rating={5}
          image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
