import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: theme.palette.mode === 'light' ? '#15803d' : '#308fe8',
    },
  }));

export default function Counter({ title, value, total, text}) {
    const [progress, setProgress] = useState(0);
    const [ numerator, setNumerator] = useState(0);
    const currentValue: any = (Math.round((value/total) * 100)).toFixed(2);
    const incrementalNumerator = (currentValue * total);

    useEffect(() => {
      if (value) {
        setNumerator(value);
        setProgress(currentValue);
      }
    })

    return (
        <Box sx={{ flexGrow: 1 }} className="text-white">
            <span className='flex sx: z-10 w-full items-center justify-between text-lg lg:flex'>
            <p>{title}</p>
            <span className='flex flex-row'>
            <p>{numerator}</p><span>{`/`}</span><p className='font-bold'>{total}</p>  
            </span>
            
            </span>
            <BorderLinearProgress variant="determinate" value={progress} />  
            <span className='flex items-end italic text-xs mt-2'>
              <p>{text}</p>
            </span>
        </Box>
    )
}