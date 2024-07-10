import React, { useState } from "react";
import CardComponent from "components/CardComponent";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from "components/SearchBar";
import { Button } from "@mui/material";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [pp, setPp] = useState(false); // State to manage pp

    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = (data:any) => {
        console.log(data);
        if(data === "logout"){
            localStorage.removeItem("isLoggedIn");
            navigate('/')
        }
        navigate(data)
        setAnchorEl(null);
    };


      const handleClose1 = () => {
        navigate('/', { state: { pp: true } });
        setAnchorEl(null);
      };

    return (
        <div >
            <CardComponent width="100%" radius="8px" height="60px" customIndex={99999}>
                <div style={{display:'flex',width:"100%",flexDirection:'row',justifyContent:'space-between',alignItems:'center',height: '100%',}}>
                    <button style={{height:'44px',width:'100px',border:'1px solid #000000',backgroundColor:'transparent',borderRadius:'8px'}} onClick={()=>navigate('/')}>LOGO</button> 
                <div style={{ display: 'flex',justifyContent: 'flex-end',margin:'3px', justifyItems: 'center', alignItems: 'center', width: "100%", height: '100%' }}>
                    <SearchBar />
                    <Button  onClick={handleClick}>
                    <MenuIcon sx={{ fontSize: '40px', color: '#1266F1', cursor: 'pointer' }}/>

                    </Button>
                </div>
                </div>
            </CardComponent>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={()=>handleClose('')}
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
                    style: { width: '214px',height:'425px' }
                }}
                style={{ marginTop: '12px' }}
            >
                <div style={{ padding: '8px' }}>
                    <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>USER</p>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose('/')}>Order</MenuItem>
                    <MenuItem sx={{width:'100%'}} onClick={()=>handleClose('/JobQueue')}>Job Queue</MenuItem>
                </div>
                <div style={{ padding: '8px' }}>
                    <p style={{ color: '#1266F1', paddingLeft: '16px', fontWeight: '600px', fontFamily: 'sans-serif', fontSize: '16px' }}>ADMIN</p>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose('/ColorManagement')}>Color Management</MenuItem>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose('/UserAdministration')}>User Administration</MenuItem>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose('/CostCalculator')}>Cost Calculator</MenuItem>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose('/StoreLocations')}>Store Locations</MenuItem>
                    <MenuItem sx={{width:'100%',borderBottom:'1px solid #E0E0E0'}} onClick={()=>handleClose1()}>Change Password</MenuItem>
                    <MenuItem onClick={()=>handleClose('logout')}>Logout</MenuItem>
                </div>
            </Menu>
        </div>
    );
};

export default Header;

