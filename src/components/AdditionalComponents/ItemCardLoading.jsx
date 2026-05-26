
function ItemCardLoading() {
  return (
    <div className="newItemsCard" >
        <div className="nft__item">
            <div className="author_list_pp author_list_pp--placeholder">
                <img className="lazy" src="/placeholder.png" alt="" />
                <i className="fa fa-check"></i>
            </div>
            <div className="nft__item_wrap nft__item_wrap--placeholder">    
            </div>
            <div className="nft__item_info">
                <div className='title_placeholder'></div>
                <div className="nft__item_price code_placeholder"></div>
                <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCardLoading