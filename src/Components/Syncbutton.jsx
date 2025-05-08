import React from 'react'
import SyncIcon from '@mui/icons-material/Sync';
import { Button } from '@mui/material';

const Syncbutton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<SyncIcon/>}
      sx={{
      
      
        borderRadius: '8px',
        padding: '0px 0px',
        color:'black',
        borderColor: 'black',
        alignItems:'center',
        width:'3px'
      }}
      
    >
      
    </Button>
  )
}
export default Syncbutton




  
