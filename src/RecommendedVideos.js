import React from "react";
import './RecommendedVideos.css';
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos-videos">
                <VideoCard 
                    title="jazz/lofi hip hop radio chill beats to relax/study to [LIVE 24/7]"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/e/ed/LegalEagle_YouTube_icon.jpg"
                    channel="Abao In Tokyo"
                    image="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphenp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
                <VideoCard 
                    title="Pamper Routine *pick me up kind of day* #pamperroutine"
                    views="2M views"
                    timestamp="4 days ago"
                    channelImage="https://media.istockphoto.com/photos/book-on-a-marble-table-lighted-candle-and-cup-of-coffee-3d-rendering-picture-id1387579334?k=20&m=1387579334&s=170667a&w=0&h=uVgRMr-OLkr8cqexrwuI-NjdUSmBzNMUL0PWcT3Y6AU="
                    channel="Merve"
                    image="https://media.istockphoto.com/photos/hotel-spa-treatment-or-home-bath-procedure-bathroom-with-accessories-picture-id1386836711?b=1&k=20&m=1386836711&s=170667a&w=0&h=RJOnrwPlRkNK-VZXUYIEZYXfdnM7JGgx8-UCXB0Kme8="
                />
                <VideoCard 
                    title="An *eventful* Day in the Life of a Google Software Engineer (NYC Edition)"
                    views="15K"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    channel="Matt Yang"
                    image="https://images.unsplash.com/photo-1588741068086-caf60b2ff8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <VideoCard 
                    title="One Direction - Night Changes"
                    views="543M"
                    timestamp="7 years ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/One_Direction_-_Night_Changes_Single_Cover.png/220px-One_Direction_-_Night_Changes_Single_Cover.png"
                    channel="One Direction"
                    image="https://i.ytimg.com/vi/syFZfO_wfMQ/maxresdefault.jpg"
                />
                <VideoCard 
                    title="Smooth Piano Jazz Music in 4K Cozy Bedroom in Los Angeles - Background Instrumental to Relax, Study"
                    views="260K"
                    timestamp="6 days ago"
                    channelImage="https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    channel="Cozy Apartment"
                    image="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <VideoCard 
                    title="jazz/lofi hip hop radio chill beats to relax/study to [LIVE 24/7]"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/e/ed/LegalEagle_YouTube_icon.jpg"
                    channel="Abao In Tokyo"
                    image="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphenp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
                <VideoCard 
                    title="An *eventful* Day in the Life of a Google Software Engineer (NYC Edition)"
                    views="15K"
                    timestamp="4 days ago"
                    channelImage="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    channel="Matt Yang"
                    image="https://images.unsplash.com/photo-1588741068086-caf60b2ff8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z29vZ2xlJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <VideoCard 
                    title="One Direction - Night Changes"
                    views="543M"
                    timestamp="7 years ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/One_Direction_-_Night_Changes_Single_Cover.png/220px-One_Direction_-_Night_Changes_Single_Cover.png"
                    channel="One Direction"
                    image="https://i.ytimg.com/vi/syFZfO_wfMQ/maxresdefault.jpg"
                />
                <VideoCard 
                    title="Smooth Piano Jazz Music in 4K Cozy Bedroom in Los Angeles - Background Instrumental to Relax, Study"
                    views="260K"
                    timestamp="6 days ago"
                    channelImage="https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    channel="Cozy Apartment"
                    image="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
