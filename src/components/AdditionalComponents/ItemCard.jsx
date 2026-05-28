import ItemCountdown from './ItemCountdown';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <div className="newItemsCard" style={{ display: "block", backgroundSize: "cover" }}>
        <div className="nft__item">
        <div className="author_list_pp">
            <Link
            to={`/author/${item.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
            >
            <img className="lazy" src={item.authorImage} alt="" />
            <i className="fa fa-check"></i>
            </Link>
        </div>
        {item.expiryDate && <ItemCountdown expiryDate={item.expiryDate} />}

        <div className="nft__item_wrap">
            <div className="nft__item_extra">
            <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                    <h4>Share</h4>
                    <button>
                        <i className="fa fa-facebook fa-lg"></i>
                    </button>
                    <button>
                        <i className="fa fa-twitter fa-lg"></i>
                    </button>
                    <button>
                        <i className="fa fa-envelope fa-lg"></i>
                    </button>
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
  )
}

export default ItemCard