import React from "react";
import Tile from "./Tile";
import "./css/tileContainer.css"
import floki from "../images/sampleImages/Floki.jpeg"
import serverlessDays from "../images/sampleImages/ServerlessDays.jpeg"
import haloPistol from "../images/sampleImages/haloGun.jpeg"
import {getBlogPosts} from "../api/blogPostApi";

export class TileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {blogPosts: []}
    }

    componentDidMount(){
        getBlogPosts().then(res =>
        this.setState( {blogPosts: res}))
    }

    render(){
        return (
            <div className="tile-container">
                {this.state.blogPosts.map(
                    blogPost => {
                      return (
                          <div className="tile-box">
                              <Tile key = {blogPost.id}
                                    title = {blogPost.title}
                                    src = {floki}
                                    text = {blogPost.text}
                                    subheading = {blogPost.subheading}
                              />
                          </div>

                      )
                    }
                )}
            </div>
            )

    }
}