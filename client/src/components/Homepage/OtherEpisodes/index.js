import React from "react";
let episodes = ['a','b'];

const OtherEpisodes = () => {

    const episodeTiles = episodes.map((episode, i) => {
        return (
            <div key={i} class="episode-img-container">
                <img src="http://policetax.com/images/galleries/style/jquery/full-page/examples/imgs/bg5.jpg" alt="Episode cover art" />
                <div class="episode-info-container">
                    <div class="episode-info">
                        <h3 class="episode-title"><a href="#">Recent Episode Title</a></h3>
                        <div class="episode-meta">Season 3 &middot; Episode 16</div>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <React.Fragment >
            { episodeTiles }
        </ React.Fragment>
    );
}

export default OtherEpisodes;