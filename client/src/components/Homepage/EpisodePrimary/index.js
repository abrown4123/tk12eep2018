import React from 'react';

//TODO: Convert into a class based component when backend is ready
const EpisodePrimary = () => {
    return (
        <section className="episode-primary" id="episode-primary">
            <h2 className="section-title">Latest Episode</h2>
            <div className="episode-player-container">
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497674491&color=%23ff3399&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
                <div className="episode-info-container">
                    <div className="episode-info">
                        <h3 className="episode-title">
                            <a href="#">Latest Episode Title</a>
                        </h3>
                        <div className="episode-meta">Season 3 &middot; Episode 17</div>
                    </div>
                </div>
            </div>
            <div className="latest-episode-link">
                <h4><a href="#">Latest Episode Show Notes<i className="fas fa-file-alt"></i></a></h4>
            </div>
        </section>
    );
}

export default EpisodePrimary;