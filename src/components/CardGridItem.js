import React from 'react';
import imgNotFound from '../assets/img/NoImage.png';
export const CardGridItem = ( {title, main_link, main_image, items=[] } ) => {    
    
    const list_links = ({link, title})=>{
        
        return (
            <a className="card-text" href={link} target="_blank" title={title}>
                <p className="card-text" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{title}</p>
            </a>
        );
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={main_image || imgNotFound} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {items.slice(0, 5).map(item => list_links(item))}
                <a href={main_link} className="btn btn-primary text-center" target="_blank">Ver más</a>
            </div>
        </div>
    )
}
