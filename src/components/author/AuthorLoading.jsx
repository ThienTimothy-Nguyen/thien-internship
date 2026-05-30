function AuthorLoading() {
  return (
    <div className="col-md-12">
        <div className="d_profile de-flex">
            <div className="de-flex-col">
            <div className="profile_avatar">
                <div className="img_placeholder__author">
                    <i className="fa fa-check icon_placeholder__author"></i>
                </div>
                <div className="profile_name">
                    <h4>
                        <div className="title__skeleton--author"></div>
                        <div className="profile_username tag__skeleton--author"></div>
                        <div id="wallet" className="profile_wallet code_placeholder">
                        
                        </div>
                    </h4>
                </div>
            </div>
            </div>
            <div className="profile_follow de-flex">
            <div className="follower_container__skeleton">
                <div className="profile_follower tag__skeleton--author"></div>
                <button className="btn-main btn-main__skeleton">
                </button>
            </div>
            </div>
        </div>
        </div>
  )
}

export default AuthorLoading