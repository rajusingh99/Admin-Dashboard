import React from 'react'
import {  Grid } from '@mui/material'
import AppCurrentVisits from './Graph';

const AreaGraphPart = () => {
  return (
       <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Area"
            chart={{
              series: [
                { label: 'Rajouri Garden', value: 7000 },
                { label: 'Patel Nagar', value: 1100 },
                { label: 'Vasant Kunj', value: 3500 },
                { label: 'Tilak Nagar', value: 1700 },
                { label: 'Dwaraka', value: 1750 },
                { label: 'Saket', value: 2200 },
              ],
            }}
          />
        </Grid>
  )
}

export default AreaGraphPart;
