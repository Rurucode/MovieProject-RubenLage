import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { contextMovieList } from "../../../../context/contextMovieList";
import { useEffect, useContext, useState } from "react";
import { contextChangeRating } from '../../../../context/contextChangeRating';

const RatingStars = (props) => {
  // const [value, setValue] = React.useState(0);
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={props.rating}
        onChange={(event, newValue) => {
          // setValue(newValue);
          props.changeRating(newValue)
        }}
      />
      
    </Box>
  );
}

export default RatingStars;