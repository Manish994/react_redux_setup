import React from 'react';

// Material-UI
import { Grid, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const KYCImageCard = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   const itemData = [
      {
         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
         title: 'Breakfast',
         author: '@bkristastucchio',
         rows: 2,
         cols: 2,
         featured: true
      },
      {
         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
         title: 'Burger',
         author: '@rollelflex_graphy726'
      }
   ];

   return (
      <Grid item xs={12} md={12}>
         <SubCard title="KYC Image" sx={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            <ImageList sx={{ display: 'flex', flexDirection: 'row', overflow: 'auto' }}>
               <ImageListItem key={itemData[0].img} sx={{ flex: '0 0 auto', marginRight: 2 }}>
                  <img
                     srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                     src={`${itemData[0].img}?w=248&fit=crop&auto=format`}
                     alt={itemData[0].title}
                     loading="lazy"
                     height="100px"
                  />
                  <ImageListItemBar
                     title={itemData[0].title}
                     subtitle={itemData[0].author}
                     actionIcon={
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${itemData[0].title}`}>
                           <InfoIcon />
                        </IconButton>
                     }
                  />
               </ImageListItem>
               <ImageListItem key={itemData[1].img} sx={{ flex: '0 0 auto', marginRight: 2 }}>
                  <img
                     srcSet={`${itemData[1].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                     src={`${itemData[1].img}?w=248&fit=crop&auto=format`}
                     alt={itemData[1].title}
                     loading="lazy"
                  />
                  <ImageListItemBar
                     title={itemData[1].title}
                     subtitle={itemData[1].author}
                     actionIcon={
                        <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${itemData[1].title}`}>
                           <InfoIcon />
                        </IconButton>
                     }
                  />
               </ImageListItem>
            </ImageList>
         </SubCard>
      </Grid>
   );
};

export default KYCImageCard;
