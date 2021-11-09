import React, { useState} from 'react'
import { AddFeed } from './components/AddFeed';
import { CardGrid } from './components/CardGrid';
 
export const RSSApp = () => {   

    const url_feeds_saved = JSON.stringify(localStorage.getItem('feeds_saved'));
    const myArr = JSON.parse(url_feeds_saved);  
    const initial_value = myArr ? myArr.split(',') : [];
    const [feeds, setFeeds] = useState(initial_value.slice(0,6)); 
    function Bottom(){
        console.log("scroll")
    }
    return (
        <>
            <div onScroll={Bottom()}>
                <h2>RSS READER</h2>
                <AddFeed setFeeds={ setFeeds } />
                <hr />
                <div  className="container">     
                                
                    <div className="row" id="container-feeds" >
                        {                        
                            feeds.map(feed => (
                                <CardGrid
                                    key={ feed }
                                    feed_url={ feed }
                                />
                            ))
                        }
                    </div>
                </div> 
            </div>          

        </>
    )
}
