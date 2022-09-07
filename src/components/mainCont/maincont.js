import './maincont.scss';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { itemData } from './signature';


export const Maincont = () => {
    return ( 
        <div className="container my-5">
            
            <hr></hr>
            <p>Tu casa, tu hogar.</p>
            <div className= "imagenesGaleria">
               <ImageList sx={{ width: 1450, height: 314 }} variant="woven" cols={12} gap={8} className="firmGale">
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=161&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
        </div>
);
}
