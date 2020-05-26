import React from "react";
import Tile from "./Tile";
import "../css/tileContainer.css"
import floki from "../../images/sampleImages/Floki.jpeg"
import {getBlogPosts} from "../../api/blogPostApi";

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
        const imageBucketAddress = "https://s3.amazonaws.com/glenn-horan-test-image-component-bucket/"
        return (
            <div className="tile-container">
                {this.state.blogPosts.map(
                    blogPost => {
                      return (
                          <div className="tile-box">
                              <Tile key = {blogPost.id}
                                    title = {blogPost.title}
                                    src = {imageBucketAddress + blogPost.mainPicture}
                                    text = {blogPost.text}
                                    subheading = {blogPost.subheading}
                                    featured = {blogPost.featured}
                              />
                          </div>

                      )
                    }
                )}
            </div>
            )

    }
}