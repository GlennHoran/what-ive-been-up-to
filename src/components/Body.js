import React from "react";
import Tile from "./bodyComponents/Tile";
import "./css/body.css"
import floki from "../images/sampleImages/Floki.jpeg"
import serverlessDays from "../images/sampleImages/ServerlessDays.jpeg"
import haloPistol from "../images/sampleImages/haloGun.jpeg"
import {getBlogPosts} from "../api/blogPostApi";
import {TileContainer} from "./bodyComponents/TileContainer";


export class Body extends React.Component {

    render() {
        return (
            <div className="body-container">
                <TileContainer/>
            </div>
        );
    }
}


