/* ################################################################################################################################                                                                                                                                #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



import React, { Component } from "react";
import "../../CSS/ProfileLeader.css";

class Profile extends Component {
  render() {
    return (
      <div className="card h-100 BaoBao text-justify text-center  ">
        <div className="card-header">
          <div
            className="card-cover"
          
          ></div>
          <img
            className="card-avatar "
            src="media/AvatarTranThanhBao.png"
            alt="avatar"
          />
          <h1 className="card-fullname">Trần Thanh Bảo</h1>
          <h2 className="card-jobtitle">18130017</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">CEO and Founder</div>
              <p className="card-desc text-justify">
                    Đối với nhà đầu tư việc kịp thời cập nhật tin tức về thị trường
                bất động sản luôn là yếu tố đặt lên hàng đầu, nhận thấy khó khăn
                đó, Trần Thanh Bảo cùng với đội ngũ của mình đã lập nên nền tảng
                số cung cấp những tin tức nhanh chóp kịp thời và sớm nhất của
                thị trường bất động sản cho nhà đầu tư để không bỏ lỡ cơ hội của
                mình. Bên cạnh đó, độ chính xác, tính minh bạch của nội dung và niềm tin của người dùng luôn được chúng tôi đặt lên hàng đầu.

              </p>
            </div>
            <div className="social-container">
              <ul className="social-icons">
                <li>
                  <a href="https://baonlu.com"
                  target="_blank">
                    <i className="fa fa-link"  id="iconLink"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/thanhbao1122"
                  target="_blank">
                    <i className="fa fa-facebook" id="iconFacebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCeZIUE4l4PJREEXD5P7hoNg/featured"
                  target="_blank">
                    <i className="fab fa-youtube" id="iconYoutube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Thanh-Bao"
                  target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
