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
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',padding:"18px 16px 18px 16px"}}>
            {title()}
        </Box>
        <hr style={{height:'1px'}}></hr>
        <Box mt={1} sx={{display:'flex',flexDirection:'row',justifyContent:'center',padding:"20px"}}>
          {body()}
          </Box>
          <hr  style={{height:'1px'}}></hr>
        <Box mt={1}  sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',padding:"18px 16px 18px 16px"}}>
          {footer()}
          </Box> 
      </Box>
    </Modal>
  );
};

export default CustomModal;

// import React from 'react';
// import { MDBModal, MDBModalBody, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
// import CloseIcon from '@mui/icons-material/Close';

// interface Props {
//   open: boolean;
//   onClose: () => void;
//   title: () => React.ReactNode;
//   body: () => React.ReactNode;
//   footer: () => React.ReactNode;
//   animation?: boolean;
//   size?: 'small' | 'medium' | 'large';
//   centered?: boolean;
// }

// const getSizeStyle = (size: 'small' | 'medium' | 'large' | undefined) => {
//   switch (size) {
//     case 'small':
//       return { maxWidth: '300px' };
//     case 'medium':
//       return { maxWidth: '600px' };
//     case 'large':
//       return { maxWidth: '900px' };
//     default:
//       return { maxWidth: '600px' };
//   }
// };

// const CustomModal: React.FC<Props> = ({ open, onClose, title, body, footer, animation = false, size, centered = false }) => {
//   return (
//     <MDBModal show={open} backdrop={true} keyboard={true} onClose={onClose} animation={animation}>
//       <MDBModalDialog centered={centered} size={size}>
//         <MDBModalContent>
//           <MDBModalHeader style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             {title()}
//           </MDBModalHeader>
//           <hr style={{ border: 'none', borderTop: '1px solid #E0E0E0', margin: '0' }} />
//           <MDBModalBody style={{ padding: '5% 8%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             {body()}
//           </MDBModalBody>
//           <hr style={{ border: 'none', borderTop: '1px solid #E0E0E0', margin: '0' }} />
//           <MDBModalFooter>
//             {footer()}
//           </MDBModalFooter>
//         </MDBModalContent>
//       </MDBModalDialog>
//     </MDBModal>
//   );
// };

// export default CustomModal;
