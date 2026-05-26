import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../AdditionalComponents/ItemCard";
import ItemCardLoading from "../AdditionalComponents/ItemCardLoading";

const originAPI = "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";

const ExploreItems = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [exploreItemsModified, setExploreItemsModified] = useState([]);
  const [counter, setCounter] = useState(8);

  async function fetchExploreItems(value="") { 
      if (!value) {
        const { data } = await axios.get(originAPI);
        setExploreItems(data);
      } 
      const { data } = await axios.get(`${originAPI}?filter=${value}`);
      setExploreItems(data);
    };

  useEffect(() => {
    fetchExploreItems();
  }, []);

  useEffect(() => {
    function updateItems() {
      if (exploreItems.length > 0) {
        const slicedItems = exploreItems.slice(0, counter);
        setExploreItemsModified(slicedItems);
      }
    }
    exploreItems.length > 0 && updateItems();
  }, [exploreItems, counter])
  
  function loadMore() {
    setCounter(counter + 4);
  }

  function sortItems(e) {
    const value = e.target.value;
    fetchExploreItems(value);
  }
  

  return (
    <>
      <div>
        <select id="filter-items" onChange={(e) => sortItems(e)} defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
        {exploreItemsModified.length > 0 ? exploreItemsModified.map((item) => (
          <div className="explore__item" key={item.id}>
            <ItemCard item={item} />
          </div>
        )) : new Array(8).fill(0).map((_, index) => (
          <div className="explore__item" key={index}>
            <ItemCardLoading />
          </div>
        ))}
      <div className="col-md-12 text-center">
        {counter < exploreItems.length &&
          <button onClick={loadMore} id="loadmore" className="btn-main lead">
            Load more
          </button>
        }
      </div>
    </>
  );
};

export default ExploreItems;
