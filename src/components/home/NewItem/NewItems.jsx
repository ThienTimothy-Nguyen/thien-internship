import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../HotCollections/NextArrow";
import PrevArrow from "../HotCollections/PrevArrow";
import NewItemsCountdown from "./NewItemsCountdown";
import NewItemsLoading from "./NewItemsLoading";

const NewItems = () => {
  const [slidesToShow, setSlidesToShow] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
  });
  const [newItemsArr, setNewItemsArr] = useState([]);
  const now = Date.now()

  async function getAPI() {
    const {data} = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
    setNewItemsArr(data)
  }

  useEffect(() => {
    getAPI()
  }, []) 

  useEffect(() => {
    function updateSlidesToShow() {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1)
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(4)
      }
    }

    updateSlidesToShow()
    window.addEventListener("resize", updateSlidesToShow)
    return () => {
      window.removeEventListener("resize", updateSlidesToShow)
    }
  }, [])

  function newItemsCarousel() {
    const settings = {
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      accessibility: true,
      swipeToSlide: true,
      mobileFirst: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return(
      <div className="slider-container">
        <Slider {...settings}>
          {newItemsArr.length > 0 ? newItemsArr.map((item) => (
            <div className="newItemsCard" key={item.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Monica Lucas"
                  >
                    <img className="lazy" src={item.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                {item.expiryDate && <NewItemsCountdown expiryDate={item.expiryDate} />}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/item-details">
                    <figure className="nft_image__wrapper">
                      <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </figure>
                    
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{item.title}</h4>
                  </Link>
                  <div className="nft__item_price">{item.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          )) : new Array(4).fill().map((_, index) => <NewItemsLoading key={index} />)}
          </Slider>
        </div>
    )
  }

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {newItemsCarousel()}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
