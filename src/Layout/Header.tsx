// import React from "react";
// import CardComponent from "components/CardComponent";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchBar from "components/SearchBar";

// const Header = () => {
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//       setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     return (
//         <div style={{ padding: '10px 10px 0px 10px' }}>
//             <CardComponent width="100%" radius="8px" height="60px">
//                 <div style={{ display: 'flex', justifyContent: 'flex-end',justifyItems:'center',alignItems: 'center',width:"100%",height: '100%',padding:'10px'}}>
//                     <SearchBar/>
//                     <MenuIcon sx={{ fontSize: '40px',color:'#1266F1',cursor: 'pointer' }} onClick={handleClick} />
//                 </div>
//             </CardComponent>
//             <Menu
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'right',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                 }}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                     style: { width: '214px' }
//                 }}
//                 style={{ marginTop: '12px' }}
//             >
//                 <div style={{ padding: '8px' }}>
//                     <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>USER</p>
//                     <MenuItem onClick={handleClose}>Order</MenuItem>
//                     <MenuItem onClick={handleClose}>Job Queue</MenuItem>
//                 </div>
//                 <div style={{ padding: '8px' }}>
//                     <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>ADMIN</p>
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My Account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                 </div>
//             </Menu>
//         </div>
//     );
// }

// export default Header;


import React from "react";
import CardComponent from "components/CardComponent";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from "components/SearchBar";
import { Button } from "@mui/material";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ padding: '10px 10px 0px 10px' }}>
            <CardComponent width="100%" radius="8px" height="60px">
                <div style={{ display: 'flex', justifyContent: 'flex-end', justifyItems: 'center', alignItems: 'center', width: "100%", height: '100%', padding: '10px' }}>
                    <SearchBar />
                    <Button  onClick={handleClick}>
                    <MenuIcon sx={{ fontSize: '40px', color: '#1266F1', cursor: 'pointer' }}/>

                    </Button>
                </div>
            </CardComponent>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    style: { width: '214px' }
                }}
                style={{ marginTop: '12px' }}
            >
                <div style={{ padding: '8px' }}>
                    <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>USER</p>
                    <MenuItem onClick={handleClose}>Order</MenuItem>
                    <MenuItem onClick={handleClose}>Job Queue</MenuItem>
                </div>
                <div style={{ padding: '8px' }}>
                    <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>ADMIN</p>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </div>
            </Menu>
        </div>
    );
};

export default Header;
