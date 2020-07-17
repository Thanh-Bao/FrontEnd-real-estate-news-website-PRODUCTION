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
import News_Block from "./News_Block.js";
import data from "../../../SIMULATION_DATABASE/data_BlockNews.json";
import QVdata from "../../../SIMULATION_DATABASE/data_NewsQuickView.json";
class Group_News extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="my-4 text-justify text-center">New Posts</h3>
        <div className="row">
          {data.map((value, index) => {
            return (
              <News_Block
                id={value.id}
                block_NavLinkFull={"/" + value.linkTopic}
                block_img_src={value.imgsrc}
                block_title={value.title}
                block_small_content={value.description}
                content_for_QuickView={QVdata[index].content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Group_News;
