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

class More extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>
        <ul id="breadcrumb">
          <li>
            <a href="/">
              <span class="fas fa-globe"> </span>
            </a>
          </li>
          <li>
            <a className="disabledHoverBC">
              <span class="fas fa-info"> </span> More
            </a>
          </li>
          <li></li>
        </ul>
        <div className="text-center introAbout">
          <h1>Tầm nhìn chiến lược và định hướng trong tương lai</h1>
          <p>
            Công ty TNHH bất động sản Bảo Bảo không chỉ là nền tảng cung cấp
            tin tức về thị trường Bất động sản chính xác và nhanh chóng nhất
            Việt Nam, trong thời gian tới Công ty TNHH bất động sản Bảo Bảo sẽ
            phát triển thêm nền tảng môi giới bất động sản, có nhiệm vụ kết nối
            các nhà đầu tư với nhau trên khắp mọi miền tổ quốc.
          </p>
        </div>
        <h3 className="text-center">
          ĐƯỢC TẠO RA TỪ 1023,5 GIỜ CODING LIÊN TỤC
        </h3>
        <div id="chartdiv1"></div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-12 mb-4 text-center">
              <h3>THIẾT KẾ RESPONSIVE TỐI ƯU CHO MOBILE</h3>
              <img id="responsive-mockup" src="media/responsive.png"></img>
            </div>
          </div>
        </div>
        <div className="container my-5 pb-5">
          <div className="row">
            <div className="col-lg-12 mb-4 text-center">
              <h4>TƯƠNG THÍCH VỚI MỌI TRÌNH DUYỆT</h4>
              <img style={{ width: "50%" }} src="media/multibrowser.png"></img>
            </div>
          </div>
        </div>

        <h3 className="text-center ">QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN</h3>
        <div id="chartdiv2"></div>
        {/* /////////// begin carousel ///////////////////////// */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 col-center m-auto">
              <h2>Phản hồi từ người dùng</h2>
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for carousel items */}

                <div className="carousel-inner feedBack ">
                  <div className="item carousel-item active">
                    <div className="img-box">
                      <img src="media/avatarDien.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Tin tức cập nhật rất nhanh chóng, độ chính xác cao. Nội
                      dung bài viết chi tiết, cụ thể. Đây là nền tảng theo dõi
                      diễn biến thị trường BĐS tốt nhất Việt Nam.
                    </p>
                    <p className="overview">
                      <b>Mr. Thanh Điền</b>, khoa bất động sản
                      - Đại học Bách Khoa Hà Nội
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img src="media/avatarPhuc.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Nền tảng cung cấp tin tức bất động sản giúp mọi người dễ
                      dàng kết nối với chủ đầu tư, nhiều lựa chọn và tìm được
                      những dự án nhà đất giá tốt.
                    </p>
                    <p className="overview">
                      <b>Mr. Hồng Phúc </b>, khoa Toán Kinh Tế - Đại Học Kinh Tế
                      Luật
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img src="media/avatarDanh.jpg" alt="" />
                    </div>
                    <p className="testimonial text-justify">
                      Giao diện thân thiện với trải nghiệm người dùng, nền tảng
                      sở hữu nguồn data khổng lồ từ thị trường BĐS, rất phù hợp
                      để phát triển và mở rộng sau này.
                    </p>
                    <p className="overview">
                      <b>Mr. Công Danh</b>, khoa Công Nghệ Thông Tin - Đại học
                      Bách Khoa TP.HCM
                    </p>
                  </div>
                </div>

                {/* Carousel controls */}
                <a
                  className="carousel-control left carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-control right carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* /////////// end carousel ///////////////////////// */}

        {/* ////////////////////start modal feedBack ///////////////////////////// */}

        {/* <div className="container mb-5 pb-5">
          <div className="row">
            <div className="col-12  text-center">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo"
              >
                 Your feedback
                
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="text-center">
                        Your feedback is important to us !
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">
                          <i className="fas fa-times-circle closeBtn"></i>
                        </span>
                      </button>
                    </div>
                    <div className="modal-body text-left">
                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label "
                          >
                            Name :
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Message:
                          </label>
                          <textarea
                            className="form-control"
                            id="message-text"
                            defaultValue={""}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        <i class="far fa-paper-plane"></i> Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="text-center googleFormFeedBack">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdp5cij5GSuJGFZvugT1pXQNFNBlafBema7RtsHawYuNMT64A/viewform?embedded=true"
            width="640"
            height="850"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
          </iframe>
        </div>
        {/* ////////////////////end modal feedBack ///////////////////////////// */}

        <div className="container-fluid LienHeComponent pt-3 px-5">
          <div className="row">
            <div className="col-lg-6 mb-4 pl-5">
              <div className="googleMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.96076639272306!2d106.76371236679594!3d10.782774066492403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525edfebb3a21%3A0x60cb053942ad368a!2zU-G7kSAxNCwgxJHGsOG7nW5nIHPhu5EgMTA!5e0!3m2!1svi!2ssg!4v1644675037037!5m2!1svi!2ssg"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-4 px-5 mt-4 ">
              <div>
                <h4>Địa Chỉ:</h4>
                <p>
                  <i className="fa fa-home"></i> Trụ sở chính : 346 Lý Thường Kiệt, Phường 8, quận 7, Tp.HCM.
                </p>
                <p>
                  <i className="fa fa-home"></i> Chi nhánh 1 : 543, đường Lê Lợi, Quận Ba Đình, Hà Nội.
                </p>
                <p>
                  <i className="fa fa-home"></i> Chi nhánh 2 : 643, đường Quang Trung, Quận Ngũ Hành Sơn, Đà Nẵng.
                </p>

                <h4>Liên hệ:</h4>
                <p>
                  <i className="fas fa-phone-square"></i> SĐT : 18008199
                </p>
                <p>
                  <i className="fa fa-envelope"></i> E-mail :
                  contact@baobaogroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default More;
