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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Search from "./search/Search.js";
import About from "./About/About.js";
import New_Topic from "./New_Topic.js";
import More from "./More.js";
import data from "../SIMULATION_DATABASE/data_BlockNews.json";
import FVdata from "../SIMULATION_DATABASE/data_NewsFullView.json";
// import component xem full bảng tin
import NewsFullView from "./Home/news/NewsFullView.js";
import TabLogin from "../components/login/TabLogin.js";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/more" component={More} />
        <Route exact path="/newTopic" component={New_Topic} />
        <Route exact path="" component={TabLogin} />

        {/* chuyển đến trang xem full bảng tin */}
        {data.map((value, index) => {
          let preIndex = index;
          let nextIndex = index;
          if (index === 0) {
            preIndex = 5;
          } else {
            preIndex = index - 1;
          }
          if (index === 5) {
            nextIndex = 0;
          } else {
            nextIndex = index + 1;
          }
          return (
            <Route
              exact
              path={"/" + value.linkTopic}
              render={(props) => (
                <NewsFullView
                  titleFullView={FVdata[index].title}
                  imgFullView={FVdata[index].image}
                  contentFullView1={FVdata[index].content1}
                  contentFullView2={FVdata[index].content2}
                  contentFullView3={FVdata[index].content3}
                  partURL_plugin_fb={value.linkTopic}
                  previous={data[preIndex].linkTopic}
                  next={data[nextIndex].linkTopic}
                />
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default RouterURL;
