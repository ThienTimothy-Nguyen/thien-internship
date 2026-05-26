import React from 'react'

function TopSellersLoading() {
  return (
    <li>
        <div className="author_list_pp author_list_pp--placeholder">
            <img
                className="lazy pp-author"
                src="/placeholder.png"
                alt=""
            />
            <i className="fa fa-check"></i>
        </div>
        <div className="author_list_info">
            <div className='title_placeholder'></div>
            <div className='code_placeholder'></div>
        </div>
    </li>
  )
}

export default TopSellersLoading