import React from "react";
import './VideoRow.css';

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="videoRow">
            <img src={image} alt="thumbnail" />
            <div className="videoRow-text">
                <h4>{title}</h4>
                <p className="videoRow-headline">
                    {channel} • {subs} subscribers • {views} views • {timestamp}
                </p>
                <p className="videoRow-description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRow;
