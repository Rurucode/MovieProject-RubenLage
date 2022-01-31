import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const RatingStars = (props) => {
  
   // --------*********----------
  return (
    <Box sx={{'& > legend': { mt: 2 },}}>
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={props.rating}
        onChange={(event, newValue) => {
          
          props.changeRating(newValue)
        }}
      />
      
    </Box>
  );
}

export default RatingStars;