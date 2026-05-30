import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import HotCollectionsLoading from "./HotCollectionsLoading";

const HotCollections = () => {
  const [hotCollectionsArr, setHotCollectionsArr] = useState([])
  const [slidesToShow, setSlidesToShow] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 4;
  })

  async function getAPI() {
    const {data} = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
    setHotCollectionsArr(data)
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

  function hotCollectionsCarousel() {
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

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {hotCollectionsArr.length > 0 ? hotCollectionsArr.map((elem) => (
            <div className="hotCollectionsCard" key={elem.id}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to={`/item-details/${elem.nftId}`}>
                    <img src={elem.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to={`/author/${elem.authorId}`}>
                    <img className="lazy pp-coll" src={elem.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{elem.title}</h4>
                  </Link>
                  <span>ERC-{elem.code}</span>
                </div>
              </div>
            </div>
          )) : 
          new Array(4).fill(0).map((_, i) => (
            <HotCollectionsLoading key={i} />
          ))
        }
        </Slider>
      </div>
    )
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {hotCollectionsCarousel()}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
