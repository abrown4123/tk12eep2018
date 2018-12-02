import React from 'react';
import EpisodePrimary from './EpisodePrimary';
import OtherEpisodes from './OtherEpisodes';

//TODO: The Other episodes component needs to be passed props once the backend is ready since the episode 
//blocks are the same

const Homepage = () => {
    return (
        <main className='episode-container'>
            <EpisodePrimary />
            <section className="episodes-other">
                <h2 className="section-title">Also check out these other episodes:</h2>
                <div className='episodes-recent'>
                    <OtherEpisodes />
                </div>
                <div className="episodes-related">
                    <OtherEpisodes />
                </div>
                <div class="more-episodes">
                    <a href="#">More Episodes <i class="fas fa-fast-forward"></i></a>
                </div>
            </section>
        </main>
    );
}

export default Homepage;