import React from 'react';
import { useFetchFeed} from '../hooks/useFetchFeed';
import { CardGridItem } from './CardGridItem';

export const CardGrid = ({ feed_url }) => {
    
    const { data:feed, loading } = useFetchFeed( feed_url ); 
    return (
        <>            
            { loading && <p className="animate__animated animate__flash">Loading</p> }                            
                {                    
                        <CardGridItem 
                            key={ feed.title }
                            {...feed }
                        />                    
                }            
            
        </>
    )
}
