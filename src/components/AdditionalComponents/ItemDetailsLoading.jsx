

function ItemDetailsLoading() {
  return (
    <div className="row">
        <div className="col-md-6 text-center nft_image__skeleton">
        </div>
        <div className="col-md-6">
            <div className="item_info">
            <div className='title__skeleton--item_detail'></div>

            <div className="item_info_counts">
                <div className="item_info_views">
                <i className="fa fa-eye"></i>
                </div>
                <div className="item_info_like">
                <i className="fa fa-heart"></i>
                </div>
            </div>
            <p className='para__skeleton'></p>
            <div className="d-flex flex-row">
                <div className="mr40">
                <h6>Owner</h6>
                <div className="item_author">
                    <div className="author_list_pp">
                    <div>
                        <div className='author_list_pp--placeholder'></div>
                        <i className="fa fa-check"></i>
                    </div>
                    </div>
                    <div className="author_list_info">
                        <div className='name__skeleton--item_detail'></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="de_tab tab_simple">
                <div className="de_tab_content">
                <h6>Creator</h6>
                <div className="item_author">
                    <div className="author_list_pp">
                    <div>
                        <div className='author_list_pp--placeholder'></div>
                        <i className="fa fa-check"></i>
                    </div>
                    </div>
                    <div className="author_list_info">
                    <div className='name__skeleton--item_detail'></div>
                    </div>
                </div>
                </div>
                <div className="spacer-40"></div>
                <h6>Price</h6>
                <div className="nft-item-price">
                <div className='title__skeleton--item_detail'></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetailsLoading