

function AuthorItemsLoading() {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
            {new Array(8).fill(0).map((_, i) => 
            (<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={i}>   
                <div className="nft__item">
                    <div className="author_list_pp author_list_pp--placeholder">
                        <div>
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                    <div className="nft__item_wrap nft__item_wrap--placeholder">
                    </div>
                    <div className="nft__item_info">
                        <div>
                        <div className="title_placeholder"></div>
                        </div>
                        <div className="nft__item_price code_placeholder"></div>
                        <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>))}
            </div>
        </div>
    </div>
  )
}

export default AuthorItemsLoading