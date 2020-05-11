import React from "react";
import Tile from "./Tile";
import "./css/body.css"
import floki from "../images/sampleImages/Floki.jpeg"
import serverlessDays from "../images/sampleImages/ServerlessDays.jpeg"
import haloPistol from "../images/sampleImages/haloGun.jpeg"
import {getBlogPosts} from "../api/blogPostApi";


export class Body extends React.Component {

    render() {
        let blogPost = [{
            "id": "title",
            "subheading": "subheading text"
        },
            {
                "id": "title2",
                "subheading": "subheading text2"
            }]
        getBlogPosts().then(response => {
            blogPost = response
        })

        return (
            <div className="body-container">
                {/*<h1> hi {this.props.name} This is the statefulBody </h1>*/}
                {/*//todo figure out how to best load up the blog posts here*/}
                {blogPost.map(blogPost => {
                    return (
                        <Tile title={blogPost.id}
                              src={floki}
                              text={blogPost.subheading}>
                        </Tile>
                    )
                })}
                {/*<Tile title="Floki"*/}
                {/*      src={floki}*/}
                {/*      text="A very wet dog">*/}
                {/*</Tile>*/}
                {/*<Tile title="Halo Pistol"*/}
                {/*      src={haloPistol}*/}
                {/*      text="3D printed halo pistol">*/}
                {/*</Tile>*/}
                {/*<Tile title="Serverless Days"*/}
                {/*      src={serverlessDays}*/}
                {/*      text="Me presenting at serverless days 2020">*/}
                {/*</Tile>*/}
            </div>
        );
    }
}


