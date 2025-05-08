import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

 const Menubtn = () => {
    return (
      <Button
        variant="outlined"
        startIcon={<MoreVertIcon/>}
        sx={{
        
        
          borderRadius: '8px',
          padding: '0px 15px',
          color:'black',
          borderColor: 'black',
          alignItems:'center',
          width:'3px'
        }}
      >
        
      </Button>
    )
  }
  export default Menubtn