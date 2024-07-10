// import React from 'react';
// import { TextField, styled } from '@mui/material';

// interface CustomInputProps {
//     width?: string;
//     label?:String;
//     customInputChange?: (value: string) => void;
//     value:String;
// }

// const CustomInputComponent: React.FC<CustomInputProps> = ({ width,label,value,customInputChange }) => {
//     const CssTextField = styled(TextField)({
//         '&.MuiTextField-root':{
//            width:'100%'
//         },
//         '& .MuiInputBase-input': {
//             color: '#424242',
//             padding: '14px 16px',
//             width: '100%',
//         },
//         '& .MuiInputLabel-root': {
//             top: '50%',
//             transform: 'translateY(-50%)',
//             transition: 'all 0.2s ease-out',
//             margin: '0 14px',
//             color: '#757575',
//         },
//         '& .MuiInputLabel-shrink': {
//             top: '9px',
//             transform: 'translateY(-100%)',
//             fontSize: '0.75rem',
//             margin: '0 14px',
//         },
//         '& label.Mui-focused': {
//             color: '#757575',
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: '#BDBDBD',
//         },
//         '& .MuiOutlinedInput-root': {
//             height: '46px',
//             width: width ? width : '100%',
//             '& fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//             '&:hover fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//         },
//     });
//     const inputChange = (event: { target: any; }) => {
//         const data:any  = event.target;
//         if (customInputChange) {
//             customInputChange(data?.value);
//         }
//       };
//     return (
//         <CssTextField label={label} value={value} id="custom-css-outlined-input" onChange={inputChange} />
//     );
// };

// export default CustomInputComponent;
// import React from 'react';
// import { TextField, styled } from '@mui/material';

// type Props = {
//     width?: string;
//     label?: string;
//     name?: string;
//     value?: string;
//     customInputChange?: (value: any) => void;
// };

// const CustomInputComponent: React.FC<Props> = ({ width, label, name, value, customInputChange }) => {
//     const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         // Asserting the type of event.target to HTMLInputElement
//         const target = event.target as HTMLInputElement;
        
//         customInputChange(target.value);
//     };

//     const CssTextField = styled(TextField)({
//         '& .MuiInputBase-input': {
//             color: '#424242',
//             padding: '14px 16px',
//             width: '100%',
//         },
//         '& .MuiInputLabel-root': {
//             top: '50%',
//             transform: 'translateY(-50%)',
//             transition: 'all 0.2s ease-out',
//             margin: '0 14px',
//             color: '#757575',
//         },
//         '& .MuiInputLabel-shrink': {
//             top: '9px',
//             transform: 'translateY(-100%)',
//             fontSize: '0.75rem',
//             margin: '0 14px',
//         },
//         '& label.Mui-focused': {
//             color: '#757575',
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: '#BDBDBD',
//         },
//         '& .MuiOutlinedInput-root': {
//             height: '46px',
//             width: width ? width : '100%',
//             '& fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//             '&:hover fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: '#BDBDBD',
//                 borderWidth: '1px',
//             },
//         },
//     });

//     return (
//         <CssTextField
//             label={label}
//             name={name}
//             value={value}
//             onChange={handleRadioChange}
//         />
//     );
// };

// export default CustomInputComponent;
import React, { ChangeEvent } from 'react';
import { TextField, styled } from '@mui/material';

type Props = {
  label?: string;
  name?: string;
  value?: string;
  width?: string;
  type?: string;
  Height? : string;
  customInputChange?: (value: string) => void;
};

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#757575',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
    borderWidth:'1px'
  },
          '& .MuiInputLabel-root': {
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'all 0.2s ease-out',
            margin: '0 14px',
            color: '#757575',
        },
          '& .MuiInputLabel-shrink': {
            top: '9px',
            transform: 'translateY(-100%)',
            fontSize: '0.75rem',
            margin: '0 14px',
        },
  '& .MuiOutlinedInput-root': {
    height: '46px',
    backgroundColor: '#ffff',
    borderRadius:'4px',
    '& fieldset': {
      borderColor: '#E0E3E7',
      borderWidth:'1px'
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
      borderWidth:'1px'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#BDBDBD',
      borderWidth:'1px'
    },
  },
});

const CustomInputComponent: React.FC<Props> = ({ label, name,Height, value,width,type,customInputChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const data = e.target.value;
    customInputChange?.(data);
  };

  return (
    <CssTextField
      label={label}
      type={type? type : "text"}
      focused
      name={name}
      value={value}
      onChange={handleInputChange}
      variant="outlined"
      sx={{width:width ? width :'100%'}}
    />
  );
};

export default CustomInputComponent;



