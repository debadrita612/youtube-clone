import React from "react";
import './SearchPage.css';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://upload.wikimedia.org/wikipedia/en/2/23/Lofi_girl_logo.jpg"
                channel="Lofi Girl"
                verified
                subs="10.8M"
                noOfVideos={360}
                description="study - chill - sleep - repeat | Listen on Spotify, Apple music and more..."
            />
            <hr />

            <VideoRow 
                views="16M"
                subs="10.8M"
                description="The release brings together the most relaxing songs that fit the winter season perfectly. Sit down by your favourite seat by the window, and get a cup of hot tea ☕"
                channel="Lofi Girl"
                timestamp="1 year ago"
                title="Cozy Winter ❄️ - [lofi hip hop/study beats]"
                image="https://i.ytimg.com/vi/n61ULEU7CO0/maxresdefault.jpg"
            />
            <VideoRow 
                views="2M"
                subs="10.8M"
                description="Happy compilation day! ☀ ☕ Make sure to set a reminder for the premiere if you haven't already, we'll be hosting a listening party with fun games and quizzes! See you soon 🧡"
                channel="Lofi Girl"
                timestamp="3 months ago"
                title="Morning Coffee ☕️ [lofi hip hop/study beats]"
                image="https://wallpaperaccess.com/full/2059387.jpg"
            />
            <VideoRow 
                views="850K"
                subs="10.8M"
                description="The new Lofi Girl compilation “Best of 2021” is out now 🙌 This compilation contains a track cherry-picked from every release on the channel this year, taking you on a journey through this year’s biggest moments."
                channel="Lofi Girl"
                timestamp="2 months ago"
                title="Sleepless Night 🌙 [lofi hip hop/study beats]"
                image="https://i.ytimg.com/vi/QltODNFwp20/maxresdefault.jpg"
            />
            <VideoRow 
                views="324K"
                subs="10.8M"
                description="Seoul-based producer softy offers an anecdote to the stifling summer and transports you into a calming autumn morning with his latest album ‘The Day I Passed’."
                channel="Lofi Girl"
                timestamp="9 days ago"
                title="Softy - The Day I Passed ☕️ [lofi hip hop/relaxing beats]"
                image="https://storage.spincoaster.com/media/2022/04/08025854/maxresdefault-1.jpeg"
            />
        </div>
    );
}

export default SearchPage;
