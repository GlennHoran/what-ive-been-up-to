import React from "react";
import "../css/body.css"
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


