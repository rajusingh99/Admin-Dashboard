import { Box, Typography } from '@mui/material'
import React from 'react'

const SmallPart = ({data}) => {
    const style ={
        display:'flex', flexDirection:'column', justifyContent:'space-between',
    }
    const style1 ={
        display:'flex', justifyContent:'space-between',
    }
 return (
    <Box display={'flex'} flexDirection={'column'}>
        <Box sx={style1}>
            <Box  sx={style}>
                <Typography>{data.firstRow.first.name}</Typography>
                <Typography sx={{color:data.firstRow.first.textColor}}>{data.firstRow.first.total}</Typography>
            </Box>
            <Box  sx={style}>
                <Typography>{data.firstRow.second.name}</Typography>
                <Typography sx={{color:data.firstRow.second.textColor}}>{data.firstRow.second.total}</Typography>
            </Box>
            <Box  sx={style}>
                <Typography>{data.firstRow.third.name}</Typography>
                <Typography sx={{color:data.firstRow.third.textColor}}>{data.firstRow.third.total}</Typography>
            </Box>        
        </Box>

        <Box sx={style1}>
                <Box  sx={style}>
                    <Typography>{data.secondRow.fourth.name}</Typography>
                    <Typography sx={{color:data.secondRow.fourth.textColor}}>{data.secondRow.fourth.total}</Typography>
                </Box>
                <Box  sx={style}>
                    <Typography>{data.secondRow.fifth.name}</Typography>
                    <Typography sx={{color:data.secondRow.fifth.textColor}}>{data.secondRow.fifth.total}</Typography>
                </Box>
                <Box  sx={style}>
                    <Typography>{data.secondRow.sixth.name}</Typography>
                    <Typography sx={{color:data.secondRow.sixth.textColor}}>{data.secondRow.sixth.total}</Typography>
                </Box>
        </Box>

        <Box sx={style1}>
                <Box  sx={style}>
                    <Typography>{data.thirdRow.seventh.name}</Typography>
                    <Typography sx={{color:data.thirdRow.seventh.textColor}}>{data.thirdRow.seventh.total}</Typography>
                </Box>
                <Box  sx={style}>
                    <Typography>{data.thirdRow.eighth.name}</Typography>
                    <Typography sx={{color:data.thirdRow.eighth.textColor}}>{data.thirdRow.eighth.total}</Typography>
                </Box>
                <Box  sx={style}>
                    <Typography>{data.thirdRow.ninth.name}</Typography>
                    <Typography sx={{color:data.thirdRow.ninth.textColor}}>{data.thirdRow.ninth.total}</Typography>
                </Box>
        </Box>
    </Box>
  )
}

export default SmallPart
