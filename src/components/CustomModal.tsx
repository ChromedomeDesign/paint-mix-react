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

const CustomModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  body,
  footer,
  animation = false,
  size,
  centered = false,
}) => {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition={animation}>
      <Box
      sx={{
        position: 'absolute' as 'absolute',
        top: centered ? '50%' : '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        outline:'none',
        ...getSizeStyle(size),
      }}
   
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            p: '21px 16px',
            fontSize:'20px'
          }}
        >
          {title()}
        </Box>
        <div style={{ border:'1px solid #E0E0E0'}} ></div>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            p: '20px',
          }}
        >
          {body()}
        </Box>
        <div style={{ border:'1px solid #E0E0E0'}} ></div>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            p: '21px',
          }}
        >
          {footer()}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
