import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onClose: () => void;
  title: () => React.ReactNode;
  body: () => React.ReactNode;
  footer: () => React.ReactNode;
  animation?: boolean;
  size?: 'small' | 'medium' | 'large';
  centered?: boolean;
}

const getSizeStyle = (size: 'small' | 'medium' | 'large' | undefined) => {
  switch (size) {
    case 'small':
      return { width: '300px' };
    case 'medium':
      return { width: '600px' };
    case 'large':
      return { width: '900px' };
    default:
      return { width: '600px' };
  }
};

const CustomModal: React.FC<Props> = ({ open, onClose, title, body, footer, animation = false, size, centered = false }) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition={animation} >
      <Box
        sx={{
          position: 'absolute',
          border: 'none',
          top: centered ? '50%' : '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius:'8px',
          boxShadow: 24,
          padding: '8px 0 8px 0',
          ...getSizeStyle(size),
        }}
      >
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',padding:"0 4px 0 4px"}}>
          <Typography variant="h6" component="h2">
            {title()}
          </Typography>
          {/* <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton> */}
        </Box>
        <hr></hr>
        <Box mt={1} sx={{display:'flex',flexDirection:'row',justifyContent:'center',padding:"0 4px 0 4px"}}>
          {body()}
          </Box>
          <hr></hr>
        <Box mt={1}  sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',padding:"0 4px 0 4px"}}>
          {footer()}
          </Box> 
      </Box>
    </Modal>
  );
};

export default CustomModal;
