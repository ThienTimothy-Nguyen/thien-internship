import React from 'react'

function TopSellersLoading() {
  return (
    <li className=''>
        <div className="author_list_pp author_list_pp--placeholder">
            <img
                className="lazy pp-author"
                src=""
                alt=""
            />
            <i className="fa fa-check"></i>
        </div>
        <div className="author_list_info">
            <div className='title_placeholder'></div>
            <span className='code_placeholder'></span>
        </div>
    </li>
  )
}

export default TopSellersLoading