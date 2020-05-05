import React from "react";
import Tile from "./Tile";
import "./css/body.css"
import floki from "../images/sampleImages/Floki.jpeg"
import serverlessDays from "../images/sampleImages/ServerlessDays.jpeg"
import haloPistol from "../images/sampleImages/haloGun.jpeg"



export class Body extends React.Component {
    render() {
        return (
            <div className="body-container">
                {/*<h1> hi {this.props.name} This is the statefulBody </h1>*/}
                <Tile title="Floki"
                      src={floki}
                      text="A very wet dog">
                </Tile>
                <Tile title="Halo Pistol"
                      src={haloPistol}
                      text="3D printed halo pistol">
                </Tile>
                <Tile title="Serverless Days"
                      src={serverlessDays}
                      text="Me presenting at serverless days 2020">
                </Tile>
            </div>
        );
    }
}


