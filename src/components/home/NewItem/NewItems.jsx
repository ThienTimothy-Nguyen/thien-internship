import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../HotCollections/NextArrow";
import PrevArrow from "../HotCollections/PrevArrow";
import NewItemsLoading from "../../AdditionalComponents/ItemCardLoading";
import ItemCard from "../../AdditionalComponents/ItemCard";

const NewItems = () => {
  const [slidesToShow, setSlidesToShow] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
  });
  const [newItemsArr, setNewItemsArr] = useState([]);

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
          {newItemsArr.length > 0 ? newItemsArr.map((item) => 
            <ItemCard item={item} key={item.id} />) : 
            new Array(4).fill(0).map((_, index) => <NewItemsLoading key={index} />
          )}
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
